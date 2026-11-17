---
title: Arsering en vul gebiede
summary: Vul 'n gebied met 'n massiewe kleur of 'n standaardpatroon deur binne-in te klik of geslote vorms te kies, stel die patroon se skaal en hoek, en verander later 'n arsering.
keywords: arsering, bhatch, vul, massiewe vulling, patroon, ansi31, ansi37, baksteen, aarde, net, snitlyne, poché, eiland, grens, skaal, hoek
from: 14399174
---

## Wat jy gaan maak

'n Muursnit gevul met die ANSI31-patroon, 'n kolom daarin leeg gelaat, en 'n massiewe vulling in die kolom.

## Arseer deur binne-in 'n gebied te klik

1. Teken 'n reghoek (`REC`, `0,0`, `@2000,1200`) en 'n sirkel binne dit (`C`, `1000,600`, `300`). Klik {{ui:Omvang}}.
2. Klik {{ui:Arsering}} in die {{ui:Teken}}-groep, of tik `H` en druk {{key:Enter}}. Die geskiedenis sê watter patroon die huidige een is, byvoorbeeld `Current hatch: ANSI31, scale 1, angle 0°`.
3. Tik `P` en druk {{key:Enter}}, tik `ANSI31` en druk {{key:Enter}}.
4. Tik `SC` en druk {{key:Enter}}, tik `20` en druk {{key:Enter}}. Patroongroottes is op papier, dus 'n tekening wat teen 1:20 gedruk word, wil skaal 20 hê.
5. By `Pick internal point`, klik binne die reghoek, buite die sirkel. Die arsering wys as 'n voorskou.
6. Druk {{key:Enter}}. Die reghoek is gearseer; die sirkel binne bly leeg, omdat dit 'n eiland is.

Klik binne verskeie gebiede voordat jy {{key:Enter}} druk om hulle een arsering te maak. `U` neem die laaste gebied terug.

## 'n Massiewe vulling

1. Tik `H` en druk {{key:Enter}}.
2. Tik `P`, druk {{key:Enter}}, tik `SOLID` en druk {{key:Enter}}.
3. Klik binne die sirkel, en druk dan {{key:Enter}}.

## Arseer geslote vorms wat jy kies

In plaas van om binne te klik, tik `S` (Kies voorwerpe) by `Pick internal point` en kies geslote polilyne, sirkels of geslote ellipse, en druk dan {{key:Enter}}. Vorms binne ander bly op hul beurt leeg (die buitenste een gearseer, die volgende een leeg, en so voort).

## Patrone

Tik `?` by die patroonvraag vir die lys. Die standaardes is ANSI31 tot ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS, EARTH en SOLID. In 'n tekening in duim (of met voet en duim as sy lengteformaat) word die duimgroottes van die patrone gebruik, soos in AutoCAD; anders die millimeter-groottes.

{{ui:Hoek}} (`A`) draai die hele patroon: ANSI31 by 90° hel die ander kant op.

**Patroonlêers.** Tik `F` (Patroonlêer) by `Pick internal point` en kies 'n `.pat`-lêer. Die patrone daarin sluit by die lys aan; met meer as een word jy gevra watter een om te gebruik. 'n Lêer sonder 'n patroon wat CadCraft kan lees, sê dit, en enige patroon wat dit oorgeslaan het, word getel. Groottes in 'n `.pat`-lêer het geen eie eenheid nie, so hulle word in die tekening se eenhede gelees. Slegs lêers in die gewone `.pat`-formaat is getoets; nie een wat deur 'n ander program gemaak is nie.

## Verander 'n arsering

Kies dit (klik op een van sy lyne). In {{ui:Eienskappe}}: {{ui:Patroon}}, {{ui:Patroonskaal}} en {{ui:Patroonhoek}}. Arserings uit oopgemaakte tekeninge wys hul patroon as dit een van die standaardes is; ander wys as 'n ligte toon van hul kleur.

## Algemene foute

- **Geen geslote grens rondom daardie punt nie.** Daar is 'n gaping in die omtrek, of 'n deel daarvan is buite die skerm: CadCraft kyk net na wat op die skerm is. Sluit die gaping (zoem in op die hoeke), of zoem uit.
- **Die patroon is te dig om teen hierdie skaal te teken.** Die lyne sou nader aan mekaar wees as wat die tekening kan wys. Gebruik 'n groter skaal: probeer die drukskaal (20 vir 1:20).
- **Die patroon lyk groot of klein.** Die skaal is in tekeningeenhede per patroon-eenheid; sien stap 4 hierbo.
- **Die omtrek skuif sonder die arsering.** 'n Arsering is nie aan sy grens vasgemaak nie. Skuif albei, of arseer weer.

## 'n Arsering wat by sy grens bly

'n Arsering wat jy met `HATCH` maak, onthou wat dit begrens. Skuif, draai of skaal die grens, en die arsering en sy patroon gaan saam. Sleep 'n handvatsel om die grens te hervorm, en die arsering word weer uitgewerk. Skuif die arsering op sy eie, en sy grens kom ook saam, soos 'n gevulde vorm in 'n tekenprogram.

Die koppeling eindig, en die opdragreël sê so, as die grens nie meer sluit nie of jy die arsering met die hand hervorm. Die arsering self bly. Tik `AS` terwyl jy arseer om arserings te maak wat op hul eie staan. Kopieer 'n arsering met sy grens, en die kopie het sy eie koppeling.

`HATCHEDIT` (`HE`) verander die patroon, skaal, hoek en oorsprong van 'n arsering, en koppel dit aan 'n grens of beëindig die koppeling. Die koppeling word in DWG- en DXF 2000-lêers gestoor. 'n DXF R12-lêer het geen arseringsobjek nie, en koppelings wat in ander programme gemaak is, word nie gelees nie: gebruik `HATCHEDIT` en Koppel vir daardie.

'n Arsering wat nie meer 'n grens het nie (die grens is uitgevee, of die lêer het sonder een gekom) kan een terugkry: `HATCHGENERATEBOUNDARY` (`HGB`) teken 'n geslote polilyn rondom elke lus van die arsering en, as jy Ja antwoord, koppel die arsering daaraan.

## 'n Verloopvulling

`GRADIENT` (`GD`) vul 'n gebied met 'n verloop in plaas van 'n patroon: dieselfde keuses as `HATCH`, nadat dit die tipe vra (lineêr, silindries, sferies, halfsferies, geboë, en elk van daardie omgekeer), een kleur met 'n tint of twee kleure, die hoek, en gesentreer of nie. In `HATCH` doen die opsie `G` dieselfde. `HATCHEDIT` `G`, of {{ui:Eienskappe}} onder Verloop, verander 'n verloop of maak enige arsering een.

'n Verloop wys op die skerm en in drukke. Stoor as DWG 2004 of later, en ander programme kry 'n regte verloop-arsering. DXF 2000 en DWG 2000 het geen verloop nie: daar hou CadCraft dit vir homself, en ander programme sien 'n massiewe vulling in die eerste kleur.

## Sny 'n arsering

`TRIM` sny 'n arsering soos enige ander voorwerp. Klik op die arsering aan die kant van die snykant wat jy wil laat verdwyn: die rande verdeel die gearseerde gebied en daardie stuk word verwyder. In Vinnige modus is elke voorwerp 'n snykant; kies eers die rande (opsie `T`) as daar baie is. 'n Getrimde arsering is nie meer aan sy grens gekoppel nie, omdat dit dit nie meer vul nie.
