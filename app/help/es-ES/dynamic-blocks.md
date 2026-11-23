---
title: Bloques dinámicos
summary: Qué hace CadCraft con los bloques dinámicos de un DWG: conservan sus nombres reales, muestran el estado en que se guardaron, cambian su estado de visibilidad, muestran sus otros valores y siguen siendo dinámicos al guardar.
keywords: bloque dinámico, bloques dinámicos, visibilidad, estado de visibilidad, volteo, estirar, búsqueda, parámetros, personalizado, propiedades de bloque, bloques *u, dinámico
from: dea2ee7c
---

## Qué funciona

Un DWG creado con bloques dinámicos se abre con estas funciones operativas:

- **Sus nombres reales.** Un bloque dinámico aparece en el panel {{ui:Bloques}} con su propio nombre ("Receptacle", "Sink"), no como un bloque `*U` sin nombre.
- **El estado en que se guardaron.** Cada referencia muestra exactamente lo que mostró el otro programa: el estado de visibilidad al que se configuró, estirada o volteada tal como se guardó.
- **Cambio del estado de visibilidad.** Seleccione una referencia (o varias del mismo bloque), abra {{ui:Propiedades}} y, en la sección {{ui:Personalizado}}, elija otro estado de la lista {{ui:Visibilidad}}. La referencia muestra ese estado de inmediato, y también sus atributos: los que el estado oculta desaparecen, y los que muestra aparecen con sus valores. Una referencia conserva todos sus valores, así que nada queda vacío; {{ui:Propiedades}} muestra los ocultos marcados como "oculto". {{key:Mod+Z}} devuelve el estado anterior en un solo paso.
- **Pinzamientos.** Un bloque dinámico seleccionado muestra sus propios pinzamientos allí donde están sus parámetros: un pequeño triángulo para el estado de visibilidad (haga clic para ver la lista de estados), flechas en los extremos de una distancia y una doble flecha para un volteo. Hoy solo actúa el pinzamiento de visibilidad; los demás lo indican en la barra de estado.
- **Los demás valores, solo lectura.** Debajo de la lista de visibilidad, {{ui:Personalizado}} también muestra las distancias, los ángulos de alineación, los estados de volteo y los puntos del bloque tal como los tiene el dibujo.
- **Edición de los estados de visibilidad.** Abra el bloque con {{cmd:BEDIT}}: el editor muestra un estado, indicado en la barra sobre el dibujo (elija otro allí). Escriba {{cmd:BVSTATE}} para cambiar de estado, añadir uno (ocultando todo, mostrando todo o conservando lo visible), renombrarlo o eliminarlo; {{cmd:BVHIDE}} oculta los objetos seleccionados en el estado visible; {{cmd:BVSHOW}} muestra los ocultos atenuados para que pueda hacer clic en los que desea recuperar. Al guardar el bloque, las referencias asignadas a un estado renombrado lo conservan con su nuevo nombre, y las asignadas a un estado eliminado muestran el primer estado.
- **Siguen siendo dinámicos.** Guardados como DWG en la versión con la que llegó el dibujo, los bloques siguen siendo dinámicos con el estado que eligió: el otro programa los abre como los mismos bloques dinámicos. Los estados de visibilidad que editó también se guardan: sus nuevos nombres, los estados que añadió y lo que muestra cada uno.

## Qué es de solo lectura o aún no existe

| Aún no existe | En su lugar, hoy |
|---|---|
| Cambiar distancias, ángulos o volteos (acciones de estirar, mover o voltear) | Se muestran en solo lectura en {{ui:Personalizado}}; edítelos en el programa que creó el bloque. |
| Parámetros de búsqueda, XY, de rotación y polares | No se leen todavía: la referencia se muestra tal como se guardó. |
| Arrastrar los pinzamientos de distancia, volteo y punto | Muestran dónde están los parámetros; el pinzamiento de visibilidad y la lista {{ui:Visibilidad}} de Propiedades cambian de estado. |
| Crear bloques dinámicos del tipo de otro programa (estirar, voltear, búsqueda) | Los bloques que crea en CadCraft son bloques normales; {{cmd:BPARAMETER}} lo indica. Sus propios parámetros y varios parámetros de visibilidad están en el administrador de parámetros (véase "Sus propios parámetros y estados de visibilidad" más abajo). |
| Añadir o borrar objetos de un bloque con estados de visibilidad en el editor de bloques | El bloque se guarda entonces como bloque normal (el editor lo indica al cerrarse). |
| Mantenerlos dinámicos en otra versión de DWG o en DXF | Se guardan como bloques normales que muestran el estado elegido, y el guardado lo indica. |

:::note
Mover o cambiar objetos en {{cmd:BEDIT}} mantiene dinámico un bloque con estados de visibilidad. Un bloque sin estados, o uno cuyos objetos se añadieron o borraron en el editor, pasa a ser un bloque normal.
:::

## Sus propios parámetros y estados de visibilidad

Un bloque que crea en CadCraft puede tener sus propios parámetros y **varios** parámetros de visibilidad, cada uno con sus propios estados. Escriba {{cmd:BPARAMS}} (o `BPM`) para abrir el **administrador de parámetros** del bloque que edita en {{cmd:BEDIT}}, del bloque de la referencia seleccionada, o del bloque que indique.

- **Parámetros**: un nombre, un tipo (número, longitud, ángulo, recuento, sí/no) y un valor o una fórmula sobre otros parámetros (`w * 2`, `if(n > 3, 1, 0)`). {{ui:Equivale a}} muestra el resultado. Una fórmula que no funciona, o un valor que no encaja con su tipo (un recuento de 1,5), se rechaza y el administrador indica el motivo; no cambia nada más.
- **Parámetros de visibilidad**: {{ui:Añadir parámetro de visibilidad}} crea uno con un primer estado. Cada estado puede renombrarse, eliminarse (el último siempre permanece) o recibir un número de "se muestra cuando". Una fórmula elige el estado a partir de los parámetros (el estado cuyo número coincide, o si no, el estado en esa posición de la lista); sin fórmula, cada referencia elige el suyo.
- **Colocar objetos en un estado**: en el editor de bloques seleccione los objetos, escriba {{cmd:BPARAMS}} y haga clic en {{ui:Coloque aquí los objetos seleccionados}} en el estado. Los objetos que ningún parámetro de visibilidad enumera se muestran siempre.
- **Esta referencia**: iniciado sobre una referencia seleccionada, el administrador también muestra los valores y estados propios de esa referencia.

Fuera del editor de bloques, cada cambio es un paso de deshacer. En el editor de bloques, los cambios son los del editor: {{ui:Guardar bloque}} los conserva. `-BPARAMS` pregunta lo mismo en la línea de comandos.

**En el archivo.** DWG y DXF conservan los parámetros, qué objetos están en cada estado y los valores propios de cada referencia, en los registros propios de CadCraft; al abrir el archivo de nuevo en CadCraft, todo vuelve. Otro programa ve cada referencia como el bloque con todos sus objetos, ya que un DWG admite como máximo un parámetro de visibilidad por bloque de su propio tipo. Una referencia que otro programa movió, o un bloque cuyos objetos cambió, vuelve sin las partes que ya no coinciden (no se adivina nada).
