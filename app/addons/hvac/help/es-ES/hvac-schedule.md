---
title: Climatización: la tabla de conductos
summary: Conducto recto por tamaño y material, cada accesorio y el área de chapa de cada uno, como tabla en el dibujo o como archivo CSV.
keywords: tabla, tabla de conductos, chapa, superficie, pies cuadrados, accesorios, csv, mediciones, longitud
from: a5764fca
---

## Una tabla en el dibujo

Escriba {{cmd:DUCTSCHED}}. La línea de comandos da los totales; haga clic donde va la tabla (en su esquina superior izquierda). La tabla enumera:

- **conducto recto** por forma, tamaño y material, con su longitud y su área de chapa;
- **accesorios**: codos, transiciones y reducciones, tes, tomas y ramales laterales, por tipo y tamaño, con cuántos hay y su chapa;
- un total.

La tabla se mantiene al día: cada cambio en un tramo de conducto la modifica en el mismo paso ({{cmd:UNDO}} los devuelve a ambos). Su altura de texto se fija en {{ui:Ajustes}} › {{ui:CadCraft}} › {{ui:Climatización}}.

## Cómo se calcula la chapa

- Conducto recto: su perímetro × su longitud. Un conducto de 24 × 12 in de 10 ft tiene 6 ft × 10 ft = 60 ft².
- Codos: perímetro × longitud del eje. En un codo de radio es exacto: los dos costados, el talón y la garganta suman justo eso. Un codo de 90° de 24 × 12 in con radio de 24 in tiene 18.85 ft².
- Transiciones rectangulares: sus cuatro caras planas, cada una calculada con exactitud.
- Transiciones redondas y de forma mixta: perímetro medio × longitud oblicua (exacto para una reducción redonda centrada en ambos extremos, aproximado en las demás).
- Toma o te de una derivación: su cuello, es decir, el perímetro de la derivación × 2 in (50 mm).

No se incluyen costuras, solapes ni desperdicio: añádalos en TakeoffCraft como desperdicio, o según la regla de su taller.

## Un archivo CSV

{{cmd:EXPORT}} › {{ui:Tabla de conductos (CSV)}} escribe tres tablas: el conducto recto (forma, tamaño, material, longitud, perímetro, área), los accesorios (cantidad, área de cada uno, área) y cada sección (etiqueta, sistema, tamaño, longitud, caudal, velocidad, pérdida por rozamiento).

Para estimar a partir de la tabla, véase [Conductos en TakeoffCraft](topic:hvac-takeoff).
