---
title: Eine Zeichnung an einen Laser senden
summary: Das Laser-Panel öffnen, festlegen, was jeder Layer tut (schneiden, ritzen, gravieren, füllen, Bild), die Bewegungen des Kopfes vorschauen, GRBL-Laser-G-Code speichern oder ihn nach dem Umfahren des Auftrags aus dem Browser senden.
keywords: Laser, Laserschneider, Lasergravur, GRBL, G-Code, gcode, gravieren, füllen, dither, Bildgravur, ritzen, schneiden, Web Serial, Auftrag umfahren, Leistung, Geschwindigkeit, Durchgänge, LASER, LASERCUT, CNC
from: 72b56db0
---

Das Panel {{ui:Laser}} verwandelt die Layer einer Zeichnung in ein Programm für einen Laser, der mit GRBL läuft (die meisten Hobby- und Kleinwerkstatt-Diodenlaser und CO2-Steuerungen). Geben Sie `LASER` (oder `LASERCUT`) ein und drücken Sie {{key:Enter}}, oder wählen Sie {{ui:Laser…}} im Menü {{ui:Mehr}} der Gruppe {{ui:Ansicht}}. In den Multifunktionsleisten-Stilen steht es im Menü {{ui:Datei}} und neben {{ui:Plotten}}. Das Panel öffnet sich über der Zeichnung und bleibt offen, während Sie zeichnen: Die Vorschau folgt jeder Änderung.

:::warning
Testen Sie jede Einstellung zuerst an Ausschuss, tragen Sie eine Schutzbrille, die zu Ihrem Laser passt, halten Sie den Deckel geschlossen, wo es einen gibt, und lassen Sie einen laufenden Laser nie allein. Die Werte, mit denen ein Layer beginnt, sind Platzhalter, keine Empfehlungen für ein Material.
:::

## Was gesendet wird

Das Panel liest das Modell (nicht die Blätter), und zwar auf Layern, die eingeschaltet und aufgetaut sind:

- Linien, Bögen, Kreise, Polylinien (Bogensegmente bleiben Bögen), Ellipsen und Splines. Eine Form, die dort endet, wo sie beginnt, gilt als geschlossen.
- Blöcke werden auseinandergenommen: Ein Objekt auf Layer 0 innerhalb eines Blocks wird mit dem Layer der Blockreferenz gesendet.
- Eine Schraffur sendet ihre Begrenzung, daher wird ein schraffiertes Logo auf einem Layer **Formen füllen** gefüllt.
- Ein Bild (`IMAGEATTACH`) wird auf einem Layer, der auf **Bild gravieren** steht, graviert, wenn es quadratisch liegt (nicht gedreht oder schräg) und seine Datei in CadCraft geöffnet ist.
- Text, Bemaßungen, Führungslinien, Punkte und Konstruktionslinien werden nicht gesendet; das Panel sagt, wie viele es ausgelassen hat. Um Text zu brennen, zeichnen Sie die Buchstaben als Formen oder schraffieren Sie sie.

Maße gehen in Millimetern aus den Einheiten der Zeichnung (`UNITS`) hinaus: Eine Zeichnung in Zoll wird mit 25.4 multipliziert. Eine Zeichnung ohne gesetzte Einheiten wird so gesendet, dass eine Einheit einem Millimeter entspricht. Setzen Sie {{ui:Nur die ausgewählten Objekte}}, um einen Teil der Zeichnung zu senden.

## Wählen Sie, was jeder Layer tut

Jeder Layer mit Inhalt ist eine Zeile. {{ui:Aktion}} setzt ihn auf **Schneiden**, **Ritzen**, **Linien gravieren**, **Formen füllen**, **Bild gravieren** oder **Nicht gesendet**, mit einer {{ui:Leistung %}}, einer {{ui:Geschwindigkeit mm/min}} und einer Anzahl von {{ui:Durchgänge}}. Jede Änderung ist ein Rückgängig-Schritt und wird in der Zeichnung gespeichert: DWG (jede Version, die CadCraft speichert) und DXF bewahren die Einstellungen, sodass die Zeichnung beim nächsten Öffnen mit ihnen erscheint. Andere Programme öffnen die Datei wie bisher; sie sehen einen ungenutzten Block namens CADCRAFT_LASER (wenn man dort bereinigt, werden die Einstellungen entfernt).

- **Formen füllen** brennt das Innere geschlossener Formen in Linien, im Abstand von {{ui:Zeilenabstand}}, unter einem {{ui:Winkel}}, in eine oder beide Richtungen, mit einem Überfahren, damit der Kopf auf Geschwindigkeit ist, wenn der Laser einschaltet. Kreuzschraffur fügt einen zweiten Durchgang bei 90° hinzu. Eine Form mit einem Loch bleibt an dem Loch offen.
- **Bild gravieren** verwandelt ein Bild in Punkte (Floyd–Steinberg, Atkinson, geordnet oder einfaches Schwarz-Weiß mit einem Schwellenwert) oder mit *Graustufen* in variable Leistung.
- Reihenfolge: zuerst Bilder und Füllungen, dann Linien gravieren, dann Ritzen, dann Schneiden, damit sich ein ausgeschnittenes Teil nicht bewegt, während es graviert wird. Innerhalb eines Layers laufen die Pfade **innen zuerst** (ein Loch vor der Platte, in der es liegt), jeweils zum nächsten.

## Vorschau, dann speichern

Die Vorschau zeigt, was der Kopf tut: brennende Linien in Farbe, schnelle Bewegungen in Grau und ein grüner Kasten um alles, was brennt. Darunter stehen die Größe, die Brennlänge und eine Zeitschätzung (ohne Beschleunigung; eine echte Maschine braucht länger). {{ui:G-Code speichern…}} schreibt GRBL-Lasermodus-G-Code: `$32=1`, `M4` (oder `M3`) mit S-Werten, `G0`- und `G1`-Bewegungen und `M5` am Ende. X0 Y0 ist die untere linke Ecke des Auftrags, außer Sie wählen den Ursprung der Zeichnung: Setzen Sie dort den Werkstücknullpunkt Ihrer Maschine.

## Vom Browser senden

In Chrome und Edge fragt {{ui:Verbinden…}} nach dem USB-Anschluss des Lasers. Nichts verbindet sich oder sendet, bis Sie eine Schaltfläche drücken. Drücken Sie zuerst {{ui:Auftrag umfahren}}: Der Kopf fährt die Box des Auftrags mit ausgeschaltetem Laser ab (oder mit der niedrigen Leistung, die Sie für einen Zeiger eingestellt haben), damit Sie sehen, wo er brennt. Erst dann wird {{ui:Auftrag senden}} aktiv, und er wird wieder inaktiv, wenn Sie etwas ändern. {{ui:Pause}} hält den Kopf an, {{ui:Beenden}} hält ihn ebenfalls an, setzt die Steuerung zurück (der Laser geht aus) und sendet `M5`. Wo Web Serial fehlt (Firefox, Safari und CadCraft Studio, das noch kein Web Serial hat), bietet das Panel nur das Speichern an: Speichern Sie den G-Code und senden Sie ihn mit dem eigenen Programm Ihres Lasers.

## Noch nicht umgesetzt

Noch nicht umgesetzt: Formate anderer Steuerungen (Ruida, Marlin-Laser, Herstellerdateien), Reiter und Anfahrbögen, Schnittfugenversatz, Materialbibliotheken, Dreh- und Z-Achsen, Kameraausrichtung, Text als Konturen.
