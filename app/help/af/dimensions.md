---
title: Dimensioneer 'n plan
summary: Voeg lineêre, belynde, hoek-, radius- en deursnee-mate by, ketting hulle met Gaan voort en Basislyn, en oorskryf die teks.
keywords: maat, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, ketting, reeks, annoteer, maathulpmiddel, waar, vind, werkbalk, meet, mm, cm, m, km, eenhede
from: 9ee65123
---

## Wat jy gaan maak

'n Gedimensioneerde kamer: algehele breedte en hoogte, 'n reeks mate langs een muur, 'n skuins muur, 'n geboë hoek en 'n hoek.

Voordat jy begin, lees [Stel maatgroottes](topic:dimension-settings) as jou tekening groot is: maatteks is standaard 2.5 tekeningeenhede hoog, wat klein is in 'n tekening wat in millimeter gemeet word. Vir die stappe hieronder, tik eers `DIMSCALE`, druk {{key:Enter}}, tik `50` en druk {{key:Enter}}.

## Waar die maatgereedskap is

Met die CadCraft-kieslysstyl (die een waarmee CadCraft begin), is die maatgereedskap in die werkbalk bo die tekening, in die {{ui:Annoteer}}-groep: {{ui:Lineêr}}, {{ui:Belyn}}, {{ui:Hoek}}, {{ui:Radius}} en {{ui:Deursnee}}. Die groep se {{ui:Meer}}-kieslys het {{ui:Gaan voort met maat}} en {{ui:Basislynmaat}}. Hou die aanwyser oor 'n knoppie om te sien wat dit doen.

- Met die {{ui:Klassieke tekening}}- of {{ui:Lint}}-kieslysstyl, maak die {{ui:Annoteer}}-oortjie oop: die gereedskap is in sy {{ui:Maate}}-paneel. {{ui:Klassieke tekening}} het ook {{ui:Lineêr}} op die {{ui:Tuis}}-oortjie, onder {{ui:Annotasie}}. Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse).
- Of tik die opdrag by die opdragreël onder die tekening en druk {{key:Enter}}: `DLI` (lineêr), `DAL` (belyn), `DAN` (hoek), `DRA` (radius), `DDI` (deursnee), `DCO` (gaan voort), `DBA` (basislyn).
- Op 'n smal skerm is die werkbalk een ry: swiep dit sywaarts om by {{ui:Annoteer}} uit te kom.

Om die lengtes in millimeter, sentimeter, meter of kilometer te wys, sien [Mate in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Teken iets om te dimensioneer

1. Tik `PL` en druk {{key:Enter}}.
2. Tik `0,0` en druk {{key:Enter}}.
3. Tik `@6000,0` en druk {{key:Enter}}.
4. Tik `@1500<60` en druk {{key:Enter}}.
5. Tik `@0,2700` en druk {{key:Enter}}.
6. Tik `@-6750,0` en druk {{key:Enter}}.
7. Tik `C` en druk {{key:Enter}}. Die omtrek sluit.
8. Tik `C` en druk {{key:Enter}} om 'n sirkel te begin.
9. Klik binne die kamer, weg van die mure, vir die middelpunt.
10. Tik `600` en druk {{key:Enter}}. Dit is 'n kolom.
11. Klik {{ui:Omvang}}.

## Lineêr: horisontaal of vertikaal

1. Tik `DLI` en druk {{key:Enter}}.
2. By `Spesifiseer die oorsprong van die eerste verlengingslyn`, vasklou aan die linkeronderhoek (Eindpunt) en klik.
3. By `Spesifiseer die oorsprong van die tweede verlengingslyn`, vasklou aan die regteronderhoek en klik.
4. Beweeg die kruishaar onder die kamer. Die maat volg, horisontaal.
5. Klik om die maatlyn te plaas.

Die geskiedenis sê `Maatteks = 6000`.

Waar jy die lyn plaas, bepaal die rigting: onder of bo gee 'n horisontale maat, links of regs gee 'n vertikale een. Om dit af te dwing, tik `H` (horisontaal), `V` (vertikaal) of [Geroteer (R)] (dan 'n hoek) voordat jy dit plaas.

:::tip
Druk {{key:Enter}} by die eerste vraag in plaas van 'n punt te kies, en klik dan 'n lyn, boog, sirkel of polilynsegment. CadCraft neem albei eindpunte vir jou.
:::

## Gaan voort: 'n reeks mate

{{cmd:DIMCONTINUE}} ({{ui:Annoteer}} › {{ui:Meer}} › {{ui:Gaan voort met maat}}, of `DCO`) gaan voort vanaf die laaste lineêre of belynde maat wat jy gemaak het, en elke nuwe een begin waar die vorige geëindig het.

1. Tik `DLI` en druk {{key:Enter}}.
2. Tik `0,0` en druk {{key:Enter}} vir die eerste oorsprong.
3. Tik `2000,0` en druk {{key:Enter}} vir die tweede oorsprong.
4. Klik onder die kamer om dit te plaas.
5. Tik `DCO` en druk {{key:Enter}}.
6. Tik `4500,0` en druk {{key:Enter}}. 'n Tweede maat volg op die eerste, op dieselfde lyn.
7. Vasklou aan die regteronderhoek en klik. 'n Derde een voltooi die reeks.
8. Druk {{key:Enter}} om die opdrag te beëindig.

:::note
Hier is die punte doelbewus as absolute koördinate getik. 'n `@`-punt tel vanaf die laaste punt wat jy gegee het, en die laaste punt is waar jy die vorige maatlyn geplaas het, nie die einde van die maat nie. Absolute punte, vasklouings of 'n kaal afstand met {{ui:Ortho}} aan, is veiliger in 'n maatreeks.
:::

Tik `U` en druk {{key:Enter}} om die laaste maat in die reeks terug te neem sonder om die opdrag te verlaat.

## Basislyn: mate op een lyn gestapel

{{cmd:DIMBASELINE}} ({{ui:Annoteer}} › {{ui:Meer}} › {{ui:Basislynmaat}}, of `DBA`) meet elke nuwe maat vanaf die eerste oorsprong van die laaste een, en stapel elkeen 'n stap verder uit.

1. Tik `DLI` en druk {{key:Enter}}.
2. Vasklou aan die linkeronderhoek en klik.
3. Vasklou aan die linkerbovenhoek en klik.
4. Beweeg die kruishaar links van die kamer en klik. 'n Vertikale maat verskyn.
5. Tik `DBA` en druk {{key:Enter}}.
6. Vasklou aan die boonste einde van die 60-grade-muur (Eindpunt) en klik. 'n Tweede vertikale maat verskyn, een stap verder uit as die eerste.
7. Druk {{key:Enter}} om te eindig.

## Belyn: ware lengte van 'n skuins lyn

1. Tik `DAL` en druk {{key:Enter}}.
2. Druk {{key:Enter}} om 'n voorwerp te kies.
3. Klik die 60-grade-muur.
4. Beweeg buitentoe en klik om te plaas.

Die teks lees 1500: die ware lengte, langs die muur gemeet.

## Radius en deursnee

1. Tik `DRA` en druk {{key:Enter}}.
2. Klik die kolomsirkel.
3. Beweeg die kruishaar. Die leier wys vanaf die middelpunt na die kruishaar.
4. Klik om die teks te plaas.

Die teks lees `R600`. {{cmd:DIMDIAMETER}} (`DDI`) doen dieselfde met 'n ⌀-teken en die deursnee.

## Hoek

Die mure hier is een polilyn, so meet die hoek by sy hoekpunt. (Tussen twee aparte lyne kan jy eerder die lyne klik.)

1. Tik `DAN` en druk {{key:Enter}}.
2. By `Kies boog, sirkel of lyn, of Enter vir 'n hoekpunt`, druk {{key:Enter}}.
3. By `Spesifiseer die hoekpunt`, vasklou aan die regteronderhoek en klik.
4. By `Spesifiseer die eerste hoekeindpunt`, vasklou aan die linkeronderhoek en klik.
5. By `Spesifiseer die tweede hoekeindpunt`, vasklou aan die boonste einde van die 60-grade-muur en klik.
6. Beweeg die kruishaar binne die kamer, naby die hoek, en klik.

Die teks lees `120°`, die binnehoek van die hoek. Geplaas aan die ander kant van die hoek, meet die maat eerder die hoek aan daardie kant. Klik 'n boog by die eerste vraag om die hoek wat dit omspan te dimensioneer, of klik twee lyne om die hoek tussen hulle te dimensioneer.

## Verander die teks

Om jou eie teks te skryf, tik `T` en druk {{key:Enter}} voordat jy die maat plaas, en tik dan die teks. In jou teks staan `<>` vir die gemete waarde: `<> TYP.` gee `6000 TYP.`. Druk {{key:Enter}} op 'n leë reël om die gemete waarde te hou.

Om 'n bestaande maat te verander:

1. Klik dit.
2. In die regterpaneel, tik in {{ui:Teks}}. Laat dit leeg vir die gemete waarde.
3. Druk {{key:Enter}}.

## Mate volg die geometrie

'n Maat onthou sy punte. Sleep een van sy gripe, of skuif, roteer of skaal dit saam met die voorwerpe wat dit meet, en dit meet weer. As jy die geometrie uitrek sonder om die maat te skuif, volg die maat nie: dit hou sy eie punte.

## Algemene foute

- **Die teks en pyltjies is mikroskopies of reusagtig.** Stel die algemene skaal: sien [Stel maatgroottes](topic:dimension-settings).
- **"Kies 'n punt binne die hoek wat jy wil meet."** Die punt wat jy vir 'n hoekmaat geklik het, lê op een van die bene. Skuif dit in die hoek.
- **Gaan voort het van die verkeerde maat begin.** Dit gaan altyd voort vanaf die laaste lineêre of belynde maat wat in hierdie sessie gemaak is. Maak (of maak weer) eers die een om vanaf voort te gaan.
- **Die maat het vertikaal uitgekom.** Jy het dit aan die kant geplaas. Tik `H` voordat jy dit plaas.
- **Voete en duim.** Stel eers die tekening se lengteformaat na {{ui:Argitektonies}}, of 'n maat se {{ui:Formaat}} in {{ui:Eienskappe}}: sien [Voete en duim in mate](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Die getalle is nie in die eenheid wat jy wil hê nie.** Kies {{ui:Eenhede in die teks}}: sien [Mate in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
