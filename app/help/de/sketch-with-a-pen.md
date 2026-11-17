---
title: Mit dem Stift skizzieren und präzise Geometrie erhalten
summary: Zeichnen Sie mit Stift, Maus oder Finger freihand. Beim Absetzen des Stifts wird jeder Strich zu einer sauberen Linie, einem Kreis, Bogen, Rechteck oder einer Polylinie, am bereits Gezeichneten eingefangen, mit seiner Größe zum Überschreiben bereit.
keywords: skizzieren, Stift, Eingabestift, Freihand, Finger, aufräumen, präzise, Fang, SKETCHLIVE, SKETCHFIX, Größe, überschreiben
from: cd87eb75
---

Starten Sie {{cmd:SKETCHLIVE}} (oder wählen Sie **Zeichnen › Mehr › Mit dem Stift skizzieren**) und zeichnen Sie einen Strich, indem Sie den Stift drücken und ziehen. Wenn Sie den Stift absetzen, erkennt CadCraft, was Sie gemeint haben, und fügt es in die Zeichnung ein:

| Ihr Strich | Was Sie erhalten |
|---|---|
| Fast gerade | Eine Linie. Eine nahezu waagerechte oder senkrechte Linie wird genau waagerecht bzw. senkrecht ausgerichtet. |
| Geschlossen und rund | Ein Kreis |
| Teil einer runden Form | Ein Bogen |
| Geschlossen mit vier rechtwinkligen Ecken | Ein Rechteck |
| Alles andere | Eine Polylinie mit rechtwinkligen Seiten |

Die Enden eines Strichs werden an das nächstgelegene Ende des bereits Gezeichneten herangezogen, sodass eine skizzierte Wand an die daneben liegende Wand anschließt.

## Größe überschreiben

Nach jedem Strich zeigt die Befehlszeile dessen Größe als Vorgabe an (die **Länge** einer Linie, den **Radius** eines Kreises oder Bogens, die **Breite** eines Rechtecks). Drücken Sie {{key:Enter}}, um sie beizubehalten, oder geben Sie eine Zahl oder eine Länge wie `12'6"` ein, um sie zu ersetzen. Eine Linie behält ihren ersten Endpunkt, ein Kreis seinen Mittelpunkt, ein Rechteck seine erste Ecke.

Drücken Sie {{key:Enter}} an einer leeren Eingabeaufforderung, um abzuschließen, oder geben Sie `U` ein, um den letzten Strich zurückzunehmen. Die gesamte Sitzung ist ein einziger Schritt für Rückgängig.

## Mehrere Striche gleichzeitig bereinigen

{{cmd:SKETCHFIX}} sammelt Striche und macht sie alle präzise, sobald Sie {{key:Enter}} drücken. Das eignet sich für einen schnell gezeichneten, groben Entwurf.

:::note
Alles wird auf Ihrem Computer nach Regeln berechnet, ohne Modell, und nichts wird irgendwohin gesendet.
:::
