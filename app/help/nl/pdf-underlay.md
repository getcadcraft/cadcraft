---
title: PDF-onderleggers en PDF-import
summary: Zet een PDF-pagina onder uw tekening om te traceren en af te drukken, of maak de lijnen en tekst van de pagina tot tekenobjecten.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, onderlegger, traceren, pdf importeren, scan, plattegrond, vervagen, begrenzen, lagen, snap, pdf openen
from: aa301d0f
---

## Twee manieren om een PDF-pagina binnen te halen

- **Koppelen** ({{cmd:PDFATTACH}}) houdt de PDF als afbeelding onder uw tekening. U traceert hem, laat de snap op zijn lijnen vastklikken, vervaagt hem en begrenst hem, en hij wordt samen met het blad afgedrukt. De tekening bewaart alleen de naam van het bestand.
- **Importeren** ({{cmd:PDFIMPORT}}) maakt van de lijnen, curven, vulvlakken en tekst van de pagina gewone tekenobjecten, op lagen die naar de PDF zijn genoemd. U kunt ze zelf bewerken, en de PDF is daarna niet meer nodig.

Een PDF openen met {{ui:Openen}} vraagt welke van de twee u wilt.

## Een pagina koppelen

1. Typ `PDFATTACH` (of `PDFATT`) en kies de PDF. Heeft hij meerdere pagina's, typ dan het paginanummer.
2. Klik het invoegpunt aan (de linkeronderhoek van de pagina).
3. Druk op {{key:Enter}} voor de werkelijke grootte van de pagina, of typ de schaal: tekeneenheden per PDF-punt (een punt is 1/72 inch, dus 0.3528 in een tekening in millimeters).
4. Druk op {{key:Enter}} voor geen draaiing, of typ een hoek.

De pagina is een object, zoals een blokverwijzing: verplaats, roteer, schaal, kopieer, wis en plaats hem op een laag. Schakel de laag uit en hij verdwijnt. Zoom in en de pagina wordt opnieuw scherp getekend.

## Traceren

Met {{ui:Snap}} aan klikt de cursor op de eigen lijnen van de PDF: eindpunten, middelpunten en kruispunten (en {{ui:Dichtstbijzijnde}} wanneer die snap aan staat). Tekst die als letters op de pagina staat, wordt niet gesnapt.

## Aanpassen

- `PDFADJUST`: **Vervagen (F)** (0 tot 80 procent), **Contrast** (0 tot 100), **Monochroom**, en **Aan/uit (O)** om hem te verbergen zonder hem te wissen.
- `PDFCLIP`: toont alleen een rechthoek of veelhoek van de pagina; **Verwijderen (D)** verwijdert de begrenzing.
- `PDFLAYERS`: een PDF kan eigen lagen hebben. Het commando somt ze op; typ een nummer om die laag voor deze onderlegger aan of uit te zetten. Lagen die in het bestand uit staan, beginnen uit.

## Afdrukken en opslaan

PLOT drukt de pagina af als lijnen, vulvlakken en tekst, zodat hij scherp en doorzoekbaar blijft. Afbeeldingen in de PDF worden op het scherm getoond, maar nog niet afgedrukt.

Een DWG of DXF 2000 bewaart de onderlegger als koppeling: de naam van het bestand, de pagina, waar hij ligt, zijn schaal, draaiing, begrenzing, vervaging en contrast. De PDF zelf zit niet in de tekening. Open de tekening opnieuw, typ `PDF` en kies het bestand opnieuw; de pagina's worden tot die tijd als kaders getoond en krijgen hun echte grootte pas dan. Oudere DXF (R12) kent geen onderleggers: die bewaart het kader en de naam. Hoe andere programma's de bewaarde begrenzing en schaal lezen, is daar nog niet gecontroleerd.

## Een pagina importeren

1. Typ `PDFIMPORT` (of `PDFIM`) en kies de PDF en de pagina.
2. Klik aan waar de linkeronderhoek van de pagina komt.
3. Druk op {{key:Enter}} voor ware grootte, typ een schaal, of kies **Twee punten**: de pagina wordt op ware grootte getekend, daarna klikt u twee punten op een afstand die u kent en typt u de werkelijke afstand; alles wordt daarop geschaald.

Lijnen worden lijnen en polylijnen, cirkels en bogen worden herkend, gevulde vormen worden volle arceringen, en tekst wordt tekst op een laag die eindigt op `-TEXT`. Het is één stap ongedaan maken. Afbeeldingen in de PDF worden niet geïmporteerd: koppel de pagina in plaats daarvan. Een scan (een pagina die alleen uit een afbeelding bestaat) heeft geen lijnen om te importeren.

PDF's worden gelezen als onbetrouwbare bestanden: er worden geen scripts uitgevoerd, en een zeer grote pagina wordt ingekort, waarvan CadCraft melding maakt.
