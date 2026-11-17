---
title: Insertar desde un archivo o la biblioteca
summary: Traiga un bloque, o un dibujo completo, desde otro DWG o DXF, y coloque elementos de la Biblioteca, de un archivo o de otra biblioteca, con sus créditos y actualizaciones.
keywords: insertar, archivo, biblioteca, librarycraft, elemento, equipo, bloque de otro dibujo, wblock, centro de diseño, créditos, atribución, licencia, actualización, fuente, item.json
from: 316188d2
---

## Insertar un bloque de otro dibujo

1. Escriba `I` y pulse {{key:Enter}}, o haga clic en {{ui:Insertar}} en el grupo Bloques.
2. En `Escriba nombre de bloque o [Archivo/Biblioteca]`, escriba `F` y pulse {{key:Enter}}.
3. Elija el DWG o DXF de este equipo. Se lee aquí; no se abre, y no se sube nada.
4. En el cuadro {{ui:Insertar desde}}, elija un bloque de la lista (escriba en {{ui:Filtrar bloques}} para encontrarlo), o deje {{ui:Todo el dibujo}}. Haga clic en {{ui:Insertar}}.
5. Haga clic donde irá, y complete los atributos que pida.

El dibujo completo entra como un bloque con el nombre del archivo. También entran los bloques que hay dentro del bloque que eligió. Las capas que usan se añaden a este dibujo.

Si el otro dibujo está en otras unidades (pulgadas y milímetros, por ejemplo), CadCraft escala la referencia para que coincida y lo indica en el historial.

### Cuando un nombre ya está en uso

Si este dibujo ya tiene un bloque con el mismo nombre, CadCraft pregunta:

- {{ui:Conservar los existentes}} usa el bloque de ese nombre de este dibujo.
- {{ui:Renombrar}} trae el nuevo como `Nombre (2)`.

Toda la inserción es un solo paso: {{key:Mod+Z}} quita la referencia y las definiciones copiadas.

## Abrir la biblioteca

Haga clic en {{ui:Biblioteca…}} en el panel {{ui:Bloques}}, o en {{ui:Biblioteca}} en el grupo Bloques, o escriba `LIB`. En la indicación `INSERT`, `L` también la abre.

La biblioteca tiene cuatro fuentes, en pestañas:

- {{ui:Biblioteca}}: la biblioteca de CadCraft. Busque por nombre, fabricante o modelo, y filtre por categoría.
- {{ui:Archivos…}}: un archivo de elemento (`item.json`) de cualquier biblioteca, o un dibujo, una hoja de cálculo o un modelo 3D para crear elementos: un DWG o DXF (cada bloque se convierte en un elemento), un CSV con columnas de nombre y tamaño, o un modelo glTF u OBJ. No se sube nada.
- {{ui:Estándar}}: perfiles de acero (como secciones, alzados o piezas 3D) y piezas normalizadas como tornillos, tuercas y rodamientos, creadas aquí a partir de tablas publicadas. Vea [Colocar perfiles de acero y piezas normalizadas](topic:steel-and-standard-parts).
- {{ui:Otros canales}}: otras bibliotecas que responden igual que la Biblioteca. Añada su dirección una vez; este navegador la recuerda.

Cada tarjeta muestra una vista previa, el nombre, el fabricante y el modelo, la licencia y la versión. Un elemento retirado se marca como {{ui:Retirado}} con el motivo; CadCraft pide confirmación antes de colocarlo.

## Colocar un elemento

1. Haga clic en {{ui:Colocar}} en una tarjeta.
2. Haga clic donde irá el elemento. Escriba `R` antes para girarlo, o `S` para escalarlo.
3. En `Escriba número de elemento (CC-ITEM)`, pulse {{key:Enter}} para el siguiente número libre, o escriba el suyo.

El elemento se convierte en un bloque llamado `LIB_<nombre>_v<versión>`, dibujado en las unidades de este dibujo. Si el dibujo no tiene unidades, el elemento entra en milímetros y el historial lo indica; defina antes {{ui:Unidades}} en el panel de la derecha.

Sus datos viajan como atributos invisibles: el id y la versión del elemento, la licencia y la atribución, el fabricante, el modelo, la categoría y los tamaños. Vea [Atributos de bloque](topic:attributes).

## Elementos en su idioma

Un elemento puede llevar su nombre y su descripción en otros idiomas. Cuando los tiene en el idioma en que está configurado CadCraft (Ajustes › General › Idioma), la tarjeta y el nombre del elemento del bloque colocado los usan. El bloque en sí conserva un nombre hecho a partir del nombre propio del elemento, así que un dibujo tiene un bloque por elemento, sin importar en qué idioma se colocó.

## Buscar actualizaciones

1. Abra la biblioteca.
2. Haga clic en {{ui:Buscar actualizaciones}}.

Cada elemento de biblioteca del dibujo aparece en la lista con sus números de elemento, e indica si está al día, si tiene una versión más nueva (y qué cambió) o si fue retirado. Haga clic en {{ui:Actualizar}} en una fila, o en {{ui:Actualizar todo}}. Cada referencia pasa al bloque de la nueva versión y conserva su número de elemento, su cantidad, su posición, su ángulo y su capa. {{key:Mod+Z}} deshace una actualización.

## Acredite lo que usó

Haga clic en {{ui:Créditos de la biblioteca}}. Cada elemento aparece con su línea de atribución y su licencia.

- {{ui:Copiar atribución}} copia la línea de un elemento; {{ui:Copiar todo}} copia todas las líneas.
- {{ui:Descargar CSV}} guarda la lista con los números de elemento, fabricantes, modelos, licencias y atribuciones. Se abre en cualquier hoja de cálculo.

Licencias como CC BY piden citar al autor donde se use la obra. Ponga las líneas en el dibujo, en el pliego de condiciones o en las notas del proyecto.

## Símbolos y activos

La biblioteca tiene tres tipos de elemento: Símbolos (convenciones de dibujo, en 2D), Tipos (de qué está hecho un elemento) y Activos (objetos físicos). En la pestaña {{ui:Biblioteca}}, la lista {{ui:Tipo de elemento}} muestra Símbolos y Activos juntos, solo Símbolos o solo Activos. Los Tipos son aquello con lo que se construye un proyecto de BimCraft, así que CadCraft no los lista.

## Iniciar sesión en la biblioteca

Haga clic en {{ui:Iniciar sesión en la biblioteca}}. Se abre una pequeña ventana en el sitio; una vez que haya iniciado sesión allí, CadCraft puede mostrar los elementos de su equipo y registrar lo que coloca, para que se entere cuando cambie un elemento que usó. La sesión dura lo que dure esta pestaña del navegador. Puede revocarla en cualquier momento desde la página de seguridad de su cuenta.

## Errores comunes

- **"Crear elementos desde tipos IFC corresponde a BimCraft."** Los archivos IFC y de familias se leen en la aplicación BimCraft. Cree el elemento allí o en la Biblioteca, y después use su `item.json` aquí.
- **"No se pudo conectar con la biblioteca."** Está sin conexión, o la biblioteca no funciona. Los elementos que ya están en el dibujo no se ven afectados.
- **Un elemento es demasiado grande o demasiado pequeño.** Las unidades del dibujo son incorrectas o no están definidas. Deshaga, defina {{ui:Unidades}} y vuelva a colocarlo.
