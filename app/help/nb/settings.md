---
title: CadCraft-innstillinger
summary: Innstillingene som hører til tegneappen. Markørstørrelse, hvor en limt kopi henger fra markøren, hva et klikk gjør med utvalget, hvor mange rader verktøylinjen bruker, hvor kommandolinjen står og hvor høy den er, et kompakt toppområde og hjørneindikatoren.
keywords: kommandolinje, flytende kommandolinje, flyt, fest, én linje, f2, kommandohistorikk, commandline, cmdline, toparea, toppområde, kompakt, cursorsize, fullskjerm-markør, kant til kant, verktøylinjerader, verktøylinjevisning, ctrl f1, innstillinger, valg, markør, sikte, plukkboks, limepunkt, basispunkt, klikk på objekter, utvalg, pickadd, shift, tilbakestill
from: 0896eb42
---

Åpne {{ui:Innstillinger}} med tannhjulet i app-linjen, eller med {{key:Mod+,}}. Den første fanen, {{ui:CadCraft}}, har innstillingene som hører til denne appen. {{ui:Generelt}} har de som alle appene i familien deler (tema, størrelse og bredde på panelteksten, og verktøylinjens utseende og rekkefølge). CadCraft-innstillingene finnes bare i denne appen: du endrer dem her, og denne nettleseren husker dem. {{ui:Tilbakestill CadCraft-innstillinger}} setter alle tilbake til start.

## Markør

**Liten**, **Middels** (standard), **Stor** eller **Fullskjerm**: størrelsen på krysset og på plukkboksen i tegningen. En større plukkboks plukker også objekter fra litt lenger unna, noe som hjelper på en berøringsskjerm eller i en svært fin tegning.

**Fullskjerm** lar de to linjene i krysset gå fra kant til kant over tegningen, også når ingen kommando kjører, slik at du kan kontrollere med øynene at to ting står på linje over hele visningen. Med visningen delt, blir linjene i ruten du arbeider i. Det samme som AutoCADs {{cmd:CURSORSIZE}} 100: skriv {{cmd:CURSORSIZE}} og 100 for fullskjerm. Et mindre tall velger nærmeste størrelse (under 5 gir Liten, 5 til 9 gir Middels, 10 til 99 gir Stor).

## Innlimingspunkt

Hvor en limt kopi henger fra markøren etter {{key:Mod+V}} ({{cmd:PASTECLIP}}), til du klikker:

- **Nedre venstre hjørne** (standard): det nedre venstre hjørnet av de kopierte objektenes utstrekning, som i AutoCAD.
- **Senter**: midten av utstrekningen. Nyttig for å plassere et symbol etter øyemål.

En kopi laget med `COPYBASE` henger alltid fra basispunktet du valgte. {{ui:Lim inn på samme sted}} ({{key:Mod+Shift+V}}) ignorerer denne innstillingen: den beholder de opprinnelige koordinatene. Se [Kopier, lim inn og dupliser](topic:copy-paste).

## Klikk på objekter

Hva et klikk i tegningen gjør med utvalget når ingen kommando kjører:

- **Legger til i utvalget** (standard): hvert klikk eller vindu legger til objekter. {{key:Shift}}+klikk, eller et {{key:Shift}}+vindu, tar dem ut.
- **Erstatter utvalget**: et klikk eller vindu velger bare det det plukker. {{key:Shift}}+klikk legger til et objekt, eller tar ut et som allerede er valgt. Et {{key:Shift}}+vindu legger til.

Ved ledeteksten `Select objects:` inne i en kommando legger klikk alltid til (og {{key:Shift}} fjerner), uansett hva denne innstillingen sier. Se [Velg objekter](topic:select-objects).

## Klikk på et tomt sted

Hva et klikk der det ikke er noe objekt gjør når ingen kommando kjører. Uansett starter det et valgvindu (et andre klikk fullfører det).

- **Tømmer utvalget** (standard): det som var valgt, slippes. Hold {{key:Shift}} mens du klikker for å beholde det.
- **Beholder utvalget**: utvalget blir stående, som i andre tegneprogrammer, og vinduet legger til i det. Trykk {{key:Esc}} for å tømme utvalget.

## Dra for å velge

Hva å trykke og dra på et tomt sted tegner:

- **Lasso** (standard): et frihåndsomriss. Drar du til høyre først, velges det som ligger helt innenfor; til venstre først, det som den berører. {{key:Space}} mens du drar bytter mellom vindu, kryssing og gjerde.
- **Rektangel**: boksen, slik et klikk og et andre klikk tegner den.

{{cmd:LASSOMODE}} `1` eller `0` setter det samme. Se [Lassovalg](topic:lasso-selection).

## Dra for å trimme og forlenge

Hva å trykke på et tomt sted og dra gjør i {{cmd:TRIM}} og {{cmd:EXTEND}}:

- **En bane** (standard): en frihåndsbane. Hver del den krysser, trimmes (eller forlenges).
- **Et vindu**: en boks. Hver del den berører, trimmes, slik alternativet `C` gjør.

Se [Trim og forleng](topic:trim-and-extend).

## Verktøylinjens plassering

{{ui:CadCraft}} › {{ui:Verktøylinjens plassering}}: **Topp** (standard, slik det alltid har vært), **Bunn**, **Venstre** eller **Høyre**. På venstre eller høyre side stables verktøygruppene i en kolonne som ruller når den er høyere enn vinduet, og knappene brytes to eller tre per linje. Valget lagres med innstillingene dine, og {{cmd:TOOLBARDOCK}} (`TBDOCK`) setter det fra kommandolinjen. {{ui:Generelt}} › {{ui:Tilbakestill layouten}} setter verktøylinjen tilbake på toppen.

Menystilenes linjer ligger inne i verktøylinjen og flytter seg med den, men stilen {{ui:Bånd}} er laget for å gå tvers over toppen eller bunnen: på en side får den en smal kolonne som ruller. På en telefon blir verktøylinjen der telefonoppsettet plasserer den.

## Verktøylinjerader

Hvor mange linjer verktøyene bruker over tegningen, i CadCraft-verktøylinjen og i stilene {{ui:Klassisk tegning}} og {{ui:Bånd}}:

- **Bryt for å passe** (standard): verktøyene brytes til vinduets bredde.
- **2 rader**: høyst to linjer. Når verktøyene brytes til to linjer eller færre ved denne bredden, brytes de bare. Ellers står de i to rader som ruller sidelengs.
- **1 rad**: én linje som ruller sidelengs, som gir tegningen mest plass.

{{key:Shift+Ctrl+F1}} blar gjennom de tre, og {{cmd:TOOLBARROWS}} setter en. Hva knappene viser (ikon og tekst, bare ikoner, eller bare tekst), er en innstilling i {{ui:Generelt}} › {{ui:Verktøylinje}}. {{key:Ctrl+F1}} blar gjennom den, og {{cmd:TOOLBAR}} setter den.

## Kommandolinje

Kommandolinjen kan stå festet under tegningen, som den alltid har gjort, eller flyte over den. Den kan også være så tynn som én linje.

- **Gjør den flytende.** Dra håndtaket i venstre ende inn i tegningen, eller velg {{ui:Flyt over tegningen}} i menyen {{ui:Alternativer for kommandolinjen}} (de tre prikkene i høyre ende). Dra håndtaket igjen for å flytte den. Plassen beholdes når vinduet endrer størrelse. Dra høyre kant for å gjøre den bredere eller smalere. Slipp den på statuslinjen, eller velg {{ui:Fest nederst}}, for å feste den igjen.
- **Gjør den tynnere eller høyere.** Dra øverste kant: hvert steg er én linje historikk. Ned til null linjer blir den en **kommandolinje med én linje**: bare ledeteksten og det du skriver, og en ny melding vises over den en stund. Et dobbeltklikk på øverste kant veksler mellom én linje og høyden du hadde.
- **Historikken.** {{key:F2}}, eller klokkeknappen på kommandolinjen ({{ui:Kommandohistorikk (F2)}}), åpner hele historikken over linjen (under den når linjen flyter nær toppen av vinduet). Skriving går fortsatt til kommandolinjen. {{key:PageUp}} og {{key:PageDown}} ruller historikken, og {{key:Esc}}, {{key:F2}} eller et klikk et annet sted lukker den. En egen tast på F2 vinner over dette.
- **Fra tastaturet.** Håndtaket er en knapp: med den i fokus flytter piltastene en flytende kommandolinje (med {{key:Shift}}, i større steg). {{key:Up}} gjør en festet linje flytende, og {{key:Down}} ved bunnkanten fester den. Øverste kant er en skillelinje: {{key:Up}} og {{key:Down}} legger til eller tar bort en linje, {{key:Home}} gjør den til én linje, og {{key:End}} gjør den høyest. Skjermlesere hører fortsatt hver melding, også på kommandolinjen med én linje.

{{ui:CadCraft}} › {{ui:Kommandolinje}} har de samme valgene: {{ui:Festet nederst}} eller {{ui:Flytende}}, {{ui:Viste historikklinjer}} (0 til 12) og {{ui:Standard høyde}}. {{cmd:COMMANDLINE}} (`CMDLINE`) setter dem fra kommandolinjen. Plassen og høyden lagres for CadCraft i denne nettleseren, sammen med resten av oppsettet, så et lagret arbeidsmiljø tar dem med. {{ui:Generelt}} › {{ui:Tilbakestill layouten}} fester kommandolinjen på nytt med standardhøyden. På en telefon forblir kommandolinjen festet med én linje historikk. Historikkknappen virker der også.

Når vinduet er kort, og oppsettskontrollen tilbyr et strammere oppsett, gjør {{ui:Ja}} også kommandolinjen til én linje, hvis tegningen fortsatt er for kort etter verktøylinjene.

## Toppområde

{{ui:CadCraft}} › {{ui:Toppområde}}: **Standard** (standard) eller **Kompakt**. Kompakt gjør linjene over tegningen små i alle menystiler: gruppenavnene og ordene under ikonene forsvinner (verktøytipsene og skjermlesere har dem fortsatt), og knappene blir tettere. Den virker sammen med [Verktøylinjerader](topic:settings#toolbar-rows): Kompakt og **1 rad** gir tegningen mest plass. {{cmd:TOPAREA}} setter den.

## Hjørneindikator

Hva som står i hjørnet av tegningen:

- **Automatisk** (standard): aksesymbolet på fanen «{{ui:Modell}}», og ViewCube på fanen {{ui:3D}}.
- **Aksesymbol**: X- og Y-markøren nederst til venstre på fanen «{{ui:Modell}}», og en liten X-, Y- og Z-markør på fanen {{ui:3D}}.
- **ViewCube**: en kube øverst til høyre på begge fanene. På fanen «{{ui:Modell}}» viser den tegningen ovenfra, og et klikk på en annen flate, kant eller hjørne åpner fanen {{ui:3D}} med utsikt derfra. På 3D-fanen snur den seg med visningen: klikk for å se fra en side, dra for å rotere, og hjem-symbolet går tilbake til iso-visningen. Se [Modell i 3D](topic:3d-solids).
- **Ingen**: ingenting i hjørnet.

Ark viser ingen av dem.

## Lengde og areal for utvalget

- **I statuslinjen** (standard): når objekter er valgt, viser statuslinjen den samlede lengden, og det samlede arealet av de lukkede. Se [Summer for et utvalg](topic:properties-panel#totals-of-a-selection).
- **Skjult**: statuslinjen utelater dem. Egenskaper viser dem fortsatt for flere objekter.

## Rutenett, Ortho og fang

Disse er ikke i dialogboksen. Knappene {{ui:Rutenett}}, {{ui:Ortho}} og {{ui:Fang}} i statuslinjen (eller {{key:F7}}, {{key:F8}}, {{key:F3}}), og listen over objektfang ved siden av dem, huskes når du forlater dem. Se [Fest til punkter på objekter](topic:object-snaps).
