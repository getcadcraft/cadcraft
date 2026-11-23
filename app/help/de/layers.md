---
title: Eine Zeichnung mit Layern ordnen
summary: Layer für Wände, Türen und Notizen anlegen, Farben festlegen, einen Layer zum aktuellen machen und Layer ausschalten, einfrieren, sperren oder vom Plot ausnehmen.
keywords: Layer, Layers, la, aktueller Layer, einfrieren, auftauen, sperren, aus, ein, plotten, nicht plotten, Farbe, Layer-Eigenschaften, layiso, layuniso, isolieren, layoff, layfrz, laymcur, layon, laythw, umbenennen, laymrg, zusammenführen, laydel, Layer löschen
from: ba9f0617
---

## Was Sie erstellen

Drei Layer, Wände, Türen und Notizen, jeder mit eigener Farbe, mit Objekten auf jedem Layer, die zwischen ihnen verschoben werden.

## Der Bereich Layer

Die Layer befinden sich im Bereich links unter {{ui:Layer}}. Jede Zeile zeigt von links nach rechts:

- einen Punkt: gefüllt für den **aktuellen** Layer, auf dem neue Objekte entstehen;
- ein Farbfeld;
- den Layernamen;
- vier Schaltflächen: ein/aus (Auge), einfrieren (Schneeflocke), sperren (Vorhängeschloss) und plotten (Drucker).

Jede Zeichnung hat einen Layer namens `0`. Geben Sie `LA` ein und drücken Sie {{key:Enter}}, um zum Bereich zu springen.

## Layer anlegen

1. Klicken Sie über der Liste auf {{ui:Neuer Layer}}. Ein Namensfeld öffnet sich.
2. Geben Sie `Walls` ein und drücken Sie {{key:Enter}} (oder klicken Sie auf {{ui:Hinzufügen (A)}}).

Die Statusleiste sagt „Layer Walls hinzugefügt und aktuell gemacht.“ Der neue Layer erhält Farbe 7 (Schwarz im hellen Design, Weiß im dunklen).

3. Klicken Sie erneut auf {{ui:Neuer Layer}}, geben Sie `Doors` ein und drücken Sie {{key:Enter}}.
4. Klicken Sie erneut auf {{ui:Neuer Layer}}, geben Sie `Notes` ein und drücken Sie {{key:Enter}}.

Notes ist jetzt der aktuelle Layer.

## Jedem Layer eine Farbe geben

1. Klicken Sie auf das Farbfeld in der Zeile Walls. Der Farbwähler Ihres Systems öffnet sich.
2. Wählen Sie eine Farbe und bestätigen Sie.

Das Farbfeld und alles auf Walls, das {{ui:VonLayer}} gefärbt ist, ändern sich.

:::note
Eine gewählte Farbe, die einer der 255 Standard-CAD-Farben entspricht, wird als deren Nummer gespeichert. Jede andere Farbe bleibt in CadCraft genau erhalten, wird aber in einer DWG- oder DXF-Datei als nächstliegende Standardfarbe gespeichert.
:::

## Auf einem Layer zeichnen

1. Klicken Sie in der Liste auf den Namen **Walls**. Sein Punkt füllt sich, und die Statusleiste sagt „Aktueller Layer: Walls“.
2. Zeichnen Sie ein Rechteck (`REC`). Es kommt auf Walls.
3. Klicken Sie auf **Doors** und zeichnen Sie einen Bogen (`A`). Er kommt auf Doors.

Sie können den aktuellen Layer auch unter {{ui:Aktuelle Einstellungen}} rechts wählen (wenn nichts gewählt ist), unter {{ui:Layer}}.

## Objekte auf einen anderen Layer verschieben

1. Wählen Sie die Objekte.
2. Wählen Sie im rechten Bereich unter {{ui:Layer}} den neuen Layer.

Sie wandern auf diesen Layer und übernehmen seine Farbe, wenn ihre Farbe {{ui:VonLayer}} ist.

## Aus, einfrieren, sperren und plotten

| Schaltfläche | Was sie tut |
|---|---|
| Ein/aus (Auge) | Blendet die Objekte des Layers aus. Sie können nicht gesehen, gewählt oder gefangen werden. |
| Einfrieren (Schneeflocke) | Wirkt in CadCraft wie Aus. Getrennt gehalten, weil andere Programme sie unterschiedlich behandeln, und die Einstellung wird gespeichert. |
| Sperren (Vorhängeschloss) | Objekte bleiben sichtbar und Sie können darauf fangen, aber sie können nicht gewählt oder geändert werden. Gut für einen Hintergrund, über den Sie nachzeichnen. |
| Plotten (Drucker) | Ist die Taste gedrückt, wird der Layer auf dem Bildschirm angezeigt, aber **aus Plots und PDFs ausgelassen**. Verwenden Sie das für Konstruktionslinien und Notizen an sich selbst. |

Fahren Sie mit der Maus über eine Schaltfläche, um zu sehen, was sie tut („Ausschalten“, „Einfrieren“, „Sperren“, „Diesen Layer nicht plotten“).

Sie können den aktuellen Layer nicht ausschalten: Die Statusleiste sagt „Das ist der aktuelle Layer. Machen Sie zuerst einen anderen Layer aktuell.“ Ein Klick auf den Namen eines Layers, um ihn aktuell zu machen, schaltet ihn auch ein und taut ihn auf.

Jede Layeränderung, im Bereich oder über einen Befehl, ist ein Rückgängig-Schritt: {{key:Mod+Z}} stellt sie wieder her.

## Layer über gewählte Objekte bearbeiten

Sie müssen den Namen eines Layers nicht kennen: Wählen Sie ein Objekt darauf. Geben Sie den Befehl ein oder öffnen Sie {{ui:Werkzeuge}} oben im Bereich {{ui:Layer}}.

| Befehl | Was er tut |
|---|---|
| {{cmd:LAYISO}} | Objekte wählen, Enter drücken: nur deren Layer bleiben an, jeder andere Layer wird ausgeschaltet. Ist der aktuelle Layer ausgeschaltet, wird einer der isolierten Layer aktuell. |
| {{cmd:LAYUNISO}} | Schaltet die Layer wieder ein, die das letzte {{cmd:LAYISO}} ausgeschaltet hat, und gibt den aktuellen Layer zurück, den es geändert hat. |
| {{cmd:LAYOFF}} | Klicken Sie nacheinander auf Objekte: der Layer jedes Objekts wird ausgeschaltet. Geben Sie `U` ein, um das letzte zurückzunehmen, und {{key:Enter}}, um abzuschließen. |
| {{cmd:LAYFRZ}} | Dasselbe, wobei jeder Layer eingefroren wird. |
| {{cmd:LAYMCUR}} | Klicken Sie auf ein Objekt: sein Layer wird aktuell (und eingeschaltet und aufgetaut). Ist bereits ein Objekt gewählt, wird dieses verwendet. |
| {{cmd:LAYON}} | Schaltet alle Layer ein. |
| {{cmd:LAYTHW}} | Taut alle Layer auf. |

Der aktuelle Layer wird auf diesem Weg nie ausgeschaltet oder eingefroren: Der Verlauf sagt es, und Sie können mit {{cmd:LAYMCUR}} zuerst einen anderen Layer aktuell machen. Wählen Sie eine Blockreferenz, wird der eigene Layer der Referenz verwendet.

## Layer umbenennen, zusammenführen und löschen

- {{cmd:RENAME}}: Geben Sie `LA`, den alten Namen und den neuen ein. Jedes Objekt auf dem Layer folgt. (`B` benennt einen Block auf dieselbe Weise um, mit jeder Referenz darauf.)
- {{cmd:LAYMRG}}: Klicken Sie auf ein Objekt auf jedem Layer, den Sie zusammenführen wollen (oder geben Sie `N` und einen Namen ein), drücken Sie {{key:Enter}}, wählen Sie dann den Zielayer und antworten Sie mit `Y`. Die Objekte wandern zum Ziel – im Modell, auf Blättern und in Blöcken – und die zusammengeführten Layer verschwinden.
- {{cmd:LAYDEL}}: Wählen Sie ein Objekt auf dem Layer (oder geben Sie `N` und seinen Namen ein) und antworten Sie mit `Y`. Der Layer verschwindet **mit jedem Objekt darauf**, überall. Layer 0, DEFPOINTS und der aktuelle Layer können nicht gelöscht werden.

Jeder ist ein Rückgängig-Schritt. Alle drei stehen in {{ui:Werkzeuge}} oben im Bereich {{ui:Layer}}.

1. Klicken Sie auf eine Wandlinie, geben Sie dann `LAYISO` ein und drücken Sie {{key:Enter}}. Nur Walls bleibt an.
2. Zeichnen oder ändern Sie, was Sie auf Walls brauchen.
3. Geben Sie `LAYUNISO` ein und drücken Sie {{key:Enter}}. Doors und Notes kommen zurück.

## Häufige Fehler

- **Neue Linien kamen auf den falschen Layer.** Prüfen Sie vor dem Zeichnen, welcher Punkt gefüllt ist. Ein neuer Layer wird sofort aktuell, sobald Sie ihn anlegen.
- **Ein Objekt lässt sich nicht wählen.** Sein Layer ist gesperrt, aus oder eingefroren.
- **Der Layer wird in einem anderen Programm trotzdem gedruckt.** DXF R12 kann „nicht plotten“ nicht speichern. CadCraft behält die Einstellung für sich, wenn die Zeichnung ein Blatt hat, aber andere Programme werden diesen Layer plotten.
- **Layernamen in Großbuchstaben nach dem Speichern.** DXF R12 speichert Namen in Großbuchstaben, daher kommt `Walls` als `WALLS` zurück, und Leerzeichen werden zu `_`. Eine gespeicherte DWG behält die Namen so, wie Sie sie geschrieben haben.
- **Einen Layer umbenennen, zusammenführen oder löschen.** Verwenden Sie {{cmd:RENAME}}, {{cmd:LAYMRG}} oder {{cmd:LAYDEL}} (auch in {{ui:Werkzeuge}}): siehe unten.

## Layer gruppieren

Halten Sie die Liste kurz, indem Sie Layer in Ordnern ablegen, etwa Bestand, Planung und Versorgung. Jeder Ordner klappt auf und zu, und seine Schalter schalten alle seine Layer gemeinsam ein oder aus, frieren sie ein oder sperren sie. Der aktuelle Layer wird nie ausgeschaltet.

Wählen Sie in {{ui:Werkzeuge}} im Bereich Layer {{ui:Fertige Gruppen hinzufügen}} für einen Satz, der für kleine Wohnbauprojekte gemacht ist, {{ui:Nach Name gruppieren}}, um Layer mit gleichem Präfix zu gruppieren (`E-Walls`, `E-Doors`), oder {{ui:Neue Gruppe}}. Ziehen Sie einen Layer auf einen Ordner oder nutzen Sie die Liste über den Layern für den aktuellen Layer. Geben Sie in {{ui:Layer suchen}} ein, um die Liste einzugrenzen. `LAYGROUP` (`LG`) tut dasselbe in der Befehlszeile.

Um eine Gruppe umzubenennen, doppelklicken Sie auf ihren Namen (oder wählen Sie ihn und drücken Sie {{key:F2}}), tippen Sie den neuen Namen und drücken Sie {{key:Enter}}; {{key:Esc}} behält den alten, und {{cmd:UNDO}} stellt ihn wieder her. {{ui:Neue Gruppe}} steht in {{ui:Werkzeuge}} im Bereich Layer.

Die Layer selbst ändern sich nicht, daher sehen andere CAD-Programme sie als gewöhnliche flache Liste. CadCraft speichert die Gruppen in der Datei.
