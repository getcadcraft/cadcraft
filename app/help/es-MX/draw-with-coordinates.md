---
title: Dibujar con coordenadas
summary: Dibuje el contorno exacto de un piso escribiendo coordenadas absolutas, relativas y polares, y mediante la entrada de distancia directa.
keywords: línea, line, pline, polilínea, coordenadas, relativas, polar, absolutas, distancia directa, @, escribir puntos, exacto, orto
from: 19e82350
---

## Qué va a crear

El contorno de una habitación en forma de L, de 6000 por 4500 con un recorte de 2000 por 1500, dibujado con exactitud, más un muro a 30 grados. Usará las cuatro formas de escribir un punto. Trabaje en milímetros: una unidad de dibujo equivale a un milímetro.

La referencia rápida de cada formato está en [Entrada de coordenadas y distancias](topic:coordinate-entry).

## Antes de empezar

1. Abra CadCraft. Si hay un dibujo abierto, haga clic primero en {{ui:Nuevo}}.
2. Pulse {{key:Esc}} para que no haya nada seleccionado. El panel derecho muestra {{ui:Parámetros actuales}}.
3. Defina {{ui:Unidades}} como {{ui:Milímetros}}. No se cambia ningún tamaño; esto solo indica a las hojas y a los trazados qué significa una unidad.

## Coordenadas absolutas: el primer punto

Una coordenada absoluta es una posición medida desde el origen, escrita como `x,y`.

1. Escriba `L` y pulse {{key:Enter}}. El aviso dice `Specify first point:`.
2. Escriba `0,0` y pulse {{key:Enter}}.

La línea ya se extiende desde el origen hasta la cruz del cursor. Las coordenadas de la barra de estado muestran la distancia y el ángulo desde el punto inicial a medida que mueve el cursor.

## Coordenadas relativas: @dx,dy

Una coordenada relativa se escribe como `@dx,dy`: cuánto avanza horizontalmente y cuánto verticalmente, desde el último punto. Los números negativos van a la izquierda o hacia abajo.

3. Escriba `@6000,0` y pulse {{key:Enter}}. Una línea de 6000 va hacia la derecha.
4. Escriba `@0,3000` y pulse {{key:Enter}}.
5. Escriba `@-2000,0` y pulse {{key:Enter}}.
6. Escriba `@0,1500` y pulse {{key:Enter}}.

Debe ver cuatro líneas conectadas que suben por el lado derecho de la habitación.

## Entrada de distancia directa: un número solo

Cuando escribe un solo número, CadCraft avanza esa distancia en la dirección de la cruz del cursor. Active Orto para que la dirección se ajuste a horizontal o vertical.

7. Pulse {{key:F8}}, o haga clic en {{ui:Orto}} en la barra de estado. La barra de estado dice "Ortho on".
8. Mueva la cruz a la izquierda del último punto. La línea elástica se mantiene horizontal.
9. Escriba `4000` y pulse {{key:Enter}}. La línea va 4000 hacia la izquierda.
10. Mueva la cruz debajo del último punto.
11. Escriba `4500` y pulse {{key:Enter}}. Vuelve al punto inicial.
12. Pulse {{key:Enter}} en el aviso vacío para terminar el comando.

:::mac
La tecla F8 puede controlar la reproducción multimedia en un teclado de Mac. Mantenga presionada **fn** y pulse F8, o haga clic en {{ui:Orto}}. Consulte [Teclas, ratones y paneles táctiles](common:keys).
:::

Ahora tiene un contorno cerrado en forma de L, hecho de seis líneas separadas.

13. Haga clic en {{ui:Extensión}} para ver todo.

## Coordenadas polares: @distancia<ángulo

Una coordenada polar se escribe como `@distance<angle`. Los ángulos van en grados, medidos en sentido antihorario desde la dirección X positiva: 0 es a la derecha, 90 es arriba, 180 es a la izquierda, 270 (o -90) es abajo.

14. Escriba `L` y pulse {{key:Enter}}.
15. Escriba `6000,0` y pulse {{key:Enter}} para empezar en la esquina inferior derecha.
16. Escriba `@2500<-30` y pulse {{key:Enter}}. Una línea de 2500 sale de la esquina, hacia abajo y a la derecha, con 30 grados debajo de la horizontal.
17. Pulse {{key:Enter}} para terminar el comando.

Una coordenada polar sin `@`, como `2500<30`, se mide desde el origen en lugar de desde el último punto.

## El mismo contorno como una polilínea

Seis líneas separadas sirven para muchos trabajos, pero una polilínea es un solo objeto: se desfasa, se mide y se selecciona como un conjunto. Use {{cmd:PLINE}} con la misma entrada.

1. Escriba `PL` y pulse {{key:Enter}}.
2. Escriba `0,-6000` y pulse {{key:Enter}} para empezar debajo del primer contorno.
3. Escriba `@6000,0`, y luego pulse {{key:Enter}}.
4. Escriba `@0,3000`, y luego pulse {{key:Enter}}.
5. Escriba `@-2000,0`, y luego pulse {{key:Enter}}.
6. Escriba `@0,1500`, y luego pulse {{key:Enter}}.
7. Escriba `@-4000,0`, y luego pulse {{key:Enter}}.
8. Escriba `C` y pulse {{key:Enter}}. La polilínea se cierra y termina el comando.
9. Haga clic en el nuevo contorno. El panel derecho muestra "Polyline", sus {{ui:Vértices}}, su {{ui:Longitud}} y, como está cerrada, su {{ui:Área}}.

El área debe mostrar 24000000 (milímetros cuadrados, que son 24 metros cuadrados).

## Opciones al dibujar

- En {{cmd:LINE}} y {{cmd:PLINE}}, escriba `U` y pulse {{key:Enter}} para quitar el último segmento sin salir del comando.
- En {{cmd:LINE}}, `C` cierra hasta el primer punto cuando hay al menos dos segmentos.
- En {{cmd:PLINE}}, `A` cambia a segmentos de arco (cada arco continúa suavemente desde el segmento anterior), y `L` vuelve a líneas. En modo arco, la opción de cerrar es `CL`.
- Pulsar {{key:Enter}} en `Specify first point:` en {{cmd:LINE}} empieza desde el último punto que dio, para que siga donde se detuvo.

## Errores comunes

- **Escribir `6000,0` cuando quería `@6000,0`.** Sin `@`, el punto se mide desde el origen, no desde el último punto, así que la línea se va a un lugar inesperado. En CadCraft, `x,y` siempre es absoluto. Escriba `U` y pulse {{key:Enter}} para deshacerlo.
- **Una coma escrita como punto decimal.** Los decimales llevan punto: `1250.5`. La coma siempre separa X de Y.
- **La distancia directa fue en la dirección incorrecta.** Un número solo sigue la cruz del cursor. Mueva la cruz hacia el lado que quiere antes de pulsar {{key:Enter}}, y active {{ui:Orto}} para líneas rectas.
- **"Point or option keyword required."** CadCraft no entendió lo que escribió. Revise si hay espacios dentro del número o si falta una coma, y escríbalo otra vez.
- **Pies y pulgadas.** CadCraft solo lee números simples. Escriba `150` para 12'-6" en un dibujo en pulgadas, o `12.5` en un dibujo en pies.
