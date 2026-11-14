---
title: Tuberías: saneamiento y pendiente
summary: Dar pendiente a un desagüe, ver su caída y sus cotas, y comprobarlo frente a la pendiente mínima del código de fontanería.
keywords: pendiente, saneamiento, desagüe, drenaje, aguas residuales, aguas pluviales, caída, cota de batea, cota, código de fontanería, IPC, 1/4 in por ft, porcentaje
from: 651f0dfb
---

## Un tramo con pendiente

{{cmd:PIPE}} › {{ui:Pendiente}} admite pulgadas por pie (`1/4`, `1/8`, `0.125`) en un dibujo de unidades imperiales, o un porcentaje (`2`, `1`) en uno métrico; `0` es horizontal. El tramo desciende en la dirección en que lo dibuja, desde la cota que indique en su inicio. Su planta muestra la pendiente y una flecha de flujo; su sólido en la pestaña {{ui:3D}} desciende con él; la tabla de tuberías da su cota en ambos extremos.

Un desagüe de aguas residuales o pluviales dibujado sin pendiente toma la pendiente mínima que el Código Internacional de Fontanería (2021, tabla 704.1) permite para su tamaño mayor:

- 2-1/2 in o menos: 1/4 in por ft (2 %);
- de 3 a 6 in: 1/8 in por ft (1 %);
- de 8 in o más: 1/16 in por ft (0.5 %).

{{cmd:PIPE}} y {{cmd:PIPESCHED}} señalan un desagüe más plano que eso. Su código local puede ser distinto: es un recordatorio, no una inspección.

## Longitudes a lo largo de la pendiente

La longitud de un tramo con pendiente en la tabla —y en TakeoffCraft— se mide a lo largo de la pendiente: 40 ft a 1/8 in por ft son 40.002 ft de tubería y descienden 5 in.

Cambie la pendiente de un tramo en {{ui:Propiedades}} › {{ui:Tramo de tubería}} › {{ui:Pendiente}}.
