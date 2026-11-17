---
title: Desfasar, recortar, prolongar, empalmar y achaflanar muros
summary: Convierta líneas sueltas en muros dobles con Desfase, limpie las esquinas con Empalme, y corte y prolongue líneas con Recortar y Prolongar.
keywords: desfase, recortar, prolongar, empalme, chaflán, bisel, romper, breakatpoint, alargar, muros, esquina, cortar, paralelo, radio, limpieza
from: c6c5cbd0
---

## Qué va a crear

Una pequeña habitación con muros de 200 de grosor: se dibuja la cara interior, se desfasa la cara exterior, se limpian las esquinas, y se corta un vano en uno de los muros.

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

1. Escriba `O` y pulse {{key:Enter}}. La petición dice `Specify offset distance [Through] <Through>:`.
2. Escriba `200` y pulse {{key:Enter}}.
3. En `Select object to offset`, haga clic en la línea inferior.
4. En `Specify point on side to offset`, haga clic en cualquier punto por debajo. Aparece una línea paralela 200 por debajo.
5. Haga clic en la línea derecha, y después haga clic a su derecha.
6. Haga clic en la línea superior, y después haga clic por encima.
7. Haga clic en la línea izquierda, y después haga clic a su izquierda.
8. Pulse {{key:Enter}} para terminar el comando.

Debería ver cuatro líneas exteriores, cada una de la misma longitud que su línea interior, de modo que las esquinas exteriores no se juntan.

:::tip
Pulse {{key:Enter}} en la petición de distancia para usar de nuevo la última distancia. Escriba `T` para A través: entonces cada copia pasa por el punto en que hace clic, a la distancia que sea.
:::

{{cmd:OFFSET}} funciona con líneas, arcos, circunferencias y polilíneas. Desfasar una polilínea cerrada desfasa todo el contorno, incluidas sus esquinas.

## Limpiar las esquinas exteriores con Empalme

{{cmd:FILLET}} une dos líneas en una esquina: recorta o prolonga las dos para que se encuentren. Con un radio de 0 la esquina es cuadrada.

1. Escriba `F` y pulse {{key:Enter}}. La petición dice `Select first line [Radius]:`.
2. Si el último empalme que hizo usó un radio, escriba `R`, pulse {{key:Enter}}, escriba `0` y pulse {{key:Enter}}.
3. Haga clic en la línea inferior exterior cerca de su extremo derecho.
4. En `Select second line`, haga clic en la línea derecha exterior cerca de su extremo inferior.

Las dos líneas ahora se encuentran en una esquina aguda, y el comando termina.

5. Pulse {{key:Enter}} para repetir {{cmd:FILLET}}, y haga la siguiente esquina.
6. Repita hasta que las cuatro esquinas exteriores se encuentren.

Haga clic en cada línea en la parte que quiere **conservar**. Con un radio mayor que 0, Empalme añade un arco entre las líneas.

:::tip
Escriba `M` en la primera petición para hacer las cuatro esquinas de una vez, o dibuje la cara exterior como una polilínea cerrada y escriba `P`: se hacen todas las esquinas a la vez. Mantenga pulsado {{key:Shift}} mientras hace clic en la segunda línea para obtener una esquina aguda sin cambiar el radio.
:::

## Biselar una esquina con Chaflán

{{cmd:CHAMFER}} corta una esquina con una línea recta.

1. Escriba `CHA` y pulse {{key:Enter}}.
2. Escriba `D` y pulse {{key:Enter}}. Escriba `300` y pulse {{key:Enter}} para la primera distancia, y después pulse {{key:Enter}} para usar 300 también en la segunda.
3. Haga clic en la línea superior interior cerca de su extremo izquierdo, y después en la línea izquierda interior cerca de su extremo superior.

La esquina se recorta 300 a lo largo de cada línea y una línea de bisel las une. Escriba `A` en lugar de `D` para dar una longitud en la primera línea y un ángulo.

## Cortar un vano con Recortar

Primero dibuje las dos jambas a través del muro inferior, y después recorte las líneas del muro entre ellas.

1. Escriba `L` y pulse {{key:Enter}}.
2. Escriba `1000,200` y pulse {{key:Enter}}.
3. Escriba `@0,-600` y pulse {{key:Enter}}, y después pulse {{key:Enter}} de nuevo.
4. Pulse {{key:Enter}} para repetir {{cmd:LINE}}.
5. Escriba `1900,200` y pulse {{key:Enter}}.
6. Escriba `@0,-600` y pulse {{key:Enter}}, y después pulse {{key:Enter}} de nuevo.

Ahora tiene dos líneas cortas que cruzan el muro inferior separadas 900.

7. Escriba `TR` y pulse {{key:Enter}}. El historial dice `Current settings: Quick mode, edges: No extend`.
8. Haga clic en la línea inferior interior entre las dos jambas. Esa parte desaparece. (Sitúe antes el puntero sobre ella: la pieza que se va se vuelve gris y discontinua.)
9. Haga clic en la línea inferior exterior entre las dos jambas. Esa parte también desaparece.
10. Haga clic en la parte de cada jamba que sobresale por encima del muro, y en la parte de debajo.
11. Pulse {{key:Enter}} para terminar el comando.

Debería ver un vano de 900 en el muro inferior, con las jambas cerrando los extremos del muro.

En modo Rápido (el predeterminado), Recortar no le pide elegir antes las aristas de corte: cada objeto visible es una arista de corte. Elija la pieza que quiere eliminar, o arrastre una trayectoria sobre varias piezas para recortarlas todas a la vez. Escriba `U` y pulse {{key:Enter}} para deshacer la última selección o arrastre sin salir del comando. Valla, cruce, aristas elegidas y {{key:Shift}} para prolongar están en [Recortar y prolongar](topic:trim-and-extend).

## Prolongar una línea hasta otra

{{cmd:EXTEND}} alarga una línea, un arco o un extremo de polilínea hasta que se encuentra con el siguiente objeto en esa dirección.

1. Escriba `L` y pulse {{key:Enter}}.
2. Escriba `1000,2000` y pulse {{key:Enter}}.
3. Escriba `@2000,0` y pulse {{key:Enter}}, y después pulse {{key:Enter}} de nuevo. La línea se detiene 2000 antes del muro derecho.
4. Escriba `EX` y pulse {{key:Enter}}.
5. Haga clic en la nueva línea cerca de su extremo derecho.
6. Pulse {{key:Enter}} para terminar el comando.

La línea ahora llega hasta la cara interior del muro derecho. Cada objeto visible es un límite; elija cerca del extremo que debe crecer. Dentro de {{cmd:TRIM}}, {{key:Shift}}+clic hace lo mismo.

## Partir y alargar

{{cmd:BREAK}} (`BR`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Partir}}) corta un hueco sin arista de corte: haga clic en el objeto donde empieza el hueco (ese clic es el primer punto), y después haga clic donde termina. En una circunferencia se elimina la parte en sentido antihorario desde el primer punto hasta el segundo. `F` en la segunda pregunta le permite indicar de nuevo el primer punto, y {{cmd:BREAKATPOINT}} divide un objeto en dos en un punto, sin hueco.

{{cmd:LENGTHEN}} (`LEN`) cambia una longitud en un extremo:

1. Escriba `LEN` y pulse {{key:Enter}}. Haga clic en una línea para ver su longitud actual; la petición vuelve a preguntar.
2. Elija el modo: `DE` (Delta: una cantidad a añadir, negativa para quitar; `A` para el ángulo de un arco), `P` (Porcentaje: 50 la reduce a la mitad), `T` (Total: la longitud que debe tener) o `DY` (Dinámico: arrastre el extremo).
3. Haga clic en cada objeto cerca del extremo que debe moverse. `U` devuelve el último; {{key:Enter}} termina.

Se pueden alargar líneas, arcos y polilíneas abiertas (su segmento final).

## Errores frecuentes

- **Desapareció una línea entera.** Nada la cruzaba, así que el modo Rápido la borró. Escriba `U` para devolverla; compruebe que la línea de corte realmente la cruza (acerque el zoom) y que no está en una capa desactivada.
- **"No hay límite en esa dirección."** Prolongar no encontró nada con qué encontrarse. Elija más cerca del extremo que debe crecer.
- **"El radio es demasiado grande."** El arco se saldría del extremo de una de las líneas. Use un radio menor.
- **"Solo se puede recortar el primer o el último segmento de una polilínea abierta."** Elija dos segmentos contiguos de la polilínea, o escriba `P` para redondear todas sus esquinas.
- **El desfase fue al lado equivocado.** El lado es donde hace clic después de elegir el objeto. Deshaga con {{key:Mod+Z}} y haga clic en el otro lado.
- **"No se puede desfasar tan lejos."** El desfase volvería del revés el arco, la circunferencia o la polilínea. Use una distancia menor.
