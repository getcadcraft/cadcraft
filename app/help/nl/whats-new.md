---
title: Wat is er nieuw in 0.7
summary: PDF-onderleggers en PDF-import, gescande tekeningen met een automatische trace, echte splines met SPLINE, SPLINEDIT en PEDIT, een beheer van maatvoeringsstijlen, tekst die zijn opmaak behoudt, WBLOCK en uw eigen schalen, 3D-volumes uit andere programma's, scans registreren, een paneel Laser, USD-export, Geschiedenis en afdrukken in CadCraft Studio, een begeleide eerste tekening, de werkbalk aan elke kant of in minder rijen en meer voor AI-assistenten.
keywords: wat is er nieuw, release-opmerkingen, wijzigingslogboek, wijzigingen, 0.7, versie, nieuwe functies, pdf, pdfattach, pdfimport, onderlegger, scan, scanattach, scantrace, trace, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, opmaak, wblock, scalelistedit, schalenlijst, acis, 3d-volumes, registerscans, scans registreren, icp, e57, las, laser, grbl, g-code, usd, usdout, geschiedenis, versies, vergelijken, afdrukken, printer, png, svg, plotstijl, lijntype, rondleiding, spiekbriefje, opdrachtenkaart, werkbalkpositie, werkbalkrijen, toolbardock, regen, regenall, trackpad, vegen, codepagina, cyrillisch, koreaans, chinees, japans, elektra, rcd, p&id, pid, acad.lsp, acaddoc.lsp, ondersteuningsmap, assistenten, mcp, eenheden, portugees
from: b9258ca6
---

Dit is wat er in CadCraft 0.7 is veranderd ten opzichte van 0.6. Veel ervan is op Discord gevraagd. De lijst is per gebied gegroepeerd, met het belangrijkste eerst.

## Nieuw

### Pdf's en gescande tekeningen

- **Een pdf-pagina onder de tekening zetten.** {{cmd:PDFATTACH}} (`PDFATT`) plaatst een pagina op ware grootte of op een schaal die u typt. Snap op de lijnen ervan, maak hem vager of monochroom ({{cmd:PDFADJUST}}), knip hem bij ({{cmd:PDFCLIP}}) en schakel de eigen lagen van de pdf om ({{cmd:PDFLAYERS}}). Hij wordt geplot als lijnen, vullingen en tekst, en een DWG of DXF 2000 bewaart hem als koppeling naar het bestand. Een pdf openen met {{ui:Openen}} vraagt of u hem wilt koppelen of importeren. Zie [PDF-onderleggers en PDF-import](topic:pdf-underlay).
- **Een pdf-pagina omzetten in tekenobjecten.** {{cmd:PDFIMPORT}} (`PDFIM`) maakt lijnen, polylijnen, cirkels, bogen, effen arceringen en tekst op lagen die naar de pdf zijn genoemd, op ware grootte, op een getypte schaal of geschaald vanaf twee punten en een echte afstand, in één stap ongedaan maken. Zie [Een pagina importeren](topic:pdf-underlay#import-a-page).
- **Gescande tekeningen.** {{cmd:SCANATTACH}} haalt een PNG, JPEG of TIFF (één pagina of alle) of een pdf-pagina die een afbeelding is binnen. Schaal hem daarna vanaf twee punten ({{cmd:SCANSCALE}}), lijn hem uit ({{cmd:SCANALIGN}}), zet hem recht met zijn eigen lange lijnen ({{cmd:SCANDESKEW}}), maak hem zwart-wit en verwijder vlekjes ({{cmd:SCANCLEAN}}), snijd hem bij en wis delen ervan. Elke stap is één stap ongedaan maken en het oorspronkelijke bestand blijft bewaard. Zie [Gescande tekeningen en de trace](topic:scanned-drawings).
- **Een scan overtrekken tot lijnen en bogen.** {{cmd:SCANTRACE}} tekent de lijnen van de scan als lijnen en bogen op een nieuwe laag, SCAN-TRACE, binnen een tolerantie die u instelt, en laat tekst en arcering zoals ze zijn. Het rapport zegt wat het maakte en wat het liet liggen, en is geen bewering dat het resultaat klopt: controleer het aan de hand van het blad. {{cmd:RASTERSNAP}} laat objectsnaps de uiteinden, hoeken en kruisingen van de scan vinden. Er wordt niets naar ergens gestuurd en er wordt geen getraind model gebruikt. Zie [De trace](topic:scanned-drawings#the-trace).

### Tekenen en bewerken

- **Echte splines.** {{cmd:SPLINE}} (`SPL`) tekent een kromme door punten of vanuit stuurpunten (graad 1 tot 5), met eindraaklijnen; {{cmd:SPLINEDIT}} (`SPE`) verplaatst, voegt toe en verwijdert pas- of stuurpunten, stelt gewichten in, opent, sluit, keert om, of zet een spline om in een polylijn. Splines uit DWG- en DXF-bestanden openen als splines, en DWG en DXF 2000 slaan ze op als splines. Zie [Splines en polylijnen](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) sluit en opent polylijnen, voegt er lijnen en bogen aan toe, stelt één breedte in, past een kromme door de hoekpunten of een spline eroverheen en neemt die terug met Decurve, keert om en bewerkt er meerdere tegelijk. Zie [Een polylijn bewerken](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) schrijft een blok, enkele objecten of de hele tekening naar een nieuwe DWG of DXF met alleen de lagen, stijlen en blokken die ze gebruiken. Zie [Een blok of objecten naar een eigen bestand schrijven](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN en REGENALL.** {{cmd:REGEN}} (`RE`) tekent het tabblad waarop u zit opnieuw uit de tekening, {{cmd:REGENALL}} (`REA`) elk tabblad, elk venster en elke geopende tekening. Zie [REGEN en REGENALL](topic:commands#regen-and-regenall).

### Tekst en maatvoering

- **Tekst behoudt zijn opmaak.** Alineatekst uit andere programma's behoudt zijn kleuren per woord, vet en cursief, onderstreping, gestapelde breuken en hoogtes: ze worden op het scherm en in pdf's getekend, blijven behouden als u de woorden bewerkt en worden teruggeschreven. Zie [Opmaak in alineatekst uit andere programma's](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Een beheer van maatvoeringsstijlen.** {{cmd:DIMSTYLE}} (`D`) maakt, wijzigt, vergelijkt en past benoemde maatvoeringsstijlen toe; een stijl wijzigen wijzigt elke maat die hem gebruikt. {{cmd:DIMEDIT}} (`DED`) zet tekst terug, typt nieuwe tekst, draait hem of kantelt de maathulplijnen; {{cmd:DIMTEDIT}} verplaatst de tekst naar links, rechts of het midden. Zie [Benoemde maatvoeringsstijlen](topic:dimension-settings#named-dimension-styles).
- **Uw eigen schalen.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) voegt schalen zoals 1:75 toe aan de schaallijsten van viewport en plot; ze worden in de tekening opgeslagen (DWG en DXF 2000), en een tekening uit een ander programma brengt zijn eigen lijst mee. Zie [Schalen](topic:units-papers-scales#scales).
- **Tekst in andere alfabetten.** DXF-bestanden die in Cyrillische, Koreaanse, Chinese, Japanse of Vietnamese codepagina's zijn opgeslagen, openen nu met hun tekst, en Chinese, Japanse en Koreaanse tekst wordt in pdf's afgedrukt (de plot haalt de eerste keer dat hij er een nodig heeft een groter lettertype op). Zie [Lettertype](topic:text#font).

### Plotten en afdrukken

- **Meer in plotstijltabellen.** Voor elke kleur kan een tabel nu ook een lijntype, het lijneinde en de lijnverbinding instellen, en een vulstijl die effen vullingen als arceerlijnen afdrukt; de tabel heeft een eigen lijst met lijndikten en een lijntypeschaal. Zie [Plotstijltabellen](topic:plot-pdf#plot-style-tables).
- **Afdrukken, en PNG- en SVG-bestanden.** Het dialoogvenster Plotten heeft {{ui:Afdrukken…}}, {{ui:PNG downloaden}} (300 dpi) en {{ui:SVG downloaden}}. In CadCraft Studio toont het de printers van de computer, hun papier en het aantal kopieën. Zie [Afdrukken](topic:plot-pdf#print) en [Afbeeldings- en SVG-bestanden](topic:plot-pdf#picture-and-svg-files).

### 3D en puntenwolken

- **3D-volumes uit andere programma's.** Volumes, regio's en lichamen in de modelruimte van een tekening verschijnen op het 3D-tabblad, alleen-lezen, en opslaan als DWG schrijft ze ongewijzigd terug. Vlakken op oppervlakken die CadCraft nog niet tekent, worden vermeld, niet gegokt. Zie [Volumes uit andere programma's](topic:3d-solids#solids-from-other-programs).
- **Meerdere scans registreren.** {{cmd:REGISTERSCANS}} (`REGSCAN`) plaatst scans die vanuit verschillende posities zijn genomen in één kader, via puntenparen of getypte doelcoördinaten, verfijnt ze met ICP, slaat de registratie op als een klein projectbestand en schrijft de geregistreerde wolk als één LAS- of E57-bestand. Zie [Meerdere scans tot één registreren](topic:register-scans).
- **USD-export.** {{cmd:USDOUT}}, of {{cmd:EXPORT3D}} › {{ui:USD}}, schrijft de volumes van het 3D-tabblad als `.usda`, `.usdc` of `.usdz`. Zie [Het 3D-model als USD exporteren](topic:usd).
- **Berekeningen op het 3D-tabblad.** Waar de gereedschappen van het 3D-tabblad om een afstand vragen, kunt u een berekening typen, zoals op de opdrachtregel. Zie [Rekenen in een getypte waarde](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Dingen maken

- **Een tekening naar een laser sturen.** {{cmd:LASER}}, of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Laser…}}, opent een paneel over de tekening: elke laag snijdt, kerft, graveert lijnen, vult vormen, graveert een afbeelding of wordt niet verstuurd, met zijn vermogen, snelheid en aantal keren. Het voorbeeld volgt uw bewerkingen, {{ui:G-code opslaan…}} schrijft G-code voor de lasermodus van GRBL, en in Chrome of Edge kan het paneel de taak omkaderen en via USB versturen. De instellingen worden in de tekening opgeslagen (DWG en DXF). Zie [Een tekening naar een laser sturen](topic:laser-cutting).
- **Symbolen voor gebouwinstallaties in de add-on Elektra.** Data-, telefoon- en tv-aansluitingen, toets- en tijdschakelaars, een thermostaat, een nooduitgangbord, melders, een brandmelder en een sirene, een ventilator, boiler, kookplaat, laadpunt voor elektrische voertuigen, energiemeter en onderverdeler, en RCD- en RCBO-symbolen. Een groep kan een RCD dragen, de verdelerstaat heeft een kolom RCD en de controles noemen stopcontactgroepen zonder RCD van 30 mA of minder. Het is een planningsherinnering, geen normcontrole.
- **Een P&ID-add-on.** P&ID tekent procesdiagrammen: symbolen met aansluitpunten, proces- en signaallijnen, tags, leidingnummers, lijsten van leidingen, apparatuur, instrumenten en kleppen (CSV of een werkmap) en controles. Hij wordt met CadCraft geleverd en staat uit totdat u hem aanzet in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Add-ons}}. Het is een tekenhulp, geen goedkeuring door een ingenieur, en de teksten zijn voorlopig alleen in het Engels.

### Aan de slag en het scherm

- **Een begeleide eerste tekening.** {{cmd:TOUR}} (of {{ui:De rondleiding volgen}} op de startkaart) leidt u in de echte tekening door zes stappen: een lijn, een cirkel, een verplaatsing, een bijsnijding, een wisbewerking en een maat. Hij start vanzelf de eerste keer dat CadCraft leeg opent. Zie [Liever begeleid worden?](topic:getting-started#prefer-to-be-guided)
- **Een spiekbriefje en een opdrachtenkaart.** Het [spiekbriefje](topic:cheat-sheet) heeft de 40 dagelijkse opdrachten op één pagina, ook als pdf om af te drukken, en de [opdrachtenkaart](topic:command-map) toont opdrachten met hun korte namen, van A tot Z.
- **De werkbalk aan elke kant.** {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Positie van de werkbalk}}: boven (zoals voorheen), onder, links of rechts, of typ {{cmd:TOOLBARDOCK}}. Zie [Positie van de werkbalk](topic:settings#toolbar-position).
- **Werkbalkrijen.** {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Werkbalkrijen}}: laten teruglopen, 2 rijen of 1 rij, voor de CadCraft-werkbalk en de stijlen Tekenen klassiek en Lint. {{key:Shift+Ctrl+F1}} doorloopt ze, {{key:Ctrl+F1}} doorloopt wat de knoppen tonen, en {{cmd:TOOLBARROWS}} en {{cmd:TOOLBAR}} stellen ze in. De starthint heeft een sluitknop. Met dank aan GJoe2, die dit als pull request instuurde. Zie [Werkbalkrijen](topic:settings#toolbar-rows).

### In CadCraft Studio

- **Geschiedenis.** {{cmd:HISTORY}} (`HIST`), of {{ui:Weergave}} › {{ui:Meer}} › {{ui:Geschiedenis…}}: de kopieën die Studio bewaart als u een tekening opent en opslaat, en de cloudversies van de tekening als u hem uit de cloud hebt geopend. Open of herstel er een, of vergelijk er twee, waarbij wat is toegevoegd, verwijderd en gewijzigd in kleur wordt getoond. Zie [Geschiedenis](topic:history).
- **acad.lsp en acaddoc.lsp.** Kies in {{cmd:APPLOAD}} een ondersteuningsmap: die twee bestanden worden geladen als CadCraft start (acaddoc.lsp opnieuw voor elk nieuw tekentabblad), en `S::STARTUP` draait daarna. Zie [Toepassingen laden](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Het dialoogvenster Plotten in een eigen venster.** Een knop in de titelbalk verplaatst het naar een venster dat u op een andere monitor kunt zetten. Zie [Een dialoogvenster verplaatsen](common:arrange-panels#move-a-dialog).

### Voor AI-assistenten

- **Bestanden op naam, in mappen die u kiest.** In CadCraft Studio kan een assistent bestanden op naam openen, opslaan en plotten, en een opdracht het bestand geven waar die om vraagt (INSERT uit een bestand, de export van COUNT, SAVEAS, PLOT), maar alleen binnen de mappen die u toevoegt onder {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Assistenten}} › {{ui:Mappen die ze mogen gebruiken}}. Zie [Laat hem bestanden gebruiken in mappen die u kiest](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Minder aanroepen.** Een assistent kan een hele opdrachtregel in één keer typen, een opdracht tussen zijn aanroepen open houden, objecten naar type en laag tellen zonder ze op te sommen en een blok met zijn attribuutwaarden in één stap plaatsen.
- **Zonder venster.** De opdrachtregel `cadcraft` schrijft SVG-plots en converteert, plot, controleert of beschrijft veel bestanden tegelijk. Het MCP-pakket is nog niet gepubliceerd. Zie [Met bestanden werken zonder CadCraft te openen](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Gewijzigd

- **Een trackpad verschuift.** Beweeg twee vingers over een trackpad en de 2D-weergave volgt ze; knijpen en het muiswiel zoomen. Zie [Muis, trackpad en aanraken](topic:mouse-trackpad-touch).
- **OLE-objecten blijven bewaard.** De ingesloten objecten van een DXF verschijnen als hun afbeelding of als een gelabeld kader en worden door DXF 2000 teruggeschreven. Die van een DWG blijven bewaard en worden teruggeschreven als u opslaat als DWG, maar worden nog niet getoond. Voorheen gingen ze bij het opslaan verloren. Zie [Objecten uit andere programma's (OLE)](topic:pictures#objects-from-other-programs-ole).
- **De eenheden van een nieuwe tekening** volgen de eenheid die u in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} een ster geeft.

## Opgelost

- Indelingen die leeg openden, of een viewport kwijtraakten en in plaats daarvan het hele model toonden, openen nu met hun echte viewports. Een indeling zonder koppeling naar zijn inhoud blijft bewaard en het rapport bij het openen zegt dat.
- DXF-bestanden in oudere codepagina's toonden onleesbare Cyrillische en Koreaanse tekst. Ze lezen nu goed.
- Alineatekst uit andere programma's verloor zijn opmaak bij het openen en werd zonder opmaak teruggeschreven.

## In elke app

- **Eenheden.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Eenheden}} heeft een lijst voor lengte, oppervlakte, volume, hoek en helling, met de exacte maten die de definities van de eenheden geven (de US survey foot is een eigen eenheid). Zet de eenheden uit die u nooit gebruikt en ze verdwijnen uit de eenhedenlijsten; geef er één een ster en nieuw werk begint daarin. Een bestand behoudt altijd zijn eigen eenheid. In CadCraft stelt de ster de eenheden van een nieuwe tekening in als het een eenheid is die een tekening kan dragen; het eigen vak {{ui:Eenheden}} van CadCraft volgt de schakelaars nog niet. Zodra een tekening eenheden heeft, kan een lengte die u typt het teken van elke eenheid dragen. Zie [Eenheden, getypte waarden en de eenhedenlijsten](common:unit-lists).
- **Een dichtere indeling en panelen die netjes opzij gaan.** {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Opmaakdichtheid}} › {{ui:Compact}} past meer op het scherm (aanraakschermen en telefoons houden hun grote knoppen). Elk zijpaneel heeft een smalle titelbalk: sleep hem om het paneel vast te zetten of zwevend te maken, zet hem neer op de balk van een ander paneel om één kader als tabbladen te delen, speld hem vast zodat hij naar de rand schuift, of verberg hem en haal hem terug vanaf de rand. Zie [De panelen indelen](common:arrange-panels#make-the-layout-denser).
- **Dialoogvensters verplaatsen.** Sleep een dialoogvenster aan zijn titelbalk uit de weg van de tekening; het komt terug waar u het liet. Dubbelklik op de titelbalk om het weer te centreren. Zie [Een dialoogvenster verplaatsen](common:arrange-panels#move-a-dialog).
- **Recepten voor AI-assistenten.** Tien uitgewerkte verzoeken voor uw eigen assistent (een tekening opruimen, een set plotten, tekeningen controleren, een model vragen stellen, een opmeting optellen, een onderdeelvariant proberen…), elk met de gereedschappen die het aanroept en de rechten die het nodig heeft, en elk opnieuw afgespeeld door onze tests. De apps bevatten geen AI. Zie [Recepten voor AI-assistenten](common:assistants-recipes).
- **Talen.** **Português (Portugal)** is nieuw in {{ui:Instellingen}} › {{ui:Algemeen}} › {{ui:Taal}}. Die, **Português (Brasil)**, **Español (México)** en **Bahasa Indonesia** hebben nu elk woord van de apps, als concepten die nog niet door een moedertaalspreker zijn beoordeeld. De helponderwerpen zijn in het Engels.
- **CadCraft Studio** zegt waarom een updatecontrole mislukte (nog geen bestand voor uw systeem, geen netwerk, een ongeldige handtekening) in plaats van alleen "Gereed", en brengt een gesloten kaart Wat is er nieuw niet meer terug totdat er een nieuwere uitgave is.

## Nog niet in deze versie

- **0.7 is niet code-ondertekend.** Ondertekenen en het Microsoft Store-pakket zijn verplaatst naar 0.8 omdat de validatie van het certificaat nog niet is gelukt. Controleer de SHA-256 naast elk bestand op getcadcraft.com/download. Als SmartScreen op Windows het installatieprogramma tegenhoudt, kiest u {{ui:Meer info}} en daarna {{ui:Toch uitvoeren}}. Klik op een Mac de eerste keer met de rechtermuisknop op CadCraft Studio en kies {{ui:Openen}}. CadCraft Studio staat nog niet in een appwinkel en er is nog geen build voor iPad of iPhone.
- De lijsten voor hoek en helling in {{ui:Eenheden}} worden opgeslagen, maar geen enkel veld leest ze nog.
- De OLE-objecten van een DWG blijven bewaard maar worden niet getoond, en metafile-afbeeldingen in OLE-objecten worden niet getekend.
- Het lezen van plotstijltabellen (CTB-bestanden) uit andere programma's wacht op een voorbeeldbestand.
- Oudere Aziatische tekst die als `\M+`-codes is geschreven, wordt gelezen maar is nog niet getoetst aan een bestand uit een ander programma.
- PDF-onderleggers: afbeeldingen in de pagina worden op het scherm getoond maar niet geplot, de plot van een assistent laat onderleggers weg, en hoe andere programma's de opgeslagen clip en schaal lezen, is er niet in gecontroleerd.
- Geschiedenis: CadCraft stuurt zijn bewaarde versies nog niet naar de cloud, dus de cloudversies zijn die welke vanaf andere apparaten en het web zijn opgeslagen. Geschiedenis is er alleen in CadCraft Studio.
- Of Studio de ondersteuningsmap van acad.lsp na een herstart onthoudt, is nog niet gecontroleerd; vraagt het ernaar, kies de map dan opnieuw in APPLOAD.
- Het paneel Laser is nog niet op een echte laser geprobeerd: test elke instelling op afval. CadCraft Studio heeft geen Web Serial, dus in Studio slaat het paneel alleen G-code op.
- Het registreren van scans is getest op verzonnen scans, nog niet op de set van een echte scanner.
- Verschuiven met twee vingers is geprobeerd met gesimuleerde trackpadgebeurtenissen, nog niet op een echte trackpad.
- {{cmd:PEDIT}} heeft geen optie Hoekpunt bewerken (gebruik grips of Eigenschappen). Offset, bijsnijden, verlengen, afronden, breken en samenvoegen werken nog niet met splines; de hoogte (Z) van een spline blijft niet bewaard.
- Nieuwe alineatekst kan nog geen opmaakcodes krijgen, en SVG-plots tonen opgemaakte tekst in één kleur.
- Entire drawing van WBLOCK schrijft alleen het model, niet de bladen. De huidige maatvoeringsstijl wordt niet in het bestand opgeslagen: een tekening opent met Standard als huidige.
- De menustijlen met een lint hebben nog geen lijsten voor laag, kleur of lijntype: gebruik het paneel {{ui:Lagen}} en {{ui:Eigenschappen}}.
- Puntenwolken worden nog steeds niet in de tekening opgeslagen of geplot, en E57-bestanden openen tot 6 miljoen punten en 512 MB.
- De opgeslagen DWG-bestanden van CadCraft zijn nog niet in AutoCAD zelf gecontroleerd.

Al het andere staat in [Nog niet gebouwd](topic:not-built-yet).
