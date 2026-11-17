---
title: Stel maatgroottes, desimale en skaal
summary: Kies teksthoogte, pylgrootte, desimale en algemene skaal vir nuwe mate, verander bestaande, en verstaan hoe maatstyle in CadCraft werk.
keywords: maatstyl, dimstyle, dimscale, dimtxt, dimasz, dimdec, dimgap, dimexe, dimexo, algemene skaal, desimale, pylgrootte, annotasieskaal, dimtextunit, eenhede in die teks, mm, cm, m, km, millimeter, meter, dimlfac, dimpost
from: 8ec82a07
---

## Wat jy sal leer

Hoe groot maatteks en pyle is, hoe om dit te stel vir 'n tekening wat op 1:50 of 1:100 gedruk word, en hoe om mate wat jy reeds gemaak het te verander.

## Hoe maatgroottes werk

Elke maat dra sy eie stel groottes: teksthoogte, pylgrootte, desimale, die spasie rondom die teks, hoe ver verlengingslyne verby die maatlyn loop, en hoe ver hulle by die voorwerp begin. Die verstekke is naby die algemene ISO-styl:

| Instelling | Verstek | Opdrag |
|---|---|---|
| Teksthoogte | 2.5 | {{cmd:DIMTXT}} |
| Pylgrootte | 2.5 | {{cmd:DIMASZ}} |
| Desimale | 2 (naloopnulle val weg) | {{cmd:DIMDEC}} |
| Spasie rondom die teks | 0.625 | {{cmd:DIMGAP}} |
| Verlenging verby die maatlyn | 1.25 | {{cmd:DIMEXE}} |
| Afset vanaf die voorwerp | 0.625 | {{cmd:DIMEXO}} |
| Algemene skaal | 1 | {{cmd:DIMSCALE}} |

Elke grootte word met die **algemene skaal** vermenigvuldig. Stel die groottes soos jy hulle op papier wil hê (2.5 mm teks), en stel die algemene skaal op die drukskaal (50 vir 1:50). Die teks is dan 2.5 × 50 = 125 tekeningeenhede hoog, wat by 2.5 mm druk.

:::note
Benoemde maatstyle word met {{cmd:DIMSTYLE}} bestuur: sien die afdeling hieronder. Elke maat hou ook die instellings waarmee dit gemaak is, so jy kan steeds een maat alleen in {{ui:Eienskappe}} verander.
:::

## Stel die groottes vir nuwe mate

Albei maniere hieronder verander net mate wat jy daarna maak.

### In die Huidige instellings-paneel

1. Druk {{key:Esc}} sodat niks gekies is nie. Op die {{ui:Model}}-oortjie lees die regterpaneel {{ui:Huidige instellings}}.
2. Rol af in die paneel na {{ui:Nuwe mate}}, verby die laag-, kleur-, eenhede- en {{ui:Laag 0}}-rye (op 'n klein skerm begin dit onder die onderrand). Klik in {{ui:Algemene skaal}}, tik `50` en druk {{key:Enter}}.
3. Stel {{ui:Teksthoogte}}, {{ui:Pylgrootte}} en {{ui:Desimale}} op dieselfde manier as jy ander waardes wil hê.

Die statusbalk bevestig elkeen, byvoorbeeld "Algemene skaal vir nuwe mate: 50".

### By die opdragreël

1. Tik `DIMSCALE` en druk {{key:Enter}}.
2. By `Voer nuwe waarde vir DIMSCALE in <1>`, tik `50` en druk {{key:Enter}}.

Die geskiedenis bevestig "DIMSCALE = 50. Nuwe mate gebruik dit; kies bestaande mate om hulle te verander." {{cmd:DIMTXT}}, {{cmd:DIMASZ}}, {{cmd:DIMDEC}}, {{cmd:DIMGAP}}, {{cmd:DIMEXE}} en {{cmd:DIMEXO}} werk op dieselfde manier. Druk {{key:Enter}} by die vraag om die huidige waarde te hou.

### Voete en duim in mate

Nuwe mate gebruik die tekening se lengteformaat: stel dit met {{ui:Lengteformaat}} in {{ui:Huidige instellings}} of met {{cmd:UNITS}} (sien [Voet en duim](topic:units-papers-scales#feet-and-inches-and-fractions)), en die volgende maat lees `12'-6 1/2"`. {{cmd:DIMLUNIT}} stel net die mate se formaat (2 desimaal, 3 ingenieurs, 4 argitektonies, 5 breuk). Vir 'n maat wat jy reeds gemaak het, kies dit en kies {{ui:Formaat}} in {{ui:Eienskappe}}; met 'n breukformaat neem die {{ui:Breuk}}-blokkie die mag van twee (4 = 1/16).

## Mate in mm, cm, m of km

'n Maat meet in tekeningeenhede. Dit kan daardie lengte in millimeter, sentimeter, meter of kilometer skryf, met die eenheid ná die getal: 'n 1250 mm-muur lees `1250 mm`, `125 cm`, `1.25 m` of `0.00125 km`.

1. Stel die tekening se {{ui:Eenhede in die teks}}-eenhede eers in {{ui:Huidige instellings}} (sien [Eenhede, papiergroottes en skale](topic:units-papers-scales#drawing-units)), sodat CadCraft weet wat een tekeningeenheid is. 'n Tekening sonder eenhede word as millimeter gelees, en {{cmd:DIMTEXTUNIT}} sê so.
2. Vir nuwe mate: druk {{key:Esc}} sodat niks gekies is nie, en kies onder {{ui:Nuwe mate}} {{ui:Eenhede in die teks}}: {{ui:Tekeningeenhede}}, `mm`, `cm`, `m` of `km`.
3. Vir mate wat jy reeds gemaak het: kies hulle, en in {{ui:Eienskappe}} › {{ui:Primêre eenhede}} kies {{ui:Eenhede in die teks}}.

Of tik {{cmd:DIMTEXTUNIT}} (`DTU`) en antwoord `D`, `MM`, `CM`, `M` of `KM`: met mate gekies verander dit hulle (een ontdoen-stap), met niks gekies nie stel dit nuwe mate.

{{ui:Desimale}} ({{cmd:DIMDEC}}) stel steeds hoeveel desimale plekke wys: met meter en 3 desimale lees 1234 mm `1.234 m`. Die teks word as 'n desimale getal geskryf. Op 'n blad meet mate in die blad se papiereenheid (millimeter of duim).

'n Gestoorde DWG of DXF hou die keuse as die maat se meetskaal (DIMLFAC) en 'n agtervoegsel (DIMPOST, ` m`), sodat ander programme dieselfde teks wys. As jy later die tekening se {{ui:Eenhede}} verander, word mate wat in mm, cm, m of km geskryf is, herpas, sodat hulle steeds die regte lengte sê. {{ui:Self ingestel (skaal of agtervoegsel)}} beteken die maat se {{ui:Meetskaal}} of agtervoegsel is op 'n ander manier gestel; kies 'n eenheid om hulle te vervang.

## Verander mate wat jy reeds gemaak het

1. Klik een maat. Die regterpaneel se opskrif lees {{ui:Maat}}.
2. Die instellings is in afdelings; rol af in die paneel om die latere te bereik:
   - {{ui:Algemeen}}: {{ui:Maatstyl}}
   - {{ui:Geometrie}}: {{ui:Soort}} en {{ui:Meting}} (slegs lees)
   - {{ui:Teks}}: {{ui:Teksoorskrywing}} en {{ui:Teksthoogte}}
   - {{ui:Lyne en pyle}}: {{ui:Pylgrootte}}
   - {{ui:Passing}}: {{ui:Algemene skaal}}
   - {{ui:Primêre eenhede}}: {{ui:Desimale}}
3. Tik 'n nuwe waarde en druk {{key:Enter}}.

Die maat teken dadelik weer. Vir hoekmate stel {{ui:Desimale (°)}} die desimale van die hoek.

:::note
Met verskeie mate gekies, wys die paneel die rye wat hulle deel, en 'n waarde wat tussen hulle verskil, lees {{ui:Wissel}}. 'n Waarde wat jy tik, verander elke gekose maat in een stap, so een {{key:Mod+Z}} sit hulle almal terug.
:::

## Mate uit oop tekeninge

'n Maat uit 'n oop DWG of DXF word presies gewys soos die ander program dit geteken het. Die paneel sê "Gewys soos die program wat dit gemaak het, dit geteken het. Verander dit en CadCraft teken dit weer in sy eie styl." Sodra jy enige waarde verander, 'n greep skuif, of die maat skuif, teken CadCraft dit weer met sy eie pyltjies en lettertipe, met die groottes wat dit uit die lêer gelees het.

Sommige mate kan net gelees word soos geteken, nie as wysigbare mate nie; die paneel wys dan "Geteken uit" en 'n bloknaam, en die blokkie "Oor hierdie lêer" tel hulle.

## Algemene foute

- **Verander van DIMSCALE het niks op die skerm verander nie.** Die instelling is vir nuwe mate. Kies bestaande mate en verander {{ui:Algemene skaal}} in die paneel.
- **Desimale wys minder syfers as gestel.** Naloopnulle val weg: 2 desimale wys `1250` en `1250.5`, nie `1250.00` nie.
- **Teks is die regte hoogte op papier in 'n viewport, maar verkeerd in 'n modelplot.** Die algemene skaal moet pas by die skaal waarop jy druk. Pas by papier gee 'n vreemde skaal; kies 'n standaardskaal in die druk-dialoog.
- **Eenhede soos mm of m in die teks.** Kies {{ui:Eenhede in die teks}} (sien [Mate in mm, cm, m of km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km)). Vir enige ander woord ná die getal, tik dit in 'n oorskrywing: `<> TYP.`.

## Benoemde maatstyle

Tik `DIMSTYLE` (`D`) om die {{ui:Maatstylbestuurder}} oop te maak. Dit lys die tekening se style, hoeveel mate elkeen gebruik, en watter een huidig is. **Standaard** is altyd daar.

- {{ui:Stel as huidig}}: nuwe mate gebruik daardie styl se instellings en dra sy naam.
- {{ui:Nuwe…}}: 'n nuwe styl wat as 'n kopie van een wat jy kies begin.
- {{ui:Wysig…}}: dieselfde velde as die maatafdeling van {{ui:Eienskappe}} (lyne en pyle, teks, passing, eenhede, alternatiewe eenhede, toleransies). Druk {{ui:OK}} en die styl verander **en elke maat wat dit gebruik, verander saam daarmee**, instelling vir instelling. 'n Instelling wat jy op een maat alleen verander het, bly soos dit is, tensy die styl daardie instelling verander.
- {{ui:Hernoem…}} en {{ui:Skrap}}: Standaard kan nie hernoem of geskrap word nie, en ook nie die huidige styl of een wat mate gebruik nie.
- {{ui:Vergelyk…}}: wat tussen twee style verskil.
- {{ui:Pas op gekose toe}}: kies eers mate; hulle neem die styl se instellings en sy naam.

`-DIMSTYLE` doen dieselfde op die opdragreël: `[Herstel (R)]`, Stoor (S) (die huidige instellings, insluitend wat jy met {{cmd:DIMTXT}} en die ander getik het, onder 'n naam), `[Skrap (D)]`, `[Pas toe (A)]`, `[Vergelyk (C)]`, `[Hernoem (N)]`, `[Lys (L)]`.

Die styles word in 'n DWG of DXF gestoor (sy maatstyltabel) en gelees uit die lêers wat jy oopmaak. Die *huidige* styl word nie gestoor nie: 'n tekening maak oop met Standaard huidig. Standaard hou sy eie instellings terwyl 'n ander styl huidig is.

## Verander maatteks en verlengingslyne

{{cmd:DIMEDIT}} (`DED`) werk op die mate wat jy kies: [Tuis (H)] plaas die teks terug waar die styl dit plaas, [Nuut (N)] tik ander teks (`<>` staan vir die meting), [Draai (R)] draai die teks, [Skuins (O)] skuins die verlengingslyne van lineêre en belynde mate na 'n hoek wat jy tik (druk {{key:Enter}} vir geen). {{cmd:DIMTEDIT}} skuif die teks na die [Links (L)], [Regs (R)] of [Middel (C)] van die maatlyn, of draai dit ([Hoek (A)]), of stuur dit [Tuis (H)]. Die teks staan altyd op die maatlyn: dit kan nie na 'n vrye plek gesleep word nie.
