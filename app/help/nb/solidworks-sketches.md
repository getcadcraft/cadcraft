---
title: Flytt skisser til og fra andre delmodelleringsprogrammer
summary: Skriv en makro som bygger tegningen på nytt som én betinget skisse i et delmodelleringsprogram, og åpne en skisse eksportert fra et slikt program.
keywords: skisse, makro, swb, vba, eksport, delmodellerer, globale variabler, ligninger, relasjoner, cadcraft-sw-export, swbout
from: 3071ddd8
---

:::warning
SolidWorks er ikke tilgjengelig der CadCraft bygges, så ingen av retningene er testet i SolidWorks ennå. Det CadCraft skriver, er bare kontrollert for struktur. Resultatet må kontrolleres før det tas i bruk.
:::

## Send en tegning som skisse

1. Sett betingelser og mål på tegningen (se [Sett betingelser på en tegning](topic:constraints)).
2. I gruppen {{ui:Parametrisk}}, åpne {{ui:Mer}} og velg {{ui:Makro for SolidWorks (.swb)}}, eller skriv {{cmd:SWBOUT}}.

   En fil som har navn etter tegningen og slutter på `.swb`, lastes ned.
3. I SolidWorks, velg **Tools > Macro > Run** og velg den filen.

Makroen lager en ny del fra standard delmal, åpner en skisse på Front Plane og tegner modellens linjer, sirkler, buer, punkter og polylinjer i den, med:

- betingelsene som skisserelasjoner,
- målbetingelser som mål med samme navn (`d1@Sketch1`),
- egne parametere som globale variabler,
- hvert uttrykk som en ligning.

Delen bruker tegningens lengdeenhet. Tekst, blokker, skravurer, mål og ark er ikke med i skissen; historikken viser hva som ble utelatt. Uttrykk uten ligningsform der (`if`, `min`, `max`, `round`, `%` og noen andre) skrives som gjeldende verdi, og historikken sier hvilke. Alt makroen ikke kan lage, skrives til en loggfil ved siden av makroen, og en melding oppsummerer til slutt.

## Åpne en skisse fra en del

1. I SolidWorks kjøres CadCraft-eksportmakroen (last den ned i PartCraft-appen: File > Export > Export macro to bring parts back) på delen. Den skriver en `.json`-fil i formatet `cadcraft-sw-export` ved siden av delen.
2. I CadCraft, velg {{ui:Åpne}} og velg den `.json`-filen.
3. Hvis delen har flere skisser, velg én.

Skissen blir til tegningen, i millimeter: linjene, buene, sirklene og punktene, relasjonene som betingelser, målene som målbetingelser med samme navn som før (`D1`, `D2` …), de globale variablene som parametere, og ligningene på målene som uttrykk. Historikken viser hva som ikke ble overført, for eksempel relasjoner CadCraft ikke har. Hvor skissen står i delen, beholdes ikke: den tegnes flatt, slik den ser ut på sitt plan.
