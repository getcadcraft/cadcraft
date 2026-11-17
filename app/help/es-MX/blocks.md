---
title: Crear e insertar bloques
summary: Convierta una puerta dibujada en un bloque, colóquela de nuevo en otras posiciones, escalas y ángulos, y limpie los bloques sin uso.
keywords: bloque, bmake, insertar, ddinsert, símbolo, purge, explode, redefinir, punto base, referencia, contar, bcount, cuadro, csv, atributos, extracción de datos
from: 125a129d
---

## Qué va a crear

Un símbolo de puerta convertido en un bloque llamado `DOOR-900`, y después colocado tres veces: tal como se dibujó, girado 90 grados y reflejado.

Un bloque es un grupo con nombre de objetos. Se dibuja una vez; cada lugar donde se usa es una **referencia a bloque** que apunta a la única definición. La sección {{ui:Bloques}} del panel izquierdo enumera los bloques del dibujo y cuántas veces se usa cada uno.

## Dibujar la puerta

1. Escriba `L` y pulse {{key:Enter}}.
2. Escriba `0,0` y pulse {{key:Enter}}.
3. Escriba `@0,900` y pulse {{key:Enter}}, y luego pulse {{key:Enter}} otra vez. Esta es la hoja de la puerta.
4. Escriba `A` y pulse {{key:Enter}}.
5. Escriba `C` y pulse {{key:Enter}} para indicar primero el centro.
6. Escriba `0,0` y pulse {{key:Enter}} para el centro.
7. Escriba `900,0` y pulse {{key:Enter}} para el punto inicial.
8. Escriba `0,900` y pulse {{key:Enter}} para el punto final. Este es el giro.
9. Haga clic en {{ui:Extensión}}.

Los arcos van en sentido antihorario desde el punto inicial hasta el punto final.

## Crear el bloque

1. Escriba `B` y pulse {{key:Enter}}, o haga clic en {{ui:Crear}} en el grupo Bloques.
2. En `Enter block name`, escriba `DOOR-900` y pulse {{key:Enter}}.
3. En `Specify insertion base point`, escriba `0,0` y pulse {{key:Enter}}. Este es la bisagra: el punto que queda donde se coloca el bloque.
4. En `Select objects`, arrastre una ventana alrededor de la hoja y del arco.
5. Pulse {{key:Enter}}.

El historial dice `Block "DOOR-900" made from 2 objects, and they were replaced by one reference to it.` El panel {{ui:Bloques}} muestra DOOR-900 con `1×` a su lado: una referencia. Haga clic en la puerta: ahora se selecciona como un solo objeto, una "Block reference".

:::tip
Puede seleccionar primero los objetos y luego escribir `B`. CadCraft aún pide el nombre y el punto base, y luego usa su selección.
:::

## Insertar el bloque

1. Escriba `I` y pulse {{key:Enter}}, o haga clic en {{ui:Insertar}} junto a DOOR-900 en el panel {{ui:Bloques}}.
2. En `Enter block name or [File/Library] <DOOR-900>`, pulse {{key:Enter}}. (El botón {{ui:Insertar}} del panel escribe el nombre por usted.)
3. La puerta sigue la cruz del cursor. Haga clic donde debe ir la bisagra.

Aparece una segunda puerta.

## Insertar girado o escalado

1. Escriba `I` y pulse {{key:Enter}}, y luego pulse {{key:Enter}} para aceptar el nombre.
2. En `Specify insertion point [Scale/Rotate]`, escriba `R` y pulse {{key:Enter}}.
3. Escriba `90` y pulse {{key:Enter}}. La vista previa gira.
4. Haga clic para colocarlo.

Escriba `S` en su lugar para definir un factor de escala; se aplica en ambas direcciones. La escala y la rotación se recuerdan para la siguiente inserción. Para reflejar una puerta, insértela y luego use {{cmd:MIRROR}} sobre la referencia.

## Cambiar un bloque colocado

Seleccione una referencia a bloque. En el panel derecho puede cambiar sus {{ui:X}}, {{ui:Y}}, {{ui:Escala X}}, {{ui:Escala Y}} y {{ui:Rotación}}. Una {{ui:Escala X}} negativa lo voltea.

## Redefinir un bloque

Para cambiar todas las puertas a la vez, cree un bloque con el mismo nombre:

1. Dibuje la nueva versión de la puerta.
2. Escriba `B` y pulse {{key:Enter}}, y escriba `DOOR-900`.
3. En `Block "DOOR-900" already exists. Redefine it?`, escriba `Y` y pulse {{key:Enter}}.
4. Indique el punto base y seleccione los objetos nuevos, como antes.

Cada referencia a DOOR-900 ahora muestra la nueva versión.

O edite el bloque directamente: {{ui:Bloques}} › {{ui:Más}} › {{ui:Editar bloque}} ({{cmd:BEDIT}}) lo abre por sí solo, y {{ui:Guardar bloque}} lo devuelve. Consulte [Atributos de bloque](topic:attributes#change-a-block-the-block-editor).

## Contar bloques y exportar un cuadro

Escriba {{cmd:COUNT}} (o {{ui:Bloques}} › {{ui:Más}} › {{ui:Contar bloques}}), y luego:

- haga clic en una puerta: se seleccionan todas las puertas de este espacio, y el historial indica cuántas hay aquí y en todo el dibujo;
- o pulse {{key:Enter}}: el historial enumera cada bloque con su conteo, primero el de mayor conteo;
- o escriba `E`, y luego `C` para un CSV de los conteos (en el modelo, en hojas, en total) o `A` para una fila por referencia con su capa, posición, rotación y cada valor de atributo: un cuadro que puede abrir en una hoja de cálculo.

Los bloques sin nombre (cotas, tablas) y las referencias dentro de otros bloques no se cuentan. Las celdas que empiezan como una fórmula (`=`, `+`, `-`, `@`) reciben un `'` al inicio para que una hoja de cálculo las muestre como texto.

## Descomponer y purgar

- {{cmd:EXPLODE}} (`X`) convierte una referencia a bloque seleccionada otra vez en objetos separados. La definición se conserva.
- {{cmd:PURGE}} (`PU`) elimina las definiciones de bloque que ya no usa nada. El historial indica cuántas eliminó.

## Nombres de bloque

Un nombre puede tener hasta 255 caracteres y puede contener espacios, pero no puede empezar con un asterisco ni contener `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` ni un acento grave. Al guardar en DXF R12, los nombres se escriben en mayúsculas, los caracteres distintos de letras, dígitos, `$`, `_` y `-` se convierten en `_`, y los nombres se cortan a 31 caracteres; el historial indica cuántos cambiaron. Los nombres cortos en mayúsculas, dígitos y guiones, como `DOOR-900`, se conservan sin cambios. Un DWG guardado conserva los nombres como los escribió, en mayúsculas y minúsculas; solo cambian los caracteres que DWG no permite (un `|` se convierte en `$0$`, los demás en `_`).

## Escribir un bloque u objetos en un archivo propio

Escriba `W` ({{cmd:WBLOCK}}) y elija **Objetos**, **Bloque** o **Todo el dibujo**. El resultado es un DWG o DXF nuevo que contiene solo las capas, estilos y bloques que usa, con su punto base como origen. Para los objetos, puede conservarlos, convertirlos en un bloque o eliminarlos de este dibujo.

## Errores comunes

- **El bloque cayó lejos de la cruz del cursor.** El punto base no estaba sobre los objetos. Vuelva a crear el bloque con el punto base en una esquina o en una bisagra.
- **"No objects selected; nothing made."** Pulsó {{key:Enter}} antes de seleccionar algo.
- **"This drawing has no blocks yet: F inserts one from a file, L from the library (or make one with BLOCK)."** Escriba `F` para traer un bloque desde otro dibujo, o `L` para la biblioteca. Consulte [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).
- **"A viewport cannot go in a block."** Excluya de la selección los marcos de las ventanas gráficas.
