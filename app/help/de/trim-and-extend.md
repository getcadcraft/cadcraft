---
title: Stutzen und Dehnen
summary: Linien dort zurückschneiden, wo andere sie kreuzen, und bis zu anderen verlängern, einzeln oder viele auf einmal, indem Sie einen Pfad durch sie ziehen.
keywords: trimextendmode, Fenster ziehen, stutzen, dehnen, tr, ex, Schnellstutzen, ziehen, Freihand, Pfad, Zaun, Kreuzen, Shift, Schneidkanten, Grenzkanten, edgemode, Modus, Standard, Schnell, löschen, Vorschau, Wände, Bereinigung
from: 25fbc5bd
---

## Was Sie lernen

Wie {{cmd:TRIM}} und {{cmd:EXTEND}} funktionieren und die schnellen Wege, sie zu verwenden: Ziehen Sie durch viele Stücke auf einmal, halten Sie {{key:Shift}}, um zwischen Stutzen und Dehnen zu wechseln, und sehen Sie, was entfernt wird, bevor Sie klicken.

## Ein Stück stutzen

1. Zeichnen Sie eine lange waagerechte Linie und zwei kurze Linien, die sie kreuzen.
2. Geben Sie `TR` ein und drücken Sie {{key:Enter}}. Der Verlauf sagt `Aktuelle Einstellungen: Schnellmodus, Kanten: Keine Verlängerung`.
3. Legen Sie den Zeiger auf die lange Linie zwischen den beiden kurzen. Dieses Stück wird grau und gestrichelt: Es ist das, was entfernt wird.
4. Klicken Sie. Das Stück verschwindet.
5. Drücken Sie {{key:Enter}}, um den Befehl zu beenden.

Im Schnellmodus (Standard) ist jedes sichtbare Objekt eine Schneidkante, daher wählen Sie Kanten nie zuerst aus. Klicken Sie auf das Stück, das verschwinden soll. Ein Objekt, das nichts kreuzt, wird ganz gelöscht, und der Verlauf sagt das.

## Viele Stücke mit einem Zug stutzen

1. Zeichnen Sie eine lange waagerechte Linie und zehn kurze senkrechte Linien, die sie kreuzen.
2. Geben Sie `TR` ein und drücken Sie {{key:Enter}}.
3. Drücken Sie die Maustaste oberhalb der langen Linie, links von der ersten senkrechten Linie, und ziehen Sie über alle zehn oberhalb der langen Linie.

Beim Ziehen zeigt sich der Pfad als gestrichelte Linie, und jedes Stück, das er gekreuzt hat, wird grau. Lassen Sie los: Alle zehn oberen Stücke werden in einem Schritt gestutzt. Geben Sie `U` ein und drücken Sie {{key:Enter}}, um sie alle auf einmal wiederherzustellen.

:::tip
Sie können auch zwei leere Stellen anklicken: Die Linie zwischen ihnen wirkt wie ein gezogener Pfad. Geben Sie `F` (Zaun) ein, um stattdessen eine Reihe von Punkten anzuklicken, und drücken Sie dann {{key:Enter}}.
:::

:::touch
Ziehen Sie mit einem Finger auf die gleiche Weise. Ein Tippen auf ein Stück stutzt es.
:::

## Stattdessen mit Shift dehnen

1. Zeichnen Sie eine senkrechte Linie und links davon fünf kurze waagerechte Linien, die vor ihr enden.
2. Geben Sie `TR` ein und drücken Sie {{key:Enter}}.
3. Halten Sie {{key:Shift}}. Legen Sie den Zeiger auf eine kurze Linie: Der Teil, um den sie wachsen würde, wird grau und gestrichelt angezeigt.
4. Halten Sie {{key:Shift}} weiter gedrückt und ziehen Sie nach unten durch die fünf kurzen Linien.

Alle fünf reichen jetzt bis zur senkrechten Linie. {{key:Shift}} wirkt in {{cmd:EXTEND}} (`EX`) umgekehrt: Ein Klick dehnt, ein {{key:Shift}}+Klick stutzt. Dehnen verlängert das Ende, das dem Klick oder der Stelle, an der der Pfad kreuzt, am nächsten liegt.

## Innerhalb eines Fensters stutzen

1. Geben Sie `TR` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `C` ein und drücken Sie {{key:Enter}}.
3. Klicken Sie zwei Ecken um die zu entfernenden Stücke an.

Jedes Stück, das zumindest teilweise im Fenster liegt, wird gestutzt.

Um ein Fenster allein durch Ziehen zu erhalten, ohne `C` einzugeben: {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Ziehen zum Stutzen und Dehnen}} › {{ui:Ein Fenster}}. Dann zeichnet Drücken auf eine leere Stelle und Ziehen einen Kasten, und jedes Stück, das er berührt, wird gestutzt (oder in {{cmd:EXTEND}} oder mit {{key:Shift}} gedehnt). {{ui:Ein Pfad}} (der Anfang) bringt den Freihandpfad zurück. Die Einstellungszeile am Anfang von TRIM sagt, welcher davon aktiv ist.

## Die Schneidkanten wählen (Standardmodus)

Manchmal soll nur eine Linie schneiden, etwa eine Wandfläche, die viele andere Linien kreuzen.

1. Geben Sie `TR` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `O` (Modus) ein und drücken Sie {{key:Enter}}, dann geben Sie `S` (Standard) ein und drücken Sie {{key:Enter}}.
3. Bei `Schneidkanten wählen` klicken Sie die Kantenlinien an (oder ziehen Sie ein Fenster), dann drücken Sie {{key:Enter}}. Drücken von {{key:Enter}} ohne Auswahl macht jedes Objekt zu einer Kante.
4. Klicken oder ziehen Sie durch die zu entfernenden Stücke.

Nur die gewählten Kanten schneiden, und ein Objekt, das keine Kante kreuzt, bleibt unberührt. Der Modus bleibt bis Sie die Seite schließen; geben Sie `O` ein, dann `Q`, um zum Schnellmodus zurückzukehren. {{cmd:TRIMEXTENDMODE}} setzt ihn, bevor Sie beginnen, wie die gleichnamige Variable an anderen Stellen: `0` Standard, `1` Schnell. `T` (Schneidkanten) wählt jederzeit neue Kanten; in {{cmd:EXTEND}} ist es `B` (Grenzkanten).

## Kanten, die reichen würden

1. Geben Sie `TR` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `E` (Kante) ein und drücken Sie {{key:Enter}}, dann `E` (Verlängern) und drücken Sie {{key:Enter}}.

Jetzt zählt eine Schneidlinie oder ein Bogen, der zu kurz endet, als ob er weiterginge: Eine kurze Linie schneidet dort, wo sie kreuzen würde, wenn sie länger wäre. Geben Sie `E` ein, dann `N` (Keine Verlängerung), um zurückzuwechseln. Das entspricht EDGEMODE 1 und 0.

## Ohne Verlassen löschen

Geben Sie `R` (Löschen) ein und drücken Sie {{key:Enter}}, wählen Sie die zu löschenden Objekte und drücken Sie {{key:Enter}}. TRIM läuft weiter.

## Häufige Fehler

- **Eine ganze Linie ist verschwunden.** Im Schnellmodus wird ein Objekt, das nichts kreuzt, gelöscht. Geben Sie `U` ein, um es zurückzuholen, oder wechseln Sie in den Standardmodus (`O`, `S`).
- **„Hier gibt es nichts zu stutzen: Keine gewählte Kante kreuzt dieses Objekt.“** Der Standardmodus schneidet nur an den gewählten Kanten. Geben Sie `T` ein, um sie erneut zu wählen.
- **„In dieser Richtung keine Grenze.“** Dehnen fand vorne nichts. Klicken Sie näher am Ende, das wachsen soll, oder schalten Sie `E` (Kante, Verlängern) für Grenzen ein, die zu kurz enden.
- **Das Ziehen hat stattdessen ein Lasso gezeichnet.** Ein Ziehen stutzt nur, solange TRIM oder EXTEND ein Objekt abfragt. Ohne laufenden Befehl wählt ein Ziehen aus (siehe [Lasso-Auswahl](topic:lasso-selection)).
- **Nur Linien, Bögen, Kreise und Polylinien können gestutzt werden.** Zerlegen Sie zuerst einen Block, um seine Linien zu stutzen.
