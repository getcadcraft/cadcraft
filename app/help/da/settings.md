---
title: CadCraft-indstillinger
summary: Indstillingerne, der hører til tegneappen: markørens størrelse, hvor en indsat kopi hænger fra markøren, hvad et klik gør ved valget, hvor mange rækker værktøjslinjen bruger, hvor kommandolinjen sidder og hvor høj den er, et kompakt øverste område og hjørneindikatoren.
keywords: kommandolinje, flydende kommandolinje, frigør, fastgør, én linje, f2, kommandohistorik, commandline, cmdline, toparea, øverste område, kompakt, cursorsize, markør i fuld skærm, fuldskærmsmarkør, kant til kant, værktøjslinjerækker, værktøjslinjevisning, ctrl f1, indstillinger, præferencer, valgmuligheder, hjørneindikator, view cube, aksemarkør, ucs-ikon, markør, krydsmarkør, vælgeboks, indsæt-punkt, basispunkt, klik på objekter, valg, pickadd, shift, nulstil
from: 0896eb42
---

Åbn {{ui:Indstillinger}} med tandhjulet i app-linjen eller {{key:Mod+,}}. Den første fane, {{ui:CadCraft}}, rummer de indstillinger, der hører til denne app; {{ui:Generelt}} rummer dem, alle apps i familien deler (tema, størrelse på panelets tekst og bredder, værktøjslinjens udseende og rækkefølge). CadCraft's indstillinger findes kun i appen: du ændrer dem her, og denne browser husker dem. {{ui:Nulstil CadCraft-indstillinger}} sætter alle tilbage til start.

## Markør

**Lille**, **Mellem** (start), **Stor** eller **Fuld skærm**: størrelsen på krydset og vælgeboksen i tegningen. En større vælgeboks vælger også objekter fra lidt længere væk, hvilket hjælper på en berøringsskærm eller en meget fin tegning.

**Fuld skærm** lader krydsets to linjer gå kant til kant over tegningen, også når ingen kommando kører, så du med øjnene kan kontrollere, at to ting flugter over hele visningen. Med visningen delt bliver linjerne i den rude, du arbejder i. Det samme som AutoCAD's {{cmd:CURSORSIZE}} 100: skriv {{cmd:CURSORSIZE}} og 100 for fuld skærm; et mindre tal vælger den nærmeste størrelse (under 5 Lille, 5 til 9 Mellem, 10 til 99 Stor).

## Indsæt-punkt

Hvor en indsat kopi hænger fra markøren efter {{key:Mod+V}} ({{cmd:PASTECLIP}}), indtil du klikker:

- **Nederste venstre hjørne** (start): det nederste venstre hjørne af de kopierede objekters udstrækning, som i AutoCAD.
- **Centrum**: midten af deres udstrækning. Praktisk til at placere et symbol med øjet.

En kopi lavet med `COPYBASE` hænger altid fra det basispunkt, du valgte. {{ui:Sæt ind på samme sted}} ({{key:Mod+Shift+V}}) ignorerer denne indstilling: den beholder de oprindelige koordinater. Se [Kopiér, sæt ind og duplikér](topic:copy-paste).

## Klik på objekter

Hvad et klik i tegningen gør ved valget, når ingen kommando kører:

- **Føjer til valget** (start): hvert klik eller vindue føjer objekter til; {{key:Shift}}+klik, eller et {{key:Shift}}+vindue, fjerner dem.
- **Erstatter valget**: et klik eller vindue vælger kun det, det rammer. {{key:Shift}}+klik føjer et objekt til, eller fjerner et, der allerede er valgt; et {{key:Shift}}+vindue føjer til.

Ved en `Select objects:`-prompt inde i en kommando føjer klik altid til (og {{key:Shift}} fjerner), uanset denne indstilling. Se [Vælg objekter](topic:select-objects).

## Klik på et tomt sted

Hvad et klik et sted uden objekt gør, når ingen kommando kører. Begge måder starter et valgvindue (et andet klik afslutter det).

- **Rydder valget** (start): det, der var valgt, slippes. Hold {{key:Shift}} nede, mens du klikker, for at beholde det.
- **Beholder valget**: valget bliver, som i andre tegneprogrammer; vinduet føjes til det. Tryk {{key:Esc}} for at rydde valget.

## Træk for at vælge

Hvad et tryk og træk på et tomt sted tegner:

- **Lasso** (start): en frihåndsomrids. Flytter du først til højre, vælges det, der ligger helt inde i den; flytter du først til venstre, vælges det, den rører. {{key:Space}} under træk skifter mellem vindue, kryds og hegn.
- **Rektangel**: boksen, som et klik og et andet klik tegner den.

{{cmd:LASSOMODE}} `1` eller `0` sætter det samme. Se [Lassovalg](topic:lasso-selection).

## Træk for at beskære og forlænge

Hvad et tryk på et tomt sted og et træk gør i {{cmd:TRIM}} og {{cmd:EXTEND}}:

- **En sti** (start): en frihåndssti; hvert stykke den krydser beskæres (eller forlænges).
- **Et vindue**: en boks; hvert stykke den rører beskæres, som valgmuligheden `C` gør.

Se [Beskær og forlæng](topic:trim-and-extend).

## Værktøjslinjens placering

{{ui:CadCraft}} › {{ui:Værktøjslinjens placering}}: **Øverst** (start, som det altid har været), **Nederst**, **Venstre** eller **Højre**. Til venstre eller højre stables værktøjsgrupperne i en kolonne, der ruller, når den er højere end vinduet, og knapperne bryder to eller tre pr. linje. Valget gemmes med dine indstillinger, og {{cmd:TOOLBARDOCK}} (`TBDOCK`) sætter det fra kommandolinjen. {{ui:Generelt}} › {{ui:Nulstil layoutet}} sætter værktøjslinjen tilbage øverst.

Menustilenes linjer ligger inde i værktøjslinjen og flytter sig med den, men {{ui:Bånd}}-stilen er lavet til at løbe hen over toppen eller bunden: på en side får den en smal kolonne, der ruller. På en telefon bliver værktøjslinjen, hvor telefonlayoutet sætter den.

## Værktøjslinjerækker

Hvor mange linjer værktøjerne bruger over tegningen, i CadCraft-værktøjslinjen og i stilene {{ui:Klassisk tegning}} og {{ui:Bånd}}:

- **Ombryd til bredden** (start): værktøjerne bryder til vinduets bredde.
- **2 rækker**: højst to linjer. Brydes værktøjerne til to linjer eller færre ved denne bredde, bryder de bare; ellers står de i to rækker, der ruller sidelæns.
- **1 række**: én linje, der ruller sidelæns, hvilket giver tegningen mest plads.

{{key:Shift+Ctrl+F1}} skifter gennem de tre, og {{cmd:TOOLBARROWS}} sætter en af dem. Hvad knapperne viser (ikoner og tekst, kun ikoner eller kun tekst), er en indstilling under {{ui:Generelt}} › {{ui:Værktøjslinje}}; {{key:Ctrl+F1}} skifter gennem den, og {{cmd:TOOLBAR}} sætter den.

## Kommandolinje

Kommandolinjen kan blive siddende under tegningen, som den altid har gjort, eller svæve over den, og den kan være så tynd som én linje.

- **Frigør den.** Træk grebet i dens venstre ende ind i tegningen, eller vælg {{ui:Frigør over tegningen}} i dens menu {{ui:Indstillinger for kommandolinjen}} (de tre prikker i dens højre ende). Træk grebet igen for at flytte den; dens plads huskes, når vinduet ændrer størrelse. Træk i dens højre kant for at gøre den bredere eller smallere. Slip den på statuslinjen, eller vælg {{ui:Fastgør nederst}}, for at fastgøre den igen.
- **Gør den tyndere eller højere.** Træk i dens øverste kant: hvert trin er én historiklinje. Helt ned til nul linjer er den en **énlinjes kommandolinje**: kun prompten og det, du skriver, og en ny besked vises over den et øjeblik. Et dobbeltklik på den øverste kant skifter mellem én linje og den højde, du havde.
- **Historikken.** {{key:F2}}, eller uret på kommandolinjen ({{ui:Kommandohistorik (F2)}}), åbner hele historikken over linjen (under den, når linjen svæver nær toppen af vinduet). Skrivning går stadig til kommandolinjen; {{key:PageUp}} og {{key:PageDown}} ruller historikken, og {{key:Esc}}, {{key:F2}} eller et klik et andet sted lukker den. En tast af din egen på F2 vinder over dette.
- **Fra tastaturet.** Grebet er en knap: når det har fokus, flytter piletasterne en flydende kommandolinje (med {{key:Shift}} i større trin); {{key:Up}} frigør en fastgjort, og {{key:Down}} ved nederste kant fastgør den. Den øverste kant er en skillelinje: {{key:Up}} og {{key:Down}} tilføjer eller fjerner en linje, {{key:Home}} gør den til én linje, {{key:End}} til den højeste. Skærmlæsere læser stadig hver besked, også i énlinjes kommandolinjen.

{{ui:CadCraft}} › {{ui:Kommandolinje}} har de samme valg: {{ui:Fastgjort nederst}} eller {{ui:Frigjort}}, {{ui:Viste historiklinjer}} (0 til 12) og {{ui:Standardhøjde}}. {{cmd:COMMANDLINE}} (`CMDLINE`) sætter dem fra kommandolinjen. Placeringen og højden huskes for CadCraft i denne browser sammen med resten af layoutet, så et gemt arbejdsmiljø bærer dem med; {{ui:Generelt}} › {{ui:Nulstil layoutet}} fastgør kommandolinjen igen i sin standardhøjde. På en telefon bliver kommandolinjen fastgjort med én linje historik; historikknappen virker også dér.

Når vinduet er kort, og layoutkontrollen tilbyder et strammere layout, sætter dens {{ui:Ja}} også kommandolinjen til én linje, hvis tegningen stadig er for kort efter værktøjslinjerne.

## Øverste område

{{ui:CadCraft}} › {{ui:Øverste område}}: **Standard** (start) eller **Kompakt**. Kompakt holder linjerne over tegningen små i alle menustile: gruppenavnene og ordene under ikonerne forsvinder (værktøjstips og skærmlæsere har dem stadig), og knapperne bliver tættere. Det virker sammen med [Værktøjslinjerækker](topic:settings#toolbar-rows): Kompakt og **1 række** giver tegningen mest plads. {{cmd:TOPAREA}} sætter den.

## Hjørneindikator

Hvad der står i tegningens hjørne:

- **Automatisk** (start): aksemarkøren på fanen {{ui:Model}} og ViewCube på fanen {{ui:3D}}.
- **Aksemarkør**: X- og Y-markøren nederst til venstre på fanen {{ui:Model}}, og en lille X-, Y- og Z-markør på fanen {{ui:3D}}.
- **ViewCube**: en terning øverst til højre på begge faner. På fanen {{ui:Model}} viser den tegningen oppefra, og klik på en anden flade, kant eller hjørne åbner fanen {{ui:3D}} med udsigt derfra. På 3D-fanen drejer den med visningen: klik for at se fra en side, træk for at kredse, og huset går tilbage til iso-visningen. Se [Model i 3D](topic:3d-solids).
- **Ingen**: intet i hjørnet.

Ark viser ingen af dem.

## Længde og areal af valget

- **I statuslinjen** (start): når objekter er valgt, viser statuslinjen deres samlede længde og det samlede areal af de lukkede. Se [Summer for et valg](topic:properties-panel#totals-of-a-selection).
- **Skjult**: statuslinjen udelader dem. Egenskaber viser dem stadig for flere objekter.

## Gitter, ortogonal og fang

De er ikke i dialogen: knapperne {{ui:Gitter}}, {{ui:Ortogonal}} og {{ui:Fang}} i statuslinjen (eller {{key:F7}}, {{key:F8}}, {{key:F3}}) og listen over objektfang ved siden af dem huskes, når du forlader dem. Se [Fang til punkter på objekter](topic:object-snaps).
