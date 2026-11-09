---
title: HVAC: el cuadro de ductos
summary: Ducto recto por tamaño y material, cada accesorio y el área de lámina metálica de cada uno, como tabla en el dibujo o en un archivo CSV.
keywords: cuadro, cuadro de ductos, lámina metálica, área de superficie, pies cuadrados, accesorios, csv, cantidades, longitud
from: a5764fca
---

## Una tabla en el dibujo

Escriba {{cmd:DUCTSCHED}}. La línea de comandos muestra los totales; haga clic donde va la tabla (en su esquina superior izquierda). La tabla enumera:

- **ducto recto** por forma, tamaño y material, con su longitud y su área de lámina metálica;
- **accesorios**: codos, transiciones y reductores, tes, tomas y laterales, por tipo y tamaño, con cuántos son y su lámina metálica;
- un total.

La tabla se mantiene al día: cada cambio en un tramo de ducto la modifica en el mismo paso ({{cmd:UNDO}} deshace ambos). Su altura de texto se configura en {{ui:Configuración}} › {{ui:CadCraft}} › {{ui:HVAC}}.

## Cómo se calcula la lámina metálica

- Ducto recto: su perímetro × su longitud. Un ducto de 24 × 12 in de 10 ft de largo tiene 6 ft × 10 ft = 60 ft².
- Codos: el perímetro × la longitud del eje central. Para un codo de radio esto es exacto: las dos mejillas, el talón y la garganta suman justo eso. Un codo de 90° de 24 × 12 in con radio de 24 in tiene 18.85 ft².
- Transiciones rectangulares: sus cuatro lados planos, cada uno calculado con exactitud.
- Transiciones redondas y de forma mixta: el perímetro promedio × la longitud inclinada (exacto para un reductor redondo centrado en ambos extremos, aproximado en los demás).
- Toma o te de una derivación: su cuello, el perímetro de la derivación × 2 in (50 mm).

Las costuras, traslapes y desperdicio no se incluyen: agréguelos en TakeoffCraft como desperdicio, o según la regla de su taller.

## Un archivo CSV

{{cmd:EXPORT}} › {{ui:Cuadro de ductos (CSV)}} escribe tres tablas: el ducto recto (forma, tamaño, material, longitud, perímetro, área), los accesorios (cantidad, área de cada uno, área) y cada sección (etiqueta, sistema, tamaño, longitud, caudal, velocidad, fricción).

Para estimar a partir del cuadro, vea [Ductos en TakeoffCraft](topic:hvac-takeoff).
