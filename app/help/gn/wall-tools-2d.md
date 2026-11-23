---
title: Formas de muro, cortes, desfases y bloqueos para muros 2D
summary: Dibujá muros como rectángulos, polígonos y arcos, cortalos y volvelos a unir, movelos por una cota y bloqueá un muro a otro o a una línea de cuadrícula. Las mismas herramientas que los muros de BimCraft.
keywords: muro, barra de muros, botones de muro, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, estilo de unión, inglete, a tope, en escuadra, candado, grip, arrastrar extremo, girar, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, unión, no permitir unión, bloqueo, línea de cuadrícula, corte, espacio, desfase, línea de ubicación
from: 49044181
---

Estas herramientas trabajan con los muros 2D de `WALL` (ver "Dibujar muros, puertas y ventanas inteligentes en 2D"). Usan las mismas reglas que las herramientas de muro de BimCraft, así un muro se comporta igual en ambas.

## Dónde están las herramientas

- En la barra de herramientas, el grupo {{ui:Muros}} tiene {{ui:Muro}}, {{ui:Rectángulo}}, {{ui:Dividir}} y {{ui:Desfase}}. Su menú {{ui:Más}} contiene todas las otras herramientas de muro, cada una con su ícono.
- En los estilos de menú cinta, la pestaña {{ui:Muros}} tiene los paneles {{ui:Dibujar muros}}, {{ui:Cortar}}, {{ui:Fijar y modificar}}, {{ui:Mantener}} y {{ui:Unión}}.
- En un diseño, las filas de herramientas y la caja de herramientas muestran el mismo grupo {{ui:Muros}}.
- También podés escribir cualquier comando nombrado abajo.

## Las uniones se guardan

Cuando el extremo de un muro cae sobre otro muro, CadCraft guarda esa unión en ambos muros. Ya no la recalcula a partir de dónde están los extremos. Así:

- Los muros unidos a un muro que movés lo siguen y siguen unidos. Sus extremos se deslizan a lo largo de su propia línea, así nada gira.
- Arrastrá un extremo de muro con su grip y el muro unido ahí mantiene su dirección. Su extremo se desliza a lo largo de su propia línea para encontrar el muro arrastrado, así el extremo arrastrado cae sobre esa línea, no siempre bajo el cursor. La vista previa muestra dónde. Un muro que choca contra el muro arrastrado sigue a lo largo de su propia línea. Arrastrar el extremo directamente a lo largo del muro cambia su longitud, y el muro unido ahí se mueve con él.
- `ROTATE` sobre un muro unido funciona igual: los extremos de sus vecinos se deslizan a lo largo de sus propias líneas hasta el muro girado.
- Para mover una esquina, seleccioná ambos muros que se encuentran ahí y arrastrá el grip de la esquina. Ambos muros quedan en la esquina y ambos giran. Los muros más allá quedan como estaban.
- Mantené {{key:Alt}} al hacer clic en el nuevo lugar del grip para romper las uniones a propósito: el muro va donde lo ponés y nada lo sigue.
- Si un arrastre haría girar un muro unido hacia atrás a través de su propio extremo lejano, se rechaza y nada cambia.
- Un muro dibujado con {{ui:No permitir uniones}} (`D` en `WALL`), o desactivado en Propiedades ({{ui:No permitir unión al inicio}}, {{ui:No permitir unión al final}}), queda libre en ese extremo, aun si toca otro muro, hasta que lo permitas otra vez.
- `WALLDISJOIN` ({{ui:No permitir unión}} en el grupo {{ui:Muros}}) hace lo mismo con un clic: hacé clic en un muro cerca de un extremo para no permitir uniones ahí, y clic otra vez para permitirlas.
- Un plano antiguo todavía no tiene uniones guardadas. El primer cambio que hagas las encuentra una vez, a partir de cómo estaban los muros antes del cambio, y las guarda. `WALLJOINS` lo hace de una vez.
- Archivos DWG y DXF llevan las uniones dentro de cada muro. CadCraft las lee tal como se guardaron. Un programa que no guarda datos extendidos muestra los muros como bloques simples y descarta las uniones; una unión cuyos muros se movieron en otro programa se descarta la próxima vez que cambies cualquiera de los dos.

## Estilo de unión de una esquina

Una esquina donde dos muros se encuentran extremo a extremo se dibuja como inglete, salvo que elijas otro estilo.

- `WALLJOINSTYLE` ({{ui:Estilo de unión}} en el grupo {{ui:Muros}}): hacé clic en la esquina. Cada clic pasa al siguiente estilo: {{ui:Inglete}}, {{ui:A tope}}, {{ui:En escuadra}}, y luego {{ui:Inglete}} otra vez. Escribí `T` para cambiar cuál de los dos muros pasa por la esquina en la que hiciste clic último. Presioná {{key:Enter}} para terminar. Una ejecución del comando es un paso deshacer.
- {{ui:A tope}}: un muro pasa hasta la cara lejana del otro, y el otro se detiene contra su lado. {{ui:En escuadra}}: lo mismo, pero el muro que pasa termina en escuadra consigo mismo. En ángulo recto se ven igual.
- En Propiedades de un muro: {{ui:Estilo de unión al inicio}}, {{ui:Estilo de unión al final}}, y {{ui:Pasa de largo al inicio}}, {{ui:Pasa de largo al final}}.
- El estilo se guarda con ambos muros y viaja en archivos DWG y DXF. Una copia de un muro empieza sin él.
- Una unión en T no tiene estilo para elegir: pasa el muro cuyo lado es tocado. Una esquina donde se encuentran tres o más muros queda como inglete. También lo es una esquina muy aguda (menos de unos 30 grados) y dos muros en una misma línea.

## Dibujar formas de muro

Cada una crea los muros en un paso deshacer, con las esquinas unidas. En `WALL`, `O` fija un desfase de colocación (cuánto a la izquierda de tus clics va el muro) y `D` desactiva la unión para los muros que dibujes después.

- `WALLRECT` (`WR`): dos esquinas opuestas, como `RECTANG`.
- `WALLROT`: el primer lado, luego hasta dónde llega el otro lado, para un rectángulo a cualquier ángulo.
- `WALLPOLY` (`WP`): cantidad de lados (3 a 64), el centro, `I` para inscrito o `C` para circunscrito, luego el radio, como `POLYGON`: hacé clic, o escribilo (un radio escrito va hacia el puntero, o a lo largo de X cuando el puntero sigue en el centro).
- `WALLARC` (`WARC`): centro, inicio, fin. `D` invierte el sentido del arco.
- `WALLTAN`: hacé clic cerca del extremo de un muro, luego el extremo del arco, que sale a lo largo de ese muro.
- `WALLPICK`: hacé clic en una línea o polilínea y decí si tomar también las líneas unidas a ella.
- `WALLTRACE`: hacé clic dentro de un área cerrada de líneas y muros para poner muros alrededor de la más pequeña.

Los muros de planta son rectos, así que un arco se dibuja como muros rectos cortos de 15 grados cada uno. Se unen como cualquier esquina.

## Cortar muros

- `WALLSPLIT` (`WS`): hacé clic en el muro, luego en el punto. `C` corta donde otro muro lo cruza, `G` deja un espacio entre las partes, `F` deja los extremos cortados libres en vez de unidos. La primera parte mantiene el lugar del muro en el plano, y puertas y ventanas van con su parte. Un corte a través de una puerta o ventana se rechaza.
- `WALLSPLITGAP` ({{ui:Dividir con separación}}): lo mismo que el corte, pero pide primero el espacio.
- `WALLDELSEG`: hacé clic en el muro, luego en los dos extremos de la pieza a borrar.
- `WALLREJOIN`: hacé clic en dos partes de un mismo muro para volverlas un solo muro.

## Mover muros por distancia

- `WALLDIM` ({{ui:Editar por cota}}): hacé clic en una cota lineal o alineada que va de un muro a otro, luego escribí el nuevo valor. El muro del extremo lejano se mueve en escuadra consigo mismo, el muro del primer extremo se mantiene, y los muros unidos a él siguen. El punto lejano de la cota se mueve con su muro, así la cota muestra el valor que escribiste.
- `WALLOFFSET` (`WO`): hacé clic en un muro, luego el lado al que moverlo (`D` escribe una distancia, `C` hace una copia en su lugar).
- `WALLSTRETCH`: una ventana alrededor de los extremos del muro, luego un punto base y un segundo punto.
- En Propiedades, una {{ui:Longitud}} escrita mantiene el inicio y arrastra el muro unido en el extremo lejano, y un nuevo {{ui:Espesor}} crece alejándose de la {{ui:Línea de ubicación}} que elegiste (cara izquierda, cara derecha o centro).

## Cota entre ejes de muros

La línea central de un muro no se dibuja, pero el ajuste a objetos la encuentra. Con el ajuste a objetos activo ({{key:F3}}), poné el puntero sobre el medio del espesor de un muro: la marca dice `Wall center: endpoint` o `Wall center: midpoint`, y la línea central se muestra de trazos mientras la marca esté sobre ella. Con {{ui:Perpendicular}} o {{ui:Más cercano}} activados en la lista de ajustes a objetos, esos también funcionan sobre la línea central.

1. Iniciá `DIMLINEAR` (o `DIMALIGNED`).
2. Hacé clic en el primer muro donde la marca diga `Wall center: midpoint` o `Wall center: endpoint`.
3. Hacé clic en el segundo muro de la misma manera, luego hacé clic donde va la línea de cota.
4. Para cambiar la distancia, iniciá `WALLDIM`, hacé clic en la cota y escribí el nuevo valor. El segundo muro se mueve.

El ajuste a la línea central funciona en todos los comandos que piden un punto.

## Bloquear muros

Un bloqueo se mantiene con el muro en el archivo. Si movés un muro bloqueado, el otro lo sigue. Si un cambio mueve ambos muros de forma distinta, se rechaza y nada cambia.

- `WALLHOLD`: bloquea un muro a otro muro. `A` lo mueve primero a la línea del otro muro, `K` mantiene la distancia que tiene.
- `WALLHOLDDIM`: bloquea la distancia entre dos muros paralelos.
- `WALLGRID`: bloquea un muro a una línea de cuadrícula (una línea en una capa de cuadrícula con su etiqueta en texto en un extremo), ya sea a lo largo o con un extremo sobre ella. Un muro bloqueado a lo largo de la línea mantiene la distancia que tiene desde ella. Movés la línea de cuadrícula con `GRIDMOVE` y el muro la sigue entero, con sus muros unidos. Un muro que está a lo largo de una línea de cuadrícula se mueve entero con ella aun sin bloqueo, y un muro que solo termina en la línea se estira por ese extremo.
- `WALLHOLDS` lista los bloqueos. `WALLUNHOLD` quita los bloqueos de un muro.
- Cada bloqueo muestra un pequeño candado en el plano: al lado del medio del muro bloqueado, o al lado del extremo bloqueado a una línea de cuadrícula. Hacé clic en un candado para quitar ese bloqueo.

## Lo que todavía no está

Los bloqueos usan las líneas centrales de los muros. Acá los muros no tienen capas, así que no hay prioridad de capas en una unión, y los muros no se curvan (ver arcos arriba). Nadie probó todavía estas herramientas en un plano grande, y no se verificaron en otro programa CAD.
