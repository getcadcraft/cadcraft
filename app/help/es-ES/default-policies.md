---
title: "Políticas predeterminadas: definir con qué empieza un dibujo nuevo"
summary: Indique una vez qué unidades, formato de longitud, precisión, altura de texto y papel de hoja tiene un dibujo nuevo, para trabajo métrico y en pulgadas, y comparta las políticas en la oficina como un pequeño archivo.
keywords: predeterminado, predeterminados, políticas predeterminadas, política, estándar de oficina, valores de oficina, plantilla, dibujo nuevo, unidades, insunits, formato de longitud, arquitectónicas, precisión, luprec, altura de texto, papel de hoja, a1, compartir, exportar, importar, json
from: 7b80fd13
---

## Lo que hará

Indique a CadCraft con qué debe empezar un dibujo nuevo, para que nadie en la oficina tenga que ejecutar UNITS y cambiar las mismas cosas cada vez. Es un complemento: está desactivado hasta que lo active, y una política que no defina deja el valor propio de CadCraft tal como está.

:::note
Estos son valores predeterminados para dibujos **nuevos** y hojas **nuevas**. Un dibujo que ya empezó no se modifica, ni tampoco uno que abra.
:::

## Pasos

1. Abra Ajustes, vaya a {{ui:Complementos}} y active {{ui:Políticas predeterminadas}}.
2. En Ajustes, abra la pestaña **CadCraft** y elija {{ui:Políticas predeterminadas}} en la lista de la izquierda.
3. Defina las políticas que quiera. Cada una empieza en **la propia de CadCraft**. Una política con un cuadro **Métrico** y otro **Imperial** tiene un valor para cada tipo de dibujo; rellene solo los que necesite.
4. No hay botón Guardar: cada cambio se guarda al hacerlo.
5. Empiece un dibujo nuevo. Tendrá las unidades, el formato de longitud, la precisión y la altura de texto que definió, y su primera hoja nueva estará en el papel que eligió.

## Las políticas

- **Unidades de un dibujo nuevo**: ninguna, milímetros, centímetros, metros, pulgadas o pies.
- **Formato de longitud** y **Precisión de longitud**: lo que establece el comando UNITS, para un dibujo nuevo.
- **Altura de texto nuevo**, en unidades de dibujo.
- **Papel de una hoja nueva**: el papel que usa {{ui:Hoja nueva}}.
- **Tamaños de anotación en papel** (Ajustes › Global › Políticas predeterminadas): las alturas de la oficina en milímetros, tal como se imprimen. CadCraft usa la de notas y etiquetas: {{cmd:ANNOSCALE}} fija la altura con la que empieza el texto nuevo, a esa altura con la escala de anotación. Vea [Unidades, formatos de papel y escalas](topic:units-papers-scales#annotate-by-scale).

Un dibujo en pulgadas o pies usa los valores Imperial; cualquier otro dibujo usa los métricos. Un dibujo sin unidades usa el sistema de unidades definido en Ajustes › Global › Políticas predeterminadas, o el métrico si no hay ninguno.

## Compartirlas en la oficina

1. En Ajustes, abra la pestaña **Global** y elija {{ui:Políticas predeterminadas}}.
2. Haga clic en {{ui:Guardar en un archivo}}. Obtiene un pequeño archivo que termina en `.ccdefaults.json`.
3. En otro equipo, active el complemento, abra el mismo lugar y haga clic en {{ui:Cargar desde un archivo}}. Las políticas del archivo sustituyen a las de ese equipo.

Un solo archivo contiene las políticas de todas las aplicaciones de CadCraft, así que el mismo archivo funciona en BimCraft.

## Para tener en cuenta

- No hay política para la escala de una hoja: la vista de una hoja nueva se ajusta al dibujo, y usted fija su escala en la hoja.
- No hay política para un estilo de cota: un dibujo nuevo no tiene estilos de cota con nombre. Defina las cotas con DIMSTYLE, o empiece desde un dibujo que tenga los suyos.
- El archivo es JSON abierto y sin formato. Una política que el archivo nombra y que esta versión no conoce se omite y se indica en el mensaje; lo demás sí se carga.
- Las políticas se guardan en este navegador, no en el dibujo. Desactive el complemento y todo vuelve a ser lo propio de CadCraft.
