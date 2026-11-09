---
title: Tuberías: válvulas y símbolos P&ID
summary: Ponga válvulas, coladores, bridas y uniones en los tramos de tubería, y coloque por separado un juego de símbolos de estilo P&ID.
keywords: válvula, compuerta, globo, bola, retención, mariposa, macho, control, colador, brida, unión, p&id, esquema, símbolo, bomba, alivio, instrumento, burbuja
from: d3ad5259
---

## Válvulas en los tramos

Escriba {{cmd:VALVE}} y pulse sobre un tramo de tubería; la válvula va donde pulse, dimensionada al tramo (en un tramo de línea doble, lo bastante grande para sobresalir de la tubería). {{ui:Tipo}} elige compuerta, globo, bola, retención, mariposa, macho o control, un colador en Y, una junta con brida o una unión. {{ui:Quitar}} quita la más cercana. La línea del tramo se interrumpe bajo cada válvula, y cada válvula se cuenta en el cuadro por tipo y tamaño.

## Símbolos por separado

{{cmd:PIDSYM}} coloca símbolos esquemáticos para un diagrama de proceso e instrumentación o un diagrama de bajantes: las válvulas mencionadas arriba, una válvula de tres vías, una válvula de alivio, una reducción, una tapa, una bomba centrífuga, burbujas de instrumento (de montaje en campo, o de montaje en panel con la línea que pasa) con su etiqueta (letras sobre el número, como en `PI 101`) y una flecha de flujo. {{ui:Ángulo}} gira los siguientes símbolos. Su tamaño se define en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:Tuberías}}.

Las formas siguen las convenciones comunes de estos diagramas (ANSI/ISA-5.1 para las burbujas de instrumento, ISO 10628-2 para válvulas y equipos); los dibujos son propios de CadCraft.
