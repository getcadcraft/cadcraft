---
title: Compruebe en qué unidades está un dibujo
summary: Vea si un dibujo abierto está en milímetros, pulgadas u otra unidad, compruébelo midiendo y sepa por qué otro programa puede indicar unidades distintas para el mismo DXF.
keywords: unidades, qué unidades, cuáles unidades, comprobar unidades, milímetros, mm, pulgadas, métrico, imperial, unidades DXF, STEP a DXF, unidades incorrectas, pulgadas o mm, INSUNITS, MEASUREMENT, unidades de dibujo, DXF de PartCraft
from: c0ee75bb
---

## Qué hará

Averigüe qué representa una unidad en un dibujo abierto y asegúrese de que los números que lee tienen el tamaño que espera.

## Pasos

1. Abra el dibujo y pulse {{key:Esc}} para no tener nada designado, en la pestaña {{ui:Modelo}}.
2. En el panel derecho, en {{ui:Parámetros actuales}}, lea {{ui:Unidades}}. Indica qué representa una unidad del dibujo: {{ui:Milímetros}}, {{ui:Pulgadas}}, {{ui:Pies}} y así sucesivamente. Un DXF guardado desde PartCraft indica {{ui:Milímetros}}.
3. Compruébelo midiendo algo cuyo tamaño conozca. Escriba {{cmd:DIST}} y precise los dos extremos de una arista o de un agujero. Si una pieza que conoce mide 25 mm y lee `25`, el dibujo está en milímetros; si lee alrededor de `0.98`, está en pulgadas.

{{ui:Sin unidades}} significa que el archivo no lo indica. CadCraft entonces toma la unidad del papel (milímetros en papel ISO, pulgadas en papel US), y los números solo son tan correctos como el programa que los escribió.

## Si las unidades son incorrectas

Cambiar {{ui:Unidades}} **no modifica el tamaño de nada**: los números siguen igual y solo cambia lo que significan. Por eso, configúrelo solo para indicar lo que el dibujo realmente es. Si los números están en milímetros y {{ui:Unidades}} dice {{ui:Pulgadas}}, elija {{ui:Milímetros}}. Si necesita la geometría misma en otras unidades, escálela con {{cmd:SCALE}} (25.4 de pulgadas a milímetros, 1/25.4 en sentido contrario) y después configure {{ui:Unidades}}.

Cómo se escriben las longitudes (decimal, pies y pulgadas, fracciones) es otro parámetro, {{ui:Formato de longitud}}: consulte [Unidades, tamaños de papel y escalas](topic:units-papers-scales).

## Por qué otro programa puede indicar pulgadas

Un DXF indica sus unidades en su encabezado. El DXF más antiguo, R12, no tenía ninguna variable de unidades, así que un programa que lee R12 de forma estricta ignora la que se escribe allí y usa su propio valor predeterminado, que a menudo es pulgadas. La geometría del archivo es la misma en cualquier caso: solo cambia la etiqueta. PartCraft escribe sus archivos DXF como R12 e indica milímetros de dos formas (`$INSUNITS` 4 y `$MEASUREMENT` 1) para que más programas los lean bien. Si un programa sigue indicando pulgadas, configure sus unidades en milímetros al abrir el archivo.

Al traer un archivo a un dibujo (en lugar de abrirlo) se convierten sus unidades: consulte [Unidades al importar](topic:units-on-import).
