---
title: Sombreado y áreas de relleno
summary: Rellene un área con un color sólido o un patrón estándar haciendo clic dentro de ella o eligiendo formas cerradas, ajuste la escala y el ángulo del patrón, y cambie un sombreado después.
keywords: sombreado, bhatch, relleno, relleno sólido, patrón, ansi31, ansi37, ladrillo, tierra, red, líneas de sección, poché, isla, contorno, escala, ángulo
from: e7feb344
---

## Lo que hará

Un corte de muro relleno con el patrón ANSI31, una columna dentro sin relleno, y un relleno sólido en la columna.

## Sombrear haciendo clic dentro de un área

1. Dibuje un rectángulo (`REC`, `0,0`, `@2000,1200`) y un círculo dentro de él (`C`, `1000,600`, `300`). Haga clic en {{ui:Extents}}.
2. Haga clic en {{ui:Hatch}} en el grupo {{ui:Draw}}, o escriba `H` y pulse {{key:Enter}}. El historial indica qué patrón está activo, por ejemplo `Sombreado actual: ANSI31, escala 1, ángulo 0°`.
3. Escriba `P` y pulse {{key:Enter}}, escriba `ANSI31` y pulse {{key:Enter}}.
4. Escriba `SC` y pulse {{key:Enter}}, escriba `20` y pulse {{key:Enter}}. Los tamaños del patrón están en papel, así que un dibujo trazado a 1:20 necesita escala 20.
5. En `Designe el punto interior`, haga clic dentro del rectángulo, fuera del círculo. El sombreado se ve como vista previa.
6. Pulse {{key:Enter}}. El rectángulo queda sombreado; el círculo interior queda vacío, porque es una isla.

Haga clic dentro de varias áreas antes de pulsar {{key:Enter}} para hacer un solo sombreado. `U` deshace la última área.

## Relleno sólido

1. Escriba `H` y pulse {{key:Enter}}.
2. Escriba `P`, pulse {{key:Enter}}, escriba `SOLID` y pulse {{key:Enter}}.
3. Haga clic dentro del círculo y luego pulse {{key:Enter}}.

## Sombrear formas cerradas que usted elija

En lugar de hacer clic dentro, escriba `S` (Designar objetos) en `Designe el punto interior`, designe polilíneas cerradas, círculos o elipses cerradas, y luego pulse {{key:Enter}}. Las formas dentro de otras quedan vacías alternadamente (la exterior sombreada, la siguiente vacía, y así sucesivamente).

## Patrones

Escriba `?` en la pregunta del patrón para ver la lista. Los estándar son ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS y EARTH, y SOLID. En un dibujo en pulgadas (o con pies y pulgadas como formato de longitud) se usan los tamaños en pulgadas de los patrones, como en AutoCAD; de lo contrario, los de milímetros.

{{ui:Angle}} (`A`) gira todo el patrón: ANSI31 a 90° se inclina en la otra dirección.

**Archivos de patrón.** Escriba `F` (Archivo de patrón) en `Designe el punto interior` y elija un archivo `.pat`. Los patrones que contiene se agregan a la lista; si hay más de uno, se le pregunta cuál usar. Un archivo sin patrones que CadCraft pueda leer lo indica, y cualquier patrón omitido se cuenta. Los tamaños de un archivo `.pat` no tienen unidad propia, así que se leen en las unidades del dibujo. Solo se han probado archivos escritos en el formato `.pat` habitual; ninguno hecho por otro programa.

## Cambiar un sombreado

Selecciónelo (haga clic en una de sus líneas). En {{ui:Properties}}: {{ui:Pattern}}, {{ui:Pattern scale}} y {{ui:Pattern angle}}. Los sombreados de dibujos abiertos muestran su patrón cuando es uno de los estándar; los demás se ven como un tono claro de su color.

## Errores comunes

- **"No closed boundary round that point."** › **"No hay un contorno cerrado alrededor de ese punto."** Hay un hueco en el contorno, o parte de él está fuera de la pantalla: CadCraft solo mira lo que está en pantalla. Cierre el hueco (acerque la vista a las esquinas), o aleje la vista.
- **"The pattern is too dense to draw at this scale."** › **"El patrón es demasiado denso para dibujarse a esta escala."** Las líneas quedarían más juntas de lo que el dibujo puede mostrar. Use una escala mayor: pruebe la escala de trazado (20 para 1:20).
- **El patrón se ve enorme o diminuto.** La escala está en unidades de dibujo por unidad de patrón; vea el paso 4 arriba.
- **El sombreado dejó de seguir su contorno.** Un sombreado hecho con {{cmd:HATCH}} queda con los objetos con los que se hizo: mueva, gire o escale el contorno y el sombreado lo acompaña; si reforma el contorno con un pinzamiento, el sombreado se vuelve a calcular. El vínculo termina cuando el contorno ya no cierra, cuando reforma el sombreado a mano, o cuando lo recorta, y la línea de comandos lo indica. Nada se pierde: sombree el área de nuevo para volver a vincularlo.

## Un sombreado que se mantiene con su contorno

Un sombreado que crea con `HATCH` recuerda qué lo delimita. Mueva, gire o escale el contorno y el sombreado y su patrón lo acompañan. Arrastre un pinzamiento para reformar el contorno y el sombreado se vuelve a calcular. Mueva el sombreado solo y su contorno lo acompaña también, como una forma rellena en un programa de dibujo.

El vínculo termina, y la línea de comandos lo indica, si el contorno ya no cierra o si reforma el sombreado a mano. El sombreado en sí se conserva. Escriba `AS` mientras sombrea para crear sombreados independientes. Al copiar un sombreado con su contorno, la copia tiene su propio vínculo.

`HATCHEDIT` (`HE`) cambia el patrón, la escala, el ángulo y el origen de un sombreado, y lo vincula a un contorno o termina el vínculo. El vínculo se guarda en archivos DWG y DXF 2000. Un archivo DXF R12 no tiene objeto de sombreado, y los vínculos hechos en otros programas no se leen: use `HATCHEDIT` y Vincular para esos.

Un sombreado que ya no tiene contorno (el contorno se borró o el archivo llegó sin él) puede recuperarlo: `HATCHGENERATEBOUNDARY` (`HGB`) dibuja una polilínea cerrada alrededor de cada bucle del sombreado y, si responde Sí, vincula el sombreado a ellas.

## Un relleno degradado

`GRADIENT` (`GD`) rellena un área con un degradado en lugar de un patrón: las mismas designaciones que `HATCH`, y luego pregunta el tipo (lineal, cilíndrico, esférico, semiesférico, curvo, y cada uno de ellos invertido), un color con un tono o dos colores, el ángulo, y si es centrado o no. En `HATCH` la opción `G` hace lo mismo. `HATCHEDIT` `G`, o {{ui:Properties}} bajo Degradado, cambia un degradado o convierte cualquier sombreado en uno.

Un degradado se muestra en pantalla y en los trazados. Guárdelo como DWG 2004 o posterior, y otros programas reciben un sombreado de degradado real. DXF 2000 y DWG 2000 no tienen degradado: allí CadCraft lo conserva para sí mismo, y otros programas ven un relleno sólido en el primer color.

## Recortar un sombreado

`TRIM` corta un sombreado como cualquier otro objeto. Haga clic en el sombreado del lado de la arista de corte que quiere eliminar: las aristas dividen el área sombreada y se quita esa pieza. En modo Rápido cada objeto es una arista de corte; elija las aristas primero (opción `T`) cuando haya muchas. Un sombreado recortado ya no está vinculado a su contorno, porque ya no lo rellena.
