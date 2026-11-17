---
title: Kopieer, plak en dupliseer
summary: Kopieer voorwerpe na CadCraft se knipbord, plak hulle waar jy klik of op hul plek, dupliseer met die aanwyser, en bring werk oor vanaf 'n ander tekening of oortjie.
keywords: kopieer, sny, plak, plak op dieselfde plek, dupliseer, knipbord, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, tussen tekeninge, ander oortjie, basispunt
from: 4b9f29d3
---

## Wat jy sal leer

Hoe om voorwerpe na die knipbord te kopieer, hulle te plak waar jy klik, op hul eie koördinate, hulle met die aanwyser te dupliseer, hulle te sny, en hulle na 'n ander tekening te dra. Alles hier is ook in die werkbalk se {{ui:Redigeer}}-groep: {{ui:Kopieer}}, {{ui:Plak}} en die {{ui:Meer}}-kieslys.

## Kopieer en plak waar jy klik

1. Kies die voorwerpe: klik op hulle, of sleep 'n venster.
2. Druk {{key:Mod+C}}, of klik {{ui:Kopieer}} in die {{ui:Redigeer}}-groep. Die opdragreël sê hoeveel voorwerpe gekopieer is. Hulle bly gekies.
3. Druk {{key:Mod+V}}, of klik {{ui:Plak}}. Die kopie verskyn aan die kursor, hang vanaf die linkeronderhoek van die gekopieerde voorwerpe.
4. Klik waar daardie hoek heen moet, of tik 'n punt soos `2000,500` en druk {{key:Enter}}. Voorwerpsnappings en Ortho werk soos gewoonlik.

Die geplakte voorwerpe is gekies, so jy kan hulle dadelik skuif of verander. Een {{key:Mod+Z}} haal die hele plak weg.

:::tip
Wil jy hê die kopie moet hang vanaf 'n punt wat jy kies, soos die hoek van 'n muur? Tik `COPYBASE`, klik die basispunt, kies die voorwerpe, en druk {{key:Enter}}. Plak plaas dan daardie punt waar jy klik. Om elke kopie vanaf sy middel eerder as sy linkeronderhoek te laat hang, verander {{ui:Plakpunt}} in [CadCraft-instellings](topic:settings).
:::

## Plak op dieselfde plek

Druk {{key:Mod+Shift+V}}, of kies {{ui:Plak op dieselfde plek}} in die {{ui:Meer}}-kieslys. Die kopie gaan presies in die koördinate waaruit dit gekopieer is, sonder 'n klik. Gebruik dit om voorwerpe na 'n ander tekening op dieselfde plek te dra, of van een blad na 'n ander blad.

## Dupliseer en skuif

1. Kies die voorwerpe.
2. Druk {{key:Mod+D}}, of kies {{ui:Dupliseer en skuif}} in die {{ui:Meer}}-kieslys.
3. 'n Kopie sit bo-op die oorspronklike en beweeg met die aanwyser. Klik waar dit heen moet. Jy kan ook 'n verplasing tik soos `@0,-600`, of 'n afstand na die kursor toe.

{{key:Esc}} voor die klik laat niks agter nie. Die duplikaat is een ontdoen-stap en raak nie die knipbord aan nie.

## Sny

Druk {{key:Mod+X}}, of kies {{ui:Sny}} in die {{ui:Meer}}-kieslys. Die voorwerpe gaan na die knipbord en word uit die tekening uitgevee, in een ontdoen-stap. Plak hulle terug met {{key:Mod+V}} of {{key:Mod+Shift+V}}.

## Tussen tekeninge en oortjies

Die knipbord hou sy kopie wanneer jy 'n ander tekening oopmaak, en dit word gedeel deur elke CadCraft-oortjie in hierdie blaaier. Kopieer in een oortjie, en druk dan {{key:Mod+V}} in 'n ander.

- Blokke wat die voorwerpe gebruik, kom saam. As die tekening waarin jy plak reeds 'n blok met dieselfde naam het, word sy eie definisie gebruik, soos in AutoCAD.
- Lae wat die voorwerpe gebruik, word bygevoeg, met die kleur en instellings wat hulle gehad het.
- Die kopie word nie herskaal nie wanneer die twee tekeninge verskillende eenhede gebruik: CadCraft sê so, en jy kan daarna {{cmd:SCALE}} gebruik.
- Viewports bly op hul blad; hulle word uit 'n kopie gelaat.

:::note
Die knipbord is CadCraft se eie. Jy kan CadCraft-voorwerpe nie in 'n ander program plak nie, of van 'n ander program na CadCraft plak nie: stoor eerder as DWG of DXF. 'n Baie groot kopie is dalk te groot om tussen oortjies te deel; die opdragreël sê dan net hierdie oortjie kan dit plak.
:::

## Algemene foute

- **{{key:Mod+V}} het teks in die opdragreël geplak.** Jy het iets daar getik, so die sleutels het op die teks gewerk. Druk {{key:Esc}} om dit leeg te maak, en druk dan weer {{key:Mod+V}}.
- **Niks het gebeur nie, en die statusbalk sê om die huidige opdrag klaar te maak.** 'n Ander opdrag loop. Druk eers {{key:Esc}}.
- **Die plak het ver weg beland.** Dit hang vanaf die linkeronderhoek van wat jy gekopieer het, wat 'n verre voorwerp kan wees wat jy per ongeluk gekies het. Gebruik {{ui:Plak op dieselfde plek}}, of kopieer met `COPYBASE`.
- **"Niks geplak nie" met 'n rede.** Wat 'n ander oortjie op die knipbord gelaat het, kon nie gelees word nie (dit was beskadig, of met die hand verander). Kopieer die voorwerpe weer.

Sien die volledige lys sleutels in [Sleutelbord en muis](topic:keyboard), en elke vraag in die [Opdragverwysing](topic:commands#clipboard).
