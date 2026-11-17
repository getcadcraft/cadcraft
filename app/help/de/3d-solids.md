---
title: In 3D modellieren
summary: Sehen Sie die Zeichnung auf der Registerkarte 3D in 3D und erstellen Sie daraus einfache Volumenkörper: extrudieren (mit Verjüngung oder entlang eines Pfads), drehen, Flächen drücken und ziehen, Quader, Zylinder und Keile erstellen, Volumenkörper vereinigen, subtrahieren und schneiden sowie verschieben, kopieren, drehen und löschen und flache 2D-Ansichten davon auf einem Blatt platzieren.
keywords: 3d, drei d, Volumenkörper, solid, solids, 3dsolid, Region, Körper, body, acis, sat, sab, Volumenkörper aus anderen Programmen, 3D-Zeichnung öffnen, extrude, ext, revolve, rev, sweep, Formschräge, taper, Pfad, path, presspull, drücken ziehen, push pull, Quader, box, Zylinder, cylinder, cyl, Keil, wedge, 3dorbit, orbit, Ansicht, view, vscurrent, visueller Stil, schattiert, verdeckte Linie, Drahtmodell, Röntgen, x-ray, xray, iso, Perspektive, parallel, glb, gltf, obj, stl, export3d, stlout, objout, glbout, 3dface, Ansichtswürfel, view cube, union, uni, vereinigen, subtract, su, subtrahieren, intersect, in, schneiden, boolean, boolesch, kombinieren, Volumenkörper verbinden, viewbase, flatshot, flache Ansicht, 2D-Ansicht, Zeichnungsansicht, Vorderansicht, Draufsicht, Seitenansicht, verdeckte Linien
from: 13060e71
---

## Was Sie erstellen

Ein Raumgrundriss von 1000 × 600 wird zu einem 400 hohen Block extrudiert, eine Fläche wird nach oben gezogen, und daneben steht ein Zylinder. Danach wird das Modell zusammen mit der Zeichnung gespeichert und für einen 3D-Betrachter oder einen Drucker exportiert.

Die Registerkarte {{ui:3D}} liegt neben {{ui:Model}} unter der Zeichnung. Sie zeigt die Zeichnung des Modellbereichs in den Layerfarben auf dem Boden liegend (Layer, die aus oder gefroren sind, bleiben ausgeblendet) sowie die Volumenkörper, die Sie erstellen. Beim ersten Öffnen wird die 3D-Ansicht geladen; danach wechselt sie sofort.

## Eine Form extrudieren

1. Geben Sie auf der Registerkarte {{ui:Model}} `REC` ein und drücken Sie {{key:Enter}}. Geben Sie `0,0` ein und drücken Sie {{key:Enter}}, dann `@1000,600` und drücken Sie {{key:Enter}}.
2. Klicken Sie auf die Registerkarte {{ui:3D}}. Die Symbolleiste zeigt die Gruppe {{ui:3D}} anstelle der Zeichnungsgruppen.
3. Klicken Sie auf {{ui:Extrude}} (oder geben Sie {{cmd:EXTRUDE}} bzw. `EXT` ein). Klicken Sie in das Rechteck und drücken Sie {{key:Enter}}.
4. Geben Sie `400` ein und drücken Sie {{key:Enter}}. Der Verlauf meldet „1 Volumenkörper extrudiert, 400 hoch“ mit seinem Volumen.

Geschlossene Polylinien (auch mit Bögen), Rechtecke, Polygone, Kreise und Ellipsen lassen sich extrudieren; Linien und offene Polylinien nicht, und der Verlauf nennt den Grund. Sie können auch zuerst auf der Registerkarte {{ui:Model}} die Formen wählen und dort `EXTRUDE` eingeben. Statt die Höhe einzugeben, können Sie sie auch anklicken: Der Umriss folgt dem Cursor nach oben und unten. Eine negative Höhe geht nach unten. Geben Sie bei der Höhenabfrage `D` ein, um die 2D-Formen nach dem Extrudieren zu löschen (erneutes `D` behält sie).

Bei der Höhenabfrage fragt `T` (Verjüngungswinkel) nach einem Winkel in Grad: Die Seiten neigen sich um diesen Winkel nach innen, sodass die Oberseite kleiner wird (ein negativer Winkel macht sie größer). Ein für die Form zu steiler Winkel wird abgelehnt. `P` (Pfad) lässt die Formen stattdessen entlang eines Pfads sweepen (siehe unten).

## Drehen und Sweep

- {{cmd:REVOLVE}} (`REV`, oder {{ui:More}} › {{ui:Revolve about an axis}}): Wählen Sie geschlossene Formen, drücken Sie {{key:Enter}} und klicken Sie dann die beiden Enden der Achse an (oder geben Sie `X` oder `Y` für die Achse der Zeichnung durch 0,0 ein). Geben Sie einen Winkel ein oder drücken Sie {{key:Enter}} für eine volle Drehung. Die Form dreht sich um die Achse und steht vom Boden ab: Zeichnen Sie neben einer Linie die halbe Kontur einer Vase und drehen Sie sie um diese Linie. Die Form darf die Achse berühren, aber nicht kreuzen. Eine volle Drehung hat 48 Schritte.
- {{cmd:SWEEP}} (oder {{ui:More}} › {{ui:Sweep along a path}}, oder `P` bei der Höhenabfrage von EXTRUDE): Wählen Sie geschlossene Formen (das Profil), drücken Sie {{key:Enter}} und klicken Sie dann den Pfad an: eine Linie, Polylinie, einen Bogen, Kreis oder eine Ellipse. Das Profil steht quer zum Pfad, mit seiner Mitte auf dem Pfad, und läuft entlang ihm; Ecken werden auf Gehrung geschnitten, und ein geschlossener Pfad ergibt einen Ring. Ein kleines Rechteck, entlang des Umrisses eines Raums gesweept, ergibt eine Fußleiste; ein Kreis entlang einer Polylinie ergibt ein Rohr.

## Eine Fläche drücken und ziehen

1. Klicken Sie auf {{ui:Press/pull}} (oder geben Sie {{cmd:PRESSPULL}} ein).
2. Klicken Sie auf die Oberseite des Blocks.
3. Geben Sie `100` ein und drücken Sie {{key:Enter}}, oder bewegen Sie den Cursor und klicken Sie. Der Block ist danach 500 hoch.

## Quader, Zylinder und Keile

- {{cmd:BOX}}: Klicken Sie zwei Ecken an oder geben Sie sie ein, dann eine Höhe.
- {{cmd:CYLINDER}} (`CYL`): der Mittelpunkt, dann der Radius, dann eine Höhe. Zylinder und extrudierte Kreise haben 48 Seiten und sind glatt schattiert.
- {{cmd:WEDGE}} (`WE`): zwei Ecken und eine Höhe. An der ersten Ecke hat er die volle Höhe, und er läuft an der anderen Ecke auf null ab.

Auf der Registerkarte {{ui:3D}} landet ein Klick auf der Fläche oder Kante unter dem Cursor, sonst auf dem Boden; so kann ein Quader auf einem anderen Volumenkörper stehen.

## Volumenkörper verschieben, kopieren, drehen und löschen

Auf der Registerkarte {{ui:3D}} wählt ein Klick einen Volumenkörper aus; ziehen Sie von links nach rechts für ein Fenster, von rechts nach links für Kreuzen. Danach:

- {{cmd:MOVE}}: Klicken Sie einen Basispunkt und dann den Zielpunkt an, oder geben Sie `<100,0,0>` (oder `@100,0`) für eine Strecke entlang X, Y und Z ein.
- {{cmd:COPY}}: dasselbe, wobei das Original erhalten bleibt.
- {{cmd:ROTATE}}: Geben Sie einen Winkel ein (er dreht sich um die Mitte der Auswahl, um Z), oder klicken Sie den Mittelpunkt, einen Startpunkt und den Winkel an.
- {{cmd:ERASE}} oder {{key:Delete}}.

## Volumenkörper vereinigen, subtrahieren und schneiden

Öffnen Sie {{ui:More}} in der 3D-Symbolleiste oder geben Sie den Befehl ein:

- {{cmd:UNION}} (`UNI`): Wählen Sie die Volumenkörper und drücken Sie {{key:Enter}}: Sie werden zu einem Volumenkörper.
- {{cmd:SUBTRACT}} (`SU`): Wählen Sie die Volumenkörper, die bleiben sollen, und drücken Sie {{key:Enter}}, dann die, die entfernt werden sollen, und drücken Sie erneut {{key:Enter}}. Ein Loch durch einen Block: Zeichnen Sie einen Zylinder hindurch und subtrahieren Sie dann den Zylinder.
- {{cmd:INTERSECT}} (`IN`): Wählen Sie die Volumenkörper und drücken Sie {{key:Enter}}: Übrig bleibt nur, was alle gemeinsam haben.

Der Verlauf nennt das Volumen des Ergebnisses. Jede Operation ist ein Rückgängig-Schritt. Beim ersten Ausführen wird die boolesche 3D-Engine geladen (etwa 0.5 MB; in {{ui:Save for offline}} enthalten). Nur geschlossene Volumenkörper lassen sich verbinden: Ein Volumenkörper mit offenen Kanten (aus losen 3D-Flächen eines anderen Programms) wird mit diesem Grund abgelehnt. Das Ergebnis ist ein Volumenkörper; gekrümmte Flächen bestehen weiterhin aus flachen Facetten, wie es beim Zylinder war.

Doppelklicken Sie auf einen Volumenkörper, um seine Flächen und Kanten einzeln zu bearbeiten; {{key:Esc}} schließt das wieder. Jede 3D-Änderung ist ein Rückgängig-Schritt im selben Verlauf wie die Zeichnung: {{key:Mod+Z}} macht die letzte Aktion auf einer der beiden Registerkarten rückgängig.

## Flache Ansichten auf einem Blatt

1. Öffnen Sie eine Blatt-Registerkarte (oder bleiben Sie auf {{ui:Model}}) und geben Sie {{cmd:VIEWBASE}} (oder `FLATSHOT`) ein.
2. Wählen Sie die Ansicht: {{key:Enter}} für die Vorderansicht, oder `T` (Draufsicht), `R` (rechts), `L` (links), `BA` (hinten), `BO` (unten), `I` (isometrisch).
3. {{key:Enter}} zeigt verdeckte Linien, gestrichelt; `H` lässt sie weg.
4. {{key:Enter}} übernimmt den Maßstab, den CadCraft vorschlägt: auf einem Blatt den größten Standardmaßstab (zum Beispiel 1:20), bei dem die Ansicht in weniger als die halbe Papierfläche passt. Oder geben Sie einen ein: `1:50`, `2:1`.
5. Klicken Sie an die Stelle, an der der Mittelpunkt der Ansicht liegen soll, oder geben Sie sie ein.

Die Ansicht ist eine Blockreferenz, `VIEW-FRONT-1` und so weiter: sichtbare Kanten auf dem Layer VIEW-VISIBLE (0.5 mm), verdeckte auf VIEW-HIDDEN (gestrichelt, 0.25 mm). Verschieben, bemaßen und plotten Sie sie wie jede andere Zeichnung. Sie ist ein Bild der Volumenkörper zu dem Zeitpunkt, an dem Sie sie erstellt haben: Nach Änderungen an den Volumenkörpern löschen Sie die Ansicht und führen {{cmd:VIEWBASE}} erneut aus. Für weitere Ansichten führen Sie den Befehl einmal pro Ansicht aus.

## Umsehen

Ziehen Sie mit dem Rad, um zu orbitieren, {{key:Shift}} + Rad ziehen oder mit der rechten Taste, um zu verschieben (Pan), und drehen Sie das Rad, um am Cursor zu zoomen. Auf einem Trackpad orbitiert man mit zwei Fingern, und eine Pinch-Geste zoomt. Ein Rechtsklick ohne Ziehen ist {{key:Enter}}, wie auf den anderen Registerkarten. `3DORBIT` lässt die linke Taste orbitieren, bis Sie {{key:Enter}} oder {{key:Esc}} drücken.

- {{ui:Views}} (oder {{cmd:VIEW}}): Iso, Draufsicht, Untersicht, Vorderansicht, Rückansicht, Linksansicht, Rechtsansicht, Perspektive oder Parallel, und Zoom Grenzen.
- {{ui:Style}} (oder {{cmd:VSCURRENT}}, `VS`): Schattiert, Schattiert mit Kanten, Verdeckte Linie, Drahtmodell oder Röntgen.

Angeklickte Punkte rasten auf den Volumenkörpern (Ecken, Kanten, Flächen) und auf der 2D-Zeichnung auf dem Boden ein: auf den Enden und Mitten ihrer Linien und Bögen sowie auf Punkten entlang davon. Die 2D-Linien werden auf der Registerkarte {{ui:3D}} nie gewählt. Wenn ein Befehl 2D-Objekte verlangt (EXTRUDE, REVOLVE, SWEEP), wählt ein Klick eines davon aus; ein Ziehen von links nach rechts nimmt, was vollständig im Fenster liegt, und ein Ziehen von rechts nach links nimmt, was es kreuzt, wie auf der Registerkarte {{ui:Model}}.

Ein Ansichtswürfel sitzt oben rechts auf der Registerkarte {{ui:3D}}: Klicken Sie auf eine Fläche, Kante oder Ecke, um von dort aus zu schauen, ziehen Sie ihn zum Orbitieren, und die Hausschaltfläche springt zur Isoansicht zurück. Das ist {{ui:Automatic}}, der Anfang der Einstellung {{ui:Corner indicator}} in den [CadCraft-Einstellungen](topic:settings). Bei {{ui:View cube}} zeigt die Registerkarte {{ui:Model}} ebenfalls einen Würfel, der von oben blickt; ein Klick auf eine andere Seite öffnet die Registerkarte {{ui:3D}} mit Blick von dort. Bei {{ui:Axis icon}} zeigen beide Registerkarten stattdessen die Achsenmarkierung.

## Volumenkörper aus anderen Programmen

Eine Zeichnung aus einem anderen Programm kann 3D-Volumenkörper, Regionen und Körper enthalten (3DSOLID, REGION, BODY: das andere Programm speichert ihre Form als ACIS-Daten). CadCraft zeigt die im Modellbereich beim ersten Öffnen der Registerkarte {{ui:3D}} in der Farbe ihres Layers und mit eigenen Kanten; die Befehlszeile nennt danach, wie viele gezeichnet wurden.

- Sie werden so angezeigt, wie sie sind: Sie können sie nicht wählen, verschieben oder ändern. Layer, die aus oder gefroren sind, blenden sie aus.
- Beim Speichern als DWG wird jeder unverändert zurückgeschrieben, in jeder DWG-Version, sodass das andere Programm sie wieder erhält. DXF-Dateien behalten sie nicht: CadCraft schreibt sie nur in DWG, und das meldet es beim Speichern als DXF.
- Gezeichnet werden: ebene Flächen sowie Flächen auf Zylindern, Kegeln, Kugeln, Tori und einfachen Spline-Flächen, mit geraden, runden und Spline-Kanten. Eine Fläche auf einer anderen Art von Oberfläche oder eine, die CadCraft nicht anlegen kann, wird nicht geschätzt: Sie wird weggelassen und aufgelistet, zum Beispiel „Noch nicht gezeichnet (3D-Volumenkörper): 2 Flächen auf spline-surface (sweepsur), einer Oberfläche, die noch nicht umgesetzt ist.“
- Volumenkörper in Blöcken werden noch nicht angezeigt; „Über diese Datei“ zählt sie.

Gekrümmte Flächen werden als kleine ebene Stücke gezeichnet, etwa 7.5° auseinander, sodass ein gekrümmter Volumenkörper aus der Nähe ein wenig facettiert wirkt.

## Speichern und exportieren

Beim Speichern bleibt das 3D-Modell in DWG und in DXF erhalten. Jede Fläche wird als 3D-Fläche auf dem Layer `CC-3D` gespeichert, damit andere Programme die Volumenkörper zeigen. CadCraft behält außerdem eine eigene, exakte Kopie in der Datei, die beim erneuten Öffnen der Zeichnung wieder eingelesen wird, samt 3D-Ansicht, wie sie war (Kamera, Projektion und visueller Stil). 3D-Flächen aus anderen Programmen kommen auf der Registerkarte {{ui:3D}} als lose Flächen herein, zu einer Gruppe zusammengefasst. Eine 3D-Fläche in einem Block kommt für jede Referenz dieses Blocks im Modell einmal herein, so platziert und gedreht wie die Referenz; im Block selbst und auf einem Blatt wird eine 3D-Fläche flach als ihr Umriss gezeichnet.

{{ui:Export}} in der 3D-Gruppe lädt nur die Volumenkörper herunter: GLB für Betrachter und das Web ({{cmd:GLBOUT}}), OBJ ({{cmd:OBJOUT}}) oder STL für den 3D-Druck, in Millimetern ({{cmd:STLOUT}}). {{cmd:EXPORT3D}} fragt, welches Format Sie möchten.

:::note
Das 3D-Modell hat wirkliche Größe. Eine Zeichnung ohne Einheiten gilt als Millimeter, sodass `1000` einen Meter ergibt. Wenn Sie die Einheiten der Zeichnung später ändern (Eigenschaften, ohne Auswahl), werden die Volumenkörper mit skaliert, damit sie auf der Zeichnung bleiben, und der Verlauf meldet das. Ein {{key:Mod+Z}} macht die Änderung der Einheiten und die Skalierung zusammen rückgängig.
:::
