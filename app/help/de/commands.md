---
title: Befehlsreferenz
summary: Jeder Befehl der Zeichen-App CadCraft mit seinen Aliasen, den Fragen, die er stellt, seinen Optionen und Voreinstellungen.
keywords: Befehle, Aliase, Befehlsliste, Fläche, Umfang, measuregeom, Linie, pline, Kreis, Bogen, trim, offset, dimlinear, Block, insert, Layout, plot, zoom, help, copyclip, cutclip, pasteclip, pasteorig, copybase, duplicate, selectall
from: 979ffe3b
---

Geben Sie einen Befehlsnamen oder einen Alias ein und drücken Sie {{key:Enter}} oder {{key:Space}}. Groß- und Kleinschreibung spielt keine Rolle, und ein führendes `_`, `-`, `.` oder `'` wird ignoriert. Geben Sie `HELP` (oder `?`) ein, um eine kurze Liste jedes Befehls im Befehlsverlauf auszugeben; drücken Sie {{key:F1}} für diese Hilfe.

So lesen Sie die Eingabeaufforderungen: Optionen stehen in eckigen Klammern, und Sie wählen eine, indem Sie ihre Großbuchstaben eingeben (`D` für Durchmesser). Ein Standardwert steht in spitzen Klammern; drücken Sie {{key:Enter}}, um ihn zu übernehmen. Wo ein Punkt verlangt wird, können Sie klicken oder eines der Formate aus [Koordinaten- und Abstandseingabe](topic:coordinate-entry) eingeben. Wo ein Abstand verlangt wird, können Sie eine Zahl eingeben oder zwei Punkte anklicken.

Drücken Sie {{key:Enter}}, wo ein Punkt oder ein Objekt verlangt wird und es keinen Standardwert gibt, endet der Befehl. {{key:Esc}} bricht ihn ab. Alles, was ein Befehl bewirkt, ist ein einziger Rückgängig-Schritt.

## Zeichnen

### LINE

Aliase: `L`. Gerade Abschnitte, jeder als eigenes Objekt.

- `Ersten Punkt angeben` (Enter: beim zuletzt angegebenen Punkt beginnen)
- `Nächsten Punkt angeben [Rückgängig (U)]`, wiederholt. Nach zwei Abschnitten: `[Rückgängig (U)/Schließen (C)]`.
- `U` nimmt den letzten Abschnitt zurück, `C` schließt zum ersten Punkt und beendet den Befehl. Enter beendet ihn.

### PLINE

Aliase: `PL`. Eine Polylinie aus Linien- und Bogenabschnitten.

- `Startpunkt angeben`
- `Nächsten Punkt angeben [Bogen (A)/Schließen (C)/Rückgängig (U)]` (Schließen, sobald es zwei Abschnitte gibt)
- `A` wechselt zu Bögen: `Endpunkt des Bogens angeben [Linie (L)/Schließen (CL)/Rückgängig (U)]`. Jeder Bogen setzt tangential an den vorherigen Abschnitt an. `L` geht zurück zu Linien, `CL` schließt mit einem Bogen.
- Enter beendet; die Polylinie bleibt offen.

### CIRCLE

Aliase: `C`.

- `Mittelpunkt für Kreis angeben [3P/2P/Ttr (Tangente Tangente Radius)]`
- `Radius des Kreises angeben [Durchmesser] <letzter Radius>`; `D` fragt `Durchmesser des Kreises angeben`.
- `2P`: beide Enden eines Durchmessers. `3P`: drei Punkte auf dem Kreis.
- `T` (auch der Befehl `TTR` und {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Kreis: Tan, Tan, Radius}}): `Punkt auf dem Objekt für die erste Tangente des Kreises angeben`, dann die zweite, dann der Radius (Enter: der letzte). Der Kreis berührt beide Objekte (Linien, Bögen, Kreise, Polylinienabschnitte, auch in Blöcken); von den Kreisen, die das tun, ist es der, der Ihren Punkten am nächsten berührt. „Kreis existiert nicht“, wenn keiner passt.
- `TTT` (oder {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Kreis: Tan, Tan, Tan}}): drei Objekte; der Kreis, der alle drei berührt, dem Ihre Punkte am nächsten liegen (drei Linien ergeben den Innen- oder einen Außenkreis, je nachdem, wo Sie klicken).

### ARC

Aliase: `A`.

- `Startpunkt des Bogens angeben [Zentrum (C)]`, `Zweiten Punkt des Bogens angeben`, `Endpunkt des Bogens angeben`: ein Bogen durch drei Punkte.
- `C`: `Mittelpunkt des Bogens angeben`, `Startpunkt des Bogens angeben`, `Endpunkt des Bogens angeben`. Der Bogen verläuft gegen den Uhrzeigersinn vom Start zum Ende.

### RECTANG

Aliase: `REC`, `RECTANGLE`. Eine geschlossene Polylinie.

- `Ersten Eckpunkt angeben`, `Anderen Eckpunkt angeben`. Geben Sie `@Breite,Höhe` für die zweite Ecke ein.

### POLYGON

Aliase: `POL`. Ein regelmäßiges Polygon als geschlossene Polylinie.

- `Anzahl der Seiten eingeben <4>` (3 bis 1024)
- `Mittelpunkt des Polygons angeben`
- `Option eingeben [Einbeschrieben in Kreis (I)/Umbeschrieben um Kreis (C)] <I>`
- `Radius des Kreises angeben`: klicken Sie einen Punkt an oder geben Sie ihn ein; sein Abstand bestimmt die Größe, seine Richtung dreht das Polygon.

### ELLIPSE

Aliase: `EL`.

- `Endpunkt der Achse der Ellipse angeben [Zentrum (C)]`, `Anderen Endpunkt der Achse angeben`, `Abstand zur anderen Achse angeben`
- `C`: `Mittelpunkt der Ellipse angeben`, `Endpunkt der Achse angeben`, dann der Abstand zur anderen Achse.
- `I` (`Isokreis`, nur solange {{cmd:ISODRAFT}} eingeschaltet ist): Mittelpunkt, dann Radius oder `Durchmesser`: die Ellipse, die ein Kreis auf der aktuellen isometrischen Ebene zeigt.

### HATCH

Aliase: `H`, `BH`, `BHATCH`; oder {{ui:Schraffur}} in der Symbolleiste. Zeigt zuerst das aktuelle Muster, den Maßstab und den Winkel.

- `Innenpunkt wählen [Objekte wählen (S)/Muster (P)/Maßstab (SC)/Winkel (A)]`, wiederholt (`Rückgängig` ist möglich, sobald es eine Fläche gibt): jeder Klick fügt die geschlossene Fläche darum hinzu, mit den geschlossenen Formen darin als Inseln. Enter erstellt eine Schraffur aus allen.
- `S`: `Geschlossene Objekte wählen` (geschlossene Polylinien, Kreise, geschlossene Ellipsen).
- `P`: `Namen eines Musters, SOLID oder ? für die Liste eingeben <aktuell>`. `SC`: `Musterskalierung angeben`. `A`: `Musterwinkel angeben`.
- `G` (Verlauf): die Füllung ist ein Verlauf statt eines Musters. Siehe {{cmd:GRADIENT}} für seine Fragen.

Siehe [Schraffur und Flächenfüllung](topic:hatch).

### GRADIENT

Aliase: `GD`. Füllt eine Fläche mit einem Verlauf aus einer oder zwei Farben. Er fragt zuerst den Verlauf, dann läuft er weiter wie {{cmd:HATCH}} (`Innenpunkt wählen`, `S` für geschlossene Objekte, {{key:Enter}} zum Beenden).

- `Verlaufsoption eingeben [Art (T)/Eine Farbe (O)/Zwei Farben (TW)/Winkel (A)/Zentriert (C)/Beenden (X)] <X>`, wiederholt; er gibt den Verlauf jedes Mal so aus, wie er jetzt ist.
- `T`: `LINEAR`, `CYLINDER`, `SPHERICAL`, `HEMISPHERICAL`, `CURVED` oder eine davon umgekehrt (`INVCYLINDER`, `INVSPHERICAL`, `INVHEMISPHERICAL`, `INVCURVED`). Die ersten Buchstaben genügen.
- `O`: eine Farbe, dann ihre Tönung von 0 bis 1 (0 schattiert sie zu Schwarz, 0,5 ist die Farbe selbst, 1 tönt sie zu Weiß). `TW`: die erste und die zweite Farbe. Eine Farbe ist eine Zahl von 1 bis 255, drei Zahlen wie `255,128,0` oder `#rrggbb`.
- `A`: der Winkel, in dem der Verlauf verläuft. `C`: zentriert Ja oder Nein (Nein schiebt die Mitte des Verlaufs auf eine Seite).
- Er lehnt eine Farbe oder Art ab, die er nicht kennt, und eine Tönung außerhalb von 0 bis 1.

{{cmd:HATCHEDIT}} `G` und {{ui:Eigenschaften}} (Verlauf) ändern einen Verlauf später oder machen jede Schraffur zu einem. Ein Verlauf wird auf dem Bildschirm und im Plot gezeichnet. DWG 2004 und neuer speichern ihn als echte Verlaufsschraffur; DXF 2000 und DWG 2000 behalten ihn für CadCraft, und andere Programme sehen eine Vollfläche in der ersten Farbe.

### HATCHGENERATEBOUNDARY

Aliase: `HGB`. Erstellt die Begrenzung neu aus einer Schraffur, die sie verloren hat. `Schraffuren wählen` (oder sie zuerst wählen), dann `Jede Schraffur mit ihrer neuen Begrenzung verknüpfen, damit die Schraffur ihr folgt? [Ja (Y)/Nein (N)] <Ja>`.

- Jede Schleife der Schraffur wird eine geschlossene Polylinie auf dem Layer der Schraffur; die neuen Polylinien bleiben gewählt. Eine gekrümmte Kante kommt als die kurzen geraden Stücke zurück, die die Schraffur behält.
- Mit Ja folgt die Schraffur ihrer neuen Begrenzung, wie eine mit {{cmd:HATCH}} erstellte Schraffur. Ein Rückgängig-Schritt.
- Er sagt es, wenn keine Schraffur gewählt war.

### POINT

Aliase: `PO`; oder {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Punkt}}. Punktobjekte, einer pro Klick, bis Enter.

- `Punkt angeben`

### XLINE

Aliase: `XL`; oder {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Konstruktionslinie}}. Konstruktionslinien, nach beiden Seiten unbegrenzt. Siehe [Konstruktionslinien und Strahlen](topic:construction-lines).

- `Punkt angeben [Waagerecht (H)/Senkrecht (V)/Winkel (A)/Halbierung (B)/Versatz (O)]`, dann `Durchgangspunkt angeben` für jede Linie, bis Enter.
- `A`: `Winkel der Konstruktionslinie eingeben [Referenz (R)] <0>`; `R` fragt zuerst `Linienobjekt wählen`.
- `B`: `Scheitelpunkt des Winkels angeben`, `Startpunkt des Winkels angeben`, dann `Endpunkt des Winkels angeben` für jede Linie.
- `O`: `Versatzabstand angeben [Durch (T)] <Durch>`, dann `Linienobjekt wählen` und `Seite für den Versatz angeben` (oder `Durchgangspunkt angeben`) für jede Linie.

### RAY

Keine Aliase; oder {{ui:Zeichnen}} › {{ui:Mehr}} › {{ui:Strahl}}. `Startpunkt angeben`, dann `Durchgangspunkt angeben` für jeden Strahl, bis Enter.

### TEXT

Aliase: `DT`, `DTEXT`; oder {{ui:Text}} in der Symbolleiste. Einzeiliger Text; jede Zeile ist ein eigenes Objekt.

- `Startpunkt des Textes angeben [Ausrichten (J)]`
- `J`: `Option eingeben [Links (L)/Zentriert (C)/Rechts (R)/Mitte (M)/TL/MC] <L>`, dann `Einfügepunkt des Textes angeben`
- `Texthöhe angeben <aktuelle Texthöhe>`
- `Drehwinkel des Textes angeben <0>`
- `Text eingeben`, wiederholt: jedes Enter beginnt die nächste Zeile darunter. Enter auf einer leeren Zeile beendet. {{key:Space}} tippt hier ein Leerzeichen.

### DIVIDE

Alias: `DIV`. {{cmd:DIVIDE}} setzt Markierungen auf eine Linie, einen Bogen, einen Kreis, eine Polylinie, einen Spline oder eine Ellipse, die sie in gleiche Teile schneiden. Wählen Sie das Objekt und geben Sie dann die Anzahl der Teile ein (2 bis 32767). Ein offenes Objekt bekommt eine Markierung weniger als Teile; ein geschlossenes bekommt auch am Anfang eine. Das Objekt selbst wird nicht geschnitten. Die Markierungen sind Punkte; `Block` fragt stattdessen nach einem Block dieser Zeichnung und danach, ob er sich dem Objekt anpasst. Längen entlang von Splines und Ellipsen werden entlang kurzer Sehnen gemessen. Er lehnt Text, Schraffuren und andere Objekte ab, die keine Länge haben.

### MEASURE

Alias: `ME`. {{cmd:MEASURE}} setzt eine Markierung in jeder angegebenen Länge entlang einer Linie, eines Bogens, eines Kreises, einer Polylinie, eines Splines oder einer Ellipse, gezählt ab dem Ende, das Ihrem Punkt am nächsten liegt (ein geschlossenes Objekt: ab seinem Anfang). Geben Sie die Länge ein oder mit zwei Punkten. Das ferne Ende eines offenen Objekts bekommt keine Markierung. `Block` setzt an jede Markierung einen Block statt eines Punkts. Er lehnt eine Länge von 0 ab, eine, die länger als das Objekt ist, und eine, die mehr als 32767 Markierungen ergäbe.

### BOUNDARY

Aliase: `BO`, `BPOLY`. {{cmd:BOUNDARY}} erstellt eine geschlossene Polylinie um die Fläche, in der der Punkt liegt, den Sie wählen, aus allen Linien, Bögen, Kreisen, Polylinien und Kurven, die sie auf dem Bildschirm begrenzen. Stücke, die auf einem Bogen oder Kreis liegen, kommen als Bogenabschnitte zurück; Stücke von Ellipsen und Splines als kurze gerade Abschnitte. Mit eingeschalteten `Inseln` (die Voreinstellung) bekommt jede geschlossene Fläche darin ebenfalls eine eigene Polylinie. Klicken Sie weitere Punkte an; Enter beendet. Die Objekte, die die Fläche begrenzen, bleiben, wie sie sind. Er sagt es, wenn keine geschlossene Fläche den Punkt enthält.

### BLEND

{{cmd:BLEND}} zeichnet einen Spline zwischen den Enden zweier offener Kurven. Wählen Sie jede Kurve nahe dem Ende, das verbunden werden soll. `CONtinuity` wählt `Tangent` (der Spline verlässt und erreicht beide Kurven entlang) oder `Smooth` (er folgt zusätzlich der Krümmung an den Enden); die Wahl bleibt für die Sitzung erhalten. Die beiden Kurven werden nicht verändert. Er lehnt geschlossene Objekte ab und zwei Enden, die sich schon treffen.

### REGION

Alias: `REG`. {{cmd:REGION}} macht aus geschlossenen Objekten Regionen: ebene Flächen, die Sie verbinden, schneiden und messen können. Wählen Sie Kreise, geschlossene Polylinien, geschlossene Ellipsen oder geschlossene Splines oder Linien, Bögen und offene Polylinien, die eine Schleife Ende an Ende schließen; jede Schleife wird eine Region und ersetzt die Objekte, aus denen sie entstand. Bögen bleiben Bögen; Ellipsen und Splines werden zu kurzen geraden Abschnitten. Was nicht geschlossen ist und keine Schleife schließt, bleibt, wie es ist, und er sagt, wie viele. In der Zeichnung ist eine Region eine oder mehrere geschlossene Polylinien, die als unbenannte Gruppe zusammengehalten werden; ein Klick wählt daher die ganze Region, und eine Kopie ist eine eigene Region. Andere Programme, die die Datei öffnen, sehen geschlossene Polylinien.

Mit Regionen in der Zeichnung arbeiten {{cmd:UNION}}, {{cmd:SUBTRACT}} und {{cmd:INTERSECT}} auf dem Reiter 2D mit Regionen: `UNION` verbindet die gewählten Regionen zu einer (Regionen, die getrennt sind, werden eine Region mit mehreren Umrissen), `SUBTRACT` fragt nach den Regionen, von denen abgezogen wird, und dann nach denen, die abgezogen werden (ein Loch bleibt Teil der Region), `INTERSECT` behält die Fläche, die alle gemeinsam haben. Jeder nennt die Fläche des Ergebnisses und ist ein Rückgängig-Schritt. Sie lehnen ab, wenn nichts übrig bliebe oder nichts gemeinsam ist. Auf dem 3D-Reiter und in einer Zeichnung ohne Regionen funktionieren dieselben Befehle wie bisher auf Volumenkörpern.

## Ändern

Aliase: `MT`, `T`; oder {{ui:Absatz}} in der Symbolleiste. Absatztext, der auf eine Breite umbricht, an Ort und Stelle eingegeben.

- `Ersten Eckpunkt angeben`
- `Gegenüberliegenden Eckpunkt angeben [Höhe (H)/Ausrichten (J)/Zeilenabstand (L)/Drehung (R)/Breite (W)]`: die Breite über die beiden Ecken ist die Stelle, an der der Text umbricht. `H` fragt `Höhe angeben`, `J` `Ausrichtung eingeben [TL/TC/TR/ML/MC/MR/BL/BC/BR] <TL>`, `L` `Zeilenabstand-Faktor eingeben (0,25 bis 4)`, `R` `Drehwinkel angeben`, `W` `Breite angeben (0 für keinen Umbruch)` und überspringt die zweite Ecke.
- Dann öffnet sich auf der Zeichnung ein Feld: tippen Sie, {{key:Enter}} für einen neuen Absatz, {{key:Mod+Enter}} oder ein Klick außerhalb beendet, {{key:Esc}} bricht ab. Seine Leiste setzt Höhe, Zeilenabstand, Breite und Ausrichtung. Siehe [Text und Beschriftungen hinzufügen](topic:text#write-a-note-that-wraps).

### TEXTEDIT

Aliase: `ED`, `DDEDIT`; oder doppelklicken Sie auf einen Text. `Text zum Bearbeiten wählen`, wiederholt bis {{key:Enter}}: jeder öffnet sich im selben Feld. Gestartet auf einem gewählten oder doppelgeklickten Text, bearbeitet er diesen und endet.

### ERASE

Aliase: `E`, `DELETE`; oder drücken Sie {{key:Delete}} bei gewählten Objekten.

- `Objekte wählen` (entfällt, wenn schon Objekte gewählt sind)

### MOVE

Aliase: `M`.

- `Objekte wählen`
- `Basispunkt angeben [Verschiebung (D)]`, `Zweiten Punkt angeben`
- `D`: `Verschiebung angeben`, eingegeben als `dx,dy`.

### COPY

Aliase: `CO`, `CP`. Kopiert so oft, wie Sie Punkte angeben.

`Anordnung` an der Aufforderung für den zweiten Punkt macht in einem Zug eine Zeile: Geben Sie die Anzahl der Elemente ein (das Original zählt als eins), dann den Punkt, an dem die erste Kopie hinkommt; die anderen folgen im gleichen Abstand. `Einpassen` macht diesen Punkt stattdessen zum Ort der letzten Kopie, mit den anderen gleichmäßig dazwischen.

- `Objekte wählen`
- `Basispunkt angeben [Verschiebung (D)]`
- `Zweiten Punkt angeben [Rückgängig (U)]`, wiederholt bis Enter. `U` nimmt die letzte Kopie zurück.

### ROTATE

Aliase: `RO`.

- `Objekte wählen`, `Basispunkt angeben`
- `Drehwinkel angeben <letzter Winkel>`: in Grad, gegen den Uhrzeigersinn positiv; oder klicken Sie einen Punkt an, um zu ihm hin zu drehen.

### SCALE

Aliase: `SC`.

- `Objekte wählen`, `Basispunkt angeben`
- `Skalierungsfaktor angeben`: geben Sie einen Faktor wie `0.5` oder `2` ein. Ein angeklickter Punkt gibt seinen Abstand vom Basispunkt als Faktor.

### MIRROR

Aliase: `MI`.

- `Objekte wählen`
- `Ersten Punkt der Spiegellinie angeben`, `Zweiten Punkt der Spiegellinie angeben`
- `Quellobjekte löschen? [Ja (Y)/Nein (N)] <N>`

### ALIGN

Aliase: `AL`; oder {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Ausrichten}}.

- `Objekte wählen`
- `Ersten Quellpunkt angeben`, `Ersten Zielpunkt angeben`
- `Zweiten Quellpunkt angeben (Enter zum Fortfahren)`, `Zweiten Zielpunkt angeben`
- `Dritten Quellpunkt angeben (Enter zum Fortfahren)`, `Dritten Zielpunkt angeben`
- Bei zwei Paaren: `Objekte anhand der Ausrichtungspunkte skalieren? [Ja (Y)/Nein (N)] <N>`

Siehe [Objekte ausrichten](topic:modify-objects#align-objects).

### ALIGNTO

- `Objekte wählen` (oder die Auswahl), `Ausrichten [Links (L)/Zentriert (C)/Rechts (R)/Oben (T)/Mitte (M)/Unten (B)] <Links>`, `An [Auswahl (S)/Erstes (F)/Letztes/Punkt (P)] <Auswahl>`; `P` fragt nach dem Punkt. Die Auswahl bleibt.

### DISTRIBUTE

- `Objekte wählen` (mindestens drei), `Verteilen [Waagerecht (H)/Senkrecht (V)] <Waagerecht>`, `Gleichmäßig verteilen [Mittelpunkte (C)/Lücken (G)] <Lücken>`. Die beiden äußeren bleiben; die Auswahl bleibt.

### ALIGNPANEL

Aliase: `ALP`; oder {{ui:Ändern}} › {{ui:Mehr}} › {{ui:Ausrichten und verteilen}}. Öffnet den Bereich, der ALIGNTO und DISTRIBUTE per Klick ausführt.

### LASER

Aliase: `LASERCUT`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Laser…}}. Öffnet den Bereich Laser über der Zeichnung: was jeder Layer bewirkt (schneiden, ritzen, gravieren, füllen, Bild), die Vorschau, der GRBL-G-Code zum Speichern sowie Rahmen und Senden über Web Serial. Siehe [Eine Zeichnung an einen Laser senden](topic:laser-cutting).

### STRETCH

Aliase: `S`; oder {{ui:Strecken}}. `Objekte zum Strecken wählen`: ziehen Sie Kreuzungsfenster (oder geben Sie `C` ein) über die Enden, die sich bewegen sollen. `Basispunkt angeben [Verschiebung (D)]`, `Zweiten Punkt angeben`. Punkte innerhalb der Fenster bewegen sich: Linienenden, Scheitelpunkte von Polylinien (Bogenabschnitte behalten ihre Höhe), Bemaßungspunkte; Kreise, Ellipsen, Texte, Punkte und Blöcke bewegen sich ganz, wenn ihr Mittelpunkt oder Einfügepunkt innerhalb liegt. Eine Auswahl, die vor dem Befehl getroffen wurde, behält die Kreuzungsfenster (und Lassos), die sie erzeugt haben, sodass sie auf dieselbe Weise strecken. Ohne Fenster bewegen sich die Objekte ganz.

### ARRAY, ARRAYRECT, ARRAYPOLAR

Aliase: `AR`; oder {{ui:Anordnung}}. `Objekte wählen`, dann `Art der Anordnung eingeben [Rechteckig (R)/Polar (PO)] <Rechteckig>` (nur ARRAY).

- Rechteckig beginnt mit 4 Spalten × 3 Zeilen, im 1,5-fachen Abstand der Größe der Objekte, als Vorschau angezeigt. `Option eingeben [Anzahl (COU)/Abstand (S)/Spalten (COL)/Zeilen (R)/Beenden (X)] <X>`: `COU` fragt Spalten und Zeilen, `S` die Abstände zwischen den Spalten und zwischen den Zeilen (negativ geht nach links oder unten), `COL` und `R` je eine Richtung.
- Polar fragt `Mittelpunkt der Anordnung angeben`, beginnt mit 6 Elementen rundherum, gedreht. `Option eingeben [Elemente (I)/Füllwinkel (F)/Elemente drehen (ROT)/Beenden (X)] <X>`: `I` Elemente, `F` der Winkel, der gefüllt wird (+ gegen den Uhrzeigersinn, − im Uhrzeigersinn), `ROT` Ja oder Nein.
- {{key:Enter}} (Beenden) erstellt die Kopien als einfache Objekte. Ein Rückgängig-Schritt.
- `AS` (Assoziativ) wechselt zwischen einfachen Kopien und einer Anordnung, die bearbeitbar bleibt: ein Objekt, das Sie später mit {{cmd:ARRAYEDIT}} ändern, über seine Griffe oder in den Eigenschaften. Die Wahl wird gemerkt ({{cmd:ARRAYASSOCIATIVITY}}); am Anfang sind es einfache Kopien.

### ARRAYPATH

Kopien entlang einer Kurve. `Objekte wählen`, dann `Pfadkurve wählen`: eine Linie, ein Bogen, ein Kreis, eine Ellipse, eine Polylinie oder ein Spline (nicht eines der Objekte, die angeordnet werden). Der Pfad beginnt an seinem Ende, das den Objekten näher liegt, und das erste Element sind die Objekte an ihrem Platz.

- `Option eingeben [Methode (M)/Elemente (I)/Abstand (SP)/Ausrichten (AL)/Assoziativ (AS)/Beenden (X)] <X>`, mit Vorschau. `M`: `Teilen` verteilt die Elemente gleichmäßig über den ganzen Pfad, `Messen` setzt eines in jedem festen Abstand entlang. `I`: die Anzahl der Elemente (bei Messen bedeutet 0 so viele, wie passen; eine Zahl über das Ende des Pfads hinaus wird auf das begrenzt, was passt). `SP`: der Abstand zwischen den Elementen entlang des Pfads (wechselt zu Messen). `AL`: Ja dreht jedes Element, damit es dem Pfad folgt, Nein lässt sie aufrecht.
- `AS` wie in {{cmd:ARRAY}}. Ist es eingeschaltet, behält die Anordnung ihre eigene Kopie der Form des Pfads: Eine spätere Änderung der Pfadkurve verschiebt die Elemente nicht.
- Er lehnt einen Pfad ab, der keine Kurve ist, und ein einziges Element.

### ARRAYEDIT

Ändert eine Anordnung, die mit ASsoziativ erstellt wurde. `Anordnung wählen` (oder zuerst wählen). Sie gibt aus, was die Anordnung jetzt ist, und fragt dann, bis {{key:Enter}}:

- Rechteckig: `COL` Spalten und ihr Abstand, `R` Zeilen und ihr Abstand, `A` der Winkel, in dem die Spalten verlaufen.
- Polar: `I` Elemente, `F` der Füllwinkel, `ROT` Elemente drehen Ja oder Nein.
- Pfad: `M` Teilen oder Messen, `I` Elemente, `SP` Abstand, `AL` am Pfad ausrichten.
- `S` (Quelle) öffnet die Objekte, die die Anordnung wiederholt, allein, wie der Blockeditor. Zeichnen und bearbeiten Sie dort; {{cmd:ARRAYCLOSE}} speichert oder verwirft, und jedes Element folgt.
- `REP` (Ersetzen): `Ersatzobjekte wählen`, `Basispunkt der Ersatzobjekte angeben`, dann die Elemente anklicken, die ersetzt werden sollen, {{key:Enter}}. Diese Elemente zeigen stattdessen den Ersatz; die Ersatzobjekte verlassen die Zeichnung und leben in der Anordnung. `RES` (Zurücksetzen) zeigt die Quellobjekte in jedem Element wieder.
- Jede Änderung ist ein Rückgängig-Schritt. Er lehnt einfache Kopien ab, eine einfache Blockreferenz und eine Anordnung auf einem gesperrten Layer.

Dieselben Zahlen stehen in den {{ui:Eigenschaften}} unter {{ui:Anordnung}}, und die Anordnung hat Griffe: Ihr Basispunkt verschiebt sie, der Griff am zweiten Element setzt den Abstand, der Griff hinter dem letzten Element setzt die Anzahl (polar: das zweite Element setzt die Anzahl der Elemente, das letzte den Füllwinkel). {{cmd:EXPLODE}} macht eine Anordnung wieder zu einfachen Kopien.

### ARRAYCLOSE

Beendet {{cmd:ARRAYEDIT}} Quelle: `Änderungen an den Quellobjekten der Anordnung speichern? [Speichern (S)/Verwerfen (D)] <Speichern>`. Es sagt es, wenn keine Quellobjekte einer Anordnung offen sind. {{cmd:BCLOSE}} tut dasselbe.

### ARRAYASSOCIATIVITY

`Neuen Wert für ARRAYASSOCIATIVITY eingeben (1 = Anordnungen bleiben bearbeitbar, 0 = einfache Kopien)`. Legt fest, womit {{cmd:ARRAY}}, ARRAYRECT, ARRAYPOLAR und {{cmd:ARRAYPATH}} beginnen; ihre Option `AS` ändert dieselbe Einstellung. In diesem Browser gemerkt.

### OFFSET

Aliase: `O`. Linien, Bögen, Kreise und Polylinien.

Wo sich eine Polylinie nach außen verschiebt und ihre geraden Abschnitte an einer Ecke auseinanderlaufen, entscheidet {{cmd:OFFSETGAPTYPE}}, wie die Lücke geschlossen wird.

- `Versatzabstand angeben [Durch (T)] <letzter Abstand, oder Durch>`
- `Objekt für den Versatz wählen`, dann `Punkt auf der Seite für den Versatz angeben` (oder mit Durch: `Durchgangspunkt angeben`), wiederholt bis Enter.

### OFFSETGAPTYPE

- `Lücken an Ecken versetzen: 0 verlängern, 1 abrunden, 2 abschrägen`: wie {{cmd:OFFSET}} die Lücken an den äußeren Ecken einer Polylinie schließt. `0` verlängert die Abschnitte, bis sie sich treffen (die Voreinstellung), `1` verbindet sie mit einem Bogen um die alte Ecke, `2` mit einem geraden Schnitt. Innere Ecken und Bogenabschnitte sind nicht betroffen. Für diese Sitzung gespeichert.

### EXTRIM

{{cmd:EXTRIM}} stutzt alles auf einer Seite einer Kante. Wählen Sie die Schneidkante (eine Linie, einen Bogen, einen Kreis, eine Polylinie, eine Ellipse, einen Spline oder eine Konstruktionslinie) und dann einen Punkt auf der Seite, die frei werden soll: Jede Linie, jeder Bogen, Kreis, jede Polylinie und Konstruktionslinie, die die Kante kreuzt, verliert ihren Teil auf dieser Seite, wo sie an der Kante beginnt. Während Sie die Seite wählen, folgen die Teile, die wegfielen, dem Zeiger. Bei einer geschlossenen Kante sind die Seiten innen und außen. Objekte, die die Kante nur berühren, sowie Text, Schraffuren, Splines und Ellipsen, die sie kreuzen, bleiben, wie sie sind. Ein Rückgängig-Schritt.

### TRIMEXTENDMODE

- `Neuen Wert für TRIMEXTENDMODE eingeben (1 Schnell, 0 Standard)`: wie {{cmd:TRIM}} und {{cmd:EXTEND}} beginnen. `1` Schnell: jedes Objekt ist eine Schneid- oder Begrenzungskante. `0` Standard: sie fragen zuerst nach den Kanten. Auch `(setvar "TRIMEXTENDMODE" 0)` in LISP.

### TRIM

Aliase: `TR`. Gibt zuerst `Aktuelle Einstellungen: Schnellmodus (TRIMEXTENDMODE 1), Kanten: Nicht verlängern, Ziehen zeichnet einen Pfad` aus. Im Schnellmodus ist jedes sichtbare Objekt eine Schneidkante, und ein Objekt, das nichts kreuzt, wird gelöscht; im Standardmodus fragt er zuerst `Schneidkanten wählen (Enter = jedes Objekt)` und schneidet nur an diesen.

- `Objekt zum Stutzen wählen oder mit Shift zum Verlängern wählen [Schneidkanten (T)/Zaun (F)/Kreuzen (C)/Modus (O)/Kante (E)/Löschen (R)/Rückgängig (U)]`, wiederholt: klicken Sie das Stück an, das entfernt werden soll (es wird grau und gestrichelt, solange der Zeiger darauf ruht), ziehen Sie einen Pfad über mehrere Stücke (alle gehen in einem Schritt), oder klicken Sie zwei leere Stellen für einen Zaun dazwischen. {{key:Shift}} verlängert stattdessen. `T` wählt Schneidkanten (Standardmodus), `F` fragt nach Zaunpunkten, `C` zwei Fensterecken (Stücke, die teilweise drin liegen, gehen), `O` fragt `Option für den Stutzmodus eingeben [Schnell/Standard]`, `E` fragt `Modus für die angenommene Kantenverlängerung eingeben [Verlängern/Nicht verlängern]` (EDGEMODE), `R` löscht Objekte, die Sie wählen, `U` nimmt den letzten Klick oder Zug zurück. Enter beendet. Siehe [Stutzen und Verlängern](topic:trim-and-extend).

- Ein Klick auf eine Schraffur schneidet die Schraffur: Die Schneidkanten teilen die schraffierte Fläche, und das Stück, auf das Sie geklickt haben, wird entfernt (keine gezeichnete Umrandung bleibt an seiner Stelle). Die Schraffur behält Muster oder Verlauf; eine Schraffur, die mit ihrer Begrenzung verknüpft war, ist danach nicht mehr verknüpft, weil sie sie nicht mehr füllt. Er sagt es, wenn keine Schneidkante die Schraffur dort teilt, wenn der Klick neben der Schraffur liegt und wenn nichts übrig bliebe (dann {{cmd:ERASE}} verwenden). Ein gezogener Pfad oder Zaun schneidet keine Schraffuren.

### EXTEND

Aliase: `EX`. Dasselbe wie TRIM in umgekehrter Richtung: `Objekt zum Verlängern wählen oder mit Shift zum Stutzen wählen [Begrenzungskanten (B)/Zaun (F)/Kreuzen (C)/Modus (O)/Kante (E)/Rückgängig (U)]`. Ein Klick verlängert das Ende, das ihm am nächsten liegt, bis zur nächsten Begrenzung; ein gezogener Pfad oder Zaun verlängert jedes Objekt, das er kreuzt; {{key:Shift}} stutzt. `B` wählt Begrenzungskanten (Standardmodus). Modus und Kante werden mit TRIM geteilt.

### LINKVIEWS

Aliase: `SYNCVIEWS`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Ansichten der Teilfenster koppeln}}, oder das Verknüpfungssymbol auf den Zeichnungsreitern. `Ansichten der Teilfenster koppeln [EIN/AUS]` (Enter wechselt in den anderen Zustand): Solange es eingeschaltet ist, verschiebt oder zoomt ein Schwenk oder Zoom im aktiven Teilfenster jedes Teilfenster, das dieselbe Art von Raum zeigt. Siehe [Den Bildschirm teilen](topic:split-screen).

### OPENIN3D

Keine Aliase; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:In ModelCraft öffnen}}, wo die 3D-Modellierungs-App eine übergebene Zeichnung annimmt. Öffnet sie dort in einem neuen Tab als DWG (nichts wird hochgeladen). Blockiert der Browser den Tab, sagt er es.

### LASSOMODE

`Neuen Wert für LASSOMODE eingeben (1 = Lasso, 0 = Rechteck)`: was Drücken und Ziehen auf einer leeren Stelle zeichnet. Dasselbe wie Einstellungen › CadCraft › Ziehen zum Wählen. Siehe [Lassoauswahl](topic:lasso-selection).

### FILLET

Aliase: `F`. Linien, Bögen, Kreise und Polylinien. Gibt zuerst `Aktuelle Einstellungen: Modus = STUTZEN, Radius = 0` aus.

- `Erstes Objekt wählen [Rückgängig (U)/Polylinie (P)/Radius (R)/Stutzen (T)/Mehrere (M)]`
  - `R` fragt `Radius der Abrundung angeben <letzter>`. `T` fragt `Option für den Stutzmodus eingeben [Stutzen/Nicht stutzen]`: Mit Nicht stutzen bleiben die Objekte, wie sie sind, und nur der Bogen wird ergänzt.
  - `M` lässt den Befehl für weitere Ecken laufen, bis {{key:Enter}}; `U` nimmt die letzte Ecke zurück, ohne den Befehl zu verlassen.
  - `P` fragt `2D-Polylinie wählen [Radius]` und rundet jede Ecke, an der zwei gerade Abschnitte zusammentreffen. Abrundungen, die sie schon hat, werden durch den neuen Radius ersetzt; Radius 0 entfernt sie. Ecken, deren Seiten für den Radius zu kurz sind, bleiben und werden gezählt.
- `Zweites Objekt wählen oder mit Shift die Ecke übernehmen [Radius]`. Halten Sie {{key:Shift}} beim Klicken für eine scharfe Ecke, unabhängig vom Radius.

Klicken Sie jedes Objekt auf dem Teil an, den Sie behalten wollen. Zwei Linien, die sich nicht treffen, werden verlängert. Zwei parallele Linien bekommen einen Halbkreis über die Lücke, am Ende der ersten Linie, das Ihrem Klick am nächsten liegt. Ein Kreis wird nie geschnitten. Zwei Abschnitte derselben Polylinie, die nebeneinander liegen, bekommen den Bogen innerhalb der Polylinie; eine Polylinie und ein anderes Objekt funktionieren, wenn der Schnitt auf dem ersten oder letzten Abschnitt der Polylinie landet.

### CHAMFER

Aliase: `CHA`. Linien und die geraden Abschnitte von Polylinien. Gibt zuerst die aktuellen Abstände aus (oder Länge und Winkel).

- `Erste Linie wählen [Rückgängig (U)/Polylinie (P)/Abstand (D)/Winkel (A)/Stutzen (T)/Methode (E)/Mehrere (M)]`
  - `D` fragt `Ersten Fasenabstand angeben <letzter>` und `Zweiten Fasenabstand angeben <der erste>`: Der erste wird von der ersten Linie abgeschnitten, die Sie wählen, der zweite von der anderen.
  - `A` fragt `Fasenlänge auf der ersten Linie angeben` und `Fasenwinkel von der ersten Linie angeben`.
  - `E` (Methode) wählt, welcher der beiden die nächste Fase verwendet. `T`, `M`, `U` und `P` funktionieren wie in {{cmd:FILLET}}.
- `Zweite Linie wählen oder mit Shift die Ecke übernehmen [Abstand/Winkel/Methode]`. {{key:Shift}}+Klick macht eine scharfe Ecke.

Ein Abstand, der länger als die Linie ist, wird abgelehnt (`Abstand ist zu groß.`).

### BREAK und BREAKATPOINT

Aliase: `BR`. `Objekt wählen` (wo Sie klicken, ist der erste Punkt), `Zweiten Trennpunkt angeben [Erster Punkt (F)]`; `F` fragt `Ersten Trennpunkt angeben` und `Zweiten Trennpunkt angeben`. Der Teil dazwischen geht weg; bei einem Kreis gegen den Uhrzeigersinn vom ersten Punkt. BREAKATPOINT fragt `Trennpunkt angeben` und teilt das Objekt dort in zwei (kein Kreis).

### LENGTHEN

Aliase: `LEN`. `Objekt zum Messen wählen [Differenz (DE)/Prozent (P)/Gesamt (T)/Dynamisch (DY)]`: ein Klick gibt `Aktuelle Länge` aus (und den eingeschlossenen Winkel eines Bogens) und fragt erneut. `DE` fragt `Differenzlänge eingeben (negativ kürzt) [Winkel]`, `P` `Prozentuale Länge eingeben`, `T` `Gesamtlänge angeben [Winkel]`, `DY` zieht. Dann `Objekt zum Ändern wählen [Rückgängig (U)]`, wiederholt: das Ende, das dem Klick am nächsten liegt, bewegt sich. Linien, Bögen und offene Polylinien.

### JOIN

Aliase: `J`. `Objekte zum Verbinden wählen`. Linien, Bögen und offene Polylinien, die Ende an Ende zusammentreffen, werden zu Polylinien (geschlossen, wenn die Kette sich schließt); Linien auf einer Geraden werden zu einer Linie; Bögen eines Kreises werden zu einem Bogen oder dem Kreis. Der Verlauf sagt, wie viele Objekte sich verbunden haben und wie viele nicht.

### MATCHPROP

Aliase: `MA`, `PAINTER`. `Quellobjekt wählen`, dann `Zielobjekte wählen [Einstellungen]` und {{key:Enter}}. Kopiert Layer und Farbe und zwischen Objekten derselben Art die Texthöhe und -breite, die Bemaßungsgrößen oder das Schraffurmuster. `S` fragt `Eigenschaft ein- oder ausschalten [Farbe/Layer/Text/Bemaßung/Schraffur]`, wiederholt bis {{key:Enter}}; die Wahl wird für die Sitzung gemerkt.

### EXPLODE

Aliase: `X`. Polylinien werden zu Linien und Bögen, Blockreferenzen werden zu ihren Objekten, Bemaßungen zu Linien, Pfeilspitzen und Text. Eine Anordnung, die bearbeitbar bleibt ({{cmd:ARRAYEDIT}}), wird zu einfachen Kopien ihrer Objekte.

- `Objekte wählen`

### GROUP

Alias: `G`. {{cmd:GROUP}} gibt den gewählten Objekten einen Namen, den sie gemeinsam haben. Wählen Sie die Objekte, dann geben Sie einen Namen ein (ohne Leerzeichen; `?` listet die Gruppen; Enter erstellt eine unbenannte Gruppe) und für eine benannte Gruppe eine optionale Beschreibung. Ab dann wählt ein Klick auf eines davon oder ein Fenster, das eines erfasst, alle, sodass sie gemeinsam bewegt, kopiert und gelöscht werden; jedes Objekt ist aber weiterhin sein eigenes Objekt. Ein Objekt kann in mehreren Gruppen sein. Eine Kopie einer ganzen Gruppe ist eine neue unbenannte Gruppe; eine Kopie eines einzelnen Mitglieds tritt der Gruppe bei. Gruppen gehören zu dem Raum, in dem sie erstellt wurden (dem Modell oder einem Blatt). Sie bleiben erhalten, wenn Sie als DWG oder DXF speichern und die Datei in CadCraft erneut öffnen; DXF-2000-Dateien tragen sie außerdem als Gruppenobjekte für andere Programme, und Gruppen, die in einem anderen Programm erstellt wurden, werden beim Öffnen einer DXF oder DWG gelesen.

### UNGROUP

{{cmd:UNGROUP}} löst Gruppen auf: Wählen Sie Objekte der Gruppen (jede Gruppe, in der sie sind, wird aufgelöst) oder geben Sie `Name` und den Namen der Gruppe ein. Die Objekte bleiben in der Zeichnung. Ein Rückgängig-Schritt bringt die Gruppen zurück.

### GROUPEDIT

{{cmd:GROUPEDIT}} ändert eine Gruppe. Wählen Sie eines ihrer Objekte oder geben Sie `Name` und ihren Namen ein; eine Gruppe, die schon gewählt ist, wird so genommen, wie sie ist. Dann: `Hinzufügen (A)` von Objekten (einzeln angeklickt, nicht gruppenweise), `Entfernen (R)` von Objekten, die Gruppe `Umbenennen (RE)`, ihre `Beschreibung (D)` ändern oder `Wählbar (S)` festlegen (ob ein Klick auf ein Objekt die ganze Gruppe wählt). `Beenden (X)` oder Enter endet. Eine Gruppe ohne Objekte ist weg.

### PICKSTYLE

- `Gruppenauswahl: 0 ein Klick wählt ein Objekt, 1 seine ganze Gruppe`: Mit `1` (die Voreinstellung) wählt ein Klick oder ein Fenster auf ein gruppiertes Objekt die ganze Gruppe; mit `0` einzelne Objekte, sodass Sie ein Mitglied bearbeiten können. Für diese Sitzung gespeichert.

## Zwischenablage

Die eigene Zwischenablage von CadCraft: Sie funktioniert innerhalb einer Zeichnung, zwischen Zeichnungen und zwischen CadCraft-Tabs in diesem Browser. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

### COPYCLIP

{{key:Mod+C}}, oder {{ui:Kopieren}} in der Gruppe {{ui:Bearbeiten}}. Kopiert Objekte in die Zwischenablage, mit den Blöcken und Layern, die sie verwenden. Die Objekte bleiben gewählt.

- `Objekte zum Kopieren wählen` (entfällt, wenn schon Objekte gewählt sind)

### CUTCLIP

{{key:Mod+X}}, oder {{ui:Ausschneiden}} im Menü {{ui:Mehr}}. Kopiert Objekte in die Zwischenablage und löscht sie dann (ein Rückgängig-Schritt).

- `Objekte zum Ausschneiden wählen` (entfällt, wenn schon Objekte gewählt sind)

### COPYBASE

Kopiert Objekte mit einem Basispunkt, den Sie wählen, in die Zwischenablage; beim Einfügen liegt dieser Punkt dort.

- `Basispunkt angeben`
- `Objekte zum Kopieren wählen`

### PASTECLIP

{{key:Mod+V}}, oder {{ui:Einfügen}} in der Gruppe {{ui:Bearbeiten}}. Die Kopie folgt dem Cursor und hängt an der unteren linken Ecke ihrer Ausdehnung (oder an ihrer Mitte oder am Punkt von `COPYBASE`; siehe [Einstellungen von CadCraft](topic:settings)).

- `Einfügepunkt angeben`

Die eingefügten Objekte sind gewählt. Ein Block, den die Zeichnung schon unter demselben Namen hat, behält die Definition dieser Zeichnung.

Ist ein in MarkupCraft kopierter Bereich neuer als das, was CadCraft kopiert hat (und weniger als 6 Stunden alt), fügen {{key:Mod+V}} und `PASTECLIP` stattdessen diesen Bereich ein: siehe `PASTEAREA`.

### PASTEAREA

Aliase: `PAREA`. {{ui:Kopierten Bereich einfügen}} im Menü {{ui:Mehr}}. Fügt einen Bereich ein, der in MarkupCraft mit {{ui:Bereich kopieren}} kopiert wurde, als Bild in seiner wahren Größe. Siehe [Bilder in einer Zeichnung](topic:pictures).

- `Untere linke Ecke des kopierten Bereichs angeben`
- `Papiergröße skalieren um (100 für ein Blatt 1:100; Punkte: zwei Punkte darauf und ihr wahrer Abstand) [Punkte] <1>` (nur wenn das Blatt keinen Zeichnungsmaßstab hatte): eine Zahl, {{key:Enter}} für die Papiergröße oder `P`, dann `Ersten Punkt des eingefügten Bereichs angeben`, `Zweiten Punkt des eingefügten Bereichs angeben` und ihr wahrer Abstand.

### PASTEORIG

{{key:Mod+Shift+V}}, oder {{ui:An gleicher Position einfügen}} im Menü {{ui:Mehr}}. Fügt an den Koordinaten ein, von denen die Objekte kopiert wurden. Fragt nichts.

### DUPLICATE

Aliase: `DUP`. {{key:Mod+D}}, oder {{ui:Duplizieren und verschieben}} im Menü {{ui:Mehr}}. Eine Kopie der Objekte bewegt sich mit dem Zeiger von ihrem jetzigen Ort aus; {{key:Esc}} lässt nichts zurück. Verwendet die Zwischenablage nicht.

- `Objekte zum Duplizieren wählen` (entfällt, wenn schon Objekte gewählt sind)
- `Angeben, wohin die Kopie kommt (Esc lässt nichts zurück)`: klicken, einen Punkt eingeben, `@dx,dy` (von dort aus, wo der Zeiger war), oder einen Abstand zum Cursor hin.

### SELECT

Fragt `Objekte wählen` (mit allen Optionen unten) und lässt, was Sie gewählt haben, ausgewählt für den nächsten Befehl oder für `P` später.

### QSELECT

Aliase: `QS`. Im Browser das Dialogfeld {{ui:Schnellauswahl}} (siehe [Objekte auswählen](topic:select-objects#select-by-a-rule-quick-select)). Ohne es fragt die Befehlszeile `Objekttyp eingeben`, `Eigenschaft eingeben`, `Operator eingeben [=/<>/>/</*/Alle wählen] <=>` und `Wert eingeben`. Die Treffer werden zur Auswahl.

### SELECTSIMILAR

Aliase: `SIM`. `Objekte wählen [Einstellungen (SE)]` (oder die aktuelle Auswahl): wählt jedes Objekt desselben Typs mit demselben Layer und derselben Farbe (und Blocknamen, Schraffurmuster). `SE` fragt `Eigenschaft ein- oder ausschalten [Layer (LA)/Farbe (CO)/Name (NA)/Muster (PA)/Höhe (HE)]`, wiederholt bis {{key:Enter}}.

### FIND

Keine Aliase; oder {{ui:Bearbeiten}} › {{ui:Mehr}} › {{ui:Suchen und Ersetzen}}. Im Browser das Dialogfeld {{ui:Suchen und Ersetzen}} (siehe [Text und Beschriftungen hinzufügen](topic:text#find-and-replace-words)). Ohne es: `Zu suchenden Text eingeben`, dann `Ersatztext eingeben (Enter: gefundenes auswählen)`. Sucht in Texten, Attributwerten und Bemaßungstext, im offenen Tab oder in der Auswahl.

### SELECTALL und DESELECT

`SELECTALL` (Alias `AI_SELALL`, {{key:Mod+A}}) wählt jedes Objekt, das Sie auf dem offenen Tab bearbeiten können. `DESELECT` (Aliase `AI_DESELECT`, `SELECTNONE`; oder {{key:Esc}}) hebt die Auswahl auf.

## Bemaßungen

### DIMLINEAR

Aliase: `DLI`, `DIMLIN`. Waagrechter oder senkrechter Abstand.

- `Ersten Ursprung der Maßhilfslinie angeben [Objekt wählen (S)]` (Enter oder `S`: `Objekt zum Bemaßen wählen`, dann ein Linien-, Bogen-, Kreis- oder Polylinienabschnitt anklicken)
- `Zweiten Ursprung der Maßhilfslinie angeben`
- `Lage der Maßlinie angeben [Text (T)/Waagerecht (H)/Senkrecht (V)/Gedreht (R)]`. `T` fragt nach Text (`<>` ist der gemessene Wert), `H` und `V` legen die Richtung fest, `R` fragt `Winkel der Maßlinie angeben <0>`.

### DIMALIGNED

Aliase: `DAL`, `DIMALI`. Der wahre Abstand zwischen zwei Punkten.

- Ursprünge wie in {{cmd:DIMLINEAR}}, dann `Lage der Maßlinie angeben [Text]`.

### DIMANGULAR

Aliase: `DAN`, `DIMANG`.

- `Bogen, Kreis oder Linie wählen, oder Enter für einen Scheitelpunkt`
- Bogen: sein Winkel. Kreis: `Zweiten Winkelendpunkt angeben`. Linie: `Zweite Linie wählen`. Enter: `Scheitelpunkt des Winkels angeben`, `Ersten Winkelendpunkt angeben`, `Zweiten Winkelendpunkt angeben`.
- `Lage der Maßlinie angeben [Text]`: klicken Sie innerhalb des Winkels, den Sie messen wollen.

### DIMRADIUS und DIMDIAMETER

Aliase: `DRA`, `DIMRAD`; `DDI`, `DIMDIA`.

- `Bogen oder Kreis wählen`, dann `Lage der Maßlinie angeben [Text]`.

### DIMCONTINUE

Aliase: `DCO`, `DIMCONT`. Setzt von der letzten linearen oder ausgerichteten Bemaßung fort, die gemacht wurde (oder fragt `Lineare oder ausgerichtete Bemaßung wählen`).

- `Zweiten Ursprung der Maßhilfslinie angeben [Rückgängig (U)]`, wiederholt bis Enter.

### DIMBASELINE

Aliase: `DBA`, `DIMBASE`. Wie {{cmd:DIMCONTINUE}}, aber jede Bemaßung beginnt am ersten Ursprung und wird weiter außen gestapelt.

### DIMORDINATE

Aliase: `DOR`, `DIMORD`. `Lage des Merkmals angeben`, dann `Endpunkt der Führungslinie angeben [Xbezug/Ybezug/Text]`. Schreibt, wie weit das Merkmal entlang X oder entlang Y vom Ursprung des BKS entfernt ist, auf einer Führungslinie: Eine Führungslinie, die überwiegend nach oben oder unten läuft, liest X, eine, die seitlich läuft, liest Y; `Xbezug` und `Ybezug` legen fest, welches. Legen Sie den Ursprung zuerst mit {{cmd:UCS}} fest (ohne einen ist es der Nullpunkt der Zeichnung). Griffe verschieben das Merkmal, den Ursprung und das Ende der Führungslinie, und der Wert folgt. In DWG und DXF als echte Koordinatenbemaßung gespeichert. Lehnt ein Führungsende auf dem Merkmal selbst ab.

### DIMARC

Aliase: `DAR`. `Bogen oder Bogenabschnitt einer Polylinie wählen`, dann `Lage der Bogenlängenbemaßung angeben [Text]`. Misst entlang des Bogens (nicht der Sehne) und schreibt das Bogensymbol vor den Wert. Lehnt einen ganzen Kreis, eine Linie oder einen geraden Polylinienabschnitt ab. Eine DWG speichert sie als Bogenlängenbemaßung; eine DXF speichert sie als Winkelbemaßung mit der Länge als Text, und CadCraft öffnet sie wieder als Bogenlängenbemaßung.

### DIMJOGGED

Aliase: `DJO`, `JOG`. `Bogen oder Kreis wählen`, `Lage des Mittelpunkts (Überschreibung) angeben`, `Lage des Knicks angeben`. Eine Radiusbemaßung für eine Kurve, deren Mittelpunkt weit entfernt oder außerhalb des Blattes liegt: Die Maßlinie beginnt an dem Punkt, den Sie angeben, statt am Mittelpunkt, mit einem Knick darin, und zeigt trotzdem den wahren Radius. Eine DWG speichert sie als geknickte Radiusbemaßung; eine DXF speichert sie als Radiusbemaßung, und CadCraft öffnet sie wieder geknickt.

### DIMJOGLINE

Aliase: `DJL`. `Bemaßung zum Hinzufügen des Knicks wählen [Entfernen (R)]`, dann `Lage des Knicks angeben (oder Enter drücken)`. Setzt ein Knicksymbol auf die Linie einer linearen oder ausgerichteten Bemaßung, um zu zeigen, dass der Abstand nicht maßstabsgetreu gezeichnet ist; der Wert ändert sich nicht. `Entfernen` nimmt es weg. Lehnt andere Arten von Bemaßungen ab.

### QDIM

Keine Aliase. `Geometrie zum Bemaßen wählen`, dann `Lage der Maßlinie angeben [Fortlaufend (C)/Versetzt (S)/Grundlinie (B)/Koordinate (O)/Radius (R)/Durchmesser (D)/Bezugspunkt (P)]`. Bemaßt mehrere Objekte in einem Schritt, von den Enden von Linien und Polylinienabschnitten, den Mittelpunkten von Kreisen und Bögen, Punkten und Blockreferenzen aus. Eine Lage über oder unter den Objekten misst quer, eine daneben misst aufwärts. `Fortlaufend` verkettet die Punkte, `Grundlinie` misst alle vom ersten aus, `Versetzt` schachtelt Paare von der Mitte nach außen, `Koordinate` gibt jedem Punkt seinen Abstand vom Bezugspunkt (`Bezugspunkt` wählt einen neuen), `Radius` und `Durchmesser` bemaßen jeden gewählten Kreis und Bogen. Der Modus wird gemerkt. Alles, was er erstellt, ist ein Rückgängig-Schritt. Er sagt es, wenn es weniger als zwei Punkte gibt oder keine Bögen oder Kreise für Radius und Durchmesser.

### DIMBREAK

Aliase: `DBREAK`. `Bemaßungen zum Hinzufügen oder Entfernen von Unterbrechungen wählen`, dann `Unterbrechen, wo andere Objekte kreuzen [Automatisch (A)/Manuell (M)/Entfernen (R)] <Automatisch>`. `Automatisch` lässt eine Lücke in der Maßlinie und den Maßhilfslinien, wo immer ein anderes Objekt sie kreuzt, und berechnet die Lücken neu, wenn sich diese Objekte oder die Bemaßung bewegen. `Manuell` (eine Bemaßung) fragt nach zwei Punkten und lässt eine Lücke zwischen ihnen. `Entfernen` nimmt jede Lücke weg. Die Lücke ist das 1,5-fache der Texthöhe der Bemaßung.

### DIMSPACE

Keine Aliase. `Basisbemaßung wählen`, `Zu verteilende Bemaßungen wählen`, `Abstandswert eingeben oder Automatisch <Automatisch>`. Verschiebt die Maßlinien paralleler linearer und ausgerichteter Bemaßungen (oder winkliger um denselben Scheitelpunkt), sodass sie gleich weit auseinander liegen, gemessen von der Basisbemaßung aus, jede auf der Seite, auf der sie liegt. `0` richtet sie mit der Basis aus; `Automatisch` ist das Doppelte der Texthöhe der Basisbemaßung. Bemaßungen, die nicht parallel zur Basis sind, bleiben in Ruhe.

### DIMINSPECT

Keine Aliase. `Bemaßungen wählen`, `Form des Prüfrahmens [Rund (R)/Winkelig (A)/Keiner (N)/Entfernen (R)] <Rund>`, `Bezeichnung eingeben`, `Prüfrate eingeben <100%>`. Zeichnet einen Rahmen um den Wert mit einer Bezeichnung davor und der Prüfrate danach. `Entfernen` nimmt den Rahmen weg. Der Toleranztext bleibt beim Wert.

### DIMOVERRIDE

Aliase: `DOV`, `DIMOVER`. `Name der Bemaßungsvariablen zum Überschreiben eingeben oder Löschen`, `Neuen Wert für … eingeben`, erneut bis Enter, dann `Bemaßungen wählen`. Ändert diese Einstellungen nur an den gewählten Bemaßungen; der Bemaßungsstil wird nicht geändert. Nimmt die Variablen, die eine Zahl oder ein Schalter sind (`DIMTXT`, `DIMASZ`, `DIMSCALE`, `DIMDEC`, `DIMSE1` …). `Löschen` setzt die gewählten Bemaßungen zurück auf ihren Stil. Lehnt einen Namen ab, der keine solche Variable ist, und einen Wert, den sie nicht annehmen kann.

### DIMREASSOCIATE

Aliase: `DRE`, `DIMREASSOC`. `Bemaßungen wählen`, dann für jede ihre Ursprünge der Maßhilfslinien (`Ersten Ursprung der Maßhilfslinie an einem Objekt angeben`: einrasten an einem Ende oder der Mitte einer Linie, einer Ecke einer Polylinie, einem Mittelpunkt; Enter lässt diesen Punkt frei), oder bei einer Radius-, Durchmesser-, geknickten Radius- oder Bogenlängenbemaßung `Bogen oder Kreis wählen`. Die Bemaßung wird dann an diese Objekte gebunden: Wenn sie sich bewegen oder ihre Größe ändern, folgt sie im selben Rückgängig-Schritt und misst neu. Einen gebundenen Punkt von Hand zu verschieben oder das Objekt zu löschen, löst die Bindung. Die Bindung wird in DWG und DXF 2000 als eigene Daten von CadCraft gespeichert; andere Programme sehen eine gewöhnliche Bemaßung.

### DIMDISASSOCIATE

Aliase: `DDA`, `DIMDISASSOC`. `Bemaßungen wählen`. Löst sie von den Objekten, an die sie gebunden sind; nichts bewegt sich.

### CENTERMARK

Aliase: `CM`, `DIMCENTER`, `DCE`. `Kreis oder Bogen wählen, um eine Mittelmarkierung hinzuzufügen`, erneut bis Enter. Zeichnet ein Kreuz im Mittelpunkt und vier Mittellinien bis kurz über die Kurve hinaus (Linientyp CENTER), als einfache Linien auf dem aktuellen Layer; ihre Größe richtet sich nach der Pfeilgröße und dem Gesamtmaßstab der aktuellen Bemaßungseinstellungen, gedreht mit dem BKS. Sie folgen dem Kreis nicht, wenn er sich bewegt.

### CENTERLINE

Aliase: `CL`. `Erste Linie wählen`, `Zweite Linie wählen`. Zeichnet eine Linie in der Mitte zwischen zwei Linien (auf der Winkelhalbierenden, wenn sie sich treffen), etwas länger als sie, im Linientyp CENTER. Eine einfache Linie: Sie folgt den beiden Linien nicht.

### DIMSCALE, DIMTXT, DIMASZ, DIMDEC, DIMGAP, DIMEXE, DIMEXO

Keine Aliase. Jede fragt `Neuen Wert für … eingeben <aktuell>` und legt diese Größe für **neue** Bemaßungen fest: Gesamtmaßstab, Texthöhe, Pfeilgröße, Dezimalstellen (bis 8), Abstand um den Text, Verlängerung über die Maßlinie hinaus, Versatz vom Ursprung. Siehe [Bemaßungsgrößen festlegen](topic:dimension-settings).

### DIMLUNIT

Bemaßungseinstellung: das Format nur neuer Bemaßungen (1 wissenschaftlich, 2 dezimal, 3 Ingenieur, 4 Architektur, 5 Bruch).

### DIMSTYLE und -DIMSTYLE

Aliase: `DST`, `DDIM`, `D`. Der Manager für Bemaßungsstile: {{ui:Aktuell setzen}}, {{ui:Neu…}}, {{ui:Ändern…}}, {{ui:Umbenennen…}}, {{ui:Löschen}}, {{ui:Vergleichen…}}, {{ui:Auf Auswahl anwenden}}. `-DIMSTYLE` in der Befehlszeile: `Bemaßungsstil [Wiederherstellen (R)/Speichern (S)/Löschen (D)/Anwenden (A)/Vergleichen (C)/Umbenennen (N)/Auflisten (L)]`. Siehe [Bemaßungsgrößen festlegen](topic:dimension-settings#named-dimension-styles).

### DIMEDIT und DIMTEDIT

`DIMEDIT` (`DED`): `Bemaßungsbearbeitung [Start (H)/Neu (N)/Drehen (R)/Schräg (O)] <Start>`, dann die Bemaßungen (oder die schon gewählten). Neu fragt nach dem Text (`<>` = das Maß); Drehen nach einem Winkel (0 setzt den Text zurück); Schräg nach dem Winkel der Maßhilfslinien zur X-Achse (Enter = keiner; nur lineare und ausgerichtete Bemaßungen). `DIMTEDIT` (`DIMTED`): `Bemaßungstext [Links (L)/Rechts (R)/Zentriert (C)/Start (H)/Winkel (A)] <Zentriert>`. Siehe [Bemaßungsgrößen festlegen](topic:dimension-settings#change-dimension-text-and-extension-lines).

### DIMTEXTUNIT

Aliase: `DTU`. `Einheiten im Text neuer Bemaßungen [Zeichnungseinheiten/mm/cm/m/km]`, oder bei gewählten Bemaßungen `Einheiten im Text der gewählten Bemaßungen`. Schreibt die gemessene Länge in dieser Einheit mit der Einheit danach (DIMLFAC und ein DIMPOST-Suffix); `D` geht zurück zu den Zeichnungseinheiten. Siehe [Bemaßungen in mm, cm, m oder km](topic:dimension-settings#dimensions-in-mm-cm-m-or-km).

### REVCLOUD

Aliase: `RC`. Gibt `Bogenlänge: … Typ: …` aus, dann `Ersten Punkt angeben [Bogenlänge (A)/Objekt (O)/Rechteckig (R)/Polygonal (P)/Freihand (F)]`. Rechteckig fragt `Gegenüberliegende Ecke angeben`; Polygonal `Nächsten Punkt angeben (Enter schließt die Wolke) [Rückgängig (U)]`; Freihand folgt dem Zeiger bis zu einem Klick oder {{key:Enter}}; `O` fragt `Objekt wählen` und `Richtung umkehren? [Ja (Y)/Nein (N)] <N>` und macht das Objekt zur Wolke. `A` fragt `Länge jedes Bogens angeben`. `R`, `P` und `F` wählen die Art für die nächste Wolke. Das Ergebnis ist eine geschlossene Polylinie aus Bögen.

### MLEADER

Aliase: `MLD`; oder {{ui:Führungslinie}}. `Lage der Pfeilspitze der Führungslinie angeben [Pfeilgröße/Abstand zur Ablage/Block (B)]`, `Lage der Ablage der Führungslinie angeben`, dann der Text im Feld an Ort und Stelle (oder ohne es `Text eingeben (eine leere Zeile beendet)`). `Block` fragt zuerst nach einem Blocknamen, und die Multi-Führungslinie zeigt diesen Block statt Text. Weitere Führungslinien: {{cmd:MLEADEREDIT}}. In DWG als echte Multi-Führungslinie gespeichert; DXF behält die Linien, die Pfeilspitze und den Text, die sie zeichnet.

### MLEADEREDIT

Aliase: `MLE`. `Multi-Führungslinie wählen`, dann `Lage der Pfeilspitze der Führungslinie angeben [Führungslinien entfernen (R)/Blockinhalt (B)/Textinhalt (T)]`: jeder Punkt fügt eine Führungslinie von einer neuen Pfeilspitze zur gleichen Ablage hinzu, bis Enter. `Führungslinien entfernen` nimmt dann die Führungslinie weg, die Sie anklicken (eine Multi-Führungslinie behält mindestens eine). `Blockinhalt` fragt nach einem Blocknamen und zeigt diesen Block statt des Textes (seine Attribute werden abgefragt); `Textinhalt` setzt den Text zurück. Jede Führungslinie hat einen eigenen Griff. Eine DWG behält jede Führungslinie und den Block in einer Multi-Führungslinie.

### MLEADERALIGN

Aliase: `MLA`. `Multi-Führungslinien wählen`, dann `Multi-Führungslinie zum Ausrichten wählen [Verteilen (D)/Abstand (S)/Aktuellen Abstand verwenden (U)]` und `Richtung angeben`. Verschiebt die Ablagen der anderen Multi-Führungslinien (und ihren Text oder Block) auf die Linie durch die Ablage der gewählten in dieser Richtung; die Pfeilspitzen bleiben dort, wo sie zeigen. `Abstand` setzt sie außerdem in gleichen Abstand; `Verteilen` fragt nach zwei Punkten und verteilt sie gleichmäßig dazwischen. Braucht mindestens zwei Multi-Führungslinien.

### MLEADERCOLLECT

Aliase: `MLC`. `Multi-Führungslinien wählen`, dann `Lage der gesammelten Multi-Führungslinie angeben [Senkrecht (V)/Waagerecht (H)]` (Enter behält den Platz der ersten). Macht aus mehreren eine Multi-Führungslinie: Blockinhalte kommen in einen neuen Block, der alle nebeneinander oder untereinander hält; Textinhalte werden eine Notiz mit einer Zeile für jede. Die erste Multi-Führungslinie behält ihre Führungslinien; die anderen werden entfernt. Lehnt eine Mischung aus Text- und Blockinhalten ab.

### TABLE

Aliase: `TB`; oder {{ui:Beschriften}} › {{ui:Mehr}} › {{ui:Tabelle}}. Erstellt eine Tabelle: ein Objekt, das Sie wie jedes andere verschieben, kopieren, drehen, skalieren und plotten, mit Zellen, die als Daten bleiben.

- `Anzahl der Datenzeilen oder [Einfügen (P)/Datei (F)/Stil (S)] <3>`, dann `Anzahl der Spalten <3>`, `Texthöhe` und `Obere linke Ecke der Tabelle`. Die Tabelle erhält eine Titelzeile (eine verbundene Zelle) und eine Kopfzeile über den Datenzeilen.
- `P`: eine Tabelle aus Tabellenzellen der Zwischenablage (Text mit einem Tabulator zwischen den Zellen). Drücken von {{key:Ctrl+V}} mit solchen Zellen in der Zwischenablage tut dasselbe, außer wenn die eigene Kopie von CadCraft neuer ist (oder CadCraft es nicht unterscheiden kann: dann fügt es seine eigene Kopie ein und sagt es). `F`: eine Tabelle aus einer `.csv`- oder tabulatorgetrennten Datei. Die erste Zeile wird die Kopfzeile; die Spaltenbreiten passen sich dem Text an.
- `S`: wählen Sie den Tabellenstil für diese Tabelle (siehe {{cmd:TABLESTYLE}}).
- Er lehnt eine Zeilen- oder Spaltenzahl ab, die keine ganze Zahl ist, und mehr Zellen, als eine Tabelle fasst (2.000 Zeilen, 200 Spalten, 40.000 Zellen).
- {{cmd:EXPLODE}} macht aus einer Tabelle Linien und Text. Als DWG gespeichert ist eine Tabelle ein echtes Tabellenobjekt, das andere Programme bearbeiten können; als DXF gespeichert ist es ein Block, der sie zeichnet, und CadCraft öffnet sie wieder als Tabelle.

### TABLEDIT

Aliase: `TABLEEDIT`, `TABEDIT`; oder doppelklicken Sie auf eine Zelle. Bearbeitet eine Tabelle.

- `Zelle zum Schreiben wählen (Enter zum Beenden) oder [Zeile (R)/Spalte (C)/Größe (S)/Verbinden (M)/Trennen (U)/Ausrichten (A)/Höhe (H)/Art (K)/Leeren (CL)]`. Klicken Sie eine Zelle an oder geben Sie bei gewählter Tabelle ihren Namen ein (`B3`: Spalte B, Zeile 3; die Titelzeile ist Zeile 1). Im Browser öffnet sich über der Zelle ein Feld: {{key:Enter}} behält den Text, {{key:Tab}} geht zur nächsten Zelle, {{key:Alt+Enter}} beginnt eine neue Zeile, {{key:Esc}} lässt die Zelle, wie sie war.
- Ein Text, der mit `=` beginnt, ist eine Formel: `=A3+B3`, `=B3*C3`, `=Sum(B3:B9)`, `=Average(B3:B9)`, `=Count(B3:B9)`, `=Min(…)`, `=Max(…)`, mit `+ - * / ^`, Klammern und Funktionen wie `sqrt` und `round`. Die Zelle zeigt den Wert; eine Formel, die auf ihre eigene Zelle verweist, auf eine Zelle außerhalb der Tabelle oder auf eine Zelle ohne Zahl, zeigt `####`, und die Befehlszeile sagt warum.
- `R` / `C` (Zeile/Spalte): `Einfügen` oder `Löschen` von Zeilen oder Spalten an einer gewählten Zelle (wie viele, und darüber oder darunter, links oder rechts). Formeln folgen den Zellen, auf die sie verweisen.
- `S`: die Breite der Spalte und die Höhe der Zeile. Eine Zeile ist nie niedriger, als ihr Text braucht. Eine gewählte Tabelle hat außerdem einen Griff am Rand jeder Spalte und jeder Zeile.
- `M`: verbinden von einer gewählten Zelle zu einer anderen; `U`: trennen. `A`: Ausrichtung (`TL` oben links … `MC` Mitte Mitte … `BR` unten rechts). `H`: die eigene Texthöhe dieser Zelle (0 = die des Stils). `K`: macht die Zeile zu einer Titel-, Kopf- oder Datenzeile. `CL`: leert die Zelle.
- Er lehnt eine Tabelle auf einem gesperrten Layer ab, das Löschen jeder Zeile oder Spalte und eine Verbindung, die eine andere verbundene Zelle durchschneiden würde.

### TABLESTYLE

Aliase: `TS`. Listet die Tabellenstile auf mit der Anzahl der Tabellen, die jeden verwenden, dann `Tabellenstil: [Neu (N)/Setzen (S)/Bearbeiten (E)/Löschen (D)/Anwenden (A)]`.

- Ein Stil enthält die Texthöhe und Ausrichtung von Titel-, Kopf- und Datenzeilen, den Zellenrand und welche Rahmen gezeichnet werden (außen, zwischen den Zeilen, zwischen den Spalten).
- `N` erstellt einen Stil aus dem aktuellen und macht ihn aktuell; `S` setzt den aktuellen Stil (neue Tabellen übernehmen ihn); `E` bearbeitet einen: Tabellen, die ihn verwenden, werden neu gezeichnet; `A` gibt gewählten Tabellen den aktuellen Stil; `D` löscht einen (nicht Standard, nicht den aktuellen; Tabellen, die ihn verwendeten, behalten ihr Aussehen).
- Stile werden mit der Zeichnung gespeichert (DWG und DXF).

### TABLEEXPORT

Speichert, was eine Tabelle zeigt, als CSV-Datei (eine Formel als ihr Wert). `Tabelle wählen`, oder wählen Sie eine zuerst. Textzellen, die mit `=`, `+`, `-` oder `@` beginnen, bekommen ein führendes `'`, damit eine Tabellenkalkulation sie nicht ausführt.

### TABLEPASTE

Aliase: `PASTETABLE`. Erstellt eine Tabelle aus Tabellenzellen der Zwischenablage und fragt dann nach ihrer oberen linken Ecke. Dasselbe wie {{cmd:TABLE}} › `Einfügen`.

### DATALINK

Aliase: `DL`. `Datenverknüpfung: [Neu (N)/Auflisten (L)/Entfernen (R)] <Neu>`. `N` fragt nach einer CSV-Datei, platziert eine Tabelle daraus und merkt sich den Namen der Datei; `L` listet die Verknüpfungen mit ihrer Datei, Größe, dem Zeitpunkt des Lesens und der Anzahl der Tabellen, die sie verwenden; `R` entfernt eine Verknüpfung (ihre Tabellen bleiben als einfache Tabellen).

### DATALINKUPDATE

Aliase: `DLU`. Liest die Datei einer Datenverknüpfung erneut und füllt die damit verknüpften Tabellen neu (Zeilen und Spalten werden hinzugefügt oder entfernt, um zu passen). Ein Browser kann eine Datei nicht selbst öffnen, daher fragt er, bis Sie die Datei erneut wählen. Bei mehreren Verknüpfungen fragt er, welche.

### FIELD

Legt ein Feld in die Zeichnung: Text, der sich selbst berechnet. `Feld: [Datum (D)/Dateiname (F)/Blatt (S)/Eigenschaft (P)/Objekt (O)/Ausdruck (E)/Code (C)] <Datum>`:

- `D`: jetzt oder das gespeicherte, erstellte oder geplottete Datum, und ein Format (`jjjj-MM-tt`, `d MMMM jjjj`, `HH:mm`). `F`: der Dateiname, mit oder ohne Erweiterung. `S`: die Nummer des Blatts, sein Titel oder wie viele Blätter es gibt. `P`: eine Eigenschaft der Zeichnung nach Namen (siehe {{cmd:DWGPROPS}}). `O`: ein Objekt wählen, dann was gelesen werden soll (Fläche, Länge, Umfang, Radius, Durchmesser, Layer, Name, X, Y, Text, Drehung, Farbe) und die Dezimalstellen. `E`: eine Formel. `C`: ein Text mit Codes, so wie sie geschrieben werden, etwa `Blatt %<sheetnumber>% von %<sheetcount>%`.
- Dann `Text, Tabellenzelle oder Block mit Attributen wählen, in den es gesetzt wird (Enter: ein neuer Text)`: Ein gewählter Text bekommt das Feld hinter dem angefügt, was er enthält; eine Tabellenzelle ebenso; ein Blockverweis fragt, welches Attribut; {{key:Enter}} fragt nach einer Höhe und einem Punkt für einen neuen Text.
- Auf dem Bildschirm hat ein Feld einen hellgrauen Hintergrund; ein Plot und eine PDF haben ihn nie. Wenn Sie den Text eines Feldes von Hand überschreiben, endet das Feld. Ein Feld, das nicht berechnet werden kann, zeigt `####`.
- Die Feldfunktion eines Objekts findet es über den Schlüssel, den CadCraft an Objekten hält (Einstellungen › CadCraft › Zusammenführbare Dateien); mit ausgeschalteten Schlüsseln lehnt sie ab.

### UPDATEFIELD

Aliase: `UPDATEFIELDS`. `Objekte wählen, deren Felder aktualisiert werden sollen (Enter: jedes Feld) oder [Einstellungen (S)]`. `S` legt fest, wann Felder sich von selbst aktualisieren: geben Sie die Buchstaben von `O` für Öffnen, `S` für Speichern, `P` für Plotten, `R` für Neu berechnen ein (am Anfang alle vier), oder `KEINE`.

### DWGPROPS

Aliase: `DRAWINGPROPS`. Listet die Eigenschaften der Zeichnung auf, dann `Ändern: [Titel (T)/Thema (S)/Autor (A)/Firma (C)/Schlüsselwörter (K)/Kommentar (M)/Benutzerdefiniert (U)/Entfernen (R)/Beenden (X)]`. Die ersten sechs sind jene, die das Feld {{ui:Zeichnungsdetails}} zeigt; `U` fügt Ihren eigenen Namen und Wert hinzu, `R` entfernt einen. Felder lesen sie (`%<prop:title>%`, `%<prop:Client>%`) und folgen sofort. Es lehnt einen eigenen Namen ab, der einer der eingebauten ist oder `%`, `<`, `>`, ein Anführungszeichen oder einen Backslash enthält.

## Parametrik

Siehe [Eine Zeichnung mit Abhängigkeiten festlegen](topic:constraints) und [Parameter und Gleichungen verwenden](topic:parameters). Abhängigkeiten wirken auf dem Reiter {{ui:Modell}}.

### GEOMCONSTRAINT und die GC-Befehle

Alias `GCON`: `Art der Abhängigkeit eingeben [Waagerecht (H)/Senkrecht (V)/Rechtwinklig (P)/Parallel (PA)/Tangential (T)/Koinzident (C)/Konzentrisch (CON)/Kollinear (COL)/Symmetrisch (S)/Gleich (E)/Fixieren (F)] <Waagerecht>`, dann die Aufforderungen dieses Befehls.

- {{cmd:GCHORIZONTAL}}, {{cmd:GCVERTICAL}}: `Objekt wählen [2Punkte] <2Punkte>`.
- {{cmd:GCPARALLEL}}, {{cmd:GCPERPENDICULAR}}, {{cmd:GCCOLLINEAR}}, {{cmd:GCCONCENTRIC}}, {{cmd:GCEQUAL}}, {{cmd:GCTANGENT}}: `Erstes Objekt wählen`, `Zweites Objekt wählen` (das zweite bewegt sich).
- {{cmd:GCCOINCIDENT}}: `Ersten Punkt wählen [Objekt/Autoabhängigkeit] <Objekt>`, `Zweiten Punkt wählen [Objekt] <Objekt>`.
- {{cmd:GCFIX}}: `Punkt wählen [Objekt] <Objekt>`.
- {{cmd:GCSYMMETRIC}}: `Erstes Objekt wählen [2Punkte] <2Punkte>`, `Zweites Objekt wählen`, `Symmetrielinie wählen`.

### DIMCONSTRAINT und die DC-Befehle

Alias `DCON`: `Zu wandelnde assoziative Bemaßung wählen [Linear (LI)/Waagerecht (H)/Senkrecht (V)/Ausgerichtet (AL)/Winkel (AN)/Radial (R)/Durchmesser (D)/Umwandeln (C)] <Ausgerichtet>`.

- {{cmd:DCLINEAR}}, {{cmd:DCHORIZONTAL}}, {{cmd:DCVERTICAL}}: `Ersten Abhängigkeitspunkt angeben [Objekt] <Objekt>`, `Zweiten Abhängigkeitspunkt angeben`, `Lage der Maßlinie angeben`, `Bemaßungstext <d1=40>` (eine Zahl, ein Ausdruck oder `Name=Ausdruck`).
- {{cmd:DCALIGNED}}: wie oben, mit `[Objekt/Punkt und Linie/2Linien]`.
- {{cmd:DCRADIUS}}, {{cmd:DCDIAMETER}}: `Bogen oder Kreis wählen`. {{cmd:DCANGULAR}}: `Erste Linie oder Bogen wählen`, `Zweite Linie wählen`.
- {{cmd:DCCONVERT}}: `Zu wandelnde Bemaßungen wählen`.

### AUTOCONSTRAIN, DELCONSTRAINT, CONSTRAINTBAR, DCDISPLAY

- {{cmd:AUTOCONSTRAIN}}: `Objekte wählen [Einstellungen (S)]`. `S` fragt die Toleranzen für Abstand und Winkel.
- {{cmd:DELCONSTRAINT}} (Alias `DELCON`): `Objekte wählen`; ihre Abhängigkeiten gehen.
- {{cmd:CONSTRAINTBAR}} (Alias `CBAR`): `Objekte wählen [Alle anzeigen/Alle ausblenden]`, dann `[Anzeigen/Ausblenden]`.
- {{cmd:DCDISPLAY}}: `Option eingeben [Anzeigen/Ausblenden]`.

### PARAMETERS und -PARAMETERS

{{cmd:PARAMETERS}} (Aliase `PAR`, `PARAM`) öffnet den Bereich {{ui:Parameter}}. `-PARAMETERS`: `Option eingeben [Neu (N)/Bearbeiten (E)/Umbenennen (R)/Löschen (D)/?] <?>`.

### SWBOUT

Alias `SWMACRO`. Lädt ein Makro (.swb) herunter, das das Modell in SolidWorks als eine einzige bemaßte Skizze neu aufbaut. Siehe [Skizzen zu und von anderen Teilemodellierern verschieben](topic:solidworks-sketches).

## Blöcke

### ANNOSCALE

Aliase: `CANNOSCALE`. Nennt den Beschriftungsmaßstab der Zeichnung und wie viele beschriftungsfähige Objekte sie hält, dann fragt `Neuer Beschriftungsmaßstab`: geben Sie `1:50`, `1:100`, `2:1`, eine nackte Zahl (`50` ist 1:50) oder den Namen eines eigenen Maßstabs der Zeichnung ein. Jeder beschriftungsfähige Text und jede Bemaßung wird so neu skaliert, dass sie im neuen Maßstab in derselben Größe gedruckt wird, in einem Rückgängig-Schritt; nicht beschriftungsfähige Objekte bleiben in Ruhe, ebenso ein Objekt, das eine Liste von Maßstäben führt, ohne den neuen ({{cmd:OBJECTSCALE}}). Siehe [Einheiten, Papierformate und Maßstäbe](topic:units-papers-scales#annotate-by-scale).

### OBJECTSCALE

Aliase: `OBJSCALE`. `Beschriftungsfähige Objekte wählen`, dann `Beschriftungsmaßstäbe der gewählten Objekte [Hinzufügen (A)/Löschen (D)/Aktueller Maßstab (C)/Auflisten (L)/Beenden (X)] <Hinzufügen>`. Ein beschriftungsfähiger Text oder eine Bemaßung führt eine Liste von Beschriftungsmaßstäben. `Hinzufügen` und `Löschen` fragen nach einem Maßstab (`1:50`, `2:1`, eine nackte Zahl oder der Name eines eigenen Maßstabs der Zeichnung); `Aktueller Maßstab` fügt den Beschriftungsmaßstab der Zeichnung hinzu; `Auflisten` gibt die Maßstäbe jedes Objekts aus. Ein Ansichtsfenster, dessen Maßstab in der Liste eines Objekts steht, zeigt das Objekt in der Größe, die seine Papierhöhe in diesem Maßstab druckt, auf dem Bildschirm und in Plots. Der letzte Maßstab kann nicht gelöscht werden. Nicht beschriftungsfähige Objekte bleiben außen vor: Schalten Sie zuerst {{ui:Beschriftungsfähig}} in den {{ui:Eigenschaften}} ein. Die Listen werden in DWG und DXF als eigene Daten von CadCraft gespeichert. Siehe [Einheiten, Papierformate und Maßstäbe](topic:units-papers-scales#annotate-by-scale).

### ANNOALLVISIBLE

Aliase: `ANNOALL`. `Beschriftungsfähige Objekte in allen Maßstäben anzeigen [EIN/AUS]`. Ein (so beginnt eine Zeichnung): Ein beschriftungsfähiges Objekt erscheint auch in einem Ansichtsfenster oder im Modell, dessen Maßstab nicht in seiner Liste steht, in der Größe, die es hat. Aus: Es wird dort nicht angezeigt und kann im Modell nicht gewählt werden. Der Schalter ist ein Rückgängig-Schritt; er wird nicht in der Datei gehalten.

### SCALELISTEDIT

Aliase: `SCALELIST`. `Maßstabsliste [Hinzufügen (A)/Bearbeiten (E)/Löschen (D)/Auflisten (L)/Zurücksetzen (R)]`, bis {{key:Enter}}. Hinzufügen: `Maßstabsname`, `Papiereinheiten`, `Zeicheneinheiten`. Bearbeiten und Löschen fragen nach dem Namen des Maßstabs. Die eigenen Maßstäbe der Zeichnung kommen in die Maßstabslisten der Ansichtsfenster und des Plots und werden mit der Zeichnung gespeichert. Siehe [Einheiten, Papierformate und Maßstäbe](topic:units-papers-scales#scales).

### SPLINE, SPLINEDIT und PEDIT

`SPLINE` (`SPL`): `Ersten Punkt des Splines angeben [Methode/Objekt] (Passpunkte)`. Passpunkte: Punkte, durch die die Kurve läuft; `Schließen`, `Rückgängig`, dann `Startrichtung` und `Endrichtung` (ein Punkt oder {{key:Enter}}). Methode › Kontrollpunkte fragt nach einem Grad (1 bis 5) und zeichnet aus einem Kontrollpolygon. Objekt wandelt Polylinien in Splines durch ihre Scheitelpunkte um. `SPLINEDIT` (`SPE`): `[Passpunktdaten (F)/Scheitelpunkt bearbeiten (E)/in Polylinie umwandeln (C)/Öffnen oder Schließen (O)/Umkehren (R)/Rückgängig (U)/Beenden (X)]`; Passpunktdaten `[Hinzufügen (A)/Löschen (D)/Verschieben (M)/Bereinigen (P)/Tangenten (T)/Beenden (X)]`; Scheitelpunkt bearbeiten `[Kontrollpunkt hinzufügen (A)/Verschieben (M)/Gewicht (W)/Beenden (X)]`. `PEDIT` (`PE`): `[Schließen (C)/Öffnen (O)/Verbinden (J)/Breite (W)/Kurve (F)/Spline (S)/Krümmung entfernen (D)/Linientyp erzeugen (L)/Umkehren (R)/Rückgängig (U)/Beenden (X)]`, `M` für mehrere Objekte; Linien, Bögen und Splines werden zuerst als Polylinien angeboten. Siehe [Splines und Polylinien](topic:splines).

### BLOCK

Aliase: `B`, `BMAKE`.

- `Blocknamen eingeben`. Existiert er: `Block „…“ ist bereits vorhanden. Neu definieren? [Ja (Y)/Nein (N)] <N>`.
- `Einfügebasispunkt angeben`
- `Objekte wählen`. Sie werden durch eine Referenz auf den neuen Block ersetzt.

### WBLOCK

Aliase: `W`, `-WBLOCK`. Schreibt einen Block, einige Objekte oder die ganze Zeichnung als neue DWG- oder DXF-Datei. `Quelle für WBLOCK [Block (B)/Ganze Zeichnung (E)/Objekte (O)] <Objekte>`:

- **Objekte**: `Einfügebasispunkt angeben` (er wird der Ursprung der neuen Zeichnung), `Objekte wählen`, dann `Dateiformat [DWG/DXF/R12 DXF]` und `Dateiname für die neue Zeichnung`, dann `Was mit den Objekten geschehen soll [Behalten (R)/In Block umwandeln (C)/Löschen (D)]`. Umwandeln ersetzt sie durch eine Referenz auf einen Block mit dem Namen der Datei; Löschen entfernt sie.
- **Block**: `Zu schreibender Block`. Die eigenen Objekte des Blocks, mit seinem Basispunkt als Ursprung, verschachtelte Blöcke eingeschlossen.
- **Ganze Zeichnung**: jedes Objekt im Modellbereich. Blätter werden nicht geschrieben; verwenden Sie {{cmd:SAVEAS}} für eine Kopie, die sie behält.

Die neue Datei enthält nur die Layer, Linientypen, Text- und Bemaßungsstile und Blöcke, die ihre Objekte verwenden, sowie die Einheiten der Zeichnung. Die Version einer DWG ist die, die {{cmd:SAVEAS}} zuletzt verwendet hat. Im Browser wird die Datei heruntergeladen; in Studio öffnet sich der Speicherdialog.

### ATTDEF

Aliase: `ATT`, `DDATTDEF`, `-ATTDEF`; oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Attribut definieren}}. Gibt die Modi aus, dann `Option zum Ändern eingeben (Enter wenn fertig) [Unsichtbar (I)/Konstant (C)/Voreinstellung (P)]`, `Namen des Attribut-Tags eingeben`, `Eingabeaufforderung für das Attribut eingeben`, `Standardwert des Attributs eingeben` (`Wert des Attributs eingeben`, wenn konstant), `Startpunkt des Textes angeben`, `Texthöhe angeben`, `Drehwinkel des Textes angeben`. {{cmd:BLOCK}} übernimmt die Attributdefinitionen in den Block.

### EATTEDIT und ATTEDIT

`EATTEDIT` (`DDATTE`, oder doppelklicken Sie auf eine Referenz mit Attributen; {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Attribute bearbeiten}}): `Blockreferenz mit Attributen wählen`, dann das Dialogfeld {{ui:Attribute bearbeiten}}. `ATTEDIT` (`ATE`, `-ATTEDIT`): dieselbe Referenz, dann `<Eingabeaufforderung> (<TAG>) <Wert>` für jedes Attribut; {{key:Enter}} behält einen Wert. Siehe [Attribute](topic:attributes#see-and-change-the-values).

### ATTSYNC

`Attribute welcher Blockreferenzen aktualisieren [Name (N)/Auswahl (S)/Alle (A)] <Auswahl>`. Werte bleiben erhalten; neue Attribute erhalten ihren Standardwert, entfernte gehen, Platzierungen werden zurückgesetzt.

### BATTMAN

{{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Attribut-Manager}}. Das Dialogfeld: Block, Attribute (Tag, Eingabeaufforderung, Standardwert, Modi, Reihenfolge), {{ui:Die Referenzen aktualisieren (Werte behalten)}}, {{ui:Übernehmen}}.

### REFEDIT und REFCLOSE

{{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Direkt bearbeiten}}. `REFEDIT`: `Blockreferenz zum Bearbeiten an Ort und Stelle wählen` (oder die Auswahl). `REFCLOSE`: `Änderungen an „…“ speichern [Speichern (S)/Verwerfen (D)] <Speichern>`; die Leiste {{ui:Den Block speichern}} und {{ui:Verwerfen}} tun dasselbe. Die ganze Bearbeitung ist ein Rückgängig-Schritt. Siehe [Attribute](topic:attributes#edit-a-title-block-where-it-is-refedit).

### PENPRESSURE

`[EIN/AUS]`: ob der Stiftdruck die Linienstärke dessen festlegt, was {{cmd:SKETCHFIX}} und {{cmd:SKETCHLIVE}} erzeugen (anfangs ein). Siehe [Mit dem Stift skizzieren](topic:sketch-with-a-pen#pressure-sets-the-lineweight).

### OFFICESTANDARD

Alias: `OFFSTD`. Sagt, welcher Büro-Standard für diese Zeichnung gilt und woher er kommt: der eigene Datensatz der Zeichnung, der gemeinsame Ihres Teams oder Ihre Default Policies (Texthöhen `all.anno.*`); ohne einen die eigenen Größen des Programms. `[Importieren (I)/Layer (L)/Schriftfeld (T)/Leeren (C)/Beenden (X)]`: `Importieren` liest einen `cc-office-standard`-.json-Datensatz (den SuperCad und BimCraft schreiben) in diese Zeichnung, gespeichert mit ihr in DWG und DXF; `Layer` ergänzt die Büro-Layer, die der Zeichnung fehlen, in einem Rückgängig-Schritt, und entfernt nie einen; `Schriftfeld` listet die Felder des Büros mit den eigenen Werten dieser Zeichnung auf; `Leeren` entfernt den eigenen Datensatz der Zeichnung. Die Höhen beschriftungsfähiger Texte und Bemaßungen folgen dem gültigen Standard. Siehe [Einheiten, Papierformate und Maßstäbe](topic:units-papers-scales).

### BPARAMS

Aliase: `BPM`, `BLOCKPARAMS`. Öffnet den Parameter-Manager für den Block im Blockeditor, den Block der gewählten Referenz oder den Block, den Sie benennen (`Blockname`): Parameter mit Formeln, mehrere Sichtbarkeitsparameter mit ihren Zuständen und die eigenen Werte und Zustände der gewählten Referenz. Siehe [Eigene Parameter und Sichtbarkeitszustände](topic:dynamic-blocks#your-own-parameters-and-visibility-states). `-BPARAMS` tut dasselbe in der Befehlszeile: `[Parameter/Sichtbarkeit/Zustand/Zuweisen/Referenz/Fertig]`.

### BEDIT und BCLOSE

`BE`; oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Block bearbeiten}}. `Name des zu bearbeitenden Blocks eingeben <der Block der gewählten Referenz>` öffnet den Blockeditor. `BCLOSE` fragt `Blockeditor für „…“ schließen [Speichern (S)/Verwerfen (D)] <Speichern>`; die Leiste {{ui:Block speichern}} und {{ui:Änderungen verwerfen}} tun dasselbe. Alles, was im Editor getan wird, ist ein Rückgängig-Schritt.

### VIEWBASE

Alias: `FLATSHOT`. Eine flache 2D-Ansicht der Volumenkörper auf dem 3D-Reiter: `Ansicht [Vorne (F)/Oben (T)/Rechts (R)/Links (L)/Hinten (BA)/Unten (BO)/Iso]`, `Verdeckte Linien [Anzeigen (S)/Ausblenden (H)]`, ein Maßstab (`1:20`, `2:1`; {{key:Enter}} nimmt den, der zum Blatt passt), dann die Mitte der Ansicht. Eine Blockreferenz; sichtbare Kanten auf VIEW-VISIBLE, verdeckte gestrichelt auf VIEW-HIDDEN. Siehe [Flache Ansichten auf einem Blatt](topic:3d-solids#flat-views-on-a-sheet).

### PUBLISH

Aliase: `-PUBLISH`; oder {{ui:Alle Blätter in einer PDF}} im Dialogfeld {{ui:In PDF plotten}}. `Zu plottende Blätter [Alle (A)/Einige (S)]`: {{key:Enter}} plottet jedes Blatt, `S` fragt nach Namen, durch Kommas getrennt. Eine PDF, eine Seite und ein Lesezeichen je Blatt. Siehe [Jedes Blatt in einer PDF](topic:plot-pdf#every-sheet-in-one-pdf).

### SHEETSET

Aliase: `SSM`, `SHEETSETMANAGER`. Bringt Sie zum Abschnitt {{ui:Blattsatz}} des linken Bereichs: Blätter aus vielen Zeichnungen, nummeriert und betitelt, ihre Schriftfelder aus dem Satz gefüllt, als eine PDF veröffentlicht. Siehe [Blattsätze](topic:sheet-sets).

### XATTACH, XREF

{{cmd:XATTACH}} (`XA`): wählen Sie eine DWG oder DXF, dann ihren Einfügepunkt. {{cmd:XREF}} (`XR`, `-XREF`): `Verknüpfte Zeichnungen [?/Anfügen (A)/Neu laden (R)/Binden (B)/Lösen (D)] (Enter: ?)`; mit mehr als einer Verknüpfung wählen Sie eine ihrer Referenzen oder geben `N` und ihren Namen ein. Siehe [Verknüpfte Zeichnungen](topic:files#linked-drawings-external-references).

### COUNT

Aliase: `BCOUNT`; oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Blöcke zählen}}. `Blockreferenz zum Zählen wählen oder [Alle (A)/Exportieren (E)] (Enter: Alle)`: ein Klick wählt und zählt jede Referenz dieses Blocks in diesem Raum; {{key:Enter}} oder `A` listet sie alle auf; `E`, dann `C` (Anzahlen) oder `A` (Attribute) lädt eine CSV herunter. Siehe [Blöcke zählen und eine Liste exportieren](topic:blocks#count-blocks-and-export-a-schedule).

### INSERT

Aliase: `I`, `DDINSERT`.

- `Blocknamen eingeben oder [Datei (F)/Bibliothek (L)] <letzter Block>` (Groß- und Kleinschreibung spielt keine Rolle). `F` fragt nach einer DWG oder DXF, dann der ganzen Zeichnung oder einem ihrer Blöcke; ein schon verwendeter Name fragt {{ui:Vorhandene behalten}} oder {{ui:Umbenennen}}. `L` öffnet den Bereich Bibliothek.
- `Einfügepunkt angeben [Skalieren (S)/Drehen (R)]`. `S` fragt `Skalierungsfaktor angeben`, `R` fragt `Drehwinkel angeben`; beides wird gemerkt.
- Steht der Block schon neben Objekten, die sich andernorts ohne ihn wiederholen, sagt eine Zeile, wie viele Stellen vorgeschlagen werden, und die Eingabeaufforderung bekommt `Vorschläge` (`G`): `G` zeigt sie; klicken Sie nahe einer, um den Block dorthin zu setzen, `A` für alle, {{key:Enter}}, um zurückzugehen. Sie übernehmen die Drehung ihrer Nachbarn und die Standardwerte der Attribute. Zeichnungen mit mehr als 20.000 Objekten im offenen Raum werden nicht durchsucht.
- Dann `<Eingabeaufforderung> (<TAG>) <Standard>` für jedes Attribut, das der Block verlangt. Siehe [Blockattribute](topic:attributes).

### LIBRARY

Aliase: `LIB`. Öffnet den Bereich Bibliothek: Elemente platzieren, auf Updates prüfen, Bibliothekshinweise. Keine Fragen. Siehe [Aus einer Datei oder der Bibliothek einfügen](topic:insert-from-file-and-library).

### STEELMEMBER

Aliase: `SMEMBER`; oder {{ui:3D-Stab}} auf dem Reiter {{ui:Standard}} der Bibliothek. `Profilgröße <W12x26>` (wie der Reiter sie auflistet), dann `Startpunkt [Stütze (C)]` und `Endpunkt`: ein Vollstab auf dem 3D-Reiter zwischen den beiden Punkten, auf dem Boden stehend. `C` fragt nach dem Fußpunkt der Stütze und ihrer Höhe. Ein Rückgängig-Schritt. Siehe [Stahlprofile und Normteile platzieren](topic:steel-and-standard-parts).

### PARTSLIST

Aliase: `PLIST`. `Obere linke Ecke der Teileliste`, dann `Texthöhe <2.5>`: zeichnet eine Tabelle jedes Normteils und Stahlprofils, das aus der Bibliothek platziert wurde (Elementnummern, Menge, Teil, Norm, Größe, Länge, Werkstoff, Masse). Ein Rückgängig-Schritt. Siehe [Stahlprofile und Normteile platzieren](topic:steel-and-standard-parts#make-a-parts-list).

### PURGE

Aliase: `PU`. Entfernt Blockdefinitionen, die nichts verwendet. Keine Fragen.

### DELBLOCKS

Oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Blöcke löschen}}. `Zu löschenden Block wählen [Name (N)/Beenden (X)]`: wählen Sie eine Blockreferenz, oder `N` für die Liste der Blöcke mit einem Filter (wählen Sie mehrere), oder `X` / {{key:Enter}}, um zu beenden. Jede Referenz verschwindet – im Modell, auf jedem Blatt und in anderen Blöcken – und dann die Definition, und die Befehlszeile sagt, was gelöscht wurde und was nicht. Namenlose Blöcke und verknüpfte Zeichnungen werden nicht angeboten. Die Eingabeaufforderung kommt für den nächsten Block zurück; der ganze Befehl ist ein Rückgängig-Schritt.

### PASTEBLOCK

{{cmd:PASTEBLOCK}} fügt das ein, was Sie kopiert haben ({{cmd:COPYCLIP}}, {{cmd:COPYBASE}}), als einen Block: Wählen Sie den Einfügepunkt, und eine Referenz auf einen neuen Block kommt dorthin, gewählt. Der Block erhält einen eigenen Namen (`A$C` und eine Zahl); {{cmd:RENAME}} gibt ihm Ihren. Ein Rückgängig-Schritt entfernt die Referenz und den Block.

### BLOCKREPLACE

{{cmd:BLOCKREPLACE}} fragt nach dem Block, der ersetzt werden soll, und dem Block, der an seine Stelle kommt (`?` listet die Blöcke), dann ändert es jede Referenz im Modell, auf jedem Blatt und in anderen Blöcken. Jede Referenz behält ihren Ort, ihre Skalierung, Drehung, ihren Layer und die Werte der Attribute, die beide Blöcke haben; Attribute, die nur der neue Block hat, beginnen mit ihren Standardwerten, und es sagt Ihnen, welche Werte verworfen wurden. Wenn nichts den alten Block mehr verwendet, bietet es an, ihn zu entfernen. Es lehnt verknüpfte Zeichnungen ab und einen Ersatz, der einen Block in sich selbst setzen würde. Ein Rückgängig-Schritt.

### MINSERT

{{cmd:MINSERT}} setzt einen Block in Zeilen und Spalten: Blocknamen, Einfügepunkt, Skalierung, Drehung, Anzahl der Zeilen und Spalten und die Abstände dazwischen. Die ganze Menge dreht sich mit der Drehung. Jedes ist eine eigene Referenz (höchstens 10.000), sodass jede davon danach verschoben oder gelöscht werden kann.

### BLOCKSPALETTE

Aliase: `BLOCKSPAL`; oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Bereich Blöcke}}. Zeigt den Bereich {{ui:Blöcke}} mit dem Cursor in seinem Filter. Jeder Block hat ein kleines Bild; die zuletzt platzierten kommen zuerst. Die beiden Schaltflächen neben dem Filter wechseln zwischen einer Liste und einem Raster von Bildern. Klicken Sie ein Bild an (oder {{ui:Einfügen}}), um den Block mit {{cmd:INSERT}} zu platzieren, oder ziehen Sie ihn in die Zeichnung, um ihn dort abzulegen, wo Sie loslassen.

{{ui:Bibliotheken}}, unter der Liste: {{ui:Zeichnung hinzufügen}} nimmt eine eigene DWG- oder DXF-Datei und listet ihre Blöcke mit Bildern auf, und die ganze Zeichnung als einen Block. Beim Platzieren eines Blocks wird seine Definition (und die Blöcke, die er verschachtelt, und deren Layer) in diese Zeichnung kopiert, wie es die Option `Datei` von {{cmd:INSERT}} tut; ein Block, der schon hier ist, mit derselben Definition, wird ohne Frage verwendet, einer mit demselben Namen, aber anderer Definition, fragt {{ui:Vorhandene behalten}} oder {{ui:Umbenennen}}. In einem Browser bleibt die Datei, bis die Seite geschlossen wird. In CadCraft Studio listet {{ui:Ordner hinzufügen}} die Zeichnungen in einem Ordner, jede wird geöffnet, wenn Sie darauf klicken, und Dateien und Ordner werden gemerkt. Das kleine x entfernt eine Bibliothek aus der Liste; die Datei bleibt unberührt. Die gemeinsame {{ui:Bibliothek}} ist etwas anderes: Siehe [Aus einer Datei oder der Bibliothek einfügen](topic:insert-from-file-and-library).

### BCONVERT

Oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Wiederholungen in Blöcke umwandeln}}. Findet Geometrie, die sich wiederholt, und macht aus jeder Kopie eine Referenz auf einen Block.

- `Objekte wählen, die sich wiederholen, oder [Block (B)]`: die Objekte einer Kopie. `B` benennt stattdessen einen vorhandenen Block, um lose Kopien seiner Objekte zu finden.
- `Eine Kopie darf sein: gespiegelt = Nein, skaliert = Nein; Layer, Farbe, Linientyp und Linienstärke = Übereinstimmen … [Gespiegelt (M)/Skaliert (S)/Eigenschaften (P)]`: `M`, `S` und `P` wechseln, was als Kopie zählt; {{key:Enter}} sucht. Die Einstellungen werden gemerkt.
- `Name für den neuen Block <Block1>`, dann `Basispunkt des Blocks angeben` ({{key:Enter}} nimmt die untere linke Ecke der Auswahl).
- Er sagt, wie viele andere Objektgruppen dieselbe Geometrie haben, hebt alles hervor, was er ersetzen würde, und fragt `Ja/Nein`.

Eine Kopie sind dieselben Objekte, verschoben und um einen beliebigen Winkel gedreht (und gespiegelt oder mit einem Faktor skaliert, wenn diese Optionen an sind): Jedes Objekt muss sein Gegenstück haben, innerhalb eines millionstel Teils der Größe der Auswahl. Jede Referenz erhält ihre eigene Drehung und Skalierung (eine gespiegelte eine negative Y-Skalierung) und den Layer, den ihre Objekte gemeinsam hatten. Objekte auf gesperrten Layern bleiben in Ruhe und werden gezählt. Es durchsucht den offenen Raum (das Modell oder das offene Blatt). Eine sehr große Suche hält bei einer Arbeitsgrenze an und sagt es. Ein Rückgängig-Schritt.

### BSEARCH

Oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Blöcke suchen}}. `Blöcke suchen nach [Name (N)/Attribut (A)/Geometrie (G)] <Name>`:

- `N`: ein Teil eines Blocknamens oder ein Muster mit `*` und `?`. Listet jeden Block mit seinen Referenzen hier und in der ganzen Zeichnung auf.
- `A`: ein Attributwert oder `TAG=Wert`. Listet die Blöcke, deren Referenzen ihn halten, mit den gefundenen Werten. Konstante Attribute zählen mit.
- `G`: Objekte oder eine Blockreferenz wählen, und die Blöcke, deren Form mindestens zu 85 % gleich ist, werden nach Güte aufgelistet. Größe, Drehung und Spiegelung zählen nicht. Die Messung vergleicht die Abstände zwischen Punkten, die über die Umrisse verteilt sind, daher findet sie Ähnliches; verwenden Sie {{cmd:BCONVERT}}, um genaue Kopien zu finden.

Die im offenen Raum gefundenen Referenzen werden gewählt und sind für den nächsten Befehl bereit.

### BREPLACE

Oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Blöcke ersetzen}}. `Ersetzen [Gewählt (S)/Alle (A)]`: `S` ersetzt die Blockreferenzen, die Sie wählen, durch den Block, den Sie benennen; `A` fragt nach einem Block und seinem Ersatz und ändert jede Referenz, wie {{cmd:BLOCKREPLACE}} es tut (derselbe Code). Eine Referenz behält ihren Ort, ihre Skalierung, Drehung, ihren Layer und die Werte der Attribute, die beide Blöcke haben; Werte, für die der neue Block keinen Platz hat, werden verworfen und genannt. `?` listet die Blöcke. Ein Rückgängig-Schritt.

### DATAEXTRACTION

Aliase: `EATTEXT`, `DX`; oder {{ui:Blöcke}} › {{ui:Mehr}} › {{ui:Datenextraktion}}. Listet Blöcke, ihre Attribute und Objekteigenschaften als Tabelle oder CSV-Datei auf.

- Arbeitet auf der Auswahl oder fragt `Objekte wählen (Enter: alles in diesem Raum)`.
- `Liste: [Blöcke (B)/Objekte (O)/Alle (A)]`, wenn die Auswahl beides enthält. Namenlose Blöcke, Tabellen und Stücklisten werden nie aufgelistet.
- Er gibt die Spalten aus, die Sie wählen können (Name, Typ, Layer, X, Y, Drehung, Skalierung, Länge, Fläche, Farbe, Linientyp, Raum und eine je Attribut-Tag), dann `Spalten nach Name oder Nummer, durch Kommas getrennt`. {{key:Enter}} nimmt die mit Stern markierten: den Namen und jedes Attribut bei Blöcken; Typ, Layer und Länge bei Objekten.
- `Gleiche Zeilen mit einer Anzahl zusammenfassen? [Ja (Y)/Nein (N)] <Ja>`, dann `Liste in einer: [Tabelle (T)/Csv (C)] <Tabelle>`. Eine Tabelle ist eine gewöhnliche Tabelle ({{cmd:TABLEDIT}} bearbeitet sie) und nicht live: Führen Sie den Befehl erneut aus, wenn sich die Zeichnung ändert.
- Er lehnt eine Spalte ab, die nicht in der Liste steht. Eine Tabelle fasst 1.999 Datenzeilen; eine CSV-Datei nimmt alle auf.

### COUNTTABLE

Zählt die Blockreferenzen der Auswahl (oder des offenen Raums) und setzt die Zahlen in eine Tabelle (`Block`, `Anzahl`) oder eine CSV-Datei. Für eine Anzahl, die der Zeichnung von selbst folgt, siehe {{cmd:BOMTABLE}}.

## Blätter und Plots

### LAYOUT

Aliase: `LO`, `NEWLAYOUT`; oder die Schaltfläche {{ui:+}} unter der Zeichnung. Ein neues Blatt mit Rand, Schriftfeld und einem Ansichtsfenster auf ISO A3 (oder Tabloid für Zeichnungen in Zoll oder Fuß). Keine Fragen.

### MVIEW

Aliase: `MV`. Nur auf einem Blatt ({{cmd:VPORTS}} auf einem Blatt tut dasselbe).

- `Ecke des Ansichtsfensters angeben [Polygonal (P)/Objekt (O)]`, `Gegenüberliegende Ecke angeben`. Das Ansichtsfenster zeigt das ganze Modell in einem Standardmaßstab.
- `P` (Polygonal): klicken Sie die Ecken der Umrandung (`Rückgängig`, `Schließen`), {{key:Enter}}, wenn Sie fertig sind. Er lehnt weniger als drei Ecken ab.
- `O` (Objekt): `Geschlossenes Objekt für die Umrandung des Ansichtsfensters wählen`: eine geschlossene Polylinie, ein Kreis oder eine Ellipse auf dem Blatt. Das Ansichtsfenster übernimmt ihre Form (Kurven als kurze gerade Stücke); das Objekt bleibt, wie es war. Er lehnt ein Objekt ab, das nicht geschlossen ist.

### VPCLIP

Schneidet ein Ansichtsfenster zu, das schon auf dem Blatt ist. `Ansichtsfenster zum Zuschneiden wählen` (oder zuerst wählen), dann `Objekt wählen, auf das zugeschnitten wird [Polygonal (P)/Löschen (D)]`:

- Klicken Sie eine geschlossene Polylinie, einen Kreis oder eine Ellipse an, oder {{key:Enter}} (oder `P`), um die Ecken eines Polygons anzuklicken.
- `D` (Löschen, angeboten, wenn das Ansichtsfenster zugeschnitten ist) macht es wieder zu einem Rechteck: dem Kasten um die Umrandung, die es hatte.
- Was das Ansichtsfenster zeigt, bewegt sich auf dem Papier nicht, und sein Maßstab bleibt. Das Modell wird nur innerhalb der Umrandung gezeichnet und geplottet, und der Rand folgt ihr. Ein Rückgängig-Schritt.
- Ein zugeschnittenes Ansichtsfenster hat einen Griff an jeder Ecke seiner Umrandung, neben seinem Mittelpunkt und den vier Ecken seines Kastens (das Ziehen einer Kastenecke streckt die Umrandung mit). Die {{ui:Eigenschaften}} zeigen Umriss: Rechteck oder Zugeschnitten mit der Anzahl der Ecken.
- DWG- und DXF-2000-Dateien behalten die Umrandung für CadCraft. Andere Programme öffnen das Ansichtsfenster als das Rechteck darum; DXF R12 behält nur das Rechteck.
- Auf dem Modellreiter sagt er, dass Ansichtsfenster auf Blättern sind.

### VPORTS

Aliase: `VIEWPORTS`. {{cmd:SPLIT}} ist dasselbe auch von einem Blatt aus, und {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Nebeneinander teilen}}, {{ui:Übereinander teilen}}, {{ui:Vier Teilfenster}}, {{ui:Ein Teilfenster}} führen es aus. Auf dem Modell: `Anzahl der Teilfenster eingeben [Einzeln (I)/2/3/4] <3>`; `2` fragt `[Waagerecht (H)/Senkrecht (V)] <Senkrecht>` (Senkrecht = nebeneinander), `3` fragt `[Links (L)/Rechts (R)] <Rechts>` (wo das große Teilfenster liegt). Jedes Teilfenster behält seine eigene Ansicht und seinen Raum; ein Klick macht ein Teilfenster aktiv. Auf einem Blatt ist es {{cmd:MVIEW}}. Siehe [Den Bildschirm teilen](topic:split-screen).

### VPVIEW

Keine Aliase. Nur auf einem Blatt.

- `Ansichtsfenster wählen` (entfällt, wenn eines gewählt ist), dann auf dem Modell: `Ersten Eckpunkt des anzuzeigenden Fensters angeben`, `Gegenüberliegenden Eckpunkt angeben`.

### UCS

Keine Aliase. Ein eigenes Koordinatensystem; keine Bearbeitung. `Ursprung des BKS angeben [Benannt (NA)/Objekt (OB)/Vorherige (P)/Welt (W)/Z/3Punkt (3)] <Welt>`: ein Punkt ist ein neuer Ursprung, dann `Punkt auf der X-Achse angeben (Enter behält den Winkel)`. `Z`: `Drehwinkel um die Z-Achse angeben <90>`. `3`: Ursprung, ein Punkt auf der positiven X-Achse, ein Punkt auf der positiven Y-Seite. `OB`: `Objekt zum Ausrichten des BKS wählen`. `NA`: `[Wiederherstellen/Speichern/Löschen/?]` und ein Name. Die Ansicht dreht sich, sodass die neue X-Achse waagrecht liegt. Siehe [Die Ansicht drehen und eigene Koordinaten verwenden](topic:ucs-and-turned-view).

### PLAN

Keine Aliase. `Option eingeben [Aktuelles BKS/BKS/Welt] <Aktuelles BKS>`: dreht die Ansicht des aktiven Teilfensters, sodass die X-Achse dieses BKS (oder die der Welt) waagrecht liegt. In der Zeichnung bewegt sich nichts.

### TURNLEFT, TURNRIGHT, TURNWORLD

Keine Aliase; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Ansicht um 90° nach links drehen}}, {{ui:Ansicht um 90° nach rechts drehen}}, {{ui:Zurück zur Welt}}. Dasselbe wie `UCS Z -90`, `UCS Z 90` und `UCS W`, wobei die Ansicht folgt.

### VPLAYER

Keine Aliase. Auf einem Blatt oder innerhalb eines Ansichtsfensters. `Option eingeben [?/Einfrieren (F)/Auftauen (T)/Zurücksetzen (R)/Vpvisdflt]`: `F`, `T`, `R` fragen nach Layernamen (durch Kommas, mit den Platzhaltern `*` und `?`), dann `[Alle (A)/Wählen (S)/Aktuell (C)] <Aktuell>` Ansichtsfenster; Zurücksetzen setzt jeden Layer auf seinen Standardwert „in neuen Ansichtsfenstern eingefroren“ zurück; `V` setzt diesen Standard (`[Eingefroren/Aufgetaut]`), den {{cmd:MVIEW}} verwendet. `?` listet die Layer auf, die im aktuellen Ansichtsfenster eingefroren sind. Die Ansichtsfenster-Spalte des Bereichs {{ui:Layer}} tut dasselbe für ein Ansichtsfenster. Siehe [Einen Layer in einem Ansichtsfenster einfrieren](topic:sheets-and-viewports#freeze-a-layer-in-one-viewport).

### MSPACE

Aliase: `MS`; oder doppelklicken Sie innerhalb eines Ansichtsfensters. Nur auf einem Blatt. Am Modell durch ein Ansichtsfenster arbeiten: das gewählte, das einzige auf dem Blatt oder `Im Ansichtsfenster klicken, in dem gearbeitet werden soll`. Schwenken und Zoomen darin ändern die Ansicht des Ansichtsfensters (ein in der Anzeige fixiertes behält sie, und stattdessen bewegt sich das Blatt); die neue Ansicht wird als ein Rückgängig-Schritt geschrieben. Siehe [Am Modell durch ein Ansichtsfenster arbeiten](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### PSPACE

Aliase: `PS`; oder doppelklicken Sie außerhalb des Ansichtsfensters, oder klicken Sie einen Reiter unter der Zeichnung. Zurück zum Blatt.

### PLOT

Aliase: `PRINT`, `PUBLISH`, `EXPORTPDF`; oder {{key:Mod+P}}. Öffnet das Dialogfeld {{ui:In PDF plotten}}. Siehe [Als PDF plotten](topic:plot-pdf).

### PLOTSTYLES

Aliase: `STYLESMANAGER`, `PSTABLES`; oder {{ui:Tabellen bearbeiten…}} im Dialogfeld {{ui:In PDF plotten}}. Öffnet {{ui:Plotstiltabellen}}: was jede Farbe druckt (Farbe, Grau, Tinte, Linienstärke), mit der Zeichnung gespeichert. Siehe [Plotstiltabellen](topic:plot-pdf#plot-style-tables).

### CHSPACE

{{cmd:CHSPACE}} verschiebt Objekte zwischen einem Blatt und dem Modell über ein Ansichtsfenster, skaliert und gedreht, sodass sie von der anderen Seite gleich aussehen. Auf einem Blatt wählen Sie Objekte, und sie gehen ins Modell (wählen Sie das Ansichtsfenster, wenn das Blatt mehrere hat). Während Sie am Modell durch ein Ansichtsfenster arbeiten ({{cmd:MSPACE}}), kommen die gewählten Objekte auf das Blatt. Es sagt, wie viel größer oder kleiner sie geworden sind. Ansichtsfenster bleiben auf ihrem Blatt. Ein Rückgängig-Schritt.

### ISODRAFT

{{cmd:ISODRAFT}} schaltet isometrisches Zeichnen `EIN` oder `AUS`, oder geht direkt auf die Ebene `Links`, `Oben` oder `Rechts`. Ist es eingeschaltet: Ortho ({{key:F8}}) hält Linien auf den zwei Achsen der Ebene (links: 90° und 150°; oben: 30° und 150°; rechts: 30° und 90°), die Polare Spur ({{key:F10}}) folgt denselben Achsen, Einrasten am Raster ({{key:F9}}) verwendet das isometrische Raster, und das Raster ({{key:F7}}) wird mit Linien bei 30°, 90° und 150° gezeichnet. {{cmd:ELLIPSE}} gewinnt `Isokreis`: geben Sie einen Mittelpunkt und einen Radius (oder `Durchmesser`) ein, und sie zeichnet die Ellipse, die ein Kreis auf der aktuellen Ebene zeigt. Die Zeichnung bleibt flach: Dies sind Hilfen zum Zeichnen einer räumlichen Ansicht, kein 3D-Modell. Die Einstellung gilt für diese Sitzung und wird nicht in der Datei gespeichert.

### ISOPLANE

{{cmd:ISOPLANE}} wählt die Ebene, auf der isometrisches Zeichnen arbeitet: `Links`, `Oben` oder `Rechts`. Enter geht zur nächsten Ebene. Solange isometrisches Zeichnen eingeschaltet ist, tut {{key:F5}} dasselbe mitten in einem Befehl; ist es ausgeschaltet, bleibt {{key:F5}} dem Browser überlassen.

## Abfragen

### CAL

Gibt den Wert einer Berechnung aus, so wie sie überall gelesen wird, wo eine Länge eingegeben wird.

- `Ausdruck`: geben Sie ihn ein, zum Beispiel `12'6"+3/4"` oder `(24'-0")/3`, und drücken Sie {{key:Enter}}. CadCraft gibt `= 12'-6 3/4"   (150.75 Zeicheneinheiten)` aus. Siehe [Rechnen in einem eingegebenen Wert](topic:coordinate-entry#arithmetic-in-a-typed-value).

### DIST

Aliase: `DI`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Distanz messen}}.

- `Ersten Punkt angeben`, `Zweiten Punkt angeben`. Gibt Abstand, Winkel, Delta X und Delta Y aus.

### AREA

Aliase: `AA`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Fläche}}. Gibt Fläche und Umfang aus.

- `Ersten Eckpunkt angeben [Objekt (O)/Fläche addieren (A)/Fläche subtrahieren (S)] <Objekt>`
  - Klicken oder geben Sie Ecken ein; bei `Nächsten Punkt angeben (Enter schließt) [Rückgängig (U)]` drücken Sie {{key:Enter}}, um die Umrandung zu schließen. `U` nimmt die letzte Ecke zurück.
  - {{key:Enter}} oder `O`, dann `Objekt wählen`: ein Kreis (gibt seinen Umfang aus), eine Ellipse, eine Polylinie (eine offene wird für die Fläche durch eine gerade Linie geschlossen, und ihre Länge wird ausgegeben) oder eine Schraffur (Löcher werden abgezogen).
  - `A` (Fläche addieren) und `S` (Fläche subtrahieren) führen eine laufende Summe: Die Eingabeaufforderung beginnt mit `(ADD-Modus)` oder `(SUBTRAHIEREN-Modus)`, jede Fläche wird addiert oder abgezogen, und `Gesamtfläche = …` wird nach jeder ausgegeben. In diesen Modi wählt `O` Objekte, bis {{key:Enter}}, und {{key:Enter}} bei der ersten Eingabeaufforderung beendet den Befehl.

### MEASUREGEOM

Aliase: `MEA`. `Option eingeben [Abstand (D)/Radius (R)/Winkel (A)/Fläche (AR)] <Abstand>`; nach jeder Messung fragt er erneut, wobei `Beenden` die Voreinstellung ist.

`Schnell` misst um den Zeiger, während Sie ihn bewegen: den Abstand zum nächsten Objekt rechts, oben, links und unten (entlang der Achsen des aktuellen BKS), beim Ziehen gezeichnet, und den Winkel, wo sich zwei dieser Nachbarn gerade treffen. Ein Klick schreibt die vier Abstände, die lichte Breite und Höhe und die Winkel in den Verlauf; Enter geht zurück zu den Optionen. Er liest, was auf dem Bildschirm ist.

- `D`: zwei Punkte, wie {{cmd:DIST}}.
- `R`: `Bogen oder Kreis wählen`; gibt Radius und Durchmesser aus.
- `A`: ein Bogen (sein eingeschlossener Winkel), eine Linie und dann eine zweite Linie (der Winkel zwischen ihnen, zu ihren fernen Enden hin), oder {{key:Enter}} und drei Punkte (Scheitelpunkt, dann die beiden Enden).
- `AR`: wie {{cmd:AREA}}, eine Fläche.

### ID

Keine Aliase. `Punkt angeben`; gibt seine X- und Y-Werte aus.

### LIST

Aliase: `LI`, `LS`. `Objekte wählen`; gibt den Typ, den Layer und die wichtigsten Maße jedes Objekts aus.

### MASSPROP

{{cmd:MASSPROP}} gibt die Querschnittseigenschaften der Regionen und geschlossenen Objekte an, die Sie wählen, zusammen genommen: Fläche, Umfang, Begrenzungsrahmen, Schwerpunkt, Flächenmomente um die X- und Y-Achsen durch den Ursprung, das Deviationsmoment, die Trägheitsradien, dieselben Momente um den Schwerpunkt und die Hauptmomente mit den Richtungen ihrer Achsen. Löcher in einer Region zählen als Löcher. Die Werte sind in Zeicheneinheiten und für Umrisse aus Linien und Bögen exakt; Ellipsen und Splines werden als kurze gerade Stücke gemessen, und es sagt das. Nach dem Bericht fragt es, ob er in eine Textdatei geschrieben werden soll. Objekte, die nicht geschlossen sind, werden ausgelassen, und es sagt, wie viele.

## Ansicht, Datei und Sonstiges

### ZOOM

Aliase: `Z`.

- `Ecke des Fensters angeben, Skalierungsfaktor eingeben (nX) [Grenzen (E)/Alle (A)/Fenster (W)/Vorherige (P)/Skalieren (S)/Zentrum (C)]`. Klicken Sie zwei Ecken für ein Fenster. `E`, `A` oder Enter: die ganze Zeichnung.
- `P` (Vorherige, oder {{ui:Vorherige (P)}} in der Symbolleiste) geht zur Ansicht davor zurück, bis zu 10 Ansichten je Tab; eine Reihe von Mausradschritten oder ein Schwenk zählt als eine Ansicht.
- Eine Zahl wie `2`, `2x` oder `0.5x` (oder `S` und dann die Zahl) zoomt hinein oder heraus um diesen Faktor um die Mitte des Bildschirms.
- `C` fragt `Mittelpunkt angeben` und `Höhe oder Vergrößerung eingeben (nX)`.

### PDFATTACH, PDFIMPORT und die PDF-Befehle

Aliase: `PDFATT` für {{cmd:PDFATTACH}}, `PDFIM` für {{cmd:PDFIMPORT}}. {{cmd:PDFATTACH}} legt eine PDF-Seite als Unterlage unter die Zeichnung (Datei, Seite, Einfügepunkt, Maßstab, Drehung); {{cmd:PDFIMPORT}} macht Linien, Kurven, Flächen und Text einer Seite zu Zeichnungsobjekten auf Layern, die nach der PDF benannt sind, in wahrer Größe, einem eingegebenen Maßstab oder skaliert aus zwei Punkten und einem wahren Abstand. {{cmd:PDFCLIP}} schneidet eine Unterlage zu, {{cmd:PDFADJUST}} stellt Verblassen, Kontrast, Einfarbigkeit ein oder schaltet sie aus, {{cmd:PDFLAYERS}} schaltet die eigenen Layer der PDF ein oder aus, und {{cmd:PDF}} gibt CadCraft die Dateien, die die Unterlagen einer Zeichnung verwenden, erneut. Siehe [PDF-Unterlagen](topic:pdf-underlay).

### AUTOCOMPLETE

Alias: `AUTOC`. Zeichen-Autovervollständigung: Ohne laufenden Befehl zeigt ein grauer Geist, was die eigenen Muster Ihrer Zeichnung als Nächstes vorsehen. {{cmd:AUTOCOMPLETE}} schaltet ihn `On` oder `Off` (auch {{ui:Einstellungen}} › {{ui:CadCraft}}) oder `Show` zeigt, was er jetzt vorschlagen würde. **Tab** zeichnet den Geist als einen Rückgängig-Schritt, **Esc** verwirft ihn, bis sich die Zeichnung ändert. Er findet drei Dinge in den neuesten Objekten: die nächste Kopie von etwas, das zweimal oder öfter in einem gleichen Schritt gezeichnet wurde (Ständer, Stützen, Setzstufe und Auftritt einer Treppe), die nächsten Schritte einer Polylinientreppe und die fehlende Seite eines Raums oder einer Wandkette. Mitten in {{cmd:LINE}} oder {{cmd:PLINE}} ist der Geist der **nächste Punkt**: der nächste Schritt einer Treppe (Setzstufe, Auftritt, Setzstufe …), die vierte Ecke eines Rechtecks, der Punkt, der es schließt, oder ein weiterer gleicher Schritt. Bringen Sie den Cursor nahe daran und drücken Sie **Tab**, als hätten Sie dort geklickt; machen Sie weiter oder drücken Sie Enter. Berechnet auf diesem Computer nach Regeln, ohne Modell.

### AUTOSHEET

Alias: `ASH`. Blätter, die sich selbst anordnen. {{cmd:AUTOSHEET}} nimmt die Teile der Zeichnung (Ihre benannten Ansichten, oder die einzelnen Teile des Modells, oder das ganze Modell), wählt ein Papierformat (oder das, das Sie angeben), gibt jedem Teil einen Standardmaßstab (einen für alle oder den größten, den jedes verträgt) und setzt die Ansichten in Zeilen auf neue Blätter mit einem Schriftfeld und einer Beschriftung (Name und Maßstab) darunter. Was nicht auf ein Blatt passt, bekommt ein eigenes Blatt. Ein Rückgängig-Schritt. Berechnet auf diesem Computer nach Regeln, ohne Modell.

### PHOTOSKETCH

Alias: `PSK`. Foto einer Skizze wird zur Zeichnung. Wählen Sie ein Foto (JPEG, PNG oder TIFF) einer Handskizze auf einem Blatt Papier. {{cmd:PHOTOSKETCH}} findet die vier Ecken des Blatts, begradigt die Perspektive, übernimmt das Papierformat, das Sie nennen (`Papier`, oder das nächste Standardformat), und den `Maßstab` der Skizze (1 : n), und zeichnet dann die Stiftlinien in Linien, Bögen und Kreise nach, mit einem Layer für jede Stiftfarbe (schwarz, rot, blau, grün). Findet es den Rand des Papiers nicht, nimmt es das ganze Foto als Blatt und sagt es. Beschriftung wird ausgelassen. Ein Rückgängig-Schritt. Auf diesem Computer mit klassischer Bildverarbeitung berechnet, ohne Modell, und nichts wird irgendwohin gesendet. Siehe auch die Befehle für gescannte Zeichnungen.

### AUTODIM

Alias: `ADIM`. Automatische Bemaßung nach Regeln. {{cmd:AUTODIM}} bemaßt die gewählten Objekte (oder die ganze Zeichnung) nach ihren waagrechten und senkrechten Kanten: eine Kette von Bemaßungen entlang der Seiten, die Sie wählen (`Seiten`), ein Gesamtmaß außerhalb davon, die Breite jeder Öffnung (ein Abstand zwischen fluchtenden Wandlinien), ein Durchmesser für jede Lochgröße und mit `Grid` der Abstand zwischen den Rasterlinien. Eine Bemaßung, die schon da ist, wird nicht noch einmal erstellt. Ein Rückgängig-Schritt. Berechnet auf diesem Computer nach Regeln, ohne Modell.

### GRIDMOVE

Alias: `GM`. Das Verschieben einer Rasterlinie nimmt die Gruppe mit. {{cmd:GRIDMOVE}} verschiebt eine Rasterlinie (eine Linie auf einem Layer, dessen Name Raster oder Achse enthält) und was an ihr hängt: Wände mit einem Ende auf der Linie dehnen sich, um ihr zu folgen; Wände entlang ihr bewegen sich ganz; Stützen (Blockreferenzen und Kreise auf der Linie), ihre Blase und ihre Kennzeichnung bewegen sich; und Bemaßungen, deren Punkte auf ihr liegen, messen den neuen Abstand. Geben Sie zwei Punkte (nur der Teil quer zur Linie zählt) oder `Abstand` ein. Ein Rückgängig-Schritt nimmt alles zurück. Nach Regeln auf diesem Computer berechnet.

### DETAILS

Alias: `DET`. Details, die Sie finden. {{cmd:DETAILS}} führt die eigenen Details Ihrer Firma: `Hinzufügen` setzt einen Block dieser Zeichnung in die Liste, `Auflisten` und `Entfernen` verwalten sie, `Finden` ordnet sie für das, was gewählt ist (oder das, was Sie zuletzt gezeichnet haben), nach den Wörtern auf seinen Layern, Blocknamen, Schraffurmustern und Notizen im Vergleich mit dem Namen und den Notizen jedes Details. So findet ein Fenstersturz Ihre Fensterbank-Abdichtung. Wählen Sie eine Nummer und einen Punkt, um es zu platzieren. Mit eingeschaltetem `Hinweis` (auch {{ui:Einstellungen}} › {{ui:CadCraft}}) gibt die Auswahl eines Dings, zu dem ein Detail passt, eine Zeile in der Statusleiste aus. Die Liste wird in diesem Browser auf diesem Computer gehalten, und diese Liste wird durchsucht. `Teilen` legt sie auch in Ihrem Dokumente-Ordner ab (`.cadcraft/firm-details.json`, mit der Zeichnung jedes Blocks): `Holen` fügt hinzu, was Ihr Team hat und Sie nicht; `Senden` fügt hinzu, was Sie haben und sie nicht; `Beides` tut beides, und von keiner Seite wird etwas entfernt. Öffnen Sie zuerst den Dokumente-Ordner ({{cmd:DOCUMENTS}}); ist dieser Ordner ein Team-Cloud-Plan-Ordner, nutzt das ganze Team eine Liste. Ein Detail-Element im Bereich {{ui:Bibliothek}} hat eine Schaltfläche **Zu meinen Firmendetails hinzufügen**, die es in dieselbe Liste legt. Nach Regeln über Wörter auf diesem Computer berechnet, ohne Modell.

### SKETCHFIX

Alias: `SKF`. Stiftskizzen werden zu präziser Geometrie. Drücken und ziehen Sie jeweils einen Freihandstrich (Stift, Maus oder Finger), dann Enter. Jeder Strich wird als Linie, Kreis, Bogen, Rechteck oder Polylinie gelesen: fast waagrechte und senkrechte Linien werden genau waagrecht und senkrecht gemacht, ein geschlossener runder Strich wird zu einem Kreis, ein geschlossener Strich mit vier rechtwinkligen Ecken zu einem Rechteck, und die Enden der Striche werden zusammengezogen und an die Enden gezogen, die schon in der Zeichnung sind. Ein Rückgängig-Schritt. Nach Regeln auf diesem Computer berechnet, ohne Modell.

### SCANATTACH und die Befehle für gescannte Zeichnungen

Aliase: `SCA` {{cmd:SCANATTACH}}, `SCS` {{cmd:SCANSCALE}}, `SCL` {{cmd:SCANALIGN}}, `SCD` {{cmd:SCANDESKEW}}, `SCC` {{cmd:SCANCLEAN}}, `SCR` {{cmd:SCANCROP}}, `SCE` {{cmd:SCANERASE}}, `SCT` {{cmd:SCANTRACE}}, `SCI` {{cmd:SCANINFO}}; {{cmd:RASTERSNAP}} hat keinen. Sie arbeiten an einem Bild, je ein Rückgängig-Schritt. {{cmd:SCANATTACH}} fügt eine PNG, JPEG, TIFF (eine Seite oder alle) oder eine PDF-Seite ein, die ein Bild ist. {{cmd:SCANSCALE}} skaliert das Blatt aus zwei gewählten Punkten und dem wahren Abstand. {{cmd:SCANALIGN}} verschiebt und dreht es auf zwei Punkte (`Blatt auf die Breite skalieren` Ja/Nein). {{cmd:SCANDESKEW}} zeigt den Winkel der langen Linien des Blatts und dreht das Blatt, sobald Sie `Annehmen` wählen oder einen `Wert` geben. {{cmd:SCANCLEAN}} macht es schwarzweiß (`Schwelle` Auto/Adaptiv/Stufe, `Flecken`) und `Ausführen`. {{cmd:SCANCROP}} behält ein Fenster. {{cmd:SCANERASE}} löscht ein `Rechteck`, ein `Polygon` oder ein `Lasso`. {{cmd:SCANTRACE}} zeichnet Linien und Bögen auf einen neuen Layer nach (`Toleranz`, `Fenster`, `Bögen`, `Reste`, `Ausführen`) und meldet, was es gefunden hat und was es als Raster gelassen hat. {{cmd:SCANINFO}} listet die ursprüngliche Datei und die Schritte auf. {{cmd:RASTERSNAP}} schaltet das Einrasten an den Linien gescannter Blätter `EIN` oder `AUS`. Siehe das Thema Gescannte Zeichnungen und Nachzeichnen.

### REGEN und REGENALL

Aliase: `RE` für {{cmd:REGEN}}, `REA` für {{cmd:REGENALL}}. Baut das auf dem Bildschirm Gezeichnete aus der Zeichnung neu auf: {{cmd:REGEN}} den Tab, den Sie ansehen (auf einem Blatt auch das Modell, das seine Ansichtsfenster zeigen), {{cmd:REGENALL}} jeden Tab, jedes geteilte Teilfenster und jede offene Zeichnung. Verwenden Sie sie, wenn das Bild nach einer skriptgesteuerten oder sehr großen Änderung veraltet wirkt oder ein Assistent die Zeichnung bearbeitet hat; die Zeichnung selbst wird nicht berührt, es gibt also nichts rückgängig zu machen.

### NAMEDVIEW

Aliase: `NV`, `VIEWS`. `Option eingeben [?/Wiederherstellen (R)/Speichern (S)/Fenster (W)/Löschen (D)] <Wiederherstellen>`, dann der Name der Ansicht. `S` speichert die Ansicht auf dem Bildschirm, `W` ein Fenster, das Sie wählen, `R` stellt eine gespeicherte Ansicht wieder her, `D` löscht eine, `?` listet die Ansichten dieses Tabs auf. Speichern unter einem vorhandenen Namen ersetzt sie; jede Änderung ist ein Rückgängig-Schritt. Ansichten gehören zu dem Tab, auf dem sie gespeichert wurden. DWG- und DXF-Dateien behalten sie (die Tabelle VIEW); die Ansichten eines Blatts kommen auf dem ersten Blatt zurück, da die Datei nicht sagt, welches.

### UNDO und REDO

Aliase: `U` für {{cmd:UNDO}}; {{cmd:REDO}} hat keinen. Außerdem {{key:Mod+Z}} und {{key:Mod+Y}}.

### LAYER

Aliase: `LA`. Springt zum Bereich {{ui:Layer}}.

### LINETYPE, LWEIGHT, LTSCALE

{{cmd:LINETYPE}} (`LT`): `Linientyp für neue Objekte eingeben` — `ByLayer` (VonLayer), `ByBlock` (VonBlock) oder ein Name (`?` listet sie: Continuous, die eigenen der Zeichnung und DASHED, HIDDEN, CENTER, PHANTOM, DOT, DASHDOT, BORDER, DIVIDE mit ihren Größen `2` (halb) und `X2` (doppelt)). {{cmd:LWEIGHT}} (`LW`): die Linienstärke für neue Objekte in mm oder `ByLayer`, `ByBlock`, `Default`. {{cmd:LTSCALE}} (`LTS`): der Linientypfaktor der Zeichnung (rückgängig machbar). {{cmd:LWDISPLAY}} (`LWT`): `Linienstärken anzeigen [EIN/AUS]` — dasselbe wie die Schaltfläche {{ui:LST}} in der Statusleiste. Siehe [Linienstärken und Linientypen](topic:units-papers-scales#line-weights-and-linetypes).

### RENAME, LAYMRG, LAYDEL

{{cmd:RENAME}} (`-RENAME`, `REN`): `Objekttyp zum Umbenennen eingeben [Layer (LA)/Block]`, `Alten Namen eingeben`, dann den neuen Namen; Objekte oder Referenzen folgen. {{cmd:LAYMRG}}: `Objekt auf dem zusammenzuführenden Layer wählen oder [Name]` bis {{key:Enter}}, dann `Objekt auf dem Zielayer wählen oder [Name]` und `Y`. {{cmd:LAYDEL}}: `Objekt auf dem zu löschenden Layer wählen oder [Name]`, dann `Y`: der Layer und jedes Objekt darauf gehen (nicht Layer 0, DEFPOINTS oder der aktuelle Layer). Jeder ist ein Rückgängig-Schritt. Siehe [Eine Zeichnung mit Layern ordnen](topic:layers#rename-merge-and-delete-layers).

### LAYISO, LAYUNISO, LAYOFF, LAYFRZ, LAYMCUR, LAYON, LAYTHW

Layer über gewählte Objekte; auch im Menü {{ui:Werkzeuge}} des Bereichs {{ui:Layer}}. {{cmd:LAYISO}}: `Objekte auf den zu isolierenden Layern wählen`, dann {{key:Enter}}: jeder andere Layer wird ausgeschaltet. {{cmd:LAYUNISO}} schaltet sie wieder ein. {{cmd:LAYOFF}} und {{cmd:LAYFRZ}}: `Objekt auf dem Layer wählen, der ausgeschaltet (oder eingefroren) werden soll`, immer wieder; `U` nimmt das letzte zurück, {{key:Enter}} endet. {{cmd:LAYMCUR}}: `Objekt wählen, dessen Layer aktuell werden soll`. {{cmd:LAYON}} schaltet jeden Layer ein, {{cmd:LAYTHW}} taut jeden Layer auf. Jeder Befehl ist ein Rückgängig-Schritt. Siehe [Eine Zeichnung mit Layern ordnen](topic:layers#work-on-layers-by-picking-objects).

### NEW, OPEN, SAVE, SAVEAS, DXFOUT

{{cmd:NEW}} beginnt eine leere Zeichnung und {{cmd:OPEN}} öffnet eine DWG oder DXF, jede in einem eigenen Tab über der Zeichnung (eine unberührte neue Zeichnung wird stattdessen verwendet, statt eines neuen Tabs). Das Schließen eines Tabs mit nicht gespeicherten Änderungen fragt zuerst. Siehe [Den Bildschirm teilen](topic:split-screen).

{{cmd:SAVE}} (Alias `QSAVE`, auch {{key:Mod+S}}) lädt eine Kopie im Format der Zeichnung herunter: DWG, wenn sie aus einer DWG geöffnet wurde, DXF, wenn aus einer DXF. Eine neue Zeichnung verwendet das Format, das zuletzt bei {{ui:Kopie speichern unter}} in diesem Browser gewählt wurde, sonst DWG.

{{cmd:SAVEAS}} (auch {{key:Mod+Shift+S}}) öffnet das Dialogfeld {{ui:Kopie speichern unter}}: wählen Sie {{ui:DWG}} (und seine {{ui:Version}}), {{ui:DXF R12}} oder {{ui:DXF 2000}}, dann {{ui:Speichern}}. Die Wahl bleibt für diese Zeichnung und für neue Zeichnungen in diesem Browser.

{{cmd:DXFOUT}} lädt immer eine Kopie als DXF R12 herunter, ohne das Format zu ändern, das {{cmd:SAVE}} verwendet.

Siehe [Dateien: was sich öffnet, was sich speichert](topic:files#saving).

### TOUR

Aliase: `TUTORIAL`. Startet die sechsschrittige Einführung in die erste Zeichnung erneut. Siehe [Erste Schritte](topic:getting-started#prefer-to-be-guided).

### TOOLBARDOCK

Aliase: `TBDOCK`. `Position der Symbolleiste [Oben/Unten/Links/Rechts]`. Siehe [Einstellungen](topic:settings#toolbar-position).

### COMMANDLINE

Aliase: `CMDLINE`. `Befehlszeile [Unten angedockt/Schwebend/Eine Zeile/Angezeigte Verlaufszeilen/Befehlsverlauf (F2)]`: docket oder lässt die Befehlszeile schweben, macht sie zu einer Zeile, fragt, wie viele Verlaufszeilen gezeigt werden (0 bis 12), oder öffnet den Verlauf. Siehe [Einstellungen](topic:settings#command-line).

### TOPAREA

`Oberer Bereich [Standard/Kompakt]`: die Leisten über der Zeichnung wie bisher oder kompakt. Siehe [Einstellungen](topic:settings#top-area).

### POLARANG

`Schritt des Polarwinkels in Grad eingeben <90>`: der Schritt, auf den die Polare Spur der Linien ausrichtet ({{ui:Polar}}) (mehr als 0, bis 180). In diesem Browser gehalten.

### UNITS

Aliase: `UN`. Wie Längen geschrieben und eingegeben werden.

- `Längenformat eingeben [Wissenschaftlich/Dezimal/Ingenieur/Architektur/Bruch] <aktuell>`
- Architektur und Bruch: `Nenner des kleinsten anzuzeigenden Bruchs eingeben (1, 2, 4, 8, 16, 32, 64, 128 oder 256)`. Die anderen: `Anzahl der Dezimalstellen eingeben (0 bis 8)`.

Neue Bemaßungen folgen ihm. Ein Rückgängig-Schritt. Dasselbe wie {{ui:Längenformat}} und {{ui:Genauigkeit}} in {{ui:Aktuelle Einstellungen}}; siehe [Fuß und Zoll](topic:units-papers-scales#feet-and-inches-and-fractions).

### GDSIN

Aliase: `GDS`. Ein IC-Layout ansehen (eine GDSII-Stream-Datei): Laborversuch, nur zum Ansehen und Messen.

- Ein Dateiauswahldialog nimmt eine `.gds`-Datei; bei mehreren Top-Zellen `Die zu zeichnende Top-Zelle eingeben`.
- Jeder Layer und Datentyp wird ein Zeichnungslayer (`GDS 1`, `GDS 2/5`), Referenzen und Anordnungen werden flach platziert, in der Benutzereinheit der Datei (meist Mikrometer). Ein Rückgängig-Schritt. Nichts wird simuliert oder geprüft, und die Datei wird nicht zurückgeschrieben.

### DIAGRAM

Aliase: `TEXTDIAGRAM`, `T2D`. Ein Diagramm aus Text.

- Ein Kasten nimmt den Text (oder eine Zeile mit `;` zwischen den Anweisungen in der Befehlszeile): ein Mermaid-Flussdiagramm, ein PlantUML-Komponentendiagramm, D2 oder eine Von-bis-Liste.
- `Oberen linken Eckpunkt des Diagramms angeben`, dann `Texthöhe angeben`.

Blöcke und Verbindungen sind gewöhnliche Objekte auf dem Layer `Diagram` und werden gewählt, wenn es endet. Ein Rückgängig-Schritt. Siehe [Ein Diagramm aus Text zeichnen](topic:text-to-diagram).

### OLELIST

Aliase: `OLES`. Die OLE-Objekte, die eine DWG trägt und die CadCraft nicht selbst platzieren kann.

- Listet jedes auf: Nummer, Typ, Größe, ob es ein Bild gespeichert hat.
- `Option eingeben [Platzieren (P)/Beenden (X)] <Beenden>`: Platzieren fragt nach der Nummer, der unteren linken Ecke und der Breite und zeichnet einen Rahmen mit dem Bild. Ein Rückgängig-Schritt; das behaltene Objekt wird nicht verändert. Siehe [Bilder](topic:pictures#objects-from-other-programs-ole).

### SHXFONTS

Aliase: `SHX`. Ihre eigenen SHX-Schriften.

- `SHX-Schriftoption eingeben [Ordner/Dateien/Auflisten/Entfernen/Umkehren/Leeren] <Auflisten>`

{{ui:Ordner}} liest jede `.shx` in einem Ordner (CadCraft Studio; bei jedem Start neu), {{ui:Dateien}} nimmt gewählte Dateien (der Browser), {{ui:Umkehren}} legt die Buchstaben einer Schrift rückwärts an, zuletzt zuerst. Textstile, die eine geladene Schrift nennen, werden in ihr gezeichnet. Siehe [Text mit Ihren eigenen SHX-Schriften zeichnen](topic:shx-fonts).

### LIMITS

Wie groß die Zeichnung sein soll.

- `Untere linke Ecke angeben oder [EIN/AUS] <aktuell>`: ein Punkt, `EIN` oder `AUS`.
- `Obere rechte Ecke angeben <aktuell>`.

Das Raster füllt die Grenzen, {{cmd:ZOOM}} Alle zeigt sie, und bei eingeschalteten Grenzen wird ein Punkt außerhalb abgelehnt (`**Außerhalb der Grenzen`). Ein Rückgängig-Schritt; in DWG und DXF gespeichert. Siehe [Zeichengrenzen festlegen](topic:drawing-limits).

### AUNITS

Aliase: `ANGUNITS`. Wie Winkel angezeigt und eingegeben werden.

- `Winkelformat eingeben [Dezimalgrad/Grad-Minuten-Sekunden/Vermessungspeilungen] <aktuell>`
- `Anzahl der Dezimalstellen eingeben (0 bis 8)`, oder für die beiden anderen `Genauigkeit eingeben` (0 Grad, 2 Minuten, 4 Sekunden, 5 bis 8 Dezimalen einer Sekunde).

Ein Rückgängig-Schritt; in DWG und DXF gespeichert. Dasselbe wie {{ui:Winkelformat}} in {{ui:Aktuelle Einstellungen}}. Siehe [Peilungen und Winkel eingeben und anzeigen](topic:bearings-and-angles).

### APPLOAD

Aliase: `AP`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Anwendung laden…}}. Das Dialogfeld {{ui:Anwendungen laden}}: laden Sie `.lsp`-Routinen und `.dcl`-Dialogdateien, entladen Sie sie, laden Sie sie aus dem Verlauf erneut und die Startgruppe. Ein `(defun c:NAME …)` einer Routine arbeitet dann wie jeder andere Befehl. Siehe [Anwendungen laden](topic:load-applications) und [LISP-Routinen ausführen](topic:run-lisp).

### ALIASEDIT, REINIT

{{cmd:ALIASEDIT}} (oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Aliase bearbeiten…}}) öffnet Ihre Aliasdatei (Zeilen `ALIAS, *BEFEHL`); {{ui:Speichern}} wendet sie an. {{cmd:REINIT}} wendet sie erneut an. Siehe [Befehlsaliase bearbeiten](topic:command-aliases).

### OPTIONKEYS

Aliase: `OPTKEYS`; oder {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Optionsbuchstaben}} › {{ui:Bearbeiten…}}. Öffnet Ihre Datei mit Optionsbuchstaben (Zeilen `BEFEHL.OPTION, BUCHSTABEN`, wie `ARRAY.PO, P`); {{ui:Speichern}} wendet sie an, und {{cmd:REINIT}} wendet sie erneut an. Siehe [Befehlsoptionen eigene Buchstaben geben](topic:option-letters).

### LISPEDIT

Aliase: `VLIDE`; oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:LISP-Editor}}. Öffnet den LISP-Editor, ein Fenster, das neben der Zeichnung offen bleibt.

- Der Text: Zeilennummern, der Partner der Klammer am Cursor ist markiert (rot, wenn er keinen hat), {{key:Enter}} rückt die neue Zeile unter die offene Klammer ein, {{key:Tab}} tippt zwei Leerzeichen, {{key:Esc}} verlässt den Text.
- {{ui:In Zeichnung laden}} ({{key:Ctrl+Shift+Enter}}): liest jede Form, wie {{cmd:APPLOAD}} es mit der Datei tut, und macht ihre `c:`-Befehle. Die Datei erscheint in der Liste von {{cmd:APPLOAD}}.
- {{ui:Auswahl ausführen}} ({{key:Ctrl+Enter}}): wertet die gewählten Formen aus oder die Form, in der der Cursor steht.
- {{ui:Beenden}}: beendet eine laufende Routine.
- {{ui:Konsole}}: was die Routine ausgegeben hat und jeder Fehler mit seiner Zeile; ein Klick auf einen Fehler bringt Sie dorthin. Der Text wird eine oberste Form nach der anderen ausgeführt, daher ist die Zeile die der Form, oder darin die Zeile, die die Funktion aufruft, die der Fehler nennt.
- {{ui:Neu}}, {{ui:Öffnen}}, {{ui:Speichern}} ({{key:Ctrl+S}}): eine `.lsp`-Datei. Der Text wird auch in diesem Browser gehalten, sodass das Schließen des Fensters nichts verliert.
- Neben dem Text: die Funktionen, die die Routine definiert, die, die sie aufruft und die dieses LISP noch nicht hat, die, die sie aufruft und die weder darin definiert noch eingebaut sind, und die vollständigen Listen dessen, was eingebaut ist und was nicht.

Ein Text mit einer Klammer, die nie geschlossen wird, oder einer Zeichenkette, die nie endet, wird nicht ausgeführt: Die Zeile wird genannt. Es gibt keinen schrittweisen Debugger, keine Haltepunkte und kein Überwachungsfenster. Siehe [LISP-Routinen ausführen](topic:run-lisp).

### HELP

Aliase: `?`. Gibt jeden Befehl, seine Aliase und eine Zeile Beschreibung im Befehlsverlauf aus. Es öffnet nicht diese Hilfe: Drücken Sie {{key:F1}} oder klicken Sie auf {{ui:Hilfe}} dafür.

## Eingabeaufforderung „Objekte wählen“

Bei jeder Aufforderung `Objekte wählen`: klicken Sie Objekte an, ziehen Sie Fenster (von links nach rechts) und Kreuzungen (von rechts nach links) mit zwei Klicks, oder drücken und ziehen Sie ein Lasso ({{key:Space}} beim Ziehen: Fenster, Kreuzung, Zaun), {{key:Shift}}+Klick zum Entfernen, und drücken Sie {{key:Enter}}, um abzuschließen. Sie können auch `ALL` (alles), `L` (das letzte Objekt), `P` (Vorherige: was der letzte Befehl verwendet hat), `F` (Zaun: Objekte, die eine Linie aus Punkten kreuzt; `U` nimmt einen Punkt zurück), `W` (Fenster), `C` (Kreuzung), `R` (Entfernen-Modus: Auswahlen nehmen Objekte heraus; die Eingabeaufforderung lautet `Objekte entfernen`) und `A` (erneut hinzufügen) eingeben. `?` listet sie auf. Sie werden in der Eingabeaufforderung nicht angezeigt. {{key:Tab}} über überlappenden Objekten hebt das nächste hervor; klicken Sie, um es zu wählen. Siehe [Objekte auswählen](topic:select-objects).

### ACCESS

Alias: `AX`. Zeichnen ohne Sehen. {{cmd:ACCESS}} schaltet Access ein oder aus (`On`, `Off`) und schaltet Fangtöne (`Sound`) und Sprachbefehle (`Voice`) um; er sagt zuerst den Zustand. Ist Access an, wird jeder Befehl und jedes Ergebnis über Ihren Bildschirmleser gesprochen, und der Zeichenbereich hat einen Tastatur-Cursor. Das Hilfethema „Zeichnen ohne Sehen“ enthält die Tasten.

### DESCRIBE

Alias: `DESC`. Sagt, was die Zeichnung enthält: wie viele Objekte, welcher Art, wie groß, wie viele Layer, was gewählt ist. Liest nur; ändert nichts.

### WHEREAMI

Alias: `WHERE`. Sagt, wo der Cursor ist, in den Einheiten der Zeichnung.

### NEARBY

Sagt, was nahe am Cursor liegt, das Nächste zuerst, jedes mit seinem Abstand und der Seite, auf der es liegt.

### SAYSEL

Sagt, was gewählt ist, einen Satz pro Objekt (Linienlänge, Enden und Winkel; Kreisradius und Mittelpunkt; Text, wie er geschrieben ist).

### VOICE

Gesprochene Befehle ein- oder ausschalten. Sie werden auf diesem Computer erkannt; wo der Browser das nicht kann, bleibt die Stimme aus, bis Sie in den Einstellungen den Online-Dienst des Browsers wählen.

### TOUCHCROSSHAIR

Alias: `TCX`. Das versetzte Fadenkreuz für das Zeichnen mit dem Finger, damit die Fingerspitze den Punkt nicht verdeckt, den Sie wählen. Ist es an, wählt ein Finger auf der Zeichnung nicht: Er bewegt ein Fadenkreuz, das über dem Finger und seitlich liegt. Objektfänge und Spuren folgen dem Fadenkreuz. Den Finger abheben wählt nichts und lässt das Fadenkreuz, wo es ist. Zum Wählen drücken Sie die Schaltfläche {{ui:Klicken}} in der Ecke der Zeichnung, oder tippen Sie mit einem zweiten Finger irgendwo auf die Zeichnung. Halten Sie {{ui:Klicken}} gedrückt, während Sie den anderen Finger bewegen, zum Ziehen (ein Auswahlfenster, ein Lasso, ein Griff). Ein Finger, der lange still gehalten wird, oder die Schaltfläche {{ui:Enter}}, ist Enter. Zwei Finger verschieben und zoomen wie bisher. Nahe dem unteren Rand und dem fernen Seitenrand rückt das Fadenkreuz näher an den Finger heran, sodass jeder Teil der Zeichnung erreicht werden kann. Stift und Maus wählen immer direkt.

{{cmd:TOUCHCROSSHAIR}} sagt den Zustand und fragt `ON`, `OFF`, `Auto` (nur an, wo ein Finger der einzige Zeiger ist, sodass es an einem Computer mit Maus aus ist), `Distance` (wie weit das Fadenkreuz vom Finger entfernt liegt, 24 bis 240 Pixel) oder `Side` (`Left`: oben und links, für die rechte Hand; `Right` für die linke Hand; die Schaltflächen wechseln in die andere Ecke). Dieselben Wahlmöglichkeiten gibt es in {{ui:Einstellungen}} › {{ui:CadCraft}}, und auf einem Gerät mit Touchscreen hat die Statusleiste einen Schalter {{ui:Versatz-Fadenkreuz}}. Die Wahl wird in diesem Browser gehalten.

### WHOHAS

Sagt, wer eine Zeichnung geöffnet hat. In CadCraft Studio auf einem Computer schreibt das Öffnen einer DWG oder DXF eine kleine Sperrdatei neben sie (`Plan.dwg.cclock`: wer, seit wann, welche Version), erneuert sie jede Minute, während die Zeichnung offen ist, und entfernt sie, wenn die Zeichnung geschlossen wird. Das Öffnen einer Zeichnung, die jemand anderes offen hat, sagt, wer und seit wann, und bietet {{ui:Schreibgeschützt öffnen}} (Speichern fragt dann nach einem neuen Namen), {{ui:Trotzdem öffnen}} (die andere Person wird bei ihrer nächsten Erneuerung informiert) oder {{ui:Abbrechen}}. Speichern über einer Datei, die jemand anderes offen hat, fragt zuerst. Eine Sperre, die fünf Minuten lang nicht erneuert wurde, gilt als veraltet: Die andere Kopie wurde ohne Speichern geschlossen oder der Computer schläft.

{{cmd:WHOHAS}} fragt `Aktuell (C)` (die offene Zeichnung), `Datei (F)` (eine wählen), `Ordner (FO)` (einen Ordner wählen: jede Zeichnung darin, die irgendwo offen ist, wird aufgelistet), `Pfad (P)` (einen vollen Pfad eingeben) oder `Name (N)` (der Name, den andere sehen; Ihr Kontoname, wenn Sie angemeldet sind). Studio kann nur Ordner erreichen, die Sie gewählt haben: Für eine Zeichnung aus einem Ordner, der nie gewählt wurde, sagt es einmal, dass es die Zeichnung nicht als offen vermerken kann; `Ordner` wählt den Ordner, und Sperren funktionieren dort von da an. Die Sperre ist ein Hinweis für Menschen, keine Barriere: Ein anderes Programm kann die Datei weiterhin schreiben. Im Browser gibt es keine Ordner, die man durchsucht, und der Befehl sagt es.

### OVERKILL

Löscht doppelte Objekte und räumt überlappende Linien und Bögen auf, für Zeichnungen, die voller doppelter Linien ankommen. `Objekte zum Aufräumen wählen`, {{key:Enter}}, dann {{key:Enter}} erneut, um mit den angezeigten Einstellungen aufzuräumen, oder zuerst eine ändern:

- `Toleranz`: wie nah zwei Koordinaten beieinander liegen müssen, um als gleich zu gelten (zu Beginn 0,000001; 0 heißt genau gleich).
- `Ignorieren`: Eigenschaften, die sich zwischen zwei sonst gleichen Objekten unterscheiden dürfen. Geben Sie einen Namen ein, um ihn umzuschalten: `Color`, `LAyer`, `LType`, `ltScale`, `LWeight`, `THickness`, `TRansparency`, oder `None` / `All`. {{key:Enter}}, wenn Sie fertig sind.
- `Überlappen`: ein oder aus. Ein, dann werden Linien auf einer geraden Linie, die sich überlappen, zu einer Linie (eine Linie, die in einer anderen liegt, wird einfach gelöscht), und Bögen auf einem Kreis, die sich überlappen, zu einem Bogen; Bögen, die eine volle Drehung schließen, werden zu einem Kreis, und ein Bogen auf einem Kreis wird gelöscht.
- `Enden`: ein oder aus. Ein, dann werden Linien auf einer geraden Linie und Bögen auf einem Kreis, die sich nur Ende an Ende berühren, zu einem Stück.

Jeder Objekttyp wird auf Duplikate geprüft: Zwei Objekte sind Duplikate, wenn ihre Geometrie innerhalb der Toleranz gleich ist und ihr Layer, ihre Farbe, ihr Linientyp, Linientypfaktor, ihre Linienstärke, Dicke, Transparenz und Höhe übereinstimmen (abzüglich der, die Sie ignorieren). Linien und offene Polylinien passen auch, wenn sie in umgekehrter Richtung gezeichnet sind. Das erste Objekt in der Zeichenreihenfolge bleibt und behält seine eigenen Eigenschaften. Der Befehl meldet, wie viele Objekte er geprüft und gelöscht hat: Duplikate, überlappende Stücke, zusammengeführte Stücke, Ende an Ende verbundene Stücke. Ein {{cmd:UNDO}} nimmt alles zurück. Die Einstellungen bleiben, bis Sie das Zeichnungsfenster schließen.

Er lässt in Ruhe: Objekte auf gesperrten Layern und ausgeblendete Objekte. Er führt keine Linien mit einer Höhe (Z) zusammen (genaue Duplikate von ihnen gehen trotzdem), und er berührt keine Abschnitte innerhalb einer Polylinie (sie werden nicht ausgedünnt), keine Linie auf einem Abschnitt einer Polylinie und keine geschlossene Polylinie, die umgekehrt gezeichnet ist.

### DRAWORDER

Ändert, welche Objekte vorn gezeichnet werden. `Objekte zum Neuordnen wählen`, {{key:Enter}}, dann `Über Objekten`, `Unter Objekten`, `Vorne` oder `Hinten` ({{key:Enter}} = `Hinten`). `Über Objekten` und `Unter Objekten` fragen nach den Bezugsobjekten: Die Auswahl kommt direkt vor das vorderste von ihnen oder direkt hinter das hinterste. Die gewählten Objekte behalten ihre Reihenfolge untereinander. Ein Rückgängig-Schritt. Die Reihenfolge wird mit der Zeichnung in DWG und DXF gespeichert, wo sie die Reihenfolge ist, in der die Objekte geschrieben werden.

Auf dem Bildschirm wird jedes Objekt in der Reihenfolge der Zeichnung gezeichnet, wie andere Programme, die die Datei öffnen, sie zeichnen: Eine volle Schraffur, eine breite Polylinie oder eine Textmaske verdeckt die Linien und den Text dahinter, und was davor liegt, verdeckt es. Wo eine Linie einen Text kreuzt, sind beide zu sehen. Bilder und angefügte PDF-Seiten bleiben unter den Linien. In einer sehr großen Zeichnung, deren Füllungen und Linien sich mehr als 256-mal überlappen und abwechseln, behalten die ersten 256 ihre Reihenfolge, und der Rest zeichnet seine Füllungen unter den Linien, damit das Neuzeichnen schnell bleibt.

### TEXTTOFRONT

Bringt Text, Bemaßungen und Führungslinien vor alles andere im offenen Raum: `Text`, `Bemaßungen`, `Führungslinien` oder `Alle` ({{key:Enter}} = `Alle`). Ein Rückgängig-Schritt. Er sagt es, wenn es keine gibt oder sie schon vorn stehen.

### HATCHTOBACK

Schickt jede Schraffur des offenen Raums hinter alles andere, sodass Füllungen die Linien und den Text in der gespeicherten Datei nicht mehr verdecken. Keine Fragen. Ein Rückgängig-Schritt.

### ISOLATEOBJECTS

Aliase: `ISOLATE`. Zeigt nur die gewählten Objekte: alles andere im offenen Raum verschwindet aus der Sicht, bis {{cmd:UNISOLATEOBJECTS}}. Anders als {{cmd:LAYISO}} arbeitet es mit den Objekten, die Sie wählen, unabhängig von ihren Layern, und ändert keinen Layer. Ausgeblendete Objekte werden nicht gezeichnet, nicht gewählt, nicht gefangen, nicht gezoomt und nicht geplottet, und Befehle, die `ALL` nehmen, überspringen sie. Was Sie zeichnen, während Objekte isoliert sind, wird wie üblich angezeigt.

Das gilt nur für die Sitzung: Nichts davon wird mit der Zeichnung gespeichert, es ist kein Rückgängig-Schritt, und beim erneuten Öffnen der Zeichnung ist alles zu sehen. Während Objekte ausgeblendet sind, zeigt die Statusleiste eine Schaltfläche mit ihrer Anzahl; klicken Sie darauf, um sie wieder einzublenden.

### HIDEOBJECTS

Blendet die gewählten Objekte aus, bis {{cmd:UNISOLATEOBJECTS}}. Dieselben Regeln wie {{cmd:ISOLATEOBJECTS}}: nur für die Sitzung, nicht gespeichert, kein Rückgängig-Schritt.

### UNISOLATEOBJECTS

Aliase: `UNISOLATE`, `UNHIDE`. Blendet jedes Objekt wieder ein, das {{cmd:ISOLATEOBJECTS}} oder {{cmd:HIDEOBJECTS}} ausgeblendet hat, und sagt, wie viele zurückkamen.

### LAYLOCKFADE

Legt fest, wie Objekte auf gesperrten Layern aussehen und ob ein Klick sie erreicht. Er sagt den aktuellen Zustand und nimmt dann:

- eine Zahl von 0 bis 90: das Maß des Verblassens in Prozent (zu Beginn 50). 0 schaltet das Verblassen aus.
- `ON` oder `OFF`: Verblassen ein oder aus, wobei das Maß erhalten bleibt.
- `Wählen (P)`, dann `Ja (Y)` oder `Nein (N)`: Darf ein Klick Objekte auf gesperrten Layern wählen, wenn kein Befehl läuft? `Nein` (die Voreinstellung): sie können gar nicht gewählt werden. `Ja`: ein Klick oder ein Fenster wählt sie, damit {{ui:Eigenschaften}} sie zeigen kann; sie können trotzdem nicht geändert werden, und das eigene `Objekte wählen` eines Befehls nimmt sie nie.

Objektfänge finden Objekte auf gesperrten Layern in jedem Fall. Plots werden nie verblasst. Beide Einstellungen gehören Ihnen, nicht der Zeichnung, und stehen auch in {{ui:Einstellungen}} unter {{ui:Gesperrte Layer}}.

### BURST

Löst Blockreferenzen auf und behält, was ihre Attribute besagen. `Blockreferenzen zum Auflösen wählen`, {{key:Enter}}: jede Referenz wird durch die Objekte des Blocks ersetzt, und der Wert jedes sichtbaren Attributs wird zu einfachem Text auf dem eigenen Layer dieses Attributs (ein Attribut auf Layer 0 landet auf dem Layer der Referenz, wie die anderen Objekte des Blocks auf Layer 0). Unsichtbare Attribute werden verworfen. Ein Block innerhalb des Blocks bleibt eine Blockreferenz. Ein Rückgängig-Schritt; er meldet die aufgelösten Referenzen und die Attributwerte, die zu Text wurden.

Er lehnt eine verknüpfte Zeichnung beim Namen ab (binden Sie sie zuerst, oder kopieren Sie mit {{cmd:NCOPY}} daraus), und lässt andere gewählte Objekte in Ruhe. Für Blockreferenzen ergibt {{cmd:EXPLODE}} dieselben Objekte; {{cmd:BURST}} nimmt nur Blockreferenzen und zählt den Attributtext.

### TXT2MTXT

Aliase: `T2M`. Verbindet einzeilige Texte zu einem Absatztext. `Einzeiligen Text zum Verbinden wählen`, {{key:Enter}}, dann `Absatz (P)` (die Zeilen laufen zusammen und umbrechen an der Breite der breitesten Zeile) oder `Zeilen (L)` (jeder Text bleibt eine eigene Zeile); {{key:Enter}} nimmt den zuletzt verwendeten. Die Zeilen werden von oben nach unten geordnet, dann von links nach rechts, entlang der Richtung des obersten Textes. Der Absatz hängt an der oberen linken Ecke des obersten Textes und übernimmt dessen Höhe, Drehung, Stil, Layer und Farbe. Ein Rückgängig-Schritt.

Text, der schon Absatztext ist, leere Texte und andere Objekte in der Auswahl bleiben in Ruhe, und der Befehl sagt, wie viele.

### NCOPY

Kopiert Objekte aus einer Blockreferenz oder einer verknüpften Zeichnung in die Zeichnung, ohne etwas aufzulösen. `Ein Objekt innerhalb einer Blockreferenz oder einer verknüpften Zeichnung wählen`: das Objekt, das dem Klick am nächsten liegt, wird dort kopiert, wo es zu sehen ist, egal wie viele Blöcke tief es liegt; wählen Sie weitere, dann {{key:Enter}}. Als Nächstes `Basispunkt zum Verschieben der Kopien`: {{key:Enter}} lässt sie an ihrem Ort, oder geben Sie einen Basispunkt und einen zweiten Punkt an. Der ganze Befehl ist ein Rückgängig-Schritt.

Eine Kopie erhält den Layer, auf dem sie zu sehen ist: Ein Objekt auf Layer 0 innerhalb eines Blocks landet auf dem Layer der Referenz, in der es saß, und eine Farbe „VonBlock“ wird die Farbe dieser Referenz. Aus einer verknüpften Zeichnung wird der Layer `Plan|Walls` zu `Plan$0$Walls` (der Name, den die Verknüpfung ihm gibt), mit der Farbe, dem Linientyp und der Linienstärke des verknüpften Layers erstellt. Der Wert eines Attributs wird als Text kopiert. Blockreferenzen auf gesperrten Layern können nicht gewählt werden.

### FLATTEN

Setzt die Höhe (Z) und die Dicke der gewählten Objekte auf 0. `Objekte zum Flachlegen wählen`, {{key:Enter}}. Es flacht auch die Objekte innerhalb der Blockdefinitionen ab, die die Auswahl verwendet (und die Blöcke darin), sodass jede Referenz auf diese Blöcke sich ändert; verknüpfte Zeichnungen bleiben, wie sie sind. Ein Rückgängig-Schritt; er meldet, wie viele Objekte sich geändert haben, und sagt es, wenn keines eine Höhe oder Dicke hatte.

Was CadCraft von der dritten Dimension in einer 2D-Zeichnung behält, ist: eine Höhe bei Kreisen, Bögen, Ellipsen, Punkten, Text, Blockreferenzen, Schraffuren, Führungslinien und Polylinien (ihre Höhenlage), eine Höhe an jedem Ende einer Linie und eine Dicke bei Linien, Kreisen, Bögen, Polylinien, Punkten und Text, so wie die Datei sie hatte. {{cmd:FLATTEN}} löscht genau diese. Es berührt das 3D-Modell auf dem 3D-Reiter nicht, auch keine 3D-Flächen oder Volumenkörper; und ein Objekt, das in einer geneigten Ebene gezeichnet wurde, wurde beim Öffnen der Datei schon in die Zeichenebene gebracht.

### BREAKLINE

Zeichnet eine Linie mit einem Bruchsymbol, für eine Ansicht, die abgeschnitten ist. Er sagt die aktuelle Größe und Verlängerung, dann `Ersten Punkt der Bruchlinie angeben` (oder `Größe` / `Verlängerung`, um sie vorher zu ändern), `Zweiten Punkt angeben` und `Lage des Bruchsymbols angeben`: klicken Sie entlang der Linie oder {{key:Enter}} für die Mitte. Das Ergebnis ist eine Polylinie auf dem aktuellen Layer: die Linie, die über jeden Punkt um die Verlängerung hinausläuft, mit einem Z-förmigen Strich, so hoch wie die Größe und halb so lang.

`Größe` und `Verlängerung` werden als Ihre Einstellungen gemerkt (die Größe beginnt als das Doppelte der Texthöhe der Bemaßung mal dem Bemaßungsmaßstab; die Verlängerung bei der Hälfte der Größe). {{key:Enter}} wiederholt den Befehl.

### AUDIT

Prüft die offene Zeichnung auf Schäden und repariert sie. {{cmd:AUDIT}} schaut jedes Objekt im Modell, auf den Blättern und in Blöcken an und die Layertabelle, und listet auf, was es findet, nach Art:

- nicht endliche oder absurd große Zahlen;
- Objekte ohne Größe: eine Linie ohne Länge, ein Kreis ohne Radius, eine Polylinie mit einem Punkt, Text ohne Buchstaben oder Höhe, eine Blockreferenz mit Skalierung null;
- Objekte auf einem Layer, den die Zeichnung nicht hat; Verweise auf einen Block, der nicht da ist; Namen von Text- und Bemaßungsstilen und Linientypen, die nicht in der Zeichnung sind;
- Blöcke, die sich selbst enthalten, direkt oder über andere Blöcke;
- Objekte, die eine ID, einen Schlüssel oder einen Dateiverweis teilen;
- Bemaßungen ohne die Punkte, von denen gemessen wird, und Schraffuren, deren Begrenzung kein geschlossener Umriss ist.

Dann fragt er `Beheben? [Ja (Y)/Nein (N)]`. `Nein` ändert nichts. `Ja` repariert alles in einem Rückgängig-Schritt: Was nicht gezeichnet werden kann, wird entfernt (fehlerhafte Zahlen, keine Größe, fehlender Block, defekte Bemaßung, eine Schraffur ohne brauchbare Begrenzung, der Verweis, der einen Kreis von Blöcken schließt); ein fehlender Layer wird angelegt; unbekannte Namen von Stilen und Linientypen gehen auf die Voreinstellungen zurück; ein gemeinsamer Schlüssel wird ersetzt. Es gibt aus, wie viele Objekte entfernt und wie viele repariert wurden. Dieselben Befunde erscheinen im Bereich Probleme, jeweils mit eigenem {{ui:Reparieren}}.

Es lehnt nichts ab, prüft aber nur, was CadCraft selbst zeichnet: Daten, die für andere Programme gehalten werden (3D-Volumenkörper, OLE-Objekte), werden nicht geöffnet.

### RECOVER

Öffnet eine beschädigte DXF oder DWG. {{cmd:RECOVER}} fragt nach der Datei, liest, was sich lesen lässt, statt die Datei abzulehnen, listet auf, was übersprungen oder angenommen wurde, und prüft und repariert dann die Zeichnung, wie {{cmd:AUDIT}} es mit `Ja` tut.

- DXF: Zeilen, die nicht zu einem Code- und Wertepaar gehören, werden übersprungen, bis die Paare wieder passen; ein Abschnitt ohne Ende wird geschlossen; eine Datei, die abgeschnitten ist, wird bis zum Schnitt gelesen; eine binäre DXF, die abgeschnitten ist, wird bis zu ihrem letzten ganzen Wert gelesen. Kann ein Abschnitt, ein Block oder ein Objekt immer noch nicht gelesen werden, wird es weggelassen und genannt, und das Lesen geht danach weiter.
- DWG: Objekte, die ihre Prüfungen nicht bestehen oder nicht dekodiert werden können, werden weggelassen, und eine verlorene Objektliste wird neu aufgebaut, indem die Objektdaten durchlaufen werden.

Die Datei auf der Platte wird nicht verändert. Die wiederhergestellte Zeichnung öffnet sich als nicht gespeichert: Speichern Sie sie unter einem neuen Namen. Eine Datei, aus der gar nichts gelesen werden kann, wird mit dem Grund abgelehnt.

### LEGACYTEXT

Wandelt Text, der mit alten 8-Bit-Vietnamesischen Schriften geschrieben wurde, in Unicode um. Kurznamen `TEXTTOUNICODE` und `VNTEXT`.

Ältere vietnamesische Zeichnungen halten ihren Text als westliche Zeichen, die nur die Schrift in Vietnamesisch verwandelt: TCVN3-Text in den ABC-Schriften (`.VnTime`, `.VnArial` und die Schriften in Großbuchstaben, deren Namen auf `H` enden), und VNI-Text in den VNI-Schriften (`VNI-Times`). CadCraft zeigt solchen Text so, wie er gelesen wird, sobald die Zeichnung offen ist, nach der Schrift seines Textstils, des Objekts oder eines Abschnitts in Absatztext; die Datei enthält weiterhin die alten Zeichen.

{{cmd:LEGACYTEXT}} sagt, wie viele Texte es in jeder Kodierung gefunden hat, und fragt `… in Unicode umwandeln?`. `Ja` schreibt jeden um (Modell, Blätter, Blöcke, Attributwerte und -definitionen) und gibt den Textstilen eine Unicode-Schrift (Times New Roman, Arial oder Courier New, je nach Art der alten Schrift), in einem Rückgängig-Schritt. Die Formatierung in Absatztext bleibt erhalten.

Wenn kein Text eine bekannte Schrift verwendet (ein Stil, der seinen Schriftnamen verloren hat), fragt er `Gewählte Texte lesen als [Tcvn3/Vni/Keine]`: Wählen Sie die Kodierung und wählen Sie die Texte. Text, der schon Unicode ist, bleibt in Ruhe. Textüberschreibungen von Bemaßungen und Text von Multi-Führungslinien werden nicht umgewandelt.
