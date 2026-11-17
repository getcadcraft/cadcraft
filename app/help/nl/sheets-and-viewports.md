---
title: Een blad instellen met een titelblok en viewports
summary: Maak een blad (indeling) met een kader en titelblok, stel de viewportschaal in, voeg een tweede viewport toe voor een detail, en vul het titelblok in.
keywords: indeling, blad, papierruimte, viewport, mview, vpview, titelblok, schaal, papierformaat, kader, vports, plotschaal, mspace, pspace, modelruimte, viewport betreden, dubbelklikken op viewport
from: 45a45de8
---

## Wat u gaat maken

Een A3-blad met een titelblok, het hele plan in één viewport op 1:100, en een tweede viewport die één hoek toont op 1:20.

## Model en bladen

U tekent het gebouw op het tabblad {{ui:Model}}, op ware grootte: een wand van 6 m is 6000 eenheden lang in millimeters. Een **blad** (een indeling) is een stuk papier, gemeten in millimeters of inches. Een **viewport** is een venster in het blad dat het model op een schaal toont.

## Voordat u begint

1. Open of teken een plattegrond op het tabblad {{ui:Model}}.
2. Druk op {{key:Esc}} zodat niets geselecteerd is.
3. Stel in {{ui:Huidige instellingen}} {{ui:Eenheden}} in op de eenheid waarin u tekende, bijvoorbeeld {{ui:Millimeter}}.

Eenheden doen ertoe: een viewportschaal zoals 1:100 betekent dat één millimeter op het papier 100 werkelijke millimeters toont, dus CadCraft moet weten wat één tekeneenheid is. Een tekening die als {{ui:Zonder eenheid}} is gelaten, wordt beschouwd als in de papiereenheid (millimeters op ISO-papier, inches op Amerikaans papier).

## Het blad maken

1. Klik op de knop {{ui:+}} rechts van de tabbladen onder de tekening, of typ `LAYOUT` en druk op {{key:Enter}}, of klik op {{ui:Nieuw blad}}.

Er opent een nieuw tabblad, `Layout1`. U ziet een blad op een donkerder bureau: een kader, een titelblok in de rechter onderhoek en één viewport erboven die het hele model toont op de grootste standaardschaal die past. De geschiedenis noemt het papier: ISO A3 voor metrische en eenheidloze tekeningen, Tabloid (ANSI B) voor tekeningen in inches of voeten.

2. Klik op {{ui:Alles tonen}} om het blad in beeld te passen.

## Het papier kiezen

1. Druk op {{key:Esc}} zodat niets geselecteerd is. De kop van het rechterpaneel luidt "Blad: Layout1".
2. Typ bij {{ui:Naam}} `A-101 Plan` en druk op {{key:Enter}}. Het tabblad wordt hernoemd.
3. Kies bij {{ui:Papier}} een formaat.
4. Kies bij {{ui:Oriëntatie}} {{ui:Liggend}} of {{ui:Staand}}.

:::warning
Het veranderen van het papier verplaatst of verandert de grootte van wat al op het blad staat niet. Controleer daarna of het kader, het titelblok en de viewport nog passen, en verplaats of verander ze met grepen. Wisselen tussen papier in millimeters en in inches behoudt de getallen, dus alles verandert van grootte: de statusbalk waarschuwt u daarvoor.
:::

## De viewportschaal instellen

1. Klik op de rand van de viewport (de kant ervan). De kop van het paneel luidt "Viewport".
2. Kies bij {{ui:Schaal}} `1:100`.

Het model binnen de viewport wordt opnieuw getekend op 1:100, gecentreerd op de plek waar het was. De lijst biedt metrische schalen van 10:1 tot 1:10000; tekeningen in inches of voeten krijgen ook architectonische schalen (1/4" = 1'-0" en dergelijke) en engineeringschalen (1" = 20' en dergelijke). {{ui:Het hele model passend maken}} stelt een exacte, niet-standaard schaal in die alles past.

3. Als het plan niet meer gecentreerd is, wijzig dan {{ui:X}} en {{ui:Y}} onder {{ui:Middelpunt van de weergave (model)}} in het rechterpaneel: dat is het modelpunt dat in het midden van de viewport wordt getoond.

## Een deel van het model in een viewport tonen

1. Met de viewport geselecteerd, klikt u in het rechterpaneel op {{ui:Kies een venster op het model…}} (of typ `VPVIEW` en druk op {{key:Enter}}).
2. CadCraft schakelt naar het tabblad {{ui:Model}}. Klik op één hoek van het gebied dat u wilt tonen.
3. Klik op de tegenoverliggende hoek.

U bent terug op het blad, en de viewport toont dat gebied op de grootste standaardschaal die past; de geschiedenis zegt welke. {{ui:Het hele model tonen}} keert terug naar het hele plan op een standaardschaal.

## Een tweede viewport toevoegen voor een detail

1. Maak ruimte op het blad: selecteer de eerste viewport en sleep een hoekgreep om hem kleiner te maken.
2. Typ `MV` en druk op {{key:Enter}}, of klik op {{ui:Viewport}} in de groep Bladen.
3. Klik op één hoek van de nieuwe viewport op het blad.
4. Klik op de tegenoverliggende hoek.

De nieuwe viewport toont het hele model. De geschiedenis zegt welke schaal hij heeft.

5. Klik op de rand van de nieuwe viewport.
6. Klik op {{ui:Kies een venster op het model…}} en kies een klein gebied rond één hoek van het plan.
7. Kies bij {{ui:Schaal}} `1:20`.

Viewportkaders staan op de laag `Viewports`, die is ingesteld om niet te plotten, dus de kaders zijn op het scherm zichtbaar maar staan niet in de PDF.

## Het titelblok invullen

Het titelblok bestaat uit gewone lijnen en tekst op de laag `Title block`. Het begint met de tekeningnaam, de schaal van de eerste viewport, de datum van vandaag en het bladnummer.

1. Dubbelklik op de grote titeltekst. Er opent een bewerkingsvak erboven.
2. Typ de titel van het blad.
3. Klik op {{ui:OK}}, of druk op {{key:Mod+Enter}}.

Doe hetzelfde voor de andere velden. Gebruik {{cmd:TEXT}} om in de lege cel "DRAWN BY" te schrijven. De tekst SCALE werkt zichzelf niet bij wanneer u de schaal van een viewport wijzigt: bewerk hem met de hand.

## Tekenen op het blad

Alles wat u op een bladtabblad tekent, staat op het papier, in papiereenheden: tekst van 3.5 hoog is 3.5 mm hoog op een ISO-blad. Notities, noordpijlen en bladkaders horen hier.

Om het plan zelf te wijzigen, gaat u naar het tabblad {{ui:Model}}, of u werkt via een viewport (volgende sectie); elke viewport toont de wijziging.

## Via een viewport in het model werken

1. Dubbelklik binnen een viewport, buiten het kader. Of typ `MS` en druk op {{key:Enter}}: met één viewport op het blad gaat u meteen naar binnen; met meerdere klikt u in de gewenste.

Het kader wordt zwaarder getekend, de geschiedenis zegt dat u binnen bent, en het tabblad van het blad blijft geselecteerd. Alles wat u nu tekent of wijzigt, staat in het model, in modeleenheden, net als op het tabblad {{ui:Model}}: een lijn die binnen een viewport op 1:100 wordt getekend, staat in werkelijke millimeters. Lagen die in deze viewport bevroren zijn, kunnen hier niet worden gekozen.

2. Draai aan het wiel of sleep met de middelste knop om te zoomen en te verschuiven wat de viewport toont. Het blad blijft waar het is.
3. Dubbelklik ergens buiten het kader, of typ `PS` en druk op {{key:Enter}}.

U bent terug op het blad. De viewport houdt de weergave aan waarmee u weg bent gegaan; {{key:Mod+Z}} zet de oude weergave in één stap terug. Klikken op een tabblad onder de tekening verlaat de viewport ook.

:::note
Een viewport waarvan de weergave is vergrendeld ({{ui:Weergave vergrendeld}} in {{ui:Eigenschappen}}) houdt zijn weergave: erbinnen verschuift en zoomt u dan het hele blad. Een viewport die is uitgeschakeld kan niet worden betreden.
:::

## Een weergave benoemen

Een weergavetitel onder een viewport kan de naam van de weergave van de viewport tonen en die bijhouden:

1. Geef de weergave een naam: selecteer het kader van de viewport en vul {{ui:Weergavenaam}} in bij Eigenschappen. Of sla de weergave op op het tabblad {{ui:Model}} met {{cmd:NAMEDVIEW}} en typ, met de viewport geselecteerd, `VPVIEW`, `V` en de naam van de weergave: de viewport toont die weergave en neemt de naam over.
2. Typ `VIEWLABEL` (`VL`) en druk op {{key:Enter}}, en klik daarna waar het label moet komen ({{key:Enter}} zet het onder de linker onderhoek van de viewport).

Wanneer de naam van de weergave verandert, verandert het label mee, in dezelfde stap ongedaan te maken.

## Een laag in één viewport bevriezen

Om een laag in één viewport te verbergen maar niet in de andere (meubilair in een detail, bijvoorbeeld):

1. Selecteer het kader van de viewport, of werk erbinnen (dubbelklik).

Het paneel {{ui:Lagen}} krijgt één knop extra op elke rij, en een regel erboven zegt dat.

2. Klik op die knop in de rij van de laag.

De laag verdwijnt alleen uit die viewport. Klik nogmaals om hem te ontdooien; {{key:Mod+Z}} maakt beide ongedaan. Voor meerdere lagen of viewports tegelijk typt u `VPLAYER`: `F` (Bevriezen), of `T` (Ontdooien), de laagnamen (`A-*` neemt elke laag die begint met A-), daarna `C` (Actief), `A` (Alle) of `S` (Selecteren). `VPLAYER` `V` (Vpvisdflt) kiest lagen waarmee nieuwe viewports bevroren beginnen.

## Meer bladen

Elke {{ui:+}} voegt een ander blad toe (`Layout2`, `Layout3` …) met het volgende bladnummer. Om het open blad te verwijderen, drukt u op {{key:Esc}} en klikt u op {{ui:Dit blad verwijderen}} in het rechterpaneel. Het gebeurt zonder vragen; {{key:Mod+Z}} brengt het terug.

Plot een blad met {{ui:Dit blad plotten}} of {{key:Mod+P}}; zie [Plotten naar PDF](topic:plot-pdf).

## Veelvoorkomende fouten

- **De viewport toont niets.** Het model is leeg, of de weergave is op iets anders gericht. Selecteer het kader en klik op {{ui:Het hele model tonen}}.
- **De schaallijst toont alleen verhoudingen en geen voet-en-inch-schalen.** Stel {{ui:Eenheden}} in op {{ui:Inch}} of {{ui:Voet}} op het tabblad {{ui:Model}}.
- **1:100 lijkt tien keer te groot of te klein.** De tekeneenheden kloppen niet. Stel {{ui:Eenheden}} in op wat één eenheid werkelijk is.
- **Klikken op het plan binnen de viewport selecteert niets.** Op een blad selecteert u de eigen objecten van het blad. Dubbelklik eerst binnen de viewport om via die viewport aan het plan te werken.
- **Klikken buiten de viewport doet niets.** U bent binnen een viewport: dubbelklik erbuiten, of typ `PS`, om weer op het blad te werken.
- **"Viewports horen op een indeling. Open eerst een indelingstabblad (of maak er een met LAYOUT)."** {{cmd:MVIEW}} werkt alleen op een bladtabblad.
