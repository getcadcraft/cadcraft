---
title: Wat is er nieuw in 0.7 (eerder)
summary: PDF-onderleggers en PDF-import, gescande tekeningen met een automatische trace, echte splines met SPLINE, SPLINEDIT en PEDIT, een beheer van maatvoeringsstijlen, tekst die zijn opmaak behoudt, WBLOCK en uw eigen schalen, 3D-volumes uit andere programma's, scans registreren, een Laser-paneel, USD-export, Geschiedenis en afdrukken in CadCraft Studio, een begeleide eerste tekening, de werkbalk aan elke zijde of in minder rijen, en meer voor AI-assistenten.
keywords: wat is er nieuw 0.7, eerdere uitgave, releasenotities, wijzigingslog, wijzigingen, 0.7, versie, nieuwe functies, pdf, pdfattach, pdfimport, onderlegger, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, opmaak, wblock, schalenlijst, scalelistedit, acis, 3D-volumes, registerscans, scans registreren, icp, e57, las, laser, grbl, g-code, usd, usdout, geschiedenis, versies, vergelijken, afdrukken, printer, png, svg, plotstijl, lijntype, rondleiding, spiekbriefje, opdrachtenkaart, positie werkbalk, werkbalkrijen, toolbardock, regen, regenall, trackpad, vegen, codepagina, cyrillisch, koreaans, chinees, japans, elektrisch, rcd, p&id, pid, acad.lsp, acaddoc.lsp, ondersteuningsmap, assistenten, mcp, eenheden, portugees
from: d9a8ea79
---

Dit is wat er in CadCraft 0.7 is veranderd, vergeleken met 0.6. Veel daarvan is gevraagd op Discord. De lijst is per onderdeel gegroepeerd, met het belangrijkste eerst.

## Nieuw

### PDF's en gescande tekeningen

- **Plaats een PDF-pagina onder de tekening.** {{cmd:PDFATTACH}} (`PDFATT`) plaatst een pagina op haar echte grootte of op een schaal die u typt. Snap naar de lijnen, laat ze vervagen, maak ze monochroom ({{cmd:PDFADJUST}}), knip ze bij ({{cmd:PDFCLIP}}) en wissel de eigen lagen van de PDF ({{cmd:PDFLAYERS}}). Ze wordt geplot als lijnen, vullingen en tekst, en een DWG of DXF 2000 bewaart haar als koppeling naar het bestand. Een PDF openen met {{ui:Openen}} vraagt of u hem wilt bijvoegen of importeren. Zie [PDF-onderleggers en PDF-import](topic:pdf-underlay).
- **Zet een PDF-pagina om in tekenobjecten.** {{cmd:PDFIMPORT}} (`PDFIM`) maakt lijnen, polylijnen, cirkels, bogen, massieve arceringen en tekst op lagen die zijn genoemd naar de PDF, op ware grootte, een getypte schaal, of geschaald vanuit twee punten en een echte afstand, in één stap die u ongedaan kunt maken. Zie [Een pagina importeren](topic:pdf-underlay#import-a-page).
- **Gescande tekeningen.** {{cmd:SCANATTACH}} haalt een PNG, JPEG of TIFF binnen (één pagina of alle) of een PDF-pagina die een afbeelding is. Daarna kunt u die schalen vanuit twee punten ({{cmd:SCANSCALE}}), uitlijnen ({{cmd:SCANALIGN}}), recht zetten aan de hand van de eigen lange lijnen ({{cmd:SCANDESKEW}}), zwart-wit maken en vlekjes verwijderen ({{cmd:SCANCLEAN}}), bijsnijden en delen ervan wissen. Elke stap is één stap die u ongedaan kunt maken, en het oorspronkelijke bestand blijft bewaard. Zie [Gescande tekeningen en de trace](topic:scanned-drawings).
- **Trace een scan naar lijnen en bogen.** {{cmd:SCANTRACE}} tekent de lijnen van de scan als lijnen en bogen op een nieuwe laag, SCAN-TRACE, met een tolerantie die u instelt, en laat tekst en arcering zoals ze zijn. Het rapport zegt wat het maakte en wat het liet staan. Het is geen garantie dat het resultaat klopt: controleer het aan de hand van het blad. {{cmd:RASTERSNAP}} laat objectsnaps de uiteinden, hoeken en kruisingen van de scan vinden. Er wordt niets ergens naartoe gestuurd en er wordt geen getraind model gebruikt. Zie [De trace](topic:scanned-drawings#the-trace).

### Tekenen en bewerken

- **Echte splines.** {{cmd:SPLINE}} (`SPL`) tekent een curve door punten of vanuit besturingspunten (graad 1 tot 5), met eindraaklijnen; {{cmd:SPLINEDIT}} (`SPE`) verplaatst, voegt toe en wist passpunten of besturingspunten, stelt gewichten in, opent, sluit, keert om, of zet een spline om in een polylijn. Splines uit DWG- en DXF-bestanden openen als splines, en DWG en DXF 2000 slaan ze op als splines. Zie [Splines en polylijnen](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) sluit en opent polylijnen, voegt lijnen en bogen eraan toe, stelt één breedte in, past een curve door de hoekpunten of een spline erlangs en haalt die weer terug met Decurve, keert om, en bewerkt er meerdere tegelijk. Zie [Een polylijn bewerken](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) schrijft een blok, enkele objecten of de hele tekening naar een nieuwe DWG of DXF, met alleen de lagen, stijlen en blokken die ze gebruiken. Zie [Een blok of objecten naar een eigen bestand schrijven](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN en REGENALL.** {{cmd:REGEN}} (`RE`) tekent het tabblad waarop u staat opnieuw vanuit de tekening; {{cmd:REGENALL}} (`REA`) doet dat voor elk tabblad, venster en elke geopende tekening. Zie [REGEN en REGENALL](topic:commands#regen-and-regenall).

### Tekst en maatvoering

- **Tekst behoudt zijn opmaak.** Alinea-tekst uit andere programma's behoudt zijn kleuren per woord, vet en cursief, onderstreping, gestapelde breuken en hoogten: die worden op het scherm en in PDF's getekend, blijven bewaard wanneer u de woorden bewerkt, en worden teruggeschreven. Zie [Opmaak binnen alinea-tekst uit andere programma's](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Een beheer van maatvoeringsstijlen.** {{cmd:DIMSTYLE}} (`D`) maakt, wijzigt, vergelijkt en past benoemde maatvoeringsstijlen toe; een stijl wijzigen, wijzigt elke maatvoering die hem gebruikt. {{cmd:DIMEDIT}} (`DED`) zet tekst terug, typt nieuwe tekst, draait die of kantelt de maathulplijnen; {{cmd:DIMTEDIT}} verplaatst de tekst naar links, rechts of naar het midden. Zie [Benoemde maatvoeringsstijlen](topic:dimension-settings#named-dimension-styles).
- **Uw eigen schalen.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) voegt schalen zoals 1:75 toe aan de schaallijsten van viewport en plot; ze worden in de tekening opgeslagen (DWG en DXF 2000), en een tekening uit een ander programma brengt zijn eigen lijst mee. Zie [Schalen](topic:units-papers-scales#scales).
- **Tekst in andere alfabetten.** DXF-bestanden die zijn opgeslagen in Cyrillische, Koreaanse, Chinese, Japanse of Vietnamese codepagina's openen nu met hun tekst, en Chinese, Japanse en Koreaanse tekst wordt in PDF's afgedrukt (de plot haalt de eerste keer dat hij er een nodig heeft een groter lettertype op). Zie [Lettertype](topic:text#font).

### Plotten en afdrukken

- **Meer in plotstijltabellen.** Voor elke kleur kan een tabel nu ook een lijntype instellen, het lijneinde en de lijnverbinding, en een vulstijl die massieve vullingen als arceringslijnen afdrukt; de tabel heeft een eigen lijst met lijndiktes en een lijntypeschaal. Zie [Plotstijltabellen](topic:plot-pdf#plot-style-tables).
- **Afdrukken, en PNG- en SVG-bestanden.** Het dialoogvenster Plotten heeft {{ui:Afdrukken…}}, {{ui:PNG downloaden}} (300 dpi) en {{ui:SVG downloaden}}. In CadCraft Studio toont het de printers van de computer, hun papier en het aantal kopieën. Zie [Afdrukken](topic:plot-pdf#print) en [Afbeeldingsbestanden en SVG-bestanden](topic:plot-pdf#picture-and-svg-files).

### 3D en puntenwolken

- **3D-volumes uit andere programma's.** Volumes, regio's en lichamen in de modelruimte van een tekening tonen op het tabblad 3D, alleen-lezen, en opslaan als DWG schrijft ze onveranderd terug. Vlakken op oppervlakken die CadCraft nog niet tekent, worden vermeld, niet geraden. Zie [Volumes uit andere programma's](topic:3d-solids#solids-from-other-programs).
- **Meerdere scans registreren.** {{cmd:REGISTERSCANS}} (`REGSCAN`) plaatst scans die vanaf verschillende posities zijn genomen in één kader, met puntparen of getypte doelcoördinaten, verfijnt ze met ICP, slaat de registratie op als een klein projectbestand, en schrijft de geregistreerde wolk als één LAS- of E57-bestand. Zie [Meerdere scans tot één registreren](topic:register-scans).
- **USD-export.** {{cmd:USDOUT}}, of {{cmd:EXPORT3D}} › {{ui:USD}}, schrijft de volumes van het tabblad 3D als `.usda`, `.usdc` of `.usdz`. Zie [Het 3D-model exporteren als USD](topic:usd).
- **Berekeningen op het tabblad 3D.** Waar de gereedschappen van het tabblad 3D om een afstand vragen, kunt u een berekening typen, zoals op de opdrachtregel. Zie [Rekenkunde in een getypte waarde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Dingen maken

- **Stuur een tekening naar een laser.** {{cmd:LASER}}, of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Laser…}}, opent een paneel over de tekening: elke laag snijdt, ritst, graveert lijnen, vult vormen, graveert een afbeelding of wordt niet verstuurd, met zijn vermogen, snelheid en doorgangen. De voorvertoning volgt uw wijzigingen, {{ui:G-code opslaan…}} schrijft GRBL-lasermodus-G-code, en in Chrome of Edge kan het paneel de opdracht omkaderen en via USB versturen. De instellingen worden in de tekening opgeslagen (DWG en DXF). Zie [Een tekening naar een laser sturen](topic:laser-cutting).
- **Installatiesymbolen voor elektra in de add-on Elektrisch.** Data-, telefoon- en tv-aansluitingen, sleutel- en tijdschakelaars, een thermostaat, nooduitgangbord, detectoren, handmelder en sirene, een ventilator, boiler, fornuis, laadpunt voor elektrische voertuigen, energiemeter en subverdeler, en RCD- en RCBO-symbolen. Een groep kan een RCD dragen, het groepenoverzicht van de verdeler heeft een RCD-kolom, en de controles benoemen stopcontactgroepen zonder RCD van 30 mA of minder. Het is een herinnering bij de planning, geen normcontrole.
- **Een P&ID-add-on.** P&ID tekent procesdiagrammen: symbolen met aansluitpunten, proces- en signaallijnen, tags, leidingnummers, lijsten van leidingen, apparatuur, instrumenten en kleppen (CSV of een werkboek) en controles. Het komt met CadCraft mee en staat uit totdat u het aanzet in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Add-ons}}. Het is een tekenhulpmiddel, geen technische goedkeuring, en de woorden ervan zijn voorlopig alleen in het Engels.

### Aan de slag en het scherm

- **Een begeleide eerste tekening.** {{cmd:TOUR}} (of {{ui:De rondleiding volgen}} op de startkaart) leidt u in zes stappen door de echte tekening: een lijn, een cirkel, een verplaatsing, een bijsnijding, een wissing en een maatvoering. Het start vanzelf de eerste keer dat CadCraft opent met niets erin. Zie [Liever begeleid?](topic:getting-started#prefer-to-be-guided)
- **Een spiekbriefje en een opdrachtenkaart.** Het [spiekbriefje](topic:cheat-sheet) heeft de 40 dagelijkse opdrachten op één pagina, ook als PDF om af te drukken, en de [opdrachtenkaart](topic:command-map) somt de opdrachten met hun korte namen op, van A tot Z.
- **De werkbalk aan elke zijde.** {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Positie van de werkbalk}}: boven (zoals voorheen), onder, links of rechts, of typ {{cmd:TOOLBARDOCK}}. Zie [Positie van de werkbalk](topic:settings#toolbar-position).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Werkbalkrijen}}: laat de rijen omlopen om te passen, 2 rijen of 1 rij, voor de CadCraft-werkbalk en de stijlen Drafting classic en Ribbon. {{key:Shift+Ctrl+F1}} loopt ze door, {{key:Ctrl+F1}} loopt door wat de knoppen tonen, en {{cmd:TOOLBARROWS}} en {{cmd:TOOLBAR}} stellen ze in. De startaanwijzing heeft een sluitknop. Dank aan GJoe2, die dit als pull request aanleverde. Zie [Werkbalkrijen](topic:settings#toolbar-rows).

### In CadCraft Studio

- **Geschiedenis.** {{cmd:HISTORY}} (`HIST`), of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Geschiedenis…}}: de kopieën die Studio bewaart wanneer u een tekening opent en opslaat, en de cloudversies van de tekening wanneer u hem uit de cloud opende. Open of herstel er een, of vergelijk er twee, met wat is toegevoegd, verwijderd en gewijzigd, in kleur getoond. Zie [Geschiedenis](topic:history).
- **acad.lsp en acaddoc.lsp.** Kies een ondersteuningsmap in {{cmd:APPLOAD}}: die twee bestanden laden wanneer CadCraft start (acaddoc.lsp opnieuw voor elk nieuw tekentabblad), en `S::STARTUP` draait daarna. Zie [Toepassingen laden](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Het dialoogvenster Plotten in een eigen venster.** Een knop in de titelbalk verplaatst het naar een venster dat u op een andere monitor kunt zetten. Zie [Een dialoogvenster verplaatsen](common:arrange-panels#move-a-dialog).

### Voor AI-assistenten

- **Bestanden op naam, in mappen naar keuze.** In CadCraft Studio kan een assistent bestanden op naam openen, opslaan en plotten, en een opdracht het bestand geven dat die vraagt (INSERT vanuit een bestand, de export van COUNT, SAVEAS, PLOT), maar alleen binnen de mappen die u toevoegt onder {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Assistenten}} › {{ui:Mappen die ze mogen gebruiken}}. Zie [Laat het bestanden gebruiken in mappen die u kiest](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Minder aanroepen.** Een assistent kan een hele opdrachtregel in één keer typen, een opdracht open houden tussen zijn aanroepen, objecten tellen per type en laag zonder ze op te sommen, en een blok met zijn attribuutwaarden in één stap plaatsen.
- **Zonder venster.** De `cadcraft`-opdrachtregel schrijft SVG-plots en converteert, plot, controleert of beschrijft veel bestanden tegelijk. Het MCP-pakket is nog niet gepubliceerd. Zie [Met bestanden werken zonder CadCraft te openen](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Gewijzigd

- **Een trackpad verschuift.** Beweeg twee vingers op een trackpad en de 2D-weergave volgt ze; knijpen en het muiswiel zoomen. Zie [Muis, trackpad en aanraking](topic:mouse-trackpad-touch).
- **OLE-objecten blijven bewaard.** Ingesloten objecten van een DXF tonen als hun afbeelding of als een gelabeld kader en worden door DXF 2000 teruggeschreven. Die van een DWG blijven bewaard en worden teruggeschreven wanneer u als DWG opslaat, maar worden nog niet getoond. Vroeger gingen ze bij opslaan verloren. Zie [Objecten uit andere programma's (OLE)](topic:pictures#objects-from-other-programs-ole).
- **De eenheden van een nieuwe tekening** volgen de eenheid die u met de markering met de ster kiest in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}}.

## Opgelost

- Indelingen die leeg openden, of een viewport kwijtraakten en het hele model in de plaats toonden, openen nu met hun echte viewports. Een indeling zonder koppeling naar zijn inhoud wordt bewaard, en het openrapport zegt dat.
- DXF-bestanden in oudere codepagina's toonden verminkte Cyrillische en Koreaanse tekst. Die worden nu goed gelezen.
- Alinea-tekst uit andere programma's verloor zijn opmaak bij openen en werd als gewone tekst opgeslagen.

## In elke app

- **Eenheden.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} heeft voor lengte, oppervlakte, volume, hoek en helling elk één lijst, met de exacte maten die de definities van de eenheden geven (de Amerikaanse survey-voet is een eigen eenheid). Schakel de eenheden die u nooit gebruikt uit, dan verdwijnen ze uit de eenheidslijsten; markeer er één met de ster en nieuw werk begint erin. Een bestand houdt altijd zijn eigen eenheid. In CadCraft zet de ster de eenheden van een nieuwe tekening wanneer het een eenheid is die een tekening kan dragen; het eigen vak {{ui:Eenheden}} van CadCraft volgt de schakelaars nog niet. Zodra een tekening eenheden heeft, kan een lengte die u typt elk eenheidsteken dragen. Zie [Eenheden, getypte waarden en de eenhedenlijsten](common:unit-lists).
- **Een compactere indeling en panelen die zich opruimen.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Opmaakdichtheid}} › {{ui:Compact}} past meer op het scherm (touchschermen en telefoons houden hun grote knoppen). Elk zijpaneel heeft een smalle titelbalk: sleep die om het paneel vast te zetten of zwevend te maken, zet het op de balk van een ander paneel om één kader als tabbladen te delen, zet het vast om het naar de rand te laten wegschuiven, of verberg het en haal het vanaf de rand terug. Zie [Panelen indelen](common:arrange-panels#make-the-layout-denser).
- **Dialoogvensters verplaatsen.** Sleep een dialoogvenster aan de titelbalk uit de weg van de tekening; het komt terug waar u het liet. Dubbelklik op de titelbalk om het weer in het midden te zetten. Zie [Een dialoogvenster verplaatsen](common:arrange-panels#move-a-dialog).
- **Recepten voor AI-assistenten.** Tien uitgewerkte verzoeken voor uw eigen assistent (een tekening opruimen, een set plotten, tekeningen controleren, een model vragen stellen, een opmeting optellen, een variant van een onderdeel proberen…), elk met de hulpmiddelen die het aanroept en de rechten die het nodig heeft, en elk opnieuw afgespeeld door onze tests. De apps bevatten geen AI. Zie [Recepten voor AI-assistenten](common:assistants-recipes).
- **Talen.** **Português (Portugal)** is nieuw in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Taal}}. Die taal, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** hebben nu elk woord van de apps, als concepten die nog niet door een moedertaalspreker zijn nagelezen. Helponderwerpen staan in het Engels.
- **CadCraft Studio** meldt waarom een updatecontrole mislukte (nog geen bestand voor uw systeem, geen netwerk, een ongeldige handtekening), in plaats van alleen "Gereed", en het haalt een gesloten kaart Wat is er nieuw niet terug zolang er geen nieuwere uitgave is.

## Nog niet in deze versie

- **0.7 is niet met een code-ondertekening ondertekend.** Ondertekening en het Microsoft Store-pakket zijn naar 0.8 verschoven, omdat de validatie van het certificaat nog niet is doorgekomen. Controleer de SHA-256 naast elk bestand op getcadcraft.com/download. Op Windows kiest u, als SmartScreen het installatieprogramma tegenhoudt, {{ui:Meer informatie}} en daarna {{ui:Toch uitvoeren}}. Op een Mac klikt u de eerste keer met de rechtermuisknop op CadCraft Studio en kiest u {{ui:Openen}}. CadCraft Studio staat nog niet in een appwinkel, en er is nog geen iPad- of iPhone-versie.
- De hoek- en helling-lijsten in {{ui:Eenheden}} worden opgeslagen, maar nog geen vak leest ze.
- DWG-objecten van OLE worden bewaard maar niet getoond, en metabestandsafbeeldingen in OLE-objecten worden niet getekend.
- Het lezen van plotstijltabellen (CTB-bestanden) uit andere programma's wacht op een voorbeeldbestand.
- Oudere Aziatische tekst die als `\M+`-codes is geschreven, wordt gelezen, maar is nog niet gecontroleerd aan de hand van een bestand uit een ander programma.
- PDF-onderleggers: afbeeldingen in de pagina worden op het scherm getoond maar niet geplot, een plot van een assistent laat onderleggers weg, en hoe andere programma's de opgeslagen knipvorm en schaal lezen, is nog niet gecontroleerd.
- Geschiedenis: CadCraft stuurt zijn opslagacties nog niet naar de cloud, dus de cloudversies zijn die welke zijn opgeslagen vanaf andere apparaten en het web. Geschiedenis is alleen in CadCraft Studio.
- Of Studio de ondersteuningsmap acad.lsp bewaart na een herstart, is nog niet gecontroleerd; kies de map als het erom vraagt opnieuw in APPLOAD.
- Het Laser-paneel is nog niet op een echte laser geprobeerd: test elke instelling op afval. CadCraft Studio heeft geen Web Serial, dus in Studio slaat het paneel alleen G-code op.
- Het registreren van scans is getest op verzonnen scans, nog niet op de set van een echte scanner.
- Panoreren met twee vingers is geprobeerd met gesimuleerde trackpad-gebeurtenissen, nog niet op een echte trackpad.
- {{cmd:PEDIT}} heeft geen optie Hoekpunt bewerken (gebruik grips of Eigenschappen). Offset, bijsnijden, verlengen, afronden, breken en samenvoegen nemen nog geen splines aan; de hoogte (Z) van een spline wordt niet bewaard.
- Nieuwe alinea-tekst kan nog geen opmaakcodes krijgen, en SVG-plots tonen opgemaakte tekst in één kleur.
- WBLOCK's Hele tekening schrijft alleen het model, niet de bladen. De huidige maatvoeringsstijl wordt niet in het bestand opgeslagen: een tekening opent met Standaard als huidige stijl.
- De stijlen van het lintmenu hebben nog geen lijsten voor laag, kleur of lijntype: gebruik het paneel {{ui:Lagen}} en {{ui:Eigenschappen}}.
- Puntenwolken worden nog niet in de tekening opgeslagen of geplot, en E57-bestanden openen tot 6 miljoen punten en 512 MB.
- De opgeslagen DWG-bestanden van CadCraft zijn nog niet in AutoCAD zelf gecontroleerd.

Al het overige staat in [Nog niet beschikbaar](topic:not-built-yet).
