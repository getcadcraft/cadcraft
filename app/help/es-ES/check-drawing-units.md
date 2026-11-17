---
title: Comprobar en qué unidades está un dibujo
summary: Vea si un dibujo abierto está en milímetros, pulgadas u otra unidad, compruébelo midiendo y sepa por qué otro programa puede indicar unidades distintas para el mismo DXF.
keywords: unidades, qué unidades, qué unidad, comprobar unidades, milímetros, mm, pulgadas, métrico, imperial, unidades DXF, STEP a DXF, unidades incorrectas, pulgadas o mm, INSUNITS, MEASUREMENT, unidades del dibujo, PartCraft DXF
from: c0ee75bb
---

## Lo que hará

Averigüe qué representa una unidad en un dibujo abierto, y asegúrese de que los números que lee tienen el tamaño que espera.

## Pasos

1. Abra el dibujo y pulse {{key:Esc}} para que no haya nada seleccionado, en la pestaña {{ui:Modelo}}.
2. En el panel derecho, bajo {{ui:Parámetros actuales}}, lea {{ui:Unidades}}. Indica qué representa una unidad del dibujo: {{ui:Milímetros}}, {{ui:Pulgadas}}, {{ui:Pies}} y así sucesivamente. Un DXF guardado desde PartCraft indica {{ui:Milímetros}}.
3. Compruébelo midiendo algo cuyo tamaño conoce. Escriba {{cmd:DIST}} y elija los dos extremos de una arista o de un agujero. Si una pieza que conoce de 25 mm se lee `25`, el dibujo está en milímetros; si se lee algo como `0.98`, está en pulgadas.

{{ui:Sin unidades}} significa que el archivo no lo indica. CadCraft lo trata entonces como la unidad del papel (milímetros en papel ISO, pulgadas en papel de EE. UU.), y los números solo son tan correctos como el programa que los escribió.

## Si las unidades son incorrectas

Cambiar {{ui:Unidades}} **no redimensiona nada**: los números siguen iguales y solo cambia lo que significan. Por eso, configúrelo solo para indicar lo que realmente es el dibujo. Si los números son milímetros y {{ui:Unidades}} indica {{ui:Pulgadas}}, elija {{ui:Milímetros}}. Si necesita la geometría en otras unidades, escálela con {{cmd:SCALE}} (25.4 para pasar de pulgadas a milímetros, 1/25.4 en sentido contrario) y después configure {{ui:Unidades}}.

Cómo se escriben las longitudes (decimal, pies y pulgadas, fracciones) es un ajuste aparte, {{ui:Formato de longitud}}: consulte [Unidades, tamaños de papel y escalas](topic:units-papers-scales).

## Por qué otro programa puede indicar pulgadas

Un DXF declara sus unidades en su cabecera. El DXF más antiguo, R12, no tenía variable de unidades, así que un programa que lee R12 de forma estricta ignora la que se escribe allí y usa su propio valor por defecto, que a menudo son pulgadas. La geometría del archivo es la misma en ambos casos: solo cambia la etiqueta. PartCraft escribe sus archivos DXF como R12 y declara milímetros de dos formas (`$INSUNITS` 4 y `$MEASUREMENT` 1) para que más programas los lean bien. Si un programa sigue indicando pulgadas, configure sus unidades en milímetros al abrir el archivo.

Al traer un archivo a un dibujo (en lugar de abrirlo) se convierten sus unidades: consulte [Unidades al importar](topic:units-on-import).
