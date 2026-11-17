---
title: Einstellungen von CadCraft
summary: Die Einstellungen, die zur Zeichen-App gehören: Cursorgröße, wo eine eingefügte Kopie am Cursor hängt, was ein Klick mit der Auswahl macht, wie viele Zeilen die Symbolleiste nutzt, wo die Befehlszeile sitzt und wie hoch sie ist, ein kompakter oberer Bereich und die Eckanzeige.
keywords: Befehlszeile, schwebende Befehlszeile, schweben, andocken, eine Zeile, F2, Befehlsverlauf, commandline, cmdline, toparea, oberer Bereich, kompakt, cursorsize, Vollbild-Fadenkreuz, Vollbild-Cursor, Kante zu Kante, Symbolleistenzeilen, Symbolleistenanzeige, ctrl f1, Einstellungen, Voreinstellungen, Optionen, Eckanzeige, ViewCube, Achsensymbol, UCS-Symbol, Cursor, Fadenkreuz, Auswahlkästchen, Einfügepunkt, Basispunkt, Objekte anklicken, Auswahl, pickadd, Shift, Zurücksetzen
from: 0896eb42
---

Öffnen Sie {{ui:Einstellungen}} über das Zahnrad in der App-Leiste oder mit {{key:Mod+,}}. Der erste Tab, {{ui:CadCraft}}, enthält die Einstellungen, die zu dieser App gehören; {{ui:Allgemein}} enthält die, die alle Apps der Familie gemeinsam haben (Design, Größe und Breite der Texte im Bedienfeld, Aussehen und Reihenfolge der Symbolleiste). Die Einstellungen von CadCraft gelten nur in dieser App: Sie ändern sie hier, und dieser Browser merkt sie sich. {{ui:CadCraft-Einstellungen zurücksetzen}} setzt jede davon auf den Anfangswert zurück.

## Cursor

**Klein**, **Mittel** (der Start), **Groß** oder **Vollbild**: die Größe des Fadenkreuzes und des Auswahlkästchens in der Zeichnung. Ein größeres Auswahlkästchen wählt Objekte auch aus etwas größerer Entfernung, was auf einem Touchscreen oder bei einer sehr feinen Zeichnung hilft.

**Vollbild** lässt die beiden Linien des Fadenkreuzes von Rand zu Rand über die Zeichnung laufen, auch wenn kein Befehl läuft, damit Sie mit dem Auge prüfen können, ob zwei Dinge über die ganze Ansicht ausgerichtet sind. Bei geteilter Ansicht bleiben die Linien in dem Teilfenster, in dem Sie arbeiten. Das entspricht {{cmd:CURSORSIZE}} 100 in AutoCAD: Geben Sie {{cmd:CURSORSIZE}} und 100 für Vollbild ein; eine kleinere Zahl wählt die nächstgelegene Größe (unter 5 Klein, 5 bis 9 Mittel, 10 bis 99 Groß).

## Einfügepunkt

Wo eine eingefügte Kopie nach {{key:Mod+V}} ({{cmd:PASTECLIP}}) am Cursor hängt, bis Sie klicken:

- **Untere linke Ecke** (der Start): die untere linke Ecke der Ausdehnung der kopierten Objekte, wie in AutoCAD.
- **Zentrum**: die Mitte ihrer Ausdehnung. Praktisch, um ein Symbol nach Augenmaß zu platzieren.

Eine mit `COPYBASE` erstellte Kopie hängt immer am Basispunkt, den Sie gewählt haben. {{ui:An gleicher Position einfügen}} ({{key:Mod+Shift+V}}) ignoriert diese Einstellung: Es behält die ursprünglichen Koordinaten. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

## Objekte anklicken

Was ein Klick in der Zeichnung mit der Auswahl macht, wenn kein Befehl läuft:

- **Fügt der Auswahl hinzu** (der Start): jeder Klick oder jedes Fenster fügt Objekte hinzu; {{key:Shift}}+Klick oder ein {{key:Shift}}+Fenster nimmt sie wieder heraus.
- **Ersetzt die Auswahl**: ein Klick oder ein Fenster wählt nur, was es erfasst. {{key:Shift}}+Klick fügt ein Objekt hinzu oder nimmt ein bereits ausgewähltes heraus; ein {{key:Shift}}+Fenster fügt hinzu.

Bei einer Eingabeaufforderung `Objekte wählen:` innerhalb eines Befehls fügen Klicks immer hinzu ({{key:Shift}} entfernt), egal was diese Einstellung sagt. Siehe [Objekte auswählen](topic:select-objects).

## Klick auf eine leere Stelle

Was ein Klick an einer Stelle ohne Objekt tut, wenn kein Befehl läuft. Auf beide Arten beginnt er ein Auswahlfenster (ein zweiter Klick beendet es).

- **Hebt die Auswahl auf** (der Start): Was gewählt war, wird losgelassen. Halten Sie {{key:Shift}} beim Klicken gedrückt, um es zu behalten.
- **Behält die Auswahl**: Die Auswahl bleibt, wie in anderen Zeichenprogrammen; das Fenster fügt hinzu. Drücken Sie {{key:Esc}}, um die Auswahl aufzuheben.

## Ziehen zum Auswählen

Was Drücken und Ziehen auf einer leeren Stelle zeichnet:

- **Lasso** (der Start): ein Freihand-Umriss. Bewegen Sie zuerst nach rechts, wählt es, was ganz darin liegt; zuerst nach links, was es berührt. {{key:Space}} während des Ziehens wechselt zwischen Fenster, Kreuzen und Zaun.
- **Rechteck**: der Rahmen, so wie ein Klick und ein zweiter Klick ihn zeichnen.

{{cmd:LASSOMODE}} `1` oder `0` stellt dasselbe ein. Siehe [Lasso-Auswahl](topic:lasso-selection).

## Ziehen zum Stutzen und Dehnen

Was Drücken auf einer leeren Stelle und Ziehen in {{cmd:TRIM}} und {{cmd:EXTEND}} tut:

- **Ein Pfad** (der Start): ein Freihand-Pfad; jedes Stück, das er kreuzt, wird gestutzt (oder gedehnt).
- **Ein Fenster**: ein Rahmen; jedes Stück, das er berührt, wird gestutzt, wie es die Option `C` tut.

Siehe [Stutzen und Dehnen](topic:trim-and-extend).

## Position der Symbolleiste

{{ui:CadCraft}} › {{ui:Position der Symbolleiste}}: **Oben** (der Start, wie es schon immer war), **Unten**, **Links** oder **Rechts**. Links oder rechts stapeln sich die Werkzeuggruppen in einer Spalte, die scrollt, wenn sie höher ist als das Fenster, und die Schaltflächen brechen zwei- oder dreifach pro Zeile um. Die Wahl wird mit Ihren Einstellungen gespeichert, und {{cmd:TOOLBARDOCK}} (`TBDOCK`) setzt sie über die Befehlszeile. {{ui:Allgemein}} › {{ui:Layout zurücksetzen}} setzt die Symbolleiste wieder oben ein.

Die Leisten der Menüstile sitzen in der Symbolleiste und bewegen sich mit ihr, aber der Stil {{ui:Menüband}} ist dafür gemacht, quer oben oder unten zu laufen: An einer Seite erhält er eine schmale Spalte, die scrollt. Auf einem Telefon bleibt die Symbolleiste dort, wo das Telefon-Layout sie hinlegt.

## Zeilen der Symbolleiste

Wie viele Zeilen die Werkzeuge über der Zeichnung nutzen, in der Symbolleiste von CadCraft und in den Stilen {{ui:Klassisches Zeichnen}} und {{ui:Menüband}}:

- **Umbrechen, um zu passen** (der Start): die Werkzeuge brechen auf die Breite des Fensters um.
- **2 Zeilen**: höchstens zwei Zeilen. Wenn die Werkzeuge bei dieser Breite auf zwei oder weniger Zeilen umbrechen, brechen sie einfach um; sonst stehen sie in zwei Reihen, die seitlich scrollen.
- **1 Zeile**: eine Zeile, die seitlich scrollt, was der Zeichnung den meisten Platz lässt.

{{key:Shift+Ctrl+F1}} schaltet durch die drei, und {{cmd:TOOLBARROWS}} stellt eine davon ein. Was die Schaltflächen zeigen (Symbole und Text, nur Symbole oder nur Text), ist eine Einstellung unter {{ui:Allgemein}} › {{ui:Symbolleiste}}; {{key:Ctrl+F1}} schaltet dort durch, und {{cmd:TOOLBAR}} stellt sie ein.

## Befehlszeile

Die Befehlszeile kann unter der Zeichnung angedockt bleiben, wie immer, oder über ihr schweben, und sie kann so dünn wie eine einzige Zeile sein.

- **Schweben lassen.** Ziehen Sie den Griff an ihrem linken Ende in die Zeichnung, oder wählen Sie {{ui:Über der Zeichnung schweben}} in ihrem Menü {{ui:Optionen der Befehlszeile}} (die drei Punkte an ihrem rechten Ende). Ziehen Sie den Griff erneut, um sie zu verschieben; ihre Stelle bleibt erhalten, wenn sich die Fenstergröße ändert. Ziehen Sie ihren rechten Rand, um sie breiter oder schmaler zu machen. Lassen Sie sie auf der Statusleiste fallen oder wählen Sie {{ui:Unten andocken}}, um sie wieder anzudocken.
- **Dünner oder höher machen.** Ziehen Sie an ihrem oberen Rand: Jeder Schritt ist eine Zeile Verlauf. Bis auf null Zeilen wird sie zu einer **einzeiligen Befehlszeile**: nur die Eingabeaufforderung und was Sie eingeben, und eine neue Meldung erscheint kurz darüber. Ein Doppelklick auf den oberen Rand wechselt zwischen einer Zeile und der Höhe, die Sie vorher hatten.
- **Der Verlauf.** {{key:F2}} oder die Uhr-Schaltfläche auf der Befehlszeile ({{ui:Befehlsverlauf (F2)}}) öffnet den ganzen Verlauf über der Zeile (darunter, wenn die Zeile nahe am oberen Fensterrand schwebt). Eingaben gehen weiterhin an die Befehlszeile; {{key:PageUp}} und {{key:PageDown}} scrollen den Verlauf, und {{key:Esc}}, {{key:F2}} oder ein Klick woanders schließt ihn. Eine eigene Taste auf F2 hat Vorrang davor.
- **Über die Tastatur.** Der Griff ist eine Schaltfläche: Ist er fokussiert, bewegen die Pfeiltasten eine schwebende Befehlszeile (mit {{key:Shift}} in größeren Schritten); {{key:Up}} lässt eine angedockte schweben, und {{key:Down}} am unteren Rand dockt sie an. Der obere Rand ist ein Trenner: {{key:Up}} und {{key:Down}} fügen eine Zeile hinzu oder nehmen eine weg, {{key:Home}} macht sie einzeilig, {{key:End}} die höchste. Bildschirmleser hören jede Meldung weiterhin, auch in der einzeiligen Befehlszeile.

{{ui:CadCraft}} › {{ui:Befehlszeile}} bietet dieselben Wahlmöglichkeiten: {{ui:Unten angedockt}} oder {{ui:Schwebend}}, {{ui:Angezeigte Verlaufszeilen}} (0 bis 12) und {{ui:Standardhöhe}}. {{cmd:COMMANDLINE}} (`CMDLINE`) stellt sie über die Befehlszeile ein. Position und Höhe werden für CadCraft in diesem Browser zusammen mit dem übrigen Layout gespeichert, damit eine gesicherte Arbeitsumgebung sie mitnimmt; {{ui:Allgemein}} › {{ui:Layout zurücksetzen}} dockt die Befehlszeile wieder unten in ihrer Standardhöhe an. Auf einem Telefon bleibt die Befehlszeile angedockt, mit einer Zeile Verlauf; die Verlaufs-Schaltfläche funktioniert dort ebenfalls.

Ist das Fenster niedrig und die Layoutprüfung bietet ein engeres Layout an, macht ihr {{ui:Ja}} die Befehlszeile außerdem einzeilig, wenn die Zeichnung nach den Symbolleisten immer noch zu kurz ist.

## Oberer Bereich

{{ui:CadCraft}} › {{ui:Oberer Bereich}}: **Standard** (der Start) oder **Kompakt**. Kompakt hält die Leisten über der Zeichnung in jedem Menüstil klein: Die Gruppennamen und die Wörter unter den Symbolen fallen weg (Tooltips und Bildschirmleser haben sie weiterhin), und die Schaltflächen sind enger. Es arbeitet mit [Zeilen der Symbolleiste](topic:settings#toolbar-rows) zusammen: Kompakt und **1 Zeile** lassen der Zeichnung den meisten Platz. {{cmd:TOPAREA}} stellt es ein.

## Eckanzeige

Was in der Ecke der Zeichnung steht:

- **Automatisch** (der Start): das Achsensymbol auf dem Tab {{ui:Modell}} und der ViewCube auf dem Tab {{ui:3D}}.
- **Achsensymbol**: die X- und Y-Markierung unten links auf dem Tab {{ui:Modell}} und eine kleine X-, Y- und Z-Markierung auf dem Tab {{ui:3D}}.
- **ViewCube**: ein Würfel oben rechts auf beiden Tabs. Auf dem Tab {{ui:Modell}} zeigt er die Zeichnung von oben; ein Klick auf eine andere Fläche, Kante oder Ecke öffnet den Tab {{ui:3D}} mit Blick von dort. Auf dem 3D-Tab dreht er sich mit der Ansicht: Klicken Sie, um von einer Seite zu schauen, ziehen Sie zum Drehen, und das Haus-Symbol springt zurück zur Isometrie. Siehe [Modell in 3D](topic:3d-solids).
- **Keine**: nichts in der Ecke.

Blätter zeigen keines von beiden.

## Länge und Fläche der Auswahl

- **In der Statusleiste** (der Start): Sind Objekte ausgewählt, zeigt die Statusleiste ihre Gesamtlänge und die Gesamtfläche der geschlossenen. Siehe [Summen einer Auswahl](topic:properties-panel#totals-of-a-selection).
- **Ausgeblendet**: Die Statusleiste lässt sie weg. Die Eigenschaften zeigen sie für mehrere Objekte trotzdem an.

## Raster, Ortho und Fang

Diese stehen nicht im Dialog: Die Schaltflächen {{ui:Raster}}, {{ui:Ortho}} und {{ui:Fang}} in der Statusleiste (oder {{key:F7}}, {{key:F8}}, {{key:F3}}) und die Liste der Objektfänge daneben werden gemerkt, wenn Sie sie verlassen. Siehe [Auf Punkte an Objekten einrasten](topic:object-snaps).
