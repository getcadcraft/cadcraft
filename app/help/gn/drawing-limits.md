---
title: Definir los límites del dibujo
summary: LIMITS define un rectángulo para el dibujo: la cuadrícula lo llena, ZOOM All lo muestra, y con los límites activados se rechazan los puntos fuera de él. Se guardan en archivos DWG y DXF.
keywords: límites, límites del dibujo, LIMITS, LIMMIN, LIMMAX, LIMCHECK, cuadrícula, fuera de los límites, tamaño de hoja, área de dibujo, zoom todo, contorno
from: 9e97b30d
---

Los **límites del dibujo** son un rectángulo que indica qué tan grande está previsto que sea el dibujo: el área en la que planea dibujar, como una hoja de 420 × 297. Un dibujo nuevo no tiene ninguno, así que la cuadrícula y el área de dibujo no tienen límite, como antes.

## Definirlos

Escriba {{cmd:LIMITS}} y responda:

- `Seleccione la esquina inferior izquierda o [ON/OFF] <0,0>`: un punto, o {{key:Enter}} para mantener el actual.
- `Seleccione la esquina superior derecha <420,297>`: un punto, o {{key:Enter}} para mantener el actual. Debe estar arriba y a la derecha de la primera.

O escriba `ON` u `OFF` en la primera pregunta para activar o desactivar la verificación sin cambiar el rectángulo. Definir las esquinas es un paso de deshacer, y también lo es cada ON y OFF.

## Qué hacen

- **La cuadrícula llena los límites** y se detiene en su borde. Es una imagen del área, así que active {{ui:Cuadrícula}} para verla.
- **ZOOM All** ({{cmd:ZOOM}}, luego {{ui:Todo}}) muestra los límites y el dibujo juntos; {{ui:Extensiones}} todavía muestra solo el dibujo.
- **Con los límites ON**, un punto que escriba o haga clic fuera de ellos se rechaza con `**Fuera de los límites` y la indicación se mantiene. Esto aplica a los comandos que crean objetos: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, los comandos de cota y algunos más. Los comandos que solo mueven, seleccionan o miden no están limitados, y tampoco lo están pegar, arrastrar un agarre ni un objeto que crea una rutina LISP: los límites son una guía para dibujar, no un muro. Con los límites OFF no se rechaza nada.
- Los objetos que ya están fuera se quedan donde están.

## En archivos y LISP

Se guardan en DWG y DXF como `$LIMMIN`, `$LIMMAX` y `$LIMCHECK`. Un archivo de otro programa que solo tiene los límites por defecto de ese programa (0,0 a 12,9 o 420,297, verificación desactivada) se abre sin ninguno, para que su cuadrícula no quede apretada en un rectángulo pequeño; un archivo con límites propios, o con la verificación activada, los conserva. En LISP, `(getvar "LIMMIN")`, `LIMMAX` y `LIMCHECK` los leen y `setvar` los escribe, como un solo paso de deshacer.

Los límites pertenecen al modelo. Una hoja (una disposición) tiene su propio tamaño de papel.
