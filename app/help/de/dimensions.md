---
title: Einen Grundriss bemaßen
summary: Lineare, ausgerichtete, Winkel-, Radius- und Durchmesserbemaßungen hinzufügen, mit Weiterführende Bemaßung und Basislinienbemaßung verketten und den Text überschreiben.
keywords: Bemaßung, dim, dimlinear, dli, dimaligned, dimangular, dimradius, dimdiameter, dimcontinue, dimbaseline, Kette, Reihe, beschriften, Bemaßungswerkzeug, wo, finden, Symbolleiste, messen, mm, cm, m, km, Einheiten
from: 9ee65123
---

## Was Sie erstellen

Einen bemaßten Raum: Gesamtbreite und -höhe, eine Reihe von Bemaßungen entlang einer Wand, eine schräge Wand, eine gebogene Ecke und einen Winkel.

Bevor Sie beginnen, lesen Sie [Bemaßungsgrößen festlegen](topic:dimension-settings), wenn Ihre Zeichnung groß ist: Bemaßungstext ist standardmäßig 2.5 Zeichnungseinheiten hoch, was in einer in Millimetern gemessenen Zeichnung winzig ist. Für die folgenden Schritte geben Sie zuerst `DIMSCALE` ein, drücken {{key:Enter}}, geben `50` ein und drücken {{key:Enter}}.

## Wo die Bemaßungswerkzeuge sind

Mit dem Menüstil CadCraft (dem, mit dem CadCraft startet) befinden sich die Bemaßungswerkzeuge in der Symbolleiste über der Zeichnung, in der Gruppe {{ui:Beschriften}}: {{ui:Linear}}, {{ui:Ausgerichtet}}, {{ui:Winkel}}, {{ui:Radius}} und {{ui:Durchmesser}}. Das Menü {{ui:Mehr}} der Gruppe hat {{ui:Weiterführende Bemaßung}} und {{ui:Basislinienbemaßung}}. Halten Sie den Zeiger über eine Schaltfläche, um zu sehen, was sie tut.

- Mit dem Menüstil {{ui:Klassisches Zeichnen}} oder {{ui:Menüband}} öffnen Sie die Registerkarte {{ui:Beschriften}}: Die Werkzeuge sind in deren Bereich {{ui:Bemaßungen}}. {{ui:Klassisches Zeichnen}} hat außerdem {{ui:Linear}} auf der Registerkarte {{ui:Start}} unter {{ui:Beschriftung}}. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).
- Oder geben Sie den Befehl an der Befehlszeile unter der Zeichnung ein und drücken {{key:Enter}}: `DLI` (linear), `DAL` (ausgerichtet), `DAN` (Winkel), `DRA` (Radius), `DDI` (Durchmesser), `DCO` (weiterführend), `DBA` (Basislinie).
- Auf einem schmalen Bildschirm ist die Symbolleiste eine Zeile: Wischen Sie seitwärts, um zu {{ui:Beschriften}} zu gelangen.

Um die Längen in Millimetern, Zentimetern, Metern oder Kilometern anzuzeigen, siehe [Bemaßungen in mm, cm, m oder km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

## Etwas zum Bemaßen zeichnen

1. Geben Sie `PL` ein und drücken {{key:Enter}}.
2. Geben Sie `0,0` ein und drücken {{key:Enter}}.
3. Geben Sie `@6000,0` ein und drücken {{key:Enter}}.
4. Geben Sie `@1500<60` ein und drücken {{key:Enter}}.
5. Geben Sie `@0,2700` ein und drücken {{key:Enter}}.
6. Geben Sie `@-6750,0` ein und drücken {{key:Enter}}.
7. Geben Sie `C` ein und drücken {{key:Enter}}. Der Umriss schließt sich.
8. Geben Sie `C` ein und drücken {{key:Enter}}, um einen Kreis zu beginnen.
9. Klicken Sie im Raum, abseits der Wände, für den Mittelpunkt.
10. Geben Sie `600` ein und drücken {{key:Enter}}. Das ist eine Stütze.
11. Klicken Sie auf {{ui:Grenzen}}.

## Linear: waagerecht oder senkrecht

1. Geben Sie `DLI` ein und drücken {{key:Enter}}.
2. Bei `Specify first extension line origin` rasten Sie auf die untere linke Ecke ein (Endpunkt) und klicken.
3. Bei `Specify second extension line origin` rasten Sie auf die untere rechte Ecke ein und klicken.
4. Bewegen Sie das Fadenkreuz unterhalb des Raums. Die Bemaßung folgt, waagerecht.
5. Klicken Sie, um die Maßlinie zu platzieren.

Der Verlauf meldet `Dimension text = 6000`.

Wo Sie die Linie platzieren, bestimmt die Richtung: Unterhalb oder oberhalb ergibt eine waagerechte Bemaßung, links oder rechts eine senkrechte. Um es zu erzwingen, geben Sie vor dem Platzieren `H` (horizontal), `V` (vertikal) oder `R` (gedreht, dann ein Winkel) ein.

:::tip
Drücken Sie an der ersten Eingabeaufforderung {{key:Enter}}, statt einen Punkt zu wählen, und klicken dann eine Linie, einen Bogen, einen Kreis oder ein Polyliniensegment an. CadCraft nimmt beide Enden für Sie.
:::

## Weiterführend: eine Reihe von Bemaßungen

{{cmd:DIMCONTINUE}} ({{ui:Beschriften}} › {{ui:Mehr}} › {{ui:Weiterführende Bemaßung}}, oder `DCO`) setzt von der letzten linearen oder ausgerichteten Bemaßung fort, die Sie erstellt haben, wobei jede neue dort beginnt, wo die letzte endete.

1. Geben Sie `DLI` ein und drücken {{key:Enter}}.
2. Geben Sie `0,0` ein und drücken {{key:Enter}} für den ersten Ursprung.
3. Geben Sie `2000,0` ein und drücken {{key:Enter}} für den zweiten Ursprung.
4. Klicken Sie unterhalb des Raums, um sie zu platzieren.
5. Geben Sie `DCO` ein und drücken {{key:Enter}}.
6. Geben Sie `4500,0` ein und drücken {{key:Enter}}. Eine zweite Bemaßung folgt auf die erste, auf derselben Linie.
7. Rasten Sie auf die untere rechte Ecke ein und klicken. Eine dritte schließt die Reihe ab.
8. Drücken Sie {{key:Enter}}, um den Befehl zu beenden.

:::note
Hier sind die Punkte absichtlich als absolute Koordinaten eingegeben. Ein `@`-Punkt zählt ab dem letzten Punkt, den Sie angegeben haben, und der letzte Punkt ist dort, wo Sie die vorherige Maßlinie platziert haben, nicht das Ende der Bemaßung. Absolute Punkte, Fänge oder ein nackter Abstand bei eingeschaltetem {{ui:Ortho}} sind in einer Bemaßungsreihe sicherer.
:::

Geben Sie `U` ein und drücken {{key:Enter}}, um die letzte Bemaßung in der Reihe zurückzunehmen, ohne den Befehl zu verlassen.

## Basislinie: Bemaßungen von einer Linie aus gestapelt

{{cmd:DIMBASELINE}} ({{ui:Beschriften}} › {{ui:Mehr}} › {{ui:Basislinienbemaßung}}, oder `DBA`) misst jede neue Bemaßung ab dem ersten Ursprung der letzten und staffelt jede ein Stück weiter nach außen.

1. Geben Sie `DLI` ein und drücken {{key:Enter}}.
2. Rasten Sie auf die untere linke Ecke ein und klicken.
3. Rasten Sie auf die obere linke Ecke ein und klicken.
4. Bewegen Sie das Fadenkreuz links vom Raum und klicken. Eine senkrechte Bemaßung erscheint.
5. Geben Sie `DBA` ein und drücken {{key:Enter}}.
6. Rasten Sie auf das obere Ende der 60-Grad-Wand ein (Endpunkt) und klicken. Eine zweite senkrechte Bemaßung erscheint, ein Stück weiter außen als die erste.
7. Drücken Sie {{key:Enter}}, um zu beenden.

## Ausgerichtet: wahre Länge einer geneigten Linie

1. Geben Sie `DAL` ein und drücken {{key:Enter}}.
2. Drücken Sie {{key:Enter}}, um ein Objekt auszuwählen.
3. Klicken Sie die 60-Grad-Wand an.
4. Bewegen Sie nach außen und klicken, um zu platzieren.

Der Text lautet 1500: die wahre Länge, entlang der Wand gemessen.

## Radius und Durchmesser

1. Geben Sie `DRA` ein und drücken {{key:Enter}}.
2. Klicken Sie den Säulenkreis an.
3. Bewegen Sie das Fadenkreuz. Die Führungslinie zeigt vom Mittelpunkt zum Fadenkreuz.
4. Klicken Sie, um den Text zu platzieren.

Der Text lautet `R600`. {{cmd:DIMDIAMETER}} (`DDI`) macht dasselbe mit einem ⌀-Zeichen und dem Durchmesser.

## Winkel

Die Wände hier sind eine Polylinie, daher messen Sie die Ecke über ihren Eckpunkt. (Zwischen zwei getrennten Linien können Sie stattdessen die Linien anklicken.)

1. Geben Sie `DAN` ein und drücken {{key:Enter}}.
2. Bei `Select arc, circle or line, or Enter for a vertex` drücken Sie {{key:Enter}}.
3. Bei `Specify angle vertex` rasten Sie auf die untere rechte Ecke ein und klicken.
4. Bei `Specify first angle endpoint` rasten Sie auf die untere linke Ecke ein und klicken.
5. Bei `Specify second angle endpoint` rasten Sie auf das obere Ende der 60-Grad-Wand ein und klicken.
6. Bewegen Sie das Fadenkreuz innerhalb des Raums, nahe der Ecke, und klicken.

Der Text lautet `120°`, der Innenwinkel der Ecke. Auf der anderen Seite der Ecke platziert, misst die Bemaßung stattdessen den Winkel auf dieser Seite. Klicken Sie bei der ersten Eingabeaufforderung einen Bogen an, um den Winkel zu bemaßen, den er umspannt, oder klicken Sie zwei Linien, um den Winkel zwischen ihnen zu bemaßen.

## Den Text ändern

Um eigenen Text zu schreiben, geben Sie `T` ein und drücken {{key:Enter}}, bevor Sie die Bemaßung platzieren, und tippen dann den Text. In Ihrem Text steht `<>` für den gemessenen Wert: `<> TYP.` ergibt `6000 TYP.`. Drücken Sie {{key:Enter}} auf einer leeren Zeile, um den gemessenen Wert zu behalten.

Um eine vorhandene Bemaßung zu ändern:

1. Klicken Sie sie an.
2. Im rechten Bedienfeld tippen Sie in {{ui:Text}}. Lassen Sie das Feld leer für den gemessenen Wert.
3. Drücken Sie {{key:Enter}}.

## Bemaßungen folgen der Geometrie

Eine Bemaßung merkt sich ihre Punkte. Ziehen Sie einen ihrer Griffe, oder verschieben, drehen oder skalieren Sie sie mit den Objekten, die sie misst, und sie misst neu. Verändern Sie die Geometrie, ohne die Bemaßung zu verschieben, folgt die Bemaßung nicht: Sie behält ihre eigenen Punkte.

## Häufige Fehler

- **Der Text und die Pfeile sind winzig oder riesig.** Legen Sie den Gesamtmaßstab fest: siehe [Bemaßungsgrößen festlegen](topic:dimension-settings).
- **„Wählen Sie einen Punkt innerhalb des Winkels, den Sie messen möchten.“** Der Punkt, den Sie für eine Winkelbemaßung angeklickt haben, liegt auf einem der Schenkel. Verschieben Sie ihn in den Winkel.
- **Weiterführend begann bei der falschen Bemaßung.** Sie setzt immer die letzte lineare oder ausgerichtete Bemaßung fort, die in dieser Sitzung erstellt wurde. Erstellen (oder erstellen Sie neu) Sie zuerst die, an der fortgesetzt werden soll.
- **Die Bemaßung wurde senkrecht.** Sie haben sie seitlich platziert. Geben Sie `H` ein, bevor Sie sie platzieren.
- **Fuß und Zoll.** Setzen Sie zuerst das Längenformat der Zeichnung auf {{ui:Architektur}} oder das {{ui:Format}} einer Bemaßung in {{ui:Eigenschaften}}: siehe [Fuß und Zoll bei Bemaßungen](topic:dimension-settings#feet-and-inches-in-dimensions).
- **Die Zahlen sind nicht in der gewünschten Einheit.** Wählen Sie {{ui:Einheiten im Text}}: siehe [Bemaßungen in mm, cm, m oder km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).
