---
title: Peilungen und Winkel in Grad, Minuten, Sekunden eingeben und anzeigen
summary: Geben Sie eine Richtung als Peilung eines Vermessers wie N45°23'30"E ein oder als Grad-Minuten-Sekunden überall dort, wo ein Winkel verlangt wird, und wählen Sie mit AUNITS, wie die Zeichnung Winkel zeigt.
keywords: Peilung, bearing, Peilungen, bearings, Vermesser, surveyor, Quadrantenpeilung, quadrant bearing, N45E, Grad Minuten Sekunden, degrees minutes seconds, DMS, Winkel, angle, Richtung, direction, Grundstück, lot, Grundstücke, lots, anlegen, lay out, Polygonzug, traverse, AUNITS, ANGUNITS, Winkelformat, angle format, polar, direkte Strecke, direct distance, DIST
from: af805567
---

Überall dort, wo CadCraft nach einem **Winkel oder einer Richtung** fragt, können Sie eine **Quadrantenpeilung** oder einen Winkel in **Grad, Minuten und Sekunden** eingeben, ebenso wie eine einfache Gradzahl.

## Peilungen

Eine Peilung nennt Nord oder Süd, einen Winkel bis 90°, dann Ost oder West:

| Sie geben ein | Richtung |
|---|---|
| `N45°23'30"E` oder `N45d23'30"E` | 45°23'30" von Nord in Richtung Ost |
| `S10-30-00W` oder `S 10 30 W` | 10°30' von Süd in Richtung West (Bindestriche oder Leerzeichen zwischen den Teilen) |
| `N45.5E` | 45.5° von Nord in Richtung Ost |
| `N`, `E`, `S`, `W` | genau Nord, Ost, Süd, West |

Buchstaben können in beliebiger Groß- oder Kleinschreibung eingegeben werden. `d` und `°` bedeuten dasselbe; `'` sind Minuten und `"` sind Sekunden.

Um eine Grundstücksgrenze von 20 m Länge bei N45°23'E anzulegen, starten Sie {{cmd:LINE}}, geben den ersten Punkt ein und dann `@20<N45d23'E`. Dasselbe funktioniert bei der Winkelabfrage von {{cmd:ROTATE}} und bei jeder anderen Abfrage, die einen Winkel verlangt, sowie im Winkelfeld der {{ui:Dynamic input}}.

## Grad, Minuten, Sekunden

`45°23'30"`, `45d23'30"`, `45d30'` oder `45d` ist ein Winkel ab der X-Achse, gegen den Uhrzeigersinn. Das `°` oder `d` ist nötig: `45-23-30` wird als Rechnung gelesen (45 − 23 − 30). Minuten und Sekunden müssen unter 60 liegen. Eine einfache Zahl, auch mit Rechnung (`360/7`), funktioniert weiterhin.

## Wie Winkel angezeigt werden

Geben Sie {{cmd:AUNITS}} ein (oder wählen Sie {{ui:Angle format}} unter {{ui:Properties}} › {{ui:Current settings}}) und wählen Sie:

- **Dezimalgrad** (Standard): `44.6083°`.
- **Grad, Minuten, Sekunden**: `44°36'30"`.
- **Peilungen des Vermessers**: `N45°23'30"E`.

Die Genauigkeit richtet sich nach dem, was Sie für {{cmd:AUNITS}} eingeben: 0 zeigt Grad, 2 Minuten, 4 Sekunden, und 5 bis 8 fügen Dezimalstellen der Sekunden hinzu. Das Format erscheint in {{cmd:DIST}}, in der Statusleiste, in der dynamischen Eingabe und in den Verfolgungshinweisen sowie in den Winkelfeldern von {{ui:Properties}} (ein Feld, das Sie bearbeiten, nimmt jede der oben genannten Formen an). Es ist ein Rückgängig-Schritt und wird in DWG- und DXF-Dateien gespeichert (`$AUNITS`, `$AUPREC`); LISP liest und schreibt es als `AUNITS` und `AUPREC`.
