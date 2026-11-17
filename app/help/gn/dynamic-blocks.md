---
title: Bloques dinámicos
summary: Qué hace CadCraft con los bloques dinámicos de un DWG: conservan sus nombres reales, muestran el estado con que se guardaron, cambian de estado de visibilidad, muestran sus otros valores y siguen siendo dinámicos al guardar.
keywords: bloque dinámico, bloques dinámicos, visibilidad, estado de visibilidad, voltear, estirar, búsqueda, parámetros, personalizado, propiedades de bloque, bloques *u, dinámico
from: 26b6aa80
---

## Lo que funciona

Un DWG hecho con bloques dinámicos se abre con ellos funcionando hasta este punto:

- **Sus nombres reales.** Un bloque dinámico aparece en el panel {{ui:Bloques}} con su propio nombre ("Receptacle", "Sink"), no como un bloque `*U` sin nombre.
- **El estado con que se guardaron.** Cada referencia muestra exactamente lo que mostró el otro programa: el estado de visibilidad al que estaba puesta, estirada o volteada como se guardó.
- **Cambiar el estado de visibilidad.** Seleccione una referencia (o varias del mismo bloque), abra {{ui:Propiedades}} y, en la sección {{ui:Personalizado}}, elija otro estado de la lista de {{ui:Visibilidad}}. La referencia muestra ese estado de inmediato, y también sus atributos: los que el estado oculta desaparecen, y los que muestra aparecen con sus valores. Una referencia conserva todos los valores, así que nada vuelve vacío; {{ui:Propiedades}} enumera los ocultos marcados como "oculto". {{key:Mod+Z}} devuelve el estado anterior en un paso.
- **Agarres.** Un bloque dinámico seleccionado muestra sus propios agarres donde están sus parámetros: un pequeño triángulo para el estado de visibilidad (haga clic para ver la lista de estados), flechas en los extremos de una distancia, una flecha doble para un volteo. Hoy solo actúa el agarre de visibilidad; los demás lo indican en la barra de estado.
- **Los otros valores, solo lectura.** Debajo de la lista de visibilidad, {{ui:Personalizado}} también muestra las distancias, ángulos de alineación, estados de volteo y puntos del bloque tal como los tiene el dibujo.
- **Editar estados de visibilidad.** Abra el bloque con {{cmd:BEDIT}}: el editor muestra un estado, con su nombre en la barra sobre el dibujo (elija otro allí). Escriba {{cmd:BVSTATE}} para cambiar, agregar (ocultando todo, mostrando todo o conservando lo visible), renombrar o eliminar un estado; {{cmd:BVHIDE}} oculta los objetos seleccionados en el estado visible; {{cmd:BVSHOW}} muestra los ocultos atenuados para que pueda hacer clic en los que quiere devolver. Guarde el bloque: las referencias puestas en un estado renombrado lo conservan con su nuevo nombre, y las puestas en un estado eliminado muestran el primer estado.
- **Siguen dinámicos.** Guardados como DWG en la versión con que llegó el dibujo, los bloques siguen siendo dinámicos, con el estado que eligió: el otro programa los abre como los mismos bloques dinámicos. Los estados de visibilidad que editó también se guardan: sus nuevos nombres, los estados que agregó y lo que muestra cada uno.

## Lo que es solo lectura, o todavía no existe

| Todavía no existe | En cambio, hoy |
|---|---|
| Cambiar distancias, ángulos o volteos (acciones de estirar, mover, voltear) | Se muestran en solo lectura en {{ui:Personalizado}}; edítelos en el programa que creó el bloque. |
| Parámetros de búsqueda, XY, rotación y polares | No se leen todavía: la referencia se muestra como se guardó. |
| Arrastrar los agarres de distancia, volteo y punto | Muestran dónde están los parámetros; el agarre de visibilidad y la lista {{ui:Visibilidad}} en Propiedades cambian de estado. |
| Crear bloques dinámicos (agregar parámetros, o estados de visibilidad a un bloque que no los tiene) | Los bloques que crea en CadCraft son bloques simples; {{cmd:BPARAMETER}} lo indica. |
| Agregar o borrar objetos de un bloque con estados de visibilidad en el editor de bloques | Entonces el bloque se guarda como bloque simple (el editor lo indica al cerrarse). |
| Mantenerlos dinámicos en otra versión de DWG o en DXF | Se guardan como bloques simples que muestran el estado que eligió, y el guardado lo indica. |

:::note
Mover o cambiar objetos en {{cmd:BEDIT}} mantiene dinámico un bloque con estados de visibilidad. Un bloque sin estados, o uno cuyos objetos se agregaron o borraron en el editor, pasa a ser un bloque simple.
:::
