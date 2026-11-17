---
title: Seleccionar objetos
summary: Elegir objetos uno a uno, con una ventana o un cruce, antes o durante un comando, y quitar objetos de una selección.
keywords: seleccionar, selección, ventana, cruce, sustantivo-verbo, designar, todo, último, anterior, valla, quitar, añadir, tab, ciclar, solapados, qselect, selección rápida, filtro, seleccionar similares, selectsimilar, shift, deseleccionar, ctrl+a, pickfirst
from: 676508c7
---

## Lo que aprenderá

Cómo elegir los objetos sobre los que actúa un comando. CadCraft tiene dos formas de trabajar, y ambas son válidas:

- **Seleccionar primero, después el comando** (sustantivo-verbo). Seleccione objetos y escriba `M` para Mover. El comando toma su selección y pasa directamente a su siguiente pregunta.
- **Comando primero, después seleccionar** (verbo-sustantivo). Escriba `M`; el comando pregunta `Seleccione objetos:`; seleccione y pulse {{key:Enter}}.

## Designar un objeto cada vez

1. Sin ningún comando en marcha, haga clic en una línea. Queda resaltada y aparecen sus agarres (pequeños cuadrados). El panel derecho muestra sus propiedades.
2. Haga clic en otro objeto. Se añade a la selección.
3. Mantenga pulsado {{key:Shift}} y haga clic en un objeto seleccionado. Sale de la selección.
4. Pulse {{key:Esc}}. No queda nada seleccionado.

## Ventana y cruce

Haga clic una vez en un espacio vacío, mueva el puntero y haga clic de nuevo: se dibuja un rectángulo. Si pulsa y arrastra, se dibuja en cambio un lazo a mano alzada, con los mismos dos tipos (véase [Selección con lazo](topic:lasso-selection); los parámetros pueden hacer que un arrastre dibuje el rectángulo). Los objetos que obtiene dependen de la dirección:

| Usted mueve | Tipo | Selecciona |
|---|---|---|
| De izquierda a derecha | Ventana | Solo los objetos **totalmente dentro** de la caja |
| De derecha a izquierda | Cruce | Los objetos dentro de la caja **y** los que toca |

1. Dibuje unas cuantas líneas y círculos solapados.
2. Haga clic en un espacio vacío a la izquierda de algunos objetos, mueva a la derecha y haga clic de nuevo. Solo se seleccionan los objetos completamente dentro.
3. Pulse {{key:Esc}}.
4. Haga clic en un espacio vacío a la derecha, mueva a la izquierda cruzando algunos objetos y haga clic de nuevo. Se selecciona todo lo que toca la caja.
5. Mantenga pulsado {{key:Shift}} y dibuje una caja o un lazo sobre algunos objetos seleccionados. Salen de la selección.

## Seleccionar y luego ejecutar un comando

1. Seleccione dos círculos.
2. Escriba `M` y pulse {{key:Enter}}.

El historial dice `2 encontrados`, y la indicación pasa directamente a `Especifique el punto base`. Termine el desplazamiento (véase [Mover, copiar, girar, escalar y simetría](topic:modify-objects)).

Cuando termina un comando, la selección se borra, de modo que el siguiente comando empieza de cero.

Comandos que toman una selección de este modo: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} y {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} y {{cmd:CHAMFER}} siempre le piden designar los objetos uno a uno; {{cmd:TRIM}} y {{cmd:EXTEND}} aceptan una designación o un trayecto que arrastra a través de los trozos (véase [Recortar y prolongar](topic:trim-and-extend)).

## Ejecutar un comando y luego seleccionar

1. Asegúrese de que no hay nada seleccionado ({{key:Esc}}).
2. Escriba `E` y pulse {{key:Enter}}. La indicación dice `Seleccione objetos:`.
3. Haga clic en objetos, o arrastre ventanas y cruces. El historial cuenta cada designación (`1 encontrado`, `3 encontrados`).
4. Pulse {{key:Enter}}, pulse {{key:Space}} o haga clic derecho para terminar la selección.

Los objetos se borran y el historial indica cuántos.

En una indicación `Seleccione objetos:` también puede escribir:

- `ALL`, y luego {{key:Enter}}: todos los objetos que puede editar en la pestaña abierta.
- `L` (o `LAST`), y luego {{key:Enter}}: el objeto dibujado más recientemente.
- `P` (Anterior): los objetos sobre los que actuó el último comando, si siguen ahí.
- `F` (Valla): haga clic o escriba puntos a lo largo de una línea; se añade cada objeto que cruza la línea. Pulse {{key:Enter}} para terminar la valla; `U` quita el último punto.
- `W` (Ventana) o `C` (Cruce): dos esquinas, en el sentido que arrastre.
- `R` (Quitar): a partir de ahora, los clics, las ventanas y las vallas quitan objetos **fuera**. La indicación dice `Quitar objetos:`. `A` (Añadir) vuelve a cambiar.
- `?`: la lista de estas opciones en el historial.

Estas opciones no aparecen en la indicación, como en AutoCAD.

## Designar uno de varios objetos superpuestos

Donde los objetos se solapan o se tocan, un clic toma el más cercano. Para obtener otro:

1. Mantenga el puntero quieto sobre el lugar.
2. Pulse {{key:Tab}}. El siguiente objeto que hay allí queda resaltado, y la barra de estado indica cuál es («2 de 3: Línea en la capa Walls»).
3. Pulse {{key:Tab}} de nuevo hasta que quede resaltado el que quiere, y luego haga clic sin mover.

Al mover el puntero se empieza de nuevo. Esto funciona sin ningún comando en marcha, en `Seleccione objetos:` y en cualquier momento en que un comando le pida designar un solo objeto.

## Seleccionar según una regla: Selección rápida

{{cmd:QSELECT}} (`QS`, o {{ui:Edición}} › {{ui:Más}} › {{ui:Selección rápida}}) selecciona cada objeto que cumple una regla, como todos los círculos con radio menor que 50, o todas las referencias de bloque llamadas DOOR-900.

1. Abra {{ui:Selección rápida}}.
2. Elija {{ui:Tipo de objeto}} (la lista cuenta cada tipo) y luego {{ui:Propiedad}}: {{ui:Capa}}, {{ui:Color}}, y para algunos tipos {{ui:Longitud}}, {{ui:Radio}}, {{ui:Área}}, {{ui:Altura de texto}}, {{ui:Contenido del texto}}, {{ui:Nombre de bloque}} o {{ui:Patrón de sombreado}}.
3. Elija {{ui:Operador}} y {{ui:Valor}}. `*` coincide con comodines (`DOOR-*`); {{ui:Seleccionar todo}} toma cada objeto del tipo. El recuento de la parte inferior muestra cuántos coinciden a medida que elige.
4. {{ui:Modo de aplicación}}: incluir las coincidencias, o todo lo demás. {{ui:Aplicar a}} {{ui:Selección actual}} restringe lo que tenía seleccionado; {{ui:Añadir a la selección actual}} lo amplía.
5. Haga clic en {{ui:Seleccionar}}. Después ejecute el comando que quiera: usará la selección.

## Seleccionar similares

Seleccione uno o varios objetos y escriba {{cmd:SELECTSIMILAR}} (`SIM`), o elija {{ui:Edición}} › {{ui:Más}} › {{ui:Seleccionar similares}}. Se seleccionan todos los objetos del mismo tipo, en la misma capa y con el mismo color; las referencias de bloque también necesitan el mismo bloque, y las tramas, el mismo patrón. Escriba `SE` en su indicación `Seleccione objetos` para elegir qué debe coincidir.

## Seleccionar ahora, usar después

Escriba `SELECT` y pulse {{key:Enter}}, elija objetos con cualquiera de las formas anteriores y pulse {{key:Enter}}. Quedan seleccionados para el siguiente comando, y `P` vuelve a elegirlos en una indicación `Seleccione objetos:` posterior.

## Seleccionar todo

Sin ningún comando en marcha, pulse {{key:Mod+A}}, o elija {{ui:Seleccionar todo}} en el menú {{ui:Edición}} › {{ui:Más}} de la barra de herramientas, para seleccionar cada objeto que pueda editar en la pestaña abierta. Si ha escrito algo en la línea de comandos, {{key:Mod+A}} selecciona ese texto: pulse antes {{key:Esc}} para borrarlo. En una indicación `Seleccione objetos:`, escriba `ALL`. {{ui:No seleccionar nada}} en el mismo menú, o {{key:Esc}}, borra la selección.

:::tip
Si prefiere que cada clic sustituya la selección (y que {{key:Shift}} la amplíe), ponga {{ui:Clic en objetos}} en {{ui:Sustituye la selección}} en [Parámetros de CadCraft](topic:settings).
:::

## Lo que no se puede seleccionar

- Objetos de una capa que está **desactivada**, **inmovilizada** o **bloqueada**. Los objetos bloqueados siguen visibles, y todavía puede referenciarlos, pero no puede seleccionarlos ni modificarlos.
- En una pestaña de hoja, el modelo que se muestra dentro de una ventana gráfica. Se seleccionan los objetos propios de la hoja (el cajetín, las notas, los marcos de las ventanas gráficas). Para editar el modelo, vaya a la pestaña {{ui:Modelo}}.

## Borrar rápidamente

Seleccione objetos y pulse {{key:Delete}} (o {{key:Backspace}} cuando la línea de comandos no tenga el cursor). En un teclado de Mac, la tecla marcada como delete funciona una vez que haya hecho clic en el dibujo; mientras la línea de comandos tenga el cursor, pulse fn y delete a la vez. Esto ejecuta {{cmd:ERASE}} sobre la selección. Si no pasa nada, ha escrito algo en la línea de comandos: pulse {{key:Esc}}, o escriba `E` y pulse {{key:Enter}} en su lugar.

## Errores habituales

- **La ventana tomó muy poco.** Arrastró de izquierda a derecha, que solo toma lo que queda totalmente dentro. Arrastre de derecha a izquierda para un cruce.
- **Un clic en un espacio vacío inició una caja.** Un clic en un espacio vacío inicia una ventana; el segundo clic la termina. Pulse {{key:Esc}} o haga clic derecho para descartarla.
- **Un clic en un espacio vacío soltó la selección.** Así ocurre, salvo que mantenga pulsado {{key:Shift}}. Para conservar la selección con ese clic y borrarla solo con {{key:Esc}}, ponga {{ui:Al pulsar en un lugar vacío}} en {{ui:Mantiene la selección}} en [Parámetros de CadCraft](topic:settings#clicking-an-empty-spot).
- **El comando usó objetos que no pretendía.** Algo seguía seleccionado cuando lo inició. Pulse {{key:Esc}} antes de un comando para empezar sin nada seleccionado.
- **Tras un comando no queda nada seleccionado.** Es intencionado: un comando terminado borra la selección.
