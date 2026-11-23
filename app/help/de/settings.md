---
title: Einstellungen von CadCraft
summary: Die Einstellungen der Zeichen-App: Größe des Fadenkreuzes, wo eine eingefügte Kopie am Cursor hängt, was ein Klick mit der Auswahl macht, wie viele Zeilen die Symbolleiste nutzt, wo die Befehlszeile sitzt und wie hoch sie ist, ein kompakter oberer Bereich und die Ecknavigation.
keywords: Befehlszeile, schwebende Befehlszeile, schweben, andocken, eine Zeile, F2, Befehlsverlauf, commandline, cmdline, toparea, oberer Bereich, kompakt, cursorsize, Vollbild-Fadenkreuz, Rand zu Rand, Symbolleistenzeilen, Symbolleistenanzeige, Strg F1, Einstellungen, Voreinstellungen, Optionen, Ecknavigation, Achsensymbol, ViewCube, Cursor, Fadenkreuz, Auswahlfeld, Einfügepunkt, Basispunkt, Klicken auf Objekte, Auswahl, pickadd, Umschalt, Zurücksetzen
from: ae1a81db
---

Öffnen Sie {{ui:Einstellungen}} mit dem Zahnrad in der App-Leiste oder mit {{key:Mod+,}}. Die erste Registerkarte, {{ui:CadCraft}}, enthält die Einstellungen dieser App; {{ui:Allgemein}} enthält die, die alle Apps der Familie teilen (Design, Größe der Panelschrift und Breiten, Aussehen und Reihenfolge der Symbolleiste). Die Einstellungen von CadCraft gibt es nur in der App: Sie ändern sie hier, und dieser Browser merkt sie sich. {{ui:CadCraft-Einstellungen zurücksetzen}} setzt alle auf den Anfangswert zurück.

## Cursor

**Klein**, **Mittel** (Voreinstellung), **Groß** oder **Vollbild**: die Größe des Fadenkreuzes und des Auswahlfelds in der Zeichnung. Ein größeres Auswahlfeld wählt Objekte auch aus etwas größerer Entfernung, was auf einem Touchscreen oder bei einer sehr feinen Zeichnung hilft.

**Vollbild** lässt die zwei Linien des Fadenkreuzes von Rand zu Rand über die Zeichnung laufen, auch wenn kein Befehl läuft, sodass Sie mit dem Auge prüfen können, ob zwei Dinge über die ganze Ansicht fluchten. Ist die Ansicht geteilt, bleiben die Linien im Teilfenster, in dem Sie arbeiten. Das entspricht {{cmd:CURSORSIZE}} 100 in AutoCAD: Geben Sie {{cmd:CURSORSIZE}} und 100 für Vollbild ein; eine kleinere Zahl wählt die nächste Größe (unter 5 Klein, 5 bis 9 Mittel, 10 bis 99 Groß).

## Einfügepunkt

Wo eine eingefügte Kopie nach {{key:Mod+V}} ({{cmd:PASTECLIP}}) am Cursor hängt, bis Sie klicken:

- **Untere linke Ecke** (Voreinstellung): die untere linke Ecke der Ausdehnung der kopierten Objekte, wie in AutoCAD.
- **Mitte**: die Mitte ihrer Ausdehnung. Praktisch, um ein Symbol nach Augenmaß zu platzieren.

Eine mit `COPYBASE` erstellte Kopie hängt immer am Basispunkt, den Sie gewählt haben. {{ui:An gleicher Position einfügen}} ({{key:Mod+Shift+V}}) ignoriert diese Einstellung: Es behält die ursprünglichen Koordinaten. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

## Auf Objekte klicken

Was ein Klick in der Zeichnung mit der Auswahl macht, wenn kein Befehl läuft:

- **Ergänzt die Auswahl** (Voreinstellung): jeder Klick oder jedes Fenster fügt Objekte hinzu; {{key:Shift}}+Klick, oder ein {{key:Shift}}+Fenster, nimmt sie heraus.
- **Ersetzt die Auswahl**: Ein Klick oder Fenster wählt nur, was es erfasst. {{key:Shift}}+Klick fügt ein Objekt hinzu oder nimmt ein bereits gewähltes heraus; ein {{key:Shift}}+Fenster fügt hinzu.

Bei einer Aufforderung `Objekte wählen:` innerhalb eines Befehls fügen Klicks immer hinzu (und {{key:Shift}} entfernt), was diese Einstellung auch sagt. Siehe [Objekte auswählen](topic:select-objects).

## Klick auf eine leere Stelle

Was ein Klick an einer Stelle ohne Objekt macht, wenn kein Befehl läuft. In beiden Fällen beginnt er ein Auswahlfenster (ein zweiter Klick schließt es ab).

- **Hebt die Auswahl auf** (Voreinstellung): Was gewählt war, wird losgelassen. Halten Sie {{key:Shift}} beim Klicken, um sie zu behalten.
- **Behält die Auswahl**: Die Auswahl bleibt, wie in anderen Zeichenprogrammen; das Fenster fügt hinzu. Drücken Sie {{key:Esc}}, um die Auswahl aufzuheben.

## Ziehen zum Wählen

Was Drücken und Ziehen auf einer leeren Stelle zeichnet:

- **Lasso** (Voreinstellung): ein Freihand-Umriss. Ziehen Sie zuerst nach rechts, wählt er alles, was ganz darin liegt; zuerst nach links, alles, was er berührt. {{key:Space}} während des Ziehens wechselt zwischen Fenster, Kreuzung und Zaun.
- **Rechteck**: das Kästchen, wie ein Klick und ein zweiter Klick es zeichnen.

{{cmd:LASSOMODE}} `1` oder `0` legt dasselbe fest. Siehe [Lassoauswahl](topic:lasso-selection).

## Ziehen zum Stutzen und Verlängern

Was Drücken auf einer leeren Stelle und Ziehen in {{cmd:TRIM}} und {{cmd:EXTEND}} macht:

- **Ein Pfad** (Voreinstellung): ein Freihandpfad; jedes Stück, das er kreuzt, wird gestutzt (oder verlängert).
- **Ein Fenster**: ein Kästchen; jedes Stück, das es berührt, wird gestutzt, wie die Option `C` es tut.

Siehe [Stutzen und Verlängern](topic:trim-and-extend).

## Position der Symbolleiste

{{ui:CadCraft}} › {{ui:Position der Symbolleiste}}: **Oben** (Voreinstellung, wie es immer war), **Unten**, **Links** oder **Rechts**. Links oder rechts stapeln sich die Werkzeuggruppen in einer Spalte, die scrollt, wenn sie höher als das Fenster ist, und die Schaltflächen umbrechen zu zwei oder drei pro Zeile. Die Wahl wird mit Ihren Einstellungen gespeichert, und {{cmd:TOOLBARDOCK}} (`TBDOCK`) setzt sie über die Befehlszeile. {{ui:Allgemein}} › {{ui:Layout zurücksetzen}} setzt die Symbolleiste wieder oben.

Die Leisten der Menüstile sitzen in der Symbolleiste und bewegen sich mit ihr, aber der Stil {{ui:Menüband}} ist dafür gemacht, oben oder unten quer zu laufen: An einer Seite erhält er eine schmale Spalte, die scrollt. Auf einem Telefon bleibt die Symbolleiste dort, wo das Telefon-Layout sie hinlegt.

## Zeilen der Symbolleiste

Wie viele Zeilen die Werkzeuge über der Zeichnung verwenden, in der Symbolleiste von CadCraft und in den Stilen {{ui:Klassisches Zeichnen}} und {{ui:Menüband}}:

- **Umbrechen, um zu passen** (Voreinstellung): Die Werkzeuge umbrechen auf die Breite des Fensters.
- **2 Zeilen**: höchstens zwei Zeilen. Umbrechen die Werkzeuge bei dieser Breite auf zwei Zeilen oder weniger, umbrechen sie einfach; sonst stehen sie in zwei Reihen, die seitlich scrollen.
- **1 Zeile**: eine Zeile, die seitlich scrollt, was der Zeichnung den meisten Platz lässt.

{{key:Shift+Ctrl+F1}} blättert durch die drei, und {{cmd:TOOLBARROWS}} legt eine fest. Was die Schaltflächen zeigen (Symbole und Text, nur Symbole oder nur Text), ist eine Einstellung von {{ui:Allgemein}} › {{ui:Symbolleiste}}; {{key:Ctrl+F1}} blättert durch sie, und {{cmd:TOOLBAR}} legt sie fest.

## Befehlszeile

Die Befehlszeile kann unter der Zeichnung angedockt bleiben, wie immer, oder darüber schweben, und sie kann so schmal wie eine Zeile sein.

- **Schweben lassen.** Ziehen Sie den Griff an ihrem linken Ende in die Zeichnung, oder wählen Sie {{ui:Über der Zeichnung schweben}} in ihrem Menü {{ui:Optionen der Befehlszeile}} (die drei Punkte an ihrem rechten Ende). Ziehen Sie den Griff erneut, um sie zu verschieben; ihr Platz bleibt erhalten, wenn sich die Fenstergröße ändert. Ziehen Sie ihren rechten Rand, um sie breiter oder schmaler zu machen. Legen Sie sie auf die Statusleiste oder wählen Sie {{ui:Unten andocken}}, um sie wieder anzudocken.
- **Dünner oder höher machen.** Ziehen Sie an ihrem oberen Rand: Jeder Schritt ist eine Zeile Verlauf. Bis auf null Zeilen ist sie eine **einzeilige Befehlszeile**: nur die Eingabeaufforderung und was Sie tippen; eine neue Meldung erscheint kurz darüber. Ein Doppelklick auf den oberen Rand wechselt zwischen einer Zeile und der Höhe, die Sie hatten.
- **Der Verlauf.** {{key:F2}} oder die Uhr-Schaltfläche an der Befehlszeile ({{ui:Befehlsverlauf (F2)}}) öffnet den ganzen Verlauf über der Zeile (darunter, wenn die schwebende Zeile nahe am oberen Fensterrand liegt). Das Tippen geht weiterhin an die Befehlszeile; {{key:PageUp}} und {{key:PageDown}} blättern den Verlauf, und {{key:Esc}}, {{key:F2}} oder ein Klick woanders schließen ihn. Eine eigene Taste auf F2 hat Vorrang.
- **Von der Tastatur.** Der Griff ist eine Schaltfläche: Ist er fokussiert, verschieben die Pfeiltasten eine schwebende Befehlszeile (mit {{key:Shift}} in größeren Schritten); {{key:Up}} schwebt eine angedockte, und {{key:Down}} am unteren Rand dockt sie an. Der obere Rand ist ein Trenner: {{key:Up}} und {{key:Down}} fügen eine Zeile hinzu oder nehmen sie weg, {{key:Home}} macht sie einzeilig, {{key:End}} die höchste. Bildschirmleser hören weiterhin jede Meldung, auch in der einzeiligen Befehlszeile.

{{ui:CadCraft}} › {{ui:Befehlszeile}} hat dieselben Wahlmöglichkeiten: {{ui:Unten angedockt}} oder {{ui:Schwebend}}, {{ui:Angezeigte Verlaufszeilen}} (0 bis 12) und {{ui:Standardhöhe}}. {{cmd:COMMANDLINE}} (`CMDLINE`) legt sie über die Befehlszeile fest. Platz und Höhe werden für CadCraft in diesem Browser zusammen mit dem übrigen Layout gehalten, sodass ein gespeicherter Arbeitsbereich sie mitnimmt; {{ui:Allgemein}} › {{ui:Layout zurücksetzen}} docket die Befehlszeile wieder auf ihre Standardhöhe an. Auf einem Telefon bleibt die Befehlszeile angedockt mit einer Zeile Verlauf; die Verlaufsschaltfläche funktioniert dort ebenfalls.

{{ui:CadCraft}} › {{ui:Optionsbuchstaben}} behält die Buchstaben, die Sie für Befehlsoptionen gewählt haben: {{ui:Bearbeiten…}} öffnet die Datei, {{ui:Importieren…}} ersetzt sie durch eine Datei Ihrer Wahl, und {{ui:Exportieren}} speichert sie. Siehe [Befehlsoptionen eigene Buchstaben geben](topic:option-letters).

Ist das Fenster niedrig und die Layoutprüfung bietet ein knapperes Layout an, schaltet ihr {{ui:Ja}} die Befehlszeile ebenfalls auf eine Zeile, wenn die Zeichnung nach den Symbolleisten immer noch zu kurz ist.

## Oberer Bereich

{{ui:CadCraft}} › {{ui:Oberer Bereich}}: **Standard** (Voreinstellung) oder **Kompakt**. Kompakt hält die Leisten über der Zeichnung in jedem Menüstil klein: Die Gruppennamen und die Wörter unter den Symbolen entfallen (Tooltips und Bildschirmleser haben sie weiterhin), und die Schaltflächen rücken enger zusammen. Es arbeitet mit [Zeilen der Symbolleiste](topic:settings#toolbar-rows) zusammen: Kompakt und **1 Zeile** lassen der Zeichnung den meisten Platz. {{cmd:TOPAREA}} legt es fest.

## Ecknavigation

Was in der Ecke der Zeichnung sitzt:

- **Automatisch** (Voreinstellung): das Achsensymbol auf dem Reiter {{ui:Modell}} und der View-Cube auf dem Reiter {{ui:3D}}.
- **Achsensymbol**: die Markierung X und Y unten links auf dem Reiter {{ui:Modell}}, und eine kleine Markierung X, Y und Z auf dem Reiter {{ui:3D}}.
- **View-Cube**: ein Würfel oben rechts auf beiden Reitern. Auf dem Reiter {{ui:Modell}} zeigt er die Zeichnung von oben, und ein Klick auf eine andere Fläche, Kante oder Ecke öffnet den Reiter {{ui:3D}} mit Blick von dort. Auf dem 3D-Reiter dreht er sich mit der Ansicht: klicken Sie, um von einer Seite zu schauen, ziehen Sie zum Orbitieren, und das Haus bringt zurück zur Isoansicht. Siehe [Modell in 3D](topic:3d-solids).
- **Keine**: nichts in der Ecke.

Blätter zeigen keines von beiden.

## Länge und Fläche der Auswahl

- **In der Statusleiste** (Voreinstellung): Sind Objekte gewählt, zeigt die Statusleiste ihre Gesamtlänge und die Gesamtfläche der geschlossenen. Siehe [Summen einer Auswahl](topic:properties-panel#totals-of-a-selection).
- **Ausgeblendet**: Die Statusleiste lässt sie weg. Eigenschaften zeigt sie weiterhin für mehrere Objekte.

## Raster, Ortho und Fang

Diese stehen nicht im Dialogfeld: Die Schaltflächen {{ui:Raster}}, {{ui:Ortho}} und {{ui:Fang}} in der Statusleiste (oder {{key:F7}}, {{key:F8}}, {{key:F3}}) und die Liste der Objektfänge daneben werden gemerkt, wenn Sie sie verlassen. Siehe [Auf Punkte an Objekten einrasten](topic:object-snaps).
