---
title: Konstruktionslinien und Strahlen
summary: Linien zeichnen, die ohne Ende weiterlaufen (XLINE) oder von einem Punkt aus in eine Richtung (RAY), um Dinge auszurichten, und sie zu gewöhnlichen Linien stutzen.
keywords: xline, ray, Konstruktionslinie, Konstruktionslinien, unendliche Linie, Hilfslinie, Referenzlinie, Winkelhalbierende, Versatzlinie, Layoutlinien, xl
from: b6c398bc
---

## Was Sie lernen

Wie Sie Konstruktionslinien zeichnen, um beim Zeichnen Dinge auszurichten: durch zwei Punkte, waagerecht oder senkrecht, in einem Winkel, genau mittig zwischen zwei Richtungen oder in einem festen Abstand zu einer Linie. Und wie Sie sie zu gewöhnlichen Linien stutzen, wenn sie ihren Dienst getan haben.

## Zwei Arten

- Eine **Konstruktionslinie** ({{cmd:XLINE}}) läuft in beide Richtungen ohne Ende weiter.
- Ein **Strahl** ({{cmd:RAY}}) beginnt an einem Punkt und läuft in eine Richtung ohne Ende weiter.

Beide werden über den gesamten Zeichenbereich gezeichnet, unabhängig vom Zoom, im geteilten Bildschirm und in Ansichtsfenstern auf einem Blatt. {{ui:Grenzen}} lässt sie aus, sodass das Zoomen auf die Zeichnung weiterhin auf das passt, was Sie gezeichnet haben.

## Konstruktionslinien zeichnen

1. Klicken Sie auf {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Konstruktionslinie}} oder geben `XL` ein und drücken {{key:Enter}}.
2. Klicken Sie einen Punkt. Jeder weitere Klick fügt eine Konstruktionslinie durch den ersten Punkt und den Punkt hinzu, auf den Sie klicken.
3. Drücken Sie {{key:Enter}}, um abzuschließen.

Statt des ersten Punkts können Sie eine Option eingeben:

| Option | Was sie tut |
|---|---|
| `H` (Horizontal) | Waagerechte Linien, eine durch jeden Punkt, den Sie anklicken. |
| `V` (Vertikal) | Senkrechte Linien durch jeden Punkt. |
| `A` (Winkel) | Linien in einem Winkel, den Sie eingeben (Grad, gegen den Uhrzeigersinn ab der X-Achse), durch jeden Punkt. `R` (Referenz) misst den Winkel ab einer Linie, die Sie wählen. |
| `B` (Halbierung) | Klicken Sie die Ecke, dann einen Punkt entlang einer Seite: Jeder Punkt, den Sie entlang der anderen Seite anklicken, fügt die Linie genau mittig zwischen beiden hinzu. |
| `O` (Versatz) | Geben Sie einen Abstand ein, wählen eine Linie und klicken dann auf die Seite: eine Konstruktionslinie in diesem Abstand dazu, parallel. `T` (Durch) setzt sie stattdessen durch einen Punkt, den Sie anklicken. Der Abstand wird für das nächste Mal gemerkt. |

## Strahlen zeichnen

1. Klicken Sie auf {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Strahl}} oder geben `RAY` ein und drücken {{key:Enter}}.
2. Klicken Sie, wo die Strahlen beginnen.
3. Klicken Sie für jeden Strahl einen Punkt, durch den er laufen soll. Drücken Sie {{key:Enter}}, um abzuschließen.

## An ihnen fangen und sie stutzen

Konstruktionslinien und Strahlen rasten auf Nächster Punkt, Lot und Schnittpunkt ein. Sie haben keine Enden und keine Mitte, daher finden Endpunkt und Mittelpunkt auf ihnen nichts.

Sie werden wie andere Linien in {{cmd:TRIM}} und {{cmd:BREAK}} geschnitten und schneiden selbst:

- Stutzen Sie ein Ende von einer Konstruktionslinie ab, wird sie zu einem Strahl, der am Schnitt beginnt.
- Stutzen Sie den entfernten Teil eines Strahls ab, wird er zu einer gewöhnlichen Linie.
- Brechen Sie eine Konstruktionslinie an einem Punkt, erhalten Sie zwei Strahlen.

{{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:OFFSET}} und {{cmd:STRETCH}} funktionieren auch mit ihnen. Eine Fensterauswahl wählt sie nie aus, weil kein Fenster eine endlose Linie ganz fassen kann; ein Kreuzfenster oder ein Klick schon.

:::note
Eine DWG (jede Version) und eine DXF 2000 speichern sie als Konstruktionslinien. DXF R12 kennt sie nicht, dort werden sie zu Linien über die gesamte Zeichnung, und das Speichern meldet es. Ein Plot oder eine PDF zeichnet sie nur über das, was gedruckt wird.
:::
