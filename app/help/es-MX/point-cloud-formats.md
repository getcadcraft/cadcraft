---
title: Formatos de nube de puntos: qué se adjunta y qué exportar
summary: Qué archivos de escaneo láser se adjuntan bajo el dibujo, cuáles son formato propio del fabricante del escáner, y qué exportar desde el software del escáner para que el escaneo se adjunte aquí.
keywords: nube de puntos, pointcloudattach, pcattach, escaneo láser, escaneo, formatos, e57, las, laz, ply, pcd, ptx, pts, xyz, rcp, rcs, fls, lgs, tzf, zfs, exportar, no se puede abrir, no se lee
from: 20a5f4ee
---

## Lo que se adjunta aquí

Adjunte estos con {{cmd:POINTCLOUDATTACH}}, {{ui:Abrir}} o arrastrándolos a la página (vea el tema sobre calcar líneas tal como se construyeron sobre una nube de puntos):

| Formato | Extensión | Qué se lee |
|---|---|---|
| LAS, LAZ | `.las`, `.laz` | LAS 1.0–1.4: puntos, colores, intensidad, clases LiDAR, el sistema de coordenadas y sus unidades. LAZ hasta 1 GB. |
| E57 | `.e57` | Cada escaneo del archivo, colocado según su pose; colores, o intensidad cuando el archivo no tiene colores; metros. Las imágenes del archivo se omiten (se indica). Hasta 6 millones de puntos y 512 MB por ahora: exporte los escaneos más grandes como LAS o LAZ. |
| PLY | `.ply` | Texto y binario (ambos órdenes de bytes): las coordenadas x y z de los vértices, colores e intensidad. Las caras se omiten (se indica). |
| PCD | `.pcd` | Texto y binario: x y z, colores empaquetados o separados, intensidad. Los archivos PCD comprimidos todavía no se leen: guárdelos en binario o en texto. |
| PTX | `.ptx` | Uno o más escaneos, cada uno colocado con su propia transformación; los puntos que el escáner no midió se omiten. Metros. |
| PTS, XYZ | `.pts`, `.xyz` | Texto: x y z, con intensidad y colores cuando las columnas están presentes. |

## Archivos que solo lee el software del escáner

Algunos archivos de escaneo son formato propio del fabricante del escáner, sin descripción publicada ni lector abierto. CadCraft no puede leerlos: al adjuntar uno se indica qué es y qué hacer en la línea de comandos. Exporte el escaneo desde el software del fabricante como E57 o LAS (o PTX, PTS), y luego adjunte el archivo exportado.

| Archivo | Extensión | Exportar desde |
|---|---|---|
| Proyecto ReCap | `.rcp` | ReCap: abra el proyecto y expórtelo. El proyecto solo apunta a sus escaneos, así que copiar solo el `.rcp` no da puntos. |
| Escaneo ReCap | `.rcs` | ReCap: abra el proyecto al que pertenece el escaneo y expórtelo. |
| Escaneo FARO | `.fls` | FARO SCENE. |
| Escaneo Leica | `.lgs` | Leica Cyclone REGISTER 360. |
| Escaneo Trimble | `.tzf` | Trimble RealWorks o Trimble Business Center. |
| Escaneo Z+F | `.zfs` | Z+F LaserControl. |

:::tip
Cuando la exportación pida un formato, LAS o LAZ conserva todo lo que usa CadCraft (colores, intensidad, clases, el sistema de coordenadas y sus unidades) en el archivo más pequeño.
:::

## Por qué no se leen estos archivos

Esos formatos no están publicados, y la única forma de leerlos es con la biblioteca de software de cada fabricante, bajo sus propios términos. CadCraft solo lee formatos que puede leer con su propio código en su computadora, así que un escaneo nunca tiene que enviarse a ningún lado para adjuntarlo.
