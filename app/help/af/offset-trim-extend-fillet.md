---
title: Ofset, trim, verleng, afrond en skuins muurs
summary: Verander enkel lyne in dubbele muure met Ofset, maak die hoeke skoon met Afrond, en sny en verleng lyne met Trim en Verleng.
keywords: ofset, trim, verleng, afrond, skuins, afskuins, breek, breekpunt, lengte, muure, hoek, sny, parallel, radius, opruiming
from: c6c5cbd0
---

## Wat jy gaan maak

'n Klein vertrek met 200-dik muure: die binneste vlak is geteken, die buitenste vlak is ge-ofset, die hoeke is skoongemaak, en 'n deuropening is deur een muur gesny.

## Teken die binneste vlak

1. Tik `L` en druk {{key:Enter}}.
2. Tik `0,0` en druk {{key:Enter}}.
3. Tik `@5000,0` en druk {{key:Enter}}.
4. Tik `@0,4000` en druk {{key:Enter}}.
5. Tik `@-5000,0` en druk {{key:Enter}}.
6. Tik `C` en druk {{key:Enter}}.
7. Klik {{ui:Omvang}}.

Jy het vier afsonderlike lyne. ('n Geslote poliklyn sou in een keer ofset; afsonderlike lyne wys hoe Afrond hoeke skoonmaak.)

## Ofset die buitenste vlak

1. Tik `O` en druk {{key:Enter}}. Die vraag lees `Spesifiseer ofsetafstand [Deur (T)] <Deur (T)>:`.
2. Tik `200` en druk {{key:Enter}}.
3. By `Kies voorwerp om te ofset`, klik die onderste lyn.
4. By `Spesifiseer punt aan die kant om te ofset`, klik enige plek onder dit. 'n Parallelle lyn verskyn 200 onder.
5. Klik die regterlyn, klik dan na die regterkant daarvan.
6. Klik die boonste lyn, klik dan bo dit.
7. Klik die linkerlyn, klik dan na die linkerkant daarvan.
8. Druk {{key:Enter}} om die opdrag te beëindig.

Jy behoort vier buitelyne te sien, elk dieselfde lengte as sy binnelyn, sodat die buitehoeke nie ontmoet nie.

:::tip
Druk {{key:Enter}} by die afstandvraag om die laaste afstand weer te gebruik. Tik `T` vir Deur: dan gaan elke kopie deur die punt wat jy klik, op watter afstand dit ook al is.
:::

{{cmd:OFFSET}} werk op lyne, boë, sirkels en poliklyne. Om 'n geslote poliklyn te ofset, ofset die hele omtrek, hoeke ingesluit.

## Maak die buitehoeke skoon met Afrond

{{cmd:FILLET}} voeg twee lyne by 'n hoek: dit trim of verleng albei sodat hulle ontmoet. Met 'n radius van 0 is die hoek vierkant.

1. Tik `F` en druk {{key:Enter}}. Die vraag lees `Kies eerste lyn [Radius]:`.
2. As die laaste afronding wat jy gedoen het 'n radius gebruik het, tik `R`, druk {{key:Enter}}, tik `0` en druk {{key:Enter}}.
3. Klik die buitenste onderste lyn naby sy regterkant.
4. By `Kies tweede lyn`, klik die buitenste regterlyn naby sy onderkant.

Die twee lyne ontmoet nou in 'n skerp hoek, en die opdrag eindig.

5. Druk {{key:Enter}} om {{cmd:FILLET}} te herhaal, en doen die volgende hoek.
6. Herhaal totdat al vier buitehoeke ontmoet.

Klik elke lyn op die deel wat jy wil **hou**. Met 'n radius bo 0 voeg Afrond 'n boog tussen die lyne in.

:::tip
Tik `M` by die eerste vraag om al vier hoeke in een keer te doen, of teken die buitevlak as een geslote poliklyn en tik `P`: elke hoek word tegelyk gedoen. Hou {{key:Shift}} vas terwyl jy die tweede lyn klik vir 'n skerp hoek sonder om die radius te verander.
:::

## Skuins 'n hoek met Afskuins

{{cmd:CHAMFER}} sny 'n hoek af met 'n reguit lyn.

1. Tik `CHA` en druk {{key:Enter}}.
2. Tik `D` en druk {{key:Enter}}. Tik `300` en druk {{key:Enter}} vir die eerste afstand, druk dan {{key:Enter}} om 300 ook vir die tweede te gebruik.
3. Klik die binneste boonste lyn naby sy linkerkant, dan die binneste linkerlyn naby sy boonste kant.

Die hoek word 300 langs elke lyn teruggesny, en 'n skuinslyn verbind hulle. Tik `A` in plaas van `D` om 'n lengte op die eerste lyn en 'n hoek te gee.

## Sny 'n deuropening met Trim

Teken eers die twee deurkosyne oor die onderste muur, en trim dan die muurlyne tussen hulle.

1. Tik `L` en druk {{key:Enter}}.
2. Tik `1000,200` en druk {{key:Enter}}.
3. Tik `@0,-600` en druk {{key:Enter}}, en druk dan weer {{key:Enter}}.
4. Druk {{key:Enter}} om {{cmd:LINE}} te herhaal.
5. Tik `1900,200` en druk {{key:Enter}}.
6. Tik `@0,-600` en druk {{key:Enter}}, en druk dan weer {{key:Enter}}.

Jy het nou twee kort lyne wat die onderste muur 900 uit mekaar kruis.

7. Tik `TR` en druk {{key:Enter}}. Die geskiedenis sê `Huidige instellings: Vinnige modus, rande: geen verleng nie`.
8. Klik die binneste onderste lyn tussen die twee kosyne. Daardie stuk verdwyn. (Rus eers die aanwyser daarop: die stuk wat sal gaan word, word grys en gestippel.)
9. Klik die buitenste onderste lyn tussen die twee kosyne. Daardie stuk verdwyn ook.
10. Klik die deel van elke kosyn wat bo die muur uitsteek, en die deel onder dit.
11. Druk {{key:Enter}} om die opdrag te beëindig.

Jy behoort 'n opening van 900 in die onderste muur te sien, met die kosyne wat die muurenders sluit.

In Vinnige modus (die standaard) vra Trim nie eers om snylyne te kies nie: elke sigbare voorwerp is 'n snylyn. Kies die stuk wat weg moet, of sleep 'n pad deur verskeie stukke om hulle almal in een keer te trim. Tik `U` en druk {{key:Enter}} om die laaste keuse of sleep terug te plaas sonder om die opdrag te verlaat. Omheining, kruising, gekose rande en {{key:Shift}} om te verleng is in [Trim en verleng](topic:trim-and-extend).

## Verleng 'n lyn tot by 'n ander

{{cmd:EXTEND}} verleng 'n lyn, boog of poliklyn-einde totdat dit die volgende voorwerp in daardie rigting raak.

1. Tik `L` en druk {{key:Enter}}.
2. Tik `1000,2000` en druk {{key:Enter}}.
3. Tik `@2000,0` en druk {{key:Enter}}, en druk dan weer {{key:Enter}}. Die lyn stop 2000 kort van die regtermuur.
4. Tik `EX` en druk {{key:Enter}}.
5. Klik die nuwe lyn naby sy regterkant.
6. Druk {{key:Enter}} om die opdrag te beëindig.

Die lyn loop nou tot by die binnevlak van die regtermuur. Elke sigbare voorwerp is 'n grens; kies naby die einde wat moet groei. Binne {{cmd:TRIM}} doen {{key:Shift}}+klik dieselfde.

## Breek en lengte

{{cmd:BREAK}} (`BR`, of {{ui:Wysig}} › {{ui:Meer}} › {{ui:Breek}}) sny 'n gaping sonder 'n snylyn: klik die voorwerp waar die gaping begin (daardie klik is die eerste punt), klik dan waar dit eindig. Op 'n sirkel gaan die deel teen die wysers van die horlosie van die eerste punt tot die tweede. `F` by die tweede vraag laat jou die eerste punt weer gee, en {{cmd:BREAKATPOINT}} verdeel 'n voorwerp in twee by een punt, sonder 'n gaping.

{{cmd:LENGTHEN}} (`LEN`) verander 'n lengte by een einde:

1. Tik `LEN` en druk {{key:Enter}}. Klik 'n lyn om sy huidige lengte te sien; die vraag vra weer.
2. Kies hoe: `DE` (Delta: 'n bedrag om by te voeg, negatief om af te haal; `A` vir 'n boog se hoek), `P` (Persentasie: 50 halveer dit), `T` (Totaal: die lengte wat dit moet wees) of `DY` (Dinamies: sleep die einde).
3. Klik elke voorwerp naby die einde wat moet beweeg. `U` neem die laaste een terug; {{key:Enter}} beëindig.

Lyne, boë en oop poliklyne (hul eindsegment) kan verleng word.

## Algemene foute

- **'n Hele lyn het verdwyn.** Niks het dit gekruis nie, so Vinnige modus het dit uitgevee. Tik `U` om dit terug te plaas; kontroleer dat die snylyn werklik dit kruis (zoem in) en nie op 'n laag is wat af is nie.
- **"Geen grens in daardie rigting."** Verleng het niks gevind om in te loop nie. Kies nader aan die einde wat moet groei.
- **"Radius is te groot."** Die boog sou verby die einde van een van die lyne loop. Gebruik 'n kleiner radius.
- **"Slegs die eerste of laaste segment van 'n oop poliklyn kan teruggesny word."** Kies twee segmente van die poliklyn naasmekaar, of tik `P` om elke hoek daarvan af te rond.
- **Die ofset het na die verkeerde kant gegaan.** Die kant is waar jy klik ná jy die voorwerp gekies het. Ontdoen met {{key:Mod+Z}} en klik aan die ander kant.
- **"Kan nie so ver ofset nie."** Die ofset sou die boog, sirkel of poliklyn omkeer. Gebruik 'n kleiner afstand.
