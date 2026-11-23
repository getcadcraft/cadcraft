---
title: CadCraft-indstillinger
summary: Indstillingerne, der hører til tegneappen: markørens størrelse, hvor en indsat kopi hænger fra markøren, hvad et klik gør ved markeringen, hvor mange rækker værktøjslinjen bruger, hvor kommandolinjen sidder og hvor høj den er, et kompakt øverste område og hjørneindikatoren.
keywords: kommandolinje, svævende kommandolinje, frigør, fastgør, én linje, f2, kommandohistorik, commandline, cmdline, toparea, øverste område, kompakt, cursorsize, markørkors fuld skærm, fuld skærm, kant til kant, værktøjslinjens rækker, værktøjslinjens visning, ctrl f1, indstillinger, præferencer, valgmuligheder, hjørneindikator, ViewCube, akseikon, UCS-ikon, markør, markørkors, valgboks, indsætningspunkt, basispunkt, klik på objekter, markering, pickadd, shift, nulstil
from: ae1a81db
---

Åbn {{ui:Indstillinger}} med tandhjulet i appbjælken eller {{key:Mod+,}}. Det første faneblad, {{ui:CadCraft}}, holder de indstillinger, der hører til denne app; {{ui:Generelt}} holder dem, alle apps i familien deler (tema, størrelse på panelets tekst og bredder, værktøjslinjens udseende og rækkefølge). CadCrafts indstillinger findes kun i appen: du ændrer dem her, og denne browser husker dem. {{ui:Nulstil CadCraft-indstillinger}} sætter hver af dem tilbage til start.

## Markør

**Lille**, **Mellem** (start), **Stor** eller **Fuld skærm**: størrelsen på markørkorset og valgboksen i tegningen. En større valgboks vælger også objekter fra lidt længere væk, hvilket hjælper på en berøringsskærm eller en meget fin tegning.

**Fuld skærm** kører markørkorsets to linjer kant til kant over tegningen, også når ingen kommando kører, så du kan kontrollere med øjet, at to ting flugter over hele visningen. Med visningen delt bliver linjerne i den rude, du arbejder i. Det samme som AutoCADs {{cmd:CURSORSIZE}} 100: skriv {{cmd:CURSORSIZE}} og 100 for fuld skærm; et mindre tal vælger den nærmeste størrelse (under 5 Lille, 5 til 9 Mellem, 10 til 99 Stor).

## Indsæt-punkt

Hvor en indsat kopi hænger fra markøren efter {{key:Mod+V}} ({{cmd:PASTECLIP}}), indtil du klikker:

- **Nederste venstre hjørne** (start): det nederste venstre hjørne af de kopierede objekters udstrækning, som i AutoCAD.
- **Centrum**: midten af deres udstrækning. Praktisk til at placere et symbol med øjet.

En kopi lavet med `COPYBASE` hænger altid fra det basispunkt, du valgte. {{ui:Sæt ind på samme sted}} ({{key:Mod+Shift+V}}) ignorerer denne indstilling: den beholder de oprindelige koordinater. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).

## Klik på objekter

Hvad et klik i tegningen gør ved markeringen, når ingen kommando kører:

- **Føjer til markeringen** (start): hvert klik eller vindue tilføjer objekter; {{key:Shift}}+klik, eller et {{key:Shift}}+vindue, tager dem ud.
- **Erstatter markeringen**: et klik eller vindue vælger kun det, det peger på. {{key:Shift}}+klik tilføjer et objekt, eller tager et ud, der allerede er valgt; et {{key:Shift}}+vindue tilføjer.

Ved en `Select objects:`-prompt inde i en kommando føjer klik altid til (og {{key:Shift}} fjerner), uanset denne indstilling. Se [Vælg objekter](topic:select-objects).

## Klik på et tomt sted

Hvad et klik, hvor der ikke er et objekt, gør, når ingen kommando kører. Det starter under alle omstændigheder et valgvindue (et andet klik afslutter det).

- **Rydder markeringen** (start): det, der var valgt, slippes. Hold {{key:Shift}}, mens du klikker, for at beholde det.
- **Beholder markeringen**: markeringen bliver, som i andre tegneprogrammer; vinduet føjer til den. Tryk {{key:Esc}} for at rydde markeringen.

## Træk for at vælge

Hvad tryk og træk på et tomt sted tegner:

- **Lasso** (start): en frihåndskontur. Bevæger du dig til højre først, vælges det, der helt ligger indeni den; til venstre først, det den rører. {{key:Space}}, mens du trækker, skifter mellem vindue, kryds og hegn.
- **Rektangel**: boksen, som et klik og et andet klik tegner den.

{{cmd:LASSOMODE}} `1` eller `0` angiver det samme. Se [Lassovalg](topic:lasso-selection).

## Træk for at beskære og forlænge

Hvad tryk på et tomt sted og træk gør i {{cmd:TRIM}} og {{cmd:EXTEND}}:

- **En sti** (start): en frihåndssti; hvert stykke den krydser, beskæres (eller forlænges).
- **Et vindue**: en boks; hvert stykke den rører, beskæres, som valgmuligheden `C` gør.

Se [Beskær og forlæng](topic:trim-and-extend).

## Værktøjslinjens placering

{{ui:CadCraft}} › {{ui:Værktøjslinjens placering}}: **Øverst** (start, som den altid har været), **Nederst**, **Venstre** eller **Højre**. Til venstre eller højre stables værktøjsgrupperne i en søjle, der ruller, når den er højere end vinduet, og knapperne pakkes to eller tre pr. linje. Valget gemmes med dine indstillinger, og {{cmd:TOOLBARDOCK}} (`TBDOCK`) sætter det fra kommandolinjen. {{ui:Generelt}} › {{ui:Nulstil layoutet}} sætter værktøjslinjen tilbage øverst.

Menustilenes bjælker sidder inde i værktøjslinjen og flytter sig med den, men stilen {{ui:Bånd}} er lavet til at løbe øverst eller nederst: på en side får den en smal søjle, der ruller. På en telefon bliver værktøjslinjen der, hvor telefonlayoutet placerer den.

## Værktøjslinjens rækker

Hvor mange linjer værktøjerne bruger over tegningen, i CadCraft-værktøjslinjen og i stilene {{ui:Klassisk tegning}} og {{ui:Bånd}}:

- **Pak til at passe** (start): værktøjerne pakkes til vinduets bredde.
- **2 rækker**: højst to linjer. Når værktøjerne pakkes til to linjer eller færre ved denne bredde, pakkes de bare; ellers står de i to rækker, der ruller sidelæns.
- **1 række**: én linje, der ruller sidelæns, hvilket giver tegningen mest plads.

{{key:Shift+Ctrl+F1}} skifter mellem de tre, og {{cmd:TOOLBARROWS}} vælger en. Hvad knapperne viser (ikoner og tekst, kun ikoner, eller kun tekst), er en indstilling under {{ui:Generelt}} › {{ui:Værktøjslinje}}; {{key:Ctrl+F1}} skifter mellem dem, og {{cmd:TOOLBAR}} vælger.

## Kommandolinje

Kommandolinjen kan blive siddende fastgjort under tegningen, som den altid har gjort, eller svæve over den, og den kan være så tynd som én linje.

- **Frigør den.** Træk grebet i dens venstre ende ind i tegningen, eller vælg {{ui:Frigør over tegningen}} i dens menu {{ui:Indstillinger for kommandolinjen}} (de tre prikker i dens højre ende). Træk grebet igen for at flytte den; dens plads bevares, når vinduet ændrer størrelse. Træk i dens højre kant for at gøre den bredere eller smallere. Slip den på statuslinjen, eller vælg {{ui:Fastgør nederst}}, for at fastgøre den igen.
- **Gør den tyndere eller højere.** Træk i dens øverste kant: hvert trin er én historiklinje. Ned til nul linjer er den en **kommandolinje på én linje**: kun prompten og det, du skriver, og en ny besked vises over den et øjeblik. Et dobbeltklik på den øverste kant skifter mellem én linje og den højde, du havde.
- **Historikken.** {{key:F2}}, eller uret på kommandolinjen ({{ui:Kommandohistorik (F2)}}), åbner hele historikken over linjen (under den, når linjen svæver nær vinduets top). Skrivning går stadig til kommandolinjen; {{key:PageUp}} og {{key:PageDown}} ruller historikken, og {{key:Esc}}, {{key:F2}} eller et klik et andet sted lukker den. En tast, du selv har lagt på F2, vinder over dette.
- **Fra tastaturet.** Grebet er en knap: med det i fokus flytter piletasterne en svævende kommandolinje (med {{key:Shift}} i større trin); {{key:Up}} frigør en fastgjort, og {{key:Down}} ved nederste kant fastgør den. Den øverste kant er en skillelinje: {{key:Up}} og {{key:Down}} tilføjer eller tager en linje væk, {{key:Home}} gør den til én linje, {{key:End}} den højeste. Skærmlæsere hører stadig hver besked, også på kommandolinjen med én linje.

{{ui:CadCraft}} › {{ui:Kommandolinje}} har de samme valg: {{ui:Fastgjort nederst}} eller {{ui:Frigjort}}, {{ui:Viste historiklinjer}} (0 til 12) og {{ui:Standardhøjde}}. {{cmd:COMMANDLINE}} (`CMDLINE`) sætter dem fra kommandolinjen. Placeringen og højden huskes for CadCraft i denne browser sammen med resten af layoutet, så et gemt arbejdsmiljø bærer dem med sig; {{ui:Generelt}} › {{ui:Nulstil layoutet}} fastgør kommandolinjen igen i sin standardhøjde. På en telefon forbliver kommandolinjen fastgjort med én historiklinje; historikknappen virker også der.

{{ui:CadCraft}} › {{ui:Valgmulighedernes bogstaver}} gemmer de bogstaver, du valgte til kommandoernes valgmuligheder: {{ui:Redigér…}} åbner filen, {{ui:Importér…}} erstatter den med en fil, du vælger, og {{ui:Eksportér}} gemmer den. Se [Giv kommandoens valgmuligheder egne bogstaver](topic:option-letters).

Når vinduet er kort, og layoutkontrollen tilbyder et strammere layout, sætter dens {{ui:Ja}} også kommandolinjen til én linje, hvis tegningen stadig er for kort efter værktøjslinjerne.

## Øverste område

{{ui:CadCraft}} › {{ui:Øverste område}}: **Standard** (start) eller **Kompakt**. Kompakt holder bjælkerne over tegningen små i hver menustil: gruppenavnene og ordene under ikonerne forsvinder (værktøjstips og skærmlæsere har dem stadig), og knapperne bliver strammere. Det virker sammen med [Værktøjslinjens rækker](topic:settings#toolbar-rows): Kompakt og **1 række** giver tegningen mest plads. {{cmd:TOPAREA}} vælger den.

## Hjørneindikator

Hvad der sidder i tegningens hjørne:

- **Automatisk** (start): akseikonet på fanen {{ui:Model}} og ViewCube på fanen {{ui:3D}}.
- **Akseikon**: X- og Y-markøren nederst til venstre på fanen {{ui:Model}}, og en lille X-, Y- og Z-markør på fanen {{ui:3D}}.
- **ViewCube**: en terning øverst til højre på begge faner. På fanen {{ui:Model}} viser den tegningen oppefra, og klik på en anden flade, kant eller hjørne åbner fanen {{ui:3D}} og kigger derfra. På 3D-fanen drejer den med visningen: klik for at se fra en side, træk for at kredse, og huset går tilbage til iso-visningen. Se [Model i 3D](topic:3d-solids).
- **Ingen**: intet i hjørnet.

Ark viser ingen af dem.

## Længde og areal af markeringen

- **I statuslinjen** (start): når objekter er valgt, viser statuslinjen deres samlede længde og det samlede areal af de lukkede. Se [Summer for en markering](topic:properties-panel#totals-of-a-selection).
- **Skjult**: statuslinjen udelader dem. {{ui:Egenskaber}} viser dem stadig for flere objekter.

## Gitter, ortogonal og fang

Disse er ikke i dialogen: knapperne {{ui:Gitter}}, {{ui:Ortogonal}} og {{ui:Fang}} i statuslinjen (eller {{key:F7}}, {{key:F8}}, {{key:F3}}) og listen over objektfang ved siden af dem huskes, når du forlader dem. Se [Fang til punkter på objekter](topic:object-snaps).
