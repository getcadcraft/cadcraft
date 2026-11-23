---
title: Organizar un dibujo con capas
summary: Cree capas para muros, puertas y notas, asigne colores, haga actual una capa y desactive, congele, bloquee o excluya del trazado las capas.
keywords: capa, capas, la, capa actual, congelar, descongelar, bloquear, desactivar, activar, trazado, no trazar, color, propiedades de capa, layiso, layuniso, aislar, layoff, layfrz, laymcur, layon, laythw, renombrar, laymrg, fusionar, laydel, eliminar capa
from: ba9f0617
---

## Qué va a crear

Tres capas, Muros, Puertas y Notas, cada una con su propio color, con objetos dibujados en cada una y movidos de una a otra.

## El panel Capas

Las capas están en el panel de la izquierda, bajo {{ui:Capas}}. Cada fila muestra, de izquierda a derecha:

- un punto: relleno para la **capa actual**, donde van los objetos nuevos;
- una muestra de color;
- el nombre de la capa;
- cuatro botones: activar/desactivar (ojo), congelar (copo de nieve), bloquear (candado) y trazado (impresora).

Cada dibujo tiene una capa llamada `0`. Escriba `LA` y pulse {{key:Enter}} para ir al panel.

## Crear capas

1. Haga clic en {{ui:Capa nueva}} sobre la lista. Se abre un cuadro de nombre.
2. Escriba `Walls` y pulse {{key:Enter}} (o haga clic en {{ui:Añadir}}).

La barra de estado dice "Added layer Walls and made it current." La nueva capa recibe el color 7 (negro en el tema claro, blanco en el oscuro).

3. Haga clic de nuevo en {{ui:Capa nueva}}, escriba `Doors` y pulse {{key:Enter}}.
4. Haga clic de nuevo en {{ui:Capa nueva}}, escriba `Notes` y pulse {{key:Enter}}.

Notes es ahora la capa actual.

## Dar un color a cada capa

1. Haga clic en la muestra de color de la fila Walls. Se abre el selector de color de su sistema.
2. Elija un color y confirme.

La muestra y todo lo que esté en Walls y tenga el color {{ui:PorCapa}} cambian.

:::note
Un color elegido que coincide con uno de los 255 colores CAD estándar se guarda como ese número. Cualquier otro color se conserva exactamente en CadCraft, pero se guarda como el color estándar más cercano en un archivo DWG o DXF.
:::

## Dibujar en una capa

1. Haga clic en el nombre **Walls** de la lista. Su punto se rellena y la barra de estado dice "Current layer: Walls".
2. Dibuje un rectángulo (`REC`). Va a Walls.
3. Haga clic en **Doors** y dibuje un arco (`A`). Va a Doors.

También puede elegir la capa actual en {{ui:Parámetros actuales}} a la derecha (sin nada seleccionado), en {{ui:Capa}}.

## Mover objetos a otra capa

1. Seleccione los objetos.
2. En el panel derecho, elija la nueva capa en {{ui:Capa}}.

Pasan a esa capa y toman su color si su color es {{ui:PorCapa}}.

## Desactivar, congelar, bloquear y trazado

| Botón | Qué hace |
|---|---|
| Activar/desactivar (ojo) | Oculta los objetos de la capa. No se pueden ver, seleccionar ni referenciar. |
| Congelar (copo de nieve) | Igual que desactivar en CadCraft. Se mantiene separado porque otros programas los tratan de forma distinta, y el ajuste se guarda. |
| Bloquear (candado) | Los objetos siguen visibles y se puede hacer referencia a ellos, pero no se pueden seleccionar ni cambiar. Útil para un fondo sobre el que calca. |
| Trazado (impresora) | Cuando está pulsado, la capa se muestra en pantalla pero **no se incluye** en los trazados ni en los PDF. Úselo para líneas de construcción y notas para usted. |

Pase el ratón sobre un botón para ver qué hará ("Desactivar", "Congelar", "Bloquear", "No trazar esta capa").

No se puede desactivar la capa actual: la barra de estado dice "That is the current layer. Make another layer current first." Al hacer clic en el nombre de una capa para hacerla actual, también se activa y se descongela.

Cada cambio de capa, en el panel o mediante un comando, es un paso de deshacer: {{key:Mod+Z}} lo devuelve.

## Trabajar con capas señalando objetos

No necesita saber el nombre de una capa: señale un objeto que esté en ella. Escriba el comando, o abra {{ui:Herramientas}} en la parte superior del panel {{ui:Capas}}.

| Comando | Qué hace |
|---|---|
| {{cmd:LAYISO}} | Seleccione objetos y pulse {{key:Enter}}: solo sus capas quedan activas, y todas las demás se desactivan. Si la capa actual está desactivada, una de las capas aisladas pasa a ser la actual. |
| {{cmd:LAYUNISO}} | Vuelve a activar las capas que desactivó el último {{cmd:LAYISO}}, y devuelve la capa actual que cambió. |
| {{cmd:LAYOFF}} | Haga clic en objetos uno tras otro: la capa de cada uno se desactiva. Escriba `U` para deshacer el último, y {{key:Enter}} para terminar. |
| {{cmd:LAYFRZ}} | Lo mismo, pero congelando cada capa. |
| {{cmd:LAYMCUR}} | Haga clic en un objeto: su capa pasa a ser la actual (y se activa y descongela). Si ya hay un objeto seleccionado, se usa ese. |
| {{cmd:LAYON}} | Activa todas las capas. |
| {{cmd:LAYTHW}} | Descongela todas las capas. |

La capa actual nunca se desactiva ni se congela de esta forma: el historial lo indica, y antes puede hacer actual otra capa con {{cmd:LAYMCUR}}. Si señala una referencia de bloque, se usa la capa propia de la referencia.

## Renombrar, fusionar y eliminar capas

- {{cmd:RENAME}}: escriba `LA`, el nombre antiguo y el nuevo. Cada objeto de la capa lo sigue. (`B` renombra un bloque del mismo modo, con todas sus referencias.)
- {{cmd:LAYMRG}}: haga clic en un objeto de cada capa para fusionar (o escriba `N` y un nombre), pulse {{key:Enter}}, después designe la capa de destino y responda `Y`. Los objetos pasan al destino —en el modelo, en las hojas y dentro de los bloques— y las capas fusionadas desaparecen.
- {{cmd:LAYDEL}}: designe un objeto de la capa (o escriba `N` y su nombre) y responda `Y`. La capa desaparece **junto con todos los objetos que contiene**, en todas partes. No se pueden eliminar la capa 0, DEFPOINTS ni la capa actual.

Cada una es un paso de deshacer. Las tres están en {{ui:Herramientas}} en la parte superior del panel {{ui:Capas}}.

1. Haga clic en una línea de muro y escriba `LAYISO` y pulse {{key:Enter}}. Solo Walls queda activa.
2. Dibuje o cambie lo que necesite en Walls.
3. Escriba `LAYUNISO` y pulse {{key:Enter}}. Doors y Notes vuelven.

## Errores habituales

- **Las líneas nuevas fueron a una capa equivocada.** Compruebe qué punto está relleno antes de dibujar. Una capa nueva se vuelve actual en cuanto la añade.
- **Un objeto no se puede seleccionar.** Su capa está bloqueada, desactivada o congelada.
- **La capa sigue imprimiéndose en otro programa.** DXF R12 no puede guardar "no trazar". CadCraft conserva el ajuste para sí cuando el dibujo tiene una hoja, pero otros programas trazarán esa capa.
- **Nombres de capa en mayúsculas tras guardar.** DXF R12 guarda los nombres en mayúsculas, así que `Walls` vuelve como `WALLS`, y los espacios pasan a ser `_`. Un DWG guardado conserva los nombres tal como los escribió.
- **Renombrar, fusionar o eliminar una capa.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (también en {{ui:Herramientas}}): véase más abajo.

## Agrupar capas

Mantenga la lista corta colocando las capas en carpetas, por ejemplo Existente, Propuesto y Servicios. Cada carpeta se pliega, y sus interruptores activan o desactivan todas sus capas, las congelan o las bloquean juntas. La capa actual nunca se desactiva.

En {{ui:Herramientas}} del panel Capas, elija {{ui:Añadir grupos prefabricados}} para un conjunto pensado para pequeñas obras residenciales, {{ui:Agrupar por nombre}} para agrupar capas que comparten un prefijo (`E-Walls`, `E-Doors`), o {{ui:Grupo nuevo}}. Arrastre una capa sobre una carpeta, o use la lista encima de las capas para la capa actual. Escriba en {{ui:Buscar una capa}} para reducir la lista. `LAYGROUP` (`LG`) hace lo mismo en la línea de comandos.

Para renombrar un grupo, haga doble clic en su nombre (o selecciónelo y pulse {{key:F2}}), escriba el nuevo nombre y pulse {{key:Enter}}; {{key:Esc}} conserva el anterior, y {{cmd:UNDO}} lo devuelve. {{ui:Grupo nuevo}} está en {{ui:Herramientas}} del panel Capas.

Las capas en sí no cambian, así que otros programas CAD las ven como una lista plana normal. CadCraft guarda los grupos en el archivo.
