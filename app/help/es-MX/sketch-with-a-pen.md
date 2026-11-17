---
title: Croquizar con lápiz y obtener geometría precisa
summary: Dibuje a mano alzada con un lápiz, ratón o dedo, y cada trazo se convierte en una línea, círculo, arco, rectángulo o polilínea limpia al levantar el lápiz, ajustada a lo que ya está dibujado, con su tamaño listo para escribir encima.
keywords: croquis, lápiz, lápiz óptico, mano alzada, dedo, limpiar, precisa, ajuste, SKETCHLIVE, SKETCHFIX, tamaño, escribir encima
from: cd87eb75
---

Inicie {{cmd:SKETCHLIVE}} (o elija **Dibujo › Más › Croquizar con lápiz**) y dibuje un trazo presionando y arrastrando. Al levantar el lápiz, CadCraft interpreta lo que quiso dibujar y lo coloca en el dibujo:

| Su trazo | Lo que obtiene |
|---|---|
| Casi recto | Una línea. Una línea casi horizontal o a plomo se vuelve exactamente horizontal o a plomo. |
| Cerrado y redondo | Un círculo |
| Parte de una forma redonda | Un arco |
| Cerrado con cuatro esquinas en ángulo recto | Un rectángulo |
| Cualquier otra cosa | Una polilínea con lados cuadrados |

Los extremos de un trazo se ajustan al extremo más cercano de lo que ya está dibujado, de modo que un muro dibujado a mano se une con el muro contiguo.

## Escriba el tamaño encima

Tras cada trazo, la línea de comandos muestra su tamaño (la **longitud** de una línea, el **radio** de un círculo o arco, el **ancho** de un rectángulo) como valor predeterminado. Pulse {{key:Enter}} para conservarlo, o escriba un número o una longitud, como `12'6"`, para reemplazarlo. Una línea conserva su primer extremo, un círculo su centro y un rectángulo su primera esquina.

Pulse {{key:Enter}} en una solicitud vacía para terminar, o escriba `U` para deshacer el último trazo. Toda la sesión es un solo paso de deshacer.

## Limpiar varios trazos a la vez

{{cmd:SKETCHFIX}} reúne trazos y los vuelve todos precisos al pulsar {{key:Enter}}, lo cual es útil para un esquema dibujado rápidamente.

:::note
Todo se calcula en su computadora mediante reglas, sin modelo y sin enviar nada a ningún lugar.
:::
