---
title: Organizar un dibujo con capas
summary: Cree capas para muros, puertas y notas, asigne colores, haga una capa actual, y apague, inutilice, bloquee o excluya capas del trazado.
keywords: capa, capas, la, capa actual, inutilizar, reutilizar, bloquear, apagar, encender, trazar, sin trazado, color, propiedades de capa, layiso, layuniso, aislar, layoff, layfrz, laymcur, layon, laythw, renombrar, laymrg, fusionar, laydel, eliminar capa
from: ba9f0617
---

## Lo que hará

Tres capas, Muros, Puertas y Notas, cada una con su propio color, con objetos dibujados en cada una y movidos entre ellas.

## El panel Capas

Las capas están en el panel de la izquierda, bajo {{ui:Layers}}. Cada fila muestra, de izquierda a derecha:

- un punto: relleno para la capa **actual**, donde van los objetos nuevos;
- un muestrario de color;
- el nombre de la capa;
- cuatro botones: encender o apagar (ojo), inutilizar (copo de nieve), bloquear (candado) y trazar (impresora).

Cada dibujo tiene una capa llamada `0`. Escriba `LA` y pulse {{key:Enter}} para ir al panel.

## Crear capas

1. Haga clic en {{ui:New layer}} sobre la lista. Se abre un cuadro de nombre.
2. Escriba `Muros` y pulse {{key:Enter}} (o haga clic en {{ui:Add}}).

La barra de estado dice "Se agregó la capa Muros y se hizo actual." La nueva capa recibe el color 7 (negro en el tema claro, blanco en el oscuro).

3. Haga clic de nuevo en {{ui:New layer}}, escriba `Puertas` y pulse {{key:Enter}}.
4. Haga clic de nuevo en {{ui:New layer}}, escriba `Notas` y pulse {{key:Enter}}.

Notas ahora es la capa actual.

## Dar un color a cada capa

1. Haga clic en el muestrario de color de la fila Muros. Se abre el selector de color de su sistema.
2. Elija un color y confirme.

El muestrario y todo lo de Muros que está coloreado como {{ui:By layer}} cambian.

:::note
Un color elegido que coincide con uno de los 255 colores estándar de CAD se guarda como ese número. Cualquier otro color se conserva exactamente en CadCraft, pero se guarda como el color estándar más cercano en un archivo DWG o DXF.
:::

## Dibujar en una capa

1. Haga clic en el nombre **Muros** de la lista. Su punto se rellena y la barra de estado dice "Capa actual: Muros".
2. Dibuje un rectángulo (`REC`). Va en Muros.
3. Haga clic en **Puertas** y dibuje un arco (`A`). Va en Puertas.

También puede elegir la capa actual en {{ui:Current settings}} a la derecha (sin nada seleccionado), bajo {{ui:Layer}}.

## Mover objetos a otra capa

1. Seleccione los objetos.
2. En el panel derecho, elija la nueva capa en {{ui:Layer}}.

Pasan a esa capa y toman su color si su color es {{ui:By layer}}.

## Apagar, inutilizar, bloquear y trazar

| Botón | Qué hace |
|---|---|
| Encender o apagar (ojo) | Oculta los objetos de la capa. No se pueden ver, seleccionar ni referenciar. |
| Inutilizar (copo de nieve) | Mismo efecto que apagar en CadCraft. Se mantiene separado porque otros programas lo tratan de forma distinta, y el ajuste se guarda. |
| Bloquear (candado) | Los objetos siguen visibles y puede referenciarlos, pero no se pueden seleccionar ni cambiar. Útil para un fondo sobre el que calca. |
| Trazar (impresora) | Cuando está pulsado, la capa se muestra en pantalla pero se **excluye de los trazados** y de los PDF. Úselo para líneas de construcción y notas para usted. |

Pase el cursor sobre un botón para ver lo que hará ("Turn off" › "Apagar", "Freeze" › "Inutilizar", "Lock" › "Bloquear", "Do not plot this layer" › "No trazar esta capa").

No puede apagar la capa actual: la barra de estado dice "Esa es la capa actual. Haga otra capa actual primero." Hacer clic en el nombre de una capa para volverla actual también la enciende y la reutiliza.

Cada cambio de capa, en el panel o con un comando, es un paso de deshacer: {{key:Mod+Z}} lo devuelve.

## Trabajar con capas al designar objetos

No necesita saber el nombre de una capa: designe un objeto en ella. Escriba el comando, o abra {{ui:Tools}} arriba del panel {{ui:Layers}}.

| Comando | Qué hace |
|---|---|
| {{cmd:LAYISO}} | Seleccione objetos y pulse {{key:Enter}}: solo sus capas quedan encendidas, y todas las demás se apagan. Si la capa actual está apagada, una de las capas aisladas se vuelve actual. |
| {{cmd:LAYUNISO}} | Vuelve a encender las capas que apagó el último {{cmd:LAYISO}}, y devuelve la capa actual que cambió. |
| {{cmd:LAYOFF}} | Haga clic en objetos uno tras otro: la capa de cada uno se apaga. Escriba `U` para deshacer el último, {{key:Enter}} para terminar. |
| {{cmd:LAYFRZ}} | Lo mismo, inutilizando cada capa. |
| {{cmd:LAYMCUR}} | Haga clic en un objeto: su capa se vuelve actual (y se enciende y reutiliza). Con un objeto ya seleccionado, se usa ese. |
| {{cmd:LAYON}} | Enciende todas las capas. |
| {{cmd:LAYTHW}} | Reutiliza todas las capas. |

La capa actual nunca se apaga ni inutiliza de esta forma: el historial lo indica, y puede hacer otra capa actual con {{cmd:LAYMCUR}} primero. Si designa una referencia de bloque, se usa la capa propia de la referencia.

## Renombrar, fusionar y eliminar capas

- {{cmd:RENAME}}: escriba `LA`, el nombre anterior y el nuevo. Cada objeto de la capa lo sigue. (`B` renombra un bloque de la misma forma, con todas sus referencias.)
- {{cmd:LAYMRG}}: haga clic en un objeto de cada capa a fusionar (o escriba `N` y un nombre), pulse {{key:Enter}}, luego designe la capa destino y responda `Y`. Los objetos pasan a la destino (en el modelo, en las hojas y dentro de los bloques), y las capas fusionadas desaparecen.
- {{cmd:LAYDEL}}: designe un objeto de la capa (o escriba `N` y su nombre) y responda `Y`. La capa se va **con todos los objetos que tiene**, en todas partes. La capa 0, DEFPOINTS y la capa actual no se pueden eliminar.

Cada una es un paso de deshacer. Las tres están en {{ui:Tools}} arriba del panel {{ui:Layers}}.

1. Haga clic en una línea de muro, luego escriba `LAYISO` y pulse {{key:Enter}}. Solo Muros queda encendida.
2. Dibuje o cambie lo que necesite en Muros.
3. Escriba `LAYUNISO` y pulse {{key:Enter}}. Puertas y Notas vuelven.

## Errores comunes

- **Las líneas nuevas fueron a la capa equivocada.** Revise qué punto está relleno antes de dibujar. Una capa nueva se vuelve actual en cuanto la agrega.
- **Un objeto no se selecciona.** Su capa está bloqueada, apagada o inutilizada.
- **La capa todavía se imprime en otro programa.** DXF R12 no puede guardar "no trazar". CadCraft conserva el ajuste para sí mismo cuando el dibujo tiene una hoja, pero otros programas trazarán esa capa.
- **Nombres de capa en mayúsculas después de guardar.** DXF R12 guarda los nombres en mayúsculas, así que `Muros` vuelve como `MUROS`, y los espacios se convierten en `_`. Un DWG guardado conserva los nombres como los escribió.
- **Renombrar, fusionar o eliminar una capa.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (también en {{ui:Tools}}): vea arriba.

## Agrupar capas

Mantenga corta la lista poniendo las capas en carpetas, como Existente, Propuesto y Servicios. Cada carpeta se pliega, y sus interruptores encienden o apagan todas sus capas, las inutilizan o las bloquean juntas. La capa actual nunca se apaga.

En {{ui:Tools}} del panel Capas, elija {{ui:Add ready-made groups}} para un conjunto hecho para obra residencial pequeña, {{ui:Group by name}} para agrupar capas que comparten un prefijo (`E-Walls`, `E-Doors`), o {{ui:New group}}. Arrastre una capa a una carpeta, o use la lista sobre las capas para la capa actual. Escriba en {{ui:Find a layer}} para reducir la lista. `LAYGROUP` (`LG`) hace lo mismo en la línea de comandos.

Para renombrar un grupo, haga doble clic en su nombre (o selecciónelo y pulse {{key:F2}}), escriba el nuevo nombre y pulse {{key:Enter}}; {{key:Esc}} conserva el anterior, y {{cmd:UNDO}} lo devuelve. {{ui:New group}} está en {{ui:Tools}} del panel Capas.

Las capas en sí no cambian, así que otros programas CAD las ven como una lista plana normal. CadCraft guarda los grupos en el archivo.
