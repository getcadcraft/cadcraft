---
title: Mit dem Stift skizzieren und präzise Geometrie erhalten
summary: Mit Stift, Maus oder Finger frei zeichnen, und jeder Strich wird beim Abheben des Stifts zu einer sauberen Linie, einem Kreis, Bogen, Rechteck oder einer Polylinie, am bereits Gezeichneten gefangen, mit seiner Größe bereit zum Überschreiben.
keywords: skizzieren, Stift, Eingabestift, Freihand, Finger, aufräumen, präzise, fangen, SKETCHLIVE, SKETCHFIX, Größe, überschreiben, Druck, Linienstärke, Apple Pencil, PENPRESSURE
from: bfb4027b
---

Starten Sie {{cmd:SKETCHLIVE}} (oder wählen Sie **Zeichnen › Mehr › Mit dem Stift skizzieren**) und zeichnen Sie einen Strich, indem Sie drücken und ziehen. Wenn Sie den Stift abheben, liest CadCraft, was Sie meinten, und setzt es in die Zeichnung:

| Ihr Strich | Was Sie erhalten |
|---|---|
| Fast gerade | Eine Linie. Eine fast waagrechte oder senkrechte Linie wird genau waagrecht oder senkrecht gemacht. |
| Geschlossen und rund | Ein Kreis |
| Teil einer runden Form | Ein Bogen |
| Geschlossen mit vier rechtwinkligen Ecken | Ein Rechteck |
| Alles andere | Eine Polylinie mit rechtwinkligen Seiten |

Die Enden eines Strichs werden an das nächste Ende dessen gezogen, was bereits gezeichnet ist, sodass eine skizzierte Wand an die Wand daneben anschließt.

## Die Größe überschreiben

Nach jedem Strich zeigt die Befehlszeile seine Größe (die **Länge** einer Linie, den **Radius** eines Kreises oder Bogens, die **Breite** eines Rechtecks) als Vorgabe. Drücken Sie {{key:Enter}}, um sie zu behalten, oder geben Sie eine Zahl oder eine Länge wie `12'6"` ein, um sie zu ersetzen. Eine Linie behält ihr erstes Ende, ein Kreis seinen Mittelpunkt, ein Rechteck seine erste Ecke.

Drücken Sie {{key:Enter}} bei einer leeren Eingabeaufforderung, um abzuschließen, oder geben Sie `U` ein, um den letzten Strich zurückzunehmen. Die ganze Sitzung ist ein Rückgängig-Schritt.

## Mehrere Striche auf einmal aufräumen

{{cmd:SKETCHFIX}} sammelt Striche und macht alle präzise, wenn Sie {{key:Enter}} drücken; das passt zu einem schnell gezeichneten, groben Entwurf.

:::note
Alles wird auf Ihrem Computer nach Regeln berechnet, ohne Modell und ohne dass etwas irgendwohin gesendet wird.
:::

## Druck legt die Linienstärke fest

Wo der Stift für die Apps eingeschaltet ist (Einstellungen › Global › Eingabegeräte › Stift), trägt ein mit dem Stift gezeichneter Strich jeden Punkt, den der Stift gab, und seinen Druck. Ein leichter Strich ergibt ein dünnes Objekt, ein fester ein starkes: Der mittlere Druck des Strichs wählt 0,18, 0,25, 0,35 oder 0,50 mm, und die Befehlszeile sagt, welcher. Striche mit Maus oder Finger übernehmen die aktuelle Linienstärke wie bisher. {{cmd:PENPRESSURE}} schaltet dies aus (oder wieder ein); die Wahl wird in diesem Browser gespeichert.
