---
title: Atributos de bloques
summary: Ehecha y cambiá los valores que lleva una referencia de bloque, como un número de ítem o un fabricante, y conservalos al guardar una copia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, bloque de rótulo, editar in situ, editor de atributos, attdef, definir atributo, bedit, editor de bloques, bclose, atributo, atributos, attrib, etiqueta, número de ítem, valor, invisible, constante, bloque, propiedades, lista, etiqueta de equipo
from: 34d307c7
---

## Qué son los atributos

Un atributo es un valor con nombre que viaja con una referencia de bloque: el número de ítem de una etiqueta de equipo, el nombre de una etiqueta de ambiente, la resistencia al fuego de una puerta. La definición del bloque dice qué atributos tiene (cada uno tiene una **etiqueta**, un **aviso**, un **valor predeterminado** y una ubicación, tamaño y ángulo para su texto). Cada referencia al bloque lleva sus propios valores.

Algunos atributos son **invisibles**: guardan datos, como un fabricante o un número de modelo, pero nunca se dibujan. Algunos son **constantes**: iguales para cada referencia, fijados por el bloque.

## De dónde vienen los atributos

- Los bloques de los archivos DWG y DXF que abrís conservan sus atributos, con los valores de cada referencia.
- Los bloques que traés con {{cmd:INSERT}} y la opción {{ui:Archivo}} conservan los suyos. Ver [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).
- Los ítems de la biblioteca llegan como bloques con atributos: un número de ítem visible y los datos del ítem, invisibles.

- Bloques que hacés vos: primero definí los atributos con {{cmd:ATTDEF}} (abajo), después seleccionalos junto con los otros objetos al crear el bloque.

## Definir atributos para tus propios bloques

1. Dibujá las líneas del bloque, por ejemplo una etiqueta de ambiente.
2. Elegí {{ui:Bloques}} › {{ui:Más}} › {{ui:Definir atributo}}, o escribí `ATT` y presioná {{key:Enter}}.
3. El historial muestra los modos (`Invisible=No Constant=No Preset=No`). Escribí `I`, `C` o `P` para cambiar uno, y presioná {{key:Enter}} cuando estén bien. Los valores invisibles se conservan pero no se dibujan; uno constante tiene el mismo valor en cada referencia; uno predefinido no se pide al insertar el bloque.
4. Escribí la etiqueta (por ejemplo `ROOM_NO`: mayúsculas, sin espacios), el aviso (`Room number`) y un valor predeterminado (`101`).
5. Hacé clic donde va el valor, y dá la altura y la rotación. La etiqueta se muestra en el plano.
6. Creá el bloque con {{cmd:BLOCK}}, seleccionando juntas las líneas y las definiciones de atributo. La referencia que las reemplaza recibe los valores predeterminados; cada {{cmd:INSERT}} nuevo los pide.

Una definición de atributo seleccionada muestra {{ui:Etiqueta}}, {{ui:Aviso}}, {{ui:Predeterminado}} y los modos en {{ui:Propiedades}}.

## Cambiar un bloque: el editor de bloques

{{ui:Bloques}} › {{ui:Más}} › {{ui:Editar bloque}} ({{cmd:BEDIT}}, `BE`) abre un bloque por separado: escribí su nombre (o seleccioná antes una referencia). Una barra arriba indica qué bloque estás editando. Dibujá, borrá y cambiá sus objetos con los comandos habituales, y agregá o cambiá definiciones de atributo. Después hacé clic en {{ui:Guardar bloque}} (o escribí {{cmd:BCLOSE}} y `S`): cada referencia muestra el cambio, y un {{key:Mod+Z}} deshace todo. {{ui:Descartar cambios}} ({{cmd:BCLOSE}}, `D`) deja el bloque como estaba.

Cuando agregaste, quitaste o cambiaste definiciones de atributo, al guardar también se ajusta cada referencia: los valores que escribiste se conservan, un atributo nuevo recibe su valor predeterminado, uno quitado se borra, y cada atributo vuelve a la posición que indica la definición.
El historial dice cuántas referencias se actualizaron.

## Editar un bloque de rótulo en su lugar (REFEDIT)

Un bloque de rótulo en una hoja suele estar dentro de un bloque. Para cambiar sus líneas o textos sin salir de la hoja:

1. Seleccioná el bloque de rótulo, después {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar en su lugar}} (o escribí {{cmd:REFEDIT}}).
2. Su contenido pasa a ser objetos comunes en su lugar; todo lo demás queda atenuado y no se puede cambiar.
3. Cambiá, borrá o dibujá: los objetos nuevos pasan a formar parte del bloque.
4. Hacé clic en {{ui:Guardar el bloque}} en la barra de arriba (o escribí {{cmd:REFCLOSE}} y `S`). Cada referencia muestra el cambio, y un {{key:Mod+Z}} deshace toda la edición. {{ui:Descartar}} deja el bloque como estaba.

Un plano vinculado, un bloque dinámico, o una referencia escalada de forma distinta en horizontal y vertical no se pueden editar en su lugar: usá {{cmd:BEDIT}} (o abrí el plano vinculado).

:::note
Guardá o descartá en el editor de bloques antes de guardar el plano: un archivo guardado mientras el editor está abierto tiene el bloque como estaba antes.
:::

## Completarlos al colocar un bloque

1. Escribí `I` y presioná {{key:Enter}}, escribí el nombre del bloque y presioná {{key:Enter}}.
2. Hacé clic donde va.
3. CadCraft pide cada valor, por ejemplo `Enter Item number (ITEM) <>`. Escribí el valor y presioná {{key:Enter}}, o presioná {{key:Enter}} para conservar el predeterminado que aparece entre paréntesis angulares.

Los valores que el bloque marca como predefinidos, y los constantes, no se piden. Toman su valor predeterminado.

## Ver y cambiar los valores

1. Hacé clic en una referencia de bloque.
2. En el panel derecho, bajo {{ui:Atributos}}, cada etiqueta tiene su valor. Los invisibles dicen `hidden`.
3. Hacé clic en un valor, escribí el nuevo y presioná {{key:Enter}}.

El plano muestra el nuevo valor enseguida. Cada cambio es un paso: {{key:Mod+Z}} lo deshace.

**El editor de atributos.** Hacé doble clic en una referencia con atributos (o escribí {{cmd:EATTEDIT}}): se abre el diálogo {{ui:Editar atributos}}, que lista cada etiqueta con su aviso y su valor. Escribí los nuevos valores; hacé clic en una fila para cambiar la {{ui:Altura}}, {{ui:Rotación}}, {{ui:Factor de ancho}}, {{ui:Justificar}}, {{ui:Capa}}, {{ui:Color}} e {{ui:Invisible}} de ese atributo, solo para esta referencia. {{ui:Aplicar}} deja el diálogo abierto; {{ui:Aceptar}} aplica y cierra. Cada {{ui:Aplicar}} o {{ui:Aceptar}} es un paso de deshacer.

**En la línea de comandos**, {{cmd:ATTEDIT}} pide cada valor por turno: escribí uno nuevo, o presioná {{key:Enter}} para conservar el actual.

## Cambiar las definiciones de atributo (BATTMAN, ATTSYNC)

{{ui:Bloques}} › {{ui:Más}} › {{ui:Administrador de atributos}} ({{cmd:BATTMAN}}) lista los atributos de un bloque: cambiá una etiqueta, aviso o predeterminado, tildá {{ui:Invisible}}, {{ui:Constante}} o {{ui:Predefinido}}, y subilos o bajalos (el orden en que se piden los valores). Con {{ui:Actualizar las referencias (valores conservados)}} tildado, {{ui:Aplicar}} también ajusta cada referencia; una etiqueta renombrada conserva sus valores. Cada {{ui:Aplicar}} es un paso de deshacer.

{{cmd:ATTSYNC}} ajusta a mano las referencias a las definiciones de su bloque: `S` elige una referencia, `N` nombra un bloque, `A` hace todos los bloques. Los valores se conservan.

Los valores de los campos propios de un ítem de biblioteca (su id, versión, licencia y atribución) se muestran pero no se pueden editar, para que la verificación de actualizaciones siga funcionando. Su número de ítem y su cantidad sí los podés cambiar vos.

## Listarlos

Seleccioná referencias y escribí `LI` (para {{cmd:LIST}}). El historial muestra cada atributo como `TAG = value`, con `(invisible)` o `(constant)` donde corresponda.

## Mover, girar y descomponer

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} y {{cmd:MIRROR}} conservan los valores; el texto se mueve con el bloque y sigue siendo legible.
- {{cmd:EXPLODE}} convierte los atributos visibles en texto común con sus valores. Los invisibles se pierden.

## Guardar

Un DWG y un DXF guardados conservan cada atributo: las definiciones de cada bloque (también las invisibles, constantes y predefinidas) y los valores de cada referencia. Otros programas CAD los leen como atributos de bloque comunes.

En un DXF R12, un valor de más de 255 caracteres se corta a 255, y el historial lo dice.

## Errores comunes

- **Un valor no se ve en el plano.** Es invisible, o está vacío. Los valores invisibles siguen apareciendo en el panel derecho.
- **El valor que escribí fue a la línea de comandos.** Hacé clic primero en el cuadro de valor del panel derecho.
