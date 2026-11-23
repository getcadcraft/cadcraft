---
title: Bocetar con lápiz y obtener geometría precisa
summary: Dibuje a mano alzada con lápiz, ratón o dedo, y cada trazo se convierte en una línea, círculo, arco, rectángulo o polilínea limpios al levantar el lápiz, ajustados a lo ya dibujado, con su tamaño listo para escribir encima.
keywords: boceto, lápiz, puntero, a mano alzada, dedo, limpiar, preciso, referencia, SKETCHLIVE, SKETCHFIX, tamaño, escribir encima, presión, grosor de línea, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Inicie {{cmd:SKETCHLIVE}} (o elija **Dibujo › Más › Bocetar con lápiz**) y dibuje un trazo pulsando y arrastrando. Cuando levanta el lápiz, CadCraft interpreta lo que quiso dibujar y lo coloca en el dibujo:

| Su trazo | Lo que obtiene |
|---|---|
| Casi recto | Una línea. Una línea casi horizontal o vertical queda exactamente horizontal o vertical. |
| Cerrado y redondo | Un círculo |
| Parte de una forma redonda | Un arco |
| Cerrado con cuatro esquinas de ángulo recto | Un rectángulo |
| Cualquier otra cosa | Una polilínea con lados escuadrados |

Los extremos de un trazo se llevan al extremo más cercano de lo que ya está dibujado, de modo que un muro bosquejado se une al muro contiguo.

## Escribir encima del tamaño

Después de cada trazo, la línea de comandos muestra su tamaño (la **longitud** de una línea, el **radio** de un círculo o un arco, la **anchura** de un rectángulo) como valor predeterminado. Pulse {{key:Enter}} para conservarlo, o escriba un número o una longitud como `12'6"` para sustituirlo. Una línea conserva su primer extremo, un círculo su centro, un rectángulo su primera esquina.

Pulse {{key:Enter}} en una petición vacía para terminar, o escriba `U` para deshacer el último trazo. Toda la sesión es un único paso de deshacer.

## Limpiar varios trazos a la vez

{{cmd:SKETCHFIX}} reúne trazos y los hace precisos todos a la vez cuando pulsa {{key:Enter}}, lo que resulta adecuado para una distribución rápida dibujada deprisa.

:::note
Todo se calcula en su equipo mediante reglas, sin modelo y sin enviar nada a ninguna parte.
:::

## La presión define el grosor de línea

Cuando el lápiz está activado para las aplicaciones (Parámetros › General › Dispositivos de entrada › Lápiz), un trazo dibujado con lápiz conserva todos los puntos que dio el lápiz y su presión. Un trazo ligero hace un objeto fino, y uno firme un objeto grueso: la presión media del trazo elige 0,18, 0,25, 0,35 o 0,50 mm, y la línea de comandos indica cuál. Los trazos dibujados con ratón o con dedo toman el grosor de línea actual, como antes. {{cmd:PENPRESSURE}} desactiva esto (o lo vuelve a activar); la elección se guarda en este navegador.
