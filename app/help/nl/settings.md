---
title: Instellingen van CadCraft
summary: De instellingen die bij de tekenapp horen: cursorgrootte, waar een geplakte kopie aan de cursor hangt, wat een klik met de selectie doet, hoeveel rijen de werkbalk gebruikt, waar de opdrachtregel staat en hoe hoog die is, een compacte bovenkant en de hoekindicator.
keywords: opdrachtregel, zwevende opdrachtregel, zweven, vastzetten, één regel, f2, opdrachtgeschiedenis, commandline, cmdline, toparea, bovenste gebied, compact, cursorsize, volledig scherm, kruisdraad, rand tot rand, werkbalkrijen, werkbalkweergave, ctrl f1, instellingen, voorkeuren, opties, hoekindicator, weergavekubus, asicoon, cursor, kruisdraad, pickbox, plakpunt, basispunt, objecten aanklikken, selectie, pickadd, shift, opnieuw instellen
from: 0896eb42
---

{{ui:Instellingen}} opent u met het tandwiel in de appbalk of met {{key:Mod+,}}. Het eerste tabblad, {{ui:CadCraft}}, bevat de instellingen die bij deze app horen. {{ui:Algemeen}} bevat de instellingen die elke app van de familie deelt (thema, tekstgrootte en breedte van panelen, en het uiterlijk en de volgorde van de werkbalk). De instellingen van CadCraft bestaan alleen in de app: u wijzigt ze hier, en deze browser onthoudt ze. {{ui:Instellingen van CadCraft opnieuw instellen}} zet elke instelling terug op het begin.

## Cursor

**Klein**, **Gemiddeld** (standaard), **Groot** of **Volledig scherm**: de grootte van de kruisdraad en van de pickbox in de tekening. Een grotere pickbox pikt objecten ook van iets verder weg op, wat helpt op een touchscreen of bij een zeer fijne tekening.

**Volledig scherm** laat de twee lijnen van de kruisdraad van rand tot rand over de tekening lopen, ook wanneer geen commando loopt. Zo controleert u met het oog of twee dingen over de hele weergave op één lijn liggen. Met een gesplitste weergave blijven de lijnen in het deelvenster waarin u werkt. Net als in AutoCAD: typ {{cmd:CURSORSIZE}} en 100 voor volledig scherm. Een kleiner getal kiest de dichtstbijzijnde grootte (onder 5 Klein, 5 tot 9 Gemiddeld, 10 tot 99 Groot).

## Plakpunt

Waar een geplakte kopie aan de cursor hangt na {{key:Mod+V}} ({{cmd:PASTECLIP}}), tot u klikt:

- **Linkerbenedenhoek** (standaard): de linkerbenedenhoek van de omvang van de gekopieerde objecten, zoals in AutoCAD.
- **Middelpunt**: het midden van hun omvang. Handig om een symbool op het oog te plaatsen.

Een kopie die u met `COPYBASE` maakt, hangt altijd aan het basispunt dat u koos. {{ui:Plakken op dezelfde plaats}} ({{key:Mod+Shift+V}}) negeert deze instelling: die behoudt de oorspronkelijke coördinaten. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

## Objecten aanklikken

Wat een klik in de tekening met de selectie doet wanneer geen commando loopt:

- **Voegt toe aan de selectie** (standaard): elke klik of elk venster voegt objecten toe. {{key:Shift}}+klik, of een {{key:Shift}}+venster, haalt ze eruit.
- **Vervangt de selectie**: een klik of venster selecteert alleen wat het pakt. {{key:Shift}}+klik voegt een object toe, of haalt een object dat al geselecteerd is eruit. Een {{key:Shift}}+venster voegt toe.

Bij een prompt `Selecteer objecten:` binnen een commando voegen klikken altijd toe (en verwijdert {{key:Shift}}), wat deze instelling ook zegt. Zie [Objecten selecteren](topic:select-objects).

## Klikken op een lege plek

Wat een klik op een plek zonder object doet wanneer geen commando loopt. In beide gevallen start die een selectievenster (een tweede klik voltooit het).

- **Wist de selectie** (standaard): wat geselecteerd was, wordt losgelaten. Houd {{key:Shift}} ingedrukt terwijl u klikt om het te behouden.
- **Behoudt de selectie**: de selectie blijft staan, zoals in andere tekenprogramma's. Het venster voegt eraan toe. Druk op {{key:Esc}} om de selectie te wissen.

## Slepen om te selecteren

Wat indrukken en slepen op een lege plek tekent:

- **Lasso** (standaard): een vrije omtrek. Naar rechts eerst selecteert wat er helemaal in ligt, naar links eerst wat het raakt. {{key:Space}} tijdens het slepen wisselt tussen venster, kruisvenster en hekje.
- **Rechthoek**: het kader, zoals een klik en een tweede klik het tekenen.

{{cmd:LASSOMODE}} `1` of `0` stelt hetzelfde in. Zie [Lassoselectie](topic:lasso-selection).

## Slepen om bij te snijden en te verlengen

Wat indrukken op een lege plek en slepen doet in {{cmd:TRIM}} en {{cmd:EXTEND}}:

- **Een pad** (standaard): een vrij pad; elk stuk dat het kruist, wordt bijgesneden (of verlengd).
- **Een venster**: een kader; elk stuk dat het raakt, wordt bijgesneden, zoals de optie `C` doet.

Zie [Bijsnijden en verlengen](topic:trim-and-extend).

## Positie van de werkbalk

{{ui:CadCraft}} › {{ui:Positie van de werkbalk}}: **Boven** (standaard, zoals het altijd is geweest), **Onder**, **Links** of **Rechts**. Aan de linker- of rechterkant stapelen de gereedschapsgroepen zich in een kolom die scrolt wanneer die hoger is dan het venster. De knoppen lopen twee of drie per regel door. De keuze wordt met uw instellingen bewaard, en {{cmd:TOOLBARDOCK}} (`TBDOCK`) stelt hem in vanaf de opdrachtregel. {{ui:Algemeen}} › {{ui:De indeling terugzetten}} zet de werkbalk weer bovenaan.

De balken van de menustijlen staan in de werkbalk en verschuiven mee. De stijl {{ui:Lint}} is echter bedoeld om boven of onder over de breedte te lopen: aan een zijkant krijgt hij een smalle kolom die scrolt. Op een telefoon blijft de werkbalk staan waar de telefoonindeling hem plaatst.

## Werkbalkrijen

Hoeveel regels de gereedschappen boven de tekening gebruiken, in de werkbalk van CadCraft en in de stijlen {{ui:Klassiek tekenen}} en {{ui:Lint}}:

- **Terugloop om te passen** (standaard): de gereedschappen lopen door op de breedte van het venster.
- **2 rijen**: maximaal twee regels. Passen de gereedschappen bij deze breedte op twee regels of minder, dan lopen ze gewoon door. Anders staan ze in twee rijen die zijwaarts scrollen.
- **1 rij**: één regel die zijwaarts scrolt, wat de tekening de meeste ruimte geeft.

{{key:Shift+Ctrl+F1}} loopt door de drie, en {{cmd:TOOLBARROWS}} stelt er één in. Wat de knoppen tonen (pictogrammen en tekst, alleen pictogrammen of alleen tekst) is een instelling van {{ui:Algemeen}} › {{ui:Werkbalk}}. {{key:Ctrl+F1}} loopt daar doorheen, en {{cmd:TOOLBAR}} stelt het in.

## Opdrachtregel

De opdrachtregel kan onder de tekening vastzitten, zoals altijd, of erover zweven, en hij kan zo dun zijn als één regel.

- **Laat hem zweven.** Sleep het grip aan het linkeruiteinde de tekening in, of kies {{ui:Zwevend over de tekening}} in het menu {{ui:Opties opdrachtregel}} (de drie puntjes aan het rechteruiteinde). Sleep het grip opnieuw om hem te verplaatsen; zijn plek blijft behouden wanneer het venster van grootte verandert. Sleep aan zijn rechterrand om hem breder of smaller te maken. Zet hem neer op de statusbalk, of kies {{ui:Onderaan vastzetten}}, om hem weer vast te zetten.
- **Maak hem dunner of hoger.** Sleep aan zijn bovenrand: elke stap is één regel geschiedenis. Tot nul regels is het een **opdrachtregel van één regel**: alleen de prompt en wat u typt, en een nieuw bericht verschijnt er even boven. Dubbelklikken op de bovenrand wisselt tussen één regel en de hoogte die u had.
- **De geschiedenis.** {{key:F2}}, of de klokknop op de opdrachtregel ({{ui:Opdrachtgeschiedenis (F2)}}), opent de hele geschiedenis boven de regel (onder de regel wanneer die dicht bij de bovenrand van het venster zweeft). Typen gaat nog steeds naar de opdrachtregel. {{key:PageUp}} en {{key:PageDown}} scrollen door de geschiedenis, en {{key:Esc}}, {{key:F2}} of een klik elders sluit hem. Een eigen sneltoets op F2 wint hiervan.
- **Vanaf het toetsenbord.** Het grip is een knop: als die focus heeft, verplaatsen de pijltjestoetsen een zwevende opdrachtregel (met {{key:Shift}} in grotere stappen). {{key:Up}} laat een vastgezette regel zweven, en {{key:Down}} aan de onderrand zet hem vast. De bovenrand is een scheidingslijn: {{key:Up}} en {{key:Down}} voegen een regel toe of halen er een weg, {{key:Home}} maakt het één regel en {{key:End}} de hoogste. Schermlezers horen nog elk bericht, ook op de opdrachtregel van één regel.

{{ui:CadCraft}} › {{ui:Opdrachtregel}} heeft dezelfde keuzes: {{ui:Onderaan vastgezet}} of {{ui:Zwevend}}, {{ui:Getoonde geschiedenisregels}} (0 tot 12) en {{ui:Standaardhoogte}}. {{cmd:COMMANDLINE}} (`CMDLINE`) stelt ze in vanaf de opdrachtregel. De plek en de hoogte worden voor CadCraft in deze browser bewaard, met de rest van de indeling, zodat een opgeslagen werkomgeving ze meeneemt. {{ui:Algemeen}} › {{ui:De indeling terugzetten}} zet de opdrachtregel vast op zijn standaardhoogte. Op een telefoon blijft de opdrachtregel vastgezet met één regel geschiedenis; de geschiedenisknop werkt daar ook.

Wanneer het venster laag is en de indelingscontrole een krappere indeling voorstelt, zet de knop {{ui:Ja}} de opdrachtregel ook op één regel als de tekening na de werkbalken nog te kort is.

## Bovenste gebied

{{ui:CadCraft}} › {{ui:Bovenste gebied}}: **Standaard** (standaard) of **Compact**. Compact houdt de balken boven de tekening klein in elke menustijl: de groepsnamen en de woorden onder de pictogrammen verdwijnen (de tooltips en schermlezers hebben ze nog), en de knoppen zijn strakker. Het werkt samen met [Werkbalkrijen](topic:settings#toolbar-rows): Compact en **1 rij** geven de tekening de meeste ruimte. {{cmd:TOPAREA}} stelt het in.

## Hoekindicator

Wat er in de hoek van de tekening staat:

- **Automatisch** (standaard): het asicoon op het tabblad {{ui:Model}} en de weergavekubus op het tabblad {{ui:3D}}.
- **Asicoon**: de X- en Y-markering linksonder op het tabblad {{ui:Model}}, en een kleine X-, Y- en Z-markering op het tabblad {{ui:3D}}.
- **Weergavekubus**: een kubus rechtsboven op beide tabbladen. Op het tabblad {{ui:Model}} toont die de tekening van bovenaf. Klikken op een andere zijde, rand of hoek opent het tabblad {{ui:3D}} vanuit die kant. Op het 3D-tabblad draait de kubus mee met de weergave: klik om vanuit een zijde te kijken, sleep om te draaien, en het huisje keert terug naar het isometrische aanzicht. Zie [Model in 3D](topic:3d-solids).
- **Geen**: niets in de hoek.

Bladen tonen geen van beide.

## Lengte en oppervlakte van de selectie

- **In de statusbalk** (standaard): als objecten zijn geselecteerd, toont de statusbalk hun totale lengte en de totale oppervlakte van de gesloten objecten. Zie [Totalen van een selectie](topic:properties-panel#totals-of-a-selection).
- **Verborgen**: de statusbalk laat ze weg. Eigenschappen toont ze voor meerdere objecten nog wel.

## Raster, Ortho en snaps

Deze staan niet in het dialoogvenster. De knoppen {{ui:Raster}}, {{ui:Ortho}} en {{ui:Snap}} op de statusbalk (of {{key:F7}}, {{key:F8}}, {{key:F3}}) en de lijst met objectsnaps ernaast worden onthouden wanneer u ze verlaat. Zie [Snappen op punten van objecten](topic:object-snaps).
