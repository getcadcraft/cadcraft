---
title: Formas de muro, cortes, desfases y bloqueos para muros 2D
summary: Dibuje muros como rectángulos, polígonos y arcos, divídalos y únalos de nuevo, muévalos por una cota, y bloquee un muro a otro o a una línea de rejilla. Las mismas herramientas que los muros de BimCraft.
keywords: muro, muros, barra de muros, botones de muro, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de unión, bisel, plano, en escuadra, candado, pinzamiento, arrastrar extremo, girar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unir, no permitir unión, bloqueo, línea de rejilla, dividir, hueco, desfase, línea de ubicación
from: f41e7433
---

Estas herramientas trabajan con los muros 2D creados con `WALL` (vea «Dibujar muros, puertas y ventanas inteligentes en 2D»). Usan las mismas reglas que las herramientas de muros de BimCraft, así que un muro se comporta igual en ambas.

## Dónde están las herramientas

- En la barra de herramientas, el grupo {{ui:Muros}} tiene {{ui:Muro}}, {{ui:Rectángulo}}, {{ui:Dividir}} y {{ui:Desfase}}. Su menú {{ui:Más}} tiene todas las demás herramientas de muro, cada una con su icono.
- En los estilos de menú de cinta, la pestaña {{ui:Muros}} tiene los paneles {{ui:Dibujar muros}}, {{ui:Cortar}}, {{ui:Establecer y modificar}}, {{ui:Mantener}} y {{ui:Juntar}}.
- En una presentación, las filas de herramientas y la caja de herramientas muestran el mismo grupo {{ui:Muros}}.
- También puede escribir cualquier comando indicado abajo.

## Las uniones se guardan

Cuando el extremo de un muro cae sobre otro muro, CadCraft guarda esa unión con ambos muros. Ya no la vuelve a calcular a partir de donde están los extremos. Por eso:

- Los muros unidos a un muro que mueve lo siguen y permanecen unidos. Sus extremos se deslizan a lo largo de su propia línea, así que nada gira.
- Arrastre un extremo de un muro por su pinzamiento y el muro unido allí también conserva su dirección. Su extremo se desliza a lo largo de su propia línea hasta encontrar el muro arrastrado, así que el extremo arrastrado cae sobre esa línea, no siempre bajo el cursor. La vista previa muestra dónde. Un muro que llega a tope contra el muro arrastrado sigue a lo largo de su propia línea. Arrastrar el extremo en línea recta sobre el muro cambia su longitud, y el muro unido allí se mueve con él.
- `ROTATE` sobre un muro unido funciona igual: los extremos de sus vecinos se deslizan a lo largo de sus propias líneas hasta el muro girado.
- Para mover una esquina, seleccione los dos muros que se encuentran allí y arrastre el pinzamiento de la esquina. Ambos muros permanecen en la esquina y ambos giran. Los muros más allá se quedan como estaban.
- Mantenga pulsado {{key:Alt}} al hacer clic en la nueva posición del pinzamiento para romper las uniones a propósito: el muro va donde usted lo puso y nada lo sigue.
- Si un arrastre haría girar un muro unido hacia atrás a través de su propio extremo lejano, se rechaza y no cambia nada.
- Un muro que dibuje con {{ui:No permitir uniones}} (`D` en `WALL`), o que desactive en Propiedades ({{ui:No permitir unión al inicio}}, {{ui:No permitir unión al final}}), queda libre en ese extremo, aunque toque otro muro, hasta que vuelva a permitirla.
- `WALLDISJOIN` ({{ui:No permitir unión}} en el grupo {{ui:Muros}}) hace lo mismo con un clic: haga clic en un muro cerca de un extremo para no permitir uniones en ese extremo, y haga clic de nuevo para permitirlas.
- Un dibujo antiguo todavía no tiene uniones guardadas. El primer cambio que haga las busca una vez, a partir de cómo estaban los muros antes del cambio, y las guarda. `WALLJOINS` lo hace de inmediato.
- Los archivos DWG y DXF llevan las uniones dentro de cada muro. CadCraft las lee tal como se guardaron. Un programa que no conserva datos extendidos muestra los muros como bloques simples y descarta las uniones, y una unión cuyos muros se movieron en otro programa se descarta la próxima vez que cambie cualquiera de los dos muros.

## Estilo de unión de una esquina

Una esquina donde dos muros se encuentran extremo con extremo se dibuja en bisel, salvo que elija otro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de unión}} en el grupo {{ui:Muros}}): haga clic en la esquina. Cada clic pasa al siguiente estilo: {{ui:Bisel}}, {{ui:Plano}}, {{ui:En escuadra}}, y luego {{ui:Bisel}} otra vez. Escriba `T` para cambiar cuál de los dos muros pasa por la esquina en la que hizo clic por último. Pulse {{key:Enter}} para terminar. Una ejecución del comando es un paso de deshacer.
- {{ui:Plano}}: un muro pasa hasta la cara lejana del otro, y el otro se detiene contra su lado. {{ui:En escuadra}}: igual, pero el muro que pasa termina en escuadra respecto a sí mismo. En ángulo recto, las dos se ven iguales.
- En Propiedades de un muro: {{ui:Estilo de unión al inicio}}, {{ui:Estilo de unión al final}}, y {{ui:Pasante al inicio}}, {{ui:Pasante al final}}.
- El estilo se guarda con ambos muros y viaja en archivos DWG y DXF. Una copia de un muro empieza sin él.
- Una unión en T no tiene estilo que elegir: pasa el muro cuyo lado es tocado. Una esquina donde se encuentran tres o más muros sigue en bisel. Lo mismo ocurre con una esquina muy aguda (menor a unos 30 grados) y con dos muros en una misma línea.

## Dibujar formas de muro

Cada una crea los muros en un paso de deshacer, con las esquinas unidas. En `WALL`, `O` fija un desfase de colocación (qué tan a la izquierda de sus clics va el muro) y `D` desactiva la unión para los muros que dibuje a continuación.

- `WALLRECT` (`WR`): dos esquinas opuestas, como `RECTANG`.
- `WALLROT`: el primer lado, luego qué tan lejos llega el otro lado, para un rectángulo a cualquier ángulo.
- `WALLPOLY` (`WP`): el número de lados (de 3 a 64), el centro, `I` para inscrito o `C` para circunscrito, y luego el radio, como `POLYGON`.
- `WALLARC` (`WARC`): centro, inicio, fin. `D` invierte el sentido del arco.
- `WALLTAN`: haga clic cerca del extremo de un muro, luego en el extremo del arco, que sale a lo largo de ese muro.
- `WALLPICK`: haga clic en una línea o polilínea y diga si también debe tomar las líneas unidas a ella.
- `WALLTRACE`: haga clic dentro de un área cerrada de líneas y muros para colocar muros alrededor de la más pequeña.

Los muros de planta son rectos, así que un arco se dibuja como muros cortos de 15 grados cada uno. Se unen como cualquier esquina.

## Cortar muros

- `WALLSPLIT` (`WS`): haga clic en el muro y luego en el punto. `C` corta donde otro muro lo cruza, `G` deja un hueco entre las partes, `F` deja los extremos del corte libres en lugar de unidos. La primera parte conserva el lugar del muro en el dibujo, y las puertas y ventanas van con su parte. Un corte a través de una puerta o ventana se rechaza.
- `WALLSPLITGAP` ({{ui:Dividir con hueco}}): la misma división, pero pide primero el hueco.
- `WALLDELSEG`: haga clic en el muro, luego en los dos extremos del tramo a borrar.
- `WALLREJOIN`: haga clic en dos partes de un mismo muro para volverlas a unir.

## Mover muros por distancia

- `WALLDIM`: haga clic en una cota lineal o alineada que vaya de un muro a otro, luego escriba el nuevo valor. El muro del extremo lejano se mueve en escuadra respecto a sí mismo, el muro del primer extremo se mantiene, y los muros unidos a él lo siguen.
- `WALLOFFSET` (`WO`): haga clic en un muro y luego en el lado al que moverlo (`D` escribe una distancia, `C` crea una copia en su lugar).
- `WALLSTRETCH`: una ventana alrededor de los extremos del muro, luego un punto base y un segundo punto.
- En Propiedades, una {{ui:Longitud}} escrita mantiene el inicio y lleva consigo el muro unido en el extremo lejano. Una nueva {{ui:Altura de objeto}} crece alejándose de la {{ui:Línea de ubicación}} que elija (la cara izquierda, la cara derecha o el centro).

## Bloquear muros

Un bloqueo se conserva con el muro en el archivo. Si mueve un muro bloqueado, el otro lo sigue. Si un cambio mueve ambos muros de forma distinta, se rechaza y no cambia nada.

- `WALLHOLD`: bloquea un muro a otro muro. `A` lo mueve primero a la línea del otro muro, `K` conserva la distancia que tiene.
- `WALLHOLDDIM`: bloquea la distancia entre dos muros paralelos.
- `WALLGRID`: bloquea un muro a una línea de rejilla (una línea en una capa de rejilla con su etiqueta en texto en un extremo), ya sea a lo largo de ella o con un extremo sobre ella. Un muro bloqueado a lo largo de la línea conserva la distancia que tiene respecto a ella. Mueva la línea de rejilla con `GRIDMOVE` y el muro la sigue completo, con sus muros unidos. Un muro que está a lo largo de una línea de rejilla se mueve completo con ella aun sin bloqueo, y un muro que solo termina en la línea se estira por ese extremo.
- `WALLHOLDS` lista los bloqueos. `WALLUNHOLD` quita los bloqueos de un muro.
- Cada bloqueo muestra un pequeño candado en la planta: junto al centro del muro bloqueado, o junto al extremo bloqueado a una línea de rejilla. Haga clic en un candado para quitar ese bloqueo.

## Lo que todavía no está aquí

Los bloqueos usan las líneas centrales de los muros. Los muros aquí no tienen capas, así que no hay prioridad de capa en una unión, y los muros no se curvan (vea los arcos arriba). Nadie ha probado estas herramientas en un dibujo grande, y no se han verificado en otro programa de CAD.
