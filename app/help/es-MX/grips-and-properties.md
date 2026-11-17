---
title: Editar con pinzamientos y Propiedades
summary: Estire, desplace y cambie el tamaño de objetos mediante sus pinzamientos, y escriba longitudes, radios, ángulos y coordenadas exactos en el panel Propiedades.
keywords: pinzamientos, propiedades, estirar, longitud, radio, coordenadas, editar, propiedades rápidas, paleta de propiedades, cambiar, capa, color
from: f22541ba
---

## Lo que aprenderá

Dos formas rápidas de cambiar un objeto sin un comando: arrastrar sus **pinzamientos**, o escribir valores nuevos en el panel **Propiedades** de la derecha.

## Pinzamientos

Al seleccionar objetos (hasta 200 a la vez) sin ningún comando en ejecución, aparecen pequeños cuadrados sobre ellos. Son los pinzamientos:

| Objeto | Pinzamientos |
|---|---|
| Línea | Ambos extremos y el punto medio (desplaza toda la línea) |
| Círculo | El centro (lo desplaza) y cuatro puntos sobre el círculo (cambian el radio) |
| Arco | El centro y ambos extremos (cambian dónde empieza y termina) |
| Polilínea | Cada vértice |
| Texto, punto, referencia a bloque | El punto de inserción |
| Elipse | El centro |
| Cota | Sus puntos de definición y la posición de la línea de cota |
| Ventana gráfica | El centro (la desplaza) y las cuatro esquinas (cambian su tamaño) |

### Mover un pinzamiento

1. Dibuje una línea y haga clic en ella. Aparecen tres pinzamientos.
2. Haga clic en el pinzamiento de un extremo. La barra de estado dice "Haga clic donde irá este pinzamiento (Esc para cancelar). Se aplican las referencias a objetos y el orto."
3. Mueva la cruz. Aparece una vista previa.
4. Haga clic en la nueva posición, o capte un punto de otro objeto y haga clic.

El extremo se mueve y el resto de la línea se queda en su lugar. También puede presionar un pinzamiento y arrastrarlo, y soltarlo donde debe ir.

:::note
No se puede escribir una coordenada para un pinzamiento. Para una posición exacta, capte un punto o escriba el valor en Propiedades.
:::

Pulse {{key:Esc}} o haga clic con el botón derecho para cancelar un movimiento de pinzamiento.

## Propiedades

El panel de la derecha muestra las propiedades de lo que está seleccionado.

1. Haga clic en una línea. El encabezado del panel dice "Línea".
2. Haga clic en {{ui:Longitud}}, escriba `2500` y pulse {{key:Enter}}.

La línea ahora mide exactamente 2500, conservando su punto inicial y su ángulo. {{key:Enter}} o hacer clic en otro lugar aplica un valor; {{key:Esc}} restaura el valor anterior. Cada cambio es un paso de deshacer, también cuando cambian muchos objetos a la vez.

Los campos aceptan expresiones (`=2*45`) y longitudes con unidades (`3'6"`, `900mm`); cada punto tiene X, Y y Z, y varios objetos pueden cambiarse juntos. Todo esto está en [El panel Propiedades](topic:properties-panel).

## Errores comunes

- **No aparecen pinzamientos.** Hay un comando en ejecución (pulse {{key:Esc}}), o hay más de 200 objetos seleccionados, o el objeto está en una capa bloqueada.
- **El pinzamiento fue a un lugar equivocado.** Una referencia lo captó. Mantenga pulsado {{key:Shift}} mientras hace clic para ignorar las referencias.
- **Escribir en Propiedades no hizo nada.** Pulse {{key:Enter}} o haga clic en otro lugar para aplicar. Una entrada rechazada (longitudes y radios cero o negativos, texto que no es un valor) pone el campo en rojo y explica por qué.
- **Las letras escritas fueron a un campo de Propiedades.** Mientras un campo tiene el cursor, las teclas escriben ahí. Pulse {{key:Enter}} o {{key:Esc}}, y luego escriba el comando.
