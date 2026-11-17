---
title: Trazar líneas tal como se construyó sobre una nube de puntos
summary: Adjunte un escaneo láser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) bajo el dibujo, haga un corte en planta a través de él y dibuje muros, puertas y columnas con referencia a objetos sobre sus puntos.
keywords: nube de puntos, pointcloudattach, pcattach, pointcloud, pc, escaneo láser, escaneo, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tal como se construyó, as built, levantamiento, corte, corte en planta, nodo, referencia a objetos, trazar, condiciones existentes
from: b0e0aae5
---

## Qué creará

Una planta tal como se construyó: los muros de un edificio escaneado dibujados como líneas y polilíneas exactamente sobre los puntos del escaneo.

## Adjuntar la nube

1. Establezca primero las unidades del dibujo si no tiene (el cuadro {{ui:Unidades}} en {{ui:Propiedades}}, o {{cmd:UNITS}}): CadCraft convierte la nube de sus propias unidades a las del dibujo.
2. Escriba {{cmd:POINTCLOUDATTACH}} (o `PCATTACH`) y pulse {{key:Enter}}. Elija un archivo `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz` (el tema sobre formatos de nube de puntos indica lo que aporta cada uno y qué exportar desde el software propio del escáner). También puede abrir el archivo con {{ui:Abrir}}, soltarlo en la página o enviarlo desde {{ui:Trazar en CadCraft}} del visor BIM.
3. `Esquina inferior izquierda de la nube`: pulse {{key:Enter}} para conservar las coordenadas propias del archivo (un escaneo registrado con el proyecto se alinea con el dibujo), o haga clic donde debe ir su esquina inferior izquierda.
4. La línea de comandos indica cuántos puntos se muestran. La vista se acerca a la nube; esta queda debajo de las líneas, con cada punto visto desde arriba.

## Hacer un corte en planta y trazar

1. Escriba {{cmd:POINTCLOUD}} (o `PC`) y luego `S` para {{ui:Corte}}. Solo se muestra una franja delgada a 1.2 m por encima del punto más bajo de la nube: muros, vanos de puertas y columnas se leen como una planta.
2. `H` fija la altura del corte y `T` su espesor (en unidades del dibujo). {{key:Enter}} termina el comando.
3. Active la referencia a objetos ({{key:F3}}) con {{ui:Nodo}} entre las referencias. Dibuje con {{cmd:LINE}} o {{cmd:PLINE}}: el cursor se ajusta a los puntos del corte, indicados como "Nube de puntos". Los puntos finales, puntos medios y centros del propio dibujo tienen prioridad sobre la nube, así que al cerrar una polilínea llega a su primer punto.
4. Cambie la altura del corte para trazar otro nivel, y desactive el corte (`S` de nuevo) para ver toda la nube.

## Más opciones

En {{cmd:POINTCLOUD}}: `C` colorea los puntos según los colores del archivo, la altura, la intensidad, la clase LiDAR o un solo color; `SI` fija el tamaño de punto; `V` oculta o muestra la nube; `Z` hace zoom a ella; `D` la desvincula.

La pestaña 3D también muestra la nube, con su punto más bajo sobre el suelo y con el mismo corte.

:::note
La nube no forma parte del dibujo: no se guarda en el DWG ni en el DXF, y deshacer no la modifica. Vuelva a adjuntarla al abrir el dibujo más tarde. Los archivos se leen en este equipo; no se sube nada. Los escaneos muy grandes se reducen de forma uniforme a 2 millones de puntos. Por ahora, los archivos E57 se abren hasta 6 millones de puntos y 512 MB: exporte los escaneos más grandes como LAS o LAZ.
:::

## Trazar el dibujo

{{cmd:PLOT}} imprime la nube junto con el dibujo, debajo de las líneas: en un trazado del modelo ({{ui:Todo}} incluye el área de la nube) y en cada ventana gráfica de presentación, en el PDF, el PNG, el SVG y lo que envíe a una impresora. Imprime lo que está en pantalla: el corte si está activo, los colores que eligió, y nada si la ocultó. En papel, los puntos se convierten en cuadrados pequeños, y gana el punto más alto de cada uno; un trazado conserva como máximo unos 400 000 de ellos (una nube muy densa se imprime con cuadrados más grandes). La nube solo se traza en el dibujo al que se adjuntó; nunca se imprime directamente en el espacio papel, solo a través de una ventana gráfica.

## Varios escaneos

Los escaneos tomados desde distintas posiciones pueden registrarse en un solo sistema de referencia, refinarse con ICP y exportarse como un único LAS o E57: vea [Registrar varios escaneos en uno](topic:register-scans).
