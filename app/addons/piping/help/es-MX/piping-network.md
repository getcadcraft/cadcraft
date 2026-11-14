---
title: Tuberías: flujo y presión en un suministro de agua
summary: PIPENET sigue las tuberías de suministro dibujadas desde la fuente, suma las unidades de mueble que indique en cada extremo libre, y calcula el caudal, la velocidad y la presión perdida hasta cada mueble.
keywords: suministro, agua, unidades de mueble, demanda, caudal, velocidad, pérdida de presión, hazen-williams, PIPENET, PNET, carga estática, caliente, fría
from: ece38a8e
---

Escriba {{cmd:PIPENET}} (`PNET`) y pulse el extremo de un tramo por donde entra el suministro.

Para cada extremo libre pregunta qué hay allí: un tipo de mueble (`wc`, `lav`, `sink`, `shower`, `laundry`, `bath`, `dishwasher`) o un número de unidades de mueble (0 si no hay nada). Las respuestas se recuerdan para ese lugar; {{ui:Reset}} las olvida. {{ui:Pressure}} toma la presión de suministro en la fuente y la presión que necesita un mueble, en kPa.

Imprime, para cada mueble, las unidades de mueble que transporta, la presión perdida desde la fuente (fricción por Hazen–Williams, accesorios, y el ascenso o descenso de la tubería: una tubería que baja en el sentido en que se dibuja gana presión cuando se alimenta por su extremo bajo) y lo que queda de la presión de suministro. Se listan los tramos demasiado pequeños para su caudal (rápidos).

**Demanda** usa una curva predeterminada de unidades de mueble a caudal que es un ejemplo rotulado. Escriba la curva del código vigente en la configuración del motor antes de confiar en los caudales. Las pérdidas por accesorios son valores predeterminados redondeados. Se ignoran los circuitos cerrados. Verifique los resultados con su ingeniero. {{ui:Exportar}} › Red de suministro escribe cada tramo en CSV.
