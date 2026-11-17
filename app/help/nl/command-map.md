---
title: Opdrachtenoverzicht: wat u typt
summary: Elke opdracht die CadCraft heeft met de korte namen, A tot Z, gemaakt uit het programma zelf, en de gewoontes uit andere tekenprogramma's die afwijken.
keywords: opdrachtenoverzicht, opdrachten, aliassen, korte namen, overstappen, opdrachtenlijst, wat u typt, wissen, bijsnijden, equivalent, verschillen
from: 3bdfd3e6
---

CadCraft neemt de opdrachtnamen en korte namen over die mensen kennen uit andere tekenprogramma's: typ `L` voor een lijn, `TR` om bij te snijden, `E` om te wissen. Er is dus voor de meeste geen vertaaltabel om te leren: de naam die u kent, is hier dezelfde. De lijst hieronder bevat elke opdracht die CadCraft heeft, gemaakt uit het programma zelf. {{key:Enter}} herhaalt de laatste opdracht; `HELP` in de opdrachtregel toont dezelfde lijst.

De weinige die niet hetzelfde zijn, of nog niet beschikbaar zijn:

- **Opslaan** downloadt een kopie in de browser ({{cmd:SAVE}}, {{cmd:SAVEAS}}); in CadCraft Studio slaat het het bestand op. Zie [Overstappen van andere tekensoftware](topic:coming-from).
- **PLOT** maakt een PDF (ook PNG en SVG), met een tabel met plotstijlen; er is geen beheer van de paginainstelling.
- **DIMSTYLE** en **PEDIT** zijn beschikbaar; **PEDIT** heeft geen optie Hoekpunt bewerken (dat doen grepen).
- **TABLE** is nog niet beschikbaar; {{cmd:XREF}}, {{cmd:SPLINE}} en {{cmd:WBLOCK}} wel.
- De eigen opdrachten van een routine (AutoLISP `C:NAME`) verschijnen nadat u die laadt met {{cmd:APPLOAD}}; ze staan hier niet in de lijst.

## Alle opdrachten (398)

| Opdracht | Korte namen | Wat het doet |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Draai de 3D-weergave met de linkermuisknop |
| `ACCESS` | `AX` | Zet tekenen zonder zicht aan of uit: resultaten worden voorgelezen door uw schermlezer, een toetsenbordcursor op de tekening, snapgeluiden en gesproken opdrachten. |
| `ALIASEDIT` |  | Bewerk opdrachtaliassen in één tekstbestand (het bekende formaat L, *LINE) |
| `ALIGN` | `AL` | Verplaats en draai objecten zodat bronpunten op doelpunten vallen (één, twee of drie paren), en schaal ze indien gewenst |
| `ALIGNPANEL` | `ALP` | Open het paneel Uitlijnen en verdelen |
| `ALIGNTO` |  | Lijn de linker-, midden-, rechter-, boven-, middel- of onderranden van de geselecteerde objecten uit, op de selectie, het eerste of laatste aangewezen object, of een punt |
| `ANNOALLVISIBLE` | `ANNOALL` | Toon annotatieve objecten op elke schaal, of alleen waar de schaal van de viewport (of van de tekening) in hun lijst staat |
| `ANNOSCALE` | `CANNOSCALE` | Stel de annotatieschaal van de tekening in: annotatieve tekst en maatvoering worden vergroot of verkleind zodat ze op dezelfde grootte afdrukken |
| `APPLOAD` | `AP` | Laad toepassingen: LISP-routines (.lsp) en hun dialoogbestanden (.dcl); de Startup Suite (AP) |
| `ARC` | `A` | Boog: 3-punt, Begin/Midden/Eind, Begin/Midden/Hoek, Begin/Midden/Lengte, Begin/Eind/Hoek, Begin/Eind/Richting, Begin/Eind/Straal, Midden/Begin/Eind, Midden/Begin/Hoek, Midden/Begin/Lengte, Doorgaan |
| `AREA` | `AA` | Oppervlakte en omtrek via punten of van een object; Toevoegen en Aftrekken houden een lopend totaal bij (AA) |
| `ARRAY` | `AR` | Kopieën in rijen en kolommen, of rond een middelpunt (AR) |
| `ARRAYASSOCIATIVITY` |  | Stelt in of de ARRAY-opdrachten arrays maken die bewerkbaar blijven (1) of gewone kopieën (0) |
| `ARRAYCLOSE` |  | Beëindigt het bewerken van de brongegevens van een array |
| `ARRAYEDIT` |  | Wijzigt een array die is gemaakt met de optie Associatief: aantallen, afstanden, brongegevens, één item |
| `ARRAYPATH` |  | Kopieën van objecten langs een lijn, boog, polylijn of andere kromme |
| `ARRAYPOLAR` |  | Kopieën rond een middelpunt |
| `ARRAYRECT` |  | Kopieën in rijen en kolommen |
| `ASBUILT` | `ASB` | ASBUILT leest de as-built-punten die een ploeg heeft gemeten (CSV / TXT, zoals EXPORTPOINTS schrijft) en vergelijkt ze met de punten van de tekening: binnen of buiten de tolerantie, niet gemeten, extra. Markeert ze op de laag AS-BUILT en downloadt een CSV-rapport. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definieer een attribuut (een label waarvoor een blok een waarde vraagt) om in een blok te zetten (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Bewerk de attribuutwaarden van een blokverwijzing in de opdrachtregel, één na één (Enter behoudt een waarde) |
| `ATTSYNC` |  | Breng de verwijzingen van een blok in lijn met de attribuutdefinities: nieuwe worden toegevoegd met hun standaardwaarden, verwijderde vervallen, posities en tekst worden teruggezet; waarden blijven behouden |
| `AUDIT` |  | Controleert de geopende tekening op beschadigingen: getallen die niet eindig zijn, objecten zonder grootte, ontbrekende lagen, blokken, stijlen en lijntypen, blokken die zichzelf bevatten, gedeelde id's, kapotte maatvoering en arceringen. Toont per soort wat het vindt en vraagt om toestemming voordat het herstelt; de herstelling is één stap ongedaan maken. |
| `AUNITS` | `ANGUNITS` | Hoe hoeken worden getoond en ingevoerd: decimale graden, graden-minuten-seconden of richtingen zoals N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatisch aanvullen van de tekening aan of uit, of toon wat de patronen van de tekening nu voorstellen. |
| `AUTOCONSTRAIN` |  | Voeg samenvallende, horizontale en verticale beperkingen toe waar de geometrie al dicht bij elkaar ligt |
| `AUTODIM` | `ADIM` | Maatvoering volgens regels: totale maat, ketens langs de zijden, openingen, diameters van gaten en rasterafstand, zonder te herhalen wat al van maatvoering is voorzien. |
| `AUTOSHEET` | `ASH` | Maakt bladen zelf: kiest papier en standaardschalen en plaatst elk aanzicht met een bijschrift en een titelblok. |
| `BATTMAN` |  | Beheer van blokattributen: volgorde, labels, prompts, standaardwaarden en modi van de attributen van een blok, daarna worden de verwijzingen bijgewerkt |
| `BCLOSE` |  | Sluit de blokeditor: sla het blok op of verwerp de wijzigingen |
| `BCONVERT` |  | BCONVERT zoekt geometrie die zich herhaalt en zet die om in blokverwijzingen. Selecteer de objecten die zich herhalen: elke andere set objecten in de open ruimte die dezelfde geometrie heeft, verplaatst en onder elke hoek gedraaid, wordt gevonden, en met Gespiegeld of Geschaald aan ook spiegelbeelden en kopieën op een ander formaat. Geef het nieuwe blok een naam en een basispunt; de selectie en elke kopie worden verwijzingen ernaar, elk met de eigen rotatie en schaal. Of kies Blok en noem een bestaand blok om losse kopieën van zijn objecten te vinden. Een kopie moet dezelfde laag, kleur, lijntype en lijndikte hebben, tenzij Eigenschappen op Negeren staat. Objecten op vergrendelde lagen blijven ongemoeid. Eén stap ongedaan maken. |
| `BEDIT` | `BE` | Blokeditor: bewerk de objecten en attributen van een blok; BCLOSE slaat op (BE) |
| `BLEND` |  | BLEND: een spline tussen de uiteinden van twee open krommen, nabij de uiteinden aangewezen om samen te voegen. CONtinuity: Raaklijn volgt beide richtingen, Glad volgt ook hoe ze buigen. |
| `BLOCK` | `B`, `BMAKE` | Maak een blok van objecten (ze worden één verwijzing) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: elke verwijzing naar het ene blok wordt een verwijzing naar een ander, op dezelfde plaats met dezelfde schaal en rotatie. Waarden van attributen die beide blokken hebben, blijven behouden. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE toont het paneel Blokken met de cursor in het filterveld. Het paneel toont een afbeelding van elk blok (de laatst geplaatste eerst), als lijst of raster; klik op een afbeelding of sleep die naar de tekening om het blok te plaatsen met INSERT. Voeg onder Bibliotheken een eigen DWG- of DXF-bestand toe: de blokken daarin worden met afbeeldingen getoond en worden naar deze tekening gekopieerd wanneer u er een plaatst. In CadCraft Studio kan ook een map met tekeningen worden toegevoegd, en bestanden en mappen worden onthouden. |
| `BOMEDIT` | `BOMCOLUMNS` | De kolommen, groepering, sortering, titel, totalen en opmerkingen van een materiaalstaattabel |
| `BOMEXPORT` |  | Sla een materiaalstaattabel op als .csv-bestand |
| `BOMTABLE` | `BOM` | Een live materiaalstaattabel van één zone, of van de hele tekening |
| `BOMUPDATE` |  | Werk nu elke materiaalstaattabel bij, ook de bevroren |
| `BOMZONE` | `BZONE` | Een benoemd gebied van de tekening voor een materiaalstaat: twee hoeken, een veelhoek, of de omtrek van een gesloten object |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): kies een punt binnen een gesloten gebied en krijg er een gesloten polylijn omheen. Bogen blijven bogen. Eilanden omlijnt ook de gebieden die erin liggen. |
| `BOX` |  | Een doos: twee hoeken en een hoogte (3D) |
| `BPARAMETER` | `BPARAM` | Nog niet beschikbaar: een parameter (zoals Zichtbaarheid) aan een blok toevoegen. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blokparameters: benoemde parameters met formules, en meerdere zichtbaarheidsparameters in één blok. Werkt in de blokeditor (wijs de geselecteerde objecten een status toe) en op een geselecteerde verwijzing (eigen waarden en statussen). |
| `BREAK` | `BR` | Breek een lijn, boog, cirkel of polylijn tussen twee punten (BR) |
| `BREAKATPOINT` |  | Splits een lijn, boog of polylijn in twee op een punt |
| `BREAKLINE` |  | Teken een lijn met een breeksymbool; de grootte en het uitsteken voorbij de uiteinden worden onthouden. |
| `BREPLACE` |  | BREPLACE wisselt het ene blok voor een ander. Geselecteerd: kies blokverwijzingen en noem het blok om in plaats daarvan te gebruiken. Alle: noem een blok en zijn vervanging, en elke verwijzing in elke ruimte en binnen andere blokken verandert. Een verwijzing houdt zijn plaats, schaal, rotatie en laag, en de waarden van attributen die beide blokken hebben; waarden waarvoor het nieuwe blok geen plek heeft, vervallen en worden genoemd. |
| `BSEARCH` |  | BSEARCH zoekt blokken. Naam: een deel van een bloknaam, of een patroon met * en ?. Attribuut: een waarde (of TAG=waarde) in de attributen van een verwijzing. Geometrie: selecteer objecten of één blokverwijzing, en de blokken waarvan de vorm minstens 85% overeenkomt, worden getoond, beste eerst; grootte, rotatie en spiegeling tellen niet mee. De gevonden verwijzingen in de open ruimte worden geselecteerd, klaar voor de volgende opdracht. |
| `BURST` |  | Ontbind blokverwijzingen en behoud wat hun attributen zeggen: elke waarde wordt tekst op de laag van het attribuut. |
| `BVHIDE` | `BVH` | In de blokeditor: verberg objecten in de huidige zichtbaarheidsstatus. |
| `BVSHOW` | `BVSH` | In de blokeditor: toon objecten die de huidige zichtbaarheidsstatus verbergt (ze verschijnen vervaagd om aan te wijzen). |
| `BVSTATE` | `BVS` | In de blokeditor, bij een blok met zichtbaarheidsstatussen: schakel naar een status, of voeg er een toe, hernoem of verwijder er een. |
| `CAL` |  | Bereken een lengte of getal: + − * / en haakjes, zoals u ze overal typt |
| `CENTERLINE` | `CL` | Middellijn tussen twee lijnen: halverwege ertussen, of langs de bissectrice wanneer ze elkaar raken (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Middelpuntmarkering: een kruis in het middelpunt van een cirkel of boog, met middellijnen tot net voorbij die (CM) |
| `CHAMFER` | `CHA` | Schuin de hoek tussen twee lijnen af (D twee afstanden, A lengte en hoek, P elke hoek van een polylijn) |
| `CHSPACE` |  | CHSPACE: verplaats objecten tussen een blad en het model via een viewport. Ze worden geschaald en gedraaid zodat ze er vanaf de andere kant hetzelfde uitzien. Op een blad gaan ze naar het model; terwijl u via een viewport werkt (MSPACE) komen ze naar het blad. |
| `CIRCLE` | `C` | Middelpunt en straal, diameter, 2 of 3 punten |
| `CLASS` |  | Zet de geselecteerde objecten in een klasse, of stel zonder selectie de actieve klasse in (? toont ze) |
| `CLASSES` | `CLS` | Het paneel Klassen: klassen sorteren objecten over lagen heen; toon, verberg en stijl ze, en overschrijf ze per viewport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Zet de opdrachtregel vast of maak hem zwevend, maak hem één regel, stel het aantal geschiedenisregels in, of open de geschiedenis (F2) |
| `COMPARESETTINGS` | `CMPSET` | Vergelijk maatvoeringsstijlen, tekststijlen, lagen, bladen of eenheden: twee in deze tekening, of deze tekening met een andere geopende, en kopieer een waarde over. |
| `CONSTRAINTBAR` | `CBAR` | Toon of verberg de beperkingsbalken (Alles tonen / Alles verbergen, of per object) |
| `COPY` | `CO`, `CP` | Kopieer objecten, zo vaak als u klikt |
| `COPYBASE` |  | Kopieer objecten naar het klembord met een basispunt dat u aanwijst |
| `COPYCLIP` |  | Kopieer objecten naar het klembord (Ctrl+C); PASTECLIP plaatst ze |
| `COUNT` | `BCOUNT` | Tel blokverwijzingen: kies er één om elke verwijzing van zijn blok te selecteren en te tellen |
| `COUNTTABLE` |  | Plaats een tabel met blokaantallen |
| `CREDITS` |  | Zet de bibliotheekvermeldingen als tabel in de tekening. Voer het opnieuw uit om de tabel bij te werken met de objecten die nu in de tekening staan. |
| `CURSORSIZE` |  | De grootte van het kruis: 100 loopt van rand tot rand over de tekening (Instellingen › Cursor › Volledig scherm) |
| `CUTCLIP` |  | Knip objecten naar het klembord (Ctrl+X): kopiëren, daarna wissen |
| `CYLINDER` | `CYL` | Een cilinder: middelpunt, straal en hoogte (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Toon blokken, hun attributen en objecteigenschappen als tabel in de tekening of in een CSV-bestand |
| `DATALINK` | `DL` | Een tabel uit een CSV-bestand die het bestand onthoudt, zodat het opnieuw gelezen kan worden |
| `DATALINKUPDATE` | `DLU` | Lees het bestand van een gegevenskoppeling opnieuw in en vul de tabellen weer |
| `DCALIGNED` | `DCALI` | Maatbeperking: werkelijke afstand tussen punten, een punt en een lijn, of twee lijnen |
| `DCANGULAR` | `DCANG` | Maatbeperking: hoek tussen twee lijnen, of van een boog |
| `DCCONVERT` |  | Zet maatvoering op beperkbare geometrie om in maatbeperkingen |
| `DCDIAMETER` | `DCDIA` | Maatbeperking: diameter van een cirkel of boog |
| `DCDISPLAY` |  | Toon of verberg de maatbeperkingen in de tekening |
| `DCHORIZONTAL` | `DCHOR` | Maatbeperking: horizontale afstand |
| `DCLINEAR` | `DCLIN` | Maatbeperking: horizontale of verticale afstand, vanaf waar u hem plaatst |
| `DCRADIUS` | `DCRAD` | Maatbeperking: straal van een cirkel of boog |
| `DCVERTICAL` | `DCVER` | Maatbeperking: verticale afstand |
| `DELBLOCKS` |  | Verwijder blokken: elke verwijzing (ook geneste, op elk blad) en de definities |
| `DELCONSTRAINT` | `DELCON` | Verwijder elke beperking (geometrisch en dimensioneel) van de objecten die u selecteert |
| `DELOPENING` |  | Haal een deur of raam uit een wand. |
| `DESCRIBE` | `DESC` | Zeg wat de tekening bevat: hoeveel objecten, van welke soort, hoe groot, wat geselecteerd is. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Wis de selectie (Esc) |
| `DETAILS` | `DET` | De eigen details van uw bureau, gevonden voor wat u tekent: zoeken, een blok toevoegen, lijst, verwijderen, de aanbiedingen aan of uit zetten. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Teken een diagram uit tekst: een Mermaid-stroomdiagram, een PlantUML-componentdiagram, D2, een van-naar-lijst of draw.io XML, als blokken en verbindingen die u kunt bewerken |
| `DIMALIGNED` | `DAL`, `DIMALI` | Werkelijke afstand tussen twee punten |
| `DIMANGULAR` | `DAN`, `DIMANG` | Hoek tussen twee lijnen, van een boog, of via drie punten |
| `DIMARC` | `DAR` | Maatvoering voor de booglengte: de afstand langs een boog, met het boogsymbool (DAR) |
| `DIMASZ` |  | Maatvoeringsinstelling: pijlgrootte |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Maatvoering op elkaar gestapeld vanaf één basislijn |
| `DIMBREAK` | `DBREAK` | Breek maat- en hulplijnen waar ze andere objecten kruisen (Auto), tussen twee punten (Handmatig), of verwijder de onderbrekingen |
| `DIMCONSTRAINT` | `DCON` | Dimensionele beperkingen: lineair, uitgelijnd, hoek, straal, diameter, omzetten |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Een keten van maatvoeringen, elk vanaf het einde van de vorige |
| `DIMDEC` |  | Maatvoeringsinstelling: decimalen |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter van een boog of cirkel |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Maak maten los van de objecten waaraan ze vastzitten (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Wijzig de maatvoeringstekst (Start, Nieuwe tekst, Draaien) of schuin de hulplijnen (Schuin) |
| `DIMEXE` |  | Maatvoeringsinstelling: verlenging voorbij de maatlijn |
| `DIMEXO` |  | Maatvoeringsinstelling: verschuiving vanaf het beginpunt |
| `DIMGAP` |  | Maatvoeringsinstelling: ruimte rond de tekst |
| `DIMINSPECT` |  | Controlemaat: een kader rond de waarde met een label en hoe vaak het onderdeel wordt gecontroleerd |
| `DIMJOGGED` | `DJO`, `JOG` | Geknikte stralingsmaat: een straal getekend vanaf een dichterbij gelegen punt wanneer het middelpunt ver weg is (DJO) |
| `DIMJOGLINE` | `DJL` | Voeg een kniksymbool toe aan een lineaire of uitgelijnde maatlijn, om te tonen dat de afstand niet op schaal is getekend (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontale of verticale afstand (R voor elke hoek) |
| `DIMLUNIT` |  | Maatvoeringsinstelling: lengteopmaak (1 wetenschappelijk, 2 decimaal, 3 engineering, 4 architectonisch, 5 breuk) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinaatmaat: de X- of Y-afstand van een punt tot de oorsprong van het UCS, op een leider (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Overschrijf maatvoeringsvariabelen op geselecteerde maten zonder hun stijl te wijzigen; Wissen zet de stijl terug (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Straal van een boog of cirkel |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Koppel de punten van een maat aan objecten, zodat ze meebeweegt en opnieuw meet wanneer die verplaatsen (DRE) |
| `DIMSCALE` |  | Maatvoeringsinstelling: totaalschaal (afmetingen × dit) |
| `DIMSPACE` |  | Gelijke afstand tussen evenwijdige maten, gemeten vanaf een basismaat (0 lijnt ze uit, Auto is tweemaal de teksthoogte) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Maak, wijzig, stel als actief in, verwijder, pas toe en vergelijk benoemde maatvoeringsstijlen (het dialoogvenster; -DIMSTYLE in de opdrachtregel) |
| `DIMTEDIT` | `DIMTED` | Verplaats de maatvoeringstekst naar links, rechts of midden op de maatlijn, of draai hem |
| `DIMTEXTUNIT` | `DTU` | Maatvoeringstekst in mm, cm, m of km, of in de eigen eenheden van de tekening: de geselecteerde maten, anders nieuwe (DTU) |
| `DIMTXT` |  | Maatvoeringsinstelling: teksthoogte |
| `DIST` | `DI` | Afstand en hoek tussen twee punten |
| `DISTRIBUTE` |  | Verdeel de geselecteerde objecten gelijkmatig, van zij tot zij of omhoog en omlaag: gelijke stappen tussen middelpunten, of gelijke tussenruimtes; de buitenste twee blijven staan |
| `DIVIDE` | `DIV` | DIVIDE (DIV): markeringen die een lijn, boog, cirkel, polylijn, spline of ellips in gelijke delen verdelen. Punten, of met Blok een blok bij elke markering. |
| `DOCUMENTS` | `DOCS` | Open het paneel Documenten: tekeningen uitchecken en inchecken, revisies, vrijgavestatussen en goedkeuring voor een projectmap |
| `DOOR` | `DR` | Plaats een deur in een wand. De kant waarop u klikt, is de kant waarnaar hij opent. |
| `DRAWORDER` |  | Wijzig de tekenvolgorde: breng objecten naar voren, stuur ze naar achteren, of plaats ze boven of onder andere objecten. |
| `DUPLICATE` | `DUP` | Een kopie die met de aanwijzer meebeweegt: klik om hem neer te zetten (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | De eigenschappen van de tekening: titel, auteur en de rest, en uw eigen namen en waarden |
| `DXFOUT` |  | Download de tekening als DXF R12 (Opslaan behoudt het eigen formaat) |
| `EATTEDIT` | `DDATTE` | Bewerk de attributen van een blokverwijzing: waarden, tekst en eigenschappen, één attribuut per keer |
| `ELLIPSE` | `EL` | Eindpunten van de as en de andere halve as |
| `ERASE` | `E`, `DELETE` | Verwijder objecten |
| `EXPLODE` | `X` | Breek polylijnen, blokken en maten op in hun onderdelen |
| `EXPORT` | `EXP` | Sla een kopie van de tekening op in een bestandstype dat een add-on schrijft |
| `EXPORT3D` | `3DEXPORT` | Exporteer het 3D-model: GLB, OBJ of STL |
| `EXPORTPOINTS` | `EXPPTS` | Schrijf punten, en invoegpunten van blokken met één attribuut als beschrijving, naar een CSV- of TXT-bestand (PNEZD, PENZD of XYZ) voor BIM- en meetprogramma's |
| `EXTEND` | `EX` | Verleng objecten tot ze andere raken: klik nabij een uiteinde, sleep door meerdere, of Shift+klik om bij te snijden |
| `EXTRIM` |  | EXTRIM: kies één snijrand, dan een zijde. Alles wat de rand kruist, wordt aan die zijde bijgesneden. De stukken die zouden verdwijnen, tonen zich terwijl u de aanwijzer beweegt. |
| `EXTRUDE` | `EXT` | Extrudeer gesloten 2D-objecten tot volumes (3D) |
| `FIELD` |  | Plaats een veld in een tekst, een tabelcel of een attribuut: een datum, de bestandsnaam, het bladnummer, een tekeningeigenschap, het oppervlak of de lengte van een object, of een formule |
| `FILLET` | `F` | Rond of vierkant de hoek tussen twee objecten af (R straal, P elke hoek van een polylijn, M meerdere) |
| `FIND` |  | Zoek en vervang woorden in tekst, attribuutwaarden en maatvoeringstekst |
| `FLATTEN` |  | Zet de hoogte (Z) en dikte van de geselecteerde objecten op 0, ook in de blokken die ze gebruiken. |
| `FLOOR` |  | Kies de verdieping om op te tekenen, voeg er één toe, of verplaats of kopieer de selectie ernaartoe. |
| `FLOORLAYERS` |  | Zet verdiepingen om in lagen met de naam Floor-Layer, voor een bestand dat naar iemand zonder verdiepingen gaat. |
| `FLOORS` | `FLR` | Open het paneel Verdiepingen: stapel verdiepingen in één modelruimte. |
| `GCCOINCIDENT` |  | Beperking: twee punten vallen samen, of een punt blijft op een object |
| `GCCOLLINEAR` |  | Beperking: twee lijnen blijven op één lijn |
| `GCCONCENTRIC` |  | Beperking: twee cirkels of bogen delen een middelpunt |
| `GCEQUAL` |  | Beperking: twee lijnen blijven even lang, of twee cirkels/bogen dezelfde straal |
| `GCFIX` |  | Beperking: een punt of een heel object blijft waar het is |
| `GCHORIZONTAL` |  | Beperking: een lijn (of twee punten) blijft horizontaal |
| `GCPARALLEL` |  | Beperking: twee lijnen blijven evenwijdig |
| `GCPERPENDICULAR` |  | Beperking: twee lijnen blijven loodrecht op elkaar |
| `GCSYMMETRIC` |  | Beperking: twee punten, lijnen of cirkels spiegelen elkaar over een lijn |
| `GCTANGENT` |  | Beperking: een lijn en een cirkel of boog (of twee ervan) blijven raken |
| `GCVERTICAL` |  | Beperking: een lijn (of twee punten) blijft verticaal |
| `GDSIN` | `GDS` | Bekijk een IC-layout (een GDSII-streambestand): elke laag en datatype als tekenlaag, vlak, in gebruikerseenheden; alleen voor bekijken en meten (labproef) |
| `GEOMCONSTRAINT` | `GCON` | Geometrische beperkingen: horizontaal, verticaal, evenwijdig, raaklijn, samenvallend… |
| `GLBOUT` |  | Exporteer het 3D-model als GLB (glTF) |
| `GRADIENT` | `GD` | Vult een gebied met een verloop van één of twee kleuren |
| `GRIDMOVE` | `GM` | Verplaats een rasterlijn en neem wat eraan hangt mee: wanden rekken uit, kolommen, bollen en labels bewegen mee, maten volgen. |
| `GROUP` | `G` | GROUP (G): geef de geselecteerde objecten een gedeelde naam. Een klik op een ervan selecteert ze dan allemaal. Enter bij de naam maakt een groep zonder naam. |
| `GROUPEDIT` |  | GROUPEDIT: wijzig een groep. Kies een van zijn objecten of geef zijn Naam, en voeg daarna objecten toe of verwijder ze, HERnoem hem, wijzig de beschrijving, of zeg of een klik hem geheel selecteert. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Vul een gebied met een effen vulling of een patroon: klik erin, of selecteer gesloten objecten (H) |
| `HATCHEDIT` | `HE` | Wijzig een arcering: patroon, schaal, hoek, oorsprong, en de koppeling aan een begrenzing. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Maakt de begrenzingspolylijnen opnieuw uit een arcering, wel of niet eraan gekoppeld |
| `HATCHTOBACK` |  | Stuur elke arcering achter al het andere. |
| `HELP` | `?` | Deze lijst |
| `HIDEOBJECTS` |  | Verberg de geselecteerde objecten tot UNISOLATEOBJECTS. Niet opgeslagen met de tekening. |
| `HISTORY` | `HIST` | HISTORY (HIST): de versies van deze tekening — kopieën die op deze computer worden bewaard wanneer Studio opslaat, en de versies in de cloud — om te openen, te herstellen, en te vergelijken met wat is veranderd, in kleur getoond. |
| `ID` |  | Coördinaten van een punt |
| `IMAGE` | `IM` | Geef CadCraft de afbeeldingsbestanden die een tekening gebruikt (een DWG slaat alleen op waar ze stonden). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Plaats een afbeelding (PNG of JPEG) uit een bestand. |
| `IMAGECLIP` | `ICL` | Knip een afbeelding bij tot een rechthoek of veelhoek, of verwijder het bijknippen. |
| `IMPORT` | `IMP` | Importeer een bestand van een soort die een add-on leest, in deze tekening |
| `INSERT` | `I`, `DDINSERT` | Plaats een blok (S schaal, R roteren); F uit een DWG/DXF-bestand, L uit de bibliotheek |
| `INTERSECT` | `IN` | Behoud alleen wat volumes gemeen hebben (3D), of het gebied dat 2D-regio's delen |
| `ISODRAFT` |  | ISODRAFT: isometrisch tekenen aan of uit, of recht op het Links-, Boven- of Rechtervlak. Terwijl het aan staat, volgen Ortho en polaire tracering de twee assen van het vlak, is het raster isometrisch, en heeft ELLIPSE Isocirkel. |
| `ISOLATEOBJECTS` | `ISOLATE` | Toon alleen de geselecteerde objecten; al het andere in deze ruimte is verborgen tot UNISOLATEOBJECTS. Niet opgeslagen met de tekening. |
| `ISOPLANE` |  | ISOPLANE: kies het isometrische vlak om op te tekenen: Links, Boven of Rechts. Enter gaat naar het volgende, zoals F5 doet terwijl isometrisch tekenen aan staat. |
| `JOIN` | `J` | Voeg lijnen, bogen en polylijnen die uiteinde aan uiteinde samenkomen samen tot één polylijn; lijnen op één lijn tot één lijn (J) |
| `LASER` | `LASERCUT` | Open het paneel Laser: stuur lagen naar een lasersnijder of graveermachine (GRBL G-code) |
| `LASSOMODE` |  | Indrukken en slepen tekent een lasso (1) of een rechthoek (0) |
| `LAYDEL` |  | Verwijder een laag en elk object erop (in het model, op bladen en in blokken) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Open de Lagenbeheer: elke laag in één tabel |
| `LAYERPANEL` |  | Toon het paneel Lagen |
| `LAYFRZ` |  | Bevries de laag van elk object dat u aanwijst |
| `LAYGROUP` | `LG` | Groepeer lagen in mappen in het paneel Lagen. |
| `LAYISO` |  | Isoleer de lagen van de geselecteerde objecten (elke andere laag uit) |
| `LAYLOCKFADE` |  | Stel in hoeveel objecten op vergrendelde lagen vervagen, en of een klik ze kan selecteren. |
| `LAYMCUR` |  | Maak de laag van het object dat u aanwijst de actieve laag |
| `LAYMRG` |  | Voeg lagen samen: hun objecten gaan naar een doellaag, en de samengevoegde lagen verdwijnen |
| `LAYOFF` |  | Zet de laag van elk object dat u aanwijst uit |
| `LAYON` |  | Zet elke laag aan |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Een nieuw blad met een titelblok en een viewport |
| `LAYTHW` |  | Ontdooi elke laag |
| `LAYUNISO` |  | Zet de lagen die LAYISO heeft uitgezet weer aan |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Zet tekst die met oude Vietnamese lettertypen is getypt (TCVN3 / ABC-lettertypen zoals .VnTime, en VNI-lettertypen zoals VNI-Times) om naar Unicode. Zulke tekst wordt al getoond zoals ze leest; dit schrijft ze definitief om, met een telling en één stap ongedaan maken. |
| `LENGTHEN` | `LEN` | Verleng of verkort lijnen, bogen en polylijnen: met een hoeveelheid, een percentage, tot een totaal, of door te slepen (LEN) |
| `LIBRARY` | `LIB` | Het paneel Bibliotheek: plaats items, controleer op updates, vermeldingen |
| `LIMITS` |  | Stel de grenzen van de tekening in: AAN, UIT, of de linkerbenedenhoek en rechterbovenhoek. Met de grenzen AAN worden punten erbuiten geweigerd |
| `LINE` | `L` | Rechte segmenten, elk een eigen object |
| `LINETYPE` | `LT`, `CELTYPE` | Het lijntype dat nieuwe objecten krijgen (op laag, op blok, of een benoemd) |
| `LINKVIEWS` | `SYNCVIEWS` | Verschuif en zoom alle vensters samen (gesplitst scherm), om twee tekeningen of revisies te vergelijken |
| `LISPEDIT` | `VLIDE` | LISPEDIT (of VLIDE) opent de LISP-editor: een venster om een routine te schrijven, te laden en uit te proberen. Laden in de tekening leest elk formulier, zoals het laden van het bestand met APPLOAD doet, en maakt de opdrachten ervan. Selectie uitvoeren evalueert de geselecteerde formulieren, of het formulier waarin de cursor staat. De console toont wat de routine heeft afgedrukt en elke fout met zijn regel. Het bijbehorende haakje wordt gemarkeerd terwijl u typt, en Enter laat de nieuwe regel inspringen. Nieuw, Openen en Opslaan werken op een .lsp-bestand. De lijsten naast de tekst tonen de functies die de routine definieert, de functies die het aanroept die deze LISP nog niet heeft, en alle functies die het heeft. Het venster blokkeert de tekening niet, dus een routine kan om punten vragen; Stop of Esc beëindigt een lopende routine. |
| `LIST` | `LI`, `LS` | Beschrijf objecten in de geschiedenis |
| `LTSCALE` | `LTS` | De lijntypeschaal van de tekening (elke streep en opening wordt ermee vermenigvuldigd) |
| `LWDISPLAY` | `LWT` | Toon of verberg lijndiktes op het scherm (de knop LWT in de statusbalk) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | De lijndikte die nieuwe objecten krijgen (op laag, op blok, standaard, of mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kaartlagen onder de modelruimte: het coördinatenstelsel van de tekening, tegels, WMS, WMTS, ArcGIS, afbeeldingen |
| `MASSPROP` |  | MASSPROP: doorsnede-eigenschappen van regio's en gesloten objecten: oppervlakte, omtrek, zwaartepunt, momenten en traagheidsproduct, traagheidsstralen en de hoofdassen. Exact voor lijnen en bogen. Kan het rapport naar een tekstbestand schrijven. |
| `MATCHPROP` | `MA`, `PAINTER` | Eigenschappen overnemen: kopieer de laag, kleur en meer van het ene object naar andere (MA) |
| `MEASURE` | `ME` | MEASURE (ME): een markering elke opgegeven lengte langs een lijn, boog, cirkel, polylijn, spline of ellips, vanaf het uiteinde dat het dichtst bij uw aanwijzing ligt. Punten, of met Blok een blok bij elke markering. |
| `MEASUREGEOM` | `MEA` | Meet een afstand, een straal, een hoek of een oppervlak (MEA) |
| `MINSERT` |  | MINSERT: plaats een blok in één keer in rijen en kolommen. Elk is een eigen verwijzing, zodat u elk ervan kunt verplaatsen of wissen. |
| `MIRROR` | `MI` | Spiegel objecten over een lijn |
| `MLEADER` | `MLD`, `MLEAD` | Multileider: een pijl, een leider en een notitie, als één object (MLD) |
| `MLEADERALIGN` | `MLA` | Lijn multileiders uit met een ervan, langs een richting, op gelijke afstand, of verdeeld tussen twee punten (MLA) |
| `MLEADERCOLLECT` | `MLC` | Verzamel meerdere multileiders in één: hun blokken in een rij of kolom, of hun notities de een onder de ander (MLC) |
| `MLEADEREDIT` | `MLE` | Voeg leiderlijnen toe aan een multileider of verwijder ze; wissel de inhoud tussen tekst en een blok (MLE) |
| `MLINE` |  | Teken evenwijdige lijnen tegelijk, aan de hoeken samengevoegd. |
| `MOVE` | `M` | Verplaats objecten met een basispunt en een tweede punt |
| `MSPACE` | `MS` | Werk aan het model via een viewport van het open blad (of dubbelklik binnen de viewport). |
| `MTEXT` | `MT`, `T` | Alineatekst: sleep de breedte en typ dan op de plaats; Enter start een nieuwe alinea (T) |
| `MVIEW` | `MV` | Een viewport op het model, op een indeling |
| `NAMEDVIEW` | `NV`, `VIEWS` | Benoemde weergaven: sla de weergave op het scherm (of een venster) op onder een naam en keer ernaar terug (NV) |
| `NCOPY` |  | Kopieer objecten uit een blokverwijzing of een gekoppelde tekening naar de tekening, zonder hem te ontbinden. |
| `NEARBY` |  | Zeg wat dicht bij de cursor ligt, dichtstbijzijnde eerst, met de afstand en de kant. |
| `NEW` |  | Begin een nieuwe tekening |
| `OBJECTSCALE` | `OBJSCALE` | Annotatieschalen van annotatieve tekst en maatvoering: voeg een schaal toe, verwijder een, voeg de huidige schaal toe, of toon ze (elke viewport toont ze op de grootte voor de eigen schaal) |
| `OBJOUT` |  | Exporteer het 3D-model als OBJ |
| `OFFSET` | `O` | Evenwijdige kopieën op een afstand |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hoe OFFSET de openingen op de buitenhoeken van een polylijn sluit. 0 verlengt de segmenten, 1 voegt een boog toe, 2 voegt een rechte snede toe. Blijft voor deze sessie behouden. |
| `OLELIST` | `OLES` | Toon de OLE-objecten die een tekening bevat en zet een kopie van de afbeelding van één waar u wilt |
| `OPEN` |  | Open een DWG of DXF van deze computer |
| `OPENIN3D` |  | Open deze tekening in de 3D-modelleertoepassing, in een nieuw tabblad (er wordt niets geüpload) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Open het menu objectsnap: kies welke snaps aan staan. Ook een rechtermuisklik op Snap in de statusbalk. |
| `OVERKILL` |  | Verwijder dubbele objecten en voeg overlappende of uiteinde-aan-uiteinde lijnen en bogen samen, binnen een tolerantie. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Het paneel Parameters: gebruikersparameters en maatbeperkingen in één tabel |
| `PARTSLIST` | `PLIST` | Een onderdelenlijsttabel van elk standaardonderdeel en elke staalsectie die uit de bibliotheek is geplaatst |
| `PASTEAREA` | `PAREA` | Plak een gebied dat in MarkupCraft is gekopieerd (Gebied kopiëren) op zijn ware grootte, als afbeelding. |
| `PASTEBLOCK` |  | PASTEBLOCK: plak wat u kopieerde als één blok. Het blok krijgt een eigen naam; HERNOEM geeft het de uwe. |
| `PASTECLIP` |  | Plak het klembord: het volgt de cursor, klik waar het moet komen (Ctrl+V) |
| `PASTEORIG` |  | Plak het klembord op de coördinaten waar het vandaan is gekopieerd (Ctrl+Shift+V) |
| `PDF` |  | Geef CadCraft de PDF-bestanden die de onderleggers van de tekening gebruiken |
| `PDFADJUST` |  | Laat een PDF-onderlegger vervagen, contrast, monochroom maken of uitzetten |
| `PDFATTACH` | `PDFATT` | Voeg een PDF-pagina toe als onderlegger (PDFATTACH) |
| `PDFCLIP` |  | Knip een PDF-onderlegger bij tot een rechthoek of veelhoek |
| `PDFIMPORT` | `PDFIM` | Maak van de lijnen, vlakken en tekst van een PDF-pagina tekenobjecten (PDFIMPORT) |
| `PDFLAYERS` |  | Zet de lagen van een PDF-onderlegger aan of uit |
| `PEDIT` | `PE` | Bewerk een polylijn: sluiten, openen, samenvoegen, breedte, curve passen, spline-curve, rechttrekken, lijntypegeneratie, omkeren; lijnen, bogen en splines kunnen in polylijnen worden omgezet |
| `PHOTOSKETCH` | `PSK` | Zet een foto van een handschets op papier om in lijnen en bogen op schaal, rechtzet het perspectief en geeft elke pennenkleur een eigen laag. |
| `PICKSTYLE` |  | PICKSTYLE: of het selecteren van één object uit een groep de hele groep selecteert (1, de startinstelling) of alleen dat object (0). Blijft voor deze sessie behouden. |
| `PLAN` |  | Draai de weergave zodat de X-as van het UCS (Huidig ucs, een opgeslagen Ucs, of de Wereld) vlak op het scherm staat. Niets in de tekening verschuift. |
| `PLINE` | `PL` | Een polylijn van lijn- en boogsegmenten |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plot naar PDF: een indeling, of het model op een schaal |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plotstijltabellen: bepaal wat elke kleur afdrukt als (kleur, zwart, grijs, inkt, lijndikte); blijft bij de tekening bewaard (STYLESMANAGER) |
| `POINT` | `PO` | Puntobjecten |
| `POINTCLOUD` | `PC` | De gekoppelde puntenwolk: doorsnede, hoogte, dikte, kleur, grootte, zichtbaar, zoom, loskoppelen |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Koppel een puntenwolk (LAS, LAZ, XYZ, PTS) onder de tekening |
| `POLARANG` |  | De stap van de polaire tracering in graden (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Een regelmatige veelhoek |
| `PRESSPULL` |  | Duw of trek een vlak van een volume (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Open het paneel Eigenschappen (ook Ctrl+1, of dubbelklik een object) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Klap het paneel Eigenschappen naar de rand van het venster |
| `PSPACE` | `PS` | Verlaat de viewport waarin u werkt en keer terug naar het blad (of dubbelklik erbuiten). |
| `PUBLISH` | `-PUBLISH` | Plot meerdere of alle bladen in één PDF (een pagina en een bladwijzer per blad) |
| `PURGE` | `PU` | Verwijder blokdefinities die niets gebruikt |
| `QDIM` |  | Snelle maatvoering: maat meerdere objecten tegelijk (doorlopend, basislijn, getrapt, ordinaat, straal of diameter) |
| `QPMODE` | `QP` | Snelle eigenschappen bij de cursor aan of uit |
| `QSELECT` | `QS` | Snelselectie: elk object van een type waarvan de laag, kleur, grootte of naam overeenkomt (QS) |
| `RASTERSNAP` |  | Snappen op de lijnen van gescande bladen aan of uit zetten. |
| `RAY` |  | Straal: een hulplijn vanaf een punt, aan één kant onbeperkt. |
| `RECOVER` |  | Opent een beschadigd DXF- of DWG-bestand: slaat over wat niet gelezen kan worden in plaats van het bestand te weigeren, meldt wat is overgeslagen, en controleert en herstelt de tekening zoals AUDIT doet. |
| `RECTANG` | `REC`, `RECTANGLE` | Een gesloten polylijn uit twee hoeken |
| `REDLINE` | `RDL` | Redline naar revisie: lees een MarkupCraft-redlinepakket, accepteer of verwerp elke wijziging, wolk de geaccepteerde met een revisielogboek, en sla het antwoordbestand op (RDL) |
| `REDO` |  | Herhaal wat ongedaan is gemaakt |
| `REFCLOSE` |  | Beëindig het bewerken van een blok op zijn plaats: sla het op, of verwerp de wijzigingen |
| `REFEDIT` |  | Bewerk een blok op zijn plaats, waar een verwijzing ervan staat, met de rest van de tekening vervaagd; REFCLOSE slaat het op |
| `REGEN` | `RE` | Bouw opnieuw op wat in dit tabblad wordt getekend, uit de tekening |
| `REGENALL` | `REA` | Bouw opnieuw op wat in elk tabblad, venster en elke geopende tekening wordt getekend |
| `REGION` | `REG` | REGION (REG): maak vlakke regio's van gesloten objecten, of van lijnen, bogen en polylijnen die een lus uiteinde aan uiteinde sluiten. UNION, SUBTRACT en INTERSECT combineren dan regio's, en MASSPROP geeft hun doorsnede-eigenschappen. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registreer meerdere scans: plaats ze in één kader met aangewezen puntparen of doelen, verfijn met ICP, exporteer één LAS of E57 |
| `REINIT` |  | Laad uw aliasbestand opnieuw |
| `RENAME` | `-RENAME`, `REN` | Hernoem een laag of blok (elk object of elke verwijzing volgt) |
| `REVCLOUD` | `RC` | Revisiewolk: rond een rechthoek, veelhoek, vrij pad of object af (RC) |
| `REVOLVE` | `REV` | Draai gesloten 2D-objecten om een as tot volumes (3D) |
| `ROTATE` | `RO` | Draai objecten om een basispunt |
| `SAMPLES` | `SAMPLE` | Open een van de voorbeeldtekeningen van CadCraft (een architectonische set, een as-built) om van te leren |
| `SAVE` | `QSAVE` | Download de tekening in haar formaat (DWG of DXF) |
| `SAVEAS` |  | Download de tekening als DWG of DXF: kies welke |
| `SAYSEL` |  | Zeg wat is geselecteerd, elke zin één. |
| `SCALE` | `SC` | Schaal objecten om een basispunt |
| `SCALELISTEDIT` | `SCALELIST` | Voeg schalen van de tekening toe, bewerk en verwijder ze; ze verschijnen in de lijsten met viewport- en plotschalen en worden in het bestand opgeslagen (SCALELIST) |
| `SCANALIGN` | `SCL` | Lijn een gescand blad uit op twee punten: verplaats, draai en, indien gekozen, schaal het. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Voeg een gescande tekening in: een PNG, JPEG of TIFF (één pagina of alle pagina's van een meerpaginabestand) of een PDF-pagina die een afbeelding is. |
| `SCANCLEAN` | `SCC` | Maak een gescand blad zwart-wit en verwijder vlekjes. |
| `SCANCROP` | `SCR` | Snij een gescand blad bij tot een venster. |
| `SCANDESKEW` | `SCD` | Zoek de hoek waaronder de lange lijnen van een gescand blad liggen en draai het blad recht zodra u de hoek accepteert. |
| `SCANERASE` | `SCE` | Wis een gebied van een gescand blad: een rechthoek, een veelhoek of een lasso. |
| `SCANINFO` | `SCI` | Toon het oorspronkelijke bestand van een gescand blad en de stappen die sindsdien zijn gezet. |
| `SCANSCALE` | `SCS` | Schaal een gescand blad: kies twee punten erop en typ de werkelijke afstand ertussen. |
| `SCANTRACE` | `SCT` | Trek een gescand blad over in lijnen en bogen op een nieuwe laag, binnen een tolerantie die u instelt. Tekst en arceringen blijven als raster. |
| `SELECT` |  | Selecteer objecten nu (voor P, Vorige, in de volgende opdracht) |
| `SELECTALL` | `AI_SELALL` | Selecteer elk object dat u op dit tabblad kunt bewerken (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Selecteer elk object zoals de objecten die u aanwijst: zelfde type, laag en kleur (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Toont het paneel Bladenset: bladen uit veel tekeningen, genummerd, als één PDF gepubliceerd. |
| `SHORTCUTS` | `KEYS` | Geef elke opdracht een eigen sneltoets (Ctrl of Alt met een letter, of een vrije functietoets), bewaard in deze browser of desktop-app. |
| `SHXFONTS` | `SHX` | Geef CadCraft SHX-lettertypen uit een map of bestanden, zodat tekststijlen die ze noemen ermee tekenen (tonen, verwijderen, omkeren) |
| `SKETCHFIX` | `SKF` | Teken vrije streken; elke wordt een strakke lijn, cirkel, boog, rechthoek of polylijn, rechtgetrokken en aan de andere verbonden. |
| `SKETCHLIVE` | `SKL` | Schets met een pen: elke streek wordt een precieze lijn, cirkel, boog of rechthoek zodra u de pen optilt, aan de tekening gesnapt, met de grootte om over te typen. |
| `SPLINE` | `SPL` | Teken een spline door punten (of met een besturingspolygoon), of zet een polylijn om in een spline |
| `SPLINEDIT` | `SPE` | Bewerk een spline: pas punten, besturingspunten en gewichten aan, open of sluit hem, keer hem om, of zet hem om in een polylijn |
| `SPLIT` |  | Splits het tekengebied in vensters (als VPORTS op het model; ook vanaf een blad) |
| `STEELMEMBER` | `SMEMBER` | Een staalprofiel in 3D uit een standaardsectie: twee punten (een balk) of een basispunt en een hoogte (Kolom) |
| `STLOUT` |  | Exporteer het 3D-model als STL (millimeters) |
| `STRETCH` | `S` | Uitrekken: sleep een kruisvenster over de uiteinden om te verplaatsen; wat erin ligt beweegt, de rest blijft staan (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Tekststijlen: het lettertype, hoogte, breedte en schuinstand die nieuwe tekst krijgt (het dialoogvenster; -STYLE in de opdrachtregel) |
| `SUBTRACT` | `SU` | Haal volumes van andere af (3D), of 2D-regio's van regio's |
| `SWBOUT` | `SWMACRO` | Download een macro voor SolidWorks (.swb) die het model opnieuw opbouwt als één beperkte schets |
| `SWEEP` |  | Veeg gesloten 2D-objecten langs een pad (lijn, polylijn, boog, cirkel) tot volumes (3D) |
| `TABLE` | `TB` | Maak een tabel: rijen en kolommen, of uit spreadsheetcellen op het klembord of een CSV-bestand |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Bewerk een tabel: typ in een cel, voeg rijen en kolommen in en verwijder ze, afmetingen, samengevoegde cellen, uitlijning |
| `TABLEEXPORT` |  | Sla op wat een tabel toont als CSV-bestand |
| `TABLEPASTE` | `PASTETABLE` | Maak een tabel van spreadsheetcellen op het klembord |
| `TABLESTYLE` | `TS` | Tabelstijlen: teksthoogten, uitlijning, marge en randen voor titel-, kop- en gegevensrijen |
| `TAGS` |  | Labels op blokverwijzingen: definieer een label (soort, toegestane waarden, blokken waarop het van toepassing is), stel het in op de geselecteerde verwijzingen, en toon ze als een staat die u als CSV kunt opslaan |
| `TEXT` | `DT`, `DTEXT` | Tekst op één regel; Enter start de volgende regel |
| `TEXTEDIT` | `ED`, `DDEDIT` | Bewerk tekst op de plaats: kies een tekst (of dubbelklik er een) (ED) |
| `TEXTMASK` | `TMASK` | Zet een achtergrondmasker achter teksten (de achtergrond van de tekening of een kleur), of haal het weg. |
| `TEXTTOFRONT` |  | Breng alle tekst, maten en leiders voor alles andere. |
| `TOOLBAR` |  | Kies wat de werkbalkknoppen tonen: pictogrammen en tekst, alleen pictogrammen, of alleen tekst (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Zet de werkbalk boven, onder, links of rechts in het venster |
| `TOOLBARROWS` |  | Kies hoeveel rijen de werkbalk gebruikt: omslaan om te passen, 2, of 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Maak de balken boven de tekening standaard of compact |
| `TOUCHCROSSHAIR` | `TCX` | Verschoven kruis voor tekenen met een vinger: één vinger verplaatst een kruis dat er boven en naast zit, zodat de vinger het aanwijspunt niet bedekt. Het optillen van de vinger kiest niets; de knop Klik of een tik met een tweede vinger kiest bij het kruis, en vasthouden van Klik terwijl u beweegt sleept. Een lange druk of de knop Enter is Enter. Twee vingers verschuiven en zoomen. Opties: ON, OFF, Auto (alleen aan waar een vinger de enige aanwijzer is), Distance, Side. |
| `TOUR` | `TUTORIAL` | Doe de rondleiding van zes stappen voor de eerste tekening opnieuw |
| `TRIM` | `TR` | Snijd objecten bij tot waar andere ze kruisen: klik op een stuk, sleep door meerdere, of Shift+klik om te verlengen |
| `TRIMEXTENDMODE` |  | Hoe TRIM en EXTEND beginnen: 1 Snel (elk object is een snijrand of begrenzing), 0 Standaard (kies eerst de randen) |
| `TTR` |  | Een cirkel die raakt aan twee objecten, met een straal die u opgeeft (hetzelfde als CIRCLE T). |
| `TURNLEFT` |  | Draai de weergave 90° naar links (tegen de klok in): UCS Z -90, en de weergave volgt. Niets in de tekening verschuift. |
| `TURNRIGHT` |  | Draai de weergave 90° naar rechts (met de klok mee): UCS Z 90, en de weergave volgt. Niets in de tekening verschuift. |
| `TURNWORLD` |  | Terug naar de wereld: UCS Wereld, en de weergave staat weer vlak. |
| `TXT2MTXT` | `T2M` | Voeg teksten op één regel samen tot één alineatekst, van boven naar beneden. |
| `UCS` |  | Uw eigen coördinatenstelsel: een oorsprong en een X-as (origin, Z angle, 3point, OBject, Previous, World, NAmed). Getypte punten, ortho, polaire tracering, het raster en nieuwe tekst volgen het; de weergave draait zodat de X-as vlak staat. Niets in de tekening verschuift. |
| `UNDO` | `U` | Maak de laatste opdracht ongedaan |
| `UNGROUP` |  | UNGROUP: haal groepen uit elkaar. Selecteer objecten van de groepen, of geef een Naam. De objecten blijven in de tekening. |
| `UNION` | `UNI` | Voeg volumes samen tot één (3D), of 2D-regio's tot één regio |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Toon elk object dat ISOLATEOBJECTS of HIDEOBJECTS heeft verborgen weer. |
| `UNITS` | `UN`, `DDUNITS` | Hoe lengten worden getoond en ingevoerd: decimaal, voet en inch, breuken (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Bereken de velden opnieuw en kies wanneer ze zichzelf bijwerken |
| `USDOUT` |  | Exporteer het 3D-model als USD (.usda-tekst, .usdc-binair of een .usdz-pakket) |
| `VIEW` | `-VIEW`, `V` | Standaard 3D-weergaven, perspectief of parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Plaats een vlakke 2D-weergave van de 3D-volumes (voor, boven, zij of isometrisch, verborgen lijnen gestippeld) op een blad of in het model |
| `VIEWLABEL` | `VL` | Een weergavetitel op een blad die de weergavenaam van zijn viewport toont, en meeverandert. |
| `VOICE` |  | Gesproken opdrachten aan of uit. Ze worden op deze computer herkend. |
| `VPCLIP` |  | Knip een bladviewport bij tot een gesloten object of een getekende veelhoek; Delete maakt er weer een rechthoek van |
| `VPLAYER` |  | Bevries of ontdooi lagen in sommige viewports alleen (Bevriezen, Ontdooien, Opnieuw instellen), en kies welke lagen nieuwe viewports bevroren beginnen (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Splits het tekengebied in vensters, elk met een eigen weergave (op een blad: een viewport, zoals MVIEW) |
| `VPVIEW` |  | Stel in wat een viewport toont: kies een venster op het model |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visuele stijl van de 3D-weergave: gearceerd, randen, verborgen lijn, draadmodel, röntgen |
| `WALL` | `WA` | Teken 2D-wanden als een polylijn. Ze sluiten aan en dragen deuren en ramen. |
| `WALLARC` | `WARC` | Teken een boog van wanden. Plattegrondwanden zijn recht, dus de boog wordt getekend als korte rechte wanden (elk 15 graden) die aansluiten. |
| `WALLDELSEG` |  | Verwijder een stuk van een wand tussen twee punten. Wat overblijft blijft één of twee wanden. |
| `WALLDIM` |  | Typ een nieuwe waarde voor een maat: de wand aan het verre uiteinde verschuift haaks op zichzelf, de wand aan het eerste uiteinde blijft staan, en de wanden die erbij aansluiten volgen. |
| `WALLDISJOIN` |  | Wijs een wand nabij een uiteinde aan om aansluitingen daar te verbieden: het uiteinde wordt haaks getekend en niets volgt het. Wijs het opnieuw aan om ze toe te staan. |
| `WALLGRID` |  | Vergrendel een wand aan een rasterlijn: erlangs, of een uiteinde erop. Verplaats de lijn met GRIDMOVE en de wand volgt. |
| `WALLHOLD` |  | Uitlijnen en vergrendelen: een wand houdt zijn plaats tegenover een andere wand (op zijn lijn, of op de afstand die hij heeft). Als de ene beweegt, volgt de andere. |
| `WALLHOLDDIM` |  | Vergrendel de afstand tussen twee evenwijdige wanden. Als de ene beweegt, volgt de andere om hem te behouden. |
| `WALLHOLDS` |  | Toon de vergrendelingen op de wanden. |
| `WALLJOINS` |  | Geef elke wand van een oudere tekening zijn id en sla de aansluitingen tussen hen op. Dit gebeurt ook bij de eerste wijziging die u maakt. |
| `WALLJOINSTYLE` |  | Klik op een hoek waar twee wanden uiteinde aan uiteinde samenkomen om te wijzigen hoe die wordt getekend: verstek, stomp, haaks afgesneden. T wisselt welke wand doorloopt. |
| `WALLOFFSET` | `WO` | Verplaats een wand haaks op zichzelf over een afstand (de wanden die erbij aansluiten volgen), of maak een kopie op die afstand. |
| `WALLPICK` |  | Maak wanden op een lijn of polylijn in de tekening, met de lijnen eraan gekoppeld als u Ja zegt. |
| `WALLPOLY` | `WP` | Teken wanden rond een regelmatige veelhoek van 3 tot 64 zijden, zoals POLYGON. |
| `WALLRECT` | `WR` | Teken vier aaneengesloten wanden vanaf twee tegenoverliggende hoeken, zoals RECTANG. |
| `WALLREJOIN` |  | Maak twee delen van een wand weer één wand. De eerste behoudt zijn plaats in de tekening. |
| `WALLROT` |  | Teken vier aaneengesloten wanden als een rechthoek die onder elke hoek is gedraaid: de eerste zijde, dan hoe ver ze uitsteekt. |
| `WALLSPLIT` | `WS` | Splits een wand in twee op een punt of waar een andere wand kruist. De delen blijven aaneengesloten tenzij u een opening of vrije uiteinden vraagt. Deuren en ramen gaan mee met hun deel. |
| `WALLSPLITGAP` |  | Splits een wand met een opening: typ de opening, kies de wand, en dan het punt. De delen houden vrije uiteinden en kunnen weer worden samengevoegd. |
| `WALLSTRETCH` |  | Uitrekken met een venster: wanduiteinden erin bewegen, wanden die er helemaal in liggen bewegen geheel, en wanden die tegen hun zijden aanstoten schuiven mee. |
| `WALLTAN` |  | Zet een wand voort met een boog die er langs de wand vandaan gaat (getekend als korte rechte wanden). |
| `WALLTRACE` |  | Maak wanden rond het kleinste gesloten gebied van lijnen en wanden rond het punt waarop u klikt. |
| `WALLUNHOLD` |  | Haal de vergrendelingen van een wand weg (en de vergrendelingen van andere wanden eraan). |
| `WBLOCK` | `W`, `-WBLOCK` | Schrijf een blok, enkele objecten of de hele tekening naar een nieuw DWG- of DXF-bestand (W) |
| `WEDGE` | `WE` | Een wig: twee hoeken en een hoogte; hij helt weg vanaf de eerste hoek (3D) |
| `WHEREAMI` | `WHERE` | Zeg waar de cursor is. |
| `WHOHAS` |  | Zegt wie een tekening geopend heeft. CadCraft Studio bewaart een klein vergrendelbestand naast elke geopende tekening (Plan.dwg.cclock: wie, sinds wanneer, welke versie) en verwijdert het bij sluiten. Opties: Current (de geopende tekening), File (kies er één), FOlder (elke tekening in een map die ergens open is; dit laat Studio ook vergrendelbestanden in die map bewaren), Path (typ er één), Name (de naam die anderen zien). Een vergrendeling die vijf minuten niet is ververst, heet verouderd. Niet beschikbaar in een browser. |
| `WINDOW` | `WN` | Plaats een raam in een wand. |
| `XATTACH` | `XA` | Koppel een andere DWG of DXF aan deze tekening, alleen-lezen getoond (XREF somt ze op en laadt ze opnieuw) |
| `XCLIP` | `XC` | Knip blokverwijzingen en gekoppelde tekeningen bij tot een rechthoek of veelhoek, of verwijder het bijknippen. |
| `XLINE` | `XL` | Hulplijn, aan beide kanten onbeperkt: door twee punten, horizontaal, verticaal, onder een hoek, de hoek middendoor delend, of verschoven van een lijn. |
| `XREF` | `XR`, `-XREF` | Gekoppelde tekeningen (externe verwijzingen): tonen, koppelen, opnieuw laden, binden, loskoppelen |
| `ZOOM` | `Z` | Alles tonen, of een venster |
