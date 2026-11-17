---
title: Objekte auswählen
summary: Objekte einzeln, mit einem Fenster oder einem Kreuzen auswählen, vor oder während eines Befehls, und Objekte wieder aus einer Auswahl nehmen.
keywords: auswählen, Auswahl, Fenster, Kreuzen, Substantiv-Verb, wählen, alle, letzte, vorherige, Zaun, entfernen, hinzufügen, Tab, durchlaufen, überlappend, qselect, Schnellauswahl, Filter, ähnliche wählen, selectsimilar, shift, Auswahl aufheben, ctrl+a, pickfirst
from: 676508c7
---

## Was Sie lernen

Wie Sie die Objekte wählen, auf die ein Befehl wirkt. CadCraft hat zwei Arten zu arbeiten, und beide sind gleich gut:

- **Zuerst wählen, dann der Befehl** (Substantiv-Verb). Wählen Sie Objekte, dann geben Sie `M` für Verschieben ein. Der Befehl übernimmt Ihre Auswahl und geht direkt zu seiner nächsten Frage.
- **Zuerst der Befehl, dann wählen** (Verb-Substantiv). Geben Sie `M` ein; der Befehl fragt `Objekte wählen:`; Sie wählen, dann drücken Sie {{key:Enter}}.

## Ein Objekt nach dem anderen wählen

1. Ohne laufenden Befehl klicken Sie auf eine Linie. Sie wird hervorgehoben, und ihre Griffe (kleine Quadrate) erscheinen. Das rechte Bedienfeld zeigt ihre Eigenschaften.
2. Klicken Sie auf ein anderes Objekt. Es wird der Auswahl hinzugefügt.
3. Halten Sie {{key:Shift}} gedrückt und klicken Sie auf ein ausgewähltes Objekt. Es wird aus der Auswahl genommen.
4. Drücken Sie {{key:Esc}}. Nichts ist ausgewählt.

## Fenster und Kreuzen

Klicken Sie einmal auf leeren Raum, bewegen Sie die Maus und klicken Sie erneut: ein Rechteck. Drücken und Ziehen zeichnet stattdessen ein Freihand-Lasso, mit denselben zwei Arten (siehe [Lasso-Auswahl](topic:lasso-selection); in den Einstellungen kann ein Ziehen das Rechteck zeichnen). Welche Objekte Sie erhalten, hängt von der Richtung ab:

| Sie bewegen | Rahmen | Wählt |
|---|---|---|
| Von links nach rechts | Fenster | Nur Objekte **vollständig innerhalb** des Rahmens |
| Von rechts nach links | Kreuzen | Objekte innerhalb des Rahmens **und** Objekte, die er berührt |

1. Zeichnen Sie einige überlappende Linien und Kreise.
2. Klicken Sie auf leeren Raum links von einigen Objekten, bewegen Sie nach rechts und klicken Sie erneut. Nur die vollständig innen liegenden Objekte werden gewählt.
3. Drücken Sie {{key:Esc}}.
4. Klicken Sie auf leeren Raum rechts, bewegen Sie nach links über einige Objekte und klicken Sie erneut. Alles, was der Rahmen berührt, wird gewählt.
5. Halten Sie {{key:Shift}} gedrückt und ziehen Sie einen Rahmen oder ein Lasso über einige ausgewählte Objekte. Sie werden aus der Auswahl genommen.

## Zuerst wählen, dann einen Befehl ausführen

1. Wählen Sie zwei Kreise.
2. Geben Sie `M` ein und drücken Sie {{key:Enter}}.

Der Verlauf zeigt `2 gefunden`, und die Eingabeaufforderung geht direkt zu `Basispunkt angeben`. Beenden Sie das Verschieben (siehe [Verschieben, Kopieren, Drehen, Skalieren und Spiegeln](topic:modify-objects)).

Wenn ein Befehl endet, wird die Auswahl aufgehoben, damit der nächste Befehl frisch beginnt.

Befehle, die so eine Auswahl annehmen: {{cmd:ERASE}}, {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:SCALE}}, {{cmd:MIRROR}}, {{cmd:EXPLODE}}, {{cmd:BLOCK}} und {{cmd:LIST}}. {{cmd:OFFSET}}, {{cmd:FILLET}} und {{cmd:CHAMFER}} fragen immer nach Objekten einzeln; {{cmd:TRIM}} und {{cmd:EXTEND}} nehmen einen Klick oder einen Pfad, den Sie durch die Stücke ziehen (siehe [Stutzen und Dehnen](topic:trim-and-extend)).

## Befehl ausführen, dann wählen

1. Stellen Sie sicher, dass nichts ausgewählt ist ({{key:Esc}}).
2. Geben Sie `E` ein und drücken Sie {{key:Enter}}. Die Eingabeaufforderung lautet `Objekte wählen:`.
3. Klicken Sie auf Objekte oder ziehen Sie Fenster und Kreuzen. Der Verlauf zählt jede Auswahl (`1 gefunden`, `3 gefunden`).
4. Drücken Sie {{key:Enter}}, drücken Sie {{key:Space}} oder klicken Sie mit der rechten Maustaste, um das Wählen zu beenden.

Die Objekte werden gelöscht, und der Verlauf nennt, wie viele es waren.

Bei einer Eingabeaufforderung `Objekte wählen:` können Sie außerdem eingeben:

- `ALL`, dann {{key:Enter}}: jedes Objekt, das Sie im offenen Tab bearbeiten können.
- `L` (oder `LAST`), dann {{key:Enter}}: das zuletzt gezeichnete Objekt.
- `P` (Vorherige): die Objekte, auf die der letzte Befehl gewirkt hat, falls sie noch da sind.
- `F` (Zaun): klicken Sie oder geben Sie Punkte entlang einer Linie ein; jedes Objekt, das die Linie kreuzt, wird hinzugefügt. Drücken Sie {{key:Enter}}, um den Zaun zu beenden; `U` nimmt den letzten Punkt zurück.
- `W` (Fenster) oder `C` (Kreuzen): zwei Ecken, in welcher Richtung Sie auch ziehen.
- `R` (Entfernen): ab jetzt nehmen Klicks, Fenster und Zäune Objekte **heraus**. Die Eingabeaufforderung lautet `Objekte entfernen:`. `A` (Hinzufügen) schaltet zurück.
- `?`: die Liste dieser Optionen im Verlauf.

Diese Optionen werden in der Eingabeaufforderung nicht angezeigt, wie in AutoCAD.

## Eines von mehreren übereinanderliegenden Objekten wählen

Wo Objekte sich überlappen oder berühren, nimmt ein Klick das nächstgelegene. Um ein anderes zu bekommen:

1. Halten Sie den Zeiger ruhig über der Stelle.
2. Drücken Sie {{key:Tab}}. Das nächste Objekt dort wird hervorgehoben, und die Statusleiste sagt, welches es ist („2 von 3: Linie auf Layer Walls“).
3. Drücken Sie {{key:Tab}} erneut, bis das gewünschte Objekt hervorgehoben ist, und klicken Sie dann, ohne sich zu bewegen.

Eine Bewegung des Zeigers beginnt von vorn. Das funktioniert ohne laufenden Befehl, bei `Objekte wählen:` und überall dort, wo ein Befehl nach einem einzelnen Objekt fragt.

## Nach einer Regel wählen: Schnellauswahl

{{cmd:QSELECT}} (`QS`, oder {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Schnellauswahl}}) wählt jedes Objekt, das einer Regel entspricht, etwa jeden Kreis mit einem Radius unter 50 oder jede Blockreferenz namens DOOR-900.

1. Öffnen Sie {{ui:Schnellauswahl}}.
2. Wählen Sie {{ui:Objekttyp}} (die Liste zählt jeden Typ), dann {{ui:Eigenschaft}}: {{ui:Layer}}, {{ui:Farbe}} und bei manchen Typen {{ui:Länge}}, {{ui:Radius}}, {{ui:Fläche}}, {{ui:Texthöhe}}, {{ui:Textinhalt}}, {{ui:Blockname}} oder {{ui:Schraffurmuster}}.
3. Wählen Sie {{ui:Operator}} und {{ui:Wert}}. `*` passt mit Platzhaltern (`DOOR-*`); {{ui:Alles auswählen}} nimmt jedes Objekt des Typs. Die Anzahl unten zeigt, wie viele passen, während Sie wählen.
4. {{ui:Anwendungsart}}: die Treffer einschließen oder alles andere. {{ui:Anwenden auf}} {{ui:Aktuelle Auswahl}} engt ein, was Sie gewählt hatten; {{ui:An aktuelle Auswahl anhängen}} fügt hinzu.
5. Klicken Sie auf {{ui:Wählen}}. Führen Sie dann den gewünschten Befehl aus: Er nutzt die Auswahl.

## Ähnliche wählen

Wählen Sie ein oder mehrere Objekte und geben Sie {{cmd:SELECTSIMILAR}} (`SIM`) ein, oder wählen Sie {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Ähnliche wählen}}. Jedes Objekt desselben Typs auf demselben Layer und mit derselben Farbe wird gewählt; Blockreferenzen brauchen außerdem denselben Block, Schraffuren dasselbe Muster. Geben Sie `SE` bei der Eingabeaufforderung `Objekte wählen` ein, um festzulegen, was übereinstimmen muss.

## Jetzt wählen, später verwenden

Geben Sie `SELECT` ein und drücken Sie {{key:Enter}}, wählen Sie Objekte mit einer der oben genannten Methoden und drücken Sie {{key:Enter}}. Sie bleiben für den nächsten Befehl ausgewählt, und `P` wählt sie bei einer späteren Eingabeaufforderung `Objekte wählen:` erneut aus.

## Alles auswählen

Ohne laufenden Befehl drücken Sie {{key:Mod+A}} oder wählen Sie in der Symbolleiste im Menü {{ui:Bearbeiten}} › {{ui:Mehr}} die Option {{ui:Alles auswählen}}, um jedes Objekt auszuwählen, das Sie im offenen Tab bearbeiten können. Haben Sie etwas in die Befehlszeile getippt, wählt {{key:Mod+A}} stattdessen diesen Text: Drücken Sie zuerst {{key:Esc}}, um ihn zu leeren. Bei einer Eingabeaufforderung `Objekte wählen:` geben Sie `ALL` ein. {{ui:Auswahl aufheben}} im selben Menü oder {{key:Esc}} hebt die Auswahl auf.

:::tip
Wenn Sie lieber möchten, dass jeder Klick die Auswahl ersetzt (und {{key:Shift}} hinzufügt), stellen Sie {{ui:Objekte anklicken}} auf {{ui:Ersetzt die Auswahl}} in den [Einstellungen von CadCraft](topic:settings).
:::

## Was nicht gewählt werden kann

- Objekte auf einem Layer, der **aus**, **eingefroren** oder **gesperrt** ist. Gesperrte Objekte bleiben sichtbar, und Sie können auf sie einrasten, aber Sie können sie nicht wählen oder ändern.
- Auf einem Blatt-Tab das Modell im Ansichtsfenster. Sie wählen die eigenen Objekte des Blatts (das Schriftfeld, Notizen, die Rahmen der Ansichtsfenster). Um das Modell zu bearbeiten, wechseln Sie zum Tab {{ui:Modell}}.

## Schnell löschen

Wählen Sie Objekte und drücken Sie {{key:Delete}} (oder {{key:Backspace}}, wenn die Befehlszeile keinen Cursor hat). Auf einer Mac-Tastatur funktioniert die Taste mit der Beschriftung delete, sobald Sie in die Zeichnung geklickt haben; während die Befehlszeile den Cursor hat, drücken Sie fn und delete zusammen. Das führt {{cmd:ERASE}} für die Auswahl aus. Passiert nichts, haben Sie etwas in die Befehlszeile getippt: Drücken Sie {{key:Esc}} oder geben Sie `E` und dann {{key:Enter}} ein.

## Häufige Fehler

- **Das Fenster hat zu wenig erfasst.** Sie haben von links nach rechts gezogen, das nimmt nur, was vollständig innen liegt. Ziehen Sie von rechts nach links für ein Kreuzen.
- **Ein Klick auf leeren Raum hat einen Rahmen begonnen.** Ein Klick auf leeren Raum startet ein Fenster; der zweite Klick beendet es. Drücken Sie {{key:Esc}} oder klicken Sie mit der rechten Maustaste, um es abzubrechen.
- **Ein Klick auf leeren Raum hat die Auswahl aufgehoben.** Das geschieht, außer Sie halten {{key:Shift}} gedrückt. Um die Auswahl bei so einem Klick zu behalten und nur mit {{key:Esc}} zu löschen, stellen Sie {{ui:Klick auf eine leere Stelle}} auf {{ui:Behält die Auswahl}} in den [Einstellungen von CadCraft](topic:settings#clicking-an-empty-spot).
- **Der Befehl hat Objekte benutzt, die Sie nicht meinten.** Beim Start war noch etwas ausgewählt. Drücken Sie {{key:Esc}}, bevor Sie einen Befehl starten, um mit nichts Ausgewähltem zu beginnen.
- **Nach einem Befehl ist nichts ausgewählt.** Das ist Absicht: Ein beendeter Befehl hebt die Auswahl auf.
