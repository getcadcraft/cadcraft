---
title: Punkte für BIM-Programme
summary: Exportieren Sie Punkte und die Einfügepunkte von Blöcken mit Beschreibung in eine CSV- oder TXT-Datei, die BIM- und Vermessungsprogramme importieren.
keywords: exportpoints, Punkte exportieren, Punkte, csv, txt, pnezd, penzd, xyz, Vermessungspunkte, Koordinaten, bim, Absteckung, Punktdatei, Hochwert, Rechtswert, Höhe
from: d80e2d53
---

## Was Sie erstellen

Eine Punktdatei: eine Zeile pro Punkt, mit seiner Nummer, dem Hochwert, dem Rechtswert, der Höhe und der Beschreibung. BIM-Programme (darunter Revit und Archicad) und Vermessungssoftware können sie importieren, um Vermessungspunkte, Standortmarkierungen oder Geräte zu platzieren.

## Die Punkte exportieren

1. Wählen Sie die Punkte und die Blockreferenzen, deren Einfügepunkte Sie möchten, oder wählen Sie nichts, um jeden Punkt zu nehmen.
2. Geben Sie {{cmd:EXPORTPOINTS}} (oder `EXPPTS`, oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Punkte exportieren}}) ein und drücken Sie {{key:Enter}}. Drücken Sie {{key:Enter}} erneut bei `Punkte und Blöcke wählen`, wenn nichts gewählt wurde.
3. Wenn Sie Blöcke mit Attributen gewählt haben, listet CadCraft deren Tags auf: Geben Sie den Tag ein, dessen Wert die Beschreibung ist (zum Beispiel `ITEM`), oder etwas anderes, um den Namen jedes Blocks zu nutzen.
4. Wählen Sie die Spalten: `PNEZD` (Punkt, Hochwert, Rechtswert, Höhe, Beschreibung: die übliche), `PENZD` (Rechtswert vor Hochwert) oder `XYZ` (nur die Koordinaten).
5. Wählen Sie die Einheiten: `D` wie gezeichnet, oder `M` für Meter oder `F` für Fuß (nur wenn die Einheiten der Zeichnung gesetzt sind: {{ui:Eigenschaften}} › {{ui:Einheiten}} bei nichts Gewähltem).
6. Mit einem gesetzten BKS wählen Sie `W` für Weltkoordinaten oder `U` für BKS-Koordinaten (siehe [BKS und gedrehte Ansicht](topic:ucs-and-turned-view)).
7. Wählen Sie `C` für eine kommagetrennte `.csv` oder `T` für eine tabulatorgetrennte `.txt`, und die erste Punktnummer.

Die Datei wird als `<drawing>-points.csv` (oder `.txt`) heruntergeladen, und der Verlauf sagt, wie viele Punkte sie enthält.

## Was in der Datei steht

- Ein Punkt pro Zeile, jede Zeile endet mit einem Zeilenumbruch (CR LF), drei Dezimalstellen.
- Die Höhe eines Punkts ist seine Z-Koordinate (0, wenn er keine hat). Der Punkt eines Blocks ist sein Einfügepunkt.
- Eine Beschreibung mit einem Komma (oder einem Tabulator in einer TXT) oder einem Anführungszeichen wird in doppelte Anführungszeichen gesetzt, wobei die Anführungszeichen darin verdoppelt werden.
- Das Format ist das, das CivilCraft liest und schreibt, daher öffnet sich die Datei dort ebenfalls als Punkte.

## Häufige Fehler

- Für die Einheiten wird nur `D` angeboten: Die Zeichnung hat keine Einheiten. Stellen Sie sie ein oder rechnen Sie im anderen Programm um.
- Die Punkte liegen im anderen Programm weit weg von dort, wo Sie sie erwarten: Exportieren Sie Weltkoordinaten (`W`) oder das BKS, das der Vermessungspunkt des anderen Programms nutzt (`U`).
