---
title: Listas de materiales por zona
summary: Marque áreas de un dibujo como zonas y coloque una tabla para cada una que cuente los bloques dentro de ella. Las tablas siguen al dibujo mientras trabaja, y usted elige qué columnas muestra cada una.
keywords: lista de materiales, LDM, lista de partes, cuadro de materiales, zona, área, tabla, conteo, cantidad, atributo, columnas, número de elemento, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Una **zona** es un área con nombre del dibujo. Una **tabla de lista de materiales** enumera lo que hay dentro de una zona, o en todo el dibujo: cada bloque con su cantidad y sus valores de atributo. Un dibujo puede tener tantas zonas y tablas como necesite, y una zona puede tener varias tablas con columnas distintas.

Las herramientas están en la pestaña Bloques, bajo {{ui:Lista de materiales}}, en el menú Más del grupo Bloques, y se pueden escribir.

## Crear una zona

Escriba {{cmd:BOMZONE}} y elija una de estas opciones:

- haga clic en dos esquinas opuestas para un rectángulo,
- elija {{ui:Polígono}}, haga clic en cada esquina y pulse Enter para cerrarlo, o
- elija {{ui:Objeto}} y señale una polilínea cerrada, un círculo, una elipse o una spline cerrada. Su contorno se copia; el objeto permanece como está.

Luego escriba el nombre de la zona. La zona se dibuja como un contorno discontinuo con su nombre encima de la esquina superior izquierda, en la capa `BOM-ZONES`, que no se traza. Active el trazado de esa capa si quiere ver las zonas en papel.

Una zona es una polilínea cerrada normal: muévala, estírela o arrastre sus pinzamientos, y su nombre la sigue. Para renombrar una zona, edite el texto del nombre, o use {{cmd:BOMZONE}} y {{ui:Renombrar}}. {{ui:Zonas}} enumera cada zona y cuántas tablas tiene.

## Colocar una tabla

Escriba {{cmd:BOMTABLE}} (o {{cmd:BOM}}), señale el contorno de la zona o su nombre, indique la altura del texto y haga clic donde va la esquina superior izquierda de la tabla. Pulse Enter en lugar de señalar una zona, o elija {{ui:Todo}}, para una tabla de todo el dibujo.

Una tabla nueva muestra el número de elemento, la cantidad, el nombre del bloque y una columna para cada atributo que llevan los bloques (las primeras seis; las demás se ofrecen sin marcar). Los bloques con el mismo nombre y los mismos valores de atributo comparten una fila.

## Qué cuenta como dentro

- Un bloque cuenta en la zona que contiene su **punto de inserción**.
- Una línea, arco, círculo, polilínea, elipse, spline o sombreado cuenta **completo** en la zona que contiene el centro de su extensión (en una línea, su punto medio). Su longitud no se corta en el borde de la zona.
- Un punto exactamente sobre el borde está dentro.
- Las zonas pueden superponerse. Cada zona cuenta por sí misma, así que un objeto en la superposición está en ambas tablas.

## Las tablas siguen al dibujo

Cuando agrega, mueve, copia o borra un bloque, edita un atributo, o cambia la forma o mueve una zona, cada tabla se redibuja en el mismo paso. Deshacer revierte su edición y el cambio de la tabla juntos.

Para que una tabla deje de seguir, marque {{ui:Inutilizadas}} en su configuración. Una tabla inutilizada cambia solo cuando edita su configuración o escribe {{cmd:BOMUPDATE}}, que actualiza ahora todas las tablas.

## Elegir las columnas

Seleccione una tabla y escriba {{cmd:BOMEDIT}}. En el cuadro de diálogo:

- **Columnas**: marque las que quiera mostrar (elemento, cantidad, nombre, capa, longitud, área, observaciones y cada atributo), escriba su propio encabezado para cualquiera de ellas, y muévalas hacia arriba o abajo.
- {{ui:Agrupar filas por}}: nombre del bloque y valores de atributo, solo nombre del bloque, capa, o un atributo. En una fila combinada, un valor que difiere entre bloques dice "varía".
- {{ui:Ordenar por}} cualquier columna, ascendente o descendente.
- {{ui:Título}}, {{ui:Mostrar el título}} y {{ui:Fila de totales}}.
- {{ui:Contar trazos por capa}} agrega una fila por capa con el número de objetos, su longitud total y, para formas cerradas, su área total, en unidades del dibujo.
- **Observaciones**: marque la columna Observaciones y luego escriba una observación para cualquier fila en la tabla, en la parte inferior del cuadro de diálogo.

Cada tabla conserva sus propias opciones.

## Números de elemento

Una fila conserva su número de elemento mientras esté en la tabla. Una fila nueva toma el siguiente número libre, y un número ya asignado no se vuelve a usar, para que los globos y las notas que citan un número sigan siendo correctos. {{ui:Renumerar partidas}} los numera desde 1, en el orden mostrado.

Una fila se identifica por lo que agrupa: si cambia cómo se agrupan las filas, o cambia un valor de atributo que usa la agrupación, la fila cuenta como nueva.

## Exportar y otros programas

{{cmd:BOMEXPORT}}, o {{ui:Exportar CSV}} en el cuadro de diálogo, guarda una tabla como archivo .csv para una hoja de cálculo.

En un archivo DWG o DXF, una tabla es un bloque normal de líneas y texto, así que otros programas la muestran y la trazan tal como se dibujó. Allí no es un objeto de tabla, y no se actualiza en otros programas. El vínculo con su zona se guarda en el archivo como datos de extensión que CadCraft lee de nuevo, de modo que la tabla vuelve a estar activa al reabrir el dibujo en CadCraft. Un DXF R12 de un dibujo sin hoja no conserva el ajuste "no trazado" de la capa de la zona.

Descomponer una tabla la convierte en líneas y texto sueltos, y termina el vínculo.
