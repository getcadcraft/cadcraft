---
title: Parameters en vergelijkingen gebruiken
summary: Geef afmetingen namen, stuur ze aan met uitdrukkingen zoals width / 2, en typ een getal op een aangestuurde maat om te wijzigen wat hem aanstuurt.
keywords: parameters, par, parameterbeheer, vergelijkingen, uitdrukkingen, variabelen, tweerichtings, ontwerpintentie, gebruikersparameter, fx
from: 650b9844
---

## Eén tabel voor elke maat

Het paneel {{ui:Parameters}} (de knop {{ui:Parameters}} in de groep {{ui:Parametric}}, of typ {{cmd:PARAMETERS}}) toont elke dimensionele beperking (`d1`, `rad1`, `dia1`, `ang1`, of de naam die u eraan gaf) en uw eigen parameters samen. Elke naam kan in elke uitdrukking worden gebruikt.

Elke rij heeft:

- **Naam**: typ een nieuwe om hem te hernoemen; elke uitdrukking die hem gebruikt, volgt.
- **Uitdrukking**: een getal (`40`) of een uitdrukking (`width / 2 + gap`). Typ erin en druk op {{key:Enter}}: de tekening volgt.
- **Waarde**: wat hij uitrekent. Op een rij die een uitdrukking aanstuurt, kunt u hier ook een getal typen: CadCraft berekent de parameter erachter. Met `d1 = width / 2` zet u, door `30` in de waarde van d1 te typen, `width` op 60.

Wanneer twee parameters een waarde aansturen (`width / 2 + gap`), vraagt een dialoogvenster welke u wilt wijzigen. Elke wijziging is één stap ongedaan maken ({{key:Mod+Z}}).

## Eigen parameters toevoegen

1. Open het paneel {{ui:Parameters}}.
2. Typ een naam (`gap`) en een waarde (`10`), en kies daarna {{ui:Add}}.
3. Gebruik hem: typ in de uitdrukking van d1 `width / 2 + gap` en druk op {{key:Enter}}.

Namen beginnen met een letter of `_` en bevatten letters, cijfers en `_`. Functienamen, `pi` en eenheidsnamen kunnen geen naam zijn.

## Uitdrukkingen

| Schrijf | Betekent |
|---|---|
| `+ - * / ^ %` | optellen, aftrekken, vermenigvuldigen, delen, macht, rest |
| `( )` | groeperen |
| `sin cos tan asin acos atan atan2` | goniometrie in graden |
| `sqrt pow exp ln log abs sign` | wortels, machten, logaritmen |
| `ceil floor int round min max` | afronden en grenzen |
| `if(a > b, x, y)` | een keuze |
| `pi` | 3.14159… |

Getallen mogen een eenheid hebben: `25mm`, `1in`, `2'`, `90deg`. Lengten met een eenheid worden omgezet naar millimeters, dus gebruik eenheden alleen in tekeningen die in millimeters zijn gemeten; typ elders gewone getallen.

## Op de opdrachtregel

`-PARAMETERS` doet hetzelfde zonder het paneel: `N` nieuw, `E` bewerken (ook een dimensionele beperking), `R` hernoemen, `D` verwijderen, `?` lijst.

## Wat wordt geweigerd

- Een uitdrukking die zichzelf gebruikt, rechtstreeks of via anderen: "width, d1 gebruiken elkaar."
- Een waarde die een maat niet kan aannemen: een negatieve lengte, een hoek boven 180°.
- Een waarde die de tekening niet kan aannemen met de andere beperkingen: er verandert niets, en het bericht noemt de beperkingen die in de weg zitten.
- Een parameter verwijderen die iets gebruikt: het paneel biedt aan eerst zijn waarde erin te schrijven. De naam van een dimensionele beperking wordt verwijderd door de beperking zelf te verwijderen.
