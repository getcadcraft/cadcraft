---
title: Eenhede by invoer: 'n lêer sê sy eenhede, of jy word eers gevra
summary: Wanneer 'n lêer wat jy in 'n tekening bring sy eenhede sê, skakel CadCraft dit om en sê so. Wanneer nie, vra CadCraft voordat iets geplaas word en onthou jou antwoord vir daardie lêer.
keywords: eenhede, invoer, invoeg, xref, heg, XATTACH, INSERT, OBJ, DWG, DXF, puntwolk, biblioteekitem, millimeter, meter, duim, voet, skaal, verkeerde grootte, te groot, te klein, 1000 keer, vra, onthou, INSUNITS
from: 558f1293
---

## Wat jy gaan doen

Bring 'n lêer in 'n tekening en maak seker dit kom in die regte grootte.

## Stappe

1. Bring die lêer in soos gewoonlik: `INSERT` › Lêer, `XATTACH`, `POINTCLOUDATTACH`, of {{ui:Lêers}} in die Biblioteek-paneel.
2. As die lêer sy eenhede sê, word niks gevra nie. Die opdragreël sê watter eenhede die lêer sê, en die skaal wat gebruik word wanneer hulle van die tekening se eenhede verskil.
3. As nie, vra 'n dialoog **Eenhede van** die lêer. Kies wat een eenheid in die lêer is en klik {{ui:Gebruik hierdie eenhede}}. Niks word geplaas voordat jy antwoord nie.
4. {{ui:Kanselleer}} (of {{key:Esc}}) bring niks in nie.

## Watter lêers sê hul eenhede

- **DWG en DXF**: die tekening se invoegeenhede (`$INSUNITS`). 'n Lêer sonder hulle word gevra.
- **Puntwolke**: LAS en LAZ met 'n koördinaatstelsel, E57, PTX en PLY sê hul eie. Ander word gevra.
- **OBJ**: sê nooit sy eenhede nie. Jy word gevra.
- **glTF en GLB**: meter, volgens die formaat se eie reël.
- **Prente**: het geen grootte van hul eie nie. `IMAGEATTACH` vra vir die breedte, en bied die breedte aan wat jy vantevore vir daardie lêer gegee het.
- **Skanderings**: 'n skandering wat sy digtheid (stippels per duim) sê, kom in sy ware grootte in die tekening se eenhede; `SCANATTACH` vra steeds vir die breedte.
- **Die Puntwolke-byvoeging**: vra wanneer jy 'n wolk bou waarvan die lêer geen eenheid sê nie, en benoem die wolk se getalle in die eenheid wat dit dra.

## Goed om te weet

- 'n DWG of DXF as sy eie tekening oopmaak, vra niks: die opdragreël sê watter eenhede die lêer sê, of dat dit geen sê nie. Eienskappe stel die eenhede van 'n tekening.
- Wanneer hierdie tekening ook geen eenhede het nie, kan 'n lêer nie omgeskakel word nie: dit word getal vir getal geplaas, en die opdragreël sê so.
- Die antwoord word vir daardie lêer op hierdie rekenaar onthou, in elke CadCraft-program. Die volgende keer as dit ingebring word, word jy nie gevra nie, en die opdragreël sê die onthoude eenhede is gebruik.
- Om weer gevra te word: die opdragpalet ({{key:Mod+K}}) › **Vra weer vir die eenhede van ingevoerde lêers**.
