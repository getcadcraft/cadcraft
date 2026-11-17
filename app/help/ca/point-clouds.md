---
title: Traça les línies de l'obra acabada sobre un núvol de punts
summary: Adjunteu un escaneig làser (LAS, LAZ, E57, PLY, PCD, PTX, PTS o XYZ) sota el dibuix, feu-hi un tall de planta i dibuixeu murs, portes i pilars amb la referència a objectes sobre els seus punts.
keywords: núvol de punts, pointcloudattach, pcattach, pointcloud, pc, escaneig làser, escaneig, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, obra acabada, as built, topografia, tall, tall de planta, node, referència, traça, condicions existents
from: b0e0aae5
---

## Què obtindreu

Una planta de l'obra acabada: els murs d'un edifici escanejat dibuixats com a línies i polilínies exactament sobre els punts de l'escaneig.

## Adjuntar el núvol

1. Definiu primer les unitats del dibuix si no en té (el quadre {{ui:Units}} de {{ui:Properties}}, o {{cmd:UNITS}}): CadCraft converteix el núvol de les seves unitats a les del dibuix.
2. Escriviu {{cmd:POINTCLOUDATTACH}} (o `PCATTACH`) i premeu {{key:Enter}}. Trieu un fitxer `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` o `.xyz` (el tema sobre els formats de núvol de punts explica què aporta cadascun i què exportar del programari propi de l'escàner). També podeu obrir el fitxer amb {{ui:Open}}, deixar-lo caure a la pàgina o enviar-lo des de {{ui:Traça a CadCraft}} del visor BIM.
3. `Cantonada inferior esquerra del núvol`: premeu {{key:Enter}} per mantenir les coordenades pròpies del fitxer (un escaneig registrat amb el projecte s'alinea amb el dibuix), o feu clic on ha d'anar la cantonada inferior esquerra.
4. La línia d'ordres indica quants punts es mostren. La vista fa zoom al núvol; aquest queda sota els traços, amb cada punt vist des de dalt.

## Fer un tall de planta i traçar

1. Escriviu {{cmd:POINTCLOUD}} (o `PC`) i després `S` per a {{ui:Tall}}. Només es veu una franja fina de 1.2 m per sobre del punt més baix del núvol: els murs, les obertures de portes i els pilars es llegeixen com una planta.
2. Alçada (H) fixa l'alçada del tall, i Gruix (T) el seu gruix (en unitats del dibuix). {{key:Enter}} acaba l'ordre.
3. Activeu la referència a objectes ({{key:F3}}) amb {{ui:Node}} entre les referències. Dibuixeu amb {{cmd:LINE}} o {{cmd:PLINE}}: el cursor s'ajusta als punts del tall, amb l'etiqueta "Núvol de punts". Els punts finals, els punts mitjans i els centres del propi dibuix tenen prioritat sobre el núvol, de manera que en tancar una polilínia cau sobre el seu primer punt.
4. Canvieu l'alçada del tall per traçar un altre nivell, i després desactiveu el tall (`S` de nou) per veure tot el núvol.

## Més opcions

A {{cmd:POINTCLOUD}}: Color (C) acoloreix els punts segons els colors del fitxer, l'alçada, la intensitat, la classe LiDAR o un sol color; Mida (SI) fixa la mida del punt; Amaga o mostra (V) el núvol; Zoom (Z) fa zoom fins a ell; i Desconnecta (D) el desvincula.

La pestanya 3D també mostra el núvol, amb el seu punt més baix sobre el terra i el mateix tall.

:::note
El núvol no forma part del dibuix: no es desa al DWG ni al DXF, i desfer no el canvia. Torneu-lo a adjuntar quan obriu el dibuix més tard. Els fitxers es llegeixen en aquest ordinador; no es puja res. Els escanejos molt grans es redueixen de manera uniforme fins a 2 milions de punts. De moment, els fitxers E57 s'obren fins a 6 milions de punts i 512 MB: exporteu els escanejos més grans com a LAS o LAZ.
:::

## Imprimir-lo

{{cmd:PLOT}} imprimeix el núvol amb el dibuix, sota els traços: en un traçat del model ({{ui:Tot}} inclou l'àrea del núvol) i en cada finestra gràfica de presentació, al PDF, al PNG, al SVG i al que envieu a una impressora. Imprimeix el que hi ha a la pantalla: el tall si és actiu, els colors que heu triat, i res si l'heu amagat. Sobre paper, els punts es converteixen en quadrats petits, i guanya el punt més alt de cada un; un traçat conserva com a màxim uns 400.000 punts (un núvol molt dens s'imprimeix amb quadrats més grans). El núvol només es traça en el dibuix al qual s'ha adjuntat; mai no s'imprimeix a l'espai de paper en si mateix, només a través d'una finestra gràfica.

## Diversos escanejos

Els escanejos presos des de diferents posicions es poden registrar en un mateix sistema de referència, refinar amb ICP i exportar com un únic LAS o E57: vegeu [Registra diversos escanejos en un de sol](topic:register-scans).
