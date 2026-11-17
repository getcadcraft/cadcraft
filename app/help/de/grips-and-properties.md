---
title: Mit Griffen und Eigenschaften bearbeiten
summary: Objekte über ihre Griffe strecken, verschieben und in der Größe ändern und exakte Längen, Radien, Winkel und Koordinaten im Bereich Eigenschaften eingeben.
keywords: Griffe, Eigenschaften, strecken, Länge, Radius, Koordinaten, bearbeiten, Schnelleigenschaften, Eigenschaftenpalette, ändern, Layer, Farbe, color
from: f22541ba
---

## Was Sie lernen

Zwei schnelle Wege, ein Objekt ohne Befehl zu ändern: Ziehen Sie seine **Griffe**, oder geben Sie neue Werte im Bereich **Eigenschaften** rechts ein.

## Griffe

Wenn Sie Objekte auswählen (bis zu 200 gleichzeitig), während kein Befehl läuft, erscheinen kleine Quadrate an ihnen. Das sind die Griffe:

| Objekt | Griffe |
|---|---|
| Linie | Beide Enden und die Mitte (verschiebt die ganze Linie) |
| Kreis | Das Zentrum (verschiebt ihn) und vier Punkte auf dem Kreis (ändern den Radius) |
| Bogen | Das Zentrum und beide Enden (ändern, wo er beginnt und endet) |
| Polylinie | Jeder Eckpunkt |
| Text, Punkt, Blockreferenz | Der Einfügepunkt |
| Ellipse | Das Zentrum |
| Bemaßung | Ihre definierenden Punkte und die Lage der Maßlinie |
| Ansichtsfenster | Das Zentrum (verschiebt es) und die vier Ecken (ändern die Größe) |

### Einen Griff verschieben

1. Zeichnen Sie eine Linie und klicken Sie darauf. Drei Griffe erscheinen.
2. Klicken Sie auf den Griff an einem Ende. In der Statusleiste steht „Klicken Sie, wohin dieser Griff soll (Esc zum Abbrechen). Fang und Ortho gelten.“
3. Bewegen Sie das Fadenkreuz. Eine Vorschau folgt.
4. Klicken Sie auf die neue Position, oder rasten Sie auf einem Punkt eines anderen Objekts ein und klicken Sie.

Das Ende bewegt sich, der Rest der Linie bleibt stehen. Sie können auch auf einen Griff drücken und ihn ziehen und dann loslassen, wo er hin soll.

:::note
Für einen Griff können Sie keine Koordinate eingeben. Für eine exakte Position rasten Sie auf einen Punkt ein oder geben den Wert im Bereich Eigenschaften ein.
:::

Drücken Sie {{key:Esc}} oder klicken Sie mit der rechten Maustaste, um das Verschieben eines Griffs abzubrechen.

## Eigenschaften

Der rechte Bereich zeigt die Eigenschaften des Ausgewählten.

1. Klicken Sie auf eine Linie. Die Überschrift des Bereichs lautet „Linie“.
2. Klicken Sie in {{ui:Länge}}, geben Sie `2500` ein und drücken Sie {{key:Enter}}.

Die Linie ist jetzt genau 2500 lang und behält ihren Startpunkt und Winkel. {{key:Enter}} oder ein Klick woanders übernimmt einen Wert; {{key:Esc}} setzt den alten Wert zurück. Jede Änderung ist ein Rückgängig-Schritt, auch wenn viele Objekte gleichzeitig geändert werden.

Felder nehmen Ausdrücke (`=2*45`) und Längen mit Einheiten (`3'6"`, `900mm`) an, jeder Punkt hat X, Y und Z, und mehrere Objekte lassen sich zusammen ändern. Alles dazu steht unter [Der Bereich Eigenschaften](topic:properties-panel).

## Häufige Fehler

- **Keine Griffe erscheinen.** Ein Befehl läuft (drücken Sie {{key:Esc}}), oder mehr als 200 Objekte sind ausgewählt, oder das Objekt liegt auf einem gesperrten Layer.
- **Der Griff ist an der falschen Stelle.** Ein Fang hat ihn erfasst. Halten Sie {{key:Shift}} beim Klicken gedrückt, um Fänge zu ignorieren.
- **Eingabe im Bereich Eigenschaften bewirkte nichts.** Drücken Sie {{key:Enter}} oder klicken Sie woanders, um sie zu übernehmen. Eine abgelehnte Eingabe (Länge oder Radius null oder negativ, Text, der kein Wert ist) färbt das Feld rot und sagt, warum.
- **Eingetippte Buchstaben landeten in einem Eigenschaften-Feld.** Solange ein Feld den Cursor hat, werden Tasten dort eingegeben. Drücken Sie {{key:Enter}} oder {{key:Esc}} und geben Sie dann den Befehl ein.
