---
title: Establecer los límites del dibujo
summary: LIMITS establece un rectángulo para el dibujo: la rejilla lo llena, ZOOM Todo lo muestra, y con los límites activados se rechazan los puntos que quedan fuera. Se guardan en archivos DWG y DXF.
keywords: límites, límites del dibujo, LIMITS, LIMMIN, LIMMAX, LIMCHECK, rejilla, fuera de los límites, tamaño de hoja, área de dibujo, zoom todo, contorno
from: 9e97b30d
---

Los **límites del dibujo** son un rectángulo que indica el tamaño previsto del dibujo: el área en la que planea dibujar, como una hoja de 420 × 297. Un dibujo nuevo no tiene ninguno, así que la rejilla y el área de dibujo son ilimitadas, como antes.

## Establecerlos

Escriba {{cmd:LIMITS}} y responda:

- `Especifique la esquina inferior izquierda o [ON/OFF] <0,0>`: un punto, o {{key:Enter}} para mantener el actual.
- `Especifique la esquina superior derecha <420,297>`: un punto, o {{key:Enter}} para mantener el actual. Debe estar por encima y a la derecha de la primera.

O escriba `ON` u `OFF` en la primera pregunta para activar o desactivar la comprobación sin cambiar el rectángulo. Establecer las esquinas es un solo paso de deshacer, y también lo es cada ON y OFF.

## Qué hacen

- **La rejilla llena los límites** y se detiene en su borde. Es una imagen del área, así que active {{ui:Rejilla}} para verla.
- **ZOOM Todo** ({{cmd:ZOOM}}, después {{ui:Todo}}) muestra los límites y el dibujo juntos; {{ui:Extensión}} sigue mostrando solo el dibujo.
- **Con los límites ACTIVADOS**, un punto que escribe o pulsa fuera de ellos se rechaza con `**Fuera de los límites` y el aviso permanece. Se aplica a los comandos que crean objetos: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, los comandos de cota y algunos más. Los comandos que solo mueven, seleccionan o miden no están limitados, tampoco pegar, arrastrar un agarre ni un objeto que crea una rutina LISP: los límites son una guía para dibujar, no un muro. Con los límites DESACTIVADOS no se rechaza nada.
- Los objetos que ya están fuera permanecen donde están.

## En archivos y LISP

Se guardan en DWG y DXF como `$LIMMIN`, `$LIMMAX` y `$LIMCHECK`. Un archivo de otro programa que solo tiene los límites predeterminados de ese programa (de 0,0 a 12,9 o a 420,297, con la comprobación desactivada) se abre sin ninguno, para que su rejilla no quede apretada en un rectángulo pequeño; un archivo con límites propios, o con la comprobación activada, los conserva. En LISP, `(getvar "LIMMIN")`, `LIMMAX` y `LIMCHECK` los leen, y `setvar` los escribe, como un solo paso de deshacer.

Los límites pertenecen al modelo. Una hoja (un diseño) tiene su propio tamaño de papel.
