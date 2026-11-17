---
title: Girar la vista y usar sus propias coordenadas (UCS)
summary: Gire la vista 90° o en cualquier ángulo sin mover nada del plano, y fije un sistema de coordenadas de usuario (UCS) para que los puntos, el ortogonal, el seguimiento polar, la cuadrícula y el texto nuevo sigan los ejes propios de un edificio.
keywords: ucs, sistema de coordenadas de usuario, planta, girar vista, rotar vista, torsión de vista, ucs z, ucs 3point, ucs object, ucs world, ucs con nombre, ucsfollow, turnleft, turnright, turnworld, edificio inclinado, cuadrícula rotada
from: 6f152c65
---

## Lo que va a aprender

Cómo mirar un plano girado, para que un edificio dibujado en diagonal se lea derecho en pantalla, y cómo escribir puntos a lo largo de sus propios ejes. Nada del plano se mueve mientras hace esto: los objetos conservan sus coordenadas, un giro no es una edición, y el plano no se marca como modificado.

## Girar la vista un cuarto

1. Haga clic en {{ui:View}} › {{ui:More}} › {{ui:Turn view 90° left}} o {{ui:Turn view 90° right}}.

El plano gira en pantalla alrededor del centro del área de dibujo. Hágalo otra vez para seguir girando.

2. Haga clic en {{ui:View}} › {{ui:More}} › {{ui:Back to world}} para volver a nivelarlo.

Los comandos detrás de ellos son {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} y {{cmd:TURNWORLD}}. Para asignarles una tecla, agregue una línea como `TL=TURNLEFT` a sus alias con {{cmd:ALIASEDIT}}.

## Alinearse con un edificio inclinado

1. Escriba `UCS` y pulse {{key:Enter}}, luego `OB` y {{key:Enter}}.
2. Haga clic en una línea de muro cerca del extremo que debe ser el origen.

El UCS ahora empieza en ese extremo, con su eje X a lo largo del muro, y la vista gira para que el muro quede nivelado en pantalla. El ícono de ejes en la esquina inferior izquierda muestra hacia dónde apuntan los ejes del UCS.

3. Dibuje como de costumbre. Con el UCS fijado:
   - `x,y` y `@dx,dy` se miden a lo largo de los ejes del UCS; `d<a` mide el ángulo desde el eje X del UCS.
   - {{ui:Ortho}}, el seguimiento polar y la cuadrícula siguen los ejes del UCS, y también la cruz.
   - El texto nuevo y los párrafos nuevos corren a lo largo del eje X del UCS; la horizontal y la vertical de {{cmd:DIMLINEAR}} también lo siguen.
   - Las coordenadas de la barra de estado y de {{cmd:ID}} son coordenadas del UCS.
4. Para escribir un punto del mundo mientras hay un UCS fijado, ponga `*` delante: `*0,0` o `@*100,0`.
5. Escriba `UCS`, {{key:Enter}}, y luego {{key:Enter}} otra vez para volver al mundo.

## Otras formas de fijar un UCS

En el aviso de {{cmd:UCS}}:

| Usted escribe | Qué hace |
|---|---|
| un punto | Un origen nuevo; luego haga clic en un punto sobre el nuevo eje X, o pulse {{key:Enter}} para mantener el ángulo |
| `Z` | Gira el UCS alrededor de su origen en un ángulo que escriba (grados, en sentido antihorario) o elija |
| `3` (3point) | Un origen, un punto sobre el eje X positivo y un punto en el lado Y positivo |
| `OB` (OBject) | Desde una línea, arco, círculo, segmento de polilínea, texto, referencia de bloque, punto o línea de construcción |
| `P` (Previous) | El UCS anterior a este (se guardan los últimos diez mientras el plano está abierto) |
| `W` (World) | Vuelve al mundo |
| `NA` (NAmed) | `S` guarda el UCS actual con un nombre, `R` restaura uno, `D` borra uno, `?` los enumera |

Cada cambio gira la vista para que el nuevo eje X del UCS quede nivelado. {{cmd:PLAN}} gira la vista sin cambiar el UCS: {{key:Enter}} para el UCS actual, `U` para uno guardado, `W` para el mundo.

## Good to know

- Cada panel de una pantalla dividida conserva su propio giro. El UCS pertenece al plano.
- Las hojas trabajan en coordenadas de papel; fije un UCS en la pestaña {{ui:Model}}, o dentro de una ventana gráfica.
- Las ventanas de selección arrastradas en una vista girada seleccionan lo que queda dentro de ellas en pantalla.
- Las rutinas LISP reciben puntos en el UCS desde `getpoint`, pueden leer `UCSORG`, `UCSXDIR`, `UCSYDIR` y `VIEWTWIST`, y `trans` convierte entre el mundo, el UCS y la pantalla.

:::note
Un archivo guardado conserva el UCS y el giro de la vista en una versión posterior; hasta entonces duran mientras el plano esté abierto.
:::
