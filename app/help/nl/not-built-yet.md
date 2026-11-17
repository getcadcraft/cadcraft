---
title: Nog niet beschikbaar
summary: Wat deze versie van de CadCraft-tekenapp nog niet doet, en wat u nu in plaats daarvan kunt doen.
keywords: ontbrekend, beperkingen, ctb, stb, plotstijl, eigenschappen, ucs, annotatief, dynamisch blok, spline, routekaart, niet ondersteund, dwg opslaan, arcering, uitrekken, array, samenvoegen, matchprop, breken, lengte wijzigen, lijntype, lijndikte, xref, wolk, 3d, volumes, booleaanse bewerkingen, multileider, wipeout
from: 87e56521
---

CadCraft is nog in ontwikkeling. Deze pagina somt op wat de huidige versie niet doet, zodat u er niet naar hoeft te zoeken. Bij elk punt staat wat u nu in plaats daarvan kunt doen.

## Bestanden en opslaan

| Nog niet beschikbaar | In plaats daarvan, nu |
|---|---|
| Een CadCraft-DWG, gecontroleerd in AutoCAD zelf | Elke opgeslagen versie wordt teruggelezen door drie DWG-lezers van andere programma's en door CadCraft. Zie [Wat een DWG bewaart en wijzigt](topic:files#what-a-dwg-keeps-and-changes). |
| DXF opslaan die nieuwer is dan 2000 | Sla op als DXF 2000, of als DWG tot en met AutoCAD 2018. |
| Opslaan over het geopende bestand in de browser | Bij elke opslag wordt een nieuwe kopie gedownload; vervang het oude bestand zelf als u dat wilt. In CadCraft Studio schrijft {{key:Mod+S}} terug naar het bestand dat u hebt geopend. |
| Opslaan in de cloud en synchroniseren tussen computers | CadCraft stuurt uw opslagen nog niet naar de cloud: bewaar uw DWG- en DXF-bestanden in uw eigen mappen. In CadCraft Studio toont [Geschiedenis](topic:history) de cloudversies van een tekening die elders is opgeslagen, en kopieën van uw eigen opslagen op deze computer. |
| Overlays, en een gekoppelde tekening ter plekke bewerken | Voeg de tekening toe als koppeling en laad die opnieuw na het wijzigen van de andere tekening. Een koppeling blijft een koppeling als u opslaat als DWG, en {{cmd:XCLIP}} knipt haar bij. |
| Afbeeldingen in DXF; wipeouts die verbergen wat eronder ligt | DXF bewaart een afbeelding als het kader met de bestandsnaam; DWG bewaart die als afbeelding. Zie [Afbeeldingen in een tekening](topic:pictures). Een wipeout wordt getoond als zijn kader. |
| Multileiders bewerken met gebogen leiderlijnen, met leiderlijnen aan beide kanten van de inhoud, of met een blok dat ongelijkmatig is gedraaid of geschaald | Ze worden getekend zoals het andere programma ze tekende, en ze bewegen als één geheel. Multileiders met rechte leiderlijnen naar één landingspunt, en tekst of een blok als inhoud, komen bewerkbaar binnen ({{cmd:MLEADEREDIT}}). |
| In tabellen uit andere programma's: een cel met een blok, tekstopmaak binnen een cel, celranden en kleuren per cel van een DXF-tabel, een tabel die in kolommen is opgedeeld | De tabel opent als bewerkbare tabel ({{cmd:TABLEDIT}}) en wordt getoond zoals het andere programma hem tekende, totdat u hem bewerkt. Daarna tekent CadCraft hem opnieuw op basis van zijn cellen: gewone tekst, formules zoals `=G3*H3` en `=Sum(I3:I9)`, uitlijning en teksthoogten. Een blokcel is daarna leeg. Een ongewijzigde DWG-tabel wordt teruggeschreven met de celgegevens waarmee hij binnenkwam. |
| Een echt tabelobject in een opgeslagen DXF | Een DWG bewaart een tabel als tabel die andere programma's kunnen bewerken. Een DXF bewaart die als het blok dat hem tekent, met een eigen registratie van CadCraft: CadCraft opent hem weer als tabel; andere programma's zien een blok. Een gespiegelde of ongelijkmatig geschaalde tabel wordt ook in een DWG zo opgeslagen. |
| Kopiëren en plakken met andere programma's | Het klembord van CadCraft werkt tussen CadCraft-tekeningen en tabbladen in dezelfde browser, niet met andere programma's. Sla op als DWG of DXF en open het daar. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste). |

## Tekenen en bewerken

| Nog niet beschikbaar | In plaats daarvan, nu |
|---|---|
| Arceringspatronen die CadCraft niet heeft, en verloopvullingen precies zoals andere programma's die verven | Geopende arceringen met patronen die CadCraft niet heeft, worden als toon getoond. Een verloopvulling ({{cmd:GRADIENT}}) wordt per type op de eigen manier van CadCraft getekend: van dezelfde soort als die van andere programma's, niet punt voor punt. DWG 2004 en later bewaren die als echte verlooparcering; in een DXF 2000- of DWG 2000-bestand leest alleen CadCraft haar terug, en andere programma's zien een volle vulling. Patronen laden uit een `.pat`-bestand, en een arcering kan aan haar grens worden gekoppeld en volgt die dan. Zie [Arcering en vulgebieden](topic:hatch). |
| Lijntypen met vormen of tekst erin, en lijndikten in een opgeslagen DXF R12 | Vormen en tekst in het lijntype van een bestand vallen weg uit de streepjes; sla op als DWG om lijndikten te behouden. |
| Gepatroneerde arceringen in een opgeslagen DXF | R12 kent geen arcering: die worden opgeslagen als hun contouren. Sla op als DWG om het patroon te behouden. |
| Arrays die een ander programma heeft gemaakt of kan bewerken; rijen en niveaus in pad- en poolarrays; een array die zijn padcurve volgt | Een array gemaakt met ASsociatief ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; gewijzigd met {{cmd:ARRAYEDIT}}) wordt opgeslagen als blokverwijzing met de eigen getallen van CadCraft. Andere programma's tonen, verplaatsen, plotten en ontbinden hem, maar kunnen de aantallen niet wijzigen. Een array die in een ander programma is gemaakt, opent hier als gewone blokverwijzing. Een padarray bewaart een kopie van zijn pad: als u de curve daarna bewerkt, verplaatsen de items niet mee. |
| Geknipte bladviewports van en naar andere programma's | Een viewport die is geknipt met {{cmd:VPCLIP}} of gemaakt met {{cmd:MVIEW}} Veelhoekig of Object, wordt opgeslagen met de eigen contour van CadCraft: andere programma's openen hem als de rechthoek eromheen, en een viewport die in een ander programma is geknipt, opent hier als zijn rechthoek. DXF R12 bewaart alleen de rechthoek. |
| {{cmd:STRETCH}} met een kruisveelhoek | Gebruik een of meer kruisvensters. |
| {{cmd:PEDIT}} Hoekpunt bewerken (één hoekpunt per keer op de opdrachtregel) | Grepen, en de hoekpuntlijst in Eigenschappen (elk hoekpunt, met zijn breedtes en bolling). De rest van PEDIT is gebouwd: zie [Splines en polylijnen](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} en {{cmd:JOIN}} op ellipsen en splines | {{cmd:EXPLODE}} een spline (of {{cmd:PEDIT}} hem) om een polylijn te krijgen die deze opdrachten aannemen. |
| Afronding en afschuining tussen een boogsegment van een polylijn en het segment ernaast; afronding die een lijn in een polylijn voegt | {{cmd:EXPLODE}} de polylijn en rond daarna de stukken af. De afrondingsboog wordt als eigen object toegevoegd. |
| Bijsnijden en verlengen: de optie Project (3D) en het verlengen van het boogeinde van een polylijn | Snijd bij in het vlak van de tekening. Voor een boogeinde: ontbind de polylijn of teken de boog opnieuw. |
| OLE-objecten: invoegen, uitvoeren of bewerken; die tonen in een DWG waar het bestand ze plaatst; metabestandsafbeeldingen | Zie [Afbeeldingen](topic:pictures#objects-from-other-programs-ole). De objecten van een DXF worden getoond als hun bitmap of als een kader met label. Die van een DWG blijven behouden en worden niet op hun plaats getekend ({{cmd:OLELIST}} somt ze op en plaatst een kopie van een afbeelding waar u dat aangeeft). |
| Opmaakcodes typen (vet, gestapelde breuken, kleuren per woord) in alinea-tekst; andere lettertypen dan het ene Helvetica-achtige lettertype; kolommen | Opmaak die in een bestand kwam, blijft behouden, wordt getekend en opgeslagen (zie Tekst). Nieuwe alinea-tekst heeft één hoogte en kleur. |
| Alinea-tekst bewerkt op zijn rotatie | De editor opent waterpas; de tekst behoudt zijn rotatie. |
| Multileiders opgeslagen als multileiderobjecten in een DXF | Een DWG bewaart ze als multileiders, met elke leiderlijn en een blok als inhoud. Een DXF bewaart wat ze tekenen: lijnen, pijlpunten, en de tekst of het blok. |
| In tabellen ({{cmd:TABLE}}): tekst die binnen een cel omloopt, tabellen die in delen uiteenvallen, de eigen tekststijl van een tabelstijl en kleuren per rijsoort in een dialoogvenster, een gegevenskoppeling naar een spreadsheetbestand (`.xlsx`) of een koppeling die het bestand zelf leest | De tekst van een cel breekt alleen waar u hem breekt ({{key:Alt+Enter}}); maak de kolom breder. {{cmd:DATALINK}} leest een `.csv`-bestand, en {{cmd:DATALINKUPDATE}} vraagt u het bestand opnieuw te kiezen. {{cmd:DATAEXTRACTION}} en {{cmd:COUNTTABLE}} maken een tabel die de tekening niet zelf volgt: voer ze opnieuw uit (een live telling: {{cmd:BOMTABLE}}). |
| Attribuutdefinities die los in een opgeslagen bestand worden bewaard (buiten een blok), attributen met meerdere regels | Zet attribuutdefinities in een blok voordat u opslaat: los opgeslagen worden ze als tekst die de tag toont. |
| Laagstatussen (opslaan en herstellen welke lagen aan staan) | Gebruik {{cmd:LAYISO}} / {{cmd:LAYUNISO}}, of zet lagen met de hand aan en uit. |
| Selectie met venster- en kruisveelhoek, en opgeslagen selectiefilters | Hekje (`F`), Venster, Kruisvenster, Verwijderen (`R`), {{cmd:QSELECT}} voor een regel. |

## Het paneel Eigenschappen

| Nog niet beschikbaar | In plaats daarvan, nu |
|---|---|
| De keuzes voor Passend tekenen, en de horizontale tekstpositie en tekst onder de lijn bij maatvoering die niet lineair of uitgelijnd is | Ze worden op het object bewaard, getoond in Eigenschappen en opgeslagen. CadCraft plaatst de tekst volgens zijn eigen regel. |
| Materialen die andere programma's zien | Een opgeslagen bestand bewaart de materiaalnaam voor CadCraft. Andere programma's tonen het materiaal van de laag. |
| Transparantie in DWG 2000- en DXF-bestanden | Andere programma's tonen die objecten vol; CadCraft bewaart de transparantie. Sla op als DWG 2004 of later, dan is het voor iedereen goed. |
| Een arceringskoppeling gemaakt in een ander programma | CadCraft slaat zijn eigen koppeling op in DWG- en DXF 2000-bestanden. Koppelingen die in andere programma's zijn gemaakt, worden niet gelezen. Gebruik `HATCHEDIT` en Koppeling. Zie [Arcering en vulgebieden](topic:hatch). |
| Coördinaten in Eigenschappen in het UCS | Eigenschappen toont wereldcoördinaten; de statusbalk en {{cmd:ID}} tonen UCS-coördinaten. Zie [De weergave draaien en eigen coördinaten gebruiken](topic:ucs-and-turned-view). |
| Een eigen positie voor een annotatief object bij elke schaal; de schaalrecords per schaal lezen die andere programma's bewaren | Een annotatieve tekst of maatvoering bewaart een lijst met schalen ({{cmd:OBJECTSCALE}}), en elke viewport toont hem op de grootte voor zijn schaal, op dezelfde plaats. De lijst wordt opgeslagen als eigen gegevens van CadCraft: een ander programma ziet het object op de ene schaal waarvoor het is gemaakt, en een lijst die in een ander programma is gemaakt, wordt niet gelezen. Zie [Eenheden, bladen en schalen](topic:units-papers-scales#annotate-by-scale). |
| Afstanden, hoeken of spiegelingen van een dynamisch blok wijzigen; dynamische blokken die dynamisch blijven als u opslaat in een andere DWG-versie of als DXF | Schakel de zichtbaarheidstoestand om in Eigenschappen › {{ui:Aangepast}}; de andere waarden staan daar alleen-lezen. Het blijft dynamisch als u het opslaat als DWG in de versie waarin de tekening binnenkwam. Zie [Dynamische blokken](topic:dynamic-blocks). |
| Splinepassingstolerantie, spline-graad 6 en hoger, 3D-splines | Passings- en regelpunten, graad 1 tot en met 5 en gewichten zijn gebouwd: zie [Splines en polylijnen](topic:splines). De hoogte (Z) van een spline wordt niet bewaard. |

## Precisiehulpmiddelen

| Nog niet beschikbaar | In plaats daarvan, nu |
|---|---|
| Tracering vanuit punten over opdrachten heen, en het dialoogvenster met traceringsinstellingen (relatieve poolhoeken, extra hoeken) | {{cmd:POLARANG}} stelt de stap in; haal de punten opnieuw op in de volgende opdracht. |
| Snappen op raster | Typ coördinaten; het raster is alleen een visuele hulp. |
| Opties Boog en Lengte bij het aanwijzen van de hoeken van een gebied, en MEASUREGEOM Volume | Teken de contour met {{cmd:PLINE}} (inclusief bogen), en voer daarna {{cmd:AREA}} `O` uit. |
| Dynamische invoer voor grepen, en de lijst met opties (de pijl omlaag) | De opdrachtregel toont de opties. |
| Hoeken in graden-minuten-seconden, gradens of landmeetkundige richtingen | Typ decimale graden: `30.5` voor 30°30'. |
| Een dialoogvenster voor weergavebeheer; benoemde weergaven van een blad die op dat blad terugkomen | {{cmd:NAMEDVIEW}} somt weergaven op en herstelt ze. Een opgeslagen bestand bewaart ze, maar de weergaven van een blad komen terug op het eerste blad. |

## Bladen, maatvoering en plotten

| Nog niet beschikbaar | In plaats daarvan, nu |
|---|---|
| Velden voor de schaal van een viewport, een benoemd object zoals een laag of blok, een hyperlink, en bladensetvelden naast het bladnummer en de naam; velden die als veldobjecten zijn geschreven die andere programma's bijwerken | {{cmd:FIELD}} heeft de datum, de bestandsnaam, het bladnummer, de naam en het aantal, de eigenschappen van de tekening ({{cmd:DWGPROPS}}), de oppervlakte, lengte en andere eigenschappen van een object, en formules, in tekst, attributen en tabelcellen. Een ander programma toont een CadCraft-veld als de tekst die het voor het laatst las. CadCraft leest datum-, bestandsnaam-, eigenschap-, blad- en expressievelden van een ander programma en laat de andere soorten als tekst staan. De schaal van een viewport typt u met de hand in. |
| Opslaan welke maatvoeringsstijl actief is; maatvoeringstekst naar een vrije plek slepen | Een tekening opent met Standard actief. Tekst staat op de maatlijn (DIMTEDIT Links / Rechts / Midden). Zie [Maatvoeringsafmetingen instellen](topic:dimension-settings). |
| Bewerkbare tweeregelige hoekmaatvoeringen uit geopende bestanden die CadCraft niet kan uitwerken | Ze worden getoond zoals ze in het bestand zijn getekend. Ordinaat-, boglengte- en geknikte radiusmaatvoeringen openen als maatvoeringen die u kunt bewerken. |
| Controle van de CTB-lezer tegen een bestand van een ander programma (gebouwd, uit de gepubliceerde beschrijving), benoemde plotstijlen (STB), dither, penummers, grijswaarden uit een CTB en adaptieve aanpassing van lijntypen in een plotstijl | Maak de tabel in {{ui:Plotstijltabellen}} (kleur, grijs, inkt, lijndikte, lijntype, lijneinde en -verbinding, en vulstijl per kleur). Zie [Plotstijltabellen](topic:plot-pdf#plot-style-tables). |
| Paginainstellingen | Kies papier, schaal en plotstijl in het dialoogvenster {{ui:Plotten naar PDF}}. Een blad bewaart zijn plotstijl. |
| Hindi en andere schriften die complexe tekenvorming nodig hebben in PDF's, en zeldzame ideografen (Europese schriften, Cyrillisch, Grieks, Hebreeuws, Arabisch, Perzisch, Urdu, Thai, Chinees, Japans en Koreaans in drukwerk) | Ze worden afgedrukt als "?". |
| Arabisch-schrift en Chinese, Japanse of Koreaanse tekst in dezelfde geplotte PDF | Een plot draagt één lettertype: een van de twee schriften wordt afgedrukt als "?". |
| Expliciete richtingstekens in tekst (insluitingen, overschrijvingen, isolaties) | Ze worden genegeerd: elke regel wordt alleen op zijn letters geordend. |
| Afbeeldingen binnen een bijgevoegde PDF-pagina, in een plot | De lijnen, vullingen en tekst van de pagina worden afgedrukt. Een pagina die alleen een afbeelding is, komt erin met {{cmd:SCANATTACH}}, en afbeeldingen worden afgedrukt. Zie [PDF-onderlegger](topic:pdf-underlay#plot-and-save). |
| Een opdracht naar een lasersnijder sturen vanuit CadCraft Studio (Studio heeft geen Web Serial) | Sla de G-code op en stuur die met het eigen programma van uw laser, of stuur hem vanuit Chrome of Edge. Zie [Een tekening naar een laser sturen](topic:laser-cutting#send-from-the-browser). |

## Beperkingen en parameters

| Nog niet beschikbaar | In plaats daarvan, nu |
|---|---|
| Beperkingen op bladen, in blokken, op ellipsen, splines of tekst | Beperk op het tabblad {{ui:Model}}, op lijnen, polylijnen, cirkels, bogen en punten. |
| Glad (G2), en een boogbolling van een polylijn rechtstreeks beperken | Raaklijn en gelijk; een boogsegment volgt zijn twee eindpunten. |
| Referentie- (aangedreven) maatbeperkingen, en `3Point` in {{cmd:DCANGULAR}} | Een gewone maatvoering (DIMLINEAR …) toont een waarde zonder die aan te sturen. |
| Maatbeperkingen van een vaste grootte op papier, en het plotten ervan | Ze worden alleen op het scherm getoond. Voeg gewone maatvoeringen toe voor de plot. |
| Beperkingen die behouden blijven bij EXPLODE, BREAK, JOIN en andere opdrachten die nieuwe objecten maken, en op ingekorte polylijnen | Beperk ze opnieuw (AUTOCONSTRAIN helpt). {{cmd:MIRROR}} en {{cmd:TRIM}} van lijnen, bogen en cirkels behouden ze. |
| Ontwerptabellen (configuraties) in CadCraft | Wijzig parameters in het paneel. |
| Een getest heen-en-weer met SolidWorks | Controleer de schets die de macro maakt voordat u erop vertrouwt. |

## 3D

| Nog niet beschikbaar | In plaats daarvan, nu |
|---|---|
| Afrondingen, afschuiningen, uitholling en lofts; uitvegen langs een pad dat stijgt (3D-paden) | Extrudeer contouren met bogen, duw en trek vlakken, en gebruik omwentelen en uitvegen langs vlakke paden. |
| Extruderen in een andere richting dan omhoog | Teken de vorm op de grond en extrudeer hem omhoog of omlaag (met een trekhoek of langs een pad als u wilt). Draai het volume daarna. |
| Hoogte en dikte van 2D-objecten | De tekening ligt op de grond (hoogte 0) op het tabblad 3D. |
| Volumes, regio's en lichamen uit andere programma's bewerken; die tonen binnen blokken; hun vlakken op uitgevegde, geloftte of andere vrije-vormoppervlakken; polyface- en polygoonmeshes | Volumes in de modelruimte worden op het tabblad 3D getoond zoals ze zijn en worden in DWG ongewijzigd teruggeschreven. Wat niet wordt getekend, staat vermeld als het tabblad 3D opent. Vraag meshes als 3D-vlakken in de modelruimte. Zie [Volumes uit andere programma's](topic:3d-solids#solids-from-other-programs). |
| Kopiëren en plakken van volumes | Gebruik op het tabblad 3D {{cmd:COPY}}. Het klembord bevat alleen 2D-objecten. |
| Doorsneden, weergaven die latere wijzigingen aan de volumes volgen, en geschaduwde volumes op geplotte bladen | {{cmd:VIEWBASE}} plaatst vlakke weergaven (een momentopname). Voer hem opnieuw uit na het wijzigen van de volumes. |
| Materialen, texturen en belichtingsinstellingen | De visuele stijlen: geschaduwd, randen, verborgen lijn, draadmodel, röntgen. |
| Kaartlagen geplot, op viewports van bladen en in het tabblad 3D; afbeeldingen uit bestanden die met de tekening zijn opgeslagen; de locatie van een tekening, geschreven voor andere programma's in DWG 2000–2007 en DXF R12 | Kaartlagen worden op het scherm onder de modelruimte getoond. Het systeem en de lijst met lagen worden met de tekening opgeslagen. Zie [Kaartlagen onder de tekening](topic:map-layers). |
| E57-scans met meer dan 6 miljoen punten of 512 MB, eigen bestanden van scannerfabrikanten (RCP, RCS, FLS, LGS, TZF, ZFS), een puntenwolk die met de tekening is opgeslagen of geplot, snappen op een wolk in het tabblad 3D, rechtopstaande (doorsnede)plakken op het tabblad Model | Exporteer grote scans of scans van fabrikanten als LAS of LAZ ([Puntenwolkindelingen](topic:point-cloud-formats)). Voeg de wolk elke keer toe als u de tekening opent. Teken over een plattegrondplak op het tabblad Model: zie [Werkelijke lijnen traceren over een puntenwolk](topic:point-clouds). |
| Scans registreren: doelen (bollen, schaakbordpatronen) zelf in een scan vinden, alle scans tegelijk oplossen (bundelaanpassing), schaal, registreren tegen een model | Kies overeenkomende punten of typ doelcoördinaten, en verfijn daarna één scan per keer met ICP. Zie [Meerdere scans tot één registreren](topic:register-scans). |

## Routines en aanpassen

| Nog niet beschikbaar | In plaats daarvan, nu |
|---|---|
| Gecompileerde of beveiligde LISP (.fas, .vlx), native programma's (.arx, .crx, .dbx) en VBA (.dvb) | Laad de .lsp-bron van een routine met {{cmd:APPLOAD}}. |
| LISP's `grread`, reactors (`vlr-…`), curvefuncties (`vlax-curve-…`), woordenboeken en uitgebreide gegevens, de `acet-…` van de Express Tools | De rest van de taal werkt. Zie [LISP-routines uitvoeren](topic:run-lisp). De opdrachtregel noemt een ontbrekende functie wanneer een routine daarbij komt. |
| Afbeeldingen en diapositieven in het dialoogvenster van een routine | Ze worden als lege kaders getoond; de rest van het dialoogvenster werkt. |
| CraftScript (.craft), Lua en Python in CadCraft | Voer ze uit in de scriptwerkomgeving van PartCraft. |
| Lijsten met lagen, kleuren en lijntypen binnen de lintmenustijlen | Gebruik het paneel {{ui:Lagen}} en {{ui:Eigenschappen}}. |
| De Startup Suite en aliassen die op uw computer zijn bewaard of gesynchroniseerd | Ze worden in deze browser bewaard; de desktopapp en de clouddienst bewaren ze voor u. In Studio worden `acad.lsp` en `acaddoc.lsp` gelezen uit een ondersteuningsmap die u kiest (Applicaties laden). |

## Help

De help beschrijft deze versie. Wanneer iets wordt toegevoegd, verhuist het van deze pagina naar de stap-voor-stap-gidsen.
