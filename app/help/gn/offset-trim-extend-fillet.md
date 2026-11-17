---
title: Offset, recortar, extender, redondear y biselar muros
summary: Convertí líneas simples en muros dobles con Offset, limpiá las esquinas con Redondeo, y cortá y alargá líneas con Recortar y Extender.
keywords: offset, recortar, extender, redondeo, chaflán, bisel, romper, romper en punto, alargar, muros, esquina, cortar, alargar, paralela, radio, limpieza
from: c6c5cbd0
---

## Mba'e ojapóta

Peteĩ ambiente chiquito con muros de 200 de espesor: se dibuja la cara interior, se ojapo offset de la cara exterior, se limpian las esquinas, y se corta una abertura en un muro.

## Dibujar la cara interior

1. Escribí `L` y presioná {{key:Enter}}.
2. Escribí `0,0` y presioná {{key:Enter}}.
3. Escribí `@5000,0` y presioná {{key:Enter}}.
4. Escribí `@0,4000` y presioná {{key:Enter}}.
5. Escribí `@-5000,0` y presioná {{key:Enter}}.
6. Escribí `C` y presioná {{key:Enter}}.
7. Hacé clic en {{ui:Extensiones}}.

Tenés cuatro líneas separadas. (Una polilínea cerrada haría offset de una vez; líneas separadas muestran cómo Redondeo limpia esquinas.)

## Hacer offset de la cara exterior

1. Escribí `O` y presioná {{key:Enter}}. El prompt dice `Specify offset distance [Through] <Through>:`.
2. Escribí `200` y presioná {{key:Enter}}.
3. En `Select object to offset`, hacé clic en la línea inferior.
4. En `Specify point on side to offset`, hacé clic en cualquier lugar debajo. Aparece una línea paralela 200 debajo.
5. Hacé clic en la línea derecha, luego clic a su derecha.
6. Hacé clic en la línea superior, luego clic arriba.
7. Hacé clic en la línea izquierda, luego clic a su izquierda.
8. Presioná {{key:Enter}} para terminar el comando.

Deberías ver cuatro líneas exteriores, cada una de la misma longitud que su línea interior, así que las esquinas exteriores no se encuentran.

:::tip
Presioná {{key:Enter}} en el prompt de distancia para usar otra vez la última distancia. Escribí `T` para Through: entonces cada copia pasa por el punto que hagas clic, a la distancia que sea.
:::

{{cmd:OFFSET}} funciona con líneas, arcos, círculos y polilíneas. Hacer offset de una polilínea cerrada desplaza todo el contorno, incluidas las esquinas.

## Limpiar las esquinas exteriores con Redondeo

{{cmd:FILLET}} une dos líneas en una esquina: recorta o extiende ambas para que se encuentren. Con radio 0 la esquina queda cuadrada.

1. Escribí `F` y presioná {{key:Enter}}. El prompt dice `Select first line [Radius]:`.
2. Si el último redondeo que hiciste usó un radio, escribí `R`, presioná {{key:Enter}}, escribí `0` y presioná {{key:Enter}}.
3. Hacé clic en la línea exterior inferior cerca de su extremo derecho.
4. En `Select second line`, hacé clic en la línea exterior derecha cerca de su extremo inferior.

Las dos líneas ahora se encuentran en una esquina filosa, y el comando termina.

5. Presioná {{key:Enter}} para repetir {{cmd:FILLET}}, y hacé la siguiente esquina.
6. Repetí hasta que las cuatro esquinas exteriores se encuentren.

Hacé clic en cada línea en la parte que querés **conservar**. Con radio mayor a 0, Redondeo agrega un arco entre las líneas.

:::tip
Escribí `M` en el primer prompt para hacer las cuatro esquinas de una vez, o dibujá la cara exterior como una polilínea cerrada y escribí `P`: cada esquina se hace a la vez. Mantené {{key:Shift}} mientras hacés clic en la segunda línea para una esquina filosa sin cambiar el radio.
:::

## Biselar una esquina con Chaflán

{{cmd:CHAMFER}} corta una esquina con una línea recta.

1. Escribí `CHA` y presioná {{key:Enter}}.
2. Escribí `D` y presioná {{key:Enter}}. Escribí `300` y presioná {{key:Enter}} para la primera distancia, luego presioná {{key:Enter}} para usar 300 también en la segunda.
3. Hacé clic en la línea interior superior cerca de su extremo izquierdo, luego en la línea interior izquierda cerca de su extremo superior.

La esquina se corta 300 a lo largo de cada línea y una línea de bisel las une. Escribí `A` en vez de `D` para dar una longitud en la primera línea y un ángulo.

## Cortar una abertura con Recortar

Primero dibujá las dos jambas a través del muro inferior, luego recortá las líneas del muro entre ellas.

1. Escribí `L` y presioná {{key:Enter}}.
2. Escribí `1000,200` y presioná {{key:Enter}}.
3. Escribí `@0,-600` y presioná {{key:Enter}}, luego presioná {{key:Enter}} otra vez.
4. Presioná {{key:Enter}} para repetir {{cmd:LINE}}.
5. Escribí `1900,200` y presioná {{key:Enter}}.
6. Escribí `@0,-600` y presioná {{key:Enter}}, luego presioná {{key:Enter}} otra vez.

Ahora tenés dos líneas cortas cruzando el muro inferior a 900 de distancia.

7. Escribí `TR` y presioná {{key:Enter}}. El historial dice `Current settings: Quick mode, edges: No extend`.
8. Hacé clic en la línea interior inferior entre las dos jambas. Ese pedazo desaparece. (Apoyá antes el puntero: el pedazo que se va se pone gris y punteado.)
9. Hacé clic en la línea exterior inferior entre las dos jambas. Ese pedazo también desaparece.
10. Hacé clic en la parte de cada jamba que sobresale por encima del muro, y la parte de abajo.
11. Presioná {{key:Enter}} para terminar el comando.

Deberías ver una abertura de 900 en el muro inferior, con las jambas cerrando los extremos del muro.

En modo Rápido (el predeterminado) Recortar no pide primero elegir bordes de corte: cada objeto visible es un borde de corte. Elegí el pedazo que querés eliminar, o arrastrá un trayecto por varios pedazos para recortarlos todos juntos. Escribí `U` y presioná {{key:Enter}} para deshacer la última selección o arrastre sin salir del comando. Ventana, crossing, bordes elegidos y {{key:Shift}} para extender están en [Recortar y extender](topic:trim-and-extend).

## Extender una línea hasta encontrar otra

{{cmd:EXTEND}} alarga una línea, arco o extremo de polilínea hasta que encuentra el siguiente objeto en esa dirección.

1. Escribí `L` y presioná {{key:Enter}}.
2. Escribí `1000,2000` y presioná {{key:Enter}}.
3. Escribí `@2000,0` y presioná {{key:Enter}}, luego presioná {{key:Enter}} otra vez. La línea se detiene 2000 antes del muro derecho.
4. Escribí `EX` y presioná {{key:Enter}}.
5. Hacé clic en la línea nueva cerca de su extremo derecho.
6. Presioná {{key:Enter}} para terminar el comando.

La línea ahora llega hasta la cara interior del muro derecho. Cada objeto visible es un límite; elegí cerca del extremo que debe crecer. Dentro de {{cmd:TRIM}}, {{key:Shift}}+clic hace lo mismo.

## Romper y alargar

{{cmd:BREAK}} (`BR`, o {{ui:Modificar}} › {{ui:Más}} › {{ui:Romper}}) corta un hueco sin borde de corte: hacé clic en el objeto donde empieza el hueco (ese clic es el primer punto), luego hacé clic donde termina. En un círculo se borra la parte en sentido antihorario desde el primer punto hasta el segundo. `F` en la segunda pregunta te deja volver a dar el primer punto, y {{cmd:BREAKATPOINT}} divide un objeto en dos en un punto, sin hueco.

{{cmd:LENGTHEN}} (`LEN`) cambia una longitud en un extremo:

1. Escribí `LEN` y presioná {{key:Enter}}. Hacé clic en una línea para ver su longitud actual; el prompt pregunta de nuevo.
2. Elegí cómo: `DE` (Delta: una cantidad a sumar, negativa para restar; `A` para el ángulo de un arco), `P` (Percent: 50 la reduce a la mitad), `T` (Total: la longitud que debe tener) o `DY` (Dynamic: arrastrá el extremo).
3. Hacé clic en cada objeto cerca del extremo que debe moverse. `U` deshace el último; {{key:Enter}} termina.

Se pueden alargar líneas, arcos y polilíneas abiertas (su segmento final).

## Errores comunes

- **Desapareció una línea entera.** Nada la cruzaba, así que el modo Rápido la borró. Escribí `U` para devolverla; revisá que la línea de corte realmente la cruce (hacé zoom) y que no esté en una capa apagada.
- **"No hay límite en esa dirección."** Extender no encontró nada con qué chocar. Elegí más cerca del extremo que debe crecer.
- **"El radio es demasiado grande."** El arco se pasaría del extremo de una de las líneas. Usá un radio menor.
- **"Solo se puede recortar el primer o último segmento de una polilínea abierta."** Elegí dos segmentos de la polilínea contiguos, o escribí `P` para redondear todas sus esquinas.
- **El offset fue al lado equivocado.** El lado es donde hacés clic después de elegir el objeto. Deshacé con {{key:Mod+Z}} y hacé clic del otro lado.
- **"No se puede hacer offset tan lejos."** El offset daría vuelta el arco, círculo o polilínea hacia adentro. Usá una distancia menor.
