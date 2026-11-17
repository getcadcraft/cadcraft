---
title: Einheiten einer Zeichnung prüfen
summary: Prüfen, ob eine geöffnete Zeichnung in Millimetern, Zoll oder einer anderen Einheit ist, durch Messen kontrollieren und wissen, warum ein anderes Programm für dieselbe DXF andere Einheiten nennen kann.
keywords: Einheiten, welche Einheiten, Einheiten prüfen, Millimeter, mm, Zoll, metrisch, imperial, DXF-Einheiten, STEP zu DXF, falsche Einheiten, Zoll oder mm, INSUNITS, MEASUREMENT, Zeichnungseinheiten, PartCraft DXF
from: c0ee75bb
---

## Was Sie hier tun

Herausfinden, wofür eine Einheit in einer geöffneten Zeichnung steht, und sicherstellen, dass die abgelesenen Zahlen die Größe haben, die Sie erwarten.

## Schritte

1. Öffnen Sie die Zeichnung und drücken Sie {{key:Esc}}, damit nichts ausgewählt ist, auf der Registerkarte {{ui:Modell}}.
2. Lesen Sie im rechten Bereich unter {{ui:Aktuelle Einstellungen}} den Wert von {{ui:Einheiten}} ab. Er sagt, wofür eine Zeichnungseinheit steht: {{ui:Millimeter}}, {{ui:Zoll}}, {{ui:Fuß}} und so weiter. Eine aus PartCraft gespeicherte DXF nennt {{ui:Millimeter}}.
3. Prüfen Sie es durch Messen von etwas, dessen Größe Sie kennen. Geben Sie {{cmd:DIST}} ein und wählen Sie die beiden Enden einer Kante oder einer Bohrung. Wenn ein Bauteil, dessen Maß Sie kennen, 25 mm groß ist und `25` angezeigt wird, ist die Zeichnung in Millimetern; wird etwa `0.98` angezeigt, ist sie in Zoll.

{{ui:Einheitenlos}} bedeutet, dass die Datei dazu nichts angibt. CadCraft behandelt sie dann als Einheit des Papiers (Millimeter bei ISO-Papier, Zoll bei US-Papier), und die Zahlen sind nur so richtig wie das Programm, das sie geschrieben hat.

## Wenn die Einheiten falsch sind

Eine Änderung von {{ui:Einheiten}} **ändert keine Größe**: Die Zahlen bleiben gleich, nur ihre Bedeutung ändert sich. Stellen Sie die Einheit deshalb nur so ein, dass sie zeigt, was die Zeichnung wirklich ist. Wenn die Zahlen Millimeter sind und {{ui:Einheiten}} {{ui:Zoll}} anzeigt, wählen Sie {{ui:Millimeter}}. Wenn Sie die Geometrie selbst in anderen Einheiten brauchen, skalieren Sie sie mit {{cmd:SCALE}} (25.4 von Zoll zu Millimetern, 1/25.4 in die andere Richtung) und stellen danach {{ui:Einheiten}} ein.

Wie Längen geschrieben werden (dezimal, Fuß und Zoll, Brüche), ist eine eigene Einstellung, {{ui:Längenformat}}: siehe [Einheiten, Papiergrößen und Maßstäbe](topic:units-papers-scales).

## Warum ein anderes Programm Zoll nennen kann

Eine DXF nennt ihre Einheiten in ihrem Kopfbereich. Die älteste Art von DXF, R12, hatte gar keine Variable für Einheiten. Ein Programm, das R12 streng liest, ignoriert deshalb die dort geschriebene Angabe und nimmt seinen eigenen Standardwert, der oft Zoll ist. Die Geometrie in der Datei ist in beiden Fällen dieselbe; nur die Bezeichnung unterscheidet sich. PartCraft schreibt seine DXF-Dateien als R12 und gibt Millimeter auf zwei Arten an (`$INSUNITS` 4 und `$MEASUREMENT` 1), damit mehr Programme sie richtig lesen. Wenn ein Programm weiterhin Zoll anzeigt, stellen Sie beim Öffnen der Datei seine Einheiten auf Millimeter ein.

Eine Datei in eine Zeichnung zu holen (statt sie zu öffnen) rechnet ihre Einheiten um: siehe [Einheiten beim Import](topic:units-on-import).
