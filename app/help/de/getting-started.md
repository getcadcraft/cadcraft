---
title: Erste Schritte mit CadCraft
summary: Was die Zeichen-App CadCraft kann, wo sie läuft und Ihre erste Zeichnung vom leeren Bildschirm bis zur gespeicherten Datei.
keywords: Start, erste Zeichnung, neu, öffnen, speichern, speichern unter, Anfang, Tutorial, Einführung, Schnellstart
from: 1a56c575
---

CadCraft ist eine 2D-Zeichen-App. Sie zeichnen und bearbeiten Linien, Bögen, Polylinien, Text, Bemaßungen und Blöcke, richten Blätter mit Schriftfeldern und Ansichtsfenstern ein und plotten sie in PDF. Sie öffnet DWG- und DXF-Zeichnungen und speichert sie als DWG oder DXF.

Sie läuft in Ihrem Webbrowser. Es muss nichts installiert werden: Die Website nennt die Adresse, und die ganze App lädt in die Seite. Ihre Zeichnungen werden von Ihrem eigenen Computer geöffnet und dorthin zurückgespeichert. **Es wird nichts hochgeladen.**

Wenn Sie schon gezeichnet haben, lesen Sie nach dieser Seite [Umstieg von anderer Zeichensoftware](topic:coming-from). Die meisten Gewohnheiten bleiben gleich, die wenigen, die nicht, sind dort aufgeführt.

## Lieber geführt?

`TOUR` eingeben (oder auf der Startkarte {{ui:Die Tour machen}} klicken, oder {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Die Tour noch einmal machen}}). Sechs kurze Schritte in einem Feld über der Zeichnung: eine Linie und einen Kreis zeichnen, verschieben, stutzen, etwas löschen und bemaßen. Jeder Schritt endet, sobald Sie ihn ausführen, und Sie können einen Schritt oder die ganze Tour überspringen. Sie startet nur beim ersten Mal von selbst. Der [Spickzettel](topic:cheat-sheet) enthält die 40 Befehle, die Sie am häufigsten nutzen, und die [Befehlszuordnung](topic:command-map) jeden Befehl, den es gibt.

## Was Sie brauchen

- Einen aktuellen Chrome, Edge, Firefox oder Safari auf einem Mac-, Windows- oder Linux-Computer. Siehe [Browser und Plattformen](common:browsers).
- Eine Maus mit Rad ist am bequemsten. Ein Trackpad funktioniert; siehe [Maus, Trackpad und Touch](topic:mouse-trackpad-touch).
- Eine Tastatur. CadCraft wird wie die meisten Zeichenprogramme über eingegebene Befehle gesteuert.

## Die Idee in einem Absatz

Sie geben einen Befehl ein (oder klicken seine Schaltfläche), und die Befehlszeile unten stellt Ihnen nacheinander Fragen: „Ersten Punkt angeben“, „Nächsten Punkt angeben“. Jede Frage beantworten Sie durch einen Klick in die Zeichnung oder durch Eingabe eines Werts, gefolgt von {{key:Enter}}. {{key:Esc}} bricht ab. Das ist das ganze Bedienmodell; alles andere ist Detail.

## Ihre erste Zeichnung

Sie zeichnen aus Linien ein Rechteck von 4000 mal 3000, setzen einen Kreis in die Mitte und speichern die Datei.

1. CadCraft öffnen. Die Befehlszeile unten zeigt `Befehl:`, und im Zeichenbereich steht eine kurze Karte „Zeichnen beginnen“.
2. `L` eingeben und {{key:Enter}} drücken. Sie müssen die Befehlszeile nicht erst anklicken: Eingaben landen überall dort.
3. Die Eingabeaufforderung wechselt zu `Ersten Punkt angeben:`. `0,0` eingeben und {{key:Enter}} drücken.
4. `@4000,0` eingeben und {{key:Enter}} drücken. Eine Linie erscheint und verläuft nach rechts. Das `@` bedeutet „vom letzten Punkt aus“.
5. `@0,3000` eingeben und {{key:Enter}} drücken.
6. `@-4000,0` eingeben und {{key:Enter}} drücken.
7. `C` eingeben und {{key:Enter}} drücken. `C` ist die Option „Schließen“: Die letzte Linie führt zurück zum ersten Punkt, und der Befehl endet.
8. Auf {{ui:Grenzen}} in der Gruppe Ansicht der Symbolleiste klicken. Das Rechteck füllt den Bildschirm.

Jetzt sehen Sie vier Linien, die ein Rechteck bilden, und der Verlauf über der Befehlszeile listet auf, was Sie eingegeben haben.

9. `C` eingeben und {{key:Enter}} drücken, um den Kreisbefehl zu starten.
10. `2000,1500` eingeben und {{key:Enter}} drücken für das Zentrum.
11. `500` eingeben und {{key:Enter}} drücken für den Radius.

Ein Kreis erscheint in der Mitte des Rechtecks.

12. {{key:Mod+S}} drücken oder in der Gruppe Datei auf {{ui:Speichern}} klicken.

Der Browser lädt `Drawing1.dwg` in Ihren üblichen Download-Ordner herunter, und der Verlauf meldet, dass eine Kopie als DWG gespeichert wurde. Diese Datei öffnet sich wieder in CadCraft und in den meisten anderen CAD-Programmen. (Wenn Sie in diesem Browser zuvor unter {{ui:Speichern unter}} DXF gewählt haben, wird eine neue Zeichnung stattdessen als `Drawing1.dxf` gespeichert.)

:::tip
{{key:Enter}} in einer leeren Befehlszeile wiederholt den letzten Befehl. Wenn Sie möchten, nehmen Sie stattdessen {{key:Space}}: Außerhalb von Text bewirkt es dasselbe.
:::

## Eine vorhandene Zeichnung öffnen

1. {{key:Mod+O}} drücken oder auf {{ui:Öffnen}} klicken.
2. Im Dateiauswahldialog eine `.dwg`- oder `.dxf`-Datei wählen.

Sie können auch eine DWG- oder DXF-Datei aus {{pick:mac=dem Finder|windows=dem Datei-Explorer|linux=Ihrem Dateimanager}} auf den Zeichenbereich ziehen und dort ablegen. Die Datei wird in der Seite gelesen; sie verlässt Ihren Computer nie.

Siehe [Dateien: was sich öffnen und speichern lässt](topic:files), was erhalten bleibt und was umgewandelt wird.

## Speichern: was Sie erwartet

Speichern im Browser funktioniert anders als in einem Desktop-Programm:

- {{ui:Speichern}} **lädt immer eine neue Kopie herunter**. Die geöffnete Datei wird nicht überschrieben. Liegt im Download-Ordner schon eine Datei mit demselben Namen, hängt der Browser meist eine Zahl an, etwa `Drawing1 (1).dwg`.
- {{ui:Speichern}} verwendet das Format der Zeichnung: DWG, wenn Sie eine DWG geöffnet haben, DXF bei einer DXF. Zum Wählen {{key:Mod+Shift+S}} drücken oder auf {{ui:Speichern unter}} klicken und dann {{ui:DWG}} (und seine Version), {{ui:DXF R12}} oder {{ui:DXF 2000}} wählen. Siehe [Speichern](topic:files#saving).
- Die geöffnete Datei wird nie verändert.
- Eine andere Datei zu öffnen oder {{ui:Neu}} legt sie in einen eigenen Tab über der Zeichnung, sodass nichts Geöffnetes geschlossen wird. Wenn Sie den Tab einer Zeichnung schließen oder die Seite mit nicht gespeicherten Änderungen verlassen, fragt CadCraft zuerst: {{ui:Zuerst Kopie speichern}}, verwerfen oder {{ui:Abbrechen}}. Beim Schließen des Browser-Tabs erscheint stattdessen die eigene Frage „Website verlassen?“ des Browsers.

Speichern in der Cloud ist noch nicht verfügbar. Wohin Ihre Dateien gehen und warum sie privat bleiben, erklärt [Ihre Dateien und Datenschutz](common:your-files).

## Wie es weitergeht

{{key:F1}} drücken oder oben in der Leiste auf {{ui:Hilfe}} klicken, um diese Hilfe jederzeit neben der Zeichnung zu öffnen. Sie funktioniert ohne Verbindung.

- [Der CadCraft-Bildschirm](topic:workspace) benennt jede Leiste und jeden Bereich.
- [Mit Koordinaten zeichnen](topic:draw-with-coordinates) ist die beste erste Schritt-für-Schritt-Anleitung.
- [Tastatur und Maus](topic:keyboard) listet jede Taste auf.
- `HELP` in der Befehlszeile eingeben für eine Liste aller Befehle, oder die [Befehlsreferenz](topic:commands) lesen.
