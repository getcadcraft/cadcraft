---
title: Recortar y alargar
summary: Recorte líneas hasta donde las cruzan otras y alárguelas hasta encontrarlas, una pieza a la vez o muchas a la vez arrastrando un trazo sobre ellas.
keywords: trimextendmode, arrastre de ventana, recortar, alargar, tr, ex, recorte rápido, arrastrar, a mano alzada, trazo, borde, captura, shift, aristas de corte, bordes de límite, edgemode, modo, estándar, rápido, borrar, vista previa, muros, limpieza
from: 25fbc5bd
---

## Lo que va a aprender

Cómo funcionan {{cmd:TRIM}} y {{cmd:EXTEND}}, y las formas rápidas de usarlos: arrastrar sobre muchas piezas a la vez, mantener {{key:Shift}} para alternar entre recortar y alargar, y ver qué se va a quitar antes de hacer clic.

## Recortar una pieza

1. Dibuje una línea horizontal larga y dos líneas cortas que la crucen.
2. Escriba `TR` y pulse {{key:Enter}}. El historial dice `Current settings: Quick mode, edges: No extend`.
3. Coloque el puntero sobre la línea larga entre las dos cortas. Esa pieza se vuelve gris y discontinua: es lo que se va a quitar.
4. Haga clic. La pieza desaparece.
5. Pulse {{key:Enter}} para terminar el comando.

En el modo Rápido (el predeterminado) todo objeto visible es una arista de corte, así que nunca tiene que elegir las aristas primero. Haga clic en la pieza que quiere quitar. Un objeto que nada cruza se borra completo, y el historial lo indica.

## Recortar muchas piezas en un arrastre

1. Dibuje una línea horizontal larga y diez líneas verticales cortas que la crucen.
2. Escriba `TR` y pulse {{key:Enter}}.
3. Presione el botón del mouse por encima de la línea larga, a la izquierda de la primera línea vertical, y arrastre sobre las diez por encima de la línea larga.

Mientras arrastra, el trazo se muestra como línea discontinua, y cada pieza que cruza se vuelve gris. Suelte: las diez piezas superiores se recortan en un solo paso. Escriba `U` y pulse {{key:Enter}} para devolverlas todas a la vez.

:::tip
También puede hacer clic en dos puntos vacíos: la línea entre ellos funciona como un trazo arrastrado. Escriba `F` (borde) para hacer clic en una serie de puntos en su lugar, y luego pulse {{key:Enter}}.
:::

:::touch
Arrastre con el dedo de la misma manera. Un toque sobre una pieza la recorta.
:::

## Alargar en su lugar, con Shift

1. Dibuje una línea vertical, y cinco líneas horizontales cortas a su izquierda que se detengan antes de ella.
2. Escriba `TR` y pulse {{key:Enter}}.
3. Mantenga presionado {{key:Shift}}. Coloque el puntero sobre una línea corta: la parte en que crecería se muestra gris y discontinua.
4. Sin soltar {{key:Shift}}, arrastre hacia abajo sobre las cinco líneas cortas.

Las cinco ahora llegan a la línea vertical. {{key:Shift}} funciona al revés en {{cmd:EXTEND}} (`EX`): un clic alarga, un {{key:Shift}}+clic recorta. Alargar prolonga el extremo más cercano a donde hace clic o donde cruza el trazo.

## Recortar dentro de una ventana

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `C` y pulse {{key:Enter}}.
3. Haga clic en dos esquinas alrededor de las piezas que quitar.

Se recorta toda pieza que quede al menos parcialmente dentro de la ventana.

Para tener una ventana solo arrastrando, sin escribir `C`: {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Arrastrar para recortar y alargar}} › {{ui:Una ventana}}. Entonces, al presionar en un espacio vacío y arrastrar, se dibuja un cuadro, y se recorta cada pieza que toque (o se alarga, en {{cmd:EXTEND}}, o con {{key:Shift}}). {{ui:Un trazo}} (el inicio) devuelve el trazo a mano alzada. La línea de parámetros al inicio de TRIM indica cuál está activo.

## Elegir las aristas de corte (modo Estándar)

A veces solo debe cortar una línea, como la cara de un muro que cruzan muchas otras líneas.

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `O` (mOdo) y pulse {{key:Enter}}, luego escriba `S` (Estándar) y pulse {{key:Enter}}.
3. En `Select cutting edges`, haga clic en las líneas de corte (o arrastre una ventana), y luego pulse {{key:Enter}}. Pulsar {{key:Enter}} sin nada designado convierte cada objeto en una arista.
4. Haga clic o arrastre sobre las piezas que quitar.

Solo cortan las aristas elegidas, y un objeto que ninguna arista cruza se deja tal cual. El modo se conserva hasta que cierre la página; escriba `O`, y luego `Q` para volver a Rápido. {{cmd:TRIMEXTENDMODE}} lo fija antes de empezar, igual que la variable del mismo nombre en otras partes: `0` Estándar, `1` Rápido. `T` (aristas de corte) elige aristas nuevas en cualquier momento; en {{cmd:EXTEND}} es `B` (bordes límite).

## Bordes que llegarían

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `E` (Arista) y pulse {{key:Enter}}, luego `E` (Alargar) y pulse {{key:Enter}}.

Ahora una línea o arco de corte que se queda corto cuenta como si siguiera: una línea corta corta donde cruzaría si fuera más larga. Escriba `E`, luego `N` (sin alargar) para volver atrás. Es lo mismo que EDGEMODE 1 y 0.

## Borrar sin salir

Escriba `R` (eRase, borrar) y pulse {{key:Enter}}, designe los objetos que borrar, y pulse {{key:Enter}}. TRIM continúa.

## Errores frecuentes

- **Desapareció una línea completa.** En modo Rápido, un objeto que nada cruza se borra. Escriba `U` para devolverlo, o cambie al modo Estándar (`O`, `S`).
- **"Nada que recortar allí: ninguna arista elegida cruza ese objeto."** El modo Estándar solo corta en las aristas que eligió. Escriba `T` para elegirlas de nuevo.
- **"No hay límite en esa dirección."** Alargar no encontró nada hacia adelante. Haga clic más cerca del extremo que debe crecer, o active `E` (Arista, Alargar) para límites que se quedan cortos.
- **El arrastre dibujó un lazo en lugar de recortar.** Un arrastre solo recorta mientras TRIM o EXTEND piden un objeto. Sin comando activo, un arrastre designa (vea [Selección con lazo](topic:lasso-selection)).
- **Solo se pueden recortar líneas, arcos, círculos y polilíneas.** Descomponga primero un bloque para recortar sus líneas.
