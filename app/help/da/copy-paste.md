---
title: "Kopiér, sæt ind og duplikér"
summary: "Kopiér objekter til CadCraft's udklipsholder, sæt dem ind, hvor du klikker, eller på samme sted, duplikér med markøren, og hent arbejde over fra en anden tegning eller fane."
keywords: kopiér, klip, sæt ind, sæt ind på samme sted, duplikér, udklipsholder, copyclip, cutclip, pasteclip, pasteorig, copybase, ctrl c, ctrl v, ctrl x, ctrl d, mellem tegninger, anden fane, basispunkt
from: 4b9f29d3
---

## Hvad du lærer

Sådan kopierer du objekter til udklipsholderen og sætter dem ind, hvor du klikker, eller ved deres egne koordinater, duplikerer dem med markøren, klipper dem og tager dem med til en anden tegning. Alt her findes også i værktøjslinjens gruppe {{ui:Redigér}}: {{ui:Kopiér}}, {{ui:Sæt ind}} og menuen {{ui:Mere}}.

## Kopiér og sæt ind, hvor du klikker

1. Vælg objekterne: klik på dem, eller træk et vindue.
2. Tryk {{key:Mod+C}}, eller klik {{ui:Kopiér}} i gruppen {{ui:Redigér}}. Kommandolinjen siger, hvor mange objekter der blev kopieret. De forbliver valgt.
3. Tryk {{key:Mod+V}}, eller klik {{ui:Sæt ind}}. Kopien vises ved markøren og hænger fra det nederste venstre hjørne af de kopierede objekter.
4. Klik, hvor det hjørne skal hen, eller skriv et punkt som `2000,500` og tryk {{key:Enter}}. Objektfang og {{ui:Ortogonal}} virker som normalt.

De indsatte objekter er valgt, så du kan flytte eller ændre dem med det samme. Ét {{key:Mod+Z}} fjerner hele indsætningen.

:::tip
Vil du have, at kopien hænger fra et punkt, du vælger, fx hjørnet af en væg? Skriv `COPYBASE`, klik basispunktet, vælg objekterne og tryk {{key:Enter}}. Indsætning placerer så det punkt, hvor du klikker. For at hænge alle kopier fra deres centrum i stedet for det nederste venstre hjørne, ændr {{ui:Indsætningspunkt}} i [CadCraft-indstillinger](topic:settings).
:::

## Sæt ind på samme sted

Tryk {{key:Mod+Shift+V}}, eller vælg {{ui:Sæt ind på samme sted}} i menuen {{ui:Mere}}. Kopien placeres præcis ved de koordinater, den blev kopieret fra, uden at du klikker. Brug den til at føre objekter over i en anden tegning på samme sted, eller fra et ark til et andet ark.

## Duplikér og flyt

1. Vælg objekterne.
2. Tryk {{key:Mod+D}}, eller vælg {{ui:Duplikér og flyt}} i menuen {{ui:Mere}}.
3. En kopi ligger oven på originalen og flytter sig med markøren. Klik, hvor den skal hen. Du kan også skrive en forskydning som `@0,-600`, eller en afstand mod markøren.

{{key:Esc}} før klikket efterlader intet. Duplikatet er ét trin i fortryd og rører ikke udklipsholderen.

## Klip

Tryk {{key:Mod+X}}, eller vælg {{ui:Klip}} i menuen {{ui:Mere}}. Objekterne går til udklipsholderen og slettes fra tegningen, i ét trin i fortryd. Sæt dem ind igen med {{key:Mod+V}} eller {{key:Mod+Shift+V}}.

## Mellem tegninger og faner

Udklipsholderen beholder sin kopi, når du åbner en anden tegning, og den deles af alle CadCraft-faner i denne browser. Kopiér i én fane, og tryk derefter {{key:Mod+V}} i en anden.

- Blokke, som objekterne bruger, følger med. Hvis tegningen, du sætter ind i, allerede har en blok med samme navn, bruges dens egen definition, som i AutoCAD.
- Lag, som objekterne bruger, tilføjes med den farve og de indstillinger, de havde.
- Kopien skaleres ikke, når de to tegninger bruger forskellige enheder: CadCraft siger det, og du kan bagefter bruge {{cmd:SCALE}}.
- Viewporte bliver på deres ark; de udelades fra en kopi.

:::note
Udklipsholderen er CadCraft's egen. Du kan ikke indsætte CadCraft-objekter i et andet program, eller indsætte fra et andet program i CadCraft: gem som DWG eller DXF i stedet. En meget stor kopi kan være for stor til at deles mellem faner; kommandolinjen siger så kun, at denne fane kan indsætte den.
:::

## Almindelige fejl

- **{{key:Mod+V}} satte tekst ind i kommandolinjen.** Du havde skrevet noget dér, så tasterne virkede på teksten. Tryk {{key:Esc}} for at rydde den, og tryk derefter {{key:Mod+V}} igen.
- **Intet skete, og statuslinjen siger at afslutte den aktuelle kommando.** En anden kommando kører. Tryk først {{key:Esc}}.
- **Indsætningen landede langt væk.** Den hænger fra det nederste venstre hjørne af det, du kopierede, som kan være et fjernt objekt, du valgte ved en fejl. Brug {{ui:Sæt ind på samme sted}}, eller kopiér med `COPYBASE`.
- **»Intet indsat« med en årsag.** Det en anden fane efterlod på udklipsholderen, kunne ikke læses (det var beskadiget eller ændret i hånden). Kopiér objekterne igen.

Se hele listen over taster i [Tastatur og mus](topic:keyboard), og hver ledetekst i [Kommandoreferencen](topic:commands#clipboard).
