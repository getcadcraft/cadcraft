---
title: Den Bildschirm teilen
summary: Zeigen Sie die Zeichnung in zwei, drei oder vier Teilfenstern, jeweils mit eigenem Zoom, stellen Sie ein Blatt neben das Modell und öffnen Sie mehrere Zeichnungen nebeneinander.
keywords: teilen, Bildschirm teilen, Teilfenster, vports, Ansichtsfenster, kacheln, nebeneinander, untereinander, zwei Zeichnungen, Registerkarten, Dokumentregisterkarten, vergleichen, Trennlinie, Modell und Blatt, mehrere Zeichnungen, geöffnete Zeichnungen
from: ee2f034b
---

## Was Sie lernen

Wie Sie eine Zeichnung in mehreren Teilfenstern gleichzeitig betrachten, jeweils mit eigenem Zoom, und wie Sie mehrere Zeichnungen öffnen und nebeneinander sehen.

## Eine Zeichnung in Teilfenster aufteilen

1. Öffnen Sie eine Zeichnung oder zeichnen Sie einige Linien und Kreise.
2. Öffnen Sie {{ui:Ansicht}} › {{ui:Mehr}} und wählen Sie {{ui:Nebeneinander teilen}} (oder geben Sie {{cmd:VPORTS}}, dann `2` und {{key:Enter}} ein).

Der Zeichenbereich teilt sich in zwei Teilfenster, die beide dieselbe Ansicht zeigen. Das aktive Teilfenster hat einen blauen Rahmen und erhält das Fadenkreuz.

3. Klicken Sie in das andere Teilfenster. Es wird aktiv. (Dieser erste Klick wechselt nur das Teilfenster; klicken Sie noch einmal, um zu wählen.)
4. Zoomen Sie mit dem Mausrad. Nur dieses Teilfenster wird gezoomt.
5. Ziehen Sie die Linie zwischen den Teilfenstern, um eines breiter zu machen. {{key:Home}} auf einer fokussierten Trennlinie setzt sie wieder in die Mitte.

{{cmd:VPORTS}} akzeptiert auch `3` (zwei Teilfenster auf einer Seite und ein großes auf der anderen: `L` oder `R`), `4` und `SI`, um wieder ein einziges Teilfenster anzuzeigen. Die Ansicht des aktiven Teilfensters füllt dann den Bereich. Auf einem Blatt fügt {{cmd:VPORTS}} stattdessen ein Ansichtsfenster zum Blatt hinzu (wie in AutoCAD). Geben Sie dort {{cmd:SPLIT}} ein oder verwenden Sie das Menü Ansicht.

## Aus einem Teilfenster in ein anderes zeichnen

1. Teilen Sie nebeneinander und zoomen Sie jedes Teilfenster auf eine andere Ecke der Zeichnung.
2. Geben Sie `L` ein und drücken Sie {{key:Enter}}, dann klicken Sie den ersten Punkt im linken Teilfenster an.
3. Klicken Sie einmal im rechten Teilfenster, um es aktiv zu machen, und klicken Sie dort den zweiten Punkt an.

Die Linie verläuft zwischen den beiden Stellen. Ein Befehl läuft weiter, während Sie das Teilfenster wechseln, und das Gummiband wird in jedem Teilfenster angezeigt.

## Das Modell neben einem Blatt

1. Teilen Sie nebeneinander.
2. Klicken Sie das rechte Teilfenster an und dann die Registerkarte eines Blatts unter der Zeichnung.

Das rechte Teilfenster zeigt das Blatt; das linke zeigt weiterhin das Modell. Jedes Teilfenster behält seinen eigenen Bereich. So können Sie am Modell zeichnen und dabei zusehen, wie das Ansichtsfenster des Blatts folgt.

## Mehrere Zeichnungen in einem Fenster

1. Öffnen Sie eine Zeichnung. Öffnen Sie dann eine weitere (oder drücken Sie {{ui:Neu}}).

Jede Zeichnung öffnet sich in einer eigenen Registerkarte über dem Zeichenbereich. Klicken Sie auf eine Registerkarte, um umzuschalten; die Befehlszeile, die Bereiche und Rückgängig folgen der Zeichnung, zu der Sie wechseln. {{key:Mod+C}} in einer Zeichnung und {{key:Mod+V}} in einer anderen kopiert Objekte zwischen ihnen.

2. Klicken Sie auf {{ui:Geöffnete Zeichnungen nebeneinander anordnen}} (das Teilungssymbol am Ende der Registerkarten) oder auf das gestapelte Symbol daneben.

Jedes Teilfenster zeigt nun eine der geöffneten Zeichnungen, bis zu vier. Klicken Sie auf ein Teilfenster, um in dieser Zeichnung zu arbeiten.

3. Klicken Sie auf das {{ui:×}} an einer Registerkarte, um diese Zeichnung zu schließen. Hat sie nicht gespeicherte Änderungen, fragt CadCraft zuerst nach.

:::tip
Wenn das Fenster nur eine neue, unberührte Zeichnung enthält und Sie eine weitere öffnen, wird stattdessen diese Registerkarte verwendet, statt eine neue hinzuzufügen.
:::

## Gemeinsam schwenken und zoomen

Um zwei Revisionen zu vergleichen, ordnen Sie sie nebeneinander an und klicken Sie dann auf {{ui:Ansichten der Teilfenster koppeln}} (das Verknüpfungssymbol am Ende der Registerkarten), oder wählen Sie es in {{ui:Ansicht}} › {{ui:Mehr}}, oder geben Sie {{cmd:LINKVIEWS}} und `ON` ein. Nun bewegt ein Schwenk oder Zoom in einem Teilfenster jedes Teilfenster, das das Modell zeigt (oder jedes, das ein Blatt zeigt), an dieselbe Stelle, sodass die beiden Zeichnungen ausgerichtet bleiben. {{cmd:LINKVIEWS}} `OFF` lässt jedes Teilfenster wieder selbstständig schwenken.

## Häufige Fehler

- **Mein Klick hat nichts bewirkt.** Er hat das Teilfenster aktiviert. Klicken Sie noch einmal, um zu wählen oder zu zeichnen.
- **Das Mausrad hat das falsche Teilfenster gezoomt.** Das Mausrad zoomt das Teilfenster unter dem Zeiger und macht es aktiv.
- **Die Teilfenster sind wieder auf eines reduziert.** Beim Öffnen einer Zeichnung wird sie so angezeigt, wie sie gespeichert wurde. Eine ohne Teilfenster gespeicherte Zeichnung öffnet sich in einem Fenster.
- **Beim Verlassen der Seite warnt CadCraft vor nicht gespeicherten Änderungen, die ich nicht sehe.** Eine andere Registerkarte enthält eine Zeichnung mit Änderungen. Wechseln Sie dorthin und speichern Sie, oder verlassen Sie die Seite ohne Speichern.
