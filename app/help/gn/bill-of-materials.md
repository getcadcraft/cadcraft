---
title: Planillas de materiales por zona
summary: Marcá áreas del plano como zonas y colocá una tabla para cada una que cuente los bloques dentro. Las tablas siguen al plano mientras trabajás, y elegís qué columnas muestra cada una.
keywords: lista de materiales, BOM, lista de partes, planilla, zona, área, tabla, conteo, cantidad, atributo, columnas, número de ítem, csv, BOMZONE, BOMTABLE, BOMEDIT, BOMUPDATE, BOMEXPORT
from: 412d5aba
---

Una **zona** es un área con nombre del plano. Una **tabla de planilla de materiales** lista lo que hay dentro de una zona, o en todo el plano: cada bloque con su cantidad y sus valores de atributo. Un plano puede tener tantas zonas y tablas como necesites, y una zona puede tener varias tablas con columnas distintas.

Las herramientas están en la pestaña {{ui:Bloques}}, bajo {{ui:Planilla de materiales}}, en el menú {{ui:Más}} del grupo Bloques, y se pueden escribir.

## Hacer una zona

Escribí {{cmd:BOMZONE}} y elegí una de estas opciones:

- hacé clic en dos esquinas opuestas para un rectángulo,
- elegí {{ui:Polígono}}, hacé clic en cada esquina y presioná Enter para cerrarlo, o
- elegí {{ui:Objeto}} y señalá una polilínea cerrada, un círculo, una elipse o un spline cerrado. Su contorno se copia; el objeto queda como está.

Después escribí el nombre de la zona. La zona se dibuja como un contorno de trazos con su nombre encima de la esquina superior izquierda, en la capa `BOM-ZONES`, que no se imprime. Activá la impresión de esa capa si querés las zonas en papel.

Una zona es una polilínea cerrada común: movela, estirala o arrastrá sus agarres, y su nombre la sigue. Para renombrar una zona, editá el texto del nombre, o usá {{cmd:BOMZONE}} y {{ui:Renombrar}}. {{ui:Zonas}} lista cada zona y cuántas tablas tiene.

## Colocar una tabla

Escribí {{cmd:BOMTABLE}} (o {{cmd:BOM}}), señalá el contorno de la zona o su nombre, indicá la altura del texto y hacé clic donde irá la esquina superior izquierda de la tabla. Presioná Enter en vez de señalar una zona, o elegí {{ui:Todo}}, para una tabla de todo el plano.

Una tabla nueva muestra el número de ítem, la cantidad, el nombre del bloque y una columna por cada atributo que llevan los bloques (las primeras seis; las demás se ofrecen sin tildar). Los bloques con el mismo nombre y los mismos valores de atributo comparten una fila.

## Qué cuenta como adentro

- Un bloque cuenta en la zona que contiene su **punto de inserción**.
- Una línea, arco, círculo, polilínea, elipse, spline o sombreado cuenta **completo** en la zona que contiene el centro de su extensión (en una línea, su punto medio). Su longitud no se corta en el borde de la zona.
- Un punto exactamente sobre el borde está adentro.
- Las zonas pueden superponerse. Cada zona cuenta por sí misma, así que un objeto en la superposición está en ambas tablas.

## Las tablas siguen al plano

Cuando agregás, movés, copiás o borrás un bloque, editás un atributo, o reformás o movés una zona, cada tabla se redibuja en el mismo paso. Deshacer revierte tu edición y el cambio en la tabla juntos.

Para que una tabla deje de seguir al plano, tildá {{ui:Congelada}} en sus ajustes. Una tabla congelada cambia solo cuando editás sus ajustes o escribís {{cmd:BOMUPDATE}}, que actualiza todas las tablas ahora.

## Elegir las columnas

Seleccioná una tabla y escribí {{cmd:BOMEDIT}}. En el diálogo:

- **Columnas**: tildá las que querés mostrar (ítem, cantidad, nombre, capa, longitud, superficie, observaciones y cada atributo), escribí tu propio encabezado para cualquiera de ellas, y movelas arriba o abajo.
- {{ui:Agrupar filas por}}: nombre de bloque y valores de atributo, solo nombre de bloque, capa, o un atributo. En una fila combinada, un valor que difiere entre bloques dice "varía".
- {{ui:Ordenar por}} cualquier columna, ascendente o descendente.
- {{ui:Título}}, {{ui:Mostrar el título}} y {{ui:Fila de totales}}.
- {{ui:Contar trazos por capa}} agrega una fila por capa con la cantidad de objetos, su longitud total y, para formas cerradas, su superficie total, en unidades del plano.
- **Observaciones**: tildá la columna Observaciones y escribí una observación para cualquier fila en la parte de abajo del diálogo.

Cada tabla guarda sus propias elecciones.

## Números de ítem

Una fila conserva su número de ítem mientras esté en la tabla. Una fila nueva toma el siguiente número libre, y un número ya entregado no se vuelve a usar, así los globos y las notas que citan un número siguen correctos. {{ui:Renumerar ítems}} los numera desde 1 en el orden mostrado.

Una fila se reconoce por lo que agrupa: si cambiás cómo se agrupan las filas, o cambiás un valor de atributo que usa el agrupamiento, la fila cuenta como una nueva.

## Exportar y otros programas

{{cmd:BOMEXPORT}}, o {{ui:Exportar CSV}} en el diálogo, guarda una tabla como archivo .csv para una planilla de cálculo.

En un archivo DWG o DXF, una tabla es un bloque común de líneas y texto, así que otros programas la muestran e imprimen tal como está dibujada. Allí no es un objeto de tabla, y no se actualiza en otros programas. El vínculo con su zona queda guardado en el archivo como datos de extensión que CadCraft lee de nuevo, así la tabla vuelve a estar viva cuando reabrís el plano en CadCraft. Un DXF R12 de un plano sin hoja no conserva la configuración "no imprimir" de la capa de la zona.

Descomponer una tabla la convierte en líneas y texto sueltos, y corta el vínculo.
