---
title: Mål en plan
summary: Legg til lineære, innrettede, vinkel-, radius- og diametermål, kjed dem sammen med Fortsett og Grunnlinje, og overstyr teksten.
keywords: mål, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, kjede, rekke, annoter, målverktøy, hvor, finn, verktøylinje, måle, mm, cm, m, km, enheter
from: 9ee65123
---

## Hva du lager

Et målsatt rom: total bredde og høyde, en rekke mål langs én vegg, en skrå vegg, et buet hjørne og en vinkel.

Før du starter, les [Angi målstørrelser](topic:dimension-settings) hvis tegningen din er stor: måltekst er 2.5 tegningsenheter høy som standard, noe som er svært lite i en tegning målt i millimeter. For trinnene under, skriv `DIMSCALE`, trykk {{key:Enter}}, skriv `50` og trykk {{key:Enter}} først.

## Hvor måleverktøyene er

Med CadCraft-menystilen (den CadCraft starter med) er måleverktøyene i verktøylinjen over tegningen, i gruppen {{ui:Merk}}: {{ui:Lineært}}, {{ui:Innrettet}}, {{ui:Vinkel}}, {{ui:Radius}} og {{ui:Diameter}}. Gruppens {{ui:Mer}}-meny har {{ui:Fortsett måltilsetting}} og {{ui:Grunnlinjemål}}. Hold pekeren over en knapp for å se hva den gjør.

- Med {{ui:Klassisk tegning}}- eller {{ui:Bånd}}-menystilen åpner du fanen {{ui:Merk}}: verktøyene er i panelet {{ui:Måltilsetting}}. {{ui:Klassisk tegning}} har også {{ui:Lineært}} på fanen {{ui:Hjem}}, under {{ui:Merknad}}. Se [Menyer, taster og mus](topic:menus-keys-and-mouse).
- Eller skriv kommandoen på kommandolinjen under tegningen og trykk {{key:Enter}}: `DLI` (lineær), `DAL` (innrettet), `DAN` (vinkel), `DRA` (radius), `DDI` (diameter), `DCO` (fortsett), `DBA` (grunnlinje).
- På en smal skjerm er verktøylinjen én rad: sveip den til siden for å nå {{ui:Merk}}.

For å vise lengder i millimeter, centimeter, meter eller kilometer, se [Mål i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Tegn noe å måle

1. Skriv `PL` og trykk {{key:Enter}}.
2. Skriv `0,0` og trykk {{key:Enter}}.
3. Skriv `@6000,0` og trykk {{key:Enter}}.
4. Skriv `@1500<60` og trykk {{key:Enter}}.
5. Skriv `@0,2700` og trykk {{key:Enter}}.
6. Skriv `@-6750,0` og trykk {{key:Enter}}.
7. Skriv `C` og trykk {{key:Enter}}. Konturen lukkes.
8. Skriv `C` og trykk {{key:Enter}} for å starte en sirkel.
9. Klikk inne i rommet, vekk fra veggene, for senteret.
10. Skriv `600` og trykk {{key:Enter}}. Dette er en søyle.
11. Klikk {{ui:Utstrekning}}.

## Lineært: vannrett eller loddrett

1. Skriv `DLI` og trykk {{key:Enter}}.
2. Ved `Specify first extension line origin`, snap til nedre venstre hjørne (Endepunkt) og klikk.
3. Ved `Specify second extension line origin`, snap til nedre høyre hjørne og klikk.
4. Flytt krysset under rommet. Målet følger, vannrett.
5. Klikk for å plassere målelinjen.

Historikken sier `Dimension text = 6000`.

Hvor du plasserer linjen, avgjør retningen: under eller over gir et vannrett mål, til venstre eller høyre gir et loddrett. For å tvinge det, skriv `H` (vannrett), `V` (loddrett) eller `R` (rotert, deretter en vinkel) før du plasserer det.

:::tip
Trykk {{key:Enter}} ved første ledetekst i stedet for å velge et punkt, og klikk deretter en linje, bue, sirkel eller polylinjesegment. CadCraft tar begge endene for deg.
:::

## Fortsett: en rekke mål

{{cmd:DIMCONTINUE}} ({{ui:Merk}} › {{ui:Mer}} › {{ui:Fortsett måltilsetting}}, eller `DCO`) fortsetter fra det siste lineære eller innrettede målet du laget, og hvert nye mål starter der det forrige endte.

1. Skriv `DLI` og trykk {{key:Enter}}.
2. Skriv `0,0` og trykk {{key:Enter}} for det første origoet.
3. Skriv `2000,0` og trykk {{key:Enter}} for det andre origoet.
4. Klikk under rommet for å plassere det.
5. Skriv `DCO` og trykk {{key:Enter}}.
6. Skriv `4500,0` og trykk {{key:Enter}}. Et andre mål følger på fra det første, på samme linje.
7. Snap til nedre høyre hjørne og klikk. Et tredje fullfører rekken.
8. Trykk {{key:Enter}} for å avslutte kommandoen.

:::note
Her er punktene skrevet som absolutte koordinater med vilje. Et `@`-punkt teller fra det siste punktet du ga, og det siste punktet er der du plasserte forrige målelinje, ikke målets ende. Absolutte punkter, fang eller en bar avstand med {{ui:Ortho}} på er tryggere i en målrekke.
:::

Skriv `U` og trykk {{key:Enter}} for å ta tilbake siste mål i rekken uten å forlate kommandoen.

## Grunnlinje: mål stablet fra én linje

{{cmd:DIMBASELINE}} ({{ui:Merk}} › {{ui:Mer}} › {{ui:Grunnlinjemål}}, eller `DBA`) måler hvert nye mål fra det første origoet til det siste, og stabler hvert ett et steg lenger ut.

1. Skriv `DLI` og trykk {{key:Enter}}.
2. Snap til nedre venstre hjørne og klikk.
3. Snap til øvre venstre hjørne og klikk.
4. Flytt krysset til venstre for rommet og klikk. Et loddrett mål vises.
5. Skriv `DBA` og trykk {{key:Enter}}.
6. Snap til den øvre enden av 60-graders-veggen (Endepunkt) og klikk. Et andre loddrett mål vises, ett steg lenger ut enn det første.
7. Trykk {{key:Enter}} for å avslutte.

## Innrettet: sann lengde på en skrå linje

1. Skriv `DAL` og trykk {{key:Enter}}.
2. Trykk {{key:Enter}} for å velge et objekt.
3. Klikk 60-graders-veggen.
4. Flytt utover og klikk for å plassere.

Teksten leser 1500: den sanne lengden, målt langs veggen.

## Radius og diameter

1. Skriv `DRA` og trykk {{key:Enter}}.
2. Klikk søylesirkelen.
3. Flytt krysset. Hjelpelinjen peker fra senteret mot krysset.
4. Klikk for å plassere teksten.

Teksten leser `R600`. {{cmd:DIMDIAMETER}} (`DDI`) gjør det samme med et ⌀-tegn og diameteren.

## Vinkel

Veggene her er én polylinje, så mål hjørnet via toppunktet. (Mellom to separate linjer kan du klikke linjene i stedet.)

1. Skriv `DAN` og trykk {{key:Enter}}.
2. Ved `Select arc, circle or line, or Enter for a vertex`, trykk {{key:Enter}}.
3. Ved `Specify angle vertex`, snap til nedre høyre hjørne og klikk.
4. Ved `Specify first angle endpoint`, snap til nedre venstre hjørne og klikk.
5. Ved `Specify second angle endpoint`, snap til øvre ende av 60-graders-veggen og klikk.
6. Flytt krysset inne i rommet, nær hjørnet, og klikk.

Teksten leser `120°`, den innvendige vinkelen i hjørnet. Plasserer du det på den andre siden av hjørnet, måler målet vinkelen på den siden i stedet. Klikk en bue ved første ledetekst for å måle vinkelen den spenner, eller klikk to linjer for å måle vinkelen mellom dem.

## Endre teksten

For å skrive egen tekst, skriv `T` og trykk {{key:Enter}} før du plasserer målet, og skriv deretter teksten. I teksten står `<>` for den målte verdien: `<> TYP.` gir `6000 TYP.`. Trykk {{key:Enter}} på en tom linje for å beholde den målte verdien.

For å endre et eksisterende mål:

1. Klikk på det.
2. I høyre panel skriver du i {{ui:Tekst}}. La den stå tom for den målte verdien.
3. Trykk {{key:Enter}}.

## Mål følger geometrien

Et mål husker sine punkter. Dra ett av håndtakene, eller flytt, roter eller skaler det sammen med objektene det måler, og det måler på nytt. Hvis du strekker geometrien uten å flytte målet, følger ikke målet med: det beholder sine egne punkter.

## Vanlige feil

- **Teksten og pilene er mikroskopiske eller enorme.** Sett den samlede skalaen: se [Angi målstørrelser](topic:dimension-settings).
- **«Pick a point inside the angle you want to measure.»** Punktet du klikket for et vinkelmål ligger på ett av beinene. Flytt det inn i vinkelen.
- **Fortsett startet fra feil mål.** Den fortsetter alltid fra det siste lineære eller innrettede målet laget i denne økten. Lag (eller lag på nytt) det du skal fortsette fra, først.
- **Målet ble vertikalt.** Du plasserte det til siden. Skriv `H` før du plasserer det.
- **Fot og tommer.** Sett tegningens lengdeformat til {{ui:Arkitekt}} først, eller et måls {{ui:Format}} i {{ui:Egenskaper}}: se [Fot og tommer i mål](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Tallene er ikke i enheten du vil ha.** Velg {{ui:Enheter i teksten}}: se [Mål i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
