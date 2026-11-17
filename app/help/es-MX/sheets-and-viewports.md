---
title: Preparar una hoja con cajetín y ventanas gráficas
summary: Cree una hoja (presentación) con borde y cajetín, defina la escala de la ventana gráfica, agregue una segunda ventana gráfica para un detalle y llene el cajetín.
keywords: presentación, hoja, espacio papel, ventana gráfica, mview, vpview, cajetín, escala, tamaño de papel, borde, vports, escala de trazado, mspace, pspace, espacio modelo, entrar en ventana gráfica, doble clic en ventana gráfica
from: 45a45de8
---

## Qué va a crear

Una hoja A3 con un cajetín, todo el plano en una ventana gráfica a 1:100, y una segunda ventana gráfica que muestra una esquina a 1:20.

## Modelo y hojas

Dibuje el edificio en la pestaña {{ui:Modelo}}, a tamaño real: un muro de 6 m mide 6000 unidades de largo en milímetros. Una **hoja** (una presentación) es una pieza de papel, medida en milímetros o pulgadas. Una **ventana gráfica** es una ventana recortada en la hoja que muestra el modelo a una escala.

## Antes de empezar

1. Abra o dibuje un plano en la pestaña {{ui:Modelo}}.
2. Pulse {{key:Esc}} para que no haya nada seleccionado.
3. En {{ui:Parámetros actuales}}, defina {{ui:Unidades}} como la unidad en la que dibujó, por ejemplo {{ui:Milímetros}}.

Las unidades importan: una escala de ventana gráfica como 1:100 significa que un milímetro en el papel muestra 100 milímetros reales, así que CadCraft necesita saber qué es una unidad de dibujo. Un dibujo dejado en {{ui:Sin unidades}} se toma en la unidad del papel (milímetros en papel ISO, pulgadas en papel estadounidense).

## Crear la hoja

1. Haga clic en el botón {{ui:+}} a la derecha de las pestañas bajo el dibujo, o escriba `LAYOUT` y pulse {{key:Enter}}, o haga clic en {{ui:Nueva hoja}}.

Se abre una pestaña nueva, `Layout1`. Debe ver una hoja sobre un escritorio más oscuro: un borde, un cajetín en la esquina inferior derecha y una ventana gráfica arriba que muestra todo el modelo a la escala estándar más grande que cabe. El historial indica el papel: ISO A3 para dibujos métricos y sin unidades, Tabloid (ANSI B) para dibujos en pulgadas o pies.

2. Haga clic en {{ui:Extensión}} para ajustar la hoja en pantalla.

## Elegir el papel

1. Pulse {{key:Esc}} para que no haya nada seleccionado. El encabezado del panel derecho dice "Sheet: Layout1".
2. En {{ui:Nombre}}, escriba `A-101 Plan` y pulse {{key:Enter}}. La pestaña cambia de nombre.
3. En {{ui:Papel}}, elija un tamaño.
4. En {{ui:Orientación}}, elija {{ui:Horizontal}} o {{ui:Vertical}}.

:::warning
Cambiar el papel no mueve ni cambia el tamaño de lo que ya está en la hoja. Después de cambiarlo, revise que el borde, el cajetín y la ventana gráfica sigan cabiendo, y muévalos o cámbieles el tamaño con los pinzamientos. Cambiar entre papel en milímetros y papel en pulgadas conserva los números, así que todo cambia de tamaño: la barra de estado le advierte.
:::

## Definir la escala de la ventana gráfica

1. Haga clic en el marco de la ventana gráfica (su borde). El encabezado del panel dice "Viewport".
2. En {{ui:Escala}}, elija `1:100`.

El modelo dentro de la ventana gráfica se redibuja a 1:100, centrado donde estaba. La lista ofrece escalas métricas de 10:1 a 1:10000; los dibujos en pulgadas o pies también tienen escalas arquitectónicas (1/4" = 1'-0" y similares) y escalas de ingeniería (1" = 20' y similares). {{ui:Ajustar todo el modelo}} define una escala exacta, no estándar, que hace caber todo.

3. Si el plano ya no está centrado, cambie {{ui:X}} y {{ui:Y}} bajo {{ui:Centro de la vista (modelo)}} en el panel derecho: son el punto del modelo que se muestra en el centro de la ventana gráfica.

## Mostrar parte del modelo en una ventana gráfica

1. Con la ventana gráfica seleccionada, haga clic en {{ui:Designar una ventana en el modelo…}} en el panel derecho (o escriba `VPVIEW` y pulse {{key:Enter}}).
2. CadCraft cambia a la pestaña {{ui:Modelo}}. Haga clic en una esquina del área que quiere mostrar.
3. Haga clic en la esquina opuesta.

Vuelve a la hoja, y la ventana gráfica muestra esa área a la escala estándar más grande que cabe; el historial indica cuál. {{ui:Mostrar todo el modelo}} regresa al plano completo a una escala estándar.

## Agregar una segunda ventana gráfica para un detalle

1. Haga espacio en la hoja: seleccione la primera ventana gráfica y arrastre un pinzamiento de esquina para hacerla más pequeña.
2. Escriba `MV` y pulse {{key:Enter}}, o haga clic en {{ui:Ventana gráfica}} en el grupo Hojas.
3. Haga clic en una esquina de la nueva ventana gráfica en la hoja.
4. Haga clic en la esquina opuesta.

La nueva ventana gráfica muestra todo el modelo. El historial indica su escala.

5. Haga clic en el marco de la nueva ventana gráfica.
6. Haga clic en {{ui:Designar una ventana en el modelo…}} y elija un área pequeña alrededor de una esquina del plano.
7. En {{ui:Escala}}, elija `1:20`.

Los marcos de las ventanas gráficas están en la capa `Viewports`, configurada para no trazarse, así que los marcos se ven en pantalla pero no en el PDF.

## Llenar el cajetín

El cajetín está hecho de líneas y textos normales en la capa `Title block`. Empieza con el nombre del dibujo, la escala de la primera ventana gráfica, la fecha de hoy y el número de hoja.

1. Haga doble clic en el texto grande del título. Se abre un cuadro de edición sobre él.
2. Escriba el título de la hoja.
3. Haga clic en {{ui:Aceptar}}, o pulse {{key:Mod+Enter}}.

Haga lo mismo con los demás campos. Use {{cmd:TEXT}} para escribir en la celda vacía "DRAWN BY". El texto SCALE no se actualiza solo cuando cambia la escala de una ventana gráfica: edítelo a mano.

## Dibujar en la hoja

Todo lo que dibuje en una pestaña de hoja está en el papel, en unidades de papel: un texto de 3.5 de altura mide 3.5 mm de alto en una hoja ISO. Las notas, las flechas de norte y los bordes de hoja van aquí.

Para cambiar el plano en sí, vaya a la pestaña {{ui:Modelo}}, o trabaje a través de una ventana gráfica (siguiente sección); cada ventana gráfica muestra el cambio.

## Trabajar en el modelo a través de una ventana gráfica

1. Haga doble clic dentro de una ventana gráfica, lejos de su marco. O escriba `MS` y pulse {{key:Enter}}: si hay una sola ventana gráfica en la hoja, entra directamente; si hay varias, haga clic en la que quiere.

El marco se dibuja más grueso, el historial indica que está dentro, y la pestaña de la hoja sigue seleccionada. Todo lo que dibuje o cambie ahora está en el modelo, en unidades del modelo, como en la pestaña {{ui:Modelo}}: una línea dibujada dentro de una ventana gráfica a 1:100 está en milímetros reales. Las capas inutilizadas en esta ventana gráfica no se pueden designar aquí.

2. Gire la rueda o arrastre con el botón central para hacer zoom y encuadrar lo que muestra la ventana gráfica. La hoja se queda donde está.
3. Haga doble clic en cualquier parte fuera del marco, o escriba `PS` y pulse {{key:Enter}}.

Vuelve a la hoja. La ventana gráfica conserva la vista con la que la dejó; {{key:Mod+Z}} devuelve la vista anterior en un paso. Hacer clic en cualquier pestaña bajo el dibujo también sale de la ventana gráfica.

:::note
Una ventana gráfica cuya visualización está bloqueada ({{ui:Visualización bloqueada}} en Propiedades) conserva su vista: dentro de ella, el encuadre y el zoom mueven toda la hoja. Una ventana gráfica desactivada no se puede abrir.
:::

## Rotular una vista con su nombre

Un título de vista bajo una ventana gráfica puede mostrar el nombre de la vista de la ventana y mantenerse al día con él:

1. Dé un nombre a la vista: seleccione el marco de la ventana gráfica y llene {{ui:Nombre de vista}} en Propiedades. O guarde la vista en la pestaña {{ui:Modelo}} con {{cmd:NAMEDVIEW}} y, con la ventana gráfica seleccionada, escriba `VPVIEW`, `V` y el nombre de la vista: la ventana gráfica muestra esa vista y toma su nombre.
2. Escriba `VIEWLABEL` (`VL`) y pulse {{key:Enter}}, y luego haga clic donde va la etiqueta ({{key:Enter}} la pone bajo la esquina inferior izquierda de la ventana gráfica).

Cuando cambia el nombre de la vista, la etiqueta cambia con él, en el mismo paso de deshacer.

## Inutilizar una capa en una ventana gráfica

Para ocultar una capa en una ventana gráfica pero no en las demás (muebles en un detalle, por ejemplo):

1. Seleccione el marco de la ventana gráfica, o trabaje dentro de ella (doble clic).

El panel {{ui:Capas}} tiene un botón más en cada fila, y una línea sobre la lista lo indica.

2. Haga clic en ese botón en la fila de la capa.

La capa desaparece solo de esa ventana gráfica. Haga clic otra vez para reutilizarla; {{key:Mod+Z}} deshace cualquiera de las dos acciones. Para varias capas o ventanas a la vez, escriba `VPLAYER`: `F` (Inutilizar) o `T` (Reutilizar), los nombres de capa (`A-*` toma todas las capas que empiezan con A-), luego `C` (Current), `A` (All) o `S` (Select). `VPLAYER` `V` (Vpvisdflt) elige las capas con las que las nuevas ventanas gráficas empiezan inutilizadas.

## Más hojas

Cada {{ui:+}} agrega otra hoja (`Layout2`, `Layout3` …) con el siguiente número de hoja. Para borrar la hoja abierta, pulse {{key:Esc}} y haga clic en {{ui:Eliminar esta hoja}} en el panel derecho. Se elimina sin preguntar; {{key:Mod+Z}} la trae de vuelta.

Trace una hoja con {{ui:Trazar esta hoja}} o {{key:Mod+P}}; consulte [Trazar a PDF](topic:plot-pdf).

## Errores comunes

- **La ventana gráfica no muestra nada.** El modelo está vacío, o la vista apunta a otro lado. Seleccione el marco y haga clic en {{ui:Mostrar todo el modelo}}.
- **La lista de escalas solo muestra proporciones y ninguna escala de pies y pulgadas.** Defina {{ui:Unidades}} como {{ui:Pulgadas}} o {{ui:Pies}} en la pestaña {{ui:Modelo}}.
- **1:100 se ve diez veces más grande o más pequeño.** Las unidades del dibujo están mal. Defina {{ui:Unidades}} como lo que realmente es una unidad.
- **Al hacer clic en el plano dentro de la ventana gráfica no se selecciona nada.** En una hoja se seleccionan los objetos de la hoja. Haga doble clic dentro de la ventana gráfica primero para trabajar en el plano a través de ella.
- **Los clics fuera de la ventana gráfica no hacen nada.** Está dentro de una ventana gráfica: haga doble clic fuera de ella, o escriba `PS`, para trabajar en la hoja otra vez.
- **"Viewports go on a layout. Open a layout tab (or make one with LAYOUT) first."** {{cmd:MVIEW}} solo funciona en una pestaña de hoja.
