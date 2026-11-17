---
title: Auswahl mit Lasso
summary: Halten Sie die Maustaste gedrückt und ziehen Sie einen Freihand-Umriss um Objekte, um sie als Fenster, Kreuzen oder Zaun auszuwählen; mit Space wechseln Sie während des Ziehens.
keywords: lasso, lassomode, ziehen, Freihand, auswählen, Auswahl, Fenster, Kreuzen, Zaun, Space, Polygon, Touch, Stift, Rechteck
from: 9ec6154d
---

## Was Sie lernen

Wie Sie Objekte auswählen, indem Sie einen Umriss um sie zeichnen, und wie Sie das Rechteck zurückholen, wenn Sie es wieder brauchen.

## Ein Lasso zeichnen

1. Zeichnen Sie einige Linien und Kreise dicht beieinander.
2. Ohne laufenden Befehl drücken Sie die Maustaste auf einer leeren Stelle und ziehen Sie um einige davon, dabei zuerst **nach rechts** bewegen.
3. Lassen Sie los.

Nur Objekte, die vollständig innerhalb des Umrisses liegen, werden ausgewählt. Der Umriss wird beim Ziehen durchgezogen gezeichnet: Das ist ein Fenster-Lasso.

## Fenster, Kreuzen und Zaun

Welche Objekte Sie erhalten, hängt von der ersten Bewegung Ihres Ziehens ab und von {{key:Space}}:

| Sie ziehen | Lasso | Wählt aus |
|---|---|---|
| Zuerst nach rechts | Fenster (durchgezogener Umriss) | Nur Objekte **vollständig innerhalb** |
| Zuerst nach links | Kreuzen (gestrichelt, grün) | Objekte innerhalb **und** Objekte, die der Umriss berührt |
| {{key:Space}} drücken während des Ziehens | Fenster, dann Kreuzen, dann Zaun | Zaun (ein gestrichelter, nicht geschlossener Pfad): nur Objekte, die der Pfad kreuzt |

1. Drücken Sie auf einer leeren Stelle und ziehen Sie um einige Objekte, dabei zuerst **nach links** bewegen. Alles, was der Umriss berührt, wird ebenfalls ausgewählt.
2. Drücken Sie {{key:Esc}}.
3. Drücken und ziehen Sie erneut; halten Sie die Maustaste gedrückt und drücken Sie {{key:Space}} einmal. Der Umriss wird zu einem Kreuzen; drücken Sie {{key:Space}} erneut für einen Zaun.

Wenn Sie loslassen, während {{key:Shift}} gedrückt ist, werden die Objekte stattdessen aus der Auswahl entfernt (mit „Objekte anklicken: Hinzufügen“ in den Einstellungen).

## Innerhalb eines Befehls

Ein Lasso funktioniert überall, wo CadCraft `Select objects` fragt: Zeichnen Sie es und drücken Sie {{key:Enter}}, um es abzuschließen. {{cmd:STRETCH}} übernimmt ein Kreuzen-Lasso als sein Fenster, sodass Sie einen L-förmigen Teil einer Zeichnung in einem Zug strecken können.

{{cmd:TRIM}} und {{cmd:EXTEND}} verwenden das Ziehen anders: Dort wird jedes Stück, das der Pfad kreuzt, gestutzt (oder gedehnt). Siehe [Stutzen und Dehnen](topic:trim-and-extend).

## Das Rechteck

Ein Klick auf eine leere Stelle, eine Bewegung und ein zweiter Klick zeichnen immer das Rechteck als Fenster (von links nach rechts) oder als Kreuzen (von rechts nach links).

Damit ein Ziehen wieder das Rechteck zeichnet, öffnen Sie {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Auswahl durch Ziehen}} und wählen {{ui:Rechteck}}, oder geben Sie {{cmd:LASSOMODE}} ein, dann `0`. Geben Sie {{cmd:LASSOMODE}} ein, dann `1` für das Lasso. Die Wahl wird in diesem Browser gespeichert.

:::touch
Ziehen Sie mit einem Finger oder einem Stift auf die gleiche Weise. Ein Tippen wählt weiterhin ein einzelnes Objekt aus.
:::

## Häufige Fehler

- **Nichts wurde ausgewählt.** Das Lasso war ein Fenster und nichts lag vollständig darin. Beginnen Sie das Ziehen nach links oder drücken Sie {{key:Space}} während des Ziehens.
- **Das Ziehen hat einen Griff verschoben.** Drücken auf den Griff eines ausgewählten Objekts verschiebt den Griff. Beginnen Sie das Lasso auf einer leeren Stelle.
- **Space hat den Befehl beendet.** {{key:Space}} wechselt das Lasso nur, solange die Maustaste gedrückt ist; sonst wirkt es wie {{key:Enter}}.
