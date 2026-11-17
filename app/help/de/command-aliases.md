---
title: Befehlsaliase bearbeiten
summary: Behalten Sie Ihre eigenen Befehlsaliase in einer Textdatei im vertrauten Format, importieren und exportieren Sie eine .pgp-Datei und laden Sie sie mit REINIT neu.
keywords: Alias, Aliase, aliasedit, pgp, Tastenkürzel, Kurzname, reinit, Tastatur, anpassen, Aliase bearbeiten
from: 6ab6fa0e
---

## Was Sie hier lernen

Wie Sie eigene Kurznamen für Befehle hinzufügen, zum Beispiel `LL` für {{cmd:LINE}}, alles in einer einzigen Textdatei.

## Alias hinzufügen

1. Öffnen Sie {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Aliase bearbeiten…}}, oder geben Sie {{cmd:ALIASEDIT}} ein und drücken Sie {{key:Enter}}.
2. Fügen Sie eine Zeile mit dem Alias, einem Komma und dem Befehl nach einem Stern hinzu:

```
LL,     *LINE
```

3. Klicken Sie auf {{ui:Speichern}}. Die Befehlszeile zeigt an, wie viele Ihrer Aliase verwendet werden.
4. Geben Sie `LL` ein und drücken Sie {{key:Enter}}: LINE startet.

Ihre Aliase liegen über denen von CadCraft. Eine Zeile von Ihnen gewinnt gegenüber einem eingebauten Alias mit demselben Namen; entfernen Sie Ihre Zeile, und der eingebaute ist wieder da.

## Zeilen, die CadCraft ablehnt

Der Editor listet jedes Problem mit seiner Zeilennummer auf, während Sie tippen:

- der Befehl existiert nicht;
- der Alias ist selbst der Name eines Befehls (`LINE, *CIRCLE` würde LINE verbergen);
- die Zeile ist nicht `ALIAS, *COMMAND`;
- derselbe Alias steht in zwei Zeilen (die spätere gewinnt).

Zeilen, die ein Programm auf Ihrem Computer starten, wie `NOTEPAD, START, 1, *File to edit: ,`, werden mit einem Hinweis übersprungen: Eine App im Browser kann keine Programme starten.

## Aliase aus einem anderen Programm übernehmen

1. Klicken Sie im Alias-Editor auf {{ui:.pgp importieren…}} und wählen Sie die Datei. Sie können eine `.pgp`-Datei auch auf die Zeichnung ziehen.
2. Prüfen Sie die aufgelisteten Probleme (Befehle, die CadCraft nicht hat, werden abgelehnt, der Rest funktioniert).
3. Klicken Sie auf {{ui:Speichern}}.

{{ui:.pgp exportieren}} speichert die Aliase von CadCraft und Ihre als eine Datei im gleichen Format.

## Die Datei neu laden

Geben Sie {{cmd:REINIT}} ein und drücken Sie {{key:Enter}}, um Ihre Aliasdatei erneut anzuwenden. Sie wird in diesem Browser gespeichert; die Desktop-App speichert sie in ihrem eigenen Ordner, und der Cloud-Dienst synchronisiert sie.

## Tastenkürzel für jeden Befehl

Ein Alias wird eingegeben; ein Tastenkürzel ist eine Taste. So weisen Sie einem Befehl eine eigene Taste zu:

1. Klicken Sie auf {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Tastenkürzel…}}, oder geben Sie `KEYS` ein und drücken Sie {{key:Enter}}.
2. Klicken Sie in das Feld {{ui:Taste}} und drücken Sie die Tasten, zum Beispiel {{key:Alt+Shift+C}}.
3. Schreiben Sie in {{ui:Führt aus}} den Befehl und, falls gewünscht, was danach eingegeben werden soll: `CIRCLE` oder `ZOOM E`.
4. Klicken Sie auf {{ui:Hinzufügen (A)}}.

Eine Taste braucht {{key:Mod}} oder {{key:Alt}} mit einem Buchstaben oder einer Ziffer, oder eine freie Funktionstaste ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tasten, die CadCraft, die App oder der Browser bereits verwenden, und Tasten, die eine Schaltfläche „Meine Werkzeuge“ hat (siehe [Eigene Schaltflächen](topic:my-tools)), werden abgelehnt, und das Feld sagt, warum. Tastenkürzel werden in diesem Browser (oder der Desktop-App) gespeichert; {{ui:Entfernen (R)}} nimmt eines weg.
