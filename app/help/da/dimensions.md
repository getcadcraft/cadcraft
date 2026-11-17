---
title: "Målsæt en plan"
summary: "Tilføj lineære, justerede, vinkel-, radius- og diametermålsætninger, kæd dem med Fortsat målsætning og Basislinjemålsætning, og overskriv teksten."
keywords: målsætning, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, kæde, streng, notér, målsætningsværktøj, hvor, find, værktøjslinje, mål, mm, cm, m, km, enheder
from: 9ee65123
---

## Hvad du laver

Et målsat rum: samlet bredde og højde, en række målsætninger langs en væg, en skrå væg, et buet hjørne og en vinkel.

Før du starter, læs [Angiv målsætningsstørrelser](topic:dimension-settings), hvis din tegning er stor: målsætningsteksten er som standard 2.5 tegningsenheder høj, hvilket er lille i en tegning målt i millimeter. Til trinene nedenfor skal du først skrive `DIMSCALE`, trykke {{key:Enter}}, skrive `50` og trykke {{key:Enter}}.

## Hvor målsætningsværktøjerne er

Med CadCraft-menustilen (den, CadCraft starter med) findes målsætningsværktøjerne i værktøjslinjen over tegningen, i gruppen {{ui:Notér}}: {{ui:Lineær}}, {{ui:Justeret}}, {{ui:Vinkel}}, {{ui:Radius}} og {{ui:Diameter}}. Gruppens menu {{ui:Mere}} har {{ui:Fortsat målsætning}} og {{ui:Basislinjemålsætning}}. Hold markøren over en knap for at se, hvad den gør.

- Med menustilen {{ui:Klassisk tegning}} eller {{ui:Bånd}} åbner du fanen {{ui:Notér}}: værktøjerne findes i dens panel {{ui:Målsætninger}}. {{ui:Klassisk tegning}} har også {{ui:Lineær}} på fanen {{ui:Hjem}}, under {{ui:Notering}}. Se [Menuer, taster og mus](topic:menus-keys-and-mouse).
- Eller skriv kommandoen på kommandolinjen under tegningen og tryk {{key:Enter}}: `DLI` (lineær), `DAL` (justeret), `DAN` (vinkel), `DRA` (radius), `DDI` (diameter), `DCO` (fortsat), `DBA` (basislinje).
- På en smal skærm er værktøjslinjen én række: stryg den sidelæns for at nå {{ui:Notér}}.

For at vise længder i millimeter, centimeter, meter eller kilometer, se [Målsætninger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Tegn noget at målsætte

1. Skriv `PL` og tryk {{key:Enter}}.
2. Skriv `0,0` og tryk {{key:Enter}}.
3. Skriv `@6000,0` og tryk {{key:Enter}}.
4. Skriv `@1500<60` og tryk {{key:Enter}}.
5. Skriv `@0,2700` og tryk {{key:Enter}}.
6. Skriv `@-6750,0` og tryk {{key:Enter}}.
7. Skriv `C` og tryk {{key:Enter}}. Konturen lukkes.
8. Skriv `C` og tryk {{key:Enter}} for at starte en cirkel.
9. Klik inde i rummet, væk fra væggene, for centrum.
10. Skriv `600` og tryk {{key:Enter}}. Det er en søjle.
11. Klik {{ui:Udstrækning}}.

## Lineær: vandret eller lodret

1. Skriv `DLI` og tryk {{key:Enter}}.
2. Ved `Specify first extension line origin` fanger du nederste venstre hjørne (endepunkt) og klikker.
3. Ved `Specify second extension line origin` fanger du nederste højre hjørne og klikker.
4. Flyt krydset under rummet. Målsætningen følger, vandret.
5. Klik for at placere målelinjen.

Historikken siger `Dimension text = 6000`.

Hvor du placerer linjen, afgør retningen: under eller over giver en vandret målsætning, til venstre eller højre giver en lodret. For at tvinge den skriver du `H` (vandret), `V` (lodret) eller `R` (roteret, og derefter en vinkel), før du placerer den.

:::tip
Tryk {{key:Enter}} ved første ledetekst i stedet for at vælge et punkt, og klik derefter på en linje, bue, cirkel eller et polylinjesegment. CadCraft tager begge ender for dig.
:::

## Fortsat: en række målsætninger

{{cmd:DIMCONTINUE}} ({{ui:Notér}} › {{ui:Mere}} › {{ui:Fortsat målsætning}}, eller `DCO`) fortsætter fra den sidste lineære eller justerede målsætning, du lavede; hver ny starter, hvor den forrige sluttede.

1. Skriv `DLI` og tryk {{key:Enter}}.
2. Skriv `0,0` og tryk {{key:Enter}} for det første udgangspunkt.
3. Skriv `2000,0` og tryk {{key:Enter}} for det andet udgangspunkt.
4. Klik under rummet for at placere den.
5. Skriv `DCO` og tryk {{key:Enter}}.
6. Skriv `4500,0` og tryk {{key:Enter}}. En anden målsætning følger efter den første, på samme linje.
7. Fang nederste højre hjørne og klik. En tredje fuldender rækken.
8. Tryk {{key:Enter}} for at afslutte kommandoen.

:::note
Her er punkterne skrevet som absolutte koordinater med vilje. Et `@`-punkt tæller fra det sidste punkt, du gav, og det sidste punkt er der, hvor du placerede den forrige målelinje, ikke målsætningens ende. Absolutte punkter, fang eller en direkte afstand med {{ui:Ortogonal}} slået til er tryggere i en målsætningsrække.
:::

Skriv `U` og tryk {{key:Enter}} for at tage den sidste målsætning i rækken tilbage uden at forlade kommandoen.

## Basislinje: målsætninger stablet fra én linje

{{cmd:DIMBASELINE}} ({{ui:Notér}} › {{ui:Mere}} › {{ui:Basislinjemålsætning}}, eller `DBA`) måler hver ny målsætning fra det første udgangspunkt af den sidste og stabler hver en tak længere ude.

1. Skriv `DLI` og tryk {{key:Enter}}.
2. Fang nederste venstre hjørne og klik.
3. Fang øverste venstre hjørne og klik.
4. Flyt krydset til venstre for rummet og klik. En lodret målsætning vises.
5. Skriv `DBA` og tryk {{key:Enter}}.
6. Fang øverste ende af den 60-graders væg (endepunkt) og klik. En anden lodret målsætning vises, et trin længere ude end den første.
7. Tryk {{key:Enter}} for at afslutte.

## Justeret: sand længde på en skrå linje

1. Skriv `DAL` og tryk {{key:Enter}}.
2. Tryk {{key:Enter}} for at vælge et objekt.
3. Klik på den 60-graders væg.
4. Flyt udad og klik for at placere.

Teksten siger 1500: den sande længde, målt langs væggen.

## Radius og diameter

1. Skriv `DRA` og tryk {{key:Enter}}.
2. Klik på søjlecirklen.
3. Flyt krydset. Lederen peger fra centrum mod krydset.
4. Klik for at placere teksten.

Teksten siger `R600`. {{cmd:DIMDIAMETER}} (`DDI`) gør det samme med et ⌀-tegn og diameteren.

## Vinkel

Væggene her er én polylinje, så du måler hjørnet ud fra dets toppunkt. (Mellem to adskilte linjer kan du i stedet klikke på linjerne.)

1. Skriv `DAN` og tryk {{key:Enter}}.
2. Ved `Select arc, circle or line, or Enter for a vertex` trykker du {{key:Enter}}.
3. Ved `Specify angle vertex` fanger du nederste højre hjørne og klikker.
4. Ved `Specify first angle endpoint` fanger du nederste venstre hjørne og klikker.
5. Ved `Specify second angle endpoint` fanger du øverste ende af den 60-graders væg og klikker.
6. Flyt krydset inde i rummet, nær hjørnet, og klik.

Teksten siger `120°`, hjørnets indvendige vinkel. Placeret på den anden side af hjørnet måler målsætningen i stedet vinklen på den side. Klik en bue ved første ledetekst for at målsætte den vinkel, buen spænder over, eller klik to linjer for at målsætte vinklen mellem dem.

## Ændr teksten

For at skrive din egen tekst skriver du `T` og trykker {{key:Enter}}, før du placerer målsætningen, og skriver derefter teksten. I din tekst står `<>` for den målte værdi: `<> TYP.` giver `6000 TYP.`. Tryk {{key:Enter}} på en tom linje for at beholde den målte værdi.

For at ændre en eksisterende målsætning:

1. Klik på den.
2. I det højre panel skriver du i {{ui:Tekst}}. Lad feltet stå tomt for den målte værdi.
3. Tryk {{key:Enter}}.

## Målsætninger følger geometrien

En målsætning husker sine punkter. Træk i et af dens greb, eller flyt, roter eller skalér den sammen med de objekter, den måler, og den måler igen. Hvis du strækker geometrien uden at flytte målsætningen, følger målsætningen ikke med: den beholder sine egne punkter.

## Almindelige fejl

- **Teksten og pilene er mikroskopiske eller enorme.** Sæt den samlede skala: se [Angiv målsætningsstørrelser](topic:dimension-settings).
- **»Vælg et punkt inde i den vinkel, du vil måle.«** Punktet, du klikkede på for en vinkelmålsætning, ligger på et af benene. Flyt det ind i vinklen.
- **Fortsat målsætning startede fra den forkerte.** Den fortsætter altid fra den sidste lineære eller justerede målsætning, der blev lavet i denne session. Lav (eller lav igen) den, der skal fortsættes fra, først.
- **Målsætningen blev lodret.** Du placerede den til siden. Skriv `H`, før du placerer den.
- **Fod og tommer.** Sæt tegningens længdeformat til {{ui:Arkitekt}} først, eller en målsætnings {{ui:Format}} i {{ui:Egenskaber}}: se [Fod og tommer i målsætninger](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Tallene er ikke i den enhed, du vil have.** Vælg {{ui:Enheder i teksten}}: se [Målsætninger i mm, cm, m eller km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
