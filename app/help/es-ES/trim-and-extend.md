---
title: Recortar y alargar
summary: Recorte líneas hasta donde cruzan otras y alárguelas hasta encontrarlas, una pieza cada vez o muchas a la vez arrastrando un trazo por ellas.
keywords: trimextendmode, arrastre de ventana, trim, extend, tr, ex, recorte rápido, arrastrar, a mano alzada, trazo, valla, cruce, shift, aristas de corte, aristas de límite, edgemode, modo, estándar, rápido, borrar, vista previa, muros, limpieza
from: 25fbc5bd
---

## Lo que aprenderá

Cómo funcionan {{cmd:TRIM}} y {{cmd:EXTEND}}, y las formas rápidas de usarlos: arrastrar sobre muchas piezas a la vez, mantener pulsado {{key:Shift}} para alternar entre recortar y alargar, y ver qué se eliminará antes de hacer clic.

## Recortar una pieza

1. Dibuje una línea horizontal larga y dos líneas cortas que la crucen.
2. Escriba `TR` y pulse {{key:Enter}}. El historial dice `Current settings: Quick mode, edges: No extend`.
3. Apoye el puntero en la línea larga entre las dos cortas. Esa pieza se vuelve gris y discontinua: es lo que se eliminará.
4. Haga clic. La pieza desaparece.
5. Pulse {{key:Enter}} para terminar el comando.

En el modo Rápido (el predeterminado) cada objeto visible es una arista de corte, así que nunca tiene que elegir aristas antes. Haga clic en la pieza que quiere eliminar. Un objeto que nada cruza se borra entero, y el historial lo indica.

## Recortar muchas piezas en un arrastre

1. Dibuje una línea horizontal larga y diez líneas verticales cortas que la crucen.
2. Escriba `TR` y pulse {{key:Enter}}.
3. Pulse el botón del ratón encima de la línea larga, a la izquierda de la primera línea vertical, y arrastre por encima de las diez.

Mientras arrastra, el trazo se muestra como una línea discontinua, y cada pieza que ha cruzado se vuelve gris. Suelte: las diez piezas superiores se recortan en un solo paso. Escriba `U` y pulse {{key:Enter}} para devolverlas todas a la vez.

:::tip
También puede hacer clic en dos puntos vacíos: la línea entre ellos funciona como un trazo arrastrado. Escriba `F` (Valla) para hacer clic en una serie de puntos en su lugar, y después pulse {{key:Enter}}.
:::

:::touch
Arrastre un dedo de la misma forma. Un toque sobre una pieza la recorta.
:::

## Alargar en lugar de recortar, con Shift

1. Dibuje una línea vertical y cinco líneas horizontales cortas a su izquierda que se detengan antes de ella.
2. Escriba `TR` y pulse {{key:Enter}}.
3. Mantenga pulsado {{key:Shift}}. Apoye el puntero en una línea corta: la parte que crecería se muestra gris y discontinua.
4. Sin soltar {{key:Shift}}, arrastre hacia abajo por las cinco líneas cortas.

Ahora las cinco llegan hasta la línea vertical. {{key:Shift}} funciona al revés en {{cmd:EXTEND}} (`EX`): un clic alarga y un clic con {{key:Shift}} recorta. Alargar prolonga el extremo más cercano a donde hace clic o donde cruza el trazo.

## Recortar dentro de una ventana

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `C` y pulse {{key:Enter}}.
3. Haga clic en dos esquinas alrededor de las piezas que quiere quitar.

Se recorta toda pieza que quede al menos en parte dentro de la ventana.

Para obtener una ventana solo arrastrando, sin escribir `C`: {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Arrastrar para recortar y alargar}} › {{ui:Una ventana}}. Después, al pulsar en un punto vacío y arrastrar se dibuja un recuadro, y se recorta toda pieza que toque (o se alarga, en {{cmd:EXTEND}}, o con {{key:Shift}}). {{ui:Un trazo}} (el de inicio) devuelve el trazo a mano alzada. La línea de parámetros al inicio de TRIM indica cuál está activo.

## Elegir las aristas de corte (modo Estándar)

A veces solo debe cortar una línea, por ejemplo la cara de un muro que cruzan muchas otras líneas.

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `O` (modo) y pulse {{key:Enter}}, y después escriba `S` (Estándar) y pulse {{key:Enter}}.
3. En `Select cutting edges`, haga clic en las líneas de arista (o arrastre una ventana) y pulse {{key:Enter}}. Pulsar {{key:Enter}} sin nada seleccionado convierte cada objeto en arista.
4. Haga clic o arrastre sobre las piezas que quiere quitar.

Solo cortan las aristas elegidas, y un objeto que ninguna arista cruza se queda intacto. El modo se mantiene hasta que cierre la página; escriba `O`, y después `Q` para volver a Rápido. {{cmd:TRIMEXTENDMODE}} lo fija antes de empezar, como hace la variable del mismo nombre en otros lugares: `0` Estándar, `1` Rápido. `T` (aristas de corte) elige nuevas aristas en cualquier momento; en {{cmd:EXTEND}} es `B` (aristas de límite).

## Aristas que llegarían

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `E` (Arista) y pulse {{key:Enter}}, y después `E` (Extender) y pulse {{key:Enter}}.

Ahora una línea o arco de corte que se queda corto cuenta como si continuara: una línea corta corta donde cruzaría si fuera más larga. Escriba `E`, y después `N` (No extender) para volver atrás. Es lo mismo que EDGEMODE 1 y 0.

## Borrar sin salir

Escriba `R` (borrar) y pulse {{key:Enter}}, elija los objetos a borrar y pulse {{key:Enter}}. TRIM continúa.

## Errores habituales

- **Desapareció una línea entera.** En el modo Rápido, un objeto que nada cruza se borra. Escriba `U` para devolverlo, o cambie al modo Estándar (`O`, `S`).
- **"Nada que recortar ahí: ninguna arista elegida cruza ese objeto."** El modo Estándar solo corta en las aristas que eligió. Escriba `T` para elegirlas de nuevo.
- **"No hay límite en esa dirección."** Extender no encontró nada delante. Haga clic más cerca del extremo que debe crecer, o active `E` (Arista, Extender) para los límites que se quedan cortos.
- **El arrastre dibujó un lazo en su lugar.** Un arrastre solo recorta mientras TRIM o EXTEND piden un objeto. Sin ningún comando en marcha, un arrastre selecciona (véase [Selección por lazo](topic:lasso-selection)).
- **Solo se pueden recortar líneas, arcos, círculos y polilíneas.** Descomponga antes un bloque para recortar sus líneas.
