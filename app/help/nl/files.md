---
title: Bestanden: wat opent, wat wordt opgeslagen
summary: De formaten die CadCraft opent, opslaat en exporteert, wat wordt behouden of geconverteerd en waar de bestanden heen gaan.
keywords: xclip, clip, xclip-begrenzing, ingebonden clip, dwg, dxf, pdf, r12, openen, opslaan, exporteren, importeren, formaten, conversie, downloaden, saveas, dxfout, opslaan als, dwg opslaan, formaat, qsave, xref, xattach, gekoppelde tekening, externe referentie, inbinden, opnieuw laden, loskoppelen
from: 6d68b34e
---

## In één oogopslag

| Formaat | Openen | Opslaan | Opmerkingen |
|---|---|---|---|
| DXF (tekst, elke versie) | Ja | Ja, als DXF R12 of DXF 2000 | Binaire DXF wordt geweigerd: sla hem eerst op als tekst-DXF. |
| DWG | Ja | Ja, als DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 of 2018) | Gelezen en geschreven door de eigen DWG-bibliotheek van CadCraft (AutoCAD R13- tot 2018-bestanden). Uw DWG wordt nooit gewijzigd. Beschadigde bestanden, of versies die de lezer niet aankan, worden geweigerd met een melding. |
| PDF | Haalt een pagina binnen: als onderlegger of als objecten ([PDF-onderleggers](topic:pdf-underlay)) | Ja, door te plotten | Vector-pdf van een blad, of van het model op een schaal. |

Elke tekening die u opent (of begint met {{ui:Nieuw}}) krijgt een eigen tabblad boven het tekengebied; een nieuwe tekening die nog niemand heeft aangeraakt, wordt gebruikt in plaats van een tabblad toe te voegen. Klik op een tabblad om te wisselen, op zijn {{ui:×}} om het te sluiten (CadCraft vraagt eerst als er niet-opgeslagen wijzigingen zijn), of leg de geopende tekeningen naast elkaar: zie [Het scherm splitsen](topic:split-screen).

## Een tekening openen

- Druk op {{key:Mod+O}}, klik op {{ui:Openen}} of typ `OPEN` en kies dan het bestand.
- Of sleep een `.dwg`- of `.dxf`-bestand op het tekengebied.

Het bestand wordt in uw browser gelezen. Het wordt nergens geüpload. De geschiedenis meldt hoeveel objecten en lagen er zijn binnengekomen en hoe lang het duurde, en het gedeelte {{ui:Tekening}} van het linkerpaneel toont het formaat, bijvoorbeeld "DWG 2018 (AC1032)".

De DWG-lezer maakt deel uit van CadCraft en wordt opgehaald met de eerste DWG die u opent nadat de pagina is geladen (enkele honderden KB), dus er is geen aparte download om op te wachten. Hij leest het bestand op de achtergrond, zodat de pagina blijft reageren terwijl een grote DWG opent.

### Wat er binnenkomt

- Lijnen, bogen, cirkels, polylijnen (met boogsegmenten), ellipsen, punten, tekst en meerregelige tekst, vlakken (solids), arceringen (de standaardpatronen getekend als hun lijnen, andere als een vlakke tint), blokverwijzingen met hun attributen (waarden die u kunt bewerken; zie [Blokattributen](topic:attributes)), maatvoering en indelingen met hun viewports.
- Splines komen binnen als splines (graad, stuurpunten, knopen, gewichten, passpunten); zie [Splines en polylijnen](topic:splines).
- Multileiders met één leiderlijn en tekst komen binnen als CadCraft-multileiders die u kunt bewerken (zie {{cmd:MLEADER}}). Andere (met een blok, meerdere leiderlijnen of gebogen lijnen) worden getekend zoals het andere programma ze tekende en verplaatsen als één geheel; de geschiedenis zegt hoeveel.
- Afbeeldingen (rasterafbeeldingen) verschijnen als een kader met de bestandsnaam van de afbeelding totdat u CadCraft het bestand geeft met {{cmd:IMAGE}}: zie [Afbeeldingen in een tekening](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts verschijnen als hun kader, en wat eronder ligt, blijft zichtbaar.
- Tabellen in een DWG komen binnen zoals het andere programma ze tekende.
- 3D-vlakken in de modelruimte komen binnen op het tabblad {{ui:3D}}, niet als 2D-objecten; dat geldt ook voor die in blokken, één keer per blokverwijzing in het model. In een blok en op een blad worden ze ook plat getekend, als omtrekken. Zie [Modelleren in 3D](topic:3d-solids).
- Lagen behouden hun kleur-, aan-, bevroren-, vergrendeld- en plotinstellingen. DEFPOINTS wordt nooit geplot.
- Maatvoering wordt echte, bewerkbare CadCraft-maatvoering waar de punten ervan te lezen zijn. Eerst wordt ze precies getoond zoals het andere programma haar tekende; zodra u er een wijzigt, tekent CadCraft haar opnieuw in zijn eigen stijl.
- Elke indeling wordt een bladtabblad. In het andere programma heeft elke indeling een verborgen eerste viewport die het blad zelf is; CadCraft laat die weg.

### Wat nog niet binnenkomt

Alles wat CadCraft niet kan tekenen, wordt geteld, niet gegokt. Het vak "Over dit bestand" in het linkerpaneel toont het als "Nog niet getoond:" gevolgd door elke soort object en hoeveel. Typische gevallen zijn tabellen in een DXF, meshes en 3D-volumes in blokken. 3D-volumes, regio's en lichamen in de modelruimte verschijnen op het 3D-tabblad (zie [Modelleren in 3D](topic:3d-solids#solids-from-other-programs)). Viewports die in het bestand gedraaid zijn, verschijnen gedraaid, zoals daar, en behouden hun draaiing bij het opslaan; hetzelfde geldt voor het huidige UCS, de benoemde UCS'en en een gedraaide weergave.

Tekst wordt getekend in één lettertype in Helvetica-stijl. Een label dat in het smallere lettertype van het oorspronkelijke programma op één regel past, kan in CadCraft over twee regels lopen.

## Opslaan

Er zijn drie manieren om op te slaan. Elke downloadt een kopie.

- **Opslaan**: druk op {{key:Mod+S}}, klik op {{ui:Opslaan}} of typ `SAVE` (ook `QSAVE`). Het slaat op in het formaat van de tekening: DWG als u een DWG hebt geopend, DXF als u een DXF hebt geopend. Een DWG behoudt de versie waarin hij binnenkwam (een 2018-bestand wordt als 2018 opgeslagen). Een nieuwe tekening gebruikt het formaat en de DWG-versie die u het laatst in Opslaan als in deze browser hebt gekozen; hebt u er nooit een gekozen, dan DWG in het AutoCAD 2000-formaat.
- **Opslaan als**: druk op {{key:Mod+Shift+S}}, klik op {{ui:Opslaan als}} of typ `SAVEAS`. Het dialoogvenster {{ui:Een kopie opslaan als}} biedt {{ui:DWG}}, met een lijst {{ui:Versie}} (AutoCAD 2018, 2013, 2010, 2007, 2004 of 2000), {{ui:DXF R12}} en {{ui:DXF 2000}}, elk met de bestandsnaam die het geeft, en met het huidige formaat en de huidige versie van de tekening al gekozen. Klik op {{ui:Opslaan}} om te downloaden, of op {{ui:Annuleren}} (of {{key:Esc}}) om niets op te slaan; de geschiedenis zegt dan "Niet opgeslagen." Wat u kiest, blijft bewaard: {{key:Mod+S}} gebruikt het vanaf dan voor deze tekening, en nieuwe tekeningen in deze browser beginnen ermee.
- **DXFOUT**: typ `DXFOUT`. Het downloadt altijd een DXF R12-kopie, en de volgende {{key:Mod+S}} slaat nog steeds op in het eigen formaat van de tekening.

De browser downloadt `<tekeningnaam>.dwg` of `<tekeningnaam>.dxf`. Elke keer opslaan is een **nieuwe download**; het bestand dat u hebt geopend, wordt nooit overschreven of gewijzigd. De geschiedenis bevestigt het, bijvoorbeeld "Kopie opgeslagen als Plan.dwg (DWG (AutoCAD 2018)). Uw oorspronkelijke Plan.dxf is ongewijzigd." Voor een DXF staat er "(DXF R12, opent in elk CAD-programma)". De regels eronder noemen alles wat onderweg is veranderd.

Draait CadCraft in de desktopapp, dan werkt opslaan zoals in andere desktopprogramma's: {{key:Mod+S}} schrijft de tekening terug naar het bestand dat u hebt geopend, in het eigen formaat en de eigen versie, en de geschiedenis zegt waar het is opgeslagen. {{ui:Opslaan als}} en de exports tonen het opslaan-dialoogvenster van het systeem, en een `.dwg`-, `.dxf`- of `.ccsheets`-bestand waarop u dubbelklikt, opent in CadCraft.

Voor een pdf plot u in plaats daarvan (zie hieronder).

## Wat een DWG behoudt en wijzigt

CadCraft schrijft de DWG zelf, in uw browser, met dezelfde DWG-bibliotheek waarmee het leest. Kies de versie in Opslaan als: het AutoCAD 2000-formaat (bestandsversie AC1015) opent in de meeste programma's, ook oude; de nieuwere formaten (2004, AC1018, tot 2018, AC1032) behouden ook ware kleuren. Er wordt niets geüpload, en een DWG opslaan werkt offline.

Elke versie is gecontroleerd door de opgeslagen bestanden terug te lezen met de DWG-lezers van drie andere programma's en met CadCraft zelf. Een CadCraft-DWG is nog niet in AutoCAD zelf geopend.

### Wat een DWG behoudt

- Lijnen, bogen, cirkels, ellipsen, punten en polylijnen met hun boogsegmenten.
- Enkelregelige tekst met zijn uitlijning en breedtefactor.
- Meerregelige en teruglopende tekst, als meerregelige tekst. Het andere programma laat hem opnieuw teruglopen vanaf dezelfde breedte.
- Objectkleuren: ByLayer, ByBlock, de 255 standaardkleuren en ware kleuren in het 2004-formaat en later.
- Lagen met hun kleur, lijntype, lijndikte en hun aan-, bevroren-, vergrendeld- en plotinstellingen; de eigen lijntypen, lijndikten en lijntypeschalen van objecten, de lijntypepatronen en de lijntypeschaal van de tekening.
- De tekeneenheden en het lengteformaat (decimaal, feet en inches, breuken…).
- Blokken met hun basispunt en attribuutdefinities, ook onzichtbare, constante en vooraf ingestelde.
- Blokverwijzingen met hun schaal, rotatie en attribuutwaarden.
- Effen vullingen en gearceerde arceringen met hun patroon, schaal en hoek (de eigen lijnen van het patroon, zodat andere programma's dezelfde lijnen tekenen als CadCraft).
- Maatvoering, als echte maatvoering: andere programma's meten haar opnieuw op als ze wordt uitgerekt. Elke maat behoudt zijn eigen instellingen (teksthoogte, pijlgrootte, decimalen, lengteformaat) en zijn tekst, en draagt de getekende kopie die elke DWG-maat heeft.
- Bladen (indelingen): elk blad met zijn papierformaat en eenheden, wat erop is getekend en zijn viewports met hun weergave en schaal.
- Benoemde weergaven.
- Multileiders, als multileiders.
- Laag- en bloknamen zoals u ze typte, in hoofd- en kleine letters. (DXF R12 schrijft ze in hoofdletters.)

### Wat een DWG wijzigt

Elk hiervan wordt na het opslaan in de geschiedenis genoemd, wanneer het op uw tekening van toepassing is.

| In CadCraft | In de opgeslagen DWG |
|---|---|
| Ware kleuren (gekozen met de kleurkiezer), in het 2000-formaat | De dichtstbijzijnde standaardkleur: het 2000-formaat heeft alleen de 255. Sla op als 2004 of later om ze te behouden |
| Benoemde weergaven van een blad | Weergaven van de papierruimte: een DWG zegt niet welk blad, dus als CadCraft het bestand weer opent, horen ze bij het eerste blad |
| Meerregelige tekst met een breedtefactor | Normale letterbreedte: in een DWG geldt de breedtefactor alleen voor enkelregelige tekst |
| Laag- of bloknamen met tekens die DWG niet toestaat | Gewijzigd: een naam uit een gekoppelde tekening zoals `Base\|Walls` wordt `Base$0$Walls` (zoals het inbinden van een gekoppelde tekening hem noemt), en andere tekens worden `_` |

### Waarom R12, en wat er wordt omgezet

Als u opslaat als DXF, schrijft CadCraft DXF R12, de versie die elk CAD-programma kan openen. Die is ouder dan sommige functies, dus een paar dingen worden in een eenvoudiger vorm geschreven:

| In CadCraft | In het opgeslagen R12-bestand |
|---|---|
| Meerregelige tekst | Eén tekstobject per regel |
| Ellipsen | Polylijnen die de ellips volgen |
| Arceringen (uit geopende bestanden) | Alleen hun omtrekken |
| Ware kleuren (gekozen met de kleurkiezer) | De dichtstbijzijnde standaardkleur |
| Lijndikten en de eigen lijntypeschalen van objecten | Weggelaten: R12 heeft geen van beide (lijntypen blijven behouden) |
| Laag- en bloknamen | In hoofdletters geschreven; spaties en andere tekens worden `_`, en namen worden afgekapt tot 31 tekens ("Title block" wordt `TITLE_BLOCK`) |
| Lagen die niet geplot worden | Andere programma's plotten ze wel (CadCraft onthoudt de instelling als de tekening een blad heeft) |
| Maatvoering | Echte maatvoering met een eigen getekend blok, zodat andere programma's haar tonen zoals u haar ziet |
| Multileiders | De lijnen, pijlpunt en tekst die ze tekenen |
| Benoemde weergaven | Behouden, met namen in hoofdletters; de weergaven van een blad komen terug op het eerste blad |
| Meerdere bladen | Het eerste blad is de papierruimte die elk programma toont; de andere blijven behouden als blokken met de namen `CCLAYOUT_1`, `CCLAYOUT_2` … die CadCraft weer in bladen omzet als het het bestand opent |

De geschiedenis noemt elk hiervan dat op uw tekening van toepassing was.

:::tip
Om meerdere dagen aan een tekening door te werken, slaat u op als DXF en opent u die DXF de volgende keer. Alles wat CadCraft kan tekenen, overleeft de heen-en-terugreis, inclusief maatvoering, blokken en alle bladen.
:::

## Gekoppelde tekeningen (externe referenties)

{{cmd:XATTACH}} (`XA`, of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Een tekening koppelen (xref)}}) koppelt een andere DWG of DXF: kies het bestand en klik dan waar het komt ({{key:Enter}} zet het op 0,0). Het komt binnen als één blok genoemd naar het bestand, op de juiste schaal als de twee tekeningen verschillende eenheden hebben. De lagen en blokken ervan behouden hun namen met de naam van de koppeling ervoor — `Plan|Walls`, `Plan|Door` — zodat ze nooit met de uwe vermengen: zet de gekoppelde lagen aan en uit, bevries of vergrendel ze zoals uw eigen lagen. Een koppeling is alleen-lezen: wijzig de andere tekening en laad hem opnieuw. Wat u op de lagen van een koppeling instelt (kleur, lijntype, lijndikte, aan/uit, bevriezen, vergrendelen, plotten) blijft behouden wanneer u hem opnieuw laadt, wanneer u de tekening als DWG opslaat terwijl de koppeling nog een koppeling is en wanneer een andere tekening deze koppelt.

{{cmd:XREF}} (`XR`): `?` toont de koppelingen (geladen of niet, welk bestand, hoeveel verwijzingen); `A` koppelt; `R` laadt er een opnieuw uit zijn bestand (kies het bestand opnieuw: de browser kan zelf niet bij uw mappen); `B` bindt er een in (hij wordt gewone blokken en lagen met de namen `Plan$0$Walls`); `D` koppelt er een los (zijn verwijzingen en lagen verdwijnen). Elk is één stap ongedaan maken.

{{cmd:XCLIP}} (`XC`) knipt blokverwijzingen en koppelingen bij: selecteer ze, `N` voor een nieuwe begrenzing, daarna `R` en twee hoeken of `P` en de punten van een veelhoek ({{key:Enter}} sluit hem); `D` verwijdert de clip. Alleen wat erbinnen ligt, wordt getoond en geplot, en de clip verplaatst mee met de verwijzing. DWG en DXF 2000 behouden clips; DXF R12 slaat de verwijzing in zijn geheel op en zegt dat. Bindt u een koppeling met bijgeknipte verwijzingen in, dan vraagt {{cmd:XREF}} `B`: `A` bindt alles in, `C` behoudt alleen het bijgeknipte deel van elke verwijzing (lijnen en bogen worden bij de begrenzing doorgesneden; teksten en geneste blokken blijven als hun invoegpunt erbinnen ligt).

Een tekening die u opent, kan bestanden koppelen die CadCraft niet kan zien: hij zegt hoeveel er niet zijn geladen. Gebruik {{cmd:XREF}}, `R` en kies elk bestand om ze te zien.

Bij het opslaan wordt een geladen koppeling in het bestand **ingebonden** (andere programma's zien gewone blokken en lagen met de namen `Plan$0$…`), en de geschiedenis zegt dat. Een koppeling die niet is geladen, blijft een koppeling naar zijn bestand, in DWG en DXF.

## Openen in 3D

{{ui:Weergave}} › {{ui:Meer}} › {{ui:Openen in ModelCraft}} ({{cmd:OPENIN3D}}) opent de tekening als DWG in de 3D-modelleerapp in een nieuw tabblad, zonder te uploaden. Wijzigingen die daar worden gemaakt, blijven daar; sla ze daar op. Het menu-item verschijnt alleen waar die app een overgedragen tekening kan aannemen.

## Een pdf plotten

Druk op {{key:Mod+P}}, klik op {{ui:Plotten}} of typ `PLOT`. De pdf wordt in de browser gemaakt en gedownload, of geopend in een nieuw tabblad om af te drukken. Zie [Plotten naar pdf](topic:plot-pdf).

## Waar de bestanden heen gaan

Elke keer opslaan en elke plot is een download, dus bestanden belanden waar uw browser downloads neerzet: meestal de map Downloads. Wilt u elke keer een map kiezen, wijzig dan de downloadinstelling van uw browser; [Browsers en computers](common:browsers) toont waar.

Niets wat u opent of opslaat wordt naar ons gestuurd. Zie [Waar uw bestanden heen gaan](common:your-files).

## PLN- en PLA-projectbestanden

CadCraft opent DWG- en DXF-tekeningen, niet de eigen bestanden van Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Als u er een opent, krijgt u te horen wat het is. Sla in Archicad de weergaven of indelingen die u nodig hebt op als DWG en open die hier, of exporteer het model als IFC en open het in BimCraft. Waar BimCraft het bestand kan overnemen, biedt CadCraft {{ui:Openen in BimCraft}} aan.

## Als de pagina sluit voordat u opslaat

CadCraft bewaart een kopie van elke tekening die u wijzigt, alleen in deze browser, een ogenblik nadat u stopt met bewerken. Sluit het tabblad, stopt de browser of start de computer opnieuw op voordat u opslaat, dan vraagt CadCraft de volgende keer dat het start **Uw werk herstellen?**: {{ui:Herstellen}} opent de tekening opnieuw, niet-opgeslagen, in een eigen tabblad. Door de tekening op te slaan verdwijnt haar kopie. Zie [Uw werk herstellen](common:recover).

## Online en offline

Openen, tekenen, opslaan (DWG en DXF) en plotten gebeuren allemaal op uw computer, dus ze werken zonder verbinding zodra CadCraft is geladen.

Om CadCraft helemaal zonder verbinding te gebruiken, klikt u terwijl u online bent in de balk bovenaan op {{ui:Opslaan voor offline gebruik}}. Het label telt op ("Opslaan 40 van 212") en eindigt bij "Klaar voor offline gebruik". De opgeslagen kopie bevat de DWG-lezer, in totaal circa 5 MB, dus **DWG-bestanden openen ook offline** zodra hij is opgeslagen. Klik nogmaals op de knop voor {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}}. "Kon niet opslaan" betekent dat sommige bestanden niet zijn gedownload: controleer de verbinding en klik om het opnieuw te proberen. "Offline gebruik is niet beschikbaar" betekent dat dit browservenster geen kopie kan bewaren (privévensters en sommige beheerde computers).

Zonder opgeslagen kopie wordt de DWG-lezer opgehaald de eerste keer dat u een DWG opent nadat de pagina is geladen, dus een DWG openen offline kan mislukken; DXF-bestanden hebben hem nooit nodig. Laad de pagina niet opnieuw terwijl u offline bent, tenzij CadCraft is opgeslagen.

Zie [Offline werken](common:offline) voor de details.

:::offline
U bent nu offline. Tekeningen worden normaal opgeslagen als DWG of DXF en geplot, en DXF-bestanden openen. DWG-bestanden openen als CadCraft "Klaar voor offline gebruik" toont, of als de DWG-lezer al in dit tabblad is geladen.
:::

## Beperkingen in bestanden

Beperkingen en parameters (zie [Een tekening beperken](topic:constraints)) worden opgeslagen in zowel DWG als DXF. Elk beperkt object draagt een kleine CadCraft-notitie (uitgebreide gegevens), en een ongebruikt blok genaamd `CADCRAFT_PARAMETRIC` bevat de beperkingen en de parametertabel. Andere programma's openen de tekening normaal en negeren beide; ze kunnen het ongebruikte blok verwijderen als ze opschonen. De notities verwijzen naar objecten met hun eigen sleutel, niet met de handles van het bestand, dus een programma dat handles hernummert, breekt ze niet. Heeft een ander programma een beperkt object verwijderd of gewijzigd, dan laat CadCraft de beperkingen erop vallen wanneer het het bestand opent en zegt het hoeveel. Een bestand zonder beperkingen opent zonder beperkingen.

Een schets die vanuit een onderdeelmodelleerprogramma is geëxporteerd (`.json`), opent ook: zie [Schetsen van en naar andere onderdeelmodelleerprogramma's verplaatsen](topic:solidworks-sketches).

## Nog niet beschikbaar

- Multileiders als multileiderobjecten in een opgeslagen DXF (R12 heeft ze niet: ze worden opgeslagen als wat ze tekenen).
- Afbeeldingen in een opgeslagen DXF (ze worden opgeslagen als hun kaders; DWG behoudt ze als afbeeldingen) en wipeouts die verbergen wat eronder ligt.
- Een nieuwere DXF-versie opslaan dan 2000.
- Opslaan in de cloud en synchroniseren tussen computers.

Zie [Nog niet gebouwd](topic:not-built-yet) voor de volledige lijst.
