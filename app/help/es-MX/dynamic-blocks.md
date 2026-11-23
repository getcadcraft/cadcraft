---
title: Bloques dinámicos
summary: Lo que CadCraft hace con los bloques dinámicos de un DWG: conservan sus nombres reales, muestran el estado en que se guardaron, cambian de estado de visibilidad, muestran sus otros valores y siguen siendo dinámicos al guardarse.
keywords: bloque dinámico, bloques dinámicos, visibilidad, estado de visibilidad, voltear, estirar, búsqueda, parámetros, personalizado, propiedades de bloque, bloques *u, dinámico
from: dea2ee7c
---

## Qué funciona

Un DWG hecho con bloques dinámicos se abre con ellos funcionando hasta este punto:

- **Sus nombres reales.** Un bloque dinámico aparece en el panel {{ui:Blocks}} con su propio nombre ("Receptacle", "Sink"), no como un bloque `*U` sin nombre.
- **El estado en que se guardaron.** Cada referencia muestra exactamente lo que mostró el otro programa: el estado de visibilidad al que se ajustó, estirada o volteada como se guardó.
- **Cambio del estado de visibilidad.** Seleccione una referencia (o varias del mismo bloque), abra {{ui:Properties}} y, en la sección {{ui:Custom}}, elija otro estado de la lista {{ui:Visibility}}. La referencia muestra ese estado de inmediato, y sus atributos también: los que el estado oculta desaparecen, y los que muestra aparecen con sus valores. Una referencia conserva todos los valores, así que nada queda vacío; {{ui:Properties}} lista los ocultos marcados como "oculto". {{key:Mod+Z}} devuelve el estado anterior en un paso.
- **Pinzamientos.** Un bloque dinámico seleccionado muestra sus propios pinzamientos donde están sus parámetros: un pequeño triángulo para el estado de visibilidad (haga clic para ver la lista de estados), flechas en los extremos de una distancia, y una doble flecha para un volteo. Hoy solo actúa el pinzamiento de visibilidad; los demás lo indican en la barra de estado.
- **Los otros valores, solo lectura.** Debajo de la lista de visibilidad, {{ui:Custom}} también muestra las distancias, los ángulos de alineación, los estados de volteo y los puntos del bloque tal como los tiene el dibujo.
- **Edición de estados de visibilidad.** Abra el bloque con {{cmd:BEDIT}}: el editor muestra un estado, con nombre en la barra sobre el dibujo (elija otro ahí). Escriba {{cmd:BVSTATE}} para cambiar, agregar (ocultando todo, mostrando todo o conservando lo que se ve), renombrar o eliminar un estado; {{cmd:BVHIDE}} oculta los objetos seleccionados en el estado que se ve; {{cmd:BVSHOW}} muestra los ocultos en tenue para que haga clic en los que quiere restaurar. Guarde el bloque: las referencias ajustadas a un estado renombrado lo conservan con su nuevo nombre, y las ajustadas a un estado eliminado muestran el primer estado.
- **Siguen dinámicos.** Al guardar como DWG en la versión con la que llegó el dibujo, los bloques siguen siendo dinámicos, con el estado que usted eligió: el otro programa los abre como los mismos bloques dinámicos. Los estados de visibilidad que editó también se guardan: sus nuevos nombres, los estados que agregó y lo que muestra cada uno.

## Qué es solo lectura o todavía no existe

| Todavía no | En su lugar, hoy |
|---|---|
| Cambiar distancias, ángulos o volteos (acciones de estirar, mover, voltear) | Se muestran de solo lectura en {{ui:Custom}}; edítelos en el programa que creó el bloque. |
| Parámetros de búsqueda (lookup), XY, rotación y polares | No se leen aún: la referencia se muestra como se guardó. |
| Arrastrar los pinzamientos de distancia, volteo y punto | Muestran dónde están los parámetros; el pinzamiento de visibilidad y la lista {{ui:Visibility}} de Propiedades cambian de estado. |
| Crear bloques dinámicos del tipo de otro programa (estirar, voltear, búsqueda) | Los bloques que crea en CadCraft son bloques normales; {{cmd:BPARAMETER}} lo indica. Sus propios parámetros y varios parámetros de visibilidad están en el administrador de parámetros (vea "Sus propios parámetros y estados de visibilidad" abajo). |
| Agregar o borrar objetos de un bloque con estados de visibilidad en el editor de bloques | El bloque se guarda entonces como bloque normal (el editor lo indica al cerrarse). |
| Mantenerlos dinámicos en otra versión de DWG o en DXF | Se guardan como bloques normales que muestran el estado elegido, y el guardado lo indica. |

:::note
Mover o cambiar objetos en {{cmd:BEDIT}} mantiene dinámico un bloque con estados de visibilidad. Un bloque sin estados, o uno al que se agregaron o borraron objetos en el editor, se convierte en bloque normal.
:::

## Sus propios parámetros y estados de visibilidad

Un bloque que crea en CadCraft puede llevar sus propios parámetros y **varios** parámetros de visibilidad, cada uno con sus estados. Escriba {{cmd:BPARAMS}} (o `BPM`) para abrir el **Administrador de parámetros** del bloque que está editando en {{cmd:BEDIT}}, del bloque de la referencia seleccionada, o del bloque que indique.

- **Parámetros**: un nombre, un tipo (número, longitud, ángulo, conteo, sí/no), y un valor o una fórmula sobre otros parámetros (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Comes to}} muestra el resultado. Una fórmula que no funciona, o un valor que no encaja en su tipo (un conteo de 1.5), se rechaza y el administrador indica por qué; nada más cambia.
- **Parámetros de visibilidad**: {{ui:Add visibility parameter}} crea uno con un primer estado. Cada estado puede renombrarse, quitarse (el último siempre queda) o recibir un número de "se muestra cuando". Una fórmula elige el estado a partir de los parámetros (el estado cuyo número coincide, si no, el estado en ese lugar de la lista); sin fórmula, cada referencia elige el suyo.
- **Poner objetos en un estado**: en el editor de bloques seleccione los objetos, escriba {{cmd:BPARAMS}} y haga clic en {{ui:Put the selected objects here}} en el estado. Los objetos que ningún parámetro de visibilidad enumera siempre se muestran.
- **Esta referencia**: iniciado sobre una referencia seleccionada, el administrador también muestra los valores y estados propios de esa referencia.

Fuera del editor de bloques, cada cambio es un paso de deshacer. En el editor de bloques, los cambios son del editor: {{ui:Save block}} los conserva. `-BPARAMS` pide lo mismo en la línea de comandos.

**En el archivo.** DWG y DXF conservan los parámetros, qué objetos están en qué estado, y los valores propios de cada referencia, en los registros propios de CadCraft; al abrir el archivo otra vez en CadCraft, todo vuelve. Otro programa ve cada referencia como el bloque con todos sus objetos, ya que un DWG admite como máximo un parámetro de visibilidad por bloque de su propio tipo. Una referencia que otro programa movió, o un bloque cuyos objetos cambió, vuelve sin las partes que ya no coinciden (no se adivina nada).
