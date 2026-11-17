---
title: Geschosse in einer Zeichnung stapeln
summary: Zeichnen Sie das erste Obergeschoss über dem Erdgeschoss mit denselben Koordinaten und schalten Sie jedes Geschoss aus, ohne Xrefs.
keywords: Geschoss, Geschosse, FLOORS, FLR, FLOOR, FLOORLAYERS, Stockwerk, Ebene, stapeln, Entwurfs-Layer, Modellbereich, Unterlage, xref
from: 7440fc87
---

Geschosse erlauben es, Pläne im selben Modellbereich zu stapeln. Jedes Geschoss hat seine eigenen Objekte, und Layer gelten über alle Geschosse hinweg. Eine Wand auf `P-Walls` kann auf jedem Geschoss liegen.

## Start

Geben Sie `FLOORS` (`FLR`) ein oder wählen Sie {{ui:Floors…}} im Menü {{ui:More}} der Gruppe {{ui:View}} und dann {{ui:Start with floors}}. Was Sie bisher gezeichnet haben, liegt auf dem Erdgeschoss.

## Auf einem Geschoss zeichnen

Wählen Sie das Geschoss mit dem runden Schalter im Panel. Neue Objekte landen darauf.

Andere eingeblendete Geschosse werden darunter abgeblendet angezeigt. Sie können auf sie fangen, damit das erste Geschoss am Erdgeschoss ausgerichtet wird, aber Sie können sie nicht ändern, bis Sie sie zum aktiven Geschoss machen. Das Auge schaltet ein Geschoss aus. Wände verbinden sich nur mit Wänden auf demselben Geschoss.

Um ein Geschoss aus dem darunterliegenden zu beginnen, wählen Sie aus, was Sie möchten, wählen Sie das Geschoss im Panel und wählen Sie {{ui:Copy there}}.

## Geschosse auf Blätter setzen

Wählen Sie ein Ansichtsfenster auf einem Blatt und wählen Sie sein Geschoss unter {{ui:Floor shown}} in den Eigenschaften. Ein Ansichtsfenster ohne gewähltes Geschoss zeigt alle eingeschalteten Geschosse.

## Die Datei an andere senden

Andere CAD-Programme kennen keine Geschosse und zeigen daher alle Geschosse zusammen. Wählen Sie vor dem Senden einer Datei {{ui:Turn floors into layers}} im Panel oder geben Sie `FLOORLAYERS` ein. Jedes Objekt wandert auf einen Layer, der nach seinem Geschoss benannt ist, etwa `Ground floor-P-Walls`, sodass Sie jedes Geschoss weiterhin ausschalten können. Rückgängig nimmt es zurück. CadCraft behält die Geschosse in der DWG- oder DXF-Datei, die es speichert.
