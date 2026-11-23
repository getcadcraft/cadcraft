---
title: Formas de muro, cortes, desfases y bloqueos para muros 2D
summary: Dibuje muros como rectángulos, polígonos y arcos, córtelos y vuélvalos a unir, muévalos por una cota, y bloquee un muro a otro o a una línea de rejilla. Las mismas herramientas que los muros de BimCraft.
keywords: muro, muros, barra de muros, botones de muro, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de unión, bisel, plano, en escuadra, candado, pinzamiento, arrastrar extremo, girar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unir, no permitir unión, bloqueo, línea de rejilla, dividir, hueco, desfase, línea de ubicación
from: 49044181
---

Estas herramientas trabajan sobre los muros 2D de `WALL` (vea "Dibujar muros, puertas y ventanas inteligentes en 2D"). Usan las mismas reglas que las herramientas de muro de BimCraft, así que un muro se comporta igual en ambos.

## Dónde están las herramientas

- En la barra de herramientas, el grupo {{ui:Walls}} tiene {{ui:Wall}}, {{ui:Rectangle}}, {{ui:Split}} y {{ui:Offset}}. Su menú {{ui:More}} tiene todas las demás herramientas de muro, cada una con su icono.
- En los estilos de menú de cinta, la pestaña {{ui:Walls}} tiene los paneles {{ui:Draw walls}}, {{ui:Cut}}, {{ui:Set and modify}}, {{ui:Hold}} y {{ui:Join}}.
- En una presentación, las filas de herramientas y la caja de herramientas muestran el mismo grupo {{ui:Walls}}.
- También puede escribir cualquier comando nombrado abajo.

## Las uniones se guardan

Cuando el extremo de un muro cae sobre otro muro, CadCraft guarda esa unión en ambos muros. Ya no recalcula las uniones a partir de dónde están los extremos por casualidad. Así que:

- Los muros unidos a un muro que mueve lo siguen y siguen unidos. Sus extremos se deslizan por sus propias líneas, así que nada gira.
- Si arrastra un extremo de un muro por su pinzamiento, el muro unido allí conserva su dirección. Su extremo se desliza por su propia línea para encontrar el muro arrastrado, así que el extremo arrastrado cae sobre esa línea, no siempre bajo el cursor. La vista previa muestra dónde. Un muro que topa contra el muro arrastrado sigue por su propia línea. Arrastrar el extremo recto a lo largo del muro cambia su longitud, y el muro unido allí se mueve con él.
- `ROTATE` sobre un muro unido funciona igual: los extremos de sus vecinos se deslizan por sus propias líneas hasta el muro girado.
- Para mover una esquina, seleccione los dos muros que se encuentran allí y arrastre el pinzamiento de la esquina. Ambos muros se quedan en la esquina y ambos giran. Los muros más allá se quedan como estaban.
- Mantenga {{key:Alt}} al hacer clic en el nuevo lugar del pinzamiento para romper las uniones a propósito: el muro va donde lo puso y nada lo sigue.
- Si un arrastre haría girar un muro unido a través de su propio extremo lejano, se rechaza y nada cambia.
- Un muro que dibuja con {{ui:Disallow joins}} (`D` en `WALL`), o que desactiva en Propiedades ({{ui:Disallow join at start}}, {{ui:Disallow join at end}}), queda libre en ese extremo, aunque toque otro muro, hasta que vuelva a permitirlo.
- `WALLDISJOIN` ({{ui:Disallow join}} en el grupo {{ui:Walls}}) hace lo mismo con un clic: haga clic en un muro cerca de un extremo para no permitir uniones allí, y haga clic otra vez para permitirlas.
- Un dibujo antiguo todavía no tiene uniones guardadas. El primer cambio que haga las encuentra una vez, a partir de cómo estaban los muros antes del cambio, y las guarda. `WALLJOINS` lo hace de inmediato.
- Los archivos DWG y DXF llevan las uniones dentro de cada muro. CadCraft las lee tal como se guardaron. Un programa que no guarda datos extendidos muestra los muros como bloques normales y descarta las uniones; una unión cuyos muros se movieron en otro programa se descarta la próxima vez que cambie cualquiera de los dos muros.

## Estilo de unión de una esquina

Una esquina donde dos muros se encuentran de extremo a extremo se dibuja como bisel, salvo que elija otro estilo.

- `WALLJOINSTYLE` ({{ui:Join style}} en el grupo {{ui:Walls}}): haga clic en la esquina. Cada clic pasa al siguiente estilo: {{ui:Mitre}}, {{ui:Butt}}, {{ui:Square off}}, y luego {{ui:Mitre}} otra vez. Escriba `T` para cambiar cuál de los dos muros pasa por la esquina en la que hizo clic por último. Pulse {{key:Enter}} para terminar. Una ejecución del comando es un paso de deshacer.
- {{ui:Butt}}: un muro pasa hasta la cara lejana del otro, y el otro se detiene contra su lado. {{ui:Square off}}: igual, pero el muro que pasa termina en escuadra consigo mismo. En un ángulo recto los dos se ven iguales.
- En Propiedades de un muro: {{ui:Join style at start}}, {{ui:Join style at end}}, y {{ui:Runs through at start}}, {{ui:Runs through at end}}.
- El estilo se guarda con ambos muros y viaja en archivos DWG y DXF. Una copia de un muro empieza sin él.
- Una unión en T no tiene estilo que elegir: pasa el muro cuyo lado se encuentra. Una esquina donde se encuentran tres o más muros se queda como bisel. Lo mismo ocurre con una esquina muy aguda (menor de unos 30 grados) y con dos muros en una misma línea.

## Dibujar formas de muro

Cada una crea los muros en un paso de deshacer, con las esquinas unidas. En `WALL`, `O` fija un desfase de colocación (qué tan a la izquierda de sus clics va el muro), y `D` desactiva la unión para los muros que dibuje a continuación.

- `WALLRECT` (`WR`): dos esquinas opuestas, como `RECTANG`.
- `WALLROT`: el primer lado, luego qué tan lejos va el otro lado, para un rectángulo con cualquier ángulo.
- `WALLPOLY` (`WP`): el número de lados (3 a 64), el centro, `I` para inscrito o `C` para circunscrito, luego el radio, como `POLYGON`: haga clic en él, o escríbalo (un radio escrito va hacia el puntero, o a lo largo de X cuando el puntero sigue en el centro).
- `WALLARC` (`WARC`): centro, inicio, fin. `D` invierte el arco.
- `WALLTAN`: haga clic cerca del extremo de un muro, luego en el extremo del arco, que sale a lo largo de ese muro.
- `WALLPICK`: haga clic en una línea o polilínea y diga si también debe tomar las líneas unidas a ella.
- `WALLTRACE`: haga clic dentro de un área cerrada de líneas y muros para poner muros alrededor de la más pequeña.

Los muros del plano son rectos, así que un arco se dibuja como muros rectos cortos de 15 grados cada uno. Se unen como cualquier esquina.

## Cortar muros

- `WALLSPLIT` (`WS`): haga clic en el muro, luego en el punto. `C` corta donde otro muro lo cruza, `G` deja un hueco entre las partes, `F` deja los extremos cortados libres en lugar de unidos. La primera parte conserva el lugar del muro en el dibujo, y puertas y ventanas van con su parte. Un corte a través de una puerta o ventana se rechaza.
- `WALLSPLITGAP` ({{ui:Split with gap}}): el mismo corte, pero pide primero el hueco.
- `WALLDELSEG`: haga clic en el muro, luego en los dos extremos del tramo a borrar.
- `WALLREJOIN`: haga clic en dos partes de un muro para volverlas un solo muro.

## Mover muros por distancia

- `WALLDIM` ({{ui:Edit by dimension}}): haga clic en una cota lineal o alineada que va de un muro a otro, luego escriba el nuevo valor. El muro en el extremo lejano se mueve en escuadra consigo mismo, el muro del primer extremo se mantiene, y los muros unidos a él lo siguen. El punto lejano de la cota se mueve con su muro, así que la cota muestra el valor que escribió.
- `WALLOFFSET` (`WO`): haga clic en un muro, luego en el lado al que moverlo (`D` escribe una distancia, `C` hace una copia en lugar de mover).
- `WALLSTRETCH`: una ventana alrededor de los extremos de los muros, luego un punto base y un segundo punto.
- En Propiedades, una {{ui:Length}} escrita mantiene el inicio y lleva consigo el muro unido en el extremo lejano; una nueva {{ui:Thickness}} crece alejándose de la {{ui:Location line}} que elija (la cara izquierda, la cara derecha o el centro).

## Cota entre ejes de muros

El eje de un muro no se dibuja, pero la referencia a objetos lo encuentra. Con la referencia a objetos activa ({{key:F3}}), mueva el puntero sobre el centro del grosor de un muro: el marcador dice `Centro del muro: punto final` o `Centro del muro: punto medio`, y el eje aparece como línea discontinua mientras el marcador está encima. Con {{ui:Perpendicular}} o {{ui:Nearest}} activados en la lista de referencias a objetos, esos también funcionan sobre el eje.

1. Inicie `DIMLINEAR` (o `DIMALIGNED`).
2. Haga clic en el primer muro donde el marcador diga `Centro del muro: punto medio` o `Centro del muro: punto final`.
3. Haga clic en el segundo muro de la misma forma, luego haga clic donde va la línea de cota.
4. Para cambiar la distancia, inicie `WALLDIM`, haga clic en la cota y escriba el nuevo valor. El segundo muro se mueve.

La referencia al eje del muro funciona en cada comando que pide un punto.

## Bloquear muros

Un bloqueo queda con el muro en el archivo. Si mueve un muro bloqueado, el otro lo sigue. Si un cambio mueve los dos muros de forma distinta, se rechaza y nada cambia.

- `WALLHOLD`: bloquea un muro a otro muro. `A` lo mueve primero sobre la línea del otro muro, `K` conserva la distancia que tiene.
- `WALLHOLDDIM`: bloquea la distancia entre dos muros paralelos.
- `WALLGRID`: bloquea un muro a una línea de rejilla (una línea en una capa de rejilla con su etiqueta en texto en un extremo), ya sea a lo largo de ella o con un extremo sobre ella. Un muro bloqueado a lo largo de la línea conserva la distancia que tiene de ella. Mueva la línea de rejilla con `GRIDMOVE` y el muro la sigue completo, con sus muros unidos. Un muro que va a lo largo de una línea de rejilla se mueve completo con ella aun sin bloqueo, y un muro que solo termina en la línea se estira por ese extremo.
- `WALLHOLDS` lista los bloqueos. `WALLUNHOLD` quita los bloqueos de un muro.
- Cada bloqueo muestra un pequeño candado en el plano: junto al centro del muro bloqueado, o junto al extremo bloqueado a una línea de rejilla. Haga clic en un candado para quitar ese bloqueo.

## Lo que todavía no está

Los bloqueos usan las líneas centrales de los muros. Los muros aquí no tienen capas, así que no hay prioridad de capas en una unión, y los muros no se curvan (vea los arcos arriba). Nadie ha probado estas herramientas en un dibujo grande, y no se han verificado en otro programa CAD.
