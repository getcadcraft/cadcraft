---
title: Invoegen uit een bestand of de bibliotheek
summary: Haal een blok of een hele tekening uit een andere DWG- of DXF-tekening, en plaats items uit de bibliotheek, een bestand of een andere bibliotheek, met hun bronvermeldingen en updates.
keywords: invoegen, insert, bestand, file, bibliotheek, library, librarycraft, item, apparatuur, blok uit een andere tekening, wblock, ontwerpcentrum, bronvermeldingen, licentie, update, feed, item.json
from: 316188d2
---

## Een blok uit een andere tekening invoegen

1. Typ `I` en druk op {{key:Enter}}, of klik op {{ui:Insert}} in de groep Blokken.
2. Bij `Geef blocknaam op of [Bestand (F)/Bibliotheek (L)]` typt u `F` en drukt u op {{key:Enter}}.
3. Kies de DWG of DXF op deze computer. Die wordt hier gelezen; hij wordt niet geopend en er wordt niets geüpload.
4. Kies in het dialoogvenster {{ui:Insert from}} een blok uit de lijst (typ in {{ui:Filter blocks}} om het te vinden), of laat {{ui:The whole drawing}} staan. Klik op {{ui:Insert}}.
5. Klik waar het moet komen, en vul de attributen in die er worden gevraagd.

De hele tekening komt binnen als één blok met de naam van het bestand. Blokken binnen het blok dat u koos, komen ook mee. De lagen die ze gebruiken, worden aan deze tekening toegevoegd.

Als de andere tekening andere eenheden heeft (bijvoorbeeld inches en millimeters), schaalt CadCraft de verwijzing om te passen en meldt dat in de geschiedenis.

### Wanneer een naam al in gebruik is

Als deze tekening al een blok met dezelfde naam heeft, vraagt CadCraft:

- {{ui:Keep existing}} gebruikt het blok van deze tekening met die naam.
- {{ui:Rename}} voegt het nieuwe in als `Naam (2)`.

Het hele invoegen is één stap: {{key:Mod+Z}} verwijdert de verwijzing en de gekopieerde definities weer.

## De bibliotheek openen

Klik op {{ui:Library…}} in het paneel {{ui:Blocks}}, of op {{ui:Library}} in de groep Blokken, of typ `LIB`. Bij de prompt `INSERT` opent `L` hem ook.

De bibliotheek heeft vier bronnen, als tabbladen:

- {{ui:Library}}: de CadCraft-bibliotheek. Zoek op naam, fabrikant of model, en filter op categorie.
- {{ui:Files…}}: een itembestand (`item.json`) uit een willekeurige bibliotheek, of een tekening, spreadsheet of 3D-model om items van te maken: een DWG of DXF (elk blok wordt een item), een CSV met kolommen voor naam en afmeting, of een glTF- of OBJ-model. Er wordt niets geüpload.
- {{ui:Standard}}: staalprofielen (als doorsneden, aanzichten of 3D-staven) en standaardonderdelen zoals bouten, moeren en lagers, hier gemaakt uit gepubliceerde tabellen. Zie [Staalprofielen en standaardonderdelen plaatsen](topic:steel-and-standard-parts).
- {{ui:Other feeds}}: andere bibliotheken die antwoorden op dezelfde manier als {{ui:Library}}. Voeg hun adres eenmaal toe; deze browser onthoudt het.

Elke kaart toont een voorbeeld, de naam, de fabrikant en het model, de licentie en de versie. Een ingetrokken item wordt gemarkeerd met Ingetrokken en de reden; CadCraft vraagt om bevestiging voordat u er een plaatst.

## Een item plaatsen

1. Klik op {{ui:Place}} op een kaart.
2. Klik waar het item moet komen. Typ eerst `R` om het te draaien, of `S` om het te schalen.
3. Bij `Voer itemnummer in (CC-ITEM)` drukt u op {{key:Enter}} voor het volgende vrije nummer, of typt u uw eigen nummer.

Het item wordt een blok met de naam `LIB_<name>_v<version>`, getekend in de eenheden van deze tekening. Heeft de tekening geen eenheden, dan komt het item in millimeters en meldt de geschiedenis dat; stel eerst {{ui:Units}} in het rechterpaneel in.

De gegevens reizen mee als onzichtbare attributen: het id en de versie van het item, licentie en bronvermelding, fabrikant, model, categorie en afmetingen. Zie [Blokattributen](topic:attributes).

## Items in uw taal

Een item kan zijn naam en beschrijving in andere talen bevatten. Wanneer die er zijn in de taal waarop CadCraft is ingesteld (Instellingen › Algemeen › Taal), gebruiken de kaart en de itemnaam van het geplaatste blok die. Het blok zelf houdt een naam die is afgeleid van de eigen naam van het item, zodat een tekening één blok per item heeft, welke taal die ook heeft gebruikt om te plaatsen.

## Controleren op updates

1. Open de bibliotheek.
2. Klik op {{ui:Check for updates}}.

Elk bibliotheekitem in de tekening wordt getoond met zijn itemnummers, en of het up-to-date is, een nieuwere versie heeft (en wat er is veranderd), of is ingetrokken. Klik op {{ui:Update}} bij een rij, of op Alles bijwerken. Elke verwijzing gaat naar het blok van de nieuwe versie en behoudt zijn itemnummer, aantal, plaats, hoek en laag. {{key:Mod+Z}} maakt een update ongedaan.

## Bronvermeldingen

Klik op {{ui:Library credits}}. Elk item wordt getoond met zijn bronvermeldingsregel en licentie.

- {{ui:Copy attribution}} kopieert de regel van één item; {{ui:Copy all}} kopieert elke regel.
- {{ui:Download CSV}} slaat de lijst op met de itemnummers, fabrikanten, modellen, licenties en bronvermeldingen. Die opent in elke spreadsheet.

Licenties zoals CC BY vragen u de auteur te vermelden waar u het werk gebruikt. Zet de regels op de tekening, in de specificatie of in de projectnotities.

## Symbolen en assets

De bibliotheek heeft drie soorten items: Symbolen (tekenconventies, 2D), Types (waaruit een element bestaat) en Assets (fysieke objecten). In het tabblad {{ui:Library}} toont de lijst {{ui:Kind of item}} Symbolen en assets samen, alleen Symbolen, of alleen Assets. Types zijn waaruit een BimCraft-project is opgebouwd, dus CadCraft toont ze niet.

## Aanmelden bij de bibliotheek

Klik op {{ui:Sign in to the library}}. Er opent een klein venster op de site; zodra u daar bent aangemeld, kan CadCraft de items van uw team tonen en registreren wat u plaatst, zodat u hoort wanneer een item dat u gebruikte verandert. De aanmelding geldt voor dit browsertabblad. Trek ze op elk moment in via de beveiligingspagina van uw account in.

## Veelvoorkomende fouten

- **"Items maken uit IFC-types gebeurt in BimCraft."** IFC- en familiebestanden worden gelezen in de app BimCraft. Maak het item daar of in de Bibliotheek, en gebruik dan zijn `item.json` hier.
- **"De bibliotheek kon niet worden bereikt."** U bent offline, of de bibliotheek is niet beschikbaar. Items die al in de tekening staan, worden niet beïnvloed.
- **Een item is veel te groot of te klein.** De eenheden van de tekening zijn verkeerd of niet ingesteld. Maak ongedaan, stel {{ui:Units}} in en plaats het opnieuw.
