---
title: Puntos para programas BIM
summary: Exporte puntos, y los puntos de inserción de bloques con una descripción, a un archivo CSV o TXT que importan los programas BIM y de topografía.
keywords: exportpoints, exportar puntos, puntos, csv, txt, pnezd, penzd, xyz, puntos de levantamiento, coordenadas, bim, replanteo, archivo de puntos, norte, este, elevación
from: d80e2d53
---

## Lo que va a crear

Un archivo de puntos: una línea por punto, con su número, norte, este, elevación y descripción, que pueden importar los programas BIM (Revit y Archicad, entre ellos) y el software de topografía para colocar puntos de levantamiento, marcadores de sitio o equipos.

## Exportar los puntos

1. Seleccione los puntos y las referencias a bloque cuyos puntos de inserción desea, o no seleccione nada para tomar todos los puntos.
2. Escriba {{cmd:EXPORTPOINTS}} (o `EXPPTS`, o {{ui:Bloques}} › {{ui:Más}} › {{ui:Exportar puntos}}) y pulse {{key:Enter}} (pulse {{key:Enter}} otra vez en `Designe puntos y bloques` cuando no se seleccionó nada).
3. Cuando eligió bloques con atributos, CadCraft enumera sus etiquetas: escriba la que tiene el valor de la descripción (por ejemplo `ITEM`), o cualquier otra cosa para usar el nombre de cada bloque.
4. Elija las columnas: `PNEZD` (punto, norte, este, elevación, descripción: la habitual), `PENZD` (este antes que norte) o `XYZ` (solo las coordenadas).
5. Elija las unidades: `D` como se dibujó, o `M` metros o `F` pies (solo cuando las unidades del dibujo están configuradas: Propiedades › {{ui:Unidades}} sin nada seleccionado).
6. Con un SCP establecido, elija `W` mundo o `U` coordenadas del SCP (vea [SCP y una vista girada](topic:ucs-and-turned-view)).
7. Elija `C` para un `.csv` separado por comas o `T` para un `.txt` separado por tabuladores, y el número del primer punto.

El archivo se descarga como `<drawing>-points.csv` (o `.txt`), y el historial indica cuántos puntos contiene.

## Qué contiene el archivo

- Un punto por línea, terminando con un salto de línea (CR LF), con tres decimales.
- La elevación de un punto es su Z (0 cuando no tiene). El punto de un bloque es su punto de inserción.
- Una descripción que contiene una coma (o un tabulador en un TXT) o una comilla se pone entre comillas dobles, con sus comillas duplicadas.
- El formato es el que lee y escribe CivilCraft, así que el archivo también se abre allí como puntos.

## Errores comunes

- Solo se ofrece `D` para las unidades: el dibujo no tiene unidades configuradas. Configúrelas, o conviértalas en el otro programa.
- Los puntos quedan lejos de donde espera en el otro programa: exporte coordenadas del mundo (`W`), o el SCP que usa el punto de levantamiento del otro programa (`U`).
