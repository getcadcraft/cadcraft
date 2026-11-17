---
title: Formas de muro, cortes, desfases y bloqueos para muros 2D
summary: Dibuje muros como rectángulos, polígonos y arcos, divídalos y vuelva a unirlos, desplácelos una cota y bloquee un muro a otro o a una línea de cuadrícula. Las mismas herramientas que los muros de BimCraft.
keywords: muro, barra de muros, botones de muro, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de unión, inglete, a tope, a escuadra, candado, pinzamiento, arrastrar extremo, girar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unión, no permitir unión, bloqueo, línea de cuadrícula, dividir, hueco, desfase, línea de ubicación
from: f41e7433
---

Estas herramientas trabajan sobre los muros 2D creados con `WALL` (vea «Dibujar muros, puertas y ventanas inteligentes en 2D»). Usan las mismas reglas que las herramientas de muro de BimCraft, así que un muro se comporta igual en ambas.

## Dónde están las herramientas

- En la barra de herramientas, el grupo {{ui:Muros}} tiene {{ui:Muro}}, {{ui:Rectángulo}}, {{ui:Dividir}} y {{ui:Desfase}}. Su menú {{ui:Más}} tiene todas las demás herramientas de muro, cada una con su icono.
- En los estilos de menú de cinta, la pestaña {{ui:Muros}} tiene los paneles {{ui:Dibujar muros}}, {{ui:Cortar}}, {{ui:Definir y modificar}}, {{ui:Mantener}} y {{ui:Juntar}}.
- En una disposición, las filas de herramientas y la caja de herramientas muestran el mismo grupo {{ui:Muros}}.
- También puede escribir cualquiera de los comandos indicados a continuación.

## Las uniones se guardan

Cuando el extremo de un muro cae sobre otro muro, CadCraft guarda esa unión con ambos muros. Ya no recalcula las uniones a partir de dónde están los extremos. Así:

- Los muros unidos a un muro que mueve lo siguen y permanecen unidos. Sus extremos se deslizan por sus propias líneas, así que nada gira.
- Si arrastra un extremo de un muro por su pinzamiento, el muro unido allí conserva también su dirección. Su extremo se desliza por su propia línea hasta encontrar el muro arrastrado, así que el extremo arrastrado cae sobre esa línea, no siempre bajo el cursor. La vista previa muestra dónde. Un muro que choca contra el muro arrastrado sigue su propia línea. Arrastrar el extremo en línea recta a lo largo del muro cambia su longitud, y el muro unido allí se mueve con él.
- `ROTATE` sobre un muro unido funciona igual: los extremos de sus vecinos se deslizan por sus propias líneas hasta el muro girado.
- Para mover una esquina, seleccione los dos muros que se encuentran allí y arrastre el pinzamiento de la esquina. Ambos muros siguen en la esquina y ambos giran. Los muros más alejados siguen como estaban.
- Mantenga pulsado {{key:Alt}} al hacer clic en la nueva posición del pinzamiento para romper las uniones a propósito: el muro va donde lo ponga y nada le sigue.
- Si un arrastre hiciera girar un muro unido hacia atrás, atravesando su propio extremo lejano, se rechaza y no cambia nada.
- Un muro que dibuja con {{ui:No permitir uniones}} (`D` en `WALL`), o que desactiva en Propiedades ({{ui:No permitir unión en el inicio}}, {{ui:No permitir unión en el final}}), queda libre en ese extremo, aunque toque otro muro, hasta que vuelva a permitirlo.
- `WALLDISJOIN` ({{ui:No permitir unión}} en el grupo {{ui:Muros}}) hace lo mismo con un clic: haga clic en un muro cerca de un extremo para no permitir uniones en ese extremo, y vuelva a hacer clic para permitirlas.
- Un dibujo antiguo todavía no tiene uniones guardadas. El primer cambio que haga las localiza una vez, a partir de cómo estaban los muros antes del cambio, y las guarda. `WALLJOINS` lo hace de inmediato.
- Los archivos DWG y DXF llevan las uniones dentro de cada muro. CadCraft las lee tal como se guardaron. Un programa que no conserva datos extendidos muestra los muros como bloques simples y descarta las uniones, y una unión cuyos muros se movieron en otro programa se descarta la próxima vez que cambie cualquiera de los dos muros.

## Estilo de unión de una esquina

Una esquina donde dos muros se encuentran extremo con extremo se dibuja a inglete, a menos que elija otro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de unión}} en el grupo {{ui:Muros}}): haga clic en la esquina. Cada clic pasa al siguiente estilo: {{ui:Inglete}}, {{ui:A tope}}, {{ui:A escuadra}} y de nuevo {{ui:Inglete}}. Escriba `T` para cambiar cuál de los dos muros pasa por la esquina en la que hizo clic por última vez. Pulse {{key:Enter}} para terminar. Una ejecución del comando es un paso de deshacer.
- {{ui:A tope}}: un muro pasa hasta la cara lejana del otro, y el otro se detiene contra su lado. {{ui:A escuadra}}: lo mismo, pero el muro que pasa termina a escuadra consigo mismo. En ángulo recto las dos se ven igual.
- En Propiedades de un muro: {{ui:Estilo de unión al inicio}}, {{ui:Estilo de unión al final}}, y {{ui:Pasa por el inicio}}, {{ui:Pasa por el final}}.
- El estilo se guarda con ambos muros y viaja en los archivos DWG y DXF. Una copia de un muro empieza sin él.
- Una unión en T no tiene estilo que elegir: pasa el muro cuyo lado se encuentra. Una esquina donde se encuentran tres o más muros sigue siendo a inglete. Lo mismo ocurre con una esquina muy aguda (menos de unos 30 grados) y con dos muros en una misma línea.

## Formas de muro

Cada una crea los muros en un paso de deshacer, con las esquinas unidas. En `WALL`, `O` fija un desfase de colocación (a qué distancia a la izquierda de sus clics va el muro), y `D` desactiva la unión para los muros que dibuje a continuación.

- `WALLRECT` (`WR`): dos esquinas opuestas, como `RECTANG`.
- `WALLROT`: el primer lado, y después hasta dónde llega el otro lado, para un rectángulo con cualquier ángulo.
- `WALLPOLY` (`WP`): el número de lados (de 3 a 64), el centro, `I` para inscrito o `C` para circunscrito, y luego el radio, como `POLYGON`.
- `WALLARC` (`WARC`): centro, inicio, final. `D` invierte el sentido del arco.
- `WALLTAN`: haga clic cerca del extremo de un muro, y después en el final del arco, que sale a lo largo de ese muro.
- `WALLPICK`: haga clic en una línea o polilínea e indique si también debe tomar las líneas unidas a ella.
- `WALLTRACE`: haga clic dentro de un área cerrada de líneas y muros para poner muros alrededor de la más pequeña.

Los muros de planta son rectos, así que un arco se dibuja como muros rectos cortos de 15 grados cada uno. Se unen como cualquier otra esquina.

## Cortar muros

- `WALLSPLIT` (`WS`): haga clic en el muro y luego en el punto. `C` corta donde lo cruza otro muro, `G` deja un hueco entre las partes, `F` deja los extremos del corte libres en lugar de unidos. La primera parte conserva el lugar del muro en el dibujo, y las puertas y ventanas van con su parte. Un corte a través de una puerta o ventana se rechaza.
- `WALLSPLITGAP` ({{ui:Dividir con hueco}}): la misma división, pero pide primero el hueco.
- `WALLDELSEG`: haga clic en el muro y luego en los dos extremos del trozo que quiere borrar.
- `WALLREJOIN`: haga clic en dos partes de un mismo muro para volver a convertirlas en una.

## Mover muros por distancia

- `WALLDIM`: haga clic en una cota lineal o alineada que vaya de un muro a otro, y luego escriba el nuevo valor. El muro del extremo lejano se mueve a escuadra consigo mismo, el muro del primer extremo se mantiene, y los muros unidos a él le siguen.
- `WALLOFFSET` (`WO`): haga clic en un muro y luego en el lado al que moverlo (`D` escribe una distancia, `C` crea una copia en su lugar).
- `WALLSTRETCH`: una ventana alrededor de los extremos del muro, luego un punto base y un segundo punto.
- En Propiedades, una {{ui:Longitud}} escrita mantiene el inicio y arrastra consigo el muro unido en el extremo lejano, y un nuevo {{ui:Altura de objeto}} crece alejándose de la {{ui:Línea de ubicación}} que elija (la cara izquierda, la derecha o el centro).

## Bloquear muros

Un bloqueo permanece con el muro en el archivo. Si mueve un muro bloqueado, el otro le sigue. Si un mismo cambio mueve los dos muros de forma distinta, se rechaza y no cambia nada.

- `WALLHOLD`: bloquea un muro a otro muro. `A` lo mueve primero sobre la línea del otro muro, `K` conserva la distancia que tiene.
- `WALLHOLDDIM`: bloquea la distancia entre dos muros paralelos.
- `WALLGRID`: bloquea un muro a una línea de cuadrícula (una línea en una capa de cuadrícula con su etiqueta en texto en un extremo), a lo largo de ella o con un extremo sobre ella. Un muro bloqueado a lo largo de la línea conserva la distancia que tiene respecto a ella. Mueva la línea de cuadrícula con `GRIDMOVE` y el muro la sigue entero, con sus muros unidos. Un muro que está a lo largo de una línea de cuadrícula se mueve entero con ella incluso sin bloqueo, y un muro que solo termina en la línea se estira con ese extremo.
- `WALLHOLDS` lista los bloqueos. `WALLUNHOLD` quita los bloqueos de un muro.
- Cada bloqueo muestra un pequeño candado en el plano: junto al centro del muro bloqueado, o junto al extremo bloqueado a una línea de cuadrícula. Haga clic en un candado para quitar ese bloqueo.

## Lo que todavía no está

Los bloqueos usan las líneas centrales de los muros. Los muros aquí no tienen capas, así que no hay prioridad de capa en una unión, y los muros no se curvan (vea los arcos más arriba). Nadie ha probado estas herramientas en un dibujo grande, y no se han comprobado en otro programa CAD.
