---
title: Líneas auxiliares y rayos
summary: Dibuje líneas que se prolongan sin fin (XLINE) o desde un punto en un sentido (RAY) para alinear elementos, y recórtelas hasta convertirlas en líneas normales.
keywords: xline, ray, línea auxiliar, líneas auxiliares, rayo, rayos, línea infinita, línea guía, línea de referencia, bisectriz, línea de desfase, líneas de disposición, xl
from: b6c398bc
---

## Lo que aprenderá

Cómo dibujar líneas auxiliares para alinear elementos mientras dibuja: por dos puntos, nivelada o a plomo, con un ángulo, a mitad de camino entre dos direcciones o a una distancia fija de una línea. Y cómo recortarlas hasta convertirlas en líneas normales cuando hayan cumplido su función.

## Dos tipos

- Una **línea auxiliar** ({{cmd:XLINE}}) se prolonga sin fin en ambos sentidos.
- Un **rayo** ({{cmd:RAY}}) parte de un punto y se prolonga sin fin en un sentido.

Ambos se dibujan en toda el área de dibujo, sea cual sea el zoom, en pantalla dividida y en las ventanas gráficas de una hoja. {{ui:Extensión}} las deja fuera, de modo que al hacer zoom sobre el dibujo sigue encajando lo que dibujó.

## Dibujar líneas auxiliares

1. Haga clic en {{ui:Dibujo}} › {{ui:Más}} › {{ui:Línea auxiliar}}, o escriba `XL` y pulse {{key:Enter}}.
2. Haga clic en un punto. Cada clic posterior añade una línea auxiliar que pasa por el primer punto y por el que usted indique.
3. Pulse {{key:Enter}} para terminar.

En lugar del primer punto puede escribir una opción:

| Opción | Qué hace |
|---|---|
| `H` (Hor) | Líneas horizontales, una por cada punto que indique. |
| `V` (Ver) | Líneas verticales, una por cada punto. |
| `A` (Áng) | Líneas con un ángulo que escriba (en grados, en sentido antihorario desde el eje X), por cada punto. `R` (Referencia) mide el ángulo desde una línea que elija. |
| `B` (Bisec) | Haga clic en la esquina y, después, en un punto a lo largo de un lado: cada punto que indique a lo largo del otro lado añade la línea a mitad de camino entre ambos. |
| `O` (Desf) | Escriba una distancia, elija una línea y, después, haga clic en el lado: una línea auxiliar a esa distancia, paralela. `T` (Por) la coloca por un punto que usted indique. La distancia se recuerda para la próxima vez. |

## Dibujar rayos

1. Haga clic en {{ui:Dibujo}} › {{ui:Más}} › {{ui:Rayo}}, o escriba `RAY` y pulse {{key:Enter}}.
2. Haga clic donde comiencen los rayos.
3. Haga clic en un punto por el que pase cada rayo. Pulse {{key:Enter}} para terminar.

## Ajustar a ellas y recortarlas

Las líneas auxiliares y los rayos admiten los ajustes a Cercano, Perpendicular e Intersección. No tienen extremos ni punto medio, así que Extremo y Punto medio no encuentran nada en ellos.

Se cortan y se dejan cortar como otras líneas con {{cmd:TRIM}} y {{cmd:BREAK}}:

- Si recorta un extremo de una línea auxiliar, se convierte en un rayo que empieza en el corte.
- Si recorta la parte lejana de un rayo, se convierte en una línea normal.
- Si parte una línea auxiliar en un punto, obtiene dos rayos.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} y {{cmd:STRETCH}} también funcionan con ellas. Una selección por ventana nunca las selecciona, porque ninguna ventana puede contener una línea sin fin completa; sí lo hace una ventana de cruce o un clic.

:::note
Un DWG (todas las versiones) y un DXF 2000 las conservan como líneas auxiliares. DXF R12 no tiene ese tipo, así que allí pasan a ser líneas que atraviesan el dibujo, y al guardar se indica. Un trazado o un PDF solo las dibuja a lo largo de lo que imprime.
:::
