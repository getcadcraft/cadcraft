---
title: Splines y polilíneas: SPLINE, SPLINEDIT, PEDIT
summary: Dibuje una curva suave a través de puntos o a partir de un polígono de control, edite su ajuste y sus puntos de control, y edite polilíneas (unir, cerrar, anchura, ajustar, spline, quitar curvatura) o convierta un spline en polilínea.
keywords: spline, splinedit, spl, spe, pedit, pe, puntos de ajuste, puntos de control, pesos, nurbs, edición de polilínea, unir, curva de ajuste, quitar curvatura, convertir en polilínea, precisión, tangente, curva, tolerancia de ajuste
from: d31f72d8
---

## Lo que va a crear

Una curva que pasa por cinco puntos, después la misma curva editada de tres formas, y una polilínea construida a partir de tres líneas.

## Dibujar un spline a través de puntos

1. Escriba `SPL` y pulse {{key:Enter}}.
2. Haga clic o escriba los puntos por los que debe pasar la curva: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Pulse {{key:Enter}} después del último.
3. {{ui:Tangente inicial}}: haga clic en un punto hacia el que debe salir la curva, o pulse {{key:Enter}} para que la aplicación lo decida. Haga lo mismo con la tangente final.

La curva pasa por todos los puntos. Escriba `C` en lugar de pulsar {{key:Enter}} para cerrarla (la curva vuelve al primer punto). {{key:U}} (`Deshacer`) quita el último punto mientras dibuja.

### Dibujar uno a partir de un polígono de control

Escriba `M` en el primer aviso, después `C` (Vértices de control) y un grado de 1 a 5 (3 es el habitual). Ahora los puntos que elija son las esquinas de un polígono que atrae la curva hacia ellos; la curva empieza en el primero y termina en el último. Una curva cerrada rodea el polígono, sin esquina en la unión.

### Convertir una polilínea en spline

En el primer aviso escriba `O` (Objeto) y seleccione polilíneas o líneas. Se convierten en splines que pasan por sus vértices; los originales desaparecen.

## Editar un spline

Selecciónelo y escriba `SPE` (o escriba `SPE` y haga clic sobre él). Los agarres muestran los puntos de ajuste (o los puntos de control de un spline que no los tiene): arrastre uno para remodelar la curva. En el aviso:

- **Datos de ajuste** (un spline dibujado a través de puntos): `A` añade un punto de ajuste (haga clic donde), `D` elimina uno (haga clic cerca de él), `M` mueve uno (haga clic cerca de él y luego en su nueva posición), `T` define las tangentes de los extremos, `P` purga los puntos de ajuste, de modo que el spline se edita a partir de entonces por sus puntos de control.
- **Editar vértice**: `A` añade un punto de control sin cambiar la curva, `M` mueve uno, `W` asigna a uno un **peso** (por encima de 1 acerca la curva a él, por debajo de 1 la aleja).
- **Abrir** o **Cerrar**, y **Invertir** (la curva recorre el otro sentido).
- **convertir en Polilínea** (`P`): el spline pasa a ser una polilínea; la precisión es el número de segmentos de cada tramo (10 es el habitual).
- **Deshacer** quita el último cambio; **Salir** termina.

{{ui:Propiedades}} muestra el grado de un spline, cuántos puntos de ajuste y de control tiene, su longitud, y permite abrirlo o cerrarlo.

## Editar una polilínea

Seleccione una polilínea y escriba `PE`. Una línea, un arco o un spline que elija se ofrece primero como polilínea en la que convertirse (un spline pide la precisión).

- **Cerrar** / **Abrir** une o separa los extremos.
- **Unir** añade líneas, arcos y polilíneas cuyos extremos coinciden con el extremo de la polilínea. `Distancia de tolerancia` es la separación que pueden tener los extremos para unirse (0 significa que deben coincidir).
- **Anchura** da a toda la polilínea una única anchura (0 la elimina).
- **Ajustar** sustituye la polilínea por una curva suave que pasa por sus vértices; **Spline** la sustituye por una B-spline cúbica que los sigue (empieza y termina en el primer y último vértice y se mantiene cerca de los demás). Ambas se convierten en una polilínea de segmentos cortos, y las esquinas originales se conservan, de modo que **Quitar curvatura** las devuelve.
- **Gen. tipo línea** indica si un tipo de línea discontinua continúa a lo largo de toda la polilínea o vuelve a empezar en cada vértice.
- **Invertir** cambia el orden de sus vértices. **Múltiple** (`M` en el primer aviso) edita varias polilíneas con las mismas opciones.

Editar los vértices de una polilínea en {{ui:Propiedades}} o con agarres sigue como antes: PEDIT no tiene editor de vértices.

## En archivos

DWG y DXF 2000 conservan un spline como spline: grado, puntos de control, nudos, pesos, puntos de ajuste y tangentes. Un spline que abre y no modifica se escribe de nuevo exactamente como llegó. DXF R12 no tiene splines: se guarda como una polilínea a lo largo de la curva, y el historial indica cuántos.

Desplazar, recortar, prolongar, empalmar, partir y unir no funcionan con splines. Descomponga un spline con {{cmd:EXPLODE}}, o aplíquele {{cmd:PEDIT}}, para obtener una polilínea que esos comandos admiten.

## Errores comunes

- **La curva se sale entre puntos cercanos.** Una curva que pasa por puntos se curva donde se curvan los puntos. Utilice menos puntos o un polígono de control.
- **"Eso no es un spline."** SPLINEDIT solo acepta splines; {{cmd:PEDIT}} edita polilíneas.
- **Un spline de ajuste cerrado tiene una forma ligeramente distinta en otro programa.** CadCraft lo cierra con una unión suave en el primer punto; otro programa puede cerrarlo con una curva periódica. Un spline cerrado por puntos de control es igual en ambos.
