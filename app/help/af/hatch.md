---
title: Arsering en vulgebiede
summary: Vul 'n gebied met 'n soliede kleur of 'n standaardpatroon deur daarin te klik of geslote vorms te kies, stel die patroon se skaal en hoek, en verander 'n arsering daarna.
keywords: arsering, bhatch, vul, soliede vul, patroon, ansi31, ansi37, baksteen, aarde, net, snitlyne, poché, eiland, grens, skaal, hoek
from: e7feb344
---

## Wat jy sal maak

'n Muursnit gevul met die ANSI31-patroon, 'n kolom daarin leeg gelaat, en 'n soliede vul in die kolom.

## Arsering deur in 'n gebied te klik

1. Teken 'n reghoek (`REC`, `0,0`, `@2000,1200`) en 'n sirkel binne dit (`C`, `1000,600`, `300`). Klik {{ui:Omvang}}.
2. Klik {{ui:Arsering}} in die {{ui:Teken}}-groep, of tik `H` en druk {{key:Enter}}. Die geskiedenis sê watter patroon huidig is, byvoorbeeld `Current hatch: ANSI31, scale 1, angle 0°`.
3. Tik `P` en druk {{key:Enter}}, tik `ANSI31` en druk {{key:Enter}}.
4. Tik `SC` en druk {{key:Enter}}, tik `20` en druk {{key:Enter}}. Patroongroottes is op papier, dus wil 'n tekening wat op 1:20 gedruk word skaal 20 hê.
5. By `Pick internal point`, klik binne die reghoek, buite die sirkel. Die arsering wys as 'n voorskou.
6. Druk {{key:Enter}}. Die reghoek word geärsereer; die sirkel binne bly leeg, omdat dit 'n eiland is.

Klik binne verskeie gebiede voordat jy {{key:Enter}} druk om hulle een arsering te maak. `U` neem die laaste gebied terug.

## 'n Soliede vul

1. Tik `H` en druk {{key:Enter}}.
2. Tik `P`, druk {{key:Enter}}, tik `SOLID` en druk {{key:Enter}}.
3. Klik binne die sirkel, en druk dan {{key:Enter}}.

## Arsering geslote vorms wat jy kies

In plaas van om binne te klik, tik `S` (Kies voorwerpe) by `Pick internal point` en kies geslote polilyne, sirkels of geslote ellipse, en druk dan {{key:Enter}}. Vorms binne ander word om die beurt leeg gelaat (die buitenste een geärsereer, die volgende een leeg, en so aan).

## Patrone

Tik `?` by die patroonvraag vir die lys. Die standaardes is ANSI31 tot ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS en EARTH, en SOLID. In 'n tekening in duim (of met voet en duim as sy lengteformaat), word die duimgroottes van die patrone gebruik, soos in AutoCAD; anders die millimetergroottes.

{{ui:Hoek}} (`A`) draai die hele patroon: ANSI31 by 90° hel die ander kant op.

**Patroonlêers.** Tik `F` (Patroonlêer) by `Pick internal point` en kies 'n `.pat`-lêer. Die patrone daarin voeg by die lys; met meer as een word jy gevra watter om te gebruik. 'n Lêer sonder 'n patroon wat CadCraft kan lees, sê so, en enige patroon wat dit oorgeslaan het, word getel. Groottes in 'n `.pat`-lêer het geen eenheid van hulle eie nie, so hulle word in die tekening se eenhede gelees. Slegs lêers wat in die gewone `.pat`-formaat geskryf is, is getoets; geen wat deur 'n ander program gemaak is nie.

## Verander 'n arsering

Kies dit (klik een van sy lyne). In {{ui:Eienskappe}}: {{ui:Patroon}}, {{ui:Patroonskaal}} en {{ui:Patroonhoek}}. Arserings uit oopgemaakte tekeninge wys hul patroon as dit een van die standaardes is; ander wys as 'n ligte toon van hul kleur.

## Algemene foute

- **"No closed boundary round that point."** Daar is 'n gaping in die omtrek, of 'n deel daarvan is buite die skerm: CadCraft kyk net na wat op die skerm is. Sluit die gaping (zoem in op die hoeke), of zoem uit.
- **"The pattern is too dense to draw at this scale."** Die lyne sou nader aan mekaar wees as wat die tekening kan wys. Gebruik 'n groter skaal: probeer die druikskaal (20 vir 1:20).
- **Die patroon lyk reusagtig of klein.** Die skaal is in tekeningeenhede per patroon-eenheid; sien stap 4 hierbo.
- **Die arsering volg nie sy omtrek nie.** 'n Arsering wat met {{cmd:HATCH}} gemaak is, bly by die voorwerpe waaruit dit gemaak is: skuif, draai of skaal die omtrek en die arsering gaan saam; herorden dit met 'n handvatpunt en die arsering word weer uitgewerk. Die skakel eindig wanneer die omtrek nie meer sluit nie, wanneer jy die arsering self met die hand herorden, of wanneer jy dit knip, en die opdragreël sê so. Niks gaan verlore nie: arseer die gebied weer om dit weer te skakel.

## 'n Arsering wat by sy grens bly

'n Arsering wat jy met `HATCH` maak, onthou wat dit begrens. Skuif, draai of skaal die grens en die arsering en sy patroon gaan saam. Sleep 'n handvatpunt om die grens te herorden en die arsering word weer uitgewerk. Skuif die arsering self en sy grens kom ook saam, soos 'n gevulde vorm in 'n tekenprogram.

Die skakel eindig, en die opdragreël sê so, as die grens nie meer sluit nie of jy die arsering met die hand herorden. Die arsering self bly. Tik `AS` terwyl jy arseer om arserings te maak wat op hul eie staan. Kopieer 'n arsering met sy grens en die afskrif het sy eie skakel.

`HATCHEDIT` (`HE`) verander die patroon, skaal, hoek en oorsprong van 'n arsering, en skakel dit aan 'n grens of beëindig die skakel. Die skakel word in DWG- en DXF 2000-lêers gestoor. 'n DXF R12-lêer het geen arseringvoorwerp nie, en skakels wat in ander programme gemaak is, word nie gelees nie: gebruik `HATCHEDIT` en Skakel vir daardie.

'n Arsering wat nie meer 'n grens het nie (die grens is uitgevee, of die lêer het sonder een gekom) kan dit terugkry: `HATCHGENERATEBOUNDARY` (`HGB`) trek 'n geslote polilyn om elke lus van die arsering en, as jy Ja antwoord, skakel die arsering daaraan.

## 'n Gradiënt-vul

`GRADIENT` (`GD`) vul 'n gebied met 'n gradiënt in plaas van 'n patroon: dieselfde keuses as `HATCH`, nadat dit die tipe vra (lineêr, silindries, sferies, halfsferies, geboë, en elkeen van hulle omgekeer), een kleur met 'n tint of twee kleure, die hoek, en gesentreer of nie. In `HATCH` doen die opsie `G` dieselfde. `HATCHEDIT` `G`, of {{ui:Eienskappe}} onder Gradiënt, verander 'n gradiënt of maak enige arsering een.

'n Gradiënt wys op die skerm en in drukke. Stoor as DWG 2004 of later en ander programme kry 'n werklike gradiëntarsering. DXF 2000 en DWG 2000 het geen gradiënt nie: daar hou CadCraft dit vir homself en ander programme sien 'n soliede vul in die eerste kleur.

## Knip 'n arsering

`TRIM` knip 'n arsering soos enige ander voorwerp. Klik die arsering aan die kant van die snykant wat jy wil hê weg moet: die kante verdeel die gearseerde gebied en daardie stuk word verwyder. In Vinnige modus is elke voorwerp 'n snykant; kies eers die kante (opsie `T`) wanneer daar baie is. 'n Geknipte arsering is nie meer aan sy grens geskakel nie, omdat dit dit nie meer vul nie.
