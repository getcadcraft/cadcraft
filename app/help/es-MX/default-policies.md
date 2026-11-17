---
title: "Políticas predeterminadas: defina con qué empieza un dibujo nuevo"
summary: Indique una vez con qué unidades, formato de longitud, precisión, altura de texto y papel de hoja empieza un dibujo nuevo, para trabajo métrico y en pulgadas, y comparta las políticas en la oficina como un archivo pequeño.
keywords: predeterminado, predeterminados, políticas predeterminadas, política, estándar de oficina, valores predeterminados de oficina, plantilla, dibujo nuevo, unidades, insunits, formato de longitud, arquitectónico, precisión, luprec, altura de texto, papel de hoja, a1, compartir, exportar, importar, json
from: 7b80fd13
---

## Lo que hará

Indique a CadCraft con qué debe empezar un dibujo nuevo, para que nadie en la oficina tenga que ejecutar UNITS y cambiar las mismas cosas cada vez. Es un complemento: está desactivado hasta que lo active, y una política que no defina deja el valor propio de CadCraft tal como está.

:::note
Estos son valores predeterminados para dibujos **nuevos** y hojas **nuevas**. Un dibujo que ya empezó no cambia, y tampoco uno que abra.
:::

## Pasos

1. Abra Configuración, vaya a {{ui:Complementos}} y active {{ui:Políticas predeterminadas}}.
2. En Configuración, abra la pestaña **CadCraft** y elija {{ui:Políticas predeterminadas}} en la lista de la izquierda.
3. Defina las políticas que quiera. Cada una empieza con el valor propio de CadCraft. Una política con un cuadro **Métrico** y otro **Imperial** toma un valor para cada tipo de dibujo; llene solo los que necesite.
4. No hay botón Guardar: cada cambio se guarda al hacerlo.
5. Inicie un dibujo nuevo. Tendrá las unidades, el formato de longitud, la precisión y la altura de texto que definió, y su primera hoja nueva estará en el papel que eligió.

## Las políticas

- **Unidades de un dibujo nuevo**: ninguna, milímetros, centímetros, metros, pulgadas o pies.
- **Formato de longitud** y **Precisión de longitud**: lo que define el comando UNITS, para un dibujo nuevo.
- **Altura del texto nuevo**, en unidades de dibujo.
- **Papel de una hoja nueva**: el papel que usa Hoja nueva.
- **Tamaños de anotación en papel** (Configuración › General › Políticas predeterminadas): las alturas de la oficina en milímetros, tal como se imprimen. CadCraft usa la de notas y etiquetas: {{cmd:ANNOSCALE}} fija la altura con la que empieza el texto nuevo, a esa altura en la escala de anotación. Vea [Unidades, papeles y escalas](topic:units-papers-scales#annotate-by-scale).

Un dibujo en pulgadas o pies usa los valores imperiales; cualquier otro dibujo usa los métricos. Un dibujo sin unidades usa el sistema de unidades definido en Configuración › General › Políticas predeterminadas, o métrico si no hay ninguno.

## Compartirlas en la oficina

1. En Configuración, abra la pestaña **General** y elija {{ui:Políticas predeterminadas}}.
2. Haga clic en {{ui:Guardar en un archivo}}. Obtendrá un archivo pequeño que termina en `.ccdefaults.json`.
3. En otra computadora, active el complemento, abra el mismo lugar y haga clic en {{ui:Cargar desde un archivo}}. Las políticas del archivo reemplazan las de esa computadora.

Un solo archivo contiene las políticas de todas las aplicaciones de CadCraft, así que el mismo archivo funciona en BimCraft.

## Puntos a tener en cuenta

- No hay política para la escala de una hoja: la vista de una hoja nueva se ajusta al dibujo, y usted fija su escala en la hoja.
- No hay política para un estilo de cota: un dibujo nuevo no tiene estilos de cota con nombre. Configure las cotas con DIMSTYLE, o empiece desde un dibujo que ya tenga los suyos.
- El archivo es JSON sencillo y abierto. Una política que el archivo nombra y que esta versión no conoce se omite y se indica en el mensaje; las demás sí se cargan.
- Las políticas se guardan en este navegador, no en el dibujo. Si desactiva el complemento, todo vuelve a ser el valor propio de CadCraft.
