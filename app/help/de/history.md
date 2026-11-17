---
title: Verlauf: Versionen und Änderungen
summary: Versionen einer Zeichnung ansehen (Kopien, die Studio beim Speichern behält, und die der Cloud), eine öffnen oder wiederherstellen und zwei vergleichen, wobei die Änderungen farbig angezeigt werden.
keywords: Verlauf, history, Versionen, Versionsverlauf, wiederherstellen, vorherige Version, Speichern rückgängig machen, vergleichen, Zeichnungen vergleichen, dwgcompare, Änderungen, hinzugefügt, entfernt, geändert, Snapshot, Sicherung, Cloud-Versionen
from: 141d37b3
---

## Was Sie erstellen

Einen Blick auf eine frühere Version einer Zeichnung und eine Liste, was gegenüber dem jetzigen Stand anders ist: was hinzugefügt, was entfernt und was geändert wurde, farbig auf der Zeichnung markiert.

## Verlauf öffnen

Geben Sie `HISTORY` (oder `HIST`) ein und drücken Sie {{key:Enter}}, oder wählen Sie {{ui:Verlauf…}} im Menü {{ui:Mehr}} der Gruppe {{ui:Ansicht}}. Der Bereich öffnet sich neben der Zeichnung und bleibt offen, während Sie arbeiten, sodass Sie die Zeichnung mit den Farben darauf schwenken und zoomen können.

Der Verlauf funktioniert in CadCraft Studio. Im Browser weist der Bereich nur darauf hin.

## Woher die Versionen kommen

- **Auf diesem Computer.** Jedes Mal, wenn Sie in Studio eine Zeichnung aus einer Datei öffnen, und jedes Mal, wenn Sie sie speichern, legt Studio eine Kopie der Datei in seinem eigenen Speicher auf diesem Computer ab. Die erste Kopie ist {{ui:Wie geöffnet}}: die Datei, wie sie war, bevor Sie sie zum ersten Mal überschrieben haben. Studio behält die neuesten 25 Kopien jeder Zeichnung; die ältesten gehen zuerst, wenn alle Kopien zusammen 400 MB überschreiten. Ein Speichern ohne Änderung behält nichts. Es wird nichts hochgeladen.
- **In der Cloud.** Wenn Sie in Studio eine Zeichnung aus Ihren Cloud-Dateien öffnen, listet der Bereich außerdem {{ui:In der Cloud}}: jede Version, die die Cloud speichert, mit ihrer Nummer, wer sie gespeichert hat und der Notiz dazu. Der Bereich liest sie nur. CadCraft sendet eigene Speicherungen noch nicht in die Cloud, daher sind dies die Versionen, die von anderen Geräten und vom Web gespeichert wurden. Melden Sie sich in Studio erneut an, wenn dort steht, dass die Anmeldung abgelaufen ist.

Eine Zeichnung, die Sie noch nicht gespeichert haben, hat keine Kopien: Speichern Sie sie zuerst.

## Version öffnen oder wiederherstellen

- {{ui:Öffnen}} legt diese Version in einen eigenen Reiter. Ihre Zeichnung bleibt unberührt.
- {{ui:Wiederherstellen}} ersetzt diese Zeichnung durch diese Version. Vorher wird nachgefragt. Studio legt davor eine Kopie der Zeichnung in ihrem jetzigen Stand im Verlauf ab (markiert {{ui:Vor einer Wiederherstellung}}), und in die Datei wird erst geschrieben, wenn Sie speichern. Eine Wiederherstellung lässt sich nicht mit {{key:Mod+Z}} rückgängig machen; verwenden Sie dafür diese Kopie.

## Vergleichen

1. Klicken Sie bei einer Version auf {{ui:Vergleichen}}. Sie wird mit {{ui:Die Zeichnung in ihrem jetzigen Stand}} verglichen. Um sie stattdessen mit einer anderen Version zu vergleichen, wählen Sie zuerst diese unter {{ui:Vergleichen mit}}.
2. Lesen Sie das Ergebnis unter der Liste: wie viele Objekte hinzugefügt, entfernt und geändert wurden, und eine Liste davon. Klicken Sie auf einen Eintrag in der Liste, um die Ansicht dorthin zu verschieben.
3. Auf der Zeichnung:
   - **grüne** Objekte wurden hinzugefügt,
   - **rote** Objekte wurden entfernt (sie sind nur in der älteren Version vorhanden),
   - **orange** Objekte wurden geändert: die neue Form ist durchgezogen, die alte gestrichelt.
4. {{ui:In der Zeichnung anzeigen}} schaltet die Farben ein und aus; {{ui:Farben entfernen}} nimmt das Ergebnis weg. Das Schließen des Bereichs entfernt sie ebenfalls.

Die Liste sagt, was sich an einem geänderten Objekt geändert hat: sein Text, dass es verschoben wurde, seine Form, sein Layer, seine Farbe, sein Linientyp oder seine Linienstärke. Jedes Blatt wird für sich verglichen; die Farben zeigen sich auf dem geöffneten Blatt.

:::note
Eine Zeichnung hat keine dauerhafte Nummer für jedes Objekt, daher ordnet CadCraft die Objekte nach dem, was sie sind: Dasselbe Objekt auf beiden Seiten ist unverändert. Ein Objekt desselben Typs und Layers, das innerhalb seiner eigenen Größe eines alten liegt, ist dasselbe Objekt, geändert. Was übrig bleibt, ist hinzugefügt oder entfernt. Ein Objekt, das weit von seiner früheren Stelle verschoben wurde, erscheint an einer Stelle als entfernt und an der anderen als hinzugefügt. Eine Blockreferenz zählt den Inhalt ihres Blocks.
:::

## Häufige Fehler

- **„Noch keine Kopien.“** Studio legt bei jedem Öffnen und Speichern einer Zeichnung eine Kopie ab, die eine Datei auf diesem Computer hat. Eine Zeichnung, die aus einem Browser-Tab geöffnet oder nie gespeichert wurde, hat keine.
- **Die Cloud-Liste fehlt.** Sie erscheint für eine Zeichnung, die in Studio aus der Cloud geöffnet wurde; eine von der Festplatte geöffnete Datei ist keine Cloud-Zeichnung.
- **Alles sieht geändert aus.** Zwei Versionen, die von verschiedenen Programmen gespeichert wurden, schreiben dieselbe Zeichnung auf unterschiedliche Weise (Namen anonymer Blöcke, Rundung). Vergleichen Sie Versionen, die mit CadCraft gespeichert wurden.
