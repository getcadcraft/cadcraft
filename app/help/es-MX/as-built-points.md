---
title: Comprobar puntos as-built
summary: Lea los puntos que midió una brigada de topografía y compárelos con los puntos y bloques del dibujo: dentro o fuera de una tolerancia, no medidos, sobrantes; se marcan en el dibujo y se escriben en un informe CSV.
keywords: as built, as-built, asbuilt, topografía, estación total, replanteo, replantear, archivo de puntos, csv, txt, pnezd, penzd, xyz, tolerancia, desviación, comprobar, comparar, exportpoints, puntos de replanteo
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) es la otra mitad de {{cmd:EXPORTPOINTS}}: usted exporta los puntos del dibujo para el campo, la brigada los replantea y mide lo construido, y ASBUILT compara su archivo con el dibujo.

1. Escriba {{cmd:ASBUILT}} y seleccione los mismos puntos y bloques que exportó (Enter toma todos los POINT, igual que EXPORTPOINTS).
2. **Empareje los puntos as-built por** **Número** (la brigada conservó sus números de punto: indique el primer número desde el que exportó) o **Más cercano** (ellos numeraron sus propias mediciones: cada punto de diseño toma el más cercano).
3. Indique las unidades y las coordenadas del archivo tal como las exportó (Dibujo, Metros o Pies; Mundo o SCP), y la **tolerancia** en unidades del dibujo.
4. Elija el archivo CSV o TXT de la brigada. CadCraft lo lee como lo hace CivilCraft: comas, tabuladores, punto y coma o espacios, una fila de encabezado que nombre sus columnas, o PNEZD por número de columnas.

La línea de comandos indica cuántos puntos se emparejaron, cuántos están dentro de la tolerancia, fuera de ella, no medidos y sobrantes, y la mayor distancia. **¿Marcarlos en el dibujo?** Sí: los coloca en la capa **AS-BUILT** como un solo paso de deshacer: un punto en cada medición, con su número y distancia junto a él, y una línea roja desde el punto de diseño hasta cada medición fuera de la tolerancia. Se descarga un informe CSV con todos los puntos: coordenadas de diseño y as-built, las diferencias este, norte y en altura, y el resultado.

Vea también [Puntos para programas BIM](topic:points-for-bim).
