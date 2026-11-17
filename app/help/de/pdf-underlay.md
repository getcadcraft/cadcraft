---
title: PDF-Unterlagen und PDF-Import
summary: Legen Sie eine PDF-Seite unter Ihre Zeichnung, um sie nachzuzeichnen und zu plotten, oder wandeln Sie Linien und Text der Seite in Zeichnungsobjekte um.
keywords: pdf, pdfattach, pdfimport, pdfclip, pdfadjust, pdflayers, Unterlage, nachzeichnen, PDF importieren, Scan, Grundriss, abblenden, Ausschnitt, Layer, Fang, PDF öffnen
from: aa301d0f
---

## Zwei Wege, eine PDF-Seite einzubinden

- **Anfügen** ({{cmd:PDFATTACH}}) behält die PDF als Bild unter Ihrer Zeichnung. Sie zeichnen sie nach, fangen an ihren Linien, blenden sie ab und schneiden sie zu, und sie wird mit dem Blatt geplottet. Die Zeichnung speichert nur den Namen der Datei.
- **Importieren** ({{cmd:PDFIMPORT}}) wandelt Linien, Kurven, Füllungen und Text der Seite in gewöhnliche Zeichnungsobjekte um, auf Layern, die nach der PDF benannt sind. Sie können sie frei bearbeiten; die PDF wird danach nicht mehr benötigt.

Wenn Sie eine PDF mit {{ui:Öffnen}} öffnen, wird gefragt, welche der beiden Varianten Sie möchten.

## Seite anfügen

1. Geben Sie `PDFATTACH` (oder `PDFATT`) ein und wählen Sie die PDF. Hat sie mehrere Seiten, geben Sie die Seitennummer ein.
2. Klicken Sie den Einfügepunkt an (die untere linke Ecke der Seite).
3. Drücken Sie {{key:Enter}} für die wahre Größe der Seite, oder geben Sie den Maßstab ein: Zeichnungseinheiten pro PDF-Punkt (ein Punkt ist 1/72 in, also 0.3528 in einer Zeichnung in Millimetern).
4. Drücken Sie {{key:Enter}} für keine Drehung, oder geben Sie einen Winkel ein.

Die Seite ist ein Objekt wie eine Blockreferenz: Sie können sie verschieben, drehen, skalieren, kopieren, löschen und auf einen Layer legen. Schalten Sie ihren Layer aus, verschwindet sie. Zoomen Sie hinein, wird die Seite wieder scharf gezeichnet.

## Nachzeichnen

Bei eingeschaltetem {{ui:Fang}} rastet der Cursor auf die eigenen Linien der PDF ein: Endpunkte, Mittelpunkte und Schnittpunkte (und {{ui:Nächste}}, wenn dieser Fang eingeschaltet ist). Text, der auf der Seite als Buchstaben gezeichnet ist, wird nicht gefangen.

## Anpassen

- `PDFADJUST`: **Verblassen** (0 bis 80 Prozent), **Kontrast** (0 bis 100), **Monochrom** und **Ein/Aus**, um die Unterlage auszublenden, ohne sie zu löschen.
- `PDFCLIP`: zeigt nur ein Rechteck oder Polygon der Seite; **Löschen** entfernt den Zuschnitt.
- `PDFLAYERS`: Eine PDF kann eigene Layer haben. Der Befehl listet sie auf; geben Sie eine Nummer ein, um diesen Layer für diese Unterlage ein- oder auszuschalten. Die Layer, die in der Datei ausgeschaltet sind, starten ausgeschaltet.

## Plotten und speichern

PLOT druckt die Seite als ihre Linien, Füllungen und Text (so bleibt sie scharf und durchsuchbar). Bilder innerhalb der PDF werden auf dem Bildschirm angezeigt, aber noch nicht geplottet.

Eine DWG oder DXF 2000 speichert die Unterlage als Verknüpfung: den Dateinamen, die Seite, die Lage, den Maßstab, die Drehung, den Zuschnitt, das Verblassen und den Kontrast. Die PDF selbst ist nicht in der Zeichnung. Öffnen Sie die Zeichnung erneut, geben Sie `PDF` ein und wählen Sie die Datei erneut; bis dahin werden die Seiten als Rahmen angezeigt und erhalten ihre wahre Größe erst dann. Ältere DXF (R12) kennen keine Unterlagen: Sie speichern nur Rahmen und Namen. Wie andere Programme den gespeicherten Zuschnitt und Maßstab lesen, wurde dort noch nicht geprüft.

## Seite importieren

1. Geben Sie `PDFIMPORT` (oder `PDFIM`) ein und wählen Sie die PDF und die Seite.
2. Klicken Sie an, wohin die untere linke Ecke der Seite kommt.
3. Drücken Sie {{key:Enter}} für die wahre Größe, geben Sie einen Maßstab ein, oder wählen Sie **Zwei Punkte**: Die Seite wird in wahrer Größe gezeichnet. Dann klicken Sie zwei Punkte mit bekanntem Abstand an und geben den wirklichen Abstand ein; alles wird passend skaliert.

Linien werden zu Linien und Polylinien, Kreise und Bögen werden erkannt, gefüllte Formen werden zu Schraffuren mit Vollfläche, und Text wird zu Text auf einem Layer, der auf `-TEXT` endet. Das ist ein einziger Schritt für Rückgängig. Bilder in der PDF werden nicht importiert: Fügen Sie stattdessen die Seite an. Ein Scan (eine Seite, die nur ein Bild ist) hat keine Linien zum Importieren.

PDFs werden als nicht vertrauenswürdige Dateien gelesen: Es werden keine Skripte ausgeführt, und eine sehr große Seite wird gekürzt; das wird angezeigt.
