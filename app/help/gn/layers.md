---
title: Organizar un plano con capas
summary: Crear capas para muros, puertas y notas, poner colores, hacer una capa actual y apagar, congelar, bloquear o evitar que se impriman.
keywords: capa, capas, la, capa actual, congelar, descongelar, bloquear, apagar, encender, imprimir, no imprimir, color, propiedades de capa, layiso, layuniso, aislar, layoff, layfrz, laymcur, layon, laythw, renombrar, laymrg, combinar, laydel, eliminar capa
from: cd033591
---

## Lo que vas a hacer

Tres capas, Muros, Puertas y Notas, cada una con su propio color, con objetos dibujados en cada una y movidos entre ellas.

## El panel de Capas

Las capas están en el panel de la izquierda, bajo {{ui:Layers}}. Cada fila muestra, de izquierda a derecha:

- un punto: lleno para la capa **actual**, donde van los objetos nuevos;
- una muestra de color;
- el nombre de la capa;
- cuatro botones: encendido/apagado (ojo), congelar (copo de nieve), bloquear (candado) e imprimir (impresora).

Todo plano tiene una capa llamada `0`. Escribir `LA` y presionar {{key:Enter}} lleva al panel.

## Crear capas

1. Hacé click en {{ui:New layer}} encima de la lista. Se abre una casilla de nombre.
2. Escribí `Muros` y presioná {{key:Enter}} (o hacé click en {{ui:Add}}).

La barra de estado dice "Se agregó la capa Muros y se hizo actual." La nueva capa recibe el color 7 (negro en el tema claro, blanco en el oscuro).

3. Hacé click otra vez en {{ui:New layer}}, escribí `Puertas` y presioná {{key:Enter}}.
4. Hacé click otra vez en {{ui:New layer}}, escribí `Notas` y presioná {{key:Enter}}.

Ahora Notas es la actual.

## Dar color a cada capa

1. Hacé click en la muestra de color de la fila Muros. Se abre el selector de color de tu sistema.
2. Elegí un color y confirmá.

La muestra y todo lo de Muros que esté en color {{ui:By layer}} cambian.

:::note
Un color elegido que coincida con uno de los 255 colores CAD estándar se guarda como ese número. Cualquier otro color se conserva exacto en CadCraft, pero se guarda como el color estándar más cercano en un archivo DWG o DXF.
:::

## Dibujar en una capa

1. Hacé click en el nombre **Muros** de la lista. Su punto se llena y la barra de estado dice "Capa actual: Muros".
2. Dibujá un rectángulo (`REC`). Va en Muros.
3. Hacé click en **Puertas** y dibujá un arco (`A`). Va en Puertas.

También podés elegir la capa actual en {{ui:Current settings}} a la derecha (sin nada seleccionado), bajo {{ui:Layer}}.

## Mover objetos a otra capa

1. Seleccioná los objetos.
2. En el panel derecho, elegí la nueva capa en {{ui:Layer}}.

Pasan a esa capa y toman su color si su color es {{ui:By layer}}.

## Apagar, congelar, bloquear e imprimir

| Botón | Qué hace |
|---|---|
| Encendido/apagado (ojo) | Oculta los objetos de la capa. No se pueden ver, seleccionar ni ajustar a ellos. |
| Congelar (copo de nieve) | En CadCraft tiene el mismo efecto que apagar. Se mantiene separado porque otros programas los tratan distinto, y el ajuste se guarda. |
| Bloquear (candado) | Los objetos siguen visibles y podés ajustarte a ellos, pero no se pueden seleccionar ni cambiar. Sirve para un fondo sobre el que calcás. |
| Imprimir (impresora) | Cuando está presionado, la capa se muestra en pantalla pero **se deja fuera de las impresiones** y de los PDF. Usalo para líneas de construcción y notas para vos. |

Pasá el puntero sobre un botón para ver qué hará ("Apagar", "Congelar", "Bloquear", "No imprimir esta capa").

No podés apagar la capa actual: la barra de estado dice "Esa es la capa actual. Primero hacé actual otra capa." Hacer click en el nombre de una capa para volverla actual también la enciende y la descongela.

Cada cambio de capa, en el panel o con un comando, es un paso de deshacer: {{key:Mod+Z}} lo devuelve.

## Trabajar con capas eligiendo objetos

No necesitás saber el nombre de una capa: elegí un objeto que esté en ella. Escribí el comando, o abrí {{ui:Tools}} arriba del panel {{ui:Layers}}.

| Comando | Qué hace |
|---|---|
| {{cmd:LAYISO}} | Seleccioná objetos y presioná {{key:Enter}}: solo sus capas quedan encendidas, y todas las demás se apagan. Si la capa actual estaba apagada, una de las capas aisladas pasa a ser la actual. |
| {{cmd:LAYUNISO}} | Vuelve a encender las capas que apagó el último {{cmd:LAYISO}}, y devuelve la capa actual que había cambiado. |
| {{cmd:LAYOFF}} | Hacé click en objetos uno tras otro: se apaga la capa de cada uno. Escribí `U` para quitar el último, {{key:Enter}} para terminar. |
| {{cmd:LAYFRZ}} | Igual, pero congelando la capa de cada uno. |
| {{cmd:LAYMCUR}} | Hacé click en un objeto: su capa pasa a ser la actual (y se enciende y descongela). Si ya hay un objeto seleccionado, se usa ese. |
| {{cmd:LAYON}} | Enciende todas las capas. |
| {{cmd:LAYTHW}} | Descongela todas las capas. |

La capa actual nunca se apaga ni se congela de esta forma: el historial lo indica, y podés hacer actual otra capa con {{cmd:LAYMCUR}} antes. Al elegir una referencia de bloque se usa la capa propia de la referencia.

## Renombrar, combinar y eliminar capas

- {{cmd:RENAME}}: escribí `LA`, el nombre viejo y el nuevo. Cada objeto de la capa lo sigue. (`B` renombra un bloque de la misma forma, con todas sus referencias.)
- {{cmd:LAYMRG}}: hacé click en un objeto de cada capa a combinar (o escribí `N` y un nombre), presioná {{key:Enter}}, luego elegí la capa destino y respondé `Y`. Los objetos pasan al destino —en el modelo, en las hojas y dentro de bloques— y las capas combinadas desaparecen.
- {{cmd:LAYDEL}}: elegí un objeto de la capa (o `N` y su nombre) y respondé `Y`. La capa se va **con todos los objetos que tiene**, en todas partes. La capa 0, DEFPOINTS y la capa actual no se pueden eliminar.

Cada uno es un paso de deshacer. Los tres están en {{ui:Tools}} arriba del panel {{ui:Layers}}.

1. Hacé click en una línea de muro, luego escribí `LAYISO` y presioná {{key:Enter}}. Solo Muros queda encendida.
2. Dibujá o cambiá lo que necesités en Muros.
3. Escribí `LAYUNISO` y presioná {{key:Enter}}. Puertas y Notas vuelven.

## Errores comunes

- **Las líneas nuevas fueron a la capa equivocada.** Mirá qué punto está lleno antes de dibujar. Una capa nueva se vuelve actual apenas la agregás.
- **Un objeto no se selecciona.** Su capa está bloqueada, apagada o congelada.
- **La capa todavía se imprime en otro programa.** DXF R12 no puede guardar "no imprimir". CadCraft conserva el ajuste para sí cuando el plano tiene una hoja, pero otros programas imprimirán esa capa.
- **Nombres de capa en mayúsculas después de guardar.** DXF R12 guarda los nombres en mayúsculas, así que `Muros` vuelve como `MUROS`, y los espacios pasan a `_`. Un DWG guardado conserva los nombres como los escribiste.
- **Renombrar, combinar o eliminar una capa.** Usá {{cmd:RENAME}}, {{cmd:LAYMRG}} o {{cmd:LAYDEL}} (también en {{ui:Tools}}): ver más abajo.

## Agrupar capas

Mantené corta la lista poniendo las capas en carpetas, como Existentes, Propuestas y Servicios. Cada carpeta se pliega, y sus interruptores encienden o apagan todas sus capas, las congelan o las bloquean juntas. La capa actual nunca se apaga.

En {{ui:Tools}} del panel de Capas, elegí {{ui:Add ready-made groups}} para un conjunto pensado para obras residenciales pequeñas, {{ui:Group by name}} para agrupar capas que comparten un prefijo (`E-Muros`, `E-Puertas`), o {{ui:New group}}. Arrastrá una capa sobre una carpeta, o usá la lista de arriba para la capa actual. Escribí en {{ui:Find a layer}} para reducir la lista. `LAYGROUP` (`LG`) hace lo mismo en la línea de comandos.

Las capas en sí no cambian, así que otros programas CAD las ven como una lista plana común. CadCraft guarda los grupos en el archivo.
