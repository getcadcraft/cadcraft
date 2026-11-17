---
title: Prente in 'n tekening
summary: Plaas 'n PNG- of JPEG-prent, knip dit tot 'n reghoek of veelhoek, wys die prente wat 'n DWG gebruik, en druk hulle skerp.
keywords: pastearea, parea, kopieer gebied, gekopieerde gebied, markupcraft, ware grootte, werklike grootte, oorlegging, ole, ole2frame, ingebedde voorwerp, plak prent, plak skermkiekie, ctrl+v, klembordprent, skermkiekie, prent, beeld, imageattach, iat, image, imageclip, clip, png, jpeg, jpg, logo, foto, raster, imagedef, xref, plot, pdf, resolusie
from: 4025ac97
---

## Wat jy gaan maak

'n Maatskappylogo wat in 'n titelblok geplaas word, geknip tot die deel wat jy wil hê, en 'n PDF waarin dit op sy eie resolusie druk.

## Plaas 'n prent

1. Tik {{cmd:IMAGEATTACH}} (of `IAT`) en druk {{key:Enter}}. Kies 'n PNG- of JPEG-lêer.
2. `Specify the lower-left corner`: klik, of tik 'n punt.
3. `Specify its width`: die breedte in tekeneenhede. {{key:Enter}} hou die aangebode breedte: een eenheid per pixel, of die breedte wat jy laas vir hierdie lêer gegee het (die prompt sê watter een).
4. `Specify its rotation angle`: {{key:Enter}} vir geen.

Die prent is een voorwerp: kies dit deur sy raam, en skuif, kopieer, draai, skaal of vee dit uit soos enige blok.

:::note
Die prentlêer bly by die tekening terwyl dit oop is. 'n Gestoorde DWG noem die lêer, soos ander programme doen; dit hou nie die pixels nie. Hou die prent langs die tekening.
:::

## Plak 'n skermkiekie of 'n gekopieerde prent

1. Kopieer die prent ('n skermkiekie met {{pick:windows=Windows key+Shift+S|mac=Cmd+Ctrl+Shift+4|linux=jou skermkiekie-program}},
   of Kopieer prent in 'n ander program of 'n blaaier).
2. Wys na waar dit op die tekening moet kom en druk {{key:Mod+V}}.

Die prent se linkeronderhoek land by die wyser (of die middel van die aansig), 40 % so breed as wat jy sien; skuif,
skaal en knip dit soos enige prent. Sy naam is die tekening se naam met `-picture-1.png` (dan `-2`, …), en die geskiedenis sê so.
{{ui:Redigeer}} › {{ui:Meer}} › {{ui:Plak 'n prent}} doen dieselfde uit die menu (die blaaier vra dalk eers).

'n DWG hou net die naam van 'n prent se lêer, so om die tekening te stoor, stoor ook die prent as sy eie lêer. Hou die twee in
dieselfde vouer: die tekening wys die prent van daar af. In die blaaier is dit 'n tweede aflaai, en die geskiedenis sê so.
As daar niks anders as CadCraft-voorwerpe op die knipbord is nie, plak {{key:Mod+V}} daardie, soos voorheen.

## Plak 'n gebied wat in MarkupCraft gekopieer is

{{ui:Kopieer gebied}} in MarkupCraft kopieer 'n deel van 'n blad as 'n prent wat weet hoe groot dit is. CadCraft plak dit op daardie grootte.

1. In MarkupCraft, kopieer die gebied ('n reghoek, 'n sirkel of 'n vrye vorm; {{ui:Kopieer as oorlegsel}} as jy die tekening deur dit wil sien).
2. In CadCraft, druk {{key:Mod+V}}, of tik {{cmd:PASTEAREA}} (of `PAREA`), of kies {{ui:Redigeer}} › {{ui:Meer}} › {{ui:Plak 'n gekopieerde gebied}}.
3. `Specify the lower-left corner of the copied area`: klik, of tik 'n punt. 'n Raam van die gebied se grootte volg die wyser.

Hoe groot dit land:

- **Die blad het 'n tekenskaal gehad:** op sy werklike grootte, in die tekening se eenhede ('n 1:50-detail van 'n 2 m trap is 2 m lank in 'n meter-tekening, 78.74 in 'n duimtekening). Niks meer word gevra nie.
- **Die blad het geen skaal gehad nie:** CadCraft sê sy grootte op papier en vra vir 'n skaal: tik `100` vir 'n 1:100-blad, druk {{key:Enter}} vir die papiergrootte, of tik `P`, klik twee punte op die geplakte prent en tik hoe ver hulle werklik uitmekaar is (soos {{cmd:SCANSCALE}} doen). Die linkeronderhoek bly waar jy dit geplaas het.

'n Tekening sonder eenhede neem millimeter, soos 'n PDF-onderlaag. 'n Oorlegging hou sy papier deursigtig en begin so vervaag as wat dit gekopieer is; buite 'n sirkel of 'n vrye vorm is dit ook deursigtig. Die geplakte gebied is 'n prent soos enige ander: skuif, draai, skaal, knip of vee dit uit, en die hele plak is een ongedaan-stap. Gestoor as 'n DWG is dit 'n IMAGE met sy vervaging en deursigtigheid.

{{key:Mod+V}} plak die gebied wanneer die prent op die knipbord die gebied s'n is, of wanneer die gebied gekopieer is na enigiets wat jy in CadCraft gekopieer het (en in die laaste 6 uur). Anders plak dit soos voorheen. {{cmd:PASTEAREA}} plak die laas gekopieerde gebied op enige tyd.

## Wys die prente wat 'n DWG gebruik

'n DWG stoor net waar sy prente was, so CadCraft wys elkeen as 'n raam met sy lêernaam.

1. Tik {{cmd:IMAGE}} (of `IM`). Die opdragreël lys elke prentlêer en of dit wys.
2. Kies die lêers (verskeie op een slag). 'n Lêer waarvan die naam die naam bevat wat die tekening noem, tel ook, omdat uitvoere dikwels 'n projekvoorvoegsel byvoeg.

## Knip 'n prent

1. Tik {{cmd:IMAGECLIP}} (of `ICL`) en kies die prent.
2. Kies `R` en klik twee hoeke, of `P` en klik die punte van 'n veelhoek, en druk dan {{key:Enter}}. `D` verwyder die knip.

## Druk prente

Prente gaan in die PDF as prente, op hul eie resolusie en onder die lyne. In die dialoog {{ui:Plot}} kan {{ui:Prente}} hulle tot 600, 300 of 150 dpi beperk om die lêer kleiner te maak. 'n JPEG gaan in soos dit is.

## Wat waar gestoor word

| Formaat | Prente |
|---|---|
| DWG (elke weergawe) | As prente (IMAGE), met hul knip |
| DXF | As hul rame met die lêernaam; die stoor sê so |

## Voorwerpe van ander programme (OLE)

'n Tekening kan voorwerpe hou wat 'n ander program gemaak het, soos 'n prent van 'n verfprogram of 'n sigbladreeks (OLE-voorwerpe). CadCraft laat hulle nie loop of wysig nie, en kan nie nuwe invoeg nie. Wat dit doen:

- **In 'n DXF** open 'n OLE-voorwerp as 'n raam. As die voorwerp 'n prent van homself gestoor het en daardie prent 'n bitmap is, word die prent binne die raam geteken; anders dra die raam 'n etiket met die voorwerp se soort, soos "Microsoft Excel Worksheet (OLE)". Jy kan die raam soos 'n blok skuif, kopieer en uitvee. {{cmd:SAVEAS}} na DXF 2000 skryf dit weer as 'n OLE-voorwerp, met sy data onveranderd.
- **In 'n DWG** word die voorwerpe behou en teruggeskryf wanneer jy as 'n DWG stoor, greep vir greep, maar hulle is **nie gewys nie**: 'n DWG hou 'n voorwerp se plek binne sy eie data, en CadCraft lees dit nog nie. Die geskiedenis sê hoeveel is behou. Tik {{cmd:OLELIST}} om te sien wat hulle is (soort, grootte, of elkeen 'n prent gestoor het) en om 'n kopie van 'n prent waar jy kies te plaas: **Place** vra vir die nommer, die linkeronderhoek en die breedte, en teken 'n raam met die prent daarin. Daardie kopie is 'n raam wat jy kan skuif of uitvee; die voorwerp self bly in die tekening en word steeds teruggeskryf wanneer jy stoor.
- 'n Voorwerp wat uit 'n DXF gekom het, word in 'n DWG as sy raam en etiket alleen gestoor; die geskiedenis sê so. Stoor as DXF 2000 om die voorwerp self te behou.
- Prente wat metalêers is (wat baie programme stoor) word nie geteken nie: die raam en etiket wys eerder.

## Algemene foute

| Jy sien | Waarom | Oplossing |
|---|---|---|
| 'n Raam met 'n lêernaam | CadCraft het nie die lêer nie | {{cmd:IMAGE}}, en kies dan die lêer |
| "That is not a picture" | Die voorwerp wat gekies is, is nie 'n prent nie | Kies die prent se raam |
