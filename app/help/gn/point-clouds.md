---
title: Trazar líneas as-built sobre una nube de puntos
summary: Adjuntá un escaneo láser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) bajo el plano, cortá una planta a través de él y dibujá muros, puertas y columnas con ajuste a objetos sobre sus puntos.
keywords: nube de puntos, pointcloudattach, pcattach, pointcloud, pc, escaneo láser, escaneo, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, relevamiento, corte, corte de planta, nodo, ajuste, trazar, condiciones existentes
from: b0e0aae5
---

## Lo que vas a hacer

Un plano de planta as-built: los muros de un edificio escaneado dibujados como líneas y polilíneas exactamente sobre los puntos del escaneo.

## Adjuntar la nube

1. Configurá primero las unidades del plano si no las tiene (el cuadro {{ui:Units}} en {{ui:Properties}}, o {{cmd:UNITS}}): CadCraft convierte la nube de sus propias unidades a las del plano.
2. Escribí {{cmd:POINTCLOUDATTACH}} (o `PCATTACH`) y presioná {{key:Enter}}. Elegí un archivo `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz` (el tema sobre formatos de nube de puntos explica qué trae cada uno y qué exportar desde el software propio del escáner). También podés abrir el archivo con {{ui:Open}}, soltarlo en la página o enviarlo desde {{ui:Trace in CadCraft}} del visor BIM.
3. `Esquina inferior izquierda de la nube`: presioná {{key:Enter}} para mantener las coordenadas propias del archivo (un escaneo registrado al proyecto se alinea con el plano), o hacé clic donde debe ir su esquina inferior izquierda.
4. La línea de comandos indica cuántos puntos se muestran. La vista hace zoom a la nube; queda debajo de las líneas, con cada punto visto desde arriba.

## Cortar una planta y trazar

1. Escribí {{cmd:POINTCLOUD}} (o `PC`) y después elegí Corte [S]. Sólo se ve una franja fina a 1,2 m sobre el punto más bajo de la nube: muros, aberturas de puertas y columnas se leen como un plano de planta.
2. Altura [H] fija la altura del corte y Espesor [T] su grosor (en unidades del plano). {{key:Enter}} termina el comando.
3. Activá el ajuste a objetos ({{key:F3}}) con {{ui:Node}} entre los ajustes. Dibujá con {{cmd:LINE}} o {{cmd:PLINE}}: el cursor se ajusta a los puntos del corte, marcados como "Nube de puntos". Los extremos, puntos medios y centros propios del plano tienen prioridad sobre la nube, así que al cerrar una polilínea cae sobre su primer punto.
4. Cambiá la altura del corte para trazar otro nivel, y después apagá el corte (`S` de nuevo) para ver toda la nube.

## Más opciones

En {{cmd:POINTCLOUD}}: `C` colorea los puntos según los colores del archivo, la altura, la intensidad, la clase LiDAR o un solo color; `SI` fija el tamaño del punto; `V` oculta o muestra la nube; `Z` hace zoom a ella; `D` la desvincula.

La pestaña 3D también muestra la nube, con su punto más bajo sobre el suelo, y con el mismo corte.

:::note
La nube no es parte del plano: no se guarda en DWG ni en DXF, y deshacer no la cambia. Volvé a adjuntarla cuando abras el plano más adelante. Los archivos se leen en esta computadora; no se suben a ningún lado. Los escaneos muy grandes se reducen de forma uniforme a 2 millones de puntos. Los archivos E57 se abren hasta 6 millones de puntos y 512 MB por ahora: exportá los escaneos más grandes como LAS o LAZ.
:::

## Imprimir

{{cmd:PLOT}} imprime la nube junto con el plano, debajo de las líneas: en una impresión del modelo ({{ui:Todo}} incluye el área de la nube) y en cada viewport de layout, en el PDF, el PNG, el SVG y lo que envíes a una impresora. Imprime lo que se ve en pantalla: el corte si está activado, los colores que elegiste, y nada si la ocultaste. En papel los puntos se convierten en cuadraditos pequeños, ganando el punto más alto de cada uno, y una impresión incluye como máximo unos 400.000 de ellos (una nube muy densa se imprime con cuadraditos más grandes). La nube se imprime sólo en el plano al que fue adjuntada; nunca se imprime en el espacio de papel en sí, sólo a través de un viewport.

## Varios escaneos

Los escaneos tomados desde distintas posiciones pueden registrarse en un solo marco, refinarse con ICP y exportarse como un solo LAS o E57: ver [Registrar varios escaneos en uno](topic:register-scans).
