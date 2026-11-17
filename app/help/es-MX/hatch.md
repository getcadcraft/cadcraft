---
title: Sombrear y rellenar áreas
summary: Rellene un área con un color sólido o con un patrón estándar al hacer clic dentro de ella o al designar formas cerradas, defina la escala y el ángulo del patrón y modifique un sombreado después.
keywords: sombreado, bhatch, relleno, relleno sólido, patrón, ansi31, ansi37, ladrillo, tierra, red, líneas de sección, poché, isla, contorno, escala, ángulo
from: 14399174
---

## Lo que va a crear

Una sección de muro rellena con el patrón ANSI31, una columna dentro dejada vacía y un relleno sólido en la columna.

## Sombrear haciendo clic dentro de un área

1. Dibuje un rectángulo (`REC`, `0,0`, `@2000,1200`) y un círculo dentro de él (`C`, `1000,600`, `300`). Haga clic en {{ui:Extensión}}.
2. Haga clic en {{ui:Sombreado}} en el grupo {{ui:Dibujo}}, o escriba `H` y pulse {{key:Enter}}. El historial indica el patrón actual, por ejemplo `Sombreado actual: ANSI31, escala 1, ángulo 0°`.
3. Escriba `P` y pulse {{key:Enter}}; escriba `ANSI31` y pulse {{key:Enter}}.
4. Escriba `SC` y pulse {{key:Enter}}; escriba `20` y pulse {{key:Enter}}. Los tamaños de patrón se miden en papel, así que un dibujo trazado a 1:20 necesita escala 20.
5. En `Precise un punto interior`, haga clic dentro del rectángulo, fuera del círculo. El sombreado se muestra como vista previa.
6. Pulse {{key:Enter}}. El rectángulo queda sombreado; el círculo interior permanece vacío, porque es una isla.

Haga clic dentro de varias áreas antes de pulsar {{key:Enter}} para crear un solo sombreado. `U` deshace la última área.

## Relleno sólido

1. Escriba `H` y pulse {{key:Enter}}.
2. Escriba `P`, pulse {{key:Enter}}, escriba `SOLID` y pulse {{key:Enter}}.
3. Haga clic dentro del círculo y pulse {{key:Enter}}.

## Sombrear formas cerradas que designe

En lugar de hacer clic dentro, escriba `S` (Designe objetos) en `Precise un punto interior` y designe polilíneas cerradas, círculos o elipses cerradas, y luego pulse {{key:Enter}}. Las formas dentro de otras se dejan vacías alternadamente (la exterior se sombrea, la siguiente queda vacía, y así sucesivamente).

## Patrones

Escriba `?` en la pregunta de patrón para ver la lista. Los patrones estándar son ANSI31 a ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS y EARTH, y SOLID. En un dibujo en pulgadas (o con pies y pulgadas como formato de longitud) se usan los tamaños en pulgadas de los patrones, como en AutoCAD; de lo contrario, los tamaños en milímetros.

{{ui:Ángulo}} (`A`) gira todo el patrón: ANSI31 a 90° se inclina en sentido contrario.

**Archivos de patrón.** Escriba `F` (Archivo de patrón) en `Precise un punto interior` y elija un archivo `.pat`. Los patrones del archivo se suman a la lista; si hay más de uno, se le pregunta cuál usar. Un archivo sin ningún patrón que CadCraft pueda leer lo indica, y se cuenta cualquier patrón que haya omitido. Los tamaños de un archivo `.pat` no tienen unidad propia, así que se leen en las unidades del dibujo. Solo se han probado archivos escritos en el formato `.pat` habitual; ninguno creado por otro programa.

## Modificar un sombreado

Designe el sombreado (haga clic en una de sus líneas). En {{ui:Propiedades}}: {{ui:Patrón}}, {{ui:Escala de patrón}} y {{ui:Ángulo de patrón}}. Los sombreados de dibujos abiertos muestran su patrón cuando es uno de los estándar; los demás se muestran con un tono claro de su color.

## Errores comunes

- **"No hay un contorno cerrado alrededor de ese punto."** Hay un hueco en el contorno, o parte de él está fuera de pantalla: CadCraft solo revisa lo que está en pantalla. Cierre el hueco (haga zoom en las esquinas) o aleje la vista.
- **"El patrón es demasiado denso para dibujarse a esta escala."** Las líneas quedarían más juntas de lo que el dibujo puede mostrar. Use una escala mayor: pruebe la escala de trazado (20 para 1:20).
- **El patrón se ve enorme o diminuto.** La escala es en unidades de dibujo por unidad de patrón; vea el paso 4 arriba.
- **Mover el contorno no mueve el sombreado.** Un sombreado no está ligado a su contorno. Mueva ambos, o vuelva a sombrear.

## Un sombreado que permanece unido a su contorno

Un sombreado que crea con `HATCH` recuerda qué lo delimita. Si desplaza, gira o escala el contorno, el sombreado y su patrón lo acompañan. Arrastre un pinzamiento para cambiar la forma del contorno y el sombreado se recalcula. Si mueve el sombreado por sí solo, su contorno también se mueve, como una forma rellena en un programa de dibujo.

La vinculación termina, y la línea de comandos lo indica, si el contorno ya no se cierra o si modifica el sombreado a mano. El sombreado en sí se conserva. Escriba `AS` mientras sombrea para crear sombreados independientes. Si copia un sombreado con su contorno, la copia tiene su propia vinculación.

`HATCHEDIT` (`HE`) cambia el patrón, la escala, el ángulo y el origen de un sombreado, y lo vincula a un contorno o termina la vinculación. La vinculación se guarda en archivos DWG y DXF 2000. Un archivo DXF R12 no tiene objeto de sombreado, y las vinculaciones hechas en otros programas no se leen: para esas use `HATCHEDIT` y Vincular.

Un sombreado que ya no tiene contorno (se borró el contorno o el archivo llegó sin él) puede recuperarlo: `HATCHGENERATEBOUNDARY` (`HGB`) dibuja una polilínea cerrada alrededor de cada bucle del sombreado y, si responde Sí, vincula el sombreado a ellas.

## Relleno degradado

`GRADIENT` (`GD`) rellena un área con un degradado en lugar de un patrón: se designan los mismos puntos que en `HATCH`, después pregunta el tipo (lineal, cilíndrico, esférico, hemisférico, curvo, y cada uno de estos invertido), un color con tinte o dos colores, el ángulo, y si va centrado o no. En `HATCH` la opción `G` hace lo mismo. `HATCHEDIT` `G`, o {{ui:Propiedades}} en Degradado, cambia un degradado o convierte cualquier sombreado en uno.

Un degradado se muestra en pantalla y en los trazados. Si guarda como DWG 2004 o posterior, otros programas reciben un sombreado de degradado real. DXF 2000 y DWG 2000 no tienen degradado: ahí CadCraft lo conserva solo para sí, y otros programas ven un relleno sólido en el primer color.

## Recortar un sombreado

`TRIM` recorta un sombreado como cualquier otro objeto. Haga clic en el sombreado del lado que quiere eliminar del borde de corte: los bordes dividen el área sombreada y esa parte se elimina. En modo Rápido, cada objeto es un borde de corte; elija primero los bordes (opción `T`) cuando haya muchos. Un sombreado recortado ya no está vinculado a su contorno, porque ya no lo rellena.
