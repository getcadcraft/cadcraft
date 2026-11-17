---
title: Crear e insertar bloques
summary: Convierta una puerta dibujada en un bloque, colóquelo de nuevo en otras posiciones, escalas y ángulos, y elimine los bloques que no se usan.
keywords: bloque, bmake, insertar, ddinsert, símbolo, purgar, descomponer, redefinir, punto base, referencia, contar, bcount, tabla, csv, atributos, extracción de datos
from: 125a129d
---

## Qué va a crear

Una puerta convertida en un bloque llamado `DOOR-900`, que después se coloca tres veces: como se dibujó, girada 90 grados y reflejada.

Un bloque es un grupo con nombre de objetos. Se dibuja una vez; cada lugar donde se usa es una **referencia de bloque** que apunta a la única definición. La sección {{ui:Bloques}} del panel izquierdo enumera los bloques del dibujo y cuántas veces se usa cada uno.

## Dibujar la puerta

1. Escriba `L` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}}.
3. Escriba `@0,900` y pulse {{key:Enter}}, y luego vuelva a pulsar {{key:Enter}}. Es la hoja de la puerta.
4. Escriba `A` y pulse {{key:Enter}}.
5. Escriba `C` y pulse {{key:Enter}} para indicar primero el centro.
6. Escriba `0,0` y pulse {{key:Enter}} para el centro.
7. Escriba `900,0` y pulse {{key:Enter}} para el punto inicial.
8. Escriba `0,900` y pulse {{key:Enter}} para el punto final. Es el arco de giro.
9. Haga clic en {{ui:Extensión}}.

Los arcos van en sentido antihorario desde el punto inicial hasta el punto final.

## Crear el bloque

1. Escriba `B` y pulse {{key:Enter}}, o haga clic en {{ui:Crear}} en el grupo Bloques.
2. En `Enter block name`, escriba `DOOR-900` y pulse {{key:Enter}}.
3. En `Specify insertion base point`, escriba `0,0` y pulse {{key:Enter}}. Es la bisagra: el punto que queda en el lugar donde se coloca el bloque.
4. En `Select objects`, arrastre una ventana de selección alrededor de la hoja y el arco.
5. Pulse {{key:Enter}}.

El historial indica `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` El panel {{ui:Bloques}} muestra DOOR-900 con `1×` junto al nombre: una referencia. Haga clic en la puerta: ahora se selecciona como un solo objeto, una "Referencia de bloque".

:::tip
Puede seleccionar primero los objetos y después escribir `B`. CadCraft sigue pidiendo el nombre y el punto base, y luego usa su selección.
:::

## Insertar el bloque

1. Escriba `I` y pulse {{key:Enter}}, o haga clic en {{ui:Insertar}} junto a DOOR-900 en el panel {{ui:Bloques}}.
2. En `Enter block name or [File/Library] <DOOR-900>`, pulse {{key:Enter}}. (El botón {{ui:Insertar}} del panel rellena el nombre por usted.)
3. La puerta sigue la cruz del cursor. Haga clic donde debe ir la bisagra.

Aparece una segunda puerta.

## Insertar girado o escalado

1. Escriba `I` y pulse {{key:Enter}}, y luego pulse {{key:Enter}} para aceptar el nombre.
2. En `Specify insertion point [Scale/Rotate]`, escriba `R` y pulse {{key:Enter}}.
3. Escriba `90` y pulse {{key:Enter}}. La vista previa gira.
4. Haga clic para colocarlo.

Escriba `S` en su lugar para indicar un factor de escala; se aplica en ambas direcciones. La escala y la rotación se recuerdan para la siguiente inserción. Para reflejar una puerta, insértela y después use {{cmd:MIRROR}} sobre la referencia.

## Cambiar un bloque colocado

Seleccione una referencia de bloque. En el panel derecho puede cambiar {{ui:X}}, {{ui:Y}}, {{ui:Escala X}}, {{ui:Escala Y}} y {{ui:Rotación}}. Un valor negativo de {{ui:Escala X}} lo invierte.

## Redefinir un bloque

Para cambiar todas las puertas a la vez, cree un bloque con el mismo nombre:

1. Dibuje la nueva versión de la puerta.
2. Escriba `B` y pulse {{key:Enter}}, y escriba `DOOR-900`.
3. En `Block "DOOR-900" already exists. Redefine it?`, escriba `Y` y pulse {{key:Enter}}.
4. Indique el punto base y seleccione los nuevos objetos, como antes.

Ahora, cada referencia a DOOR-900 muestra la nueva versión.

O edite el propio bloque: {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar bloque}} ({{cmd:BEDIT}}) lo abre por separado, y {{ui:Guardar bloque}} lo devuelve. Consulte [Atributos de bloque](topic:attributes#change-a-block-the-block-editor).

## Contar bloques y exportar una tabla

Escriba {{cmd:COUNT}} (o {{ui:Bloques}} › {{ui:Más}} › {{ui:Contar bloques}}), y después:

- haga clic en una puerta: se seleccionan todas las puertas de este espacio, y el historial indica cuántas hay aquí y en todo el dibujo;
- o pulse {{key:Enter}}: el historial enumera todos los bloques con su recuento, de mayor a menor;
- o escriba `E` y después `C` para un CSV con los recuentos (en el modelo, en las hojas, en total) o `A` para una fila por referencia con su capa, posición, rotación y cada valor de atributo: una tabla que puede abrir en una hoja de cálculo.

Los bloques sin nombre (cotas, tablas) y las referencias dentro de otros bloques no se cuentan. Las celdas que empiezan como una fórmula (`=`, `+`, `-`, `@`) reciben un `'` delante para que una hoja de cálculo las muestre como texto.

## Descomponer y purgar

- {{cmd:EXPLODE}} (`X`) convierte una referencia de bloque seleccionada en objetos separados. La definición se mantiene.
- {{cmd:PURGE}} (`PU`) elimina las definiciones de bloque que ya no usa nada. El historial indica cuántas ha eliminado.

## Nombres de bloque

Un nombre puede tener hasta 255 caracteres y puede contener espacios, pero no puede empezar por un asterisco ni contener `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` o un acento grave. Al guardar en DXF R12, los nombres se escriben en mayúsculas; los caracteres distintos de letras, dígitos, `$`, `_` y `-` pasan a `_`, y los nombres se recortan a 31 caracteres; el historial indica cuántos han cambiado. Los nombres cortos en mayúsculas, dígitos y guiones, como `DOOR-900`, se conservan sin cambios. Un DWG guardado conserva los nombres tal como los escribió, en mayúsculas y minúsculas; solo cambian los caracteres que DWG no permite (un `|` pasa a `$0$` y los demás pasan a `_`).

## Escribir un bloque u objetos en un archivo propio

Escriba `W` ({{cmd:WBLOCK}}) y elija **Objetos**, **Bloque** o **Todo el dibujo**. El resultado es un nuevo DWG o DXF que contiene solo las capas, estilos y bloques que usa, con su punto base como origen. Para los objetos, puede conservarlos, convertirlos en un bloque o eliminarlos de este dibujo.

## Errores frecuentes

- **El bloque cayó lejos de la cruz del cursor.** El punto base no estaba sobre los objetos. Vuelva a crear el bloque con el punto base en una esquina o en una bisagra.
- **"No hay objetos seleccionados; no se ha creado nada."** Pulsó {{key:Enter}} antes de seleccionar nada.
- **"Este dibujo todavía no tiene bloques: F inserta uno desde un archivo, L desde la biblioteca (o cree uno con BLOCK)."** Escriba `F` para traer un bloque desde otro dibujo, o `L` para la biblioteca. Consulte [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).
- **"Una ventana gráfica no puede ir en un bloque."** Excluya los marcos de ventanas gráficas de la selección.
