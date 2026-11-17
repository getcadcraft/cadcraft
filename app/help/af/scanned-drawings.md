---
title: Geskandeerde tekeninge en naspoor
summary: Bring 'n geskandeerde blad in, skaal en reghoekig maak dit, maak dit skoon, vee dele daarvan uit, vang op sy lyne en spoor dit na lyne en boë.
keywords: skandeer, geskandeerde tekening, raster, tiff, jpeg, png, skaal, belyn, reghoekig maak, vlekke, drempel, swart en wit, sny, uitvee, naspoor, vektoriseer, vang, boë, arsering, papiertekeninge, ou tekeninge, scanattach, scantrace
from: 36227e5b
---

## Van 'n papierblad na tekenvoorwerpe

'n Geskandeerde tekening is 'n prent. CadCraft hou die prent wat jy gegee het en verander dit nooit nie: elke skoonmaakstap maak 'n nuwe prent, en elke stap is een ontdoenstap. {{cmd:SCANINFO}} lys die oorspronklike lêer en die stappe wat sedertdien gedoen is. Niks word ergens gestuur nie en niks word deur 'n opgeleide model geraai nie: die skoonmaak en die naspoor is gewone beeldverwerking, en dit loop op jou rekenaar.

1. **Voeg dit in.** {{cmd:SCANATTACH}} lees 'n PNG, 'n JPEG, 'n TIFF (een bladsy, of al die bladsye van 'n meerbladsy-lêer) of 'n PDF-bladsy wat 'n prent is. Dit vra vir die bladsy, die linkeronderhoek en die breedte. Vir 'n PDF-bladsy vra dit ook hoeveel pixels per duim die bladsy geteken moet word.
2. **Skaal dit.** {{cmd:SCANSCALE}}: kies twee punte op die skandering, dan tik die ware afstand tussen hulle. Die blad word geskaal om die eerste punt.
3. **Belyn dit.** {{cmd:SCANALIGN}}: kies twee punte op die skandering en die twee plekke waarna hulle hoort; die blad skuif en draai om te pas, en skaal ook, tensy jy Nee antwoord.
4. **Reghoekig maak.** {{cmd:SCANDESKEW}} meet die hoek waarteen die blad se lang lyne lê en wys dit, met hoe seker dit is. Aanvaar dit, of tik jou eie, en die blad word gedraai. 'n Blad met min lang lyne kry 'n waarskuwing: kontroleer die hoek voordat jy dit aanvaar.
5. **Maak dit skoon.** {{cmd:SCANCLEAN}} maak die blad swart en wit (Outo maak eers die papier eweredig; Aanpasbaar volg die papier se veranderinge nouer; Peil is een getal vir die hele blad) en verwyder vlekkies tot die grootte wat jy stel.
6. **Sny en vee uit.** {{cmd:SCANCROP}} hou 'n venster. {{cmd:SCANERASE}} vee 'n reghoek, 'n veelhoek of 'n lasso uit (druk en sleep): stempels, notas, 'n koffievlek.

Die skoongemaakte prent is wat 'n gestoorde DWG hou ('n IMAGE en sy IMAGEDEF, met die prent se lêer langs die tekening, soos vir enige prent).

## Vang op die skandering se lyne

Met {{cmd:RASTERSNAP}} aan (die standaard), vind voorwerpvangpunte ook die lyne van 'n swart-en-wit skandering: die eindpunte van lyne, hul middelpunte, hoeke en kruisings, gewys met die gewone vangmerke. Die deel van die blad onder die aanwyser word gevolg soos jy beweeg; zoem genoeg in dat 'n pixel 'n paar skermpixels is. 'n Lyn wat langer is as die deel wat gevolg word, word tot by sy eindpunte gevolg.

## Die naspoor

{{cmd:SCANTRACE}} verander die lyne van die blad in lyne en boë op 'n nuwe laag (SCAN-TRACE), as een ontdoenstap, met die skandering nog onder hulle. Jy stel:

- **Toleransie:** hoe ver 'n nagespoorde lyn of boog van die lyne op die skandering mag lê, in tekeningeenhede (die verslag gee ook pixels). 'n Stywe toleransie volg elke wiebeling; 'n losse een maak minder, reguiter stukke.
- **Venster:** 'n hoek van die blad, of die hele blad.
- **Boë:** af maak slegs lyne.
- **Oorblyfsels:** wat die naspoor alleen gelaat het, word as kassies op 'n laag geteken wat jy kan afskakel, of nie geteken nie.

Die naspoor vind die middel van elke streek, volg dit, pas reguit lyne en sirkelboë daarop, voeg lope saam wat gesny is waar 'n ander lyn gekruis het, maak byna horisontale en byna loodregte lyne presies horisontaal en loodreg, en sluit hoeke. **Teks en arseringe bly as raster:** stukke so groot soos letters word opsy gesit, en bondels kort parallelle lyne word as arsering beskou en opsy gesit.

Wanneer dit klaar is, sê dit hoeveel lyne en boë dit gemaak het, die toleransie, en hoeveel stukke dit as raster gelaat het. **Dit is wat die pixels gegee het, binne daardie toleransie, en dit is nie 'n bewering dat die resultaat reg is nie.** Vergelyk dit met die blad: 'n naspoor kan 'n flou lyn mis, twee lyne wat baie na aan mekaar lê saamvoeg, of 'n lyn trek waar daar net 'n vlek is. Maak die skandering eers skoon (reghoekig, swart en wit, vlekkies weg) en die resultaat is baie beter.

## Wat dit nie lees nie

TIFF-lêers wat in teëls gestoor is, BigTIFF, TIFF met JPEG- of deflate-kompressie, Group 3-faksbekodering en kleure wat in aparte vlakke gehou word, word met 'n boodskap geweier; stoor hulle weer as strokies met LZW, PackBits, Group 4 of geen kompressie. Geïnterlaceerde PNG-lêers word ook geweier. Lêers groter as 128 MB of 100 miljoen pixels word geweier, en 'n naspoorvenster kan hoogstens 64 miljoen pixels hou.
