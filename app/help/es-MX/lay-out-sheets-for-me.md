---
title: Distribuir hojas automáticamente
summary: Coloque las partes de un dibujo en hojas automáticamente: CadCraft elige un tamaño de papel y una escala estándar que quepa, ubica cada parte con un título y la escala debajo, y deja todo editable.
keywords: hojas, presentación, presentaciones, papel, escala, automático, AUTOSHEET, cuadro de rótulo, ventanas gráficas, vistas guardadas
from: 7f315dff
---

Elija **Vista › Más › Distribuir hojas automáticamente** (o escriba {{cmd:AUTOSHEET}}). CadCraft busca las piezas de su dibujo (sus vistas guardadas, o los grupos separados del modelo), elige un tamaño de papel y una escala estándar en la que quepan, y las coloca en hojas nuevas con un cuadro de rótulo, un pie de figura y la escala debajo de cada una.

Antes de ejecutarlo puede cambiar lo que hace: **Piezas** (vistas guardadas, grupos, todo el dibujo, o dejar que decida), **Papel** (automático o un tamaño como `iso-a1`), **Escala** (una sola para todas, o cada pieza con la suya) y **Hojas** (cuántas piezas comparten una hoja).

Las hojas son hojas normales: mueva una ventana gráfica, cambie su escala o elimine una hoja como de costumbre. Presione {{key:Ctrl+Z}} una vez para deshacer todas las hojas nuevas.

## Notas clave

En {{cmd:AUTOSHEET}} elija **Notas clave** para agregar una leyenda numerada debajo de las vistas de cada hoja. Lista las capas dibujadas en esas vistas, una línea numerada por cada una, como texto simple que puede editar como cualquier otro texto. Elija **Archivo** para leer su propia lista de notas clave (un número y sus palabras por línea, separados por un tabulador, una coma o un punto y coma): una capa cuyo nombre coincida con un número de su lista toma sus palabras. No viene ninguna lista de notas clave con la aplicación.
