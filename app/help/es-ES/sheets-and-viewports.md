---
title: Preparar una hoja con cajetín y ventanas gráficas
summary: Cree una hoja (presentación) con borde y cajetín, ajuste la escala de la ventana gráfica, añada una segunda ventana para un detalle y rellene el cajetín.
keywords: presentación, hoja, espacio papel, ventana gráfica, mview, vpview, cajetín, escala, tamaño de papel, borde, vports, escala de trazado, mspace, pspace, espacio modelo, entrar en ventana gráfica, doble clic en ventana gráfica
from: 45a45de8
---

## Qué va a crear

Una hoja A3 con un cajetín, todo el plano en una ventana gráfica a 1:100, y una segunda ventana gráfica que muestra una esquina a 1:20.

## Modelo y hojas

Dibuje el edificio en la pestaña {{ui:Modelo}}, a tamaño real: un muro de 6 m mide 6000 unidades en milímetros. Una **hoja** (una presentación) es un trozo de papel, medido en milímetros o en pulgadas. Una **ventana gráfica** es una ventana recortada en la hoja que muestra el modelo a una escala.

## Antes de empezar

1. Abra o dibuje un plano en la pestaña {{ui:Modelo}}.
2. Pulse {{key:Esc}} para que nada esté seleccionado.
3. En {{ui:Parámetros actuales}}, establezca {{ui:Unidades}} en la unidad con la que dibujó, por ejemplo {{ui:Milímetros}}.

Las unidades importan: una escala de ventana como 1:100 significa que un milímetro sobre el papel muestra 100 milímetros reales, así que CadCraft necesita saber qué es una unidad de dibujo. Un dibujo que se deja como {{ui:Sin unidades}} se toma como la unidad del papel (milímetros en papel ISO, pulgadas en papel estadounidense).

## Crear la hoja

1. Haga clic en el botón {{ui:+}} a la derecha de las pestañas bajo el dibujo, o escriba `LAYOUT` y pulse {{key:Enter}}, o haga clic en {{ui:Nueva hoja}}.

Se abre una pestaña nueva, `Layout1`. Verá una hoja sobre una mesa más oscura: un borde, un cajetín en la esquina inferior derecha y una ventana gráfica encima que muestra todo el modelo a la mayor escala estándar que cabe. El historial indica el papel: ISO A3 para dibujos métricos y sin unidades, Tabloid (ANSI B) para dibujos en pulgadas o en pies.

2. Haga clic en {{ui:Extensión}} para ajustar la hoja a la pantalla.

## Elegir el papel

1. Pulse {{key:Esc}} para que nada esté seleccionado. El encabezado del panel derecho dice "Hoja: Layout1".
2. En {{ui:Nombre}}, escriba `A-101 Plan` y pulse {{key:Enter}}. La pestaña cambia de nombre.
3. En {{ui:Papel}}, elija un tamaño.
4. En {{ui:Orientación}}, elija {{ui:Horizontal}} o {{ui:Vertical}}.

:::warning
Cambiar el papel no mueve ni cambia el tamaño de lo que ya hay en la hoja. Después de cambiarlo, compruebe que el borde, el cajetín y la ventana gráfica siguen cabiendo, y muévalos o cambie su tamaño con los agarres. Al pasar entre papel en milímetros y papel en pulgadas se conservan los números, así que todo cambia de tamaño: la barra de estado se lo advierte.
:::

## Establecer la escala de la ventana gráfica

1. Haga clic en el marco de la ventana gráfica (su borde). El encabezado del panel dice "Ventana gráfica".
2. En {{ui:Escala}}, elija `1:100`.

El modelo dentro de la ventana gráfica se redibuja a 1:100, centrado donde estaba. La lista ofrece escalas métricas de 10:1 a 1:10000; los dibujos en pulgadas o en pies también reciben escalas arquitectónicas (1/4" = 1'-0" y similares) y de ingeniería (1" = 20' y similares). {{ui:Ajustar todo el modelo}} establece una escala exacta, no estándar, que hace caber todo.

3. Si el plano ya no está centrado, cambie {{ui:X}} e {{ui:Y}} en {{ui:Centro de la vista (modelo)}} del panel derecho: son el punto del modelo que se muestra en el centro de la ventana gráfica.

## Mostrar parte del modelo en una ventana gráfica

1. Con la ventana gráfica seleccionada, haga clic en {{ui:Designar una ventana en el modelo…}} en el panel derecho (o escriba `VPVIEW` y pulse {{key:Enter}}).
2. CadCraft cambia a la pestaña {{ui:Modelo}}. Haga clic en una esquina del área que quiere mostrar.
3. Haga clic en la esquina opuesta.

Vuelve a la hoja, y la ventana gráfica muestra esa área a la mayor escala estándar que cabe; el historial indica cuál. {{ui:Mostrar todo el modelo}} devuelve el plano completo a una escala estándar.

## Añadir una segunda ventana gráfica para un detalle

1. Haga sitio en la hoja: seleccione la primera ventana gráfica y arrastre un agarre de esquina para hacerla más pequeña.
2. Escriba `MV` y pulse {{key:Enter}}, o haga clic en {{ui:Ventana gráfica}} en el grupo Hojas.
3. Haga clic en una esquina de la nueva ventana gráfica en la hoja.
4. Haga clic en la esquina opuesta.

La nueva ventana gráfica muestra todo el modelo. El historial indica su escala.

5. Haga clic en el marco de la nueva ventana gráfica.
6. Haga clic en {{ui:Designar una ventana en el modelo…}} y elija un área pequeña alrededor de una esquina del plano.
7. En {{ui:Escala}}, elija `1:20`.

Los marcos de las ventanas gráficas están en la capa `Viewports`, que está configurada para no trazarse, así que los marcos se ven en pantalla pero no en el PDF.

## Rellenar el cajetín

El cajetín está formado por líneas y textos normales en la capa `Title block`. Empieza con el nombre del dibujo, la escala de la primera ventana gráfica, la fecha de hoy y el número de hoja.

1. Haga doble clic en el texto grande del título. Se abre un cuadro de edición sobre él.
2. Escriba el título de la hoja.
3. Haga clic en {{ui:Aceptar}}, o pulse {{key:Mod+Enter}}.

Haga lo mismo con los demás campos. Use {{cmd:TEXT}} para escribir en la celda vacía "DIBUJADO POR". El texto ESCALA no se actualiza solo cuando cambia la escala de una ventana gráfica: edítelo a mano.

## Dibujar en la hoja

Todo lo que dibuje en una pestaña de hoja está en el papel, en unidades de papel: un texto de altura 3.5 mide 3.5 mm de alto en una hoja ISO. Las notas, las flechas de norte y los bordes de hoja pertenecen aquí.

Para cambiar el propio plano, vaya a la pestaña {{ui:Modelo}}, o trabaje a través de una ventana gráfica (siguiente sección); cada ventana gráfica muestra el cambio.

## Trabajar en el modelo a través de una ventana gráfica

1. Haga doble clic dentro de una ventana gráfica, lejos de su marco. O escriba `MS` y pulse {{key:Enter}}: con una sola ventana gráfica en la hoja entra directamente; con varias, haga clic dentro de la que quiera.

El marco se dibuja más grueso, el historial indica que está dentro, y la pestaña de la hoja sigue seleccionada. Todo lo que dibuje o cambie ahora está en el modelo, en unidades del modelo, como en la pestaña {{ui:Modelo}}: una línea dibujada dentro de una ventana gráfica a 1:100 está en milímetros reales. Las capas congeladas en esta ventana gráfica no se pueden elegir aquí.

2. Gire la rueda o arrastre con el botón central para hacer zoom y desplazar lo que muestra la ventana gráfica. La hoja se queda donde está.
3. Haga doble clic en cualquier parte fuera del marco, o escriba `PS` y pulse {{key:Enter}}.

Vuelve a la hoja. La ventana gráfica conserva la vista con la que la dejó; {{key:Mod+Z}} devuelve la vista anterior en un paso. Hacer clic en cualquier pestaña bajo el dibujo también sale de la ventana gráfica.

:::note
Una ventana gráfica cuya visualización está bloqueada ({{ui:Visualización bloqueada}} en Propiedades) conserva su vista: dentro de ella, el desplazamiento y el zoom mueven toda la hoja. Una ventana gráfica desactivada no se puede abrir.
:::

## Etiquetar una vista con su nombre

Un título de vista bajo una ventana gráfica puede mostrar el nombre de la vista de la ventana y seguirlo:

1. Dé un nombre a la vista: seleccione el marco de la ventana gráfica y rellene {{ui:Nombre de vista}} en Propiedades, o guarde la vista en la pestaña {{ui:Modelo}} con {{cmd:NAMEDVIEW}} y, con la ventana gráfica seleccionada, escriba `VPVIEW`, `V` y el nombre de la vista: la ventana gráfica muestra esa vista y toma su nombre.
2. Escriba `VIEWLABEL` (`VL`) y pulse {{key:Enter}}, y después haga clic donde irá la etiqueta ({{key:Enter}} la coloca bajo la esquina inferior izquierda de la ventana gráfica).

Cuando cambia el nombre de la vista, la etiqueta cambia con él, en el mismo paso de deshacer.

## Congelar una capa en una ventana gráfica

Para ocultar una capa en una ventana gráfica pero no en las demás (muebles en un detalle, por ejemplo):

1. Seleccione el marco de la ventana gráfica, o trabaje dentro de ella (doble clic).

El panel {{ui:Capas}} recibe un botón más en cada fila, y una línea sobre la lista lo indica.

2. Haga clic en ese botón en la fila de la capa.

La capa desaparece solo de esa ventana gráfica. Haga clic de nuevo para descongelarla; {{key:Mod+Z}} deshace cualquiera de las dos cosas. Para varias capas o ventanas gráficas a la vez, escriba `VPLAYER`: `F` (Freeze) o `T` (Thaw), los nombres de capa (`A-*` toma todas las capas que empiezan por A-), y después `C` (Current), `A` (All) o `S` (Select). `VPLAYER` `V` (Vpvisdflt) elige las capas con las que empiezan congeladas las nuevas ventanas gráficas.

## Más hojas

Cada {{ui:+}} añade otra hoja (`Layout2`, `Layout3` …) con el siguiente número de hoja. Para borrar la hoja abierta, pulse {{key:Esc}} y haga clic en {{ui:Eliminar esta hoja}} en el panel derecho. Se borra sin preguntar; {{key:Mod+Z}} la devuelve.

Trace una hoja con {{ui:Trazar esta hoja}} o {{key:Mod+P}}; consulte [Trazar a PDF](topic:plot-pdf).

## Errores frecuentes

- **La ventana gráfica no muestra nada.** El modelo está vacío, o la vista apunta a otro lugar. Seleccione el marco y haga clic en {{ui:Mostrar todo el modelo}}.
- **La lista de escalas solo muestra razones y ninguna escala de pies y pulgadas.** Establezca {{ui:Unidades}} en {{ui:Pulgadas}} o {{ui:Pies}} en la pestaña {{ui:Modelo}}.
- **1:100 parece diez veces demasiado grande o demasiado pequeño.** Las unidades del dibujo son incorrectas. Establezca {{ui:Unidades}} en lo que realmente representa una unidad.
- **Hacer clic en el plano dentro de la ventana gráfica no selecciona nada.** En una hoja se seleccionan los objetos de la propia hoja. Haga doble clic dentro de la ventana gráfica antes para trabajar en el plano a través de ella.
- **Los clics fuera de la ventana gráfica no hacen nada.** Está dentro de una ventana gráfica: haga doble clic fuera de ella, o escriba `PS`, para trabajar de nuevo en la hoja.
- **"Las ventanas gráficas van en una hoja. Abra una pestaña de hoja (o cree una con LAYOUT) primero."** {{cmd:MVIEW}} solo funciona en una pestaña de hoja.
