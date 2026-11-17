---
title: Vælg objekter
summary: Vælg objekter ét ad gangen, med et vindue eller et kryds, før eller under en kommando, og fjern objekter fra et valg igen.
keywords: vælg, valg, vindue, kryds, substantiv-verbum, vælg, alle, sidste, forrige, hegn, fjern, tilføj, tab, cyklus, overlappende, qselect, hurtigvalg, filter, vælg lignende, selectsimilar, shift, fravælg, ctrl+a, pickfirst
from: 676508c7
---

## Hvad du lærer

Sådan vælger du de objekter, en kommando arbejder på. CadCraft har to måder at arbejde på, og begge er gode:

- **Vælg først, og så kommandoen** (substantiv-verbum). Vælg objekter, og skriv derefter `M` for Flyt. Kommandoen tager dit valg og går direkte videre til sit næste spørgsmål.
- **Kommando først, og så vælg** (verbum-substantiv). Skriv `M`; kommandoen spørger `Select objects:`; du vælger, og trykker derefter {{key:Enter}}.

## Vælg ét objekt ad gangen

1. Uden en kørende kommando klikker du på en linje. Den fremhæves, og dens greb (små firkanter) vises. Den højre panel viser dens egenskaber.
2. Klik på et andet objekt. Det føjes til valget.
3. Hold {{key:Shift}} nede, og klik på et valgt objekt. Det fjernes fra valget.
4. Tryk {{key:Esc}}. Intet er valgt.

## Vindue og kryds

Klik én gang på tomt område, flyt musen, og klik igen: så tegnes et rektangel. Tryk og træk tegner i stedet et frihåndslasso, med de samme to slags (se [Lassovalg](topic:lasso-selection); Indstillinger kan få et træk til at tegne rektanglet). Hvilke objekter du får, afhænger af retningen:

| Du bevæger | Boks | Vælger |
|---|---|---|
| Fra venstre mod højre | Vindue | Kun objekter, der er **helt inde** i boksen |
| Fra højre mod venstre | Kryds | Objekter inde i boksen **og** objekter, den rører |

1. Tegn nogle overlappende linjer og cirkler.
2. Klik på tomt område til venstre for nogle objekter, flyt til højre, og klik igen. Kun de objekter, der er helt inde, vælges.
3. Tryk {{key:Esc}}.
4. Klik på tomt område til højre, flyt til venstre hen over nogle objekter, og klik igen. Alt, boksen rører, vælges.
5. Hold {{key:Shift}} nede, og tegn en boks eller et lasso over nogle valgte objekter. De fjernes fra valget.

## Vælg, og kør derefter en kommando

1. Vælg to cirkler.
2. Skriv `M`, og tryk {{key:Enter}}.

Historikken siger `2 found`, og prompten går direkte til `Specify base point`. Afslut flytningen (se [Flyt, kopiér, roter, skalér og spejl](topic:modify-objects)).

Når en kommando slutter, ryddes valget, så den næste kommando starter forfra.

Kommandoer, der tager et valg på denne måde: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} og {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} og {{cmd:CHAMFER}} beder altid dig om at vælge objekter ét ad gangen i stedet; {{cmd:TRIM}} og {{cmd:EXTEND}} tager et klik eller en sti, du trækker hen over stykkerne (se [Beskær og forlæng](topic:trim-and-extend)).

## Kør en kommando, og vælg derefter

1. Sørg for, at intet er valgt ({{key:Esc}}).
2. Skriv `E`, og tryk {{key:Enter}}. Prompten lyder `Select objects:`.
3. Klik på objekter, eller træk vinduer og kryds. Historikken tæller hvert valg (`1 found`, `3 found`).
4. Tryk {{key:Enter}}, tryk {{key:Space}}, eller højreklik for at afslutte valget.

Objekterne slettes, og historikken siger, hvor mange.

Ved en `Select objects:`-prompt kan du også skrive:

- `ALL`, og derefter {{key:Enter}}: alle objekter, du kan redigere, på den åbne fane.
- `L` (eller `LAST`), og derefter {{key:Enter}}: det senest tegnede objekt.
- `P` (Previous): de objekter, den sidste kommando arbejdede på, hvis de stadig er der. Forrige (`P`).
- `F` (Fence): klik eller skriv punkter langs en linje; hvert objekt, linjen krydser, føjes til. Tryk {{key:Enter}} for at afslutte hegnet; `U` tager dets sidste punkt tilbage.
- `W` (Window) eller `C` (Crossing): to hjørner, uanset hvilken vej du trækker.
- `R` (Remove): fra nu af fjerner klik, vinduer og hegn objekter. Prompten lyder `Remove objects:`. `A` (Add) skifter tilbage.
- `?`: listen over disse i historikken.

Disse valgmuligheder vises ikke i prompten, ligesom i AutoCAD.

## Vælg ét af flere objekter oven på hinanden

Hvor objekter overlapper eller rører hinanden, tager et klik det nærmeste. For at få et andet:

1. Hold markøren stille over stedet.
2. Tryk {{key:Tab}}. Det næste objekt der fremhæves, og statuslinjen siger, hvilket det er ("2 of 3: Line on layer Walls").
3. Tryk {{key:Tab}} igen, indtil det du vil have er fremhævet, og klik uden at flytte.

Når du flytter markøren, starter det forfra. Det virker uden en kørende kommando, ved `Select objects:` og hvor som helst en kommando beder dig vælge ét objekt.

## Vælg efter en regel: Hurtigvalg

{{cmd:QSELECT}} (`QS`, eller {{ui:Redigér}} › {{ui:Mere}} › {{ui:Hurtigvalg}}) vælger alle objekter, der matcher en regel, for eksempel alle cirkler med en radius under 50, eller alle blokreferencer med navnet DOOR-900.

1. Åbn {{ui:Hurtigvalg}}.
2. Vælg {{ui:Objekttype}} (listen tæller hver type), og derefter {{ui:Egenskab}}: {{ui:Lag}}, {{ui:Farve}}, og for nogle typer {{ui:Længde}}, {{ui:Radius}}, {{ui:Areal}}, {{ui:Teksthøjde}}, {{ui:Tekstindhold}}, {{ui:Blokkens navn}} eller {{ui:Skraveringsmønster}}.
3. Vælg {{ui:Operator}} og {{ui:Værdi}}. `*` matcher med jokertegn (`DOOR-*`); {{ui:Vælg alle}} tager alle objekter af typen. Tallet nederst viser, hvor mange der matcher, mens du vælger.
4. {{ui:Sådan anvendes det}}: medtag de matchende, eller alt andet. {{ui:Anvend på}} {{ui:Det aktuelle valg}} indsnævrer det, du havde valgt; {{ui:Føj til det aktuelle valg}} tilføjer til det.
5. Klik på {{ui:Vælg}}. Kør derefter den kommando, du vil have: den bruger valget.

## Vælg lignende

Vælg ét eller flere objekter, og skriv {{cmd:SELECTSIMILAR}} (`SIM`), eller vælg {{ui:Redigér}} › {{ui:Mere}} › {{ui:Vælg lignende}}. Alle objekter af samme type, på samme lag og med samme farve vælges; blokreferencer skal også have samme blok, og skravering samme mønster. Skriv `SE` ved dets `Select objects`-prompt for at vælge, hvad der skal matche.

## Vælg nu, brug senere

Skriv `SELECT`, og tryk {{key:Enter}}, vælg objekter med en af måderne ovenfor, og tryk {{key:Enter}}. De forbliver valgt til den næste kommando, og `P` vælger dem igen ved en senere `Select objects:`-prompt.

## Vælg alt

Uden en kørende kommando trykker du på {{key:Mod+A}}, eller vælger {{ui:Vælg alle}} i værktøjslinjens {{ui:Redigér}} › {{ui:Mere}}-menu, for at vælge alle objekter, du kan redigere, på den åbne fane. Har du skrevet noget på kommandolinjen, vælger {{key:Mod+A}} i stedet den tekst: tryk {{key:Esc}} for at rydde den først. Ved en `Select objects:`-prompt skriver du `ALL`. {{ui:Fravælg alle}} i samme menu, eller {{key:Esc}}, fravælger.

:::tip
Hvis du hellere vil have, at hvert klik erstatter valget (og {{key:Shift}} føjer til det), så sæt {{ui:Klik på objekter}} til {{ui:Erstatter valget}} i [CadCraft-indstillinger](topic:settings).
:::

## Hvad der ikke kan vælges

- Objekter på et lag, der er **slukket**, **frosset** eller **låst**. Låste objekter forbliver synlige, og du kan stadig fange til dem, men du kan ikke vælge eller ændre dem.
- På en arkfane: modellen vist inde i en viewport. Du vælger arkets egne objekter (tegningshovedet, noter, viewport-rammerne). For at redigere modellen går du til fanen {{ui:Model}}.

## Slet hurtigt

Vælg objekter, og tryk {{key:Delete}} (eller {{key:Backspace}}, når kommandolinjen ikke har markøren). På et Mac-tastatur virker tasten mærket delete, når du har klikket i tegningen; når kommandolinjen har markøren, trykker du fn og delete sammen. Dette kører {{cmd:ERASE}} på valget. Hvis intet sker, har du skrevet noget på kommandolinjen: tryk {{key:Esc}}, eller skriv `E`, og tryk {{key:Enter}} i stedet.

## Almindelige fejl

- **Vinduet tog for lidt.** Du trak fra venstre mod højre, som kun tager det, der er helt inde. Træk fra højre mod venstre for et kryds.
- **Et klik på tomt område startede en boks.** Et klik på tomt område starter et vindue; det andet klik afslutter det. Tryk {{key:Esc}}, eller højreklik for at opgive det.
- **Et klik på tomt område slap valget.** Det gør det, medmindre du holder {{key:Shift}} nede. For at beholde valget ved et sådant klik og kun rydde det med {{key:Esc}}, sæt {{ui:Klik på et tomt sted}} til {{ui:Beholder valget}} i [CadCraft-indstillinger](topic:settings#clicking-an-empty-spot).
- **Kommandoen brugte objekter, du ikke mente.** Noget var stadig valgt, da du startede den. Tryk {{key:Esc}}, før en kommando, så du starter uden valg.
- **Intet er valgt efter en kommando.** Det er med vilje: en afsluttet kommando rydder valget.
