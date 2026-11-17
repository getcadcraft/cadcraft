---
title: Tastatur und Maus
summary: Jede Taste, Mausaktion und Befehlszeilentaste der CadCraft-Zeichen-App, so wie der Code sie verarbeitet.
keywords: Tastatur, keyboard, Tastenkürzel, Kürzel, Tasten, Maus, Mausrad, schwenken, zoomen, Rechtsklick, mittlere Taste, F3, F7, F8, ctrl, Befehlstaste, Hotkeys, kopieren, ausschneiden, einfügen, duplizieren, Zwischenablage, alles auswählen
from: a2608a29
---

Tastenkürzel werden für Ihren Computer angezeigt. Auf dem Mac verwendet jedes {{key:Mod}}-Kürzel unten die Befehlstaste; die Ctrl-Taste funktioniert ebenfalls. Wie Tasten geschrieben werden und wie Sie die F-Tasten auf dem Mac verwenden, steht unter [Tasten, Mäuse und Trackpads](common:keys).

## Befehle eingeben

| Taste | Was sie tut |
|---|---|
| Jeder Buchstabe, jede Ziffer oder jedes Symbol | Geht an die Befehlszeile, wo auch immer der Zeiger ist, sofern nicht ein Feld in einem Bereich den Cursor hat |
| {{key:Enter}} | Sendet die Eingabe. Bei leerer Eingabeaufforderung: wiederholt den letzten Befehl, beendet einen Befehl, schließt eine Auswahl ab oder übernimmt den Standardwert in `<…>` |
| {{key:Space}} | Wie {{key:Enter}}, außer wenn CadCraft nach Text fragt (Text, Blocknamen, Bemaßungstext); dort wird ein Leerzeichen eingegeben |
| {{key:Esc}} | Bricht den Befehl ab. Ohne laufenden Befehl: bricht ein Griffverschieben oder ein Auswahlfenster ab und hebt dann die Auswahl auf |
| {{key:Tab}} | Übernimmt den vorgeschlagenen Befehl rechts neben der Befehlszeile. Ohne Eingabe und wenn der Zeiger über überlappenden Objekten steht: hebt das nächste dort hervor (klicken, um es zu wählen) |
| {{key:Up}} {{key:Down}} | Blättert durch die zuvor eingegebenen Zeilen (die letzten 100) |

## Zeichnen und Bearbeiten

| Taste | Was sie tut |
|---|---|
| {{key:Mod+Z}} | Macht den letzten Befehl rückgängig |
| {{key:Mod+Y}} oder {{key:Mod+Shift+Z}} | Wiederholen |
| {{key:Mod+A}} | Wählt jedes bearbeitbare Objekt im geöffneten Reiter aus ({{cmd:SELECTALL}}). Haben Sie etwas an der Befehlszeile eingegeben, wählt es stattdessen diesen Text aus |
| {{key:Delete}} | Löscht die ausgewählten Objekte ({{cmd:ERASE}}), sofern Sie nichts an der Befehlszeile eingegeben haben |
| {{key:Backspace}} | Löscht die ausgewählten Objekte, wenn die Befehlszeile keinen Cursor hat; an der Befehlszeile löscht es das Eingegebene |
| {{key:Esc}} | Ohne laufenden Befehl: hebt die Auswahl auf ({{cmd:DESELECT}}) |
| {{key:Mod+S}} | Speichert eine Kopie im Format der Zeichnung (DWG oder DXF) |
| {{key:Mod+Shift+S}} | Speichern unter: DWG oder DXF wählen, dann eine Kopie speichern |
| {{key:Mod+O}} | Öffnet eine DWG oder DXF |
| {{key:Mod+P}} | In PDF plotten |

Rückgängig, Wiederholen, Alles auswählen und Plotten tun nichts, während ein Befehl läuft: Drücken Sie zuerst {{key:Esc}}.

## Kopieren, Ausschneiden und Einfügen

| Taste | Was sie tut |
|---|---|
| {{key:Mod+C}} | Kopiert die Auswahl in die Zwischenablage ({{cmd:COPYCLIP}}). Nichts ausgewählt: CadCraft fragt nach Objekten |
| {{key:Mod+X}} | Ausschneiden: kopiert die Auswahl und löscht sie dann ({{cmd:CUTCLIP}}) |
| {{key:Mod+V}} | Einfügen: die Kopie folgt dem Zeiger; klicken oder einen Punkt eingeben, um sie abzulegen ({{cmd:PASTECLIP}}) |
| {{key:Mod+Shift+V}} | An gleicher Position einfügen: an den Koordinaten, von denen sie kopiert wurde ({{cmd:PASTEORIG}}) |
| {{key:Mod+D}} | Duplizieren: eine Kopie der Auswahl bewegt sich mit dem Zeiger; klicken zum Ablegen, {{key:Esc}} lässt nichts zurück ({{cmd:DUPLICATE}}) |

Dieselben Aktionen stehen in der Gruppe {{ui:Bearbeiten}} der Symbolleiste ({{ui:Kopieren}}, {{ui:Einfügen}}) und in ihrem Menü {{ui:Mehr}}. Während ein anderer Befehl läuft, beenden Sie ihn oder drücken Sie zuerst {{key:Esc}}. {{key:Mod+V}} oder {{key:Mod+D}} erneut zu drücken, während eine Kopie dem Zeiger folgt, beginnt von vorn. Haben Sie etwas an der Befehlszeile eingegeben oder fragt ein Befehl nach Text, kopieren, ausschneiden und einfügen diese Tasten stattdessen diesen Text. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

## Umschalter

| Taste | Umschalter | Schaltfläche in der Statusleiste |
|---|---|---|
| {{key:F3}} | Objektfang ein oder aus | {{ui:Fang}} |
| {{key:F7}} | Raster ein oder aus | {{ui:Raster}} |
| {{key:F8}} | Ortho ein oder aus | {{ui:Ortho}} |
| {{key:F10}} | Polare Spur ein oder aus | {{ui:Polar}} |
| {{key:F11}} | Objektfangspur ein oder aus | {{ui:Spur}} |
| {{key:F12}} | Dynamische Eingabe ein oder aus | {{ui:DYN}} |

:::mac
Auf dem Mac sind F3, F7 und F8 meist Mission Control und Medientasten. Halten Sie **fn** dabei gedrückt oder aktivieren Sie die Standard-Funktionstasten in den Systemeinstellungen, wie unter [Tasten, Mäuse und Trackpads](common:keys) beschrieben. Die Schaltflächen in der Statusleiste funktionieren immer.
:::

:::firefox
F7 in Firefox kann auch fragen, ob Caret-Browsing eingeschaltet werden soll. Wählen Sie **Nein**, und verwenden Sie die Schaltfläche {{ui:Raster}}, falls die Frage immer wieder erscheint.
:::

## Hilfe

| Taste | Was sie tut |
|---|---|
| {{key:F1}} | Öffnet oder schließt diese Hilfe neben der Zeichnung. Sie funktioniert auch, während ein Befehl läuft, und gelangt nie an die Befehlszeile. |
| {{key:Esc}} | Mit dem Cursor im Hilfebereich: leert die Suche oder schließt den Bereich |

Die Schaltfläche {{ui:Hilfe}} in der Leiste oben tut dasselbe wie {{key:F1}}. Während Sie im Suchfeld der Hilfe tippen, gelangt nichts an die Befehlszeile. Klicken Sie auf die Zeichnung, um die Tasten wieder CadCraft zu geben; der Bereich bleibt daneben offen.

:::mac
Auf einer Mac-Tastatur halten Sie **fn** und drücken F1, oder klicken Sie auf {{ui:Hilfe}}.
:::

## Bildschirm

| Taste | Was sie tut |
|---|---|
| {{key:Ctrl+Shift+F}} | Wechselt zwischen normal, Vollbild und Vollbild mit ausgeblendeten Leisten. Dafür wird auf jedem Computer die Ctrl-Taste verwendet, auch am Mac. |
| {{key:Left}} {{key:Right}} | Mit fokussiertem Reiter unter der Zeichnung: der vorherige oder nächste Reiter |

Im Vollbild kann der Browser das erste {{key:Esc}} verwenden, um das Vollbild zu verlassen. Drücken Sie {{key:Esc}} erneut, um einen Befehl abzubrechen.

## Dialogfelder

| Taste | Was sie tut |
|---|---|
| {{key:Esc}} | Schließt das Dialogfeld ({{ui:In PDF plotten}}, oder eine Frage wie „nicht gespeicherte Änderungen“, wo es {{ui:Abbrechen}} bedeutet) |
| {{key:Tab}} | Wechselt zwischen den Einstellungen und Schaltflächen des Dialogfelds |

Solange ein Dialogfeld offen ist, sind die Tasten der Zeichnung aus.

## Felder im Bereich

In einem Feld im rechten oder linken Bereich:

| Taste | Was sie tut |
|---|---|
| {{key:Enter}} | Übernimmt den Wert und verlässt das Feld |
| {{key:Esc}} | Setzt den alten Wert zurück und verlässt das Feld |
| {{key:Tab}} | Übernimmt den Wert und wechselt zum nächsten Feld |

Solange ein Feld den Cursor hat, werden Buchstaben dort eingegeben, nicht in der Befehlszeile.

## Maus

| Aktion | Was sie tut |
|---|---|
| Klick | Wählt einen Punkt, wenn ein Befehl danach fragt; wählt ein Objekt, wenn nach Objekten gefragt wird; sonst wählt er ein Objekt oder einen Griff |
| Shift+Klick | Entfernt ein ausgewähltes Objekt aus der Auswahl (wenn {{ui:Objekte anklicken}} in den [Einstellungen](topic:settings) auf {{ui:Ersetzt die Auswahl}} steht: fügt es hinzu). Beim Wählen eines Punkts: ignoriert Objektfänge für diesen Klick |
| Klick auf leeren Raum, dann nochmal klicken | Ein Auswahlfenster: von links nach rechts ist es ein Fenster, von rechts nach links ein Kreuzen |
| Ziehen auf leerem Raum | Ein Lasso: zuerst nach rechts ziehen ist ein Fenster, zuerst nach links ein Kreuzen; {{key:Space}} beim Ziehen wechselt zwischen Fenster, Kreuzen und Zaun; {{key:Esc}} lässt es fallen (LASSOMODE 0 oder die Einstellungen machen es wieder zum Rechteck) |
| Ziehen durch Teile in TRIM oder EXTEND | Stutzt (oder dehnt) jedes Teil, das der Pfad kreuzt; halten Sie {{key:Shift}} für die andere Funktion |
| Griff ziehen | Verschiebt den Griff (oder klicken Sie auf den Griff und dann dorthin, wo er hin soll) |
| Doppelklick auf Text | Wählt ihn aus und setzt den Cursor in sein Feld {{ui:Text}} im rechten Bereich |
| Rechtsklick | {{key:Enter}}. Während des Griffverschiebens oder eines Auswahlfensters: bricht es ab |
| Ziehen mit der rechten Taste | Schwenkt |
| Mausrad | Zoomt rein und raus, um das Fadenkreuz |
| Ziehen mit dem Mausrad (mittlere Taste) | Schwenkt |
| Doppelklick auf das Mausrad | Zoomt auf die ganze Zeichnung (Grenzen) |
| Eine DWG oder DXF auf die Zeichnung ziehen | Öffnet sie |

Zu Trackpad und Touchscreen siehe [Maus, Trackpad und Touch](topic:mouse-trackpad-touch).

## Tasten, die der Browser behält

{{key:Mod+N}}, {{key:Mod+W}} und {{key:Mod+T}} gehören immer dem Browser. CadCraft verwendet sie nicht: Verwenden Sie {{ui:Neu}} oder geben Sie `NEW` für eine neue Zeichnung ein. Die Zwischenablage von CadCraft ist eigenständig: {{key:Mod+C}} und {{key:Mod+V}} kopieren Objekte zwischen CadCraft-Zeichnungen und -Reitern, nicht zu oder von anderen Programmen.

:::mac
Wenn {{key:Mod+Y}} den Verlauf Ihres Browsers öffnet, statt zu wiederholen, verwenden Sie {{key:Mod+Shift+Z}} oder die Schaltfläche {{ui:Wiederholen}}.
:::

## Wo Verschieben zu finden ist

Verschieben ist der Befehl `MOVE` (Taste {{key:M}}): Wählen Sie die Objekte, dann einen Basispunkt und einen zweiten Punkt oder eine eingegebene Strecke. `ALIGN` und `DISTRIBUTE` gibt es ebenfalls. BimCraft verwendet dieselben Namen für dieselben Aufgaben bei Bauelementen, aber dort ist {{key:M}} Messen: Sein Verschieben ist {{key:Shift+M}}.
