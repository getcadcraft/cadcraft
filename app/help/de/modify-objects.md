---
title: Verschieben, Kopieren, Drehen, Skalieren, Spiegeln, Strecken und Anordnen
summary: Möbel in einem Raum mit den grundlegenden Ändern-Befehlen anordnen, mit Basispunkten, eingegebenen Abständen und Rückgängig.
keywords: verschieben, kopieren, drehen, skalieren, spiegeln, strecken, anordnung, verbinden, matchprop, eigenschaften übertragen, pinsel, arrayrect, arraypolar, polare anordnung, löschen, zerlegen, rückgängig, wiederholen, basispunkt, verschiebung, ändern, ausrichten, verteilen, auf einer Linie ausrichten, gleichmäßig verteilen
from: 8eaeee6c
---

## Was Sie erstellen

Ein Tisch mit einem Stuhl, der rund um den Tisch kopiert, gedreht, gespiegelt und in der Größe verändert wird. Dabei verwenden Sie {{cmd:MOVE}}, {{cmd:COPY}}, {{cmd:ROTATE}}, {{cmd:MIRROR}}, {{cmd:SCALE}} und {{cmd:UNDO}}.

## Teile zeichnen

1. Geben Sie `REC` ein und drücken Sie {{key:Enter}}, geben Sie `0,0` ein und drücken Sie {{key:Enter}}, dann geben Sie `@1800,900` ein und drücken Sie {{key:Enter}}. Das ist der Tisch.
2. Geben Sie `REC` ein und drücken Sie {{key:Enter}}, geben Sie `300,-700` ein und drücken Sie {{key:Enter}}, dann geben Sie `@450,450` ein und drücken Sie {{key:Enter}}. Das ist ein Stuhl, unterhalb des Tisches.
3. Klicken Sie auf {{ui:Grenzen}}.

## Verschieben: Basispunkt, dann zweiter Punkt

Jedes Verschieben, Kopieren, Drehen und Skalieren beginnt an einem **Basispunkt**: dem Punkt, der mitgenommen oder um den gedreht wird.

1. Klicken Sie auf den Stuhl, um ihn auszuwählen.
2. Geben Sie `M` ein und drücken Sie {{key:Enter}}. Der Verlauf zeigt `1 gefunden`.
3. Bei `Basispunkt angeben` fangen Sie die obere linke Ecke des Stuhls ein (Endpunkt) und klicken Sie.
4. Bei `Zweiten Punkt angeben` geben Sie `@0,200` ein und drücken Sie {{key:Enter}}.

Der Stuhl wird um 200 nach oben verschoben, näher an den Tisch.

:::tip
Geben Sie bei `Basispunkt angeben` `D` ein, um stattdessen eine Verschiebung anzugeben: CadCraft fragt dann `Verschiebung angeben`, und Sie geben ein, wie weit seitlich und nach oben, etwa `0,200` (ohne `@`).
:::

## Kopieren, so oft Sie möchten

1. Klicken Sie auf den Stuhl.
2. Geben Sie `CO` ein und drücken Sie {{key:Enter}}.
3. Fangen Sie die untere linke Ecke des Stuhls ein und klicken Sie sie als Basispunkt an.
4. Geben Sie `@600,0` ein und drücken Sie {{key:Enter}}. Eine Kopie erscheint 600 nach rechts.
5. Geben Sie erneut `@600,0` ein und drücken Sie {{key:Enter}}. Eine zweite Kopie erscheint 1200 rechts vom Original.
6. Drücken Sie {{key:Enter}}, um den Befehl zu beenden.

{{cmd:COPY}} läuft weiter, bis Sie {{key:Enter}} drücken. Jede Kopie wird um den Abstand vom Basispunkt zu dem Punkt gesetzt, den Sie angeben. Ein `@`-Punkt zählt ab dem zuletzt eingegebenen Punkt, und nach der ersten Kopie ist das der Punkt dieser Kopie. Deshalb ergibt `@600,0` zweimal Kopien bei 600 und 1200. Geben Sie `U` ein und drücken Sie {{key:Enter}}, um die letzte Kopie zurückzunehmen, ohne den Befehl zu verlassen.

Sie sollten drei Stühle nebeneinander unter dem Tisch sehen.

:::tip
{{cmd:COPY}} ist für Kopien innerhalb einer Zeichnung gedacht, die über einen Basispunkt gesetzt werden. Um Objekte in eine andere Zeichnung oder einen anderen Tab zu bringen oder sie später einzufügen, verwenden Sie die Zwischenablage: {{key:Mod+C}}, dann {{key:Mod+V}}. {{key:Mod+D}} erstellt eine Kopie, die mit dem Zeiger mitläuft. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).
:::

## Die Reihe auf die andere Seite spiegeln

1. Ziehen Sie ein Kreuzungsfenster (von rechts nach links) über die drei Stühle, ohne den Tisch zu berühren.
2. Geben Sie `MI` ein und drücken Sie {{key:Enter}}.
3. Bei `Ersten Punkt der Spiegelachse angeben` fangen Sie den Mittelpunkt der linken Tischseite ein (Mittelpunkt) und klicken Sie.
4. Bei `Zweiten Punkt der Spiegelachse angeben` fangen Sie den Mittelpunkt der rechten Tischseite ein (Mittelpunkt) und klicken Sie.
5. Bei `Quellobjekte löschen? [Ja (Y)/Nein] <N>` drücken Sie {{key:Enter}}, um sie zu behalten.

Sie sollten drei Stühle unter dem Tisch sehen und darüber drei gespiegelte Stühle. Text in einer gespiegelten Auswahl bleibt lesbar: Er wird gespiegelt platziert, aber nicht rückwärts geschrieben.

## Einen Stuhl drehen

1. Klicken Sie auf den äußersten rechten Stuhl unter dem Tisch.
2. Geben Sie `RO` ein und drücken Sie {{key:Enter}}.
3. Fangen Sie die untere rechte Ecke des Stuhls ein und klicken Sie sie als Basispunkt an.
4. Geben Sie `90` ein und drücken Sie {{key:Enter}}.

Der Stuhl dreht sich um den Basispunkt um 90 Grad gegen den Uhrzeigersinn. Ein negativer Winkel dreht im Uhrzeigersinn. Statt etwas einzugeben, können Sie auch einen zweiten Punkt anklicken: Der Winkel wird vom Basispunkt zu diesem Punkt gemessen.

## Den Tisch skalieren

1. Wählen Sie den Tisch aus.
2. Geben Sie `SC` ein und drücken Sie {{key:Enter}}.
3. Fangen Sie die untere linke Ecke des Tisches ein und klicken Sie sie als Basispunkt an.
4. Geben Sie `1.2` ein und drücken Sie {{key:Enter}}.

Der Tisch ist 20 % größer und wächst vom Basispunkt weg. Ein Faktor unter 1 macht ihn kleiner.

:::note
Wenn Sie statt des Skalierungsfaktors einen Punkt anklicken, ist der Faktor der Abstand vom Basispunkt zu diesem Punkt. Ein Klick genau eine Zeichnungseinheit entfernt ergibt den Faktor 1. Meist ist das Eintippen der Zahl das Gewünschte.
:::

## Rückgängig und Wiederholen

- {{key:Mod+Z}}, die Schaltfläche {{ui:Rückgängig}} oder `U` und dann {{key:Enter}} macht den letzten Befehl rückgängig. Ein ganzer Befehl ist ein Schritt: Wenn Sie ein {{cmd:COPY}} rückgängig machen, das fünf Kopien erzeugt hat, entfernt das alle fünf.
- {{key:Mod+Y}}, {{key:Mod+Shift+Z}}, die Schaltfläche {{ui:Wiederholen}} oder `REDO` holt ihn zurück.
- Der Verlauf nennt, was rückgängig gemacht wurde („Undid COPY“ wird zu „COPY rückgängig gemacht“).

CadCraft speichert die letzten 500 Schritte. Layer-Einstellungen (ein, frieren, sperren, Farbe) sind Einstellungen und keine Bearbeitungen und werden nicht rückgängig gemacht.

## Einen Raum breiter strecken

{{cmd:STRETCH}} (`S`, oder {{ui:Strecken}}) verschiebt nur, was innerhalb eines Kreuzungsfensters liegt: Ecken und Linienenden darin bewegen sich, alles andere bleibt stehen. So wird der Raum breiter, statt insgesamt verschoben zu werden.

1. Geben Sie `S` ein und drücken Sie {{key:Enter}}.
2. Ziehen Sie ein Fenster von rechts nach links über die rechte Wand, sodass es die Wandecken und die Enden alles dort Anschließenden umfasst.
3. Drücken Sie {{key:Enter}}.
4. Klicken Sie einen Basispunkt an, dann geben Sie `@600,0` ein und drücken Sie {{key:Enter}}.

Das Rechteck ist 600 breiter; Linien, die an der Wand endeten, enden weiterhin dort. Ein Bogen mit einem Ende innerhalb behält seine Höhe. Kreise und Text bewegen sich, wenn ihr Mittelpunkt bzw. Einfügepunkt innen liegt, und eine Bemaßung misst ihre neue Länge. Objekte, die einzeln und ohne Fenster gewählt werden, werden einfach verschoben.

Sie können auch zuerst wählen: Ziehen Sie das Kreuzungsfenster (oder ein Kreuzungslasso) über die Wand, ohne dass ein Befehl läuft, und geben Sie dann `S` ein. {{cmd:STRETCH}} übernimmt diese Auswahl und streckt, was ihre Fenster umfassen, genau so, als hätten Sie an seiner eigenen Eingabeaufforderung gezogen.

## Anordnung: Reihen und Spalten oder rund um einen Mittelpunkt

{{cmd:ARRAY}} (`AR`, oder {{ui:Anordnung}}) kopiert die Auswahl in einem Raster oder in einem Kreis.

1. Wählen Sie einen Stuhl, geben Sie `AR` ein und drücken Sie {{key:Enter}}. Drücken Sie {{key:Enter}} für Rechteckig.
2. Eine Vorschau mit 4 Spalten und 3 Reihen erscheint. Geben Sie `COU` ein, drücken Sie {{key:Enter}}, dann `5` für Spalten und `2` für Reihen.
3. Geben Sie `S` ein, drücken Sie {{key:Enter}}, dann `600` für den Abstand zwischen den Spalten und `-900` für den Abstand zwischen den Reihen (negativ geht nach unten).
4. Drücken Sie {{key:Enter}}, um die Kopien zu erzeugen.

Für einen Kreis aus Stühlen um einen Tisch wählen Sie stattdessen `PO` (Polar), klicken Sie auf den Mittelpunkt des Tisches und legen Sie `I` (Elemente), `F` (Füllwinkel: 360 für rundherum, 180 für eine Hälfte) und `ROT` (ob sich die Kopien zum Mittelpunkt drehen) fest. {{cmd:ARRAYRECT}} und {{cmd:ARRAYPOLAR}} überspringen diese Abfrage.

## Linien zu einer Polylinie verbinden

{{cmd:JOIN}} (`J`, oder {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Verbinden}}): Wählen Sie Linien, Bögen und offene Polylinien, deren Enden sich treffen, und drücken Sie {{key:Enter}}. Sie werden zu einer Polylinie, geschlossen, wenn sie rundum gehen. Diese können Sie dann in einem Zug versetzen. Linien, die auf einer Geraden liegen, werden zu einer Linie, selbst wenn Lücken dazwischen sind. Bögen eines Kreises werden zu einem Bogen oder zum Kreis.

## Eigenschaften übertragen

{{cmd:MATCHPROP}} (`MA`, oder {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Eigenschaften übertragen}}): Klicken Sie auf das Objekt, dessen Aussehen Sie möchten, wählen Sie dann die zu ändernden Objekte und drücken Sie {{key:Enter}}. Sie übernehmen dessen Layer und Farbe. Ein Text übernimmt seine Höhe, eine Bemaßung ihre Maße, eine Schraffur ihr Muster. Geben Sie bei der zweiten Frage `S` (Einstellungen) ein, um einzelne davon auszuschalten.

## Objekte ausrichten

**Nach Punkten.** {{cmd:ALIGN}} (`AL`, oder {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Ausrichten}}): Wählen Sie die Objekte und drücken Sie {{key:Enter}}. Klicken Sie dann einen Punkt auf ihnen an (die Quelle) und die Stelle, wohin er soll (das Ziel).

- Ein Punktpaar verschiebt sie. Drücken Sie {{key:Enter}} bei `Zweiten Quellpunkt angeben`, um dort aufzuhören.
- Zwei Paare drehen sie außerdem, sodass die Linie zwischen den beiden Quellpunkten entlang der Linie zwischen den beiden Zielpunkten liegt. CadCraft fragt dann `Objekte anhand der Ausrichtungspunkte skalieren?`: `Y` macht sie entsprechend größer oder kleiner.
- Ein drittes Paar spiegelt sie, wenn seine beiden Punkte auf gegenüberliegenden Seiten dieser Linie liegen.

**Kanten und Abstände.** {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Ausrichten und verteilen}} (oder `ALIGNPANEL`) öffnet ein kleines Panel über der Zeichnung. Wählen Sie Objekte und dann:

- wählen Sie bei {{ui:Ausrichten auf}}, woran ausgerichtet wird (die ganze Auswahl, das erste oder letzte gewählte Objekt oder ein Punkt, den Sie anklicken), und klicken Sie auf {{ui:Links}}, {{ui:Zentrum}}, {{ui:Rechts}}, {{ui:Oben}}, {{ui:Mitte}} oder {{ui:Unten}};
- oder wählen Sie {{ui:Gleiche Abstände}} oder {{ui:Gleiche Mittelpunkte}} und klicken Sie auf {{ui:Nebeneinander}} oder {{ui:Übereinander}}: Die beiden äußeren Objekte bleiben, die übrigen werden dazwischen gleichmäßig verteilt (mindestens drei Objekte).

Jeder Klick ist ein Schritt für Rückgängig, und die Auswahl bleibt, sodass Sie etwas anderes ausprobieren können. Jedes Objekt wird über seinen Begrenzungsrahmen gemessen, im BKS, sofern eines festgelegt ist. In der Befehlszeile heißen dieselben Befehle {{cmd:ALIGNTO}} und {{cmd:DISTRIBUTE}}.

## Löschen und zerlegen

- {{cmd:ERASE}} (`E`, oder {{key:Delete}}) löscht die gewählten Objekte.
- {{cmd:EXPLODE}} (`X`) zerlegt eine Polylinie in Linien und Bögen, eine Blockreferenz in ihre Objekte und eine Bemaßung in Linien, Pfeilspitzen und Text. Zerlegte Bemaßungen messen sich nicht mehr selbst.

## Häufige Fehler

- **Eine Entfernung ohne `@` beim zweiten Punkt eingeben.** `600,0` ist der absolute Punkt 600,0, nicht „600 nach rechts“. Verwenden Sie `@600,0` oder eine einfache `600`, mit dem Fadenkreuz in die richtige Richtung zeigend.
- **Die Drehung ging in die falsche Richtung.** Positive Winkel drehen gegen den Uhrzeigersinn.
- **Rückgängig hat mehr entfernt als erwartet.** Ein Schritt nimmt den ganzen letzten Befehl zurück, einschließlich jeder Kopie, die er erzeugt hat.
- **Der Befehl hat nicht nach Objekten gefragt.** Objekte waren bereits gewählt, deshalb hat er sie verwendet. Drücken Sie zuerst {{key:Esc}}, um ohne Auswahl zu beginnen.
