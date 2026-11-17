---
title: Seleccionar objetos
summary: Designe objetos uno por uno, con una ventana o una captura, antes o durante un comando, y quite objetos de una selección.
keywords: seleccionar, selección, ventana, captura, sustantivo-verbo, designar, todo, último, anterior, borde, quitar, agregar, tab, ciclar, superpuestos, qselect, selección rápida, filtro, seleccionar similares, selectsimilar, shift, deseleccionar, ctrl+a, pickfirst
from: 676508c7
---

## Lo que aprenderá

Cómo elegir los objetos sobre los que trabaja un comando. CadCraft tiene dos formas de trabajar, y ambas son válidas:

- **Seleccione primero y luego el comando** (sustantivo-verbo). Seleccione objetos, luego escriba `M` para Desplazar. El comando toma su selección y pasa directo a su siguiente pregunta.
- **Primero el comando y luego seleccione** (verbo-sustantivo). Escriba `M`; el comando pide `Designe objetos:`; usted selecciona y pulsa {{key:Enter}}.

## Elegir un objeto a la vez

1. Sin ningún comando en curso, pulse una línea. Queda resaltada y aparecen sus pinzamientos (pequeños cuadros). El panel derecho muestra sus propiedades.
2. Pulse otro objeto. Se agrega a la selección.
3. Mantenga presionada {{key:Shift}} y pulse un objeto seleccionado. Sale de la selección.
4. Pulse {{key:Esc}}. Nada queda seleccionado.

## Ventana y captura

Pulse una vez en un espacio vacío, mueva el puntero y pulse de nuevo: se forma un recuadro. Si presiona y arrastra, se dibuja en su lugar un lazo a mano alzada, con los mismos dos tipos (vea [Selección con lazo](topic:lasso-selection); la configuración puede hacer que un arrastre dibuje el rectángulo). Qué objetos obtiene depende de la dirección:

| Usted mueve | Recuadro | Selecciona |
|---|---|---|
| De izquierda a derecha | Ventana | Solo objetos **completamente dentro** del recuadro |
| De derecha a izquierda | Captura | Objetos dentro del recuadro **y** objetos que toca |

1. Dibuje algunas líneas y círculos superpuestos.
2. Pulse un espacio vacío a la izquierda de algunos objetos, mueva a la derecha y pulse de nuevo. Solo se seleccionan los objetos completamente dentro.
3. Pulse {{key:Esc}}.
4. Pulse un espacio vacío a la derecha, mueva a la izquierda cruzando algunos objetos y pulse de nuevo. Se selecciona todo lo que toca el recuadro.
5. Mantenga presionada {{key:Shift}} y dibuje un recuadro o un lazo sobre algunos objetos seleccionados. Salen de la selección.

## Seleccione y luego ejecute un comando

1. Seleccione dos círculos.
2. Escriba `M` y pulse {{key:Enter}}.

El historial dice `2 encontrados`, y la indicación pasa directo a `Precise el punto base`. Termine el desplazamiento (vea [Desplazar, copiar, girar, escalar y simetría](topic:modify-objects)).

Al terminar un comando, la selección se borra, de modo que el siguiente comando empieza limpio.

Comandos que toman una selección de este modo: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} y {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} y {{cmd:CHAMFER}} siempre le piden designar objetos uno por uno; {{cmd:TRIM}} y {{cmd:EXTEND}} aceptan un punto o una trayectoria que arrastra sobre las piezas (vea [Recortar y alargar](topic:trim-and-extend)).

## Primero el comando, luego seleccione

1. Asegúrese de que no haya nada seleccionado ({{key:Esc}}).
2. Escriba `E` y pulse {{key:Enter}}. La indicación dice `Designe objetos:`.
3. Pulse objetos, o arrastre ventanas y capturas. El historial cuenta cada designación (`1 encontrado`, `3 encontrados`).
4. Pulse {{key:Enter}}, pulse {{key:Space}} o haga clic derecho para terminar de seleccionar.

Los objetos se borran y el historial indica cuántos.

En una indicación `Designe objetos:` también puede escribir:

- `ALL`, y luego {{key:Enter}}: todos los objetos que puede editar en la pestaña abierta.
- `L` (o `LAST`), y luego {{key:Enter}}: el objeto dibujado más recientemente.
- `P` (Anterior): los objetos sobre los que trabajó el último comando, si todavía existen.
- `F` (Borde): pulse o escriba puntos a lo largo de una línea; se agrega cada objeto que la línea cruce. Pulse {{key:Enter}} para terminar el borde; `U` quita su último punto.
- `W` (Ventana) o `C` (Captura): dos esquinas, en la dirección que arrastre.
- `R` (Quitar): desde ahora, los clics, ventanas y bordes sacan objetos. La indicación dice `Quite objetos:`. `A` (Agregar) vuelve al modo anterior.
- `?`: la lista de estas opciones en el historial.

Estas opciones no se muestran en la indicación, igual que en AutoCAD.

## Elegir uno de varios objetos superpuestos

Donde los objetos se superponen o se tocan, un clic toma el más cercano. Para obtener otro:

1. Mantenga el puntero quieto sobre el lugar.
2. Pulse {{key:Tab}}. El siguiente objeto ahí se resalta, y la barra de estado dice cuál es ("2 de 3: Línea en la capa Muros").
3. Pulse {{key:Tab}} de nuevo hasta resaltar el que quiere, y luego haga clic sin mover.

Al mover el puntero se empieza de nuevo. Esto funciona sin comando en curso, en `Designe objetos:` y en cualquier momento en que un comando le pida elegir un objeto.

## Seleccionar por una regla: Selección rápida

{{cmd:QSELECT}} (`QS`, o {{ui:Edición}} › {{ui:Más}} › {{ui:Selección rápida}}) selecciona todos los objetos que cumplen una regla, como cada círculo con un radio menor de 50, o cada referencia de bloque llamada DOOR-900.

1. Abra {{ui:Selección rápida}}.
2. Elija {{ui:Tipo de objeto}} (la lista cuenta cada tipo) y luego {{ui:Propiedad}}: {{ui:Capa}}, {{ui:Color}}, y para algunos tipos {{ui:Longitud}}, {{ui:Radio}}, {{ui:Área}}, {{ui:Altura de texto}}, {{ui:Contenido del texto}}, {{ui:Nombre de bloque}} o {{ui:Patrón de sombreado}}.
3. Elija {{ui:Operador}} y {{ui:Valor}}. `*` coincide con comodines (`DOOR-*`); {{ui:Seleccionar todo}} toma todos los objetos del tipo. El conteo de la parte inferior muestra cuántos coinciden mientras elige.
4. {{ui:Modo de aplicación}}: incluir las coincidencias, o todo lo demás. {{ui:Aplicar a}} {{ui:Selección actual}} reduce lo que tenía seleccionado; {{ui:Añadir a la selección actual}} agrega a ella.
5. Pulse {{ui:Seleccionar}}. Luego ejecute el comando que quiera: usará la selección.

## Seleccionar similares

Seleccione uno o más objetos y escriba {{cmd:SELECTSIMILAR}} (`SIM`), o elija {{ui:Edición}} › {{ui:Más}} › {{ui:Seleccionar similares}}. Se selecciona cada objeto del mismo tipo, en la misma capa y con el mismo color; las referencias de bloque también necesitan el mismo bloque, y los sombreados el mismo patrón. Escriba `SE` en su indicación `Designe objetos` para elegir qué debe coincidir.

## Seleccionar ahora, usar después

Escriba `SELECT` y pulse {{key:Enter}}, elija objetos con cualquiera de las formas anteriores y pulse {{key:Enter}}. Quedan seleccionados para el siguiente comando, y `P` los vuelve a designar en una indicación `Designe objetos:` posterior.

## Seleccionar todo

Sin ningún comando en curso, pulse {{key:Mod+A}}, o elija {{ui:Seleccionar todo}} en el menú {{ui:Edición}} › {{ui:Más}} de la barra de herramientas, para seleccionar todos los objetos que puede editar en la pestaña abierta. Si ha escrito algo en la línea de comandos, {{key:Mod+A}} selecciona ese texto: pulse primero {{key:Esc}} para borrarlo. En una indicación `Designe objetos:`, escriba `ALL`. {{ui:No seleccionar nada}} en el mismo menú, o {{key:Esc}}, borra la selección.

:::tip
Si prefiere que cada clic reemplace la selección (y que {{key:Shift}} la añada), configure {{ui:Clic en objetos}} en {{ui:Sustituye la selección}} en [Configuración de CadCraft](topic:settings).
:::

## Lo que no se puede seleccionar

- Objetos en una capa que está **desactivada**, **inutilizada** o **bloqueada**. Los objetos bloqueados siguen visibles, y todavía puede usar referencias a ellos, pero no puede seleccionarlos ni cambiarlos.
- En una pestaña de hoja, el modelo que se muestra dentro de una ventana gráfica. Usted selecciona los objetos propios de la hoja (el cajetín, las notas, los marcos de las ventanas gráficas). Para editar el modelo, vaya a la pestaña {{ui:Modelo}}.

## Borrar rápidamente

Seleccione objetos y pulse {{key:Delete}} (o {{key:Backspace}} cuando la línea de comandos no tenga el cursor). En un teclado de Mac, la tecla marcada como delete funciona una vez que ha hecho clic en el dibujo; mientras la línea de comandos tiene el cursor, pulse fn y delete juntas. Esto ejecuta {{cmd:ERASE}} sobre la selección. Si no pasa nada, ha escrito algo en la línea de comandos: pulse {{key:Esc}}, o escriba `E` y pulse {{key:Enter}} en su lugar.

## Errores comunes

- **La ventana tomó muy poco.** Arrastró de izquierda a derecha, lo que solo toma lo que está completamente dentro. Arrastre de derecha a izquierda para una captura.
- **Un clic en un espacio vacío inició un recuadro.** Un clic en un espacio vacío inicia una ventana; el segundo clic la termina. Pulse {{key:Esc}} o haga clic derecho para descartarla.
- **Un clic en un espacio vacío soltó la selección.** Así es, a menos que mantenga presionada {{key:Shift}}. Para conservar la selección con ese clic y borrarla solo con {{key:Esc}}, configure {{ui:Al pulsar en un lugar vacío}} en {{ui:Mantiene la selección}} en [Configuración de CadCraft](topic:settings#clicking-an-empty-spot).
- **El comando usó objetos que no quería.** Algo seguía seleccionado al iniciarlo. Pulse {{key:Esc}} antes de un comando para empezar sin nada seleccionado.
- **No hay nada seleccionado después de un comando.** Es intencional: un comando terminado borra la selección.
