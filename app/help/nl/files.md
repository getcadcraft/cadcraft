---
title: "Bestanden: wat wordt geopend, wat wordt opgeslagen"
summary: De indelingen die CadCraft opent, opslaat en exporteert, wat behouden of omgezet wordt, en waar de bestanden terechtkomen.
keywords: xclip, clip, xclip-grens, bind ingesloten, dwg, dxf, pdf, r12, openen, opslaan, exporteren, importeren, indelingen, conversie, downloaden, saveas, dxfout, opslaan als, indeling, qsave, xref, xattach, gekoppelde tekening, externe verwijzing, binden, opnieuw laden, loskoppelen
from: b8c5778d
---

## In het kort

| Indeling | Openen | Opslaan | Opmerkingen |
|---|---|---|---|
| DXF (tekst of binair, elke versie) | Ja | Ja, als DXF R12, DXF 2000 of DXF 2000 (binair) | Een binaire DXF opent als een tekstversie en wordt weer als binair opgeslagen. |
| DWG | Ja | Ja, als DWG (AutoCAD 2000, 2004, 2007, 2010, 2013 of 2018) | Gelezen en geschreven door de eigen DWG-bibliotheek van CadCraft (AutoCAD R13 tot 2018-bestanden). Uw DWG wordt nooit gewijzigd. Beschadigde bestanden, of versies die de lezer niet aankan, worden geweigerd met een melding. |
| PDF | Brengt een pagina binnen: als onderlegger of als objecten ([PDF-onderleggers](topic:pdf-underlay)) | Ja, door te plotten | Vector-PDF van een blad, of van het model op een schaal. |

Elke tekening die u opent (of start met {{ui:Nieuw}}) krijgt een eigen tabblad boven het tekengebied; een nieuwe tekening die niemand nog heeft aangeraakt, wordt gebruikt in plaats van een extra tabblad toe te voegen. Klik op een tabblad om te wisselen, op het {{ui:×}} om het te sluiten (CadCraft vraagt eerst als er niet-opgeslagen wijzigingen zijn), of zet de open tekeningen naast elkaar: zie [Scherm splitsen](topic:split-screen).

## Een tekening openen

- Druk op {{key:Mod+O}}, klik op {{ui:Openen}}, of typ `OPEN`, en kies daarna het bestand.
- Of sleep een `.dwg`- of `.dxf`-bestand naar het tekengebied.

Het bestand wordt in uw browser gelezen. Het wordt nergens geüpload. De geschiedenis meldt hoeveel objecten en lagen er zijn binnengekomen en hoe lang het duurde, en het gedeelte {{ui:Tekening}} van het linkerpaneel toont de indeling, bijvoorbeeld "DWG 2018 (AC1032)".

De DWG-lezer is onderdeel van CadCraft en wordt opgehaald met de eerste DWG die u opent nadat de pagina is geladen (een paar honderd KB), dus er is geen aparte download om op te wachten. Hij leest het bestand op de achtergrond, zodat de pagina blijft reageren terwijl een grote DWG opent.

Een DXF wordt in stukken van ongeveer 4 MB gelezen, nooit als één blok tekst, dus een DXF van meer dan 512 MB opent ook. Wat de grens bepaalt is het geheugen van uw computer: terwijl een DXF opent, reken op ongeveer 16 tot 20 keer de bestandsgrootte (een DXF van 100 MB met ongeveer 690,000 objecten gebruikte in onze test ongeveer 1.5 GB).

### Wat er binnenkomt

- Lijnen, bogen, cirkels, polylijnen (met boogsegmenten), ellipsen, punten, tekst en meerregelige tekst, solids, arceringen (de standaardpatronen getekend als hun lijnen, andere als een vlakke toon), blokverwijzingen met hun attributen (waarden die u kunt bewerken; zie [Blokattributen](topic:attributes)), maatvoeringen, en indelingen (layouts) met hun viewports.
- Splines komen binnen als splines (graad, besturingspunten, knopen, gewichten, passpunten); zie [Splines en polylijnen](topic:splines).
- Multileaders met één leiderlijn en tekst komen binnen als CadCraft-multileaders die u kunt bewerken (zie {{cmd:MLEADER}}). Andere (met een blok, meerdere leiderlijnen of gebogen lijnen) worden getekend zoals het andere programma ze tekende, en bewegen als één geheel; de geschiedenis zegt hoeveel het er zijn.
- Afbeeldingen (images) tonen als een kader met de bestandsnaam van de afbeelding, totdat u CadCraft het bestand geeft met {{cmd:IMAGE}}: zie [Rasterafbeeldingen in een tekening](topic:pictures#show-the-pictures-a-dwg-uses). Wipeouts tonen als hun kader, en wat eronder ligt blijft zichtbaar.
- Tabellen in een DWG komen binnen zoals het andere programma ze tekende.
- 3D-vlakken in de modelruimte komen binnen op het tabblad {{ui:3D}}, niet als 2D-objecten; dat geldt ook voor die binnen blokken, één keer per blokverwijzing in het model. In een blok en op een blad worden ze ook vlak getekend, als contouren. Zie [Model in 3D](topic:3d-solids).
- Lagen behouden hun kleur, aan/uit, bevroren, vergrendeld en plotinstellingen. DEFPOINTS wordt nooit geplot.
- Maatvoeringen worden echte, bewerkbare CadCraft-maatvoeringen waar hun punten gelezen kunnen worden. Ze worden eerst precies getoond zoals het andere programma ze tekende; zodra u er een wijzigt, tekent CadCraft hem opnieuw in de eigen stijl.
- Elke indeling wordt een bladtabblad. In het andere programma heeft elke indeling een verborgen eerste viewport die het blad zelf is; CadCraft laat die weg.

### Wat nog niet binnenkomt

Alles wat CadCraft niet kan tekenen wordt geteld, niet geraden. Het vak "Over dit bestand" in het linkerpaneel vermeldt het als "Nog niet getoond:", gevolgd door elk soort object en hoeveel. Typische gevallen zijn tabellen in een DXF, meshes en 3D-solids binnen blokken. 3D-solids, regio's en lichamen in de modelruimte worden op het tabblad 3D getoond (zie [Model in 3D](topic:3d-solids#solids-from-other-programs)). Viewports die in het bestand gedraaid zijn, worden gedraaid getoond, zoals daar, en behouden hun draai bij het opslaan; dat geldt ook voor de huidige UCS, de benoemde UCS'en en een gedraaide weergave.

Tekst wordt getekend in één Helvetica-achtig lettertype. Een label dat op één regel past in het smallere lettertype van het oorspronkelijke programma, kan in CadCraft op twee regels vallen.

## Opslaan

Er zijn drie manieren om op te slaan. Elk daarvan downloadt een kopie.

- **Opslaan**: druk op {{key:Mod+S}}, klik op {{ui:Opslaan}}, of typ `SAVE` (ook `QSAVE`). Het slaat op in de indeling van de tekening: DWG als u een DWG opende, DXF als u een DXF opende. Een DWG behoudt de versie waarin hij binnenkwam (een bestand van 2018 wordt opgeslagen als 2018). Een nieuwe tekening gebruikt de indeling en DWG-versie die u het laatst koos bij {{ui:Opslaan als}} in deze browser; als u er nooit een koos, DWG in de AutoCAD 2000-indeling.
- **Opslaan als**: druk op {{key:Mod+Shift+S}}, klik op {{ui:Opslaan als}}, of typ `SAVEAS`. Het dialoogvenster {{ui:Een kopie opslaan als}} biedt {{ui:DWG}} aan, met een lijst {{ui:Versie}} (AutoCAD 2018, 2013, 2010, 2007, 2004 of 2000), {{ui:DXF R12}} en {{ui:DXF 2000}}, elk met de bestandsnaam die het krijgt, en de huidige indeling en versie van de tekening al gekozen. Klik op {{ui:Opslaan}} om te downloaden, of op {{ui:Annuleren}} (of {{key:Esc}}) om niets op te slaan; de geschiedenis zegt dan "Niet opgeslagen." Wat u kiest blijft gelden: {{key:Mod+S}} gebruikt het voor deze tekening vanaf dan, en nieuwe tekeningen in deze browser beginnen ermee.
- **DXFOUT**: typ `DXFOUT`. Dit downloadt altijd een kopie in DXF R12, en de volgende {{key:Mod+S}} slaat nog steeds op in de eigen indeling van de tekening.

De browser downloadt `<drawing name>.dwg` of `<drawing name>.dxf`. Elke keer opslaan is een **nieuwe download**; het bestand dat u opende wordt nooit overschreven of gewijzigd. De geschiedenis bevestigt dat, bijvoorbeeld "Kopie opgeslagen als Plan.dwg (DWG (AutoCAD 2018)). Uw origineel Plan.dxf is ongewijzigd." Voor een DXF staat er "(DXF R12, opent in elk CAD-programma)". De regels eronder vermelden alles wat onderweg is gewijzigd.

Wanneer CadCraft in de desktop-app draait, werkt opslaan zoals in andere desktopprogramma's: {{key:Mod+S}} schrijft de tekening terug naar het bestand dat u opende, in de eigen indeling en versie, en de geschiedenis zegt waar het is opgeslagen. {{ui:Opslaan als}} en de exports tonen het systeemvenster voor opslaan, en een `.dwg`-, `.dxf`- of `.ccsheets`-bestand waarop u dubbelklikt, opent in CadCraft.

Voor een PDF plot u in plaats daarvan (zie hieronder).

## Wat een DWG behoudt en wijzigt

CadCraft schrijft de DWG zelf, in uw browser, met dezelfde DWG-bibliotheek waarmee het leest. Kies de versie bij {{ui:Opslaan als}}: de AutoCAD 2000-indeling (bestandsversie AC1015) opent in de meeste programma's, ook oude; de nieuwere indelingen (2004, AC1018, tot 2018, AC1032) behouden ook ware kleuren. Er wordt niets geüpload, en een DWG opslaan werkt offline.

Elke versie wordt gecontroleerd door de opgeslagen bestanden terug te lezen met de DWG-lezers van drie andere programma's en met CadCraft zelf. Een CadCraft-DWG is nog niet in AutoCAD zelf geopend.

### Wat een DWG behoudt

- Lijnen, bogen, cirkels, ellipsen, punten, en polylijnen met hun boogsegmenten.
- Enkelregelige tekst met uitlijning en breedtefactor.
- Meerregelige en omgeslagen tekst, als meerregelige tekst. Het andere programma slaat de tekst opnieuw om vanaf dezelfde breedte.
- Objectkleuren: op laag, op blok, de 255 standaardkleuren, en ware kleuren in de 2004-indeling en later.
- Lagen met hun kleur, lijntype, lijndikte en hun aan-, bevroren-, vergrendeld- en plotinstellingen; de eigen lijntypen, lijndikten en lijntypeschalen van objecten, de lijntypepatronen en de lijntypeschaal van de tekening.
- De tekeneenheden en het lengteformaat (decimaal, voet en inch, breuken…).
- Blokken met hun basispunt en attribuutdefinities, inclusief onzichtbare, constante en vooraf ingestelde.
- Blokverwijzingen met hun schaal, rotatie en attribuutwaarden.
- Volle vulling en gepatroneerde arceringen met hun patroon, schaal en hoek (de eigen lijnen van het patroon, zodat andere programma's dezelfde lijnen tekenen als CadCraft).
- Maatvoeringen, als echte maatvoeringen: andere programma's meten ze opnieuw als ze worden uitgerekt. Elk behoudt zijn eigen instellingen (teksthoogte, pijlgrootte, decimalen, lengteformaat) en zijn tekst, en draagt de getekende kopie die elke DWG-maatvoering heeft.
- Bladen (indelingen): elk blad met zijn papierformaat en eenheden, wat erop getekend is, en zijn viewports met hun weergave en schaal.
- Benoemde weergaven.
- Multileaders, als multileaders.
- Laag- en blocknamen zoals u ze typte, in hoofd- en kleine letters. (DXF R12 schrijft ze in hoofdletters.)

### Wat een DWG wijzigt

Elk hiervan staat in de geschiedenis na het opslaan, wanneer het op uw tekening van toepassing is.

| In CadCraft | In de opgeslagen DWG |
|---|---|
| Ware kleuren (gekozen met de kleurkiezer), in de 2000-indeling | De dichtstbijzijnde standaardkleur: de 2000-indeling heeft alleen de 255. Sla op als 2004 of later om ze te behouden |
| Benoemde weergaven van een blad | Weergaven in de papierruimte: een DWG zegt niet welk blad, dus wanneer CadCraft het bestand opnieuw opent, horen ze bij het eerste blad |
| Meerregelige tekst met een breedtefactor | Normale letterbreedte: in een DWG geldt de breedtefactor alleen voor enkelregelige tekst |
| Laag- of blocknamen met tekens die DWG niet toestaat | Gewijzigd: een naam uit een gekoppelde tekening zoals `Base\|Walls` wordt `Base$0$Walls` (de manier waarop het binden van een gekoppelde tekening het noemt), en andere tekens worden `_` |

### Waarom R12, en wat er wordt omgezet

Wanneer u als DXF opslaat, schrijft CadCraft DXF R12, de versie die elk CAD-programma kan openen. Die is ouder dan sommige functies, dus een paar dingen worden in een eenvoudiger vorm geschreven:

| In CadCraft | In het opgeslagen R12-bestand |
|---|---|
| Meerregelige tekst | Eén tekstobject per regel |
| Ellipsen | Polylijnen die de ellips volgen |
| Arceringen (uit geopende bestanden) | Alleen hun contouren |
| Ware kleuren (gekozen met de kleurkiezer) | De dichtstbijzijnde standaardkleur |
| Lijndikten, en de eigen lijntypeschalen van objecten | Weggelaten: R12 heeft geen van beide (lijntypen blijven bewaard) |
| Laag- en blocknamen | In hoofdletters geschreven; spaties en andere tekens worden `_`, en namen worden afgekapt tot 31 tekens ("Title block" wordt `TITLE_BLOCK`) |
| Lagen die niet geplot worden | Andere programma's plotten ze (CadCraft onthoudt de instelling wanneer de tekening een blad heeft) |
| Maatvoeringen | Echte maatvoeringen met hun eigen getekende blok, zodat andere programma's ze tonen zoals u ze ziet |
| Multileaders | De lijnen, pijlpunt en tekst die ze tekenen |
| Benoemde weergaven | Behouden, met namen in hoofdletters; de weergaven van een blad komen terug op het eerste blad |
| Meerdere bladen | Het eerste blad is de papierruimte die elk programma toont; de andere blijven bewaard als blokken met de naam `CCLAYOUT_1`, `CCLAYOUT_2` … die CadCraft weer in bladen omzet wanneer het bestand wordt geopend |

De geschiedenis somt elk van deze op die op uw tekening van toepassing was.

:::tip
Om over meerdere dagen aan een tekening te blijven werken, slaat u op als DXF en opent u die DXF de volgende keer. Alles wat CadCraft kan tekenen overleeft die heen-en-weerweg, inclusief maatvoeringen, blokken en alle bladen.
:::

## Gekoppelde tekeningen (externe verwijzingen)

{{cmd:XATTACH}} (`XA`, of {{ui:Blokken}} › {{ui:Meer}} › {{ui:Een tekening koppelen (xref)}}) koppelt een andere DWG of DXF: kies het bestand en klik daarna waar het moet komen ({{key:Enter}} zet het op 0,0). Het komt binnen als één blok met de naam van het bestand, op de juiste schaal wanneer de twee tekeningen verschillende eenheden hebben. Hun lagen en blokken houden hun namen, met de naam van de koppeling ervoor — `Plan|Walls`, `Plan|Door` — zodat ze nooit met de uwe mengen: zet de gekoppelde lagen aan en uit, bevries of vergrendel ze zoals uw eigen lagen. Een koppeling is alleen-lezen: wijzig de andere tekening en laad hem opnieuw. Wat u instelt op de lagen van een koppeling (kleur, lijntype, lijndikte, aan/uit, bevriezen, vergrendelen, plotten) blijft behouden wanneer u opnieuw laadt, wanneer u de tekening als DWG opslaat terwijl de koppeling nog een koppeling is, en wanneer een andere tekening deze koppelt.

{{cmd:XREF}} (`XR`): `?` somt de koppelingen op (geladen of niet, welk bestand, hoeveel verwijzingen); `A` koppelt; `R` laadt er één opnieuw uit zijn bestand (kies het bestand opnieuw: de browser kan zelf niet bij uw mappen); `B` bindt er één (hij wordt gewone blokken en lagen met de naam `Plan$0$Walls`); `D` ontkoppelt er één (zijn verwijzingen en lagen verdwijnen). Elk is één stap ongedaan maken.

{{cmd:XCLIP}} (`XC`) knipt blokverwijzingen en koppelingen bij: selecteer ze, `N` voor een nieuwe grens, daarna `R` en twee hoeken of `P` en de punten van een veelhoek ({{key:Enter}} sluit hem); `D` verwijdert de knip. Alleen wat binnen de grens ligt, wordt getoond en geplot, en de knip beweegt mee met de verwijzing. DWG en DXF 2000 behouden knippen; DXF R12 slaat de verwijzing heel op en zegt dat. Wanneer u een koppeling met geknipte verwijzingen bindt, vraagt {{cmd:XREF}} `B` het volgende: `A` bindt alles, `C` houdt alleen het geknipte deel van elke verwijzing (lijnen en bogen worden bij de grens afgesneden; teksten en geneste blokken blijven wanneer hun invoegpunt binnen ligt).

Een tekening die u opent, kan bestanden koppelen die CadCraft niet kan zien: er staat hoeveel er niet geladen zijn. Gebruik {{cmd:XREF}}, `R` en kies elk bestand om ze te zien.

Wanneer u opslaat, wordt een geladen koppeling **gebonden** in het bestand (andere programma's zien gewone blokken en lagen met de naam `Plan$0$…`), en de geschiedenis zegt dat. Een koppeling die niet geladen is, blijft een koppeling naar zijn bestand, in DWG en DXF.

## Openen in 3D

{{ui:Weergave}} › {{ui:Meer}} › {{ui:Openen in ModelCraft}} ({{cmd:OPENIN3D}}) opent de tekening in de 3D-modelleerapp in een nieuw tabblad, als DWG, zonder te uploaden. Wijzigingen die daar worden gemaakt, blijven daar; sla ze daar op. Het menu-item toont alleen waar die app een overgedragen tekening kan overnemen.

## Een PDF plotten

Druk op {{key:Mod+P}}, klik op {{ui:Plotten}}, of typ `PLOT`. De PDF wordt in de browser gemaakt en gedownload, of geopend in een nieuw tabblad om af te drukken. Zie [Plotten naar PDF](topic:plot-pdf).

## Waar de bestanden naartoe gaan

Elke opslag en elke plot is een download, dus bestanden belanden waar uw browser downloads plaatst: meestal de map Downloads. Om elke keer een map te kiezen, wijzigt u de downloadinstelling van uw browser; [Browsers en computers](common:browsers) laat zien waar.

Niets wat u opent of opslaat, wordt naar ons gestuurd. Zie [Waar uw bestanden naartoe gaan](common:your-files).

## PLN- en PLA-projectbestanden

CadCraft opent DWG- en DXF-tekeningen, niet de eigen bestanden van Archicad (`.pln`, `.pla`, `.tpl`, `.bpn`). Bij het openen van zo'n bestand vertelt het wat het is. Sla in Archicad de weergaven of indelingen die u nodig heeft op als DWG en open ze hier, of exporteer het model als IFC en open het in BimCraft. Waar BimCraft het bestand kan overnemen, biedt CadCraft {{ui:Openen in BimCraft}} aan.

## Als de pagina sluit voordat u opslaat

CadCraft bewaart, kort nadat u stopt met bewerken, een kopie van elke tekening die u wijzigt, alleen in deze browser. Als het tabblad sluit, de browser stopt of de computer opnieuw opstart voordat u opslaat, vraagt CadCraft de volgende keer dat het start **Uw werk herstellen?**: {{ui:Herstellen}} opent de tekening weer, niet-opgeslagen, in een eigen tabblad. De tekening opslaan verwijdert de kopie ervan. Zie [Uw werk herstellen](common:recover).

## Online en offline

Openen, tekenen, opslaan (DWG en DXF) en plotten gebeuren allemaal op uw computer, dus ze werken zonder verbinding zodra CadCraft is geladen.

Om CadCraft helemaal zonder verbinding te gebruiken, klikt u terwijl u online bent op {{ui:Opslaan voor offline gebruik}} in de balk bovenaan. Het label telt op ("Opslaan 40 van 212") en eindigt bij "Offline klaar". De opgeslagen kopie bevat de DWG-lezer, in totaal ongeveer 5 MB, dus **DWG-bestanden openen ook offline** zodra die is opgeslagen. Klik opnieuw op de knop voor {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}}. "Kon niet opslaan" betekent dat sommige bestanden niet zijn gedownload: controleer de verbinding en klik om het opnieuw te proberen. "Offline niet beschikbaar" betekent dat dit browservenster geen kopie kan bewaren (privévensters en sommige beheerde computers).

Zonder opgeslagen kopie wordt de DWG-lezer de eerste keer opgehaald dat u een DWG opent nadat de pagina is geladen, dus een DWG offline openen kan mislukken; DXF-bestanden hebben hem nooit nodig. Herlaad de pagina niet terwijl u offline bent, tenzij CadCraft is opgeslagen.

Zie [Werken offline](common:offline) voor de details.

:::offline
U bent nu offline. Tekeningen worden opgeslagen als DWG of DXF en plotten normaal, en DXF-bestanden openen. DWG-bestanden openen als CadCraft "Offline klaar" toont, of als de DWG-lezer al in dit tabblad is geladen.
:::

## Beperkingen in bestanden

Beperkingen en parameters (zie [Een tekening beperken](topic:constraints)) worden in zowel DWG als DXF opgeslagen. Elk beperkt object draagt een kleine CadCraft-notitie (uitgebreide gegevens), en een ongebruikt blok met de naam `CADCRAFT_PARAMETRIC` bevat de beperkingen en de parametertabel. Andere programma's openen de tekening gewoon en negeren beide; ze kunnen het ongebruikte blok verwijderen bij het opschonen. De notities verwijzen naar objecten met hun eigen sleutel, niet naar de handles van het bestand, dus een programma dat handles hernummert breekt ze niet. Wanneer een ander programma een beperkt object heeft verwijderd of gewijzigd, verwijdert CadCraft de beperkingen erop bij het openen van het bestand en zegt het hoeveel. Een bestand zonder die beperkingen opent zonder beperkingen.

Een schets die vanuit een onderdelenmodelleerprogramma is geëxporteerd (`.json`), opent ook: zie [Schetsen naar en van andere onderdelenmodelleerprogramma's verplaatsen](topic:solidworks-sketches).

## Nog niet beschikbaar

- Multileaders als multileaderobjecten in een opgeslagen DXF (R12 heeft die niet: ze worden opgeslagen als wat ze tekenen).
- Afbeeldingen in een opgeslagen DXF (ze worden opgeslagen als hun kaders; DWG behoudt ze als afbeeldingen), en wipeouts die wat eronder ligt verbergen.
- Opslaan van een nieuwere DXF-versie dan 2000.
- Cloudopslag en synchronisatie tussen computers.

Zie [Nog niet beschikbaar](topic:not-built-yet) voor de volledige lijst.
