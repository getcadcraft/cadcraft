---
title: Desplazar, copiar, girar, escalar, simetría, estirar y matriz
summary: Distribuya muebles en una habitación con los comandos básicos de modificación, usando puntos base, distancias escritas y deshacer.
keywords: desplazar, copiar, girar, escalar, simetría, estirar, matriz, juntar, matchprop, igualar propiedades, pintor, arrayrect, arraypolar, matriz polar, borrar, descomponer, deshacer, rehacer, punto base, desplazamiento, modificar, alinear, distribuir, alinear en línea, espaciar uniformemente
from: 8eaeee6c
---

## Lo que va a crear

Una mesa con una silla copiada alrededor de la mesa, girada, con simetría aplicada y redimensionada. En el camino usará {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} y {{cmd:UNDO}}.

## Dibuje las piezas

1. Escriba `REC` y pulse {{key:Enter}}, escriba `0,0` y pulse {{key:Enter}}, luego escriba `@1800,900` y pulse {{key:Enter}}. Esta es la mesa.
2. Escriba `REC` y pulse {{key:Enter}}, escriba `300,-700` y pulse {{key:Enter}}, luego escriba `@450,450` y pulse {{key:Enter}}. Esta es una silla, debajo de la mesa.
3. Haga clic en {{ui:Extensión}}.

## Desplazar: punto base y luego segundo punto

Cada desplazamiento, copia, giro y escalado comienza en un **punto base**: el punto que se lleva consigo o alrededor del cual se gira.

1. Haga clic en la silla para seleccionarla.
2. Escriba `M` y pulse {{key:Enter}}. El historial dice `1 found`.
3. En `Specify base point`, ajuste al punto final de la esquina superior izquierda de la silla y haga clic.
4. En `Specify second point`, escriba `@0,200` y pulse {{key:Enter}}.

La silla sube 200, más cerca de la mesa.

:::tip
Escriba `D` en `Specify base point` para dar un desplazamiento: CadCraft entonces le pide `Specify displacement`, y usted escribe cuánto se mueve a lo ancho y hacia arriba, por ejemplo `0,200` (sin necesidad de `@`).
:::

## Copiar, tantas veces como quiera

1. Haga clic en la silla.
2. Escriba `CO` y pulse {{key:Enter}}.
3. Ajuste a la esquina inferior izquierda de la silla y haga clic como punto base.
4. Escriba `@600,0` y pulse {{key:Enter}}. Aparece una copia 600 a la derecha.
5. Escriba `@600,0` otra vez y pulse {{key:Enter}}. Aparece una segunda copia 1200 a la derecha del original.
6. Pulse {{key:Enter}} para terminar el comando.

{{cmd:COPY}} sigue hasta que pulse {{key:Enter}}. Cada copia se coloca según la distancia desde el punto base hasta el punto que dé. Un punto con `@` se cuenta desde el último punto que escribió, que después de la primera copia es el punto de esa copia, así que `@600,0` dos veces da copias en 600 y 1200. Escriba `U` y pulse {{key:Enter}} para quitar la última copia sin salir del comando.

Debe ver tres sillas en fila debajo de la mesa.

:::tip
{{cmd:COPY}} es para copias dentro de un dibujo, colocadas por un punto base. Para llevar objetos a otro dibujo o pestaña, o para pegarlos después, use el portapapeles: {{key:Mod+C}}, luego {{key:Mod+V}}. {{key:Mod+D}} hace una copia que se mueve con el puntero. Vea [Copiar, pegar y duplicar](topic:copy-paste).
:::

## Aplicar simetría a la fila al otro lado

1. Arrastre una ventana de captura (de derecha a izquierda) sobre las tres sillas, sin tocar la mesa.
2. Escriba `MI` y pulse {{key:Enter}}.
3. En `Specify first point of mirror line`, ajuste al punto medio del lado izquierdo de la mesa y haga clic.
4. En `Specify second point of mirror line`, ajuste al punto medio del lado derecho de la mesa y haga clic.
5. En `Erase source objects? [Yes/No] <N>`, pulse {{key:Enter}} para conservarlos.

Debe ver tres sillas debajo de la mesa y tres sillas con simetría encima de ella. El texto de una selección con simetría se mantiene legible: se coloca reflejado, pero no se escribe al revés.

## Girar una silla

1. Haga clic en la silla más a la derecha, debajo de la mesa.
2. Escriba `RO` y pulse {{key:Enter}}.
3. Ajuste a la esquina inferior derecha de la silla y haga clic como punto base.
4. Escriba `90` y pulse {{key:Enter}}.

La silla gira 90 grados en sentido antihorario alrededor del punto base. Un ángulo negativo gira en sentido horario. En lugar de escribirlo, puede hacer clic en un segundo punto: el ángulo se mide desde el punto base hasta ese punto.

## Escalar la mesa

1. Seleccione la mesa.
2. Escriba `SC` y pulse {{key:Enter}}.
3. Ajuste a la esquina inferior izquierda de la mesa y haga clic como punto base.
4. Escriba `1.2` y pulse {{key:Enter}}.

La mesa es 20% más grande y crece alejándose del punto base. Un factor menor que 1 la hace más pequeña.

:::note
Si hace clic en un punto en lugar de escribir el factor de escala, el factor es la distancia desde el punto base hasta ese punto. Hacer clic a una unidad de dibujo de distancia da un factor de 1. Por lo general, lo que quiere es escribir el número.
:::

## Deshacer y rehacer

- {{key:Mod+Z}}, el botón {{ui:Deshacer}}, o `U` y luego {{key:Enter}} deshacen el último comando. Un comando completo es un solo paso: deshacer un {{cmd:COPY}} que hizo cinco copias elimina las cinco.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, el botón {{ui:Rehacer}} o `REDO` la restauran.
- El historial dice qué se deshizo ("Se deshizo COPY").

CadCraft guarda los últimos 500 pasos. Los parámetros de capa (activa, inutilizada, bloqueada, color) son ajustes, no ediciones, y no se deshacen.

## Estirar una habitación para ensancharla

{{cmd:STRETCH}} (`S`, o {{ui:Estirar}}) mueve solo lo que queda dentro de una ventana de captura: las esquinas y los extremos de líneas dentro de ella se mueven, y lo demás permanece en su lugar, así que la habitación se ensancha en vez de desplazarse.

1. Escriba `S` y pulse {{key:Enter}}.
2. Arrastre una ventana de derecha a izquierda sobre la pared derecha, de modo que abarque las esquinas de la pared y los extremos de todo lo que se una a ella.
3. Pulse {{key:Enter}}.
4. Haga clic en un punto base, luego escriba `@600,0` y pulse {{key:Enter}}.

El rectángulo tiene 600 más de ancho; las líneas que terminaban en la pared siguen terminando en ella. Un arco con un extremo dentro conserva su altura, los círculos y el texto se mueven cuando su centro o su punto de inserción está dentro, y una cota mide su nueva longitud. Los objetos designados uno por uno, sin ventana, simplemente se desplazan.

También puede seleccionar primero: arrastre la ventana de captura (o un lazo de captura) sobre la pared sin ningún comando en curso, y luego escriba `S`. STRETCH toma esa selección y estira lo que contengan sus ventanas, igual que si las hubiera arrastrado en su propio aviso.

## Matriz: filas y columnas, o alrededor de un centro

{{cmd:ARRAY}} (`AR`, o {{ui:Matriz}}) copia la selección en una cuadrícula o en un círculo.

1. Seleccione una silla, escriba `AR` y pulse {{key:Enter}}. Pulse {{key:Enter}} para Rectangular.
2. Aparece una vista previa de 4 columnas y 3 filas. Escriba `COU`, pulse {{key:Enter}}, luego `5` para columnas y `2` para filas.
3. Escriba `S`, pulse {{key:Enter}}, luego `600` entre columnas y `-900` entre filas (negativo baja).
4. Pulse {{key:Enter}} para crear las copias.

Para un anillo de sillas alrededor de una mesa, elija `PO` (Polar), haga clic en el centro de la mesa y ajuste `I` (elementos), `F` (ángulo de relleno: 360 para dar la vuelta completa, 180 para media vuelta) y `ROT` (si las copias giran para mirar al centro). {{cmd:ARRAYRECT}} y {{cmd:ARRAYPOLAR}} omiten la pregunta.

## Unir piezas en una polilínea

{{cmd:JOIN}} (`J`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Juntar}}): seleccione líneas, arcos y polilíneas abiertas cuyos extremos se toquen, y pulse {{key:Enter}}. Se convierten en una sola polilínea, cerrada si dan la vuelta completa, que luego puede desfasar de una sola vez. Las líneas que están sobre una misma recta se convierten en una sola línea, aunque tengan huecos entre ellas; los arcos de un mismo círculo se convierten en un arco o en el círculo.

## Igualar propiedades

{{cmd:MATCHPROP}} (`MA`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Igualar propiedades}}): haga clic en el objeto cuyo aspecto quiere, luego seleccione los objetos a cambiar y pulse {{key:Enter}}. Toman su capa y color; un texto toma su altura, una cota sus medidas, un sombreado su patrón. Escriba `S` (Parámetros) en la segunda pregunta para desactivar cualquiera de estos.

## Alinear objetos

**Por puntos.** {{cmd:ALIGN}} (`AL`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear}}): seleccione los objetos y pulse {{key:Enter}}, luego haga clic en un punto de ellos (el origen) y en el lugar adonde debe ir (el destino).

- Un par los mueve. Pulse {{key:Enter}} en `Specify second source point` para detenerse ahí.
- Dos pares también los giran, de modo que la línea entre los dos puntos de origen quede sobre la línea entre los dos puntos de destino. CadCraft entonces pregunta `Scale objects based on alignment points?`: `Y` también los hace más grandes o más pequeños en esa proporción.
- Un tercer par los refleja (con simetría) cuando sus dos puntos están en lados opuestos de esa línea.

**Bordes y espaciado.** {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear y distribuir}} (o `ALIGNPANEL`) abre un pequeño panel sobre el dibujo. Seleccione objetos y luego:

- elija con qué alinear en {{ui:Alinear con}} (toda la selección, el primer o el último objeto que designó, o un punto en el que haga clic) y haga clic en {{ui:Izquierda}}, {{ui:Centro}}, {{ui:Derecha}}, {{ui:Superior}}, {{ui:Medio}} o {{ui:Inferior}};
- o elija {{ui:Huecos iguales}} o {{ui:Centros iguales}} y haga clic en {{ui:A lo ancho}} o {{ui:A lo alto}}: los dos objetos exteriores se quedan, y los demás se distribuyen uniformemente entre ellos (al menos tres objetos).

Cada clic es un paso de {{ui:Deshacer}}, y la selección se mantiene, así que puede probar otra opción. Cada objeto se cuenta por su cuadro delimitador, en el SCP (sistema de coordenadas del usuario) cuando hay uno definido. En la línea de comandos, lo mismo son {{cmd:ALIGNTO}} y {{cmd:DISTRIBUTE}}.

## Borrar y descomponer

- {{cmd:ERASE}} (`E`, o {{key:Delete}}) elimina los objetos seleccionados.
- {{cmd:EXPLODE}} (`X`) descompone una polilínea en líneas y arcos, una referencia a bloque en sus objetos, y una cota en líneas, flechas y texto. Las cotas descompuestas ya no se miden solas.

## Errores comunes

- **Escribir una distancia sin `@` en el segundo punto.** `600,0` es el punto absoluto 600,0, no "600 a la derecha". Use `@600,0`, o un `600` simple con la cruceta apuntando en la dirección correcta.
- **El giro fue en sentido contrario.** Los ángulos positivos giran en sentido antihorario.
- **Deshacer eliminó más de lo esperado.** Un solo deshacer quita todo el último comando, incluidas todas las copias que hizo.
- **El comando no pidió designar objetos.** Los objetos ya estaban seleccionados, así que los usó. Pulse {{key:Esc}} primero para empezar sin nada seleccionado.
