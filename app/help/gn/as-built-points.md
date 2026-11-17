---
title: Verificar puntos as-built
summary: Ehecha los puntos que midió una cuadrilla de topografía y compará con los puntos y bloques del plano: dentro o fuera de una tolerancia, no medidos, extras — marcados en el plano y escritos como informe CSV.
keywords: as built, as-built, asbuilt, topografía, estación total, replanteo, replantear, archivo de puntos, csv, txt, pnezd, penzd, xyz, tolerancia, desvío, verificar, comparar, exportpoints, puntos de replanteo
from: f7c35208
---

{{cmd:ASBUILT}} (alias ASB) es la otra mitad de {{cmd:EXPORTPOINTS}}: exportás los puntos del plano para el campo, la cuadrilla los replantea y mide lo construido, y ASBUILT compara su archivo con el plano.

1. Escribí {{cmd:ASBUILT}} y seleccioná los mismos puntos y bloques que exportaste (Enter toma todos los POINT, igual que EXPORTPOINTS).
2. **Emparejá los puntos as-built por** **Número** (la cuadrilla mantuvo tus números de punto: indicá el primer número que exportaste) o **Más cercano** (ellos numeraron sus propias lecturas: cada punto de diseño toma el más cercano).
3. Indicá las unidades y las coordenadas del archivo tal como las exportaste (Plano, Metros o Pies; Mundo o UCS), y la **tolerancia** en unidades del plano.
4. Elegí el archivo CSV o TXT de la cuadrilla. CadCraft lo lee igual que CivilCraft: comas, tabulaciones, punto y coma o espacios, una fila de encabezado con los nombres de las columnas, o PNEZD según la cantidad de columnas.

La línea de comandos dice cuántos puntos se emparejaron, cuántos están dentro de la tolerancia, fuera de ella, no medidos y extras, y la mayor distancia. **¿Marcarlos en el plano?** Sí los pone en la capa **AS-BUILT** como un solo paso de deshacer: un punto en cada lectura, con su número y su distancia al lado, y una línea roja desde el punto de diseño hasta cada lectura fuera de la tolerancia. Se descarga un informe CSV con todos los puntos: coordenadas de diseño y as-built, las diferencias en este, norte y altura, y el resultado.

Ver también [Puntos para programas BIM](topic:points-for-bim).
