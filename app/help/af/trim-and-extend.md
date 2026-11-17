---
title: Sny en verleng
summary: Sny lyne terug waar ander daaroor kruis en verleng hulle om ander te ontmoet, een stuk op 'n slag of baie tegelyk deur 'n pad deur hulle te sleep.
keywords: trimextendmode, vensterslepe, sny, verleng, tr, ex, vinnige sny, sleep, vryhand, pad, heining, kruising, shift, snyrande, grensrande, edgemode, modus, standaard, vinnig, vee uit, voorskou, mure, opruiming
from: 25fbc5bd
---

## Wat jy sal leer

Hoe {{cmd:TRIM}} en {{cmd:EXTEND}} werk, en die vinnige maniere om hulle te gebruik: sleep deur baie stukke op 'n slag, hou {{key:Shift}} vas om tussen sny en verleng te wissel, en sien wat sal verdwyn voordat jy klik.

## Sny een stuk

1. Teken 'n lang horisontale lyn en twee kort lyne daaroor.
2. Tik `TR` en druk {{key:Enter}}. Die geskiedenis sê `Huidige instellings: Vinnige modus, rande: Nie verleng nie`.
3. Rus die aanwyser op die lang lyn tussen die twee kort. Daardie stuk word grys en gestippel: dit is wat gaan verdwyn.
4. Klik. Die stuk verdwyn.
5. Druk {{key:Enter}} om die opdrag te beëindig.

In Vinnige modus (die standaard) is elke sigbare voorwerp 'n snyrand, so jy kies nooit eers rande nie. Klik die stuk wat jy weg wil hê. 'n Voorwerp waarna niks kruis nie, word heeltemal uitgevee, en die geskiedenis sê so.

## Sny baie stukke in een sleep

1. Teken 'n lang horisontale lyn en tien kort vertikale lyne daaroor.
2. Tik `TR` en druk {{key:Enter}}.
3. Druk die muisknoppie bo die lang lyn, links van die eerste vertikale lyn, en sleep oor al tien bo die lang lyn.

Terwyl jy sleep, wys die pad as 'n gestippelde lyn, en elke stuk waaroor dit gekruis het, word grys. Laat los: al tien boonste stukke is in een stap gesny. Tik `U` en druk {{key:Enter}} om hulle almal terug te sit op een slag.

:::tip
Jy kan ook twee leë plekke klik: die lyn tussen hulle werk soos 'n gesleepte pad. Tik `F` (Heining) om eerder 'n reeks punte te klik, en druk dan {{key:Enter}}.
:::

:::touch
Sleep 'n vinger op dieselfde manier. 'n Tik op 'n stuk sny dit.
:::

## Verleng eerder, met Shift

1. Teken 'n vertikale lyn, en vyf kort horisontale lyne links daarvan wat voor dit stop.
2. Tik `TR` en druk {{key:Enter}}.
3. Hou {{key:Shift}} vas. Rus die aanwyser op 'n kort lyn: die deel waarmee dit sou groei, wys grys en gestippel.
4. Hou steeds {{key:Shift}} vas en sleep af deur die vyf kort lyne.

Al vyf loop nou na die vertikale lyn. {{key:Shift}} werk andersom in {{cmd:EXTEND}} (`EX`): 'n klik verleng, 'n {{key:Shift}}+klik sny. Verleng maak die einde langer wat die naaste is aan waar jy klik of waar die pad kruis.

## Sny binne 'n venster

1. Tik `TR` en druk {{key:Enter}}.
2. Tik `C` en druk {{key:Enter}}.
3. Klik twee hoeke rondom die stukke wat verwyder moet word.

Elke stuk wat ten minste gedeeltelik binne die venster lê, word gesny.

Om 'n venster net deur te sleep te kry, sonder om `C` te tik: {{ui:Instellings}} › {{ui:CadCraft}} › {{ui:Sleep om te sny en te verleng}} ›
{{ui:'n Venster}}. Druk dan op 'n leë plek en sleep: 'n boksie word geteken, en elke stuk wat dit raak, word gesny (of verleng,
in {{cmd:EXTEND}}, of met {{key:Shift}}). {{ui:'n Pad}} (die begin) bring die vryhand pad terug. Die instellingslyn aan die
begin van TRIM sê watter een aan is.

## Kies die snyrande (Standaardmodus)

Soms moet net een lyn sny, soos 'n muurvlak met baie ander lyne wat daaroor kruis.

1. Tik `TR` en druk {{key:Enter}}.
2. Tik `O` (mOdus) en druk {{key:Enter}}, en tik dan `S` (Standaard) en druk {{key:Enter}}.
3. By `Kies snyrande`, klik die randlyne (of sleep 'n venster), en druk dan {{key:Enter}}. Om {{key:Enter}} te druk met niks gekies nie, maak elke voorwerp 'n rand.
4. Klik of sleep deur die stukke wat verwyder moet word.

Slegs die gekose rande sny, en 'n voorwerp waarna geen rand kruis nie, word met rus gelaat. Die modus bly tot jy die bladsy toemaak; tik `O`, dan `Q` om terug te gaan na Vinnig. {{cmd:TRIMEXTENDMODE}} stel dit voor jy begin, soos die veranderlike van daardie naam elders: `0` Standaard, `1` Vinnig. `T` (snyrande) kies nuwe rande op enige tyd; in {{cmd:EXTEND}} is dit `B` (Grensrande).

## Rande wat sal bereik

1. Tik `TR` en druk {{key:Enter}}.
2. Tik `E` (Rand) en druk {{key:Enter}}, en dan `E` (Verleng) en druk {{key:Enter}}.

Nou tel 'n snylyn of boog wat kort stop as of dit sou voortgaan: 'n kort lyn sny waar dit sou kruis as dit langer was. Tik `E`, dan `N` (Nie verleng nie) om terug te skakel. Dit is dieselfde as EDGEMODE 1 en 0.

## Vee uit sonder om te verlaat

Tik `R` (uitvee) en druk {{key:Enter}}, kies die voorwerpe om uit te vee, en druk {{key:Enter}}. TRIM gaan voort.

## Algemene foute

- **'n Hele lyn het verdwyn.** In Vinnige modus word 'n voorwerp waarna niks kruis nie, uitgevee. Tik `U` om dit terug te sit, of skakel na Standaardmodus (`O`, `S`).
- **"Niks om daar te sny nie: geen gekose rand kruis daardie voorwerp nie."** Standaardmodus sny net by die rande wat jy gekies het. Tik `T` om hulle weer te kies.
- **"Geen grens in daardie rigting nie."** Verleng het niks voor gevind nie. Klik nader aan die einde wat moet groei, of skakel `E` (Rand, Verleng) aan vir grense wat kort stop.
- **Die sleep het eerder 'n lasso geteken.** 'n Sleep sny net terwyl TRIM of EXTEND 'n voorwerp vra. Sonder 'n opdrag wat loop, kies 'n sleep (sien [Lasso-keuse](topic:lasso-selection)).
- **Net lyne, bôë, sirkels en veelylyne kan gesny word.** Ontbind 'n blok eers om sy lyne te kan sny.
