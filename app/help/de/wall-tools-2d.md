---
title: Wandformen, Schnitte, Versätze und Festsetzungen für 2D-Wände
summary: Wände als Rechtecke, Polygone und Bögen zeichnen, trennen und wieder verbinden, nach einem Maß verschieben und eine Wand an eine andere oder an eine Rasterlinie festsetzen. Dieselben Werkzeuge wie die Wände von BimCraft.
keywords: Wand, Wände, Symbolleiste Wände, Wandschaltflächen, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, Verbindungsart, Gehrung, Stumpf, Rechtwinklig abschließen, Vorhängeschloss, Griff, Ende ziehen, drehen, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, verbinden, Verbindung untersagen, festsetzen, Rasterlinie, Teilen, Lücke, Versatz, Ortungslinie
from: 49044181
---

Diese Werkzeuge arbeiten mit den 2D-Wänden aus `WALL` (siehe „2D-Wände, Türen und Fenster intelligent zeichnen“). Sie verwenden dieselben Regeln wie die Wandwerkzeuge in BimCraft, sodass sich eine Wand in beiden gleich verhält.

## Wo die Werkzeuge sind

- In der Symbolleiste hat die Gruppe {{ui:Wände}} {{ui:Wand}}, {{ui:Rechteck}}, {{ui:Teilen}} und {{ui:Versetzen}}. Ihr Menü {{ui:Mehr}} enthält jedes andere Wandwerkzeug, jeweils mit seinem Symbol.
- In den Menüstilen mit Menüband hat der Reiter {{ui:Wände}} die Bereiche {{ui:Wände zeichnen}}, {{ui:Schneiden}}, {{ui:Festlegen und ändern}}, {{ui:Halten}} und {{ui:Verbinden}}.
- In einem Layout zeigen die Werkzeugzeilen und der Werkzeugkasten dieselbe Gruppe {{ui:Wände}}.
- Sie können auch jeden unten genannten Befehl eingeben.

## Verbindungen werden gespeichert

Wenn ein Wandende auf einer anderen Wand liegt, speichert CadCraft diese Verbindung bei beiden Wänden. Es rechnet die Verbindungen nicht mehr aus der Lage der Enden neu. Daher gilt:

- Wände, die mit einer verschobenen Wand verbunden sind, folgen ihr und bleiben verbunden. Ihre Enden gleiten auf ihren eigenen Linien, sodass sich nichts dreht.
- Ziehen Sie ein Wandende an seinem Griff, behält die dort verbundene Wand ihre Richtung. Ihr Ende gleitet auf ihrer eigenen Linie, um die gezogene Wand zu treffen, sodass das gezogene Ende auf dieser Linie landet und nicht immer unter dem Cursor. Die Vorschau zeigt, wo. Eine Wand, die in die gezogene Wand stößt, folgt entlang ihrer eigenen Linie. Ziehen Sie das Ende gerade an der Wand entlang, ändert sich ihre Länge, und die dort verbundene Wand bewegt sich mit.
- `ROTATE` an einer verbundenen Wand funktioniert genauso: Die Enden ihrer Nachbarn gleiten auf ihren eigenen Linien zur gedrehten Wand.
- Um eine Ecke zu verschieben, wählen Sie beide Wände, die dort zusammentreffen, und ziehen Sie den Griff an der Ecke. Beide Wände bleiben an der Ecke und beide drehen sich. Weiter entfernte Wände bleiben, wie sie waren.
- Halten Sie {{key:Alt}} gedrückt, wenn Sie den neuen Ort des Griffs anklicken, um die Verbindungen absichtlich zu lösen: Die Wand geht dorthin, wo Sie sie hinlegen, und nichts folgt.
- Würde ein Ziehen eine verbundene Wand durch ihr eigenes fernes Ende drehen, wird es abgelehnt, und nichts ändert sich.
- Eine Wand, die Sie mit {{ui:Verbindung untersagen}} (`D` in `WALL`) zeichnen oder in den Eigenschaften ausschalten ({{ui:Anschluss am Anfang verhindern}}, {{ui:Anschluss am Ende verhindern}}), bleibt an diesem Ende frei, selbst wenn sie eine andere Wand berührt, bis Sie es wieder erlauben.
- `WALLDISJOIN` ({{ui:Verbindung untersagen}} in der Gruppe {{ui:Wände}}) tut dasselbe mit einem Klick: Klicken Sie eine Wand nahe einem Ende, um dort Verbindungen zu untersagen, und klicken Sie sie erneut, um sie zu erlauben.
- Eine ältere Zeichnung hat noch keine gespeicherten Verbindungen. Die erste Änderung, die Sie machen, findet sie einmal aus der Lage der Wände vor der Änderung und speichert sie. `WALLJOINS` tut es sofort.
- DWG- und DXF-Dateien tragen die Verbindungen in jeder Wand. CadCraft liest sie wie gespeichert zurück. Ein Programm ohne erweiterte Daten zeigt die Wände als einfache Blöcke und verwirft die Verbindungen; eine Verbindung, deren Wände in einem anderen Programm verschoben wurden, wird beim nächsten Ändern einer der beiden Wände verworfen.

## Verbindungsart einer Ecke

Eine Ecke, an der zwei Wände Ende an Ende zusammentreffen, wird als {{ui:Gehrung}} gezeichnet, sofern Sie keine andere Art wählen.

- `WALLJOINSTYLE` ({{ui:Verbindungsart}} in der Gruppe {{ui:Wände}}): Klicken Sie auf die Ecke. Jeder Klick geht zur nächsten Art: {{ui:Gehrung}}, {{ui:Stumpf}}, {{ui:Rechtwinklig abschließen}}, dann wieder {{ui:Gehrung}}. Geben Sie `T` ein, um zu wechseln, welche der beiden Wände an der zuletzt angeklickten Ecke durchläuft. Drücken Sie {{key:Enter}}, um abzuschließen. Ein Lauf des Befehls ist ein Rückgängig-Schritt.
- {{ui:Stumpf}}: Eine Wand läuft bis zur fernen Seite der anderen durch, und die andere stößt an deren Seite. {{ui:Rechtwinklig abschließen}}: dasselbe, aber die durchlaufende Wand endet rechtwinklig zu sich selbst. Im rechten Winkel sehen beide gleich aus.
- In den Eigenschaften einer Wand: {{ui:Verbindungsart am Anfang}}, {{ui:Verbindungsart am Ende}} sowie {{ui:Läuft am Anfang durch}}, {{ui:Läuft am Ende durch}}.
- Die Art wird bei beiden Wänden gespeichert und reist in DWG- und DXF-Dateien mit. Eine Kopie einer Wand beginnt ohne sie.
- Eine T-Verbindung hat keine Art zur Wahl: Die Wand, deren Seite getroffen wird, läuft durch. Eine Ecke, an der drei oder mehr Wände zusammentreffen, bleibt eine Gehrung. Ebenso eine sehr spitze Ecke (unter etwa 30 Grad) und zwei Wände auf einer Linie.

## Wandformen zeichnen

Jeder Befehl erstellt die Wände in einem Rückgängig-Schritt, mit verbundenen Ecken. In `WALL` legt `O` einen Platzierungsversatz fest (wie weit links von Ihren Klicks die Wand liegt), und `D` schaltet das Verbinden für die nächsten Wände aus, die Sie zeichnen.

- `WALLRECT` (`WR`): zwei gegenüberliegende Ecken, wie `RECTANG`.
- `WALLROT`: die erste Seite, dann wie weit die andere Seite liegt, für ein Rechteck in beliebigem Winkel.
- `WALLPOLY` (`WP`): die Anzahl der Seiten (3 bis 64), der Mittelpunkt, `I` für einbeschrieben oder `C` für umbeschrieben, dann der Radius, wie bei `POLYGON`: klicken Sie ihn an oder geben Sie ihn ein (ein eingegebener Radius läuft zum Zeiger oder entlang X, wenn der Zeiger noch auf dem Mittelpunkt steht).
- `WALLARC` (`WARC`): Mittelpunkt, Start, Ende. `D` dreht den Bogen in die andere Richtung.
- `WALLTAN`: klicken Sie nahe dem Ende einer Wand, dann das Ende des Bogens, der entlang dieser Wand verlässt.
- `WALLPICK`: klicken Sie eine Linie oder Polylinie an und sagen Sie, ob die daran angeschlossenen Linien ebenfalls übernommen werden sollen.
- `WALLTRACE`: klicken Sie innerhalb einer geschlossenen Fläche aus Linien und Wänden, um Wände um die kleinste zu legen.

Grundrisswände sind gerade, daher wird ein Bogen als kurze gerade Wände von je 15 Grad gezeichnet. Sie verbinden sich wie jede Ecke.

## Wände schneiden

- `WALLSPLIT` (`WS`): klicken Sie die Wand an, dann den Punkt. `C` schneidet, wo eine andere Wand sie kreuzt, `G` lässt eine Lücke zwischen den Teilen, `F` macht die Schnittenden frei statt verbunden. Der erste Teil behält den Platz der Wand in der Zeichnung, und Türen und Fenster gehen mit ihrem Teil. Ein Schnitt durch eine Tür oder ein Fenster wird abgelehnt.
- `WALLSPLITGAP` ({{ui:Mit Lücke teilen}}): dasselbe Teilen, aber es fragt zuerst nach der Lücke.
- `WALLDELSEG`: klicken Sie die Wand an, dann die beiden Enden des Stücks, das gelöscht werden soll.
- `WALLREJOIN`: klicken Sie zwei Teile einer Wand an, um sie wieder zu einer zu machen.

## Wände nach Maß verschieben

- `WALLDIM` ({{ui:Über Bemaßung bearbeiten}}): klicken Sie eine lineare oder ausgerichtete Bemaßung an, die von einer Wand zu einer anderen läuft, und geben Sie dann den neuen Wert ein. Die Wand am fernen Ende bewegt sich rechtwinklig zu sich selbst, die Wand am ersten Ende bleibt, und die angeschlossenen Wände folgen. Der ferne Punkt der Bemaßung wandert mit seiner Wand, sodass die Bemaßung den Wert zeigt, den Sie eingegeben haben.
- `WALLOFFSET` (`WO`): klicken Sie eine Wand an, dann die Seite, auf die sie verschoben werden soll (`D` gibt einen Abstand ein, `C` erstellt stattdessen eine Kopie).
- `WALLSTRETCH`: ein Fenster um die Wandenden, dann ein Basispunkt und ein zweiter Punkt.
- In den Eigenschaften einer Wand bleibt bei einer eingegebenen {{ui:Länge}} der Anfang fest und die am fernen Ende verbundene Wand nimmt er mit. Eine neue {{ui:Dicke}} wächst weg von der {{ui:Ortungslinie}}, die Sie gewählt haben (die linke Seite, die rechte Seite oder die Mitte).

## Bemaßung zwischen Wandmittellinien

Die Mittellinie einer Wand wird nicht gezeichnet, aber der Objektfang findet sie. Mit eingeschaltetem Objektfang ({{key:F3}}) bewegen Sie den Zeiger über die Mitte der Wanddicke: Die Markierung zeigt `Wandmitte: Endpunkt` oder `Wandmitte: Mittelpunkt`, und die Mittellinie erscheint als gestrichelte Linie, solange die Markierung darauf liegt. Mit eingeschaltetem {{ui:Senkrecht}} oder {{ui:Nächste}} in der Liste der Objektfänge funktionieren diese auch auf der Mittellinie.

1. Starten Sie `DIMLINEAR` (oder `DIMALIGNED`).
2. Klicken Sie die erste Wand an, wo die Markierung `Wandmitte: Mittelpunkt` oder `Wandmitte: Endpunkt` zeigt.
3. Klicken Sie die zweite Wand auf dieselbe Weise an, dann dorthin, wo die Maßlinie hingeht.
4. Um den Abstand zu ändern, starten Sie `WALLDIM`, klicken Sie die Bemaßung an und geben Sie den neuen Wert ein. Die zweite Wand bewegt sich.

Der Mittellinienfang funktioniert in jedem Befehl, der einen Punkt verlangt.

## Wände festsetzen

Eine Festsetzung bleibt mit der Wand in der Datei. Verschieben Sie eine festgesetzte Wand, folgt die andere. Ändert eine Änderung beide Wände unterschiedlich, wird sie abgelehnt, und nichts ändert sich.

- `WALLHOLD`: eine Wand an eine andere Wand festsetzen. `A` verschiebt sie zuerst auf die Linie der anderen Wand, `K` behält den Abstand, den sie hat.
- `WALLHOLDDIM`: den Abstand zwischen zwei parallelen Wänden festsetzen.
- `WALLGRID`: eine Wand an eine Rasterlinie festsetzen (eine Linie auf einem Rasterlayer mit ihrer Kennzeichnung als Text an einem Ende), entweder entlang ihr oder mit einem Ende darauf. Eine entlang der Linie festgesetzte Wand behält den Abstand, den sie von ihr hat. Verschieben Sie die Rasterlinie mit `GRIDMOVE`, und die Wand folgt ganz, mit ihren verbundenen Wänden. Eine Wand, die entlang einer Rasterlinie liegt, bewegt sich ganz mit ihr, auch ohne Festsetzung, und eine Wand, die nur an der Linie endet, wird durch dieses Ende gestreckt.
- `WALLHOLDS` listet die Festsetzungen auf. `WALLUNHOLD` nimmt die Festsetzungen einer Wand weg.
- Jede Festsetzung zeigt ein kleines Vorhängeschloss im Plan: neben der Mitte der festgesetzten Wand oder neben dem Ende, das an einer Rasterlinie festsitzt. Klicken Sie ein Vorhängeschloss an, um diese Festsetzung zu lösen.

## Was hier noch fehlt

Festsetzungen verwenden die Mittellinien der Wände. Wände haben hier keine Layer, daher gibt es an einer Verbindung keine Layer-Priorität, und die Wände krümmen sich nicht (siehe Bögen oben). Niemand hat diese Werkzeuge an einer großen Zeichnung erprobt, und sie wurden in keinem anderen CAD-Programm geprüft.
