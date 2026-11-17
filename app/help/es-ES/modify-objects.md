---
title: Mover, copiar, girar, escalar, simetría, estirar y matriz
summary: Disponga muebles en una habitación con los comandos básicos de modificación, usando puntos base, distancias escritas y deshacer.
keywords: mover, copiar, girar, escalar, simetría, estirar, matriz, juntar, matchprop, igualar propiedades, pintor, arrayrect, arraypolar, matriz polar, borrar, descomponer, deshacer, rehacer, punto base, desplazamiento, modificar, alinear, distribuir, alinear en línea, espaciar uniformemente
from: 8eaeee6c
---

## Qué va a crear

Una mesa con una silla, copiada alrededor de la mesa, girada, reflejada y redimensionada. Durante el proceso usará {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} y {{cmd:UNDO}}.

## Dibuje las piezas

1. Escriba `REC` y pulse {{key:Enter}}, escriba `0,0` y pulse {{key:Enter}}, y después escriba `@1800,900` y pulse {{key:Enter}}. Esta es la mesa.
2. Escriba `REC` y pulse {{key:Enter}}, escriba `300,-700` y pulse {{key:Enter}}, y después escriba `@450,450` y pulse {{key:Enter}}. Esta es una silla, debajo de la mesa.
3. Haga clic en {{ui:Extensión}}.

## Mover: punto base y segundo punto

Cada movimiento, copia, giro y escalado parte de un **punto base**: el punto que se traslada, o alrededor del cual gira.

1. Haga clic en la silla para seleccionarla.
2. Escriba `M` y pulse {{key:Enter}}. El historial muestra `1 found`.
3. En `Specify base point`, sitúe la referencia en la esquina superior izquierda de la silla (Extremo) y haga clic.
4. En `Specify second point`, escriba `@0,200` y pulse {{key:Enter}}.

La silla sube 200, más cerca de la mesa.

:::tip
Escriba `D` en `Specify base point` para indicar un desplazamiento: CadCraft entonces pide `Specify displacement`, y usted escribe cuánto se desplaza a lo ancho y hacia arriba, por ejemplo `0,200` (no hace falta `@`).
:::

## Copiar, tantas veces como quiera

1. Haga clic en la silla.
2. Escriba `CO` y pulse {{key:Enter}}.
3. Sitúe la referencia en la esquina inferior izquierda de la silla y haga clic como punto base.
4. Escriba `@600,0` y pulse {{key:Enter}}. Aparece una copia a 600 a la derecha.
5. Escriba `@600,0` de nuevo y pulse {{key:Enter}}. Aparece una segunda copia a 1200 a la derecha del original.
6. Pulse {{key:Enter}} para terminar el comando.

{{cmd:COPY}} sigue hasta que pulse {{key:Enter}}. Cada copia se coloca según la distancia desde el punto base hasta el punto que indique. Un punto `@` se cuenta desde el último punto introducido, que tras la primera copia es el punto de esa copia, de modo que `@600,0` dos veces da copias a 600 y 1200. Escriba `U` y pulse {{key:Enter}} para anular la última copia sin salir del comando.

Debería ver tres sillas en fila debajo de la mesa.

:::tip
{{cmd:COPY}} sirve para copias dentro de un mismo dibujo, colocadas por un punto base. Para llevar objetos a otro dibujo o pestaña, o para pegarlos más tarde, use el portapapeles: {{key:Mod+C}} y después {{key:Mod+V}}. {{key:Mod+D}} crea una copia que se mueve con el puntero. Vea [Copiar, pegar y duplicar](topic:copy-paste).
:::

## Reflejar la fila al otro lado

1. Arrastre una ventana de cruce (de derecha a izquierda) sobre las tres sillas, sin tocar la mesa.
2. Escriba `MI` y pulse {{key:Enter}}.
3. En `Specify first point of mirror line`, sitúe la referencia en el punto medio del lado izquierdo de la mesa (Punto medio) y haga clic.
4. En `Specify second point of mirror line`, sitúe la referencia en el punto medio del lado derecho de la mesa (Punto medio) y haga clic.
5. En `Erase source objects? [Yes/No] <N>`, pulse {{key:Enter}} para conservarlos.

Debería ver tres sillas debajo de la mesa y tres sillas reflejadas encima. El texto de una selección reflejada sigue siendo legible: se coloca en espejo, pero no se escribe al revés.

## Girar una silla

1. Haga clic en la silla más a la derecha debajo de la mesa.
2. Escriba `RO` y pulse {{key:Enter}}.
3. Sitúe la referencia en la esquina inferior derecha de la silla y haga clic como punto base.
4. Escriba `90` y pulse {{key:Enter}}.

La silla gira 90 grados en sentido antihorario alrededor del punto base. Un ángulo negativo gira en sentido horario. En lugar de escribir, puede hacer clic en un segundo punto: el ángulo se mide desde el punto base hasta ese punto.

## Escalar la mesa

1. Seleccione la mesa.
2. Escriba `SC` y pulse {{key:Enter}}.
3. Sitúe la referencia en la esquina inferior izquierda de la mesa y haga clic como punto base.
4. Escriba `1.2` y pulse {{key:Enter}}.

La mesa es un 20 % más grande, creciendo desde el punto base. Un factor menor que 1 la hace más pequeña.

:::note
Si hace clic en un punto en lugar de escribir el factor de escala, el factor es la distancia desde el punto base hasta ese punto. Hacer clic a una unidad de dibujo de distancia da un factor de 1. Normalmente lo que quiere es escribir el número.
:::

## Deshacer y rehacer

- {{key:Mod+Z}}, el botón {{ui:Deshacer}} o `U` y después {{key:Enter}} deshacen el último comando. Un comando completo es un solo paso: deshacer un {{cmd:COPY}} que hizo cinco copias elimina las cinco.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, el botón {{ui:Rehacer}} o `REDO` lo restauran.
- El historial indica qué se deshizo ("Deshecho COPY").

CadCraft guarda los últimos 500 pasos. Los ajustes de capas (activada, inmovilizada, bloqueada, color) son ajustes, no ediciones, y no se deshacen.

## Estirar una habitación más ancha

{{cmd:STRETCH}} (`S`, o {{ui:Estirar}}) mueve solo lo que queda dentro de una ventana de cruce: las esquinas y los extremos de líneas que estén dentro se mueven, y todo lo demás permanece, de modo que la habitación se ensancha en lugar de desplazarse.

1. Escriba `S` y pulse {{key:Enter}}.
2. Arrastre una ventana de derecha a izquierda sobre el muro derecho, de modo que cubra las esquinas del muro y los extremos de cualquier elemento que llegue a él.
3. Pulse {{key:Enter}}.
4. Haga clic en un punto base, y después escriba `@600,0` y pulse {{key:Enter}}.

El rectángulo tiene 600 más de ancho; las líneas que terminaban en el muro siguen terminando en él. Un arco con un extremo dentro conserva su altura; las circunferencias y el texto se mueven cuando su centro o su punto de inserción están dentro, y una cota mide su nueva longitud. Los objetos elegidos uno a uno, sin ventana, simplemente se mueven.

También puede seleccionar primero: arrastre la ventana de cruce (o un lazo de cruce) sobre el muro sin ningún comando en curso, y después escriba `S`. STRETCH toma esa selección y estira lo que contienen sus ventanas, igual que si las hubiera arrastrado en su propia petición.

## Matriz: filas y columnas, o alrededor de un centro

{{cmd:ARRAY}} (`AR`, o {{ui:Matriz}}) copia la selección en cuadrícula o en círculo.

1. Seleccione una silla, escriba `AR` y pulse {{key:Enter}}. Pulse {{key:Enter}} para Rectangular.
2. Aparece una vista previa de 4 columnas y 3 filas. Escriba `COU`, pulse {{key:Enter}}, y después `5` para columnas y `2` para filas.
3. Escriba `S`, pulse {{key:Enter}}, y después `600` entre columnas y `-900` entre filas (negativo hacia abajo).
4. Pulse {{key:Enter}} para crear las copias.

Para un anillo de sillas alrededor de una mesa, elija `PO` (Polar) en su lugar, haga clic en el centro de la mesa, y defina `I` (elementos), `F` (ángulo de relleno: 360 para dar la vuelta completa, 180 para media vuelta) y `ROT` (si las copias giran para mirar hacia el centro). {{cmd:ARRAYRECT}} y {{cmd:ARRAYPOLAR}} omiten la pregunta.

## Unir piezas en una polilínea

{{cmd:JOIN}} (`J`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Juntar}}): seleccione líneas, arcos y polilíneas abiertas cuyos extremos coincidan, y pulse {{key:Enter}}. Se convierten en una sola polilínea, cerrada cuando dan la vuelta completa, que después puede desplazar de una vez. Las líneas que están sobre una misma recta se convierten en una sola línea aunque haya huecos entre ellas; los arcos de una misma circunferencia se convierten en un arco, o en la circunferencia.

## Igualar propiedades

{{cmd:MATCHPROP}} (`MA`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Igualar propiedades}}): haga clic en el objeto cuyo aspecto quiere, después seleccione los objetos que desea cambiar y pulse {{key:Enter}}. Toman su capa y su color; un texto toma su altura, una cota sus tamaños, una trama su patrón. Escriba `S` (Parámetros) en la segunda pregunta para desactivar cualquiera de estas propiedades.

## Alinear objetos

**Por puntos.** {{cmd:ALIGN}} (`AL`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear}}): seleccione los objetos y pulse {{key:Enter}}, y después haga clic en un punto de ellos (el origen) y en el lugar donde debe ir (el destino).

- Un par los mueve. Pulse {{key:Enter}} en `Specify second source point` para detenerse ahí.
- Dos pares también los giran, de modo que la línea entre los dos puntos de origen quede sobre la línea entre los dos puntos de destino. CadCraft entonces pregunta `Scale objects based on alignment points?`: `Y` también los hace más grandes o más pequeños en esa proporción.
- Un tercer par los refleja cuando sus dos puntos están en lados opuestos de esa línea.

**Bordes y espaciado.** {{ui:Modificar}} › {{ui:Más}} › {{ui:Alinear y distribuir}} (o `ALIGNPANEL`) abre un panel pequeño sobre el dibujo. Seleccione objetos, y después:

- elija con qué alinear en {{ui:Alinear con}} (toda la selección, el primer o el último objeto que eligió, o un punto en el que haga clic) y haga clic en {{ui:Izquierda}}, {{ui:Centro}}, {{ui:Derecha}}, {{ui:Superior}}, {{ui:Medio}} o {{ui:Inferior}};
- o elija {{ui:Huecos iguales}} o {{ui:Centros iguales}} y haga clic en {{ui:A lo ancho}} o {{ui:A lo alto}}: los dos objetos externos se mantienen, y los demás se reparten uniformemente entre ellos (tres objetos como mínimo).

Cada clic es un paso de deshacer, y la selección se mantiene, de modo que puede probar otra opción. Cada objeto se mide por su cuadro delimitador, en el SCP cuando hay uno definido. En la línea de comandos, lo mismo se obtiene con {{cmd:ALIGNTO}} y {{cmd:DISTRIBUTE}}.

## Borrar y descomponer

- {{cmd:ERASE}} (`E`, o {{key:Delete}}) elimina los objetos seleccionados.
- {{cmd:EXPLODE}} (`X`) descompone una polilínea en líneas y arcos, una referencia de bloque en sus objetos, y una cota en líneas, flechas y texto. Las cotas descompuestas ya no se miden solas.

## Errores frecuentes

- **Escribir una distancia sin `@` en el segundo punto.** `600,0` es el punto absoluto 600,0, no "600 a la derecha". Use `@600,0`, o un simple `600` con la cruceta apuntando en la dirección correcta.
- **El giro fue en sentido contrario.** Los ángulos positivos giran en sentido antihorario.
- **Deshacer eliminó más de lo esperado.** Un solo deshacer anula todo el último comando, incluidas todas las copias que hizo.
- **El comando no pidió seleccionar objetos.** Los objetos ya estaban seleccionados, así que los usó. Pulse primero {{key:Esc}} para empezar sin nada seleccionado.
