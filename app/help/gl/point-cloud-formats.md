---
title: Formatos de nube de puntos, o que se adxunta e o que exportar
summary: Que ficheiros de escaneo láser se adxuntan baixo o debuxo, cales son un formato propio do fabricante do escáner, e que exportar desde o software do escáner para que o escaneo se adxunte aquí.
keywords: nube de puntos, pointcloudattach, pcattach, escaneo láser, escaneo, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportar, non se pode abrir, non se le
from: 20a5f4ee
---

## O que se adxunta aquí

Adxunte estes con {{cmd:POINTCLOUDATTACH}}, {{ui:Abrir}} ou soltándoos na páxina (ver o tema sobre calcar liñas tal como se construíu sobre unha nube de puntos):

| Formato | Extensión | Que se le |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: puntos, cores, intensidade, clases LiDAR, o sistema de coordenadas e as súas unidades. LAZ ata 1 GB. |
| E57 | `.e57` | Cada escaneo do ficheiro, colocado segundo a súa posición; cores, ou intensidade cando o ficheiro non ten cores; metros. As imaxes do ficheiro quedan fóra (indícao). Ata 6 millóns de puntos e 512 MB por agora: exporte os escaneos máis grandes como LAS ou LAZ. |
| PLY | `.ply` | Texto e binario (ambas ordes de bytes): os vértices x y z, cores e intensidade. As caras quedan fóra (indícao). |
| PCD | `.pcd` | Texto e binario: x y z, cores empaquetadas ou separadas, intensidade. Os ficheiros PCD comprimidos aínda non se len: gárdeos como binario ou texto. |
| PTX | `.ptx` | Un ou varios escaneos, cada un colocado coa súa propia transformación; os puntos que o escáner non medeu quedan fóra. Metros. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x y z, con intensidade e cores cando esas columnas están. |

## Ficheiros que só le o software do escáner

Algúns ficheiros de escaneo son un formato propio do fabricante do escáner, sen descrición publicada e sen lector aberto. CadCraft non os pode ler: ao adxuntar un, indica o que é e o que facer na liña de comandos. Exporte o escaneo desde o software do fabricante como E57 ou LAS (ou PTX, PTS), e despois adxunte o ficheiro exportado.

| Ficheiro | Extensión | Exportar desde |
|---|---|---|
| Proxecto ReCap | `.rcp` | ReCap: abra o proxecto e exportéeo. O proxecto só apunta aos seus escaneos, así que copiar só o `.rcp` non dá puntos. |
| Escaneo ReCap | `.rcs` | ReCap: abra o proxecto ao que pertence o escaneo e exportéeo. |
| Escaneo FARO | `.fls` | FARO SCENE. |
| Escaneo Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Escaneo Trimble | `.tzf` | Trimble RealWorks ou Trimble Business Center. |
| Escaneo Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Cando a exportación pide un formato, LAS ou LAZ conserva todo o que usa CadCraft (cores, intensidade, clases, o sistema de coordenadas e as súas unidades) no ficheiro máis pequeno.
:::

## Por que non se len estes ficheiros

Eses formatos non están publicados, e a única forma de lelos é a biblioteca de software de cada fabricante, baixo as súas propias condicións. CadCraft só le formatos que pode ler co seu propio código no seu computador, así que un escaneo nunca ten que enviarse a ningún sitio para adxuntarse.
