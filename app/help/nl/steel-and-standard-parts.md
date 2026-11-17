---
title: Staalprofielen en standaardonderdelen plaatsen
summary: Teken staalprofielen, aanzichten en 3D-staven uit de gepubliceerde profieltabellen, plaats bouten, moeren, sluitringen, pennen, lagers, sleutels en tandwielen volgens hun normen, en zet ze in een onderdelenlijst.
keywords: staal, profiel, doorsnede, vorm, W-profiel, brede flens, I-balk, U-profiel, hoekprofiel, HSS, buis, pijp, ipe, hea, heb, upn, balk, kolom, staaf, aanzicht, aisc, en 10365, bout, schroef, moer, sluitring, pen, lager, sleutel, groef, tandwiel, iso 4017, iso 4014, iso 4032, iso 7089, iso 2338, iso 15, din 6885, asme, standaardonderdelen, onderdelenlijst, stuklijst, steelmember, partslist
from: 547c1048
---

Het tabblad {{ui:Standaard}} van de bibliotheek heeft twee soorten items, hier gemaakt uit gepubliceerde tabellen (er wordt niets gedownload):

- **Staalprofielen**: 1,335 maten. W, S, C, L, HSS en Pipe uit de AISC Shapes Database v16.0; IPE, HEA, HEB en UPN uit EN 10365:2017. DetailCraft gebruikt dezelfde tabel.
- **Standaardonderdelen**: zeskantkopschroeven (ISO 4017), zeskantbouten (ISO 4014), zeskantmoeren (ISO 4032), gewone sluitringen (ISO 7089), inch-zeskantbouten en -moeren (ASME B18.2.1 en B18.2.2), parallelle pennen (ISO 2338), diepe groefkogellagers (ISO 15), parallelle sleutels (DIN 6885-1) en rechte tandwielen (modules uit ISO 54).

Alles hier wordt gedeeld onder CC0: gebruik het voor alles, zonder naamsvermelding.

## Een staalprofiel plaatsen

1. Open de bibliotheek ({{ui:Bibliotheek}} in de groep Blokken, of typ `LIB`) en klik op het tabblad {{ui:Standaard}}.
2. Kies de familie in de eerste lijst, bijvoorbeeld {{ui:W-profielen}}. Typ in het zoekvak om de maten te beperken: `W12` toont elke W12.
3. Kies bij {{ui:Plaats als}}:
   - {{ui:Doorsnede}}: de dwarsdoorsnede, met het middelpunt op het invoegpunt.
   - {{ui:Hoogteligging}}: de staaf vanaf de zijkant gezien, zo lang als {{ui:Lengte (mm)}} aangeeft, vanaf het midden van zijn linkeruiteinde.
   - {{ui:3D-staaf}}: een volume op het 3D-tabblad (hieronder).
4. Klik op {{ui:Plaatsen}} op de kaart van de maat, en klik daarna waar het moet komen, zoals bij elk bibliotheekitem.

Een doorsnede of hoogteligging wordt een blok. Zijn attributen bevatten de maat, de tabel waaruit hij komt, de lengte (voor een hoogteligging) en een materiaal dat u kunt invullen.

:::note
S-profielen, U-profielen en UPN worden getekend met evenwijdige flenzen van de gemiddelde dikte, en hoekprofielen met vierkante hoeken: de echte flenzen zijn schuin en de hoeken zijn afgerond. W, IPE, HEA en HEB hebben hun wortelafrondingen, en HSS hun hoekradii.
:::

## Een 3D-staaf maken

Kies {{ui:3D-staaf}} en klik op {{ui:Plaatsen}}, of typ {{cmd:STEELMEMBER}} (`SMEMBER`) op de opdrachtregel:

1. Bij `Section size` drukt u op {{key:Enter}} voor de getoonde maat, of typt u een maat, bijvoorbeeld `HSS6x6x1/4` of `IPE300`.
2. Klik het startpunt en daarna het eindpunt. De staaf loopt ertussen en staat op de grond.
3. Voor een kolom typt u `C`, klikt u op zijn basispunt en typt u zijn hoogte.

De staaf is een gesloten volume op het 3D-tabblad. Verplaats of kopieer hem daar zoals elk ander volume. {{key:Mod+Z}} haalt hem weer weg.

## Een standaardonderdeel plaatsen

1. Kies op het tabblad {{ui:Standaard}} de familie, bijvoorbeeld {{ui:Zeskantkopschroeven}}.
2. Typ voor een schroef, bout, pen of sleutel de {{ui:Lengte (mm)}} (inch voor de inchfamilies). Typ voor een tandwiel de {{ui:Tanden}}, de {{ui:Breedte van het vlak (mm)}} en de {{ui:Boring (mm)}}. Laat een vak leeg voor de gebruikelijke waarde die erin staat.
3. Klik op {{ui:Plaatsen}} op de maat en klik waar het moet komen.

Schroeven, bouten en pennen worden van de zijkant getekend, met het aanligvlak van de kop op het invoegpunt; moeren, sluitringen, lagers en tandwielen liggen plat; sleutels van bovenaf. Schroefdraad wordt gebruikelijk getekend: de kern als dunne lijn, het einde van de draad als dikke lijn. Tandwielen worden getekend als hun kopcirkel, steekcirkel en voetcirkel, niet tand voor tand.

Het blok van elk onderdeel draagt zijn type, norm, maat, lengte en materiaal als attributen, en zijn gewicht uit de nominale vorm in staal. Wijzig het materiaal in het paneel {{ui:Eigenschappen}}.

Dezelfde onderdelen staan ook als items in de bibliotheek, en PartCraft opent ze als parametrische onderdelen ({{ui:Standaardonderdeel}} in de groep Bestand).

## Een onderdelenlijst maken

- In de bibliotheek klikt u op {{ui:Onderdelenlijst}}: elk standaardonderdeel en staalprofiel in de tekening, gegroepeerd op type, norm, maat, lengte en materiaal, met het aantal en de itemnummers. {{ui:CSV downloaden}} slaat hem op voor een spreadsheet.
- Om hem te tekenen typt u {{cmd:PARTSLIST}} (`PLIST`), klikt u op de linkerbovenhoek van de tabel en drukt u op {{key:Enter}} voor de gebruikelijke teksthoogte, of typt u er een.

De lijst wordt gelezen uit de attributen van de blokken, dus hij klopt nog steeds nadat de tekening als DWG of DXF is opgeslagen en weer is geopend.

## Veelvoorkomende fouten

- **"Geen staalprofiel heet …"**: typ de maat zoals het tabblad {{ui:Standaard}} hem toont: `W12x26`, `L4x4x1/2`, `HSS6.625x0.280`, `Pipe4STD`, `IPE300`.
- **De staaf staat op het 3D-tabblad, niet in het plan.** {{cmd:STEELMEMBER}} maakt een volume; open het 3D-tabblad om het te zien. Om het staal in het plan te tonen, plaatst u ook een {{ui:Doorsnede}} of {{ui:Hoogteligging}}.
- **Een lengte buiten het bereik.** Een bout moet langer zijn dan zijn kop, en een sleutel langer dan hij breed is. De regel onder de kaarten zegt welke waarde is geweigerd.
