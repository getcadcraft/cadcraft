---
title: Splines und Polylinien: SPLINE, SPLINEDIT, PEDIT
summary: Zeichnen Sie eine glatte Kurve durch Punkte oder aus einem Kontrollpolygon, bearbeiten Sie ihre Anpassung und Kontrollpunkte, und bearbeiten Sie Polylinien (verbinden, schließen, Breite, anpassen, Spline, Krümmung aufheben) oder wandeln Sie einen Spline in eine Polylinie um.
keywords: Spline, splinedit, spl, spe, pedit, pe, Anpassungspunkte, Kontrollpunkte, Gewichte, NURBS, Polylinie bearbeiten, verbinden, Anpassungskurve, Krümmung aufheben, in Polylinie umwandeln, Genauigkeit, Tangente, Kurve, Anpassungstoleranz
from: d31f72d8
---

## Was Sie erstellen

Eine Kurve durch fünf Punkte, dieselbe Kurve auf drei Arten bearbeitet, und eine Polylinie aus drei Linien.

## Einen Spline durch Punkte zeichnen

1. Geben Sie `SPL` ein und drücken Sie {{key:Enter}}.
2. Klicken Sie an oder geben Sie die Punkte ein, durch die die Kurve verlaufen soll: `0,0`, `100,80`, `200,-30`, `350,50`, `500,0`. Drücken Sie nach dem letzten Punkt {{key:Enter}}.
3. {{ui:Anfangstangente}}: Klicken Sie einen Punkt an, in dessen Richtung die Kurve verlaufen soll, oder drücken Sie {{key:Enter}}, damit CadCraft entscheidet. Gehen Sie für die Endtangente genauso vor.

Die Kurve verläuft durch jeden Punkt. Geben Sie `C` statt {{key:Enter}} ein, um sie zu schließen (die Kurve kehrt dann zum ersten Punkt zurück). {{key:U}} (`Rückgängig`) nimmt beim Zeichnen den letzten Punkt zurück.

### Eine Kurve aus einem Kontrollpolygon zeichnen

Geben Sie an der ersten Eingabeaufforderung `M` ein, dann `C` (Kontrollpunkte) und einen Grad von 1 bis 5 (3 ist üblich). Die Punkte, die Sie wählen, sind nun die Ecken eines Polygons, das die Kurve zu sich zieht. Die Kurve beginnt am ersten und endet am letzten Punkt. Eine geschlossene Kurve umläuft das Polygon, ohne Ecke an der Verbindungsstelle.

### Eine Polylinie in einen Spline umwandeln

Geben Sie an der ersten Eingabeaufforderung `O` (Objekt) ein und wählen Sie Polylinien oder Linien. Sie werden über ihre Eckpunkte zu Splines; die Originale werden entfernt.

## Einen Spline bearbeiten

Wählen Sie ihn aus und geben Sie `SPE` ein (oder geben Sie `SPE` ein und klicken Sie ihn an). Griffe zeigen die Anpassungspunkte (oder die Kontrollpunkte eines Splines, der keine hat). Ziehen Sie einen Griff, um die Kurve umzuformen. An der Eingabeaufforderung:

- **Anpassungsdaten** (ein Spline, der durch Punkte gezeichnet wurde): `A` fügt einen Anpassungspunkt hinzu (klicken Sie, wo), `D` löscht einen (klicken Sie in seiner Nähe), `M` verschiebt einen (klicken Sie in seiner Nähe und dann die neue Stelle), `T` legt die Endtangenten fest, `P` entfernt die Anpassungspunkte, sodass der Spline danach über seine Kontrollpunkte bearbeitet wird.
- **Eckpunkt bearbeiten**: `A` fügt einen Kontrollpunkt hinzu, ohne die Kurve zu verändern, `M` verschiebt einen, `W` gibt einem ein **Gewicht** (über 1 zieht die Kurve näher an ihn heran, unter 1 lässt sie ihn los).
- **Öffnen** oder **Schließen** sowie **Umkehren** (die Kurve verläuft in die andere Richtung).
- **In Polylinie umwandeln** (`P`): Der Spline wird zu einer Polylinie. Die Genauigkeit gibt an, wie viele Segmente jede Spanne erhält (10 ist üblich).
- **Rückgängig** nimmt die letzte Änderung zurück; **Beenden (X)** beendet den Befehl.

{{ui:Eigenschaften}} zeigt den Grad eines Splines, wie viele Anpassungs- und Kontrollpunkte er hat, seine Länge, und lässt Sie ihn öffnen oder schließen.

## Eine Polylinie bearbeiten

Wählen Sie eine Polylinie aus und geben Sie `PE` ein. Eine Linie, ein Bogen oder ein Spline, den Sie wählen, wird Ihnen zuerst als Polylinie zur Umwandlung angeboten (ein Spline fragt nach der Genauigkeit).

- **Schließen** / **Öffnen** verbindet oder trennt die Enden.
- **Verbinden** fügt Linien, Bögen und Polylinien hinzu, deren Enden auf das Ende der Polylinie treffen. `Fuzz distance` ist, wie weit die Enden auseinanderliegen dürfen und trotzdem verbunden werden (0 bedeutet, dass sie sich treffen müssen).
- **Breite** gibt der gesamten Polylinie eine einheitliche Breite (0 entfernt sie).
- **Anpassen** ersetzt die Polylinie durch eine glatte Kurve, die durch ihre Eckpunkte verläuft. **Spline** ersetzt sie durch einen kubischen B-Spline, der ihnen folgt (er beginnt und endet am ersten und letzten Eckpunkt und bleibt nahe den übrigen). Beide werden zu einer Polylinie aus kurzen Segmenten, und die ursprünglichen Ecken bleiben erhalten, sodass **Krümmung aufheben** sie zurückbringt.
- **Linientyp erzeugen** legt fest, ob ein gestrichelter Linientyp über die gesamte Polylinie läuft oder an jedem Eckpunkt neu beginnt.
- **Umkehren** ändert die Reihenfolge ihrer Eckpunkte. **Mehrere** (`M` an der ersten Eingabeaufforderung) bearbeitet mehrere Polylinien mit denselben Optionen.

Die Eckpunkte einer Polylinie im Bereich {{ui:Eigenschaften}} oder mit Griffen zu bearbeiten, bleibt wie zuvor: PEDIT hat keinen Eckpunkt-Editor.

## In Dateien

DWG und DXF 2000 behalten einen Spline als Spline: Grad, Kontrollpunkte, Knoten, Gewichte, Anpassungspunkte und Tangenten. Ein Spline, den Sie öffnen und nicht ändern, wird genau so zurückgeschrieben, wie er war. DXF R12 kennt keinen Spline: Er wird als Polylinie entlang der Kurve gespeichert, und der Verlauf sagt, aus wie vielen Segmenten.

Versatz, Stutzen, Dehnen, Abrunden, Brechen und Verbinden funktionieren nicht bei Splines. Wenden Sie {{cmd:EXPLODE}} auf einen Spline an oder {{cmd:PEDIT}}, um eine Polylinie zu erhalten, die diese Befehle verarbeiten.

## Häufige Fehler

- **Die Kurve schwingt zwischen nahen Punkten über.** Eine Kurve durch Punkte biegt sich dort, wo die Punkte liegen. Verwenden Sie weniger Punkte oder ein Kontrollpolygon.
- **„Das ist kein Spline.“** SPLINEDIT nimmt nur Splines an; {{cmd:PEDIT}} bearbeitet Polylinien.
- **Ein geschlossener Anpassungs-Spline hat in einem anderen Programm eine leicht andere Form.** CadCraft schließt ihn mit einer glatten Verbindung am ersten Punkt. Ein anderes Programm schließt ihn möglicherweise mit einer periodischen Kurve. Ein geschlossener Spline mit Kontrollpunkten ist in beiden gleich.
