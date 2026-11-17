---
title: Fehlerbehebung
summary: Meldungen, die CadCraft anzeigt, und Probleme, auf die Sie stoßen können, jeweils mit Ursache und Abhilfe.
keywords: Problem, Fehler, funktioniert nicht, Meldung, kann nicht öffnen, unbekannter Befehl, nichts passiert, hängt, Tasten funktionieren nicht, leer, fehlt, beheben
from: 8299b222
---

## Dateien öffnen

| Meldung oder Symptom | Ursache | Abhilfe |
|---|---|---|
| „CadCraft öffnet DWG- und DXF-Zeichnungen. „…“ ist keines von beidem.“ | Die Datei ist keine `.dwg`- oder `.dxf`-Datei. | Öffnen Sie die Zeichnungsdatei selbst. Eine PDF lässt sich einbinden („Öffnen“ fragt: importieren oder anhängen, siehe [PDF-Unterlagen](topic:pdf-underlay)); Bilder fügen Sie mit `IMAGEATTACH` ein. |
| „Diese binäre DXF endet mitten in einem Objekt: Die Datei ist abgeschnitten oder beschädigt.“ | Die binäre DXF bricht vor ihrem Ende ab. | Geben Sie RECOVER ein, um zu öffnen, was gelesen werden kann, oder bitten Sie um die Datei erneut. |
| „Dies ist keine lesbare DXF (ungültiger Gruppencode in Zeile …).“ | Die DXF ist beschädigt oder keine echte DXF. | Bitten Sie um die Datei erneut oder um eine DWG. |
| „Diese Zeichnung konnte nicht gelesen werden. Sie ist möglicherweise beschädigt oder in einer Version gespeichert, die der Leser noch nicht unterstützt (…).“ | Der DWG-Leser konnte sie nicht lesen. | Bitten Sie um die DWG in einer älteren Version oder um eine DXF. |
| „Diese Zeichnung stammt von AutoCAD R11 / R12 (DWG AC1009) und ist älter als das, was CadCraft liest …“ | DWG-Dateien ab Release 12 und früher verwenden ein Format, das CadCraft nicht liest. | Speichern Sie die Datei im Programm, das sie erstellt hat, als DXF (beliebige Version) oder als neuere DWG, und öffnen Sie diese. CadCraft bietet bei „Speichern unter“ für Programme, die dieses alte Format verlangen, DXF R12 an. |
| „Konnte nicht geöffnet werden …“, gefolgt von einer Netzwerkmeldung, bei der ersten DWG | Der DWG-Leser konnte nicht heruntergeladen werden: Sie sind offline und CadCraft ist nicht für Offline-Nutzung gespeichert, oder die Verbindung ist abgebrochen. | Stellen Sie eine Verbindung her und versuchen Sie es erneut, oder öffnen Sie eine DXF. Klicken Sie auf {{ui:Für Offline speichern}} und warten Sie auf „Offline bereit“, damit DWG-Dateien das nächste Mal offline geöffnet werden. Siehe [Offline arbeiten](common:offline). |
| Die Offline-Schaltfläche zeigt „Konnte nicht gespeichert werden“ | Einige Dateien wurden nicht heruntergeladen. | Prüfen Sie die Verbindung und klicken Sie auf die Schaltfläche, um es erneut zu versuchen. |
| Die Offline-Schaltfläche zeigt „Offline nicht verfügbar“ | Private Fenster und einige verwaltete Computer können keine Offline-Kopie speichern. | Verwenden Sie ein normales Fenster oder bleiben Sie online. |
| CadCraft öffnet sich ohne Verbindung nicht | Es wurde in diesem Browser nicht für die Offline-Nutzung gespeichert, oder der Browser hat es gelöscht. | Klicken Sie beim nächsten Mal, wenn Sie online sind, auf {{ui:Für Offline speichern}} und warten Sie auf „Offline bereit“. |
| Die Zeichnung öffnet sich, aber Teile fehlen | Objekte, die CadCraft noch nicht zeichnen kann, oder Layer, die in der Datei ausgeschaltet oder eingefroren sind. | Lesen Sie „Über diese Datei“ im linken Bereich. Prüfen Sie den Bereich {{ui:Layer}}. |
| Text bricht auf zwei Zeilen um | CadCraft zeichnet Text in einer Helvetica-ähnlichen Schrift, die breiter ist als manche CAD-Schriften. | Kürzen Sie den Text in den Eigenschaften oder akzeptieren Sie die zusätzliche Zeile. |
| Ein Kreis erscheint als Ellipse, oder gespiegelter Text ist richtig herum lesbar | Das Objekt wurde im Programm, das die Datei erstellt hat, in einer geneigten Ebene oder von unten gezeichnet. CadCraft zeigt es so, wie es die Draufsicht dieses Programms zeigt, also von oben; Text bleibt lesbar. | Nichts zu beheben. Um es so zu sehen, wie das andere Programm es zeigt, bitten Sie um eine abgeflachte Zeichnung oder darum, dass die Objekte von oben gezeichnet sind. |
| Ein Block, Kreis oder eine Bemaßung liegt an einer anderen Stelle als im Programm, das die Datei erstellt hat | Ein Zeichnungsfall, den CadCraft falsch liest. | Melden Sie es uns auf Discord, möglichst mit der Datei, falls Sie sie teilen können. |

## Die Befehlszeile

| Meldung oder Symptom | Ursache | Abhilfe |
|---|---|---|
| „Unbekannter Befehl „…“. Geben Sie HELP für die Liste ein.“ | Es gibt keinen Befehl und kein Kürzel mit diesem Namen. | Geben Sie `HELP` ein oder sehen Sie in der [Befehlsübersicht](topic:commands) nach. Einige bekannte Befehle sind [noch nicht umgesetzt](topic:not-built-yet). |
| „Kein solcher Befehl“ neben der Befehlszeile während der Eingabe | Was Sie eingeben, passt noch auf nichts. | Tippen Sie weiter oder prüfen Sie die Schreibweise. |
| „Punkt oder Optionsschlüsselwort erforderlich.“ | Was Sie eingegeben haben, ist weder ein Punkt noch eine Option. | Prüfen Sie das Format: `x,y`, `@dx,dy`, `@d<a` oder eine einzelne Zahl. Siehe [Eingabe von Koordinaten und Abständen](topic:coordinate-entry). |
| „Erfordert eine positive Zahl oder zwei Punkte.“ | Ein Abstand war negativ oder keine Zahl. | Geben Sie eine positive Zahl ein oder klicken Sie zwei Punkte an. |
| „Erfordert einen Winkel in Grad oder zwei Punkte.“ | Der Winkel war keine Zahl. | Geben Sie Grad als einfache Zahl ein. |
| „Erfordert eine Zahl.“ | Es wurde eine Zahl erwartet. | Geben Sie nur Ziffern ein. |
| „Ungültige Option.“ | Die Buchstaben passen zu keiner Option. | Geben Sie die Großbuchstaben ein, die in den eckigen Klammern stehen. |
| `*Abbrechen*` | Sie haben {{key:Esc}} gedrückt oder {{key:Enter}}, wo ein Punkt verlangt war. | Starten Sie den Befehl erneut. |
| Die Eingabe erreicht die Befehlszeile nicht | Ein Feld in einem Bereich oder Dialog hat den Cursor. | Drücken Sie {{key:Enter}} oder {{key:Esc}} oder klicken Sie auf die Zeichnung. |
| Der Befehl verwendet Objekte, die Sie nicht gewählt haben | Sie waren vor dem Start ausgewählt. | Drücken Sie {{key:Esc}} vor dem Befehl. |
| Eine Linie verläuft an eine unerwartete Stelle | `x,y` ist absolut. | Verwenden Sie `@dx,dy` für relative Punkte. |
| „Beenden oder abbrechen Sie zuerst den aktuellen Befehl (Esc).“ | Sie haben {{key:Mod+S}} gedrückt, während ein Befehl lief. | Drücken Sie {{key:Esc}} und speichern Sie dann. |
| „DWG (AutoCAD 2000) konnte nicht gespeichert werden: … Versuchen Sie „Speichern unter“, dann DXF.“ | Etwas in der Zeichnung konnte nicht als DWG geschrieben werden. | Drücken Sie {{key:Mod+Shift+S}}, wählen Sie {{ui:DXF R12}} und klicken Sie auf {{ui:Speichern}}. |
| „Nicht gespeichert.“ | Sie haben den Dialog {{ui:Kopie speichern unter}} mit {{ui:Abbrechen}} oder {{key:Esc}} geschlossen. | Drücken Sie {{key:Mod+Shift+S}} erneut und klicken Sie auf {{ui:Speichern}}. |

## Bearbeiten

| Meldung oder Symptom | Ursache | Abhilfe |
|---|---|---|
| Ein Objekt lässt sich nicht auswählen | Sein Layer ist gesperrt, aus oder eingefroren; oder Sie sind auf einem Blatt und es ist das Modell innerhalb eines Ansichtsfensters. | Entsperren Sie den Layer oder wechseln Sie zur Registerkarte {{ui:Modell}}. |
| „Dort wurde nichts gefunden.“ | Unter dem Klick liegt kein Objekt. | Zoomen Sie hinein und klicken Sie auf die Linie selbst. |
| „Dort kreuzt nichts das Objekt.“ | {{cmd:TRIM}} hat kein Objekt gefunden, das das gewählte Stück kreuzt. | Prüfen Sie, ob die Schnittlinie es wirklich kreuzt. |
| „Dieses Objekt kann nicht gestutzt werden.“ | Stutzen funktioniert nur bei Linien, Bögen, Kreisen und Polylinien. | Zerlegen Sie zuerst Blöcke oder löschen Sie das Objekt und zeichnen Sie es neu. |
| „Keine Begrenzung in dieser Richtung.“ | {{cmd:EXTEND}} hat nichts zum Treffen gefunden. | Wählen Sie näher an dem Ende, das sich verlängern soll. |
| „Dieses Objekt kann nicht versetzt werden.“ | Versetzen funktioniert nur bei Linien, Bögen, Kreisen und Polylinien. | Zerlegen Sie es zuerst oder zeichnen Sie eine parallele Linie. |
| „So weit kann nicht versetzt werden.“ | Der Versatz würde die Form umstülpen. | Verwenden Sie einen kleineren Abstand. |
| „Radius ist zu groß.“ oder „Abstand ist zu groß.“ | Die Abrundung oder Fase würde über das Ende einer Linie hinausgehen. | Legen Sie mit `R` einen kleineren Radius fest oder mit `D` kleinere Abstände. |
| „Nur das erste oder letzte Segment einer offenen Polylinie kann zurückgeschnitten werden.“ | Die Ecke würde in die Mitte einer Polylinie schneiden. | Wählen Sie zwei nebeneinanderliegende Segmente der Polylinie oder verwenden Sie `P` für jede Ecke. |
| „Wählen Sie eine zweite, andere Linie.“ | Die zweite Auswahl war dieselbe Linie oder keine Linie. | Wählen Sie eine andere Linie. |
| „Nur Polylinien, Blockreferenzen und Bemaßungen können zerlegt werden.“ | In der Auswahl gab es nichts zum Zerlegen. | Wählen Sie eine Polylinie, Blockreferenz oder Bemaßung. |
| „Das ist der aktuelle Layer. Machen Sie zuerst einen anderen Layer aktuell.“ | Sie wollten den aktuellen Layer ausschalten. | Klicken Sie auf den Namen eines anderen Layers und schalten Sie diesen dann aus. |
| „Es gibt bereits einen Layer mit dem Namen …“ | Layernamen müssen eindeutig sein. | Wählen Sie einen anderen Namen. |
| „Nichts zum Rückgängigmachen.“ | Es gibt nichts mehr rückgängig zu machen, oder Sie haben eine Zeichnung geöffnet oder begonnen (das löscht den Verlauf). | — |

## Bemaßungen und Blöcke

| Meldung oder Symptom | Ursache | Abhilfe |
|---|---|---|
| Bemaßungstext und Pfeile sind winzig oder riesig | Größen sind in Zeichnungseinheiten angegeben; der Gesamtmaßstab passt nicht zur Zeichnung. | Setzen Sie {{cmd:DIMSCALE}} auf den Plotmaßstab; siehe [Bemaßungsgrößen festlegen](topic:dimension-settings). |
| „Geben Sie einen Punkt innerhalb des Winkels an, den Sie messen wollen.“ | Die Position der Winkelbemaßung liegt auf einem Schenkel. | Klicken Sie innerhalb des Winkels. |
| „Diese Linien sind parallel.“ | Parallele Linien haben keinen Winkel zwischen sich. | Wählen Sie zwei Linien, die sich treffen. |
| „Wählen Sie eine lineare oder ausgerichtete Bemaßung.“ | {{cmd:DIMCONTINUE}} oder {{cmd:DIMBASELINE}} braucht eine Bemaßung als Ausgangspunkt. | Wählen Sie eine lineare oder ausgerichtete Bemaßung. |
| „Diese Zeichnung hat noch keine Blöcke: F fügt einen aus einer Datei ein, L aus der Bibliothek …“ | Die Zeichnung hat keine eigenen Blöcke. | Geben Sie `F` oder `L` ein oder erstellen Sie einen Block mit {{cmd:BLOCK}}. |
| „Kein Block namens „…“.“ | Der Name ist falsch. | Die Meldung listet die vorhandenen Blöcke auf. |
| „Ein Blockname darf nicht mit * beginnen oder … verwenden“, gefolgt von einer Zeichenliste | Der Name enthält ein Zeichen, das Blöcke nicht verwenden können. | Verwenden Sie Buchstaben, Ziffern, `-` und `_`. |
| „Ein Block kann sich nicht selbst enthalten.“ | Die Auswahl enthält eine Referenz auf den Block, der gerade erstellt wird. | Lassen Sie diese Referenz weg. |
| „Keine Objekte gewählt; nichts erstellt.“ | Sie haben {{key:Enter}} gedrückt, bevor Sie etwas gewählt haben. | Starten Sie {{cmd:BLOCK}} erneut und wählen Sie die Objekte. |

## Blätter und Plotten

| Meldung oder Symptom | Ursache | Abhilfe |
|---|---|---|
| „Ansichtsfenster gehören auf ein Layout. Öffnen Sie zuerst eine Layout-Registerkarte (oder erstellen Sie eine mit LAYOUT).“ | {{cmd:MVIEW}} auf der Registerkarte {{ui:Modell}}. | Klicken Sie zuerst auf eine Blatt-Registerkarte. |
| „Öffnen Sie zuerst das Layout mit dem Ansichtsfenster.“ | {{cmd:VPVIEW}} auf der Registerkarte {{ui:Modell}}. | Klicken Sie zuerst auf die Blatt-Registerkarte. |
| Der Maßstab eines Ansichtsfensters wirkt zehnmal falsch | Die Zeichnungseinheiten sind falsch. | Stellen Sie {{ui:Einheiten}} unter {{ui:Aktuelle Einstellungen}} ein. |
| „Es gibt noch nichts zu plotten.“ | Das Modell ist leer. | Zeichnen Sie etwas oder öffnen Sie eine Zeichnung. |
| „Wählen Sie das Fenster zum Plotten.“ | {{ui:Ein Fenster…}} ist gewählt und es wurde kein Fenster gewählt. | Klicken Sie auf {{ui:Wählen}} und klicken Sie zwei Ecken an. |
| „… größer als das Papier: Die Ränder werden abgeschnitten.“ | Der Bereich passt bei diesem Maßstab nicht. | Wählen Sie einen kleineren Maßstab, ein größeres Papier oder {{ui:An Papier anpassen}}. |
| „Der Browser hat den neuen Tab blockiert, daher wurde die PDF stattdessen heruntergeladen.“ | Pop-ups sind für die Seite blockiert. | Öffnen Sie die heruntergeladene PDF oder erlauben Sie Pop-ups für die Seite. |
| Zeichen werden als „?“ gedruckt | Die Schriften der PDF haben für sie keinen Buchstaben (seltene Ideogramme, Hindi und andere Schriften, die komplexe Formung brauchen, …), oder die größere Schrift konnte nicht geladen werden (offline). Europäische Schriften, Kyrillisch, Griechisch, Hebräisch, Arabisch, Persisch, Urdu, Thai, Chinesisch, Japanisch und Koreanisch werden so gedruckt, wie sie sind. | Für arabische Schriften, Thai, Chinesisch, Japanisch oder Koreanisch plotten Sie erneut mit Verbindung. Andere Schriften sind noch nicht umgesetzt. |
| Konstruktionslinien erscheinen in der PDF | Ihr Layer wird geplottet. | Klicken Sie auf die Druckerschaltfläche des Layers. |
| Alle Linien sind gleich dick | Ihre Linienstärke ist {{ui:Standard}}, daher werden sie mit der Stiftbreite des Dialogs gedruckt. | Geben Sie den Layern oder Objekten im rechten Bereich eine {{ui:Linienstärke}} oder wählen Sie im Dialog eine {{ui:Linienstärke}}. Um Linienstärken auf dem Bildschirm zu sehen, drücken Sie {{ui:LST}} in der Statusleiste. |

## Tasten und Bildschirm

| Symptom | Ursache | Abhilfe |
|---|---|---|
| F3, F7 oder F8 ändert die Lautstärke oder öffnet Mission Control | Mac-Funktionstasten. | Halten Sie **fn** gedrückt oder verwenden Sie die Schaltflächen der Statusleiste. Siehe [Tasten, Mäuse und Trackpads](common:keys). |
| F7 fragt nach dem Caret-Browsing | Firefox' eigene Belegung von F7. | Wählen Sie Nein; verwenden Sie die Schaltfläche {{ui:Raster}}. |
| {{key:Mod+N}} hat ein Browserfenster geöffnet | Der Browser behält diese Taste. | Klicken Sie auf {{ui:Neu}} oder geben Sie `NEW` ein. |
| {{key:Mod+A}} hat den Text der Befehlszeile ausgewählt | Die Befehlszeile hatte den Cursor. | Klicken Sie zuerst auf ein Objekt oder geben Sie bei der Eingabeaufforderung `Objekte wählen` `ALL` ein. |
| {{key:Delete}} löscht nicht | Die Befehlszeile hatte den Cursor. | Geben Sie `E` ein und drücken Sie {{key:Enter}}. |
| Der Rechtsklick tut nichts auf einem Mac-Trackpad | Ein Ctrl-Klick kann als gewöhnlicher Klick zählen. | Klicken Sie mit zwei Fingern. |
| Auf einem Trackpad verschiebt sich nichts | Es gibt keine mittlere Taste, und die Leertaste verschiebt nicht. | Wischen Sie mit zwei Fingern: Die 2D-Ansicht verschiebt sich (Pinch und Mausrad zoomen). Oder ziehen Sie bei gehaltener rechter Maustaste. |
| Der erste {{key:Esc}} hat den Vollbildmodus verlassen | Der Browser verwendet Esc, um den Vollbildmodus zu verlassen. | Drücken Sie {{key:Esc}} erneut, um den Befehl abzubrechen. |
| {{key:F1}} tut auf einem Mac nichts | F1 ist eine Helligkeitstaste. | Halten Sie **fn** gedrückt oder klicken Sie auf {{ui:Hilfe}}. |
| Die Eingabe landet im Suchfeld der Hilfe | Das Hilfefenster hat den Cursor. | Klicken Sie auf die Zeichnung. |
| Die Zeichnung ist leer geworden | Sie haben weit herausgezoomt. | Klicken Sie auf {{ui:Grenzen}} oder doppelklicken Sie auf das Mausrad. |
| „Seite verlassen?“ beim Schließen des Tabs | Es gibt nicht gespeicherte Änderungen. | Bleiben Sie, speichern Sie mit {{key:Mod+S}} und schließen Sie dann. |
