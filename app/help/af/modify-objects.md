---
title: Skuif, kopieer, draai, skaal, spieël, rek en skikking
summary: Rangskik meubels in 'n vertrek met die basiese wysigopdragte, met basispunte, getikte afstande en ontdoen.
keywords: skuif, kopieer, draai, skaal, spieël, rek, skikking, voeg saam, matchprop, pas eienskappe aan, skilder, arrayrect, arraypolar, poolskikking, vee uit, ontbind, ontdoen, herdoen, basispunt, verplasing, wysig, belyn, lyn op, verdeel gelyk
from: 8eaeee6c
---

## Wat jy gaan maak

'n Tafel met een stoel, na die tafel gekopieer, gedraai, gespieël en in grootte verander. Onderweg gebruik jy {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} en {{cmd:UNDO}}.

## Teken die stukke

1. Tik `REC` en druk {{key:Enter}}, tik `0,0` en druk {{key:Enter}}, en tik dan `@1800,900` en druk {{key:Enter}}. Dit is die tafel.
2. Tik `REC` en druk {{key:Enter}}, tik `300,-700` en druk {{key:Enter}}, en tik dan `@450,450` en druk {{key:Enter}}. Dit is 'n stoel, onder die tafel.
3. Klik {{ui:Omvang}}.

## Skuif: basispunt, dan tweede punt

Elke skuif, kopiëring, draai en skaal begin by 'n **basispunt**: die punt wat meegedra word, of waarom gedraai word.

1. Klik die stoel om dit te kies.
2. Tik `M` en druk {{key:Enter}}. Die geskiedenis sê `1 gevind`.
3. By `Spesifiseer basispunt`, vang aan by die stoel se boonste linkerhoek (Eindpunt) en klik.
4. By `Spesifiseer tweede punt`, tik `@0,200` en druk {{key:Enter}}.

Die stoel skuif 200 op, nader aan die tafel.

:::tip
Tik `D` by `Spesifiseer basispunt` om eerder 'n verplasing te gee: CadCraft vra dan `Spesifiseer verplasing`, en jy tik hoe ver oor en op, soos `0,200` (geen `@` nodig nie).
:::

## Kopieer, so dikwels as jy wil

1. Klik die stoel.
2. Tik `CO` en druk {{key:Enter}}.
3. Vang aan by die stoel se onderste linkerhoek en klik as basispunt.
4. Tik `@600,0` en druk {{key:Enter}}. 'n Kopie verskyn 600 na regs.
5. Tik `@600,0` weer en druk {{key:Enter}}. 'n Tweede kopie verskyn 1200 na regs van die oorspronklike.
6. Druk {{key:Enter}} om die opdrag te beëindig.

{{cmd:COPY}} hou aan totdat jy {{key:Enter}} druk. Elke kopie word geplaas volgens die afstand van die basispunt tot die punt wat jy gee. 'n `@`-punt tel vanaf die laaste punt wat jy ingetik het, wat na die eerste kopie daardie kopie se punt is, so `@600,0` twee keer gee kopieë by 600 en 1200. Tik `U` en druk {{key:Enter}} om die laaste kopie terug te neem sonder om die opdrag te verlaat.

Jy behoort drie stoele in 'n ry onder die tafel te sien.

:::tip
{{cmd:COPY}} is vir kopieë binne een tekening, geplaas deur 'n basispunt. Om voorwerpe na 'n ander tekening of oortjie te dra, of om hulle later te plak, gebruik die knipbord: {{key:Mod+C}}, dan {{key:Mod+V}}. {{key:Mod+D}} maak een kopie wat met die aanwyser beweeg. Sien [Kopieer, plak en dupliseer](topic:copy-paste).
:::

## Spieël die ry na die ander kant

1. Sleep 'n kruisvenster (van regs na links) oor die drie stoele, sonder om die tafel aan te raak.
2. Tik `MI` en druk {{key:Enter}}.
3. By `Spesifiseer eerste punt van spieëllyn`, vang aan by die Halfpunt van die tafel se linkerkant en klik.
4. By `Spesifiseer tweede punt van spieëllyn`, vang aan by die Halfpunt van die tafel se regterkant en klik.
5. By `Vee bronvoorwerpe uit? [Ja (Y)/Nee (N)] <N>`, druk {{key:Enter}} om hulle te hou.

Jy behoort drie stoele onder die tafel en drie gespieëlde stoele daarbo te sien. Teks in 'n gespieëlde keuse bly leesbaar: dit word gespieël geplaas, maar nie agteruit geskryf nie.

## Draai 'n stoel

1. Klik die stoel heel regs onder die tafel.
2. Tik `RO` en druk {{key:Enter}}.
3. Vang aan by die stoel se onderste regterhoek en klik as basispunt.
4. Tik `90` en druk {{key:Enter}}.

Die stoel draai 90 grade teen die wysers van die horlosie om die basispunt. 'n Negatiewe hoek draai met die wysers van die horlosie. In plaas van tik, kan jy 'n tweede punt klik: die hoek word gemeet vanaf die basispunt na daardie punt.

## Skaal die tafel

1. Kies die tafel.
2. Tik `SC` en druk {{key:Enter}}.
3. Vang aan by die tafel se onderste linkerhoek en klik as basispunt.
4. Tik `1.2` en druk {{key:Enter}}.

Die tafel is 20% groter, en groei weg van die basispunt. 'n Faktor onder 1 maak dit kleiner.

:::note
As jy 'n punt klik in plaas van om die skaalfaktor te tik, is die faktor die afstand van die basispunt tot daardie punt. Klik een tekeningeenheid weg gee 'n faktor van 1. Die getal om te tik is gewoonlik wat jy wil hê.
:::

## Ontdoen en herdoen

- {{key:Mod+Z}}, die {{ui:Ontdoen}}-knoppie, of `U` en {{key:Enter}} ontdoen die laaste opdrag. 'n Hele opdrag is een stap: ontdoen van 'n {{cmd:COPY}} wat vyf kopieë gemaak het, verwyder al vyf.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, die {{ui:Herdoen}}-knoppie, of `REDO` bring dit terug.
- Die geskiedenis sê wat ontdoen is ("Ontdoen COPY").

CadCraft hou die laaste 500 stappe. Laaginstellings (aan, vries, sluit, kleur) is instellings, nie wysigings nie, en word nie ontdoen nie.

## Rek 'n kamer wyer

{{cmd:STRETCH}} (`S`, of {{ui:Rek}}) skuif net wat binne 'n kruisvenster lê: hoeke en lynente binne dit skuif, al die res bly staan, sodat die kamer wyer word in plaas van om te skuif.

1. Tik `S` en druk {{key:Enter}}.
2. Sleep 'n venster van regs na links oor die regtermuur, sodat dit die muur se hoeke en die eindpunte van enigiets wat daaraan raak, dek.
3. Druk {{key:Enter}}.
4. Klik 'n basispunt, tik dan `@600,0` en druk {{key:Enter}}.

Die reghoek is 600 wyer; lyne wat op die muur geëindig het, eindig steeds daarop. 'n Boog met een eind binne behou sy hoogte; sirkels en teks skuif wanneer hul middelpunt of invoegpunt binne is, en 'n maat meet sy nuwe lengte. Voorwerpe wat een-een gekies is, sonder 'n venster, skuif net.

Jy kan ook eers kies: sleep die kruisvenster (of 'n kruis-lasso) oor die muur sonder dat 'n opdrag loop, en tik dan `S`. STRETCH neem daardie keuse en rek wat sy vensters hou, net asof jy hulle by sy eie vraag gesleep het.

## Skikking: rye en kolomme, of rondom 'n middelpunt

{{cmd:ARRAY}} (`AR`, of {{ui:Skikking}}) kopieer die keuse in 'n rooster of in 'n sirkel.

1. Kies 'n stoel, tik `AR` en druk {{key:Enter}}. Druk {{key:Enter}} vir Reghoekig.
2. 'n Voorskou van 4 kolomme en 3 rye verskyn. Tik `COU`, druk {{key:Enter}}, dan `5` vir kolomme en `2` vir rye.
3. Tik `S`, druk {{key:Enter}}, dan `600` tussen kolomme en `-900` tussen rye (negatief gaan af).
4. Druk {{key:Enter}} om die kopieë te maak.

Vir 'n ring stoele rondom 'n tafel, kies `PO` (Polêr) in plaas daarvan, klik die tafel se middelpunt, en stel `I` (items), `F` (vulhoek: 360 vir heeltemal rondom, 180 vir die helfte) en `ROT` (of die kopieë na die middelpunt draai) in. {{cmd:ARRAYRECT}} en {{cmd:ARRAYPOLAR}} slaan die vraag oor.

## Voeg stukke tot een poliklyn saam

{{cmd:JOIN}} (`J`, of {{ui:Wysig}} › {{ui:Meer}} › {{ui:Voeg saam}}): kies lyne, boë en oop poliklyne waarvan die eindpunte raak, en druk {{key:Enter}}. Hulle word een poliklyn, toe as hulle heeltemal rondgaan, wat jy dan in een keer kan ofset. Lyne wat op een lyn lê word een lyn, selfs met gapings tussen hulle; boë van een sirkel word een boog, of die sirkel.

## Pas eienskappe aan

{{cmd:MATCHPROP}} (`MA`, of {{ui:Wysig}} › {{ui:Meer}} › {{ui:Pas eienskappe aan}}): klik die voorwerp waarvan jy die voorkoms wil hê, kies dan die voorwerpe om te verander en druk {{key:Enter}}. Hulle neem sy laag en kleur; 'n teks neem sy hoogte, 'n maat sy groottes, 'n arsering sy patroon. Tik `S` ({{ui:Instellings}}) by die tweede vraag om enigeen van hierdie af te skakel.

## Belyn voorwerpe

**Volgens punte.** {{cmd:ALIGN}} (`AL`, of {{ui:Wysig}} › {{ui:Meer}} › {{ui:Belyn}}): kies die voorwerpe en druk {{key:Enter}}, klik dan 'n punt op hulle (die bron) en waar dit moet wees (die bestemming).

- Een paar skuif hulle. Druk {{key:Enter}} by `Spesifiseer tweede bronpunt` om daar te stop.
- Twee pare draai hulle ook, sodat die lyn tussen die twee bronpunte langs die lyn tussen die twee bestemmingspunte lê. CadCraft vra dan `Skaal voorwerpe op grond van belyningspunte?`: `Y` maak hulle ook so veel groter of kleiner.
- 'n Derde paar spieël hulle wanneer hul twee punte aan weerskante van daardie lyn is.

**Rande en spasiëring.** {{ui:Wysig}} › {{ui:Meer}} › {{ui:Belyn en versprei}} (of `ALIGNPANEL`) open 'n klein paneel oor die tekening. Kies voorwerpe, en dan:

- kies waarmee om in lyn te bring in {{ui:Belyn na}} (die hele keuse, die eerste of laaste voorwerp wat jy gekies het, of 'n punt wat jy klik) en klik {{ui:Links}}, {{ui:Middelpunt}}, {{ui:Regs}}, {{ui:Bo}}, {{ui:Middel}} of {{ui:Onder}};
- of kies {{ui:Gelyke gapings}} of {{ui:Gelyke middelpunte}} en klik {{ui:Oor}} of {{ui:Op en af}}: die buitenste twee voorwerpe bly, die res word gelykmatig tussen hulle gespasieer (minstens drie voorwerpe).

Elke klik is een ontdoen-stap, en die keuse bly, sodat jy iets anders kan probeer. Elke voorwerp tel volgens sy begrensingsboks, in die UCS wanneer een ingestel is. Op die opdragreël is dit dieselfde as {{cmd:ALIGNTO}} en {{cmd:DISTRIBUTE}}.

## Vee uit en ontbind

- {{cmd:ERASE}} (`E`, of {{key:Delete}}) verwyder die gekose voorwerpe.
- {{cmd:EXPLODE}} (`X`) breek 'n poliklyn in lyne en boë, 'n blokverwysing in sy voorwerpe, en 'n maat in lyne, pylpunte en teks. Ontbinde mate meet nie meer self nie.

## Algemene foute

- **Tik 'n afstand sonder `@` by die tweede punt.** `600,0` is die absolute punt 600,0, nie "600 na regs" nie. Gebruik `@600,0`, of 'n kaal `600` met die kruisdraad wat die regte rigting wys.
- **Die draai het die verkeerde kant toe gegaan.** Positiewe hoeke draai teen die wysers van die horlosie.
- **Ontdoen het meer verwyder as wat verwag is.** Een ontdoen neem die hele laaste opdrag terug, insluitend elke kopie wat dit gemaak het.
- **Die opdrag het nie gevra om voorwerpe te kies nie.** Voorwerpe was reeds gekies, so het dit hulle gebruik. Druk eers {{key:Esc}} om met niks gekies te begin nie.
