---
title: Cambios de clase en la ventana gráfica
summary: En una hoja, oculte una clase o asígnele otro color, grosor o relleno solo en una ventana gráfica; el modelo y las demás ventanas gráficas no cambian.
keywords: ventana gráfica, cambio de clase, cambio de ventana gráfica, ocultar clase en ventana gráfica, hoja, presentación, trazado, VPLAYER, Vectorworks
from: c1a2b51f
---

Una hoja a menudo muestra el mismo modelo más de una vez: una planta con el mobiliario y una planta sin él, o un plano de iluminación donde solo las luces están en color. Un cambio de clase en la ventana gráfica modifica cómo se muestra una [clase](topic:classes) **solo en esa ventana gráfica**.

1. Abra la hoja y seleccione una ventana gráfica.
2. Abra el panel Clases (`CLASSES`) y elija la clase.
3. En {{ui:Esta ventana gráfica}}, marque {{ui:Ocultar en esta ventana gráfica}}, o establezca {{ui:Color aquí}}, {{ui:Grosor aquí}} o {{ui:Relleno aquí}}.

La lista de abajo muestra cada clase que cambia esta ventana gráfica. {{ui:Quitar los cambios de esta ventana gráfica}} los quita todos. Cada cambio es un paso de deshacer.

## Lo que cambia un cambio

- **Ocultar** oculta la clase y cada clase contenida en ella, en esta ventana gráfica.
- **Color, grosor y relleno** cambian los objetos de la clase cuyo valor no está definido en el propio objeto, es decir, los objetos que lo toman por clase o por capa. Un objeto con su propio color lo conserva, como ocurre con un cambio de capa en la ventana gráfica.

Los cambios se muestran en pantalla y en los trazados y PDF, incluido un juego de hojas publicado a PDF. Funcionan junto con las capas inutilizadas de la ventana gráfica y sus cambios de capa.

Los cambios se guardan con el dibujo en DWG y DXF (con la lista de clases, en el bloque `CADCRAFT_CLASSES`) y vuelven a la misma ventana gráfica cuando el archivo se abre en CadCraft.
