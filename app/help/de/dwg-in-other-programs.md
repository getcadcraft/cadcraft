---
title: Eine CadCraft-DWG in anderen Programmen öffnen
summary: In welchen Programmen eine von CadCraft gespeicherte DWG geöffnet wurde, was geprüft wird und was zu tun ist, wenn eines davon sich beschwert.
keywords: dwg, in anderen Programmen öffnen, Kompatibilität, lässt sich öffnen, audit, trueview, andere CAD-Programme, dxf, prüfen, als DWG speichern
from: 0f8c15c4
---

## Was CadCraft schreibt

{{ui:Save}} schreibt eine echte DWG in der Version, in der die Zeichnung ankam, oder in der Version, die Sie in {{ui:Save as}} wählen: AutoCAD 2000, 2004, 2007, 2010, 2013 oder 2018. Nichts wird hinter Ihrem Rücken umgewandelt: Der Verlauf listet alles auf, was dabei geändert wurde (zum Beispiel eine echte Farbe, die in einer DWG 2000 als nächstliegende Standardfarbe geschrieben wird).

## Wo sie geöffnet wurde

Jede DWG, die CadCraft schreibt, wird in jeder Version von drei Programmen geöffnet, die nicht CadCraft sind: dem ODA File Converter (der die Datei prüft und nichts darin repariert), LibreDWG und libdxfrw. Ihre Lesung wird mit der von CadCraft verglichen: Objekte, Layer, Blöcke und Attribute, Bemaßungen, Schraffuren, Blätter und ihre Ansichtsfenster.

Das Öffnen von CadCraft-DWG-Dateien in AutoCAD und im kostenlosen DWG TrueView wird unter Windows geprüft, Objektart für Objektart (AUDIT, Layer, Blätter, Bemaßungen, Schraffuren, Attribute, dynamische Blöcke, beschnittene Referenzen, Bilder). Die Ergebnisse werden hier aufgeführt, sobald sie vorliegen.

## Wenn ein anderes Programm sich beschwert

1. Speichern Sie erneut als DXF ({{ui:Save as}} › {{ui:DXF 2000}}) und öffnen Sie diese Datei: Die meisten Programme lesen DXF.
2. Speichern Sie die DWG in einer älteren Version (2013 oder 2010).
3. Teilen Sie uns auf Discord mit, welches Programm und welche Version und was es gemeldet hat; die Datei hilft am meisten.
