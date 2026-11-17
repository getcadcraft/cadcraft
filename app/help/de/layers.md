---
title: Eine Zeichnung mit Layern ordnen
summary: Legen Sie Layer für Wände, Türen und Notizen an, setzen Sie Farben, machen Sie einen Layer aktuell und schalten Sie Layer aus, frieren sie ein, sperren sie oder verhindern das Plotten.
keywords: Layer, la, aktueller Layer, frieren, tauen, sperren, aus, ein, plotten, nicht plotten, Farbe, Layer-Eigenschaften, layiso, layuniso, isolieren, layoff, layfrz, laymcur, layon, laythw, umbenennen, laymrg, zusammenführen, laydel, Layer löschen
from: cd033591
---

## Was Sie erstellen

Drei Layer, Walls, Doors und Notes, jeder mit eigener Farbe, mit Objekten auf jedem Layer, die zwischen ihnen verschoben werden.

## Das Layer-Panel

Layer befinden sich im Panel links unter {{ui:Layer}}. Jede Zeile zeigt von links nach rechts:

- einen Punkt: gefüllt für den **aktuellen** Layer, auf dem neue Objekte landen;
- ein Farbfeld;
- den Layer-Namen;
- vier Schaltflächen: ein/aus (Auge), frieren (Schneeflocke), sperren (Vorhängeschloss) und plotten (Drucker).

Jede Zeichnung hat einen Layer namens `0`. Wenn Sie `LA` eingeben und {{key:Enter}} drücken, springen Sie zum Panel.

## Layer anlegen

1. Klicken Sie oberhalb der Liste auf {{ui:Neuer Layer}}. Ein Namensfeld öffnet sich.
2. Geben Sie `Walls` ein und drücken Sie {{key:Enter}} (oder klicken Sie auf {{ui:Hinzufügen (A)}}).

Die Statusleiste meldet „Layer Walls hinzugefügt und aktuell gemacht.“ Der neue Layer erhält Farbe 7 (Schwarz im hellen Design, Weiß im dunklen).

3. Klicken Sie erneut auf {{ui:Neuer Layer}}, geben Sie `Doors` ein und drücken Sie {{key:Enter}}.
4. Klicken Sie erneut auf {{ui:Neuer Layer}}, geben Sie `Notes` ein und drücken Sie {{key:Enter}}.

Notes ist jetzt der aktuelle Layer.

## Jedem Layer eine Farbe geben

1. Klicken Sie auf das Farbfeld in der Zeile Walls. Die Farbauswahl Ihres Systems öffnet sich.
2. Wählen Sie eine Farbe und bestätigen Sie.

Das Farbfeld und alles auf Walls, das auf {{ui:VonLayer}} gefärbt ist, ändert sich.

:::note
Eine gewählte Farbe, die einer der 255 Standard-CAD-Farben entspricht, wird als deren Nummer gespeichert. Jede andere Farbe bleibt in CadCraft genau erhalten, wird in einer DWG- oder DXF-Datei aber als nächstgelegene Standardfarbe gespeichert.
:::

## Auf einem Layer zeichnen

1. Klicken Sie in der Liste auf den Namen **Walls**. Sein Punkt wird gefüllt und die Statusleiste meldet „Aktueller Layer: Walls“.
2. Zeichnen Sie ein Rechteck (`REC`). Es landet auf Walls.
3. Klicken Sie auf **Doors** und zeichnen Sie einen Bogen (`A`). Er landet auf Doors.

Sie können den aktuellen Layer auch in {{ui:Aktuelle Einstellungen}} rechts wählen (wenn nichts ausgewählt ist), unter {{ui:Layer}}.

## Objekte auf einen anderen Layer verschieben

1. Wählen Sie die Objekte aus.
2. Wählen Sie im rechten Panel den neuen Layer unter {{ui:Layer}}.

Sie wechseln auf diesen Layer und übernehmen dessen Farbe, wenn ihre Farbe {{ui:VonLayer}} ist.

## Aus, frieren, sperren und plotten

| Schaltfläche | Was sie bewirkt |
|---|---|
| Ein/Aus (Auge) | Blendet die Objekte des Layers aus. Sie können nicht gesehen, ausgewählt oder am Objektfang verwendet werden. |
| Frieren (Schneeflocke) | Wie Aus in CadCraft. Getrennt geführt, weil andere Programme sie unterschiedlich behandeln, und die Einstellung wird gespeichert. |
| Sperren (Vorhängeschloss) | Objekte bleiben sichtbar, und Sie können am Objektfang auf sie einrasten, aber sie können nicht ausgewählt oder geändert werden. Gut für einen Hintergrund, den Sie nachzeichnen. |
| Plotten (Drucker) | Ist die Taste gedrückt, wird der Layer auf dem Bildschirm angezeigt, aber **nicht in Plots** und PDFs ausgegeben. Verwenden Sie ihn für Konstruktionslinien und Notizen für sich selbst. |

Fahren Sie mit dem Mauszeiger über eine Schaltfläche, um zu sehen, was sie bewirkt („Ausschalten“, „Frieren“, „Sperren“, „Diesen Layer nicht plotten“).

Sie können den aktuellen Layer nicht ausschalten: Die Statusleiste meldet „Das ist der aktuelle Layer. Machen Sie zuerst einen anderen Layer aktuell.“ Wenn Sie den Namen eines Layers anklicken, um ihn aktuell zu machen, wird er auch eingeschaltet und aufgetaut.

Jede Layer-Änderung, im Panel oder über einen Befehl, ist ein Rückgängig-Schritt: {{key:Mod+Z}} stellt sie wieder her.

## Layer über Objekte auswählen

Sie müssen den Namen eines Layers nicht kennen: Wählen Sie ein Objekt darauf aus. Geben Sie den Befehl ein oder öffnen Sie {{ui:Werkzeuge}} oben im {{ui:Layer}}-Panel.

| Befehl | Was er tut |
|---|---|
| {{cmd:LAYISO}} | Objekte wählen, dann {{key:Enter}} drücken: Nur deren Layer bleiben eingeschaltet, alle anderen Layer werden ausgeschaltet. Ist der aktuelle Layer ausgeschaltet, wird einer der isolierten Layer aktuell. |
| {{cmd:LAYUNISO}} | Schaltet die Layer wieder ein, die das letzte {{cmd:LAYISO}} ausgeschaltet hat, und gibt den aktuellen Layer zurück, den es geändert hat. |
| {{cmd:LAYOFF}} | Klicken Sie nacheinander auf Objekte: der Layer jedes Objekts wird ausgeschaltet. Geben Sie `U` ein, um das letzte zurückzunehmen, {{key:Enter}} zum Beenden. |
| {{cmd:LAYFRZ}} | Ebenso, wobei jeder Layer eingefroren wird. |
| {{cmd:LAYMCUR}} | Klicken Sie auf ein Objekt: dessen Layer wird aktuell (und dabei eingeschaltet und aufgetaut). Ist bereits ein Objekt ausgewählt, wird dieses verwendet. |
| {{cmd:LAYON}} | Schaltet alle Layer ein. |
| {{cmd:LAYTHW}} | Taut alle Layer auf. |

Auf diesem Weg wird der aktuelle Layer nie aus- oder eingefroren: Der Verlauf sagt das, und Sie können zuerst mit {{cmd:LAYMCUR}} einen anderen Layer aktuell machen. Wählen Sie eine Blockreferenz, wird der eigene Layer der Referenz verwendet.

## Layer umbenennen, zusammenführen und löschen

- {{cmd:RENAME}}: Geben Sie `LA`, den alten Namen und den neuen ein. Jedes Objekt auf dem Layer folgt. (`B` benennt einen Block auf dieselbe Weise um, mit allen Referenzen darauf.)
- {{cmd:LAYMRG}}: Klicken Sie auf ein Objekt auf jedem Layer, den Sie zusammenführen möchten (oder geben Sie `N` und einen Namen ein), drücken Sie {{key:Enter}}, wählen Sie dann den Ziel-Layer und antworten Sie mit `Y`. Die Objekte wandern zum Ziel – im Modell, auf Blättern und in Blöcken – und die zusammengeführten Layer verschwinden.
- {{cmd:LAYDEL}}: Wählen Sie ein Objekt auf dem Layer (oder geben Sie `N` und dessen Namen ein) und antworten Sie mit `Y`. Der Layer verschwindet **mit allen Objekten darauf**, überall. Layer 0, DEFPOINTS und der aktuelle Layer können nicht gelöscht werden.

Jeder dieser Befehle ist ein Rückgängig-Schritt. Alle drei befinden sich in {{ui:Werkzeuge}} oben im {{ui:Layer}}-Panel.

1. Klicken Sie auf eine Wandlinie, geben Sie dann `LAYISO` ein und drücken Sie {{key:Enter}}. Nur Walls bleibt eingeschaltet.
2. Zeichnen oder ändern Sie auf Walls, was Sie benötigen.
3. Geben Sie `LAYUNISO` ein und drücken Sie {{key:Enter}}. Doors und Notes kehren zurück.

## Häufige Fehler

- **Neue Linien landeten auf dem falschen Layer.** Prüfen Sie, welcher Punkt gefüllt ist, bevor Sie zeichnen. Ein neuer Layer wird aktuell, sobald Sie ihn anlegen.
- **Ein Objekt lässt sich nicht auswählen.** Sein Layer ist gesperrt, ausgeschaltet oder eingefroren.
- **Der Layer wird in einem anderen Programm noch gedruckt.** DXF R12 kann „nicht plotten“ nicht speichern. CadCraft behält die Einstellung für sich, wenn die Zeichnung ein Blatt hat, andere Programme werden diesen Layer aber plotten.
- **Layer-Namen nach dem Speichern in Großbuchstaben.** DXF R12 speichert Namen in Großbuchstaben, daher kommt `Walls` als `WALLS` zurück, und Leerzeichen werden zu `_`. Eine gespeicherte DWG behält die Namen so, wie Sie sie eingegeben haben.
- **Umbenennen, Zusammenführen oder Löschen eines Layers.** Verwenden Sie {{cmd:RENAME}}, {{cmd:LAYMRG}} oder {{cmd:LAYDEL}} (auch in {{ui:Werkzeuge}}): siehe oben.

## Layer gruppieren

Halten Sie die Liste kurz, indem Sie Layer in Ordnern ablegen, etwa Bestand, Planung und Versorgung. Jeder Ordner lässt sich ein- und ausklappen, und seine Schalter schalten alle seine Layer gemeinsam ein oder aus, frieren sie ein oder sperren sie. Der aktuelle Layer wird nie ausgeschaltet.

In {{ui:Werkzeuge}} im Layer-Panel wählen Sie {{ui:Fertige Gruppen hinzufügen}} für eine Auswahl, die für kleine Wohnbauprojekte gedacht ist, {{ui:Nach Name gruppieren}}, um Layer mit gemeinsamem Präfix zu gruppieren (`E-Walls`, `E-Doors`), oder {{ui:Neue Gruppe}}. Ziehen Sie einen Layer auf einen Ordner oder verwenden Sie die Liste oberhalb der Layer für den aktuellen Layer. Geben Sie in {{ui:Layer suchen}} ein, um die Liste einzugrenzen. `LAYGROUP` (`LG`) macht dasselbe in der Befehlszeile.

Die Layer selbst ändern sich nicht, daher sehen andere CAD-Programme sie als gewöhnliche flache Liste. CadCraft speichert die Gruppen in der Datei.
