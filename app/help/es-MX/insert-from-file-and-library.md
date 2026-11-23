---
title: Insertar desde un archivo o la biblioteca
summary: Traiga un bloque, o un dibujo completo, desde otro DWG o DXF, y coloque elementos de la biblioteca, de un archivo o de otra biblioteca, con sus créditos y actualizaciones.
keywords: insertar, archivo, biblioteca, librarycraft, elemento, equipo, bloque desde otro dibujo, wblock, centro de diseño, créditos, atribución, licencia, actualizar, fuente, item.json
from: f6e4e452
---

## Insertar un bloque de otro dibujo

1. Escriba `I` y pulse {{key:Enter}}, o haga clic en {{ui:Insert}} en el grupo Bloques.
2. La línea de comandos en la parte inferior de la ventana pide `Introduzca el nombre del bloque o [Archivo (F)/Biblioteca (L)]`. Escriba `F` ahí y pulse {{key:Enter}}.
3. Elija el DWG o DXF de este equipo. Se lee aquí; no se abre, y no se sube nada.
4. En el cuadro de diálogo {{ui:Insert from}}, elija un bloque de la lista (escriba en {{ui:Filter blocks}} para buscarlo), o deje {{ui:The whole drawing}}. Haga clic en {{ui:Insert}}.
5. Haga clic donde va, y complete los atributos que pida.

También puede empezar desde el panel {{ui:Blocks}}: escriba `F` en su cuadro {{ui:Filter blocks}} y pulse {{key:Enter}}, o escriba algo que ningún bloque coincida y haga clic en {{ui:From a file…}}. `L` y {{ui:Library…}} abren la biblioteca de la misma forma. Antes de la versión 0.10.1, una letra escrita en {{ui:Filter blocks}} solo buscaba los bloques de este dibujo, y respondía "Ningún bloque coincide con el filtro."

Para tener a mano un dibujo de sus propios bloques, haga clic en {{ui:Add a drawing}} bajo {{ui:Libraries}} en el panel {{ui:Blocks}} y elija el DWG o DXF. Sus bloques aparecen con imágenes; haga clic en uno para colocarlo.

El dibujo completo entra como un bloque con el nombre del archivo. También entran los bloques dentro del bloque que eligió. Las capas que usan se agregan a este dibujo.

Si el otro dibujo está en unidades distintas (pulgadas y milímetros, por ejemplo), CadCraft escala la referencia para igualarlas y lo indica en el historial.

### Cuando un nombre ya está en uso

Si este dibujo ya tiene un bloque con el mismo nombre, CadCraft pregunta:

- {{ui:Keep existing}} usa el bloque de este dibujo con ese nombre.
- {{ui:Rename}} trae el nuevo como `Name (2)`.

La inserción completa es un solo paso: {{key:Mod+Z}} quita otra vez la referencia y las definiciones copiadas.

## Abrir la biblioteca

Haga clic en {{ui:Library…}} en el panel {{ui:Blocks}}, o en {{ui:Library}} del grupo Bloques, o escriba `LIB`. En la solicitud de `INSERT`, `L` también la abre.

La biblioteca tiene cuatro fuentes, como pestañas:

- {{ui:Library}}: la biblioteca de CadCraft. Busque por nombre, fabricante o modelo, y filtre por categoría.
- {{ui:Files…}}: un archivo de elemento (`item.json`) de cualquier biblioteca, o un dibujo, hoja de cálculo o modelo 3D para crear elementos: un DWG o DXF (cada bloque se vuelve un elemento), un CSV con columnas de nombre y tamaño, o un modelo glTF u OBJ. No se sube nada.
- {{ui:Standard}}: perfiles de acero (como secciones, elevaciones o miembros 3D) y piezas estándar como pernos, tuercas y rodamientos, hechos aquí a partir de tablas publicadas. Vea [Colocar perfiles de acero y piezas estándar](topic:steel-and-standard-parts).
- {{ui:Other feeds}}: otras bibliotecas que responden igual que Library. Agregue su dirección una vez; este navegador la recuerda.

Cada tarjeta muestra una vista previa, el nombre, el fabricante y el modelo, la licencia y la versión. Un elemento retirado se marca {{ui:Withdrawn}} con el motivo; CadCraft pide confirmación antes de que coloque uno.

## Colocar un elemento

1. Haga clic en {{ui:Place}} en una tarjeta.
2. Haga clic donde va el elemento. Escriba `R` antes para girarlo, o `S` para escalarlo.
3. En `Enter Item number (CC-ITEM)`, pulse {{key:Enter}} para el siguiente número libre, o escriba el suyo.

El elemento se convierte en un bloque llamado `LIB_<name>_v<version>`, dibujado en las unidades de este dibujo. Si el dibujo no tiene unidades, el elemento entra en milímetros y el historial lo indica; configure {{ui:Units}} en el panel derecho primero.

Sus datos viajan como atributos invisibles: el id y la versión del elemento, la licencia y la atribución, el fabricante, el modelo, la categoría y los tamaños. Vea [Atributos de bloque](topic:attributes).

## Elementos en su idioma

Un elemento puede llevar su nombre y su descripción en otros idiomas. Cuando los tiene en el idioma en que está configurado CadCraft (Parámetros › General › Idioma), la tarjeta y el nombre del elemento del bloque colocado los usan. El bloque en sí conserva un nombre hecho a partir del nombre propio del elemento, así que un dibujo tiene un bloque por elemento sin importar qué idioma lo colocó.

## Buscar actualizaciones

1. Abra la biblioteca.
2. Haga clic en {{ui:Check for updates}}.

Cada elemento de biblioteca del dibujo aparece con sus números de elemento y si está actualizado, tiene una versión más nueva (y lo que cambió), o fue retirado. Haga clic en {{ui:Update}} en una fila, o en {{ui:Update all}}. Cada referencia pasa al bloque de la nueva versión y conserva su número de elemento, cantidad, lugar, ángulo y capa. {{key:Mod+Z}} deshace una actualización.

## Dar crédito a lo que usó

Haga clic en {{ui:Library credits}}. Cada elemento aparece con su línea de atribución y su licencia.

- {{ui:Copy attribution}} copia la línea de un elemento; {{ui:Copy all}} copia todas las líneas.
- {{ui:Download CSV}} guarda la lista con los números de elemento, fabricantes, modelos, licencias y atribuciones. Se abre en cualquier hoja de cálculo.

Licencias como CC BY piden que acredite al autor donde use la obra. Ponga las líneas en el dibujo, en la especificación o en las notas del proyecto.

## Símbolos y activos

La biblioteca tiene tres tipos de elementos: Símbolos (convenciones de dibujo, en 2D), Tipos (de qué está hecho un elemento) y Activos (objetos físicos). En la pestaña {{ui:Library}}, la lista {{ui:Kind of item}} muestra Símbolos y Activos juntos, solo Símbolos, o solo Activos. Los tipos son lo que se construye en un proyecto de BimCraft, así que CadCraft no los lista.

## Iniciar sesión en la biblioteca

Haga clic en {{ui:Sign in to the library}}. Se abre una pequeña ventana en el sitio; una vez que inicie sesión allí, CadCraft puede mostrar los elementos de su equipo y registrar lo que coloca, para que se entere cuando cambie un elemento que usó. La sesión dura para esta pestaña del navegador. Puede revocarla en cualquier momento desde la página de seguridad de su cuenta.

## Guardar sus objetos en Mis objetos

{{ui:My objects}} es una lista privada en la Biblioteca que solo usted puede ver. No está en la biblioteca pública, ni en la búsqueda, ni se muestra a su equipo, y sigue a su cuenta en cada equipo donde inicie sesión en la biblioteca.

1. En el panel Biblioteca, haga clic en {{ui:Files…}} y lea un archivo.
2. En el elemento que quiere volver a usar, haga clic en {{ui:Keep in my objects}}.
3. Después, haga clic en {{ui:My objects}} y en {{ui:Place}}. Se coloca como cualquier elemento de biblioteca, y {{ui:Check for updates}} lo incluye.
4. {{ui:Remove from my objects}} lo quita de la lista. Las copias ya colocadas en dibujos permanecen.

Debe iniciar sesión en la biblioteca. Leer un archivo no sube nada; guardar un elemento envía solo ese elemento a su cuenta.

:::note
Mis objetos está en prueba y puede que aún no esté abierto para su cuenta. Si aparece el mensaje "My objects is not open for this account yet", todavía puede colocar elementos de sus propios archivos con {{ui:Files…}}.
:::

## Errores comunes

- **"Making items from IFC types is in BimCraft."** › **"Crear elementos desde tipos IFC se hace en BimCraft."** Los archivos IFC y de familias se leen en la aplicación BimCraft. Cree el elemento allí o en la Biblioteca, y luego use su `item.json` aquí.
- **"The library could not be reached."** › **"No se pudo conectar con la biblioteca."** Está sin conexión, o la biblioteca no funciona. Los elementos que ya están en el dibujo no se afectan.
- **Un elemento es demasiado grande o demasiado pequeño.** Las unidades del dibujo son incorrectas o no están configuradas. Deshaga, configure {{ui:Units}} y colóquelo de nuevo.
