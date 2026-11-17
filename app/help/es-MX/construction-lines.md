---
title: Líneas auxiliares y rayos
summary: Dibuje líneas que se prolongan sin fin (XLINE) o desde un punto en un sentido (RAY) para alinear objetos, y recórtelas hasta convertirlas en líneas normales.
keywords: xline, ray, línea auxiliar, líneas auxiliares, línea infinita, línea guía, línea de referencia, bisectriz, línea de desfase, líneas de presentación, xl
from: b6c398bc
---

## Lo que aprenderá

Cómo dibujar líneas auxiliares para alinear objetos mientras dibuja: por dos puntos, nivelada o a plomo, con un ángulo, a mitad de camino entre dos direcciones, o a una distancia fija de una línea. Y cómo recortarlas para convertirlas en líneas normales cuando ya hayan cumplido su función.

## Dos tipos

- Una **línea auxiliar** ({{cmd:XLINE}}) se prolonga sin fin en ambos sentidos.
- Un **rayo** ({{cmd:RAY}}) parte de un punto y se prolonga sin fin en un solo sentido.

Ambos se dibujan en toda el área de dibujo sin importar el zoom, en pantalla dividida y en ventanas gráficas de una hoja. {{ui:Extensión}} no los incluye, así que hacer zoom al dibujo sigue ajustando lo que dibujó.

## Dibujar líneas auxiliares

1. Haga clic en {{ui:Dibujo}} › {{ui:Más}} › {{ui:Línea auxiliar}}, o escriba `XL` y pulse {{key:Enter}}.
2. Haga clic en un punto. Cada clic posterior añade una línea auxiliar que pasa por el primer punto y por el que usted señala.
3. Pulse {{key:Enter}} para terminar.

En lugar del primer punto puede escribir una opción:

| Opción | Qué hace |
|---|---|
| `H` (Hor) | Líneas horizontales, una por cada punto en el que haga clic. |
| `V` (Ver) | Líneas verticales por cada punto. |
| `A` (Áng) | Líneas con el ángulo que escriba (en grados, en sentido antihorario desde el eje X), por cada punto. `R` (Referencia) mide el ángulo desde una línea que usted elija. |
| `B` (Bisectriz) | Haga clic en el vértice y luego en un punto sobre un lado: cada punto que haga clic sobre el otro lado añade la línea a mitad de camino entre ambos. |
| `O` (Desfase) | Escriba una distancia, elija una línea y luego haga clic en el lado: una línea auxiliar a esa distancia, paralela. `T` (Por) la coloca por un punto en el que haga clic. La distancia se recuerda para la próxima vez. |

## Dibujar rayos

1. Haga clic en {{ui:Dibujo}} › {{ui:Más}} › {{ui:Rayo}}, o escriba `RAY` y pulse {{key:Enter}}.
2. Haga clic donde comienzan los rayos.
3. Haga clic en un punto por el que pase cada rayo. Pulse {{key:Enter}} para terminar.

## Referencias a objetos y recorte

Las líneas auxiliares y los rayos aceptan las referencias a objetos Cercano, Perpendicular e Intersección. No tienen extremos ni punto medio, así que Punto final y Punto medio no encuentran nada en ellos.

Se cortan y se recortan como otras líneas en {{cmd:TRIM}} y {{cmd:BREAK}}:

- Recorte un extremo de una línea auxiliar y se convierte en un rayo que parte del corte.
- Recorte la parte lejana de un rayo y se convierte en una línea normal.
- Parta una línea auxiliar en un punto y obtendrá dos rayos.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} y {{cmd:STRETCH}} también funcionan con ellos. Una selección por ventana nunca los incluye, porque ninguna ventana puede contener una línea sin fin; una captura o un clic sí.

:::note
Un DWG (todas las versiones) y un DXF 2000 las conservan como líneas auxiliares. DXF R12 no tiene este tipo de línea, así que allí se convierten en líneas que cruzan el dibujo, y el guardado lo indica. Un trazado o un PDF las dibuja solo en la zona que se imprime.
:::
