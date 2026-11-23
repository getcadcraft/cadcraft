---
title: Croquizar con lápiz y obtener geometría precisa
summary: Dibuje a mano alzada con un lápiz, ratón o dedo y cada trazo se vuelve una línea, círculo, arco, rectángulo o polilínea limpios al levantar el lápiz, ajustados a lo ya dibujado, con su tamaño listo para escribir encima.
keywords: croquis, croquizar, lápiz, lápiz óptico, mano alzada, dedo, limpiar, precisar, referencia, SKETCHLIVE, SKETCHFIX, tamaño, escribir encima, presión, grosor de línea, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Inicie {{cmd:SKETCHLIVE}} (o elija **Dibujo › Más › Croquizar con lápiz**) y dibuje un trazo presionando y arrastrando. Al levantar el lápiz, CadCraft interpreta lo que quiso y lo pone en el dibujo:

| Su trazo | Lo que obtiene |
|---|---|
| Casi recto | Una línea. Una línea casi horizontal o vertical se vuelve exactamente horizontal o vertical. |
| Cerrado y redondo | Un círculo |
| Parte de una forma redonda | Un arco |
| Cerrado con cuatro esquinas en ángulo recto | Un rectángulo |
| Cualquier otra cosa | Una polilínea con lados cuadrados |

Los extremos de un trazo se ajustan al extremo más cercano de lo que ya está dibujado, así que un muro bosquejado se une al muro vecino.

## Escribir encima del tamaño

Después de cada trazo, la línea de comandos muestra su tamaño (la **longitud** de una línea, el **radio** de un círculo o un arco, el **ancho** de un rectángulo) como valor predeterminado. Pulse {{key:Enter}} para conservarlo, o escriba un número o una longitud como `12'6"` para reemplazarlo. Una línea conserva su primer extremo, un círculo su centro, un rectángulo su primera esquina.

Pulse {{key:Enter}} en un aviso vacío para terminar, o escriba `U` para deshacer el último trazo. Toda la sesión es un solo paso de deshacer.

## Limpiar varios trazos a la vez

{{cmd:SKETCHFIX}} reúne trazos y los vuelve precisos todos al pulsar {{key:Enter}}, lo que conviene para un esquema dibujado rápido.

:::note
Todo se calcula en su equipo con reglas, sin ningún modelo y sin enviar nada a ningún lado.
:::

## La presión define el grosor de línea

Donde el lápiz está activado para las aplicaciones (Parámetros › Global › Dispositivos de entrada › Lápiz), un trazo hecho con lápiz conserva cada punto que dio el lápiz y su presión. Un trazo ligero hace un objeto delgado, y uno firme uno grueso: la presión media del trazo elige 0.18, 0.25, 0.35 o 0.50 mm, y la línea de comandos indica cuál. Los trazos hechos con ratón o dedo toman el grosor de línea actual, como antes. {{cmd:PENPRESSURE}} desactiva esto (o lo vuelve a activar); la elección se guarda en este navegador.
