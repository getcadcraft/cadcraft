---
title: Recortar y extender
summary: Corte líneas donde otras las cruzan y alárguelas hasta encontrar otras, una pieza por vez o muchas a la vez arrastrando un trayecto sobre ellas.
keywords: trimextendmode, arrastre por ventana, recortar, extender, tr, ex, recorte rápido, arrastrar, a mano alzada, trayecto, valla, cruce, shift, bordes de corte, bordes de límite, edgemode, modo, estándar, rápido, borrar, vista previa, muros, limpieza
from: 25fbc5bd
---

## Lo que va a aprender

Cómo funcionan {{cmd:TRIM}} y {{cmd:EXTEND}}, y las formas rápidas de usarlos: arrastrar sobre muchas piezas a la vez, mantener {{key:Shift}} para alternar entre recortar y extender, y ver qué se va a borrar antes de hacer clic.

## Recortar una pieza

1. Dibuje una línea horizontal larga y dos líneas cortas que la crucen.
2. Escriba `TR` y pulse {{key:Enter}}. El historial dice `Current settings: Quick mode, edges: No extend`.
3. Apoye el puntero sobre la línea larga entre las dos cortas. Esa pieza se pone gris y punteada: es lo que se va a quitar.
4. Haga clic. La pieza desaparece.
5. Pulse {{key:Enter}} para terminar el comando.

En modo Quick (el predeterminado) cada objeto visible es un borde de corte, así que nunca tiene que elegir los bordes primero. Haga clic en la pieza que quiere quitar. Un objeto que nada cruza se borra entero, y el historial lo indica.

## Recortar muchas piezas en un arrastre

1. Dibuje una línea horizontal larga y diez líneas verticales cortas que la crucen.
2. Escriba `TR` y pulse {{key:Enter}}.
3. Presione el botón del mouse encima de la línea larga, a la izquierda de la primera línea vertical, y arrastre sobre las diez por encima de la línea larga.

Mientras arrastra, el trayecto se ve como línea punteada, y cada pieza que cruzó se pone gris. Suelte: las diez piezas superiores se recortan en un solo paso. Escriba `U` y pulse {{key:Enter}} para devolverlas todas de una vez.

:::tip
También puede hacer clic en dos puntos vacíos: la línea entre ellos funciona como un trayecto arrastrado. Escriba `F` (Fence, valla) para hacer clic en una serie de puntos en su lugar, y después pulse {{key:Enter}}.
:::

:::touch
Arrastre un dedo de la misma forma. Un toque sobre una pieza la recorta.
:::

## Extender en cambio, con Shift

1. Dibuje una línea vertical, y cinco líneas horizontales cortas a su izquierda que terminen antes de ella.
2. Escriba `TR` y pulse {{key:Enter}}.
3. Mantenga presionado {{key:Shift}}. Apoye el puntero sobre una línea corta: la parte que crecería se ve gris y punteada.
4. Siga con {{key:Shift}} presionado y arrastre hacia abajo sobre las cinco líneas cortas.

Ahora las cinco llegan hasta la línea vertical. {{key:Shift}} funciona al revés en {{cmd:EXTEND}} (`EX`): un clic extiende, y un clic con {{key:Shift}} recorta. Extender alarga el extremo más cercano a donde hace clic o donde cruza el trayecto.

## Recortar dentro de una ventana

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `C` y pulse {{key:Enter}}.
3. Haga clic en dos esquinas alrededor de las piezas que quiere quitar.

Se recorta cada pieza que queda al menos en parte dentro de la ventana.

Para tener una ventana solo arrastrando, sin escribir `C`: {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Dragging to trim and extend}} ›
{{ui:A window}}. Así, al presionar en un lugar vacío y arrastrar se dibuja un cuadro, y cada pieza que toca se recorta (o se extiende, en {{cmd:EXTEND}}, o con {{key:Shift}}). {{ui:A path}} (el inicio) devuelve el trayecto a mano alzada. La línea de configuración al inicio de TRIM dice cuál está activo.

## Elegir los bordes de corte (modo Standard)

A veces solo debe cortar una línea, como la cara de un muro con muchas otras líneas que la cruzan.

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `O` (mOde, modo) y pulse {{key:Enter}}, luego escriba `S` (Standard) y pulse {{key:Enter}}.
3. En `Select cutting edges`, haga clic en las líneas de borde (o arrastre una ventana) y después pulse {{key:Enter}}. Pulsar {{key:Enter}} sin nada seleccionado hace que cada objeto sea un borde.
4. Haga clic o arrastre sobre las piezas que quiere quitar.

Solo cortan los bordes elegidos, y un objeto que ningún borde cruza queda intacto. El modo se mantiene hasta que cierre la página; escriba `O`, luego `Q` para volver a Quick. {{cmd:TRIMEXTENDMODE}} lo fija antes de empezar, como lo hace la variable de ese nombre en otros lugares: `0` Standard, `1` Quick. `T` (cuTting edges, bordes de corte) elige bordes nuevos en cualquier momento; en {{cmd:EXTEND}} es `B` (Boundary edges, bordes de límite).

## Bordes que llegarían

1. Escriba `TR` y pulse {{key:Enter}}.
2. Escriba `E` (Edge, borde) y pulse {{key:Enter}}, luego `E` (Extend, extender) y pulse {{key:Enter}}.

Ahora una línea o arco de corte que se queda corta cuenta como si siguiera: una línea corta corta donde cruzaría si fuera más larga. Escriba `E`, luego `N` (No extend) para volver atrás. Es lo mismo que EDGEMODE 1 y 0.

## Borrar sin salir

Escriba `R` (eRase, borrar) y pulse {{key:Enter}}, elija los objetos que quiere borrar y pulse {{key:Enter}}. TRIM sigue.

## Errores comunes

- **Desapareció una línea entera.** En modo Quick, un objeto que nada cruza se borra. Escriba `U` para devolverlo, o cambie al modo Standard (`O`, `S`).
- **"Nothing to trim there: no chosen edge crosses that object."** El modo Standard solo corta en los bordes que eligió. Escriba `T` para elegirlos otra vez.
- **"No boundary in that direction."** Extend no encontró nada hacia adelante. Haga clic más cerca del extremo que debe crecer, o active `E` (Edge, Extend) para límites que se quedan cortos.
- **El arrastre dibujó un lazo.** Un arrastre solo recorta mientras TRIM o EXTEND piden un objeto. Sin comando en curso, un arrastre selecciona (vea [Selección por lazo](topic:lasso-selection)).
- **Solo se pueden recortar líneas, arcos, círculos y polilíneas.** Descomponga primero un bloque para recortar sus líneas.
