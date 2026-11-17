---
title: DWG öffnen, bearbeiten und eine Kopie speichern
summary: Eine Zeichnung öffnen, die Ihnen jemand geschickt hat, prüfen, was angekommen ist, eine Änderung vornehmen und eine Kopie als DWG oder DXF zurücksenden.
keywords: dwg, dxf, öffnen, importieren, exportieren, speichern, r12, Hin- und Rückweg, Berater, xref, Zeichnung prüfen, saveas, speichern unter, DWG speichern, Format
from: 49de4bf6
---

## Was Sie tun werden

Eine DWG-Datei von einem Berater öffnen, prüfen, was CadCraft anzeigen konnte und was nicht, eine Notiz hinzufügen, ein Blatt als PDF plotten und eine Kopie zum Zurücksenden als DWG oder DXF speichern.

## Datei öffnen

1. Drücken Sie {{key:Mod+O}} oder klicken Sie auf {{ui:Öffnen}}.
2. Wählen Sie die Datei `.dwg`.

Die Statuszeile zeigt „Lesen …“, während die Zeichnung gelesen wird. Danach füllt die Zeichnung den Bildschirm, und der Verlauf meldet zum Beispiel „plan.dwg geöffnet: 18,240 Objekte auf 64 Layern“, mit der benötigten Zeit.

:::offline
Sie sind offline. Wenn die Schaltfläche {{ui:Für Offline speichern}} „Offline bereit“ anzeigt, werden DWG-Dateien normal geöffnet. Wenn nicht, und in diesem Tab noch keine DWG geöffnet wurde, kann das Öffnen einer DWG fehlschlagen, weil der DWG-Leser von CadCraft mit der ersten DWG nachgeladen wird: Öffnen Sie stattdessen eine DXF, oder speichern Sie CadCraft für die Offline-Nutzung, wenn Sie das nächste Mal online sind. Siehe [Offline arbeiten](common:offline).
:::

## Prüfen, was angekommen ist

1. Sehen Sie sich den Abschnitt {{ui:Zeichnung}} im linken Bereich an: Format und Version, Einheiten, Anzahl der Objekte und Layer sowie Blätter.
2. Lesen Sie das Hinweisfeld „Über diese Datei“ darunter, falls vorhanden.

Das Feld listet:

- **Noch nicht angezeigt:** Objekte, die CadCraft noch nicht zeichnen kann, nach Art und Anzahl. Sie werden weggelassen, nicht geraten.
- **Layouts (Blätter) wurden übernommen:** Öffnen Sie sie über die Registerkarten unter der Zeichnung.
- **Bemaßungen, die nur so gelesen werden konnten, wie sie gezeichnet sind.**

3. Klicken Sie die Registerkarten unter der Zeichnung durch, um jedes Blatt zu sehen.
4. Prüfen Sie {{ui:Einheiten}} unter {{ui:Aktuelle Einstellungen}} (nichts ausgewählt, Registerkarte {{ui:Modell}}). Wenn dort {{ui:Einheitenlos}} steht, Sie aber wissen, dass die Zeichnung in Millimetern vorliegt, stellen Sie es ein, damit Blatt- und Plotmaßstäbe richtig gelesen werden.

:::tip
Wenn Sie einen Teil der Zeichnung erwarten und ihn nicht sehen, prüfen Sie den Bereich {{ui:Layer}}: Der Layer kann in der Datei ausgeschaltet oder eingefroren sein. Klicken Sie auf seinen Namen, um ihn aktuell zu machen; dadurch wird er eingeschaltet.
:::

## Änderung vornehmen

1. Erstellen Sie einen Layer für Ihre Notizen: Klicken Sie auf {{ui:Neuer Layer}}, geben Sie `NOTES` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `DT` ein und drücken Sie {{key:Enter}}.
3. Klicken Sie die Stelle an, an der die Notiz stehen soll.
4. Geben Sie eine Texthöhe ein, die zur Zeichnung passt (siehe [Text und Beschriftungen hinzufügen](topic:text)), und drücken Sie {{key:Enter}}.
5. Drücken Sie {{key:Enter}}, um die Drehung bei 0 zu belassen.
6. Geben Sie Ihre Notiz ein und drücken Sie {{key:Enter}}.
7. Drücken Sie erneut {{key:Enter}}, um abzuschließen.

Änderungen an übernommenen Bemaßungen sind unproblematisch: Sobald Sie eine ändern, zeichnet CadCraft sie in seinem eigenen Stil neu.

## Ein Blatt zur Prüfung plotten

1. Klicken Sie auf die Registerkarte des Blatts.
2. Drücken Sie {{key:Mod+P}}.
3. Klicken Sie auf {{ui:PDF herunterladen}}.

Siehe [In PDF plotten](topic:plot-pdf).

## Kopie speichern

1. Drücken Sie {{key:Mod+S}} oder klicken Sie auf {{ui:Speichern}}.

Sie haben eine DWG geöffnet, daher lädt der Browser `<name>.dwg` in der Version herunter, in der die DWG übernommen wurde. Der Verlauf meldet zum Beispiel „Kopie als Plan.dwg gespeichert (DWG (AutoCAD 2018)).“ und listet in den Zeilen darunter alles auf, was dabei geändert wurde.

2. Lesen Sie diese Zeilen, bevor Sie die Datei senden. [Was eine DWG beibehält und ändert](topic:files#what-a-dwg-keeps-and-changes) erklärt jede einzelne.

Ihre ursprüngliche DWG bleibt unverändert. Jedes Speichern ist ein neuer Download.

## Als DWG oder DXF speichern

Um das Format selbst zu wählen:

1. Drücken Sie {{key:Mod+Shift+S}} oder klicken Sie auf {{ui:Speichern unter}}.

Das Dialogfeld {{ui:Kopie speichern unter}} öffnet sich mit vier Auswahlmöglichkeiten, jede mit dem Dateinamen, den sie erzeugt: {{ui:DWG}} mit ihrer Liste {{ui:Version}}, {{ui:DXF R12}}, {{ui:DXF 2000}} und {{ui:DXF 2000 (binary)}}. Das aktuelle Format und die Version der Zeichnung sind bereits ausgewählt.

2. Klicken Sie auf das gewünschte Format. Wählen Sie bei DWG die Version, die das andere Büro verwendet, oder eine ältere: AutoCAD 2018, 2013, 2010, 2007, 2004 oder 2000.
3. Klicken Sie auf {{ui:Speichern}}.

Die Kopie wird heruntergeladen. Ab jetzt speichert {{key:Mod+S}} diese Zeichnung in diesem Format, und neue Zeichnungen beginnen in diesem Browser ebenfalls damit. {{ui:Abbrechen}} oder {{key:Esc}} speichert nichts, und der Verlauf meldet „Nicht gespeichert.“

Welches Format Sie wählen sollten:

- **DWG** behält am meisten: Blätter mit ihren Ansichtsfenstern, echte Bemaßungen, Schraffurmuster, Layer- und Blocknamen so, wie Sie sie eingegeben haben, und mehrzeiligen Text als mehrzeiligen Text. Die Version AutoCAD 2000 lässt sich in den meisten Programmen öffnen; 2004 und neuer behalten zusätzlich echte Farben.
- **DXF 2000** ist eine Textdatei, die fast alles behält, was eine DWG behält: jedes Blatt als Layout mit seinen Ansichtsfenstern, echte Bemaßungen, Schraffurmuster, echte Farben, Linienstärken, Linientypen und Namen so, wie Sie sie eingegeben haben. Sie lässt sich in AutoCAD 2000 und neuer sowie in den meisten CAD-Programmen öffnen. Multi-Führungslinien werden zu den Linien, Pfeilspitzen und Texten, die sie zeichnen. Eine DXF, die in Version 2000 oder neuer geöffnet wurde, wird als DXF 2000 gespeichert.
- **DXF 2000 (binary)** enthält denselben Inhalt wie DXF 2000, in der Binärform des Formats: eine kleinere Datei, die jede Zahl genau behält. Binäre DXF-Dateien anderer Programme öffnen sich wie Textdateien, und eine aus einer binären DXF geöffnete Zeichnung wird wieder als Binärdatei gespeichert.
- **DXF R12** lässt sich in fast jedem CAD-Programm öffnen. Es behält das erste Blatt mit seinen Ansichtsfenstern sowie die weiteren Blätter von CadCraft. Neuere Dinge vereinfacht es, etwa mehrzeiligen Text und Schraffuren.

## Was das andere Büro sehen wird

In einer DWG:

- Linien, Bögen, Kreise, Ellipsen, Polylinien, Text, mehrzeiliger Text, Blöcke mit ihren Attributen, Vollflächen, Schraffurmuster und Layer so, wie Sie sie sehen.
- Echte Bemaßungen: Das andere Programm misst sie neu, wenn sie gedehnt werden.
- Jedes Blatt mit seinem Papier und seinen Ansichtsfenstern.
- Multi-Führungslinien als Multi-Führungslinien. In der Version AutoCAD 2000 werden echte Farben zur nächstliegenden Standardfarbe.

In einer DXF R12:

- Linien, Bögen, Kreise, Polylinien, Text, Blockreferenzen und Bemaßungen so, wie Sie sie sehen. Bemaßungen bleiben echte Bemaßungen.
- Layer-Namen in Großbuchstaben, Leerzeichen werden zu `_`.
- Das erste Blatt als Papierbereich der Zeichnung mit seinen Ansichtsfenstern. Weitere Blätter kommen als Blöcke namens `CCLAYOUT_1` und so weiter an; wenn sie jedes Blatt als Layout benötigen, plotten Sie für sie zusätzlich PDFs jedes Blatts.
- Mehrzeiliger Text als einzelne Zeilen, Ellipsen als Polylinien, Schraffuren als Umrisse.

In beiden Fällen ist alles, was beim Öffnen der DWG als „Noch nicht angezeigt“ aufgeführt war, **nicht** in der Kopie enthalten, sofern der Verlauf nicht meldet, dass es erhalten blieb: OLE-Objekte einer DWG und ihre 3D-Volumenkörper im Modellbereich werden beim Speichern als DWG zurückgeschrieben. Sagen Sie es ihnen und senden Sie zusätzlich ein PDF.

## Häufige Fehler

- **„CadCraft öffnet DWG- und DXF-Zeichnungen.“** Die Datei hat eine andere Erweiterung. Prüfen Sie, ob sie `.dwg` oder `.dxf` heißt.
- **„Diese Zeichnung konnte nicht gelesen werden.“** Die DWG ist beschädigt oder in einer Version, die der Leser nicht verarbeitet. Bitten Sie um eine DXF oder um die DWG in einer älteren Version.
- **„Diese binäre DXF endet mitten in einem Objekt.“** Die Datei ist abgeschnitten oder beschädigt. Geben Sie RECOVER ein, um zu öffnen, was gelesen werden kann, oder fordern Sie die Datei erneut an.
- **Die gespeicherte Datei heißt `name (1).dwg` oder `name (1).dxf`.** Das macht der Browser, wenn im Ordner bereits eine Datei mit demselben Namen liegt.
- **Sie haben ein älteres Programm, das die DWG nicht öffnen kann.** Speichern Sie als DWG mit {{ui:Version}} {{ui:AutoCAD 2000}} oder als {{ui:DXF R12}}: Fast jedes CAD-Programm öffnet sie.
- **Teile der Zeichnung fehlen.** Externe Referenzen (Xrefs) werden erst geladen, wenn Sie ihre Dateien wählen ({{cmd:XREF}}, `R`), und Bilder werden als Rahmen mit ihren Dateinamen angezeigt.
