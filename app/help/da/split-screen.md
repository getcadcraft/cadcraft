---
title: Del skærmen
summary: Vis tegningen i to, tre eller fire ruder med hver sin zoom, placér et ark ved siden af modellen, og åbn flere tegninger side om side.
keywords: del, del skærm, ruder, vports, viewports, flise, side om side, stablet, to tegninger, faner, dokumentfaner, sammenlign, skillelinje, model og ark, flere tegninger, åbne tegninger
from: ee2f034b
---

## Hvad du lærer

Hvordan du ser på én tegning i flere ruder på én gang, hver med sin egen zoom, og hvordan du åbner flere tegninger og ser dem side om side.

## Del én tegning i ruder

1. Åbn en tegning, eller tegn nogle linjer og cirkler.
2. Åbn {{ui:Visning}} › {{ui:Mere}} og vælg {{ui:Del side om side}} (eller skriv {{cmd:VPORTS}}, derefter `2`, derefter {{key:Enter}}).

Tegneområdet deles i to ruder, som begge viser samme visning. Den aktive rude har en blå ramme og får krydsmarkøren.

3. Klik i den anden rude. Den bliver aktiv. (Det første klik skifter kun rude; klik igen for at vælge.)
4. Zoom med hjulet. Kun den rude zoomer.
5. Træk linjen mellem ruderne for at gøre den ene bredere. {{key:Home}} på en markeret skillelinje flytter den tilbage i midten.

{{cmd:VPORTS}} tager også `3` (to ruder på den ene side og en stor på den anden: `L` eller `R`), `4` og `SI` for igen kun én rude. Den aktive rudes visning fylder så området. På et ark tilføjer {{cmd:VPORTS}} i stedet en viewport til arket (som i AutoCAD); skriv {{cmd:SPLIT}} dér, eller brug menuen {{ui:Visning}}.

## Tegn fra én rude ind i en anden

1. Del side om side, og zoom hver rude ind på et forskelligt hjørne af tegningen.
2. Skriv `L` og tryk {{key:Enter}}, og klik på det første punkt i den venstre rude.
3. Klik én gang i den højre rude for at gøre den aktiv, og klik derefter på det andet punkt dér.

Linjen går mellem de to steder. En kommando fortsætter, mens du skifter rude, og gummibåndet vises i alle ruder.

## Modellen ved siden af et ark

1. Del side om side.
2. Klik på den højre rude, og klik derefter på et arks fane under tegningen.

Den højre rude viser arket; den venstre viser stadig modellen. Hver rude beholder sit eget rum, så du kan tegne på modellen og se arkets viewport følge med.

## Flere tegninger i ét vindue

1. Åbn en tegning. Åbn derefter en anden (eller tryk {{ui:Ny}}).

Hver tegning åbnes i sin egen fane over tegneområdet. Klik på en fane for at skifte; kommandolinjen, panelerne og fortryd følger den tegning, du skifter til. {{key:Mod+C}} i én tegning og {{key:Mod+V}} i en anden kopierer objekter mellem dem.

2. Klik på {{ui:Arrangér de åbne tegninger side om side}} (delingsikonet i enden af fanerne), eller det stablede ikon ved siden af.

Hver rude viser nu en af de åbne tegninger, op til fire. Klik på en rude for at arbejde i den tegning.

3. Klik på {{ui:×}} på en fane for at lukke tegningen. Hvis den har ikke-gemte ændringer, spørger CadCraft først.

:::tip
Når du åbner en tegning, mens vinduet kun har en ny, urørt tegning, bruges den fane i stedet for at tilføje en ny.
:::

## Panorér og zoom sammen

For at sammenligne to revisioner: arrangér dem side om side, og klik derefter på {{ui:Kobl ruderes visninger}} (linkikonet i enden af fanerne), eller vælg det under {{ui:Visning}} › {{ui:Mere}}, eller skriv {{cmd:LINKVIEWS}} og `ON`. Nu flytter en panorering eller zoom i én rude alle ruder, der viser modellen (eller alle ruder, der viser et ark), til samme sted, så de to tegninger forbliver rettet ind efter hinanden. {{cmd:LINKVIEWS}} `OFF` lader hver rude bevæge sig selv igen.

## Almindelige fejl

- **Mit klik gjorde ingenting.** Det gjorde den rude aktiv. Klik igen for at vælge eller tegne.
- **Hjulet zoomede den forkerte rude.** Hjulet zoomer den rude, som markøren er over, og gør den aktiv.
- **Ruderne blev til én igen.** Når du åbner en tegning, vises den, som den blev gemt; en tegning gemt uden ruder åbnes i én.
- **Du bliver advaret om ikke-gemte ændringer, når du forlader siden, som du ikke kan se.** En anden fane har en tegning med ændringer. Skift til den og gem, eller forlad uden at gemme.
