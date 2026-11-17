---
title: Zeichnung mit Abhängigkeiten versehen
summary: Linien waagerecht halten, Enden zusammenhalten und Größen mit geometrischen und Bemaßungs-Abhängigkeiten festlegen, und die Zeichnung der Änderung einer Größe folgen lassen.
keywords: Abhängigkeit, Abhängigkeiten, parametrisch, geomconstraint, gcon, dimconstraint, dcon, gchorizontal, gcvertical, gcparallel, gcperpendicular, gccoincident, gctangent, gcequal, gcfix, gcsymmetric, gccollinear, gcconcentric, dclinear, dchorizontal, dcvertical, dcaligned, dcradius, dcdiameter, dcangular, dcconvert, autoconstrain, delconstraint, constraintbar, cbar, dcdisplay, Freiheitsgrade, vollständig bestimmt
from: f8f21fa4
---

## Was Sie erstellen

Eine Platte, deren Breite Sie an einer einzigen Stelle ändern: Ihre Seiten bleiben rechtwinklig, eine Ecke bleibt an ihrem Platz, und die Höhe bleibt halb so groß wie die Breite.

Abhängigkeiten wirken auf Linien, Polylinien, Kreise, Bögen und Punkte auf der Registerkarte {{ui:Modell}}. Jede, die Sie hinzufügen, ist ein Schritt für {{ui:Rückgängig}}.

## Umriss zeichnen und mit Abhängigkeiten versehen

1. Geben Sie `REC` ein und drücken {{key:Enter}}. Geben Sie `0,0`, {{key:Enter}}, `100,50`, {{key:Enter}} ein.
2. Geben Sie `AUTOCONSTRAIN` ein und drücken {{key:Enter}}. Geben Sie `ALL`, {{key:Enter}} ein, dann noch einmal {{key:Enter}}.

   Der Verlauf meldet „4 Abhängigkeiten angewendet“. Kleine Felder mit **H** und **V** erscheinen neben den Seiten: Das sind die Abhängigkeitsleisten.
3. Geben Sie `GCFIX` ein und drücken {{key:Enter}}. Klicken Sie nahe der unteren linken Ecke. Ein Feld mit ⊕ erscheint: Diese Ecke bleibt an ihrem Platz.

`AUTOCONSTRAIN` fügt Deckungsgleich-Abhängigkeiten dort hinzu, wo sich Enden fast treffen, und horizontale oder vertikale, wo Linien fast waagerecht oder senkrecht verlaufen. Geben Sie an der Eingabeaufforderung `S` ein, um zu ändern, wie nah das sein muss (anfangs 0.05 Zeichnungseinheiten und 1°).

## Maße hinzufügen

1. Geben Sie `DCHORIZONTAL` ein und drücken {{key:Enter}}.
2. Klicken Sie nahe der unteren linken Ecke, dann nahe der unteren rechten Ecke.
3. Klicken Sie unterhalb des Rechtecks für die Maßlinie.
4. Die Eingabeaufforderung zeigt `Dimension text <d1=100>`. Geben Sie `width=120` ein und drücken {{key:Enter}}.

   Das Rechteck ist nun 120 breit, und die Beschriftung lautet `width=120`.
5. Geben Sie `DCVERTICAL` ein und drücken {{key:Enter}}, geben `O` ein und drücken {{key:Enter}}, dann klicken Sie auf die rechte Seite.
6. Klicken Sie rechts daneben, geben `width/2` ein und drücken {{key:Enter}}.

   Es ist 60 hoch. Die Beschriftung lautet `fx: d1=width/2`: Ein Ausdruck steuert sie.

Der Verlauf meldet nun, dass der Umriss vollständig bestimmt ist. Um die Größe zu ändern, ändern Sie `width` (siehe [Parameter und Gleichungen verwenden](topic:parameters)), oder doppelklicken Sie auf die Beschriftung `width=120`, geben einen neuen Wert ein und wählen {{ui:Übernehmen}}.

## Abhängige Objekte verschieben

Verschieben, Drehen, Skalieren, Griffe und der Bereich {{ui:Eigenschaften}} behalten alle Abhängigkeiten bei: Was Sie verschieben, wird festgehalten, und der Rest folgt. Können die Abhängigkeiten nicht folgen, wird die Änderung nicht ausgeführt, und der Verlauf nennt den Grund, zum Beispiel „Nicht ausgeführt: Die Abhängigkeiten halten dieses Objekt an seiner Stelle“. Das Löschen eines Objekts entfernt auch seine Abhängigkeiten.

## Abhängige Objekte spiegeln und stutzen

- {{cmd:MIRROR}} kopiert die Abhängigkeiten zwischen den Objekten, die Sie spiegeln, auf die Kopien. Seiten (auf welcher Seite eine Tangente berührt, zu welcher Seite ein Abstand gemessen wird) werden für die gespiegelte Kopie neu bestimmt, und kopierte Maße erhalten eigene Namen, wie beim Einfügen. Mit `Erase source objects` `Y` bleiben die Abhängigkeiten bei den gespiegelten Objekten. Der Verlauf meldet, wie viele übernommen wurden.
- {{cmd:TRIM}} behält die Abhängigkeiten einer Linie oder eines Bogens am Rest: Eine Abhängigkeit an einem Ende geht an das Stück, das dieses Ende noch hat; eine Richtungsregel ({{ui:Horizontal}}, {{ui:Vertikal}}, {{ui:Parallel}}, {{ui:Senkrecht}}) gilt für jedes Stück, und ein Maß zwischen den beiden äußeren Enden misst sie weiter. Abhängigkeiten, die den abgeschnittenen Teil gehalten haben, oder eine Länge, die der Schnitt verändert hat ({{ui:Gleich}}, der Öffnungswinkel eines Bogens), entfallen. Ein gestutzter Kreis behält seine Abhängigkeiten für Mittelpunkt und Radius. Gestutzte Polylinien verlieren ihre.

## Die Abhängigkeiten

| Befehl | Hält |
|---|---|
| {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}} | eine Linie oder ein Segment waagerecht oder senkrecht (`2P`: zwei Punkte waagerecht oder senkrecht) |
| {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}} | zwei Linien parallel, rechtwinklig oder auf einer Geraden |
| {{cmd:GCCOINCIDENT}} | zwei Punkte zusammen; `O`: ein Punkt auf einer Linie, einem Kreis oder Bogen |
| {{cmd:GCTANGENT}} | eine Linie und ein Kreis oder Bogen, oder zwei davon, berühren einander |
| {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}} | zwei Kreise oder Bögen mit einem Mittelpunkt; zwei Längen oder zwei Radien gleich |
| {{cmd:GCSYMMETRIC}} | zwei Punkte, Linien oder Kreise, gespiegelt an einer Linie |
| {{cmd:GCFIX}} | ein Punkt (klicken Sie nahe daran) oder ein ganzes Objekt (`O`) an seiner Stelle |
| {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}, {{cmd:DCALIGNED}} | einen Abstand |
| {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}, {{cmd:DCANGULAR}} | einen Radius, einen Durchmesser, einen Winkel zwischen zwei Linien oder den Winkel eines Bogens |

{{cmd:GEOMCONSTRAINT}} und {{cmd:DIMCONSTRAINT}} fragen, welche gemeint ist; {{ui:Abhängigkeit}} und {{ui:Bemaßung}} in der Gruppe {{ui:Parametrisch}} führen sie aus, und {{ui:Mehr}} dort listet jede auf. Wo Sie klicken, bestimmt den Teil: Ein Klick nahe einem Ende, der Mitte oder einem Mittelpunkt wählt diesen Punkt; ein Klick auf eine Polylinie wählt das Segment darunter. Das erste Objekt bleibt, und das zweite bewegt sich, bis es es trifft.

Eine Abhängigkeit, die mit anderen in Konflikt steht oder nichts hinzufügt, weil die anderen sie bereits implizieren, wird mit einer Meldung abgelehnt, und nichts bewegt sich.

## Anzeigen, auswählen und entfernen

- Klicken Sie auf ein Feld in einer Abhängigkeitsleiste (oder auf ein Deckungsgleich-Quadrat oder eine Maßbeschriftung), um diese Abhängigkeit auszuwählen; der Verlauf nennt sie. Drücken Sie {{key:Delete}}, um sie zu entfernen.
- {{cmd:DELCONSTRAINT}} entfernt jede Abhängigkeit von den Objekten, die Sie auswählen.
- {{cmd:CONSTRAINTBAR}}: `S` zeigt jede Leiste, `H` blendet sie aus; wählen Sie zuerst Objekte aus, um deren Leisten ein- oder auszublenden. {{ui:Mehr}} hat {{ui:Abhängigkeitsleisten anzeigen}} und {{ui:Abhängigkeitsleisten ausblenden}}.
- {{cmd:DCDISPLAY}} blendet die Bemaßungs-Abhängigkeiten ein oder aus. Sie werden nie gedruckt.
- {{cmd:DCCONVERT}} wandelt Bemaßungen, die auf Linien, Kreisen und Bögen liegen, in Bemaßungs-Abhängigkeiten um.

:::note
Wenn Sie das parametrische Zeichnen von AutoCAD kennen, sind die Befehlsnamen und Eingabeaufforderungen dieselben. Abhängigkeiten und Parameter werden in DWG- und DXF-Dateien in einer Form gespeichert, die andere Programme ignorieren; siehe [Dateien](topic:files#constraints-in-files).
:::
