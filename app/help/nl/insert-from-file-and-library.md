---
title: Invoegen uit een bestand of de bibliotheek
summary: Haal een blok of een hele tekening uit een andere DWG of DXF binnen, en plaats items uit de Bibliotheek, een bestand of een andere bibliotheek, met hun bronvermeldingen en updates.
keywords: invoegen, bestand, bibliotheek, librarycraft, item, uitrusting, blok uit een andere tekening, wblock, ontwerpcentrum, bronvermeldingen, bronvermelding, licentie, update, feed, item.json
from: f6e4e452
---

## Een blok uit een andere tekening invoegen

1. Typ `I` en druk op {{key:Enter}}, of klik op {{ui:Invoegen}} in de groep Blokken.
2. De opdrachtregel onderaan het venster vraagt `Enter block name or [File/Library]`. Typ daar `F` en druk op {{key:Enter}}.
3. Kies de DWG of DXF op deze computer. Hij wordt hier gelezen; hij wordt niet geopend, en er wordt niets geüpload.
4. Kies in het dialoogvenster {{ui:Invoegen uit}} een blok uit de lijst (typ in {{ui:Blokken filteren}} om het te vinden), of laat {{ui:De hele tekening}} staan. Klik op {{ui:Invoegen}}.
5. Klik waar het moet komen, en vul eventuele attributen in die worden gevraagd.

U kunt ook beginnen in het paneel {{ui:Blokken}}: typ `F` in het vak {{ui:Blokken filteren}} en druk op {{key:Enter}}, of typ iets waarmee geen blok overeenkomt en klik op {{ui:Uit een bestand…}}. `L` en {{ui:Bibliotheek…}} openen de bibliotheek op dezelfde manier. Vóór versie 0.10.1 zocht een letter die in {{ui:Blokken filteren}} werd getypt alleen naar de blokken van deze tekening, en antwoordde het "No block matches the filter."

Om een tekening met uw eigen blokken bij de hand te houden, klikt u op {{ui:Een tekening toevoegen}} onder {{ui:Bibliotheken}} in het paneel {{ui:Blokken}} en kiest u de DWG of DXF. De blokken ervan worden met afbeeldingen weergegeven; klik op een blok om het te plaatsen.

De hele tekening komt binnen als één blok, genoemd naar het bestand. Blokken binnen het gekozen blok komen ook mee. De lagen die ze gebruiken, worden aan deze tekening toegevoegd.

Als de andere tekening andere eenheden heeft (bijvoorbeeld inches en millimeters), schaalt CadCraft de verwijzing mee en zegt dat in de geschiedenis.

### Wanneer een naam al in gebruik is

Heeft deze tekening al een blok met dezelfde naam, dan vraagt CadCraft:

- {{ui:Bestaande behouden}} gebruikt het blok van deze tekening met die naam.
- {{ui:Hernoemen}} brengt het nieuwe binnen als `Name (2)`.

De hele invoeging is één stap: {{key:Mod+Z}} verwijdert de verwijzing en de gekopieerde definities weer.

## De bibliotheek openen

Klik op {{ui:Bibliotheek…}} in het paneel {{ui:Blokken}}, of op {{ui:Bibliotheek}} in de groep Blokken, of typ `LIB`. Bij de vraag van `INSERT` opent `L` haar ook.

De bibliotheek heeft vier bronnen, als tabbladen:

- {{ui:Bibliotheek}}: de bibliotheek van CadCraft. Zoek op naam, fabrikant of model, en filter op categorie.
- {{ui:Bestanden…}}: een itembestand (`item.json`) uit een willekeurige bibliotheek, of een tekening, spreadsheet of 3D-model om items van te maken: een DWG of DXF (elk blok wordt een item), een CSV met kolommen voor naam en maat, of een glTF- of OBJ-model. Er wordt niets geüpload.
- {{ui:Standaard}}: staalprofielen (als doorsneden, aanzichten of 3D-staven) en standaardonderdelen zoals bouten, moeren en lagers, gemaakt hier uit gepubliceerde tabellen. Zie [Staalprofielen en standaardonderdelen plaatsen](topic:steel-and-standard-parts).
- {{ui:Overige feeds}}: andere bibliotheken die op dezelfde manier antwoorden als Bibliotheek. Voeg hun adres één keer toe; deze browser onthoudt het.

Elke kaart toont een voorbeeld, de naam, de fabrikant en het model, de licentie en de versie. Een ingetrokken item wordt gemarkeerd met {{ui:Ingetrokken}} en de reden; CadCraft vraagt om bevestiging voordat u er een plaatst.

## Een item plaatsen

1. Klik op een kaart op {{ui:Plaatsen}}.
2. Klik waar het item moet komen. Typ eerst `R` om het te draaien, of `S` om het te schalen.
3. Bij `Enter Item number (CC-ITEM)` drukt u op {{key:Enter}} voor het volgende vrije nummer, of typt u uw eigen nummer.

Het item wordt een blok met de naam `LIB_<name>_v<version>`, getekend in de eenheden van deze tekening. Heeft de tekening geen eenheden, dan komt het item in millimeters en zegt de geschiedenis dat; stel eerst {{ui:Eenheden}} in het rechterpaneel in.

Zijn gegevens reizen mee als onzichtbare attributen: het id en de versie van het item, licentie en bronvermelding, fabrikant, model, categorie en maten. Zie [Blokattributen](topic:attributes).

## Items in uw taal

Een item kan zijn naam en beschrijving in andere talen dragen. Heeft het die in de taal waarop CadCraft is ingesteld (Instellingen › Algemeen › Taal), dan gebruiken de kaart en de itemnaam van het geplaatste blok die. Het blok zelf houdt een naam die van de eigen naam van het item is afgeleid, zodat een tekening één blok per item heeft, ongeacht welke taal het plaatste.

## Controleren op updates

1. Open de bibliotheek.
2. Klik op {{ui:Controleren op updates}}.

Elk bibliotheekitem in de tekening wordt getoond met zijn itemnummers en of het up-to-date is, een nieuwere versie heeft (en wat er veranderd is), of is ingetrokken. Klik op een rij op {{ui:Bijwerken}}, of op {{ui:Alles bijwerken}}. Elke verwijzing gaat naar het blok van de nieuwe versie en behoudt haar itemnummer, hoeveelheid, plaats, hoek en laag. {{key:Mod+Z}} maakt een update ongedaan.

## Vermeld wat u gebruikte

Klik op {{ui:Bronvermeldingen bibliotheek}}. Elk item wordt getoond met zijn bronvermeldingsregel en licentie.

- {{ui:Bronvermelding kopiëren}} kopieert de regel van één item; {{ui:Alles kopiëren}} kopieert elke regel.
- {{ui:CSV downloaden}} slaat de lijst op met de itemnummers, fabrikanten, modellen, licenties en bronvermeldingen. Ze opent in elke spreadsheet.

Licenties zoals CC BY vragen u de auteur te vermelden waar u het werk gebruikt. Zet de regels op de tekening, in de specificatie of in de projectnotities.

## Symbolen en assets

De bibliotheek kent drie soorten items: Symbolen (tekenconventies, 2D), Typen (waaruit een element bestaat) en Assets (fysieke objecten). Op het tabblad {{ui:Bibliotheek}} toont de lijst {{ui:Soort item}} Symbolen en assets samen, alleen Symbolen, of alleen Assets. Typen zijn waar een BimCraft-project uit wordt opgebouwd, dus CadCraft toont ze niet.

## Aanmelden bij de bibliotheek

Klik op {{ui:Aanmelden bij de bibliotheek}}. Er opent een klein venster op de site; zodra u daar bent aangemeld, kan CadCraft de items van uw team tonen en registreren wat u plaatst, zodat u hoort wanneer een item dat u gebruikte verandert. De aanmelding geldt voor dit browsertabblad. Intrekken kan altijd via de beveiligingspagina van uw account.

## Mijn objecten bewaren in Mijn objecten

{{ui:Mijn objecten}} is een privélijst in de Bibliotheek die alleen u kunt zien. Ze staat niet in de openbare bibliotheek, niet in de zoekfunctie, en wordt niet aan uw team getoond; ze volgt uw account naar elke computer waarop u zich bij de bibliotheek aanmeldt.

1. Klik in het paneel Bibliotheek op {{ui:Bestanden…}} en lees een bestand.
2. Klik bij het item dat u opnieuw wilt op {{ui:Bewaren in mijn objecten}}.
3. Klik later op {{ui:Mijn objecten}} en klik op {{ui:Plaatsen}}. Het plaatst zoals elk bibliotheekitem, en {{ui:Controleren op updates}} dekt het.
4. {{ui:Verwijderen uit mijn objecten}} haalt het uit de lijst. Kopieën die al in tekeningen zijn geplaatst, blijven staan.

U moet bij de bibliotheek zijn aangemeld. Het lezen van een bestand uploadt niets; het bewaren van een item stuurt alleen dat ene item naar uw account.

:::note
Mijn objecten wordt getest en is misschien nog niet voor uw account open. Als er staat "My objects is not open for this account yet", kunt u items uit uw eigen bestanden nog steeds plaatsen met {{ui:Bestanden…}}.
:::

## Veelgemaakte fouten

- **"Making items from IFC types is in BimCraft."** IFC- en familiebestanden worden in de BimCraft-app gelezen. Maak het item daar of in de Bibliotheek, en gebruik dan hier zijn `item.json`.
- **"The library could not be reached."** U bent offline, of de bibliotheek is niet bereikbaar. Items die al in de tekening staan, worden niet getroffen.
- **Een item is veel te groot of te klein.** De eenheden van de tekening zijn verkeerd of niet ingesteld. Maak ongedaan, stel {{ui:Eenheden}} in, en plaats het opnieuw.
