---
title: Ist-Linien über einer Punktwolke nachzeichnen
summary: Einen Laserscan (LAS, LAZ, E57, PLY, PCD, PTX, PTS oder XYZ) unter der Zeichnung anhängen, einen Grundrissschnitt hindurchlegen und Wände, Türen und Stützen mit Objektfang auf deren Punkten zeichnen.
keywords: Punktwolke, pointcloudattach, pcattach, pointcloud, pc, Laserscan, Scan, Lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, Ist-Zustand, Ist, Vermessung, Schnittscheibe, Grundrissschnitt, Knoten, Fang, nachzeichnen, Bestandsaufnahme
from: b0e0aae5
---

## Was Sie erstellen

Einen Ist-Grundriss: die Wände eines gescannten Gebäudes als Linien und Polylinien, genau auf den Punkten des Scans.

## Punktwolke anhängen

1. Legen Sie zuerst die Einheiten der Zeichnung fest, falls keine gesetzt sind (das Feld {{ui:Einheiten}} in {{ui:Eigenschaften}} oder {{cmd:UNITS}}). CadCraft rechnet die Punktwolke von ihren eigenen Einheiten in die der Zeichnung um.
2. Geben Sie {{cmd:POINTCLOUDATTACH}} (oder `PCATTACH`) ein und drücken Sie {{key:Enter}}. Wählen Sie eine Datei mit der Endung `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` oder `.xyz` (das Thema zu Punktwolkenformaten beschreibt, was jedes Format mitbringt und was Sie aus der Software eines Scanners exportieren sollten). Sie können die Datei auch mit {{ui:Öffnen}} öffnen, auf die Seite ziehen oder aus dem BIM-Viewer über {{ui:In CadCraft nachzeichnen}} senden.
3. `Untere linke Ecke der Punktwolke`: Drücken Sie {{key:Enter}}, um die eigenen Koordinaten der Datei beizubehalten (ein am Projekt registrierter Scan passt dann zur Zeichnung), oder klicken Sie die Stelle an, an die die untere linke Ecke soll.
4. Die Befehlszeile zeigt an, wie viele Punkte angezeigt werden. Die Ansicht zoomt auf die Punktwolke; sie liegt unter den Linien, und jeder Punkt ist von oben zu sehen.

## Grundrissschnitt legen und nachzeichnen

1. Geben Sie {{cmd:POINTCLOUD}} (oder `PC`) ein und dann `S` für {{ui:Schnittscheibe}}. Nur ein dünnes Band 1.2 m über dem tiefsten Punkt der Punktwolke wird angezeigt: Wände, Türöffnungen und Stützen lesen sich wie ein Grundriss.
2. `H` (Höhe) setzt die Höhe des Schnitts, `T` (Dicke) seine Dicke in Zeichnungseinheiten. {{key:Enter}} beendet den Befehl.
3. Schalten Sie den Objektfang ({{key:F3}}) mit {{ui:Knoten}} unter den Fangarten ein. Zeichnen Sie mit {{cmd:LINE}} oder {{cmd:PLINE}}: Der Cursor rastet auf den Punkten der Schnittscheibe ein, beschriftet mit „Punktwolke“. Die eigenen Endpunkte, Mittelpunkte und Zentren der Zeichnung haben Vorrang vor der Punktwolke, sodass das Schließen einer Polylinie auf ihrem ersten Punkt landet.
4. Ändern Sie die Schnitthöhe, um ein anderes Geschoss nachzuzeichnen, und schalten Sie die Schnittscheibe wieder aus (erneut `S`), um die gesamte Punktwolke zu sehen.

## Weitere Optionen

In {{cmd:POINTCLOUD}}: `C` (Farbe) färbt die Punkte nach den Farben der Datei, nach Höhe, Intensität, LiDAR-Klasse oder in einer einzigen Farbe; `SI` (Punktgröße) legt die Punktgröße fest; `V` (Ausblenden) blendet die Punktwolke aus oder wieder ein; `Z` zoomt auf sie; `D` (Trennen) löst sie von der Zeichnung.

Auch die Registerkarte „3D“ zeigt die Punktwolke, mit ihrem tiefsten Punkt auf dem Boden und demselben Schnitt.

:::note
Die Punktwolke ist nicht Teil der Zeichnung: Sie wird nicht in DWG oder DXF gespeichert, und Rückgängig ändert sie nicht. Hängen Sie sie beim späteren Öffnen der Zeichnung erneut an. Dateien werden auf diesem Computer gelesen; nichts wird hochgeladen. Sehr große Scans werden gleichmäßig auf 2 Millionen Punkte ausgedünnt. E57-Dateien werden derzeit bis 6 Millionen Punkte und 512 MB geöffnet: Exportieren Sie größere Scans als LAS oder LAZ.
:::

## Plotten

{{cmd:PLOT}} druckt die Punktwolke mit der Zeichnung, unter den Linien: in einem Modellplot ({{ui:Alles}} schließt den Bereich der Punktwolke ein) und in jedem Layout-Ansichtsfenster, im PDF, im PNG, im SVG und in dem, was Sie an einen Drucker senden. Gedruckt wird, was auf dem Bildschirm steht: die Schnittscheibe, falls sie eingeschaltet ist, die gewählten Farben, und nichts, falls Sie die Punktwolke ausgeblendet haben. Auf Papier werden die Punkte zu kleinen Quadraten, wobei sich der höchste Punkt je Quadrat durchsetzt; ein Plot enthält höchstens etwa 400.000 davon (eine sehr dichte Punktwolke wird mit größeren Quadraten gedruckt). Die Punktwolke wird nur in der Zeichnung geplottet, an die sie angehängt wurde; sie wird nie im Papierbereich selbst gedruckt, sondern nur über ein Ansichtsfenster.

## Mehrere Scans

Scans aus verschiedenen Positionen lassen sich zu einem Bezugssystem registrieren, mit ICP verfeinern und als eine LAS- oder E57-Datei exportieren: siehe [Mehrere Scans zu einem registrieren](topic:register-scans).
