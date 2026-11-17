---
title: Klassen-Überschreibungen im Ansichtsfenster
summary: Auf einem Blatt eine Klasse in nur einem Ansichtsfenster ausblenden oder ihr eine andere Farbe, Linienstärke oder Füllung geben; das Modell und die anderen Ansichtsfenster bleiben unverändert.
keywords: ansichtsfenster, klassen-überschreibung, ansichtsfenster-überschreibung, klasse im ansichtsfenster ausblenden, blatt, layout, VPLAYER, plotten, Vectorworks
from: c1a2b51f
---

Ein Blatt zeigt oft dasselbe Modell mehrfach: einen Grundriss mit den Möbeln und einen ohne, oder einen Beleuchtungsplan, in dem nur die Leuchten farbig sind. Eine Klassen-Überschreibung im Ansichtsfenster ändert, wie eine [Klasse](topic:classes) **nur in diesem Ansichtsfenster** dargestellt wird.

1. Öffnen Sie das Blatt und wählen Sie ein Ansichtsfenster aus.
2. Öffnen Sie den Bereich Klassen (`CLASSES`) und wählen Sie die Klasse.
3. Setzen Sie unter {{ui:Dieses Ansichtsfenster}} das Häkchen bei {{ui:In diesem Ansichtsfenster ausblenden}} oder legen Sie {{ui:Farbe hier}}, {{ui:Linienstärke hier}} oder {{ui:Füllung hier}} fest.

Die Liste darunter zeigt jede Klasse, die dieses Ansichtsfenster ändert. {{ui:Die Überschreibungen dieses Ansichtsfensters entfernen}} nimmt alle weg. Jede Änderung ist ein Rückgängig-Schritt.

## Was eine Überschreibung ändert

- **Ausblenden** blendet die Klasse und alle Klassen darunter in diesem Ansichtsfenster aus.
- **Farbe, Linienstärke und Füllung** ändern die Objekte der Klasse, deren Wert nicht am Objekt selbst gesetzt ist, also Objekte, die ihn von Klasse oder Layer übernehmen. Ein Objekt mit eigener Farbe behält sie, wie bei einer Layer-Überschreibung im Ansichtsfenster.

Überschreibungen erscheinen auf dem Bildschirm sowie in Plots und PDFs, auch bei einem Blattsatz, der als PDF veröffentlicht wird. Sie wirken zusammen mit den eingefrorenen Layern und Layer-Überschreibungen des Ansichtsfensters.

Überschreibungen werden mit der Zeichnung in DWG und DXF gespeichert (mit der Klassenliste im Block `CADCRAFT_CLASSES`) und liegen beim Öffnen der Datei in CadCraft wieder auf demselben Ansichtsfenster.
