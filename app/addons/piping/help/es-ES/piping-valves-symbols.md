---
title: Tuberías: válvulas y símbolos P&ID
summary: Coloque válvulas, filtros en Y, bridas y uniones en tramos de tubería, y ponga por separado un juego de símbolos de estilo P&ID.
keywords: válvula, compuerta, globo, bola, retención, mariposa, tapón, válvula de control, filtro en Y, brida, unión, p&id, esquema, símbolo, bomba, válvula de seguridad, instrumento, burbuja
from: d3ad5259
---

## Válvulas en los tramos

Escriba {{cmd:VALVE}} y haga clic en un tramo de tubería; la válvula va donde haga clic, ajustada al tramo (en un tramo de doble línea, lo bastante grande para sobresalir de la tubería). {{ui:Tipo}} elige compuerta, globo, bola, retención, mariposa, tapón o válvula de control, un filtro en Y, una junta embridada o una unión. {{ui:Quitar}} quita la más cercana. La línea del tramo se interrumpe bajo cada válvula, y cada válvula se cuenta en la tabla por tipo y diámetro.

## Símbolos por separado

{{cmd:PIDSYM}} coloca símbolos esquemáticos para un diagrama de procesos e instrumentación o un diagrama de montantes: las válvulas anteriores, una válvula de tres vías, una válvula de seguridad, una reducción, una tapa, una bomba centrífuga, burbujas de instrumento (de campo, o de panel con la línea que pasa por ellas) con su etiqueta —letras sobre el número, como en `PI 101`— y una flecha de flujo. {{ui:Ángulo}} gira los símbolos siguientes. Su tamaño se fija en {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Tuberías}}.

Las formas siguen las convenciones habituales de estos diagramas (ANSI/ISA-5.1 para las burbujas de instrumento, ISO 10628-2 para válvulas y equipos); los dibujos son propios de CadCraft.
