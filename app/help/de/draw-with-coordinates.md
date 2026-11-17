---
title: Mit Koordinaten zeichnen
summary: Einen exakten Grundriss zeichnen, indem Sie absolute, relative und Polarkoordinaten eingeben und Entfernungen direkt angeben.
keywords: line, pline, polyline, Koordinaten, relativ, polar, absolut, direkte Entfernung, @, Punkte eingeben, exakt, ortho
from: 19e82350
---

## Was Sie erstellen

Der Umriss eines L-förmigen Raums, 6000 mal 4500 mit einer Aussparung von 2000 mal 1500, exakt gezeichnet, dazu eine Wand unter 30 Grad. Sie verwenden alle vier Arten, einen Punkt einzugeben. Arbeiten Sie in Millimetern: Eine Zeicheneinheit entspricht einem Millimeter.

Die Kurzübersicht für alle Formate finden Sie unter [Koordinaten- und Entfernungseingabe](topic:coordinate-entry).

## Bevor Sie beginnen

1. Öffnen Sie CadCraft. Ist eine Zeichnung geöffnet, klicken Sie zuerst auf {{ui:Neu}}.
2. Drücken Sie {{key:Esc}}, damit nichts ausgewählt ist. Der rechte Bereich zeigt {{ui:Aktuelle Einstellungen}}.
3. Stellen Sie {{ui:Einheiten}} auf {{ui:Millimeter}}. Nichts wird in der Größe verändert; dies legt nur fest, was eine Einheit für Blätter und Plots bedeutet.

## Absolute Koordinaten: der erste Punkt

Eine absolute Koordinate ist eine Position, gemessen vom Ursprung und als `x,y` eingegeben.

1. Geben Sie `L` ein und drücken Sie {{key:Enter}}. Die Eingabeaufforderung lautet `Ersten Punkt angeben:`.
2. Geben Sie `0,0` ein und drücken Sie {{key:Enter}}.

Die Linie folgt nun als Gummiband vom Ursprung dem Fadenkreuz. Die Koordinaten in der Statusleiste zeigen während der Bewegung Abstand und Winkel vom Startpunkt.

## Relative Koordinaten: @dx,dy

Eine relative Koordinate wird als `@dx,dy` eingegeben: so weit nach rechts, so weit nach oben, vom letzten Punkt aus. Negative Zahlen gehen nach links oder nach unten.

3. Geben Sie `@6000,0` ein und drücken Sie {{key:Enter}}. Eine Linie von 6000 verläuft nach rechts.
4. Geben Sie `@0,3000` ein und drücken Sie {{key:Enter}}.
5. Geben Sie `@-2000,0` ein und drücken Sie {{key:Enter}}.
6. Geben Sie `@0,1500` ein und drücken Sie {{key:Enter}}.

Sie sehen vier verbundene Linien, die sich an der rechten Seite des Raums nach oben ziehen.

## Direkte Entfernungseingabe: eine reine Zahl

Wenn Sie eine einzelne Zahl eingeben, geht CadCraft diese Entfernung in Richtung des Fadenkreuzes. Schalten Sie Ortho ein, damit die Richtung auf horizontal oder vertikal einrastet.

7. Drücken Sie {{key:F8}} oder klicken Sie in der Statusleiste auf {{ui:Ortho}}. Die Statusleiste zeigt „Ortho ein“.
8. Bewegen Sie das Fadenkreuz links vom letzten Punkt. Das Gummiband bleibt horizontal.
9. Geben Sie `4000` ein und drücken Sie {{key:Enter}}. Die Linie geht 4000 nach links.
10. Bewegen Sie das Fadenkreuz unterhalb des letzten Punkts.
11. Geben Sie `4500` ein und drücken Sie {{key:Enter}}. Sie sind wieder am Startpunkt.
12. Drücken Sie {{key:Enter}} bei der leeren Eingabeaufforderung, um den Befehl zu beenden.

:::mac
F8 kann auf einer Mac-Tastatur die Medienwiedergabe steuern. Halten Sie **fn** gedrückt und drücken Sie F8, oder klicken Sie auf {{ui:Ortho}}. Siehe [Tastaturen, Mäuse und Trackpads](common:keys).
:::

Sie haben nun einen geschlossenen, L-förmigen Umriss aus sechs einzelnen Linien.

13. Klicken Sie auf {{ui:Grenzen}}, um alles zu sehen.

## Polarkoordinaten: @Abstand<Winkel

Eine Polarkoordinate wird als `@Abstand<Winkel` eingegeben. Winkel werden in Grad angegeben, gegen den Uhrzeigersinn ab der positiven X-Richtung gemessen: 0 ist rechts, 90 ist oben, 180 ist links, 270 (oder -90) ist unten.

14. Geben Sie `L` ein und drücken Sie {{key:Enter}}.
15. Geben Sie `6000,0` ein und drücken Sie {{key:Enter}}, um an der unteren rechten Ecke zu beginnen.
16. Geben Sie `@2500<-30` ein und drücken Sie {{key:Enter}}. Eine Linie von 2500 verlässt die Ecke und verläuft nach unten rechts, 30 Grad unter der Horizontalen.
17. Drücken Sie {{key:Enter}}, um den Befehl zu beenden.

Eine Polarkoordinate ohne `@`, wie `2500<30`, wird vom Ursprung statt vom letzten Punkt gemessen.

## Derselbe Umriss als eine Polylinie

Sechs einzelne Linien sind bei vielen Aufgaben in Ordnung, aber eine Polylinie ist ein einzelnes Objekt: Sie wird als Ganzes versetzt, gemessen und ausgewählt. Verwenden Sie {{cmd:PLINE}} mit derselben Eingabe.

1. Geben Sie `PL` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `0,-6000` ein und drücken Sie {{key:Enter}}, um unterhalb des ersten Umrisses zu beginnen.
3. Geben Sie `@6000,0` ein und drücken Sie dann {{key:Enter}}.
4. Geben Sie `@0,3000` ein und drücken Sie dann {{key:Enter}}.
5. Geben Sie `@-2000,0` ein und drücken Sie dann {{key:Enter}}.
6. Geben Sie `@0,1500` ein und drücken Sie dann {{key:Enter}}.
7. Geben Sie `@-4000,0` ein und drücken Sie dann {{key:Enter}}.
8. Geben Sie `C` ein und drücken Sie {{key:Enter}}. Die Polylinie wird geschlossen und der Befehl endet.
9. Klicken Sie auf den neuen Umriss. Der rechte Bereich zeigt „Polylinie“, ihre {{ui:Scheitelpunkte}}, {{ui:Länge}} und, da sie geschlossen ist, ihre {{ui:Fläche}}.

Die Fläche sollte 24000000 anzeigen (Quadratmillimeter, das sind 24 Quadratmeter).

## Optionen beim Zeichnen

- In {{cmd:LINE}} und {{cmd:PLINE}} geben Sie `U` ein und drücken {{key:Enter}}, um das letzte Segment zurückzunehmen, ohne den Befehl zu verlassen.
- In {{cmd:LINE}} schließt `C` die Linie wieder am ersten Punkt, sobald mindestens zwei Segmente vorhanden sind.
- In {{cmd:PLINE}} wechselt `A` zu Bogensegmenten (jeder Bogen setzt das vorherige Segment glatt fort), und `L` wechselt zurück zu Linien. Im Bogenmodus lautet die Schließoption `CL`.
- Drücken Sie {{key:Enter}} bei `Ersten Punkt angeben:` in {{cmd:LINE}}, beginnt die Linie beim zuletzt angegebenen Punkt, sodass Sie dort weitermachen können, wo Sie aufgehört haben.

## Häufige Fehler

- **`6000,0` eingeben, wenn Sie `@6000,0` meinten.** Ohne `@` wird der Punkt vom Ursprung gemessen, nicht vom letzten Punkt, sodass die Linie an einer unerwarteten Stelle landet. In CadCraft ist `x,y` immer absolut. Drücken Sie `U` und {{key:Enter}}, um es zurückzunehmen.
- **Ein Komma als Dezimalpunkt.** Dezimalstellen werden mit einem Punkt geschrieben: `1250.5`. Ein Komma trennt immer X von Y.
- **Die direkte Entfernung ging in die falsche Richtung.** Eine reine Zahl folgt dem Fadenkreuz. Bewegen Sie das Fadenkreuz auf die gewünschte Seite, bevor Sie {{key:Enter}} drücken, und schalten Sie für gerade Linien {{ui:Ortho}} ein.
- **„Punkt oder Optionsbezeichnung erforderlich.“** CadCraft hat Ihre Eingabe nicht verstanden. Prüfen Sie auf Leerzeichen in der Zahl oder auf ein fehlendes Komma und geben Sie sie erneut ein.
- **Fuß und Zoll.** CadCraft liest nur einfache Zahlen. Geben Sie `150` für 12'-6" in einer Zoll-Zeichnung ein oder `12.5` in einer Fuß-Zeichnung.
