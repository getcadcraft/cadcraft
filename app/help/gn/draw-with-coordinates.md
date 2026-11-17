---
title: Dibujar con coordenadas
summary: Dibujá un contorno exacto de piso escribiendo coordenadas absolutas, relativas y polares, y por entrada de distancia directa.
keywords: línea, pline, polilínea, coordenadas, relativa, polar, absoluta, distancia directa, @, escribir puntos, exacto, ortogonal
from: 19e82350
---

## Lo que vas a crear

El contorno de una habitación en forma de L, de 6000 por 4500 con una muesca de 2000 por 1500, dibujado con exactitud, más un muro a 30 grados. Vas a usar las cuatro formas de escribir un punto. Trabajá en milímetros: una unidad de dibujo equivale a un milímetro.

La referencia rápida de todos los formatos está en [Entrada de coordenadas y distancias](topic:coordinate-entry).

## Antes de empezar

1. Abrí CadCraft. Si hay un plano abierto, hacé clic primero en {{ui:New}}.
2. Presioná {{key:Esc}} para que no quede nada seleccionado. El panel derecho muestra {{ui:Current settings}}.
3. Poné {{ui:Units}} en {{ui:Millimeters}}. No se cambia ningún tamaño; esto solo le dice a las hojas y a las impresiones qué significa una unidad.

## Coordenadas absolutas: el primer punto

Una coordenada absoluta es una posición medida desde el origen, escrita como `x,y`.

1. Escribí `L` y presioná {{key:Enter}}. El aviso dice `Seleccione el primer punto:`.
2. Escribí `0,0` y presioná {{key:Enter}}.

La línea ya sigue la cruz del cursor desde el origen. Las coordenadas de la barra de estado muestran la distancia y el ángulo desde el punto inicial a medida que te movés.

## Coordenadas relativas: @dx,dy

Una coordenada relativa se escribe como `@dx,dy`: tanto de lado, tanto hacia arriba, desde el último punto. Los números negativos van a la izquierda o hacia abajo.

3. Escribí `@6000,0` y presioná {{key:Enter}}. Una línea de 6000 va hacia la derecha.
4. Escribí `@0,3000` y presioná {{key:Enter}}.
5. Escribí `@-2000,0` y presioná {{key:Enter}}.
6. Escribí `@0,1500` y presioná {{key:Enter}}.

Deberías ver cuatro líneas conectadas que suben por el lado derecho de la habitación.

## Entrada de distancia directa: un número solo

Cuando escribís un único número, CadCraft avanza esa distancia en la dirección de la cruz del cursor. Activá Ortogonal para que la dirección se ajuste a horizontal o vertical.

7. Presioná {{key:F8}}, o hacé clic en {{ui:Ortho}} en la barra de estado. La barra de estado dice "Ortogonal activado".
8. Mové la cruz del cursor a la izquierda del último punto. La línea elástica se mantiene horizontal.
9. Escribí `4000` y presioná {{key:Enter}}. La línea va 4000 hacia la izquierda.
10. Mové la cruz del cursor debajo del último punto.
11. Escribí `4500` y presioná {{key:Enter}}. Volvés al punto inicial.
12. Presioná {{key:Enter}} en el aviso vacío para terminar el comando.

:::mac
F8 puede controlar la reproducción de medios en un teclado de Mac. Mantené presionado **fn** y presioná F8, o hacé clic en {{ui:Ortho}}. Ver [Teclas, ratones y trackpads](common:keys).
:::

Ahora tenés un contorno cerrado en forma de L hecho de seis líneas separadas.

13. Hacé clic en {{ui:Extents}} para ver todo.

## Coordenadas polares: @distancia<ángulo

Una coordenada polar se escribe como `@distancia<ángulo`. Los ángulos están en grados, medidos en sentido antihorario desde la dirección X positiva: 0 es derecha, 90 es arriba, 180 es izquierda, 270 (o -90) es abajo.

14. Escribí `L` y presioná {{key:Enter}}.
15. Escribí `6000,0` y presioná {{key:Enter}} para empezar en la esquina inferior derecha.
16. Escribí `@2500<-30` y presioná {{key:Enter}}. Una línea de 2500 sale de la esquina, yendo hacia abajo y a la derecha a 30 grados por debajo de la horizontal.
17. Presioná {{key:Enter}} para terminar el comando.

Una coordenada polar sin `@`, como `2500<30`, se mide desde el origen y no desde el último punto.

## El mismo contorno como una polilínea

Seis líneas separadas sirven para muchos trabajos, pero una polilínea es un solo objeto: se desplaza, se mide y se selecciona como un todo. Usá {{cmd:PLINE}} con la misma entrada.

1. Escribí `PL` y presioná {{key:Enter}}.
2. Escribí `0,-6000` y presioná {{key:Enter}} para empezar debajo del primer contorno.
3. Escribí `@6000,0` y después presioná {{key:Enter}}.
4. Escribí `@0,3000` y después presioná {{key:Enter}}.
5. Escribí `@-2000,0` y después presioná {{key:Enter}}.
6. Escribí `@0,1500` y después presioná {{key:Enter}}.
7. Escribí `@-4000,0` y después presioná {{key:Enter}}.
8. Escribí `C` y presioná {{key:Enter}}. La polilínea se cierra y el comando termina.
9. Hacé clic en el nuevo contorno. El panel derecho muestra "Polilínea", sus {{ui:Vertices}}, su {{ui:Length}} y, como está cerrada, su {{ui:Area}}.

La superficie debería decir 24000000 (milímetros cuadrados, que son 24 metros cuadrados).

## Opciones mientras dibujás

- En {{cmd:LINE}} y {{cmd:PLINE}}, escribí `U` y presioná {{key:Enter}} para quitar el último segmento sin salir del comando.
- En {{cmd:LINE}}, `C` cierra de vuelta al primer punto cuando hay al menos dos segmentos.
- En {{cmd:PLINE}}, `A` cambia a segmentos de arco (cada arco continúa suavemente desde el segmento anterior), y `L` vuelve a líneas. En modo arco, la opción de cierre es `CL`.
- Presionar {{key:Enter}} en `Seleccione el primer punto:` en {{cmd:LINE}} empieza desde el último punto que diste, así podés seguir donde te quedaste.

## Errores comunes

- **Escribir `6000,0` cuando querías `@6000,0`.** Sin `@`, el punto se mide desde el origen y no desde el último punto, así que la línea sale disparada a un lugar inesperado. En CadCraft, `x,y` siempre es absoluto. Presioná `U` y {{key:Enter}} para deshacerlo.
- **Una coma escrita como punto decimal.** Los decimales usan punto: `1250.5`. La coma siempre separa X de Y.
- **La distancia directa fue en la dirección equivocada.** Un número solo sigue la cruz del cursor. Mové la cruz hacia el lado que querés antes de presionar {{key:Enter}}, y activá {{ui:Ortho}} para líneas rectas.
- **"Se requiere un punto o una palabra clave de opción."** CadCraft no entendió lo que escribiste. Revisá si hay espacios dentro del número o si falta una coma, y escribilo otra vez.
- **Pies y pulgadas.** CadCraft lee solo números simples. Escribí `150` para 12'-6" en un plano en pulgadas, o `12.5` en un plano en pies.
