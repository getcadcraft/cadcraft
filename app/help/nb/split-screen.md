---
title: Del skjermbildet
summary: Vis tegningen i to, tre eller fire ruter med hver sin zoom, plasser et ark ved siden av modellen, og åpne flere tegninger side ved side.
keywords: del, del skjermbildet, ruter, vports, visningsområder, flislagt, flislegg, side ved side, stablet, to tegninger, faner, dokumentfaner, sammenlign, skille, modell og ark, flere tegninger, åpne tegninger
from: ee2f034b
---

## Hva dette dekker

Hvordan man ser på én tegning i flere ruter samtidig, hver med sin egen zoom, og hvordan man åpner flere tegninger og ser dem side ved side.

## Del én tegning i ruter

1. Åpne en tegning, eller tegn noen linjer og sirkler.
2. Åpne {{ui:Visning}} › {{ui:Mer}} og velg {{ui:Del side ved side}} (eller skriv {{cmd:VPORTS}}, deretter `2`, deretter {{key:Enter}}).

Tegneområdet deles i to ruter, som begge viser samme visning. Den aktive ruten har en blå ramme og får krysset.

3. Klikk i den andre ruten. Den blir aktiv. (Det første klikket bytter bare rute; klikk igjen for å velge.)
4. Zoom med hjulet. Bare den ruten zoomes.
5. Dra linjen mellom rutene for å gjøre den ene bredere. {{key:Home}} på et markert skille setter det tilbake i midten.

{{cmd:VPORTS}} tar også `3` (to ruter på den ene siden og en stor på den andre: `L` eller `R`), `4`, og `SI` for å gå tilbake til én rute. Den aktive rutens visning fyller da området. På et ark legger {{cmd:VPORTS}} i stedet til et visningsområde på arket (som i AutoCAD); skriv {{cmd:SPLIT}} der, eller bruk Visning-menyen.

## Tegn fra én rute til en annen

1. Del side ved side, og zoom hver rute til et annet hjørne av tegningen.
2. Skriv `L` og trykk {{key:Enter}}, og klikk det første punktet i venstre rute.
3. Klikk én gang i høyre rute for å gjøre den aktiv, og klikk deretter det andre punktet der.

Linjen går mellom de to stedene. En kommando fortsetter når ruten endres, og gummibåndet vises i alle ruter.

## Modellen ved siden av et ark

1. Del side ved side.
2. Klikk høyre rute, og klikk deretter fanen til et ark under tegningen.

Høyre rute viser arket; venstre viser fortsatt modellen. Hver rute beholder sitt eget rom, slik at man kan tegne på modellen og se at arkets visningsområde følger med.

## Flere tegninger i ett vindu

1. Åpne en tegning. Åpne deretter en til (eller trykk {{ui:Ny}}).

Hver tegning åpnes i sin egen fane over tegneområdet. Klikk en fane for å bytte; kommandolinjen, panelene og angre følger tegningen som bytter til. {{key:Mod+C}} i én tegning og {{key:Mod+V}} i en annen kopierer objekter mellom dem.

2. Klikk {{ui:Legg de åpne tegningene side ved side}} (delikonet på enden av fanene), eller stablet-ikonet ved siden av.

Hver rute viser nå en av de åpne tegningene, opptil fire. Klikk en rute for å jobbe i den tegningen.

3. Klikk {{ui:×}} på en fane for å lukke den tegningen. Hvis den har ulagrede endringer, spør CadCraft først.

:::tip
Når en tegning åpnes mens vinduet bare har en ny, urørt tegning, brukes den fanen i stedet for å legge til en ny.
:::

## Panorer og zoom sammen

For å sammenligne to revisjoner, legg dem side ved side, og klikk deretter {{ui:Koble rutenes visninger}} (lenkeikonet på enden av fanene), eller velg den i {{ui:Visning}} › {{ui:Mer}}, eller skriv {{cmd:LINKVIEWS}} og `ON`. Nå flytter en panorering eller zoom i én rute alle ruter som viser modellen (eller alle ruter som viser et ark) til samme sted, slik at de to tegningene forblir på linje. {{cmd:LINKVIEWS}} `OFF` lar hver rute bevege seg på egen hånd igjen.

## Vanlige feil

- **Klikket gjorde ingenting.** Det gjorde at ruten ble aktiv. Klikk igjen for å velge eller tegne.
- **Hjulet zoomet feil rute.** Hjulet zoomer ruten under pekeren og gjør den aktiv.
- **Rutene gikk tilbake til én.** Når en tegning åpnes, vises den slik den ble lagret; en tegning som ble lagret uten ruter, åpnes i én.
- **Å forlate siden varsler om ulagrede endringer som ikke er synlige.** En annen fane har en tegning med endringer. Bytt til den og lagre, eller gå fra uten å lagre.
