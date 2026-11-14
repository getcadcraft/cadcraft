---
title: Tuberías: drenaje y pendiente
summary: Dé pendiente a un drenaje, vea su caída y sus elevaciones, y compárelo con la pendiente mínima del código de plomería.
keywords: pendiente, drenaje, desagüe, sanitario, pluvial, caída, plantilla, elevación, código de plomería, ipc, 1/4 pulgada por pie, porcentaje
from: 651f0dfb
---

## Un tramo con pendiente

{{cmd:PIPE}} › {{ui:Inclinación}} acepta pulgadas por pie (`1/4`, `1/8`, `0.125`) en un dibujo en pulgadas, o un porcentaje (`2`, `1`) en uno métrico; `0` es horizontal. El tramo cae en la dirección en que lo dibuja, desde la elevación que indique en su inicio. Su planta muestra la pendiente y una flecha de flujo; su sólido en la pestaña {{ui:3D}} cae con él; el cuadro de tramos da su elevación en ambos extremos.

Un drenaje sanitario o pluvial dibujado sin pendiente toma la pendiente mínima que permite el International Plumbing Code (2021, Tabla 704.1) para su tamaño mayor:

- 2-1/2 in y menores: 1/4 in por pie (2 %);
- 3 a 6 in: 1/8 in por pie (1 %);
- 8 in y mayores: 1/16 in por pie (0.5 %).

Un drenaje más plano que eso lo informan {{cmd:PIPE}} y {{cmd:PIPESCHED}}. Su código local puede ser distinto: es un recordatorio, no una inspección.

## Longitudes a lo largo de la pendiente

La longitud de un tramo con pendiente en el cuadro de tuberías — y en TakeoffCraft — se mide a lo largo de la pendiente: 40 ft con 1/8 in por pie son 40.002 ft de tubería y caen 5 in.

Cambie la pendiente de un tramo en {{ui:Propiedades}} › {{ui:Tramo de tubería}} › {{ui:Inclinación}}.
