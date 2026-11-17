---
title: Desfasar, recortar, alargar, empalmar y chaflanar muros
summary: Convierta líneas simples en muros dobles con Desfase, limpie las esquinas con Empalme, y corte y alargue líneas con Recortar y Alargar.
keywords: desfase, recortar, alargar, empalme, chaflán, bisel, romper, breakatpoint, cambiar longitud, muros, esquina, cortar, paralela, radio, limpieza
from: c6c5cbd0
---

## Lo que va a crear

Una habitación pequeña con muros de 200 de espesor: se dibuja la cara interior, la cara exterior se obtiene por desfase, las esquinas se limpian y se corta un vano en un muro.

## Dibujar la cara interior

1. Escriba `L` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}}.
3. Escriba `@5000,0` y pulse {{key:Enter}}.
4. Escriba `@0,4000` y pulse {{key:Enter}}.
5. Escriba `@-5000,0` y pulse {{key:Enter}}.
6. Escriba `C` y pulse {{key:Enter}}.
7. Haga clic en {{ui:Extensión}}.

Tiene cuatro líneas separadas. (Una polilínea cerrada se desfasaría de una vez; las líneas separadas muestran cómo Empalme limpia las esquinas.)

## Desfasar la cara exterior

1. Escriba `O` y pulse {{key:Enter}}. El aviso dice `Specify offset distance [Through] <Through>:`.
2. Escriba `200` y pulse {{key:Enter}}.
3. En `Select object to offset`, haga clic en la línea inferior.
4. En `Specify point on side to offset`, haga clic en cualquier punto debajo de ella. Aparece una línea paralela 200 por debajo.
5. Haga clic en la línea derecha, luego haga clic a su derecha.
6. Haga clic en la línea superior, luego haga clic arriba de ella.
7. Haga clic en la línea izquierda, luego haga clic a su izquierda.
8. Pulse {{key:Enter}} para terminar el comando.

Debe ver cuatro líneas exteriores, cada una de la misma longitud que su línea interior, así que las esquinas exteriores no se tocan.

:::tip
Pulse {{key:Enter}} en el aviso de distancia para usar otra vez la última distancia. Escriba `T` para Través: entonces cada copia pasa por el punto que haga clic, a la distancia que sea.
:::

{{cmd:OFFSET}} funciona con líneas, arcos, círculos y polilíneas. Desfasar una polilínea cerrada desfasa todo el contorno, incluidas las esquinas.

## Limpiar las esquinas exteriores con Empalme

{{cmd:FILLET}} une dos líneas en una esquina: recorta o alarga ambas para que se encuentren. Con un radio de 0, la esquina queda cuadrada.

1. Escriba `F` y pulse {{key:Enter}}. El aviso dice `Select first line [Radius]:`.
2. Si el último empalme que hizo usó un radio, escriba `R`, pulse {{key:Enter}}, escriba `0` y pulse {{key:Enter}}.
3. Haga clic en la línea inferior exterior cerca de su extremo derecho.
4. En `Select second line`, haga clic en la línea derecha exterior cerca de su extremo inferior.

Las dos líneas ahora se encuentran en una esquina aguda, y el comando termina.

5. Pulse {{key:Enter}} para repetir {{cmd:FILLET}}, y haga la siguiente esquina.
6. Repita hasta que las cuatro esquinas exteriores se encuentren.

Haga clic en cada línea en la parte que quiere **conservar**. Con un radio mayor que 0, Empalme añade en cambio un arco entre las líneas.

:::tip
Escriba `M` en el primer aviso para hacer las cuatro esquinas de una vez, o dibuje la cara exterior como una polilínea cerrada y escriba `P`: cada esquina se hace a la vez. Mantenga presionada {{key:Shift}} al hacer clic en la segunda línea para una esquina aguda sin cambiar el radio.
:::

## Hacer un chaflán en una esquina

{{cmd:CHAMFER}} corta una esquina con una línea recta.

1. Escriba `CHA` y pulse {{key:Enter}}.
2. Escriba `D` y pulse {{key:Enter}}. Escriba `300` y pulse {{key:Enter}} para la primera distancia, luego pulse {{key:Enter}} para usar 300 también en la segunda.
3. Haga clic en la línea superior interior cerca de su extremo izquierdo, luego en la línea izquierda interior cerca de su extremo superior.

La esquina se recorta 300 a lo largo de cada línea y una línea de chaflán las une. Escriba `A` en lugar de `D` para dar una longitud en la primera línea y un ángulo.

## Cortar un vano con Recortar

Primero dibuje las dos jambas de la puerta a través del muro inferior, luego recorte las líneas del muro entre ellas.

1. Escriba `L` y pulse {{key:Enter}}.
2. Escriba `1000,200` y pulse {{key:Enter}}.
3. Escriba `@0,-600` y pulse {{key:Enter}}, luego pulse {{key:Enter}} otra vez.
4. Pulse {{key:Enter}} para repetir {{cmd:LINE}}.
5. Escriba `1900,200` y pulse {{key:Enter}}.
6. Escriba `@0,-600` y pulse {{key:Enter}}, luego pulse {{key:Enter}} otra vez.

Ahora tiene dos líneas cortas que cruzan el muro inferior separadas 900.

7. Escriba `TR` y pulse {{key:Enter}}. El historial dice `Current settings: Quick mode, edges: No extend`.
8. Haga clic en la línea interior inferior entre las dos jambas. Esa pieza desaparece. (Detenga antes el puntero sobre ella: la pieza que se va se pone gris y punteada.)
9. Haga clic en la línea exterior inferior entre las dos jambas. Esa pieza también desaparece.
10. Haga clic en la parte de cada jamba que sobresale por encima del muro, y en la parte de abajo.
11. Pulse {{key:Enter}} para terminar el comando.

Debe ver una abertura de 900 en el muro inferior, con las jambas cerrando los extremos del muro.

En modo Rápido (el predeterminado), Recortar no le pide primero elegir las aristas de corte: cada objeto visible es una arista de corte. Designe la pieza que quiere quitar, o arrastre una trayectoria sobre varias piezas para recortarlas todas de una vez. Escriba `U` y pulse {{key:Enter}} para restaurar la última designación o arrastre sin salir del comando. Borde, captura, aristas elegidas y {{key:Shift}} para alargar están en [Recortar y alargar](topic:trim-and-extend).

## Alargar una línea hasta encontrar otra

{{cmd:EXTEND}} alarga el extremo de una línea, arco o polilínea hasta que encuentra el siguiente objeto en esa dirección.

1. Escriba `L` y pulse {{key:Enter}}.
2. Escriba `1000,2000` y pulse {{key:Enter}}.
3. Escriba `@2000,0` y pulse {{key:Enter}}, luego pulse {{key:Enter}} otra vez. La línea se detiene 2000 antes del muro derecho.
4. Escriba `EX` y pulse {{key:Enter}}.
5. Haga clic en la línea nueva cerca de su extremo derecho.
6. Pulse {{key:Enter}} para terminar el comando.

La línea ahora llega a la cara interior del muro derecho. Cada objeto visible es un límite; designe cerca del extremo que debe crecer. Dentro de {{cmd:TRIM}}, {{key:Shift}}+clic hace lo mismo.

## Partir y cambiar longitud

{{cmd:BREAK}} (`BR`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Partir}}) corta un hueco sin arista de corte: haga clic en el objeto donde empieza el hueco (ese clic es el primer punto), luego haga clic donde termina. En un círculo se quita la parte en sentido antihorario desde el primer punto hasta el segundo. `F` en la segunda pregunta le permite dar otra vez el primer punto, y {{cmd:BREAKATPOINT}} divide un objeto en dos en un punto, sin hueco.

{{cmd:LENGTHEN}} (`LEN`) cambia una longitud en un extremo:

1. Escriba `LEN` y pulse {{key:Enter}}. Haga clic en una línea para ver su longitud actual; el aviso vuelve a preguntar.
2. Elija el modo: `DE` (Delta: una cantidad para sumar, negativa para restar; `A` para el ángulo de un arco), `P` (Porcentaje: 50 la reduce a la mitad), `T` (Total: la longitud que debe tener) o `DY` (Dinámico: arrastre el extremo).
3. Haga clic en cada objeto cerca del extremo que debe moverse. `U` deshace el último; {{key:Enter}} termina.

Se pueden alargar líneas, arcos y polilíneas abiertas (su segmento final).

## Errores comunes

- **Desapareció una línea completa.** Nada la cruzaba, así que el modo Rápido la borró. Escriba `U` para devolverla; compruebe que la línea de corte realmente la cruza (acerque el zoom) y que no esté en una capa desactivada.
- **"No boundary in that direction."** › "No hay límite en esa dirección." Alargar no encontró nada con qué chocar. Designe más cerca del extremo que debe crecer.
- **"Radius is too large."** › "El radio es demasiado grande." El arco pasaría más allá del extremo de una de las líneas. Use un radio menor.
- **"Only the first or last segment of an open polyline can be cut back."** › "Solo se puede recortar el primer o el último segmento de una polilínea abierta." Designe dos segmentos contiguos de la polilínea, o escriba `P` para redondear cada esquina.
- **El desfase fue al lado equivocado.** El lado es donde hace clic después de designar el objeto. Deshaga con {{key:Mod+Z}} y haga clic en el otro lado.
- **"Cannot offset that far."** › "No se puede desfasar tan lejos." El desfase invertiría el arco, el círculo o la polilínea. Use una distancia menor.
