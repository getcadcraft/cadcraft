---
title: Versetzen, Stutzen, Dehnen, Abrunden und Fasen von Wänden
summary: Einzelne Linien mit Versetzen zu doppelten Wänden machen, Ecken mit Abrunden säubern und Linien mit Stutzen und Dehnen kürzen und verlängern.
keywords: versetzen, stutzen, dehnen, abrunden, fasen, abschrägen, brechen, brechpunkt, verlängern, wände, ecke, schneiden, parallel, radius, aufräumen
from: c6c5cbd0
---

## Was Sie erstellen

Ein kleiner Raum mit 200 dicken Wänden: Die innere Seite wird gezeichnet, die äußere Seite versetzt, die Ecken werden bereinigt, und eine Tür wird in eine Wand geschnitten.

## Die innere Seite zeichnen

1. Geben Sie `L` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `0,0` ein und drücken Sie {{key:Enter}}.
3. Geben Sie `@5000,0` ein und drücken Sie {{key:Enter}}.
4. Geben Sie `@0,4000` ein und drücken Sie {{key:Enter}}.
5. Geben Sie `@-5000,0` ein und drücken Sie {{key:Enter}}.
6. Geben Sie `C` ein und drücken Sie {{key:Enter}}.
7. Klicken Sie auf {{ui:Grenzen}}.

Sie haben vier getrennte Linien. (Eine geschlossene Polylinie würde in einem Zug versetzt. Getrennte Linien zeigen, wie Abrunden Ecken säubert.)

## Die äußere Seite versetzen

1. Geben Sie `O` ein und drücken Sie {{key:Enter}}. Die Eingabeaufforderung lautet `Versatzabstand angeben [Durch (T)] <Durch (T)>:`.
2. Geben Sie `200` ein und drücken Sie {{key:Enter}}.
3. Bei `Objekt zum Versetzen wählen` klicken Sie auf die untere Linie.
4. Bei `Punkt auf der Seite zum Versetzen angeben` klicken Sie irgendwo darunter. Eine parallele Linie erscheint 200 darunter.
5. Klicken Sie auf die rechte Linie und dann rechts davon.
6. Klicken Sie auf die obere Linie und dann darüber.
7. Klicken Sie auf die linke Linie und dann links davon.
8. Drücken Sie {{key:Enter}}, um den Befehl zu beenden.

Sie sollten vier äußere Linien sehen, jede so lang wie ihre innere Linie, sodass sich die äußeren Ecken nicht treffen.

:::tip
Drücken Sie bei der Abstandsabfrage {{key:Enter}}, um den letzten Abstand erneut zu verwenden. Geben Sie `T` für Durch ein: Dann geht jede Kopie durch den Punkt, den Sie anklicken, in welchem Abstand auch immer das liegt.
:::

{{cmd:OFFSET}} arbeitet mit Linien, Bögen, Kreisen und Polylinien. Das Versetzen einer geschlossenen Polylinie versetzt den ganzen Umriss, einschließlich der Ecken.

## Äußere Ecken mit Abrunden säubern

{{cmd:FILLET}} verbindet zwei Linien an einer Ecke: Es stutzt oder dehnt beide, bis sie sich treffen. Mit einem Radius von 0 ist die Ecke scharf.

1. Geben Sie `F` ein und drücken Sie {{key:Enter}}. Die Eingabeaufforderung lautet `Erste Linie wählen [Radius]:`.
2. Wenn das letzte Abrunden einen Radius verwendet hat, geben Sie `R` ein, drücken Sie {{key:Enter}}, geben Sie `0` ein und drücken Sie {{key:Enter}}.
3. Klicken Sie auf die äußere untere Linie nahe ihrem rechten Ende.
4. Bei `Zweite Linie wählen` klicken Sie auf die äußere rechte Linie nahe ihrem unteren Ende.

Die beiden Linien treffen sich nun in einer scharfen Ecke, und der Befehl endet.

5. Drücken Sie {{key:Enter}}, um {{cmd:FILLET}} zu wiederholen, und machen Sie die nächste Ecke.
6. Wiederholen Sie das, bis alle vier äußeren Ecken sich treffen.

Klicken Sie jede Linie auf dem Teil an, den Sie **behalten** möchten. Mit einem Radius über 0 fügt Abrunden stattdessen einen Bogen zwischen den Linien ein.

:::tip
Geben Sie bei der ersten Abfrage `M` ein, um alle vier Ecken auf einmal zu machen. Oder zeichnen Sie die äußere Seite als eine geschlossene Polylinie und geben Sie `P` ein: Jede Ecke wird gleichzeitig gemacht. Halten Sie {{key:Shift}} beim Klick auf die zweite Linie gedrückt, für eine scharfe Ecke ohne den Radius zu ändern.
:::

## Eine Ecke mit Fasen abschrägen

{{cmd:CHAMFER}} schneidet eine Ecke mit einer geraden Linie ab.

1. Geben Sie `CHA` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `D` ein und drücken Sie {{key:Enter}}. Geben Sie `300` ein und drücken Sie {{key:Enter}} für den ersten Abstand. Drücken Sie dann {{key:Enter}}, um für den zweiten ebenfalls 300 zu verwenden.
3. Klicken Sie auf die innere obere Linie nahe ihrem linken Ende und dann auf die innere linke Linie nahe ihrem oberen Ende.

Die Ecke wird entlang jeder Linie um 300 zurückgeschnitten, und eine Fasenlinie verbindet sie. Geben Sie `A` statt `D` ein, um eine Länge auf der ersten Linie und einen Winkel anzugeben.

## Eine Tür mit Stutzen schneiden

Zeichnen Sie zuerst die zwei Türlaibungen quer über die untere Wand, dann stutzen Sie die Wandlinien zwischen ihnen.

1. Geben Sie `L` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `1000,200` ein und drücken Sie {{key:Enter}}.
3. Geben Sie `@0,-600` ein und drücken Sie {{key:Enter}}, dann drücken Sie erneut {{key:Enter}}.
4. Drücken Sie {{key:Enter}}, um {{cmd:LINE}} zu wiederholen.
5. Geben Sie `1900,200` ein und drücken Sie {{key:Enter}}.
6. Geben Sie `@0,-600` ein und drücken Sie {{key:Enter}}, dann drücken Sie erneut {{key:Enter}}.

Sie haben nun zwei kurze Linien, die die untere Wand im Abstand von 900 kreuzen.

7. Geben Sie `TR` ein und drücken Sie {{key:Enter}}. Der Verlauf sagt `Aktuelle Einstellungen: Schnellmodus, Kanten: kein Dehnen`.
8. Klicken Sie auf die innere untere Linie zwischen den beiden Laibungen. Dieses Stück verschwindet. (Halten Sie den Zeiger vorher darauf: Das Stück, das entfernt wird, wird grau und gestrichelt.)
9. Klicken Sie auf die äußere untere Linie zwischen den beiden Laibungen. Auch dieses Stück verschwindet.
10. Klicken Sie auf den Teil jeder Laibung, der über die Wand hinausragt, und auf den Teil darunter.
11. Drücken Sie {{key:Enter}}, um den Befehl zu beenden.

Sie sollten eine 900 breite Öffnung in der unteren Wand sehen, mit den Laibungen, die die Wandenden schließen.

Im Schnellmodus (dem Standard) fragt Stutzen nicht zuerst nach Schneidkanten: Jedes sichtbare Objekt ist eine Schneidkante. Wählen Sie das Stück, das weg soll, oder ziehen Sie einen Pfad über mehrere Stücke, um sie alle auf einmal zu stutzen. Geben Sie `U` ein und drücken Sie {{key:Enter}}, um den letzten Klick oder Zug rückgängig zu machen, ohne den Befehl zu verlassen. Zaun, Kreuzungsfenster, gewählte Schneidkanten und {{key:Shift}} zum Dehnen stehen in [Stutzen und Dehnen](topic:trim-and-extend).

## Eine Linie bis zu einer anderen dehnen

{{cmd:EXTEND}} verlängert ein Linien-, Bogen- oder Polylinienende, bis es das nächste Objekt in dieser Richtung trifft.

1. Geben Sie `L` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `1000,2000` ein und drücken Sie {{key:Enter}}.
3. Geben Sie `@2000,0` ein und drücken Sie {{key:Enter}}, dann drücken Sie erneut {{key:Enter}}. Die Linie endet 2000 vor der rechten Wand.
4. Geben Sie `EX` ein und drücken Sie {{key:Enter}}.
5. Klicken Sie auf die neue Linie nahe ihrem rechten Ende.
6. Drücken Sie {{key:Enter}}, um den Befehl zu beenden.

Die Linie verläuft nun bis zur inneren Seite der rechten Wand. Jedes sichtbare Objekt ist eine Begrenzung. Wählen Sie nahe dem Ende, das wachsen soll. Innerhalb von {{cmd:TRIM}} macht {{key:Shift}}+Klick dasselbe.

## Brechen und Verlängern

{{cmd:BREAK}} (`BR`, oder {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Brechen}}) schneidet eine Lücke ohne Schneidkante: Klicken Sie auf das Objekt, wo die Lücke beginnt (dieser Klick ist der erste Punkt), dann klicken Sie, wo sie endet. Bei einem Kreis entsteht der Teil gegen den Uhrzeigersinn vom ersten zum zweiten Punkt. `F` bei der zweiten Frage lässt Sie den ersten Punkt erneut angeben. {{cmd:BREAKATPOINT}} teilt ein Objekt an einem Punkt in zwei, ohne Lücke.

{{cmd:LENGTHEN}} (`LEN`) ändert eine Länge an einem Ende:

1. Geben Sie `LEN` ein und drücken Sie {{key:Enter}}. Klicken Sie auf eine Linie, um ihre aktuelle Länge zu sehen. Die Eingabeaufforderung fragt erneut.
2. Wählen Sie die Art: `DE` (Delta: ein Betrag zum Hinzufügen, negativ zum Abziehen; `A` für den Winkel eines Bogens), `P` (Prozent: 50 halbiert sie), `T` (Gesamt: die Länge, die sie haben soll) oder `DY` (dynamisch: ziehen Sie das Ende).
3. Klicken Sie jedes Objekt nahe dem Ende an, das sich bewegen soll. `U` nimmt den letzten zurück, {{key:Enter}} beendet.

Linien, Bögen und offene Polylinien (ihr Endsegment) können verlängert werden.

## Häufige Fehler

- **Eine ganze Linie ist verschwunden.** Nichts hat sie gekreuzt, also hat der Schnellmodus sie gelöscht. Geben Sie `U` ein, um sie zurückzuholen. Prüfen Sie, dass die schneidende Linie sie wirklich kreuzt (zoomen Sie hinein) und nicht auf einem ausgeschalteten Layer liegt.
- **„Keine Begrenzung in dieser Richtung.“** Dehnen hat nichts gefunden, worauf es treffen konnte. Wählen Sie näher an dem Ende, das wachsen soll.
- **„Radius ist zu groß.“** Der Bogen würde über das Ende einer der Linien hinauslaufen. Verwenden Sie einen kleineren Radius.
- **„Nur das erste oder letzte Segment einer offenen Polylinie kann zurückgeschnitten werden.“** Wählen Sie zwei nebeneinanderliegende Segmente der Polylinie oder geben Sie `P` ein, um jede Ecke abzurunden.
- **Das Versetzen ging auf die falsche Seite.** Die Seite ist dort, wo Sie nach dem Wählen des Objekts klicken. Machen Sie mit {{key:Mod+Z}} rückgängig und klicken Sie auf die andere Seite.
- **„Kann nicht so weit versetzen.“** Der Versatz würde den Bogen, Kreis oder die Polylinie umstülpen. Verwenden Sie einen kleineren Abstand.
