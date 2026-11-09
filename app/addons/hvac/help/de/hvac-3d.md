---
title: RLT: Kanalstränge auf der 3D-Registerkarte
summary: Jeder Kanalstrang ist auch ein Körper auf der 3D-Registerkarte von CadCraft, aus demselben Strang erstellt und beim Zeichnen aktuell gehalten.
keywords: 3D, Körper, Modell, Kanalnetz, Höhe, Kanalunterkante, Kennzeichen, GLB, Koordination
from: e5774345
---

## Derselbe Strang in 3D

Jeder Kanalstrang wird als ein geschlossener Körper auf der Registerkarte {{ui:3D}} erstellt, auf seiner Höhe (der Unterkante des Kanals), mit seinen Bögen, Übergängen und Abzweigen. Er wird im selben Schritt neu gezeichnet, wenn sich der Strang ändert, sodass {{ui:Rückgängig}} die 2D- und die 3D-Zeichnung gemeinsam zurücknimmt.

Die Körper tragen die Kennzeichnung `HVAC ductwork`: Über die Kennzeichnungen der Registerkarte {{ui:3D}} lassen sie sich alle gemeinsam ausblenden oder einblenden. Jedes System hat eine eigene Farbe.

## Neu aufbauen

{{cmd:DUCT3D}} baut die Körper aller Stränge neu auf und entfernt Körper, deren Strang nicht mehr existiert. Verwenden Sie den Befehl nach dem Öffnen einer Zeichnung, die ohne das RLT-Add-on bearbeitet wurde (ihre Stränge wurden verschoben, ihre Körper aber nicht), oder nachdem Sie die Körper wieder eingeschaltet haben.

Schalten Sie bei sehr großen Zeichnungen die Körper in {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:RLT}} › {{ui:Körper auf der 3D-Registerkarte}} aus; die bereits vorhandenen Körper bleiben, bis Sie sie auf der 3D-Registerkarte löschen.

## Ohne das Add-on

Ein Körper ist eine gewöhnliche 3D-Gruppe. Er wird mit der Zeichnung gespeichert (DWG und DXF), wird auf der 3D-Registerkarte angezeigt und wird zusammen mit allem anderen nach GLB, OBJ und STL exportiert, mit oder ohne eingeschaltetes RLT.
