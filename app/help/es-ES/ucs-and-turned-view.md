---
title: Girar la vista y usar sus propias coordenadas (UCS)
summary: Gire la vista 90° o a cualquier ángulo sin mover nada del dibujo, y defina un sistema de coordenadas del usuario (UCS) para que los puntos, orto, el seguimiento polar, la rejilla y el texto nuevo sigan los ejes propios de un edificio.
keywords: ucs, sistema de coordenadas del usuario, planta, girar vista, rotar vista, giro de vista, ucs z, ucs 3point, ucs object, ucs world, ucs con nombre, ucsfollow, turnleft, turnright, turnworld, edificio inclinado, rejilla girada
from: 6f152c65
---

## Lo que aprenderá

Cómo ver un dibujo girado, de modo que un edificio dibujado en ángulo se lea derecho en pantalla, y cómo escribir puntos a lo largo de sus propios ejes. Nada del dibujo se mueve mientras lo hace: los objetos conservan sus coordenadas, un giro no es una edición y el dibujo no se marca como modificado.

## Girar la vista un cuarto de vuelta

1. Haga clic en {{ui:Vista}} › {{ui:Más}} › {{ui:Girar la vista 90° a la izquierda}} o {{ui:Girar la vista 90° a la derecha}}.

El dibujo gira en pantalla alrededor del centro del área de dibujo. Repítalo para seguir girando.

2. Haga clic en {{ui:Vista}} › {{ui:Más}} › {{ui:Volver al universal}} para volver a nivelarlo.

Los comandos asociados son {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} y {{cmd:TURNWORLD}}. Para asignarles una tecla, añada una línea como `TL=TURNLEFT` a sus alias con {{cmd:ALIASEDIT}}.

## Alinearse con un edificio en ángulo

1. Escriba `UCS` y pulse {{key:Enter}}, y después `OB` y {{key:Enter}}.
2. Haga clic en una línea de muro cerca del extremo que debe ser el origen.

El UCS empieza ahora en ese extremo con su eje X a lo largo del muro, y la vista gira para que el muro quede nivelado en pantalla. El icono de ejes en la esquina inferior izquierda muestra hacia dónde apuntan los ejes del UCS.

3. Dibuje como de costumbre. Con el UCS definido:
   - `x,y` y `@dx,dy` se miden a lo largo de los ejes del UCS; `d<a` mide el ángulo desde el eje X del UCS.
   - {{ui:Orto}}, el seguimiento polar y la rejilla siguen a los ejes del UCS, y también la cruz.
   - El texto nuevo y los párrafos nuevos siguen el eje X del UCS; las cotas horizontal y vertical de {{cmd:DIMLINEAR}} también lo siguen.
   - Las coordenadas de la barra de estado y de {{cmd:ID}} son coordenadas del UCS.
4. Para escribir un punto del mundo mientras hay un UCS definido, anteponga `*`: `*0,0` o `@*100,0`.
5. Escriba `UCS`, {{key:Enter}}, y después {{key:Enter}} de nuevo para volver al mundo.

## Otras formas de definir un UCS

En la solicitud de {{cmd:UCS}}:

| Escribe | Qué hace |
|---|---|
| un punto | Un origen nuevo; después haga clic en un punto del nuevo eje X, o pulse {{key:Enter}} para mantener el ángulo |
| `Z` | Gira el UCS alrededor de su origen un ángulo que escribe (grados, en sentido antihorario) o elige |
| `3` (3point) | Un origen, un punto a lo largo del eje X positivo y un punto en el lado Y positivo |
| `OB` (OBject) | A partir de una línea, arco, círculo, segmento de polilínea, texto, referencia de bloque, punto o línea de construcción |
| `P` (Previous) | El UCS anterior a este (se conservan los últimos diez mientras el dibujo está abierto) |
| `W` (World) | Vuelve al mundo |
| `NA` (NAmed) | `S` guarda el UCS actual con un nombre, `R` restaura uno, `D` borra uno, `?` los enumera |

Cada cambio gira la vista para que el nuevo eje X del UCS quede nivelado. {{cmd:PLAN}} gira la vista sin cambiar el UCS: {{key:Enter}} para el UCS actual, `U` para uno guardado, `W` para el mundo.

## Otros detalles

- Cada panel de una pantalla dividida conserva su propio giro. El UCS pertenece al dibujo.
- Las hojas trabajan en coordenadas de papel; defina un UCS en la pestaña {{ui:Modelo}}, o dentro de una ventana gráfica.
- Las ventanas de selección arrastradas en una vista girada seleccionan lo que queda dentro de ellas en pantalla.
- Las rutinas LISP reciben puntos del UCS desde `getpoint`, pueden leer `UCSORG`, `UCSXDIR`, `UCSYDIR` y `VIEWTWIST`, y `trans` convierte entre el mundo, el UCS y la pantalla.

:::note
Un archivo guardado conservará el UCS y el giro de la vista en una versión posterior; hasta entonces duran mientras el dibujo esté abierto.
:::
