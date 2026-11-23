---
title: Formas de muro, cortes, desfases y bloqueos para muros 2D
summary: Dibuje muros como rectángulos, polígonos y arcos; divídalos y vuélvalos a unir; muévalos por una cota y bloquee un muro a otro o a una línea de rejilla. Las mismas herramientas que los muros de BimCraft.
keywords: muro, muros, barra de muros, botones de muro, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de unión, inglete, a tope, a escuadra, candado, pinzamiento, arrastrar extremo, girar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unir, no permitir unión, bloqueo, línea de rejilla, dividir, hueco, desfase, línea de ubicación
from: 49044181
---

Estas herramientas trabajan sobre los muros 2D creados con `WALL` (véase "Dibujar muros, puertas y ventanas inteligentes en 2D"). Usan las mismas reglas que las herramientas de muros de BimCraft, así que un muro se comporta igual en ambos.

## Dónde están las herramientas

- En la barra de herramientas, el grupo {{ui:Muros}} tiene {{ui:Muro}}, {{ui:Rectángulo}}, {{ui:Dividir}} y {{ui:Desfase}}. Su menú {{ui:Más}} tiene todas las demás herramientas de muros, cada una con su icono.
- En los estilos de menú de cinta, la pestaña {{ui:Muros}} tiene los paneles {{ui:Dibujar muros}}, {{ui:Cortar}}, {{ui:Definir y modificar}}, {{ui:Mantener}} y {{ui:Unir}}.
- En una hoja, las filas de herramientas y la caja de herramientas muestran el mismo grupo {{ui:Muros}}.
- También puede escribir cualquiera de los comandos que se indican abajo.

## Las uniones se guardan

Cuando el extremo de un muro cae sobre otro muro, CadCraft guarda esa unión con ambos muros. Ya no vuelve a calcular las uniones a partir de dónde están los extremos por casualidad. Así que:

- Los muros unidos a un muro que mueve lo siguen y se mantienen unidos. Sus extremos se deslizan a lo largo de sus propias líneas, así que nada gira.
- Si arrastra un extremo de muro por su pinzamiento, el muro unido allí conserva también su dirección. Su extremo se desliza a lo largo de su propia línea hasta encontrar el muro arrastrado, de modo que el extremo arrastrado cae sobre esa línea, no siempre bajo el cursor. La vista previa muestra dónde. Un muro que topa con el muro arrastrado sigue a lo largo de su propia línea. Arrastrar el extremo en línea recta a lo largo del muro cambia su longitud, y el muro unido allí se mueve con él.
- `ROTATE` sobre un muro unido funciona igual: los extremos de sus vecinos se deslizan a lo largo de sus propias líneas hasta el muro girado.
- Para mover una esquina, seleccione los dos muros que se encuentran allí y arrastre el pinzamiento de la esquina. Ambos muros se quedan en la esquina y ambos giran. Los muros más alejados se quedan como estaban.
- Mantenga {{key:Alt}} al hacer clic en el nuevo lugar del pinzamiento para romper las uniones a propósito: el muro va donde lo ponga y nada lo sigue.
- Si un arrastre haría girar un muro unido hacia atrás a través de su propio extremo lejano, se rechaza y nada cambia.
- Un muro que dibuja con {{ui:No permitir uniones}} (`D` en `WALL`), o que desactiva en Propiedades ({{ui:No permitir unión en el inicio}}, {{ui:No permitir unión en el final}}), queda libre en ese extremo, incluso si toca otro muro, hasta que vuelva a permitirla.
- `WALLDISJOIN` ({{ui:No permitir unión}} en el grupo {{ui:Muros}}) hace lo mismo con un clic: haga clic en un muro cerca de un extremo para no permitir uniones en ese extremo, y vuelva a hacer clic para permitirlas.
- Un dibujo antiguo todavía no tiene uniones guardadas. El primer cambio que haga las busca una vez, a partir de cómo estaban los muros antes del cambio, y las guarda. `WALLJOINS` lo hace de inmediato.
- Los archivos DWG y DXF llevan las uniones dentro de cada muro. CadCraft las lee tal como se guardaron. Un programa que no conserva datos extendidos muestra los muros como bloques normales y descarta las uniones, y una unión cuyos muros se movieron en otro programa se descarta la próxima vez que cambie uno de los dos.

## Estilo de unión de una esquina

Una esquina donde dos muros se encuentran extremo con extremo se dibuja como inglete, salvo que elija otro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de unión}} en el grupo {{ui:Muros}}): haga clic en la esquina. Cada clic pasa al siguiente estilo: {{ui:Inglete}}, {{ui:A tope}}, {{ui:A escuadra}} y de nuevo {{ui:Inglete}}. Escriba `T` para cambiar cuál de los dos muros pasa por la esquina en la que hizo clic por última vez. Pulse {{key:Enter}} para terminar. Una ejecución del comando es un paso de deshacer.
- {{ui:A tope}}: un muro pasa hasta la cara lejana del otro, y el otro se detiene contra su lado. {{ui:A escuadra}}: lo mismo, pero el muro que pasa termina a escuadra consigo mismo. En ángulo recto las dos se ven iguales.
- En Propiedades de un muro: {{ui:Estilo de unión al inicio}}, {{ui:Estilo de unión al final}}, y {{ui:Pasa por el inicio}}, {{ui:Pasa por el final}}.
- El estilo se guarda con ambos muros y viaja en los archivos DWG y DXF. Una copia de un muro empieza sin él.
- Una unión en T no tiene estilo que elegir: pasa el muro cuyo lado es alcanzado. Una esquina donde se encuentran tres o más muros sigue siendo inglete. También lo es una esquina muy aguda (menos de unos 30 grados) y dos muros en línea.

## Dibujar formas de muro

Cada una crea los muros en un paso de deshacer, con las esquinas unidas. En `WALL`, `O` define un desfase de colocación (a qué distancia a la izquierda de sus clics va el muro) y `D` desactiva la unión para los muros que dibuje a continuación.

- `WALLRECT` (`WR`): dos esquinas opuestas, como `RECTANG`.
- `WALLROT`: el primer lado, y después hasta dónde llega el otro lado, para un rectángulo a cualquier ángulo.
- `WALLPOLY` (`WP`): el número de lados (3 a 64), el centro, `I` para inscrito o `C` para circunscrito, y después el radio, como `POLYGON`: haga clic, o escríbalo (un radio escrito va hacia el puntero, o a lo largo de X cuando el puntero sigue en el centro).
- `WALLARC` (`WARC`): centro, inicio, fin. `D` hace que el arco vaya en el otro sentido.
- `WALLTAN`: haga clic cerca del extremo de un muro, y después en el extremo del arco, que sale a lo largo de ese muro.
- `WALLPICK`: haga clic en una línea o polilínea, y diga si quiere tomar también las líneas unidas a ella.
- `WALLTRACE`: haga clic dentro de un área cerrada de líneas y muros para poner muros alrededor de la más pequeña.

Los muros en planta son rectos, así que un arco se dibuja como muros rectos cortos de 15 grados cada uno. Se unen como cualquier esquina.

## Cortar muros

- `WALLSPLIT` (`WS`): haga clic en el muro, y después en el punto. `C` corta donde otro muro lo cruza, `G` deja un hueco entre las partes, `F` deja los extremos cortados libres en lugar de unidos. La primera parte conserva el lugar del muro en el dibujo, y las puertas y ventanas van con su parte. Un corte a través de una puerta o ventana se rechaza.
- `WALLSPLITGAP` ({{ui:Dividir con hueco}}): la misma división, pero pide primero el hueco.
- `WALLDELSEG`: haga clic en el muro, y después en los dos extremos del trozo que quiere borrar.
- `WALLREJOIN`: haga clic en dos partes de un mismo muro para volver a hacer de ellas un único muro.

## Mover muros por distancia

- `WALLDIM` ({{ui:Editar por cota}}): haga clic en una cota lineal o alineada que va de un muro a otro, y después escriba el nuevo valor. El muro del extremo lejano se mueve en escuadra consigo mismo, el muro del primer extremo se mantiene, y los muros unidos a él lo siguen. El punto lejano de la cota se mueve con su muro, así que la cota muestra el valor que escribió.
- `WALLOFFSET` (`WO`): haga clic en un muro, y después en el lado al que moverlo (`D` escribe una distancia, `C` hace una copia en su lugar).
- `WALLSTRETCH`: una ventana alrededor de los extremos de los muros, y después un punto base y un segundo punto.
- En Propiedades, una {{ui:Longitud}} escrita mantiene el inicio y lleva consigo el muro unido en el extremo lejano, y un nuevo {{ui:Grosor}} crece alejándose de la {{ui:Línea de ubicación}} que elija (la cara izquierda, la cara derecha o el centro).

## Cota entre ejes de muros

El eje de un muro no se dibuja, pero la referencia a objetos lo encuentra. Con la referencia a objetos activada ({{key:F3}}), mueva el puntero sobre el centro del grosor de un muro: la marca dice `Wall center: endpoint` o `Wall center: midpoint`, y el eje se muestra como línea discontinua mientras la marca está sobre él. Con {{ui:Perpendicular}} o {{ui:Más cercano}} activados en la lista de referencias a objetos, esas funcionan también sobre el eje.

1. Inicie `DIMLINEAR` (o `DIMALIGNED`).
2. Haga clic en el primer muro donde la marca dice `Wall center: midpoint` o `Wall center: endpoint`.
3. Haga clic en el segundo muro del mismo modo, y después donde debe ir la línea de cota.
4. Para cambiar la distancia, inicie `WALLDIM`, haga clic en la cota y escriba el nuevo valor. Se mueve el segundo muro.

La referencia al eje del muro funciona en todos los comandos que piden un punto.

## Bloquear muros

Un bloqueo se queda con el muro en el archivo. Si mueve un muro bloqueado, el otro lo sigue. Si un cambio mueve los dos muros de forma distinta, se rechaza y nada cambia.

- `WALLHOLD`: bloquee un muro a otro muro. `A` lo mueve primero a la línea del otro muro, `K` conserva la distancia que tiene.
- `WALLHOLDDIM`: bloquee la distancia entre dos muros paralelos.
- `WALLGRID`: bloquee un muro a una línea de rejilla (una línea en una capa de rejilla con su etiqueta en un extremo), ya sea a lo largo de ella o con un extremo sobre ella. Un muro bloqueado a lo largo de la línea conserva la distancia que tiene respecto a ella. Mueva la línea de rejilla con `GRIDMOVE` y el muro la sigue entero, con sus muros unidos. Un muro que está a lo largo de una línea de rejilla se mueve entero con ella incluso sin bloqueo, y un muro que solo termina en la línea se estira por ese extremo.
- `WALLHOLDS` enumera los bloqueos. `WALLUNHOLD` quita los bloqueos de un muro.
- Cada bloqueo muestra un pequeño candado en el plano: junto al centro del muro bloqueado, o junto al extremo que está bloqueado a una línea de rejilla. Haga clic en un candado para quitar ese bloqueo.

## Lo que todavía no está

Los bloqueos usan los ejes de los muros. Los muros de aquí no tienen capas, así que no hay prioridad de capa en una unión, y los muros no se curvan (véanse los arcos más arriba). Nadie ha probado estas herramientas en un dibujo grande, y no se han comprobado en otro programa CAD.
