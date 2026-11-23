---
title: Schraffur und Flächenfüllung
summary: Eine Fläche mit einer Vollfarbe oder einem Standardmuster füllen, indem Sie innen klicken oder geschlossene Formen wählen, Maßstab und Winkel des Musters festlegen und eine Schraffur danach ändern.
keywords: Schraffur, bhatch, füllen, Vollfläche, Muster, ansi31, ansi37, Ziegel, Erde, Netz, Schnittlinien, Schwarzfläche, Insel, Begrenzung, Maßstab, Winkel
from: e7feb344
---

## Was Sie erstellen

Ein Wandschnitt, gefüllt mit dem Muster ANSI31, eine Stütze darin bleibt leer, und eine Vollfläche in der Stütze.

## Schraffieren durch Klicken innerhalb einer Fläche

1. Zeichnen Sie ein Rechteck (`REC`, `0,0`, `@2000,1200`) und einen Kreis darin (`C`, `1000,600`, `300`). Klicken Sie auf {{ui:Grenzen}}.
2. Klicken Sie auf {{ui:Schraffur}} in der Gruppe {{ui:Zeichnen}} oder geben Sie `H` ein und drücken Sie {{key:Enter}}. Der Verlauf sagt, welches Muster aktuell ist, zum Beispiel `Aktuelle Schraffur: ANSI31, Maßstab 1, Winkel 0°`.
3. Geben Sie `P` ein und drücken Sie {{key:Enter}}, geben Sie `ANSI31` ein und drücken Sie {{key:Enter}}.
4. Geben Sie `SC` ein und drücken Sie {{key:Enter}}, geben Sie `20` ein und drücken Sie {{key:Enter}}. Musterabstände gelten auf dem Papier; eine Zeichnung, die 1:20 gedruckt wird, braucht den Maßstab 20.
5. Bei `Innenpunkt wählen` klicken Sie innerhalb des Rechtecks, außerhalb des Kreises. Die Schraffur erscheint als Vorschau.
6. Drücken Sie {{key:Enter}}. Das Rechteck ist schraffiert; der Kreis darin bleibt leer, weil er eine Insel ist.

Klicken Sie innerhalb mehrerer Flächen, bevor Sie {{key:Enter}} drücken, um sie zu einer Schraffur zu machen. `U` nimmt die letzte Fläche zurück.

## Eine Vollfläche

1. Geben Sie `H` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `P` ein, drücken Sie {{key:Enter}}, geben Sie `SOLID` ein und drücken Sie {{key:Enter}}.
3. Klicken Sie innerhalb des Kreises und drücken Sie dann {{key:Enter}}.

## Geschlossene Formen wählen, die Sie angeben

Statt innen zu klicken, geben Sie bei `Innenpunkt wählen` `S` (Objekte wählen) ein und wählen geschlossene Polylinien, Kreise oder geschlossene Ellipsen; drücken Sie danach {{key:Enter}}. Formen innerhalb anderer bleiben der Reihe nach leer (die äußere ist schraffiert, die nächste innen leer, und so weiter).

## Muster

Geben Sie bei der Frage nach dem Muster `?` ein, um die Liste zu sehen. Die Standardmuster sind ANSI31 bis ANSI38, LINE, NET, NET3, DASH, SQUARE, BRICK, DOTS und EARTH sowie SOLID. In einer Zeichnung in Zoll (oder mit Fuß und Zoll als Längenformat) werden die Zollgrößen der Muster verwendet, wie in AutoCAD; sonst die Millimetergrößen.

{{ui:Winkel}} (`A`) dreht das ganze Muster: ANSI31 bei 90° verläuft in die andere Richtung.

**Musterdateien.** Geben Sie bei `Innenpunkt wählen` `F` (Musterdatei) ein und wählen Sie eine `.pat`-Datei. Die Muster darin kommen zur Liste; bei mehr als einem werden Sie gefragt, welches Sie verwenden möchten. Eine Datei ohne Muster, das CadCraft lesen kann, meldet das, und jedes übersprungene Muster wird gezählt. Maßangaben in einer `.pat`-Datei haben keine eigene Einheit; sie werden in den Einheiten der Zeichnung gelesen. Es wurden nur Dateien im üblichen `.pat`-Format geprüft; keine, die ein anderes Programm erstellt hat.

## Eine Schraffur ändern

Wählen Sie sie aus (klicken Sie auf eine ihrer Linien). Unter {{ui:Eigenschaften}}: {{ui:Muster}}, {{ui:Musterskalierung}} und {{ui:Musterwinkel}}. Schraffuren aus geöffneten Zeichnungen zeigen ihr Muster, wenn es eines der Standardmuster ist; andere erscheinen als helle Tönung ihrer Farbe.

## Häufige Fehler

- **„Keine geschlossene Begrenzung um diesen Punkt.“** Die Umrandung hat eine Lücke, oder ein Teil liegt außerhalb des Bildschirms: CadCraft schaut nur auf das, was auf dem Bildschirm ist. Schließen Sie die Lücke (zoomen Sie auf die Ecken) oder zoomen Sie heraus.
- **„Das Muster ist zu dicht, um es in diesem Maßstab zu zeichnen.“** Die Linien lägen enger, als die Zeichnung zeigen kann. Verwenden Sie einen größeren Maßstab: Probieren Sie den Plotmaßstab (20 für 1:20).
- **Das Muster wirkt riesig oder winzig.** Der Maßstab ist in Zeicheneinheiten je Mustereinheit angegeben; siehe Schritt 4 oben.
- **Die Schraffur folgt ihrer Umrandung nicht mehr.** Eine mit {{cmd:HATCH}} erstellte Schraffur bleibt bei den Objekten, aus denen sie erstellt wurde: Verschieben, drehen oder skalieren Sie die Umrandung, folgt die Schraffur; formen Sie sie mit einem Griff um, wird die Schraffur neu berechnet. Die Verknüpfung endet, wenn sich die Umrandung nicht mehr schließt, wenn Sie die Schraffur selbst von Hand umformen oder wenn Sie sie stutzen; die Befehlszeile sagt es. Nichts geht verloren: Schraffieren Sie die Fläche erneut, um sie neu zu verknüpfen.

## Eine Schraffur, die an ihrer Begrenzung bleibt

Eine mit `HATCH` erstellte Schraffur merkt sich, was sie begrenzt. Verschieben, drehen oder skalieren Sie die Begrenzung, folgen die Schraffur und ihr Muster. Ziehen Sie einen Griff, um die Begrenzung umzuformen, wird die Schraffur neu berechnet. Verschieben Sie die Schraffur allein, kommt ihre Begrenzung mit, wie eine gefüllte Form in einem Zeichenprogramm.

Die Verknüpfung endet, und die Befehlszeile sagt es, wenn die Begrenzung sich nicht mehr schließt oder Sie die Schraffur von Hand umformen. Die Schraffur selbst bleibt. Geben Sie `AS` beim Schraffieren ein, um eigenständige Schraffuren zu erstellen. Kopieren Sie eine Schraffur mit ihrer Begrenzung, hat die Kopie ihre eigene Verknüpfung.

`HATCHEDIT` (`HE`) ändert Muster, Maßstab, Winkel und Ursprung einer Schraffur und verknüpft sie mit einer Begrenzung oder beendet die Verknüpfung. Die Verknüpfung wird in DWG- und DXF-2000-Dateien gespeichert. Eine DXF-R12-Datei hat kein Schraffurobjekt, und Verknüpfungen aus anderen Programmen werden nicht gelesen: Verwenden Sie dafür `HATCHEDIT` und Verknüpfen.

Eine Schraffur, die keine Begrenzung mehr hat (die Begrenzung wurde gelöscht oder die Datei kam ohne sie), können Sie wiederherstellen: `HATCHGENERATEBOUNDARY` (`HGB`) zeichnet eine geschlossene Polylinie um jede Schleife der Schraffur und verknüpft die Schraffur mit ihnen, wenn Sie Ja antworten.

## Eine Verlauffüllung

`GRADIENT` (`GD`) füllt eine Fläche mit einem Verlauf statt mit einem Muster: dieselben Auswahlen wie `HATCH`, nachdem er die Art fragt (linear, zylindrisch, kugelförmig, halbkugelförmig, gekrümmt, und jede davon umgekehrt), eine Farbe mit Tönung oder zwei Farben, den Winkel und zentriert oder nicht. In `HATCH` tut die Option `G` dasselbe. `HATCHEDIT` `G` oder {{ui:Eigenschaften}} unter Verlauf ändert einen Verlauf oder macht eine beliebige Schraffur daraus.

Ein Verlauf wird auf dem Bildschirm und in Plots angezeigt. Speichern Sie als DWG 2004 oder neuer, erhalten andere Programme eine echte Verlaufsschraffur. DXF 2000 und DWG 2000 haben keinen Verlauf: Dort behält CadCraft ihn für sich, und andere Programme sehen eine Vollfläche in der ersten Farbe.

## Eine Schraffur stutzen

`TRIM` schneidet eine Schraffur wie jedes andere Objekt. Klicken Sie auf die Schraffur an der Seite der Schneidkante, die weg soll: Die Kanten teilen die schraffierte Fläche, und dieses Stück wird entfernt. Im Schnellmodus ist jedes Objekt eine Schneidkante; wählen Sie die Kanten zuerst (Option `T`), wenn es viele sind. Eine gestutzte Schraffur ist nicht mehr mit ihrer Begrenzung verknüpft, weil sie sie nicht mehr füllt.
