---
title: Insertar desde un archivo o desde la biblioteca
summary: Traiga un bloque o un dibujo completo desde otro DWG o DXF, y coloque elementos de la biblioteca, de un archivo o de otra biblioteca, con sus créditos y actualizaciones.
keywords: insertar, archivo, biblioteca, librarycraft, elemento, equipo, bloque desde otro dibujo, wblock, centro de diseño, créditos, atribución, licencia, actualizar, canal, item.json
from: f6e4e452
---

## Insertar un bloque desde otro dibujo

1. Escriba `I` y pulse {{key:Enter}}, o haga clic en {{ui:Insertar}} en el grupo {{ui:Bloques}}.
2. La línea de comandos en la parte inferior de la ventana pide `Enter block name or [File/Library]`. Escriba `F` y pulse {{key:Enter}}.
3. Elija el DWG o DXF de este equipo. Se lee aquí; no se abre, y no se sube nada.
4. En el cuadro {{ui:Insertar desde}}, elija un bloque de la lista (escriba en {{ui:Filtrar bloques}} para encontrarlo), o deje {{ui:El dibujo completo}}. Haga clic en {{ui:Insertar}}.
5. Haga clic donde debe ir y rellene los atributos que pida.

También puede empezar desde el panel {{ui:Bloques}}: escriba `F` en su cuadro {{ui:Filtrar bloques}} y pulse {{key:Enter}}, o escriba algo que ningún bloque coincida y haga clic en {{ui:Desde un archivo…}}. `L` y {{ui:Biblioteca…}} abren la biblioteca del mismo modo. Antes de la versión 0.10.1, una letra escrita en {{ui:Filtrar bloques}} solo buscaba los bloques de este dibujo y respondía "No block matches the filter."

Para tener a mano un dibujo de bloques propios, haga clic en {{ui:Añadir un dibujo}} en {{ui:Bibliotecas}} del panel {{ui:Bloques}} y elija el DWG o DXF. Sus bloques aparecen con imágenes; haga clic en uno para colocarlo.

El dibujo completo entra como un único bloque con el nombre del archivo. También entran los bloques que contiene el bloque que eligió. Las capas que usan se añaden a este dibujo.

Si el otro dibujo está en unidades diferentes (pulgadas y milímetros, por ejemplo), CadCraft escala la referencia para que coincida y lo indica en el historial.

### Cuando un nombre ya está en uso

Si este dibujo ya tiene un bloque con el mismo nombre, CadCraft pregunta:

- {{ui:Conservar los existentes}} usa el bloque de ese nombre de este dibujo.
- {{ui:Renombrar}} trae el nuevo como `Name (2)`.

La inserción completa es un único paso: {{key:Mod+Z}} quita la referencia y las definiciones copiadas.

## Abrir la biblioteca

Haga clic en {{ui:Biblioteca…}} en el panel {{ui:Bloques}}, o en {{ui:Biblioteca}} del grupo Bloques, o escriba `LIB`. En la petición de `INSERT`, `L` también la abre.

La biblioteca tiene cuatro orígenes, como pestañas:

- {{ui:Biblioteca}}: la biblioteca de CadCraft. Busque por nombre, fabricante o modelo, y filtre por categoría.
- {{ui:Archivos…}}: un archivo de elemento (`item.json`) de cualquier biblioteca, o un dibujo, una hoja de cálculo o un modelo 3D para crear elementos: un DWG o DXF (cada bloque se convierte en un elemento), un CSV con columnas de nombre y tamaño, o un modelo glTF u OBJ. No se sube nada.
- {{ui:Estándar}}: perfiles de acero (como secciones, alzados o miembros 3D) y piezas normalizadas como tornillos, tuercas y rodamientos, creados aquí a partir de tablas publicadas. Véase [Colocar perfiles de acero y piezas normalizadas](topic:steel-and-standard-parts).
- {{ui:Otros canales}}: otras bibliotecas que responden igual que Biblioteca. Añada su dirección una vez; este navegador la recuerda.

Cada tarjeta muestra una vista previa, el nombre, el fabricante y el modelo, la licencia y la versión. Un elemento retirado se marca como {{ui:Retirado}} con el motivo; CadCraft pide confirmación antes de colocarlo.

## Colocar un elemento

1. Haga clic en {{ui:Colocar}} en una tarjeta.
2. Haga clic donde debe ir el elemento. Escriba `R` antes para girarlo, o `S` para escalarlo.
3. En `Enter Item number (CC-ITEM)`, pulse {{key:Enter}} para el siguiente número libre, o escriba el suyo.

El elemento se convierte en un bloque llamado `LIB_<name>_v<version>`, dibujado en las unidades de este dibujo. Si el dibujo no tiene unidades, el elemento entra en milímetros y el historial lo indica; defina antes {{ui:Unidades}} en el panel derecho.

Sus datos viajan como atributos invisibles: el identificador y la versión del elemento, la licencia y la atribución, el fabricante, el modelo, la categoría y los tamaños. Véase [Atributos de bloque](topic:attributes).

## Elementos en su idioma

Un elemento puede llevar su nombre y su descripción en otros idiomas. Cuando los tiene en el idioma en que está configurado CadCraft (Parámetros › General › Idioma), la tarjeta y el nombre de elemento del bloque colocado los usan. El bloque en sí conserva un nombre formado a partir del nombre propio del elemento, de modo que un dibujo tiene un bloque por elemento, sin importar qué idioma lo colocó.

## Buscar actualizaciones

1. Abra la biblioteca.
2. Haga clic en {{ui:Buscar actualizaciones}}.

Cada elemento de biblioteca del dibujo aparece en la lista con sus números de elemento y con una indicación: si está al día, si tiene una versión más nueva (y qué cambió) o si fue retirado. Haga clic en {{ui:Actualizar}} en una fila, o en {{ui:Actualizar todo}}. Cada referencia pasa al bloque de la nueva versión y conserva su número de elemento, su cantidad, su lugar, su ángulo y su capa. {{key:Mod+Z}} deshace una actualización.

## Acreditar lo que usó

Haga clic en {{ui:Créditos de la biblioteca}}. Cada elemento aparece con su línea de atribución y su licencia.

- {{ui:Copiar atribución}} copia la línea de un elemento; {{ui:Copiar todo}} copia todas las líneas.
- {{ui:Descargar CSV}} guarda la lista con los números de elemento, fabricantes, modelos, licencias y atribuciones. Se abre en cualquier hoja de cálculo.

Las licencias como CC BY le piden acreditar al autor donde usa la obra. Ponga las líneas en el dibujo, en el pliego o en las notas del proyecto.

## Símbolos y recursos

La biblioteca tiene tres tipos de elementos: Símbolos (convenciones de dibujo, en 2D), Tipos (de qué está hecho un elemento) y Recursos (objetos físicos). En la pestaña {{ui:Biblioteca}}, la lista {{ui:Tipo de elemento}} muestra Símbolos y recursos juntos, solo Símbolos o solo Recursos. Los Tipos son con lo que se construye un proyecto de BimCraft, así que CadCraft no los enumera.

## Iniciar sesión en la biblioteca

Haga clic en {{ui:Iniciar sesión en la biblioteca}}. Se abre una pequeña ventana en el sitio; una vez que haya iniciado sesión allí, CadCraft puede mostrar los elementos de su equipo y registrar lo que coloca, para que se entere cuando cambie un elemento que usó. La sesión dura lo que dure esta pestaña del navegador. Puede revocarla en cualquier momento desde la página de seguridad de su cuenta.

## Guardar sus propios objetos en Mis objetos

{{ui:Mis objetos}} es una lista privada de la biblioteca que solo usted puede ver. No está en la biblioteca pública, no aparece en las búsquedas ni se muestra a su equipo, y sigue a su cuenta en cada equipo donde inicie sesión en la biblioteca.

1. En el panel Biblioteca, haga clic en {{ui:Archivos…}} y lea un archivo.
2. En el elemento que quiera volver a usar, haga clic en {{ui:Guardar en mis objetos}}.
3. Más tarde, haga clic en {{ui:Mis objetos}} y en {{ui:Colocar}}. Se coloca como cualquier elemento de biblioteca, y {{ui:Buscar actualizaciones}} también lo incluye.
4. {{ui:Quitar de mis objetos}} lo saca de la lista. Las copias ya colocadas en los dibujos se conservan.

Necesita haber iniciado sesión en la biblioteca. Leer un archivo no sube nada; guardar un elemento envía solo ese elemento a su cuenta.

:::note
Mis objetos está en prueba y puede que todavía no esté abierto para su cuenta. Si aparece "Mis objetos aún no está abierto para esta cuenta", puede seguir colocando elementos de sus propios archivos con {{ui:Archivos…}}.
:::

## Errores habituales

- **"Making items from IFC types is in BimCraft."** Los archivos IFC y de familias se leen en la aplicación BimCraft. Cree el elemento allí o en la Biblioteca, y después use su `item.json` aquí.
- **"The library could not be reached."** Está sin conexión, o la biblioteca no funciona. Los elementos que ya están en el dibujo no se ven afectados.
- **Un elemento es muy grande o muy pequeño.** Las unidades del dibujo son incorrectas o no están definidas. Deshaga, defina {{ui:Unidades}} y vuelva a colocar el elemento.
