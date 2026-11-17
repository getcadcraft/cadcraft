---
title: Mehrere Scans zu einem registrieren
summary: Scans, die von verschiedenen Positionen aufgenommen wurden, durch gewählte Punktpaare oder eingegebene Ziele in einem Koordinatensystem platzieren, mit ICP verfeinern, die Registrierung als Projekt speichern und die registrierte Punktwolke als LAS oder E57 exportieren. Der Befehl ist REGISTERSCANS.
keywords: registrieren, Registrierung, Scans, Punktwolke, icp, iterative closest point, Ziele, Punktpaare, starre Transformation, ausrichten, zusammenführen, e57, las, REGISTERSCANS, REGSCAN
from: ceab0106
---

## Was Sie erledigen

Mehrere Scans derselben Stelle (jeweils von einer eigenen Scanner-Position aus) beginnen in ihren eigenen Koordinaten. Registrieren Sie sie: Geben Sie jedem Scan eine Platzierung, damit alle in einem Koordinatensystem liegen. Speichern Sie das dann als Projekt und schreiben Sie die registrierte Punktwolke als eine LAS- oder E57-Datei.

## Scans platzieren

1. Öffnen Sie den Dialog (geben Sie `REGISTERSCANS` (oder `REGSCAN`) ein). {{ui:Scans hinzufügen…}} nimmt LAS-, LAZ-, E57-, PLY-, PCD-, PTX-, PTS- oder XYZ-Dateien an, oder Sie ziehen sie auf den Dialog. Scans mit unterschiedlichen Einheiten werden mit einem Hinweis abgelehnt: Konvertieren Sie zuerst einen davon.
2. Wählen Sie {{ui:Zu verschiebender Scan}} und {{ui:Platzieren an}}. Das Bild zeigt jeden Scan im Rahmen in seiner aktuellen Lage, jeweils in einer eigenen Farbe: {{ui:Grundriss}}, {{ui:Vorne}} oder {{ui:Seite}}. Ziehen Sie, um zu verschieben, und benutzen Sie das Mausrad zum Zoomen.
3. **Über Punktpaare.** Klicken Sie auf {{ui:Ein Paar wählen}}, dann auf einen Punkt am Scan, der verschoben werden soll, und danach auf dieselbe Stelle in einem anderen Scan (eine Ecke, ein Zielpunkt, der Fuß einer Stütze). Tun Sie das mindestens dreimal, mit Punkten, die nicht auf einer Linie liegen und weit verteilt sind. Klicken Sie auf {{ui:Nach Paaren platzieren}}: Der Scan wird per Ausgleichsrechnung (kleinste Quadrate) platziert, und **Rest** zeigt, wie weit jedes Paar noch danebenliegt. Ein Paar mit einem großen Wert ist ein schlechter Punkt: Entfernen Sie es mit dem Kreuz und platzieren Sie erneut.
4. **Über Ziele.** Sind die wahren Koordinaten eines Punkts bekannt (vermessene Zielmarken), klicken Sie auf {{ui:Wählen, dann Ziel eingeben}}, klicken Sie den Punkt im Scan an und geben Sie X, Y und Z des Ziels in der Zeile ein. Paare und eingegebene Ziele lassen sich frei mischen.

## Mit ICP verfeinern

Paare liefern eine grobe Platzierung. {{ui:Verfeinern}} verschiebt den Scan, bis seine Flächen auf denen des anderen Scans liegen: zuerst **Punkt zu Punkt**, dann **Punkt zu Ebene**. Die Tabelle listet jeden Schritt mit seinem Fehler und der Anzahl der zugeordneten Punkte; die Linie darüber zeigt, wie der Fehler sinkt. {{ui:Beenden}} beendet den Lauf nach dem gerade laufenden Schritt und behält das Erreichte. {{ui:Rückgängig}} nimmt den ganzen Lauf (oder die letzte Platzierung) zurück; {{ui:Zurücksetzen}} setzt den Scan auf seine Dateikoordinaten zurück.

Damit es auf einem Laptop schnell bleibt, arbeitet ICP mit einem ausgedünnten Anteil der Punkte ({{ui:Verwendete Punkte}}, 5,000 bis 60,000) und ignoriert Zuordnungen, die weiter als {{ui:Größter Zuordnungsabstand}} entfernt sind (standardmäßig 5 % der Scangröße, der Wert wird beim Einpendeln kleiner). Es braucht zuerst eine grobe Platzierung: Scans, die sich kaum überlappen, melden, dass sie nicht zugeordnet werden können. Flächen, die nur eben oder nur gerade sind, können eine Position entlang ihrer selbst nicht festlegen; fügen Sie in dem Fall Paare hinzu.

## Speichern und exportieren

- {{ui:Projekt speichern}} schreibt eine kleine Datei `.ccscans.json`: Name und Größe jedes Scans sowie eine Prüfsumme seiner ersten 64 KB, samt Transformation. Sie enthält keine Punkte. {{ui:Projekt öffnen…}} findet die Scan-Dateien über diese Verweise (die Dateien müssen zuvor hinzugefügt sein) und stellt jede Transformation wieder her.
- {{ui:LAS exportieren}} und {{ui:E57 exportieren}} schreiben eine Datei mit allen Scans an ihrer registrierten Position. Die Originalpunkte werden nie umgeschrieben; die Transformation wird beim Export angewendet. Mit eingeschaltetem {{ui:Alle Punkte aus den Dateien lesen}} wird jede Datei für jeden Punkt erneut gelesen (bis zu 20 Millionen pro Scan); ist es ausgeschaltet, werden nur die Punkte geschrieben, die im Betrachter angezeigt werden.
- {{ui:Registrierte Wolke anzeigen}} (CadCraft) schreibt die LAS und hängt sie wie jede Wolke unter der Zeichnung an ihren eigenen Koordinaten an.

:::note
Nichts wird hochgeladen. Die Registrierung arbeitet in den Einheiten der Dateien und behält Millimeter bei: Eine LAS wird mit einem passenden Maßstab geschrieben (bis zu 0.1 mm), eine E57 mit doubles. Ein Koordinatensystem wird nur dann in die LAS übernommen, wenn jeder Scan denselben EPSG-Code angibt. Der E57-Schreiber ist unser eigener; er wird geprüft, indem seine Dateien mit diesem Leser und mit libE57Format wieder eingelesen werden.
:::
