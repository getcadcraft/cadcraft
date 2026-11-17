---
title: Disponer las hojas automáticamente
summary: Coloque las piezas de un dibujo en hojas de forma automática: CadCraft elige un formato de papel y una escala estándar que encajen, sitúa cada pieza con un cajetín y la escala debajo, y todo sigue siendo editable.
keywords: hojas, disposición, presentaciones, papel, escala, automático, AUTOSHEET, cajetín, ventanas gráficas, vistas con nombre
from: 7f315dff
---

Elija **Vista › Más › Disponer las hojas automáticamente** (o escriba {{cmd:AUTOSHEET}}). CadCraft busca las piezas de su dibujo (sus vistas con nombre, o los grupos separados del modelo), elige un formato de papel y una escala estándar en los que encajan, y las coloca en hojas nuevas con un cajetín, un pie y la escala bajo cada una.

Antes de ejecutarlo puede cambiar lo que hace: **Piezas** (vistas con nombre, grupos, todo el dibujo, o que lo decida CadCraft), **Papel** (automático o un tamaño como `iso-a1`), **Escala** (una sola para todas, o cada pieza con la suya) y **Hojas** (cuántas piezas comparten una hoja).

Las hojas son hojas normales: mueva una ventana gráfica, cambie su escala o borre una hoja como de costumbre. Pulse {{key:Ctrl+Z}} una vez para deshacer todas las hojas nuevas.

## Leyenda numerada

En {{cmd:AUTOSHEET}} elija **Leyenda numerada** para añadir una leyenda numerada bajo las vistas de cada hoja. Lista las capas dibujadas en esas vistas, una línea numerada por capa, como texto normal que puede editar como cualquier otro. Elija **Archivo** para leer su propia lista de textos (un número y sus palabras por línea, separados por un tabulador, una coma o un punto y coma): una capa cuyo nombre coincide con un número de su lista toma esas palabras. La aplicación no incluye ninguna lista.
