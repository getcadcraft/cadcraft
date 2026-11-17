---
title: Ein Blatt mit Schriftfeld und Ansichtsfenstern einrichten
summary: Ein Blatt (Layout) mit Rahmen und Schriftfeld erstellen, den Ansichtsfenster-Maßstab festlegen, ein zweites Ansichtsfenster für ein Detail hinzufügen und das Schriftfeld ausfüllen.
keywords: layout, Blatt, Papierbereich, Ansichtsfenster, mview, vpview, Schriftfeld, Maßstab, Papiergröße, Rahmen, vports, Plotmaßstab, mspace, pspace, Modellbereich, in Ansichtsfenster wechseln, Ansichtsfenster doppelklicken
from: 45a45de8
---

## Was Sie erstellen

Ein A3-Blatt mit einem Schriftfeld, der gesamte Grundriss in einem Ansichtsfenster im Maßstab 1:100 und ein zweites Ansichtsfenster, das eine Ecke im Maßstab 1:20 zeigt.

## Modell und Blätter

Sie zeichnen das Gebäude auf dem Reiter {{ui:Modell}} in voller Größe: Eine 6 m lange Wand ist in Millimetern 6000 Einheiten lang. Ein **Blatt** (ein Layout) ist ein Stück Papier, gemessen in Millimetern oder Zoll. Ein **Ansichtsfenster** ist ein Fenster im Blatt, das das Modell in einem Maßstab zeigt.

## Bevor Sie beginnen

1. Öffnen oder zeichnen Sie einen Grundriss auf dem Reiter {{ui:Modell}}.
2. Drücken Sie {{key:Esc}}, damit nichts ausgewählt ist.
3. Stellen Sie unter {{ui:Aktuelle Einstellungen}} {{ui:Einheiten}} auf die Einheit, in der Sie gezeichnet haben, zum Beispiel {{ui:Millimeter}}.

Einheiten sind wichtig: Ein Ansichtsfenster-Maßstab wie 1:100 bedeutet, dass ein Millimeter auf dem Papier 100 echte Millimeter zeigt. CadCraft muss deshalb wissen, was eine Zeicheneinheit ist. Eine Zeichnung, die als {{ui:Einheitenlos}} belassen wird, gilt als in der Einheit des Papiers (Millimeter bei ISO-Papier, Zoll bei US-Papier).

## Das Blatt erstellen

1. Klicken Sie auf die Schaltfläche {{ui:+}} rechts neben den Reitern unter der Zeichnung, oder geben Sie `LAYOUT` ein und drücken Sie {{key:Enter}}, oder klicken Sie auf {{ui:Neues Blatt}}.

Ein neuer Reiter `Layout1` öffnet sich. Sie sehen ein Blatt auf einem dunkleren Schreibtisch: einen Rahmen, ein Schriftfeld in der unteren rechten Ecke und ein Ansichtsfenster darüber, das das gesamte Modell im größten Standardmaßstab zeigt, der passt. Der Verlauf nennt das Papier: ISO A3 für metrische und einheitenlose Zeichnungen, Tabloid (ANSI B) für Zeichnungen in Zoll oder Fuß.

2. Klicken Sie auf {{ui:Grenzen}}, um das Blatt auf den Bildschirm einzupassen.

## Das Papier wählen

1. Drücken Sie {{key:Esc}}, damit nichts ausgewählt ist. Die Überschrift des rechten Bereichs lautet „Blatt: Layout1“.
2. Geben Sie unter {{ui:Name}} `A-101 Grundriss` ein und drücken Sie {{key:Enter}}. Der Reiter wird umbenannt.
3. Wählen Sie unter {{ui:Papier}} eine Größe.
4. Wählen Sie unter {{ui:Ausrichtung}} {{ui:Querformat}} oder {{ui:Hochformat}}.

:::warning
Das Ändern des Papiers verschiebt oder verändert nicht, was bereits auf dem Blatt ist. Prüfen Sie danach, ob Rahmen, Schriftfeld und Ansichtsfenster noch passen, und verschieben oder ändern Sie sie mit den Griffen. Der Wechsel zwischen Millimeter- und Zollpapier behält die Zahlen, daher ändert sich alles in der Größe. Die Statusleiste warnt Sie.
:::

## Den Ansichtsfenster-Maßstab festlegen

1. Klicken Sie auf den Rahmen des Ansichtsfensters (seine Kante). Die Überschrift des Panels lautet „Ansichtsfenster“.
2. Wählen Sie unter {{ui:Maßstab (S)}} `1:100`.

Das Modell im Ansichtsfenster wird im Maßstab 1:100 neu gezeichnet, zentriert an der Stelle, an der es war. Die Liste bietet metrische Maßstäbe von 10:1 bis 1:10000. Zeichnungen in Zoll oder Fuß erhalten außerdem Architekturmaßstäbe (1/4" = 1'-0" und ähnliche) und Ingenieurmaßstäbe (1" = 20' und ähnliche). {{ui:Das ganze Modell einpassen}} setzt einen exakten, nicht standardmäßigen Maßstab, der alles einpasst.

3. Wenn der Grundriss nicht mehr zentriert ist, ändern Sie {{ui:X}} und {{ui:Y}} unter {{ui:Ansichtsmittelpunkt (Modell)}} im rechten Bereich. Sie bestimmen den Modellpunkt, der in der Mitte des Ansichtsfensters gezeigt wird.

## Einen Teil des Modells in einem Ansichtsfenster zeigen

1. Wählen Sie das Ansichtsfenster aus und klicken Sie im rechten Bereich auf {{ui:Ein Fenster im Modell aufziehen…}} (oder geben Sie `VPVIEW` ein und drücken Sie {{key:Enter}}).
2. CadCraft wechselt zum Reiter {{ui:Modell}}. Klicken Sie auf eine Ecke des Bereichs, der angezeigt werden soll.
3. Klicken Sie auf die gegenüberliegende Ecke.

Sie sind wieder auf dem Blatt, und das Ansichtsfenster zeigt diesen Bereich im größten Standardmaßstab, der passt. Der Verlauf nennt ihn. {{ui:Das ganze Modell zeigen}} geht zum ganzen Grundriss in einem Standardmaßstab zurück.

## Ein zweites Ansichtsfenster für ein Detail hinzufügen

1. Schaffen Sie Platz auf dem Blatt: Wählen Sie das erste Ansichtsfenster aus und ziehen Sie einen Eckgriff, um es kleiner zu machen.
2. Geben Sie `MV` ein und drücken Sie {{key:Enter}}, oder klicken Sie in der Gruppe Blätter auf {{ui:Ansichtsfenster}}.
3. Klicken Sie auf eine Ecke des neuen Ansichtsfensters auf dem Blatt.
4. Klicken Sie auf die gegenüberliegende Ecke.

Das neue Ansichtsfenster zeigt das gesamte Modell. Der Verlauf nennt seinen Maßstab.

5. Klicken Sie auf den Rahmen des neuen Ansichtsfensters.
6. Klicken Sie auf {{ui:Ein Fenster im Modell aufziehen…}} und wählen Sie einen kleinen Bereich um eine Ecke des Grundrisses.
7. Wählen Sie unter {{ui:Maßstab (S)}} `1:20`.

Die Rahmen der Ansichtsfenster liegen auf dem Layer `Viewports`, der so eingestellt ist, dass er nicht geplottet wird. Die Rahmen sind also auf dem Bildschirm sichtbar, aber nicht im PDF.

## Das Schriftfeld ausfüllen

Das Schriftfeld besteht aus gewöhnlichen Linien und Texten auf dem Layer `Title block`. Es beginnt mit dem Zeichnungsnamen, dem Maßstab des ersten Ansichtsfensters, dem heutigen Datum und der Blattnummer.

1. Doppelklicken Sie auf den großen Titeltext. Ein Bearbeitungsfeld öffnet sich darüber.
2. Geben Sie den Titel des Blatts ein.
3. Klicken Sie auf {{ui:OK}} oder drücken Sie {{key:Mod+Enter}}.

Verfahren Sie ebenso mit den anderen Feldern. Verwenden Sie {{cmd:TEXT}}, um in die leere Zelle „DRAWN BY“ zu schreiben. Der Text SCALE aktualisiert sich nicht selbst, wenn Sie den Maßstab eines Ansichtsfensters ändern: Bearbeiten Sie ihn von Hand.

## Auf dem Blatt zeichnen

Alles, was Sie auf einem Blattreiter zeichnen, liegt auf dem Papier, in Papiereinheiten: Text mit 3.5 Höhe ist 3.5 mm hoch auf einem ISO-Blatt. Notizen, Nordpfeile und Blattrahmen gehören hierher.

Um den Grundriss selbst zu ändern, gehen Sie zum Reiter {{ui:Modell}} oder arbeiten Sie durch ein Ansichtsfenster (nächster Abschnitt). Jedes Ansichtsfenster zeigt die Änderung.

## Am Modell durch ein Ansichtsfenster arbeiten

1. Doppelklicken Sie innerhalb eines Ansichtsfensters, abseits seines Rahmens. Oder geben Sie `MS` ein und drücken Sie {{key:Enter}}: Mit einem Ansichtsfenster auf dem Blatt geht es direkt hinein; mit mehreren klicken Sie in das gewünschte.

Der Rahmen wird stärker gezeichnet, der Verlauf sagt, dass Sie darin sind, und der Reiter des Blatts bleibt ausgewählt. Alles, was Sie jetzt zeichnen oder ändern, liegt im Modell, in Modelleinheiten, wie auf dem Reiter {{ui:Modell}}: Eine Linie, die in einem Ansichtsfenster im Maßstab 1:100 gezeichnet wird, ist in echten Millimetern. In diesem Ansichtsfenster eingefrorene Layer können hier nicht ausgewählt werden.

2. Drehen Sie das Rad oder ziehen Sie mit der mittleren Taste, um zu zoomen und zu verschieben, was das Ansichtsfenster zeigt. Das Blatt bleibt, wo es ist.
3. Doppelklicken Sie irgendwo außerhalb des Rahmens oder geben Sie `PS` ein und drücken Sie {{key:Enter}}.

Sie sind wieder auf dem Blatt. Das Ansichtsfenster behält die Ansicht, mit der Sie es verlassen haben; {{key:Mod+Z}} stellt die alte Ansicht in einem Schritt wieder her. Ein Klick auf einen beliebigen Reiter unter der Zeichnung verlässt das Ansichtsfenster ebenfalls.

:::note
Ein Ansichtsfenster, dessen Anzeige gesperrt ist ({{ui:Anzeige gesperrt}} in den Eigenschaften), behält seine Ansicht: Darin bewegen Pan und Zoom das ganze Blatt. Ein ausgeschaltetes Ansichtsfenster kann nicht betreten werden.
:::

## Eine Ansicht mit ihrem Namen beschriften

Ein Ansichtstitel unter einem Ansichtsfenster kann den Ansichtsnamen des Ansichtsfensters zeigen und ihm folgen:

1. Geben Sie der Ansicht einen Namen: Wählen Sie den Rahmen des Ansichtsfensters aus und tragen Sie unter {{ui:Ansichtsname}} in den Eigenschaften einen Namen ein. Oder speichern Sie die Ansicht auf dem Reiter {{ui:Modell}} mit {{cmd:NAMEDVIEW}} und geben Sie bei gewähltem Ansichtsfenster `VPVIEW`, `V` und den Namen der Ansicht ein: Das Ansichtsfenster zeigt diese Ansicht und nimmt ihren Namen an.
2. Geben Sie `VIEWLABEL` (`VL`) ein und drücken Sie {{key:Enter}}, dann klicken Sie, wo die Beschriftung hin soll ({{key:Enter}} setzt sie unter die untere linke Ecke des Ansichtsfensters).

Wenn sich der Ansichtsname ändert, ändert sich die Beschriftung mit ihm, im selben Rückgängig-Schritt.

## Einen Layer in einem Ansichtsfenster einfrieren

Um einen Layer in einem Ansichtsfenster, aber nicht in den anderen zu verbergen (etwa Möbel in einem Detail):

1. Wählen Sie den Rahmen des Ansichtsfensters aus oder arbeiten Sie darin (Doppelklick).

Das Panel {{ui:Layer}} bekommt in jeder Zeile eine weitere Schaltfläche, und eine Zeile darüber der Liste sagt es.

2. Klicken Sie in der Zeile des Layers auf diese Schaltfläche.

Der Layer verschwindet nur in diesem Ansichtsfenster. Klicken Sie erneut, um ihn wieder aufzutauen. {{key:Mod+Z}} macht beides rückgängig. Für mehrere Layer oder Ansichtsfenster auf einmal geben Sie `VPLAYER` ein: `F` (Einfrieren) oder `T` (Auftauen), die Layernamen (`A-*` nimmt jeden Layer, der mit A- beginnt), dann `C` (Aktuell), `A` (Alle) oder `S` (Auswählen). `VPLAYER` `V` (Vpvisdflt) wählt Layer, die neue Ansichtsfenster eingefroren beginnen.

## Weitere Blätter

Jeder Klick auf {{ui:+}} fügt ein weiteres Blatt hinzu (`Layout2`, `Layout3` …) mit der nächsten Blattnummer. Um das geöffnete Blatt zu löschen, drücken Sie {{key:Esc}} und klicken Sie im rechten Bereich auf {{ui:Dieses Blatt löschen}}. Es wird ohne Nachfrage gelöscht; {{key:Mod+Z}} bringt es zurück.

Ein Blatt plotten Sie mit {{ui:Dieses Blatt plotten}} oder {{key:Mod+P}}; siehe [In PDF plotten](topic:plot-pdf).

## Häufige Fehler

- **Das Ansichtsfenster zeigt nichts.** Das Modell ist leer oder die Ansicht zeigt woanders hin. Wählen Sie den Rahmen aus und klicken Sie auf {{ui:Das ganze Modell zeigen}}.
- **Die Maßstabliste zeigt nur Verhältnisse und keine Fuß-und-Zoll-Maßstäbe.** Stellen Sie {{ui:Einheiten}} auf {{ui:Zoll}} oder {{ui:Fuß}} auf dem Reiter {{ui:Modell}}.
- **1:100 sieht zehnmal zu groß oder zu klein aus.** Die Zeicheneinheiten sind falsch. Stellen Sie {{ui:Einheiten}} auf das, was eine Einheit wirklich ist.
- **Klicks auf den Grundriss im Ansichtsfenster wählen nichts aus.** Auf einem Blatt wählen Sie die eigenen Objekte des Blatts. Doppelklicken Sie zuerst im Ansichtsfenster, um den Grundriss durch es zu bearbeiten.
- **Klicks außerhalb des Ansichtsfensters tun nichts.** Sie sind in einem Ansichtsfenster. Doppelklicken Sie außerhalb davon oder geben Sie `PS` ein, um wieder am Blatt zu arbeiten.
- **„Ansichtsfenster gehören auf ein Layout. Öffnen Sie zuerst einen Layout-Reiter (oder erstellen Sie einen mit LAYOUT).“** {{cmd:MVIEW}} funktioniert nur auf einem Blattreiter.
