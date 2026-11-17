---
title: Laai toepassings (APPLOAD)
summary: Laai LISP-roetines en hul dialoogvlêers, ontlaai hulle, laai hulle weer uit die geskiedenis, en hou die wat jy gebruik in die Opstartstel.
keywords: appload, ap, laai toepassing, lisp, lsp, dcl, roetine, opstartstel, ontlaai, geskiedenis, sleep, laai, pasmaak, bestuur
from: 89e0ee95
---

## Wat jy sal leer

Hoe om 'n LISP-roetine (`.lsp`-lêer) te laai sodat sy opdragte in CadCraft werk, hoe om dit te ontlaai, en hoe om dit elke keer te laat laai wanneer CadCraft begin.

## Laai 'n roetine

1. Maak {{ui:Aansig}} › {{ui:Meer}} › {{ui:Laai toepassing…}} oop, of tik {{cmd:APPLOAD}} (of `AP`) en druk {{key:Enter}}.
2. Klik {{ui:Laai 'n lêer…}} en kies een of meer `.lsp`-lêers. 'n Roetine wat 'n dialoog oopmaak, kom gewoonlik met 'n `.dcl`-lêer: kies dit ook.
3. Die dialoog sê wat elke lêer gemaak het, byvoorbeeld "Gelaai delblocks.lsp: 1 opdrag, DELBLOCKS."
4. Klik {{ui:Maak toe}}, tik die roetine se opdrag en druk {{key:Enter}}.

Jy kan ook `.lsp`- en `.dcl`-lêers op die tekening of op die Laai toepassings-dialoog los: hulle laai dadelik.

Die lêer word hier, in jou blaaier, gelees. Niks word opgelaai nie.

:::tip
Druk {{key:Enter}} by 'n leë opdragreël om die roetine se opdrag weer te laat loop, soos met enige ander opdrag. Jou opdragaliasse kan dit ook bereik: sien "Wysig opdragaliasse".
:::

## Ontlaai 'n roetine

In {{ui:Laai toepassings}}, onder {{ui:Gelaaide toepassings}}, klik {{ui:Ontlaai}} langs die lêer. Die opdragte wat dit gemaak het, is weg totdat jy dit weer laai.

## Laai 'n roetine elke keer as CadCraft begin

1. Laai die roetine.
2. Onder {{ui:Gelaaide toepassings}}, klik {{ui:Voeg by Opstartstel}} langs dit.

Vanaf nou laai dit self wanneer CadCraft in hierdie blaaier begin. Om dit te stop, klik {{ui:Verwyder}} langs dit onder {{ui:Opstartstel}}.

Die Opstartstel hou 'n kopie van elke lêer in hierdie blaaier se berging. As jy die roetine verander, laai die nuwe lêer en voeg dit weer by.

## Laai acad.lsp en acaddoc.lsp uit 'n ondersteuningsvouer (Studio)

In CadCraft Studio neem {{ui:Ondersteuningsvouer}} in die dialoog {{ui:Laai toepassings}} 'n vouer op jou rekenaar. Klik {{ui:Kies vouer…}}. Wanneer CadCraft begin, lees dit `acad.lsp` en dan `acaddoc.lsp` uit daardie vouer (ongeag die hoofletters van die name), laai hulle, en laai dan die Opstartstel. `acaddoc.lsp` word elke keer weer gelees wanneer 'n nuwe tekening-oortjie oopmaak. Niks anders in die vouer word gelees nie, en 'n lêer groter as 2 MB word oorgeslaan met 'n boodskap.

As 'n lêer 'n funksie met die naam `S::STARTUP` definieer, loop dit een keer nadat die lêers gelaai is (ook na die Opstartstel). {{ui:Laai nou}} doen dieselfde op versoek; {{ui:Maak skoon}} vergeet die vouer.

In die blaaier kan 'n bladsy nie 'n vouer hou nie, so daar is geen ondersteuningsvouer nie: gebruik die Opstartstel hierbo. Gekompileerde `.fas`- en `.vlx`-lêers en inheemse programme word steeds geweier.

## Laai 'n lêer weer uit die geskiedenis

{{ui:Geskiedenis}} lys die lêers wat jy in hierdie blaaier gelaai het, nuutste eerste. Klik {{ui:Laai}} langs een om dit weer te laai, sonder om dit op jou rekenaar te soek.

## Lêers wat CadCraft nie kan laai nie

| Lêer | Wat dit is | Wat om te doen |
|---|---|---|
| `.fas`, `.vlx` | gekompileerde of beskermde LISP | laai eerder die `.lsp`-bron |
| `.arx`, `.crx`, `.dbx` | inheemse Windows-programme | daar is geen manier om hierdie in CadCraft te laat loop nie |
| `.dvb` | 'n VBA-projek | daar is geen manier om hierdie in CadCraft te laat loop nie |
| `.craft`, `.lua`, `.py` | CraftScript-skripte | maak hulle oop in PartCraft se Skrip-werkruimte |

Die Laai toepassings-dialoog sê watter van hierdie 'n lêer is wanneer jy dit kies.

## Stop 'n roetine

Druk {{key:Esc}}. By een van die roetine se vrae kanselleer Esc dit soos die roetine verwag (sy eie opruiming loop). As dit besig is en niks vra nie, stop Esc dit onmiddellik en sê so; jou gelaaide roetines bly gelaai.

:::note
Alles wat 'n roetine in die tekening verander, is een stap: een {{key:Mod+Z}} neem alles terug.
:::
