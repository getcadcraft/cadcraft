---
title: Splines en polilyne: SPLINE, SPLINEDIT, PEDIT
summary: Teken 'n gladde kromme deur punte of uit 'n beheerveelhoek, wysig die passing en beheerpunte, en wysig polilyne (verbind, sluit, breedte, pas aan, spline, ontkromme) of skakel 'n spline om na 'n polilyn.
keywords: spline, splinedit, spl, spe, pedit, pe, passingspunte, beheerpunte, gewigte, nurbs, polilynwysiging, verbind, passingskromme, ontkromme, omskakel na polilyn, presisie, raaklyn, kromme, passingstoleransie
from: d31f72d8
---

## Wat jy gaan maak

'n Kromme deur vyf punte, dan dieselfde kromme op drie maniere gewysig, en 'n polilyn gebou uit drie lyne.

## Teken 'n spline deur punte

1. Tik `SPL` en druk {{key:Enter}}.
2. Klik of tik die punte waardeur die kromme moet gaan: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Druk {{key:Enter}} ná die laaste een.
3. {{ui:Beginraaklyn}}: klik 'n punt waarheen die kromme moet vertrek, of druk {{key:Enter}} om dit te laat besluit. Doen dieselfde vir die eindraaklyn.

Die kromme gaan deur elke punt. Tik `C` in plaas van {{key:Enter}} om dit toe te maak (die kromme keer terug na die eerste punt). {{key:U}} (`Undo`) neem die laaste punt terug terwyl jy teken.

### Teken een uit 'n beheerveelhoek

Tik `M` by die eerste opdrag, dan `C` (Beheerhoekpunte) en 'n graad van 1 tot 5 (3 is die gewone). Nou is die punte wat jy kies die hoeke van 'n veelhoek wat die kromme na hulle toe trek; die kromme begin by die eerste en eindig by die laaste. 'n Geslote een draai rond, sonder 'n hoek by die verbinding.

### Omskakel 'n polilyn na 'n spline

By die eerste opdrag tik `O` (Voorwerp) en kies polilyne of lyne. Hulle word splines deur hul hoekpunte; die oorspronklikes verdwyn.

## Wysig 'n spline

Kies dit en tik `SPE` (of tik `SPE` en klik daarop). Gripe wys die passingspunte (of die beheerpunte van 'n spline wat geen het nie): sleep een om die kromme te hervorm. By die opdrag:

- **Passingsdata** ('n spline wat deur punte geteken is): `A` voeg 'n passingspunt by (klik waar), `D` vee een uit (klik naby dit), `M` skuif een (klik naby dit, en klik dan sy nuwe plek), `T` stel die eindraaklyne, `P` suiwer die passingspunte, sodat die spline van dan af deur sy beheerpunte gewysig word.
- **Wysig hoekpunt**: `A` voeg 'n beheerpunt by sonder om die kromme te verander, `M` skuif een, `W` gee een 'n **gewig** (bo 1 trek die kromme nader daaraan, onder 1 laat dit los).
- **Maak oop** of **Maak toe**, en **Omkeer** (die kromme loop die ander kant op).
- **Omskakel na Polilyn** (`P`): die spline word 'n polilyn; die presisie is hoeveel segmente elke span kry (10 is die gewone).
- **`U` (Ontdoen)** neem die laaste verandering terug; **`X` (Verlaat)** beëindig.

{{ui:Eienskappe}} wys 'n spline se graad, hoeveel passings- en beheerpunte dit het, sy lengte, en laat jou dit oop of toe maak.

## Wysig 'n polilyn

Kies 'n polilyn en tik `PE`. 'n Lyn, boog of spline wat jy kies, word eers as 'n polilyn aangebied om in om te skakel ('n spline vra vir die presisie).

- **Maak toe** / **Maak oop** verbind of skei die eindpunte.
- **Verbind** voeg lyne, boë en polilyne by wie se eindpunte by die polilyn se eindpunt uitkom. `Fuzz distance` is hoe ver eindpunte van mekaar mag wees en steeds verbind (0 beteken hulle moet presies ontmoet).
- **Breedte** gee die hele polilyn een breedte (0 verwyder dit).
- **Pas aan** vervang die polilyn deur 'n gladde kromme wat deur sy hoekpunte gaan; **Spline** deur 'n kubiese B-spline wat hulle volg (dit begin en eindig by die eerste en laaste hoekpunt en bly naby die ander). Albei word 'n polilyn van kort segmente, en die oorspronklike hoeke word behou, sodat **Ontkromme** hulle terugbring.
- **Ltype gen** sê of 'n stippellyntipe oor die hele polilyn deurloop of by elke hoekpunt weer begin.
- **Omkeer** verander die volgorde van sy hoekpunte. **Meervoudig** (`M` by die eerste opdrag) wysig verskeie polilyne met dieselfde opsies.

Hoekpunte van 'n polilyn in {{ui:Eienskappe}} of met gripe wysig, werk nie: PEDIT het geen hoekpuntwysiger nie.

## In lêers

DWG en DXF 2000 hou 'n spline as 'n spline: graad, beheerpunte, knope, gewigte, passingspunte en raaklyne. 'n Spline wat jy oopmaak en nie verander nie, word presies soos dit gekom het teruggeskryf. DXF R12 het geen spline nie: dit word as 'n polilyn langs die kromme gestoor, en die geskiedenis sê hoeveel.

Offset, Trim, Verleng, Afrond, Breek en Verbind werk nie op splines nie. {{cmd:EXPLODE}} 'n spline, of {{cmd:PEDIT}} dit, om 'n polilyn te kry wat daardie opdragte aanvaar.

## Algemene foute

- **Die kromme skiet oor tussen naby punte.** 'n Kromme deur punte buig waar die punte buig. Gebruik minder punte, of 'n beheerveelhoek.
- **"Dit is nie 'n spline nie."** SPLINEDIT neem net splines aan; {{cmd:PEDIT}} wysig polilyne.
- **'n Geslote passingspline het 'n effens ander vorm in 'n ander program.** CadCraft sluit dit met een gladde verbinding by die eerste punt; 'n ander program sluit dit dalk met 'n periodieke kromme. 'n Geslote beheerpuntspline is in albei dieselfde.
