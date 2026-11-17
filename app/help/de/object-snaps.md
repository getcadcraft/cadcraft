---
title: Auf Punkte an Objekten einrasten
summary: Objektfänge, Ortho und das Raster verwenden, um mit der Maus exakte Endpunkte, Mittelpunkte, Zentren und Schnittpunkte zu wählen.
keywords: osnap, Objektfang, Endpunkt, Mittelpunkt, Zentrum, Schnittpunkt, Lot, Quadrant, nächster Punkt, Knoten, Einfügepunkt, ortho, Raster, f3, f8, f7, polare Spur, polar, polarang, Objektfangspur, otrack, Spur, f10, f11
from: 3cf17f94
---

## Was Sie erstellen

Ein Rechteck mit seinen beiden Diagonalen, ein Kreis, dessen Mittelpunkt dort liegt, wo sie sich kreuzen, und eine Linie von der Mitte einer Seite bis zum Kreis. Jeder Punkt wird mit der Maus gewählt, und jeder Punkt ist exakt.

## Wie das Einrasten funktioniert

Während ein Befehl einen Punkt verlangt, sucht CadCraft nach Fangpunkten innerhalb von etwa 10 Pixeln um das Fadenkreuz. Wenn es einen findet, erscheinen eine Markierung und ein Schild („Endpunkt“, „Schnittpunkt“). Ein Klick landet **genau** auf diesem Punkt, nicht dort, wo das Fadenkreuz ist.

Fänge sind eingeschaltet, wenn {{ui:Fang}} in der Statusleiste gedrückt ist. {{key:F3}} schaltet sie ein und aus.

Die Fänge, die Sie verwenden können, sind:

| Fang | Landet auf |
|---|---|
| Endpunkt | Die Enden von Linien, Bögen und Polylinien-Segmenten |
| Mittelpunkt | Die Mitte von Linien, Bögen und Polylinien-Segmenten |
| Zentrum | Das Zentrum von Kreisen und Bögen sowie von Polylinien-Bogensegmenten |
| Quadrant | Die Punkte bei 0, 90, 180 und 270 Grad von Kreisen und Bögen |
| Schnittpunkt | Wo sich zwei Objekte kreuzen |
| Lot | Der Punkt auf einem Objekt, rechtwinklig zum letzten Punkt (braucht einen Basispunkt) |
| Tangente | Der Punkt auf einem Kreis oder Bogen, an dem eine Linie vom letzten Punkt ihn gerade berührt. Ohne letzten Punkt (dem ersten Punkt einer Linie) zeigt die Markierung „verzögert“: Der Berührungspunkt wird berechnet, sobald der nächste Punkt bekannt ist. So berührt eine Linie von Tangente zu Tangente beide Kreise |
| Nächster Punkt | Der nächste Punkt auf einem beliebigen Objekt |
| Knoten | Punktobjekte |
| Einfügepunkt | Der Einfügepunkt von Text und Blockreferenzen |

Alle sind standardmäßig eingeschaltet, außer Tangente und Nächster Punkt. Nächster Punkt gewinnt oft, wenn Sie etwas anderes wollen; schalten Sie Tangente ein, wenn Sie sie brauchen.

## Ihre Fänge wählen

1. Klicken Sie auf den kleinen Pfeil neben {{ui:Fang}} in der Statusleiste. Die Liste {{ui:Objektfänge}} öffnet sich.
2. Aktivieren oder deaktivieren Sie Fänge. Änderungen gelten sofort.
3. Klicken Sie erneut auf den Pfeil, um die Liste zu schließen.

CadCraft merkt sich Ihre Auswahl sowie die Einstellungen {{ui:Raster}}, {{ui:Ortho}} und {{ui:Fang}} in diesem Browser.

## Schritte

1. Geben Sie `REC` ein und drücken Sie {{key:Enter}}.
2. Geben Sie `0,0` ein und drücken Sie {{key:Enter}}.
3. Geben Sie `@4000,3000` ein und drücken Sie {{key:Enter}}. Ein Rechteck erscheint.
4. Klicken Sie auf {{ui:Grenzen}}.
5. Geben Sie `L` ein und drücken Sie {{key:Enter}}.
6. Bewegen Sie das Fadenkreuz zur unteren linken Ecke. Die Markierung zeigt „Endpunkt“. Klicken Sie.
7. Bewegen Sie es zur oberen rechten Ecke, bis „Endpunkt“ erscheint. Klicken Sie.
8. Drücken Sie {{key:Enter}}, um die Linie zu beenden.
9. Drücken Sie {{key:Enter}} erneut, um {{cmd:LINE}} zu wiederholen, und zeichnen Sie die andere Diagonale vom unteren rechten zum oberen linken Eck auf dieselbe Weise.
10. Geben Sie `C` ein und drücken Sie {{key:Enter}}, um einen Kreis zu beginnen.
11. Bewegen Sie das Fadenkreuz dorthin, wo sich die Diagonalen kreuzen. Die Markierung zeigt „Schnittpunkt“. Klicken Sie.
12. Geben Sie `800` ein und drücken Sie {{key:Enter}}.

Sie sehen einen Kreis, dessen Mittelpunkt genau auf der Kreuzung liegt.

13. Geben Sie `L` ein und drücken Sie {{key:Enter}}.
14. Bewegen Sie sich zur Mitte der linken Seite des Rechtecks, bis „Mittelpunkt“ erscheint. Klicken Sie.
15. Bewegen Sie das Fadenkreuz auf den Kreis, auf seine linke Seite. Die Markierung zeigt „Lot“ oder „Quadrant“; hier ist es derselbe Punkt. Klicken Sie.
16. Drücken Sie {{key:Enter}}.

Die neue Linie verläuft von der Mitte der linken Seite und hält genau am Kreis an.

## Einen Fang für einen Klick überspringen

Halten Sie {{key:Shift}} gedrückt, während Sie klicken. Objektfänge werden für diesen Klick ignoriert, und der Punkt landet genau dort, wo das Fadenkreuz ist (oder in der Ortho-Richtung, wenn Ortho eingeschaltet ist).

## Ortho

{{ui:Ortho}} ({{key:F8}}) hält den nächsten Punkt gerade quer oder gerade nach oben und unten vom Basispunkt aus. Es gilt für Klicks und für die direkte Entfernungseingabe (eine reine Zahl an der Eingabeaufforderung). Objektfänge haben Vorrang vor Ortho: Wenn eine Fangmarkierung erscheint, geht der Klick an den Fang.

## Polare Spur

{{ui:Polar}} ({{key:F10}}) ist Ortho für mehr Winkel. Während ein Befehl einen Basispunkt hat (der letzte Punkt einer Linie, der Basispunkt eines Verschiebens), richtet sich der Zeiger aus, sobald er in die Nähe eines Strahls von dort in einem Vielfachen des Polarschritts kommt. Eine punktierte Linie erscheint, und ein Schild neben dem Fadenkreuz zeigt `Polar: 1200 < 30°`. Klicken Sie, um diesen Punkt zu verwenden, oder geben Sie eine Entfernung ein: `1200` geht genau 1200 entlang des Strahls.

Der Schritt beträgt 90°, bis Sie ihn ändern: Geben Sie {{cmd:POLARANG}} ein, drücken Sie {{key:Enter}} und geben Sie `30` ein (oder 45, 22.5, 15 …). Polar und Ortho schließen einander aus: Das Einschalten des einen schaltet das andere aus.

## Objektfangspur

{{ui:Spur}} ({{key:F11}}) richtet den Zeiger auf Fangpunkte aus, auf denen Sie verweilt haben. So können Sie einen Punkt auf gleicher Höhe wie eine Ecke und oberhalb einer anderen wählen, ohne Hilfslinien zu zeichnen.

1. Schalten Sie {{ui:Fang}} und {{ui:Spur}} ein und starten Sie einen Befehl, der einen Punkt verlangt (`L`).
2. Verweilen Sie mit dem Zeiger eine halbe Sekunde auf einem Fangpunkt, etwa einer Ecke, ohne zu klicken. Ein kleines Kreuz markiert ihn: Er ist erfasst. Verweilen Sie erneut darauf, um ihn wieder zu lösen.
3. Bewegen Sie den Zeiger direkt davon weg, waagerecht oder senkrecht. Eine punktierte Linie folgt dem Zeiger, und das Schild zeigt `Spur: 600 < 90°`. Klicken Sie oder geben Sie eine Entfernung ein.
4. Erfassen Sie einen zweiten Punkt und bewegen Sie sich dorthin, wo die Senkrechte durch den einen und die Waagerechte durch den anderen sich treffen. Der Zeiger rastet an diesem Kreuzungspunkt ein (`Spur: wo sich zwei Linien treffen`).

Wenn auch {{ui:Polar}} eingeschaltet ist, folgen erfasste Punkte jedem Polarwinkel. Bis zu sieben Punkte bleiben erhalten, bis der Befehl endet. {{key:Shift}} schaltet die Spur für einen Klick aus, wie bei den Fängen.

## Raster

{{ui:Raster}} ({{key:F7}}) zeigt ein Linienraster hinter der Zeichnung, mit stärkeren Linien bei jeder fünften Linie; der Abstand ändert sich beim Zoomen. Es ist nur eine Hilfe, bis Sie {{ui:Rasterfang}} ({{key:F9}}) einschalten. Dann landen Klicks auf dem nächsten Rasterpunkt, sofern nicht ein Objektfang den Punkt vorher übernimmt.

## Funktionstasten auf Ihrem Computer

{{key:F9}} ist Rasterfang, {{key:F10}} ist Polar und {{key:F11}} ist Spur.

:::mac
Auf einem Mac steuern F3, F7, F8 und F9 normalerweise Mission Control und Medien. Halten Sie **fn** mit der Taste gedrückt oder aktivieren Sie Standard-Funktionstasten, wie in [Tastaturen, Mäuse und Trackpads](common:keys) beschrieben. Die Schaltflächen der Statusleiste funktionieren immer.
:::

:::firefox
In Firefox ist F7 auch die Taste für den Cursor-Browsing-Modus. Wenn Firefox fragt, ob der Cursor-Browsing-Modus eingeschaltet werden soll, wählen Sie **Nein**. Verwenden Sie die Schaltfläche {{ui:Raster}}, wenn die Frage immer wieder kommt.
:::

:::touch
Auf einem Touchscreen gibt es kein Schweben, daher erscheint die Fangmarkierung nur dort, wo Ihr Finger berührt. Zoomen Sie nah heran für kleine Ziele oder geben Sie Koordinaten ein.
:::

## Häufige Fehler

- **Der Klick ging an den falschen Punkt.** Schauen Sie auf das Schild der Markierung, bevor Sie klicken: Endpunkt gewinnt gegen Mittelpunkt, wenn beide nahe sind. Zoomen Sie hinein oder deaktivieren Sie Fänge, die Sie nicht brauchen.
- **Keine Markierung erscheint.** {{ui:Fang}} ist aus, oder der gewünschte Fang ist deaktiviert, oder das Objekt liegt auf einem Layer, der aus oder eingefroren ist.
- **Fänge greifen in einer belegten Zeichnung das Falsche.** Zoomen Sie hinein. Der Fangabstand wird in Bildschirmpixeln gemessen, daher wird er auf der Zeichnung kleiner, wenn Sie hineinzoomen.
- **Erwarten, dass Shift eine gerade Linie ergibt.** In CadCraft schaltet Shift Fänge für einen Klick aus. Verwenden Sie {{ui:Ortho}} für gerade Linien.
- **Erwarten, dass Punkte auf Rasterpunkte fallen.** Schalten Sie {{ui:Rasterfang}} ({{key:F9}}) ein oder geben Sie Koordinaten für runde Zahlen ein.
