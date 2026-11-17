---
title: Crear e insertar bloques
summary: Convertí una puerta dibujada en bloque, colocala otra vez en otras posiciones, escalas y ángulos, y limpiá los bloques que no se usan.
keywords: bloque, bmake, insertar, ddinsert, símbolo, purge, explode, redefinir, punto base, referencia, contar, bcount, planilla, csv, atributos, extracción de datos
from: 125a129d
---

## Lo que vas a crear

Un símbolo de puerta hecho bloque llamado `DOOR-900`, y después colocado tres veces: tal como fue dibujado, girado 90 grados y espejado.

Un bloque ha'e un grupo de objetos con nombre. Lo dibujás una sola vez; cada lugar donde lo usás es una **referencia de bloque** que apunta a esa única definición. La sección {{ui:Blocks}} del panel izquierdo lista los bloques del plano y cuántas veces se usa cada uno.

## Dibujar la puerta

1. Escribí `L` y presioná {{key:Enter}}.
2. Escribí `0,0` y presioná {{key:Enter}}.
3. Escribí `@0,900` y presioná {{key:Enter}}, y después presioná {{key:Enter}} otra vez. Esta es la hoja de la puerta.
4. Escribí `A` y presioná {{key:Enter}}.
5. Escribí `C` y presioná {{key:Enter}} para dar primero el centro.
6. Escribí `0,0` y presioná {{key:Enter}} para el centro.
7. Escribí `900,0` y presioná {{key:Enter}} para el punto inicial.
8. Escribí `0,900` y presioná {{key:Enter}} para el punto final. Este es el giro.
9. Hacé clic en {{ui:Extents}}.

Los arcos van en sentido antihorario desde el punto inicial hasta el punto final.

## Hacer el bloque

1. Escribí `B` y presioná {{key:Enter}}, o hacé clic en {{ui:Make}} dentro del grupo Bloques.
2. En `Ingrese el nombre del bloque`, escribí `DOOR-900` y presioná {{key:Enter}}.
3. En `Seleccione el punto base de inserción`, escribí `0,0` y presioná {{key:Enter}}. Esta es la bisagra: el punto que cae donde colocás el bloque.
4. En `Seleccione los objetos`, arrastrá una ventana alrededor de la hoja y del arco.
5. Presioná {{key:Enter}}.

El historial dice `Bloque "DOOR-900" creado a partir de 2 objetos, y fueron reemplazados por una referencia a él.` El panel {{ui:Blocks}} lista DOOR-900 con `1×` al lado: una referencia. Hacé clic en la puerta: ahora se selecciona como un solo objeto, una "Referencia de bloque".

:::tip
Podés seleccionar primero los objetos y después escribir `B`. CadCraft igual pide el nombre y el punto base, y después usa tu selección.
:::

## Insertar el bloque

1. Escribí `I` y presioná {{key:Enter}}, o hacé clic en {{ui:Insert}} al lado de DOOR-900 en el panel {{ui:Blocks}}.
2. En `Ingrese el nombre del bloque o [Archivo [F]/Biblioteca [L]] <DOOR-900>`, presioná {{key:Enter}}. (El botón {{ui:Insert}} del panel completa el nombre por vos.)
3. La puerta sigue la cruz del cursor. Hacé clic donde debe ir la bisagra.

Aparece una segunda puerta.

## Insertar girado o escalado

1. Escribí `I` y presioná {{key:Enter}}, y después presioná {{key:Enter}} para aceptar el nombre.
2. En `Seleccione el punto de inserción [Escala [S]/Rotación [R]]`, escribí `R` y presioná {{key:Enter}}.
3. Escribí `90` y presioná {{key:Enter}}. La vista previa gira.
4. Hacé clic para colocarla.

Escribí `S` en cambio para fijar un factor de escala; se aplica en las dos direcciones. La escala y la rotación quedan recordadas para la próxima inserción. Para espejar una puerta, insertala y después usá {{cmd:MIRROR}} sobre la referencia.

## Cambiar un bloque colocado

Seleccioná una referencia de bloque. En el panel derecho podés cambiar su {{ui:X}}, {{ui:Y}}, {{ui:Scale X}}, {{ui:Scale Y}} y {{ui:Rotation}}. Una {{ui:Scale X}} negativa lo invierte.

## Redefinir un bloque

Para cambiar todas las puertas a la vez, creá un bloque con el mismo nombre:

1. Dibujá la nueva versión de la puerta.
2. Escribí `B` y presioná {{key:Enter}}, y escribí `DOOR-900`.
3. En `El bloque "DOOR-900" ya existe. ¿Redefinirlo?`, escribí `Y` y presioná {{key:Enter}}.
4. Indicá el punto base y seleccioná los objetos nuevos, como antes.

Ahora cada referencia a DOOR-900 muestra la nueva versión.

O editá el bloque en sí: {{ui:Blocks}} › {{ui:More}} › {{ui:Edit block}} ({{cmd:BEDIT}}) lo abre por separado, y {{ui:Save block}} lo vuelve a guardar. Ver [Atributos de bloque](topic:attributes#change-a-block-the-block-editor).

## Contar bloques y exportar una planilla

Escribí {{cmd:COUNT}} (o {{ui:Blocks}} › {{ui:More}} › {{ui:Count blocks}}), y después:

- hacé clic en una puerta: se seleccionan todas las puertas de este espacio, y el historial dice cuántas hay aquí y en todo el plano;
- o presioná {{key:Enter}}: el historial lista cada bloque con su cuenta, primero el de más;
- o escribí `E`, y después `C` para un CSV con las cuentas (en el modelo, en hojas, en total) o `A` para una fila por referencia con su capa, posición, rotación y cada valor de atributo: una planilla que podés abrir en una hoja de cálculo.

Los bloques sin nombre (cotas, tablas) y las referencias dentro de otros bloques no se cuentan. Las celdas que empiezan como una fórmula (`=`, `+`, `-`, `@`) reciben un `'` al principio para que la hoja de cálculo las muestre como texto.

## Explotar y purgar

- {{cmd:EXPLODE}} (`X`) convierte una referencia de bloque seleccionada otra vez en objetos separados. La definición se mantiene.
- {{cmd:PURGE}} (`PU`) elimina las definiciones de bloque que ya nada usa. El historial dice cuántas eliminó.

## Nombres de bloque

Un nombre puede tener hasta 255 caracteres y puede tener espacios, pero no puede empezar con un asterisco, ni contener `<` `>` `/` `\` `"` `:` `;` `?` `*` `|` `=` o un acento grave. Cuando guardás DXF R12, los nombres se escriben en mayúsculas, los caracteres que no son letras, dígitos, `$`, `_` o `-` pasan a ser `_`, y los nombres se cortan a 31 caracteres; el historial dice cuántos cambiaron. Los nombres cortos en mayúsculas, dígitos y guiones, como `DOOR-900`, se mantienen sin cambios. Un DWG guardado conserva los nombres como los escribiste, con mayúsculas y minúsculas; solo cambian los caracteres que DWG no permite (un `|` pasa a `$0$`, los demás pasan a `_`).

## Escribir un bloque o objetos en un archivo propio

Escribí `W` ({{cmd:WBLOCK}}) y elegí **Objetos**, **Bloque** o **Plano completo**. El resultado es un nuevo DWG o DXF que solo tiene las capas, estilos y bloques que usa, con tu punto base como origen. Para los objetos podés conservarlos, convertirlos en un bloque o borrarlos de este plano.

## Errores comunes

- **El bloque cayó lejos de la cruz del cursor.** El punto base no estaba sobre los objetos. Volvé a crear el bloque con el punto base en una esquina o en una bisagra.
- **"No hay objetos seleccionados; no se creó nada."** Presionaste {{key:Enter}} antes de seleccionar algo.
- **"Este plano todavía no tiene bloques: F inserta uno desde un archivo, L desde la biblioteca (o creá uno con BLOCK)."** Escribí `F` para traer un bloque desde otro plano, o `L` para la biblioteca. Ver [Insertar desde un archivo o la biblioteca](topic:insert-from-file-and-library).
- **"Una vista no puede ir dentro de un bloque."** Dejá los marcos de vista fuera de la selección.
