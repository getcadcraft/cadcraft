---
title: Sombreado y áreas de relleno
summary: Rellene un área con un color sólido o con un patrón estándar haciendo clic en su interior o eligiendo formas cerradas, ajuste la escala y el ángulo del patrón y modifique el sombreado después.
keywords: sombreado, bhatch, relleno, relleno sólido, patrón, ansi31, ansi37, ladrillo, tierra, red, líneas de sección, poché, isla, contorno, escala, ángulo
from: e7feb344
---

## Qué va a crear

Una sección de muro rellena con el patrón ANSI31, una columna vacía dentro y un relleno sólido en la columna.

## Sombrear haciendo clic dentro de un área

1. Dibuje un rectángulo (`REC`, `0,0`, `@2000,1200`) y un círculo dentro (`C`, `1000,600`, `300`). Haga clic en {{ui:Extensión}}.
2. Haga clic en {{ui:Sombreado}} en el grupo {{ui:Dibujo}}, o escriba `H` y pulse {{key:Enter}}. El historial indica el patrón actual, por ejemplo `Current hatch: ANSI31, scale 1, angle 0°`.
3. Escriba `P` y pulse {{key:Enter}}; escriba `ANSI31` y pulse {{key:Enter}}.
4. Escriba `SC` y pulse {{key:Enter}}; escriba `20` y pulse {{key:Enter}}. Los tamaños del patrón son en papel, así que un dibujo que se traza a 1:20 necesita escala 20.
5. En `Pick internal point`, haga clic dentro del rectángulo, fuera del círculo. El sombreado aparece como vista previa.
6. Pulse {{key:Enter}}. El rectángulo queda sombreado; el círculo interior queda vacío, porque es una isla.

Haga clic dentro de varias áreas antes de pulsar {{key:Enter}} para crearlas como un único sombreado. `U` deshace la última área.

## Relleno sólido

1. Escriba `H` y pulse {{key:Enter}}.
2. Escriba `P`, pulse {{key:Enter}}, escriba `SOLID` y pulse {{key:Enter}}.
3. Haga clic dentro del círculo y pulse {{key:Enter}}.

## Sombrear formas cerradas que designe

En lugar de hacer clic dentro, escriba `S` (Seleccionar objetos) en `Pick internal point`, designe polilíneas cerradas, círculos o elipses cerradas, y pulse {{key:Enter}}. Las formas que están dentro de otras quedan vacías por turnos (la exterior sombreada, la siguiente vacía, y así sucesivamente).

## Patrones

Escriba `?` en la pregunta del patrón para ver la lista. Los estándar son ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH y SOLID. En un dibujo en pulgadas (o con pies y pulgadas como formato de longitud) se usan los tamaños en pulgadas de los patrones, como en AutoCAD; en caso contrario, los de milímetros.

{{ui:Ángulo}} (`A`) gira todo el patrón: ANSI31 a 90° se inclina en sentido contrario.

**Archivos de patrón.** Escriba `F` (Archivo de patrón) en `Pick internal point` y elija un archivo `.pat`. Los patrones que contiene se añaden a la lista; si hay más de uno, se le preguntará cuál usar. Un archivo sin ningún patrón que CadCraft pueda leer lo indica, y los patrones omitidos se cuentan. Los tamaños de un archivo `.pat` no tienen unidad propia, así que se leen en las unidades del dibujo. Solo se han probado archivos escritos en el formato `.pat` habitual; ninguno generado por otro programa.

## Modificar un sombreado

Selecciónelo (haga clic en una de sus líneas). En {{ui:Propiedades}}: {{ui:Patrón}}, {{ui:Escala de patrón}} y {{ui:Ángulo de patrón}}. Los sombreados de dibujos abiertos muestran su patrón cuando es uno de los estándar; los demás se muestran con un tono claro de su color.

## Errores habituales

- **"No hay un contorno cerrado alrededor de ese punto."** Hay un hueco en el contorno, o parte de él queda fuera de la pantalla: CadCraft solo mira lo que está en pantalla. Cierre el hueco (acerque el zoom a las esquinas) o aleje el zoom.
- **"El patrón es demasiado denso para dibujarlo a esta escala."** Las líneas quedarían más juntas de lo que el dibujo puede mostrar. Use una escala mayor: pruebe la escala de trazado (20 para 1:20).
- **El patrón parece enorme o diminuto.** La escala se expresa en unidades de dibujo por unidad de patrón; véase el paso 4 de arriba.
- **El sombreado dejó de seguir su contorno.** Un sombreado hecho con {{cmd:HATCH}} se queda con los objetos de los que se creó: mueva, gire o escale el contorno y el sombreado lo acompaña; dé forma al contorno con un pinzamiento y el sombreado se recalcula. El vínculo termina cuando el contorno ya no se cierra, cuando da forma al sombreado a mano o cuando lo recorta, y la línea de comandos lo indica. No se pierde nada: vuelva a sombrear el área para volver a vincularlo.

## Un sombreado que se queda con su contorno

Un sombreado creado con `HATCH` recuerda qué lo delimita. Mueva, gire o escale el contorno y el sombreado y su patrón lo acompañan. Arrastre un pinzamiento para dar forma al contorno y el sombreado se recalcula. Si mueve el sombreado por sí solo, su contorno también se mueve, como una forma rellena en un programa de dibujo.

El vínculo termina, y la línea de comandos lo indica, si el contorno deja de cerrarse o si da forma al sombreado a mano. El sombreado en sí se conserva. Escriba `AS` mientras sombrea para crear sombreados independientes. Al copiar un sombreado con su contorno, la copia tiene su propio vínculo.

`HATCHEDIT` (`HE`) cambia el patrón, la escala, el ángulo y el origen de un sombreado, y lo vincula a un contorno o termina el vínculo. El vínculo se guarda en archivos DWG y DXF 2000. Un archivo DXF R12 no tiene objeto de sombreado, y los vínculos creados en otros programas no se leen: use `HATCHEDIT` y Vincular para esos casos.

Un sombreado que ya no tiene contorno (porque se borró o porque el archivo llegó sin él) puede recuperarlo: `HATCHGENERATEBOUNDARY` (`HGB`) dibuja una polilínea cerrada alrededor de cada bucle del sombreado y, si responde Sí, vincula el sombreado a ellas.

## Relleno de degradado

`GRADIENT` (`GD`) rellena un área con un degradado en lugar de un patrón: hace las mismas designaciones que `HATCH`, después de preguntar el tipo (lineal, cilíndrico, esférico, hemisférico, curvo, y cada uno de ellos invertido), un color con un matiz o dos colores, el ángulo y si está centrado. En `HATCH`, la opción `G` hace lo mismo. `HATCHEDIT` `G`, o {{ui:Propiedades}} en Degradado, cambia un degradado o convierte cualquier sombreado en uno.

Un degradado se muestra en pantalla y en los trazados. Si guarda como DWG 2004 o posterior, otros programas reciben un sombreado de degradado real. DXF 2000 y DWG 2000 no tienen degradado: allí CadCraft lo conserva para sí, y los demás programas ven un relleno sólido con el primer color.

## Recortar un sombreado

`TRIM` recorta un sombreado como cualquier otro objeto. Haga clic en el sombreado del lado de la arista de corte que quiere eliminar: las aristas dividen el área sombreada y se quita esa parte. En modo Rápido todos los objetos son aristas de corte; elija las aristas primero (opción `T`) cuando haya muchas. Un sombreado recortado ya no está vinculado a su contorno, porque ya no lo rellena.
