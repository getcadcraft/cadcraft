---
title: Befehlsoptionen eigene Buchstaben geben
summary: Beantworten Sie die Optionen eines Befehls mit Buchstaben Ihrer Wahl, in jeder Sprache, aus einer Textdatei, die Sie bearbeiten, importieren und exportieren können.
keywords: Optionsbuchstaben, optionkeys, optkeys, Optionsschlüsselwort, Schlüsselwort, neu zuordnen, Zuordnung, anpassen, eigene Buchstaben, Polar, Anordnung, P, PO, Sprache, Optionen übersetzen, Kurzform, importieren, exportieren, mehrdeutig
from: 7c8328c6
---

## Was Sie hier lernen

So ändern Sie die Buchstaben, die Sie eingeben, um die Optionen eines Befehls zu beantworten. Zum Beispiel fragt {{cmd:ARRAY}} mit `[Rechteckig/POlar]` und nimmt `PO` für Polar. Sie können erreichen, dass `P` oder andere Buchstaben dasselbe bewirken, auf Wunsch auch in Ihrer eigenen Sprache.

## Wie Optionen beantwortet werden

Wenn ein Befehl Optionen in eckigen Klammern anzeigt, sind die Großbuchstaben die einzugebenden Zeichen: `POlar` ist `PO`, `Beenden (X)` ist `X`.

Sie können auch weniger Buchstaben eingeben. Passt das Eingegebene nur zu einer der angezeigten Optionen, übernimmt CadCraft sie: Bei `[Rechteckig/POlar]` ist ein einzelnes `P` Polar. Passt es zu zweien, nennt die Befehlszeile beide und fragt erneut:

```
C könnte COUnt, COLumns sein. Mehr Buchstaben eingeben.
```

Zahlen werden nie geraten. Eine eingegebene Strecke oder Anzahl wird daher immer als Zahl gelesen.

## Eigene Buchstaben hinzufügen

Jeder Befehl behält seine eingebauten Buchstaben. Ihre eigenen kommen dazu, sodass Ihre Liste nur das enthält, was Sie geändert haben.

1. Öffnen Sie {{ui:Settings}} ({{key:Mod+,}}) › {{ui:CadCraft}} › {{ui:Option letters}} und klicken Sie auf {{ui:Edit…}}. Oder geben Sie {{cmd:OPTIONKEYS}} ein und drücken Sie {{key:Enter}}.
2. Wählen Sie unter {{ui:Command}} den Befehl, zum Beispiel `ARRAY`. Die Liste enthält jeden Befehl, der nach Optionen fragt, und beginnt mit dem zuletzt verwendeten Befehl.
3. Wählen Sie unter {{ui:Option}} die Option. Jede zeigt ihre eingebauten Buchstaben in Klammern, zum Beispiel `POlar (PO)`.
4. Geben Sie unter {{ui:Your letters}} die gewünschten Buchstaben ein, zum Beispiel `P`, und klicken Sie auf {{ui:Add}}.
5. Die Option erscheint nun unter {{ui:Your letters}} mit ihren eingebauten Buchstaben und Ihren. Klicken Sie auf {{ui:Save}}.

Starten Sie {{cmd:ARRAY}}, wählen Sie ein Objekt und drücken Sie {{key:Enter}}. Die Eingabeaufforderung zeigt Ihre Buchstaben nach der Option, `POlar (P)`, und `P` beantwortet sie.

Zum Entfernen klicken Sie auf das x am Ende der Zeile und danach auf {{ui:Save}}. Die Option kehrt zu ihren eingebauten Buchstaben zurück.

## Buchstaben, die Sie nicht verwenden können

Der Editor lehnt Buchstaben ab, die etwas verbergen würden, das die Befehlszeile bereits liest, und nennt den Grund:

- die eingebauten Buchstaben einer anderen Option desselben Befehls (`R` für Polar in `ARRAY`, wo `R` Rechteckig ist);
- ein Objektfang-Wort mit drei oder mehr Buchstaben, wie `END`, `MID` oder `CEN`, sowie die Wörter `ALL` und `LAST`;
- dieselben Buchstaben für zwei verschiedene Optionen eines Befehls.

Solange etwas rot aufgelistet ist, ist {{ui:Save}} deaktiviert. Korrigieren Sie die Zeile oder entfernen Sie sie, dann wird die Schaltfläche wieder aktiv. Die eingebauten Buchstaben einer Eingabeaufforderung haben immer Vorrang vor Ihren, sodass Ihre Liste nie eine eingebaute Antwort blockieren kann. Buchstaben, die zufällig der Name eines Befehls sind, wie `L` oder `C`, sind in Ordnung: Bei einer Optionsabfrage liest die Befehlszeile eine Antwort und startet keinen Befehl.

Die für einen Befehl aufgelisteten Optionen stammen von den Befehlen, die dieselben Abfragen nutzen. Daher listet ein Befehl gelegentlich eine Option auf, die er nur in manchen Fällen abfragt.

## Eine Auswahl für jeden Befehl

Wählen Sie unter {{ui:Command}} {{ui:Every command}}. Die Optionen sind dann alle Optionen, die irgendein Befehl hat, etwa Beenden (X) oder Rückgängig (U). Buchstaben, die Sie dort hinzufügen, beantworten diese Option, wo immer ein Befehl sie anbietet. Für einen bestimmten Befehl hinzugefügte Buchstaben haben Vorrang vor diesen.

## Buchstaben in Ihrer eigenen Sprache

Die Buchstaben können aus jedem Alphabet stammen, sodass Sie Optionen beantworten können, ohne Ihre Tastatur umzuschalten: Fügen Sie `З` für Schließen unter {{ui:Every command}} hinzu oder `П` für POlar in `ARRAY`.

CadCraft wird nur mit den englischen Buchstaben ausgeliefert. Ihre eigene Liste ist der Weg, wie Sie, Ihr Büro oder Personen, die Ihre Sprache teilen, den Rest einrichten. {{ui:Export}} erstellt eine Datei, die Sie weitergeben können.

## Als Text bearbeiten

{{ui:Edit as text}} im Editor zeigt dieselbe Liste als Textzeilen, eine pro Option. Diese Form speichert auch {{ui:Export}}:

```
ARRAY.PO,  P
*.X,       Q
```

Jede Zeile besteht aus dem Befehl, einem Punkt, den eingebauten Buchstaben der Option, einem Komma und Ihren Buchstaben. Ein Stern anstelle des Befehls bedeutet jeden Befehl. Eine Zeile, die mit `;` beginnt, ist eine Notiz.

## Was gleich bleibt

- Die eingebauten Buchstaben funktionieren weiterhin neben Ihren.
- Routinen und Symbolleisten-Schaltflächen verwenden weiterhin die eingebauten Buchstaben, sodass nichts, was Sie geladen haben, kaputtgeht. Um die eingebauten Buchstaben selbst einzugeben, wo Ihre eigenen im Weg wären, setzen Sie einen Unterstrich davor: `_PO`.
- Der Kurzname eines Befehls ist etwas anderes: siehe [Befehlsaliasse bearbeiten](topic:command-aliases).

## Zeilen, die CadCraft ablehnt

Wenn Sie als Text bearbeiten oder eine Datei importieren, listet der Editor jedes Problem mit seiner Zeilennummer auf:

- Der Befehl existiert nicht. Ein Alias eines Befehls ist in Ordnung: `AR.PO` wird als `ARRAY.PO` gelesen.
- Die Zeile ist nicht `BEFEHL.OPTION, BUCHSTABEN`.
- Die Buchstaben enthalten ein Leerzeichen oder ein Zeichen. Erlaubt sind nur Buchstaben und Ziffern, höchstens 16.
- Dieselben Buchstaben beantworten zwei verschiedene Optionen eines Befehls.

## Importieren und Exportieren

{{ui:Export}} speichert Ihre Buchstaben als Textdatei, zum Aufbewahren oder um sie weiterzugeben. {{ui:Import…}} liest eine solche Datei. Beides finden Sie im Editor und unter {{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}}.

In den Einstellungen ersetzt {{ui:Import…}} Ihre Datei durch die gewählte. Eine Datei mit einer kollidierenden oder nicht verwendbaren Zeile wird nicht übernommen. Öffnen Sie in diesem Fall den Editor und importieren Sie sie dort, um die Zeilen zu sehen. Im Editor füllt der Import nur das Feld. Nichts ändert sich, bis Sie auf {{ui:Save}} klicken.

## Neu laden oder entfernen

Geben Sie {{cmd:REINIT}} ein und drücken Sie {{key:Enter}}, um Ihre Datei erneut anzuwenden. Um einen Buchstaben zu entfernen, löschen Sie seine Zeile und klicken Sie auf {{ui:Save}}.

## Ihre Buchstaben folgen Ihrem Konto

Wenn Sie bei getcadcraft.com angemeldet sind, werden Ihre Buchstaben mit Ihrem Konto gespeichert. Öffnen Sie CadCraft in einem anderen Browser oder auf einem anderen Computer mit demselben Konto, dann kommen sie von selbst an. Die Befehlszeile zeigt `Optionsbuchstaben aus Ihrem Konto`. Haben Sie sie an zwei Stellen geändert, gewinnt die neueste Kopie, und die ersetzte wird einmal aufbewahrt.

{{ui:Settings}} › {{ui:CadCraft}} › {{ui:Option letters}} zeigt, wie es um sie steht. Abgemeldet oder offline bleiben sie in diesem Browser und gehen zu Ihrem Konto, sobald Sie sie das nächste Mal angemeldet speichern.

Siehe auch: [Befehlsaliasse bearbeiten](topic:command-aliases) · [CadCraft-Einstellungen](topic:settings) · [Befehle](topic:commands)
