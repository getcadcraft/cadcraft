---
title: Organizar un dibujo con capas
summary: Cree capas para muros, puertas y notas, asigne colores, haga una capa actual y desactive, inutilice, bloquee o evite que se tracen capas.
keywords: capa, capas, la, capa actual, inutilizar, reutilizar, bloquear, desactivar, activar, trazar, no trazar, color, propiedades de capa, layiso, layuniso, aislar, layoff, layfrz, laymcur, layon, laythw, renombrar, laymrg, combinar, laydel, eliminar capa
from: cd033591
---

## Qué va a crear

Tres capas, Muros, Puertas y Notas, cada una con su propio color, con objetos dibujados en cada una y movidos entre ellas.

## El panel Capas

Las capas están en el panel de la izquierda, bajo {{ui:Capas}}. Cada fila muestra, de izquierda a derecha:

- un punto: relleno para la capa **actual**, donde van los objetos nuevos;
- una muestra de color;
- el nombre de la capa;
- cuatro botones: activar o desactivar (ojo), inutilizar (copo de nieve), bloquear (candado) y trazar (impresora).

Todo dibujo tiene una capa llamada `0`. Al escribir `LA` y presionar {{key:Enter}}, el cursor pasa al panel.

## Crear capas

1. Haga clic en {{ui:Capa nueva}} sobre la lista. Se abre un cuadro de nombre.
2. Escriba `Muros` y presione {{key:Enter}} (o haga clic en {{ui:Añadir}}).

La barra de estado dice "Se agregó la capa Muros y se hizo actual." La nueva capa recibe el color 7 (negro en el tema claro, blanco en el oscuro).

3. Haga clic otra vez en {{ui:Capa nueva}}, escriba `Puertas` y presione {{key:Enter}}.
4. Haga clic otra vez en {{ui:Capa nueva}}, escriba `Notas` y presione {{key:Enter}}.

Ahora Notas es la capa actual.

## Asignar un color a cada capa

1. Haga clic en la muestra de color de la fila Muros. Se abre el selector de color de su sistema.
2. Elija un color y confirme.

La muestra y todo lo de Muros que esté en color {{ui:PorCapa}} cambian.

:::note
Un color elegido que coincide con uno de los 255 colores estándar de CAD se guarda como ese número. Cualquier otro color se conserva exactamente en CadCraft, pero se guarda como el color estándar más cercano en un archivo DWG o DXF.
:::

## Dibujar en una capa

1. Haga clic en el nombre **Muros** de la lista. Su punto se rellena y la barra de estado dice "Capa actual: Muros".
2. Dibuje un rectángulo (`REC`). Va a Muros.
3. Haga clic en **Puertas** y dibuje un arco (`A`). Va a Puertas.

También puede elegir la capa actual en {{ui:Parámetros actuales}} a la derecha (sin nada seleccionado), en {{ui:Capa}}.

## Mover objetos a otra capa

1. Seleccione los objetos.
2. En el panel derecho, elija la nueva capa en {{ui:Capa}}.

Pasan a esa capa y toman su color si su color es {{ui:PorCapa}}.

## Desactivar, inutilizar, bloquear y trazar

| Botón | Qué hace |
|---|---|
| Activar o desactivar (ojo) | Oculta los objetos de la capa. No se pueden ver, seleccionar ni forzar a ellos. |
| Inutilizar (copo de nieve) | Igual que desactivar en CadCraft. Se mantiene separado porque otros programas los tratan de forma distinta, y el ajuste se guarda. |
| Bloquear (candado) | Los objetos siguen visibles y puede forzar a ellos, pero no se pueden seleccionar ni cambiar. Útil para un fondo sobre el que calca. |
| Trazar (impresora) | Cuando el botón está presionado, la capa se muestra en pantalla pero **se omite de los trazados** y de los PDF. Úselo para líneas de construcción y notas para usted. |

Pase el cursor sobre un botón para ver qué hará ("Desactivar", "Inutilizar", "Bloquear", "No trazar esta capa").

No puede desactivar la capa actual: la barra de estado dice "Esa es la capa actual. Haga otra capa actual primero." Hacer clic en el nombre de una capa para hacerla actual también la activa y la reutiliza.

Cada cambio de capa, en el panel o con un comando, es un solo paso de deshacer: {{key:Mod+Z}} lo devuelve.

## Trabajar con capas eligiendo objetos

No necesita conocer el nombre de una capa: elija un objeto en ella. Escriba el comando, o abra {{ui:Herramientas}} arriba del panel {{ui:Capas}}.

| Comando | Qué hace |
|---|---|
| {{cmd:LAYISO}} | Seleccione objetos y presione {{key:Enter}}: solo sus capas quedan activadas y todas las demás se desactivan. Si la capa actual estaba desactivada, una de las capas aisladas pasa a ser la actual. |
| {{cmd:LAYUNISO}} | Vuelve a activar las capas que desactivó el último {{cmd:LAYISO}}, y devuelve la capa actual que cambió. |
| {{cmd:LAYOFF}} | Haga clic en objetos uno tras otro: se desactiva la capa de cada uno. Escriba `U` para quitar el último, y {{key:Enter}} para terminar. |
| {{cmd:LAYFRZ}} | Igual, pero inutilizando la capa de cada uno. |
| {{cmd:LAYMCUR}} | Haga clic en un objeto: su capa pasa a ser la actual (y se activa y reutiliza). Si ya hay un objeto seleccionado, se usa ese. |
| {{cmd:LAYON}} | Activa todas las capas. |
| {{cmd:LAYTHW}} | Reutiliza todas las capas. |

La capa actual nunca se desactiva ni se inutiliza de esta forma: el historial lo indica, y puede hacer otra capa actual con {{cmd:LAYMCUR}} primero. Al elegir una referencia a bloque se usa la capa propia de la referencia.

## Renombrar, combinar y eliminar capas

- {{cmd:RENAME}}: escriba `LA`, el nombre anterior y el nuevo. Todo objeto de la capa lo sigue. (`B` renombra un bloque de la misma forma, con todas sus referencias.)
- {{cmd:LAYMRG}}: haga clic en un objeto de cada capa a combinar (o escriba `N` y un nombre), presione {{key:Enter}}, luego elija la capa destino y responda `Y`. Los objetos pasan al destino —en el modelo, en las hojas y dentro de los bloques— y las capas combinadas desaparecen.
- {{cmd:LAYDEL}}: elija un objeto de la capa (o escriba `N` y su nombre) y responda `Y`. La capa se va **con todos los objetos que tiene**, en todas partes. La capa 0, DEFPOINTS y la capa actual no se pueden eliminar.

Cada una es un solo paso de deshacer. Las tres están en {{ui:Herramientas}} arriba del panel {{ui:Capas}}.

1. Haga clic en una línea de muro, luego escriba `LAYISO` y presione {{key:Enter}}. Solo Muros queda activada.
2. Dibuje o cambie lo que necesite en Muros.
3. Escriba `LAYUNISO` y presione {{key:Enter}}. Puertas y Notas regresan.

## Errores comunes

- **Las líneas nuevas fueron a la capa equivocada.** Revise qué punto está relleno antes de dibujar. Una capa nueva pasa a ser la actual en cuanto la agrega.
- **Un objeto no se selecciona.** Su capa está bloqueada, desactivada o inutilizada.
- **La capa todavía se imprime en otro programa.** DXF R12 no puede guardar "no trazar". CadCraft conserva el ajuste para sí cuando el dibujo tiene una hoja, pero otros programas trazarán esa capa.
- **Nombres de capa en mayúsculas después de guardar.** DXF R12 guarda los nombres en mayúsculas, así que `Muros` regresa como `MUROS`, y los espacios se convierten en `_`. Un DWG guardado conserva los nombres como usted los escribió.
- **Renombrar, combinar o eliminar una capa.** Use {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (también en {{ui:Herramientas}}): vea abajo.

## Agrupar capas

Para mantener corta la lista, ponga las capas en carpetas, como Existente, Propuesto y Servicios. Cada carpeta se pliega, y sus interruptores activan o desactivan todas sus capas, o las inutilizan o bloquean juntas. La capa actual nunca se desactiva.

En {{ui:Herramientas}} del panel {{ui:Capas}}, elija {{ui:Agregar grupos predefinidos}} para un conjunto hecho para trabajos residenciales pequeños, {{ui:Agrupar por nombre}} para agrupar capas que comparten un prefijo (`E-Muros`, `E-Puertas`), o {{ui:Nuevo grupo}}. Arrastre una capa a una carpeta, o use la lista sobre las capas para la capa actual. Escriba en {{ui:Buscar una capa}} para reducir la lista. `LAYGROUP` (`LG`) hace lo mismo en la línea de comandos.

Las capas en sí no cambian, así que otros programas CAD las ven como una lista plana normal. CadCraft guarda los grupos en el archivo.
