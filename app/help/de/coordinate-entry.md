---
title: Eingabe von Koordinaten und Abständen
summary: Alle Möglichkeiten, einen Punkt, einen Abstand, einen Winkel oder eine Zahl an der CadCraft-Befehlszeile einzugeben, mit Beispielen.
keywords: dynamische Eingabe, dyn, f12, tab, Koordinaten, absolut, relativ, polar, @, Direkteingabe, Winkel, Grad, letzter Punkt, letzterPunkt, Punkte eingeben, Eingabe, Arithmetik, Berechnung, Rechner, cal, plus, Bruch, Ausdruck
from: 7de9252d
---

## Punkte

Wenn die Befehlszeile einen Punkt verlangt, geben Sie einen der folgenden Werte ein und drücken Sie {{key:Enter}}:

| Eingabe | Bedeutung | Beispiel |
|---|---|---|
| `x,y` | Absolut: gemessen vom Ursprung 0,0 | `2500,1200` |
| `#x,y` | Ebenfalls absolut (aus Gewohnheit akzeptiert) | `#2500,1200` |
| `@dx,dy` | Relativ: quer und nach oben vom letzten Punkt | `@600,0` |
| `@d<a` | Relativ polar: Abstand und Winkel vom letzten Punkt | `@1500<45` |
| `d<a` | Absolut polar: Abstand und Winkel vom Ursprung | `3000<90` |
| eine einzelne Zahl | Direkter Abstand: so weit vom Basispunkt, in Richtung des Fadenkreuzes | `1200` |
| `*x,y`, `@*dx,dy` | Weltkoordinaten, während ein BKS eingestellt ist | `*0,0` |

Bei eingestelltem BKS ({{cmd:UCS}}) werden `x,y`, `@dx,dy` und der Winkel in `d<a` entlang der BKS-Achsen gemessen. Siehe [Ansicht drehen und eigene Koordinaten verwenden](topic:ucs-and-turned-view).

Oder klicken Sie in die Zeichnung; Objektfang und {{ui:Ortho}} gelten für Mausklicks.

Regeln:

- Ein Komma trennt X von Y. Dezimalstellen werden mit einem Punkt geschrieben: `1250.75,300`.
- Negative Werte gehen nach links und nach unten: `@-600,0`.
- Geben Sie keine Leerzeichen ein: {{key:Space}} sendet die Zeile, wie {{key:Enter}}.
- Zahlen dürfen Exponenten enthalten: `1e3` ist 1000.
- Einheiten werden nicht eingegeben, und es gibt keine Fuß-und-Zoll-Schreibweise. Geben Sie einfache Zahlen in Zeicheneinheiten ein.

## Der letzte Punkt

`@` zählt vom **letzten Punkt, den Sie bei einer Punktabfrage angegeben haben**, in jedem Befehl: ein Klick, ein Fangpunkt oder ein eingegebener Punkt. Er bleibt zwischen Befehlen erhalten, daher können Sie eine neue Linie `@0,500` vom Ende der letzten beginnen. Bevor Sie einen Punkt angegeben haben, zählt `@` ab 0,0.

Einige Stellen, an denen das wichtig ist:

- Bei {{cmd:COPY}} ist nach der ersten Kopie der letzte Punkt der Punkt dieser Kopie. `@600,0` zweimal eingegeben platziert Kopien in 600 und 1200 vom Original.
- Nachdem Sie eine Bemaßung platziert haben, ist der letzte Punkt die Stelle, an der Sie die Maßlinie platziert haben, nicht das Ende der Bemaßung.

Im Zweifel verwenden Sie einen absoluten Punkt, einen Fangpunkt oder einen direkten Abstand.

## Direkte Abstandseingabe

Eine einzelne Zahl ist ein Abstand vom **Basispunkt** des Befehls (dem Punkt, an dem das Gummiband beginnt) in Richtung des Fadenkreuzes:

1. Bewegen Sie das Fadenkreuz in die gewünschte Richtung.
2. Geben Sie den Abstand ein und drücken Sie {{key:Enter}}.

Wenn {{ui:Ortho}} eingeschaltet ist, rastet die Richtung auf waagerecht oder senkrecht ein. Damit ist dies der schnellste Weg, rechtwinklige Wände zu zeichnen. Gibt es keinen Basispunkt oder liegt das Fadenkreuz genau darauf, wird die Zahl mit „Punkt oder Optionsschlüsselwort erforderlich.“ abgelehnt.

## Winkel

- In Grad, als einfache Zahl: `30`, `-45`, `112.5`.
- Gemessen gegen den Uhrzeigersinn ab der positiven X-Richtung (nach rechts): 0 ist rechts, 90 oben, 180 links, 270 oder -90 unten.
- Wo ein Winkel verlangt wird (Drehung, Textwinkel), können Sie auch klicken: Der Winkel wird vom Basispunkt zum Klickpunkt gemessen. Solange noch kein Basispunkt existiert, setzt der erste Klick ihn, und die Befehlszeile fragt nach einem zweiten Punkt.

## Abstände

Wo ein Abstand verlangt wird (Radius, Versatz, Texthöhe, Skalierungsfaktor):

- geben Sie eine positive Zahl ein (in einer Zeichnung mit Fuß und Zoll auch `12'6"` oder `6-1/2`: siehe [Fuß und Zoll](topic:units-papers-scales#feet-and-inches-and-fractions)), oder
- klicken Sie einen Punkt: den Abstand vom Basispunkt des Befehls zu diesem Punkt, oder
- klicken Sie zwei Punkte, wenn kein Basispunkt vorhanden ist: Die Befehlszeile wechselt zu `Specify second point`.

„Erforderlich: eine positive Zahl oder zwei Punkte.“ bedeutet, dass der Wert keine Zahl oder negativ war.

## Rechnen in einem eingegebenen Wert

Überall, wo eine Länge, eine Koordinate, ein Winkel oder eine Zahl eingegeben wird (Befehlszeile, dynamische Eingabe, Eingabefelder in der Palette Eigenschaften und Dialogfelder), können Sie eine Berechnung mit `+`, `-`, `*`, `/` und Klammern eingeben, statt sie vorher auszurechnen:

| Eingabe | Ergibt |
|---|---|
| `4+7/16` | 4.4375 |
| `12'6"+3/4"` | 12'-6 3/4" (in einer Zeichnung mit Fuß und Zoll) |
| `(24'-0")/3` | 8'-0" |
| `2*450mm` | 900 mm, in den Einheiten der Zeichnung (wenn deren Einheiten eingestellt sind) |
| `@4+7/16,0` | ein Punkt 4.4375 rechts vom letzten |
| `360/7` | ein Winkel von 51.43 Grad |

- Ein Bindestrich in einer Länge gehört weiterhin dazu: `4-7/16` ist 4 7/16 und `24'-6"` ist 24 Fuß 6 Zoll. Um nach einer Fußangabe zu subtrahieren, schließen Sie die Länge zuerst ab, `24'-0"-6"`, oder setzen Sie die Berechnung in Klammern mit Leerzeichen um den Bindestrich, `(24' - 6")` (innerhalb von Klammern ist ein Leerzeichen ein Leerzeichen; sonst drückt es {{key:Enter}}).
- Eine einfache Zahl, die zu einer Länge addiert wird, gilt in Zeicheneinheiten; Multiplizieren oder Dividieren mit einer Zahl skaliert die Länge. Zwei Längen miteinander multipliziert ergeben eine Fläche, daher wird `2'*3'` abgelehnt.
- `abs`, `round`, `ceil` und `floor` funktionieren ebenfalls: `round(10/3)`.
- Eine Berechnung, die nicht gelesen werden kann, wird mit Angabe der Fehlerstelle abgelehnt, zum Beispiel „Die Berechnung endet zu früh (Zeichen 3): Ein Wert fehlt.“ Nichts wird als 0 gelesen. {{cmd:CAL}} gibt den Wert einer Berechnung aus.

## Dynamische Eingabe

{{ui:DYN}} ({{key:F12}}, in der Statusleiste) zeigt die Werte neben dem Fadenkreuz, während ein Befehl einen Punkt verlangt.

- Ohne Basispunkt (der erste Punkt einer Linie) sind die beiden Felder **X** und **Y**.
- Danach sind es der **Abstand** und der **Winkel** vom letzten Punkt.

Die Eingabe erfolgt weiterhin in der Befehlszeile; das Feld neben dem Fadenkreuz zeigt sie an, und das Gummiband folgt ihr.

1. Geben Sie einen Wert ein: Er geht in das markierte Feld.
2. Drücken Sie {{key:Tab}} (oder ein Komma nach X). Der Wert wird fixiert (fett dargestellt), und das nächste Feld wird markiert. Ein fixierter Abstand hält das Gummiband so lang, während Sie mit der Maus zielen.
3. Geben Sie den zweiten Wert ein oder zielen Sie nur, und drücken Sie {{key:Enter}}. `50`, {{key:Tab}}, `90`, {{key:Enter}} zeichnet 50 senkrecht nach oben vom letzten Punkt.

Wenn Sie nach einem Wert ohne {{key:Tab}} {{key:Enter}} drücken, wirkt dies wie eine direkte Abstandseingabe. Fuß und Zoll funktionieren auch in den Feldern (`12'6"`). Abstands- und Winkelabfragen (der Radius eines Kreises, eine Drehung) zeigen ihren Wert ebenfalls neben dem Fadenkreuz.

## Optionen und Vorgaben

- Optionen stehen in eckigen Klammern. Geben Sie die Großbuchstaben einer Option ein (`D` für `[Durchmesser]`, `CL` für `[Schließen (CL)]`) und drücken Sie {{key:Enter}}. Längere Wortanfänge funktionieren ebenfalls (`DIA`).
- Eine Vorgabe steht in spitzen Klammern, zum Beispiel `<500>`. Drücken Sie {{key:Enter}} oder klicken Sie mit der rechten Maustaste, um sie zu übernehmen.

## Andere Tastaturlayouts und der Ziffernblock

Befehlsnamen, Kurznamen und Optionsbuchstaben sind lateinische Buchstaben. Ist ein griechisches, kyrillisches (Russisch, Ukrainisch, Belarussisch, Serbisch, Mazedonisch, Bulgarisch), hebräisches, arabisches, persisches, thailändisches oder koreanisches Layout aktiv, müssen Sie das Layout nicht umschalten: Ist das eingegebene Wort so, wie es steht, kein Befehl, Kurzname oder keine Option, liest CadCraft es anhand der gedrückten Tasten. Die Taste mit dem `L` auf einer lateinischen Tastatur startet weiterhin `LINE`, und die Taste `C` antwortet weiterhin auf die Option Schließen, egal welcher Buchstabe das Layout darauf legt. Die Liste passender Befehle über der Befehlszeile folgt derselben Regel. Text, den Sie dort eingeben, wo ein Befehl Text verlangt (der Inhalt von {{cmd:TEXT}}, ein Name), wird nie verändert.

Bei Layouts, deren Dezimaltaste des Ziffernblocks ein Komma liefert, gibt diese Taste in der Befehlszeile und in Zahlenfeldern einen Dezimalpunkt ein, sodass `12.5` über den Ziffernblock eingegeben werden kann. Die Komma-Taste der Haupttastatur trennt weiterhin `x,y`.

Beide Funktionen lassen sich in {{ui:Einstellungen}} ausschalten: {{ui:Commands on a non-Latin keyboard layout}} und {{ui:Keypad decimal key}}.

## Die Koordinatenanzeige

Die Statusleiste zeigt X und Y des Fadenkreuzes (im BKS, wenn eines eingestellt ist), nach Fang und Ortho. Hat ein Befehl einen Basispunkt, ergänzt sie `Δ` mit Abstand und Winkel von diesem Punkt, zum Beispiel `Δ 1500 < 30°`: die Zahlen, die Sie als `@1500<30` eingeben würden.

Verwenden Sie {{cmd:ID}}, um die Koordinaten eines Punktes auszugeben, und {{cmd:DIST}}, um zwischen zwei Punkten zu messen.
