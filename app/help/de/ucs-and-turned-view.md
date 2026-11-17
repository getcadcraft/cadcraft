---
title: Ansicht drehen und eigene Koordinaten (BKS) verwenden
summary: Die Ansicht um 90° oder in einen beliebigen Winkel drehen, ohne etwas in der Zeichnung zu verschieben, und ein Benutzerkoordinatensystem (BKS) festlegen, damit Punkte, Ortho, Polare Spur, Raster und neuer Text den eigenen Achsen eines Gebäudes folgen.
keywords: ucs, BKS, Benutzerkoordinatensystem, Plan, Ansicht drehen, Ansichtsdrehung, ucs z, ucs 3point, ucs object, ucs world, benanntes BKS, ucsfollow, turnleft, turnright, turnworld, schräges Gebäude, gedrehtes Raster
from: 6f152c65
---

## Was Sie lernen

Wie Sie eine Zeichnung gedreht betrachten, sodass ein im Winkel gezeichnetes Gebäude auf dem Bildschirm rechtwinklig erscheint, und wie Sie Punkte entlang seiner eigenen Achsen eingeben. Dabei bewegt sich nichts in der Zeichnung: Objekte behalten ihre Koordinaten, eine Drehung ist keine Bearbeitung, und die Zeichnung wird nicht als geändert markiert.

## Die Ansicht um ein Viertel drehen

1. Klicken Sie auf {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Ansicht um 90° nach links drehen}} oder {{ui:Ansicht um 90° nach rechts drehen}}.

Die Zeichnung dreht sich auf dem Bildschirm um die Mitte des Zeichenbereichs. Wiederholen Sie es, um weiterzudrehen.

2. Klicken Sie auf {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Zurück zur Welt}}, um sie wieder auszurichten.

Die Befehle dahinter sind {{cmd:TURNLEFT}}, {{cmd:TURNRIGHT}} und {{cmd:TURNWORLD}}. Um einem davon eine Taste zu geben, fügen Sie mit {{cmd:ALIASEDIT}} eine Zeile wie `TL=TURNLEFT` zu Ihren Aliasen hinzu.

## An einem schrägen Gebäude ausrichten

1. Geben Sie `UCS` ein und drücken Sie {{key:Enter}}, dann `OB` und {{key:Enter}}.
2. Klicken Sie auf eine Wandlinie nahe dem Ende, das der Ursprung sein soll.

Das BKS beginnt jetzt an diesem Ende, mit seiner X-Achse entlang der Wand, und die Ansicht dreht sich, sodass die Wand auf dem Bildschirm waagerecht liegt. Das Achsensymbol in der unteren linken Ecke zeigt, wohin die BKS-Achsen zeigen.

3. Zeichnen Sie wie gewohnt. Bei gesetztem BKS:
   - `x,y` und `@dx,dy` werden entlang der BKS-Achsen gemessen; `d<a` misst den Winkel von der BKS-X-Achse.
   - {{ui:Ortho}}, Polare Spur und das Raster folgen den BKS-Achsen, und ebenso das Fadenkreuz.
   - Neuer Text und neue Absätze verlaufen entlang der BKS-X-Achse; die Waagerechte und Senkrechte von {{cmd:DIMLINEAR}} folgen ihr ebenfalls.
   - Die Koordinaten in der Statusleiste und von {{cmd:ID}} sind BKS-Koordinaten.
4. Um bei gesetztem BKS einen Weltpunkt einzugeben, setzen Sie `*` davor: `*0,0` oder `@*100,0`.
5. Geben Sie `UCS` ein, {{key:Enter}}, dann noch einmal {{key:Enter}}, um zur Welt zurückzukehren.

## Andere Wege, ein BKS festzulegen

An der Aufforderung von {{cmd:UCS}}:

| Sie geben ein | Was es bewirkt |
|---|---|
| einen Punkt | Ein neuer Ursprung; dann klicken Sie einen Punkt auf der neuen X-Achse an oder drücken {{key:Enter}}, um den Winkel zu behalten |
| `Z` | Dreht das BKS um seinen Ursprung um einen Winkel, den Sie eingeben (Grad, gegen den Uhrzeigersinn) oder wählen |
| `3` (3point) | Ein Ursprung, ein Punkt entlang der positiven X-Achse und ein Punkt auf der positiven Y-Seite |
| `OB` (OBject) | Aus einer Linie, einem Bogen, einem Kreis, einem Polylinien-Segment, Text, einer Blockreferenz, einem Punkt oder einer Konstruktionslinie |
| `P` (Previous) | Das BKS vor diesem (die letzten zehn bleiben erhalten, solange die Zeichnung geöffnet ist) |
| `W` (World) | Zurück zur Welt |
| `NA` (NAmed) | `S` speichert das aktuelle BKS unter einem Namen, `R` stellt eines wieder her, `D` löscht eines, `?` listet sie auf |

Jede Änderung dreht die Ansicht, sodass die neue BKS-X-Achse waagerecht liegt. {{cmd:PLAN}} dreht die Ansicht, ohne das BKS zu ändern: {{key:Enter}} für das aktuelle BKS, `U` für ein gespeichertes, `W` für die Welt.

## Gut zu wissen

- Jeder Teilbereich eines geteilten Bildschirms behält seine eigene Drehung. Das BKS gehört zur Zeichnung.
- Blätter arbeiten in Papierkoordinaten; setzen Sie ein BKS auf der Registerkarte {{ui:Model}} oder innerhalb eines Ansichtsfensters.
- Auswahlfenster, die in einer gedrehten Ansicht gezogen werden, wählen aus, was auf dem Bildschirm darin liegt.
- LISP-Routinen erhalten Punkte im BKS von getpoint, können UCSORG, UCSXDIR, UCSYDIR und VIEWTWIST lesen, und `trans` wandelt zwischen Welt, BKS und Anzeige um.

:::note
Eine gespeicherte Datei behält das BKS und die Drehung der Ansicht in einer späteren Version; bis dahin bleiben sie erhalten, solange die Zeichnung geöffnet ist.
:::
