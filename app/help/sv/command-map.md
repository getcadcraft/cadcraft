---
title: Kommandokarta: vad du ska skriva
summary: Alla kommandon CadCraft har, med deras kortnamn, A till Ö, hämtade från programmet självt, och vanor från andra ritprogram som skiljer sig.
keywords: kommandokarta, kommandon, alias, kortnamn, från andra program, kommandolista, vad du skriver, radera, trimma, motsvarighet, skillnader
from: 3bdfd3e6
---

CadCraft använder de kommandonamn och kortnamn som folk känner från andra ritprogram: skriv `L` för en linje, `TR` för att trimma, `E` för att radera. Så det finns ingen översättningstabell att lära sig för de flesta av dem: namnet du känner är samma här. Listan nedan är varje kommando CadCraft har, hämtad från programmet självt. {{key:Enter}} upprepar det senaste, och `HELP` på kommandoraden skriver ut samma lista.

De få som skiljer sig, eller som inte finns ännu:

- **Spara** laddar ner en kopia i webbläsaren ({{cmd:SAVE}}, {{cmd:SAVEAS}}); i CadCraft Studio skriver det till filen. Se [Från annan ritprogramvara](topic:coming-from).
- **PLOT** gör en PDF (även PNG och SVG), med en tabell för plottstilar; det finns ingen hanterare för sidinställningar.
- **DIMSTYLE** och **PEDIT** finns; **PEDIT** har inget alternativ för att redigera hörn (det gör handtagen).
- **TABLE** finns inte ännu; {{cmd:XREF}}, {{cmd:SPLINE}} och {{cmd:WBLOCK}} finns.
- En rutins egna kommandon (AutoLISP `C:NAME`) visas när du har läst in den med {{cmd:APPLOAD}}; de listas inte här.

## Alla kommandon (398)

| Kommando | Kortnamn | Vad det gör |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Kretsa i 3D-vyn med vänster knapp |
| `ACCESS` | `AX` | Slå på eller av ritning utan syn: resultat uppläses via skärmläsaren, en tangentbordsmarkör på ritningen, snappljud och upplästa kommandon. |
| `ALIASEDIT` |  | Redigera kommandoalias i en textfil (det välbekanta L, *LINE-formatet) |
| `ALIGN` | `AL` | Flytta och vrid objekt så att källpunkter hamnar på målpunkter (ett, två eller tre par), och skala dem om du vill |
| `ALIGNPANEL` | `ALP` | Öppna panelen Justera och fördela |
| `ALIGNTO` |  | Rikta in de markerade objektens vänstra, mittre, högra, övre, mellersta eller nedre kanter mot markeringen, det första eller sista valda objektet, eller en punkt |
| `ANNOALLVISIBLE` | `ANNOALL` | Visa annoterande objekt i varje skala, eller bara där vyportens (eller ritningens) skala finns i deras lista |
| `ANNOSCALE` | `CANNOSCALE` | Ange ritningens annoteringsskala: annoterande text och mått ändras i storlek så att de skrivs ut i samma storlek |
| `APPLOAD` | `AP` | Läs in program: LISP-rutiner (.lsp) och deras dialogfiler (.dcl); startsviten (AP) |
| `ARC` | `A` | Båge: 3 punkter, Start/Mitt/Slut, Start/Mitt/Vinkel, Start/Mitt/Längd, Start/Slut/Vinkel, Start/Slut/Riktning, Start/Slut/Radie, Mitt/Start/Slut, Mitt/Start/Vinkel, Mitt/Start/Längd, Fortsätt |
| `AREA` | `AA` | Area och omkrets via punkter eller för ett objekt; Lägg till och Subtrahera håller en löpande summa (AA) |
| `ARRAY` | `AR` | Kopior i rader och kolumner, eller runt en mittpunkt (AR) |
| `ARRAYASSOCIATIVITY` |  | Anger om ARRAY-kommandona gör matriser som går att redigera (1) eller vanliga kopior (0) |
| `ARRAYCLOSE` |  | Avslutar redigeringen av en matris källobjekt |
| `ARRAYEDIT` |  | Ändrar en matris som gjorts med alternativet Associativ: antal, avstånd, källobjekt, ett objekt |
| `ARRAYPATH` |  | Kopior av objekt längs en linje, båge, polylinje eller annan kurva |
| `ARRAYPOLAR` |  | Kopior runt en mittpunkt |
| `ARRAYRECT` |  | Kopior i rader och kolumner |
| `ASBUILT` | `ASB` | ASBUILT läser de som-byggda punkterna som ett team mätt (CSV / TXT, som EXPORTPOINTS skriver) och jämför dem med ritningens punkter: inom eller utanför toleransen, inte mätta, extra. Markerar dem på lagret AS-BUILT och laddar ner en CSV-rapport. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Definiera ett attribut (en tagg som ett block begär ett värde för) att lägga i ett block (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Redigera en blockreferens attributvärden på kommandoraden, ett i taget (Enter behåller ett värde) |
| `ATTSYNC` |  | För in ett blocks referenser i linje med dess attributdefinitioner: nya läggs till med sina standardvärden, borttagna tas bort, positioner och text återställs; värden behålls |
| `AUDIT` |  | Kontrollerar den öppna ritningen för skador: tal som inte är ändliga, objekt utan storlek, saknade lager, block, stilar och linjetyper, block som innehåller sig själva, delade id:n, trasiga mått och skraffering. Listar vad den hittar per typ och frågar innan den åtgärdar; åtgärden är ett ångra-steg. |
| `AUNITS` | `ANGUNITS` | Hur vinklar visas och skrivs: decimalgrader, grader-minuter-sekunder eller bäringar som N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Automatisk komplettering av ritningen på eller av, eller lista vad ritningens mönster föreslår just nu. |
| `AUTOCONSTRAIN` |  | Lägg till sammanfallande, horisontella och vertikala villkor där geometrin redan ligger nära |
| `AUTODIM` | `ADIM` | Måttsätt efter regler: totalmått, kedjor längs sidorna, öppningar, hålldiametrar och rutnätsavstånd, utan att upprepa det som redan är måttsatt. |
| `AUTOSHEET` | `ASH` | Lägger ut blad av sig själv: väljer papper och standardskalor och placerar varje vy med bildtext och ritningshuvud. |
| `BATTMAN` |  | Blockattributhanterare: ordning, taggar, frågor, standardvärden och lägen för ett blocks attribut, sedan uppdateras dess referenser |
| `BCLOSE` |  | Stäng blockredigeraren: spara blocket eller kassera ändringarna |
| `BCONVERT` |  | BCONVERT hittar geometri som upprepas och gör den till blockreferenser. Välj de objekt som upprepas: varje annan uppsättning objekt i det öppna rummet som har samma geometri, flyttad och vriden i valfri vinkel, hittas, och med Spegelvänd eller Skalad påslagna hittas även spegelbilder och kopior i annan storlek. Ge det nya blocket ett namn och en baspunkt; markeringen och varje kopia blir referenser till det, var och en med sin egen rotation och skala. Eller välj Block och ange ett befintligt block för att hitta lösa kopior av dess objekt. En kopia måste ha samma lager, färg, linjetyp och linjetjocklek om inte Egenskaper är satt till Ignorera. Objekt på låsta lager lämnas orörda. Ett ångra-steg. |
| `BEDIT` | `BE` | Blockredigerare: redigera ett blocks objekt och attribut; BCLOSE sparar (BE) |
| `BLEND` |  | BLEND: en spline mellan ändarna på två öppna kurvor, valda nära ändarna för att sammanfogas. CONtinuity: Tangent följer båda riktningarna, Smooth följer även hur de böjer sig. |
| `BLOCK` | `B`, `BMAKE` | Gör ett block av objekt (de blir en referens) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: varje referens till ett block blir en referens till ett annat, på samma plats med samma skala och rotation. Värden för attribut som båda blocken har behålls. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE visar panelen Block med markören i dess filter. Panelen visar en bild av varje block (de senast placerade först), som lista eller rutnät; klicka på en bild eller dra den till ritningen för att placera blocket med INSERT. Under Bibliotek lägger du till en egen DWG- eller DXF-fil: dess block listas med bilder och kopieras in i den här ritningen när du placerar ett. I CadCraft Studio kan även en mapp med ritningar läggas till, och filer och mappar kommer ihåg. |
| `BOMEDIT` | `BOMCOLUMNS` | Kolumner, gruppering, sortering, rubrik, summor och anmärkningar i en stycklistetabell |
| `BOMEXPORT` |  | Spara en stycklistetabell som en .csv-fil |
| `BOMTABLE` | `BOM` | En levande stycklistetabell för en zon, eller för hela ritningen |
| `BOMUPDATE` |  | Uppdatera alla stycklistetabeller nu, även frysta |
| `BOMZONE` | `BZONE` | Ett namngivet område i ritningen för en stycklista: två hörn, en polygon eller konturen av ett slutet objekt |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): välj en punkt inuti ett slutet område och få en sluten polylinje runt det. Bågar förblir bågar. Öar konturerar även områdena inuti det. |
| `BOX` |  | En låda: två hörn och en höjd (3D) |
| `BPARAMETER` | `BPARAM` | Ännu inte byggt: lägga till en parameter (såsom Synlighet) till ett block. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blockparametrar: namngivna parametrar med formler, och flera synlighetsparametrar i ett block. Fungerar i blockredigeraren (tilldela de markerade objekten till ett tillstånd) och på en markerad referens (dess egna värden och tillstånd). |
| `BREAK` | `BR` | Bryt en linje, båge, cirkel eller polylinje mellan två punkter (BR) |
| `BREAKATPOINT` |  | Dela en linje, båge eller polylinje i två vid en punkt |
| `BREAKLINE` |  | Rita en linje med brytsymbol; dess storlek och förlängningen förbi ändarna kommer ihåg. |
| `BREPLACE` |  | BREPLACE byter ut ett block mot ett annat. Markerade: välj blockreferenser och ange blocket att använda i stället. Alla: ange ett block och dess ersättning, så ändras varje referens i varje rum och inuti andra block. En referens behåller sin plats, skala, rotation och lager, samt värdena för attribut som båda blocken har; värden som det nya blocket inte har någon plats för tas bort och namnges. |
| `BSEARCH` |  | BSEARCH hittar block. Namn: en del av ett blocknamn, eller ett mönster med * och ?. Attribut: ett värde (eller TAG=värde) som en referens attribut har. Geometri: markera objekt eller en blockreferens, så listas blocken vars form är minst 85 % lika, bäst först; storlek, rotation och spegling räknas inte. Referenserna som hittas i det öppna rummet markeras, redo för nästa kommando. |
| `BURST` |  | Spräng blockreferenser och behåll vad deras attribut säger: varje värde blir text på attributets lager. |
| `BVHIDE` | `BVH` | I blockredigeraren: dölj objekt i det aktuella synlighetsläget. |
| `BVSHOW` | `BVSH` | I blockredigeraren: visa objekt som det aktuella synlighetsläget döljer (de visas tonade så att du kan välja dem). |
| `BVSTATE` | `BVS` | I blockredigeraren, på ett block med synlighetslägen: byt till ett läge, eller lägg till, byt namn på eller ta bort ett. |
| `CAL` |  | Räkna ut en längd eller ett tal: + − * / och parenteser, som du skriver dem var som helst |
| `CENTERLINE` | `CL` | Mittlinje mellan två linjer: mitt emellan dem, eller längs halveringslinjen när de möts (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Mittmärke: ett kors i mitten av en cirkel eller båge, med mittlinjer ett stycke förbi den (CM) |
| `CHAMFER` | `CHA` | Fasa hörnet mellan två linjer (D två avstånd, A längd och vinkel, P varje hörn i en polylinje) |
| `CHSPACE` |  | CHSPACE: flytta objekt mellan ett blad och modellen genom en vyport. De skalas och vrids så att de ser likadana ut från andra sidan. På ett blad går de till modellen; medan du arbetar genom en vyport (MSPACE) hamnar de på bladet. |
| `CIRCLE` | `C` | Mitt och radie, diameter, 2 eller 3 punkter |
| `CLASS` |  | Lägg de markerade objekten i en klass, eller ange den aktiva klassen när inget är markerat (? listar dem) |
| `CLASSES` | `CLS` | Panelen Klasser: klasser sorterar objekt över lager; visa, dölj och formatera dem, och åsidosätt dem per vyport (CLS) |
| `COMMANDLINE` | `CMDLINE` | Docka eller frigör kommandoraden, gör den till en rad, ange dess historikrader, eller öppna historiken (F2) |
| `COMPARESETTINGS` | `CMPSET` | Jämför måttstilar, textstilar, lager, blad eller enheter: två i den här ritningen, eller den här ritningen mot en annan öppen, och kopiera ett värde över. |
| `CONSTRAINTBAR` | `CBAR` | Visa eller dölj villkorsfälten (Showall / Hideall, eller per objekt) |
| `COPY` | `CO`, `CP` | Kopiera objekt, så många gånger du klickar |
| `COPYBASE` |  | Kopiera objekt till urklipp med en baspunkt du väljer |
| `COPYCLIP` |  | Kopiera objekt till urklipp (Ctrl+C); PASTECLIP placerar dem |
| `COUNT` | `BCOUNT` | Räkna blockreferenser: välj en för att markera och räkna varje referens av dess block |
| `COUNTTABLE` |  | Placera en tabell med blockantal |
| `CREDITS` |  | Lägger bibliotekets krediter i ritningen som en tabell. Kör igen för att uppdatera tabellen från objekten i ritningen just nu. |
| `CURSORSIZE` |  | Korsmarkörens storlek: 100 kör den från kant till kant över ritningen (Inställningar › Markör › Helskärm) |
| `CUTCLIP` |  | Klipp ut objekt till urklipp (Ctrl+X): kopiera, sedan radera |
| `CYLINDER` | `CYL` | En cylinder: mitt, radie och höjd (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Lista block, deras attribut och objektegenskaper som en tabell i ritningen eller en CSV-fil |
| `DATALINK` | `DL` | En tabell från en CSV-fil som kommer ihåg filen, så att den kan läsas igen |
| `DATALINKUPDATE` | `DLU` | Läs en datalänks fil igen och fyll på dess tabeller |
| `DCALIGNED` | `DCALI` | Dimensionsvillkor: verkligt avstånd mellan punkter, en punkt och en linje, eller två linjer |
| `DCANGULAR` | `DCANG` | Dimensionsvillkor: vinkel mellan två linjer, eller för en båge |
| `DCCONVERT` |  | Gör om mått ritade på villkorbar geometri till dimensionsvillkor |
| `DCDIAMETER` | `DCDIA` | Dimensionsvillkor: diameter för en cirkel eller båge |
| `DCDISPLAY` |  | Visa eller dölj dimensionsvillkor i ritningen |
| `DCHORIZONTAL` | `DCHOR` | Dimensionsvillkor: horisontellt avstånd |
| `DCLINEAR` | `DCLIN` | Dimensionsvillkor: horisontellt eller vertikalt avstånd, från den plats du placerar det |
| `DCRADIUS` | `DCRAD` | Dimensionsvillkor: radie för en cirkel eller båge |
| `DCVERTICAL` | `DCVER` | Dimensionsvillkor: vertikalt avstånd |
| `DELBLOCKS` |  | Ta bort block: varje referens (även nästlade, på varje blad) och definitionerna |
| `DELCONSTRAINT` | `DELCON` | Ta bort alla villkor (geometriska och dimensionella) från de objekt du markerar |
| `DELOPENING` |  | Ta ut en dörr eller ett fönster ur en vägg. |
| `DESCRIBE` | `DESC` | Säg vad ritningen innehåller: hur många objekt, av vilken sort, hur stora, vad som är markerat. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Rensa markeringen (Esc) |
| `DETAILS` | `DET` | Ditt företags egna detaljer, hittade för det du ritar: sök, lägg till ett block, lista, ta bort, slå av eller på förslagen. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Rita ett diagram från text: ett Mermaid-flödesschema, ett PlantUML-komponentdiagram, D2, en från-till-lista eller draw.io XML, som block och kopplingar du kan redigera |
| `DIMALIGNED` | `DAL`, `DIMALI` | Verkligt avstånd mellan två punkter |
| `DIMANGULAR` | `DAN`, `DIMANG` | Vinkel mellan två linjer, för en båge, eller via tre punkter |
| `DIMARC` | `DAR` | Måttsättning av bågens längd: avståndet längs en båge, med bågsymbolen (DAR) |
| `DIMASZ` |  | Måttinställning: pilstorlek |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Mått staplade från en gemensam baslinje |
| `DIMBREAK` | `DBREAK` | Bryt mått- och hjälplinjer där de korsar andra objekt (Auto), mellan två punkter (Manuell), eller ta bort brotten |
| `DIMCONSTRAINT` | `DCON` | Dimensionsvillkor: linjärt, justerat, vinkel, radie, diameter, konvertera |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | En kedja av mått, vart och ett från slutet av det förra |
| `DIMDEC` |  | Måttinställning: decimaler |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Diameter för en båge eller cirkel |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Frigör mått från objekten de är kopplade till (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Ändra måttext (Hem, Ny text, Rotera) eller luta hjälplinjerna (Snett) |
| `DIMEXE` |  | Måttinställning: förlängning bortom måttlinjen |
| `DIMEXO` |  | Måttinställning: förskjutning från origo |
| `DIMGAP` |  | Måttinställning: avstånd runt texten |
| `DIMINSPECT` |  | Kontrollmått: en ram runt värdet med en etikett och hur ofta delen kontrolleras |
| `DIMJOGGED` | `DJO`, `JOG` | Knäckt radiemått: en radie ritad från en närmare punkt när centrum ligger långt bort (DJO) |
| `DIMJOGLINE` | `DJL` | Lägg till en knäcksymbol på en linjär eller justerad måttlinje, för att visa att avståndet inte är ritat i skala (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horisontellt eller vertikalt avstånd (R för valfri vinkel) |
| `DIMLUNIT` |  | Måttinställning: längdformat (1 vetenskaplig, 2 decimal, 3 teknisk, 4 arkitekt, 5 bråk) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Ordinatmått: X- eller Y-avståndet för en punkt från UCS-origo, på en hänvisning (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Åsidosätt måttvariabler på markerade mått utan att ändra deras stil; Clear återställer stilen (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radie för en båge eller cirkel |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Koppla ett måttets punkter till objekt, så att det följer och mäter om när de flyttas (DRE) |
| `DIMSCALE` |  | Måttinställning: total skala (storlekar × detta) |
| `DIMSPACE` |  | Jämnt avstånd mellan parallella mått, mätt från ett basmått (0 radar upp dem, Auto är dubbel texthöjd) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Skapa, ändra, ange aktuell, ta bort, tillämpa och jämför namngivna måttstilar (dialogrutan; -DIMSTYLE på kommandoraden) |
| `DIMTEDIT` | `DIMTED` | Flytta måttext till vänster, höger eller mitt på måttlinjen, eller vrid den |
| `DIMTEXTUNIT` | `DTU` | Måttext i mm, cm, m eller km, eller i ritningens egna enheter: de markerade måtten, annars nya (DTU) |
| `DIMTXT` |  | Måttinställning: texthöjd |
| `DIST` | `DI` | Avstånd och vinkel mellan två punkter |
| `DISTRIBUTE` |  | Fördela de markerade objekten jämnt, sida vid sida eller upp och ner: lika steg mellan centrum, eller lika mellanrum; de yttersta två står kvar |
| `DIVIDE` | `DIV` | DIVIDE (DIV): markeringar som delar en linje, båge, cirkel, polylinje, spline eller ellips i lika delar. Punkter, eller med Block ett block vid varje markering. |
| `DOCUMENTS` | `DOCS` | Öppna panelen Dokument: checka ut och in ritningar, revisioner, släppstatus och godkännande för en projektmapp |
| `DOOR` | `DR` | Sätt en dörr i en vägg. Sidan du klickar på är sidan dörren svänger åt. |
| `DRAWORDER` |  | Ändra ritordningen: flytta objekt längst fram, skicka dem bakåt, eller placera dem ovanför eller under andra objekt. |
| `DUPLICATE` | `DUP` | En kopia som följer pekaren: klicka för att släppa den (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Ritningens egenskaper: titel, författare med mera, och dina egna namn- och värdepar |
| `DXFOUT` |  | Ladda ner ritningen som DXF R12 (Spara behåller sitt eget format) |
| `EATTEDIT` | `DDATTE` | Redigera en blockreferens attribut: värden, text och egenskaper, ett attribut i taget |
| `ELLIPSE` | `EL` | Axelns ändpunkter och den andra halvaxeln |
| `ERASE` | `E`, `DELETE` | Ta bort objekt |
| `EXPLODE` | `X` | Bryt polylinjer, block och mått i sina delar |
| `EXPORT` | `EXP` | Spara en kopia av ritningen i en filtyp som ett tillägg skriver |
| `EXPORT3D` | `3DEXPORT` | Exportera 3D-modellen: GLB, OBJ eller STL |
| `EXPORTPOINTS` | `EXPPTS` | Skriv punkter, och blockens infogningspunkter med ett attribut som beskrivning, till en CSV- eller TXT-fil (PNEZD, PENZD eller XYZ) för BIM- och mätningsprogram |
| `EXTEND` | `EX` | Förläng objekt så att de möter andra: klicka nära en ände, dra över flera, eller Shift+klicka för att trimma |
| `EXTRIM` |  | EXTRIM: välj en skärkant, sedan en sida. Allt som korsar kanten trimmas på den sidan. Bitarna som skulle försvinna visas när du flyttar pekaren. |
| `EXTRUDE` | `EXT` | Extrudera slutna 2D-objekt till solider (3D) |
| `FIELD` |  | Sätt ett fält i en text, en tabellcell eller ett attribut: ett datum, filnamnet, bladnumret, en ritningsegenskap, ett objekts area eller längd, eller en formel |
| `FILLET` | `F` | Avrunda eller kantra hörnet mellan två objekt (R radie, P varje hörn i en polylinje, M flera) |
| `FIND` |  | Hitta och ersätt ord i text, attributvärden och måttext |
| `FLATTEN` |  | Sätt höjden (Z) och tjockleken på de markerade objekten till 0, även i de block de använder. |
| `FLOOR` |  | Välj våningen att rita på, lägg till en, eller flytta eller kopiera markeringen dit. |
| `FLOORLAYERS` |  | Gör våningar till lager med namnet Floor-Layer, för en fil som ska till någon utan våningar. |
| `FLOORS` | `FLR` | Öppna panelen Våningar: stapla våningar i ett modellrum. |
| `GCCOINCIDENT` |  | Villkor: två punkter möts, eller en punkt förblir på ett objekt |
| `GCCOLLINEAR` |  | Villkor: två linjer förblir på en linje |
| `GCCONCENTRIC` |  | Villkor: två cirklar eller bågar delar ett centrum |
| `GCEQUAL` |  | Villkor: två linjer förblir lika långa, eller två cirklar/bågar lika stora i radie |
| `GCFIX` |  | Villkor: en punkt eller ett helt objekt förblir där det är |
| `GCHORIZONTAL` |  | Villkor: en linje (eller två punkter) förblir horisontell |
| `GCPARALLEL` |  | Villkor: två linjer förblir parallella |
| `GCPERPENDICULAR` |  | Villkor: två linjer förblir i räta vinklar |
| `GCSYMMETRIC` |  | Villkor: två punkter, linjer eller cirklar speglar varandra över en linje |
| `GCTANGENT` |  | Villkor: en linje och en cirkel eller båge (eller två av dem) förblir tangenter |
| `GCVERTICAL` |  | Villkor: en linje (eller två punkter) förblir vertikal |
| `GDSIN` | `GDS` | Visa en IC-layout (en GDSII-strömfil): varje lager och datatyp som ett ritlager, platt, i användarenheter; endast för visning och mätning (labbtest) |
| `GEOMCONSTRAINT` | `GCON` | Geometriska villkor: horisontella, vertikala, parallella, tangenter, sammanfallande… |
| `GLBOUT` |  | Exportera 3D-modellen som GLB (glTF) |
| `GRADIENT` | `GD` | Fyller ett område med en övertoning av en eller två färger |
| `GRIDMOVE` | `GM` | Flytta en rutnätslinje och ta med det som hänger på den: väggar sträcks, pelare, bubblor och taggar flyttas, mått följer. |
| `GROUP` | `G` | GROUP (G): ge de markerade objekten ett gemensamt namn. Ett klick på ett av dem markerar sedan alla. Enter vid namnet gör en grupp utan namn. |
| `GROUPEDIT` |  | GROUPEDIT: ändra en grupp. Välj ett av dess objekt eller ange dess Namn, lägg sedan till eller ta bort objekt, byt namn med REName, ändra dess beskrivning, eller ange om ett klick markerar den hel. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Fyll ett område med en heltäckande fyllning eller ett mönster: klicka inuti det, eller markera slutna objekt (H) |
| `HATCHEDIT` | `HE` | Ändra en skraffering: mönster, skala, vinkel, origo och dess koppling till en gräns. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Skapar gränspolylinjerna igen från en skraffering, kopplade till den eller inte |
| `HATCHTOBACK` |  | Skicka all skraffering bakom allt annat. |
| `HELP` | `?` | Den här listan |
| `HIDEOBJECTS` |  | Dölj de markerade objekten tills UNISOLATEOBJECTS. Sparas inte med ritningen. |
| `HISTORY` | `HIST` | HISTORY (HIST): ritningens versioner — kopior som sparas på den här datorn när Studio sparar den, och molnets versioner — för att öppna, återställa och jämföra med vad som ändrats, visat i färg. |
| `ID` |  | Koordinater för en punkt |
| `IMAGE` | `IM` | Ge CadCraft de bildfiler en ritning använder (en DWG lagrar bara var de fanns). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Placera en bild (PNG eller JPEG) från en fil. |
| `IMAGECLIP` | `ICL` | Klipp en bild till en rektangel eller en polygon, eller ta bort dess klipp. |
| `IMPORT` | `IMP` | Importera en fil av en sort som ett tillägg läser, till den här ritningen |
| `INSERT` | `I`, `DDINSERT` | Placera ett block (S skala, R rotera); F från en DWG/DXF-fil, L från biblioteket |
| `INTERSECT` | `IN` | Behåll bara det som solider har gemensamt (3D), eller det område som 2D-regioner delar |
| `ISODRAFT` |  | ISODRAFT: isometrisk ritning på eller av, eller direkt på planet Left, Top eller Right. När den är på följer Ortogonalt och polär spårning planets två axlar, rutnätet ritas isometriskt, och ELLIPSE har Isocirkel. |
| `ISOLATEOBJECTS` | `ISOLATE` | Visa bara de markerade objekten; allt annat i det här rummet döljs tills UNISOLATEOBJECTS. Sparas inte med ritningen. |
| `ISOPLANE` |  | ISOPLANE: välj det isometriska planet att rita på: Left, Top eller Right. Enter går till nästa, som F5 gör när isometrisk ritning är på. |
| `JOIN` | `J` | Sammanfoga linjer, bågar och polylinjer som möts ände mot ände till en polylinje; linjer på en linje till en linje (J) |
| `LASER` | `LASERCUT` | Öppna panelen Laser: skicka lager till en laserskärare eller gravör (GRBL G-code) |
| `LASSOMODE` |  | Tryck och dra ritar ett lasso (1) eller en rektangel (0) |
| `LAYDEL` |  | Ta bort ett lager och varje objekt på det (i modellen, på blad och i block) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Öppna lagerhanteraren: alla lager i en tabell |
| `LAYERPANEL` |  | Visa lagerpanelen |
| `LAYFRZ` |  | Frys lagret för varje objekt du väljer |
| `LAYGROUP` | `LG` | Gruppera lager i mappar i panelen Lager. |
| `LAYISO` |  | Isolera lagren för de markerade objekten (alla andra lager av) |
| `LAYLOCKFADE` |  | Ange hur mycket objekt på låsta lager tonas, och om ett klick kan markera dem. |
| `LAYMCUR` |  | Gör lagret för objektet du väljer till aktuellt |
| `LAYMRG` |  | Slå ihop lager: deras objekt flyttas till ett målllager, och de sammanslagna lagren försvinner |
| `LAYOFF` |  | Stäng av lagret för varje objekt du väljer |
| `LAYON` |  | Slå på alla lager |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Ett nytt blad med ett ritningshuvud och en vyport |
| `LAYTHW` |  | Tina alla lager |
| `LAYUNISO` |  | Slå på igen lagren som LAYISO stängde av |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Konverterar text skriven med gamla vietnamesiska teckensnitt (TCVN3 / ABC-teckensnitt som .VnTime, och VNI-teckensnitt som VNI-Times) till Unicode. Sådan text visas redan som den läses; detta skriver om den för gott, med ett antal och ett ångra-steg. |
| `LENGTHEN` | `LEN` | Förläng eller korta linjer, bågar och polylinjer: med ett belopp, en procentsats, till en summa, eller genom att dra (LEN) |
| `LIBRARY` | `LIB` | Bibliotekspanelen: placera objekt, kontrollera uppdateringar, krediter |
| `LIMITS` |  | Ange ritningens gränser: ON, OFF, eller nedre vänstra och övre högra hörnen. Med gränserna påslagna avvisas punkter utanför dem |
| `LINE` | `L` | Raka segment, vart och ett ett eget objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Linjetypen nya objekt får (efter lager, efter block, eller en namngiven) |
| `LINKVIEWS` | `SYNCVIEWS` | Panorera och zooma alla rutor tillsammans (delad skärm), för att jämföra två ritningar eller revisioner |
| `LISPEDIT` | `VLIDE` | LISPEDIT (eller VLIDE) öppnar LISP-redigeraren: ett fönster för att skriva, läsa in och prova en rutin. Läs in i ritningen läser varje form, som när filen läses in med APPLOAD, och gör dess kommandon. Kör markering utvärderar de markerade formerna, eller formen där markören står. Konsolen visar vad rutinen skrev ut och varje fel med sin rad. Motsvarande parentes markeras när du skriver, och Enter indrar den nya raden. Ny, Öppna och Spara fungerar på en .lsp-fil. Listorna bredvid texten visar de funktioner rutinen definierar, de den anropar som denna LISP inte har ännu, och alla den har. Fönstret blockerar inte ritningen, så en rutin kan be om punkter; Stopp eller Esc avslutar en rutin som körs. |
| `LIST` | `LI`, `LS` | Beskriv objekt i historiken |
| `LTSCALE` | `LTS` | Ritningens linjetypsskala (varje streck och glapp multipliceras med den) |
| `LWDISPLAY` | `LWT` | Visa eller dölj linjetjocklekar på skärmen (knappen LWT i statusfältet) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Linjetjockleken nya objekt får (efter lager, efter block, standard, eller mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kartlager under modellrummet: ritningens koordinatsystem, kartutsnitt, WMS, WMTS, ArcGIS, bilder |
| `MASSPROP` |  | MASSPROP: sektionsegenskaper för regioner och slutna objekt: area, omkrets, tyngdpunkt, moment och tröghetsprodukt, tröghetsradier och huvudaxlar. Exakt för linjer och bågar. Den kan skriva rapporten till en textfil. |
| `MATCHPROP` | `MA`, `PAINTER` | Matcha egenskaper: kopiera ett objekts lager, färg och mer till andra (MA) |
| `MEASURE` | `ME` | MEASURE (ME): en markering för varje given längd längs en linje, båge, cirkel, polylinje, spline eller ellips, från änden närmast ditt val. Punkter, eller med Block ett block vid varje markering. |
| `MEASUREGEOM` | `MEA` | Mät ett avstånd, en radie, en vinkel eller en area (MEA) |
| `MINSERT` |  | MINSERT: placera ett block i rader och kolumner på en gång. Varje är en egen referens, så du kan flytta eller radera vilken som helst av dem. |
| `MIRROR` | `MI` | Spegla objekt över en linje |
| `MLEADER` | `MLD`, `MLEAD` | Flerhänvisning: en pil, en hänvisning och en anteckning, som ett objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Rada upp flerhänvisningar med en av dem längs en riktning, med lika avstånd, eller fördelade mellan två punkter (MLA) |
| `MLEADERCOLLECT` | `MLC` | Samla flera flerhänvisningar till en: deras block i en rad eller kolumn, eller deras anteckningar under varandra (MLC) |
| `MLEADEREDIT` | `MLE` | Lägg till hänvisningslinjer till en flerhänvisning eller ta bort dem; byt dess innehåll mellan text och block (MLE) |
| `MLINE` |  | Rita parallella linjer tillsammans, sammanfogade i hörnen. |
| `MOVE` | `M` | Flytta objekt med en baspunkt och en andra punkt |
| `MSPACE` | `MS` | Arbeta på modellen genom en vyport på det öppna bladet (eller dubbelklicka inuti vyporten). |
| `MTEXT` | `MT`, `T` | Styckestext: dra dess bredd, skriv sedan på plats; Enter startar ett nytt stycke (T) |
| `MVIEW` | `MV` | En vyport mot modellen, på en layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Namngivna vyer: spara vyn på skärmen (eller ett fönster) under ett namn och gå tillbaka till den (NV) |
| `NCOPY` |  | Kopiera objekt ur en blockreferens eller en länkad ritning till ritningen, utan att spränga den. |
| `NEARBY` |  | Säg vad som ligger nära markören, närmast först, med avståndet och sidan. |
| `NEW` |  | Starta en ny ritning |
| `OBJECTSCALE` | `OBJSCALE` | Annoteringsskalor för annoterande text och mått: lägg till en skala, ta bort en, lägg till den aktuella skalan, eller lista dem (varje vyport visar dem i storleken för sin egen skala) |
| `OBJOUT` |  | Exportera 3D-modellen som OBJ |
| `OFFSET` | `O` | Parallella kopior på ett avstånd |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: hur OFFSET stänger luckorna vid polylinjens yttre hörn. 0 förlänger segmenten, 1 lägger till en båge, 2 lägger till ett rakt snitt. Sparas för den här sessionen. |
| `OLELIST` | `OLES` | Lista OLE-objekten en ritning bär och placera en kopia av en bild av ett av dem där du väljer |
| `OPEN` |  | Öppna en DWG eller DXF från den här datorn |
| `OPENIN3D` |  | Öppna den här ritningen i 3D-modelleringsappen, i en ny flik (inget laddas upp) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Öppna menyn för objektfångst: välj vilka fångster som är på. Även högerklick på Fångst i statusfältet. |
| `OVERKILL` |  | Ta bort dubbletter av objekt och slå ihop överlappande eller ände-mot-ände-linjer och bågar, inom en tolerans. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Panelen Parametrar: användarparametrar och dimensionsvillkor i en tabell |
| `PARTSLIST` | `PLIST` | En delförteckningstabell över varje standarddel och stålprofil placerad från biblioteket |
| `PASTEAREA` | `PAREA` | Klistra in ett område kopierat i MarkupCraft (Kopiera område) i dess sanna storlek, som en bild. |
| `PASTEBLOCK` |  | PASTEBLOCK: klistra in det du kopierade som ett block. Blocket får ett eget namn; RENAME ger det ditt. |
| `PASTECLIP` |  | Klistra in urklipp: det följer markören, klicka där det ska ligga (Ctrl+V) |
| `PASTEORIG` |  | Klistra in urklipp på de koordinater det kopierades från (Ctrl+Shift+V) |
| `PDF` |  | Ge CadCraft de PDF-filer som ritningens underlägg använder |
| `PDFADJUST` |  | Tona, justera kontrast, gör enfärgad eller stäng av ett PDF-underlägg |
| `PDFATTACH` | `PDFATT` | Bifoga en PDF-sida som underlägg (PDFATTACH) |
| `PDFCLIP` |  | Klipp ett PDF-underlägg till en rektangel eller polygon |
| `PDFIMPORT` | `PDFIM` | Gör en PDF-sidas linjer, fyllningar och text till ritningsobjekt (PDFIMPORT) |
| `PDFLAYERS` |  | Slå på eller av lagren i ett PDF-underlägg |
| `PEDIT` | `PE` | Redigera en polylinje: stäng, öppna, sammanfoga, bredd, anpassa kurva, spline-kurva, ta bort kurvning, generering av linjetyp, vänd; linjer, bågar och splines kan göras om till polylinjer |
| `PHOTOSKETCH` | `PSK` | Gör ett foto av en handskiss på papper till linjer och bågar i skala, rätar ut perspektivet och ger varje pennfärg sitt eget lager. |
| `PICKSTYLE` |  | PICKSTYLE: om markering av ett objekt i en grupp markerar hela gruppen (1, startinställningen) eller bara det objektet (0). Sparas för den här sessionen. |
| `PLAN` |  | Vrid vyn så att UCS X-axeln (aktuell UCS, en sparad UCS, eller världen) är plan på skärmen. Inget i ritningen flyttas. |
| `PLINE` | `PL` | En polylinje av linje- och bågsegment |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Plotta till PDF: ett blad, eller modellen i en skala |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Tabeller för plottstilar: ange vad varje färg skrivs ut som (färg, svart, grå, bläck, linjetjocklek); sparas med ritningen (STYLESMANAGER) |
| `POINT` | `PO` | Punktobjekt |
| `POINTCLOUD` | `PC` | Det bifogade punktmolnet: skiva, höjd, tjocklek, färg, storlek, synlig, zoom, lossa |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Bifoga ett punktmoln (LAS, LAZ, XYZ, PTS) under ritningen |
| `POLARANG` |  | Steget för polär spårning i grader (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | En regelbunden polygon |
| `PRESSPULL` |  | Tryck eller dra en yta på en solid (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Öppna panelen Egenskaper (även Ctrl+1, eller dubbelklicka på ett objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Vik ihop panelen Egenskaper till fönstrets kant |
| `PSPACE` | `PS` | Lämna vyporten du arbetar i och gå tillbaka till bladet (eller dubbelklicka utanför den). |
| `PUBLISH` | `-PUBLISH` | Plotta flera eller alla blad till en PDF (en sida och ett bokmärke per blad) |
| `PURGE` | `PU` | Ta bort blockdefinitioner som ingenting använder |
| `QDIM` |  | Snabbmått: måttsätt flera objekt på en gång (kontinuerligt, baslinje, förskjutet, ordinat, radie eller diameter) |
| `QPMODE` | `QP` | Snabbegenskaper vid markören på eller av |
| `QSELECT` | `QS` | Snabbmarkering: alla objekt av en typ vars lager, färg, storlek eller namn stämmer (QS) |
| `RASTERSNAP` |  | Slå på eller av fångst till linjerna i skannade blad. |
| `RAY` |  | Stråle: en konstruktionslinje från en punkt, obegränsad åt ett håll. |
| `RECOVER` |  | Öppnar en skadad DXF eller DWG: hoppar över det som inte kan läsas i stället för att avvisa filen, säger vad som hoppades över, och kontrollerar och reparerar sedan ritningen som AUDIT gör. |
| `RECTANG` | `REC`, `RECTANGLE` | En sluten polylinje från två hörn |
| `REDLINE` | `RDL` | Redline till revision: läs ett MarkupCraft-redlinepaket, godkänn eller avvisa varje ändring, lägg moln runt de godkända med en revisionslogg, och spara svarsfilen (RDL) |
| `REDO` |  | Gör om det som ångrades |
| `REFCLOSE` |  | Avsluta redigeringen av ett block på plats: spara det, eller kassera ändringarna |
| `REFEDIT` |  | Redigera ett block på plats, där en referens av det sitter, med resten av ritningen tonad; REFCLOSE sparar det |
| `REGEN` | `RE` | Bygg om det som ritas i den här fliken från ritningen (RE) |
| `REGENALL` | `REA` | Bygg om det som ritas i varje flik, ruta och öppen ritning (REA) |
| `REGION` | `REG` | REGION (REG): skapa platta områden (regioner) av slutna objekt, eller av linjer, bågar och polylinjer som sluter en slinga ände mot ände. UNION, SUBTRACT och INTERSECT kombinerar sedan regioner, och MASSPROP ger deras sektionsegenskaper. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Registrera flera skanningar: placera dem i en ram med valda punktpar eller måltavlor, förfina med ICP, exportera en LAS eller E57 |
| `REINIT` |  | Läs in din aliasfil igen |
| `RENAME` | `-RENAME`, `REN` | Byt namn på ett lager eller ett block (varje objekt eller referens följer) |
| `REVCLOUD` | `RC` | Revisionsmoln: runda av en rektangel, en polygon, en frihandsbana eller ett objekt (RC) |
| `REVOLVE` | `REV` | Vrid slutna 2D-objekt runt en axel till solider (3D) |
| `ROTATE` | `RO` | Rotera objekt runt en baspunkt |
| `SAMPLES` | `SAMPLE` | Öppna en av CadCraft:s exempelritningar (en arkitektonisk uppsättning, en som-byggd) för att lära dig av |
| `SAVE` | `QSAVE` | Ladda ner ritningen i sitt format (DWG eller DXF) |
| `SAVEAS` |  | Ladda ner ritningen som DWG eller DXF: välj vilket |
| `SAYSEL` |  | Säg vad som är markerat, en mening per objekt. |
| `SCALE` | `SC` | Skala objekt runt en baspunkt |
| `SCALELISTEDIT` | `SCALELIST` | Lägg till, redigera och ta bort ritningens egna skalor; de visas i listorna över vyportens och utskriftens skalor och sparas i filen (SCALELIST) |
| `SCANALIGN` | `SCL` | Rikta in ett skannat blad mot två punkter: flytta, vrid och, om du vill, skala det. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Infoga en skannad ritning: en PNG, JPEG eller TIFF (en sida eller alla sidor i en flersidig fil) eller en PDF-sida som är en bild. |
| `SCANCLEAN` | `SCC` | Gör ett skannat blad svartvitt och ta bort fläckar. |
| `SCANCROP` | `SCR` | Beskär ett skannat blad till ett fönster. |
| `SCANDESKEW` | `SCD` | Hitta vinkeln som ett skannat bladets långa linjer ligger i och vrid bladet rakt när du godkänner vinkeln. |
| `SCANERASE` | `SCE` | Radera ett område av ett skannat blad: en rektangel, en polygon eller ett lasso. |
| `SCANINFO` | `SCI` | Visa ett skannat bladets ursprungliga fil och stegen som tagits sedan dess. |
| `SCANSCALE` | `SCS` | Skala ett skannat blad: välj två punkter på det och skriv det sanna avståndet mellan dem. |
| `SCANTRACE` | `SCT` | Spåra ett skannat blad till linjer och bågar på ett nytt lager, till en tolerans du anger. Text och skraffering förblir rastrerad. |
| `SELECT` |  | Markera objekt nu (för P, Föregående, i nästa kommando) |
| `SELECTALL` | `AI_SELALL` | Markera varje objekt du kan redigera på den här fliken (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Markera varje objekt som de du väljer: samma typ, lager och färg (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Visar panelen Bladuppsättning: blad från många ritningar, numrerade, publicerade som en PDF. |
| `SHORTCUTS` | `KEYS` | Ge vilket kommando som helst en egen tangent (Ctrl eller Alt med en bokstav, eller en fri funktionstangent), sparad i den här webbläsaren eller skrivbordsappen. |
| `SHXFONTS` | `SHX` | Ge CadCraft SHX-teckensnitt från en mapp eller filer, så att textstilar som anger dem ritas med dem (lista, ta bort, vänd) |
| `SKETCHFIX` | `SKF` | Rita frihandsstreck; varje blir en ren linje, cirkel, båge, rektangel eller polylinje, rätad och sammanfogad med de andra. |
| `SKETCHLIVE` | `SKL` | Skissa med en penna: varje streck blir en exakt linje, cirkel, båge eller rektangel när du lyfter pennan, fångad till ritningen, med storleken att skriva över. |
| `SPLINE` | `SPL` | Rita en spline genom punkter (eller med en kontrollpolygon), eller gör en polylinje till en |
| `SPLINEDIT` | `SPE` | Redigera en spline: anpassa punkter, kontrollpunkter och vikter, öppna eller stäng den, vänd den, eller konvertera den till en polylinje |
| `SPLIT` |  | Dela ritningsytan i rutor (som VPORTS på modellen; även från ett blad) |
| `STEELMEMBER` | `SMEMBER` | En stålprofil i 3D från en standardprofil: två punkter (en balk) eller en baspunkt och en höjd (pelare) |
| `STLOUT` |  | Exportera 3D-modellen som STL (millimeter) |
| `STRETCH` | `S` | Töj: dra ett korsande fönster över ändarna för att flytta; det som är inuti flyttas, resten står kvar (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Textstilar: teckensnittet, höjden, bredden och lutningen ny text får (dialogrutan; -STYLE på kommandoraden) |
| `SUBTRACT` | `SU` | Ta bort solider från andra (3D), eller 2D-regioner från regioner |
| `SWBOUT` | `SWMACRO` | Ladda ner ett makro för SolidWorks (.swb) som bygger om modellen som en enda villkorad skiss |
| `SWEEP` |  | Svep slutna 2D-objekt längs en bana (linje, polylinje, båge, cirkel) till solider (3D) |
| `TABLE` | `TB` | Skapa en tabell: rader och kolumner, eller från kalkylbladsceller på urklipp eller en CSV-fil |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Redigera en tabell: skriv i en cell, infoga och ta bort rader och kolumner, storlekar, sammanfogade celler, justering |
| `TABLEEXPORT` |  | Spara det en tabell visar som en CSV-fil |
| `TABLEPASTE` | `PASTETABLE` | Skapa en tabell från kalkylbladsceller på urklipp |
| `TABLESTYLE` | `TS` | Tabellstilar: texthöjder, justering, marginal och kanter för rubrik-, huvud- och dataraderna |
| `TAGS` |  | Taggar på blockreferenser: definiera en tagg (sort, tillåtna värden, block den gäller), ange den på de markerade referenserna, och lista dem som en förteckning som du kan spara som CSV |
| `TEXT` | `DT`, `DTEXT` | Enradig text; Enter startar nästa rad |
| `TEXTEDIT` | `ED`, `DDEDIT` | Redigera text på plats: välj en text (eller dubbelklicka på en) (ED) |
| `TEXTMASK` | `TMASK` | Lägg en bakgrundsmask bakom texter (ritningens bakgrund eller en färg), eller ta bort den. |
| `TEXTTOFRONT` |  | Flytta all text, alla mått och hänvisningar främst framför allt annat. |
| `TOOLBAR` |  | Välj vad verktygsfältets knappar visar: ikoner och text, bara ikoner, eller bara text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Placera verktygsfältet överst, nederst, till vänster eller till höger i fönstret |
| `TOOLBARROWS` |  | Välj hur många rader verktygsfältet använder: bryt för att passa, 2, eller 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Gör fälten ovanför ritningen standard eller kompakta |
| `TOUCHCROSSHAIR` | `TCX` | Förskjuten korsmarkör för ritning med fingret: ett finger flyttar en korsmarkör som sitter ovanför och bredvid, så att fingret inte täcker valpunkten. Om fingret lyfts väljs inget; knappen Klicka eller en knackning med ett andra finger väljer vid korsmarkören, och att hålla Klicka medan du rör dig drar. Ett långt tryck eller knappen Enter är Enter. Två fingrar panorerar och zoomar. Alternativ: ON, OFF, Auto (på bara där ett finger är den enda pekaren), Distance, Side. |
| `TOUR` | `TUTORIAL` | Gå igenom den sexstegs första-ritning-rundturen igen |
| `TRIM` | `TR` | Skär tillbaka objekt till där andra korsar dem: klicka på en bit, dra över flera, eller Shift+klicka för att förlänga |
| `TRIMEXTENDMODE` |  | Hur TRIM och EXTEND startar: 1 Snabb (varje objekt är en skärkant eller gräns), 0 Standard (välj kanterna först) |
| `TTR` |  | En cirkel tangent till två objekt, med en radie du anger (samma som CIRCLE T). |
| `TURNLEFT` |  | Vrid vyn 90° åt vänster (moturs): UCS Z -90, och vyn följer. Inget i ritningen flyttas. |
| `TURNRIGHT` |  | Vrid vyn 90° åt höger (medurs): UCS Z 90, och vyn följer. Inget i ritningen flyttas. |
| `TURNWORLD` |  | Tillbaka till världen: UCS Världen, och vyn är plan igen. |
| `TXT2MTXT` | `T2M` | Sammanfoga enradiga texter till en styckestext, uppifrån och ner. |
| `UCS` |  | Ditt eget koordinatsystem: en origo och en X-axel (origo, Z-vinkel, 3punkt, OBject, Previous, World, NAmed). Punkter du skriver, ortho, polär spårning, rutnätet och ny text följer det; vyn vrids så att dess X-axel är plan. Inget i ritningen flyttas. |
| `UNDO` | `U` | Ångra det senaste kommandot |
| `UNGROUP` |  | UNGROUP: ta isär grupper. Markera objekt i grupperna, eller ange ett Namn. Objekten finns kvar i ritningen. |
| `UNION` | `UNI` | Sammanfoga solider till en (3D), eller 2D-regioner till en region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Visa igen varje objekt som dolts av ISOLATEOBJECTS eller HIDEOBJECTS. |
| `UNITS` | `UN`, `DDUNITS` | Hur längder visas och skrivs: decimal, fot och tum, bråk (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Räkna ut fälten igen, och välj när de uppdateras av sig själva |
| `USDOUT` |  | Exportera 3D-modellen som USD (.usda-text, .usdc-binär eller ett .usdz-paket) |
| `VIEW` | `-VIEW`, `V` | Standardvyer i 3D, perspektiv eller parallell (3D) |
| `VIEWBASE` | `FLATSHOT` | Placera en platt 2D-vy av 3D-solider (framifrån, uppifrån, från sidan eller isometrisk, dolda linjer streckade) på ett blad eller i modellen |
| `VIEWLABEL` | `VL` | En vyrubrik på ett blad som visar vyportens vynamn, och ändras med den. |
| `VOICE` |  | Slå på eller av talade kommandon. De känns igen på den här datorn. |
| `VPCLIP` |  | Klipper en bladvyport till ett slutet objekt eller en ritad polygon; Delete gör den till en rektangel igen |
| `VPLAYER` |  | Frys eller tina lager i vissa vyportar bara (Freeze, Thaw, Reset), och välj vilka lager nya vyportar börjar frysta med (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Dela ritningsytan i rutor, var och en med sin egen vy (på ett blad: en vyport, som MVIEW) |
| `VPVIEW` |  | Ange vad en vyport visar: välj ett fönster på modellen |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visuell stil för 3D-vyn: skuggad, kanter, dold linje, trådmodell, röntgen |
| `WALL` | `WA` | Rita 2D-väggar som en polylinje. De sammanfogas, och bär dörrar och fönster. |
| `WALLARC` | `WARC` | Rita en bågformad vägg. Planväggar är raka, så bågen ritas som korta raka väggar (15 grader var) som sammanfogas. |
| `WALLDELSEG` |  | Ta bort en bit av en vägg mellan två punkter. Det som är kvar blir kvar som en eller två väggar. |
| `WALLDIM` |  | Skriv ett nytt värde för ett mått: väggen i dess andra ände flyttas vinkelrätt mot sig själv, väggen vid första änden håller sig, och väggarna sammanfogade med den följer. |
| `WALLDISJOIN` |  | Välj en vägg nära ena änden för att tillåta att den inte sammanfogas i den änden: änden ritas rak och inget följer den. Välj den igen för att tillåta sammanfogning. |
| `WALLGRID` |  | Lås en vägg till en rutnätslinje: längs den, eller med ena änden på den. Flytta linjen med GRIDMOVE, så följer väggen. |
| `WALLHOLD` |  | Rikta in och lås: en vägg behåller sin plats mot en annan vägg (på sin linje, eller på det avstånd den har). Om en flyttas följer den andra. |
| `WALLHOLDDIM` |  | Lås avståndet mellan två parallella väggar. Om en flyttas, följer den andra för att behålla det. |
| `WALLHOLDS` |  | Lista låsen på väggarna. |
| `WALLJOINS` |  | Ge varje vägg i en äldre ritning sitt id och lagra sammanfogningarna mellan dem. Detta sker också vid den första ändring du gör. |
| `WALLJOINSTYLE` |  | Klicka på ett hörn där två väggar möts ände mot ände för att ändra hur det ritas: geringsskuret, stumt, kvadratiskt. T byter vilken vägg som går igenom. |
| `WALLOFFSET` | `WO` | Flytta en vägg vinkelrätt mot sig själv med ett avstånd (väggarna sammanfogade med den följer), eller gör en kopia på det avståndet. |
| `WALLPICK` |  | Gör väggar på en linje eller polylinje i ritningen, med linjerna sammanfogade med den om du säger Ja. |
| `WALLPOLY` | `WP` | Rita väggar runt en regelbunden polygon med 3 till 64 sidor, som POLYGON. |
| `WALLRECT` | `WR` | Rita fyra sammanfogade väggar från två motsatta hörn, som RECTANG. |
| `WALLREJOIN` |  | Gör två delar av en vägg till en vägg igen. Den första behåller sin plats i ritningen. |
| `WALLROT` |  | Rita fyra sammanfogade väggar som en rektangel vriden i valfri vinkel: den första sidan, sedan hur långt ut. |
| `WALLSPLIT` | `WS` | Dela en vägg i två vid en punkt eller där en annan vägg korsar. Delarna förblir sammanfogade om du inte ber om ett mellanrum eller fria ändar. Dörrar och fönster följer sin del. |
| `WALLSPLITGAP` |  | Dela en vägg och lämna ett mellanrum: skriv mellanrummet, välj väggen, sedan punkten. Delarna behåller fria ändar och kan sammanfogas igen. |
| `WALLSTRETCH` |  | Töj med ett fönster: väggändar inuti det flyttas, väggar helt inuti flyttas hela, och väggar som stöter mot dess sidor glider med dem. |
| `WALLTAN` |  | Fortsätt en vägg med en båge som lämnar den längs väggen (ritas som korta raka väggar). |
| `WALLTRACE` |  | Gör väggar runt det minsta slutna området av linjer och väggar runt punkten du klickar på. |
| `WALLUNHOLD` |  | Ta bort låsen från en vägg (och andra väggars lås mot den). |
| `WBLOCK` | `W`, `-WBLOCK` | Skriv ett block, några objekt eller hela ritningen till en ny DWG- eller DXF-fil (W) |
| `WEDGE` | `WE` | En kil: två hörn och en höjd; den lutar bort från det första hörnet (3D) |
| `WHEREAMI` | `WHERE` | Säg var markören är. |
| `WHOHAS` |  | Säger vem som har en ritning öppen. CadCraft Studio håller en liten låsfil bredvid varje öppen ritning (Plan.dwg.cclock: vem, sedan när, vilken version) och tar bort den vid stängning. Alternativ: Current (den öppna ritningen), File (välj en), FOlder (varje ritning i en mapp som är öppen någonstans; detta låter också Studio hålla låsfiler i mappen), Path (skriv en), Name (namnet andra ser). Ett lås som inte uppdaterats på fem minuter sägs vara inaktuellt. Finns inte i en webbläsare. |
| `WINDOW` | `WN` | Sätt ett fönster i en vägg. |
| `XATTACH` | `XA` | Länka en annan DWG eller DXF till den här ritningen, visad skrivskyddad (XREF listar och läser in dem igen) |
| `XCLIP` | `XC` | Klipp blockreferenser och länkade ritningar till en rektangel eller en polygon, eller ta bort klippet. |
| `XLINE` | `XL` | Konstruktionslinje, obegränsad åt båda hållen: genom två punkter, horisontell, vertikal, i en vinkel, halvera en vinkel, eller förskjuten från en linje. |
| `XREF` | `XR`, `-XREF` | Länkade ritningar (externa referenser): lista, bifoga, läs in igen, bind, lossa |
| `ZOOM` | `Z` | Utsträckning, eller ett fönster |
