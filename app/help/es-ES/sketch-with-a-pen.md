---
title: Dibujar a mano alzada con lápiz y obtener geometría precisa
summary: Dibuje a mano alzada con un lápiz, ratón o dedo y cada trazo se convierte en una línea, círculo, arco, rectángulo o polilínea limpia al levantar el lápiz, ajustada a lo ya dibujado, con su tamaño listo para escribir encima.
keywords: boceto, lápiz, lápiz digital, mano alzada, dedo, limpiar, preciso, ajustar, SKETCHLIVE, SKETCHFIX, tamaño, sobrescribir
from: cd87eb75
---

Inicie {{cmd:SKETCHLIVE}} (o elija **Dibujo › Más › Dibujar a mano alzada con lápiz**) y dibuje un trazo presionando y arrastrando. Al levantar el lápiz, CadCraft interpreta lo que quiso dibujar y lo coloca en el dibujo:

| Su trazo | Lo que obtiene |
|---|---|
| Casi recto | Una línea. Una línea casi horizontal o vertical se convierte en exactamente horizontal o vertical. |
| Cerrado y redondo | Un círculo |
| Parte de una forma redonda | Un arco |
| Cerrado con cuatro esquinas en ángulo recto | Un rectángulo |
| Cualquier otra cosa | Una polilínea de lados en ángulo recto |

Los extremos de un trazo se desplazan hasta el extremo más cercano de lo ya dibujado, de modo que un muro dibujado a mano alzada se une con el muro contiguo.

## Sobrescribir el tamaño

Tras cada trazo, la línea de comandos muestra su tamaño (la **longitud** de una línea, el **radio** de un círculo o arco, la **anchura** de un rectángulo) como valor predeterminado. Pulse {{key:Enter}} para conservarlo, o escriba un número o una longitud, como `12'6"`, para sustituirlo. Una línea mantiene su primer extremo, un círculo su centro y un rectángulo su primera esquina.

Pulse {{key:Enter}} en un aviso vacío para terminar, o escriba `U` para deshacer el último trazo. La sesión completa es un solo paso de deshacer.

## Limpiar varios trazos a la vez

{{cmd:SKETCHFIX}} reúne trazos y los hace todos precisos al pulsar {{key:Enter}}, lo que resulta útil para un esquema dibujado rápidamente.

:::note
Todo se calcula en su ordenador mediante reglas, sin ningún modelo y sin enviar nada a ningún sitio.
:::
