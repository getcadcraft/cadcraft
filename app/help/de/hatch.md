---
title: Schraffur und Flächenfüllung
summary: Eine Fläche mit einer Volltonfarbe oder einem Standardmuster füllen, indem Sie darin klicken oder geschlossene Formen wählen, die Musterskalierung und den Musterwinkel festlegen und eine Schraffur nachträglich ändern.
keywords: schraffur, bhatch, füllen, volltonfüllung, muster, ansi31, ansi37, ziegel, erde, netz, schnittlinien, poché, insel, begrenzung, maßstab, winkel
from: 14399174
---

## Was Sie erstellen

Ein Wandschnitt, gefüllt mit dem Muster ANSI31, eine Stütze darin, die leer bleibt, und eine Volltonfüllung in der Stütze.

## Schraffur durch Klicken in einer Fläche

1. Zeichnen Sie ein Rechteck (`REC`, `0,0`, `@2000,1200`) und einen Kreis darin (`C`, `1000,600`, `300`). Klicken Sie auf {{ui:Grenzen}}.
2. Klicken Sie auf {{ui:Schraffur}} in der Gruppe {{ui:Zeichnen}} oder geben Sie `H` ein und drücken Sie {{key:Enter}}. Der Verlauf zeigt das aktuelle Muster, zum Beispiel `Current hatch: ANSI31, scale 1, angle 0°`.
3. Geben Sie `P` ein und drücken Sie {{key:Enter}}, geben Sie `ANSI31` ein und drücken Sie {{key:Enter}}.
4. Geben Sie `SC` ein und drücken Sie {{key:Enter}}, geben Sie `20` ein und drücken Sie {{key:Enter}}. Mustergrößen gelten auf dem Papier. Eine Zeichnung, die im Maßstab 1:20 gedruckt wird, braucht daher den Maßstab 20.
5. Klicken Sie bei `Pick internal point` innerhalb des Rechtecks, außerhalb des Kreises. Die Schraffur wird als Vorschau angezeigt.
6. Drücken Sie {{key:Enter}}. Das Rechteck ist schraffiert; der Kreis darin bleibt leer, weil er eine Insel ist.

Klicken Sie in mehrere Flächen, bevor Sie {{key:Enter}} drücken, um sie zu einer einzigen Schraffur zu machen. `U` nimmt die letzte Fläche zurück.

## Volltonfüllung

1. Geben Sie `H` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `P` ein, drücken Sie {{key:Enter}}, geben Sie `SOLID` ein und drücken Sie {{key:Enter}}.
3. Klicken Sie in den Kreis und drücken Sie danach {{key:Enter}}.

## Geschlossene Formen wählen und schraffieren

Statt innerhalb zu klicken, geben Sie bei `Pick internal point` `S` (Objekte wählen) ein und wählen geschlossene Polylinien, Kreise oder geschlossene Ellipsen. Drücken Sie danach {{key:Enter}}. Formen innerhalb anderer bleiben nacheinander leer (die äußere wird schraffiert, die nächste bleibt leer, und so weiter).

## Muster

Geben Sie bei der Musterabfrage `?` ein, um die Liste zu sehen. Die Standardmuster sind ANSI31 bis ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS und EARTH sowie SOLID. In einer Zeichnung in Zoll (oder mit Fuß und Zoll als Längenformat) werden die Zollgrößen der Muster verwendet, wie in AutoCAD. Andernfalls werden die Millimetergrößen verwendet.

{{ui:Winkel}} (`A`) dreht das gesamte Muster: ANSI31 bei 90° verläuft in die andere Richtung.

**Musterdateien.** Geben Sie bei `Pick internal point` `F` (Musterdatei) ein und wählen Sie eine `.pat`-Datei. Die darin enthaltenen Muster werden der Liste hinzugefügt. Bei mehreren werden Sie gefragt, welches Sie verwenden möchten. Eine Datei ohne Muster, das CadCraft lesen kann, wird als solche gemeldet, und jedes übersprungene Muster wird gezählt. Größen in einer `.pat`-Datei haben keine eigene Einheit, daher werden sie in den Einheiten der Zeichnung gelesen. Getestet wurden nur Dateien im üblichen `.pat`-Format, keine von einem anderen Programm erstellten Dateien.

## Schraffur ändern

Wählen Sie sie aus (klicken Sie auf eine ihrer Linien). In {{ui:Eigenschaften}}: {{ui:Muster}}, {{ui:Musterskalierung}} und {{ui:Musterwinkel}}. Schraffuren aus geöffneten Zeichnungen zeigen ihr Muster, wenn es ein Standardmuster ist. Andere werden in einem hellen Ton ihrer Farbe angezeigt.

## Häufige Fehler

- **„Keine geschlossene Begrenzung um diesen Punkt.“** Der Umriss hat eine Lücke, oder ein Teil davon liegt außerhalb des Bildschirms: CadCraft betrachtet nur, was auf dem Bildschirm sichtbar ist. Schließen Sie die Lücke (zoomen Sie dazu auf die Ecken) oder zoomen Sie heraus.
- **„Das Muster ist in diesem Maßstab zu dicht zum Zeichnen.“** Die Linien lägen enger beieinander, als die Zeichnung darstellen kann. Verwenden Sie einen größeren Maßstab, zum Beispiel den Plotmaßstab (20 für 1:20).
- **Das Muster wirkt riesig oder winzig.** Der Maßstab gibt Zeichnungseinheiten pro Mustereinheit an; siehe Schritt 4 oben.
- **Das Verschieben des Umrisses verschiebt die Schraffur nicht.** Eine Schraffur ist nicht an ihre Begrenzung gebunden. Verschieben Sie beides oder schraffieren Sie erneut.

## Eine Schraffur, die an ihrer Begrenzung bleibt

Eine mit `HATCH` erstellte Schraffur merkt sich, was sie begrenzt. Verschieben, drehen oder skalieren Sie die Begrenzung, dann gehen die Schraffur und ihr Muster mit. Ziehen Sie an einem Griff, um die Begrenzung umzuformen, dann wird die Schraffur neu berechnet. Verschieben Sie die Schraffur allein, kommt ihre Begrenzung mit, wie eine gefüllte Form in einem Zeichenprogramm.

Die Verknüpfung endet, und die Befehlszeile meldet das, wenn die Begrenzung sich nicht mehr schließt oder Sie die Schraffur von Hand umformen. Die Schraffur selbst bleibt erhalten. Geben Sie beim Schraffieren `AS` ein, um eigenständige Schraffuren zu erstellen. Kopieren Sie eine Schraffur mit ihrer Begrenzung, dann hat die Kopie eine eigene Verknüpfung.

`HATCHEDIT` (`HE`) ändert Muster, Maßstab, Winkel und Ursprung einer Schraffur und verknüpft sie mit einer Begrenzung oder beendet die Verknüpfung. Die Verknüpfung wird in DWG- und DXF-2000-Dateien gespeichert. Eine DXF-R12-Datei hat kein Schraffurobjekt, und Verknüpfungen aus anderen Programmen werden nicht gelesen. Verwenden Sie dafür `HATCHEDIT` und Verknüpfen.

Eine Schraffur, die keine Begrenzung mehr hat (die Begrenzung wurde gelöscht oder die Datei kam ohne sie), kann sie zurückbekommen: `HATCHGENERATEBOUNDARY` (`HGB`) zeichnet eine geschlossene Polylinie um jede Schleife der Schraffur und verknüpft die Schraffur mit ihnen, wenn Sie mit Ja antworten.

## Eine Farbverlaufsfüllung

`GRADIENT` (`GD`) füllt eine Fläche mit einem Farbverlauf statt mit einem Muster. Die Auswahl erfolgt wie bei `HATCH`. Zuvor wird der Typ abgefragt (linear, zylindrisch, kugelförmig, halbkugelförmig, gekrümmt und jeweils invertiert), dann eine Farbe mit Tönung oder zwei Farben, der Winkel und ob zentriert oder nicht. Bei `HATCH` tut die Option `G` dasselbe. `HATCHEDIT` `G` oder {{ui:Eigenschaften}} unter Farbverlauf ändert einen Farbverlauf oder macht eine beliebige Schraffur daraus.

Ein Farbverlauf wird auf dem Bildschirm und in Drucken angezeigt. Speichern Sie als DWG 2004 oder neuer, dann erhalten andere Programme eine echte Farbverlaufsschraffur. DXF 2000 und DWG 2000 kennen keinen Farbverlauf: Dort behält CadCraft ihn für sich, und andere Programme sehen eine Volltonfüllung in der ersten Farbe.

## Schraffur stutzen

`TRIM` schneidet eine Schraffur wie jedes andere Objekt. Klicken Sie die Schraffur auf der Seite der Schneidkante, die entfernt werden soll: Die Kanten teilen die schraffierte Fläche, und dieses Stück wird entfernt. Im Schnellmodus ist jedes Objekt eine Schneidkante. Wählen Sie bei vielen Objekten zuerst die Kanten (Option `T`). Eine gestutzte Schraffur ist nicht mehr mit ihrer Begrenzung verknüpft, weil sie diese nicht mehr ausfüllt.
