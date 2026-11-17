---
title: Trama y relleno de áreas
summary: Rellene un área con un color sólido o con un patrón estándar haciendo clic dentro de ella o eligiendo formas cerradas, defina la escala y el ángulo del patrón y cambie una trama después.
keywords: trama, sombrear, relleno, relleno sólido, patrón, ansi31, ansi37, ladrillo, tierra, red, líneas de sección, poché, isla, contorno, escala, ángulo
from: 14399174
---

## Lo que hará

Una sección de muro rellena con el patrón ANSI31, una columna vacía en ella y un relleno sólido en la columna.

## Sombrear haciendo clic dentro de un área

1. Dibuje un rectángulo (`REC`, `0,0`, `@2000,1200`) y un círculo dentro de él (`C`, `1000,600`, `300`). Haga clic en {{ui:Extents}}.
2. Haga clic en {{ui:Hatch}} en el grupo {{ui:Draw}}, o escriba `H` y pulse {{key:Enter}}. El historial indica el patrón actual, por ejemplo `Trama actual: ANSI31, escala 1, ángulo 0°`.
3. Escriba `P` y pulse {{key:Enter}}, escriba `ANSI31` y pulse {{key:Enter}}.
4. Escriba `SC` y pulse {{key:Enter}}, escriba `20` y pulse {{key:Enter}}. Los tamaños del patrón son en papel, así que un dibujo impreso a 1:20 necesita escala 20.
5. Ante el aviso Especifique un punto interior, haga clic dentro del rectángulo, fuera del círculo. La trama se muestra como vista previa.
6. Pulse {{key:Enter}}. El rectángulo queda sombreado; el círculo interior queda vacío, porque es una isla.

Haga clic dentro de varias áreas antes de pulsar {{key:Enter}} para crear una sola trama. `U` deshace la última área.

## Relleno sólido

1. Escriba `H` y pulse {{key:Enter}}.
2. Escriba `P`, pulse {{key:Enter}}, escriba `SOLID` y pulse {{key:Enter}}.
3. Haga clic dentro del círculo y pulse {{key:Enter}}.

## Sombrear formas cerradas que elija

En lugar de hacer clic dentro, escriba `S` (Seleccionar objetos) ante el aviso Especifique un punto interior, elija polilíneas cerradas, círculos o elipses cerradas, y pulse {{key:Enter}}. Las formas contenidas en otras quedan vacías alternativamente (la exterior sombreada, la siguiente vacía, y así sucesivamente).

## Patrones

Escriba `?` en la pregunta del patrón para ver la lista. Los patrones estándar son ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH y SOLID. En un dibujo en pulgadas (o con pies y pulgadas como formato de longitud) se usan los tamaños en pulgadas de los patrones, como en AutoCAD; en caso contrario, los de milímetros.

{{ui:Angle}} (`A`) gira todo el patrón: ANSI31 a 90° se inclina en sentido contrario.

**Archivos de patrón.** Escriba `F` (Archivo de patrón) ante el aviso Especifique un punto interior y elija un archivo `.pat`. Los patrones que contiene se añaden a la lista; si hay más de uno, se le pregunta cuál usar. Si un archivo no contiene ningún patrón que CadCraft pueda leer, se indica, y se cuenta cualquier patrón omitido. Los tamaños de un archivo `.pat` no tienen unidad propia, así que se leen en las unidades del dibujo. Solo se han probado archivos en el formato `.pat` habitual; no se ha probado ninguno creado con otro programa.

## Cambiar una trama

Seleccione la trama (haga clic en una de sus líneas). En {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} y {{ui:Pattern angle}}. Las tramas de dibujos abiertos muestran su patrón si es uno de los estándar; las demás se muestran con un tono claro de su color.

## Errores habituales

- **"No hay contorno cerrado alrededor de ese punto."** Hay un hueco en el contorno, o parte de él está fuera de la pantalla: CadCraft solo analiza lo que se ve en pantalla. Cierre el hueco (amplíe la vista en las esquinas), o aleje la vista.
- **"La trama es demasiado densa para dibujarla a esta escala."** Las líneas quedarían más juntas de lo que el dibujo puede mostrar. Use una escala mayor: pruebe con la escala de impresión (20 para 1:20).
- **La trama parece enorme o minúscula.** La escala se expresa en unidades de dibujo por unidad de patrón; vea el paso 4 anterior.
- **Mover el contorno no mueve la trama.** Una trama no está vinculada a su contorno. Mueva ambos, o vuelva a tramar.

## Una trama que sigue a su contorno

Una trama creada con `HATCH` recuerda qué la delimita. Si mueve, gira o escala el contorno, la trama y su patrón lo siguen. Arrastre un pinzamiento para remodelar el contorno y la trama se vuelve a calcular. Si mueve la trama por separado, su contorno vendrá también, como una forma rellena en un programa de dibujo.

La vinculación se pierde, y la línea de comandos lo indica, si el contorno ya no se cierra o si remodela la trama a mano. La trama en sí se conserva. Escriba `AS` mientras sombrea para crear tramas independientes. Si copia una trama con su contorno, la copia tiene su propia vinculación.

`HATCHEDIT` (`HE`) cambia el patrón, la escala, el ángulo y el origen de una trama, y la vincula a un contorno o termina la vinculación. La vinculación se guarda en archivos DWG y DXF 2000. Un archivo DXF R12 no tiene objeto de trama, y las vinculaciones hechas en otros programas no se leen: para esos casos, use `HATCHEDIT` y Vincular.

Una trama que ya no tiene contorno (porque se borró o el archivo llegó sin él) puede recuperarlo: `HATCHGENERATEBOUNDARY` (`HGB`) dibuja una polilínea cerrada alrededor de cada bucle de la trama y, si responde Sí, vincula la trama a ellas.

## Relleno de degradado

`GRADIENT` (`GD`) rellena un área con un degradado en lugar de un patrón: los mismos puntos de selección que `HATCH`, tras preguntar el tipo (lineal, cilíndrico, esférico, hemisférico, curvo, y cada uno de ellos invertido), un color con una tonalidad o dos colores, el ángulo y si va centrado o no. En `HATCH`, la opción `G` hace lo mismo. `HATCHEDIT` `G`, o {{ui:Properties}} en Degradado, cambia un degradado o convierte cualquier trama en uno.

Un degradado se muestra en pantalla y en las impresiones. Si guarda como DWG 2004 o posterior, otros programas obtienen una trama de degradado real. DXF 2000 y DWG 2000 no tienen degradados: ahí CadCraft lo conserva solo para sí mismo, y los demás programas ven un relleno sólido con el primer color.

## Recortar una trama

`TRIM` corta una trama como cualquier otro objeto. Haga clic en la trama del lado del borde de corte que quiera eliminar: los bordes dividen el área sombreada y se elimina esa parte. En modo Rápido, cada objeto es un borde de corte; elija primero los bordes (opción `T`) cuando haya muchos. Una trama recortada ya no está vinculada a su contorno, porque ya no lo rellena.
