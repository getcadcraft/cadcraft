---
title: Tuberías: caudal y presión en el suministro de agua
summary: PIPENET sigue las tuberías de suministro dibujadas desde la fuente, suma las unidades de aparato que indique en cada extremo libre y calcula el caudal, la velocidad y la presión perdida hasta cada aparato.
keywords: suministro, agua, unidades de aparato, demanda, caudal, velocidad, pérdida de presión, hazen-williams, PIPENET, PNET, altura estática, agua caliente, agua fría
from: ece38a8e
---

Escriba {{cmd:PIPENET}} (`PNET`) y haga clic en el extremo de un tramo por donde entra el suministro.

En cada extremo libre pregunta qué hay allí: un tipo de aparato (`wc`, `lav`, `sink`, `shower`, `laundry`, `bath`, `dishwasher`) o un número de unidades de aparato (0 si no hay nada). Las respuestas se recuerdan para ese lugar; {{ui:Reiniciar}} las olvida. {{ui:Presión}} toma la presión de suministro en el origen y la presión que necesita un aparato, en kPa.

Imprime, para cada aparato, las unidades de aparato que lleva, la presión perdida desde el origen (fricción según Hazen–Williams, accesorios y la subida o bajada de la tubería: una tubería que desciende en el sentido en que se dibuja gana presión cuando se alimenta por su extremo bajo) y lo que queda de la presión de suministro. Se enumeran los tramos demasiado estrechos para su caudal (rápidos).

**Demanda** usa una curva por defecto, de unidades de aparato a caudal, que se indica como ejemplo. Escriba la curva del código vigente en los ajustes del motor antes de fiarse de los caudales. Las pérdidas en accesorios son valores redondeados por defecto. Los bucles se ignoran. Compruebe los resultados con su ingeniero. {{ui:Exportar}} › Red de suministro escribe cada tramo en CSV.
