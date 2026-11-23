---
title: Instellingen van CadCraft
summary: De instellingen die bij de tekenapp horen: cursorgrootte, waar een geplakte kopie aan de cursor hangt, wat een klik met de selectie doet, hoeveel rijen de werkbalk gebruikt, waar de opdrachtregel staat en hoe hoog hij is, een compact bovenste gebied, en de hoekaanduiding.
keywords: opdrachtregel, zwevende opdrachtregel, zwevend, vastzetten, één regel, f2, opdrachtgeschiedenis, commandline, cmdline, toparea, bovenste gebied, compact, cursorsize, volledig schermkruisdraad, cursor op volledig scherm, van rand tot rand, werkbalkrijen, werkbalkweergave, ctrl f1, instellingen, voorkeuren, opties, hoekaanduiding, assen-icoon, kubus, ucs-icoon, cursor, kruisdraad, selectievak, plakpunt, basispunt, objecten aanklikken, selectie, pickadd, shift, opnieuw instellen
from: ae1a81db
---

Open {{ui:Instellingen}} met het tandwiel in de appbalk of met {{key:Mod+,}}. Het eerste tabblad, {{ui:CadCraft}}, bevat de instellingen die bij deze app horen; {{ui:Algemeen}} bevat die welke elke app van de familie deelt (thema, tekstgrootte en breedtes van de panelen, het uiterlijk en de volgorde van de werkbalk). De instellingen van CadCraft bestaan alleen in de app: u wijzigt ze hier, en deze browser onthoudt ze. {{ui:CadCraft-instellingen opnieuw instellen}} zet elke instelling terug op het begin.

## Cursor

**Klein**, **Gemiddeld** (de start), **Groot** of **Volledig scherm**: de grootte van het kruisdraad en van het selectievak in de tekening. Een groter selectievak selecteert objecten ook van iets verder weg, wat helpt op een aanraakscherm of bij een zeer fijne tekening.

**Volledig scherm** laat de twee lijnen van het kruisdraad van rand tot rand over de tekening lopen, ook wanneer geen opdracht loopt, zodat u met het oog kunt controleren of twee dingen over het hele beeld op één lijn liggen. Met een gesplitst beeld blijven de lijnen in het venster waarin u werkt. Hetzelfde als {{cmd:CURSORSIZE}} 100 van AutoCAD: typ {{cmd:CURSORSIZE}} en 100 voor volledig scherm; een kleiner getal kiest de dichtstbijzijnde grootte (onder 5 Klein, 5 tot 9 Gemiddeld, 10 tot 99 Groot).

## Plakpunt

Waar een geplakte kopie na {{key:Mod+V}} ({{cmd:PASTECLIP}}) aan de cursor hangt, tot u klikt:

- **Linkeronderhoek** (de start): de linkeronderhoek van de omhullende van de gekopieerde objecten, zoals in AutoCAD.
- **Midden**: het midden van hun omhullende. Handig om een symbool op het oog te plaatsen.

Een kopie gemaakt met `COPYBASE` hangt altijd aan het basispunt dat u koos. {{ui:Plakken op dezelfde plaats}} ({{key:Mod+Shift+V}}) negeert deze instelling: het behoudt de oorspronkelijke coördinaten. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

## Objecten aanklikken

Wat een klik in de tekening met de selectie doet wanneer geen opdracht loopt:

- **Voegt toe aan de selectie** (de start): elke klik of elk venster voegt objecten toe; {{key:Shift}}+klik, of een {{key:Shift}}+venster, haalt ze eruit.
- **Vervangt de selectie**: een klik of venster selecteert alleen wat het aanwijst. {{key:Shift}}+klik voegt een object toe, of haalt een object dat al geselecteerd is eruit; een {{key:Shift}}+venster voegt toe.

Bij een vraag `Select objects:` binnen een opdracht voegen klikken altijd toe (en verwijdert {{key:Shift}}), wat deze instelling ook zegt. Zie [Objecten selecteren](topic:select-objects).

## Op een lege plek klikken

Wat een klik op een plek zonder object doet wanneer geen opdracht loopt. In beide gevallen begint het een selectievenster (een tweede klik maakt het af).

- **Wist de selectie** (de start): wat geselecteerd was, wordt losgelaten. Houd {{key:Shift}} ingedrukt terwijl u klikt om het te behouden.
- **Behoudt de selectie**: de selectie blijft staan, zoals in andere tekenprogramma's; het venster voegt eraan toe. Druk op {{key:Esc}} om de selectie te wissen.

## Slepen om te selecteren

Wat indrukken en slepen op een lege plek tekent:

- **Lasso** (de start): een vrije omtrek. Naar rechts eerst selecteert wat er volledig in valt, naar links eerst wat het raakt; {{key:Space}} tijdens het slepen wisselt tussen venster, kruisvenster en hekje.
- **Rechthoek**: het kader, zoals een klik en een tweede klik het tekenen.

{{cmd:LASSOMODE}} `1` of `0` stelt hetzelfde in. Zie [Lasso-selectie](topic:lasso-selection).

## Slepen om bij te snijden en te verlengen

Wat indrukken op een lege plek en slepen doet in {{cmd:TRIM}} en {{cmd:EXTEND}}:

- **Een pad** (de start): een vrij pad; elk stuk dat het kruist, wordt bijgesneden (of verlengd).
- **Een venster**: een kader; elk stuk dat het raakt, wordt bijgesneden, zoals de optie `C` doet.

Zie [Bijsnijden en verlengen](topic:trim-and-extend).

## Positie van de werkbalk

{{ui:CadCraft}} › {{ui:Positie van de werkbalk}}: **Boven** (de start, zoals het altijd was), **Onder**, **Links** of **Rechts**. Links of rechts staan de werkbalkgroepen in een kolom die scrolt wanneer ze hoger is dan het venster, en de knoppen lopen twee of drie per regel. De keuze wordt met uw instellingen bewaard, en {{cmd:TOOLBARDOCK}} (`TBDOCK`) stelt haar in vanaf de opdrachtregel. {{ui:Algemeen}} › {{ui:De indeling terugzetten}} zet de werkbalk weer bovenaan.

De balken van de menustijlen zitten in de werkbalk en verschuiven ermee, maar de stijl {{ui:Lint}} is gemaakt om over de boven- of onderkant te lopen: aan een zijde krijgt hij een smalle kolom die scrolt. Op een telefoon blijft de werkbalk staan waar de telefoonindeling hem plaatst.

## Werkbalkrijen

Hoeveel regels de gereedschappen boven de tekening gebruiken, in de werkbalk van CadCraft en in de stijlen {{ui:Klassiek tekenen}} en {{ui:Lint}}:

- **Laten doorlopen om te passen** (de start): de gereedschappen lopen door tot de breedte van het venster.
- **2 rijen**: hoogstens twee regels. Als de gereedschappen bij deze breedte tot twee regels of minder doorlopen, lopen ze gewoon door; anders staan ze in twee rijen die zijdelings scrollen.
- **1 rij**: één regel die zijdelings scrolt, wat de tekening de meeste ruimte geeft.

{{key:Shift+Ctrl+F1}} loopt door de drie heen, en {{cmd:TOOLBARROWS}} stelt er één in. Wat de knoppen tonen (pictogrammen en tekst, alleen pictogrammen, of alleen tekst) is een instelling van {{ui:Algemeen}} › {{ui:Werkbalk}}; {{key:Ctrl+F1}} loopt erdoor heen, en {{cmd:TOOLBAR}} stelt het in.

## Opdrachtregel

De opdrachtregel kan onder de tekening vastgezet blijven, zoals altijd, of erover heen zweven, en hij kan zo dun zijn als één regel.

- **Zwevend maken.** Sleep het handvat aan zijn linkeruiteinde de tekening in, of kies {{ui:Zwevend over de tekening}} in zijn menu {{ui:Opties opdrachtregel}} (de drie puntjes aan zijn rechteruiteinde). Sleep het handvat opnieuw om hem te verplaatsen; zijn plaats blijft behouden wanneer het venster van grootte verandert. Sleep zijn rechterrand om hem breder of smaller te maken. Zet hem op de statusbalk, of kies {{ui:Onderaan vastzetten}}, om hem weer vast te zetten.
- **Dunner of hoger maken.** Sleep aan zijn bovenrand: elke stap is één regel geschiedenis. Tot nul regels is hij een **opdrachtregel van één regel**: alleen de vraag en wat u typt, en een nieuw bericht verschijnt er even boven. Dubbelklikken op de bovenrand wisselt tussen één regel en de hoogte die u had.
- **De geschiedenis.** {{key:F2}}, of de klokknop op de opdrachtregel ({{ui:Opdrachtgeschiedenis (F2)}}), opent de hele geschiedenis boven de regel (onder de regel wanneer die zwevend bij de bovenkant van het venster staat). Typen gaat nog steeds naar de opdrachtregel; {{key:PageUp}} en {{key:PageDown}} scrollen de geschiedenis, en {{key:Esc}}, {{key:F2}} of een klik elders sluit ze. Een eigen sneltoets op F2 wint hiervan.
- **Vanaf het toetsenbord.** Het handvat is een knop: als het de focus heeft, verplaatsen de pijltoetsen een zwevende opdrachtregel (met {{key:Shift}} in grotere stappen); {{key:Up}} laat een vastgezette regel zweven en {{key:Down}} aan de onderrand zet hem vast. De bovenrand is een scheidingslijn: {{key:Up}} en {{key:Down}} voegen een regel toe of nemen er een weg, {{key:Home}} maakt hem één regel, {{key:End}} de hoogste. Schermlezers horen elk bericht, ook in de opdrachtregel van één regel.

{{ui:CadCraft}} › {{ui:Opdrachtregel}} heeft dezelfde keuzes: {{ui:Onderaan vastgezet}} of {{ui:Zwevend}}, {{ui:Getoonde geschiedenisregels}} (0 tot 12) en {{ui:Standaardhoogte}}. {{cmd:COMMANDLINE}} (`CMDLINE`) stelt ze in vanaf de opdrachtregel. De plaats en de hoogte worden voor CadCraft in deze browser bewaard, samen met de rest van de indeling, zodat een bewaarde werkomgeving ze meeneemt; {{ui:Algemeen}} › {{ui:De indeling terugzetten}} zet de opdrachtregel weer vast op zijn standaardhoogte. Op een telefoon blijft de opdrachtregel vastgezet met één regel geschiedenis; de knop voor de geschiedenis werkt daar ook.

{{ui:CadCraft}} › {{ui:Optieletters}} bewaart de letters die u voor opdrachtopties koos: {{ui:Bewerken…}} opent het bestand, {{ui:Importeren…}} vervangt het door een bestand dat u kiest, en {{ui:Exporteren}} slaat het op. Zie [Geef opdrachtopties uw eigen letters](topic:option-letters).

Wanneer het venster laag is en de controle van de indeling een compactere indeling voorstelt, zet de knop {{ui:Ja}} daarvan de opdrachtregel ook op één regel, als de tekening na de werkbalken nog steeds te kort is.

## Bovenste gebied

{{ui:CadCraft}} › {{ui:Bovenste gebied}}: **Standaard** (de start) of **Compact**. Compact houdt de balken boven de tekening klein in elke menustijl: de groepsnamen en de woorden onder de pictogrammen verdwijnen (de infokaartjes en schermlezers hebben ze nog steeds) en de knoppen worden strakker. Het werkt samen met [Werkbalkrijen](topic:settings#toolbar-rows): Compact en **1 rij** geven de tekening de meeste ruimte. {{cmd:TOPAREA}} stelt het in.

## Hoekaanduiding

Wat er in de hoek van de tekening staat:

- **Automatisch** (de start): het assen-icoon op het tabblad {{ui:Model}} en de kubus-weergave op het tabblad {{ui:3D}}.
- **Assen-icoon**: de X- en Y-markering linksonder op het tabblad {{ui:Model}}, en een kleine X-, Y- en Z-markering op het tabblad {{ui:3D}}.
- **Kubus-weergave**: een kubus rechtsboven op beide tabbladen. Op het tabblad {{ui:Model}} toont hij de tekening van boven, en klikken op een andere zijde, rand of hoek opent het tabblad {{ui:3D}} vanuit die kant. Op het 3D-tabblad draait hij met de weergave: klik om van een zijde te kijken, sleep om te draaien, en het huisje brengt de weergave terug naar de isometrische weergave. Zie [Model in 3D](topic:3d-solids).
- **Geen**: niets in de hoek.

Bladen tonen geen van beide.

## Lengte en oppervlakte van de selectie

- **In de statusbalk** (de start): als objecten geselecteerd zijn, toont de statusbalk hun totale lengte en de totale oppervlakte van de gesloten objecten. Zie [Totalen van een selectie](topic:properties-panel#totals-of-a-selection).
- **Verborgen**: de statusbalk laat ze weg. Eigenschappen toont ze nog steeds voor meerdere objecten.

## Raster, ortho en snaps

Deze staan niet in het dialoogvenster: de knoppen {{ui:Raster}}, {{ui:Ortho}} en {{ui:Snap}} in de statusbalk (of {{key:F7}}, {{key:F8}}, {{key:F3}}) en de lijst met objectsnaps ernaast worden onthouden zoals u ze verlaat. Zie [Snappen op punten van objecten](topic:object-snaps).
