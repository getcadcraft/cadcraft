---
title: Befehlsaliase bearbeiten
summary: Eigene Kurznamen für Befehle in einer Textdatei im vertrauten Format führen, eine .pgp-Datei importieren und exportieren und sie mit REINIT neu laden.
keywords: Alias, Aliase, aliasedit, pgp, Tastenkürzel, Kurzname, reinit, Tastatur, anpassen, Aliase bearbeiten
from: 2282d36f
---

## Was Sie lernen

Wie Sie eigene Kurznamen für Befehle hinzufügen, zum Beispiel `LL` für {{cmd:LINE}}, alles in einer Textdatei.

## Alias hinzufügen

1. Öffnen Sie {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Aliase bearbeiten…}} oder geben Sie {{cmd:ALIASEDIT}} ein und drücken Sie {{key:Enter}}.
2. Fügen Sie eine Zeile hinzu: den Alias, ein Komma und nach einem Stern den Befehl:

```
LL,     *LINE
```

3. Klicken Sie auf {{ui:Speichern}}. Die Befehlszeile zeigt an, wie viele Ihrer Aliase in Gebrauch sind.
4. Geben Sie `LL` ein und drücken Sie {{key:Enter}}: LINE startet.

Ihre Aliase liegen über denen von CadCraft. Eine Zeile von Ihnen hat Vorrang vor einem eingebauten Alias mit demselben Namen; entfernen Sie Ihre Zeile, ist der eingebaute Alias wieder da.

## Zeilen, die CadCraft ablehnt

Der Editor listet jedes Problem mit seiner Zeilennummer, während Sie tippen:

- der Befehl existiert nicht;
- der Alias ist selbst der Name eines Befehls (`LINE, *CIRCLE` würde LINE verbergen);
- die Zeile hat nicht die Form `ALIAS, *BEFEHL`;
- derselbe Alias steht in zwei Zeilen (die spätere gilt).

Zeilen, die ein Programm auf Ihrem Computer starten, etwa `NOTEPAD, START, 1, *File to edit: ,`, werden mit einem Hinweis übersprungen: Eine App im Browser kann keine Programme starten.

## Aliase aus einem anderen Programm übernehmen

1. Klicken Sie im Alias-Editor auf {{ui:.pgp importieren…}} und wählen Sie die Datei. Sie können eine `.pgp`-Datei auch auf die Zeichnung ziehen.
2. Prüfen Sie die aufgelisteten Probleme. Befehle, die CadCraft nicht hat, werden abgelehnt; der Rest funktioniert.
3. Klicken Sie auf {{ui:Speichern}}.

{{ui:.pgp exportieren}} speichert die Aliase von CadCraft und Ihre gemeinsam in einer Datei im selben Format.

## Datei neu laden

Geben Sie {{cmd:REINIT}} ein und drücken Sie {{key:Enter}}, um Ihre Aliasdatei erneut anzuwenden. Sie wird in diesem Browser gespeichert; die Desktop-App speichert sie in ihrem eigenen Ordner, und der Cloud-Dienst synchronisiert sie.

## Buchstaben für Befehlsoptionen

Ein Alias benennt einen Befehl. Um die Buchstaben zu ändern, mit denen die Optionen eines Befehls gewählt werden (`P` für Polar in {{cmd:ARRAY}}), siehe [Eigene Buchstaben für Befehlsoptionen vergeben](topic:option-letters).

## Tastenkürzel für beliebige Befehle

Ein Alias wird eingetippt; ein Tastenkürzel ist eine Taste. So geben Sie einem Befehl eine eigene Taste:

1. Klicken Sie auf {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Tastenkürzel…}} oder geben Sie `KEYS` ein und drücken Sie {{key:Enter}}.
2. Klicken Sie auf das Feld {{ui:Taste}} und drücken Sie die Tasten, zum Beispiel {{key:Alt+Shift+C}}.
3. Schreiben Sie in {{ui:Führt aus}} den Befehl und, falls gewünscht, was danach einzugeben ist: `CIRCLE` oder `ZOOM E`.
4. Klicken Sie auf {{ui:Hinzufügen (A)}}.

Ein Kürzel braucht {{key:Mod}} oder {{key:Alt}} mit einem Buchstaben oder einer Ziffer oder eine freie Funktionstaste ({{key:F2}}, {{key:F4}}, {{key:F5}}, {{key:F6}}, {{key:F9}}). Tasten, die CadCraft, die App oder der Browser bereits verwenden, und Tasten, die eine Schaltfläche für eigene Werkzeuge hat (siehe [Eigene Schaltflächen](topic:my-tools)), werden abgelehnt; das Feld sagt, warum. Kürzel werden in diesem Browser (oder der Desktop-App) gespeichert; {{ui:Entfernen (R)}} entfernt eines.
