---
title: CadCraft mit einem KI-Assistenten verwenden
summary: Lassen Sie Ihren eigenen KI-Assistenten oder Ihr Skript mit CadCraft arbeiten: was er darf, wie Sie einen beliebigen MCP-Client anbinden und wie Sie die Kontrolle behalten (Berechtigungen, Rückgängig, Aktivitätsprotokoll, Trennen).
keywords: ki, assistent, agent, mcp, model context protocol, skript, automatisierung, befehlszeile, cli, json, token, berechtigungen, trennen, aktivität, ordner, pfade, svg, stapel
from: 06ba4ef6
---

## Was Sie lernen werden

Wie ein KI-Assistent (oder ein von Ihnen geschriebenes Skript) eine Zeichnung ansehen, Befehle von CadCraft ausführen, plotten und speichern kann und wie Sie entscheiden, was er verändern darf.

CadCraft hat **keine eigene KI** und sendet nichts irgendwohin. Sie bringen den Assistenten mit: jedes Programm, das das Model Context Protocol (MCP) spricht. CadCraft stellt ihm lediglich Werkzeuge bereit, und Sie wählen aus, welche.

Es gibt zwei Wege:

- **Die Zeichnung, die Sie geöffnet haben.** Der Assistent arbeitet in diesem Fenster neben Ihnen, über CadCraft Studio auf Ihrem Computer. Dafür ist {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Assistenten}} gedacht.
- **Zeichnungen auf Ihrem Computer, ohne die App zu öffnen.** Der CadCraft-MCP-Server und die Befehlszeile `cadcraft` lesen und schreiben DWG- und DXF-Dateien in Ordnern, die Sie angeben. Siehe „Dateien bearbeiten, ohne CadCraft zu öffnen“ weiter unten.

## Einschalten

1. Öffnen Sie {{ui:Einstellungen}} (das Zahnrad in der App-Leiste oder {{key:Mod+,}}) und wechseln Sie zur Registerkarte {{ui:CadCraft}}.
2. Setzen Sie unter {{ui:Assistenten}} das Häkchen bei **KI-Assistenten und Skripten die Nutzung von CadCraft erlauben**. Bis Sie das tun, ist es ausgeschaltet.
3. Wählen Sie, was er darf. **Lesen** ist zu Beginn aktiviert; setzen Sie die anderen Häkchen nur, wenn Sie sie brauchen.

| Berechtigung | Was der Assistent tun kann |
|---|---|
| Lesen | Die Zeichnung ansehen: beschreiben, Objekte auflisten und finden, die Auswahl sehen, die Ansicht beschreiben und davon ein Bild machen, sie anhand von Layer- und Zeichenregeln prüfen |
| Bearbeiten | Befehle auf der Zeichnung ausführen und die Auswahl ändern. Jede Aktion ist ein Schritt, den Sie rückgängig machen können |
| Speichern | Die Zeichnung speichern (auf dem Desktop in ihre Datei; im Browser als Download) |
| Exportieren | Als PDF plotten und andere Dateien erstellen |

## Dateien in Ordnern Ihrer Wahl verwenden

In CadCraft Studio kann ein Assistent Dateien über ihren Namen öffnen, speichern und plotten, statt die Dateidialoge zu nutzen, aber nur innerhalb der Ordner, die Sie unter {{ui:Assistenten}} › {{ui:Ordner, die die Assistenten verwenden dürfen}} hinzufügen:

1. Wählen Sie {{ui:Einen Ordner hinzufügen…}} und suchen Sie den Ordner im eigenen Dialog von Studio aus.
2. Der Assistent kann nun die Dateien dort auflisten (`files_list`), eine Zeichnung öffnen (`drawing_open`), sie dort in einer DWG-Version oder als DXF speichern, in eine PDF- oder SVG-Datei plotten, eine LISP-Datei laden und einem Befehl die Datei übergeben, die er verlangt (`INSERT` `F`, `XATTACH`, eine Punktdatei), oder angeben, wohin die Datei eines Befehls geschrieben wird (`COUNT`s CSV, `PUBLISH`).
3. {{ui:Entfernen (R)}} nimmt einem Ordner die Freigabe sofort wieder. Pfade außerhalb davon werden abgelehnt, und eine Datei, die bereits dort liegt, wird nur ersetzt, wenn der Assistent das ausdrücklich verlangt oder die Datei selbst geschrieben hat.

Lesen wird weiterhin zum Öffnen benötigt; das Speichern einer Zeichnung braucht **Speichern**; jede andere Datei braucht **Exportieren**.

Werkzeuge außerhalb der Berechtigungen, die Sie aktiviert haben, werden dem Assistenten gar nicht angeboten. Fordert er trotzdem eines an, lehnt CadCraft es ab und schreibt es ins Aktivitätsprotokoll. Schalten Sie den Schalter aus, so enden sofort alle Verbindungen. {{ui:CadCraft-Einstellungen zurücksetzen}} schaltet ihn ebenfalls aus.

## Assistenten verbinden

Assistenten verbinden sich über **CadCraft Studio** auf Ihrem Computer: Studio startet einen kleinen Server, den nur dieser Computer erreichen kann (Adresse `127.0.0.1`), geschützt durch ein Token, das Studio bei jedem Start erzeugt. Öffnen Sie Studio, wählen Sie {{ui:Assistent verbinden}} und kopieren Sie die Adresse und das Token.

- Fügen Sie in Ihrem Assistenten einen MCP-Server vom Typ HTTP mit der Adresse (sie sieht etwa so aus: `http://127.0.0.1:47615/mcp`) und dem Header `Authorization: Bearer <token>` hinzu. Studio zeigt die einzufügenden Einstellungen an.

{{ui:Neues Token}} in Studio lässt jeden verbundenen Assistenten mit dem neuen Token neu verbinden. Geben Sie das Token niemals weiter: Wer es hat, kann die Apps nutzen, die Sie eingeschaltet haben, solange Studio läuft.

:::note
Ein Browser-Tab kann keine Verbindung für einen Assistenten öffnen: In den Browser-Apps hat der Schalter keine Wirkung, bis Sie CadCraft Studio auf Ihrem Computer verwenden.
:::

## Sie behalten die Kontrolle

- **Jede Aktion ist ein Rückgängig-Schritt**, benannt mit dem Namen, den der Assistent dafür verwendet, z. B. „Assistent: LINE“. Drücken Sie {{key:Mod+Z}}, um die letzte Aktion des Assistenten insgesamt zurückzunehmen.
- **Sie sehen, was er tut.** Seine Befehle erscheinen im Befehlsverlauf mit **[Assistent]** davor, und die Zeichnung wird während seiner Arbeit neu gezeichnet.
- **Er wartet auf Sie.** Solange Sie mitten in einem Befehl sind, kann der Assistent die Zeichnung zwar lesen, aber nicht ändern; ihm wird gesagt, dass er es erneut versuchen soll, wenn Sie fertig sind.
- **Sie wissen, wann einer verbunden ist.** Eine Schaltfläche in der App-Leiste nennt den Assistenten, solange er verbunden ist. Klicken Sie darauf, um zu sehen, was er darf, oder um ihn zu **trennen**.
- **Aktivität.** {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Assistenten}} › {{ui:Aktivität}} listet jeden Aufruf: wann, welches Werkzeug, erledigt oder abgelehnt und den Rückgängig-Schritt, den er erzeugt hat. {{ui:Protokoll speichern}} bewahrt eine Kopie auf.

## Was ein Assistent anfordern kann

| Werkzeug | Berechtigung | Was es tut |
|---|---|---|
| `app_info`, `drawing_describe`, `view_describe` | Lesen | Name der Zeichnung, Einheiten, Layer, Blöcke, Blätter; was auf dem Bildschirm zu sehen ist |
| `files_list`, `drawing_open` | Lesen | Studio: die Dateien in Ihren Ordnern; öffnet eine davon in diesem Fenster |
| `objects_list`, `object_get`, `selection_get` | Lesen | Objekte mit ihrer Geometrie, Länge und Fläche (oder nur, wie viele, nach Typ und Layer); die Auswahl |
| `drawing_check` | Lesen | Regeln wie erlaubte Layer, nichts auf Layer 0, Farben nach Layer, Texthöhen |
| `view_screenshot` | Lesen | Ein Bild der Zeichnung, so wie sie angezeigt wird |
| `command_run` | Bearbeiten | Tippt in die Befehlszeile: `LINE 0,0 @100,0 @0,50 ` wird so gelesen, wie Sie es eintippen würden (ein Leerzeichen beendet eine Antwort), oder eine Liste mit je einer Antwort. Er kann einen Befehl offen lassen und im nächsten Aufruf weitermachen |
| `script_run` | Bearbeiten | Ein Skript (`.scr`) oder eine LISP-Datei, so wie {{ui:APPLOAD}} sie lädt |
| `block_insert` | Bearbeiten | Platziert einen Block mit seinen Attributwerten in einem Schritt |
| `selection_set`, `undo` | Bearbeiten | Wählt Objekte für den nächsten Befehl aus; macht die eigenen Schritte rückgängig |
| `drawing_save` | Speichern | CadCraft-eigenes {{ui:Speichern}} oder {{ui:Speichern unter}} in einen Ihrer Ordner |
| `drawing_plot` | Exportieren | Eine PDF oder SVG eines Blatts oder des Modells, im Maßstab oder eingepasst (PDF-Unterlagen werden auf diese Weise noch nicht geplottet) |

Während ein Assistent einen Befehl ausführt, stellt CadCraft dessen Fragen in der Befehlszeile statt in einem Dialog (zum Beispiel, ob eine ganze Zeichnung oder nur ein Block eingefügt werden soll), damit der Assistent sie beantworten kann. Bibliothek und Suche brauchen weiterhin Sie; der Assistent wird angewiesen, Sie zu fragen.

## Dateien bearbeiten, ohne CadCraft zu öffnen

Der CadCraft-MCP-Server (`cadcraft-mcp`) und die Befehlszeile (`cadcraft`) führen den eigenen Zeichnungscode von CadCraft in Node.js ohne Fenster aus. Sie benötigen Node.js 20 oder neuer.

- **Der MCP-Server** arbeitet nur innerhalb der Ordner, die Sie angeben, und nur mit den Berechtigungen, die Sie ihm geben: `npx @getcadcraft/mcp --root ~/Drawings --allow read,edit`. Ohne `--root` kann er keine Datei öffnen; ohne `--allow` kann er nur lesen. Er kann auch IFC-Modelle, Mengenermittlungen und die Markierungen in PDF-Sätzen lesen.
- **Die Befehlszeile** ist für Ihre eigenen Skripte gedacht: `cadcraft info plan.dwg`, `cadcraft run cleanup.scr plan.dwg -o plan-clean.dwg`, `cadcraft convert plan.dwg plan.dxf`, `cadcraft plot plan.dwg plan.pdf --all`, `cadcraft plot plan.dwg plan.svg`, `cadcraft check plan.dwg --rules rules.json`. Mehrere Dateien auf einmal: `cadcraft convert *.dwg out --to dxf`, `cadcraft plot *.dwg pdfs --to pdf`, `cadcraft check *.dwg --rules rules.json`. Fügen Sie `--json` hinzu, um eine Ausgabe zu erhalten, die ein Programm lesen kann.

:::note
Wenn `npx @getcadcraft/mcp` meldet, das Paket sei nicht gefunden worden, ist es noch nicht veröffentlicht. Die Neuigkeiten auf getcadcraft.com werden mitteilen, wann es so weit ist.
:::

## Wenn etwas nicht funktioniert

- **Der Assistent sieht keine CadCraft-Werkzeuge:** Prüfen Sie, ob der Schalter in diesem Fenster eingeschaltet ist und ob das Fenster in Studio geöffnet ist.
- **„benötigt die Berechtigung Bearbeiten“:** Setzen Sie unter {{ui:Assistenten}} das Häkchen bei **Bearbeiten** und fragen Sie dann erneut.
- **„außerhalb der Ordner, die Assistenten verwenden dürfen“:** Fügen Sie diesen Ordner unter {{ui:Assistenten}} › {{ui:Ordner, die die Assistenten verwenden dürfen}} hinzu, oder bitten Sie den Assistenten, eine Datei in einem Ordner zu verwenden, den Sie bereits hinzugefügt haben.
- **„401“- oder „token“-Fehler:** Das Token hat sich geändert (Studio wurde neu gestartet oder {{ui:Neues Token}}). Kopieren Sie das neue Token in die Einstellungen des Assistenten.
- **Seine Änderung war falsch:** Drücken Sie {{key:Mod+Z}}. Ein Druck nimmt eine ganze Aktion des Assistenten zurück.

## Siehe auch

- [Rezepte für KI-Assistenten](common:assistants-recipes): ausgearbeitete Beispiele, jeweils mit den Werkzeugen, die sie aufrufen.
