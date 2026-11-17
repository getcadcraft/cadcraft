---
title: Point cloud formatos: mba'e oñemoĩva, ha mba'e oexporta
summary: Mba'épa láser escaneo archivo-kuéra oñemoĩ dibujo guýpe, mba'épa ha'e escáner fabricante propio formato, ha mba'e exportar escáner programa-gui escaneo ojeñemoĩ ko'ápe.
keywords: point cloud, pointcloudattach, pcattach, láser escaneo, escaneo, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportar, ndoikatúi abrir, ndoleéi
from: 20a5f4ee
---

## Mba'e oñemoĩva ko'ápe

Ko'ãva oñemoĩ {{cmd:POINTCLOUDATTACH}}, {{ui:Open}} térã página-pe ohejávo (eha tema calcar línea as-built point cloud-pe):

| Formato | Extensión | Mba'e ojeleéva |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: punto-kuéra, colores, intensidad, LiDAR clase-kuéra, coordenada sistema ha unidades. LAZ 1 GB peve. |
| E57 | `.e57` | Escaneo opavave archivo-pe, peteĩ peteĩ pose-pe omoĩva; colores, térã intensidad archivo colores ndaguerekóramo; metro. Imagen archivo-pe oĩva ndojejapóiva (omombe'u). 6 millón punto ha 512 MB peve ko'ẽrõ: escaneo guasúva exportar LAS térã LAZ-pe. |
| PLY | `.ply` | Texto ha binario (byte orden mokõive): vértice x y z, colores ha intensidad. Caras ndojejapóiva (omombe'u). |
| PCD | `.pcd` | Texto ha binario: x y z, colores ojeñemoĩva térã separados, intensidad. PCD comprimido ndojeleéi kuri: guarda binario térã texto-pe. |
| PTX | `.ptx` | Escaneo peteĩ térã hetaiterei, peteĩ peteĩ transformación-pe omoĩva; escáner ndomedíva punto-kuéra ndojejapói. Metro. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x y z, intensidad ha colores columna oĩramo. |

## Archivo-kuéra escáner programa añoite oñe'ẽ

Escaneo archivo hetaiterei ha'e escáner fabricante propio formato, descripción publicada ndoguerekóiva ha lector abierto ndaipóri. CadCraft ndoikatúi leer: oñemoĩramo omombe'u mba'e ha'e ha mba'épa comando línea-pe ojapo. Exportar escaneo fabricante programa-gui E57 térã LAS (térã PTX, PTS), upéi eñemoĩ exportado archivo.

| Archivo | Extensión | Exportar gui |
|---|---|---|
| ReCap proyecto | `.rcp` | ReCap: abrir proyecto ha exportar. Proyecto ohechauka hembiapo escaneo-pe; `.rcp` añoite ndaikatúi punto-kuéra. |
| ReCap escaneo | `.rcs` | ReCap: abrir escaneo oikóva proyecto ha exportar. |
| FARO escaneo | `.fls` | FARO SCENE. |
| Leica escaneo | `.lgs` | Leica Cyclone REGISTER 360. |
| Trimble escaneo | `.tzf` | Trimble RealWorks térã Trimble Business Center. |
| Z+F escaneo | `.zfs` | Z+F LaserControl. |

:::tip
Exportación formato oporandúramo, LAS térã LAZ oguarda opavave CadCraft ojeporúva (colores, intensidad, clases, coordenada sistema ha unidades) archivo michĩvéva-pe.
:::

## Mbaʼéichapa ndojeleéi ko'ã archivo-kuéra

Ko'ã formato ndojepublicaíri, ha lector oiko fabricante propio biblioteca-pe, bajo hembiapo ojuhúva. CadCraft ojeleé formato ojeleéva ijehe computadora-pe, upévare escaneo ndojeʼéi ndahasái oñemoĩ.
