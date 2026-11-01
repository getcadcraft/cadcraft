---
title: Der CadCraft-Bildschirm
summary: Ein Rundgang durch jede Leiste, jeden Bereich und jeden Tab der Zeichen-App, unter dem Namen, den sie auf dem Bildschirm trägt.
keywords: Bildschirm, Oberfläche, Symbolleiste, Menüband, Bereiche, Befehlszeile, Statusleiste, Tabs, Layout-Tabs, Eigenschaften, Layer-Bereich, Rundgang
from: b5a33388
---

Der Bildschirm hat sieben Teile. Von oben nach unten: die App-Leiste, die Symbolleiste, der Zeichenbereich mit je einem Bereich an jeder Seite, die Tabs unter der Zeichnung, die Befehlszeile und die Statusleiste.

## Die App-Leiste

Die schmale Leiste ganz oben gehört zur Website, nicht zur Zeichnung. Sie zeigt das CadCraft-Zeichen, den App-Namen, die laufende Version, einen Link zur Seite der App, eine Schaltfläche {{ui:Hilfe}} (oder {{key:F1}}), eine Schaltfläche {{ui:Für Offline speichern}}, eine Schaltfläche {{ui:Vollbild}} und zwei Design-Schaltflächen, {{ui:Papier}} und {{ui:Modell}}.

Die Schaltfläche {{ui:Einstellungen}} (Zahnrad) enthält CadCrafts eigene Einstellungen und die, die alle Apps teilen: siehe [CadCraft-Einstellungen](topic:settings).

{{ui:Für Offline speichern}} legt eine Kopie von CadCraft samt DWG-Leser in diesem Browser ab, damit sie ohne Verbindung öffnet. Die Beschriftung zeigt den Zustand: „Speichere N von M“, „Offline bereit“, „Speichern nicht möglich“ oder „Offline nicht verfügbar“. Siehe [Offline arbeiten](common:offline).

:::note
Die Schaltflächen {{ui:Papier}} und {{ui:Modell}} in der App-Leiste ändern nur die Farben des Bildschirms: {{ui:Papier}} ist ein helles Design, {{ui:Modell}} ein dunkles. Mit dem Tab {{ui:Modell}} unter der Zeichnung, der zwischen der Zeichnung und ihren Blättern umschaltet, haben sie nichts zu tun.
:::

Die Schaltfläche {{ui:Vollbild}} oder {{key:Ctrl+Shift+F}} (auf jedem Computer die Control-Taste, auch am Mac) schaltet durch drei Bildschirmmodi: normal, Vollbild und Vollbild mit ausgeblendeten Leisten. Bei ausgeblendeten Leisten holen Sie sie zurück, indem Sie den Zeiger an den oberen Bildschirmrand bewegen.

## Die Symbolleiste

Unter der App-Leiste liegt die Symbolleiste. Jede Schaltfläche führt einen Befehl aus, genau als hätten Sie ihn eingegeben, die Befehlszeile stellt also in beiden Fällen dieselben Fragen. Über einer Schaltfläche zeigt der Tooltip den Befehlsalias. Die Gruppen sind:

| Gruppe | Schaltflächen |
|---|---|
| Datei | {{ui:Neu}}, {{ui:Öffnen}}, {{ui:Speichern}}, {{ui:Speichern unter}}, {{ui:Plotten}} |
| Zeichnen | {{ui:Linie}}, {{ui:Polylinie}}, {{ui:Kreis}}, {{ui:Bogen}}, {{ui:Rechteck}}, {{ui:Polygon}}, {{ui:Ellipse}}, {{ui:Text}}, {{ui:Absatz}}, {{ui:Schraffur}} und {{ui:Mehr}}: {{ui:Punkt}}, {{ui:Konstruktionslinie}} und {{ui:Strahl}} (siehe [Konstruktionslinien und Strahlen](topic:construction-lines)) |
| Ändern | {{ui:Verschieben}}, {{ui:Kopieren}}, {{ui:Drehen}}, {{ui:Skalieren}}, {{ui:Spiegeln}}, {{ui:Strecken}}, {{ui:Versatz}}, {{ui:Stutzen}}, {{ui:Dehnen}}, {{ui:Abrunden}}, {{ui:Fasen}}, {{ui:Zerlegen}}, {{ui:Löschen}} und {{ui:Mehr}}: {{ui:Anordnung}}, {{ui:Verbinden}}, {{ui:Eigenschaften übertragen}}, {{ui:Brechen}} und {{ui:Längen}} |
| Beschriften | {{ui:Linear}}, {{ui:Ausgerichtet}}, {{ui:Winkel}}, {{ui:Radius}}, {{ui:Durchmesser}} (Bemaßungen), {{ui:Führungslinie}} (Multi-Führungslinie) und {{ui:Mehr}}: {{ui:Weiterführende Bemaßung}}, {{ui:Basislinienbemaßung}} und {{ui:Revisionswolke}} |
| Parametrisch | {{ui:Auto}}, {{ui:Abhängigkeit}}, {{ui:Bemaßung}}, {{ui:Parameter}} und {{ui:Mehr}} mit jeder Abhängigkeit (siehe [Eine Zeichnung mit Abhängigkeiten festlegen](topic:constraints)) |
| Blöcke | {{ui:Erstellen}}, {{ui:Einfügen}}, {{ui:Bibliothek}} und {{ui:Mehr}}: {{ui:Block bearbeiten}} und {{ui:Attribut definieren}} |
| Blätter | {{ui:Neues Blatt}}, {{ui:Ansichtsfenster}} |
| Bearbeiten | {{ui:Rückgängig}}, {{ui:Wiederholen}}, {{ui:Kopieren}} (in die Zwischenablage), {{ui:Einfügen}} und {{ui:Mehr}}: ein Menü mit {{ui:Ausschneiden}}, {{ui:Kopieren}}, {{ui:Einfügen}}, {{ui:An gleicher Position einfügen}}, {{ui:Duplizieren und verschieben}}, {{ui:Löschen}}, {{ui:Alles auswählen}}, {{ui:Auswahl aufheben}}, {{ui:Schnellauswahl}}, {{ui:Ähnliche wählen}} und {{ui:Suchen und Ersetzen}}, jeweils mit ihrer Taste |
| Ansicht | {{ui:Grenzen}}, {{ui:Fenster}}, {{ui:Vorherige}} und {{ui:Mehr}}: {{ui:Distanz messen}}, {{ui:Fläche}}, {{ui:Messen (Radius, Winkel …)}} und der geteilte Bildschirm: {{ui:Nebeneinander teilen}}, {{ui:Übereinander teilen}}, {{ui:Vier Teilfenster}}, {{ui:Ein Teilfenster}} (siehe [Den Bildschirm teilen](topic:split-screen)), sowie {{ui:Ansicht um 90° nach links drehen}}, {{ui:Ansicht um 90° nach rechts drehen}}, {{ui:Zurück zur Welt}} (siehe [Die Ansicht drehen](topic:ucs-and-turned-view)) |

{{ui:Kopieren}} in der Gruppe {{ui:Ändern}} ist der Befehl {{cmd:COPY}} (Basispunkt, dann wohin jede Kopie kommt); {{ui:Kopieren}} in der Gruppe {{ui:Bearbeiten}} legt Objekte für {{ui:Einfügen}} in die Zwischenablage. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste). Die Schaltfläche des laufenden Befehls bleibt hervorgehoben, bis der Befehl endet. Tooltips nennen die Windows-Kürzel („Ctrl+O“); am Mac funktioniert auch {{key:Mod+O}}.

Bei einem niedrigen Fenster (etwa einem Laptop mit auf 125 % oder mehr skalierter Anzeige) nimmt die Symbolleiste der Zeichnung nie den Platz weg: Bekäme die Zeichnung zu wenig Höhe, verlieren die Schaltflächen die Wörter unter ihren Symbolen und die Gruppennamen (zum Namen über die Schaltfläche fahren), und reicht das nicht, wird die Symbolleiste zu einer seitlich scrollbaren Zeile. Ein höheres Fenster bringt die Wörter zurück.

## Der linke Bereich

Der Bereich links hat drei Abschnitte.

- **{{ui:Layer}}.** Jeder Layer der Zeichnung, mit einem gefüllten Punkt beim aktuellen. Einen Namen anklicken, um diesen Layer aktuell zu setzen. Jede Zeile hat ein Farbfeld (anklicken, um eine Farbe zu wählen) und vier Schaltflächen: ein/aus (Auge), frieren (Schneeflocke), sperren (Vorhängeschloss) und plotten (Drucker). {{ui:Neuer Layer}} öffnet ein Feld zum Hinzufügen. Siehe [Eine Zeichnung mit Layern ordnen](topic:layers).
- **{{ui:Blöcke}}.** Die in der Zeichnung definierten Blöcke, wie oft jeder verwendet wird, und für jeden eine Schaltfläche {{ui:Einfügen}}. Siehe [Blöcke erstellen und einfügen](topic:blocks).
- **{{ui:Zeichnung}}.** Angaben zur geöffneten Datei: Name (mit „(geändert)“ bei nicht gespeicherten Änderungen), Format, Größe, Einheiten, Anzahl der Objekte, Layer, Blöcke und Blätter. Nach dem Öffnen einer Datei listet ein Feld „Über diese Datei“ alles auf, was CadCraft nicht darstellen konnte oder umwandeln musste.

## Der Zeichenbereich

Die Bildschirmmitte ist die Zeichnung. Der Zeiger ist ein Fadenkreuz. Wenn CadCraft einen Punkt erwartet, zeigen eine kleine Markierung und ein Label („Endpunkt“, „Mittelpunkt“), wo ein Objektfang landen wird. Wenn es Objekte erwartet, hat das Fadenkreuz ein Auswahlfeld, und darunter liegende Objekte leuchten auf.

Ist die Zeichnung leer, zeigt eine Karte „Zeichnen beginnen“ ein paar erste Befehle. Sie verschwindet, sobald Sie einen Befehl ausführen oder eine Datei öffnen. Sie können eine DWG- oder DXF-Datei an beliebiger Stelle auf diesem Bereich ablegen, um sie zu öffnen.

## Die Tabs unter der Zeichnung

Unter der Zeichnung liegen die Tabs: zuerst {{ui:Modell}}, dann {{ui:3D}}, dann ein Tab je Blatt (Layout), dann eine Schaltfläche {{ui:+}}.

- {{ui:Modell}} ist die Zeichnung selbst, in voller Größe, in Zeichnungseinheiten.
- {{ui:3D}} zeigt die auf dem Boden liegende Zeichnung und die daraus erzeugten Volumenkörper. Solange er angezeigt wird, hat die Symbolleiste anstelle der Zeichengruppen eine Gruppe {{ui:3D}}. Siehe [In 3D modellieren](topic:3d-solids).
- Jeder Blatt-Tab ist ein Blatt Papier mit Schriftfeld und Ansichtsfenstern auf das Modell. Was Sie dort zeichnen, steht in Papiereinheiten (Millimeter oder Zoll). Doppelklick innerhalb eines Ansichtsfensters, um durch es am Modell zu arbeiten (siehe [Durch ein Ansichtsfenster am Modell arbeiten](topic:sheets-and-viewports#work-on-the-model-through-a-viewport)). Ein langer Blattname wird auf seinem Tab gekürzt; über dem Tab erscheint der ganze Name. Bei vielen Blättern zeigt {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Blatt-Tabs}} › {{ui:Nur Blattnummern}} auf jedem Tab nur die Nummer des Blatts (A-101).
- {{ui:+}} erstellt ein neues Blatt mit Rahmen, Schriftfeld und einem Ansichtsfenster. Es entspricht dem Befehl {{cmd:LAYOUT}}.
- Doppelklick auf einen Blatt-Tab benennt ihn um. Bei fokussiertem Tab wechseln {{key:Left}} und {{key:Right}} zwischen den Tabs.

Jeder Tab behält sein eigenes Zoomen und Schwenken. Siehe [Ein Blatt einrichten](topic:sheets-and-viewports).

## Der rechte Bereich: Eigenschaften

Der Bereich rechts ändert sich mit der Auswahl.

- **Nichts gewählt, auf dem Tab {{ui:Modell}}:** Die Überschrift lautet {{ui:Aktuelle Einstellungen}}. Hier legen Sie {{ui:Layer}}, {{ui:Farbe}} und {{ui:Texthöhe}} für neue Objekte fest, die {{ui:Einheiten}} der Zeichnung und die Größen für neue Bemaßungen ({{ui:Texthöhe}}, {{ui:Pfeilgröße}}, {{ui:Dezimalstellen}}, {{ui:Gesamtmaßstab}}).
- **Nichts gewählt, auf einem Blatt:** Die Überschrift lautet „Blatt:“ und der Blattname. Sie können das Blatt umbenennen, sein {{ui:Papier}} und seine {{ui:Ausrichtung}} ändern, {{ui:Dieses Blatt plotten}} oder {{ui:Dieses Blatt löschen}}. Darunter folgen die Einstellungen für neue Objekte.
- **Ein Objekt gewählt:** sein Typ als Überschrift (Linie, Kreis, Text, Bemaßung, Ansichtsfenster …), dann Layer, Farbe und Geometrie. Einen neuen Wert eingeben und {{key:Enter}} drücken, um zu ändern.
- **Mehrere Objekte gewählt:** wie viele, und ihr gemeinsamer {{ui:Layer}} und ihre gemeinsame {{ui:Farbe}}. Eine Änderung gilt für alle. „Verschieden“ heißt, dass sie voneinander abweichen.

Siehe [Mit Griffen und Eigenschaften bearbeiten](topic:grips-and-properties).

Darunter öffnet sich der Bereich {{ui:Parameter}}, wenn Sie {{ui:Parameter}} wählen oder {{cmd:PARAMETERS}} eingeben: jeder Parameter und jede Bemaßungsabhängigkeit in einer Tabelle. Siehe [Parameter und Gleichungen verwenden](topic:parameters).

## Die Befehlszeile

Unten liegt die Befehlszeile: der Verlauf dessen, was Sie getan haben, und darunter die Eingabeaufforderung.

- Die Beschriftung der Eingabeaufforderung lautet `Befehl:`, wenn nichts läuft. Während ein Befehl läuft, zeigt sie die Frage, ihre Optionen in eckigen Klammern und den Vorgabewert in spitzen Klammern, zum Beispiel `Radius des Kreises angeben [Durchmesser] <500>:`.
- Während Sie einen Befehlsnamen tippen, schlägt ein Hinweis rechts passende Befehle vor. Mit {{key:Tab}} übernehmen Sie den ersten. „Kein solcher Befehl“ heißt, dass nichts passt.
- {{key:Up}} und {{key:Down}} holen zuvor eingegebene Zeilen zurück.
- Der Verlauf behält die letzten 400 Zeilen. Meldungen von Befehlen, Messungen von {{cmd:DIST}} und {{cmd:LIST}} sowie Speicher- und Plotberichte erscheinen hier.

## Die Statusleiste

Die unterste Zeile ist die Statusleiste.

- **Koordinaten** links: X und Y des Fadenkreuzes. Hat ein Befehl einen Basispunkt, zeigt sie auch Abstand und Winkel von ihm, zum Beispiel `Δ 1200 < 90°`.
- **Meldungen** in der Mitte, etwa „Ortho ein“ oder „Aktueller Layer: Walls“. Sie blenden nach einigen Sekunden aus.
- **{{ui:Raster}}**, **{{ui:Ortho}}**, **{{ui:Polar}}**, **{{ui:Fang}}**, **{{ui:Spur}}**, **{{ui:DYN}}** und **{{ui:LST}}** rechts. Jede ist ein Schalter; eine gedrückte Schaltfläche ist an. {{ui:LST}} zeigt Linienstärken auf dem Bildschirm (siehe [Linienstärken und Linientypen](topic:units-papers-scales#line-weights-and-linetypes)). Der kleine Pfeil neben {{ui:Fang}} öffnet {{ui:Objektfänge}}, wo Sie ankreuzen, welche Fänge aktiv sind. Siehe [An Punkten von Objekten fangen](topic:object-snaps).

## Der Dialog In PDF plotten

{{ui:Plotten}} (oder {{key:Mod+P}}) öffnet den Dialog {{ui:In PDF plotten}}, mit den Einstellungen links und einer Live-Vorschau rechts. Siehe [In PDF plotten](topic:plot-pdf).

## Die Hilfe

{{key:F1}} oder die Schaltfläche {{ui:Hilfe}} öffnet diese Hilfe als seitlichen Bereich; die Zeichnung bleibt daneben bedienbar. Sie funktioniert ohne Verbindung. Nochmal {{key:F1}} oder {{key:Esc}} im Bereich schließt sie. Siehe [Diese Hilfe verwenden](common:help).
