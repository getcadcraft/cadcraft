---
title: Organizar un dibujo con capas
summary: Cree capas para muros, puertas y notas, asigne colores, haga una capa actual y apague, inmovilice, bloquee o excluya capas del trazado.
keywords: capa, capas, la, capa actual, inmovilizar, descongelar, bloquear, apagar, encender, trazar, no trazar, color, propiedades de capa, layiso, layuniso, aislar, layoff, layfrz, laymcur, layon, laythw, renombrar, laymrg, fusionar, laydel, borrar capa, grupos de capas
from: cd033591
---

## Lo que creará

Tres capas, Muros, Puertas y Notas, cada una con su propio color, con objetos dibujados en cada una y movidos entre ellas.

## El panel Capas

Las capas están en el panel de la izquierda, bajo {{ui:Capas}}. Cada fila muestra, de izquierda a derecha:

- un punto: relleno para la capa **actual**, donde van los objetos nuevos;
- una muestra de color;
- el nombre de la capa;
- cuatro botones: encendido/apagado (ojo), inmovilizar (copo de nieve), bloquear (candado) y trazar (impresora).

Todos los dibujos tienen una capa llamada `0`. Escriba `LA` y pulse {{key:Enter}} para ir al panel.

## Crear capas

1. Haga clic en {{ui:Capa nueva}} sobre la lista. Se abre un cuadro para el nombre.
2. Escriba `Muros` y pulse {{key:Enter}} (o haga clic en {{ui:Añadir}}).

La barra de estado dice "Capa Muros añadida y hecha actual". La capa nueva recibe el color 7 (negro en el tema claro, blanco en el oscuro).

3. Haga clic de nuevo en {{ui:Capa nueva}}, escriba `Puertas` y pulse {{key:Enter}}.
4. Haga clic de nuevo en {{ui:Capa nueva}}, escriba `Notas` y pulse {{key:Enter}}.

Ahora Notas es la capa actual.

## Asignar un color a cada capa

1. Haga clic en la muestra de color de la fila Muros. Se abre el selector de color de su sistema.
2. Elija un color y confirme.

La muestra cambia, y todo lo de Muros que esté en color {{ui:PorCapa}} también.

:::note
Un color elegido que coincide con uno de los 255 colores CAD estándar se guarda como ese número. Cualquier otro color se conserva exactamente en CadCraft, pero se guarda como el color estándar más cercano en un archivo DWG o DXF.
:::

## Dibujar en una capa

1. Haga clic en el nombre **Muros** de la lista. Su punto se rellena y la barra de estado dice "Capa actual: Muros".
2. Dibuje un rectángulo (`REC`). Irá en Muros.
3. Haga clic en **Puertas** y dibuje un arco (`A`). Irá en Puertas.

También puede elegir la capa actual en {{ui:Parámetros actuales}}, a la derecha (sin nada seleccionado), en {{ui:Capa}}.

## Mover objetos a otra capa

1. Seleccione los objetos.
2. En el panel derecho, elija la nueva capa en {{ui:Capa}}.

Pasan a esa capa y toman su color si su color es {{ui:PorCapa}}.

## Apagar, inmovilizar, bloquear y trazar

| Botón | Qué hace |
|---|---|
| Encendido/apagado (ojo) | Oculta los objetos de la capa. No se pueden ver, seleccionar ni ajustar a ellos. |
| Inmovilizar (copo de nieve) | Igual que apagar en CadCraft. Se mantiene separado porque otros programas los tratan de forma distinta, y el ajuste se guarda. |
| Bloquear (candado) | Los objetos siguen visibles y puede ajustarse a ellos, pero no se pueden seleccionar ni cambiar. Útil para un fondo sobre el que calca. |
| Trazar (impresora) | Cuando está pulsado, la capa se muestra en pantalla pero **se excluye de los trazados** y de los PDF. Úselo para líneas de construcción y notas para usted. |

Pase el ratón sobre un botón para ver qué hará ("Apagar", "Inmovilizar", "Bloquear", "No trazar esta capa").

No puede apagar la capa actual: la barra de estado dice "Esa es la capa actual. Haga primero otra capa actual." Al hacer clic en el nombre de una capa para hacerla actual, también se enciende y se descongela.

Cada cambio de capa, en el panel o mediante un comando, es un paso de deshacer: {{key:Mod+Z}} lo devuelve.

## Trabajar con capas eligiendo objetos

No necesita saber el nombre de una capa: elija un objeto que esté en ella. Escriba el comando, o abra {{ui:Herramientas}} en la parte superior del panel {{ui:Capas}}.

| Comando | Qué hace |
|---|---|
| {{cmd:LAYISO}} | Seleccione objetos y pulse {{key:Enter}}: solo sus capas quedan encendidas, y todas las demás se apagan. Si la capa actual estaba apagada, una de las capas aisladas pasa a ser la actual. |
| {{cmd:LAYUNISO}} | Vuelve a encender las capas que apagó el último {{cmd:LAYISO}}, y devuelve la capa actual que cambió. |
| {{cmd:LAYOFF}} | Haga clic en objetos uno tras otro: se apaga la capa de cada uno. Escriba `U` para deshacer el último, y {{key:Enter}} para terminar. |
| {{cmd:LAYFRZ}} | Igual, pero inmovilizando cada capa. |
| {{cmd:LAYMCUR}} | Haga clic en un objeto: su capa pasa a ser la actual (y se enciende y se descongela). Si ya hay un objeto seleccionado, se usa ese. |
| {{cmd:LAYON}} | Enciende todas las capas. |
| {{cmd:LAYTHW}} | Descongela todas las capas. |

La capa actual nunca se apaga ni se inmoviliza de esta forma: el historial lo indica, y puede hacer otra capa actual con {{cmd:LAYMCUR}} primero. Al elegir una referencia de bloque se usa la capa propia de la referencia.

## Renombrar, fusionar y borrar capas

- {{cmd:RENAME}}: escriba `LA`, el nombre antiguo y el nuevo. Todos los objetos de la capa lo siguen. (`B` renombra un bloque de la misma forma, con todas sus referencias.)
- {{cmd:LAYMRG}}: haga clic en un objeto de cada capa que quiera fusionar (o escriba `N` y un nombre), pulse {{key:Enter}}, luego elija la capa destino y responda `Y`. Los objetos pasan al destino (en el modelo, en las hojas y dentro de los bloques) y las capas fusionadas desaparecen.
- {{cmd:LAYDEL}}: elija un objeto de la capa (o escriba `N` y su nombre) y responda `Y`. La capa desaparece **con todos los objetos que contiene**, en todas partes. La capa 0, DEFPOINTS y la capa actual no se pueden borrar.

Cada uno es un paso de deshacer. Los tres están en {{ui:Herramientas}}, en la parte superior del panel {{ui:Capas}}.

1. Haga clic en una línea de muro, escriba `LAYISO` y pulse {{key:Enter}}. Solo Muros queda encendida.
2. Dibuje o cambie lo que necesite en Muros.
3. Escriba `LAYUNISO` y pulse {{key:Enter}}. Puertas y Notas vuelven.

## Errores frecuentes

- **Las líneas nuevas fueron a la capa equivocada.** Compruebe qué punto está relleno antes de dibujar. Una capa nueva pasa a ser la actual en cuanto la añade.
- **Un objeto no se selecciona.** Su capa está bloqueada, apagada o inmovilizada.
- **La capa sigue imprimiéndose en otro programa.** DXF R12 no puede guardar "no trazar". CadCraft conserva el ajuste para sí cuando el dibujo tiene una hoja, pero otros programas trazarán esa capa.
- **Nombres de capa en mayúsculas tras guardar.** DXF R12 guarda los nombres en mayúsculas, así que `Muros` vuelve como `MUROS`, y los espacios se convierten en `_`. Un DWG guardado conserva los nombres como los escribió.
- **Renombrar, fusionar o borrar una capa.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (también en {{ui:Herramientas}}); véase más abajo.

## Agrupar capas

Mantenga corta la lista poniendo las capas en carpetas, como Existente, Propuesto y Servicios. Cada carpeta se pliega, y sus interruptores encienden o apagan todas sus capas, o las inmovilizan o bloquean juntas. La capa actual nunca se apaga.

En {{ui:Herramientas}} del panel {{ui:Capas}}, elija {{ui:Añadir grupos prefabricados}} para un conjunto pensado para obras residenciales pequeñas, {{ui:Agrupar por nombre}} para agrupar capas que comparten un prefijo (`E-Muros`, `E-Puertas`), o {{ui:Grupo nuevo}}. Arrastre una capa sobre una carpeta, o use la lista de encima de las capas para la capa actual. Escriba en {{ui:Buscar una capa}} para reducir la lista. `LAYGROUP` (`LG`) hace lo mismo desde la línea de comandos.

Las capas en sí no cambian, así que otros programas CAD las ven como una lista plana normal. CadCraft guarda los grupos en el archivo.
