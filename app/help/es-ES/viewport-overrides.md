---
title: Modificaciones de clases en ventanas gráficas
summary: En una hoja, ocultar una clase o darle otro color, grosor o relleno solo en una ventana gráfica; el modelo y las demás ventanas gráficas no cambian.
keywords: ventana gráfica, modificación de clase, modificación de ventana gráfica, ocultar clase en ventana gráfica, hoja, disposición, VPLAYER, trazar, Vectorworks
from: c1a2b51f
---

Una hoja a menudo muestra el mismo modelo más de una vez: una planta con el mobiliario y otra sin él, o un plano de iluminación donde solo las luces tienen color. Una modificación de clase en una ventana gráfica cambia cómo se muestra una [clase](topic:classes) **solo en esa ventana gráfica**.

1. Abra la hoja y seleccione una ventana gráfica.
2. Abra el panel de Clases (`CLASSES`) y elija la clase.
3. En {{ui:Esta ventana gráfica}}, marque {{ui:Ocultar en esta ventana gráfica}}, o establezca {{ui:Color aquí}}, {{ui:Grosor de línea aquí}} o {{ui:Relleno aquí}}.

La lista siguiente muestra cada clase que esta ventana gráfica cambia. {{ui:Borrar las modificaciones de esta ventana gráfica}} las quita todas. Cada cambio es un paso de deshacer.

## Qué cambia una modificación

- **Ocultar** oculta la clase y todas las clases que dependen de ella en esta ventana gráfica.
- **Color, grosor y relleno** cambian los objetos de la clase cuyo valor no está definido en el propio objeto, es decir, los objetos que lo toman de su clase o de su capa. Un objeto con color propio lo conserva, como ocurre con una modificación de capa de ventana gráfica.

Las modificaciones se muestran en pantalla y en los trazados y PDF, incluido un conjunto de hojas publicado a PDF. Funcionan junto con las capas inmovilizadas y las modificaciones de capa de la ventana gráfica.

Las modificaciones se guardan con el dibujo en DWG y DXF (con la lista de clases, en el bloque `CADCRAFT_CLASSES`) y vuelven a aplicarse a la misma ventana gráfica cuando el archivo se abre en CadCraft.
