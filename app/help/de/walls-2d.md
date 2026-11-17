---
title: Intelligente Wände, Türen und Fenster in 2D zeichnen
summary: Wände wie eine Polylinie zeichnen, sauber verbinden und Türen und Fenster einsetzen, die sich mit der Wand bewegen. Alles in 2D, ohne 3D-Modell.
keywords: wand, wände, WALL, WA, tür, DOOR, DR, fenster, WINDOW, WN, DELOPENING, intelligente wand, grundriss, drehflügel, anschlag, öffnung
from: 45845d49
---

Wände sind hier 2D-Zeichenobjekte. Sie erzeugen kein 3D-Modell, daher bleibt ein Plan so leicht wie eine Linienzeichnung. Für ein Gebäudemodell verwenden Sie BimCraft.

## Wände zeichnen

Tippen Sie `WALL` (`WA`) ein oder wählen Sie {{ui:Wand}} im Menü {{ui:Mehr}} der Gruppe {{ui:Zeichnen}}, und klicken Sie Punkte an, wie Sie es bei einer Polylinie tun würden. Drücken Sie {{key:Enter}}, um abzuschließen, oder tippen Sie `C`, um den Raum zu schließen.

- `T` legt die Dicke fest.
- `J` legt fest, woran sich Ihre Klicks orientieren: an der Mitte der Wand oder an ihrer linken bzw. rechten Fläche.
- `F` legt die Füllung fest: keine, Vollfläche oder Schraffur.

Ecken werden automatisch auf Gehrung gesetzt. Endet eine Wand innerhalb der Dicke einer anderen Wand, verbindet sie sich mit ihr als sauberes T, und Wände, die sich kreuzen, öffnen sich zueinander. Die Verbindungen werden mit den Wänden gespeichert. Für Rechtecke, Polygone, Bögen, Teilen, Sperren und das Übrige siehe „Wandformen, Schnitte, Versätze und Sperren für 2D-Wände“.

## Türen und Fenster hinzufügen

Tippen Sie `DOOR` (`DR`) oder `WINDOW` (`WN`) und klicken Sie auf eine Wand. Eine Tür öffnet sich zu der Seite der Wand, auf die Sie klicken. `W` legt die Breite fest, `Y` den Typ und `H` die Scharnierseite. Klicken Sie weiter, um weitere zu setzen, und drücken Sie {{key:Enter}}, um abzuschließen. Türen können einflügelig, zweiflügelig, Schiebetüren oder ein offener Durchgang sein. Fenster können feststehend, Drehfenster oder Schiebefenster sein.

## Sie ändern

Wählen Sie eine Wand aus, um ihre Griffe zu sehen:

- Die Endgriffe strecken die Wand. Die daran verbundenen Wände folgen.
- Der mittlere Griff verschiebt die Wand.
- Ein Griff an einer Öffnung schiebt sie entlang der Wand.
- Die Pfeile drehen Scharnier und Öffnungsrichtung einer Tür um.

Die Eigenschaften zeigen Dicke, Füllung und jede Öffnung: Typ, Breite, Position, Scharnier, Öffnungsrichtung, offen oder geschlossen dargestellt und {{ui:Entfernen (R)}}. `DELOPENING` entfernt die Öffnung, die Ihrem Klick am nächsten liegt.

`MOVE`, `ROTATE`, `MIRROR`, `SCALE`, `COPY` und `ERASE` funktionieren wie gewohnt. Türen und Fenster gehen mit ihrer Wand mit, verbundene Wände behalten ihre Verbindungen, und ein Rückgängig macht alles zurück.

## In anderen Programmen

Jede Wand wird als gewöhnlicher Block gespeichert. Andere CAD-Programme zeigen sie daher richtig an und können sie verschieben, sie aber nicht als Wand bearbeiten. `EXPLODE` macht aus einer Wand einfache Linien und Bögen, und sie ist dann keine Wand mehr.
