---
title: Wat is er nieuw in 0.8 en 0.8.1
summary: Een spookbeeld dat uw tekening afmaakt, pennenschetsen en schetsfoto's omgezet in geometrie, bladen die zichzelf indelen, details die worden aangeboden terwijl u tekent, GRIDMOVE en AUTODIM, tags, samenvoegbare bestanden, markups omgezet in revisies, tekenen zonder zicht, tekengrenzen, richtingshoeken, SHX-lettertypen, diagrammen uit tekst, en oplossingen in 0.8.1.
keywords: wat is er nieuw, what's new, releasenotities, wijzigingslogboek, wijzigingen, 0.8, 0.8.1, versie, nieuwe functies, automatisch aanvullen, ghost, tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, samenvoegen, git, fossil, toegang, tekenen zonder zicht, schermlezer, limieten, richtingshoeken, aunits, shx, diagram, ole, geschiedenis, vergelijken, in woorden, eigenschappen, voet en duim, uitrekken, talen, invoerapparaten, problemen, live, assistenten
from: 9dd82db5
---

Dit is wat er is veranderd in CadCraft 0.8 en 0.8.1, vergeleken met 0.7. 0.8 (1 november 2026) voegt tekenhulpmiddelen toe die werken vanuit uw eigen tekening, met regels op uw computer en zonder model. 0.8.1 (2 november 2026) herstelt fouten die na 0.8 zijn gemeld.

## Nieuw

### Een tekening die uw gedachte afmaakt

- **Een spookbeeld toont wat er daarna komt.** Zonder lopend commando toont een grijs gestreept spookbeeld wat de eigen patronen van uw tekening als volgende aangeven: de volgende stijl op dezelfde afstand, de volgende trede van een trap, de ontbrekende wand van een kamer. Druk op {{key:Tab}} om het als één stap ongedaan te maken te tekenen, of op {{key:Esc}} om het weg te halen. Het kijkt alleen naar de nieuwste objecten, zodat het ook bij een grote tekening soepel blijft. Zet het uit in {{ui:Instellingen}} › {{ui:CadCraft}} of met {{cmd:AUTOCOMPLETE}} `Uit`.
- **Het volgende punt terwijl u een lijn tekent.** Midden in {{cmd:LINE}} of {{cmd:PLINE}} is het spookbeeld het volgende punt: de volgende trede van een trap, het vierde hoekpunt van een rechthoek, of het punt dat de vorm sluit. Breng de cursor ernaartoe en druk op {{key:Tab}}, alsof u daar had geklikt.
- **Pennenschetsen worden precieze geometrie.** {{cmd:SKETCHFIX}}: teken ruwe streken met een pen, muis of vinger, en elke streek wordt een strakke lijn, cirkel, boog, rechthoek of polylijn, vastgemaakt aan wat al getekend is. Zie [Schetsen met een pen en precieze geometrie krijgen](topic:sketch-with-a-pen).
- **Een foto van een schets wordt een tekening.** {{cmd:PHOTOSKETCH}} (`PSK`) zoekt het papier in een foto, rechtzet het perspectief, past het papierformaat en de schaal toe die u opgeeft, en traceert de pennenlijnen naar een laag per pennenkleur. Letters worden niet getraceerd.
- **Maatvoering volgens regels.** {{cmd:AUTODIM}} (`ADIM`) maakt ketens van maten langs de zijden die u kiest, een totaalmaat, openingsbreedten, gatdiameters en, met `Raster`, de rasterafstanden. Het herhaalt nooit een maat die er al staat.
- **Verplaats een rasterlijn en de rest volgt.** {{cmd:GRIDMOVE}} (`GM`): wanden die op de rasterlijn eindigen, rekken mee uit, wanden langs de lijn, kolommen, de bel en de tag verplaatsen mee, en maten op de lijn meten de nieuwe afstand. Eén stap ongedaan maken.

### Bladen, details en tags

- **Bladen die zichzelf indelen.** {{cmd:AUTOSHEET}} neemt uw benoemde weergaven (of de losse delen van het model), kiest een papierformaat en een standaardschaal, en zet de weergaven op nieuwe bladen met een titelblok en een bijschrift met naam en schaal. Alles blijft bewerkbaar. Zie [Bladen voor mij indelen](topic:lay-out-sheets-for-me).
- **De details van uw bureau, aangeboden terwijl u tekent.** {{cmd:DETAILS}} (`DET`) bewaart uw eigen detailblokken. Wanneer wat u selecteert overeenkomt met een blok, op grond van de woorden in de lagen, blokNamen en notities, meldt de statusbalk dat. Kies het en plaats het. {{cmd:DETAILS}} › Delen zet uw lijst in uw map Documenten en haalt op wat uw team heeft toegevoegd. Bij {{ui:Instellingen}} worden de aanbiedingen uitgezet.
- **Tags op blokken.** {{cmd:TAGS}} definieert een tag (de soort, de waarden die hij mag aannemen, de blokken waarop hij van toepassing is), zet hem op de blokverwijzingen die u selecteert en toont ze als een staat die u kunt opslaan als CSV. De definities worden in de DWG bewaard. Zie [Tags](topic:tags).
- **Tekengrenzen.** {{cmd:LIMITS}} stelt een rechthoek in voor de tekening: het raster vult die, en zoomen naar alles tonen toont hem. De grenzen worden als omtrek getoond en opgeslagen in DWG en DXF, samen met de papiergrenzen. Zie [De tekengrenzen instellen](topic:drawing-limits).

### Samenwerken met anderen en andere programma's

- **Een markup omzetten in een revisie.** {{cmd:REDLINE}} leest het pakket dat MarkupCraft schrijft en toont elke wijziging. Accepteer of weiger elke wijziging met een notitie. De geaccepteerde krijgen een revisiewolk en een revisielogboek in één stap ongedaan maken, en u slaat het antwoordbestand op dat de markups in MarkupCraft sluit. Zie [Een markup omzetten in een revisie](topic:redline-to-revision).
- **Tekeningen die git en Fossil kunnen samenvoegen.** Met {{ui:Samenvoegbare bestanden}} aan in {{ui:Instellingen}} › {{ui:CadCraft}} krijgt elk object een sleutel die nooit verandert (bestanden zijn ongeveer 10 procent groter). `cadcraft merge base ours theirs` voegt daarna de bewerkingen van twee personen aan één DWG- of DXF-bestand samen, object voor object, en meldt alleen waar twee personen hetzelfde hebben gewijzigd. Zie [Bewerkingen van twee personen aan één tekening samenvoegen](topic:merge-drawings).
- **Wat er is veranderd, in woorden.** In Geschiedenis geeft Vergelijken een eenvoudige lijst: waar dingen zijn veranderd, hoe groot die plekken zijn, wat is toegevoegd, verwijderd of gewijzigd, en de tekst die is bewerkt. Zie [Zeg in woorden wat er is veranderd](topic:changes-in-words).
- **Richtingshoeken en hoeken.** Typ een richting als een landmeetkundige richtingshoek, zoals N45°23'30"E, of in graden, minuten en seconden, overal waar een hoek wordt gevraagd. AUNITS bepaalt hoe hoeken worden getoond. Zie [Richtingshoeken en hoeken typen en tonen](topic:bearings-and-angles).
- **Uw eigen SHX-lettertypen.** Geef CadCraft een map met SHX-lettertypen. Tekststijlen die ze noemen, worden in die lettertypen getekend, op het scherm en in plots. Zie [Tekst tekenen in uw eigen SHX-lettertypen](topic:shx-fonts).
- **Een diagram uit tekst.** {{cmd:DIAGRAM}} leest een Mermaid-stroomdiagram, een PlantUML-componentdiagram, D2 of een van-naar-lijst, en tekent blokken en verbindingen die u kunt bewerken. Zie [Een diagram uit tekst tekenen](topic:text-to-diagram).
- **OLE-objecten in een DWG.** {{cmd:OLELIST}} toont de OLE-objecten die een DWG bevat en die CadCraft niet zelf kan plaatsen, en plaatst een kopie van een afbeelding waar u dat aangeeft. Zie [Afbeeldingen](topic:pictures#objects-from-other-programs-ole).
- **Uw berekeningen blijven bij de tekening.** Rekenbladen en ontwerpredenen worden in de DWG bewaard, samen met de klassetabel.

### Tekenen zonder zicht

- Zet {{ui:Tekenen zonder zicht}} aan in {{ui:Instellingen}} (of typ {{cmd:ACCESS}} en antwoord `Aan`). CadCraft spreekt elk commando en elk resultaat uit via uw schermlezer, beschrijft de tekening en wat zich bij de cursor bevindt, laat u de cursor verplaatsen en punten kiezen met het toetsenbord, en speelt een geluid af bij elke snap en grip. Waar uw browser op uw computer spraak kan herkennen, kunnen commando's worden ingesproken. Zie [Tekenen zonder zicht](topic:draft-without-sight).

### In elke app

- **Talen.** 54 talen; tien zijn nieuw (Litouws, Lets, Bosnisch, Marathi, Telugu, Albanees, Afrikaans, Filipijns, Swahili, Oezbeeks). Talen naast het Engels zijn machinevertalingen totdat een moedertaalspreker ze heeft gelezen.
- **Invoerapparaten.** Trackpad, pen, 3D-muis, gamecontroller en MIDI-bediening.
- **Werkbalkrijen en het eigenschappenraster.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Werkbalkrijen}} biedt Omslaan, 2 rijen of 1 rij in de andere apps. CadCraft houdt zijn eigen instelling bij in {{ui:Instellingen}} › {{ui:CadCraft}} (zie [Werkbalkrijen](topic:settings#toolbar-rows)). Het gedeelde eigenschappenraster zit in drie andere apps, niet in CadCraft.
- **Problemen, Live en add-ons.** Een gedeeld paneel Problemen dat in elke app waarschuwt, een Live-weergave van wie waar is in CadCraft Studio (zie [Samen aan één tekening werken](topic:work-live)), en een overzicht van add-ons.
- **Verbind uw AI.** Eén verbinding van CadCraft Studio naar alle acht apps, met per app een niveau alleen lezen, voorstellen of bewerken, en een logboek in eenvoudige woorden van wat de assistent heeft gedaan. CadCraft heeft zelf geen AI, en Vragen in elke app gebruikt de AI die u verbindt.

## Opgelost in 0.8.1

- **Eigenschappen toonden 150 in plaats van 12'-6"** in tekeningen in voet en duim. Velden die de app zelf leest, tonen hun tekst weer.
- **DWG-bestanden waarvan het klassenonderdeel als het verkeerde type werd gelezen** (GitHub cadcraft#5) openen nu correct.
- **De kruisdraad is niet meer zichtbaar achter pop-ups.**
- **Studio en de verpakte edities kunnen tijdens gebruik van taal wisselen.** Eerder waren ze alleen in het Engels. Nog niet op elk platform getest: laat het ons weten als de taal niet verandert.
- **Tablets in staande stand** geven extra rasterhoogte aan het canvas, en de bladenmodus start bij 760 px of minder.
- **STRETCH met een kruisvenster, en LIMITS,** zijn gemeld op Studio 0.8.0, en in de webversie van 0.8 waren ze al correct. Het installatieprogramma van de melder was ouder. Studio 0.8.1 bevat ze.

## Nog niet beschikbaar in deze versie

- **0.8 en 0.8.1 zijn niet met een code ondertekend.** Windows kan waarschuwen (kies {{ui:Meer informatie}}, en daarna {{ui:Toch uitvoeren}}). Op een Mac klikt u met de rechtermuisknop op CadCraft Studio en kiest u {{ui:Openen}}. Store-versies zijn in de wacht gezet, en de iPad- en iPhone-versie is voor 0.8.1 niet opnieuw gebouwd.
- **Pennenschetsen en schetsfoto's** zijn alleen getest met verzonnen foto's en een muis, nog niet met een echte pen, een touchscreen of een handschets op papier.
- **Tekenen zonder zicht** is getest met geautomatiseerde controles, nog niet met een schermlezer of een blinde tester.
- **Details delen** is niet door twee personen gecontroleerd, en een Team Cloud Plan-map als map Documenten is niet gebouwd.
- **Samenvoegen** werkt voor de DWG- en DXF-bestanden van CadCraft. Hetzelfde voor de bestanden van de andere apps is niet gebouwd.
- **Ongedaan maken over vensters heen:** CadCraft meldt elke afgeronde stap, maar Studio heeft nog geen gezamenlijk Ongedaan maken voor alle apps. Elke app maakt zijn eigen stappen ongedaan.
- **OLE-objecten van een DWG** worden bewaard, maar niet op hun plaats getekend.
- **Plotstijltabellen (CTB-bestanden)** uit andere programma's lezen is gebouwd, maar is nog niet gecontroleerd met een bestand van een ander programma.
- **Verbind uw AI:** verbinden met één klik in Studio, de gehoste connector voor AI in de browser, uw eigen API-sleutel binnen Studio en het gepubliceerde MCP-pakket worden in deze uitgave niet beloofd.

Voor de versie daarvoor, zie [Wat is er nieuw in 0.7](topic:whats-new-0-7).
