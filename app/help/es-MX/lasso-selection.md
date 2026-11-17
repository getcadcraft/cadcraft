---
title: Selección con lazo
summary: Presione y arrastre un contorno a mano alzada alrededor de objetos para seleccionarlos como ventana, captura o borde; cambie con Space mientras arrastra.
keywords: lazo, lassomode, arrastrar, mano alzada, seleccionar, selección, ventana, captura, borde, space, polígono, táctil, lápiz, rectángulo
from: 9ec6154d
---

## Qué aprenderá

Cómo seleccionar objetos dibujando un contorno a su alrededor, y cómo recuperar el rectángulo cuando lo necesite.

## Dibujar un lazo

1. Dibuje algunas líneas y círculos juntos.
2. Sin ningún comando en curso, presione el botón del ratón en un espacio vacío y arrastre alrededor de algunos de ellos, moviéndose primero **hacia la derecha**.
3. Suelte el botón.

Solo se seleccionan los objetos que quedan completamente dentro del contorno. El contorno se dibuja continuo mientras arrastra: este es un lazo de ventana.

## Ventana, captura y borde

Qué objetos obtiene depende del primer movimiento de su arrastre y de {{key:Space}}:

| Arrastra | Lazo | Selecciona |
|---|---|---|
| Primero hacia la derecha | Ventana (contorno continuo) | Solo objetos **completamente dentro** |
| Primero hacia la izquierda | Captura (discontinuo, verde) | Objetos dentro **y** objetos que toca el contorno |
| Presiona {{key:Space}} mientras arrastra | Ventana, luego captura, luego borde | Borde (trayectoria discontinua, no cerrada): solo los objetos que cruza la trayectoria |

1. Presione en un espacio vacío y arrastre alrededor de algunos objetos, moviéndose primero **hacia la izquierda**. También se seleccionan todos los que toca el contorno.
2. Presione {{key:Esc}}.
3. Presione y arrastre de nuevo; mientras mantiene el botón presionado, presione {{key:Space}} una vez. El contorno se convierte en captura; presione {{key:Space}} otra vez para un borde.

{{key:Shift}} al soltar quita los objetos de la selección en lugar de agregarlos (con "Al hacer clic en objetos: Añadir" en {{ui:Parámetros}}).

## Dentro de un comando

Un lazo funciona donde CadCraft pide `Select objects`: dibújelo y luego presione {{key:Enter}} para terminar. {{cmd:STRETCH}} toma un lazo de captura como su ventana, así que puede estirar de una vez una parte en forma de L del dibujo.

{{cmd:TRIM}} y {{cmd:EXTEND}} usan un arrastre de otra manera: allí recortan (o alargan) cada tramo que cruza la trayectoria. Vea [Recortar y alargar](topic:trim-and-extend).

## El rectángulo

Un clic en un espacio vacío, un movimiento y un segundo clic siempre dibujan la ventana rectangular (de izquierda a derecha) o la captura (de derecha a izquierda).

Para que un arrastre vuelva a dibujar el rectángulo, abra {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Arrastrar para seleccionar}} y elija {{ui:Rectángulo}}, o escriba {{cmd:LASSOMODE}} y luego `0`. Escriba {{cmd:LASSOMODE}} y luego `1` para el lazo. La elección se guarda en este navegador.

:::touch
Arrastre con un dedo o con un lápiz de la misma manera. Un toque sigue seleccionando un solo objeto.
:::

## Errores comunes

- **No se seleccionó nada.** El lazo era de ventana y ningún objeto quedó completamente dentro. Comience el arrastre hacia la izquierda, o presione {{key:Space}} mientras arrastra.
- **El arrastre movió un pinzamiento.** Presionar sobre el pinzamiento de un objeto seleccionado mueve el pinzamiento. Comience el lazo en un espacio vacío.
- **Space terminó el comando.** {{key:Space}} cambia el lazo solo mientras se mantiene presionado el botón; de lo contrario es {{key:Enter}}.
