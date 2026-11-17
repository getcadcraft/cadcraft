---
title: Bloques dinámicos
summary: Qué hace CadCraft con los bloques dinámicos de un DWG: conservan sus nombres reales, muestran el estado en que se guardaron, cambian de estado de visibilidad, muestran sus otros valores y siguen siendo dinámicos al guardarse.
keywords: bloque dinámico, bloques dinámicos, visibilidad, estado de visibilidad, voltear, estirar, búsqueda, parámetros, personalizado, propiedades de bloque, *U bloques, dinámico
from: 26b6aa80
---

## Lo que funciona

Un DWG hecho con bloques dinámicos se abre con ellos funcionando hasta este punto:

- **Sus nombres reales.** Un bloque dinámico aparece en el panel {{ui:Blocks}} con su propio nombre ("Receptáculo", "Fregadero"), no como un bloque `*U` sin nombre.
- **El estado en que se guardaron.** Cada referencia muestra exactamente lo que mostró el otro programa: el estado de visibilidad al que se configuró, estirada o volteada como se guardó.
- **Cambiar el estado de visibilidad.** Seleccione una referencia (o varias del mismo bloque), abra {{ui:Properties}} y, en la sección {{ui:Custom}}, elija otro estado de la lista {{ui:Visibility}}. La referencia muestra ese estado de inmediato, y sus atributos también: los que el estado oculta desaparecen, y los que muestra aparecen con sus valores. Una referencia conserva todos los valores, así que nada regresa vacío; {{ui:Properties}} lista los ocultos marcados como "oculto". {{key:Mod+Z}} devuelve el estado anterior en un solo paso.
- **Pinzamientos.** Un bloque dinámico seleccionado muestra sus propios pinzamientos donde están sus parámetros: un pequeño triángulo para el estado de visibilidad (haga clic para ver la lista de estados), flechas en los extremos de una distancia y una flecha doble para un volteo. Hoy solo actúa el pinzamiento de visibilidad; los demás lo indican en la barra de estado.
- **Los otros valores, solo lectura.** Debajo de la lista de visibilidad, {{ui:Custom}} también muestra las distancias, los ángulos de alineación, los estados de volteo y los puntos del bloque tal como los contiene el dibujo.
- **Edición de estados de visibilidad.** Abra el bloque con {{cmd:BEDIT}}: el editor muestra un estado, indicado en la barra sobre el dibujo (elija otro ahí). Escriba {{cmd:BVSTATE}} para cambiar, agregar (ocultando todo, mostrando todo o conservando lo que se muestra), renombrar o eliminar un estado; {{cmd:BVHIDE}} oculta los objetos seleccionados en el estado que se muestra; {{cmd:BVSHOW}} muestra los ocultos atenuados para que pueda hacer clic en los que quiera recuperar. Guarde el bloque: las referencias configuradas con un estado renombrado lo conservan con su nuevo nombre, y las configuradas con un estado eliminado muestran el primer estado.
- **Siguen dinámicos.** Guardados como DWG en la versión con la que llegó el dibujo, los bloques siguen siendo dinámicos, con el estado que usted eligió: el otro programa los abre como los mismos bloques dinámicos. Los estados de visibilidad que editó también se guardan: sus nuevos nombres, los estados que agregó y lo que muestra cada uno.

## Lo que es solo lectura o todavía no existe

| Todavía no existe | En su lugar, hoy |
|---|---|
| Cambiar distancias, ángulos o volteos (acciones de estirar, desplazar, voltear) | Se muestran en solo lectura en {{ui:Custom}}; edítelos en el programa que creó el bloque. |
| Parámetros de búsqueda, XY, rotación y polares | No se leen todavía: la referencia se muestra como se guardó. |
| Arrastrar los pinzamientos de distancia, volteo y punto | Muestran dónde están los parámetros; el pinzamiento de visibilidad y la lista {{ui:Visibility}} en Propiedades cambian de estado. |
| Crear bloques dinámicos (agregar parámetros, o estados de visibilidad a un bloque que no los tiene) | Los bloques que crea en CadCraft son bloques normales; {{cmd:BPARAMETER}} lo indica. |
| Agregar o borrar objetos de un bloque con estados de visibilidad en el editor de bloques | Entonces el bloque se guarda como bloque normal (el editor lo indica al cerrarse). |
| Conservarlos dinámicos en otra versión de DWG o en DXF | Se guardan como bloques normales que muestran el estado que usted eligió, y el guardado lo indica. |

:::note
Mover o cambiar objetos en {{cmd:BEDIT}} mantiene dinámico un bloque con estados de visibilidad. Un bloque sin estados, o uno cuyos objetos se agregaron o borraron en el editor, se convierte en bloque normal.
:::
