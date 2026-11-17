---
title: Zeichnungsgrenzen festlegen
summary: LIMITS legt ein Rechteck für die Zeichnung fest: Das Raster füllt es aus, ZOOM Alle zeigt es, und bei eingeschalteten Grenzen werden Punkte außerhalb abgelehnt. Sie werden in DWG- und DXF-Dateien gespeichert.
keywords: Grenzen, Zeichnungsgrenzen, LIMITS, LIMMIN, LIMMAX, LIMCHECK, Raster, außerhalb der Grenzen, Blattgröße, Zeichenbereich, Zoom Alle, Begrenzung
from: 9e97b30d
---

**Zeichnungsgrenzen** sind ein Rechteck, das angibt, wie groß die Zeichnung werden soll: der Bereich, in dem Sie zeichnen wollen, etwa ein Blatt 420 × 297. Eine neue Zeichnung hat keine, daher sind Raster und Zeichenbereich wie bisher unbegrenzt.

## Festlegen

Geben Sie {{cmd:LIMITS}} ein und antworten Sie:

- `Specify lower left corner or [ON/OFF] <0,0>`: einen Punkt oder {{key:Enter}}, um den aktuellen beizubehalten.
- `Specify upper right corner <420,297>`: einen Punkt oder {{key:Enter}}, um den aktuellen beizubehalten. Er muss oberhalb und rechts von der ersten Ecke liegen.

Oder geben Sie bei der ersten Frage `ON` oder `OFF` ein, um die Prüfung ein- oder auszuschalten, ohne das Rechteck zu ändern. Das Festlegen der Ecken ist ein Schritt für Rückgängig, ebenso jedes ON und OFF.

## Wirkung

- **Das Raster füllt die Grenzen** und endet an ihrem Rand. Es ist ein Bild des Bereichs; schalten Sie {{ui:Grid}} ein, um es zu sehen.
- **ZOOM Alle** ({{cmd:ZOOM}}, dann {{ui:All}}) zeigt die Grenzen und die Zeichnung zusammen; {{ui:Extents}} zeigt weiterhin nur die Zeichnung.
- **Bei eingeschalteten Grenzen** wird ein Punkt, den Sie eingeben oder anklicken und der außerhalb liegt, mit `**Outside limits` abgelehnt, und die Eingabeaufforderung bleibt. Das betrifft die Befehle, die Objekte erzeugen: {{cmd:LINE}}, {{cmd:PLINE}}, {{cmd:CIRCLE}}, {{cmd:ARC}}, {{cmd:RECTANG}}, {{cmd:POLYGON}}, {{cmd:ELLIPSE}}, {{cmd:SPLINE}}, {{cmd:POINT}}, {{cmd:TEXT}}, {{cmd:MTEXT}}, {{cmd:INSERT}}, die Bemaßungsbefehle und einige weitere. Befehle, die nur verschieben, auswählen oder messen, sind nicht begrenzt, ebenso wenig das Einfügen, ein Ziehen am Griff oder ein Objekt, das eine LISP-Routine erzeugt: Die Grenzen sind eine Hilfe zum Zeichnen, keine Mauer. Bei ausgeschalteten Grenzen wird nichts abgelehnt.
- Objekte, die bereits außerhalb liegen, bleiben, wo sie sind.

## In Dateien und LISP

Sie werden in DWG und DXF als `$LIMMIN`, `$LIMMAX` und `$LIMCHECK` gespeichert. Eine Datei eines anderen Programms, die nur die Standardgrenzen dieses Programms hat (0,0 bis 12,9 oder 420,297, Prüfung aus), wird ohne Grenzen geöffnet, damit ihr Raster nicht in ein kleines Rechteck gezwängt wird; eine Datei mit eigenen Grenzen oder eingeschalteter Prüfung behält sie. In LISP lesen `(getvar "LIMMIN")`, `LIMMAX` und `LIMCHECK` sie, und `setvar` schreibt sie, als ein Schritt für Rückgängig.

Die Grenzen gehören zum Modell. Ein Blatt (ein Layout) hat seine eigene Papiergröße.
