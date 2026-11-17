---
title: Blattsätze
summary: Blätter aus vielen Zeichnungen in einer nummerierten Liste zusammenbringen, ihre Schriftfelder aus dem Satz füllen, den Satz als eine PDF veröffentlichen und ihn als ZIP-Archiv sichern.
keywords: Blattsatz, Blattsatz-Manager, ssm, sheetset, ccsheets, dst, Blattliste, Blattverzeichnis, Schriftfeld, Felder, veröffentlichen, neu nummerieren, archivieren, etransmit, Transmittal, Teilsätze, Deckblatt, Zeichnungsliste
from: 2c855720
---

## Was Sie lernen

Wie Sie Blätter (Layouts) aus mehreren Zeichnungsdateien in einem **Blattsatz** sammeln, nummerieren und benennen, deren Schriftfelder für Sie ausfüllen lassen, den ganzen Satz als eine PDF veröffentlichen und alles in eine ZIP-Datei packen, um es zu versenden.

Ein Blattsatz liegt in einer kleinen eigenen Datei, `<name>.ccsheets`, im Ordner, der die Zeichnungen enthält. Die Satzdatei listet die Blätter mit Pfaden ab diesem Ordner auf, so dass Sie den ganzen Ordner verschieben oder kopieren können.

:::note
Um einen Ordner zu lesen und zu beschreiben, brauchen Sie Chrome oder Edge (sie können einer Seite erlauben, in einem Ordner ihrer Wahl zu arbeiten) oder die Desktop-App. Andere Browser öffnen einen Satz nur lesend: Sie können ihn ansehen und veröffentlichen, und die Satzdatei wird heruntergeladen statt gespeichert.
:::

## Einen Satz anlegen

1. Suchen Sie den Bereich {{ui:Blattsatz}} im linken Bedienfeld und öffnen Sie dessen Menü {{ui:Satz}}. Die Eingabe von {{cmd:SHEETSET}} (oder `SSM`) führt Sie ebenfalls dorthin.
2. Wählen Sie {{ui:Neuer Satz…}}. Geben Sie dem Satz einen Namen und, falls gewünscht, den Projektnamen und die Projektnummer.
3. Wählen Sie den Ordner, der die Zeichnungen enthält. Die Satzdatei wird dort gespeichert.

Um einen Satz später zu öffnen, wählen Sie {{ui:Satz öffnen…}} und denselben Ordner. Enthält der Ordner mehr als einen Satz, fragt CadCraft, welcher gemeint ist.

## Blätter hinzufügen

1. Wählen Sie {{ui:Blätter aus einer Zeichnung hinzufügen…}} und eine der Zeichnungen im Ordner.
2. CadCraft liest diese Zeichnung im Hintergrund (sie öffnet sich nicht auf dem Bildschirm) und listet ihre Blätter auf. Haken Sie die gewünschten an und klicken Sie auf {{ui:OK}}.
3. Wählen Sie ein Blatt und drücken Sie {{key:F2}} (oder {{ui:Umbenennen und neu nummerieren…}}), um ihm eine Nummer und einen Titel zu geben, etwa `A-101` und `Grundriss`.

{{ui:Neues Blatt aus Vorlage…}} erstellt eine neue Zeichnung aus dem Blatt einer anderen Zeichnung (dessen Schriftfeld und Ansichtsfenster), benannt nach dem neuen Blatt, und fügt sie hinzu. Der Satz merkt sich die Zeichnung, die Sie als Vorlage verwendet haben.

## Den Satz ordnen

- **Teilsätze** gruppieren Blätter, etwa Architektur › Pläne: Wählen Sie die Stelle, wohin es gehört, und wählen Sie {{ui:Neuer Teilsatz…}}.
- **Reihenfolge**: Ziehen Sie ein Blatt an eine andere Stelle der Liste oder auf einen Teilsatz, um es dorthin zu verschieben. Mit der Tastatur wählen Sie es aus und drücken {{key:Alt+Up}} oder {{key:Alt+Down}}.
- **Ein Blatt öffnen**: Doppelklicken Sie darauf (oder drücken Sie {{key:Enter}}). Seine Zeichnung öffnet sich in einem eigenen Tab, auf diesem Blatt.
- **Entfernen**: Wählen Sie es aus und drücken Sie {{key:Delete}}. Die Zeichnung selbst wird nicht verändert.
- **Rückgängig**: {{ui:Satzänderung rückgängig}} und {{ui:Satzänderung wiederholen}} gehen durch, was Sie im Satz geändert haben.
- **Neu nummerieren**: {{ui:Blätter neu nummerieren…}} nummeriert jedes Blatt oder die Blätter eines Teilsatzes in der Reihenfolge der Liste: ein Präfix, ein Start und eine Schrittweite (`A-` und `101` ergeben A-101, A-102 …).

Jede Änderung wird sofort in der Satzdatei gespeichert.

## Blätter nach ihren Feldern nummerieren

Statt Blätter von Hand zu nummerieren, lassen Sie eine Regel jede Nummer aus den Feldern des Blatts bilden, so dass ein Blatt, das auf eine andere Ebene oder Disziplin wechselt, seine neue Nummer von selbst erhält.

1. Geben Sie jedem Blatt seine Felder: Wählen Sie es aus, klicken Sie auf {{ui:Umbenennen…}} und schreiben Sie unter {{ui:Felder dieses Blatts}} je eines pro Zeile, etwa `DISCIPLINE = A` und `LEVEL = 1`. Ein Feld, das der ganze Satz teilt (etwa `DISCIPLINE = A`), kann stattdessen in die Eigenschaften des Satzes geschrieben werden.
2. Öffnen Sie das Menü des Bedienfelds und klicken Sie auf {{ui:Nummerierungsregel…}}.
3. Schreiben Sie die Regel, etwa `{DISCIPLINE}-{LEVEL}{SEQ:2}`. `{SEQ}` zählt unter den Blättern hoch, deren andere Felder gleich lauten; so bekommt Ebene 1 A-101, A-102, und Ebene 2 beginnt wieder bei A-201. `{SEQ:2}` schreibt die Zahl mit zwei Ziffern; `{SUBSET}` ist der Name des Teilsatzes, in dem ein Blatt liegt.
4. Wählen Sie, was passiert, wenn sich ein Feld ändert: {{ui:Die Blätter neu nummerieren}} hält die Nummern nach jeder Änderung an der Regel; die andere Wahl nummeriert sie einmal, jetzt.

Die Regel wird in der Satzdatei gespeichert. Während sie sich selbst neu nummeriert, ändern Sie die Felder eines Blatts statt seiner Nummer.

## Schriftfelder aus dem Satz füllen

Ein Schriftfeld erhält seinen Text aus dem Satz, wenn seine Attribute mit dem Namen eines Feldes markiert sind:

| Markierung | Was sie zeigt |
|---|---|
| `SHEETNUMBER` (oder `SHEET_NO`, `DWG_NO`) | Die Nummer des Blatts |
| `SHEETTITLE` (oder `TITLE`, `SHEET_TITLE`) | Der Titel des Blatts |
| `SHEETDESC` | Die Beschreibung des Blatts |
| `PROJECTNAME` (oder `PROJECT`) | Der Projektname |
| `PROJECTNUMBER` (oder `PROJECT_NO`, `JOB_NO`) | Die Projektnummer |
| `SHEETSETNAME` | Der Name des Satzes |
| `SHEETINDEX`, `SHEETCOUNT` | „3 von 12“, und 12 |
| Eigene, etwa `CLIENT` | Was Sie dafür in {{ui:Felder festlegen…}} geschrieben haben |

{{ui:Felder festlegen…}} enthält den Projektnamen und die Projektnummer sowie Ihre eigenen Felder, eines pro Zeile als `NAME = Wert`.

{{ui:Zeichnungen aktualisieren}} schreibt die Nummern, Titel und Felder in die Schriftfelder jeder Zeichnung im Satz und benennt den Layout-Tab jedes Blatts so, wie der Satz es festlegt (standardmäßig Nummer und Titel, etwa `A-101 Grundriss`; {{ui:Felder festlegen…}} › {{ui:Namen der Layout-Tabs}} ändert das). Jede Zeichnung wird an Ort und Stelle gespeichert, in ihrem eigenen Format und ihrer Version. Nach dem Umnummerieren oder Umbenennen von Blättern führen Sie es erneut aus, dann folgen Tabs und Schriftfelder.

## Eine Blattliste auf dem Deckblatt

Wählen Sie das Deckblatt in der Liste und wählen Sie {{ui:Die Blattliste auf dieses Blatt setzen}}. Eine Tabelle aller Blätter (Nummer und Titel, unter ihrem Teilsatz) kommt in die obere linke Ecke des Blatts. {{ui:Zeichnungen aktualisieren}} und {{ui:Als PDF veröffentlichen}} halten sie aktuell. Sie ist ein einziger Block, `CC_SHEETLIST`: Verschieben Sie ihn wie jede Blockreferenz.

## Den Satz veröffentlichen

{{ui:Als PDF veröffentlichen}} erstellt eine PDF mit einer Seite pro Blatt, in der Reihenfolge des Satzes, in der eigenen Papiergröße jedes Blatts, mit einem Lesezeichen pro Blatt („A-101 — Grundriss“). Ist ein Teilsatz gewählt, fragt CadCraft, ob nur dieser Teilsatz veröffentlicht werden soll. Die Schriftfelder in der PDF werden aus dem Satz gefüllt, auch bevor Sie die Zeichnungen aktualisieren; die Zeichnungen selbst werden durch das Veröffentlichen nicht verändert. Die PDF wird heruntergeladen.

{{ui:Als DWG veröffentlichen…}} schreibt jedes Blatt als eigene DWG (DWG 2018): das Modell und dieses eine Blatt, dessen Schriftfeld aus dem Satz gefüllt ist, benannt nach Nummer und Titel (`A-101 Level 1 floor plan.dwg`). Wählen Sie {{ui:DWG}} oder {{ui:DWG + PDF}}, um zusätzlich die PDF des Satzes daneben zu erhalten. Eine `publish.json` listet jede Datei mit Größe und SHA-256. Wenn der Ordner des Satzes beschreibbar ist (CadCraft Studio oder ein Ordner, den Sie im Browser gewählt haben), landen die Dateien in einem Ordner `<Satzname> - published`; andernfalls werden sie als eine ZIP-Datei heruntergeladen. [Klassen-Überschreibungen](topic:viewport-overrides) der Ansichtsfenster kommen in jede DWG mit.

## Den Satz archivieren

{{ui:Als ZIP archivieren}} packt die Satzdatei, jede Zeichnung, die sie nutzt, und was diese Zeichnungen verknüpfen (verknüpfte Zeichnungen und deren wiederum, und Bilder), wobei ihre Ordner erhalten bleiben, dazu eine `Transmittal.txt`, die jede Datei auflistet. Eine Verknüpfung, die nicht im Ordner des Satzes liegt, wird dort als fehlend aufgeführt. Verknüpfungen werden über ihren Pfad von der Zeichnung aus gefunden, danach über ihren Dateinamen irgendwo im Ordner.

## Die Satzdatei

Die `.ccsheets`-Datei ist JSON, das Sie in jedem Texteditor lesen können:

```
{
  "format": "cadcraft-sheetset", "version": 1,
  "name": "Riverside Clinic",
  "properties": { "PROJECTNAME": "Riverside Clinic", "PROJECTNUMBER": "2026-014" },
  "layoutNames": "number-title",
  "sheets": [],
  "subsets": [ { "id": "plans", "name": "Plans", "sheets": [
    { "id": "p1", "file": "plans/Level 1.dwg", "layout": "A-101 Level 1 floor plan", "number": "A-101", "title": "Level 1 floor plan" }
  ] } ]
}
```

Pfade sind relativ zum Ordner des Satzes, mit `/` zwischen den Ordnern. CadCraft prüft die Datei beim Öffnen: Ein absoluter Pfad, ein Blatt ohne Datei oder Layout oder Text, der nicht reiner Text ist, wird weggelassen, und der Verlauf sagt es.

## Fehlerbehebung

| Was Sie sehen | Warum | Was zu tun ist |
|---|---|---|
| „Dieser Ordner ist hier nur lesbar“ | Der Browser kann in den Ordner nicht schreiben | Verwenden Sie Chrome oder Edge oder die Desktop-App; bis dahin behält {{ui:Die Satzdatei herunterladen}} Ihre Änderungen |
| Ein Blatt fehlt in der PDF: „hat kein Layout namens …“ | Das Layout des Blatts wurde in seiner Zeichnung umbenannt oder entfernt | Öffnen Sie die Zeichnung und prüfen Sie ihre Tabs; entfernen Sie das Blatt und fügen Sie es erneut hinzu |
| Ein Schriftfeld bleibt leer | Seine Attribute haben andere Markierungen | Benennen Sie die Attributmarkierungen in die oben genannten Feldnamen um (BEDIT) |
| „hat bereits ein Layout namens … daher wurde dieser Tab nicht umbenannt“ | Zwei Blätter einer Zeichnung würden denselben Tab-Namen erhalten | Geben Sie einem der beiden eine andere Nummer oder einen anderen Titel |
