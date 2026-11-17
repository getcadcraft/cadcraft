---
title: Zeichnung mit Klassen ordnen
summary: Klassen sortieren Objekte auf eine zweite Art, über Layer hinweg (Lighting-Fixtures-Spot): Sie können sie ein- und ausblenden, ihnen Farbe, Linientyp, Linienstärke, Füllung und Textstil geben, die Objekte „nach Klasse“ übernehmen können, und die Klasse festlegen, in die neue Objekte kommen.
keywords: Klasse, Klassen, CLASSES, CLS, CLASS, nach Klasse, ByClass, aktive Klasse, bei Erstellung verwenden, None, Entwurfslayer, Layer-Maßstab, Höhe, Vectorworks
from: 672de9cb
---

Layer sagen, *wo* ein Objekt in der Zeichnung liegt; Klassen sagen, *was* es ist. Eine Wand auf dem Layer `Level 1` kann in der Klasse `Walls-Exterior` liegen, ein Spotlicht auf dem Layer `Ceiling` in der Klasse `Lighting-Fixtures-Spot`. Sie können alle Leuchten auf allen Layern gleichzeitig ausblenden oder alle Außenwände stärker plotten, ohne etwas zwischen Layern zu verschieben.

Jedes Objekt beginnt in der Klasse **None**. Eine Zeichnung ohne eigene Klassen funktioniert genauso wie bisher.

## Den Klassen-Bereich öffnen

Geben Sie `CLASSES` (oder `CLS`) ein und drücken Sie {{key:Enter}}, oder wählen Sie {{ui:Klassen…}} im Menü {{ui:Mehr}} der Gruppe {{ui:Ansicht}}. Der Bereich öffnet sich über der Zeichnung und bleibt offen, während Sie zeichnen.

- **Klasse hinzufügen:** geben Sie den Namen in das Feld oben ein und drücken Sie {{key:Enter}}. Ein `-` erzeugt eine Ebene: `Lighting-Fixtures-Spot` liegt unter `Lighting-Fixtures`, das wiederum unter `Lighting` liegt; fehlende Ebenen werden für Sie ergänzt.
- **Anzeigen oder ausblenden:** das Auge neben einer Klasse. Eine ausgeblendete Klasse blendet alle Klassen darunter aus, auf dem Bildschirm und auf dem Papier.
- **Aktive Klasse:** die runde Schaltfläche. Neue Objekte, die Sie zeichnen, kommen in die aktive Klasse.
- **Klasse wählen:** klicken Sie auf ihren Namen. Die Schaltflächen und Einstellungen unter der Liste wirken dann auf sie.

Die Zahl am Ende jeder Zeile gibt an, wie viele Objekte in dieser Klasse liegen (im Modell, auf den Blättern und in Blockdefinitionen).

## Objekte in eine Klasse legen

Wählen Sie die Objekte, wählen Sie im Bereich eine Klasse und klicken Sie auf {{ui:Klasse setzen}}. Setzen Sie zuvor das Häkchen bei {{ui:Nach Klasse}}, damit die Objekte Farbe, Linientyp, Linienstärke, Füllung und Textstil aus der Klasse übernehmen. Sie können auch:

- `CLASS` eingeben, während Objekte ausgewählt sind, und einen Klassennamen eingeben (ein neuer Name legt die Klasse an);
- `CLASS` eingeben, ohne dass etwas ausgewählt ist, um die aktive Klasse festzulegen; `?` listet die Klassen mit ihren Anzahlen;
- den Bereich {{ui:Klasse}} der Eigenschaften-Palette nutzen: die Klasse und einen Schalter {{ui:… nach Klasse}} für Farbe, Linientyp und Linienstärke (Füllung für Schraffuren, Textstil für Text);
- nach Klasse mit `QSELECT` auswählen: wählen Sie die Eigenschaft {{ui:Klasse}}.

{{ui:Ihre Objekte wählen}} wählt jedes Objekt der gewählten Klasse auf dem geöffneten Blatt (oder im Modell).

## Wie ein Objekt gezeichnet wird: Objekt, Klasse, Layer

Farbe, Linientyp, Linienstärke, Füllung und Textstil eines Objekts können **nach Klasse** sein, so wie sie nach Layer sein können. CadCraft sieht in dieser Reihenfolge nach:

1. Der eigene Wert des Objekts, sofern dieser Wert nicht nach Klasse ist.
2. Der Wert der Klasse, wenn das Objekt ihn nach Klasse übernimmt und die Klasse einen hat.
3. Der Wert des Layers.

Eine Klasse, deren Farbe (oder Linientyp …) {{ui:Nicht festgelegt}} ist, gibt das Objekt an seinen Layer weiter. Wählen Sie eine Klasse und legen Sie unter den Schaltflächen ihre {{ui:Farbe}}, {{ui:Linientyp}}, {{ui:Linienstärke}}, {{ui:Füllung (Schraffuren)}} und {{ui:Textstil}} fest. Setzen Sie das Häkchen bei {{ui:Bei Erstellung verwenden}}, damit neue Objekte, die in dieser Klasse gezeichnet werden, alle diese Werte nach Klasse übernehmen.

Jede Änderung im Bereich ist ein Schritt für {{ui:Rückgängig}}.

## Umbenennen und löschen

{{ui:Umbenennen}} bearbeitet den Namen direkt: drücken Sie {{key:Enter}}, um ihn zu behalten, {{key:Esc}}, um zu verlassen. Die Klassen darunter folgen (`Lighting-Spot` wird zu `Light-Spot`, wenn `Lighting` zu `Light` wird), ebenso ihre Objekte und alle Ansichtsfenster-Überschreibungen.

{{ui:Löschen}} entfernt die Klasse und alle Klassen darunter. Ihre Objekte wandern in **None**. Ein Schritt {{ui:Rückgängig}} stellt alles wieder her. **None** kann weder umbenannt noch gelöscht werden.

## Entwurfslayer

Unter {{ui:Entwurfslayer}} kann jeder Layer einen Maßstab (`1:50`) und eine Höhe haben. Ein Entwurfslayer ist ein gewöhnlicher Layer: Modellbereich und Blätter funktionieren wie bisher, und Maßstab und Höhe bleiben mit der Zeichnung für die Werkzeuge gespeichert, die sie verwenden werden.

## In DWG- und DXF-Dateien

Klassen bleiben in jeder DWG-Version erhalten, die CadCraft speichert, und in DXF (R12 und 2000). Die Klasse jedes Objekts sind seine eigenen erweiterten Daten (Anwendung `CADCRAFT_CLASS`), daher behalten AutoCAD und andere Programme sie beim Objekt. Die Klassenliste, Farben und Sichtbarkeit werden in einem nicht verwendeten Block namens `CADCRAFT_CLASSES` gespeichert; wenn ein anderes Programm diesen Block bereinigt, findet CadCraft trotzdem die Klasse jedes Objekts, und die Klassen kehren mit Standardeinstellungen zurück.

Andere Programme kennen Klassen nicht: Sie zeichnen jedes Objekt mit seinen eigenen Werten oder den Werten seines Layers.

Siehe auch [Klassenüberschreibungen im Ansichtsfenster](topic:viewport-overrides) und [Eine Zeichnung mit Layern ordnen](topic:layers).
