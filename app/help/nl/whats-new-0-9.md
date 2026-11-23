---
title: Wat is er nieuw in 0.9 (eerder)
summary: Arceringen die hun begrenzing volgen, laaggroepen, gestapelde vloeren, 2D-slimme wanden met deuren en ramen, tekststijlen en een editor voor opgemaakte tekst, een zwevende opdrachtregel, rasterkoppeling, tien manieren om een boog te tekenen, en het Documentenpaneel.
keywords: wat is er nieuw 0.9, eerdere uitgave, wat is er nieuw, 0.9, release-notes, wijzigingenlog, arcering, associatieve arcering, hatchedit, pat-bestand, patroonbestand, laaggroepen, laygroup, vloeren, gestapelde vloeren, floorlayers, slimme wanden, wand, deur, raam, wandgereedschappen, tekststijl, stijl, mtext-editor, alinea-tekst, opmaak, zwevende opdrachtregel, opdrachtregel, bovenste gebied, compact, rasterkoppeling, grid snap, f9, boog, documentenpaneel, uitchecken, Britse staalmaten, draw.io, Thaise tekst, dxf r12, wat is er nieuw, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, autocomplete, schim, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, samenvoegen, git, fossil, access, tekenen zonder zicht, schermlezer, grenzen, peilingen, aunits, shx, diagram, ole, geschiedenis, vergelijken, in woorden, eigenschappen, voet en inch, rekken, talen, invoerapparaten, problemen, live, assistenten
from: 3451e64c
---

Dit is wat er in CadCraft 0.9 is veranderd, vergeleken met 0.8.1. CadCraft is de 2D- en 3D-tekenapp van CadCraft Studio 0.9 en zijn acht apps. 0.9 maakt het plantekenen af, voegt tekststijlen en een echte teksteditor toe, en geeft meer ruimte op het scherm.

## Nieuw

### Plantekenen

- **Arceringen die hun begrenzing volgen.** {{cmd:HATCH}} koppelt aan wat hem begrenst. Verplaats, draai of schaal de begrenzing, en de arcering en haar patroon volgen; herform de begrenzing, en de arcering wordt opnieuw berekend. {{cmd:HATCHEDIT}} (`HE`) wijzigt een arcering achteraf en maakt of beëindigt de koppeling. Zie [Arcering en gevulde gebieden](topic:hatch).
- **Arceringspatroonbestanden.** Bij de vraag van {{cmd:HATCH}} `Pick internal point` typt u `F` (Patroonbestand) en kiest u een `.pat`-bestand. Alleen bestanden in het gebruikelijke formaat zijn geprobeerd.
- **Laaggroepen.** In {{ui:Hulpmiddelen}} op het paneel {{ui:Lagen}}: {{ui:Nieuwe groep}}, {{ui:Kant-en-klare groepen toevoegen}}, {{ui:Groeperen op naam}}, en {{ui:Zoek een laag}}; of typ {{cmd:LAYGROUP}} (`LG`). Zie [Een tekening ordenen met lagen](topic:layers#group-layers).
- **Gestapelde vloeren.** {{cmd:FLOORS}} (`FLR`), of {{ui:Vloeren…}} in het menu {{ui:Meer}} van de groep {{ui:Weergave}}. Een viewport op een blad kan één vloer tonen onder {{ui:Getoonde vloer}} in Eigenschappen. {{cmd:FLOORLAYERS}} zet vloeren om in lagen voor een bestand dat naar iemand anders gaat. Zie [Vloeren stapelen in één tekening](topic:floors).
- **2D-slimme wanden, deuren en ramen.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) en {{cmd:DELOPENING}}. Hoeken, T-verbindingen en kruisingen worden voor u berekend. Wanden houden bij hoe ze verbinden, en Eigenschappen krijgt Samenvoegen niet toestaan aan begin / aan eind, een Plaatslijn en een bewerkbare Lengte. Zie [2D-wanden, deuren en ramen tekenen](topic:walls-2d).
- **Het wandgereedschap op plattegrondwanden.** Typ {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} en de rest. Ze hebben nog geen werkbalkknoppen. Zie [Wandvormen, sneden, offsets en vergrendelingen voor 2D-wanden](topic:wall-tools-2d).

### Tekst

- **Tekststijlen.** {{cmd:STYLE}} (`ST`), of {{ui:Tekststijl}} op de werkbalk {{ui:Tekenen}}: benoemde stijlen met een lettertype, hoogte, breedtefactor en schuinte. Zie [Het lettertype en de grootte van tekst instellen met tekststijlen](topic:text-styles).
- **Een editor voor opgemaakte alineatekst.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} of een dubbelklik op tekst opent een vak met lettertype, grootte, vet, cursief, onderstreept, doorgestreept, kleur, uitlijning, en de teken voor graden, plus-minus en diameter, plus {{ui:OK}} en {{ui:Annuleren}}. Zie [Opgemaakte alineatekst](topic:format-paragraph-text).
- **Een diagram uit draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) leest ook geplakte draw.io-XML. Zie [Een diagram uit tekst tekenen](topic:text-to-diagram).
- **Thaise tekst in een PDF-plot.** Die werd eerder als vraagtekens afgedrukt.

### Meer ruimte en tekenhulpmiddelen

- **Een zwevende, dunnere opdrachtregel en een compact bovenste gebied.** Sleep het handvat van de opdrachtregel om hem te laten zweven, sleep zijn bovenrand voor minder regels, {{key:F2}} opent de geschiedenis. {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Opdrachtregel}} en de keuzes voor het bovenste gebied hebben dezelfde instellingen. Zie [Instellingen](topic:settings#command-line).
- **Objectsnap-menu.** Klik met de rechtermuisknop op {{ui:Snap}} in de statusbalk, of typ {{cmd:OSNAP}}.
- **Snappen aan het raster.** De knop {{ui:Rasterkoppeling}} in de statusbalk, of {{key:F9}}: aangewezen punten gaan naar het dichtstbijzijnde rasterpunt wanneer geen objectsnap het punt heeft bepaald.
- **Een boog op tien manieren, en Doorgaan.** {{ui:Boog}} op de werkbalk {{ui:Tekenen}} of {{cmd:ARC}}: 3 punten, de familie Begin/Midden/Einde en de familie Midden/Begin/Einde, en Doorgaan (druk op {{key:Enter}} bij het beginpunt) vanaf de laatste lijn, boog of polylijn.
- **Het Documentenpaneel.** {{cmd:DOCUMENTS}} (`DOCS`) of {{ui:Documenten…}} in het menu {{ui:Meer}} van de groep {{ui:Weergave}}: revisie, status en uitchecken voor elke tekening in een projectmap. Het opent als gecentreerd dialoogvenster. Zie [Documenten](topic:documents).

### Bestanden

- **Britse staalmaten.** 976 profielen in het paneel Standaard, getypt zoals ze op tekeningen staan (bijvoorbeeld `305x165x40 UB`).
- **Zuid-Afrikaanse pakketten** (tekenpraktijk en bouwvoorschriften) als pakketten van de add-on Bouwvoorschriften. De getallen zijn niet geverifieerd.
- **Add-ons voor CadCraft,** op aanvraag toegevoegd en standaard uit: ontwerp van binnenverlichting, chipontwerp (HDL naar indeling), routerfrezen, circuitsimulatie, rolkettingtandwielen en landenpakketten van de add-on Bouwvoorschriften.

## Opgelost

- Het verplaatsen, draaien of schalen van een arcering liet haar patroon achter.
- {{cmd:GRIDMOVE}} sleepte een hele plattegrondwand mee die alleen op de rasterlijn begint. Een wand wordt nu beoordeeld op haar uiteinden.
- Het raster toonde zich alleen binnen de grenzen van de tekening, zelfs wanneer de grenzen uit waren.
- De blokkenlijst in het zijpaneel scrolt, en een naam die geen blok is, somt de blokken op die ermee beginnen ("Did you mean").
- DXF R12-bestanden die AutoCAD weigerde ("Unknown group 1001 for table") openen daar nu.
- Zeer grote bestanden (ongeveer 70.000 elementen en meer) faalden met "Maximum call stack size exceeded".
- DWG-bestanden uit AutoCAD 2018 en later met een hoge onderhoudsversie faalden met "bad BITLONG code 11".
- In het vak voor alineatekst behoudt een nieuwe grootte die voor een geselecteerd deel is getypt, de selectie.

## In elke app

Bootstrap-infokaartjes bij elk bedieningselement met een hint, een starttip die u kunt sluiten, tabbalken die scrollen wanneer ze niet passen, en een browsertabbladtitel die de geopende tekening volgt (`<drawing> - CadCraft | CadCraft`). {{ui:Instellingen}} › {{ui:Indeling}} is nu een keuzelijst met twee regels per keuze. De taallijst in {{ui:Instellingen}} is langer dan in 0.8. Live samen bewerken, bibliotheekcollecties en gewicht- en temperatuureenheden worden in de Studio-notities beschreven.

## Eerlijke beperkingen

- Alineatekst heeft geen opsommingstekens of genummerde lijsten, geen tablineaal en geen uitvullen. Geplotte PDF's zetten tekst in Helvetica.
- Plattegrondwanden zijn recht, dus een boog wordt getekend als korte wanden. De controle door de gemeenschap van het wandgereedschap is nog open.
- Laaggroepen worden niet in het eigen formaat van AutoCAD geschreven, dus AutoCAD toont een platte lijst. Andere programma's tonen alle vloeren tegelijk, tenzij u {{cmd:FLOORLAYERS}} uitvoert.
- Het Documentenpaneel is nog niet door twee mensen op een echte gedeelde map geprobeerd. Routerfrezen is nog op geen enkele echte machine gedraaid. De verlichtingsberekening is gecontroleerd tegen een fotonentrace, niet tegen een ander programma. Technische add-ons zijn controlehulpmiddelen, geen vervanging voor het oordeel van een ingenieur.
- Talen anders dan Engels zijn machinale concepten, en sommige nieuwe woorden zijn alleen Engels.

## Eerder: 0.8 en 0.8.1

Dit is wat er in CadCraft 0.8 en 0.8.1 is veranderd, vergeleken met 0.7. 0.8 (1 november 2026) voegt tekenhulpmiddelen toe die werken vanuit uw eigen tekening, met regels op uw computer en zonder model, en 0.8.1 (2 november 2026) herstelt fouten die na 0.8 zijn gemeld.

### Nieuw

**Tekenen die uw gedachte afmaakt**

- **Een schim laat zien wat erna komt.** Zonder lopende opdracht toont een grijze gestippelde schim wat de patronen van uw tekening zeggen dat erna komt: de volgende stijl op dezelfde afstand, de volgende trede van een trap, de ontbrekende wand van een kamer. Druk op {{key:Tab}} om hem te tekenen als één ongedaan-maken-stap, of op {{key:Esc}} om hem te verwerpen. Hij kijkt alleen naar de nieuwste objecten, zodat hij vlot blijft op een grote tekening. Zet hem uit in {{ui:Instellingen}} › {{ui:CadCraft}} of met {{cmd:AUTOCOMPLETE}} `Off`.
- **Het volgende punt terwijl u een lijn tekent.** Midden in {{cmd:LINE}} of {{cmd:PLINE}} is de schim het volgende punt: de volgende trede van een trap, de vierde hoek van een rechthoek, of het punt dat hem sluit. Breng de cursor ernaartoe en druk op {{key:Tab}}, alsof u daar had geklikt.
- **Pennenschetsen worden precieze geometrie.** {{cmd:SKETCHFIX}}: teken ruwe streken met een pen, muis of vinger, en elk wordt een nette lijn, cirkel, boog, rechthoek of polylijn, aan wat al getekend is gesnapt. Zie [Schetsen met een pen en precieze geometrie krijgen](topic:sketch-with-a-pen).
- **Een foto van een schets wordt een tekening.** {{cmd:PHOTOSKETCH}} (`PSK`) vindt het papier in een foto, trekt het perspectief recht, past het papierformaat en de schaal toe die u geeft, en traceert de pennenlijnen op een laag voor elke pennenkleur. Letters worden niet getraceerd.
- **Maatvoering volgens regels.** {{cmd:AUTODIM}} (`ADIM`) maakt ketens van maten langs de zijden die u kiest, een totaalmaat, openingsbreedtes, gatdiameters en, met `Grid`, rasterafstanden. Het herhaalt nooit een maat die er al is.
- **Verplaats een rasterlijn en de set volgt.** {{cmd:GRIDMOVE}} (`GM`): wanden die op de rasterlijn eindigen rekken mee, wanden langs de lijn, kolommen, de bol en de tag verschuiven, en maten erop meten de nieuwe afstand. Eén ongedaan-maken-stap.

**Bladen, details en tags**

- **Bladen die zichzelf indelen.** {{cmd:AUTOSHEET}} neemt uw benoemde weergaven (of de losse delen van het model), kiest een papierformaat en een standaardschaal, en zet de weergaven op nieuwe bladen met een titelblok en een onderschrift met naam en schaal. Alles blijft bewerkbaar. Zie [Bladen voor u laten indelen](topic:lay-out-sheets-for-me).
- **Uw eigen details, aangeboden terwijl u tekent.** {{cmd:DETAILS}} (`DET`) bewaart uw eigen detailblokken. Wanneer wat u selecteert overeenkomt met een detail op de woorden van zijn lagen, bloknamen en notities, zegt de statusbalk dat; kies het en plaats het. {{cmd:DETAILS}} › Share zet uw lijst in uw map Documenten en haalt op wat uw team heeft toegevoegd. Instellingen zet de voorstellen uit.
- **Tags op blokken.** {{cmd:TAGS}} definieert een tag (zijn soort, de waarden die hij mag hebben, de blokken waarop hij van toepassing is), zet hem op de geselecteerde blokverwijzingen, en toont ze als een lijst die u als CSV kunt opslaan. De definities worden in de DWG bewaard. Zie [Tags](topic:tags).
- **Tekeningsgrenzen.** {{cmd:LIMITS}} stelt een rechthoek voor de tekening in: het raster vult ze en zoom Alles toont ze. De grenzen worden als omtrek getoond en in DWG en DXF bewaard, samen met de papiergrenzen. Zie [De grenzen van de tekening instellen](topic:drawing-limits).

**Met anderen en andere programma's werken**

- **Een markering omzetten in een revisie.** {{cmd:REDLINE}} leest het pakket dat MarkupCraft schrijft en somt elke wijziging op. Accepteer of verwerp elk met een notitie; de geaccepteerde krijgen een revisiewolk en een revisielogboek in één ongedaan-maken-stap, en u slaat het antwoordbestand op dat de markeringen in MarkupCraft sluit. Zie [Een markering omzetten in een revisie](topic:redline-to-revision).
- **Tekeningen die git en Fossil kunnen samenvoegen.** Met {{ui:Samenvoegbare bestanden}} aan in {{ui:Instellingen}} › {{ui:CadCraft}}, krijgt elk object een sleutel die nooit verandert (bestanden zijn ongeveer 10 procent groter). `cadcraft merge base ours theirs` voegt dan de bewerkingen van twee mensen aan één DWG- of DXF-object voor object samen, en meldt alleen waar twee mensen hetzelfde hebben veranderd. Zie [Bewerkingen van twee mensen aan één tekening samenvoegen](topic:merge-drawings).
- **Wat er veranderd is, in woorden.** In Geschiedenis geeft Vergelijken een gewone lijst: waar dingen zijn veranderd, hoe groot de plekken zijn, wat is toegevoegd, verwijderd of gewijzigd, en de tekst die is bewerkt. Zie [Zeggen in woorden wat er veranderde](topic:changes-in-words).
- **Richtingen en hoeken.** Typ een richting als een landmeetkundige richtingshoek zoals N45°23'30"E, of in graden, minuten en seconden, waar ook maar een hoek wordt gevraagd; AUNITS bepaalt hoe hoeken worden getoond. Zie [Richtingen en hoeken typen en tonen](topic:bearings-and-angles).
- **Uw eigen SHX-lettertypen.** Geef CadCraft een map met SHX-lettertypen, en tekststijlen die ze noemen worden erin getekend, op het scherm en in plots. Zie [Tekst tekenen in uw eigen SHX-lettertypen](topic:shx-fonts).
- **Een diagram uit tekst.** {{cmd:DIAGRAM}} leest een Mermaid-stroomschema, een PlantUML-componentdiagram, D2 of een van-naar-lijst en tekent blokken en verbindingen die u kunt bewerken. Zie [Een diagram uit tekst tekenen](topic:text-to-diagram).
- **OLE-objecten in een DWG.** {{cmd:OLELIST}} somt de OLE-objecten op die een DWG bevat en die CadCraft niet zelf kan plaatsen, en plaatst een kopie van een afbeelding waar u zegt. Zie [Afbeeldingen](topic:pictures#objects-from-other-programs-ole).
- **Uw berekeningen blijven bij de tekening.** Rekenbladen en ontwerpredenen worden in de DWG bewaard, samen met de klassetabel.

**Tekenen zonder zicht**

- Zet {{ui:Tekenen zonder zicht}} aan in {{ui:Instellingen}} (of typ {{cmd:ACCESS}} en beantwoord `On`). CadCraft leest elke opdracht en elk resultaat via uw schermlezer voor, beschrijft de tekening en wat zich bij de cursor bevindt, laat u de cursor verplaatsen en punten kiezen met het toetsenbord, en speelt voor elke snap en grip een geluid af. Waar uw browser spraak op uw computer kan herkennen, kunnen opdrachten worden uitgesproken. Zie [Tekenen zonder zicht](topic:draft-without-sight).

**In elke app**

- **Talen.** 54 talen; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili, Oezbeeks). Talen naast Engels zijn machinale concepten totdat een moedertaalspreker ze leest.
- **Invoerapparaten.** Trackpad, pen, 3D-muis, gamecontroller en MIDI-bediening.
- **Werkbalkrijen en het eigenschappenraster.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} biedt Laten doorlopen, 2 rijen of 1 rij in de andere apps. CadCraft houdt zijn eigen instelling bij in {{ui:Instellingen}} › {{ui:CadCraft}} (zie [Werkbalkrijen](topic:settings#toolbar-rows)). Het gedeelde eigenschappenraster staat in drie andere apps, niet in CadCraft.
- **Problemen, Live en add-ons.** Een gedeeld paneel Problemen dat in elke app waarschuwt, een Live-weergave van wie waar is in CadCraft Studio (zie [Samen aan één tekening werken](topic:work-live)), en een lijst van add-ons.
- **Verbind uw AI.** Eén verbinding van CadCraft Studio met alle acht apps, met per app een niveau van alleen lezen, voorstellen of bewerken, en een logboek in gewone woorden van wat de assistent deed. CadCraft heeft geen eigen AI, en Vraag in elke app gebruikt de AI die u verbindt.

### Opgelost in 0.8.1

- **Eigenschappen toonden 150 in plaats van 12'-6"** in tekeningen in voet en inch. Velden die de app zelf leest, behouden weer hun tekst.
- **DWG-bestanden waarvan de klassensectie als het verkeerde type werd gelezen** (GitHub cadcraft#5) worden nu correct geopend.
- **Het kruisdraad verschijnt niet meer achter pop-ups.**
- **Studio en de verpakte edities kunnen tijdens het draaien van taal wisselen.** Eerder waren ze alleen Engels. Nog niet op elk platform getest: laat ons weten als de taal niet verandert.
- **Tablets in staande stand** geven extra rasterhoogte aan het canvas, en de bladmodus begint bij 760 px of minder.
- **STRETCH met een kruisvenster, en LIMITS,** werden gemeld op Studio 0.8.0 en waren in de webbouw van 0.8 al correct; het installatieprogramma van de melder was ouder. Studio 0.8.1 bevat ze.

### Nog niet in deze versie

- **0.8 en 0.8.1 zijn niet met een code-ondertekening ondertekend.** Windows kan waarschuwen (kies {{ui:Meer informatie}}, dan {{ui:Toch uitvoeren}}); op een Mac klikt u met de rechtermuisknop op CadCraft Studio en kiest u {{ui:Open}}. Winkelversies staan in de wacht, en de iPad- en iPhone-versie is niet voor 0.8.1 opnieuw gebouwd.
- **Pennenschetsen en schetsfoto's** zijn alleen geprobeerd op verzonnen foto's en met een muis, nog niet met een echte pen, een aanraakscherm of een handschets op papier.
- **Tekenen zonder zicht** is getest met geautomatiseerde controles, nog niet met een schermlezer of een blinde tester.
- **Details delen** is niet door twee personen gecontroleerd, en een Team Cloud Plan-map als map Documenten is niet gebouwd.
- **Samenvoegen** werkt voor de DWG- en DXF-bestanden van CadCraft; hetzelfde voor de bestanden van de andere apps is niet gebouwd.
- **Ongedaan maken over vensters heen:** CadCraft meldt elke voltooide stap, maar Studio heeft nog geen enkel Ongedaan maken voor alle apps; elke app maakt zijn eigen stappen ongedaan.
- **OLE-objecten van een DWG** worden bewaard, maar niet op hun plaats getekend.
- **Het lezen van plotstijltabellen (CTB-bestanden)** van andere programma's is gebouwd, maar is niet gecontroleerd met een bestand van een ander programma.
- **Verbind uw AI:** één-klik-verbinding in Studio, de gehoste connector voor browser-AI, uw eigen API-sleutel in Studio en het gepubliceerde MCP-pakket worden in deze uitgave niet beloofd.

Zie voor de versie vóór deze [Wat is er nieuw in 0.7](topic:whats-new-0-7).
