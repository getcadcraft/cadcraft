---
title: Preparar una hoja con cajetín y vistas
summary: Creá una hoja (diseño) con marco y cajetín, configurá la escala de la vista, agregá una segunda vista para un detalle, y completá el cajetín.
keywords: diseño, hoja, espacio de papel, vista, mview, vpview, cajetín, escala, tamaño de papel, marco, vports, escala de trazado, mspace, pspace, espacio del modelo, entrar en vista, doble clic en vista
from: 45a45de8
---

## Lo que vas a crear

Una hoja A3 con un cajetín, la planta completa en una vista a 1:100, y una segunda vista que muestra una esquina a 1:20.

## El modelo y las hojas

Dibujás el edificio en la pestaña {{ui:Model}}, a tamaño real: un muro de 6 m mide 6000 unidades en milímetros. Una **hoja** (un diseño) es una pieza de papel, medida en milímetros o pulgadas. Una **vista** es una ventana recortada en la hoja que muestra el modelo a una escala.

## Antes de empezar

1. Abrí o dibujá una planta en la pestaña {{ui:Model}}.
2. Presioná {{key:Esc}} para que no quede nada seleccionado.
3. En {{ui:Current settings}}, poné {{ui:Units}} en la unidad con la que dibujaste, por ejemplo {{ui:Millimeters}}.

Las unidades importan: una escala de vista como 1:100 significa que un milímetro en el papel muestra 100 milímetros reales, así que CadCraft necesita saber qué es una unidad de dibujo. Un plano dejado en {{ui:Unitless}} se toma como si estuviera en la unidad del papel (milímetros en papel ISO, pulgadas en papel US).

## Crear la hoja

1. Hacé clic en el botón {{ui:+}} a la derecha de las pestañas debajo del dibujo, o escribí `LAYOUT` y presioná {{key:Enter}}, o hacé clic en {{ui:New sheet}}.

Se abre una pestaña nueva, `Layout1`. Ves una hoja sobre un escritorio más oscuro: un borde, un cajetín en la esquina inferior derecha y una vista encima que muestra el modelo completo a la mayor escala estándar que entra. El historial nombra el papel: ISO A3 para planos métricos y sin unidades, Tabloid (ANSI B) para planos en pulgadas o pies.

2. Hacé clic en {{ui:Extents}} para ajustar la hoja a la pantalla.

## Elegir el papel

1. Presioná {{key:Esc}} para que no quede nada seleccionado. El encabezado del panel derecho dice "Hoja: Layout1".
2. En {{ui:Name}}, escribí `A-101 Plan` y presioná {{key:Enter}}. La pestaña se renombra.
3. En {{ui:Paper}}, elegí un tamaño.
4. En {{ui:Orientation}}, elegí {{ui:Landscape}} o {{ui:Portrait}}.

:::warning
Cambiar el papel no mueve ni cambia el tamaño de lo que ya está en la hoja. Después de cambiarlo, revisá que el borde, el cajetín y la vista sigan entrando, y movelos o cambialos de tamaño con los agarres. Cambiar entre papel en milímetros y en pulgadas mantiene los números, así que todo cambia de tamaño: la barra de estado te avisa.
:::

## Configurar la escala de la vista

1. Hacé clic en el marco de la vista (su borde). El encabezado del panel dice "Vista".
2. En {{ui:Scale}}, elegí `1:100`.

El modelo dentro de la vista se redibuja a 1:100, centrado donde estaba. La lista ofrece escalas métricas de 10:1 a 1:10000; los planos en pulgadas o pies también reciben escalas arquitectónicas (1/4" = 1'-0" y similares) y escalas de ingeniería (1" = 20' y similares). {{ui:Fit the whole model}} fija una escala exacta, no estándar, que entra todo.

3. Si la planta ya no está centrada, cambiá {{ui:X}} y {{ui:Y}} en {{ui:View center (model)}} en el panel derecho: son el punto del modelo que se muestra en el centro de la vista.

## Mostrar una parte del modelo en una vista

1. Con la vista seleccionada, hacé clic en {{ui:Pick a window on the model…}} en el panel derecho (o escribí `VPVIEW` y presioná {{key:Enter}}).
2. CadCraft cambia a la pestaña {{ui:Model}}. Hacé clic en una esquina del área a mostrar.
3. Hacé clic en la esquina opuesta.

Volvés a la hoja, y la vista muestra esa área a la mayor escala estándar que entra; el historial dice cuál. {{ui:Show the whole model}} vuelve a la planta completa a una escala estándar.

## Agregar una segunda vista para un detalle

1. Hacé lugar en la hoja: seleccioná la primera vista y arrastrá un agarre de esquina para achicarla.
2. Escribí `MV` y presioná {{key:Enter}}, o hacé clic en {{ui:Viewport}} en el grupo Hojas.
3. Hacé clic en una esquina de la nueva vista sobre la hoja.
4. Hacé clic en la esquina opuesta.

La nueva vista muestra el modelo completo. El historial indica su escala.

5. Hacé clic en el marco de la nueva vista.
6. Hacé clic en {{ui:Pick a window on the model…}} y elegí un área pequeña alrededor de una esquina de la planta.
7. En {{ui:Scale}}, elegí `1:20`.

Los marcos de las vistas están en la capa `Viewports`, configurada para no trazarse, así que los marcos se ven en pantalla pero no en el PDF.

## Completar el cajetín

El cajetín está hecho de líneas y textos comunes en la capa `Title block`. Empieza con el nombre del plano, la escala de la primera vista, la fecha de hoy y el número de hoja.

1. Hacé doble clic en el texto grande del título. Se abre un cuadro de edición sobre él.
2. Escribí el título de la hoja.
3. Hacé clic en {{ui:OK}}, o presioná {{key:Mod+Enter}}.

Hacé lo mismo con los demás campos. Usá {{cmd:TEXT}} para escribir en la celda vacía "DRAWN BY". El texto SCALE no se actualiza solo cuando cambiás la escala de una vista: editalo a mano.

## Dibujar en la hoja

Todo lo que dibujes en la pestaña de una hoja está en el papel, en unidades de papel: un texto de altura 3.5 mide 3.5 mm de alto en una hoja ISO. Notas, flechas de norte y bordes de hoja van aquí.

Para cambiar la planta en sí, andá a la pestaña {{ui:Model}}, o trabajá a través de una vista (la sección siguiente); cada vista muestra el cambio.

## Trabajar en el modelo a través de una vista

1. Hacé doble clic dentro de una vista, fuera de su marco. O escribí `MS` y presioná {{key:Enter}}: con una sola vista en la hoja entra directamente; con varias, hacé clic en la que querés.

El marco se dibuja más grueso, el historial dice que estás adentro, y la pestaña de la hoja sigue seleccionada. Todo lo que dibujes o cambies ahora está en el modelo, en unidades del modelo, como en la pestaña {{ui:Model}}: una línea dibujada dentro de una vista a 1:100 está en milímetros reales. Las capas congeladas en esta vista no se pueden elegir aquí.

2. Girá la rueda o arrastrá con el botón central para hacer zoom y desplazar lo que muestra la vista. La hoja se queda donde está.
3. Hacé doble clic en cualquier parte fuera del marco, o escribí `PS` y presioná {{key:Enter}}.

Volvés a la hoja. La vista conserva la vista en la que la dejaste; {{key:Mod+Z}} devuelve la vista anterior en un paso. Hacer clic en cualquier pestaña debajo del dibujo también sale de la vista.

:::note
Una vista cuya pantalla está bloqueada ({{ui:Display locked}} en Propiedades) mantiene su vista: dentro de ella, desplazar y hacer zoom mueven toda la hoja. Una vista que está apagada no se puede abrir.
:::

## Rotular una vista con su nombre

Un título de vista debajo de una vista puede mostrar el nombre de la vista y seguirlo:

1. Dale un nombre a la vista: seleccioná el marco de la vista y completá {{ui:View name}} en Propiedades — o guardá la vista en la pestaña {{ui:Model}} con {{cmd:NAMEDVIEW}} y, con la vista seleccionada, escribí `VPVIEW`, `V` y el nombre de la vista: la vista muestra esa vista y toma su nombre.
2. Escribí `VIEWLABEL` (`VL`) y presioná {{key:Enter}}, y después hacé clic donde va la etiqueta ({{key:Enter}} la pone debajo de la esquina inferior izquierda de la vista).

Cuando cambia el nombre de la vista, la etiqueta cambia con él, en el mismo paso de deshacer.

## Congelar una capa en una vista

Para ocultar una capa en una vista pero no en las demás (muebles en un detalle, por ejemplo):

1. Seleccioná el marco de la vista, o trabajá dentro de ella (doble clic).

El panel {{ui:Layers}} gana un botón más en cada fila, y una línea arriba de la lista lo indica.

2. Hacé clic en ese botón en la fila de la capa.

La capa desaparece solo de esa vista. Hacé clic de nuevo para descongelarla; {{key:Mod+Z}} deshace cualquiera de las dos. Para varias capas o vistas a la vez, escribí `VPLAYER`: `F` (Congelar) o `T` (Descongelar), los nombres de las capas (`A-*` toma todas las capas que empiezan con A-), y después `C` (Actual), `A` (Todas) o `S` (Seleccionar). `VPLAYER` `V` (Vpvisdflt) elige las capas que las vistas nuevas empiezan congeladas.

## Más hojas

Cada {{ui:+}} agrega otra hoja (`Layout2`, `Layout3` …) con el siguiente número de hoja. Para borrar la hoja abierta, presioná {{key:Esc}} y hacé clic en {{ui:Delete this sheet}} en el panel derecho. Se borra sin preguntar; {{key:Mod+Z}} la devuelve.

Trazá una hoja con {{ui:Plot this sheet}} o {{key:Mod+P}}; ver [Trazar a PDF](topic:plot-pdf).

## Errores comunes

- **La vista no muestra nada.** El modelo está vacío, o la vista apunta a otro lado. Seleccioná el marco y hacé clic en {{ui:Show the whole model}}.
- **La lista de escalas muestra solo proporciones y ninguna escala en pies y pulgadas.** Poné {{ui:Units}} en {{ui:Inches}} o {{ui:Feet}} en la pestaña {{ui:Model}}.
- **1:100 se ve diez veces más grande o más chico.** Las unidades del plano están mal. Poné {{ui:Units}} en lo que realmente vale una unidad.
- **Hacer clic en la planta dentro de la vista no selecciona nada.** En una hoja seleccionás los objetos propios de la hoja. Hacé doble clic dentro de la vista primero para trabajar en la planta a través de ella.
- **Los clics fuera de la vista no hacen nada.** Estás dentro de una vista: hacé doble clic fuera de ella, o escribí `PS`, para trabajar en la hoja otra vez.
- **"Las vistas van en un diseño. Abrí primero una pestaña de diseño (o creá una con LAYOUT)."** {{cmd:MVIEW}} solo funciona en una pestaña de hoja.
