---
title: Wandformen, Schnitte, Versätze und Sperren für 2D-Wände
summary: Wände als Rechtecke, Polygone und Bögen zeichnen, teilen und wieder verbinden, um ein Maß verschieben und eine Wand an eine andere oder an eine Rasterlinie sperren. Dieselben Werkzeuge wie für Wände in BimCraft.
keywords: wand, wand-symbolleiste, wandschaltflächen, WALLRECT, WALLROT, WALLPOLY, WALLARC, WALLTAN, WALLPICK, WALLTRACE, WALLSPLIT, WALLSPLITGAP, WALLDISJOIN, WALLJOINSTYLE, verbindungsart, gehrung, stumpf, rechtwinklig abschließen, vorhängeschloss, griff, ende ziehen, drehen, WALLDELSEG, WALLREJOIN, WALLDIM, WALLOFFSET, WALLSTRETCH, WALLHOLD, WALLHOLDDIM, WALLGRID, WALLUNHOLD, WALLHOLDS, WALLJOINS, verbinden, verbindung untersagen, sperren, rasterlinie, teilen, lücke, versatz, bezugslinie
from: f41e7433
---

Diese Werkzeuge arbeiten mit den 2D-Wänden aus `WALL` (siehe „Intelligente Wände, Türen und Fenster in 2D zeichnen“). Sie folgen denselben Regeln wie die Wandwerkzeuge in BimCraft, sodass sich eine Wand in beiden gleich verhält.

## Wo die Werkzeuge liegen

- In der Symbolleiste hat die Gruppe {{ui:Wände}} {{ui:Wand}}, {{ui:Rechteck}}, {{ui:Teilen}} und {{ui:Versetzen}}. Ihr Menü {{ui:Mehr}} enthält alle anderen Wandwerkzeuge, jedes mit seinem Symbol.
- In den Menüband-Stilen hat die Registerkarte {{ui:Wände}} die Bereiche {{ui:Wände zeichnen}}, {{ui:Ausschneiden}}, {{ui:Festlegen und ändern}}, {{ui:Halten}} und {{ui:Verbinden}}.
- In einem Layout zeigen die Werkzeugzeilen und der Werkzeugkasten dieselbe Gruppe {{ui:Wände}}.
- Sie können auch jeden unten genannten Befehl eintippen.

## Verbindungen werden gespeichert

Wenn ein Wandende auf einer anderen Wand liegt, speichert CadCraft diese Verbindung bei beiden Wänden. Sie wird nicht mehr aus der Lage der Enden neu berechnet. Also:

- Mit einer Wand verbundene Wände, die Sie verschieben, folgen ihr und bleiben verbunden. Ihre Enden gleiten entlang ihrer eigenen Linien, sodass sich nichts dreht.
- Ziehen Sie ein Ende einer Wand an seinem Griff, behält die dort verbundene Wand ebenfalls ihre Richtung. Ihr Ende gleitet entlang der eigenen Linie zur gezogenen Wand, sodass das gezogene Ende auf dieser Linie landet und nicht immer unter dem Cursor. Die Vorschau zeigt, wo. Eine Wand, die an die gezogene Wand stößt, folgt entlang ihrer eigenen Linie. Ziehen Sie das Ende direkt entlang der Wand, ändert sich ihre Länge, und die dort verbundene Wand wandert mit.
- `ROTATE` an einer verbundenen Wand funktioniert genauso: Die Enden ihrer Nachbarn gleiten entlang ihrer eigenen Linien zur gedrehten Wand.
- Um eine Ecke zu verschieben, wählen Sie beide Wände aus, die dort aufeinandertreffen, und ziehen Sie den Griff an der Ecke. Beide Wände bleiben an der Ecke und drehen sich beide. Weiter entfernte Wände bleiben, wie sie waren.
- Halten Sie {{key:Alt}} gedrückt, wenn Sie die neue Stelle des Griffs anklicken, um die Verbindungen absichtlich zu lösen: Die Wand geht dorthin, wo Sie sie hinlegen, und nichts folgt.
- Würde ein Ziehen eine verbundene Wand durch ihr eigenes fernes Ende zurückdrehen, wird es abgelehnt, und nichts ändert sich.
- Eine Wand, die Sie mit {{ui:Verbindung untersagen}} (`D` in `WALL`) zeichnen oder in den Eigenschaften ausschalten ({{ui:Anschluss am Anfang verhindern}}, {{ui:Anschluss am Ende verhindern}}), bleibt an diesem Ende frei, auch wenn sie eine andere Wand berührt, bis Sie es wieder erlauben.
- `WALLDISJOIN` ({{ui:Verbindung untersagen}} in der Gruppe {{ui:Wände}}) macht dasselbe mit einem Klick: Klicken Sie eine Wand nahe einem Ende an, um Verbindungen an diesem Ende zu untersagen, und klicken Sie erneut, um sie wieder zu erlauben.
- Eine ältere Zeichnung hat noch keine gespeicherten Verbindungen. Die erste Änderung, die Sie vornehmen, ermittelt sie einmal aus dem Stand der Wände vor der Änderung und speichert sie. `WALLJOINS` tut das sofort.
- DWG- und DXF-Dateien tragen die Verbindungen in jeder Wand. CadCraft liest sie so, wie gespeichert. Ein Programm, das keine erweiterten Daten speichert, zeigt die Wände als einfache Blöcke und verwirft die Verbindungen. Eine Verbindung, deren Wände in einem anderen Programm verschoben wurden, wird beim nächsten Ändern einer der beiden Wände verworfen.

## Verbindungsart einer Ecke

Eine Ecke, an der zwei Wände Ende an Ende zusammentreffen, wird als Gehrung gezeichnet, sofern Sie keinen anderen Stil wählen.

- `WALLJOINSTYLE` ({{ui:Verbindungsart}} in der Gruppe {{ui:Wände}}): Klicken Sie die Ecke an. Jeder Klick springt zum nächsten Stil: {{ui:Gehrung}}, {{ui:Stumpf}}, {{ui:Rechtwinklig abschließen}}, dann wieder {{ui:Gehrung}}. Tippen Sie `T`, um zu wechseln, welche der beiden Wände an der zuletzt angeklickten Ecke durchläuft. Drücken Sie {{key:Enter}}, um abzuschließen. Ein Durchlauf des Befehls ist ein Rückgängig-Schritt.
- {{ui:Stumpf}}: Eine Wand läuft bis zur fernen Fläche der anderen durch, und die andere endet an deren Seite. {{ui:Rechtwinklig abschließen}}: dasselbe, aber die durchlaufende Wand endet rechtwinklig zu sich selbst. Im rechten Winkel sehen beide gleich aus.
- In den Eigenschaften einer Wand: {{ui:Verbindungsart am Anfang}}, {{ui:Verbindungsart am Ende}} sowie {{ui:Läuft am Anfang durch}}, {{ui:Läuft am Ende durch}}.
- Der Stil wird bei beiden Wänden gespeichert und bleibt in DWG- und DXF-Dateien erhalten. Eine Kopie einer Wand beginnt ohne ihn.
- Eine T-Verbindung hat keinen Stil zur Auswahl: Die Wand, deren Seite getroffen wird, läuft durch. Eine Ecke, an der drei oder mehr Wände zusammentreffen, bleibt eine Gehrung. Das gilt ebenso für eine sehr spitze Ecke (unter etwa 30 Grad) und für zwei Wände auf einer Linie.

## Wandformen zeichnen

Jedes davon erzeugt die Wände in einem Rückgängig-Schritt, mit verbundenen Ecken. In `WALL` setzt `O` einen Platzierungsversatz (wie weit links von Ihren Klicks die Wand liegt), und `D` schaltet das Verbinden für die nächsten Wände aus.

- `WALLRECT` (`WR`): zwei gegenüberliegende Ecken, wie bei `RECTANG`.
- `WALLROT`: erst die erste Seite, dann wie weit die andere Seite reicht, für ein Rechteck in beliebigem Winkel.
- `WALLPOLY` (`WP`): die Anzahl der Seiten (3 bis 64), den Mittelpunkt, `I` für einbeschrieben oder `C` für umbeschrieben, dann den Radius, wie bei `POLYGON`.
- `WALLARC` (`WARC`): Mittelpunkt, Anfang, Ende. `D` kehrt den Bogen um.
- `WALLTAN`: Klicken Sie nahe dem Ende einer Wand an, dann das Ende des Bogens, der tangential von dieser Wand ausgeht.
- `WALLPICK`: Klicken Sie eine Linie oder Polylinie an und sagen Sie, ob auch die daran angeschlossenen Linien übernommen werden sollen.
- `WALLTRACE`: Klicken Sie innerhalb einer geschlossenen Fläche aus Linien und Wänden an, um um die kleinste davon Wände zu legen.

Ebene Wände sind gerade, daher wird ein Bogen als kurze gerade Wände von je 15 Grad gezeichnet. Sie verbinden sich wie jede andere Ecke.

## Wände schneiden

- `WALLSPLIT` (`WS`): Klicken Sie die Wand an, dann den Punkt. `C` schneidet dort, wo eine andere Wand sie kreuzt, `G` lässt eine Lücke zwischen den Teilen, `F` macht die Schnittenden frei statt verbunden. Der erste Teil behält den Platz der Wand in der Zeichnung, und Türen und Fenster gehen mit ihrem Teil. Ein Schnitt durch eine Tür oder ein Fenster wird abgelehnt.
- `WALLSPLITGAP` ({{ui:Mit Lücke teilen}}): dasselbe Teilen, aber es fragt zuerst nach der Lücke.
- `WALLDELSEG`: Klicken Sie die Wand an, dann die beiden Enden des zu löschenden Stücks.
- `WALLREJOIN`: Klicken Sie zwei Teile einer Wand an, um sie wieder zu einer zu machen.

## Wände um einen Abstand verschieben

- `WALLDIM`: Klicken Sie eine lineare oder ausgerichtete Bemaßung an, die von einer Wand zur anderen verläuft, und tippen Sie dann den neuen Wert ein. Die Wand am fernen Ende bewegt sich rechtwinklig zu sich selbst, die Wand am ersten Ende bleibt stehen, und die daran verbundenen Wände folgen.
- `WALLOFFSET` (`WO`): Klicken Sie eine Wand an, dann die Seite, auf die sie verschoben werden soll (`D` tippt einen Abstand ein, `C` erzeugt stattdessen eine Kopie).
- `WALLSTRETCH`: ein Fenster um die Wandenden, dann ein Basispunkt und ein zweiter Punkt.
- In den Eigenschaften nimmt eine eingetippte {{ui:Länge}} den Anfang fest und zieht die am fernen Ende verbundene Wand mit. Eine neue {{ui:Dicke}} wächst von der {{ui:Bezugslinie}} weg, die Sie gewählt haben (die linke Fläche, die rechte Fläche oder die Mitte).

## Wände sperren

Eine Sperre bleibt bei der Wand in der Datei. Verschieben Sie eine gesperrte Wand, folgt die andere. Verschiebt eine Änderung beide Wände unterschiedlich, wird sie abgelehnt, und nichts ändert sich.

- `WALLHOLD`: sperrt eine Wand an eine andere Wand. `A` verschiebt sie zuerst auf die Linie der anderen Wand, `K` behält den Abstand, den sie hat.
- `WALLHOLDDIM`: sperrt den Abstand zwischen zwei parallelen Wänden.
- `WALLGRID`: sperrt eine Wand an eine Rasterlinie (eine Linie auf einem Raster-Layer, deren Bezeichnung als Text an einem Ende steht), entweder entlang ihr oder mit einem Ende darauf. Eine entlang der Linie gesperrte Wand behält ihren Abstand zu ihr. Verschieben Sie die Rasterlinie mit `GRIDMOVE`, folgt die Wand ganz, mit ihren verbundenen Wänden. Eine Wand, die entlang einer Rasterlinie liegt, wandert auch ohne Sperre ganz mit, und eine Wand, die nur an der Linie endet, wird durch dieses Ende gestreckt.
- `WALLHOLDS` listet die Sperren auf. `WALLUNHOLD` nimmt die Sperren von einer Wand.
- Jede Sperre zeigt im Plan ein kleines Vorhängeschloss: neben der Mitte der gesperrten Wand oder neben dem Ende, das an einer Rasterlinie gesperrt ist. Klicken Sie ein Vorhängeschloss an, um diese Sperre aufzuheben.

## Was hier noch fehlt

Sperren verwenden die Mittellinien der Wände. Wände haben hier keine Layer, daher gibt es an einer Verbindungsstelle keine Layer-Priorität, und die Wände sind nicht gekrümmt (siehe Bögen oben). Niemand hat diese Werkzeuge an einer großen Zeichnung erprobt, und sie wurden nicht in einem anderen CAD-Programm geprüft.
