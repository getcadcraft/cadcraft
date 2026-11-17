---
title: Maak 'n DWG oop, wysig dit en stoor 'n kopie
summary: Maak 'n tekening oop wat iemand aan jou gestuur het, kyk wat ingekom het, maak 'n verandering en stuur 'n kopie as DWG of DXF terug.
keywords: dwg, dxf, oopmaak, invoer, uitvoer, stoor, r12, heen-en-terug, konsultant, xref, kontroleer tekening, stoor as, saveas, dwg-stoor, formaat
from: 49de4bf6
---

## Wat jy gaan doen

Maak 'n DWG van 'n konsultant oop, kyk wat CadCraft kon en nie kon wys nie, voeg 'n nota by, druk 'n blad uit na PDF en stoor 'n kopie om terug te stuur, as DWG of DXF.

## Maak die lêer oop

1. Druk {{key:Mod+O}}, of klik {{ui:Maak oop}}.
2. Kies die `.dwg`-lêer.

Die statuslyn wys "Lees …" terwyl die tekening gelees word. Wanneer dit klaar is, vul die tekening die skerm, en die geskiedenis sê byvoorbeeld "Oopgemaak plan.dwg: 18,240 voorwerpe op 64 lae", met hoe lank dit geneem het.

:::offline
Jy is vanlyn. As die {{ui:Stoor vir vanlyn}}-knoppie "Vanlyn gereed" lees, open DWG-lêers normaal. As nie, en geen DWG is nog in hierdie oortjie oopgemaak nie, kan die oopmaak van 'n DWG misluk omdat CadCraft se DWG-leser met die eerste DWG gelaai word: open eerder 'n DXF, of stoor CadCraft vir gebruik vanlyn die volgende keer as jy aanlyn is. Sien [Werk vanlyn](common:offline).
:::

## Kontroleer wat ingekom het

1. Kyk na die {{ui:Tekening}}-afdeling van die linkerpaneel: formaat en weergawe, eenhede, aantal voorwerpe en lae, en blaaie.
2. Lees die "Oor hierdie lêer"-kassie daaronder, as daar een is.

Die kassie lys:

- **Nog nie gewys nie:** voorwerpe wat CadCraft nog nie kan teken nie, volgens soort en telling. Hulle word weggelaat, nie geraai nie.
- **Uitlegte (blaaie) het ingekom:** maak hulle oop met die oortjies onder die tekening.
- **Maatvoerings wat net soos geteken gelees kon word.**

3. Klik deur die oortjies onder die tekening om elke blad te sien.
4. Kontroleer {{ui:Eenhede}} in {{ui:Huidige instellings}} (niks gekies nie, {{ui:Model}}-oortjie). As dit {{ui:Sonder eenhede}} sê maar jy weet die tekening is in millimeter, stel dit, sodat blad- en uitdrukskale reg lees.

:::tip
As jy 'n deel van die tekening verwag en dit nie kan sien nie, kyk na die {{ui:Lae}}-paneel: die laag kan in die lêer af of gevries wees. Klik op sy naam om dit huidig te maak; dit skakel dit aan.
:::

## Maak jou verandering

1. Maak 'n laag vir jou notas: klik {{ui:Nuwe laag}}, tik `NOTES` en druk {{key:Enter}}.
2. Tik `DT` en druk {{key:Enter}}.
3. Klik waar die nota moet kom.
4. Tik 'n teksgrootte wat by die tekening pas (sien [Voeg teks en etikette by](topic:text)) en druk {{key:Enter}}.
5. Druk {{key:Enter}} om die rotasie op 0 te hou.
6. Tik jou nota en druk {{key:Enter}}.
7. Druk weer {{key:Enter}} om klaar te maak.

Wysigings aan ingevoerde maatvoerings is in orde: sodra jy een verander, teken CadCraft dit weer in sy eie styl.

## Druk 'n blad uit vir hersiening

1. Klik die blad se oortjie.
2. Druk {{key:Mod+P}}.
3. Klik {{ui:Laai PDF af}}.

Sien [Druk uit na PDF](topic:plot-pdf).

## Stoor 'n kopie

1. Druk {{key:Mod+S}}, of klik {{ui:Stoor}}.

Jy het 'n DWG oopgemaak, so die blaaier laai `<name>.dwg` af, in die weergawe waarin die DWG gekom het. Die geskiedenis sê byvoorbeeld "Kopie gestoor as Plan.dwg (DWG (AutoCAD 2018))." en lys, op die reëls daaronder, enigiets wat onderweg verander het.

2. Lees daardie reëls voor jy die lêer stuur. [Wat 'n DWG behou en verander](topic:files#what-a-dwg-keeps-and-changes) verduidelik elkeen.

Jou oorspronklike DWG word nooit verander nie. Elke stoor is 'n nuwe aflaai.

## Stoor as DWG of DXF

Om die formaat self te kies:

1. Druk {{key:Mod+Shift+S}}, of klik {{ui:Stoor as}}.

Die {{ui:Stoor 'n kopie as}}-dialoog gaan oop met vier keuses, elk met die lêernaam wat dit sal gee: {{ui:DWG}}, met sy {{ui:Weergawe}}-lys, DXF R12, {{ui:DXF 2000}} en {{ui:DXF 2000 (binary)}}. Die tekening se huidige formaat en weergawe is reeds gekies.

2. Klik die formaat wat jy wil hê. Vir DWG, kies die weergawe wat die ander kantoor gebruik, of 'n ouer een: AutoCAD 2018, 2013, 2010, 2007, 2004 of 2000.
3. Klik {{ui:Stoor}}.

Die kopie laai af. Vanaf nou stoor {{key:Mod+S}} hierdie tekening in daardie formaat, en nuwe tekeninge begin ook daarmee, in hierdie blaaier. {{ui:Kanselleer}} of {{key:Esc}} stoor niks nie, en die geskiedenis sê "Nie gestoor nie."

Watter een om te kies:

- **DWG** behou die meeste: blaaie met hul vensters, regte maatvoerings, arseringspatrone, laag- en bloknaam soos jy dit getik het, en veelreëlteks as veelreëlteks. Die AutoCAD 2000-weergawe open in die meeste programme; 2004 en later behou ook ware kleure.
- **DXF 2000** is 'n tekslêer wat amper alles behou wat 'n DWG behou: elke blad as 'n uitleg met sy vensters, regte maatvoerings, arseringspatrone, ware kleure, lynwydtes, lynsoorte, en name soos jy dit getik het. Dit open in AutoCAD 2000 en later en in die meeste CAD-programme. Multileaders word die lyne, pylpunte en teks wat hulle teken. 'n DXF wat in weergawe 2000 of later oopgemaak is, stoor as DXF 2000.
- **DXF 2000 (binary)** hou dieselfde inhoud as DXF 2000 in die binêre vorm van die formaat: 'n kleiner lêer wat elke getal presies behou. Binêre DXF-lêers van ander programme open soos tekslêers, en 'n tekening wat uit 'n binêre DXF oopgemaak is, stoor terug as binêr.
- **DXF R12** open in amper enige CAD-program. Dit behou die eerste blad met sy vensters, en CadCraft se ander blaaie. Dit vereenvoudig nuwer dinge, soos veelreëlteks en arserings.

## Wat die ander kantoor sal sien

In 'n DWG:

- Lyne, bogies, sirkels, ellipse, polylyne, teks, veelreëlteks, blokke met hul attribute, soliede vulsels, arseringspatrone en lae soos jy dit sien.
- Regte maatvoerings: die ander program meet hulle weer op wanneer hulle gerek word.
- Elke blad, met sy papier en sy vensters.
- Multileaders as multileaders. In die AutoCAD 2000-weergawe word ware kleure die naaste standaardkleur.

In 'n DXF R12:

- Lyne, bogies, sirkels, polylyne, teks, blokverwysings en maatvoerings soos jy dit sien. Maatvoerings bly regte maatvoerings.
- Laagname in hoofletters, met spasies omgeskakel na `_`.
- Die eerste blad as die tekening se papierruimte, met sy vensters. Verdere blaaie kom aan as blokke met die naam `CCLAYOUT_1` en so aan; as hulle elke blad as 'n uitleg nodig het, druk ook PDF's van elke blad vir hulle uit.
- Veelreëlteks as afsonderlike reëls, ellipse as polylyne, arserings as buitelyne.

In albei gevalle is enigiets wat as "Nog nie gewys nie" gelys was toe jy die DWG oopgemaak het, **nie** in die kopie nie, tensy die geskiedenis sê dit is behou: 'n DWG se OLE-voorwerpe en sy 3D-soliede in modelruimte word wel teruggeskryf wanneer jy as DWG stoor. Vertel hulle, en stuur ook 'n PDF.

## Algemene foute

- **"CadCraft maak DWG- en DXF-tekeninge oop."** Die lêer het 'n ander uitbreiding. Kontroleer dit is 'n `.dwg` of `.dxf`.
- **"Hierdie tekening kon nie gelees word nie."** Die DWG is beskadig of in 'n weergawe wat die leser nie hanteer nie. Vra vir 'n DXF, of vir die DWG wat in 'n ouer weergawe gestoor is.
- **"Hierdie binêre DXF eindig in die middel van 'n voorwerp."** Die lêer is kort gesny of beskadig. Tik RECOVER om te open wat gelees kan word, of vra vir die lêer weer.
- **Die gestoorde lêer heet `name (1).dwg` of `name (1).dxf`.** Die blaaier doen dit wanneer 'n lêer met dieselfde naam al in die vouer is.
- **Hulle het 'n ouer program wat die DWG nie kan oopmaak nie.** Stoor as DWG met {{ui:Weergawe}} {{ui:AutoCAD 2000}}, of as DXF R12: amper enige CAD-program open dit.
- **Dele van die tekening ontbreek.** Gekoppelde tekeninge (xrefs) word nie gelaai voordat jy hul lêers kies nie ({{cmd:XREF}}, `R`), en prente wys as rame met hul lêernaam.
