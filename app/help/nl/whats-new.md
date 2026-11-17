---
title: Wat is er nieuw in 0.9
summary: Arceringen die hun grens volgen, laaggroepen, gestapelde verdiepingen, slimme 2D-wanden met deuren en ramen, tekststijlen en een opgemaakte teksteditor, een zwevende opdrachtregel, rastersnap, tien manieren om een boog te tekenen, en het paneel Documenten.
keywords: wat is er nieuw, 0.9, releasenotities, wijzigingslog, arcering, associatieve arcering, hatchedit, pat-bestand, patroonbestand, laaggroepen, laygroup, verdiepingen, gestapelde verdiepingen, floorlayers, slimme wanden, wand, deur, raam, wandgereedschappen, tekststijl, stijl, mtext-editor, alinea-tekst, opmaak, zwevende opdrachtregel, opdrachtregel, bovengebied, compact, snap aan raster, grid snap, f9, boog, documentenpaneel, uitchecken, UK-staalmaten, draw.io, Thaise tekst, dxf r12, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, automatisch aanvullen, schim, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, toegang, tekenen zonder zicht, grenzen, richtingen, aunits, shx, diagram, ole, geschiedenis, vergelijken, in woorden, eigenschappen, voet en duim, uitrekken, talen, invoerapparaten, problemen, live, assistenten
from: 8b6dea0b
---

Dit is wat er in CadCraft 0.9 is veranderd, vergeleken met 0.8.1. CadCraft is de 2D- en 3D-tekenapp van CadCraft Studio 0.9 en zijn acht apps. 0.9 maakt het plattegrondtekenen af, voegt tekststijlen en een echte teksteditor toe, en geeft u meer ruimte op het scherm.

## Nieuw

### Plattegrondtekenen

- **Arceringen die hun grens volgen.** {{cmd:HATCH}} koppelt zich aan wat hem begrenst. Verplaats, roteer of schaal de grens, dan volgen de arcering en het patroon ervan; vorm de grens om, dan wordt de arcering opnieuw berekend. {{cmd:HATCHEDIT}} (`HE`) wijzigt een arcering achteraf en maakt of beëindigt de koppeling. Zie [Arcering en vulgebieden](topic:hatch).
- **Arcering-patroonbestanden.** Bij de vraag van {{cmd:HATCH}} `Geef een binnenpunt op` typt u `F` voor een patroonbestand en kiest u een `.pat`-bestand. Alleen bestanden die in het gebruikelijke formaat zijn geschreven, zijn uitgeprobeerd.
- **Laaggroepen.** In {{ui:Hulpmiddelen}} op het paneel {{ui:Lagen}}: {{ui:Nieuwe groep}}, {{ui:Kant-en-klare groepen toevoegen}}, {{ui:Groeperen op naam}} en {{ui:Zoek een laag}}; of typ {{cmd:LAYGROUP}} (`LG`). Zie [Een tekening ordenen met lagen](topic:layers#group-layers).
- **Gestapelde verdiepingen.** {{cmd:FLOORS}} (`FLR`), of {{ui:Vloeren…}} in het menu {{ui:Meer}} van de groep {{ui:Weergave}}. Een viewport op een blad kan één verdieping tonen onder {{ui:Getoonde vloer}} in Eigenschappen. {{cmd:FLOORLAYERS}} maakt van verdiepingen lagen voor een bestand dat naar iemand anders gaat. Zie [Verdiepingen stapelen in één tekening](topic:floors).
- **2D-slimme wanden, deuren en ramen.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) en {{cmd:DELOPENING}}. Hoeken, T-verbindingen en kruisingen worden voor u berekend. Wanden houden bij hoe ze aansluiten, en Eigenschappen krijgt {{ui:Samenvoegen aan het begin niet toestaan}} / {{ui:Samenvoegen aan het eind niet toestaan}}, een {{ui:Positielijn}} en een bewerkbare {{ui:Lengte}}. Zie [Slimme wanden, deuren en ramen tekenen in 2D](topic:walls-2d).
- **Het wandgereedschap voor plattegrondwanden.** Typ {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} en de rest. Ze hebben nog geen werkbalkknoppen. Zie [Wandvormen, sneden, offsets en vergrendelingen voor 2D-wanden](topic:wall-tools-2d).

### Tekst

- **Tekststijlen.** {{cmd:STYLE}} (`ST`), of {{ui:Tekststijl}} op de werkbalk {{ui:Tekenen}}: benoemde stijlen met een lettertype, hoogte, breedtefactor en schuinstand. Zie [Het lettertype en de grootte van tekst instellen met tekststijlen](topic:text-styles).
- **Een opgemaakte alinea-teksteditor.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} of een dubbelklik op tekst opent een vak met lettertype, grootte, vet, cursief, onderstreping, doorhalen, kleur, uitlijning, en de tekens voor graden, plus-min en diameter, plus {{ui:OK}} en {{ui:Annuleren}}. Zie [Alinea-tekst opmaken](topic:format-paragraph-text).
- **Een diagram uit draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) leest ook geplakte draw.io-XML. Zie [Een diagram uit tekst tekenen](topic:text-to-diagram).
- **Thaise tekst in een PDF-plot.** Die werd eerder als vraagtekens afgedrukt.

### Meer ruimte en tekenhulpmiddelen

- **Een zwevende, dunnere opdrachtregel en een compact bovengebied.** Sleep de grip van de opdrachtregel om hem zwevend te maken, sleep aan de bovenrand om er minder regels van te maken, {{key:F2}} opent de geschiedenis. {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Opdrachtregel}} en de keuzes voor het bovengebied hebben dezelfde instellingen. Zie [Instellingen](topic:settings#command-line).
- **Menu objectsnap.** Klik met de rechtermuisknop op {{ui:Snap}} in de statusbalk, of typ {{cmd:OSNAP}}.
- **Snap aan het raster.** De knop {{ui:Rastersnap}} in de statusbalk, of {{key:F9}}: aangewezen punten gaan naar het dichtstbijzijnde rasterpunt wanneer geen objectsnap het punt heeft genomen.
- **Boog op tien manieren, en Doorgaan.** {{ui:Boog}} op de werkbalk {{ui:Tekenen}} of {{cmd:ARC}}: 3 punten, de familie Begin/Middelpunt/Eind en de familie Middelpunt/Begin/Eind, en Doorgaan (druk op {{key:Enter}} bij het beginpunt) vanaf de laatste lijn, boog of polylijn.
- **Het paneel Documenten.** {{cmd:DOCUMENTS}} (`DOCS`) of {{ui:Documenten…}} in het menu {{ui:Meer}} van de groep {{ui:Weergave}}: revisie, status en uitchecken voor elke tekening in een projectmap. Het opent als gecentreerd dialoogvenster. Zie [Documenten](topic:documents).

### Bestanden

- **UK-staalmaten.** 976 profielen in het paneel Standaard, getypt zoals op tekeningen (bijvoorbeeld `305x165x40 UB`).
- **Zuid-Afrikaanse pakketten** (tekenpraktijk en bouwvoorschriften) als pakketten van de add-on Bouwvoorschriften. De getallen zijn niet gecontroleerd.
- **Add-ons voor CadCraft,** op aanvraag toegevoegd en standaard uit: ontwerp van binnenverlichting, chipontwerp (HDL naar indeling), routerfrezen, circuitsimulatie, rolkettingtandwielen en landpakketten van bouwvoorschriften.

## Opgelost

- Een arcering verplaatsen, roteren of schalen liet het patroon achter.
- {{cmd:GRIDMOVE}} nam een hele plattegrondwand mee die alleen op de rasterlijn begint. Een wand wordt nu beoordeeld aan de hand van zijn uiteinden.
- Het raster toonde zich alleen binnen de tekengrenzen, zelfs met grenzen uit.
- De blokkenlijst in het zijpaneel scrolt, en een naam die geen blok is, somt de blokken op die ermee beginnen ("Bedoelt u misschien").
- DXF R12-bestanden die AutoCAD weigerde ("Unknown group 1001 for table"), openen nu daar.
- Zeer grote bestanden (ongeveer 70.000 entiteiten en meer) konden niet openen met "Maximum call stack size exceeded".
- DWG-bestanden van AutoCAD 2018 en nieuwer met een hoge onderhoudsversie konden niet openen met "bad BITLONG code 11".
- In het alinea-tekstvak behoudt een nieuwe grootte die voor een geselecteerd deel is getypt de selectie.

## In elke app

Bootstrap-tooltips bij elk bedieningselement met een hint, een startaanwijzing die u kunt sluiten, tabbalken die scrollen wanneer ze niet passen, en een browsertabtitel die de geopende tekening volgt (`<tekening> - CadCraft | CadCraft`). {{ui:Instellingen}} › {{ui:Indeling}} is nu een keuzelijst met tweeregelige keuzes. De talenlijst in {{ui:Instellingen}} is langer dan in 0.8. Live bewerken, bibliotheekcollecties en eenheden voor gewicht en temperatuur worden beschreven in de Studio-notities.

## Eerlijke grenzen

- Alinea-tekst heeft geen opsommingstekens of genummerde lijsten, geen tabliniaal en geen uitvullen. Geplotte PDF's zetten tekst in Helvetica.
- Plattegrondwanden zijn recht, dus een boog wordt getekend als korte wanden. De controle van het wandgereedschap door de gemeenschap is nog niet gedaan.
- Laaggroepen worden niet in het eigen formaat van AutoCAD geschreven, dus AutoCAD toont een platte lijst. Andere programma's tonen alle verdiepingen samen, tenzij u {{cmd:FLOORLAYERS}} uitvoert.
- Het paneel Documenten is nog niet door twee mensen op een echte gedeelde map geprobeerd. Routerfrezen is op geen enkele echte machine gedraaid. De verlichtingsberekening is gecontroleerd aan de hand van een fotontrace, niet van een ander programma. Technische add-ons zijn controlehulpmiddelen, geen vervanging van de beoordeling door een ingenieur.
- Talen anders dan Engels zijn machinale concepten, en sommige nieuwe woorden zijn alleen in het Engels.

## Eerder: 0.8 en 0.8.1

Dit is wat er in CadCraft 0.8 en 0.8.1 is veranderd, vergeleken met 0.7. 0.8 (1 november 2026) voegt tekenhulpmiddelen toe die werken vanuit uw eigen tekening, aan de hand van regels op uw computer en zonder model, en 0.8.1 (2 november 2026) herstelt fouten die daarna zijn gemeld.

### Nieuw

**Tekenen dat uw gedachte afmaakt**

- **Een schim laat zien wat er daarna komt.** Zonder lopende opdracht toont een grijze gestippelde schim wat de eigen patronen van uw tekening zeggen dat er komt: de volgende stijl op dezelfde afstand, de volgende trede van een trap, de ontbrekende wand van een ruimte. Druk op {{key:Tab}} om hem als één stap die u ongedaan kunt maken te tekenen, of op {{key:Esc}} om hem te verwerpen. Hij kijkt alleen naar de nieuwste objecten, zodat hij soepel blijft bij een grote tekening. Zet hem uit in {{ui:Instellingen}} › {{ui:CadCraft}} of met {{cmd:AUTOCOMPLETE}} `Off`.
- **Het volgende punt terwijl u een lijn tekent.** Midden in {{cmd:LINE}} of {{cmd:PLINE}} is de schim het volgende punt: de volgende trede van een trap, het vierde hoekpunt van een rechthoek, of het punt dat hem sluit. Breng de cursor ernaartoe en druk op {{key:Tab}}, alsof u er had geklikt.
- **Penschetsen worden exacte geometrie.** {{cmd:SKETCHFIX}}: teken ruwe streken met een pen, muis of vinger, en elk wordt een strakke lijn, cirkel, boog, rechthoek of polylijn, die vastklikt aan wat al getekend is. Zie [Schetsen met een pen en exacte geometrie krijgen](topic:sketch-with-a-pen).
- **Een foto van een schets wordt een tekening.** {{cmd:PHOTOSKETCH}} (`PSK`) vindt het papier in een foto, rechtstrekt het perspectief, past het papierformaat en de schaal toe die u opgeeft, en traceert de penlijnen op een laag voor elke penkleur. Letters worden niet getraceerd.
- **Bemaat het op basis van regels.** {{cmd:AUTODIM}} (`ADIM`) maakt ketens van maatvoeringen langs de zijden die u kiest, een totale afmeting, openingsbreedtes, gatdiameters en, met `Grid`, rasterafstanden. Het herhaalt nooit een maatvoering die er al is.
- **Verplaats een rasterlijn en de set volgt.** {{cmd:GRIDMOVE}} (`GM`): wanden die op de rasterlijn eindigen, rekken mee uit, wanden langs de lijn, kolommen, de bel en de tag verplaatsen, en maatvoeringen erop meten de nieuwe afstand. Eén stap die u ongedaan kunt maken.

**Bladen, details en tags**

- **Bladen die zichzelf indelen.** {{cmd:AUTOSHEET}} neemt uw benoemde weergaven (of de losse delen van het model), kiest een papierformaat en een standaardschaal, en zet de weergaven op nieuwe bladen met een titelblok en een onderschrift met naam en schaal. Alles blijft bewerkbaar. Zie [Bladen voor mij indelen](topic:lay-out-sheets-for-me).
- **De details van uw bedrijf, aangeboden terwijl u tekent.** {{cmd:DETAILS}} (`DET`) bewaart uw eigen detailblokken. Wanneer wat u selecteert overeenkomt met er een op de woorden in de namen van lagen, blokken en notities, meldt de statusbalk dat; kies hem en plaats hem. {{cmd:DETAILS}} › Delen zet uw lijst in uw map Documenten en haalt op wat uw team heeft toegevoegd. {{ui:Instellingen}} zet de aanbiedingen uit.
- **Tags op blokken.** {{cmd:TAGS}} definieert een tag (zijn soort, de waarden die hij mag aannemen, de blokken waarop hij van toepassing is), zet hem op de blokverwijzingen die u selecteert, en somt ze op als een staat die u als CSV kunt opslaan. De definities worden in de DWG bewaard. Zie [Tags](topic:tags).
- **Tekengrenzen.** {{cmd:LIMITS}} stelt een rechthoek in voor de tekening: het raster vult die, en {{ui:Alles tonen}} toont hem. De grenzen worden als omtrek getoond en in DWG en DXF opgeslagen, met de papiergrenzen. Zie [De tekengrenzen instellen](topic:drawing-limits).

**Samenwerken met anderen en andere programma's**

- **Een markup omzetten in een revisie.** {{cmd:REDLINE}} leest het pakket dat MarkupCraft schrijft en somt elke wijziging op. Accepteer of verwerp elk met een notitie; de geaccepteerde krijgen een revisiewolk en een revisielogboek in één stap die u ongedaan kunt maken, en u slaat het antwoordenbestand op dat de markups in MarkupCraft sluit. Zie [Een markup omzetten in een revisie](topic:redline-to-revision).
- **Tekeningen die git en Fossil kunnen samenvoegen.** Met {{ui:Samenvoegbare bestanden}} aan in {{ui:Instellingen}} › {{ui:CadCraft}} krijgt elk object een sleutel die nooit verandert (bestanden zijn ongeveer 10 procent groter). `cadcraft merge base ours theirs` voegt dan twee bewerkingen van één DWG- of DXF-object per object samen en meldt alleen waar twee mensen hetzelfde hebben gewijzigd. Zie [Bewerkingen van twee mensen op één tekening samenvoegen](topic:merge-drawings).
- **Wat er veranderd is, in woorden.** In Geschiedenis geeft Vergelijken een gewone lijst: waar dingen zijn veranderd, hoe groot de plekken zijn, wat is toegevoegd, verwijderd of gewijzigd, en de tekst die is bewerkt. Zie [Met woorden zeggen wat er veranderd is](topic:changes-in-words).
- **Richtingshoeken en hoeken.** Typ een richtingshoek zoals een landmeter die schrijft, bijvoorbeeld N45°23'30"E, of in graden, minuten en seconden, overal waar naar een hoek wordt gevraagd; AUNITS bepaalt hoe hoeken worden getoond. Zie [Richtingshoeken en hoeken typen en tonen](topic:bearings-and-angles).
- **Uw eigen SHX-lettertypen.** Geef CadCraft een map met SHX-lettertypen, en tekststijlen die ze noemen, worden daarin getekend, op het scherm en in plots. Zie [Tekst in uw eigen SHX-lettertypen tekenen](topic:shx-fonts).
- **Een diagram uit tekst.** {{cmd:DIAGRAM}} leest een Mermaid-stroomdiagram, een PlantUML-componentdiagram, D2 of een lijst van-naar en tekent blokken en verbindingen die u kunt bewerken. Zie [Een diagram uit tekst tekenen](topic:text-to-diagram).
- **OLE-objecten in een DWG.** {{cmd:OLELIST}} somt de OLE-objecten op die een DWG bevat en die CadCraft niet zelf kan plaatsen, en plaatst een kopie van een afbeelding waar u het aangeeft. Zie [Afbeeldingen](topic:pictures#objects-from-other-programs-ole).
- **Uw berekeningen blijven bij de tekening.** Rekenbladen en ontwerpredenen worden in de DWG bewaard, bij de klassentabel.

**Tekenen zonder zicht**

- Zet {{ui:Tekenen zonder zicht}} aan in {{ui:Instellingen}} (of typ {{cmd:ACCESS}} en antwoord `On`). CadCraft spreekt elke opdracht en elk resultaat uit via uw schermlezer, beschrijft de tekening en wat er bij de cursor ligt, laat u de cursor verplaatsen en punten kiezen met het toetsenbord, en speelt een geluid af voor elke snap en grip. Waar uw browser spraak op uw computer kan herkennen, kunnen opdrachten worden uitgesproken. Zie [Tekenen zonder zicht](topic:draft-without-sight).

**In elke app**

- **Talen.** 54 talen; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili, Oezbeeks). Talen naast het Engels zijn machinale concepten tot een moedertaalspreker ze heeft nagelezen.
- **Invoerapparaten.** Bediening met trackpad, pen, 3D-muis, gamecontroller en MIDI.
- **Werkbalkrijen en het eigenschappenraster.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} biedt Omlopen, 2 rijen of 1 rij in de andere apps. CadCraft houdt zijn eigen instelling in {{ui:Instellingen}} › {{ui:CadCraft}} (zie [Werkbalkrijen](topic:settings#toolbar-rows)). Het gedeelde eigenschappenraster zit in drie andere apps, niet in CadCraft.
- **Problemen, Live en add-ons.** Een gedeeld paneel Problemen dat in elke app waarschuwt, een Live-weergave van wie waar is in CadCraft Studio (zie [Samen aan één tekening werken met Live TeamWork](topic:work-live)), en een lijst met add-ons.
- **AI aansluiten.** Eén verbinding van CadCraft Studio met alle acht apps, met een alleen-lezen-, voorstel- of bewerkniveau per app en een logboek in gewone woorden van wat de assistent deed. CadCraft heeft geen eigen AI, en Vragen in elke app gebruikt de AI die u verbindt.

### Opgelost in 0.8.1

- **Eigenschappen toonden 150 in plaats van 12'-6"** in tekeningen met voet en duim. Velden die de app zelf leest, behouden weer hun tekst.
- **DWG-bestanden waarvan de klassensectie als het verkeerde type werd gelezen** (GitHub cadcraft#5) openen nu correct.
- **De kruisdraad verschijnt niet meer achter pop-ups.**
- **Studio en de verpakte edities kunnen de taal tijdens het gebruik wisselen.** Voorheen waren ze alleen Engels. Nog niet op elk platform getest: laat ons weten als de taal niet verandert.
- **Tablets in staand formaat** geven de vrije rasterhoogte aan het tekenvlak, en de bladenmodus start bij 760 px of minder.
- **STRETCH met een kruisvenster, en LIMITS,** werden gemeld op Studio 0.8.0 en waren in de webversie 0.8 al goed; de melder had een oudere installatie. Studio 0.8.1 bevat ze.

### Nog niet in deze versie

- **0.8 en 0.8.1 zijn niet met een code-ondertekening ondertekend.** Windows kan waarschuwen (kies {{ui:Meer informatie}} en daarna {{ui:Toch uitvoeren}}); op een Mac klikt u met de rechtermuisknop op CadCraft Studio en kiest u {{ui:Openen}}. Winkelversies staan in de wacht, en de iPad- en iPhone-versie is niet opnieuw gebouwd voor 0.8.1.
- **Penschetsen en foto's van schetsen** zijn alleen geprobeerd met verzonnen foto's en een muis, nog niet met een echte pen, aanraakscherm of handschets op papier.
- **Tekenen zonder zicht** is getest met geautomatiseerde controles, nog niet met een schermlezer of een blinde tester.
- **Details delen** is niet door twee personen gecontroleerd, en een Team Cloud Plan-map als map Documenten is nog niet gebouwd.
- **Samenvoegen** werkt voor de DWG- en DXF-bestanden van CadCraft; voor de bestanden van de andere apps is het nog niet gebouwd.
- **Ongedaan maken over vensters heen:** CadCraft meldt elke afgeronde stap, maar Studio heeft nog geen enkele Ongedaan maken voor alle apps; elke app maakt zijn eigen stappen ongedaan.
- **OLE-objecten van een DWG** blijven bewaard maar worden niet op hun plaats getekend.
- **Het lezen van plotstijltabellen (CTB-bestanden)** uit andere programma's is gebouwd maar is nog niet gecontroleerd aan een bestand uit een ander programma.
- **AI aansluiten:** eenklik-verbinding in Studio, de gehoste connector voor browser-AI, uw eigen API-sleutel in Studio en het gepubliceerde MCP-pakket zijn in deze uitgave niet beloofd.

Voor de versie hiervoor, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
