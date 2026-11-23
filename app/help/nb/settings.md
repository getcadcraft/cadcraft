---
title: CadCraft-innstillinger
summary: Innstillingene som hører til tegneappen: markørstørrelse, hvor en limt kopi henger fra markøren, hva et klikk gjør med utvalget, hvor mange rader verktøylinjen bruker, hvor kommandolinjen står og hvor høy den er, et kompakt toppområde, og hjørneindikatoren.
keywords: kommandolinje, flytende kommandolinje, flyt, fest, én linje, f2, kommandohistorikk, commandline, cmdline, toparea, toppområde, kompakt, cursorsize, fullskjerm siktekors, fullskjermmarkør, kant til kant, verktøylinjerader, verktøylinjevisning, ctrl f1, innstillinger, valg, hjørneindikator, view cube, aksesymbol, ucs-symbol, markør, siktekors, plukkboks, limepunkt, basispunkt, klikke objekter, utvalg, pickadd, shift, tilbakestill
from: ae1a81db
---

Åpne {{ui:Innstillinger}} med tannhjulet i appfeltet eller {{key:Mod+,}}. Den første fanen, {{ui:CadCraft}}, holder innstillingene som hører til denne appen. {{ui:Generelt}} holder dem alle appene i familien deler: tema, størrelsen på panelets tekst og bredder, og verktøylinjens utseende og rekkefølge. CadCrafts innstillinger finnes bare i appen: du endrer dem her, og denne nettleseren husker dem. {{ui:Tilbakestill CadCraft-innstillinger}} setter hver av dem tilbake til start.

## Markør

**Liten**, **Middels** (start), **Stor** eller **Fullskjerm**: størrelsen på siktekorset og plukkboksen i tegningen. En større plukkboks velger også objekter litt lenger unna, noe som hjelper på en berøringsskjerm eller i en veldig fin tegning.

**Fullskjerm** kjører siktekorsets to linjer fra kant til kant over tegningen, også når ingen kommando kjører, så du kan se med øynene at to ting står på linje over hele visningen. Med delt visning blir linjene i ruten du arbeider i. Det samme som AutoCADs {{cmd:CURSORSIZE}} 100: skriv {{cmd:CURSORSIZE}} og 100 for fullskjerm. Et mindre tall velger nærmeste størrelse (under 5 Liten, 5 til 9 Middels, 10 til 99 Stor).

## Limepunkt

Hvor en limt kopi henger fra markøren etter {{key:Mod+V}} ({{cmd:PASTECLIP}}), til du klikker:

- **Nedre venstre hjørne** (start): det nedre venstre hjørnet av de kopierte objektenes utstrekning, som i AutoCAD.
- **Senter**: midten av deres utstrekning. Nyttig for å plassere et symbol etter øyemål.

En kopi laget med `COPYBASE` henger alltid fra basispunktet du valgte. {{ui:Lim inn på samme sted}} ({{key:Mod+Shift+V}}) ignorerer denne innstillingen: den beholder de opprinnelige koordinatene. Se [Kopier, lim inn og dupliser](topic:copy-paste).

## Klikke på objekter

Hva et klikk i tegningen gjør med utvalget når ingen kommando kjører:

- **Legger til i utvalget** (start): hvert klikk eller vindu legger til objekter. {{key:Shift}}+klikk, eller et {{key:Shift}}+vindu, tar dem ut.
- **Erstatter utvalget**: et klikk eller vindu velger bare det det plukker. {{key:Shift}}+klikk legger til et objekt, eller tar ut ett som allerede er valgt. Et {{key:Shift}}+vindu legger til.

Ved en ledetekst `Select objects:` inne i en kommando legger klikk alltid til, og {{key:Shift}} fjerner, uansett hva denne innstillingen sier. Se [Velg objekter](topic:select-objects).

## Klikke på et tomt sted

Hva et klikk der det ikke er noe objekt, gjør når ingen kommando kjører. Begge måter starter et valgvindu (et annet klikk fullfører det).

- **Fjerner utvalget** (start): det som var valgt, slippes. Hold {{key:Shift}} mens du klikker for å beholde det.
- **Beholder utvalget**: utvalget blir stående, som i andre tegneprogrammer, og vinduet legger til i det. Trykk {{key:Esc}} for å fjerne utvalget.

## Dra for å velge

Hva å trykke og dra på et tomt sted tegner:

- **Lasso** (start): en frihåndskontur. Drar du først mot høyre, velges det som ligger helt inni den. Drar du først mot venstre, velges det den berører. {{key:Space}} mens du drar, bytter mellom vindu, kryssing og gjerde.
- **Rektangel**: boksen, slik et klikk og et annet klikk tegner den.

{{cmd:LASSOMODE}} `1` eller `0` setter det samme. Se [Lassovalg](topic:lasso-selection).

## Dra for å trimme og forlenge

Hva å trykke på et tomt sted og dra gjør i {{cmd:TRIM}} og {{cmd:EXTEND}}:

- **En bane** (start): en frihåndsbane. Hver bit den krysser, blir trimmet (eller forlenget).
- **Et vindu**: en boks. Hver bit den berører, blir trimmet, slik alternativet `C` gjør.

Se [Trim og forleng](topic:trim-and-extend).

## Verktøylinjens plassering

{{ui:CadCraft}} › {{ui:Verktøylinjens plassering}}: **Topp** (start, slik det alltid har vært), **Bunn**, **Venstre** eller **Høyre**. Til venstre eller høyre stables verktøygruppene i en kolonne som ruller når den er høyere enn vinduet, og knappene bryter to eller tre per linje. Valget lagres med innstillingene dine, og {{cmd:TOOLBARDOCK}} (`TBDOCK`) setter det fra kommandolinjen. {{ui:Generelt}} › {{ui:Tilbakestill layouten}} setter verktøylinjen tilbake øverst.

Menystilenes stolper ligger inni verktøylinjen og flytter seg med den, men stilen {{ui:Bånd}} er laget for å gå over toppen eller bunnen: på en side får den en smal kolonne som ruller. På en telefon blir verktøylinjen der telefonoppsettet plasserer den.

## Verktøylinjerader

Hvor mange linjer verktøyene bruker over tegningen, i CadCraft-verktøylinjen og i stilene {{ui:Klassisk tegning}} og {{ui:Bånd}}:

- **Bryt for å passe** (start): verktøyene bryter til vinduets bredde.
- **2 rader**: høyst to linjer. Når verktøyene bryter til to linjer eller færre ved denne bredden, bryter de bare. Ellers står de i to rader som ruller sideveis.
- **1 rad**: én linje som ruller sideveis, som gir tegningen mest plass.

{{key:Shift+Ctrl+F1}} går gjennom de tre, og {{cmd:TOOLBARROWS}} velger en. Hva knappene viser (ikoner og tekst, bare ikoner, eller bare tekst), er en innstilling i {{ui:Generelt}} › {{ui:Verktøylinje}}. {{key:Ctrl+F1}} går gjennom den, og {{cmd:TOOLBAR}} velger den.

## Kommandolinje

Kommandolinjen kan stå festet under tegningen, slik den alltid har gjort, eller flyte over den. Den kan også være så tynn som én linje.

- **Gjør den flytende.** Dra håndtaket i venstre ende inn i tegningen, eller velg {{ui:Flyt over tegningen}} i menyen {{ui:Alternativer for kommandolinjen}} (de tre prikkene i høyre ende). Dra håndtaket igjen for å flytte den. Plassen beholdes når vinduet endrer størrelse. Dra høyre kant for å gjøre den bredere eller smalere. Slipp den på statuslinjen, eller velg {{ui:Fest nederst}}, for å feste den igjen.
- **Gjør den tynnere eller høyere.** Dra øvre kant: hvert trinn er én historikklinje. Ned til null linjer er den en **enlinjes kommandolinje**: bare ledeteksten og det du skriver, og en ny melding vises over den et øyeblikk. Et dobbeltklikk på øvre kant går mellom én linje og høyden du hadde.
- **Historikken.** {{key:F2}}, eller klokkeknappen på kommandolinjen ({{ui:Kommandohistorikk (F2)}}), åpner hele historikken over linjen (under den når linjen flyter nær toppen av vinduet). Skriving går fortsatt til kommandolinjen. {{key:PageUp}} og {{key:PageDown}} ruller historikken, og {{key:Esc}}, {{key:F2}} eller et klikk et annet sted lukker den. En tast du selv har lagt på F2, vinner over dette.
- **Fra tastaturet.** Håndtaket er en knapp: når det har fokus, flytter piltastene en flytende kommandolinje (med {{key:Shift}}, i større steg). {{key:Up}} gjør en festet kommandolinje flytende, og {{key:Down}} ved nedre kant fester den. Øvre kant er en skillelinje: {{key:Up}} og {{key:Down}} legger til eller tar bort en linje, {{key:Home}} gjør den til én linje, {{key:End}} den høyeste. Skjermlesere hører fortsatt hver melding, også på enlinjes kommandolinje.

{{ui:CadCraft}} › {{ui:Kommandolinje}} har de samme valgene: {{ui:Festet nederst}} eller {{ui:Flytende}}, {{ui:Viste historikklinjer}} (0 til 12) og {{ui:Standardhøyde}}. {{cmd:COMMANDLINE}} (`CMDLINE`) setter dem fra kommandolinjen. Plassen og høyden beholdes for CadCraft i denne nettleseren sammen med resten av oppsettet, så et lagret arbeidsmiljø tar dem med. {{ui:Generelt}} › {{ui:Tilbakestill layouten}} fester kommandolinjen i standardhøyden igjen. På en telefon forblir kommandolinjen festet med én linje historikk. Historikkknappen virker der også.

{{ui:CadCraft}} › {{ui:Alternativbokstaver}} beholder bokstavene du valgte for kommandoalternativer: {{ui:Rediger…}} åpner filen, {{ui:Importer…}} erstatter den med en fil du velger, og {{ui:Eksporter}} lagrer den. Se [Gi kommandoalternativer dine egne bokstaver](topic:option-letters).

Når vinduet er kort og oppsettkontrollen tilbyr et strammere oppsett, slår også dens {{ui:Ja}} kommandolinjen til én linje, hvis tegningen fortsatt er for kort etter verktøylinjene.

## Toppområde

{{ui:CadCraft}} › {{ui:Toppområde}}: **Standard** (start) eller **Kompakt**. Kompakt holder stolpene over tegningen små i alle menystiler: gruppenavnene og ordene under ikonene forsvinner (verktøytipsene og skjermlesere har dem fortsatt), og knappene blir tettere. Den virker sammen med [Verktøylinjerader](topic:settings#toolbar-rows): Kompakt og **1 rad** gir tegningen mest plass. {{cmd:TOPAREA}} setter den.

## Hjørneindikator

Hva som står i tegningens hjørne:

- **Automatisk** (start): aksesymbolet på fanen {{ui:Modell}} og ViewCube på fanen {{ui:3D}}.
- **Aksesymbol**: X- og Y-markøren nederst til venstre på fanen {{ui:Modell}}, og en liten X-, Y- og Z-markør på fanen {{ui:3D}}.
- **ViewCube**: en kube øverst til høyre på begge fanene. På fanen {{ui:Modell}} viser den tegningen ovenfra, og et klikk på en annen flate, kant eller hjørne åpner fanen {{ui:3D}} og ser derfra. På 3D-fanen snur den seg med visningen: klikk for å se fra en side, dra for å kretse, og huset går tilbake til iso-visningen. Se [Modell i 3D](topic:3d-solids).
- **Ingen**: ingenting i hjørnet.

Ark viser verken det ene eller det andre.

## Lengde og areal for utvalget

- **I statuslinjen** (start): når objekter er valgt, viser statuslinjen deres samlede lengde og det samlede arealet av de lukkede. Se [Summer for et utvalg](topic:properties-panel#totals-of-a-selection).
- **Skjult**: statuslinjen utelater dem. Egenskaper viser dem fortsatt for flere objekter.

## Rutenett, ortho og fang

Disse står ikke i dialogen. Knappene {{ui:Rutenett}}, {{ui:Ortho}} og {{ui:Fang}} i statuslinjen (eller {{key:F7}}, {{key:F8}}, {{key:F3}}), og listen over objektfang ved siden av dem, huskes når du forlater dem. Se [Fest til punkter på objekter](topic:object-snaps).
