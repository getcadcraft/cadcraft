---
title: Selección con lazo
summary: Pulse y arrastre un contorno a mano alzada alrededor de objetos para seleccionarlos, como ventana, cruce o valla; cambie con Espacio mientras arrastra.
keywords: lazo, lassomode, arrastrar, mano alzada, seleccionar, selección, ventana, cruce, valla, espacio, polígono, táctil, lápiz, rectángulo
from: 9ec6154d
---

## Lo que aprenderá

Cómo seleccionar objetos dibujando alrededor de ellos, y cómo recuperar el rectángulo cuando lo desee.

## Dibujar un lazo

1. Dibuje varias líneas y círculos juntos.
2. Sin ningún comando en ejecución, pulse el botón del ratón en un espacio vacío y arrastre alrededor de algunos de ellos, moviendo primero **a la derecha**.
3. Suelte.

Solo se seleccionan los objetos que quedan totalmente dentro del contorno. El contorno se dibuja continuo mientras arrastra: se trata de un lazo de ventana.

## Ventana, cruce y valla

Qué objetos obtiene depende del primer movimiento del arrastre y de {{key:Space}}:

| Si arrastra | Lazo | Selecciona |
|---|---|---|
| Primero a la derecha | Ventana (contorno continuo) | Solo objetos **totalmente dentro** |
| Primero a la izquierda | Cruce (discontinuo, verde) | Objetos dentro **y** objetos que toca el contorno |
| Pulse {{key:Space}} mientras arrastra | Ventana, luego cruce, luego valla | Valla (trazado discontinuo, no cerrado): solo objetos que cruza el trazado |

1. Pulse en un espacio vacío y arrastre alrededor de algunos objetos, moviendo primero **a la izquierda**. Se selecciona también todo lo que toca el contorno.
2. Pulse {{key:Esc}}.
3. Pulse y arrastre de nuevo; mientras sigue manteniendo el botón, pulse {{key:Space}} una vez. El contorno se convierte en cruce; pulse {{key:Space}} de nuevo para obtener una valla.

{{key:Shift}} al soltar quita los objetos de la selección en su lugar (con "Al hacer clic en objetos: Añadir" en {{ui:Parámetros}}).

## Dentro de un comando

Un lazo funciona siempre que CadCraft pida `Seleccione objetos`: dibújelo y pulse {{key:Enter}} para terminar. {{cmd:STRETCH}} toma un lazo de cruce como su ventana, así que puede estirar de una vez una parte en forma de L de un dibujo.

{{cmd:TRIM}} y {{cmd:EXTEND}} usan el arrastre de otra forma: allí recortan (o alargan) cada pieza que cruza el trazado. Consulte [Recortar y alargar](topic:trim-and-extend).

## El rectángulo

Un clic en espacio vacío, un movimiento y un segundo clic dibujan siempre la ventana rectangular (de izquierda a derecha) o el cruce (de derecha a izquierda).

Para que un arrastre vuelva a dibujar el rectángulo, abra {{ui:Parámetros}} › {{ui:CadCraft}} › {{ui:Arrastrar para seleccionar}} y elija {{ui:Rectángulo}}, o escriba {{cmd:LASSOMODE}} y luego `0`. Escriba {{cmd:LASSOMODE}} y luego `1` para volver al lazo. La elección se conserva en este navegador.

:::touch
Arrastre con un dedo o con un lápiz de la misma forma. Un toque sigue seleccionando un solo objeto.
:::

## Errores frecuentes

- **No se seleccionó nada.** El lazo era de ventana y ningún objeto quedaba totalmente dentro. Empiece el arrastre hacia la izquierda, o pulse {{key:Space}} mientras arrastra.
- **El arrastre movió un pinzamiento.** Pulsar en el pinzamiento de un objeto seleccionado mueve el pinzamiento. Empiece el lazo en un espacio vacío.
- **Espacio terminó el comando.** {{key:Space}} cambia el lazo solo mientras se mantiene pulsado el botón; en otro caso actúa como {{key:Enter}}.
