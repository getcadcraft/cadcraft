---
title: Trazar liñas tal como construídas sobre unha nube de puntos
summary: Anexar unha exploración láser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ou XYZ) baixo o debuxo, cortar unha planta a través dela e debuxar muros, portas e piares con referencia a obxectos sobre os seus puntos.
keywords: nube de puntos, pointcloudattach, pcattach, pointcloud, pc, exploración láser, escaneado, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, tal como construído, as-built, as built, levantamento, corte, corte en planta, nodo, referencia a obxectos, trazar, condicións existentes
from: b0e0aae5
---

## Que vai facer

Unha planta tal como construída: os muros dun edificio escaneado debuxados como liñas e polilíneas exactamente sobre os puntos da exploración.

## Anexar a nube

1. Estableza primeiro as unidades do debuxo se non as ten (a caixa {{ui:Unidades}} de {{ui:Propiedades}}, ou {{cmd:UNITS}}): CadCraft converte a nube desde as súas propias unidades ás do debuxo.
2. Escriba {{cmd:POINTCLOUDATTACH}} (ou `PCATTACH`) e prema {{key:Enter}}. Escolla un ficheiro `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ou `.xyz` (o tema sobre formatos de nube de puntos indica o que achega cada un e o que hai que exportar desde o propio software do escáner). Tamén pode abrir o ficheiro con {{ui:Abrir}}, soltalo na páxina ou envialo desde o visor BIM con {{ui:Trazar en CadCraft}}.
3. `Esquina inferior esquerda da nube`: prema {{key:Enter}} para manter as coordenadas propias do ficheiro (unha exploración rexistrada ao proxecto aliñase co debuxo) ou faga clic onde debe ir a súa esquina inferior esquerda.
4. A liña de comandos indica cantos puntos se mostran. A vista achégase á nube; esta queda baixo as liñas, con cada punto visto desde arriba.

## Cortar unha planta e trazar

1. Escriba {{cmd:POINTCLOUD}} (ou `PC`) e despois `[Corte (S)]` para {{ui:Corte}}. Só se mostra unha banda fina a 1,2 m por riba do punto máis baixo da nube: os muros, os vans das portas e os piares len como unha planta.
2. `[Altura (H)]` fixa a altura do corte e `[Grosor (T)]` o seu grosor (en unidades do debuxo). {{key:Enter}} remata o comando.
3. Active a referencia a obxectos ({{key:F3}}) con {{ui:Nodo}} entre as referencias. Debuxe con {{cmd:LINE}} ou {{cmd:PLINE}}: o cursor se axusta aos puntos do corte, etiquetados como «Nube de puntos». Os extremos, puntos medios e centros propios do debuxo teñen prioridade sobre a nube, así que ao pechar unha polilínea cae sobre o seu primeiro punto.
4. Cambie a altura do corte para trazar outro nivel, e desactive o corte (`[Corte (S)]` de novo) para ver toda a nube.

## Máis opcións

En {{cmd:POINTCLOUD}}: `C` colorea os puntos segundo as cores do ficheiro, a altura, a intensidade, a clase LiDAR ou unha única cor; `[Tamaño (SI)]` fixa o tamaño do punto; `[Ocultar/mostrar (V)]` oculta ou mostra a nube; `Z` fai zoom sobre ela; `[Desanexar (D)]` a desanexa.

A lapela 3D tamén mostra a nube, co seu punto máis baixo no chan, e co mesmo corte.

:::note
A nube non forma parte do debuxo: non se garda no DWG nin no DXF, e desfacer non a modifica. Anéxea de novo ao abrir o debuxo máis adiante. Os ficheiros léense neste ordenador; non se envía nada. As exploracións moi grandes redúcense de forma uniforme a 2 millóns de puntos. Os ficheiros E57 ábrense ata 6 millóns de puntos e 512 MB por agora: exporte as exploracións máis grandes como LAS ou LAZ.
:::

## Imprimir

{{cmd:PLOT}} imprime a nube co debuxo, por debaixo das liñas: nunha impresión do modelo ({{ui:Todo}} inclúe a área da nube) e en cada xanela gráfica de deseño, no PDF, no PNG, no SVG e no que envíe a unha impresora. Imprime o que se ve na pantalla: o corte se está activo, as cores que escolleu e non aparece se a ocultou. No papel os puntos convértense en pequenos cadrados, prevalecendo o punto máis alto de cada un, e unha impresión conserva como máximo uns 400.000 deles (unha nube moi densa imprímese con cadrados máis grandes). A nube só se imprime no debuxo ao que foi anexada; nunca se imprime no espazo de papel en si, só a través dunha xanela gráfica.

## Varias exploracións

As exploracións tomadas desde posicións diferentes poden rexistrarse nun só sistema, refinarse con ICP e exportarse como un único LAS ou E57: vexa [Rexistrar varias exploracións nunha soa](topic:register-scans).
