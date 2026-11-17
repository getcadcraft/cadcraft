---
title: Comprobar los puntos tal como se construyeron
summary: Lea los puntos que midió una brigada de topografía y compárelos con los puntos y bloques del dibujo: dentro o fuera de una tolerancia, no medidos, sobrantes. Se marcan en el dibujo y se escriben en un informe CSV.
keywords: as built, as-built, asbuilt, tal como construido, topografía, estación total, replanteo, archivo de puntos, csv, txt, pnezd, penzd, xyz, tolerancia, desviación, comprobar, comparar, exportpoints, puntos de replanteo
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) es la otra mitad de {{cmd:EXPORTPOINTS}}: usted exporta los puntos del dibujo para el campo, la brigada los replantea y mide lo construido, y ASBUILT compara su archivo con el dibujo.

1. Escriba {{cmd:ASBUILT}} y seleccione los mismos puntos y bloques que exportó (Intro toma todos los POINT, igual que EXPORTPOINTS).
2. **Asocie los puntos tal como se construyeron por** **Número** (la brigada conservó sus números de punto: indique el primer número que exportó) o **Más cercano** (ellos numeraron sus propias medidas: cada punto de proyecto toma la más próxima).
3. Indique las unidades y las coordenadas del archivo tal como las exportó (Dibujo, Metros o Pies; Universal o UCS), y la **tolerancia** en unidades de dibujo.
4. Elija el archivo CSV o TXT de la brigada. CadCraft lo lee igual que lo hace CivilCraft: comas, tabuladores, puntos y coma o espacios, una fila de encabezado que nombre sus columnas, o PNEZD según el número de columnas.

La línea de comandos indica cuántos puntos se asociaron, cuántos están dentro de la tolerancia, fuera de ella, no medidos y sobrantes, y la mayor distancia. **¿Marcarlos en el dibujo?** Sí los coloca en la capa **AS-BUILT** como un solo paso de deshacer: un punto en cada medida, su número y su distancia junto a él, y una línea roja desde el punto de proyecto hasta cada medida fuera de la tolerancia. Se descarga un informe CSV con todos los puntos: coordenadas de proyecto y tal como se construyeron, las diferencias en este, norte y altura, y el resultado.

Véase también [Puntos para programas BIM](topic:points-for-bim).
