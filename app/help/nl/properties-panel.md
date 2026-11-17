---
title: Het paneel Eigenschappen
summary: Zie en wijzig alles over de geselecteerde objecten, veel tegelijk: coördinaten met Z, afmetingen, tekst, maatvoeringsinstellingen, transparantie en meer. Velden accepteren expressies en lengtes met eenheden.
keywords: totalen, totale lengte, totale oppervlakte, som, selectielengte, eigenschappen, eigenschappenpalet, ctrl+1, pr, ch, mo, ddmodify, varieert, snelle selectie, pickadd, coördinaten, z, hoogte, dikte, transparantie, materiaal, hyperlink, expressie, quickcalc, hoekpunt, maatvoeringsstijl, tolerantie, decimalen
from: 10d6a829
---

## Wat u leert

Hoe u het paneel Eigenschappen opent, één object of honderd in één stap wijzigt, exacte coördinaten (met Z) intypt, expressies en eenheden in elk getalveld gebruikt, en wat elk soort object toont.

## Het openen

Het paneel staat rechts. Om het naar voren te halen:

- Druk op {{key:Mod+1}}, of typ {{cmd:PROPERTIES}} (of `PR`, `CH`, `MO`).
- Dubbelklik op een object (tekst en multileaders openen hun teksteditor).

Het paneel is een verplaatsbaar paneel zoals de andere: sleep zijn grip om het links, rechts of onderaan vast te zetten, of zet het over de tekening om het zwevend te maken (zie [Panelen indelen en een tweede monitor gebruiken](common:arrange-panels)).

### Wegklappen

De speldknop rechts bovenaan het paneel zet **automatisch verbergen** aan: het paneel klapt in tot een strook aan de rechterrand, en de tekening krijgt de ruimte. Wijs de strook aan (of druk op {{key:Mod+1}}) en het opent over de tekening; ga weg en het klapt weer in. Klik nogmaals op de speld om het open te houden. {{cmd:PROPERTIESCLOSE}} klapt het ook in.

## Secties

Eigenschappen zijn gegroepeerd in secties die u kunt inklappen: **Algemeen**, **Geometrie**, **Tekst**, **Lijnen en pijlen**, **Passing**, **Primaire eenheden**, **Alternatieve eenheden**, **Toleranties**, **Patroon**, **Overig**, en voor blokken **Attributen** en **Bibliotheekitem**. Klik op de naam van een sectie om haar in te klappen of te openen; CadCraft onthoudt welke u heeft ingeklapt.

Sleep de dunne lijn tussen de namen en de waarden om de namen breder of smaller te maken. Dubbelklik erop om hem terug te zetten. Met het toetsenbord zet u de focus erop en gebruikt u de pijltjestoetsen.

## Een waarde wijzigen

1. Klik op een regel. De kop luidt "Lijn".
2. Klik in {{ui:Lengte}}. Tijdens het bewerken toont het veld de volledige waarde, niet de afgeronde.
3. Typ `2500` en druk op {{key:Enter}}. De lijn is nu 2500 lang, met behoud van zijn startpunt en hoek.

{{key:Enter}} of klikken elders past de waarde toe; {{key:Esc}} zet de oude waarde terug. Elke wijziging is één stap ongedaan te maken.

### Expressies en eenheden

Elk getalveld accepteert meer dan een gewoon getal:

| U typt | U krijgt |
|---|---|
| `=2*45` | 90 |
| `=sqrt(2)*100` | 141.4214 |
| `1/4`, `6-1/2` | 0.25, 6.5 |
| `12'6"`, `12'-6 1/2"` | 150, 150.5 (inches, in een tekening in ft en in) |
| `900mm`, `3.5m`, `2ft` | Omgerekend naar de eenheden van de tekening |
| `45d30'`, `45°30'15"` | 45.5°, 45.5042° (hoekvelden) |
| `0.5r`, `100g` | Radialen en gon, als graden |

Een lengte met een eenheid vereist dat de tekening eenheden heeft: stel eerst {{ui:Eenheden}} in onder {{ui:Nieuwe objecten}} (niets geselecteerd). Een ongeldige invoer wordt geweigerd met een melding onder het paneel, en er verandert niets; ze wordt nooit als 0 opgeslagen. Functies: sin, cos, tan, asin, acos, atan, atan2, sqrt, pow, exp, ln, log, abs, round, ceil, floor, min, max, if; hoeken in graden.

## Veel objecten tegelijk wijzigen

1. Selecteer meerdere objecten, bijvoorbeeld 8 lijnen en 4 maatvoeringen.
2. De kop zegt "12 objecten", en een lijst bovenaan biedt **Alles (12)**, **Lijn (8)** en **Maatvoering (4)**.
3. **Alles** toont wat elk object heeft (laag, kleur, lijntype…). Kies **Maatvoering (4)** om de maatvoeringsinstellingen te zien.
4. Wijzig een waarde, bijvoorbeeld {{ui:Decimalen}} naar `1`.

Alle vier maatvoeringen veranderen, in één stap ongedaan te maken. Een veld dat **Varieert** zegt dat de objecten verschillen; een waarde intypen zet die op allemaal. Objecten op vergrendelde lagen blijven zoals ze zijn, en de melding zegt hoeveel.

## Totalen van een selectie

Met meerdere objecten geselecteerd zegt de sectie {{ui:Totalen}} bovenaan:

- **Objecten**: hoeveel van elke soort, bijvoorbeeld "8 lijnen, 2 polylijnen, 1 cirkel".
- **Totale lengte**: de lijnen, bogen en polylijnen opgeteld (splines tellen ook mee), en hoeveel objecten dat zijn.
- **Totale oppervlakte**: de gesloten objecten opgeteld: cirkels, hele ellipsen, gesloten polylijnen en arceringen (de gaten van een arcering worden eraf getrokken).

Ze staan in het lengteformaat van de tekening (ft en in wanneer die dat gebruikt; oppervlakten dan in in² en ft²).

De statusbalk toont dezelfde lengte en oppervlakte wanneer er objecten zijn geselecteerd; {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Lengte en oppervlakte van de selectie}} › {{ui:Verborgen}} zet dat uit. Voor één object toont {{ui:Geometrie}} de eigen lengte en oppervlakte, zoals voorheen.

## Coördinaten

Elk punt toont **X**, **Y** en **Z**: begin- en eindpunt van een lijn, middelpunten, invoegpunten, tekstposities en het huidige polylijnhoekpunt. Lijnen tonen ook **Delta X**, **Delta Y** en **Delta Z** (alleen-lezen). Polylijnen en arceringen hebben een **Hoogte** (één Z voor het hele object).

De kruisknop naast de naam van een punt laat u het in de tekening kiezen: klik erop, en klik daarna de nieuwe positie aan (snaps werken). Waarden zijn wereldcoördinaten.

## Algemeen

| Veld | Wat het is |
|---|---|
| {{ui:Laag}}, {{ui:Kleur}}, {{ui:Lijntype}}, {{ui:Lijntypeschaal}}, {{ui:Lijndikte}} | Zoals in het lagenpaneel; {{ui:Op laag}} volgt de laag |
| {{ui:Transparantie}} | Op laag, op blok, of 0 tot 90% |
| {{ui:Dikte}} | Hoe ver lijnen, cirkels, bogen, polylijnen, punten en tekst zich in Z uitstrekken |
| {{ui:Materiaal}} | Op laag, op blok, Globaal of een naam die een tekening meebracht |
| {{ui:Plotstijl}} | Alleen-lezen: tekeningen worden op kleur geplot, via de [plotstijltabel](topic:plot-pdf#plot-style-tables) van het blad |
| {{ui:Hyperlink}} | Een webadres dat bij het object wordt bewaard |

## Wat elk type toont

| Geselecteerd | U kunt wijzigen |
|---|---|
| Lijn | Begin- en eind-X, Y, Z; lengte; hoek |
| Cirkel | Middelpunt; straal; diameter; omtrek; oppervlakte (elk stelt de straal in) |
| Boog | Middelpunt; straal; begin- en eindhoek; totale hoek; koorde (toont boogte en oppervlakte) |
| Ellips | Middelpunt; lange en korte straal; straalverhouding; hoek van de lange as; begin- en eindhoek |
| Polylijn | De hoekpuntenbrowser (hieronder); globale breedte; hoogte; gesloten; oppervlakte wanneer gesloten (schaalt om zijn middelpunt) |
| Tekst | Inhoud; stijl; uitlijning; hoogte; draaiing; breedtefactor; schuinhoek; gedefinieerde breedte; regelafstand; annotatief; positie |
| Blokverwijzing | Invoegpunt; draaiing; schaal X, Y, Z en uniforme schaal; attribuutwaarden |
| Arcering | Patroon; schaal; hoek; oorsprong; associatief; eilandherkenning; achtergrondkleur; hoogte |
| Maatvoering | Zie hieronder |
| Multileider | Tekst; hoogte; breedte; tekstzijde; pijlpuntgrootte; landingsafstand; pijlpuntpunt |
| Viewport | Schaal; middelpunt en grootte op het blad; weergavemiddelpunt in het model; aan; weergave vergrendeld |

### Polylijnhoekpunten

{{ui:Huidig hoekpunt}} toont bij welk hoekpunt de velden hieronder horen. Gebruik de pijlknoppen, of typ een nummer, om naar een ander hoekpunt te gaan; er is geen limiet op het aantal. Elk hoekpunt heeft X, Y, de breedte van het begin- en eindsegment, en de bolling van het segment dat daar begint (0 = recht).

## Maatvoeringen

Een maatvoering toont zijn **Maatvoeringsstijl**, wat hij meet, zijn punten, en elke instelling:

- **Lijnen en pijlen:** pijlpunt voor elk uiteinde, pijlgrootte, streepgrootte, kleuren en lijndiktes van de maatlijn en maathulplijnen, verbergen van elke helft of elke maathulplijn, verschuiving en verlenging van de maathulplijn.
- **Tekst:** overschrijving (leeg laten voor de gemeten waarde; `<>` staat ervoor in uw eigen tekst), stijl, kleur, hoogte, verschuiving, verticale en horizontale positie, altijd horizontaal, draaiing, achtergrondvulling.
- **Passing:** totale schaal, basislijnafstand, wat verschuift wanneer er weinig ruimte is, tekstverplaatsing.
- **Primaire eenheden:** formaat, decimalen, afronden, voorvoegsel, achtervoegsel, meetschaal, decimaalteken, voorloop- en volgnullen onderdrukken; voor hoeken het hoekformaat en de decimalen.
- **Alternatieve eenheden:** aan of uit, formaat, decimalen, vermenigvuldiger (25.4 zet inches om in millimeters), afronden, voorvoegsel en achtervoegsel.
- **Toleranties:** geen, symmetrisch, afwijking, grenzen of basis, met boven- en ondergrenswaarden, decimalen, hoogte en positie.

Wijzigt u een van deze op een geopende maatvoering, dan vervalt de tekening die het andere programma ervan maakte, en CadCraft tekent hem opnieuw.

:::note
De horizontale tekstpositie (naast de eerste of tweede maathulplijn) en tekst onder de lijn worden getekend bij lineaire en uitgelijnde maatvoeringen; bij andere maatvoeringen worden ze bewaard en opgeslagen maar nog niet getekend. De keuzes voor Passing worden bewaard en opgeslagen maar nog niet getekend: CadCraft plaatst tekst volgens zijn eigen regel (boven de lijn, buiten wanneer het niet past).
:::

## Niets geselecteerd

Met niets geselecteerd toont het paneel:

- **Nieuwe objecten:** de laag, kleur, lijntype, lijndikte en teksthoogte die nieuwe objecten krijgen; de eenheden en het lengteformaat van de tekening; het lijntype en de lijndikte van de actieve laag; afmetingen voor nieuwe maatvoeringen. Op een blad komen de naam, het papier en de oriëntatie van het blad eerst.
- **Weergave:** het middelpunt, de hoogte en breedte van wat op het scherm staat. Typ een waarde om de weergave daarheen te verplaatsen.
- **Overig:** het UCS-pictogram aan of uit, het UCS (altijd Wereld: CadCraft heeft nog geen eigen coördinatenstelsels) en de annotatieschaal.

## De knoppen bovenaan

| Knop | Doet |
|---|---|
| Trechter | {{cmd:QSELECT}}: selecteren op soort en eigenschap |
| Aanwijzer | {{cmd:SELECT}}: objecten selecteren op de opdrachtregel |
| Plus of 1 | Of een klik de selectie uitbreidt (plus) of vervangt (1); dezelfde instelling als bij Instellingen, {{ui:CadCraft}} |
| Speld | Automatisch verbergen, zie hierboven |

## Veelgemaakte fouten

- **Typen in een veld deed niets.** Druk op {{key:Enter}} of klik elders om het toe te passen. Een rood veld en een melding betekenen dat de invoer is geweigerd.
- **Een lengte met een eenheid wordt geweigerd.** De tekening heeft geen eenheden. Stel {{ui:Eenheden}} in met niets geselecteerd.
- **Alleen Laag en Kleur worden getoond.** Er zijn meerdere soorten objecten geselecteerd en **Alles** is gekozen. Kies één soort in de lijst bovenaan.
- **Sommige objecten zijn niet gewijzigd.** Ze staan op een vergrendelde laag. Ontgrendel de laag in het lagenpaneel.
- **Getypte letters gingen in een veld.** Zolang een veld de cursor heeft, typen toetsen daar. Druk op {{key:Enter}} of {{key:Esc}}, en typ dan het commando.
