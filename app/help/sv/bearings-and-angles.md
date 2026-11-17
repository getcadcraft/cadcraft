---
title: Skriv och visa riktningar och vinklar i grader, minuter och sekunder
summary: Skriv en riktning som en lantmätares riktningsvinkel, till exempel N45°23'30"E, eller som grader-minuter-sekunder där en vinkel efterfrågas, och välj hur ritningen visar vinklar med AUNITS.
keywords: riktningsvinkel, riktning, lantmätare, kvadrantriktning, N45E, grader minuter sekunder, DMS, vinkel, väderstreck, tomt, tomter, utsätta, polygontåg, AUNITS, ANGUNITS, vinkelformat, polär, direkt avstånd, DIST
from: af805567
---

Var CadCraft än frågar efter en **vinkel eller en riktning** kan du skriva en **kvadrantriktning** eller en vinkel i **grader, minuter och sekunder**, samt ett vanligt antal grader.

## Riktningsvinklar

En riktningsvinkel anger norr eller söder, en vinkel upp till 90°, och sedan öster eller väster:

| Du skriver | Riktning |
|---|---|
| `N45°23'30"E` eller `N45d23'30"E` | 45°23'30" från norr mot öster |
| `S10-30-00W` eller `S 10 30 W` | 10°30' från söder mot väster (bindestreck eller mellanslag mellan delarna) |
| `N45.5E` | 45,5° från norr mot öster |
| `N`, `E`, `S`, `W` | rakt norr, öster, söder, väster |

Bokstäverna kan vara i vilken skrivstil som helst. På spanska betyder `O` också väster (oeste). `d` och `°` betyder samma sak. `'` är minuter och `"` är sekunder.

För att lägga ut en tomtgräns 20 m lång i N45°23'E, starta {{cmd:LINE}} och skriv första punkten, och skriv sedan `@20<N45d23'E`. Detta fungerar även vid vinkelfrågan för {{cmd:ROTATE}}, vid alla andra frågor efter en vinkel, och i vinkelrutan under {{ui:Dynamisk inmatning}}.

## Grader, minuter, sekunder

`45°23'30"`, `45d23'30"`, `45d30'` eller `45d` är en vinkel från X-axeln, moturs. `°` eller `d` behövs: `45-23-30` läses som räkning (45 − 23 − 30). Minuter och sekunder måste vara under 60. Ett vanligt tal, även med räknesätt (`360/7`), fungerar fortfarande.

## Hur vinklar visas

Skriv {{cmd:AUNITS}} (eller välj {{ui:Vinkelformat}} i {{ui:Egenskaper}} › {{ui:Aktuella inställningar}}) och välj:

- **Decimalgrader** (standard): `44.6083°`.
- **Grader, minuter, sekunder**: `44°36'30"`.
- **Riktningsvinklar (lantmätare)**: `N45°23'30"E`.

Precisionen följer vad du skriver för {{cmd:AUNITS}}: 0 visar grader, 2 minuter, 4 sekunder, och 5 till 8 lägger till decimaler av sekunder. Formatet visas i {{cmd:DIST}}, i statusfältet, i den dynamiska inmatningen och i tips vid spårning, samt i vinkelrutorna under {{ui:Egenskaper}} (en ruta du redigerar tar emot alla former ovan). Det är ett ångra-steg och sparas i DWG- och DXF-filer (`$AUNITS`, `$AUPREC`). LISP läser och skriver det som `AUNITS` och `AUPREC`.
