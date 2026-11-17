---
title: Befehlsreferenz
summary: Jeder Befehl des Zeichenprogramms CadCraft mit seinen Aliasen, den Fragen, die er stellt, seinen Optionen und Standardwerten.
keywords: Befehle, Aliase, Befehlsliste, Fläche, Umfang, measuregeom, line, pline, circle, arc, trim, offset, dimlinear, block, insert, layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplizieren, selectall
from: 7db2646b
---

Geben Sie einen Befehlsnamen oder Alias ein und drücken Sie {{key:Enter}} oder {{key:Space}}. Groß- und Kleinschreibung spielt keine Rolle, und ein führendes `_`, `-`, `.` oder `'` wird ignoriert. Geben Sie `HELP` (oder `?`) ein, um eine kurze Liste jedes Befehls im Befehlszeilenverlauf auszugeben; drücken Sie {{key:F1}} für diese Hilfe.

So lesen Sie die Eingabeaufforderungen: Optionen stehen in eckigen Klammern, und Sie wählen eine, indem Sie ihre Großbuchstaben eingeben (`D` für Durchmesser). Ein Standardwert steht in spitzen Klammern; drücken Sie {{key:Enter}}, um ihn zu übernehmen. Wo ein Punkt verlangt wird, können Sie klicken oder jedes der Formate in [Koordinaten- und Abstandseingabe](topic:coordinate-entry) eingeben. Wo ein Abstand verlangt wird, können Sie eine Zahl eingeben oder zwei Punkte anklicken.

Wenn Sie {{key:Enter}} drücken, wo ein Punkt oder ein Objekt verlangt wird und es keinen Standardwert gibt, endet der Befehl. {{key:Esc}} bricht ihn ab. Was ein Befehl getan hat, ist ein Schritt für {{ui:Rückgängig}}.

## Zeichnen

### LINE

Aliase: `L`. Gerade Segmente, jedes ein eigenes Objekt.

- `Specify first point` (Enter: vom zuletzt angegebenen Punkt beginnen)
- `Specify next point [Undo]`, wiederholt. Nach zwei Segmenten: `[Undo/Close]`.
- `U` nimmt das letzte Segment zurück, `C` schließt zum ersten Punkt und beendet. Enter beendet.

### PLINE

Aliase: `PL`. Eine Polylinie aus Linien- und Bogensegmenten.

- `Specify start point`
- `Specify next point [Arc/Close/Undo]` (Close, sobald es zwei Segmente gibt)
- `A` wechselt zu Bögen: `Specify endpoint of arc [Line/CLose/Undo]`. Jeder Bogen setzt tangential an das vorherige Segment an. `L` wechselt zurück zu Linien, `CL` schließt mit einem Bogen.
- Enter beendet; die Polylinie bleibt offen.

### CIRCLE

Aliase: `C`.

- `Specify center point for circle [3P/2P/Ttr (tan tan radius)]`
- `Specify radius of circle [Diameter] <last radius>`; `D` fragt `Specify diameter of circle`.
- `2P`: zwei Enden eines Durchmessers. `3P`: drei Punkte auf dem Kreis.
- `T` (auch der Befehl `TTR`, und {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Kreis: Tan, Tan, Radius}}): `Specify point on object for first tangent of circle`, dann die zweite, dann der Radius (Enter: der letzte). Der Kreis berührt beide Objekte (Linien, Bögen, Kreise, Polylinien-Segmente, auch in Blöcken); von den Kreisen, die das tun, wird der gewählt, der Ihren Auswahlpunkten am nächsten liegt. „Kreis existiert nicht“, wenn keiner passt.
- `TTT` (oder {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Kreis: Tan, Tan, Tan}}): drei Objekte; der Kreis, der alle drei berührt und Ihren Auswahlpunkten am nächsten liegt (drei Linien ergeben den inneren oder einen äußeren Kreis, je nachdem, wo Sie wählen).

### ARC

Aliase: `A`.

- `Specify start point of arc [Center]`, `Specify second point of arc`, `Specify end point of arc`: ein Bogen durch drei Punkte.
- `C`: `Specify center point of arc`, `Specify start point of arc`, `Specify end point of arc`. Der Bogen verläuft gegen den Uhrzeigersinn vom Start zum Ende.

### RECTANG

Aliase: `REC`, `RECTANGLE`. Eine geschlossene Polylinie.

- `Specify first corner point`, `Specify other corner point`. Geben Sie für die zweite Ecke `@width,height` ein.

### POLYGON

Aliase: `POL`. Ein regelmäßiges Polygon als geschlossene Polylinie.

- `Enter number of sides <4>` (3 bis 1024)
- `Specify center of polygon`
- `Enter an option [Inscribed in circle/Circumscribed about circle] <I>`
- `Specify radius of circle`: klicken oder einen Punkt eingeben; sein Abstand legt die Größe fest, seine Richtung dreht das Polygon.

### ELLIPSE

Aliase: `EL`.

- `Specify axis endpoint of ellipse [Center]`, `Specify other endpoint of axis`, `Specify distance to other axis`
- `C`: `Specify center of ellipse`, `Specify endpoint of axis`, dann der Abstand zur anderen Achse.

### HATCH

Aliase: `H`, `BH`, `BHATCH`; oder {{ui:Schraffur}} in der Symbolleiste. Gibt zuerst das aktuelle Muster, den Maßstab und den Winkel aus.

- `Pick internal point [Select objects/Pattern/SCale/Angle]`, wiederholt (`Undo`, sobald es eine Fläche gibt): jeder Klick fügt die geschlossene Fläche um ihn herum hinzu, mit den geschlossenen Formen darin als Inseln. Enter erzeugt eine Schraffur aus allen.
- `S`: `Select closed objects` (geschlossene Polylinien, Kreise, geschlossene Ellipsen).
- `P`: `Enter a pattern name, SOLID, or ? for the list <current>`. `SC`: `Specify pattern scale`. `A`: `Specify pattern angle`.

Siehe [Schraffur und Flächenfüllung](topic:hatch).

### POINT

Aliase: `PO`; oder {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Punkt}}. Punktobjekte, eines pro Klick, bis Enter.

- `Specify a point`

### XLINE

Aliase: `XL`; oder {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Konstruktionslinie}}. Konstruktionslinien, in beide Richtungen unbegrenzt. Siehe [Konstruktionslinien und Strahlen](topic:construction-lines).

- `Specify a point [Hor/Ver/Ang/Bisect/Offset]`, dann `Specify through point` für jede Linie, bis Enter.
- `A`: `Enter angle of construction line [Reference] <0>`; `R` fragt zuerst `Select a line object`.
- `B`: `Specify angle vertex point`, `Specify angle start point`, dann `Specify angle end point` für jede Linie.
- `O`: `Specify offset distance [Through] <Through>`, dann `Select a line object` und `Specify side to offset` (oder `Specify through point`) für jede Linie.

### RAY

Keine Aliase; oder {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Strahl}}. `Specify start point`, dann `Specify through point` für jeden Strahl, bis Enter.

### TEXT

Aliase: `DT`, `DTEXT`; oder {{ui:Text}} in der Symbolleiste. Einzeiliger Text; jede Zeile ist ein eigenes Objekt.

- `Specify start point of text [Justify]`
- `J`: `Enter an option [Left/Center/Right/Middle/TL/MC] <L>`, dann `Specify insertion point of text`
- `Specify height <current text height>`
- `Specify rotation angle of text <0>`
- `Enter text`, wiederholt: jedes Enter beginnt die nächste Zeile darunter. Enter auf einer leeren Zeile beendet. {{key:Space}} gibt hier ein Leerzeichen ein.

## Ändern


Aliase: `MT`, `T`; oder {{ui:Absatz}} in der Symbolleiste. Absatztext, der auf eine Breite umbricht, an Ort und Stelle eingegeben.

- `Specify first corner`
- `Specify opposite corner [Height/Justify/Line spacing/Rotation/Width]`: Die Breite zwischen den beiden Ecken ist der Umbruch des Textes. `H` fragt `Specify height`, `J` `Enter justification [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Enter line spacing factor (0.25 to 4)`, `R` `Specify rotation angle`, `W` `Specify width (0 for no wrapping)` und überspringt die zweite Ecke.
- Danach öffnet sich ein Feld auf der Zeichnung: eingeben, {{key:Enter}} für einen neuen Absatz, {{key:Mod+Enter}} oder ein Klick außerhalb beendet, {{key:Esc}} bricht ab. Seine Leiste legt Höhe, Zeilenabstand, Breite und Ausrichtung fest. Siehe [Text und Beschriftungen hinzufügen](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliase: `ED`, `DDEDIT`; oder doppelklicken Sie auf einen Text. `Select a text to edit`, wiederholt bis {{key:Enter}}: jeder öffnet sich im selben Feld. Gestartet auf einem gewählten oder doppelgeklickten Text, bearbeitet er diesen und endet.
### ERASE

Aliase: `E`, `DELETE`; oder {{key:Delete}} drücken, während Objekte ausgewählt sind.

- `Select objects` (entfällt, wenn Objekte bereits ausgewählt sind)

### MOVE

Aliase: `M`.

- `Select objects`
- `Specify base point [Displacement]`, `Specify second point`
- `D`: `Specify displacement`, eingegeben als `dx,dy`.

### COPY

Aliase: `CO`, `CP`. Kopien so oft, wie Sie Punkte angeben.

- `Select objects`
- `Specify base point [Displacement]`
- `Specify second point [Undo]`, wiederholt bis Enter. `U` nimmt die letzte Kopie zurück.

### ROTATE

Aliase: `RO`.

- `Select objects`, `Specify base point`
- `Specify rotation angle <last angle>`: Grad, gegen den Uhrzeigersinn positiv; oder einen Punkt anklicken, um zu ihm hin zu drehen.

### SCALE

Aliase: `SC`.

- `Select objects`, `Specify base point`
- `Specify scale factor`: geben Sie einen Faktor wie `0.5` oder `2` ein. Ein angeklickter Punkt liefert als Faktor seinen Abstand vom Basispunkt.

### MIRROR

Aliase: `MI`.

- `Select objects`
- `Specify first point of mirror line`, `Specify second point of mirror line`
- `Erase source objects? [Yes/No] <N>`

### ALIGN

Aliase: `AL`; oder {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Ausrichten}}.

- `Select objects`
- `Specify first source point`, `Specify first destination point`
- `Specify second source point (Enter to continue)`, `Specify second destination point`
- `Specify third source point (Enter to continue)`, `Specify third destination point`
- Bei zwei Paaren: `Scale objects based on alignment points? [Yes/No] <N>`

Siehe [Objekte ausrichten](topic:modify-objects#align-objects).

### ALIGNTO

- `Select objects` (oder die Auswahl), `Align [Left/Center/Right/Top/Middle/Bottom] <Left>`, `To [Selection/First/Last/Point] <Selection>`; `P` fragt nach dem Punkt. Die Auswahl bleibt.

### DISTRIBUTE

- `Select objects` (mindestens drei), `Distribute [Horizontally/Vertically] <Horizontally>`, `Space evenly [Centers/Gaps] <Gaps>`. Die äußeren beiden bleiben; die Auswahl bleibt.

### ALIGNPANEL

Aliase: `ALP`; oder {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Ausrichten und verteilen}}. Öffnet den Bereich, der ALIGNTO und DISTRIBUTE per Klick ausführt.

### LASER

Aliase: `LASERCUT`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Laser…}}. Öffnet den Laser-Bereich über der Zeichnung: was jeder Layer bewirkt (schneiden, ritzen, gravieren, füllen, Bild), die Vorschau, der GRBL-G-Code zum Speichern sowie Rahmen und Senden über Web Serial. Siehe [Eine Zeichnung an einen Laser senden](topic:laser-cutting).

### STRETCH

Aliase: `S`; oder {{ui:Strecken}}. `Select objects to stretch`: ziehen Sie Kreuzen-Fenster über die Enden (oder geben Sie `C` ein), um zu verschieben. `Specify base point [Displacement]`, `Specify second point`. Punkte innerhalb der Fenster bewegen sich: Linienenden, Polylinien-Eckpunkte (Bogensegmente behalten ihre Höhe), Bemaßungspunkte; Kreise, Ellipsen, Text, Punkte und Blöcke bewegen sich ganz, wenn ihr Zentrum oder Einfügepunkt innen liegt. Eine vor dem Befehl getroffene Auswahl behält die Kreuzen-Fenster (und Lassos), die sie erzeugt haben, sodass sie auf dieselbe Weise strecken. Ohne Fenster bewegen sich die Objekte ganz.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliase: `AR`; oder {{ui:Anordnung}}. `Select objects`, dann `Enter array type [Rectangular/POlar] <Rectangular>` (nur ARRAY).

- Rechteckig beginnt mit 4 Spalten × 3 Zeilen, im 1.5-fachen Abstand der Objektgröße, als Vorschau gezeigt. `Enter an option [COUnt/Spacing/COLumns/Rows/eXit] <X>`: `COU` fragt Spalten und Zeilen, `S` die Abstände zwischen Spalten und zwischen Zeilen (negativ geht nach links oder nach unten), `COL` und `R` je eine Richtung.
- Polar fragt `Specify center point of array`, beginnt mit 6 Elementen rundherum, gedreht. `Enter an option [Items/Fill angle/ROTate items/eXit] <X>`: `I` Elemente, `F` den Winkel zum Füllen (+ gegen den Uhrzeigersinn, − im Uhrzeigersinn), `ROT` Ja oder Nein.
- {{key:Enter}} (eXit) erzeugt die Kopien als einfache Objekte. Ein Schritt für {{ui:Rückgängig}}.

### OFFSET

Aliase: `O`. Linien, Bögen, Kreise und Polylinien.

- `Specify offset distance [Through] <last distance, or Through>`
- `Select object to offset`, dann `Specify point on side to offset` (oder mit Through `Specify through point`), wiederholt bis Enter.

### TRIMEXTENDMODE

- `Enter new value for TRIMEXTENDMODE (1 Quick, 0 Standard)`: wie TRIM und EXTEND starten. `1` Schnell: jedes Objekt ist eine Schneidkante oder Begrenzung. `0` Standard: sie fragen zuerst nach den Kanten. Auch `(setvar "TRIMEXTENDMODE" 0)` in LISP.

### TRIM

Aliase: `TR`. Gibt zuerst `Current settings: Quick mode (TRIMEXTENDMODE 1), edges: No extend, dragging draws a path` aus. Im Schnellmodus ist jedes sichtbare Objekt eine Schneidkante, und ein Objekt, das nichts kreuzt, wird gelöscht; im Standardmodus fragt er zuerst `Select cutting edges (Enter = every object)` und schneidet nur an diesen.

- `Select object to trim or shift-select to extend [cuTting edges/Fence/Crossing/mOde/Edge/eRase/Undo]`, wiederholt: klicken Sie das zu entfernende Teil an (es wird grau und gestrichelt angezeigt, solange der Zeiger darauf ruht), ziehen Sie einen Pfad über mehrere Teile (alle gehen in einem Schritt), oder klicken Sie zwei leere Stellen für einen Zaun dazwischen. {{key:Shift}} dehnt stattdessen. `T` wählt Schneidkanten (Standardmodus), `F` fragt nach Zaunpunkten, `C` zwei Fensterecken (teilweise darin liegende Teile gehen), `O` fragt `Enter a trim mode option [Quick/Standard]`, `E` fragt `Enter an implied edge extension mode [Extend/No extend]` (EDGEMODE), `R` löscht die von Ihnen gewählten Objekte, `U` macht die letzte Auswahl oder den letzten Zug rückgängig. Enter beendet. Siehe [Stutzen und Dehnen](topic:trim-and-extend).

### EXTEND

Aliase: `EX`. Dasselbe wie TRIM umgekehrt: `Select object to extend or shift-select to trim [Boundary edges/Fence/Crossing/mOde/Edge/Undo]`. Ein Klick verlängert das nächstliegende Ende bis zur nächsten Begrenzung; ein gezogener Pfad oder Zaun verlängert jedes Objekt, das er kreuzt; {{key:Shift}} stutzt. `B` wählt Begrenzungskanten (Standardmodus). Modus und Kante sind mit TRIM gemeinsam.

### LINKVIEWS

Aliase: `SYNCVIEWS`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Ansichten der Teilfenster koppeln}}, oder das Verknüpfungssymbol auf den Zeichnungs-Registerkarten. `Link the panes' views [ON/OFF]` (Enter wechselt in den anderen Zustand): Solange es an ist, bewegt ein Pan oder Zoom im aktiven Teilfenster jedes Teilfenster, das dieselbe Art Raum zeigt. Siehe [Den Bildschirm teilen](topic:split-screen).

### OPENIN3D

Keine Aliase; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:In ModelCraft öffnen}}, wenn die 3D-Modellierungs-App eine übergebene Zeichnung übernimmt. Öffnet sie dort in einem neuen Tab als DWG (es wird nichts hochgeladen). Blockiert der Browser den Tab, wird das angezeigt.

### LASSOMODE

`Enter new value for LASSOMODE (1 = lasso, 0 = rectangle)`: was Drücken und Ziehen auf einer leeren Stelle zeichnet. Dasselbe wie Einstellungen › CadCraft › Ziehen zum Auswählen. Siehe [Lasso-Auswahl](topic:lasso-selection).

### FILLET

Aliase: `F`. Linien, Bögen, Kreise und Polylinien. Gibt zuerst `Current settings: Mode = TRIM, Radius = 0` aus.

- `Select first object [Undo/Polyline/Radius/Trim/Multiple]`
  - `R` fragt `Specify fillet radius <last>`. `T` fragt `Enter Trim mode option [Trim/No trim]`: Mit No trim bleiben die Objekte, wie sie sind, und nur der Bogen wird hinzugefügt.
  - `M` lässt den Befehl für weitere Ecken laufen, bis {{key:Enter}}; `U` nimmt die letzte Ecke zurück, ohne den Befehl zu verlassen.
  - `P` fragt `Select 2D polyline [Radius]` und rundet jede Ecke, an der sich zwei gerade Segmente treffen. Verrundungen, die sie schon hat, werden durch den neuen Radius ersetzt; Radius 0 entfernt sie. Ecken, deren Seiten für den Radius zu kurz sind, bleiben und werden gezählt.
- `Select second object or shift-select to apply corner [Radius]`. Halten Sie beim Klicken {{key:Shift}} gedrückt für eine scharfe Ecke, unabhängig vom Radius.

Klicken Sie jedes Objekt auf dem Teil an, das Sie behalten möchten. Zwei Linien, die sich nicht treffen, werden verlängert. Zwei parallele Linien erhalten einen Halbkreis über die Lücke, am Ende der ersten Linie, das Ihrem Klick am nächsten liegt. Ein Kreis wird nie geschnitten. Zwei nebeneinander liegende Segmente einer Polylinie erhalten den Bogen innerhalb der Polylinie; eine Polylinie und ein anderes Objekt funktionieren, wenn der Schnitt auf das erste oder letzte Segment der Polylinie fällt.

### CHAMFER

Aliase: `CHA`. Linien und die geraden Segmente von Polylinien. Gibt zuerst die aktuellen Abstände (oder Länge und Winkel) aus.

- `Select first line [Undo/Polyline/Distance/Angle/Trim/mEthod/Multiple]`
  - `D` fragt `Specify first chamfer distance <last>` und `Specify second chamfer distance <the first>`: der erste wird von der ersten Linie abgeschnitten, die Sie wählen, der zweite von der anderen.
  - `A` fragt `Specify chamfer length on the first line` und `Specify chamfer angle from the first line`.
  - `E` (Methode) wählt, welche der beiden die nächste Fase verwendet. `T`, `M`, `U` und `P` funktionieren wie bei {{cmd:FILLET}}.
- `Select second line or shift-select to apply corner [Distance/Angle/mEthod]`. {{key:Shift}}+Klick erzeugt eine scharfe Ecke.

Ein Abstand, der länger als die Linie ist, wird abgelehnt (`Distance is too large.`).

### BREAK und BREAKATPOINT

Aliase: `BR`. `Select object` (wo Sie klicken, ist der erste Punkt), `Specify second break point [First point]`; `F` fragt `Specify first break point` und `Specify second break point`. Der Teil dazwischen wird entfernt; bei einem Kreis gegen den Uhrzeigersinn vom ersten Punkt aus. BREAKATPOINT fragt `Specify break point` und teilt das Objekt dort in zwei (kein Kreis).

### LENGTHEN

Aliase: `LEN`. `Select an object to measure [DElta/Percent/Total/DYnamic]`: eine Auswahl gibt `Current length` (und den eingeschlossenen Winkel eines Bogens) aus und fragt erneut. `DE` fragt `Enter delta length (negative shortens) [Angle]`, `P` `Enter percentage length`, `T` `Specify total length [Angle]`, `DY` zieht. Dann `Select an object to change [Undo]`, wiederholt: das Ende, das dem Klick am nächsten liegt, bewegt sich. Linien, Bögen und offene Polylinien.

### JOIN

Aliase: `J`. `Select objects to join`. Linien, Bögen und offene Polylinien, die Ende an Ende treffen, werden zu Polylinien (geschlossen, wenn die Kette sich schließt); Linien auf einer Geraden werden zu einer Linie; Bögen eines Kreises werden zu einem Bogen oder dem Kreis. Der Verlauf meldet, wie viele Objekte verbunden wurden und wie viele nicht.

### MATCHPROP

Aliase: `MA`, `PAINTER`. `Select source object`, dann `Select destination objects [Settings]` und {{key:Enter}}. Kopiert Layer und Farbe und zwischen Objekten derselben Art die Texthöhe und -breite, die Bemaßungsmaße oder das Schraffurmuster. `S` fragt `Turn a property on or off [Color/LAyer/Text/Dimension/Hatch]`, wiederholt bis {{key:Enter}}; die Wahl wird für die Sitzung gemerkt.

### EXPLODE

Aliase: `X`. Polylinien werden zu Linien und Bögen, Blockreferenzen werden zu ihren Objekten, Bemaßungen werden zu Linien, Pfeilspitzen und Text.

- `Select objects`

## Zwischenablage

Die eigene Zwischenablage von CadCraft: Sie funktioniert innerhalb einer Zeichnung, zwischen Zeichnungen und zwischen CadCraft-Registerkarten in diesem Browser. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, oder {{ui:Kopieren}} in der Gruppe {{ui:Bearbeiten}}. Kopiert Objekte in die Zwischenablage, mit den Blöcken und Layern, die sie verwenden. Die Objekte bleiben ausgewählt.

- `Select objects to copy` (entfällt, wenn Objekte bereits ausgewählt sind)

### CUTCLIP

{{key:Mod+X}}, oder {{ui:Ausschneiden}} im Menü {{ui:Mehr}}. Kopiert Objekte in die Zwischenablage und löscht sie dann (ein Schritt für {{ui:Rückgängig}}).

- `Select objects to cut` (entfällt, wenn Objekte bereits ausgewählt sind)

### COPYBASE

Kopiert Objekte mit einem Basispunkt, den Sie wählen, in die Zwischenablage; beim Einfügen wird dieser Punkt platziert.

- `Specify base point`
- `Select objects to copy`

### PASTECLIP

{{key:Mod+V}}, oder {{ui:Einfügen}} in der Gruppe {{ui:Bearbeiten}}. Die Kopie folgt dem Cursor und hängt an der unteren linken Ecke ihrer Ausdehnung (oder an ihrem Zentrum oder dem Punkt `COPYBASE`; siehe [CadCraft-Einstellungen](topic:settings)).

- `Specify insertion point`

Die eingefügten Objekte sind ausgewählt. Ein Block, den die Zeichnung schon unter demselben Namen hat, behält die Definition dieser Zeichnung.

Ist ein in MarkupCraft kopierter Bereich neuer als das, was CadCraft kopiert hat (und jünger als 6 Stunden), fügen {{key:Mod+V}} und `PASTECLIP` stattdessen diesen Bereich ein: siehe `PASTEAREA`.

### PASTEAREA

Aliase: `PAREA`. {{ui:Kopierten Bereich einfügen}} im Menü {{ui:Mehr}}. Fügt einen Bereich, der in MarkupCraft mit {{ui:Bereich kopieren}} kopiert wurde, als Bild in seiner wahren Größe ein. Siehe [Bilder in einer Zeichnung](topic:pictures).

- `Specify the lower-left corner of the copied area`
- `Scale its paper size by (100 for a 1:100 sheet; Points: two points on it and their true distance) [Points] <1>` (nur wenn das Blatt keinen Zeichnungsmaßstab hatte): eine Zahl, {{key:Enter}} für die Papiergröße, oder `P`, dann `First point on the pasted area`, `Second point on the pasted area` und ihr wahrer Abstand.

### PASTEORIG

{{key:Mod+Shift+V}}, oder {{ui:An gleicher Position einfügen}} im Menü {{ui:Mehr}}. Fügt an den Koordinaten ein, von denen die Objekte kopiert wurden. Fragt nichts.

### DUPLICATE

Aliase: `DUP`. {{key:Mod+D}}, oder {{ui:Duplizieren und verschieben}} im Menü {{ui:Mehr}}. Eine Kopie der Objekte bewegt sich mit dem Zeiger von ihrer Position aus; {{key:Esc}} lässt nichts zurück. Verwendet die Zwischenablage nicht.

- `Select objects to duplicate` (entfällt, wenn Objekte bereits ausgewählt sind)
- `Specify where the copy goes (Esc leaves nothing)`: klicken, einen Punkt eingeben, `@dx,dy` (von der Stelle des Zeigers aus), oder einen Abstand in Richtung des Cursors.

### SELECT

Fragt `Select objects` (mit allen Optionen unten) und lässt das Gewählte ausgewählt, für den nächsten Befehl oder für später mit `P`.

### QSELECT

Aliase: `QS`. Im Browser der Dialog {{ui:Schnellauswahl}} (siehe [Objekte wählen](topic:select-objects#select-by-a-rule-quick-select)). Ohne ihn fragt die Befehlszeile `Enter object type`, `Enter property`, `Enter operator [=/<>/>/</*/Select all] <=>` und `Enter value`. Die Treffer werden zur Auswahl.

### SELECTSIMILAR

Aliase: `SIM`. `Select objects [SEttings]` (oder die aktuelle Auswahl): wählt jedes Objekt desselben Typs mit demselben Layer und derselben Farbe (und Blocknamen, Schraffurmuster). `SE` fragt `Turn a property on or off [LAyer/COlor/NAme/PAttern/HEight]`, wiederholt bis {{key:Enter}}.

### FIND

Keine Aliase; oder {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Suchen und Ersetzen}}. Im Browser der Dialog {{ui:Suchen und Ersetzen}} (siehe [Text und Beschriftungen hinzufügen](topic:text#find-and-replace-words)). Ohne ihn: `Enter text to find`, dann `Enter replacement text (Enter: select what is found)`. Sucht in Text, Attributwerten und Bemaßungstext, auf dem offenen Tab oder in der Auswahl.

### SELECTALL und DESELECT

`SELECTALL` (Alias `AI_SELALL`, {{key:Mod+A}}) wählt jedes Objekt, das Sie auf dem offenen Tab bearbeiten können. `DESELECT` (Aliase `AI_DESELECT`, `SELECTNONE`; oder {{key:Esc}}) hebt die Auswahl auf.

## Bemaßungen

### DIMLINEAR

Aliase: `DLI`, `DIMLIN`. Horizontaler oder vertikaler Abstand.

- `Specify first extension line origin [Select object]` (Enter oder `S`: `Select object to dimension`, dann eine Linie, einen Bogen, einen Kreis oder ein Polylinien-Segment anklicken)
- `Specify second extension line origin`
- `Specify dimension line location [Text/Horizontal/Vertical/Rotated]`. `T` fragt nach Text (`<>` ist der gemessene Wert), `H` und `V` legen die Richtung fest, `R` fragt `Specify angle of dimension line <0>`.

### DIMALIGNED

Aliase: `DAL`, `DIMALI`. Der wahre Abstand zwischen zwei Punkten.

- Ursprünge wie bei {{cmd:DIMLINEAR}}, dann `Specify dimension line location [Text]`.

### DIMANGULAR

Aliase: `DAN`, `DIMANG`.

- `Select arc, circle or line, or Enter for a vertex`
- Bogen: sein Winkel. Kreis: `Specify second angle endpoint`. Linie: `Select second line`. Enter: `Specify angle vertex`, `Specify first angle endpoint`, `Specify second angle endpoint`.
- `Specify dimension line location [Text]`: in den Winkel klicken, um ihn zu messen.

### DIMRADIUS und DIMDIAMETER

Aliase: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Select arc or circle`, dann `Specify dimension line location [Text]`.

### DIMCONTINUE

Aliase: `DCO`, `DIMCONT`. Setzt bei der zuletzt erstellten linearen oder ausgerichteten Bemaßung fort (oder fragt `Select linear or aligned dimension`).

- `Specify second extension line origin [Undo]`, wiederholt bis Enter.

### DIMBASELINE

Aliase: `DBA`, `DIMBASE`. Wie {{cmd:DIMCONTINUE}}, aber jede Bemaßung beginnt am ersten Ursprung und wird weiter außen gestapelt.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Keine Aliase. Jede fragt `Enter new value for … <current>` und legt dieses Maß für **neue** Bemaßungen fest: Gesamtmaßstab, Texthöhe, Pfeilgröße, Dezimalstellen (bis 8), Abstand um den Text, Überstand über die Maßlinie, Versatz vom Ursprung. Siehe [Bemaßungsmaße festlegen](topic:dimension-settings).

### DIMLUNIT

Bemaßungseinstellung: nur das Format neuer Bemaßungen (1 wissenschaftlich, 2 dezimal, 3 Ingenieur, 4 Architektur, 5 Bruch).

### DIMSTYLE und -DIMSTYLE

Aliase: `DST`, `DDIM`, `D`. Der Manager für Bemaßungsstile: {{ui:Aktuell setzen}}, {{ui:Neu…}}, {{ui:Ändern…}}, {{ui:Umbenennen…}}, {{ui:Löschen}}, {{ui:Vergleichen…}}, {{ui:Auf Auswahl anwenden}}. `-DIMSTYLE` in der Befehlszeile: `Dimension style [Restore/Save/Delete/Apply/Compare/reName/List]`. Siehe [Bemaßungsmaße festlegen](topic:dimension-settings#named-dimension-styles).

### DIMEDIT und DIMTEDIT

`DIMEDIT` (`DED`): `Dimension edit [Home/New/Rotate/Oblique] <Home>`, dann die Bemaßungen (oder die bereits gewählten). Neu fragt nach dem Text (`<>` = das Maß); Drehen für einen Winkel (0 setzt den Text zurück); Schräg für den Winkel der Maßhilfslinien zur X-Achse (Enter = keiner; nur lineare und ausgerichtete Bemaßungen). `DIMTEDIT` (`DIMTED`): `Dimension text [Left/Right/Center/Home/Angle] <Center>`. Siehe [Bemaßungsmaße festlegen](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliase: `DTU`. `Units in the text of new dimensions [Drawing units/mm/cm/m/km]`, oder bei gewählten Bemaßungen `Units in the text of the selected dimensions`. Schreibt die gemessene Länge in dieser Einheit mit der Einheit danach (DIMLFAC und ein DIMPOST-Suffix); `D` kehrt zu den Zeichnungseinheiten zurück. Siehe [Bemaßungen in mm, cm, m oder km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliase: `RC`. Gibt `Arc length: … Type: …` aus, dann `Specify first point [Arc length/Object/Rectangular/Polygonal/Freehand]`. Rechteckig fragt `Specify opposite corner`; Polygonal `Specify next point (Enter closes the cloud) [Undo]`; Freihand folgt dem Zeiger bis zu einem Klick oder {{key:Enter}}; `O` fragt `Select object` und `Reverse direction? [Yes/No] <N>` und macht das Objekt zur Wolke. `A` fragt `Specify the length of each arc`. `R`, `P` und `F` wählen den Typ für die nächste Wolke. Das Ergebnis ist eine geschlossene Polylinie aus Bögen.

### MLEADER

Aliase: `MLD`; oder {{ui:Führungslinie}}. `Specify leader arrowhead location [Arrowhead size/Landing distance]`, `Specify leader landing location`, dann der Text im Feld an Ort und Stelle (oder ohne es `Enter text (an empty line ends)`). Wird in DWG als echte Multi-Führungslinie gespeichert; DXF behält die Linien, die Pfeilspitze und den Text, die es zeichnet.

## Parametrisch

Siehe [Eine Zeichnung mit Abhängigkeiten versehen](topic:constraints) und [Parameter und Gleichungen verwenden](topic:parameters). Abhängigkeiten wirken auf der Registerkarte {{ui:Modell}}.

### GEOMCONSTRAINT und die GC-Befehle

Alias `GCON`: `Enter constraint type [Horizontal/Vertical/Perpendicular/PArallel/Tangent/Coincident/CONcentric/COLlinear/Symmetric/Equal/Fix] <Horizontal>`, dann die Eingabeaufforderungen dieses Befehls.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Select an object [2Points] <2Points>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Select first object`, `Select second object` (das zweite bewegt sich).
- {{cmd:GCCOINCIDENT}}: `Select first point [Object/Autoconstrain] <Object>`, `Select second point [Object] <Object>`.
- {{cmd:GCFIX}}: `Select point [Object] <Object>`.
- {{cmd:GCSYMMETRIC}}: `Select first object [2Points] <2Points>`, `Select second object`, `Select symmetry line`.

### DIMCONSTRAINT und die DC-Befehle

Alias `DCON`: `Select associative dimension to convert [LInear/Horizontal/Vertical/ALigned/ANgular/Radial/Diameter/Convert] <ALigned>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Specify first constraint point [Object] <Object>`, `Specify second constraint point`, `Specify dimension line location`, `Dimension text <d1=40>` (eine Zahl, ein Ausdruck oder `name=expression`).
- {{cmd:DCALIGNED}}: wie oben, mit `[Object/Point & line/2Lines]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Select arc or circle`. {{cmd:DCANGULAR}}: `Select first line or arc`, `Select second line`.
- {{cmd:DCCONVERT}}: `Select dimensions to convert`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Select objects [Settings]`. `S` fragt die Toleranzen für Abstand und Winkel.
- {{cmd:DELCONSTRAINT}} (Alias `DELCON`): `Select objects`; ihre Abhängigkeiten werden entfernt.
- {{cmd:CONSTRAINTBAR}} (Alias `CBAR`): `Select objects [Showall/Hideall]`, dann `[Show/Hide]`.
- {{cmd:DCDISPLAY}}: `Enter an option [Show/Hide]`.

### PARAMETERS und -PARAMETERS

{{cmd:PARAMETERS}} (Aliase `PAR`, `PARAM`) öffnet den Bereich {{ui:Parameter}}. `-PARAMETERS`: `Enter an option [New/Edit/Rename/Delete/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Lädt ein Makro (.swb) herunter, das das Modell in SolidWorks als eine einzige Skizze mit Abhängigkeiten neu aufbaut. Siehe [Skizzen zu anderen Teilemodellierern und von dort verschieben](topic:solidworks-sketches).

## Blöcke

### ANNOSCALE

Aliase: `CANNOSCALE`. Sagt den Beschriftungsmaßstab der Zeichnung und wie viele beschriftungsfähige Objekte sie enthält, dann fragt `New annotation scale`: geben Sie `1:50`, `1:100`, `2:1`, eine nackte Zahl (`50` ist 1:50) oder den Namen eines eigenen Maßstabs der Zeichnung ein. Jeder beschriftungsfähige Text und jede Bemaßung wird so skaliert, dass sie im neuen Maßstab gleich groß gedruckt wird, in einem Schritt für {{ui:Rückgängig}}; Objekte, die nicht beschriftungsfähig sind, bleiben unverändert. Siehe [Einheiten, Papier und Maßstäbe](topic:units-papers-scales#annotate-by-scale).

### SCALELISTEDIT

Aliase: `SCALELIST`. `Scale list [Add/Edit/Delete/List/Reset]` bis {{key:Enter}}. Hinzufügen: `Scale name`, `Paper units`, `Drawing units`. Bearbeiten und Löschen fragen nach dem Namen des Maßstabs. Die eigenen Maßstäbe der Zeichnung kommen in die Maßstablisten der Ansichtsfenster und des Plots und werden mit der Zeichnung gespeichert. Siehe [Einheiten, Papier und Maßstäbe](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT und PEDIT

`SPLINE` (`SPL`): `First point of the spline [Method/Object] (Fit points)`. Fit: Punkte, durch die die Kurve läuft; `Close`, `Undo`, dann `Start tangent` und `End tangent` (ein Punkt oder {{key:Enter}}). Methode › Kontrollpunkte fragt einen Grad (1 bis 5) und zeichnet aus einem Kontrollpolygon. Objekt wandelt Polylinien in Splines durch ihre Eckpunkte um. `SPLINEDIT` (`SPE`): `[Fit data/Edit vertex/convert to Polyline/Open or Close/Reverse/Undo/eXit]`; Fit data `[Add/Delete/Move/Purge/Tangents/eXit]`; Edit vertex `[Add control point/Move/Weight/eXit]`. `PEDIT` (`PE`): `[Close/Open/Join/Width/Fit/Spline/Decurve/Ltype gen/Reverse/Undo/eXit]`, `M` für mehrere Objekte; Linien, Bögen und Splines werden zuerst als Polylinien angeboten. Siehe [Splines und Polylinien](topic:splines).

### BLOCK

Aliase: `B`, `BMAKE`.

- `Enter block name`. Existiert er: `Block "…" already exists. Redefine it? [Yes/No] <N>`.
- `Specify insertion base point`
- `Select objects`. Sie werden durch eine Referenz auf den neuen Block ersetzt.

### WBLOCK

Aliase: `W`, `-WBLOCK`. Schreibt einen Block, einige Objekte oder die ganze Zeichnung als neue DWG- oder DXF-Datei. `WBLOCK source [Block/Entire drawing/Objects] <Objects>`:

- **Objekte**: `Specify insertion base point` (er wird der Ursprung der neuen Zeichnung), `Select objects`, dann `File format [DWG/DXF/R12 DXF]` und `File name for the new drawing`, dann `What to do with the objects [Retain/Convert to block/Delete]`. Convert ersetzt sie durch eine Referenz auf einen Block mit dem Namen der Datei; Delete entfernt sie.
- **Block**: `Block to write out`. Die eigenen Objekte des Blocks, mit seinem Basispunkt als Ursprung, einschließlich verschachtelter Blöcke.
- **Ganze Zeichnung**: jedes Objekt im Modellbereich. Blätter werden nicht geschrieben; verwenden Sie {{cmd:SAVEAS}} für eine Kopie, die sie behält.

Die neue Datei enthält nur die Layer, Linientypen, Text- und Bemaßungsstile und Blöcke, die ihre Objekte verwenden, sowie die Einheiten der Zeichnung. Die Version einer DWG ist die, die {{cmd:SAVEAS}} zuletzt verwendet hat. Im Browser wird die Datei heruntergeladen; in Studio öffnet sich der Speichern-Dialog.

### ATTDEF

Aliase: `ATT`, `DDATTDEF`, `-ATTDEF`; oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Attribut definieren}}. Gibt die Modi aus, dann `Enter an option to change (Enter when done) [Invisible/Constant/Preset]`, `Enter attribute tag name`, `Enter attribute prompt`, `Enter default attribute value` (`Enter attribute value`, wenn konstant), `Specify start point of text`, `Specify text height`, `Specify rotation angle of text`. {{cmd:BLOCK}} übernimmt die Attributdefinitionen in den Block.

### EATTEDIT und ATTEDIT

`EATTEDIT` (`DDATTE`, oder ein Doppelklick auf eine Referenz mit Attributen; {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Attribute bearbeiten}}): `Select a block reference with attributes`, dann der Dialog {{ui:Attribute bearbeiten}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): dieselbe Referenz, dann `<prompt> (<TAG>) <value>` für jedes Attribut; {{key:Enter}} behält einen Wert. Siehe [Attribute](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Update the attributes of which block's references [Name/Select/All] <Select>`. Werte bleiben erhalten; neue Attribute erhalten ihren Standardwert, entfernte werden gelöscht, Platzierungen werden zurückgesetzt.

### BATTMAN

{{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Attribut-Manager}}. Der Dialog: Block, Attribute (Markierung, Eingabeaufforderung, Standard, Modi, Reihenfolge), {{ui:Die Referenzen aktualisieren (Werte behalten)}}, {{ui:Übernehmen}}.

### REFEDIT und REFCLOSE

{{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Direkt bearbeiten}}. `REFEDIT`: `Select the block reference to edit in place` (oder die Auswahl). `REFCLOSE`: `Save the changes to "…" [Save/Discard] <Save>`; die Leiste mit {{ui:Den Block speichern}} und {{ui:Verwerfen}} tut dasselbe. Die gesamte Bearbeitung ist ein Schritt für {{ui:Rückgängig}}. Siehe [Attribute](topic:attributes#edit-a-title-block-where-it-is-refedit).

### BEDIT und BCLOSE

`BE`; oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Block bearbeiten}}. `Enter block name to edit <the selected reference's block>` öffnet den Blockeditor. `BCLOSE` fragt `Close the block editor on "…" [Save/Discard] <Save>`; die Leiste mit {{ui:Block speichern}} und {{ui:Änderungen verwerfen}} tut dasselbe. Alles, was im Editor getan wird, ist ein Schritt für {{ui:Rückgängig}}.

### VIEWBASE

Alias: `FLATSHOT`. Eine flache 2D-Ansicht der Volumenkörper auf der 3D-Registerkarte: `View [Front/Top/Right/Left/BAck/BOttom/Iso]`, `Hidden lines [Show/Hide]`, ein Maßstab (`1:20`, `2:1`; {{key:Enter}} nimmt den, der zum Blatt passt), dann das Zentrum der Ansicht. Eine Blockreferenz; sichtbare Kanten auf VIEW-VISIBLE, verdeckte gestrichelt auf VIEW-HIDDEN. Siehe [Flache Ansichten auf einem Blatt](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliase: `-PUBLISH`; oder {{ui:Alle Blätter in einer PDF}} im Dialog {{ui:In PDF plotten}}. `Sheets to plot [All/Some]`: {{key:Enter}} plottet jedes Blatt, `S` fragt nach Namen, durch Kommas getrennt. Eine PDF, eine Seite und ein Lesezeichen je Blatt. Siehe [Alle Blätter in einer PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliase: `SSM`, `SHEETSETMANAGER`. Bringt Sie zum Bereich {{ui:Blattsatz}} im linken Bereich: Blätter aus vielen Zeichnungen, nummeriert und betitelt, ihre Schriftfelder aus dem Satz gefüllt, als eine PDF veröffentlicht. Siehe [Blattsätze](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): wählen Sie eine DWG oder DXF, dann ihren Einfügepunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Linked drawings [?/Attach/Reload/Bind/Detach] (Enter: ?)`; bei mehr als einer Verknüpfung wählen Sie eine ihrer Referenzen oder geben `N` und ihren Namen ein. Siehe [Verknüpfte Zeichnungen](topic:files#linked-drawings-external-references).

### COUNT

Aliase: `BCOUNT`; oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Blöcke zählen}}. `Select a block reference to count, or [All/Export] (Enter: All)`: eine Auswahl wählt jede Referenz dieses Blocks in diesem Bereich aus und zählt sie; {{key:Enter}} oder `A` listet alle auf; `E` und dann `C` (Anzahl) oder `A` (Attribute) lädt eine CSV herunter. Siehe [Blöcke zählen und eine Liste exportieren](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliase: `I`, `DDINSERT`.

- `Enter block name or [File/Library] <last block>` (Groß- und Kleinschreibung spielt keine Rolle). `F` fragt nach einer DWG oder DXF, dann nach der ganzen Zeichnung oder einem ihrer Blöcke; ein bereits verwendeter Name fragt nach {{ui:Vorhandene behalten}} oder {{ui:Umbenennen}}. `L` öffnet den Bibliotheksbereich.
- `Specify insertion point [Scale/Rotate]`. `S` fragt `Specify scale factor`, `R` fragt `Specify rotation angle`; beides wird gemerkt.
- Dann `Enter <prompt> (<TAG>) <default>` für jedes Attribut, das der Block verlangt. Siehe [Blockattribute](topic:attributes).

### LIBRARY

Aliase: `LIB`. Öffnet den Bibliotheksbereich: Elemente platzieren, auf Aktualisierungen prüfen, Urheberangaben der Bibliothek. Keine Fragen. Siehe [Aus einer Datei oder der Bibliothek einfügen](topic:insert-from-file-and-library).

### STEELMEMBER

Aliase: `SMEMBER`; oder {{ui:3D-Stab}} auf der Registerkarte {{ui:Standard}} der Bibliothek. `Section size <W12x26>` (wie die Registerkarte es auflistet), dann `Start point [Column]` und `End point`: ein Volumenstab auf der 3D-Registerkarte zwischen den beiden Punkten, auf dem Boden stehend. `C` fragt nach dem Basispunkt der Stütze und ihrer Höhe. Ein Schritt für Rückgängig. Siehe [Stahlprofile und Normteile platzieren](topic:steel-and-standard-parts).

### PARTSLIST

Aliase: `PLIST`. `Top left corner of the parts list`, dann `Text height <2.5>`: zeichnet eine Tabelle aller aus der Bibliothek platzierten Normteile und Stahlprofile (Positionsnummern, Menge, Teil, Norm, Größe, Länge, Material, Masse). Ein Schritt für Rückgängig. Siehe [Stahlprofile und Normteile platzieren](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliase: `PU`. Entfernt Blockdefinitionen, die nichts verwendet. Keine Fragen.

### DELBLOCKS

Oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Blöcke löschen}}. `Select block to delete [Name/eXit]`: wählen Sie eine Blockreferenz, oder `N` für die Liste der Blöcke mit einem Filter (mehrere wählbar), oder `X` / {{key:Enter}} zum Beenden. Jede Referenz verschwindet — im Modell, auf jedem Blatt und in anderen Blöcken — und danach die Definition; die Befehlszeile sagt, was gelöscht wurde und was nicht. Unbenannte Blöcke und verknüpfte Zeichnungen werden nicht angeboten. Die Eingabeaufforderung kehrt für den nächsten Block zurück; der gesamte Befehl ist ein Schritt für {{ui:Rückgängig}}.

## Blätter und Plotten

### LAYOUT

Aliase: `LO`, `NEWLAYOUT`; oder die Schaltfläche {{ui:+}} unter der Zeichnung. Ein neues Blatt mit Rahmen, Schriftfeld und einem Ansichtsfenster, auf ISO A3 (oder Tabloid für Zeichnungen in Zoll oder Fuß). Keine Fragen.

### MVIEW

Aliase: `MV`. Nur auf einem Blatt ({{cmd:VPORTS}} auf einem Blatt tut dasselbe).

- `Specify corner of viewport`, `Specify opposite corner`. Das Ansichtsfenster zeigt das ganze Modell in einem Standardmaßstab.

### VPORTS

Aliase: `VIEWPORTS`. {{cmd:SPLIT}} ist auch von einem Blatt aus dasselbe, und {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Nebeneinander teilen}}, {{ui:Übereinander teilen}}, {{ui:Vier Teilfenster}}, {{ui:Ein Teilfenster}} führen es aus. Am Modell: `Enter number of panes [SIngle/2/3/4] <3>`; `2` fragt `[Horizontal/Vertical] <Vertical>` (Vertical = nebeneinander), `3` fragt `[Left/Right] <Right>` (wo das große Teilfenster liegt). Jedes Teilfenster behält seine eigene Ansicht und seinen Bereich; ein Klick macht ein Teilfenster aktiv. Auf einem Blatt ist es {{cmd:MVIEW}}. Siehe [Den Bildschirm teilen](topic:split-screen).

### VPVIEW

Keine Aliase. Nur auf einem Blatt.

- `Select viewport` (entfällt, wenn eines gewählt ist), dann am Modell: `Specify first corner of the window to show`, `Specify opposite corner`.

### UCS

Keine Aliase. Ein eigenes Koordinatensystem; keine Bearbeitung. `Specify origin of UCS [NAmed/OBject/Previous/World/Z/3point] <World>`: ein Punkt ist ein neuer Ursprung, dann `Specify point on X-axis (Enter keeps the angle)`. `Z`: `Specify rotation angle about Z axis <90>`. `3`: Ursprung, ein Punkt auf der positiven X-Achse, ein Punkt auf der positiven Y-Seite. `OB`: `Select object to align UCS`. `NA`: `[Restore/Save/Delete/?]` und ein Name. Die Ansicht dreht sich, sodass die neue X-Achse waagerecht liegt. Siehe [Die Ansicht drehen und eigene Koordinaten verwenden](topic:ucs-and-turned-view).

### PLAN

Keine Aliase. `Enter an option [Current ucs/Ucs/World] <Current ucs>`: dreht die Ansicht des aktiven Teilfensters, sodass die X-Achse des BKS (oder die des WKS) waagerecht liegt. Nichts in der Zeichnung wird verschoben.

### TURNLEFT, TURNRIGHT, TURNWORLD

Keine Aliase; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Ansicht um 90° nach links drehen}}, {{ui:Ansicht um 90° nach rechts drehen}}, {{ui:Zurück zur Welt}}. Dasselbe wie `UCS Z -90`, `UCS Z 90` und `UCS W`, mit der folgenden Ansicht.

### VPLAYER

Keine Aliase. Auf einem Blatt oder in einem Ansichtsfenster. `Enter an option [?/Freeze/Thaw/Reset/Vpvisdflt]`: `F`, `T`, `R` fragen nach Layernamen (Kommas, `*` und `?` als Platzhalter), dann nach den Ansichtsfenstern `[All/Select/Current] <Current>`; Reset setzt jeden Layer auf seinen Standard „in neuen Ansichtsfenstern gefroren“ zurück; `V` legt diesen Standard fest (`[Frozen/Thawed]`), den {{cmd:MVIEW}} verwendet. `?` listet die Layer auf, die im aktuellen Ansichtsfenster gefroren sind. Die Spalte Ansichtsfenster im Layer-Bereich tut dasselbe für ein Ansichtsfenster. Siehe [Einen Layer in einem Ansichtsfenster frieren](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliase: `MS`; oder im Ansichtsfenster doppelklicken. Nur auf einem Blatt. Am Modell über ein Ansichtsfenster arbeiten: das gewählte, das einzige auf dem Blatt oder `Click inside the viewport to work in`. Pan und Zoom innen ändern die Ansicht des Ansichtsfensters (ein anzeigegesperrtes behält sie, und das Blatt bewegt sich stattdessen); die neue Ansicht wird als ein Schritt für Rückgängig geschrieben. Siehe [Am Modell über ein Ansichtsfenster arbeiten](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliase: `PS`; oder außerhalb des Ansichtsfensters doppelklicken oder auf eine Registerkarte unter der Zeichnung klicken. Zurück zum Blatt.

### PLOT

Aliase: `PRINT`, `PUBLISH`, `EXPORTPDF`; oder {{key:Mod+P}}. Öffnet den Dialog {{ui:In PDF plotten}}. Siehe [In PDF plotten](topic:plot-pdf).

### PLOTSTYLES

Aliase: `STYLESMANAGER`, `PSTABLES`; oder {{ui:Tabellen bearbeiten…}} im Dialog {{ui:In PDF plotten}}. Öffnet {{ui:Plotstiltabellen}}: wie jede Farbe druckt (Farbe, Grau, Tinte, Linienstärke), mit der Zeichnung gespeichert. Siehe [Plotstiltabellen](topic:plot-pdf#plot-style-tables).

## Abfragen

### CAL

Gibt den Wert einer Berechnung aus, so wie er überall gelesen würde, wo eine Länge eingegeben wird.

- `Expression`: geben Sie ihn ein, zum Beispiel `12'6"+3/4"` oder `(24'-0")/3`, und drücken Sie {{key:Enter}}. CadCraft gibt `= 12'-6 3/4"   (150.75 drawing units)` aus. Siehe [Rechnen in einem eingegebenen Wert](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliase: `DI`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Distanz messen}}.

- `Specify first point`, `Specify second point`. Gibt Abstand, Winkel, Delta X und Delta Y aus.

### AREA

Aliase: `AA`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Fläche}}. Gibt Fläche und Umfang aus.

- `Specify first corner point [Object/Add area/Subtract area] <Object>`
  - Klicken oder geben Sie Ecken ein; bei `Specify next point (Enter closes) [Undo]` drücken Sie {{key:Enter}}, um den Umriss zu schließen. `U` nimmt die letzte Ecke zurück.
  - {{key:Enter}} oder `O`, dann `Select object`: ein Kreis (gibt seinen Umfang aus), eine Ellipse, eine Polylinie (eine offene wird für die Fläche durch eine gerade Linie geschlossen, und ihre Länge wird ausgegeben) oder eine Schraffur (Aussparungen werden abgezogen).
  - `A` (Fläche hinzufügen) und `S` (Fläche abziehen) führen eine laufende Summe: die Eingabeaufforderung beginnt mit `(ADD mode)` oder `(SUBTRACT mode)`, jede Fläche wird addiert oder abgezogen, und `Total area = …` wird nach jeder ausgegeben. In diesen Modi wählt `O` Objekte, bis {{key:Enter}}, und {{key:Enter}} an der ersten Eingabeaufforderung beendet den Befehl.

### MEASUREGEOM

Aliase: `MEA`. `Enter an option [Distance/Radius/Angle/ARea] <Distance>`; nach jeder Messung wird erneut gefragt, mit `eXit` als Standard.

- `D`: zwei Punkte, wie bei {{cmd:DIST}}.
- `R`: `Select arc or circle`; gibt Radius und Durchmesser aus.
- `A`: ein Bogen (sein eingeschlossener Winkel), eine Linie und dann eine zweite Linie (der Winkel zwischen ihnen, zu ihren fernen Enden hin), oder {{key:Enter}} und drei Punkte (Scheitelpunkt, dann die beiden Enden).
- `AR`: wie {{cmd:AREA}}, eine Fläche.

### ID

Keine Aliase. `Specify point`; gibt seine X- und Y-Werte aus.

### LIST

Aliase: `LI`, `LS`. `Select objects`; gibt Typ, Layer und die wichtigsten Maße jedes Objekts aus.

## Ansicht, Datei und Sonstiges

### ZOOM

Aliase: `Z`.

- `Specify corner of window, enter a scale factor (nX) [Extents/All/Window/Previous/Scale/Center]`. Klicken Sie zwei Ecken für ein Fenster. `E`, `A` oder Enter: die ganze Zeichnung.
- `P` (Vorherige, oder {{ui:Vorherige (P)}} in der Symbolleiste) geht zur vorherigen Ansicht zurück, bis zu 10 Ansichten je Tab; eine Reihe von Radschritten oder ein Pan zählt als eine Ansicht.
- Eine Zahl wie `2`, `2x` oder `0.5x` (oder `S` und dann die Zahl) zoomt um diesen Faktor um die Mitte des Bildschirms herein oder heraus.
- `C` fragt `Specify center point` und `Enter height or magnification (nX)`.

### NAMEDVIEW

Aliase: `NV`, `VIEWS`. `Enter an option [?/Restore/Save/Window/Delete] <Restore>`, dann der Name der Ansicht. `S` speichert die Ansicht auf dem Bildschirm, `W` ein Fenster, das Sie wählen, `R` zeigt eine gespeicherte Ansicht, `D` löscht eine, `?` listet die Ansichten dieses Tabs. Eine Speicherung unter einem vorhandenen Namen ersetzt ihn; jede Änderung ist ein Schritt für Rückgängig. Ansichten gehören zu dem Tab, auf dem sie gespeichert wurden. DWG- und DXF-Dateien behalten sie (die VIEW-Tabelle); die Ansichten eines Blatts kommen auf dem ersten Blatt zurück, da die Datei nicht angibt, welches es ist.

### UNDO und REDO

Aliase: `U` für {{cmd:UNDO}}; {{cmd:REDO}} hat keinen. Außerdem {{key:Mod+Z}} und {{key:Mod+Y}}.

### LAYER

Aliase: `LA`. Springt zum Bereich {{ui:Layer}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Enter linetype for new objects` — `ByLayer`, `ByBlock` oder ein Name (`?` listet sie auf: Continuous, die eigenen der Zeichnung sowie DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE mit ihren Größen `2` (halb) und `X2` (doppelt)). {{cmd:LWEIGHT}} (`LW`): die Linienstärke für neue Objekte in mm oder `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): der Linientypfaktor der Zeichnung (rückgängig machbar). {{cmd:LWDISPLAY}} (`LWT`): `Show lineweights [ON/OFF]` — dasselbe wie die Schaltfläche {{ui:LWT}} in der Statusleiste. Siehe [Linienstärken und Linientypen](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Enter object type to rename [LAyer/Block]`, `Enter old name`, dann der neue Name; Objekte oder Referenzen folgen. {{cmd:LAYMRG}}: `Select object on layer to merge or [Name]` bis {{key:Enter}}, dann `Select object on target layer or [Name]` und `Y`. {{cmd:LAYDEL}}: `Select object on layer to delete or [Name]`, dann `Y`: der Layer und jedes Objekt darauf verschwinden (nicht Layer 0, DEFPOINTS oder der aktuelle Layer). Jeder Befehl ist ein Schritt für Rückgängig. Siehe [Eine Zeichnung mit Layern ordnen](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Layer über Auswahl von Objekten; auch im Menü {{ui:Werkzeuge}} des Bereichs {{ui:Layer}}. {{cmd:LAYISO}}: `Select objects on the layer(s) to be isolated`, dann {{key:Enter}}: jeder andere Layer wird ausgeschaltet. {{cmd:LAYUNISO}} schaltet sie wieder ein. {{cmd:LAYOFF}} und {{cmd:LAYFRZ}}: `Select an object on the layer to be turned off` (oder frozen), immer wieder; `U` nimmt den letzten zurück, {{key:Enter}} beendet. {{cmd:LAYMCUR}}: `Select object whose layer will become current`. {{cmd:LAYON}} schaltet jeden Layer ein, {{cmd:LAYTHW}} taut jeden Layer. Jeder Befehl ist ein Schritt für Rückgängig. Siehe [Eine Zeichnung mit Layern ordnen](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} startet eine leere Zeichnung und {{cmd:OPEN}} öffnet eine DWG oder DXF, jede in einem eigenen Tab über der Zeichnung (eine unberührte neue Zeichnung wird anstelle eines neuen Tabs verwendet). Beim Schließen eines Tabs mit nicht gespeicherten Änderungen wird zuerst gefragt. Siehe [Den Bildschirm teilen](topic:split-screen).

{{cmd:SAVE}} (Alias `QSAVE`, auch {{key:Mod+S}}) lädt eine Kopie im Format der Zeichnung herunter: DWG, wenn sie aus einer DWG geöffnet wurde, DXF, wenn aus einer DXF. Eine neue Zeichnung verwendet das Format, das zuletzt unter {{ui:Kopie speichern unter}} in diesem Browser gewählt wurde, sonst DWG.

{{cmd:SAVEAS}} (auch {{key:Mod+Shift+S}}) öffnet den Dialog {{ui:Kopie speichern unter}}: wählen Sie {{ui:DWG}} (und ihre {{ui:Version}}), {{ui:DXF R12}} oder {{ui:DXF 2000}}, dann {{ui:Speichern}}. Die Wahl bleibt für diese Zeichnung und für neue Zeichnungen in diesem Browser erhalten.

{{cmd:DXFOUT}} lädt immer eine Kopie als DXF R12 herunter, ohne das Format zu ändern, das {{cmd:SAVE}} verwendet.

Siehe [Dateien: was sich öffnet, was sich speichert](topic:files#saving).

### TOUR

Aliase: `TUTORIAL`. Startet die Einführungstour mit sechs Schritten zur ersten Zeichnung erneut. Siehe [Erste Schritte](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliase: `TBDOCK`. `Toolbar position [Top/Bottom/Left/Right]`. Siehe [Einstellungen](topic:settings#toolbar-position).

### COMMANDLINE

Aliase: `CMDLINE`. `Command line [Docked at the bottom/Floating/One line/History lines shown/Command history (F2)]`: andockt oder löst die Befehlszeile, macht sie zu einer Zeile, fragt, wie viele Verlaufszeilen angezeigt werden (0 bis 12), oder öffnet den Verlauf. Siehe [Einstellungen](topic:settings#command-line).

### TOPAREA

`Top area [Standard/Compact]`: die Leisten über der Zeichnung wie bisher oder kompakt. Siehe [Einstellungen](topic:settings#top-area).

### POLARANG

`Enter polar angle step in degrees <90>`: der Schritt, auf den die Polarspur {{ui:Polar}} ausrichtet (mehr als 0, bis 180). Wird in diesem Browser gespeichert.

### UNITS

Aliase: `UN`. Wie Längen geschrieben und eingegeben werden.

- `Enter length format [Scientific/Decimal/Engineering/Architectural/Fractional] <current>`
- Architektur und Bruch: `Enter denominator of smallest fraction to display (1, 2, 4, 8, 16, 32, 64, 128 oder 256)`. Bei den anderen: `Enter number of decimal places (0 to 8)`.

Neue Bemaßungen folgen dem. Ein Schritt für Rückgängig. Entspricht {{ui:Längenformat}} und {{ui:Genauigkeit}} in {{ui:Aktuelle Einstellungen}}; siehe [Fuß und Zoll](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliase: `GDS`. Ein IC-Layout ansehen (eine GDSII-Stream-Datei): Laborversuch, nur zum Ansehen und Messen.

- Ein Dateiauswahldialog nimmt eine `.gds`-Datei; bei mehreren Top-Zellen: `Enter the top cell to draw`.
- Jeder Layer und Datentyp wird zu einem Zeichnungslayer (`GDS 1`, `GDS 2/5`), Referenzen und Arrays werden flach in der Benutzereinheit der Datei platziert (meist Mikrometer). Ein Schritt für Rückgängig. Nichts wird simuliert oder geprüft, und die Datei wird nicht zurückgeschrieben.

### DIAGRAM

Aliase: `TEXTDIAGRAM`, `T2D`. Ein Diagramm aus Text.

- Ein Feld nimmt den Text (oder eine Zeile mit `;` zwischen Anweisungen in der Befehlszeile): ein Mermaid-Ablaufdiagramm, ein PlantUML-Komponentendiagramm, D2 oder eine Von-nach-Liste.
- `Specify the top left corner of the diagram`, dann `Specify the text height`.

Blöcke und Verbinder sind gewöhnliche Objekte auf dem Layer `Diagram` und werden am Ende gewählt. Ein Schritt für Rückgängig. Siehe [Ein Diagramm aus Text zeichnen](topic:text-to-diagram).

### OLELIST

Aliase: `OLES`. Die OLE-Objekte einer DWG, die CadCraft nicht selbst platzieren kann.

- Listet jedes auf: Nummer, Typ, Größe, ob es ein Bild gespeichert hat.
- `Enter an option [Place/eXit] <eXit>`: Place fragt nach der Nummer, der unteren linken Ecke und der Breite und zeichnet einen Rahmen mit dem Bild. Ein Schritt für Rückgängig; das gespeicherte Objekt wird nicht verändert. Siehe [Bilder](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliase: `SHX`. Ihre eigenen SHX-Schriften.

- `Enter an SHX font option [Folder/Files/List/Remove/Reverse/Clear] <List>`

{{ui:Ordner}} liest jede `.shx` in einem Ordner (CadCraft Studio; bei jedem Start erneut), {{ui:Dateien}} nimmt gewählte Dateien (der Browser), {{ui:Umkehren}} legt die Buchstaben einer Schrift von hinten nach vorn an. Textstile, die eine geladene Schrift benennen, werden damit gezeichnet. Siehe [Text in eigenen SHX-Schriften zeichnen](topic:shx-fonts).

### LIMITS

Wie groß die Zeichnung sein soll.

- `Specify lower left corner or [ON/OFF] <current>`: ein Punkt, `ON` oder `OFF`.
- `Specify upper right corner <current>`.

Das Raster füllt die Grenzen, {{cmd:ZOOM}} All zeigt sie, und bei eingeschalteten Grenzen wird ein Punkt außerhalb abgelehnt (`**Outside limits`). Ein Schritt für Rückgängig; in DWG und DXF gespeichert. Siehe [Grenzen der Zeichnung festlegen](topic:drawing-limits).

### AUNITS

Aliase: `ANGUNITS`. Wie Winkel angezeigt und eingegeben werden.

- `Enter angle format [Decimal degrees/Degrees-minutes-seconds/Surveyor's bearings] <current>`
- `Enter number of decimal places (0 to 8)`, oder bei den beiden anderen `Enter precision` (0 Grad, 2 Minuten, 4 Sekunden, 5 bis 8 Dezimalstellen einer Sekunde).

Ein Schritt für Rückgängig; in DWG und DXF gespeichert. Entspricht {{ui:Winkelformat}} in {{ui:Aktuelle Einstellungen}}. Siehe [Peilungen und Winkel eingeben und anzeigen](topic:bearings-and-angles).

### APPLOAD

Aliase: `AP`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Anwendung laden…}}. Der Dialog {{ui:Anwendungen laden}}: `.lsp`-Routinen und `.dcl`-Dialogdateien laden, entladen, aus dem Verlauf erneut laden und die Startgruppe. Die Befehle `(defun c:NAME …)` einer Routine funktionieren danach wie alle anderen. Siehe [Anwendungen laden](topic:load-applications) und [LISP-Routinen ausführen](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Aliase bearbeiten…}}) öffnet Ihre Aliasdatei (Zeilen `ALIAS, *COMMAND`); {{ui:Speichern}} wendet sie an. {{cmd:REINIT}} wendet sie erneut an. Siehe [Befehlsaliase bearbeiten](topic:command-aliases).

### HELP

Aliase: `?`. Gibt jeden Befehl, seine Aliase und eine Beschreibungszeile im Befehlszeilenverlauf aus. Es öffnet nicht diese Hilfe: Drücken Sie dafür {{key:F1}} oder klicken Sie auf {{ui:Hilfe}}.

## Eingabeaufforderung „Select objects“

Bei jeder Eingabeaufforderung `Select objects`: klicken Sie Objekte an, ziehen Sie Fenster (von links nach rechts) und Kreuzen (von rechts nach links) mit zwei Klicks, oder drücken und ziehen Sie ein Lasso ({{key:Space}} beim Ziehen: Fenster, Kreuzen, Zaun), {{key:Shift}}+Klick zum Entfernen, und drücken Sie {{key:Enter}}, um abzuschließen. Sie können auch `ALL` (alles), `L` (das letzte Objekt), `P` (Vorherige: was der letzte Befehl verwendet hat), `F` (Zaun: Objekte, die eine Linie aus Punkten kreuzt; `U` nimmt einen Punkt zurück), `W` (Fenster), `C` (Kreuzen), `R` (Entfernen-Modus: Auswahlen nehmen Objekte heraus; die Eingabeaufforderung zeigt `Remove objects`) und `A` (erneut hinzufügen) eingeben. `?` listet sie auf. Sie werden nicht in der Eingabeaufforderung angezeigt. {{key:Tab}} über überlappenden Objekten hebt das nächste hervor; klicken Sie, um es zu wählen. Siehe [Objekte wählen](topic:select-objects).

### ACCESS

Alias: `AX`. Zeichnen ohne Sicht. {{cmd:ACCESS}} schaltet Access ein oder aus (`On`, `Off`) und schaltet Fangtöne (`Sound`) und Sprachbefehle (`Voice`) um; es sagt zuerst den Zustand. Mit eingeschaltetem Access wird jeder Befehl und jedes Ergebnis über Ihren Bildschirmleser gesprochen, und der Zeichenbereich hat einen Tastaturcursor. Das Hilfethema „Zeichnen ohne Sicht“ enthält die Tasten.

### DESCRIBE

Alias: `DESC`. Sagt, was die Zeichnung enthält: wie viele Objekte, welcher Art, wie groß, wie viele Layer, was ausgewählt ist. Liest nur; ändert nichts.

### WHEREAMI

Alias: `WHERE`. Sagt, wo der Cursor ist, in den Einheiten der Zeichnung.

### NEARBY

Sagt, was nahe am Cursor liegt, das Nächste zuerst, jeweils mit seinem Abstand und der Seite, auf der es liegt.

### SAYSEL

Sagt, was ausgewählt ist, ein Satz pro Objekt (Linienlänge, Enden und Winkel; Kreisradius und Zentrum; Text wie geschrieben).

### VOICE

Schaltet gesprochene Befehle ein oder aus. Sie werden auf diesem Computer erkannt; wo der Browser das nicht kann, bleibt die Sprache aus, außer Sie wählen den Online-Dienst des Browsers in den Einstellungen.
