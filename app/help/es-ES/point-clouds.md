---
title: Trazar líneas as-built sobre una nube de puntos
summary: Adjunte un escaneo láser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) bajo el dibujo, corte una sección en planta a través de él y dibuje muros, puertas y pilares con referencia a objetos sobre sus puntos.
keywords: nube de puntos, pointcloudattach, pcattach, pointcloud, pc, escaneo láser, escaneo, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, levantamiento, corte, corte en planta, nodo, referencia a objetos, trazar, estado actual
from: b0e0aae5
---

## Lo que va a crear

Una planta as-built: los muros de un edificio escaneado dibujados como líneas y polilíneas exactamente sobre los puntos del escaneo.

## Adjuntar la nube

1. Si el dibujo aún no tiene unidades, establézcalas primero (el cuadro {{ui:Unidades}} de {{ui:Propiedades}}, o {{cmd:UNITS}}): CadCraft convierte la nube de sus unidades a las del dibujo.
2. Escriba {{cmd:POINTCLOUDATTACH}} (o `PCATTACH`) y pulse {{key:Enter}}. Elija un archivo `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz` (el tema sobre los formatos de nube de puntos indica qué aporta cada uno y qué exportar desde el software propio del escáner). También puede abrir el archivo con {{ui:Abrir}}, soltarlo en la página o enviarlo desde {{ui:Trazar en CadCraft}} en el visor BIM.
3. `Lower-left corner of the cloud`: pulse {{key:Enter}} para mantener las coordenadas propias del archivo (un escaneo registrado con el proyecto se alinea con el dibujo), o haga clic donde deba ir su esquina inferior izquierda.
4. La línea de comandos indica cuántos puntos se muestran. La vista se ajusta a la nube; esta queda bajo las líneas del dibujo, con todos los puntos vistos desde arriba.

## Cortar una sección en planta y trazar

1. Escriba {{cmd:POINTCLOUD}} (o `PC`) y luego `S` para {{ui:Corte}}. Solo se muestra una banda fina de 1.2 m por encima del punto más bajo de la nube: muros, huecos de puertas y pilares se leen como una planta.
2. `H` define la altura del corte y `T` su espesor (en unidades del dibujo). {{key:Enter}} finaliza el comando.
3. Active la referencia a objetos ({{key:F3}}) con {{ui:Nodo}} entre las referencias. Dibuje con {{cmd:LINE}} o {{cmd:PLINE}}: el cursor se ajusta a los puntos del corte, indicados como "Nube de puntos". Los extremos, puntos medios y centros propios del dibujo tienen prioridad sobre la nube, así que al cerrar una polilínea se llega a su primer punto.
4. Cambie la altura del corte para trazar otra planta, y desactive el corte (`S` de nuevo) para ver la nube completa.

## Más opciones

En {{cmd:POINTCLOUD}}: `C` colorea los puntos según los colores del archivo, la altura, la intensidad, la clase LiDAR o un único color; `SI` define el tamaño del punto; `V` oculta o muestra la nube; `Z` hace zoom sobre ella; `D` la desvincula.

La pestaña 3D también muestra la nube, con su punto más bajo sobre el suelo y con el mismo corte.

:::note
La nube no forma parte del dibujo: no se guarda en el DWG ni en el DXF, y deshacer no la modifica. Vuelva a adjuntarla al abrir el dibujo más adelante. Los archivos se leen en este equipo; no se sube nada. Los escaneos muy grandes se reducen de forma uniforme a 2 millones de puntos. Los archivos E57 se abren hasta 6 millones de puntos y 512 MB por ahora: exporte los escaneos mayores como LAS o LAZ.
:::

## Trazado de la nube

{{cmd:PLOT}} imprime la nube junto con el dibujo, debajo de las líneas: en un trazado del modelo ({{ui:Todo}} incluye el área de la nube) y en cada ventana gráfica de presentación, en el PDF, el PNG, el SVG y en lo que envíe a una impresora. Imprime lo que está en pantalla: el corte si está activo, los colores que haya elegido y nada si la ha ocultado. En papel, los puntos se convierten en cuadrados pequeños, prevaleciendo el punto más alto de cada uno, y un trazado conserva como máximo unos 400.000 de ellos (una nube muy densa se imprime con cuadrados más grandes). La nube solo se traza en el dibujo al que se adjuntó; nunca se imprime en el espacio papel en sí, sino solo a través de una ventana gráfica.

## Varios escaneos

Los escaneos tomados desde distintas posiciones pueden registrarse en un único sistema de referencia, refinarse con ICP y exportarse como un único LAS o E57: consulte [Registrar varios escaneos en uno](topic:register-scans).
