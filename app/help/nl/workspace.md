---
title: Het CadCraft-scherm
summary: Een rondleiding langs elke balk, elk paneel en elk tabblad van de tekenapp, met de naam zoals die op het scherm staat.
keywords: scherm, interface, werkbalk, lint, panelen, opdrachtregel, statusbalk, tabbladen, indelingstabbladen, eigenschappen, lagenpaneel, rondleiding
from: b5a33388
---

Het scherm heeft zeven delen. Van boven naar beneden: de appbalk, de werkbalk, het tekengebied met aan elke kant een paneel, de tabbladen onder de tekening, de opdrachtregel en de statusbalk.

## De appbalk

De smalle balk helemaal bovenaan hoort bij de site, niet bij de tekening. Hij toont het CadCraft-merkteken, de naam van de app, welke versie u gebruikt, een koppeling naar de pagina van de app, een knop {{ui:Help}} (of {{key:F1}}), een knop {{ui:Opslaan voor offline gebruik}}, een knop {{ui:Volledig scherm}} en twee themaknoppen, {{ui:Papier}} en {{ui:Model}}.

De knop {{ui:Instellingen}} (tandwiel) bevat de eigen instellingen van CadCraft en de instellingen die alle apps delen: zie [CadCraft-instellingen](topic:settings).

{{ui:Opslaan voor offline gebruik}} bewaart een kopie van CadCraft, inclusief de DWG-lezer, in deze browser zodat het zonder verbinding opent. Het label toont de toestand: "Opslaan N van M", "Klaar voor offline gebruik", "Kon niet opslaan" of "Offline gebruik is niet beschikbaar". Zie [Offline werken](common:offline).

:::note
De knoppen {{ui:Papier}} en {{ui:Model}} in de appbalk veranderen alleen de kleuren van het scherm: {{ui:Papier}} is een licht thema, {{ui:Model}} een donker. Ze hebben niets te maken met het tabblad {{ui:Model}} onder de tekening, waarmee u wisselt tussen de tekening en haar bladen.
:::

De knop {{ui:Volledig scherm}}, of {{key:Ctrl+Shift+F}} (de Control-toets op elke computer, ook op een Mac), schakelt tussen drie schermmodi: normaal, volledig scherm en volledig scherm met verborgen balken. Zijn de balken verborgen, beweeg dan de aanwijzer naar de bovenrand van het scherm om ze terug te halen.

## De werkbalk

Onder de appbalk staat de werkbalk. Elke knop voert een opdracht uit, precies alsof u hem had getypt, dus de opdrachtregel stelt in beide gevallen dezelfde vragen. Wijs een knop aan om de opdrachtalias te zien. De groepen zijn:

| Groep | Knoppen |
|---|---|
| Bestand | {{ui:Nieuw}}, {{ui:Openen}}, {{ui:Opslaan}}, {{ui:Opslaan als}}, {{ui:Plotten}} |
| Tekenen | {{ui:Lijn}}, {{ui:Polylijn}}, {{ui:Cirkel}}, {{ui:Boog}}, {{ui:Rechthoek}}, {{ui:Veelhoek}}, {{ui:Ellips}}, {{ui:Tekst}}, {{ui:Alinea}}, {{ui:Arcering}} en {{ui:Meer}}: {{ui:Punt}}, {{ui:Hulplijn}} en {{ui:Straal}} (zie [Hulplijnen en stralen](topic:construction-lines)) |
| Wijzigen | {{ui:Verplaatsen}}, {{ui:Kopiëren}}, {{ui:Roteren}}, {{ui:Schalen}}, {{ui:Spiegelen}}, {{ui:Uitrekken}}, {{ui:Offset}}, {{ui:Bijsnijden}}, {{ui:Verlengen}}, {{ui:Afronden}}, {{ui:Afschuinen}}, {{ui:Ontbinden}}, {{ui:Wissen}} en {{ui:Meer}}: {{ui:Array}}, {{ui:Samenvoegen}}, {{ui:Eigenschappen overnemen}}, {{ui:Breken}} en {{ui:Lengte wijzigen}} |
| Annoteren | {{ui:Lineair}}, {{ui:Uitgelijnd}}, {{ui:Hoek}}, {{ui:Radius}}, {{ui:Diameter}} (maatvoering), {{ui:Leider}} (multileider) en {{ui:Meer}}: {{ui:Maatvoering doortrekken}}, {{ui:Basismaatvoering}} en {{ui:Revisiewolk}} |
| Parametrisch | {{ui:Auto}}, {{ui:Beperken}}, {{ui:Maatvoering}}, {{ui:Parameters}} en {{ui:Meer}} met elke beperking (zie [Een tekening beperken](topic:constraints)) |
| Blokken | {{ui:Maken}}, {{ui:Invoegen}}, {{ui:Bibliotheek}} en {{ui:Meer}}: {{ui:Blok bewerken}} en {{ui:Kenmerk definiëren}} |
| Bladen | {{ui:Nieuw blad}}, {{ui:Viewport}} |
| Bewerken | {{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}} (naar het klembord), {{ui:Plakken}} en {{ui:Meer}}: een menu met {{ui:Knippen}}, {{ui:Kopiëren}}, {{ui:Plakken}}, {{ui:Plakken op dezelfde plaats}}, {{ui:Dupliceren en verplaatsen}}, {{ui:Verwijderen}}, {{ui:Alles selecteren}}, {{ui:Selectie opheffen}}, {{ui:Snelle selectie}}, {{ui:Gelijke selecteren}} en {{ui:Zoeken en vervangen}}, elk met zijn toets |
| Weergave | {{ui:Alles tonen}}, {{ui:Venster}}, {{ui:Vorige}} en {{ui:Meer}}: {{ui:Afstand meten}}, {{ui:Gebied}}, {{ui:Meten (radius, hoek …)}}, en het gesplitste scherm: {{ui:Naast elkaar splitsen}}, {{ui:Boven elkaar splitsen}}, {{ui:Vier vensters}}, {{ui:Eén venster}} (zie [Het scherm splitsen](topic:split-screen)), en {{ui:Weergave 90° linksom draaien}}, {{ui:Weergave 90° rechtsom draaien}}, {{ui:Terug naar wereldcoördinaten}} (zie [De weergave draaien](topic:ucs-and-turned-view)) |

{{ui:Kopiëren}} in de groep {{ui:Wijzigen}} is de opdracht {{cmd:COPY}} (basispunt, daarna waar elke kopie heen gaat); {{ui:Kopiëren}} in de groep {{ui:Bewerken}} zet objecten op het klembord voor {{ui:Plakken}}. Zie [Kopiëren, plakken en dupliceren](topic:copy-paste). De knop van de opdracht die loopt, blijft gemarkeerd totdat de opdracht eindigt. Tooltips noemen de Windows-sneltoetsen ("Ctrl+O"); op een Mac werkt {{key:Mod+O}} ook.

In een laag venster (bijvoorbeeld een laptop met een schermschaal van 125 % of meer) neemt de werkbalk nooit de plaats van de tekening in: als de tekening te weinig hoogte zou krijgen, laten de knoppen de woorden onder hun pictogrammen en de groepsnamen weg (wijs een knop aan voor zijn naam), en is dat nog niet genoeg, dan wordt de werkbalk één rij die zijwaarts scrolt. Een hoger venster brengt de woorden terug.

## Het linkerpaneel

Het paneel links heeft drie gedeelten.

- **{{ui:Lagen}}.** Elke laag in de tekening, met een gevulde stip bij de actieve. Klik op een naam om die laag actief te maken. Elke rij heeft een kleurstaal (klik erop om een kleur te kiezen) en vier knoppen: aan/uit (oog), bevriezen (sneeuwvlok), vergrendelen (hangslot) en plotten (printer). {{ui:Nieuwe laag}} opent een vak om er een toe te voegen. Zie [Een tekening ordenen met lagen](topic:layers).
- **{{ui:Blokken}}.** De blokken die in de tekening zijn gedefinieerd, hoe vaak elk wordt gebruikt en een knop {{ui:Invoegen}} voor elk. Zie [Blokken maken en invoegen](topic:blocks).
- **{{ui:Tekening}}.** Feiten over het geopende bestand: naam (met "(gewijzigd)" bij niet-opgeslagen bewerkingen), formaat, grootte, eenheden, aantal objecten, lagen, blokken en bladen. Nadat u een bestand hebt geopend, toont een vak "Over dit bestand" alles wat CadCraft niet kon tonen of moest converteren.

## Het tekengebied

Het midden van het scherm is de tekening. De aanwijzer is een dradenkruis. Wil CadCraft een punt, dan laten een kleine markering en een label ("Eindpunt", "Middelpunt van lijn") zien waar een objectsnap terechtkomt. Wil het objecten, dan heeft het dradenkruis een keuzevak en lichten de objecten eronder op.

Is de tekening leeg, dan toont een kaartje "Tekening beginnen" een paar eerste opdrachten. Het verdwijnt zodra u een opdracht uitvoert of een bestand opent. U kunt overal op dit gebied een DWG- of DXF-bestand neerzetten om het te openen.

## De tabbladen onder de tekening

Onder de tekening staan de tabbladen: eerst {{ui:Model}}, dan {{ui:3D}}, dan één tabblad per blad (indeling) en daarna een knop {{ui:+}}.

- {{ui:Model}} is de tekening zelf, op ware grootte, in tekeneenheden.
- {{ui:3D}} toont de tekening liggend op de grond en de volumes die ervan worden gemaakt. Terwijl het tabblad zichtbaar is, heeft de werkbalk een groep {{ui:3D}} in plaats van de tekengroepen. Zie [Modelleren in 3D](topic:3d-solids).
- Elk bladtabblad is een vel papier met een titelblok en viewports op het model. Wat u daar tekent, is in papiereenheden (millimeters of inches). Dubbelklik in een viewport om er het model doorheen te bewerken (zie [Op het model werken via een viewport](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Een lange bladnaam wordt op het tabblad afgekapt; wijs het tabblad aan voor de hele naam. Bij veel bladen toont {{ui:Instellingen}} › {{ui:CadCraft}} › {{ui:Bladtabs}} › {{ui:Alleen bladnummers}} alleen het nummer van elk blad (A-101) op zijn tabblad.
- {{ui:+}} maakt een nieuw blad met een rand, een titelblok en één viewport. Het is hetzelfde als de opdracht {{cmd:LAYOUT}}.
- Dubbelklik op een bladtabblad om het te hernoemen. Met een tabblad in focus verplaatsen {{key:Left}} en {{key:Right}} u tussen tabbladen.

Elk tabblad behoudt zijn eigen zoom en verschuiving. Zie [Een blad inrichten](topic:sheets-and-viewports).

## Het rechterpaneel: Eigenschappen

Het paneel rechts verandert met wat is geselecteerd.

- **Niets geselecteerd, op het tabblad {{ui:Model}}:** de kop luidt {{ui:Huidige instellingen}}. Hier stelt u de {{ui:Laag}}, {{ui:Kleur}} en {{ui:Teksthoogte}} voor nieuwe objecten in, de {{ui:Eenheden}} van de tekening en de maten voor nieuwe maatvoering ({{ui:Teksthoogte}}, {{ui:Pijlgrootte}}, {{ui:Decimalen}}, {{ui:Algemene schaal}}).
- **Niets geselecteerd, op een blad:** de kop luidt "Blad:" en de bladnaam. U kunt het blad hernoemen, zijn {{ui:Papier}} en {{ui:Oriëntatie}} wijzigen, {{ui:Dit blad plotten}} of {{ui:Dit blad verwijderen}}. De instellingen voor nieuwe objecten volgen daaronder.
- **Eén object geselecteerd:** het type als kop (Lijn, Cirkel, Tekst, Maatvoering, Viewport …), daarna zijn laag, kleur en geometrie. Typ een nieuwe waarde en druk op {{key:Enter}} om te wijzigen.
- **Meerdere objecten geselecteerd:** hoeveel, en hun gemeenschappelijke {{ui:Laag}} en {{ui:Kleur}}. Als u een van beide wijzigt, wijzigen ze allemaal. "Varieert" betekent dat ze verschillen.

Zie [Bewerken met grips en Eigenschappen](topic:grips-and-properties).

Daaronder opent het paneel {{ui:Parameters}} wanneer u {{ui:Parameters}} kiest of {{cmd:PARAMETERS}} typt: elke parameter en dimensionele beperking in één tabel. Zie [Parameters en vergelijkingen gebruiken](topic:parameters).

## De opdrachtregel

Onderaan staat de opdrachtregel: de geschiedenis van wat u deed, en daaronder de prompt.

- Het label van de prompt luidt `Opdracht:` als er niets loopt. Terwijl een opdracht loopt, toont het de vraag, de opties tussen rechte haken en de standaardwaarde tussen punthaken, bijvoorbeeld `Geef de radius van de cirkel op [Diameter] <500>:`.
- Terwijl u een opdrachtnaam typt, stelt een hint rechts passende opdrachten voor. Druk op {{key:Tab}} om de eerste te accepteren. "Onbekende opdracht" betekent dat niets past.
- {{key:Up}} en {{key:Down}} halen eerder getypte regels terug.
- De geschiedenis bewaart de laatste 400 regels. Berichten van opdrachten, metingen van {{cmd:DIST}} en {{cmd:LIST}} en rapporten van opslaan en plotten verschijnen hier.

## De statusbalk

De onderste rij is de statusbalk.

- **Coördinaten** links: de X en Y van het dradenkruis. Heeft een opdracht een basispunt, dan toont hij ook de afstand en hoek ervan, bijvoorbeeld `Δ 1200 < 90°`.
- **Berichten** in het midden, zoals "Ortho aan" of "Actieve laag: Walls". Ze verdwijnen na een paar seconden.
- **{{ui:Raster}}**, **{{ui:Ortho}}**, **{{ui:Polair}}**, **{{ui:Snap}}**, **{{ui:Tracering}}**, **{{ui:Dyn}}** en **{{ui:LWT}}** rechts. Elk is een schakelaar; een ingedrukte knop staat aan. {{ui:LWT}} toont lijndikten op het scherm (zie [Lijndikten en lijntypen](topic:units-papers-scales#line-weights-and-linetypes)). Het pijltje naast {{ui:Snap}} opent {{ui:Objectsnaps}}, waar u aanvinkt welke snaps actief zijn. Zie [Snappen op punten van objecten](topic:object-snaps).

## Het dialoogvenster Plotten naar PDF

{{ui:Plotten}} (of {{key:Mod+P}}) opent het dialoogvenster {{ui:Plotten naar PDF}}, met links de instellingen en rechts een live voorbeeld. Zie [Plotten naar pdf](topic:plot-pdf).

## De Help

{{key:F1}} of de knop {{ui:Help}} opent deze Help als zijpaneel; de tekening blijft ernaast bruikbaar. Hij werkt zonder verbinding. {{key:F1}} nogmaals, of {{key:Esc}} in het paneel, sluit hem. Zie [Deze Help gebruiken](common:help).
