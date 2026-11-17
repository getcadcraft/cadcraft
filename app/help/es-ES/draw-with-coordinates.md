---
title: Dibujar con coordenadas
summary: Dibuje el contorno exacto de una planta escribiendo coordenadas absolutas, relativas y polares, y mediante la entrada de distancia directa.
keywords: línea, pline, polilínea, coordenadas, relativa, polar, absoluta, distancia directa, @, escribir puntos, exacto, orto
from: 19e82350
---

## Qué va a crear

El contorno de una habitación en forma de L, de 6000 por 4500 con un recorte de 2000 por 1500, dibujado de forma exacta, más un muro a 30 grados. Usará las cuatro formas de escribir un punto. Trabaje en milímetros: una unidad de dibujo equivale a un milímetro.

La referencia rápida de todos los formatos está en [Entrada de coordenadas y distancias](topic:coordinate-entry).

## Antes de empezar

1. Abra CadCraft. Si hay un dibujo abierto, haga clic primero en {{ui:Nueva}}.
2. Pulse {{key:Esc}} para que no haya nada seleccionado. El panel derecho muestra {{ui:Parámetros actuales}}.
3. Establezca {{ui:Unidades}} en {{ui:Milímetros}}. No se cambia el tamaño de nada; solo indica a las hojas y a los trazados qué significa una unidad.

## Coordenadas absolutas: el primer punto

Una coordenada absoluta es una posición medida desde el origen, que se escribe como `x,y`.

1. Escriba `L` y pulse {{key:Enter}}. El aviso indica `Specify first point:`.
2. Escriba `0,0` y pulse {{key:Enter}}.

La línea elástica ya se extiende desde el origen hasta la cruz del cursor. Las coordenadas de la barra de estado muestran la distancia y el ángulo desde el punto inicial a medida que se mueve.

## Coordenadas relativas: @dx,dy

Una coordenada relativa se escribe como `@dx,dy`: cuánto hacia la derecha, cuánto hacia arriba, desde el último punto. Los números negativos van a la izquierda o hacia abajo.

3. Escriba `@6000,0` y pulse {{key:Enter}}. Una línea de 6000 va hacia la derecha.
4. Escriba `@0,3000` y pulse {{key:Enter}}.
5. Escriba `@-2000,0` y pulse {{key:Enter}}.
6. Escriba `@0,1500` y pulse {{key:Enter}}.

Verá cuatro líneas conectadas que suben por el lado derecho de la habitación.

## Entrada de distancia directa: un número solo

Cuando escribe un único número, CadCraft avanza esa distancia en la dirección de la cruz del cursor. Active Orto para que la dirección se ajuste a horizontal o vertical.

7. Pulse {{key:F8}}, o haga clic en {{ui:Orto}} en la barra de estado. La barra de estado indica "Orto activado".
8. Mueva la cruz del cursor a la izquierda del último punto. La línea elástica se mantiene horizontal.
9. Escriba `4000` y pulse {{key:Enter}}. La línea avanza 4000 hacia la izquierda.
10. Mueva la cruz del cursor por debajo del último punto.
11. Escriba `4500` y pulse {{key:Enter}}. Vuelve al punto inicial.
12. Pulse {{key:Enter}} en el aviso vacío para terminar el comando.

:::mac
F8 puede controlar la reproducción multimedia en un teclado de Mac. Mantenga pulsada la tecla **fn** y pulse F8, o haga clic en {{ui:Orto}}. Consulte [Teclas, ratones y touchpads](common:keys).
:::

Ahora tiene un contorno cerrado en forma de L formado por seis líneas separadas.

13. Haga clic en {{ui:Extensión}} para verlo todo.

## Coordenadas polares: @distancia<ángulo

Una coordenada polar se escribe como `@distancia<ángulo`. Los ángulos están en grados, medidos en sentido antihorario desde la dirección positiva de X: 0 es derecha, 90 es arriba, 180 es izquierda, 270 (o -90) es abajo.

14. Escriba `L` y pulse {{key:Enter}}.
15. Escriba `6000,0` y pulse {{key:Enter}} para empezar en la esquina inferior derecha.
16. Escriba `@2500<-30` y pulse {{key:Enter}}. Una línea de 2500 sale de la esquina, dirigida hacia abajo y a la derecha, con 30 grados por debajo de la horizontal.
17. Pulse {{key:Enter}} para terminar el comando.

Una coordenada polar sin `@`, como `2500<30`, se mide desde el origen en lugar de desde el último punto.

## El mismo contorno como una polilínea

Seis líneas separadas valen para muchos trabajos, pero una polilínea es un solo objeto: se desplaza, se mide y se selecciona como un conjunto. Use {{cmd:PLINE}} con la misma entrada.

1. Escriba `PL` y pulse {{key:Enter}}.
2. Escriba `0,-6000` y pulse {{key:Enter}} para empezar debajo del primer contorno.
3. Escriba `@6000,0` y, a continuación, pulse {{key:Enter}}.
4. Escriba `@0,3000` y, a continuación, pulse {{key:Enter}}.
5. Escriba `@-2000,0` y, a continuación, pulse {{key:Enter}}.
6. Escriba `@0,1500` y, a continuación, pulse {{key:Enter}}.
7. Escriba `@-4000,0` y, a continuación, pulse {{key:Enter}}.
8. Escriba `C` y pulse {{key:Enter}}. La polilínea se cierra y el comando termina.
9. Haga clic en el nuevo contorno. El panel derecho muestra "Polilínea", sus {{ui:Vértices}}, {{ui:Longitud}} y, como está cerrada, su {{ui:Área}}.

El área debe indicar 24000000 (milímetros cuadrados, es decir, 24 metros cuadrados).

## Opciones durante el dibujo

- En {{cmd:LINE}} y {{cmd:PLINE}}, escriba `U` y pulse {{key:Enter}} para deshacer el último segmento sin salir del comando.
- En {{cmd:LINE}}, `C` cierra el contorno hasta el primer punto cuando hay al menos dos segmentos.
- En {{cmd:PLINE}}, `A` cambia a segmentos de arco (cada arco continúa suavemente desde el segmento anterior), y `L` vuelve a las líneas. En modo arco, la opción de cerrar es `CL`.
- Pulsar {{key:Enter}} en `Specify first point:` en {{cmd:LINE}} empieza desde el último punto que indicó, para que pueda continuar donde lo dejó.

## Errores frecuentes

- **Escribir `6000,0` cuando quería `@6000,0`.** Sin `@`, el punto se mide desde el origen, no desde el último punto, y la línea sale hacia un lugar inesperado. En CadCraft, `x,y` es siempre absoluta. Escriba `U` y pulse {{key:Enter}} para deshacerlo.
- **Una coma escrita como punto decimal.** Los decimales se escriben con punto: `1250.5`. Una coma siempre separa X de Y.
- **La distancia directa fue en la dirección equivocada.** Un número solo sigue la cruz del cursor. Mueva la cruz hacia el lado que quiera antes de pulsar {{key:Enter}}, y active {{ui:Orto}} para líneas rectas.
- **"Se requiere un punto o una palabra clave de opción."** CadCraft no entendió lo que escribió. Revise si hay espacios dentro del número o si falta una coma, y escríbalo de nuevo.
- **Pies y pulgadas.** CadCraft lee solo números sin formato. Escriba `150` para 12'-6" en un dibujo en pulgadas, o `12.5` en un dibujo en pies.
