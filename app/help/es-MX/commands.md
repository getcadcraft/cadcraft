---
title: Referencia de comandos
summary: Cada comando de la aplicación de dibujo CadCraft, con sus alias, las preguntas que hace, sus opciones y valores predeterminados.
keywords: comandos, alias, lista de comandos, área, perímetro, measuregeom, línea, pline, círculo, arco, recortar, desfase, dimlinear, bloque, insertar, presentación, trazar, zoom, ayuda, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicar, selectall
from: 979ffe3b
---

Escriba un nombre de comando o un alias y pulse {{key:Enter}} o {{key:Space}}. No importan las mayúsculas, y un `_`, `-`, `.` o `'` al inicio se ignora. Escriba `HELP` (o `?`) para imprimir una lista corta de todos los comandos en el historial de la línea de comandos; pulse {{key:F1}} para esta ayuda.

Cómo leer los avisos: las opciones van entre corchetes, y elige una escribiendo sus letras en mayúscula (`D` para Diámetro). Un valor predeterminado va entre paréntesis angulares; pulse {{key:Enter}} para aceptarlo. Cuando se pide un punto, puede hacer clic o escribir cualquiera de los formatos de [Entrada de coordenadas y distancias](topic:coordinate-entry). Cuando se pide una distancia, puede escribir un número o hacer clic en dos puntos.

Pulsar {{key:Enter}} donde se requiere un punto o un objeto, sin valor predeterminado, termina el comando. {{key:Esc}} lo cancela. Lo que haga un comando es un paso de deshacer.

## Dibujo

### LINE

Alias: `L`. Segmentos rectos, cada uno su propio objeto.

- `Precise el primer punto` (Enter: iniciar desde el último punto que dio)
- `Precise el punto siguiente [Deshacer]`, repetido. Después de dos segmentos: `[Deshacer/Cerrar]`.
- `U` quita el último segmento, `C` cierra hasta el primer punto y termina. Enter termina.

### PLINE

Alias: `PL`. Una polilínea de segmentos rectos y arcos.

- `Precise el punto inicial`
- `Precise el punto siguiente [Arco/Cerrar/Deshacer]` (Cerrar cuando hay dos segmentos)
- `A` cambia a arcos: `Precise el punto final del arco [Línea/Cerrar (CL)/Deshacer]`. Cada arco continúa tangente al segmento anterior. `L` vuelve a líneas, `CL` cierra con un arco.
- Enter termina; la polilínea queda abierta.

### CIRCLE

Alias: `C`.

- `Precise el punto central del círculo [3P/2P/Ttr (tan tan radio)]`
- `Precise el radio del círculo [Diámetro] <último radio>`; `D` pide `Precise el diámetro del círculo`.
- `2P`: dos extremos de un diámetro. `3P`: tres puntos sobre el círculo.
- `T` (también el comando `TTR`, y {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Radius}}): `Precise el punto sobre el objeto para la primera tangente del círculo`, luego la segunda, y después el radio (Enter: el último). El círculo toca ambos objetos (líneas, arcos, círculos, segmentos de polilínea, también dentro de bloques); de los círculos que lo hacen, se toma el que toca más cerca de sus designaciones. "Circle does not exist" cuando ninguno encaja.
- `TTT` (o {{ui:Draw}} › {{ui:More}} › {{ui:Circle: Tan, Tan, Tan}}): tres objetos; el círculo que toca los tres, el más cercano a sus designaciones (tres líneas dan el círculo interior o uno exterior, según dónde designe).

### ARC

Alias: `A`.

- `Precise el punto inicial del arco [Centro]`, `Precise el segundo punto del arco`, `Precise el punto final del arco`: un arco por tres puntos.
- `C`: `Precise el punto central del arco`, `Precise el punto inicial del arco`, `Precise el punto final del arco`. El arco va en sentido antihorario desde el inicio hasta el final.

### RECTANG

Alias: `REC`, `RECTANGLE`. Una polilínea cerrada.

- `Precise la primera esquina`, `Precise la esquina opuesta`. Escriba `@ancho,alto` para la segunda esquina.

### POLYGON

Alias: `POL`. Un polígono regular como polilínea cerrada.

- `Introduzca el número de lados <4>` (3 a 1024)
- `Precise el centro del polígono`
- `Introduzca una opción [Inscrito en círculo/Circunscrito alrededor del círculo] <I>`
- `Precise el radio del círculo`: haga clic o escriba un punto; su distancia fija el tamaño y su dirección gira el polígono.

### ELLIPSE

Alias: `EL`.

- `Precise el extremo del eje de la elipse [Centro]`, `Precise el otro extremo del eje`, `Precise la distancia al otro eje`
- `C`: `Precise el centro de la elipse`, `Precise el extremo del eje`, luego la distancia al otro eje.
- `I` (`Isocírculo`, solo mientras {{cmd:ISODRAFT}} está activo): centro, y luego radio o `Diámetro`: la elipse que un círculo muestra en el plano isométrico actual.

### HATCH

Alias: `H`, `BH`, `BHATCH`; o {{ui:Hatch}} en la barra de herramientas. Imprime primero el patrón, la escala y el ángulo actuales.

- `Designe el punto interior [Seleccionar objetos/Patrón/Escala/Ángulo]`, repetido (`Deshacer` cuando ya hay un área): cada clic agrega el área cerrada que lo rodea, con las formas cerradas dentro como islas. Enter hace un solo sombreado con todas ellas.
- `S`: `Seleccione objetos cerrados` (polilíneas cerradas, círculos, elipses cerradas).
- `P`: `Introduzca un nombre de patrón, SOLID, o ? para la lista <actual>`. `SC`: `Precise la escala del patrón`. `A`: `Precise el ángulo del patrón`.
- `G` (Degradado): el relleno es un degradado en lugar de un patrón. Vea {{cmd:GRADIENT}} para sus preguntas.

Vea [Sombreado y áreas de relleno](topic:hatch).

### GRADIENT

Alias: `GD`. Rellena un área con un degradado de uno o dos colores. Primero pregunta el degradado, luego sigue como lo hace {{cmd:HATCH}} (`Designe el punto interior`, `S` para objetos cerrados, {{key:Enter}} para terminar).

- `Introduzca una opción de degradado [Tipo/Un color/DOs colores/Ángulo/Centrado/eXit] <X>`, repetido; cada vez imprime el degradado tal como está.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED`, o uno de ellos invertido (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Bastan las primeras letras.
- `O`: un color, luego su tono de 0 a 1 (0 lo oscurece a negro, 0.5 es el color mismo, 1 lo aclara a blanco). `DO`: el primer y el segundo color. Un color es un número de 1 a 255, tres números como `255,128,0`, o `#rrggbb`.
- `A`: el ángulo en que corre el degradado. `C`: centrado Sí o No (No mueve el centro del degradado hacia un lado).
- Rechaza un color o un tipo que no conoce, y un tono fuera de 0 a 1.

{{cmd:HATCHEDIT}} `G` y Propiedades (Degradado) cambian un degradado después, o convierten cualquier sombreado en uno. Un degradado se dibuja en pantalla y se traza. DWG 2004 y posteriores lo guardan como un sombreado de degradado real; DXF 2000 y DWG 2000 lo guardan para CadCraft, y otros programas ven un relleno sólido en el primer color.

### HATCHGENERATEBOUNDARY

Alias: `HGB`. Vuelve a crear el contorno a partir de un sombreado que lo perdió. `Seleccione sombreados` (o selecciónelos antes), luego `Vincular cada sombreado a su nuevo contorno, para que el sombreado lo siga? [Sí/No] <Sí>`.

- Cada bucle del sombreado se vuelve una polilínea cerrada en la capa del sombreado; las nuevas polilíneas quedan seleccionadas. Un borde curvo vuelve como los trozos rectos cortos que mantiene el sombreado.
- Con Sí el sombreado sigue a su nuevo contorno, como un sombreado hecho con {{cmd:HATCH}}. Un paso de deshacer.
- Lo indica cuando no se seleccionó ningún sombreado.

### POINT

Alias: `PO`; o {{ui:Draw}} › {{ui:More}} › {{ui:Point}}. Objetos punto, uno por clic, hasta Enter.

- `Precise un punto`

### XLINE

Alias: `XL`; o {{ui:Draw}} › {{ui:More}} › {{ui:Construction line}}. Líneas de construcción, sin fin en ambos sentidos. Vea [Líneas de construcción y rayos](topic:construction-lines).

- `Precise un punto [Hor/Ver/Áng/Bisec/Desfase]`, luego `Precise el punto por el que pasa` para cada línea, hasta Enter.
- `A`: `Introduzca el ángulo de la línea de construcción [Referencia] <0>`; `R` pide primero `Designe un objeto de línea`.
- `B`: `Precise el vértice del ángulo`, `Precise el punto inicial del ángulo`, luego `Precise el punto final del ángulo` para cada línea.
- `O`: `Precise la distancia de desfase [Por punto] <Por punto>`, luego `Designe un objeto de línea` y `Precise el lado para desfasar` (o `Precise el punto por el que pasa`) para cada línea.

### RAY

Sin alias; o {{ui:Draw}} › {{ui:More}} › {{ui:Ray}}. `Precise el punto inicial`, luego `Precise el punto por el que pasa` para cada rayo, hasta Enter.

### TEXT

Alias: `DT`, `DTEXT`; o {{ui:Text}} en la barra de herramientas. Texto de una línea; cada línea es su propio objeto.

- `Precise el punto inicial del texto [Justificar]`
- `J`: `Introduzca una opción [Izquierda/Centro/Derecha/Medio/TL/MC] <I>`, luego `Precise el punto de inserción del texto`
- `Precise la altura <altura de texto actual>`
- `Precise el ángulo de rotación del texto <0>`
- `Introduzca el texto`, repetido: cada Enter inicia la línea siguiente. Enter en una línea vacía termina. {{key:Space}} escribe un espacio aquí.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} pone marcas en una línea, arco, círculo, polilínea, spline o elipse que lo cortan en partes iguales. Designe el objeto y luego indique el número de partes (2 a 32767). Un objeto abierto recibe una marca menos que partes; uno cerrado recibe también una marca en su inicio. El objeto en sí no se corta. Las marcas son puntos; `Bloque` pide en cambio un bloque de este dibujo y si gira para seguir el objeto. Las longitudes a lo largo de splines y elipses se miden con cuerdas cortas. Rechaza texto, sombreados y otros objetos que no tienen longitud.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} pone una marca cada longitud dada a lo largo de una línea, arco, círculo, polilínea, spline o elipse, contando desde el extremo más cercano a donde designó (un objeto cerrado: desde su inicio). Dé la longitud escribiéndola o con dos puntos. El extremo lejano de un objeto abierto no recibe marca. `Bloque` coloca un bloque en cada marca en lugar de un punto. Rechaza una longitud de 0, una mayor que el objeto, y una que daría más de 32767 marcas.

### BOUNDARY

Alias: `BO`, `BPOLY`. {{cmd:BOUNDARY}} crea una polilínea cerrada alrededor del área que contiene el punto que designa, a partir de las líneas, arcos, círculos, polilíneas y curvas que la delimitan en pantalla. Los trozos sobre un arco o círculo vuelven como segmentos de arco; los trozos de elipses y splines vuelven como segmentos rectos cortos. Con `Islas` activado (el ajuste inicial) cada área cerrada dentro de ella también recibe su polilínea. Siga designando puntos; Enter termina. Los objetos que delimitan el área se quedan como están. Lo indica cuando ningún área cerrada contiene el punto.

### BLEND

{{cmd:BLEND}} dibuja una spline entre los extremos de dos curvas abiertas. Designe cada curva cerca del extremo que quiere unir. `CONtinuity` elige `Tangente` (la spline sale y llega a lo largo de ambas curvas) o `Suave` (además dobla como se doblan ellas en los extremos); la elección se conserva durante la sesión. Las dos curvas no cambian. Rechaza objetos cerrados y dos extremos que ya coinciden.

### REGION

Alias: `REG`. {{cmd:REGION}} convierte objetos cerrados en regiones: áreas planas que puede unir, cortar y medir. Seleccione círculos, polilíneas cerradas, elipses cerradas o splines cerradas, o líneas, arcos y polilíneas abiertas que cierran un bucle de extremo a extremo; cada bucle se vuelve una región y reemplaza a los objetos de los que salió. Los arcos siguen siendo arcos; las elipses y splines se vuelven segmentos rectos cortos. Lo que no está cerrado ni cierra un bucle se queda como está, y lo indica con cuántos. En el dibujo una región es una o más polilíneas cerradas unidas como un grupo sin nombre, así que un clic selecciona la región completa y una copia es una región propia; otros programas que abren el archivo ven polilíneas cerradas.

Con regiones en el dibujo, {{cmd:UNION}}, {{cmd:SUBTRACT}} e {{cmd:INTERSECT}} en la pestaña 2D trabajan sobre regiones: `UNION` une las regiones seleccionadas en una (las regiones separadas se vuelven una región de varios contornos), `SUBTRACT` pide las regiones de las que restar y luego las que se quitan (un hueco sigue siendo parte de la región), `INTERSECT` conserva el área que todas comparten. Cada una indica el área del resultado y es un paso de deshacer. Se rechazan cuando no quedaría nada o cuando nada se comparte. En la pestaña 3D, y en un dibujo sin regiones, los mismos comandos trabajan sobre sólidos como antes.

## Modificar

### MTEXT

Alias: `MT`, `T`; o {{ui:Paragraph}} en la barra de herramientas. Texto de párrafo que se ajusta a un ancho, escrito en el lugar.

- `Precise la primera esquina`
- `Precise la esquina opuesta [Altura/Justificar/Interlineado/Rotación/Ancho]`: el ancho entre las dos esquinas es donde el texto se ajusta. `H` pide `Precise la altura`, `J` `Introduzca la justificación [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Introduzca el factor de interlineado (0.25 a 4)`, `R` `Precise el ángulo de rotación`, `W` `Precise el ancho (0 para no ajustar)` y omite la segunda esquina.
- Luego se abre un cuadro sobre el dibujo: escriba, {{key:Enter}} para un nuevo párrafo, {{key:Mod+Enter}} o un clic fuera para terminar, {{key:Esc}} para cancelar. Su barra fija la altura, el interlineado, el ancho y la justificación. Vea [Agregar texto y etiquetas](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Alias: `ED`, `DDEDIT`; o haga doble clic en un texto. `Seleccione un texto para editar`, repetido hasta {{key:Enter}}: cada uno se abre en el mismo cuadro. Iniciado sobre un texto seleccionado o con doble clic, edita ese y termina.

### ERASE

Alias: `E`, `DELETE`; o pulse {{key:Delete}} con objetos seleccionados.

- `Designe objetos` (se omite cuando ya hay objetos seleccionados)

### MOVE

Alias: `M`.

- `Designe objetos`
- `Precise el punto base [Desplazamiento]`, `Precise el segundo punto`
- `D`: `Precise el desplazamiento`, escrito como `dx,dy`.

### COPY

Alias: `CO`, `CP`. Copias tantas veces como dé puntos.

`Matriz` en el aviso del segundo punto hace una fila de una vez: dé el número de elementos (el original cuenta como uno), luego el punto donde va la primera copia; las demás siguen con el mismo espaciado. `Ajustar` hace que ese punto sea el lugar de la última copia, y las demás se reparten entre ambas.

- `Designe objetos`
- `Precise el punto base [Desplazamiento]`
- `Precise el segundo punto [Deshacer]`, repetido hasta Enter. `U` quita la última copia.

### ROTATE

Alias: `RO`.

- `Designe objetos`, `Precise el punto base`
- `Precise el ángulo de rotación <último ángulo>`: grados, positivo en sentido antihorario; o haga clic en un punto para girar hacia él.

### SCALE

Alias: `SC`.

- `Designe objetos`, `Precise el punto base`
- `Precise el factor de escala`: escriba un factor como `0.5` o `2`. Un punto en el que hace clic da su distancia al punto base como factor.

### MIRROR

Alias: `MI`.

- `Designe objetos`
- `Precise el primer punto de la línea de simetría`, `Precise el segundo punto de la línea de simetría`
- `¿Borrar los objetos de origen? [Sí/No] <N>`

### ALIGN

Alias: `AL`; o {{ui:Modify}} › {{ui:More}} › {{ui:Align}}.

- `Designe objetos`
- `Precise el primer punto de origen`, `Precise el primer punto de destino`
- `Precise el segundo punto de origen (Enter para continuar)`, `Precise el segundo punto de destino`
- `Precise el tercer punto de origen (Enter para continuar)`, `Precise el tercer punto de destino`
- Con dos pares: `¿Escalar los objetos según los puntos de alineación? [Sí/No] <N>`

Vea [Alinear objetos](topic:modify-objects#align-objects).

### ALIGNTO

- `Designe objetos` (o la selección), `Alinear [Izquierda/Centro/Derecha/Superior/Medio/Inferior] <Izquierda>`, `A [Selección/Primero/Último/Punto] <Selección>`; `P` pide el punto. La selección se queda.

### DISTRIBUTE

- `Designe objetos` (al menos tres), `Distribuir [Horizontalmente/Verticalmente] <Horizontalmente>`, `Espaciar por igual [Centros/Espacios] <Espacios>`. Los dos externos se quedan; la selección se queda.

### ALIGNPANEL

Alias: `ALP`; o {{ui:Modify}} › {{ui:More}} › {{ui:Align and distribute}}. Abre el panel que ejecuta ALIGNTO y DISTRIBUTE con clics.

### LASER

Alias: `LASERCUT`; o {{ui:View}} › {{ui:More}} › {{ui:Laser…}}. Abre el panel Láser sobre el dibujo: qué hace cada capa (cortar, marcar, grabar, rellenar, imagen), la vista previa, el código G GRBL para guardar, y el encuadre y envío por Web Serial. Vea [Enviar un dibujo a una cortadora láser](topic:laser-cutting).

### STRETCH

Alias: `S`; o {{ui:Stretch}}. `Designe objetos para estirar`: arrastre ventanas de captura (o escriba `C`) sobre los extremos para mover. `Precise el punto base [Desplazamiento]`, `Precise el segundo punto`. Los puntos dentro de las ventanas se mueven: extremos de línea, vértices de polilínea (los segmentos de arco conservan su altura), puntos de cota; círculos, elipses, textos, puntos y bloques se mueven enteros cuando su centro o punto de inserción está dentro. Una selección hecha antes del comando conserva las ventanas de captura (y lazos) que la hicieron, así que estiran de la misma forma. Sin ventana, los objetos se mueven enteros.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Alias: `AR`; o {{ui:Array}}. `Designe objetos`, luego `Introduzca el tipo de matriz [Rectangular/POlar] <Rectangular>` (solo ARRAY).

- Rectangular empieza con 4 columnas × 3 filas, espaciado 1.5 veces el tamaño de los objetos, mostrado como vista previa. `Introduzca una opción [COUnt/Espaciado/COLumnas/Filas/eXit] <X>`: `COU` pide columnas y filas, `S` las distancias entre columnas y entre filas (negativo va a la izquierda o hacia abajo), `COL` y `R` una dirección cada una.
- Polar pide `Precise el punto central de la matriz`, empieza con 6 elementos alrededor del todo, girados. `Introduzca una opción [Elementos/Ángulo de llenado/GIrar elementos/eXit] <X>`: `I` elementos, `F` el ángulo a llenar (+ antihorario, − horario), `ROT` Sí o No.
- {{key:Enter}} (eXit) crea las copias, como objetos simples. Un paso de deshacer.
- `AS` (ASociativa) alterna entre copias simples y una matriz que sigue siendo editable: un objeto que cambia después con {{cmd:ARRAYEDIT}}, por sus pinzamientos o en Propiedades. La elección se recuerda ({{cmd:ARRAYASSOCIATIVITY}}); empieza en copias simples.

### ARRAYPATH

Copias a lo largo de una curva. `Designe objetos`, luego `Designe la curva de trayectoria`: una línea, arco, círculo, elipse, polilínea o spline (no uno de los objetos que se repiten). La trayectoria empieza en su extremo más cercano a los objetos, y el primer elemento son los objetos donde están.

- `Introduzca una opción [Método/Elementos/eSpaciado/ALinear/ASociativa/eXit] <X>`, con vista previa. `M`: `Dividir` reparte los elementos por igual a lo largo de toda la trayectoria, `Medir` pone uno cada tanto a lo largo de ella. `I`: el número de elementos (con Medir, 0 significa tantos como quepan; un número más allá del final se ajusta a lo que cabe). `SP`: la distancia entre elementos a lo largo de la trayectoria (cambia a Medir). `AL`: Sí hace que cada elemento gire para seguir la trayectoria, No los deja derechos.
- `AS` como en {{cmd:ARRAY}}. Con ella activa, la matriz guarda su propia copia de la forma de la trayectoria: editar después la curva no mueve los elementos.
- Rechaza una trayectoria que no es una curva, y un solo elemento.

### ARRAYEDIT

Cambia una matriz hecha con ASociativa. `Designe la matriz` (o selecciónela antes). Imprime cómo está ahora la matriz, luego pregunta hasta {{key:Enter}}:

- Rectangular: `COL` columnas y su espaciado, `R` filas y su espaciado, `A` el ángulo en que corren las columnas.
- Polar: `I` elementos, `F` el ángulo de llenado, `ROT` girar elementos Sí o No.
- Trayectoria: `M` Dividir o Medir, `I` elementos, `SP` espaciado, `AL` alinear con la trayectoria.
- `S` (Origen) abre los objetos que la matriz repite, por separado, como el editor de bloques. Dibuje y edite allí; {{cmd:ARRAYCLOSE}} guarda o descarta, y cada elemento sigue.
- `REP` (REemplazar): `Designe los objetos de reemplazo`, `Precise el punto base de los objetos de reemplazo`, luego haga clic en los elementos a reemplazar, {{key:Enter}}. Esos elementos muestran el reemplazo en su lugar; los objetos de reemplazo salen del dibujo y viven en la matriz. `RES` (REStablecer) muestra otra vez los objetos origen en cada elemento.
- Cada cambio es un paso de deshacer. Rechaza copias simples, una referencia de bloque simple y una matriz en una capa bloqueada.

Los mismos números están en Propiedades bajo Matriz, y la matriz tiene pinzamientos: su punto base la mueve, el pinzamiento del segundo elemento fija el espaciado, el pinzamiento después del último elemento fija la cantidad (polar: el segundo elemento fija cuántos elementos, el último el ángulo de llenado). {{cmd:EXPLODE}} vuelve a convertir una matriz en copias simples.

### ARRAYCLOSE

Termina {{cmd:ARRAYEDIT}} Origen: `¿Guardar los cambios en los objetos origen de la matriz? [Guardar/Descartar] <Guardar>`. Lo indica cuando no hay objetos origen de matriz abiertos. {{cmd:BCLOSE}} hace lo mismo.

### ARRAYASSOCIATIVITY

`Introduzca el nuevo valor para ARRAYASSOCIATIVITY (1 = las matrices siguen siendo editables, 0 = copias simples)`. Define con qué empiezan {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR y {{cmd:ARRAYPATH}}; su opción `AS` cambia el mismo ajuste. Se recuerda en este navegador.

### OFFSET

Alias: `O`. Líneas, arcos, círculos y polilíneas.

Cuando una polilínea se aleja y sus segmentos rectos se separan en una esquina, {{cmd:OFFSETGAPTYPE}} decide cómo se cierra el hueco.

- `Precise la distancia de desfase [Por punto] <última distancia, o Por punto>`
- `Designe el objeto a desfasar`, luego `Precise el punto en el lado a desfasar` (o, con Por punto, `Precise el punto por el que pasa`), repetido hasta Enter.

### OFFSETGAPTYPE

- `Huecos de esquina del desfase: 0 extender, 1 empalme, 2 chaflán`: cómo {{cmd:OFFSET}} cierra los huecos en las esquinas externas de una polilínea. `0` alarga los segmentos hasta que se encuentran (el ajuste inicial), `1` los une con un arco alrededor de la esquina original, `2` con un corte recto. Las esquinas internas y los segmentos de arco no se afectan. Se conserva durante esta sesión.

### EXTRIM

{{cmd:EXTRIM}} recorta todo lo que está de un lado de una arista. Designe la arista de corte (una línea, arco, círculo, polilínea, elipse, spline o línea de construcción), luego un punto en el lado que se va a despejar: cada línea, arco, círculo, polilínea y línea de construcción que cruce la arista pierde su parte de ese lado, donde empieza en la arista. Mientras elige el lado, las piezas que se irían siguen al puntero. Para una arista cerrada los lados son dentro y fuera. Los objetos que solo tocan la arista, y los textos, sombreados, splines y elipses que la cruzan, se quedan como están. Un paso de deshacer.

### TRIMEXTENDMODE

- `Introduzca el nuevo valor para TRIMEXTENDMODE (1 Rápido, 0 Estándar)`: cómo empiezan {{cmd:TRIM}} y {{cmd:EXTEND}}. `1` Rápido: cada objeto es una arista de corte o límite. `0` Estándar: piden primero las aristas. También `(setvar "TRIMEXTENDMODE" 0)` en LISP.

### TRIM

Alias: `TR`. Imprime primero `Ajustes actuales: modo Rápido (TRIMEXTENDMODE 1), aristas: sin prolongar, arrastrar dibuja una trayectoria`. En modo Rápido cada objeto visible es una arista de corte, y un objeto que nada cruza se borra; en modo Estándar pide primero `Seleccione las aristas de corte (Enter = todos los objetos)` y corta solo en ellas.

- `Designe el objeto a recortar o Mayús+clic para alargar [Aristas de corte/Borde/Captura/Modo/Arista/Borrar/Deshacer]`, repetido: haga clic en la pieza a quitar (se muestra en gris y punteada mientras el puntero está sobre ella), arrastre una trayectoria a través de varias piezas (todas se van en un paso), o haga clic en dos puntos vacíos para un borde entre ellos. {{key:Shift}} alarga en su lugar. `T` elige las aristas de corte (modo Estándar), `F` pide puntos de borde, `C` dos esquinas de ventana (las piezas parcialmente dentro se van), `O` pide `Introduzca una opción de modo de recorte [Rápido/Estándar]`, `E` pide `Introduzca un modo de extensión de arista implícita [Alargar/No alargar]` (EDGEMODE), `R` borra los objetos que seleccione, `U` deshace la última designación o arrastre. Enter termina. Vea [Recortar y alargar](topic:trim-and-extend).

- Un clic en un sombreado lo corta: las aristas de corte dividen el área sombreada, y la pieza en la que hizo clic se quita (no queda ningún contorno dibujado donde estaba). El sombreado conserva su patrón o degradado; un sombreado que estaba vinculado a su contorno deja de estarlo, porque ya no lo rellena. Lo indica cuando ninguna arista de corte divide el sombreado allí, cuando el clic está fuera del sombreado, y cuando no quedaría nada (use {{cmd:ERASE}}). Una trayectoria o borde arrastrado no corta sombreados.

### EXTEND

Alias: `EX`. Lo mismo que TRIM al revés: `Designe el objeto a alargar o Mayús+clic para recortar [Aristas límite/Borde/Captura/Modo/Arista/Deshacer]`. Un clic alarga el extremo más cercano hasta el siguiente límite; una trayectoria o borde arrastrado alarga cada objeto que cruza; {{key:Shift}} recorta. `B` elige aristas límite (modo Estándar). Modo y Arista se comparten con TRIM.

### LINKVIEWS

Alias: `SYNCVIEWS`; o {{ui:View}} › {{ui:More}} › {{ui:Link the panes' views}}, o el icono de enlace en las pestañas del dibujo. `Vincular las vistas de los paneles [ON/OFF]` (Enter cambia al otro estado): mientras está activo, un desplazamiento o zoom en el panel activo mueve cada panel que muestra el mismo tipo de espacio. Vea [Dividir la pantalla](topic:split-screen).

### OPENIN3D

Sin alias; o {{ui:View}} › {{ui:More}} › {{ui:Open in ModelCraft}} donde la aplicación de modelado 3D recibe un dibujo entregado. Lo abre allí en una nueva pestaña, como DWG (no se sube nada). Si el navegador bloquea la pestaña, lo indica.

### LASSOMODE

`Introduzca el nuevo valor para LASSOMODE (1 = lazo, 0 = rectángulo)`: lo que dibuja presionar y arrastrar en un lugar vacío. Lo mismo que Parámetros › CadCraft › Arrastrar para seleccionar. Vea [Selección con lazo](topic:lasso-selection).

### FILLET

Alias: `F`. Líneas, arcos, círculos y polilíneas. Imprime primero `Ajustes actuales: Modo = RECORTAR, Radio = 0`.

- `Designe el primer objeto [Deshacer/Polilínea/Radio/Recortar/Varios]`
  - `R` pide `Precise el radio del empalme <último>`. `T` pide `Introduzca una opción de modo de recorte [Recortar/No recortar]`: con No recortar los objetos quedan como están y solo se agrega el arco.
  - `M` mantiene el comando para más esquinas hasta {{key:Enter}}; `U` quita la última esquina sin salir del comando.
  - `P` pide `Designe la polilínea 2D [Radio]` y redondea cada esquina donde se encuentran dos segmentos rectos. Los empalmes que ya tiene se reemplazan por el nuevo radio; el radio 0 los quita. Las esquinas cuyos lados son demasiado cortos para el radio se dejan y se cuentan.
- `Designe el segundo objeto o Mayús+clic para aplicar la esquina [Radio]`. Mantenga {{key:Shift}} mientras hace clic para una esquina aguda, sin importar el radio.

Haga clic en cada objeto en la parte que quiere conservar. Dos líneas que no se tocan se alargan. Dos líneas paralelas reciben un semicírculo sobre el hueco, en el extremo de la primera línea más cercano a su clic. Un círculo nunca se corta. Dos segmentos de una misma polilínea contiguos reciben el arco dentro de la polilínea; una polilínea y otro objeto funcionan cuando el corte cae en el primer o último segmento de la polilínea.

### CHAMFER

Alias: `CHA`. Líneas y los segmentos rectos de polilíneas. Imprime primero las distancias actuales (o longitud y ángulo).

- `Designe la primera línea [Deshacer/Polilínea/Distancia/Ángulo/Recortar/Método/Varios]`
  - `D` pide `Precise la primera distancia del chaflán <última>` y `Precise la segunda distancia del chaflán <la primera>`: la primera se corta de la primera línea que designe, la segunda de la otra.
  - `A` pide `Precise la longitud del chaflán en la primera línea` y `Precise el ángulo del chaflán desde la primera línea`.
  - `E` (Método) elige cuál de las dos usa el siguiente chaflán. `T`, `M`, `U` y `P` funcionan como en {{cmd:FILLET}}.
- `Designe la segunda línea o Mayús+clic para aplicar la esquina [Distancia/Ángulo/Método]`. {{key:Shift}}+clic hace una esquina aguda.

Una distancia mayor que la línea se rechaza (`Distance is too large.`).

### BREAK y BREAKATPOINT

Alias: `BR`. `Designe el objeto` (donde hace clic es el primer punto), `Precise el segundo punto de corte [Primer punto]`; `F` pide `Precise el primer punto de corte` y `Precise el segundo punto de corte`. La parte entre ellos se va; en un círculo, en sentido antihorario desde el primer punto. BREAKATPOINT pide `Precise el punto de corte` y lo divide en dos ahí (no un círculo).

### LENGTHEN

Alias: `LEN`. `Designe un objeto para medir [Delta/Porcentaje/Total/diNámico]`: un clic imprime `Longitud actual` (y el ángulo incluido de un arco) y vuelve a preguntar. `DE` pide `Introduzca la longitud delta (negativo acorta) [Ángulo]`, `P` `Introduzca la longitud en porcentaje`, `T` `Precise la longitud total [Ángulo]`, `DY` arrastra. Luego `Designe un objeto para cambiar [Deshacer]`, repetido: el extremo más cercano al clic se mueve. Líneas, arcos y polilíneas abiertas.

### JOIN

Alias: `J`. `Designe los objetos a unir`. Líneas, arcos y polilíneas abiertas que se encuentran de extremo a extremo se vuelven polilíneas (cerradas cuando la cadena se cierra); las líneas en una misma recta se vuelven una línea; arcos de un mismo círculo se vuelven un arco o el círculo. El historial indica cuántos objetos se unieron y cuántos no.

### MATCHPROP

Alias: `MA`, `PAINTER`. `Designe el objeto origen`, luego `Designe los objetos destino [Ajustes]` y {{key:Enter}}. Copia la capa y el color, y entre objetos del mismo tipo la altura y ancho del texto, los tamaños de cota o el patrón del sombreado. `S` pide `Active o desactive una propiedad [Color/Capa/Texto/Cota/Sombreado]`, repetido hasta {{key:Enter}}; la elección se recuerda durante la sesión.

### EXPLODE

Alias: `X`. Las polilíneas se vuelven líneas y arcos, las referencias de bloque se vuelven sus objetos, las cotas se vuelven líneas, flechas y texto. Una matriz que sigue siendo editable ({{cmd:ARRAYEDIT}}) se vuelve copias simples de sus objetos.

- `Designe objetos`

### GROUP

Alias: `G`. {{cmd:GROUP}} da a los objetos seleccionados un nombre que comparten. Seleccione los objetos, luego escriba un nombre (sin espacios; `?` lista los grupos; Enter crea un grupo sin nombre) y, para un grupo con nombre, una descripción opcional. Desde entonces un clic en uno de ellos, o una ventana que incluya uno, los selecciona todos, así que se mueven, copian y borran juntos; cada objeto sigue siendo un objeto propio. Un objeto puede estar en varios grupos. Una copia de un grupo completo es un nuevo grupo sin nombre; una copia de un miembro solo se une al grupo. Los grupos pertenecen al espacio en que se hicieron (el modelo o una hoja). Se conservan al guardar como DWG o DXF y volver a abrir el archivo en CadCraft; los archivos DXF 2000 también los llevan como objetos de grupo para otros programas, y los grupos hechos en otro programa se leen al abrir un DXF o DWG.

### UNGROUP

{{cmd:UNGROUP}} separa grupos: seleccione objetos de los grupos (cada grupo al que pertenecen se separa) o escriba `Name` y el nombre del grupo. Los objetos se quedan en el dibujo. Un paso de deshacer devuelve los grupos.

### GROUPEDIT

{{cmd:GROUPEDIT}} cambia un grupo. Designe uno de sus objetos, o `Name` y su nombre; un grupo que ya está seleccionado se toma tal como está. Luego: `Add` objetos (uno a uno, no grupo por grupo), `Remove` objetos, `REName` el grupo, cambiar su `Description`, o fijar `Selectable` (si un clic en un objeto selecciona el grupo completo). `eXit` o Enter termina. Un grupo sin objetos desaparece.

### PICKSTYLE

- `Selección de grupo: 0 un clic selecciona un objeto, 1 su grupo completo`: con `1` (el ajuste inicial) un clic o una ventana sobre un objeto agrupado selecciona el grupo completo; con `0` objetos sueltos, para editar un miembro. Se conserva durante esta sesión.

## Portapapeles

El portapapeles propio de CadCraft: funciona dentro de un dibujo, entre dibujos y entre pestañas de CadCraft en este navegador. Vea [Copiar, pegar y duplicar](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, o {{ui:Copy}} en el grupo {{ui:Edit}}. Copia objetos al portapapeles, con los bloques y capas que usan. Los objetos quedan seleccionados.

- `Designe objetos para copiar` (se omite cuando ya hay objetos seleccionados)

### CUTCLIP

{{key:Mod+X}}, o {{ui:Cut}} en el menú {{ui:More}}. Copia objetos al portapapeles y luego los borra (un paso de deshacer).

- `Designe objetos para cortar` (se omite cuando ya hay objetos seleccionados)

### COPYBASE

Copia objetos al portapapeles con un punto base que designe; al pegar, ese punto se coloca.

- `Precise el punto base`
- `Designe objetos para copiar`

### PASTECLIP

{{key:Mod+V}}, o {{ui:Paste}} en el grupo {{ui:Edit}}. La copia sigue al cursor, colgando de la esquina inferior izquierda de su extensión (o de su centro, o del punto de `COPYBASE`; vea [Configuración de CadCraft](topic:settings)).

- `Precise el punto de inserción`

Los objetos pegados quedan seleccionados. Un bloque que el dibujo ya tiene con el mismo nombre conserva la definición de este dibujo.

Cuando un área copiada en MarkupCraft es más reciente que lo que copió CadCraft (y tiene menos de 6 horas), {{key:Mod+V}} y `PASTECLIP` pegan esa área en su lugar: vea `PASTEAREA`.

### PASTEAREA

Alias: `PAREA`. {{ui:Paste a copied area}} en el menú {{ui:More}}. Pega un área copiada con {{ui:Copy area}} en MarkupCraft como imagen a su tamaño real. Vea [Imágenes en un dibujo](topic:pictures).

- `Precise la esquina inferior izquierda del área copiada`
- `Escale su tamaño en papel por (100 para una hoja 1:100; Puntos: dos puntos sobre ella y su distancia real) [Puntos] <1>` (solo cuando la hoja no tenía escala de dibujo): un número, {{key:Enter}} para el tamaño en papel, o `P`, luego `Primer punto sobre el área pegada`, `Segundo punto sobre el área pegada` y su distancia real.

### PASTEORIG

{{key:Mod+Shift+V}}, o {{ui:Paste in place}} en el menú {{ui:More}}. Pega en las coordenadas desde donde se copiaron los objetos. No pregunta nada.

### DUPLICATE

Alias: `DUP`. {{key:Mod+D}}, o {{ui:Duplicate and move}} en el menú {{ui:More}}. Una copia de los objetos se mueve con el puntero desde donde está; {{key:Esc}} no deja nada. No usa el portapapeles.

- `Designe objetos para duplicar` (se omite cuando ya hay objetos seleccionados)
- `Precise dónde va la copia (Esc no deja nada)`: haga clic, escriba un punto, `@dx,dy` (desde donde estaba el puntero), o una distancia hacia el cursor.

### SELECT

Pide `Designe objetos` (con todas las opciones de abajo) y deja seleccionado lo que eligió, para el siguiente comando o para `P` más adelante.

### QSELECT

Alias: `QS`. En el navegador, el cuadro de diálogo {{ui:Quick select}} (vea [Seleccionar objetos](topic:select-objects#select-by-a-rule-quick-select)). Sin él, la línea de comandos pide `Introduzca el tipo de objeto`, `Introduzca la propiedad`, `Introduzca el operador [=/<>/>/</*/Seleccionar todo] <=>` y `Introduzca el valor`. Las coincidencias pasan a ser la selección.

### SELECTSIMILAR

Alias: `SIM`. `Designe objetos [SEttings]` (o la selección actual): selecciona cada objeto del mismo tipo con la misma capa y color (y nombre de bloque, patrón de sombreado). `SE` pide `Active o desactive una propiedad [LAyer/COlor/NAme/PAttern/HEight]`, repetido hasta {{key:Enter}}.

### FIND

Sin alias; o {{ui:Edit}} › {{ui:More}} › {{ui:Find and replace}}. En el navegador, el cuadro de diálogo {{ui:Find and replace}} (vea [Agregar texto y etiquetas](topic:text#find-and-replace-words)). Sin él: `Introduzca el texto a buscar`, luego `Introduzca el texto de reemplazo (Enter: seleccionar lo encontrado)`. Busca en textos, valores de atributos y textos de cota, en la pestaña abierta o en la selección.

### SELECTALL y DESELECT

`SELECTALL` (alias `AI_SELALL`, {{key:Mod+A}}) selecciona cada objeto que puede editar en la pestaña abierta. `DESELECT` (alias `AI_DESELECT`, `SELECTNONE`; o {{key:Esc}}) borra la selección.

## Cotas

### DIMLINEAR

Alias: `DLI`, `DIMLIN`. Distancia horizontal o vertical.

- `Precise el origen de la primera línea de extensión [Designar objeto]` (Enter o `S`: `Designe el objeto a acotar`, luego haga clic en una línea, arco, círculo o segmento de polilínea)
- `Precise el origen de la segunda línea de extensión`
- `Precise la ubicación de la línea de cota [Texto/Horizontal/Vertical/Girada]`. `T` pide texto (`<>` es el valor medido), `H` y `V` fijan la dirección, `R` pide `Precise el ángulo de la línea de cota <0>`.

### DIMALIGNED

Alias: `DAL`, `DIMALI`. La distancia real entre dos puntos.

- Orígenes como en {{cmd:DIMLINEAR}}, luego `Precise la ubicación de la línea de cota [Texto]`.

### DIMANGULAR

Alias: `DAN`, `DIMANG`.

- `Designe un arco, círculo o línea, o Enter para un vértice`
- Arco: su ángulo. Círculo: `Precise el segundo extremo del ángulo`. Línea: `Designe la segunda línea`. Enter: `Precise el vértice del ángulo`, `Precise el primer extremo del ángulo`, `Precise el segundo extremo del ángulo`.
- `Precise la ubicación de la línea de cota [Texto]`: haga clic dentro del ángulo para medirlo.

### DIMRADIUS y DIMDIAMETER

Alias: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Designe un arco o círculo`, luego `Precise la ubicación de la línea de cota [Texto]`.

### DIMCONTINUE

Alias: `DCO`, `DIMCONT`. Continúa desde la última cota lineal o alineada hecha (o pide `Designe una cota lineal o alineada`).

- `Precise el origen de la segunda línea de extensión [Deshacer]`, repetido hasta Enter.

### DIMBASELINE

Alias: `DBA`, `DIMBASE`. Como {{cmd:DIMCONTINUE}}, pero cada cota empieza desde el primer origen y se apila más lejos.

### DIMORDINATE

Alias: `DOR`, `DIMORD`. `Precise la ubicación de la característica`, luego `Precise el extremo de la directriz [Xdatum/Ydatum/Texto]`. Escribe a qué distancia está la característica del origen del UCS a lo largo de X o de Y, en una directriz: una directriz que va sobre todo hacia arriba o abajo lee X, una que va de lado lee Y; `Xdatum` y `Ydatum` lo fijan. Fije primero el origen con {{cmd:UCS}} (sin uno, es el 0,0 del dibujo). Los pinzamientos mueven la característica, el origen y el extremo de la directriz, y el valor sigue. Se guarda como una cota de ordenada real en DWG y DXF. Rechaza un extremo de directriz sobre la propia característica.

### DIMARC

Alias: `DAR`. `Designe un arco o segmento de arco de polilínea`, luego `Precise la ubicación de la cota de longitud de arco [Texto]`. Mide a lo largo del arco (no de la cuerda) y escribe el símbolo de arco antes del valor. Rechaza un círculo completo, una línea o un segmento recto de polilínea. Un DWG lo guarda como cota de longitud de arco; un DXF lo guarda como cota angular con la longitud como texto, y CadCraft lo vuelve a abrir como cota de longitud de arco.

### DIMJOGGED

Alias: `DJO`, `JOG`. `Designe un arco o círculo`, `Precise la ubicación de sustitución del centro`, `Precise la ubicación del quiebre`. Una cota de radio para una curva cuyo centro está lejos o fuera de la hoja: la línea de cota empieza en el punto que da en lugar del centro, con un quiebre, y aun así escribe el radio real. Un DWG lo guarda como cota de radio quebrada; un DXF lo guarda como cota de radio, y CadCraft lo vuelve a abrir quebrado.

### DIMJOGLINE

Alias: `DJL`. `Designe la cota para agregar un quiebre [Quitar]`, luego `Precise la ubicación del quiebre (o pulse Enter)`. Pone un símbolo de quiebre en la línea de una cota lineal o alineada, para mostrar que la distancia no está dibujada a escala; el valor no cambia. `Quitar` lo borra. Rechaza otros tipos de cota.

### QDIM

Sin alias. `Designe la geometría a acotar`, luego `Precise la posición de la línea de cota [Continua/Escalonada/Línea base/Ordenada/Radio/Diámetro/puntoDeReferencia]`. Acota varios objetos en un solo paso, desde los extremos de líneas y segmentos de polilínea, centros de círculos y arcos, puntos y referencias de bloque. Una posición arriba o abajo de los objetos mide a través, una posición al lado mide hacia arriba. `Continua` encadena los puntos, `Línea base` mide todos desde el primero, `Escalonada` anida pares desde el centro hacia afuera, `Ordenada` da a cada punto su distancia desde el punto de referencia (`puntoDeReferencia` elige uno nuevo), `Radio` y `Diámetro` acotan cada círculo y arco designado. El modo se recuerda. Todo lo que crea es un paso de deshacer. Lo indica cuando hay menos de dos puntos, o no hay arcos ni círculos para Radio y Diámetro.

### DIMBREAK

Alias: `DBREAK`. `Designe las cotas para agregar o quitar cortes`, luego `Cortar donde cruzan otros objetos [Auto/Manual/Quitar] <Auto>`. `Auto` deja un hueco en la línea de cota y en las líneas de extensión donde cruza otro objeto, y recalcula los huecos cuando esos objetos o la cota se mueven. `Manual` (una cota) pide dos puntos y deja un hueco entre ellos. `Quitar` quita todos los huecos. El hueco mide 1.5 veces la altura del texto de la cota.

### DIMSPACE

Sin alias. `Designe la cota base`, `Designe las cotas a espaciar`, `Introduzca el valor de espaciado o Auto <Auto>`. Mueve las líneas de cota de cotas lineales y alineadas paralelas (o angulares sobre el mismo vértice) para que queden a la misma distancia, medida desde la cota base, cada una del lado en que está. `0` las alinea con la base; `Auto` es el doble de la altura del texto de la cota base. Las cotas que no son paralelas a la base se dejan como están.

### DIMINSPECT

Sin alias. `Designe las cotas`, `Forma del marco de inspección [Redondo/Angular/Ninguno/quitar] <Redondo>`, `Introduzca la etiqueta`, `Introduzca la frecuencia de inspección <100%>`. Dibuja un marco alrededor del valor, con una etiqueta antes y la frecuencia de inspección después. `quitar` quita el marco. El texto de tolerancia se queda con el valor.

### DIMOVERRIDE

Alias: `DOV`, `DIMOVER`. `Introduzca el nombre de la variable de cota a sobrescribir o Borrar`, `Introduzca el nuevo valor para …`, de nuevo hasta Enter, luego `Designe las cotas`. Cambia esos ajustes solo en las cotas seleccionadas; el estilo de cota no cambia. Toma las variables que son un número o un interruptor (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Borrar` devuelve las cotas seleccionadas a su estilo. Rechaza un nombre que no es una variable así y un valor que no puede tomar.

### DIMREASSOCIATE

Alias: `DRE`, `DIMREASSOC`. `Designe las cotas`, luego para cada una sus orígenes de línea de extensión (`Precise el primer origen de línea de extensión en un objeto`: ajuste a un extremo o al punto medio de una línea, a un vértice de polilínea, a un centro; Enter deja libre ese punto), o para un radio, diámetro, radio quebrado o cota de longitud de arco `Designe un arco o círculo`. La cota queda entonces ligada a esos objetos: cuando se mueven o cambian de tamaño, sigue y se mide de nuevo en el mismo paso de deshacer. Mover a mano un punto ligado, o borrar el objeto, termina ese vínculo. El vínculo se guarda en DWG y DXF 2000 como datos propios de CadCraft; otros programas ven una cota normal.

### DIMDISASSOCIATE

Alias: `DDA`, `DIMDISASSOC`. `Designe las cotas`. Las libera de los objetos a los que están ligadas; nada se mueve.

### CENTERMARK

Alias: `CM`, `DIMCENTER`, `DCE`. `Designe el círculo o arco para agregar marca de centro`, de nuevo hasta Enter. Dibuja una cruz en el centro y cuatro líneas de centro hasta justo más allá de la curva (tipo de línea CENTER), como líneas simples en la capa actual; el tamaño sale de la altura de flecha y la escala general de los ajustes de cota actuales, y gira con el UCS. No siguen al círculo si se mueve.

### CENTERLINE

Alias: `CL`. `Designe la primera línea`, `Designe la segunda línea`. Dibuja una línea a medio camino entre dos líneas (a lo largo de la bisectriz cuando se encuentran), un poco más larga que ellas, en tipo de línea CENTER. Es una línea simple: no sigue a las dos líneas.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Sin alias. Cada uno pide `Introduzca el nuevo valor para … <actual>` y fija ese tamaño para las cotas **nuevas**: escala general, altura del texto, tamaño de flecha, lugares decimales (hasta 8), espacio alrededor del texto, extensión más allá de la línea de cota, desfase desde el origen. Vea [Fijar tamaños de cota](topic:dimension-settings).

### DIMLUNIT

Ajuste de cota: el formato solo de las cotas nuevas (1 científico, 2 decimal, 3 ingeniería, 4 arquitectónico, 5 fraccionario).

### DIMSTYLE y -DIMSTYLE

Alias: `DST`, `DDIM`, `D`. El administrador de estilos de cota: {{ui:Set current}}, {{ui:New…}}, {{ui:Modify…}}, {{ui:Rename…}}, {{ui:Delete}}, {{ui:Compare…}}, {{ui:Apply to selected}}. `-DIMSTYLE` en la línea de comandos: `Estilo de cota [Restaurar/Guardar/Eliminar/Aplicar/Comparar/cambiarNombre/Listar]`. Vea [Fijar tamaños de cota](topic:dimension-settings#named-dimension-styles).

### DIMEDIT y DIMTEDIT

`DIMEDIT` (`DED`): `Edición de cota [Inicio/Nuevo/Girar/Oblicua] <Inicio>`, luego las cotas (o las que ya estén seleccionadas). Nuevo pide el texto (`<>` = la medida); Girar un ángulo (0 devuelve el texto a su sitio); Oblicua el ángulo de las líneas de extensión desde el eje X (Enter = ninguno; solo cotas lineales y alineadas). `DIMTEDIT` (`DIMTED`): `Texto de cota [Izquierda/Derecha/Centro/Inicio/Ángulo] <Centro>`. Vea [Fijar tamaños de cota](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Alias: `DTU`. `Unidades en el texto de las cotas nuevas [Unidades del dibujo/mm/cm/m/km]`, o con cotas seleccionadas `Unidades en el texto de las cotas seleccionadas`. Escribe la longitud medida en esa unidad, con la unidad después (DIMLFAC y un sufijo DIMPOST); `D` vuelve a las unidades del dibujo. Vea [Cotas en mm, cm, m o km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Alias: `RC`. Imprime `Longitud del arco: … Tipo: …`, luego `Precise el primer punto [Longitud de arco/Objeto/Rectangular/Poligonal/A mano alzada]`. Rectangular pide `Precise la esquina opuesta`; Poligonal `Precise el siguiente punto (Enter cierra la nube) [Deshacer]`; A mano alzada sigue al puntero hasta un clic o {{key:Enter}}; `O` pide `Designe el objeto` y `¿Invertir la dirección? [Sí/No] <N>` y convierte el objeto en la nube. `A` pide `Precise la longitud de cada arco`. `R`, `P` y `F` eligen el tipo para la siguiente nube. El resultado es una polilínea cerrada de arcos.

### MLEADER

Alias: `MLD`; o {{ui:Leader}}. `Precise la ubicación de la flecha de la directriz [Tamaño de flecha/Distancia de aterrizaje/Bloque]`, `Precise la ubicación de aterrizaje de la directriz`, luego el texto en el cuadro sobre el dibujo (o, sin él, `Introduzca el texto (una línea vacía termina)`). `Bloque` pide primero un nombre de bloque, y la multidirectriz muestra ese bloque en lugar del texto. Más líneas de directriz: {{cmd:MLEADEREDIT}}. Se guarda como multidirectriz real en DWG; DXF guarda las líneas, la flecha y el texto que dibuja.

### MLEADEREDIT

Alias: `MLE`. `Designe una multidirectriz`, luego `Precise la ubicación de la flecha de la directriz [Quitar directrices/Contenido de bloque/Contenido de texto]`: cada punto agrega una línea de directriz desde una nueva flecha hasta el mismo aterrizaje, hasta Enter. `Quitar directrices` quita la línea de directriz en la que hace clic (una multidirectriz conserva al menos una). `Contenido de bloque` pide un nombre de bloque y muestra ese bloque en lugar del texto (le pide sus atributos); `Contenido de texto` devuelve el texto. Cada línea de directriz tiene su propio pinzamiento. Un DWG guarda todas las líneas de directriz y el bloque en una sola multidirectriz.

### MLEADERALIGN

Alias: `MLA`. `Designe multidirectrices`, luego `Designe la multidirectriz a la que alinear [Distribuir/Espaciado/Usar espaciado actual]` y `Precise la dirección`. Mueve los aterrizajes de las otras multidirectrices (y su texto o bloque) hasta la línea que pasa por el aterrizaje de la elegida, en esa dirección; las flechas se quedan donde apuntan. `Espaciado` también les da una distancia igual; `Distribuir` pide dos puntos y las reparte por igual entre ellos. Necesita al menos dos multidirectrices.

### MLEADERCOLLECT

Alias: `MLC`. `Designe multidirectrices`, luego `Precise la ubicación de la multidirectriz reunida [Vertical/Horizontal]` (Enter conserva el lugar de la primera). Hace una sola multidirectriz con varias: el contenido de bloque va a un bloque nuevo que contiene cada bloque lado a lado o uno debajo del otro; el contenido de texto se vuelve una nota con una línea por cada una. La primera multidirectriz conserva sus líneas de directriz; las demás se quitan. Rechaza una mezcla de contenido de texto y de bloque.

### TABLE

Alias: `TB`; o {{ui:Annotate}} › {{ui:More}} › {{ui:Table}}. Crea una tabla: un solo objeto que se mueve, copia, gira, escala y traza como cualquier otro, con sus celdas guardadas como datos.

- `Número de filas de datos o [Pegar/Archivo/Estilo] <3>`, luego `Número de columnas <3>`, `Altura del texto` y `Esquina superior izquierda de la tabla`. La tabla recibe una fila de título (una celda combinada) y una fila de encabezado encima de las filas de datos.
- `P`: una tabla desde celdas de hoja de cálculo en el portapapeles (texto con un tabulador entre celdas). Pulsar {{key:Ctrl+V}} con esas celdas en el portapapeles hace lo mismo, salvo que la copia propia de CadCraft sea más reciente (o que CadCraft no pueda saberlo: entonces pega su propia copia y lo indica). `F`: una tabla desde un archivo `.csv` o separado por tabuladores. La primera fila se vuelve la fila de encabezado; los anchos de columna se ajustan al texto.
- `S`: elija el estilo de tabla para esta tabla (vea {{cmd:TABLESTYLE}}).
- Rechaza un número de filas o columnas que no es entero, y más celdas de las que cabe en una tabla (2000 filas, 200 columnas, 40 000 celdas).
- {{cmd:EXPLODE}} convierte una tabla en líneas y texto. Guardada como DWG, una tabla es un objeto de tabla real que otros programas pueden editar; guardada como DXF, es un bloque que la dibuja, y CadCraft la abre otra vez como tabla.

### TABLEDIT

Alias: `TABLEEDIT`, `TABEDIT`; o haga doble clic en una celda. Edita una tabla.

- `Designe una celda para escribir (Enter para terminar) o [Fila/Columna/Tamaño/Combinar/Separar/Alinear/Altura/Tipo/Limpiar]`. Haga clic en una celda, o con una tabla seleccionada escriba su nombre (`B3`: columna B, fila 3; la fila de título es la fila 1). En el navegador se abre un cuadro sobre la celda: {{key:Enter}} conserva el texto, {{key:Tab}} pasa a la celda siguiente, {{key:Alt+Enter}} inicia una nueva línea, {{key:Esc}} deja la celda como estaba.
- Un texto que empieza con `=` es una fórmula: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, con `+ - * / ^`, paréntesis y funciones como `sqrt` y `round`. La celda muestra el valor; una fórmula que se nombra a sí misma, una celda fuera de la tabla o una celda sin número muestra `####` y la línea de comandos indica por qué.
- `R` / `C`: `Insertar` o `Borrar` filas o columnas en una celda designada (cuántas, y arriba o abajo, a la izquierda o a la derecha). Las fórmulas siguen a las celdas que nombran.
- `S`: el ancho de la columna y la altura de la fila. Una fila nunca es más baja que lo que necesita su texto. Una tabla seleccionada también tiene un pinzamiento en el borde de cada columna y de cada fila.
- `M`: combinar desde una celda designada hasta otra; `U`: separar. `A`: alineación (`TL` arriba a la izquierda … `MC` centro medio … `BR` abajo a la derecha). `H`: la altura del texto propia de esta celda (0 = la del estilo). `K`: convierte la fila en fila de título, de encabezado o de datos. `CL`: vacía la celda.
- Rechaza una tabla en una capa bloqueada, borrar todas las filas o columnas, y una combinación que partiría en dos otra celda combinada.

### TABLESTYLE

Alias: `TS`. Lista los estilos de tabla con cuántas tablas usa cada uno, luego `Estilo de tabla: [Nuevo/Fijar/Editar/Eliminar/Aplicar]`.

- Un estilo guarda la altura del texto y la alineación de las filas de título, de encabezado y de datos, el margen de la celda, y qué bordes se dibujan (exteriores, entre filas, entre columnas).
- `N` crea un estilo a partir del actual y lo vuelve actual; `S` fija el estilo actual (las tablas nuevas lo toman); `E` edita uno: las tablas que lo usan se vuelven a dibujar; `A` da a las tablas seleccionadas el estilo actual; `D` elimina uno (no Estándar, no el actual; las tablas que lo usaban conservan su aspecto).
- Los estilos se guardan con el dibujo (DWG y DXF).

### TABLEEXPORT

Guarda lo que muestra una tabla como archivo CSV (una fórmula como su valor). `Designe una tabla`, o selecciónela antes. Las celdas de texto que empiezan con `=`, `+`, `-` o `@` reciben un `'` al inicio para que una hoja de cálculo no las ejecute.

### TABLEPASTE

Alias: `PASTETABLE`. Crea una tabla desde celdas de hoja de cálculo en el portapapeles, luego pregunta su esquina superior izquierda. Igual que {{cmd:TABLE}} › `Pegar`.

### DATALINK

Alias: `DL`. `Vínculo de datos: [Nuevo/Listar/Quitar] <Nuevo>`. `N` pide un archivo CSV, coloca una tabla de él y recuerda el nombre del archivo; `L` lista los vínculos con su archivo, tamaño, cuándo se leyó y cuántas tablas lo usan; `R` quita un vínculo (sus tablas quedan como tablas simples).

### DATALINKUPDATE

Alias: `DLU`. Lee otra vez el archivo de un vínculo de datos y vuelve a llenar las tablas vinculadas (se agregan o quitan filas y columnas para igualarlas). Un navegador no puede abrir un archivo por sí solo, así que pide que vuelva a elegir el archivo. Con varios vínculos, pregunta cuál.

### FIELD

Pone un campo en el dibujo: texto que se calcula solo. `Campo: [Fecha/NombreArchivo/Hoja/Propiedad/Objeto/Expresión/Código] <Fecha>`:

- `D`: ahora, o la fecha guardada, creada o trazada, y un formato (`yyyy-MM-dd`, `d MMMM yyyy`, `HH:mm`). `F`: el nombre del archivo, con o sin su extensión. `S`: el número de la hoja, su título, o cuántas hojas hay. `P`: una propiedad del dibujo por nombre (vea {{cmd:DWGPROPS}}). `O`: designe un objeto, luego qué leer (área, longitud, perímetro, radio, diámetro, capa, nombre, x, y, texto, rotación, color) y los decimales. `E`: una fórmula. `C`: un texto con códigos escritos tal cual, como `Hoja %<sheetnumber>% de %<sheetcount>%`.
- Luego `Designe un texto, una celda de tabla o un bloque con atributos para ponerlo (Enter: un texto nuevo)`: un texto designado recibe el campo después de lo que contiene; una celda de tabla igual; una referencia de bloque pregunta qué atributo; {{key:Enter}} pide una altura y un punto para un texto nuevo.
- En pantalla un campo tiene un fondo gris claro; un trazado o un PDF nunca lo tiene. Escribir a mano sobre el texto de un campo termina el campo. Un campo que no se puede calcular muestra `####`.
- El campo de un objeto encuentra su objeto por la clave que CadCraft guarda en los objetos (Parámetros › CadCraft › Archivos aptos para fusionar); con las claves desactivadas se rechaza.

### UPDATEFIELD

Alias: `UPDATEFIELDS`. `Designe los objetos cuyos campos actualizar (Enter: todos los campos) o [Ajustes]`. `S` fija cuándo se actualizan los campos solos: escriba las letras de `O` abrir, `S` guardar, `P` trazar, `R` regenerar (las cuatro al inicio), o `NONE`.

### DWGPROPS

Alias: `DRAWINGPROPS`. Lista las propiedades del dibujo, luego `Cambiar: [Título/Asunto/Autor/Compañía/Palabras clave/coMentarios/cUstom/Quitar/eXit]`. Las primeras seis son las que muestra el panel {{ui:Drawing details}}; `U` agrega su propio nombre y valor, `R` quita uno. Los campos las leen (`%<prop:title>%`, `%<prop:Client>%`) y se actualizan de inmediato. Rechaza un nombre propio que es uno de los integrados o que contiene `%`, `<`, `>`, una comilla o una barra invertida.

## Paramétrico

Vea [Restringir un dibujo](topic:constraints) y [Usar parámetros y ecuaciones](topic:parameters). Las restricciones trabajan en la pestaña {{ui:Model}}.

### GEOMCONSTRAINT y los comandos GC

Alias `GCON`: `Introduzca el tipo de restricción [Horizontal/Vertical/Perpendicular/PAralela/Tangente/Coincidente/CONcéntrica/COLineal/Simétrica/Igual/Fija] <Horizontal>`, luego las preguntas de ese comando.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Designe un objeto [2Puntos] <2Puntos>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Designe el primer objeto`, `Designe el segundo objeto` (el segundo se mueve).
- {{cmd:GCCOINCIDENT}}: `Designe el primer punto [Objeto/Autorrestringir] <Objeto>`, `Designe el segundo punto [Objeto] <Objeto>`.
- {{cmd:GCFIX}}: `Designe el punto [Objeto] <Objeto>`.
- {{cmd:GCSYMMETRIC}}: `Designe el primer objeto [2Puntos] <2Puntos>`, `Designe el segundo objeto`, `Designe la línea de simetría`.

### DIMCONSTRAINT y los comandos DC

Alias `DCON`: `Designe la cota asociativa a convertir [Lineal/Horizontal/Vertical/Alineada/Angular/Radial/Diámetro/Convertir] <Alineada>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Precise el primer punto de restricción [Objeto] <Objeto>`, `Precise el segundo punto de restricción`, `Precise la ubicación de la línea de cota`, `Texto de la cota <d1=40>` (un número, una expresión, o `nombre=expresión`).
- {{cmd:DCALIGNED}}: como lo anterior, con `[Objeto/Punto y línea/2Líneas]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Designe un arco o círculo`. {{cmd:DCANGULAR}}: `Designe la primera línea o arco`, `Designe la segunda línea`.
- {{cmd:DCCONVERT}}: `Designe las cotas a convertir`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Designe objetos [Ajustes]`. `S` pide las tolerancias de distancia y de ángulo.
- {{cmd:DELCONSTRAINT}} (alias `DELCON`): `Designe objetos`; sus restricciones se quitan.
- {{cmd:CONSTRAINTBAR}} (alias `CBAR`): `Designe objetos [Mostrar todo/Ocultar todo]`, luego `[Mostrar/Ocultar]`.
- {{cmd:DCDISPLAY}}: `Introduzca una opción [Mostrar/Ocultar]`.

### PARAMETERS y -PARAMETERS

{{cmd:PARAMETERS}} (alias `PAR`, `PARAM`) abre el panel {{ui:Parameters}}. `-PARAMETERS`: `Introduzca una opción [Nuevo/Editar/Renombrar/Eliminar/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Descarga una macro (.swb) que reconstruye el modelo como un solo croquis con restricciones en SolidWorks. Vea [Pasar croquis a otros modeladores de piezas y desde ellos](topic:solidworks-sketches).

## Bloques

### ANNOSCALE

Alias: `CANNOSCALE`. Indica la escala de anotación del dibujo y cuántos objetos anotativos tiene, luego pide `Nueva escala de anotación`: escriba `1:50`, `1:100`, `2:1`, un número solo (`50` es 1:50) o el nombre de una de las escalas propias del dibujo. Cada texto y cota anotativa se redimensiona para imprimirse del mismo tamaño en la nueva escala, en un solo paso de deshacer; los objetos no anotativos se dejan, y también un objeto que guarda una lista de escalas sin la nueva ({{cmd:OBJECTSCALE}}). Vea [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Alias: `OBJSCALE`. `Designe objetos anotativos`, luego `Escalas de anotación de los objetos seleccionados [Agregar/Eliminar/Escala actual/Listar/eXit] <Agregar>`. Un texto o cota anotativa guarda una lista de escalas de anotación. `Agregar` y `Eliminar` piden una escala (`1:50`, `2:1`, un número solo, o el nombre de una escala propia del dibujo); `Escala actual` agrega la escala de anotación del dibujo; `Listar` imprime las escalas de cada objeto. Una ventana gráfica cuya escala está en la lista de un objeto muestra el objeto al tamaño que imprime su altura en papel a esa escala, en pantalla y en los trazados. No se puede eliminar la última escala. Los objetos no anotativos se dejan fuera: active Anotativo en Propiedades primero. Las listas se guardan en DWG y DXF como datos propios de CadCraft. Vea [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Alias: `ANNOALL`. `Mostrar objetos anotativos en todas las escalas [ON/OFF]`. Activado (como empieza un dibujo): un objeto anotativo también se muestra en una ventana gráfica, o en el modelo, cuya escala no está en su lista, al tamaño que tiene. Desactivado: no se muestra allí, y no se puede designar en el modelo. El interruptor es un paso de deshacer; no se guarda en el archivo.

### SCALELISTEDIT

Alias: `SCALELIST`. `Lista de escalas [Agregar/Editar/Eliminar/Listar/Restablecer]` hasta {{key:Enter}}. Agregar: `Nombre de la escala`, `Unidades de papel`, `Unidades de dibujo`. Editar y Eliminar piden el nombre de la escala. Las escalas propias del dibujo se unen a las listas de escalas de ventana gráfica y de trazado, y se guardan con el dibujo. Vea [Unidades, papeles y escalas](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT y PEDIT

`SPLINE` (`SPL`): `Primer punto de la spline [Método/Objeto] (Puntos de ajuste)`. Ajuste: puntos por los que pasa la curva; `Cerrar`, `Deshacer`, luego `Tangente inicial` y `Tangente final` (un punto, o {{key:Enter}}). Método › Vértices de control pide un grado (1 a 5) y dibuja desde un polígono de control. Objeto convierte polilíneas en splines por sus vértices. `SPLINEDIT` (`SPE`): `[Datos de ajuste/Editar vértice/convertir a Polilínea/Abrir o Cerrar/Invertir/Deshacer/eXit]`; Datos de ajuste `[Agregar/Eliminar/Mover/Purgar/Tangentes/eXit]`; Editar vértice `[Agregar punto de control/Mover/Peso/eXit]`. `PEDIT` (`PE`): `[Cerrar/Abrir/Unir/Ancho/Ajustar/Spline/Quitar curva/Generar tipo de línea/Invertir/Deshacer/eXit]`, `M` para varios objetos; líneas, arcos y splines se ofrecen primero como polilíneas. Vea [Splines y polilíneas](topic:splines).

### BLOCK

Alias: `B`, `BMAKE`.

- `Introduzca el nombre del bloque`. Si ya existe: `El bloque "…" ya existe. ¿Redefinirlo? [Sí/No] <N>`.
- `Precise el punto base de inserción`
- `Designe objetos`. Se reemplazan por una sola referencia al nuevo bloque.

### WBLOCK

Alias: `W`, `-WBLOCK`. Escribe un bloque, algunos objetos o el dibujo completo como un nuevo archivo DWG o DXF. `Origen de WBLOCK [Bloque/Dibujo completo/Objetos] <Objetos>`:

- **Objetos**: `Precise el punto base de inserción` (será el origen del nuevo dibujo), `Designe objetos`, luego `Formato de archivo [DWG/DXF/DXF R12]` y `Nombre de archivo para el nuevo dibujo`, y después `Qué hacer con los objetos [Conservar/Convertir en bloque/Eliminar]`. Convertir los reemplaza por una referencia a un bloque con el nombre del archivo; Eliminar los quita.
- **Bloque**: `Bloque a escribir`. Los objetos propios del bloque, con su punto base como origen, incluidos los bloques anidados.
- **Dibujo completo**: cada objeto del espacio modelo. Las hojas no se escriben; use {{cmd:SAVEAS}} para una copia que las conserve.

El nuevo archivo contiene solo las capas, tipos de línea, estilos de texto y de cota, y bloques que usan sus objetos, y las unidades del dibujo. La versión de un DWG es la que usó por última vez {{cmd:SAVEAS}}. En el navegador el archivo se descarga; en Studio se abre el cuadro de guardar.

### ATTDEF

Alias: `ATT`, `DDATTDEF`, `-ATTDEF`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Define attribute}}. Imprime los modos, luego `Introduzca una opción a cambiar (Enter cuando termine) [Invisible/Constante/Preestablecido]`, `Introduzca el nombre de la etiqueta del atributo`, `Introduzca el aviso del atributo`, `Introduzca el valor predeterminado del atributo` (`Introduzca el valor del atributo` cuando es constante), `Precise el punto inicial del texto`, `Precise la altura del texto`, `Precise el ángulo de rotación del texto`. {{cmd:BLOCK}} toma las definiciones de atributo en el bloque.

### EATTEDIT y ATTEDIT

`EATTEDIT` (`DDATTE`, o doble clic en una referencia con atributos; {{ui:Blocks}} › {{ui:More}} › {{ui:Edit attributes}}): `Designe una referencia de bloque con atributos`, luego el cuadro {{ui:Edit attributes}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): la misma referencia, luego `<aviso> (<ETIQUETA>) <valor>` para cada atributo; {{key:Enter}} conserva un valor. Vea [Atributos](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Actualizar los atributos de las referencias de qué bloque [Nombre/Seleccionar/Todos] <Seleccionar>`. Los valores se conservan; los atributos nuevos reciben su valor predeterminado, los eliminados se quitan, y las posiciones se restablecen.

### BATTMAN

{{ui:Blocks}} › {{ui:More}} › {{ui:Attribute manager}}. El cuadro: bloque, atributos (etiqueta, aviso, valor predeterminado, modos, orden), {{ui:Update the references (values kept)}}, {{ui:Apply}}.

### REFEDIT y REFCLOSE

{{ui:Blocks}} › {{ui:More}} › {{ui:Edit in place}}. `REFEDIT`: `Designe la referencia de bloque a editar en su lugar` (o la selección). `REFCLOSE`: `¿Guardar los cambios en "…"? [Guardar/Descartar] <Guardar>`; los botones de la barra {{ui:Save the block}} y {{ui:Discard}} hacen lo mismo. Toda la edición es un paso de deshacer. Vea [Atributos](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[ON/OFF]`: si la presión de un trazo de lápiz define el grosor de línea de lo que crean {{cmd:SKETCHFIX}} y {{cmd:SKETCHLIVE}} (activado al inicio). Vea [Croquizar con lápiz](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Indica qué estándar de oficina rige este dibujo y de dónde viene: el registro propio del dibujo, el compartido de su equipo, o sus Políticas predeterminadas (alturas de texto `all.anno.*`); sin ninguno, los tamaños propios del programa. `[Importar/Capas/Cajetín/Limpiar/eXit]`: `Importar` lee un `cc-office-standard` .json (el registro que escriben SuperCad y BimCraft) en este dibujo, guardado con él en DWG y DXF; `Capas` agrega las capas de oficina que el dibujo no tiene, en un paso de deshacer, y nunca quita una; `Cajetín` lista los campos de la oficina con los valores propios de este dibujo; `Limpiar` quita el registro propio del dibujo. Las alturas de texto y de cota anotativas siguen al estándar vigente. Vea [Unidades, papeles y escalas](topic:units-papers-scales).

### BPARAMS

Alias: `BPM`, `BLOCKPARAMS`. Abre el administrador de parámetros para el bloque del editor de bloques, el bloque de la referencia seleccionada, o el bloque que nombre (`Nombre del bloque`): parámetros con fórmulas, varios parámetros de visibilidad con sus estados, y los valores y estados propios de la referencia seleccionada. Vea [Sus propios parámetros y estados de visibilidad](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` hace lo mismo en la línea de comandos: `[Parámetro/Visibilidad/Estado/Asignar/Referencia/Listo]`.

### BEDIT y BCLOSE

`BE`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}}. `Introduzca el nombre del bloque a editar <el bloque de la referencia seleccionada>` abre el editor de bloques. `BCLOSE` pregunta `¿Cerrar el editor de bloques en "…"? [Guardar/Descartar] <Guardar>`; los botones de la barra {{ui:Save block}} y {{ui:Discard changes}} hacen lo mismo. Todo lo hecho en el editor es un paso de deshacer.

### VIEWBASE

Alias: `FLATSHOT`. Una vista 2D plana de los sólidos en la pestaña 3D: `Vista [Frente/Arriba/Derecha/Izquierda/Atrás/Abajo/Iso]`, `Líneas ocultas [Mostrar/Ocultar]`, una escala (`1:20`, `2:1`; {{key:Enter}} toma la que cabe en la hoja), luego el centro de la vista. Una referencia de bloque; las aristas visibles en VIEW-VISIBLE, las ocultas punteadas en VIEW-HIDDEN. Vea [Vistas planas en una hoja](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Alias: `-PUBLISH`; o {{ui:All sheets in one PDF}} en el cuadro {{ui:Plot to PDF}}. `Hojas a trazar [Todas/Algunas]`: {{key:Enter}} traza cada hoja, `S` pide nombres separados por comas. Un PDF, una página y un marcador por hoja. Vea [Todas las hojas en un PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Alias: `SSM`, `SHEETSETMANAGER`. Lo lleva a la sección {{ui:Sheet set}} del panel izquierdo: hojas de muchos dibujos, numeradas y tituladas, con sus cajetines llenados desde el juego, publicadas como un PDF. Vea [Juegos de hojas](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): elija un DWG o DXF, luego su punto de inserción. {{cmd:XREF}} (`XR`, `-XREF`): `Dibujos vinculados [?/Adjuntar/Recargar/Enlazar/Desligar] (Enter: ?)`; con más de un vínculo, designe una de sus referencias o escriba `N` y su nombre. Vea [Dibujos vinculados](topic:files#linked-drawings-external-references).

### COUNT

Alias: `BCOUNT`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}. `Designe una referencia de bloque para contar, o [Todas/Exportar] (Enter: Todas)`: un clic selecciona y cuenta cada referencia de ese bloque en este espacio; {{key:Enter}} o `A` las lista todas; `E` y luego `C` (conteos) o `A` (atributos) descarga un CSV. Vea [Contar bloques y exportar un calendario](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Alias: `I`, `DDINSERT`.

- `Introduzca el nombre del bloque o [Archivo/Biblioteca] <último bloque>` (no importan las mayúsculas). `F` pide un DWG o DXF, luego el dibujo completo o uno de sus bloques; un nombre ya usado pide {{ui:Keep existing}} o {{ui:Rename}}. `L` abre el panel de la biblioteca.
- `Precise el punto de inserción [Escala/Rotar]`. `S` pide `Precise el factor de escala`, `R` pide `Precise el ángulo de rotación`; ambos se recuerdan.
- Cuando el bloque ya está junto a objetos que se repiten en otro lugar sin él, una línea indica cuántos lugares se sugieren, y el aviso gana `suGgested`: `G` los muestra; haga clic cerca de uno para colocar el bloque allí, `A` para todos, {{key:Enter}} para volver. Toman la rotación de sus vecinos y los valores predeterminados de atributos. Los dibujos de más de 20 000 objetos en el espacio abierto no se buscan.
- Luego `Introduzca <aviso> (<ETIQUETA>) <predeterminado>` para cada atributo que pide el bloque. Vea [Atributos de bloque](topic:attributes).

### LIBRARY

Alias: `LIB`. Abre el panel de la biblioteca: colocar elementos, buscar actualizaciones, créditos de la biblioteca. Sin preguntas. Vea [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).

### STEELMEMBER

Alias: `SMEMBER`; o {{ui:3D member}} en la pestaña {{ui:Standard}} de la biblioteca. `Tamaño de la sección <W12x26>` (como lo lista la pestaña), luego `Punto inicial [Columna]` y `Punto final`: un miembro sólido en la pestaña 3D entre los dos puntos, apoyado en el suelo. `C` pide el punto base de la columna y su altura. Un paso de deshacer. Vea [Colocar perfiles de acero y piezas estándar](topic:steel-and-standard-parts).

### PARTSLIST

Alias: `PLIST`. `Esquina superior izquierda de la lista de piezas`, luego `Altura del texto <2.5>`: dibuja una tabla de cada pieza estándar y sección de acero colocada desde la biblioteca (números de elemento, cantidad, pieza, norma, tamaño, longitud, material, masa). Un paso de deshacer. Vea [Colocar perfiles de acero y piezas estándar](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Alias: `PU`. Elimina definiciones de bloques que nada usa. Sin preguntas.

### DELBLOCKS

O {{ui:Blocks}} › {{ui:More}} › {{ui:Delete blocks}}. `Designe el bloque a eliminar [Nombre/eXit]`: designe una referencia de bloque, o `N` para la lista de bloques con filtro (elija varios), o `X` / {{key:Enter}} para terminar. Cada referencia se va (en el modelo, en cada hoja y dentro de otros bloques), luego la definición, y la línea de comandos indica qué se eliminó y qué no pudo. Los bloques sin nombre y los dibujos vinculados no se ofrecen. El aviso vuelve para el siguiente bloque; todo el comando es un paso de deshacer.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} pega lo que copió ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}) como un solo bloque: designe el punto de inserción y allí va una referencia a un bloque nuevo, seleccionada. El bloque recibe un nombre propio (`A$C` y un número); {{cmd:RENAME}} le da el suyo. Un paso de deshacer quita la referencia y el bloque.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} pide el bloque a reemplazar y el bloque que lo sustituye (`?` lista los bloques), luego cambia cada referencia en el modelo, en cada hoja y dentro de otros bloques. Cada referencia conserva su lugar, escala, rotación, capa y los valores de los atributos que ambos bloques tienen; los atributos que solo tiene el nuevo bloque empiezan con sus valores predeterminados, y avisa qué valores se descartaron. Cuando nada usa ya el bloque antiguo, ofrece eliminarlo. Rechaza dibujos vinculados y un reemplazo que pondría un bloque dentro de sí mismo. Un paso de deshacer.

### MINSERT

{{cmd:MINSERT}} coloca un bloque en filas y columnas: nombre del bloque, punto de inserción, escala, rotación, número de filas y columnas, y las distancias entre ellas. Todo el conjunto gira con la rotación. Cada uno es su propia referencia (10 000 como máximo), así que cualquiera puede moverse o borrarse después.

### BLOCKSPALETTE

Alias: `BLOCKSPAL`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Blocks panel}}. Muestra el panel {{ui:Blocks}} con el cursor en su filtro. Cada bloque tiene una imagen pequeña; los colocados más recientemente van primero. Los dos botones junto al filtro cambian entre una lista y una cuadrícula de imágenes. Haga clic en una imagen (o en {{ui:Insert}}) para colocar el bloque con {{cmd:INSERT}}, o arrástrelo al dibujo para colocarlo donde lo suelte.

{{ui:Libraries}}, bajo la lista: {{ui:Add a drawing}} toma un archivo DWG o DXF propio y lista sus bloques con imágenes, y el dibujo completo como un bloque. Colocar uno copia su definición (y los bloques que anida, y sus capas) en este dibujo, como lo hace la opción `Archivo` de {{cmd:INSERT}}; un bloque que ya está aquí con la misma definición se usa sin preguntar, y uno del mismo nombre que difiere pide {{ui:Keep existing}} o {{ui:Rename}}. En un navegador el archivo queda hasta que se cierra la página. En CadCraft Studio {{ui:Add a folder}} lista los dibujos de una carpeta, cada uno abierto al hacer clic, y los archivos y carpetas se recuerdan. La pequeña x quita una biblioteca de la lista; el archivo no se toca. La {{ui:Library}} compartida es otra cosa: vea [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).

### BCONVERT

O {{ui:Blocks}} › {{ui:More}} › {{ui:Convert repeats to blocks}}. Busca geometría que se repite y convierte cada copia en una referencia a un solo bloque.

- `Designe los objetos que se repiten, o [Bloque]`: los objetos de una copia. `B` nombra un bloque existente, para encontrar copias sueltas de sus objetos.
- `Una copia puede ser: reflejada = No, escalada = No; capa, color, tipo de línea y grosor de línea = Coincidir … [Reflejada/Escalada/Propiedades]`: `M`, `S` y `P` cambian lo que cuenta como copia; {{key:Enter}} busca. Los ajustes se recuerdan.
- `Nombre del nuevo bloque <Bloque1>`, luego `Precise el punto base del bloque` ({{key:Enter}} toma la esquina inferior izquierda de la selección).
- Indica cuántos otros conjuntos de objetos tienen la misma geometría, resalta todo lo que reemplazaría y pregunta `Sí/No`.

Una copia son los mismos objetos movidos y girados en cualquier ángulo (y reflejados o escalados por un factor cuando están activos): cada objeto debe tener su correspondiente, con una tolerancia de una millonésima del tamaño de la selección. Cada referencia recibe su propia rotación y escala (una reflejada, una escala Y negativa), y la capa que compartían sus objetos. Los objetos en capas bloqueadas se dejan y se cuentan. Busca en el espacio abierto (el modelo o la hoja abierta). Una búsqueda muy grande se detiene en un límite de trabajo y lo indica. Un paso de deshacer.

### BSEARCH

O {{ui:Blocks}} › {{ui:More}} › {{ui:Find blocks}}. `Buscar bloques por [Nombre/Atributo/Geometría] <Nombre>`:

- `N`: parte de un nombre de bloque, o un patrón con `*` y `?`. Lista cada bloque con sus referencias aquí y en todo el dibujo.
- `A`: un valor de atributo, o `ETIQUETA=valor`. Lista los bloques cuyas referencias lo tienen, con los valores encontrados. Los atributos constantes cuentan.
- `G`: designe objetos, o una referencia de bloque, y se listan los bloques cuya forma sea al menos 85% parecida, el mejor primero. El tamaño, la rotación y el reflejo no cuentan. La medida compara las distancias entre puntos repartidos a lo largo de los contornos, así que encuentra parecidos; use {{cmd:BCONVERT}} para encontrar copias exactas.

Las referencias encontradas en el espacio abierto quedan seleccionadas, listas para el siguiente comando.

### BREPLACE

O {{ui:Blocks}} › {{ui:More}} › {{ui:Replace blocks}}. `Reemplazar [Seleccionados/Todos]`: `S` reemplaza las referencias de bloque que seleccione por el bloque que nombre; `A` pide un bloque y su reemplazo, y cambia cada referencia, como lo hace {{cmd:BLOCKREPLACE}} (el mismo código). Una referencia conserva su lugar, escala, rotación, capa y los valores de los atributos que ambos bloques tienen; los valores que el nuevo bloque no tiene lugar se descartan y se indican. `?` lista los bloques. Un paso de deshacer.

### DATAEXTRACTION

Alias: `EATTEXT`, `DX`; o {{ui:Blocks}} › {{ui:More}} › {{ui:Data extraction}}. Lista bloques, sus atributos y propiedades de objetos como tabla o archivo CSV.

- Trabaja sobre la selección, o pide `Designe objetos (Enter: todo lo de este espacio)`.
- `Lista: [Bloques/Objetos/Todo]` cuando la selección tiene ambos. Los bloques sin nombre, tablas y listas de materiales nunca se listan.
- Imprime las columnas para elegir (nombre, tipo, capa, X, Y, rotación, escala, longitud, área, color, tipo de línea, espacio, y una por etiqueta de atributo), luego `Columnas, por nombre o número separados por comas`. {{key:Enter}} toma las marcadas con asterisco: el nombre y cada atributo para bloques; tipo, capa y longitud para objetos.
- `¿Agrupar las filas idénticas con un conteo? [Sí/No] <Sí>`, luego `Poner la lista en: [Tabla/Csv] <Tabla>`. Una tabla es una tabla normal ({{cmd:TABLEDIT}} la edita) y no está en vivo: vuelva a ejecutar el comando cuando cambie el dibujo.
- Rechaza una columna que no está en la lista. Una tabla contiene 1999 filas de datos; un archivo CSV las guarda todas.

### COUNTTABLE

Cuenta las referencias de bloque de la selección (o del espacio abierto) y pone los conteos en una tabla (`Bloque`, `Conteo`) o en un archivo CSV. Para un conteo que sigue al dibujo por sí solo, vea {{cmd:BOMTABLE}}.

## Hojas y trazado

### LAYOUT

Alias: `LO`, `NEWLAYOUT`; o el botón {{ui:+}} bajo el dibujo. Una nueva hoja con borde, cajetín y una ventana gráfica, en ISO A3 (o Tabloid para dibujos en pulgadas o pies). Sin preguntas.

### MVIEW

Alias: `MV`. Solo en una hoja ({{cmd:VPORTS}} en una hoja hace lo mismo).

- `Precise la esquina de la ventana gráfica [Poligonal/Objeto]`, `Precise la esquina opuesta`. La ventana gráfica muestra el modelo completo a una escala estándar.
- `P` (Poligonal): haga clic en las esquinas del contorno (`Deshacer`, `Cerrar`), {{key:Enter}} cuando termine. Rechaza menos de tres esquinas.
- `O` (Objeto): `Designe un objeto cerrado para el contorno de la ventana gráfica`: una polilínea cerrada, un círculo o una elipse en la hoja. La ventana toma su forma (las curvas como trozos rectos cortos); el objeto se queda como estaba. Rechaza un objeto que no está cerrado.

### VPCLIP

Recorta una ventana gráfica que ya está en la hoja. `Designe la ventana gráfica a recortar` (o selecciónela antes), luego `Designe el objeto al que recortar [Poligonal/Eliminar]`:

- Haga clic en una polilínea cerrada, un círculo o una elipse, o pulse {{key:Enter}} (o `P`) para hacer clic en las esquinas de un polígono.
- `D` (Eliminar, ofrecido cuando la ventana está recortada) la vuelve un rectángulo otra vez: la caja alrededor del contorno que tenía.
- Lo que muestra la ventana no se mueve en el papel, y su escala se queda. El modelo se dibuja y se traza solo dentro del contorno, y el borde lo sigue. Un paso de deshacer.
- Una ventana recortada tiene un pinzamiento en cada esquina de su contorno, además de su centro y las cuatro esquinas de su caja (arrastrar una esquina de la caja estira el contorno con ella). Propiedades muestra Contorno: Rectángulo, o Recortado con el número de esquinas.
- Los archivos DWG y DXF 2000 guardan el contorno para CadCraft. Otros programas abren la ventana como el rectángulo a su alrededor; DXF R12 conserva solo el rectángulo.
- En la pestaña del modelo indica que las ventanas gráficas están en las hojas.

### VPORTS

Alias: `VIEWPORTS`. {{cmd:SPLIT}} es lo mismo desde una hoja también, y {{ui:View}} › {{ui:More}} › {{ui:Split side by side}}, {{ui:Split stacked}}, {{ui:Four panes}}, {{ui:One pane}} lo ejecutan. En el modelo: `Introduzca el número de paneles [SIngle/2/3/4] <3>`; `2` pide `[Horizontal/Vertical] <Vertical>` (Vertical = lado a lado), `3` pide `[Izquierda/Derecha] <Derecha>` (dónde va el panel grande). Cada panel conserva su propia vista y espacio; un clic hace activo un panel. En una hoja es {{cmd:MVIEW}}. Vea [Dividir la pantalla](topic:split-screen).

### VPVIEW

Sin alias. Solo en una hoja.

- `Designe la ventana gráfica` (se omite si hay una seleccionada), luego en el modelo: `Precise la primera esquina de la ventana a mostrar`, `Precise la esquina opuesta`.

### UCS

Sin alias. Un sistema de coordenadas propio; no es una edición. `Precise el origen del UCS [Con nombre/Objeto/Previo/Mundo/Z/3puntos] <Mundo>`: un punto es un nuevo origen, luego `Precise un punto en el eje X (Enter conserva el ángulo)`. `Z`: `Precise el ángulo de rotación alrededor del eje Z <90>`. `3`: origen, un punto sobre el eje X positivo, un punto del lado Y positivo. `OB`: `Designe el objeto para alinear el UCS`. `NA`: `[Restaurar/Guardar/Eliminar/?]` y un nombre. La vista gira para que el nuevo eje X quede horizontal. Vea [Girar la vista y usar sus propias coordenadas](topic:ucs-and-turned-view).

### PLAN

Sin alias. `Introduzca una opción [UCS actual/Ucs/Mundo] <UCS actual>`: gira la vista del panel activo para que el eje X del UCS (o del mundo) quede horizontal. Nada del dibujo se mueve.

### TURNLEFT, TURNRIGHT, TURNWORLD

Sin alias; o {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}}, {{ui:Turn view 90° right}}, {{ui:Back to world}}. Lo mismo que `UCS Z -90`, `UCS Z 90` y `UCS W`, con la vista siguiéndolo.

### VPLAYER

Sin alias. En una hoja, o dentro de una ventana gráfica. `Introduzca una opción [?/Inutilizar/Reutilizar/Restablecer/Vpvisdflt]`: `F`, `T`, `R` piden nombres de capa (separados por comas, con comodines `*` y `?`), luego las ventanas `[Todas/Seleccionar/Actual] <Actual>`; Restablecer devuelve cada capa a su valor predeterminado de "inutilizada en ventanas nuevas"; `V` fija ese predeterminado (`[Inutilizada/Reutilizada]`), que usa {{cmd:MVIEW}}. `?` lista las capas inutilizadas en la ventana actual. La columna de ventanas del panel Capas hace lo mismo para una ventana. Vea [Inutilizar una capa en una ventana](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Alias: `MS`; o haga doble clic dentro de una ventana gráfica. Solo en una hoja. Trabaje en el modelo a través de una ventana gráfica: la seleccionada, la única de la hoja, o `Haga clic dentro de la ventana gráfica para trabajar en ella`. Desplazar y hacer zoom dentro cambian la vista de la ventana (una bloqueada en pantalla la conserva y la hoja se mueve en su lugar); la nueva vista se escribe como un paso de deshacer. Vea [Trabajar en el modelo a través de una ventana gráfica](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Alias: `PS`; o haga doble clic fuera de la ventana gráfica, o haga clic en una pestaña bajo el dibujo. Regresa a la hoja.

### PLOT

Alias: `PRINT`, `PUBLISH`, `EXPORTPDF`; o {{key:Mod+P}}. Abre el cuadro {{ui:Plot to PDF}}. Vea [Trazar a PDF](topic:plot-pdf).

### PLOTSTYLES

Alias: `STYLESMANAGER`, `PSTABLES`; o {{ui:Edit tables…}} en el cuadro {{ui:Plot to PDF}}. Abre {{ui:Plot style tables}}: cómo se imprime cada color (color, gris, tinta, grosor de línea), guardado con el dibujo. Vea [Tablas de estilos de trazado](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} mueve objetos entre una hoja y el modelo a través de una ventana gráfica, escalados y girados para verse igual desde el otro lado. En una hoja, seleccione objetos y van al modelo (designe la ventana cuando la hoja tiene más de una). Mientras trabaja en el modelo a través de una ventana gráfica ({{cmd:MSPACE}}), los objetos seleccionados llegan a la hoja. Indica cuántas veces más grandes o más pequeños quedaron. Las ventanas se quedan en su hoja. Un paso de deshacer.

### ISODRAFT

{{cmd:ISODRAFT}} activa o desactiva el dibujo isométrico (`ON` u `OFF`), o pasa directo al plano `Izquierdo`, `Superior` o `Derecho`. Mientras está activo: Orto ({{key:F8}}) mantiene las líneas a lo largo de los dos ejes del plano (izquierdo: 90° y 150°; superior: 30° y 150°; derecho: 30° y 90°), el rastreo polar ({{key:F10}}) sigue los mismos ejes, la referencia a la rejilla ({{key:F9}}) usa la rejilla isométrica, y la rejilla ({{key:F7}}) se dibuja con líneas a 30°, 90° y 150°. {{cmd:ELLIPSE}} gana `Isocírculo`: dé un centro y un radio (o `Diámetro`) y dibuja la elipse que un círculo muestra en el plano actual. El dibujo sigue siendo plano: son ayudas para dibujar una vista pictórica, no un modelo 3D. El ajuste es para esta sesión y no se guarda en el archivo.

### ISOPLANE

{{cmd:ISOPLANE}} elige el plano en el que trabaja el dibujo isométrico: `Izquierdo`, `Superior` o `Derecho`. Enter pasa al siguiente plano. Mientras el dibujo isométrico está activo, {{key:F5}} hace lo mismo en medio de un comando; cuando está desactivado, {{key:F5}} queda para el navegador.

## Consulta

### CAL

Imprime el valor de un cálculo, tal como se leería en cualquier parte donde se escribe una longitud.

- `Expresión`: escríbala, por ejemplo `12'6"+3/4"` o `(24'-0")/3`, y pulse {{key:Enter}}. CadCraft imprime `= 12'-6 3/4"   (150.75 unidades de dibujo)`. Vea [Aritmética en un valor escrito](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Alias: `DI`; o {{ui:View}} › {{ui:More}} › {{ui:Measure distance}}.

- `Precise el primer punto`, `Precise el segundo punto`. Imprime distancia, ángulo, Delta X y Delta Y.

### AREA

Alias: `AA`; o {{ui:View}} › {{ui:More}} › {{ui:Area}}. Imprime el área y el perímetro.

- `Precise la primera esquina [Objeto/Agregar área/Restar área] <Objeto>`
  - Haga clic o escriba esquinas; en `Precise el siguiente punto (Enter cierra) [Deshacer]` pulse {{key:Enter}} para cerrar el contorno. `U` quita la última esquina.
  - {{key:Enter}} u `O`, luego `Designe el objeto`: un círculo (imprime su circunferencia), una elipse, una polilínea (una abierta se cierra con una línea recta para el área, y se imprime su longitud) o un sombreado (los huecos se restan).
  - `A` (Agregar área) y `S` (Restar área) mantienen un total acumulado: el aviso empieza con `(modo AGREGAR)` o `(modo RESTAR)`, cada área se suma o se resta, y se imprime `Área total = …` después de cada una. En estos modos `O` designa objetos hasta {{key:Enter}}, y {{key:Enter}} en el primer aviso termina el comando.

### MEASUREGEOM

Alias: `MEA`. `Introduzca una opción [Distancia/Radio/Ángulo/Área] <Distancia>`; después de cada medida pregunta otra vez, con `eXit` como predeterminado.

`Rápido` mide alrededor del puntero mientras lo mueve: la distancia al objeto más cercano a la derecha, arriba, a la izquierda y abajo (a lo largo de los ejes del UCS actual), dibujada mientras avanza, y el ángulo donde dos de esos vecinos son rectos y se encuentran. Un clic escribe las cuatro distancias, el ancho y alto libres y los ángulos en el historial; Enter vuelve a las opciones. Lee lo que está en pantalla.

- `D`: dos puntos, como {{cmd:DIST}}.
- `R`: `Designe un arco o círculo`; imprime el radio y el diámetro.
- `A`: un arco (su ángulo incluido), una línea y luego una segunda línea (el ángulo entre ellas, hacia sus extremos lejanos), o {{key:Enter}} y tres puntos (vértice, luego los dos extremos).
- `AR`: como {{cmd:AREA}}, un área.

### ID

Sin alias. `Precise un punto`; imprime su X e Y.

### LIST

Alias: `LI`, `LS`. `Designe objetos`; imprime el tipo, la capa y las medidas principales de cada objeto.

### MASSPROP

{{cmd:MASSPROP}} da las propiedades de sección de las regiones y objetos cerrados que seleccione, tomados en conjunto: área, perímetro, caja delimitadora, centroide, momentos de inercia respecto a los ejes X e Y que pasan por el origen, el producto de inercia, radios de giro, los mismos momentos respecto al centroide, y los momentos principales con las direcciones de sus ejes. Los huecos de una región cuentan como huecos. Las cifras están en unidades de dibujo y son exactas para contornos hechos de líneas y arcos; las elipses y splines se miden como segmentos rectos cortos, y lo indica. Después del informe pregunta si lo escribe en un archivo de texto. Los objetos que no están cerrados se dejan fuera, y lo indica con cuántos.

## Vista, archivo y otros

### ZOOM

Alias: `Z`.

- `Precise la esquina de la ventana, introduzca un factor de escala (nX) [Extensión/Todo/Ventana/Anterior/Escala/Centro]`. Haga clic en dos esquinas para una ventana. `E`, `A` o Enter: el dibujo completo.
- `P` (Anterior, o {{ui:Previous}} en la barra de herramientas) regresa a la vista anterior, hasta 10 vistas por pestaña; una serie de pasos de rueda o un desplazamiento cuenta como una vista.
- Un número como `2`, `2x` o `0.5x` (o `S` y luego el número) acerca o aleja por ese factor alrededor del centro de la pantalla.
- `C` pide `Precise el punto central` y `Introduzca la altura o el aumento (nX)`.

### PDFATTACH, PDFIMPORT y los comandos PDF

Alias: `PDFATT` para {{cmd:PDFATTACH}}, `PDFIM` para {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} pone una página PDF bajo el dibujo (archivo, página, punto de inserción, escala, rotación); {{cmd:PDFIMPORT}} convierte las líneas, curvas, rellenos y texto de una página en objetos del dibujo, en capas con el nombre del PDF, a tamaño real, a una escala escrita, o escalados desde dos puntos y una distancia real. {{cmd:PDFCLIP}} recorta un subyacente, {{cmd:PDFADJUST}} fija atenuado, contraste, monocromo o lo desactiva, {{cmd:PDFLAYERS}} enciende o apaga las capas propias del PDF, y {{cmd:PDF}} vuelve a dar a CadCraft los archivos que usan los subyacentes de un dibujo. Vea [Subyacentes PDF](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Autocompletar del dibujo: sin comando en marcha, un fantasma gris muestra lo que dicen los patrones propios del dibujo que sigue. {{cmd:AUTOCOMPLETE}} lo activa con `On` o lo desactiva con `Off` (también Parámetros › CadCraft), o `Show` muestra lo que sugeriría ahora. **Tab** dibuja el fantasma como un paso de deshacer; **Esc** lo descarta hasta que cambie el dibujo. Encuentra tres cosas en los objetos más nuevos: la siguiente copia de algo dibujado dos veces o más a un paso parejo (montantes, columnas, contrahuella y huella de una escalera), los siguientes peldaños de una escalera de polilínea, y el lado que falta de un cuarto o de una cadena de muros. En medio de {{cmd:LINE}} o {{cmd:PLINE}} el fantasma es el **siguiente punto**: el siguiente peldaño de una escalera (contrahuella, huella, contrahuella…), la cuarta esquina de un rectángulo, el punto que lo cierra, o un paso parejo más. Acerque el cursor y pulse **Tab**, como si hubiera hecho clic allí; continúe o pulse Enter. Se calcula en este equipo con reglas, sin ningún modelo.

### AUTOSHEET

Alias: `ASH`. Hojas que se distribuyen solas. {{cmd:AUTOSHEET}} toma las piezas del dibujo (sus vistas con nombre, o las piezas separadas del modelo, o el modelo completo), elige un tamaño de papel (o el que dé), da a cada pieza una escala estándar (una sola para todas, o la más grande que cada una admita) y coloca las vistas en filas en hojas nuevas, con un cajetín y un pie (nombre y escala) bajo cada una. Lo que no cabe en una hoja recibe una hoja propia. Un paso de deshacer. Se calcula en este equipo con reglas, sin ningún modelo.

### PHOTOSKETCH

Alias: `PSK`. Foto de un bosquejo a dibujo. Elija una foto (JPEG, PNG o TIFF) de un bosquejo a mano en una hoja de papel. {{cmd:PHOTOSKETCH}} encuentra las cuatro esquinas de la hoja, endereza la perspectiva, toma el tamaño de papel que nombre (`Paper`, o el estándar más cercano) y la `Scale` del bosquejo (1 : n), luego traza las líneas de pluma en líneas, arcos y círculos, con una capa para cada color de pluma (negro, rojo, azul, verde). Si no encuentra el borde del papel, toma toda la foto como la hoja y lo indica. El texto escrito se deja fuera. Un paso de deshacer. Se hace en este equipo con procesamiento clásico de imágenes, sin ningún modelo, y nada se envía a ningún lado. Vea también los comandos de dibujos escaneados.

### AUTODIM

Alias: `ADIM`. Acotado automático por reglas. {{cmd:AUTODIM}} acota los objetos seleccionados (o el dibujo completo) a partir de sus bordes a nivel y a plomo: una cadena de cotas a lo largo de los lados que elija (`Sides`), una cota total por fuera, el ancho de cada vano (un hueco entre líneas de muro alineadas), un diámetro para cada tamaño de agujero, y con `Grid` el espaciado entre líneas de rejilla. Una cota que ya existe no se vuelve a hacer. Un paso de deshacer. Se calcula en este equipo con reglas, sin ningún modelo.

### GRIDMOVE

Alias: `GM`. Mover una línea de rejilla lleva el conjunto con ella. {{cmd:GRIDMOVE}} mueve una línea de rejilla (una línea en una capa cuyo nombre dice rejilla o eje) y lo que cuelga de ella: los muros con un extremo sobre la línea se estiran para seguirla, los muros a lo largo de ella se mueven enteros, las columnas (referencias de bloque y círculos sobre la línea), su burbuja y etiqueta se mueven, y las cotas cuyos puntos están sobre ella miden el nuevo espaciado. Dé dos puntos (solo cuenta la parte que cruza la línea) o `Distance`. Un paso de deshacer se lleva todo. Se hace con reglas en este equipo.

### DETAILS

Alias: `DET`. Detalles que lo encuentran a usted. {{cmd:DETAILS}} guarda los detalles propios de su firma: `Add` pone un bloque de este dibujo en la lista, `List` y `Remove` la administran, y `Find` ordena los detalles para lo que está seleccionado (o lo último que dibujó) según las palabras de sus capas, nombres de bloque, patrones de sombreado y notas, comparadas con el nombre y las notas de cada detalle; así, un remate de ventana encuentra su vierteaguas. Elija un número y un punto para colocarlo. Con `Hint` activado (también en Parámetros › CadCraft), seleccionar algo que coincide con un detalle pone una línea en la barra de estado. La lista se guarda en este navegador, en este equipo, y esa lista es la que se busca. `Share` la pone también en su carpeta de Documentos (`.cadcraft/firm-details.json`, con el dibujo de cada bloque): `Pull` agrega lo que tiene su equipo y a usted le falta, `Push` agrega lo que tiene usted y a ellos les falta, `Both` hace las dos cosas, y nunca se quita nada de ningún lado. Abra primero la carpeta de Documentos ({{cmd:DOCUMENTS}}); cuando esa carpeta es una carpeta de Team Cloud Plan, todo el equipo comparte una sola lista. Un elemento de detalle en el panel Biblioteca tiene un botón **Agregar a los detalles de mi firma** que lo pone en la misma lista. Se calcula en este equipo por palabras, sin ningún modelo.

### SKETCHFIX

Alias: `SKF`. Bosquejos a lápiz se vuelven geometría precisa. Presione y arrastre un trazo a mano alzada a la vez (lápiz, ratón o dedo), luego Enter. Cada trazo se lee como una línea, círculo, arco, rectángulo o polilínea: las líneas casi horizontales y verticales se vuelven exactamente horizontales y verticales, un trazo cerrado y redondo se vuelve un círculo, un trazo cerrado con cuatro esquinas en ángulo recto se vuelve un rectángulo, y los extremos de los trazos se juntan y se llevan a los extremos ya presentes en el dibujo. Un paso de deshacer. Se calcula en este equipo con reglas, sin ningún modelo.

### SCANATTACH y los comandos de dibujos escaneados

Alias: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} no tiene. Trabajan sobre una imagen, un paso de deshacer cada uno. {{cmd:SCANATTACH}} inserta un PNG, JPEG, TIFF (una página o todas) o una página PDF que sea una imagen. {{cmd:SCANSCALE}} escala la hoja a partir de dos puntos designados y la distancia real. {{cmd:SCANALIGN}} la mueve y gira sobre dos puntos (`Escalar la hoja para ajustar` Sí/No). {{cmd:SCANDESKEW}} muestra el ángulo de las líneas largas de la hoja y la gira cuando usted `Accept` o da un `Value`. {{cmd:SCANCLEAN}} la vuelve blanco y negro (`Threshold` Auto/Adaptive/Level, `Specks`) y `Run`. {{cmd:SCANCROP}} conserva una ventana. {{cmd:SCANERASE}} borra un `Rectangle`, `Polygon` o `Lasso`. {{cmd:SCANTRACE}} traza líneas y arcos en una capa nueva (`Tolerance`, `Window`, `Arcs`, `Leftovers`, `Run`) e indica lo que encontró y lo que dejó como trama. {{cmd:SCANINFO}} lista el archivo original y los pasos. {{cmd:RASTERSNAP}} activa o desactiva la referencia a las líneas de las hojas escaneadas. Vea el tema Dibujos escaneados y el trazo.

### REGEN y REGENALL

Alias: `RE` para {{cmd:REGEN}}, `REA` para {{cmd:REGENALL}}. Vuelve a dibujar en pantalla lo que hay en el dibujo: {{cmd:REGEN}} la pestaña que está viendo (en una hoja, también el modelo que muestran sus ventanas), {{cmd:REGENALL}} cada pestaña, cada panel de pantalla dividida y cada dibujo abierto. Úselos cuando la imagen se vea desactualizada después de un cambio por script o muy grande, o cuando un asistente editó el dibujo; el dibujo en sí no se toca, así que no hay nada que deshacer.

### NAMEDVIEW

Alias: `NV`, `VIEWS`. `Introduzca una opción [?/Restaurar/Guardar/Ventana/Eliminar] <Restaurar>`, luego el nombre de la vista. `S` guarda la vista en pantalla, `W` una ventana que usted designe, `R` muestra una vista guardada, `D` elimina una, `?` lista las vistas de esta pestaña. Guardar con un nombre existente lo reemplaza; cada cambio es un paso de deshacer. Las vistas pertenecen a la pestaña en que se guardaron. Los archivos DWG y DXF las guardan (la tabla VIEW); las vistas de una hoja vuelven en la primera hoja, porque el archivo no dice a cuál pertenecen.

### UNDO y REDO

Alias: `U` para {{cmd:UNDO}}; {{cmd:REDO}} no tiene. También {{key:Mod+Z}} y {{key:Mod+Y}}.

### LAYER

Alias: `LA`. Va al panel {{ui:Layers}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Introduzca el tipo de línea para objetos nuevos` — `PorCapa`, `PorBloque` o un nombre (`?` los lista: Continuous, los propios del dibujo, y DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE con sus tamaños `2` (mitad) y `X2` (doble)). {{cmd:LWEIGHT}} (`LW`): el grosor de línea para objetos nuevos en mm, o `PorCapa`, `PorBloque`, `Predeterminado`. {{cmd:LTSCALE}} (`LTS`): la escala de tipo de línea del dibujo (con deshacer). {{cmd:LWDISPLAY}} (`LWT`): `Mostrar grosores de línea [ON/OFF]`, lo mismo que el botón {{ui:LWT}} de la barra de estado. Vea [Grosores de línea y tipos de línea](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Introduzca el tipo de objeto a renombrar [Capa/Bloque]`, `Introduzca el nombre anterior`, luego el nombre nuevo; los objetos o referencias lo siguen. {{cmd:LAYMRG}}: `Designe un objeto en la capa a fusionar o [Nombre]` hasta {{key:Enter}}, luego `Designe un objeto en la capa destino o [Nombre]` y `Y`. {{cmd:LAYDEL}}: `Designe un objeto en la capa a eliminar o [Nombre]`, luego `Y`: la capa y cada objeto en ella se van (no la capa 0, DEFPOINTS ni la capa actual). Un paso de deshacer cada uno. Vea [Organizar un dibujo con capas](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Capas al designar objetos; también en el menú {{ui:Tools}} del panel {{ui:Layers}}. {{cmd:LAYISO}}: `Designe objetos en la capa o capas a aislar`, luego {{key:Enter}}: todas las demás capas se apagan. {{cmd:LAYUNISO}} las vuelve a encender. {{cmd:LAYOFF}} y {{cmd:LAYFRZ}}: `Designe un objeto en la capa a apagar` (o inutilizar), una y otra vez; `U` quita el último, {{key:Enter}} termina. {{cmd:LAYMCUR}}: `Designe el objeto cuya capa será la actual`. {{cmd:LAYON}} enciende todas las capas, {{cmd:LAYTHW}} reutiliza todas las capas. Cada comando es un paso de deshacer. Vea [Organizar un dibujo con capas](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} inicia un dibujo vacío y {{cmd:OPEN}} abre un DWG o DXF, cada uno en su propia pestaña sobre el dibujo (un dibujo nuevo sin tocar se usa en lugar de abrir una pestaña nueva). Al cerrar una pestaña con cambios sin guardar, se pregunta primero. Vea [Dividir la pantalla](topic:split-screen).

{{cmd:SAVE}} (alias `QSAVE`, también {{key:Mod+S}}) descarga una copia en el formato del dibujo: DWG si se abrió desde un DWG, DXF si se abrió desde un DXF. Un dibujo nuevo usa el formato elegido por última vez en Guardar como en este navegador, y si no, DWG.

{{cmd:SAVEAS}} (también {{key:Mod+Shift+S}}) abre el cuadro {{ui:Save a copy as}}: elija {{ui:DWG}} (y su {{ui:Version}}), {{ui:DXF R12}} o {{ui:DXF 2000}}, y luego {{ui:Save}}. La elección se queda para este dibujo y para los dibujos nuevos en este navegador.

{{cmd:DXFOUT}} descarga siempre una copia DXF R12, sin cambiar el formato que usa {{cmd:SAVE}}.

Vea [Archivos: qué abre, qué guarda](topic:files#saving).

### TOUR

Alias: `TUTORIAL`. Inicia otra vez el recorrido de seis pasos del primer dibujo. Vea [Primeros pasos](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Alias: `TBDOCK`. `Posición de la barra de herramientas [Arriba/Abajo/Izquierda/Derecha]`. Vea [Configuración](topic:settings#toolbar-position).

### COMMANDLINE

Alias: `CMDLINE`. `Línea de comandos [Acoplada abajo/Flotante/Una línea/Líneas del historial visibles/Historial de comandos (F2)]`: acopla o flota la línea de comandos, la deja en una sola línea, pregunta cuántas líneas de historial mostrar (0 a 12), o abre el historial. Vea [Configuración](topic:settings#command-line).

### TOPAREA

`Área superior [Estándar/Compacta]`: las barras sobre el dibujo como estaban, o compactas. Vea [Configuración](topic:settings#top-area).

### POLARANG

`Introduzca el paso del ángulo polar en grados <90>`: el paso en el que se alinea el rastreo {{ui:Polar}} (más de 0, hasta 180). Se guarda en este navegador.

### UNITS

Alias: `UN`. Cómo se escriben y se teclean las longitudes.

- `Introduzca el formato de longitud [Científico/Decimal/Ingeniería/Arquitectónico/Fraccionario] <actual>`
- Arquitectónico y Fraccionario: `Introduzca el denominador de la fracción más pequeña a mostrar (1, 2, 4, 8, 16, 32, 64, 128 o 256)`. Los demás: `Introduzca el número de lugares decimales (0 a 8)`.

Las cotas nuevas lo siguen. Un paso de deshacer. Igual que {{ui:Length format}} y {{ui:Precision}} en {{ui:Current settings}}; vea [Pies y pulgadas](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Alias: `GDS`. Ver un diseño de circuito integrado (un archivo de flujo GDSII): prueba de laboratorio, solo para ver y medir.

- Un selector de archivos toma un archivo `.gds`; con varias celdas superiores, `Introduzca la celda superior a dibujar`.
- Cada capa y tipo de dato se vuelve una capa del dibujo (`GDS 1`, `GDS 2/5`); las referencias y matrices se colocan planas, en la unidad de usuario del archivo (normalmente micrómetros). Un paso de deshacer. No se simula ni se comprueba nada, y el archivo no se escribe de vuelta.

### DIAGRAM

Alias: `TEXTDIAGRAM`, `T2D`. Un diagrama desde texto.

- Un cuadro toma el texto (o una línea con `;` entre sentencias en la línea de comandos): un diagrama de flujo Mermaid, un diagrama de componentes PlantUML, D2 o una lista de-a.
- `Precise la esquina superior izquierda del diagrama`, luego `Precise la altura del texto`.

Los bloques y conectores son objetos normales en la capa `Diagram`, seleccionados al terminar. Un paso de deshacer. Vea [Dibujar un diagrama desde texto](topic:text-to-diagram).

### OLELIST

Alias: `OLES`. Los objetos OLE que lleva un DWG y que CadCraft no puede colocar por sí mismo.

- Lista cada uno: número, tipo, tamaño, si guardó una imagen.
- `Introduzca una opción [Colocar/eXit] <eXit>`: Colocar pide el número, la esquina inferior izquierda y el ancho, y dibuja un marco con la imagen. Un paso de deshacer; el objeto guardado no cambia. Vea [Imágenes](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Alias: `SHX`. Sus propias fuentes SHX.

- `Introduzca una opción de fuente SHX [Carpeta/Archivos/Lista/Quitar/Invertir/Limpiar] <Lista>`

{{ui:Folder}} lee cada `.shx` de una carpeta (CadCraft Studio; de nuevo al iniciar), {{ui:Files}} toma archivos designados (el navegador), {{ui:Reverse}} dispone las letras de una fuente de la última a la primera. Los estilos de texto que nombran una fuente cargada se dibujan con ella. Vea [Dibujar texto con sus propias fuentes SHX](topic:shx-fonts).

### LIMITS

Qué tan grande se pretende que sea el dibujo.

- `Precise la esquina inferior izquierda o [ON/OFF] <actual>`: un punto, `ON` u `OFF`.
- `Precise la esquina superior derecha <actual>`.

La rejilla llena los límites, {{cmd:ZOOM}} Todo los muestra, y con los límites en ON un punto fuera se rechaza (`**Outside limits`). Un paso de deshacer; se guarda en DWG y DXF. Vea [Fijar los límites del dibujo](topic:drawing-limits).

### AUNITS

Alias: `ANGUNITS`. Cómo se muestran y escriben los ángulos.

- `Introduzca el formato de ángulo [Grados decimales/Grados-minutos-segundos/Rumbos de topógrafo] <actual>`
- `Introduzca el número de lugares decimales (0 a 8)`, o para los otros dos `Introduzca la precisión` (0 grados, 2 minutos, 4 segundos, 5 a 8 decimales de segundo).

Un paso de deshacer; se guarda en DWG y DXF. Igual que {{ui:Angle format}} en {{ui:Current settings}}. Vea [Escribir y mostrar rumbos y ángulos](topic:bearings-and-angles).

### APPLOAD

Alias: `AP`; o {{ui:View}} › {{ui:More}} › {{ui:Load application…}}. El cuadro {{ui:Load applications}}: carga rutinas `.lsp` y archivos de diálogo `.dcl`, las descarga, las vuelve a cargar desde el historial, y el Startup Suite. Los comandos `(defun c:NAME …)` de una rutina funcionan después como cualquier otro. Vea [Cargar aplicaciones](topic:load-applications) y [Ejecutar rutinas LISP](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (o {{ui:View}} › {{ui:More}} › {{ui:Edit aliases…}}) abre su archivo de alias (líneas `ALIAS, *COMANDO`); {{ui:Save}} lo aplica. {{cmd:REINIT}} lo aplica otra vez. Vea [Editar alias de comandos](topic:command-aliases).

### OPTIONKEYS

Alias: `OPTKEYS`; o {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} › {{ui:Edit…}}. Abre su archivo de letras de opciones (líneas `COMANDO.OPCIÓN, LETRAS`, como `ARRAY.PO, P`); {{ui:Save}} lo aplica, y {{cmd:REINIT}} lo aplica otra vez. Vea [Asignar a las opciones de comando sus propias letras](topic:option-letters).

### LISPEDIT

Alias: `VLIDE`; o {{ui:View}} › {{ui:More}} › {{ui:LISP editor}}. Abre el editor LISP, una ventana que se queda abierta junto al dibujo.

- El texto: números de línea, el par del paréntesis bajo el cursor marcado (en rojo si no tiene), {{key:Enter}} sangra la nueva línea bajo el paréntesis abierto, {{key:Tab}} escribe dos espacios, {{key:Esc}} sale del texto.
- {{ui:Load into the drawing}} ({{key:Ctrl+Shift+Enter}}): lee cada forma, como {{cmd:APPLOAD}} lo hace con el archivo, y crea sus comandos `c:`. El archivo aparece en la lista de {{cmd:APPLOAD}}.
- {{ui:Run selection}} ({{key:Ctrl+Enter}}): evalúa las formas seleccionadas, o la forma en que está el cursor.
- {{ui:Stop}}: termina una rutina en marcha.
- {{ui:Console}}: lo que imprimió la rutina, y cada error con su línea; haga clic en un error para ir allí. El texto se ejecuta una forma de nivel superior a la vez, así que la línea es la de la forma, o dentro de ella la línea que llama a la función que nombra el error.
- {{ui:New}}, {{ui:Open}}, {{ui:Save}} ({{key:Ctrl+S}}): un archivo `.lsp`. El texto también se guarda en este navegador, así que cerrar la ventana no pierde nada.
- Junto al texto: las funciones que define la rutina, las que llama y que este LISP todavía no tiene, las que llama y que no están definidas en ella ni integradas, y las listas completas de lo que está integrado y lo que no.

Un texto con un paréntesis que nunca se cierra, o una cadena que nunca termina, no se ejecuta: se indica la línea. No hay depurador paso a paso, puntos de interrupción ni ventana de vigilancia. Vea [Ejecutar rutinas LISP](topic:run-lisp).

### HELP

Alias: `?`. Imprime cada comando, sus alias y una descripción de una línea en el historial de la línea de comandos. No abre esta ayuda: pulse {{key:F1}} o haga clic en {{ui:Help}} para eso.

## Aviso de selección de objetos

En cualquier aviso `Designe objetos`: haga clic en objetos, dibuje ventanas (de izquierda a derecha) y capturas (de derecha a izquierda) con dos clics, o presione y arrastre un lazo ({{key:Space}} mientras arrastra: ventana, captura, borde), {{key:Shift}}+clic para quitar, y pulse {{key:Enter}} para terminar. También puede escribir `ALL` (todo), `L` (el último objeto), `P` (Previo: lo que usó el último comando), `F` (Borde: objetos que cruza una línea de puntos; `U` quita un punto), `W` (Ventana), `C` (Captura), `R` (modo Quitar: las designaciones quitan objetos; el aviso dice `Quitar objetos`) y `A` (Agregar otra vez). `?` los lista. No se muestran en el aviso. {{key:Tab}} sobre objetos que se superponen resalta el siguiente; haga clic para designarlo. Vea [Seleccionar objetos](topic:select-objects).

### ACCESS

Alias: `AX`. Dibujar sin vista. {{cmd:ACCESS}} activa o desactiva el acceso (`On`, `Off`), y cambia los sonidos de referencia (`Sound`) y los comandos de voz (`Voice`); primero indica el estado. Con el acceso activo, cada comando y resultado se dice mediante su lector de pantalla, y el área de dibujo tiene un cursor de teclado. El tema de ayuda "Dibujar sin vista" tiene las teclas.

### DESCRIBE

Alias: `DESC`. Dice lo que contiene el dibujo: cuántos objetos, de qué tipo, qué tamaño, cuántas capas, qué está seleccionado. Solo lee; no cambia nada.

### WHEREAMI

Alias: `WHERE`. Dice dónde está el cursor, en las unidades del dibujo.

### NEARBY

Dice qué hay cerca del cursor, lo más cercano primero, cada uno con su distancia y el lado en que está.

### SAYSEL

Dice lo que está seleccionado, una frase por objeto (longitud de línea, extremos y ángulo; radio y centro de un círculo; texto tal como está escrito).

### VOICE

Activa o desactiva los comandos hablados. Se reconocen en este equipo; donde el navegador no puede hacerlo, la voz queda desactivada salvo que elija el servicio en línea del navegador en Configuración.

### TOUCHCROSSHAIR

Alias: `TCX`. La cruz desfasada para dibujar con el dedo, para que la punta del dedo no tape el punto que designa. Mientras está activa, un dedo sobre el dibujo no designa: mueve una cruz que queda encima del dedo y a un lado. Las referencias a objetos y el rastreo siguen a la cruz. Levantar el dedo no designa nada y deja la cruz donde está. Para designar, pulse el botón {{ui:Click}} en la esquina del dibujo, o toque el dibujo en cualquier lugar con un segundo dedo. Mantenga {{ui:Click}} mientras mueve el otro dedo para arrastrar (una ventana de selección, un lazo, un pinzamiento). Un dedo mantenido quieto, o el botón {{ui:Enter}}, es Enter. Dos dedos desplazan y hacen zoom como antes. Cerca del borde inferior y del borde lejano la cruz se acerca al dedo, para que cada parte del dibujo sea alcanzable. Un lápiz y un ratón siempre designan directamente.

{{cmd:TOUCHCROSSHAIR}} indica el estado y pide `ON`, `OFF`, `Auto` (activo solo donde un dedo es el único puntero, así que está desactivado en un equipo con ratón), `Distance` (qué tan lejos queda la cruz del dedo, de 24 a 240 píxeles) o `Side` (`Left`: arriba y a la izquierda, para la mano derecha; `Right` para la mano izquierda; los botones pasan a la otra esquina). Las mismas opciones están en Configuración › CadCraft, y en un dispositivo con pantalla táctil la barra de estado tiene un interruptor {{ui:Offset crosshair}}. Las elecciones se guardan en este navegador.

### WHOHAS

Dice quién tiene abierto un dibujo. En CadCraft Studio, en un equipo, al abrir un DWG o DXF se escribe un pequeño archivo de bloqueo junto a él (`Plan.dwg.cclock`: quién, desde cuándo, qué versión), se actualiza cada minuto mientras el dibujo está abierto, y se quita al cerrarlo. Al abrir un dibujo que otra persona tiene abierto, se indica quién y desde cuándo, y ofrece {{ui:Open read-only}} (Guardar entonces pide un nombre nuevo), {{ui:Open anyway}} (la otra persona recibe el aviso en su próxima actualización) o {{ui:Cancel}}. Guardar sobre un archivo que otra persona tiene abierto pregunta primero. Un bloqueo que no se ha actualizado en cinco minutos se considera obsoleto: la otra copia se cerró sin guardar, o el equipo está en suspensión.

{{cmd:WHOHAS}} pregunta `Current` (el dibujo abierto), `File` (elegir uno), `FOlder` (elegir una carpeta: cada dibujo de ella que esté abierto en algún lugar se lista), `Path` (escribir una ruta completa) o `Name` (el nombre que ven otros; el nombre de su cuenta cuando inicia sesión). Studio solo puede acceder a las carpetas que usted eligió: para un dibujo abierto desde una carpeta que nunca se eligió, lo indica una vez, y no puede anotar el dibujo como abierto; `FOlder` elige la carpeta, y los bloqueos funcionan allí desde entonces. El bloqueo es una nota para las personas, no una barrera: otro programa aún puede escribir el archivo. En un navegador no hay carpetas que mirar, y el comando lo indica.

### OVERKILL

Elimina objetos duplicados y ordena líneas y arcos que se superponen, para dibujos que llegan llenos de trazos dobles. `Designe objetos a limpiar`, {{key:Enter}}, luego {{key:Enter}} otra vez para limpiar con los ajustes mostrados, o cambie uno antes:

- `Tolerance`: qué tan cerca deben estar dos coordenadas para contar como iguales (0.000001 al inicio; 0 significa exactamente igual).
- `Ignore`: propiedades que pueden diferir entre dos objetos por lo demás iguales. Escriba un nombre para cambiarla: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, o `None` / `All`. {{key:Enter}} cuando termine.
- `Overlap`: activado o desactivado. Activado, las líneas sobre una misma recta que se superponen se vuelven una línea (una línea dentro de otra simplemente se borra), y los arcos de un mismo círculo que se superponen se vuelven un arco; los arcos que cierran una vuelta completa se vuelven un círculo, y un arco sobre un círculo se borra.
- `Ends`: activado o desactivado. Activado, las líneas sobre una misma recta y los arcos de un mismo círculo que solo se tocan de extremo a extremo se vuelven una sola pieza.

Cada tipo de objeto se revisa por duplicados: dos objetos son duplicados cuando su geometría es la misma dentro de la tolerancia y su capa, color, tipo de línea, escala de tipo de línea, grosor de línea, altura y transparencia coinciden (menos los que ignore). Las líneas y polilíneas abiertas también coinciden cuando están dibujadas al revés. El primer objeto en el orden de dibujo se queda y conserva sus propias propiedades. El comando informa cuántos objetos revisó y cuántos borró: duplicados, piezas superpuestas fusionadas, piezas unidas de extremo a extremo. Un {{cmd:UNDO}} lo deshace todo. Los ajustes duran hasta que cierre la ventana del dibujo.

Deja en paz: los objetos en capas bloqueadas y los objetos ocultos. No fusiona líneas con altura (Z) (los duplicados exactos de ellas sí se van), y no toca los segmentos dentro de una polilínea (no se adelgazan), una línea sobre un segmento de polilínea, ni una polilínea cerrada dibujada al revés.

### DRAWORDER

Cambia qué objetos se dibujan delante. `Designe objetos para reordenar`, {{key:Enter}}, luego `Encima de objetos`, `Debajo de objetos`, `Delante` o `Detrás` ({{key:Enter}} = `Detrás`). `Encima de objetos` y `Debajo de objetos` piden los objetos de referencia: la selección va justo delante del más adelante de ellos, o justo detrás del más atrás. Los objetos seleccionados conservan su orden entre ellos. Un paso de deshacer. El orden se guarda con el dibujo en DWG y DXF, donde es el orden en que se escriben los objetos.

En pantalla cada objeto se dibuja en el orden del dibujo, como lo dibujan otros programas que abren el archivo: un sombreado sólido, una polilínea ancha o una máscara de texto cubre las líneas y el texto detrás de él, y lo que está delante lo cubre. Donde una línea cruza un texto, se ven ambos. Las imágenes y las páginas PDF adjuntas se quedan bajo las líneas. En un dibujo muy grande cuyos rellenos y líneas se superponen y alternan más de 256 veces, los primeros 256 conservan su orden, y el resto dibuja sus rellenos bajo las líneas, para que volver a dibujar siga siendo rápido.

### TEXTTOFRONT

Lleva el texto, las cotas y las directrices delante de todo lo demás en el espacio abierto: `Texto`, `Cotas`, `Directrices` o `Todo` ({{key:Enter}} = `Todo`). Un paso de deshacer. Lo indica cuando no hay ninguno, o cuando ya están al frente.

### HATCHTOBACK

Envía cada sombreado del espacio abierto detrás de todo lo demás, para que los rellenos dejen de cubrir líneas y textos en el archivo guardado. Sin preguntas. Un paso de deshacer.

### ISOLATEOBJECTS

Alias: `ISOLATE`. Muestra solo los objetos seleccionados: todo lo demás del espacio abierto queda fuera de la vista hasta {{cmd:UNISOLATEOBJECTS}}. A diferencia de {{cmd:LAYISO}}, trabaja sobre los objetos que designe, sean cuales sean sus capas, y no cambia ninguna capa. Los objetos ocultos no se dibujan, no se designan, no se referencian, no se acercan con zoom ni se trazan, y los comandos que aceptan `ALL` los pasan por alto. Lo que dibuje mientras los objetos están aislados se muestra como de costumbre.

Es solo para la sesión: nada se guarda con el dibujo, no es un paso de deshacer, y al volver a abrir el dibujo se ve todo. Mientras hay objetos ocultos, la barra de estado muestra un botón con su número; haga clic en él para mostrarlos otra vez.

### HIDEOBJECTS

Oculta los objetos seleccionados hasta {{cmd:UNISOLATEOBJECTS}}. Las mismas reglas que {{cmd:ISOLATEOBJECTS}}: solo para la sesión, no se guarda, no es un paso de deshacer.

### UNISOLATEOBJECTS

Alias: `UNISOLATE`, `UNHIDE`. Muestra otra vez cada objeto ocultado por {{cmd:ISOLATEOBJECTS}} o {{cmd:HIDEOBJECTS}}, y dice cuántos volvieron.

### LAYLOCKFADE

Define cómo se ven los objetos en capas bloqueadas y si un clic los alcanza. Indica el estado actual, luego acepta:

- un número de 0 a 90: la cantidad de atenuado en porcentaje (50 al inicio). 0 desactiva el atenuado.
- `ON` u `OFF`: atenuado activado o desactivado, conservando la cantidad.
- `Pick`, luego `Yes` o `No`: ¿un clic puede seleccionar objetos en capas bloqueadas mientras no hay ningún comando en marcha? `No` (el predeterminado): no pueden designarse. `Yes`: un clic o una ventana los selecciona para que {{ui:Properties}} los muestre; siguen sin poder cambiarse, y el propio `Designe objetos` de un comando nunca los toma.

Las referencias a objetos encuentran los objetos en capas bloqueadas de cualquier forma. Los trazados nunca se atenúan. Ambos ajustes son suyos, no del dibujo, y también están en {{ui:Settings}} bajo {{ui:Locked layers}}.

### BURST

Descompone referencias de bloque y conserva lo que dicen sus atributos. `Designe referencias de bloque para descomponer`, {{key:Enter}}: cada referencia se reemplaza por los objetos del bloque, y el valor de cada atributo visible se vuelve texto simple en la capa propia de ese atributo (un atributo en la capa 0 cae en la capa de la referencia, como los demás objetos del bloque en la capa 0). Los atributos invisibles se descartan. Un bloque dentro del bloque sigue siendo una referencia de bloque. Un paso de deshacer; informa cuántas referencias se descompusieron y cuántos valores de atributo se volvieron texto.

Rechaza un dibujo vinculado por nombre (enlácelo primero, o copie desde él con {{cmd:NCOPY}}), y deja en paz los demás objetos seleccionados. Para referencias de bloque {{cmd:EXPLODE}} da los mismos objetos; {{cmd:BURST}} toma solo referencias de bloque y cuenta el texto de los atributos.

### TXT2MTXT

Alias: `T2M`. Une textos de una línea en un texto de párrafo. `Designe textos de una línea para unir`, {{key:Enter}}, luego `Párrafo` (las líneas se unen y se ajustan al ancho de la línea más ancha) o `Líneas` (cada texto se queda como una línea propia); {{key:Enter}} toma el último usado. Las líneas se ordenan de arriba abajo, luego de izquierda a derecha, a lo largo de la dirección del texto superior. El párrafo cuelga de la esquina superior izquierda del texto superior y toma su altura, rotación, estilo, capa y color. Un paso de deshacer.

Un texto que ya es de párrafo, los textos en blanco y los demás objetos de la selección se dejan en paz, y el comando indica cuántos.

### NCOPY

Copia objetos desde una referencia de bloque o un dibujo vinculado hacia el dibujo, sin descomponer nada. `Designe un objeto dentro de una referencia de bloque o de un dibujo vinculado`: el objeto más cercano al punto designado se copia donde se muestra, sin importar cuántos bloques de profundidad esté; designe más, luego {{key:Enter}}. Luego `Punto base para mover las copias`: {{key:Enter}} las deja en su lugar, o dé un punto base y un segundo punto. Todo el comando es un paso de deshacer.

Una copia toma la capa en que se muestra: un objeto en la capa 0 dentro de un bloque cae en la capa de la referencia en la que estaba, y un color PorBloque se vuelve el color de esa referencia. Desde un dibujo vinculado, la capa `Plano|Muros` se vuelve `Plano$0$Muros` (el nombre que da el vínculo), hecha con el color, tipo de línea y grosor de línea de la capa vinculada. El valor de un atributo se copia como texto. Las referencias de bloque en capas bloqueadas no se pueden designar.

### FLATTEN

Pone en 0 la altura (Z) y el grosor de los objetos seleccionados. `Designe objetos a aplanar`, {{key:Enter}}. También aplana los objetos dentro de las definiciones de bloque que usa la selección (y los bloques dentro de ellas), así que cada referencia a esos bloques cambia; los dibujos vinculados se dejan como están. Un paso de deshacer; indica cuántos objetos cambiaron, y avisa cuando ninguno tenía altura o grosor.

Lo que CadCraft conserva tercera dimensión en un dibujo 2D es: una altura en círculos, arcos, elipses, puntos, textos, referencias de bloque, sombreados, directrices y polilíneas (su elevación), una altura en cada extremo de una línea, y un grosor en líneas, círculos, arcos, polilíneas, puntos y textos, tal como estaban en el archivo. {{cmd:FLATTEN}} borra exactamente eso. No toca el modelo 3D de la pestaña 3D, ni caras 3D ni sólidos, y un objeto dibujado en un plano inclinado ya se llevó al plano del dibujo cuando se abrió el archivo.

### BREAKLINE

Dibuja una línea con un símbolo de corte, para una vista que se corta. Indica el tamaño y la prolongación actuales, luego `Primer punto de la línea de corte` (o `Tamaño` / `Prolongación` para cambiarlos antes), `Segundo punto`, y `Dónde va el símbolo de corte`: haga clic a lo largo de la línea, o {{key:Enter}} para el medio. El resultado es una polilínea en la capa actual: la línea, que pasa de cada punto por la prolongación, con un trazo en forma de Z tan alto como el tamaño y la mitad de largo.

`Tamaño` y `Prolongación` se recuerdan como sus ajustes (el tamaño empieza en el doble de la altura del texto de cota por la escala de cota; la prolongación en la mitad del tamaño). {{key:Enter}} repite el comando.

### AUDIT

Revisa el dibujo abierto en busca de daños y los repara. {{cmd:AUDIT}} revisa cada objeto del modelo, de las hojas y dentro de los bloques, y la tabla de capas, y enumera lo que encuentra por tipo:

- números que no son finitos o son absurdamente grandes;
- objetos sin tamaño: una línea sin longitud, un círculo sin radio, una polilínea con un solo punto, un texto sin letras o altura, una referencia de bloque con escala cero;
- objetos en una capa que el dibujo no tiene; referencias a un bloque que no existe; nombres de estilo de texto y de cota y de tipo de línea que no están en el dibujo;
- bloques que se contienen a sí mismos, directa o indirectamente a través de otros bloques;
- objetos que comparten un id, una clave o un identificador de archivo;
- cotas sin los puntos desde los que se miden, y sombreados cuyo contorno no es un perfil cerrado.

Luego pregunta `¿Corregirlos? [Sí/No]`. `No` no cambia nada. `Sí` repara todo en un paso de deshacer: lo que no se puede dibujar se quita (números incorrectos, sin tamaño, bloque que falta, cota rota, sombreado sin contorno usable, la referencia que cierra un círculo de bloques); una capa que falta se crea; los nombres de estilo y de tipo de línea desconocidos vuelven a sus predeterminados; una clave compartida se reemplaza. Indica cuántos objetos se quitaron y cuántos se repararon. Los mismos hallazgos aparecen en el panel Problemas, cada uno con su propio {{ui:Repair}}.

No rechaza nada, pero solo revisa lo que CadCraft mismo dibuja: los datos guardados para otros programas (sólidos 3D, objetos OLE) no se abren.

### RECOVER

Abre un DXF o DWG dañado. {{cmd:RECOVER}} pide el archivo, lee lo que se puede leer en lugar de rechazarlo, enumera lo que omitió o supuso, y luego revisa y repara el dibujo como lo hace {{cmd:AUDIT}} con `Sí`.

- DXF: las líneas que no son parte de un par código y valor se omiten hasta que los pares vuelven a alinearse; una sección sin fin se cierra; un archivo cortado se lee hasta el corte; un DXF binario cortado se lee hasta su último valor completo. Cuando una sección, un bloque o un objeto aún no se puede leer, se deja fuera y se nombra, y la lectura continúa más allá de él.
- DWG: los objetos que fallan sus comprobaciones o no se pueden decodificar se dejan fuera, y una lista de objetos perdida se reconstruye recorriendo los datos de objeto.

El archivo en disco no se cambia. El dibujo recuperado se abre sin guardar: guárdelo con un nombre nuevo. Un archivo del que no se puede leer nada se rechaza, con la razón.

### LEGACYTEXT

Convierte texto escrito con fuentes vietnamitas antiguas de 8 bits a Unicode. Nombres cortos `TEXTTOUNICODE` y `VNTEXT`.

Los dibujos vietnamitas más antiguos guardan su texto como caracteres occidentales que solo la fuente convierte en vietnamita: texto TCVN3 en las fuentes ABC (`.VnTime`, `.VnArial`, y las fuentes en mayúsculas cuyos nombres terminan en `H`), y texto VNI en las fuentes VNI (`VNI-Times`). CadCraft muestra ese texto como se lee en cuanto se abre el dibujo, según la fuente de su estilo de texto, del objeto, o de un tramo dentro del texto de párrafo; el archivo sigue guardando los caracteres antiguos.

{{cmd:LEGACYTEXT}} indica cuántos textos encontró en cada codificación y pregunta `¿Convertir … a Unicode?`. `Sí` reescribe cada uno (modelo, hojas, bloques, valores y definiciones de atributos) y da a los estilos de texto una fuente Unicode (Times New Roman, Arial o Courier New según el tipo de la fuente antigua), en un paso de deshacer. El formato dentro del texto de párrafo se conserva.

Cuando ningún texto usa una fuente conocida (un estilo que perdió su nombre de fuente), pide `Leer los textos seleccionados como [Tcvn3/Vni/None]`: elija la codificación y designe los textos. El texto que ya es Unicode se deja en paz. El texto de sustitución de cotas y el texto de multidirectrices no se convierten.
