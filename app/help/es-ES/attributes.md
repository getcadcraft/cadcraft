---
title: Atributos de bloque
summary: Vea y cambie los valores que lleva una referencia de bloque, como un número de elemento o un fabricante, y consérvelos al guardar una copia.
keywords: eattedit, attedit, ddatte, battman, attsync, refedit, refclose, cajetín, editar en su sitio, editor de atributos, attdef, definir atributo, bedit, editor de bloques, bclose, atributo, atributos, attrib, etiqueta, número de elemento, valor, invisible, constante, bloque, propiedades, lista, etiqueta de equipo
from: 34d307c7
---

## Qué son los atributos

Un atributo es un valor con nombre que viaja con una referencia de bloque: el número de elemento de la etiqueta de un equipo, el nombre de la etiqueta de una habitación, la clasificación de resistencia al fuego de una puerta. La definición del bloque indica qué atributos tiene (cada uno tiene una **etiqueta**, una **solicitud**, un **valor por defecto** y una posición, tamaño y ángulo para su texto). Cada referencia al bloque lleva sus propios valores.

Algunos atributos son **invisibles**: contienen datos, como un fabricante o un número de modelo, pero nunca se dibujan. Algunos son **constantes**: son iguales en todas las referencias, porque los fija el bloque.

## De dónde vienen los atributos

- Los bloques de los archivos DWG y DXF que abre conservan sus atributos, con los valores de cada referencia.
- Los bloques que trae con {{cmd:INSERT}} y la opción {{ui:Archivo}} conservan los suyos. Véase [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).
- Los elementos de biblioteca llegan como bloques con atributos: un número de elemento visible y los datos del elemento, invisibles.
- Los bloques que crea usted mismo: defina los atributos primero con {{cmd:ATTDEF}} (abajo), y después selecciónelos con los demás objetos al crear el bloque.

## Definir atributos para sus propios bloques

1. Dibuje las líneas del bloque, por ejemplo una etiqueta de habitación.
2. Elija {{ui:Bloques}} › {{ui:Más}} › {{ui:Definir atributo}}, o escriba `ATT` y pulse {{key:Enter}}.
3. El historial muestra los modos (`Invisible=No Constant=No Preset=No`). Escriba `I`, `C` o `P` para cambiar uno, y pulse {{key:Enter}} cuando estén correctos. Los valores invisibles se conservan pero no se dibujan; un valor constante es igual en cada referencia; un valor predefinido no se pide al insertar el bloque.
4. Escriba la etiqueta (por ejemplo `ROOM_NO`: en mayúsculas, sin espacios), la solicitud (`Número de habitación`) y un valor por defecto (`101`).
5. Haga clic donde irá el valor, e indique la altura y la rotación. La etiqueta aparece en el dibujo.
6. Cree el bloque con {{cmd:BLOCK}}, seleccionando juntas las líneas y las definiciones de atributo. La referencia que las sustituye recibe los valores por defecto; cada nuevo {{cmd:INSERT}} los pide.

Una definición de atributo seleccionada muestra {{ui:Etiqueta}}, {{ui:Solicitud}}, {{ui:Por defecto}} y los modos en {{ui:Propiedades}}.

## Cambiar un bloque: el editor de bloques

{{ui:Bloques}} › {{ui:Más}} › {{ui:Editar bloque}} ({{cmd:BEDIT}}, `BE`) abre un bloque por separado: escriba su nombre (o seleccione antes una referencia). Una barra superior indica qué bloque está editando. Dibuje, borre y cambie sus objetos con los comandos habituales, y añada o cambie definiciones de atributo. Después haga clic en {{ui:Guardar bloque}} (o escriba {{cmd:BCLOSE}} y `S`): cada referencia muestra el cambio, y un {{key:Mod+Z}} lo deshace todo. {{ui:Descartar cambios}} ({{cmd:BCLOSE}}, `D`) deja el bloque como estaba.

Cuando añadió, quitó o cambió definiciones de atributo, al guardar también se actualiza cada referencia: los valores que escribió se conservan, un atributo nuevo recibe su valor por defecto, uno eliminado desaparece y cada atributo vuelve a la posición que indica la definición. El historial indica cuántas referencias se actualizaron.

## Editar un cajetín donde está (REFEDIT)

Un cajetín en una hoja suele estar dentro de un bloque. Para cambiar sus líneas o textos sin salir de la hoja:

1. Seleccione el cajetín y después {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar en su sitio}} (o escriba {{cmd:REFEDIT}}).
2. Su contenido se convierte en objetos normales en su lugar; lo demás se atenúa y no se puede cambiar.
3. Cambie, borre o dibuje: los objetos nuevos pasan a formar parte del bloque.
4. Haga clic en {{ui:Guardar el bloque}} en la barra superior (o escriba {{cmd:REFCLOSE}} y `S`). Cada referencia muestra el cambio, y un {{key:Mod+Z}} deshace toda la edición. {{ui:Descartar}} deja el bloque como estaba.

Un dibujo vinculado, un bloque dinámico o una referencia escalada de forma distinta en horizontal y en vertical no se pueden editar en su sitio: use {{cmd:BEDIT}} (o abra el dibujo vinculado).

:::note
Guarde o descarte en el editor de bloques antes de guardar el dibujo: un archivo guardado con el editor abierto conserva el bloque como estaba antes.
:::

## Rellenarlos al colocar un bloque

1. Escriba `I` y pulse {{key:Enter}}, escriba el nombre del bloque y pulse {{key:Enter}}.
2. Haga clic donde irá.
3. CadCraft pide cada valor, por ejemplo `Introduzca Número de elemento (ITEM) <>`. Escriba el valor y pulse {{key:Enter}}, o pulse {{key:Enter}} para conservar el valor por defecto que aparece entre corchetes angulares.

Los valores que el bloque marca como predefinidos, y los constantes, no se piden: toman su valor por defecto.

## Ver y cambiar los valores

1. Haga clic en una referencia de bloque.
2. En el panel derecho, bajo {{ui:Atributos}}, cada etiqueta tiene su valor. Los invisibles indican `oculto`.
3. Haga clic en un valor, escriba el nuevo y pulse {{key:Enter}}.

El dibujo muestra el nuevo valor al instante. Cada cambio es un paso: {{key:Mod+Z}} lo deshace.

**El editor de atributos.** Haga doble clic en una referencia con atributos (o use {{cmd:EATTEDIT}}): el cuadro {{ui:Editar atributos}} enumera cada etiqueta con su solicitud y su valor. Escriba valores nuevos; haga clic en una fila para cambiar la {{ui:Altura}}, la {{ui:Rotación}}, el {{ui:Factor de anchura}}, la {{ui:Justificar}}, la {{ui:Capa}}, el {{ui:Color}} y {{ui:Invisible}} de ese atributo, solo para esta referencia. {{ui:Aplicar}} mantiene el cuadro abierto; {{ui:Aceptar}} aplica y cierra. Cada {{ui:Aplicar}} o {{ui:Aceptar}} es un paso de deshacer.

**En la línea de comandos**, {{cmd:ATTEDIT}} pide cada valor por turno: escriba uno nuevo, o pulse {{key:Enter}} para conservarlo.

## Cambiar las definiciones de atributo (BATTMAN, ATTSYNC)

{{ui:Bloques}} › {{ui:Más}} › {{ui:Administrador de atributos}} ({{cmd:BATTMAN}}) enumera los atributos de un bloque: cambie una etiqueta, solicitud o valor por defecto, marque {{ui:Invisible}}, {{ui:Constante}} o {{ui:Predefinido}}, y súbalos o bájelos (el orden en que se piden los valores). Con {{ui:Actualizar las referencias (se conservan los valores)}} marcado, {{ui:Aplicar}} también pone en línea cada referencia; una etiqueta renombrada conserva sus valores. Cada {{ui:Aplicar}} es un paso de deshacer.

{{cmd:ATTSYNC}} pone a mano las referencias en línea con las definiciones de su bloque: `S` elige una referencia, `N` nombra un bloque, `A` actualiza todos los bloques. Los valores se conservan.

Los valores de los campos propios de un elemento de biblioteca (su identificador, versión, licencia y atribución) se muestran pero no se pueden editar, para que la comprobación de actualizaciones siga funcionando. Usted puede cambiar su número de elemento y su cantidad.

## Listarlos

Seleccione referencias y escriba `LI` (para {{cmd:LIST}}). El historial muestra cada atributo como `ETIQUETA = valor`, con `(invisible)` o `(constant)` cuando corresponda.

## Mover, girar y descomponer

- {{cmd:MOVE}}, {{cmd:ROTATE}}, {{cmd:SCALE}} y {{cmd:MIRROR}} conservan los valores; el texto se mueve con el bloque y sigue siendo legible.
- {{cmd:EXPLODE}} convierte los atributos visibles en texto normal con sus valores. Los invisibles se descartan.

## Guardar

Un DWG guardado y un DXF guardado conservan todos los atributos: las definiciones de cada bloque (también las invisibles, constantes y predefinidas) y los valores de cada referencia. Otros programas CAD los leen como atributos de bloque normales.

En un DXF R12, un valor de más de 255 caracteres se corta a 255, y el historial lo indica.

## Errores habituales

- **Un valor no aparece en el dibujo.** Es invisible, o está vacío. Los valores invisibles siguen apareciendo en el panel derecho.
- **El valor que escribí fue a la línea de comandos.** Haga clic primero en el cuadro de valor del panel derecho.
