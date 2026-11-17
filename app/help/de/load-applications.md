---
title: Anwendungen laden (APPLOAD)
summary: LISP-Routinen und ihre Dialogdateien laden, entladen, aus dem Verlauf erneut laden und die verwendeten in der Startgruppe behalten.
keywords: appload, ap, Anwendung laden, lisp, lsp, dcl, Routine, Startgruppe, entladen, Verlauf, ablegen, laden, anpassen, verwalten
from: 89e0ee95
---

## Was Sie lernen

Wie Sie eine LISP-Routine (eine `.lsp`-Datei) laden, damit ihre Befehle in CadCraft funktionieren, wie Sie sie entladen und wie Sie erreichen, dass sie bei jedem Start von CadCraft geladen wird.

## Eine Routine laden

1. Öffnen Sie {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Anwendung laden…}} oder geben Sie {{cmd:APPLOAD}} (oder `AP`) ein und drücken Sie {{key:Enter}}.
2. Klicken Sie auf {{ui:Eine Datei laden…}} und wählen Sie eine oder mehrere `.lsp`-Dateien. Eine Routine, die einen Dialog öffnet, kommt meist mit einer `.dcl`-Datei: Wählen Sie diese ebenfalls.
3. Der Dialog sagt, was jede Datei erzeugt hat, zum Beispiel „Geladen delblocks.lsp: 1 Befehl, DELBLOCKS.“
4. Klicken Sie auf {{ui:Schließen (C)}}, geben Sie den Befehl der Routine ein und drücken Sie {{key:Enter}}.

Sie können auch `.lsp`- und `.dcl`-Dateien auf die Zeichnung oder auf den Dialog {{ui:Anwendungen laden}} ziehen: Sie werden sofort geladen.

Die Datei wird hier in Ihrem Browser gelesen. Nichts wird hochgeladen.

:::tip
Drücken Sie {{key:Enter}} auf einer leeren Befehlszeile, um den Befehl der Routine erneut auszuführen, wie bei jedem anderen Befehl. Ihre Befehlsaliasse können ebenfalls darauf zugreifen: siehe „Befehlsaliasse bearbeiten“.
:::

## Eine Routine entladen

Klicken Sie im Dialog {{ui:Anwendungen laden}} unter {{ui:Geladene Anwendungen}} neben der Datei auf {{ui:Entladen}}. Die Befehle, die sie erzeugt hat, sind weg, bis Sie sie erneut laden.

## Eine Routine bei jedem Start von CadCraft laden

1. Laden Sie die Routine.
2. Klicken Sie unter {{ui:Geladene Anwendungen}} neben ihr auf {{ui:Zur Startgruppe hinzufügen}}.

Ab jetzt wird sie automatisch geladen, wann immer CadCraft in diesem Browser startet. Um das zu beenden, klicken Sie neben ihr unter {{ui:Startgruppe}} auf {{ui:Entfernen (R)}}.

Die Startgruppe bewahrt eine Kopie jeder Datei im Speicher dieses Browsers. Wenn Sie die Routine ändern, laden Sie die neue Datei und fügen Sie sie erneut hinzu.

## acad.lsp und acaddoc.lsp aus einem Support-Ordner laden (Studio)

In CadCraft Studio nimmt {{ui:Support-Ordner}} im Dialog {{ui:Anwendungen laden}} einen Ordner auf Ihrem Computer auf. Klicken Sie auf {{ui:Ordner wählen…}}. Beim Start liest CadCraft `acad.lsp` und danach `acaddoc.lsp` aus diesem Ordner (unabhängig von der Groß- und Kleinschreibung der Namen), lädt sie und lädt danach die Startgruppe. `acaddoc.lsp` wird jedes Mal erneut gelesen, wenn ein neuer Zeichnungs-Reiter geöffnet wird. Nichts anderes im Ordner wird gelesen, und eine Datei über 2 MB wird mit einer Meldung übersprungen.

Wenn eine Datei eine Funktion namens `S::STARTUP` definiert, läuft sie einmal, nachdem die Dateien geladen sind (auch nach der Startgruppe). {{ui:Jetzt laden}} tut dasselbe auf Anfrage; {{ui:Leeren}} vergisst den Ordner.

Im Browser kann eine Seite keinen Ordner speichern, daher gibt es dort keinen Support-Ordner: Verwenden Sie stattdessen die Startgruppe oben. Kompilierte `.fas`- und `.vlx`-Dateien sowie native Programme bleiben abgelehnt.

## Eine Datei aus dem Verlauf erneut laden

{{ui:Verlauf}} listet die Dateien auf, die Sie in diesem Browser geladen haben, die neueste zuerst. Klicken Sie neben einer davon auf {{ui:Laden}}, um sie erneut zu laden, ohne sie auf Ihrem Computer zu suchen.

## Dateien, die CadCraft nicht laden kann

| Datei | Was sie ist | Was zu tun ist |
|---|---|---|
| `.fas`, `.vlx` | kompiliertes oder geschütztes LISP | laden Sie stattdessen die `.lsp`-Quelldatei |
| `.arx`, `.crx`, `.dbx` | native Windows-Programme | diese lassen sich in CadCraft nicht ausführen |
| `.dvb` | ein VBA-Projekt | diese lassen sich in CadCraft nicht ausführen |
| `.craft`, `.lua`, `.py` | CraftScript-Skripte | öffnen Sie sie im Skript-Arbeitsbereich von PartCraft |

Der Dialog {{ui:Anwendungen laden}} zeigt beim Auswählen an, um welche dieser Dateien es sich handelt.

## Eine Routine stoppen

Drücken Sie {{key:Esc}}. Bei einer Abfrage der Routine bricht Esc sie so ab, wie die Routine es erwartet (ihre eigene Aufräumarbeit läuft). Ist sie beschäftigt und fragt nichts ab, stoppt Esc sie sofort und meldet das; Ihre geladenen Routinen bleiben geladen.

:::note
Alles, was eine Routine in der Zeichnung ändert, ist ein einziger Schritt: Ein {{key:Mod+Z}} nimmt alles zurück.
:::
