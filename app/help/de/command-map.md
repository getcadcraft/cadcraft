---
title: Befehlsübersicht: was Sie eingeben
summary: Alle Befehle von CadCraft mit ihren Kurzbefehlen, von A bis Z, direkt aus dem Programm erstellt, sowie die Gewohnheiten aus anderen Zeichenprogrammen, die abweichen.
keywords: Befehlsübersicht, Befehle, Aliase, Kurzbefehle, Umstieg, Befehlsliste, was eingeben, Löschen, Stutzen, Entsprechung, Unterschiede
from: 3bdfd3e6
---

CadCraft übernimmt die Befehlsnamen und Kurzbefehle, die Menschen aus anderen Zeichenprogrammen kennen: geben Sie `L` für eine Linie ein, `TR` zum Stutzen, `E` zum Löschen. Für die meisten gibt es daher keine Übersetzungstabelle zu lernen: der Name, den Sie kennen, ist hier derselbe. Die Liste unten enthält jeden Befehl, den CadCraft hat, direkt aus dem Programm erstellt. {{key:Enter}} wiederholt den letzten Befehl; `HELP` in der Befehlszeile gibt dieselbe Liste aus.

Die wenigen, die nicht gleich sind oder noch nicht umgesetzt:

- **Speichern** lädt eine Kopie im Browser herunter ({{cmd:SAVE}}, {{cmd:SAVEAS}}); in CadCraft Studio schreibt es die Datei. Siehe [Umstieg von anderer Zeichensoftware](topic:coming-from).
- **PLOT** erstellt eine PDF (auch PNG und SVG) mit einer Plotstiltabelle; einen Seiteneinrichtungs-Manager gibt es nicht.
- **DIMSTYLE** und **PEDIT** sind umgesetzt; **PEDIT** hat keine Option Scheitelpunkt bearbeiten (dafür sind die Griffe da).
- **TABLE** ist noch nicht umgesetzt; {{cmd:XREF}}, {{cmd:SPLINE}} und {{cmd:WBLOCK}} sind umgesetzt.
- Die eigenen Befehle einer Routine (AutoLISP `C:NAME`) erscheinen, nachdem Sie sie mit {{cmd:APPLOAD}} geladen haben; sie sind hier nicht aufgelistet.

## Alle Befehle (398)

| Befehl | Kurzbefehle | Was er tut |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Die 3D-Ansicht mit der linken Maustaste kreisen lassen |
| `ACCESS` | `AX` | Zeichnen ohne Sehen ein- oder ausschalten: Ergebnisse über Ihren Screenreader, ein Tastaturcursor auf der Zeichnung, Fangtöne und gesprochene Befehle. |
| `ALIASEDIT` |  | Befehlsaliase in einer Textdatei bearbeiten (das vertraute Format L, *LINE) |
| `ALIGN` | `AL` | Objekte so verschieben und drehen, dass Quellpunkte auf Zielpunkte fallen (ein, zwei oder drei Paare), und bei Bedarf skalieren |
| `ALIGNPANEL` | `ALP` | Das Panel Ausrichten und verteilen öffnen |
| `ALIGNTO` |  | Die linken, mittleren, rechten, oberen, mittleren oder unteren Kanten der gewählten Objekte ausrichten, an der Auswahl, am ersten oder letzten gewählten Objekt oder an einem Punkt |
| `ANNOALLVISIBLE` | `ANNOALL` | Beschriftungsobjekte in jedem Maßstab anzeigen oder nur dort, wo der Maßstab des Ansichtsfensters (oder der Zeichnung) in ihrer Liste steht |
| `ANNOSCALE` | `CANNOSCALE` | Den Beschriftungsmaßstab der Zeichnung festlegen: beschriftungsfähiger Text und Bemaßungen werden so skaliert, dass sie gleich groß gedruckt werden |
| `APPLOAD` | `AP` | Anwendungen laden: LISP-Routinen (.lsp) und ihre Dialogdateien (.dcl); die Startgruppe (AP) |
| `ARC` | `A` | Bogen: 3-Punkt, Start/Zentrum/Ende, Start/Zentrum/Winkel, Start/Zentrum/Länge, Start/Ende/Winkel, Start/Ende/Richtung, Start/Ende/Radius, Zentrum/Start/Ende, Zentrum/Start/Winkel, Zentrum/Start/Länge, Fortsetzen |
| `AREA` | `AA` | Fläche und Umfang über Punkte oder eines Objekts; Addieren und Subtrahieren führen eine laufende Summe (AA) |
| `ARRAY` | `AR` | Anordnung: Kopien in Zeilen und Spalten oder kreisförmig um einen Mittelpunkt (AR) |
| `ARRAYASSOCIATIVITY` |  | Legt fest, ob die ARRAY-Befehle bearbeitbare Anordnungen (1) oder einfache Kopien (0) erzeugen |
| `ARRAYCLOSE` |  | Beendet das Bearbeiten der Quellobjekte einer Anordnung |
| `ARRAYEDIT` |  | Ändert eine Anordnung, die mit der Option Assoziativ erstellt wurde: Anzahl, Abstände, Quellobjekte, einzelnes Element |
| `ARRAYPATH` |  | Kopien von Objekten entlang einer Linie, eines Bogens, einer Polylinie oder einer anderen Kurve |
| `ARRAYPOLAR` |  | Kopien rund um einen Mittelpunkt |
| `ARRAYRECT` |  | Kopien in Zeilen und Spalten |
| `ASBUILT` | `ASB` | ASBUILT liest die Ist-Punkte, die eine Kolonne gemessen hat (CSV / TXT, wie EXPORTPOINTS sie schreibt), und vergleicht sie mit den Punkten der Zeichnung: innerhalb oder außerhalb der Toleranz, nicht gemessen, überzählig. Markiert sie auf dem Layer AS-BUILT und lädt einen CSV-Bericht herunter. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Ein Attribut definieren (eine Markierung, nach der ein Block einen Wert abfragt), um es in einen Block zu setzen (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Attributwerte einer Blockreferenz in der Befehlszeile nacheinander bearbeiten (Enter behält einen Wert) |
| `ATTSYNC` |  | Die Referenzen eines Blocks an seine Attributdefinitionen anpassen: neue werden mit ihren Standardwerten hinzugefügt, entfernte gelöscht, Positionen und Text zurückgesetzt; Werte bleiben erhalten |
| `AUDIT` |  | Prüft die geöffnete Zeichnung auf Schäden: Zahlen, die nicht endlich sind, Objekte ohne Größe, fehlende Layer, Blöcke, Stile und Linientypen, Blöcke, die sich selbst enthalten, gemeinsame IDs, defekte Bemaßungen und Schraffuren. Listet die Befunde nach Art auf und fragt vor dem Beheben nach; die Behebung ist ein Rückgängig-Schritt. |
| `AUNITS` | `ANGUNITS` | Wie Winkel angezeigt und eingegeben werden: Dezimalgrad, Grad-Minuten-Sekunden oder Richtungswinkel wie N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Zeichnungs-Autovervollständigung ein- oder ausschalten oder jetzt auflisten, was die Muster der Zeichnung vorschlagen. |
| `AUTOCONSTRAIN` |  | Abhängigkeiten Deckungsgleich, Horizontal und Vertikal ergänzen, wo die Geometrie schon nahe beieinander liegt |
| `AUTODIM` | `ADIM` | Nach Regeln bemaßen: Gesamtmaß, Ketten entlang der Seiten, Öffnungen, Lochdurchmesser und Rasterabstände, ohne bereits Bemaßtes zu wiederholen. |
| `AUTOSHEET` | `ASH` | Legt Blätter selbst an: wählt Papier und übliche Maßstäbe und setzt jede Ansicht mit einer Beschriftung und einem Schriftfeld. |
| `BATTMAN` |  | Blockattribut-Manager: Reihenfolge, Markierungen, Abfragen, Standardwerte und Modi der Attribute eines Blocks, danach werden seine Referenzen aktualisiert |
| `BCLOSE` |  | Den Blockeditor schließen: den Block speichern oder die Änderungen verwerfen |
| `BCONVERT` |  | BCONVERT findet Geometrie, die sich wiederholt, und macht daraus Blockreferenzen. Wählen Sie die Objekte, die sich wiederholen: jede weitere Objektgruppe im offenen Bereich mit derselben Geometrie, verschoben und in beliebigem Winkel gedreht, wird gefunden; mit eingeschalteten Optionen Gespiegelt oder Skaliert auch Spiegelbilder und Kopien in anderer Größe. Geben Sie dem neuen Block einen Namen und einen Basispunkt; die Auswahl und jede Kopie werden zu Referenzen darauf, jede mit eigener Drehung und Skalierung. Oder wählen Sie Block und benennen Sie einen vorhandenen Block, um lose Kopien seiner Objekte zu finden. Eine Kopie muss denselben Layer, dieselbe Farbe, denselben Linientyp und dieselbe Linienstärke haben, außer Eigenschaften ist auf Ignorieren gesetzt. Objekte auf gesperrten Layern bleiben unberührt. Ein Rückgängig-Schritt. |
| `BEDIT` | `BE` | Blockeditor: Objekte und Attribute eines Blocks bearbeiten; BCLOSE speichert (BE) |
| `BLEND` |  | BLEND: ein Spline zwischen den Enden zweier offener Kurven, nahe an den Enden gewählt, um sie zu verbinden. CONtinuity: Tangential folgt beiden Richtungen, Glatt folgt auch deren Krümmung. |
| `BLOCK` | `B`, `BMAKE` | Einen Block aus Objekten erstellen (sie werden zu einer Referenz) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: jede Referenz auf einen Block wird zu einer Referenz auf einen anderen, an derselben Stelle, mit derselben Skalierung und Drehung. Werte von Attributen, die beide Blöcke haben, bleiben erhalten. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE zeigt das Panel Blöcke mit dem Cursor im Filterfeld. Das Panel zeigt ein Bild jedes Blocks (die zuletzt platzierten zuerst), als Liste oder Raster; klicken Sie auf ein Bild oder ziehen Sie es in die Zeichnung, um den Block mit INSERT zu platzieren. Unter Bibliothek fügen Sie eine eigene DWG- oder DXF-Datei hinzu: ihre Blöcke werden mit Bildern aufgelistet und beim Platzieren in diese Zeichnung kopiert. In CadCraft Studio kann auch ein Ordner mit Zeichnungen hinzugefügt werden; Dateien und Ordner werden gemerkt. |
| `BOMEDIT` | `BOMCOLUMNS` | Spalten, Gruppierung, Sortierung, Titel, Summen und Bemerkungen einer Stücklistentabelle |
| `BOMEXPORT` |  | Eine Stücklistentabelle als .csv-Datei speichern |
| `BOMTABLE` | `BOM` | Eine laufende Stücklistentabelle einer Zone oder der ganzen Zeichnung |
| `BOMUPDATE` |  | Alle Stücklistentabellen jetzt aktualisieren, auch die eingefrorenen |
| `BOMZONE` | `BZONE` | Ein benannter Bereich der Zeichnung für eine Stückliste: zwei Ecken, ein Polygon oder die Umrisslinie eines geschlossenen Objekts |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): einen Punkt innerhalb einer geschlossenen Fläche wählen und eine geschlossene Polylinie darum erhalten. Bögen bleiben Bögen. Inseln umrandet auch die Flächen darin. |
| `BOX` |  | Ein Quader: zwei Ecken und eine Höhe (3D) |
| `BPARAMETER` | `BPARAM` | Noch nicht umgesetzt: einen Parameter (etwa Sichtbarkeit) zu einem Block hinzufügen. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blockparameter: benannte Parameter mit Formeln und mehrere Sichtbarkeitsparameter in einem Block. Funktioniert im Blockeditor (die gewählten Objekte einem Zustand zuweisen) und an einer gewählten Referenz (eigene Werte und Zustände). |
| `BREAK` | `BR` | Eine Linie, einen Bogen, einen Kreis oder eine Polylinie zwischen zwei Punkten unterbrechen (BR) |
| `BREAKATPOINT` |  | Eine Linie, einen Bogen oder eine Polylinie an einem Punkt in zwei teilen |
| `BREAKLINE` |  | Eine Linie mit Bruchsymbol zeichnen; Größe und Überstand über die Enden werden gemerkt. |
| `BREPLACE` |  | BREPLACE ersetzt einen Block durch einen anderen. Ausgewählt: Blockreferenzen wählen und den Block nennen, der stattdessen verwendet werden soll. Alle: einen Block und seinen Ersatz nennen; jede Referenz in jedem Bereich und in anderen Blöcken ändert sich. Eine Referenz behält ihre Stelle, Skalierung, Drehung und ihren Layer sowie die Werte von Attributen, die beide Blöcke haben; Werte, für die der neue Block keinen Platz hat, werden verworfen und genannt. |
| `BSEARCH` |  | BSEARCH findet Blöcke. Name: ein Teil eines Blocknamens oder ein Muster mit * und ?. Attribut: ein Wert (oder TAG=Wert), den die Attribute einer Referenz haben. Geometrie: Objekte oder eine Blockreferenz wählen; die Blöcke, deren Form mindestens zu 85 % gleich ist, werden aufgelistet, die besten zuerst; Größe, Drehung und Spiegelung zählen nicht. Die gefundenen Referenzen im offenen Bereich werden ausgewählt und sind für den nächsten Befehl bereit. |
| `BURST` |  | Blockreferenzen zerlegen und behalten, was ihre Attribute sagen: jeder Wert wird zu Text auf dem Layer des Attributs. |
| `BVHIDE` | `BVH` | Im Blockeditor: Objekte im aktuellen Sichtbarkeitszustand ausblenden. |
| `BVSHOW` | `BVSH` | Im Blockeditor: Objekte anzeigen, die der aktuelle Sichtbarkeitszustand ausblendet (sie erscheinen verblasst, zur Auswahl). |
| `BVSTATE` | `BVS` | Im Blockeditor, bei einem Block mit Sichtbarkeitszuständen: zu einem Zustand wechseln oder einen hinzufügen, umbenennen oder löschen. |
| `CAL` |  | Eine Länge oder Zahl berechnen: + − * / und Klammern, wie Sie sie überall eingeben |
| `CENTERLINE` | `CL` | Mittellinie zwischen zwei Linien: genau in der Mitte zwischen ihnen oder entlang der Winkelhalbierenden, wenn sie sich treffen (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Mittelpunktmarkierung: ein Kreuz im Mittelpunkt eines Kreises oder Bogens, mit Mittellinien bis knapp darüber hinaus (CM) |
| `CHAMFER` | `CHA` | Die Ecke zwischen zwei Linien fasen (D zwei Abstände, A Länge und Winkel, P jede Ecke einer Polylinie) |
| `CHSPACE` |  | CHSPACE: Objekte zwischen einem Blatt und dem Modell über ein Ansichtsfenster verschieben. Sie werden so skaliert und gedreht, dass sie von der anderen Seite gleich aussehen. Auf einem Blatt gehen sie ins Modell; während Sie durch ein Ansichtsfenster arbeiten (MSPACE), kommen sie aufs Blatt. |
| `CIRCLE` | `C` | Mittelpunkt und Radius, Durchmesser, 2 oder 3 Punkte |
| `CLASS` |  | Die gewählten Objekte in eine Klasse legen, oder ohne Auswahl die aktive Klasse festlegen (? listet sie auf) |
| `CLASSES` | `CLS` | Das Panel Klassen: Klassen sortieren Objekte über Layer hinweg; anzeigen, ausblenden und gestalten sowie je Ansichtsfenster überschreiben (CLS) |
| `COMMANDLINE` | `CMDLINE` | Die Befehlszeile andocken oder lösen, auf eine Zeile bringen, ihre Verlaufszeilen festlegen oder den Verlauf öffnen (F2) |
| `COMPARESETTINGS` | `CMPSET` | Bemaßungsstile, Textstile, Layer, Blätter oder Einheiten vergleichen: zwei in dieser Zeichnung oder diese Zeichnung mit einer anderen offenen, und einen Wert hinüberkopieren. |
| `CONSTRAINTBAR` | `CBAR` | Die Abhängigkeitsleisten ein- oder ausblenden (Alle anzeigen / Alle ausblenden, oder je Objekt) |
| `COPY` | `CO`, `CP` | Objekte kopieren, so oft Sie klicken |
| `COPYBASE` |  | Objekte mit einem Basispunkt, den Sie wählen, in die Zwischenablage kopieren |
| `COPYCLIP` |  | Objekte in die Zwischenablage kopieren (Ctrl+C); PASTECLIP fügt sie ein |
| `COUNT` | `BCOUNT` | Blockreferenzen zählen: eine wählen, um jede Referenz ihres Blocks auszuwählen und zu zählen |
| `COUNTTABLE` |  | Eine Tabelle mit Blockanzahlen platzieren |
| `CREDITS` |  | Legt die Nachweise der Bibliothek als Tabelle in die Zeichnung. Erneut ausführen, um die Tabelle aus den Elementen der Zeichnung jetzt zu aktualisieren. |
| `CURSORSIZE` |  | Die Größe des Fadenkreuzes: 100 läuft von Rand zu Rand über die Zeichnung (Einstellungen › Cursor › Vollbild) |
| `CUTCLIP` |  | Objekte in die Zwischenablage ausschneiden (Ctrl+X): kopieren, dann löschen |
| `CYLINDER` | `CYL` | Ein Zylinder: Mittelpunkt, Radius und Höhe (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Blöcke, ihre Attribute und Objekteigenschaften als Tabelle in der Zeichnung oder als CSV-Datei auflisten |
| `DATALINK` | `DL` | Eine Tabelle aus einer CSV-Datei, die sich die Datei merkt, damit sie erneut gelesen werden kann |
| `DATALINKUPDATE` | `DLU` | Die Datei einer Datenverknüpfung erneut lesen und ihre Tabellen neu füllen |
| `DCALIGNED` | `DCALI` | Bemaßungsabhängigkeit: wahrer Abstand zwischen Punkten, einem Punkt und einer Linie oder zwei Linien |
| `DCANGULAR` | `DCANG` | Bemaßungsabhängigkeit: Winkel zwischen zwei Linien oder eines Bogens |
| `DCCONVERT` |  | Bemaßungen auf abhängigkeitsfähiger Geometrie in Bemaßungsabhängigkeiten umwandeln |
| `DCDIAMETER` | `DCDIA` | Bemaßungsabhängigkeit: Durchmesser eines Kreises oder Bogens |
| `DCDISPLAY` |  | Bemaßungsabhängigkeiten in der Zeichnung ein- oder ausblenden |
| `DCHORIZONTAL` | `DCHOR` | Bemaßungsabhängigkeit: horizontaler Abstand |
| `DCLINEAR` | `DCLIN` | Bemaßungsabhängigkeit: horizontaler oder vertikaler Abstand, ab der Stelle, an der Sie ihn setzen |
| `DCRADIUS` | `DCRAD` | Bemaßungsabhängigkeit: Radius eines Kreises oder Bogens |
| `DCVERTICAL` | `DCVER` | Bemaßungsabhängigkeit: vertikaler Abstand |
| `DELBLOCKS` |  | Blöcke löschen: jede Referenz (auch verschachtelte, auf jedem Blatt) und die Definitionen |
| `DELCONSTRAINT` | `DELCON` | Jede Abhängigkeit (geometrisch und bemaßt) von den gewählten Objekten entfernen |
| `DELOPENING` |  | Eine Tür oder ein Fenster aus einer Wand entfernen. |
| `DESCRIBE` | `DESC` | Sagt, was die Zeichnung enthält: wie viele Objekte, welche Art, wie groß, was ausgewählt ist. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Die Auswahl aufheben (Esc) |
| `DETAILS` | `DET` | Die eigenen Konstruktionsdetails Ihres Büros, passend zu dem, was Sie zeichnen: suchen, Block hinzufügen, auflisten, entfernen, die Vorschläge ein- oder ausschalten. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Ein Diagramm aus Text zeichnen: ein Mermaid-Flussdiagramm, ein PlantUML-Komponentendiagramm, D2, eine Von-nach-Liste oder draw.io-XML, als bearbeitbare Blöcke und Verbindungen |
| `DIMALIGNED` | `DAL`, `DIMALI` | Wahrer Abstand zwischen zwei Punkten |
| `DIMANGULAR` | `DAN`, `DIMANG` | Winkel zwischen zwei Linien, eines Bogens oder über drei Punkte |
| `DIMARC` | `DAR` | Bogenlängenbemaßung: der Abstand entlang eines Bogens, mit dem Bogensymbol (DAR) |
| `DIMASZ` |  | Bemaßungseinstellung: Pfeilgröße |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Bemaßungen, die von einer Grundlinie aus gestapelt sind |
| `DIMBREAK` | `DBREAK` | Maß- und Hilfslinien dort unterbrechen, wo sie andere Objekte kreuzen (Auto), zwischen zwei Punkten (Manuell) oder die Unterbrechungen entfernen |
| `DIMCONSTRAINT` | `DCON` | Bemaßungsabhängigkeiten: linear, ausgerichtet, Winkel, Radius, Durchmesser, umwandeln |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Eine Kette von Bemaßungen, jede ab dem Ende der letzten |
| `DIMDEC` |  | Bemaßungseinstellung: Nachkommastellen |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Durchmesser eines Bogens oder Kreises |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Bemaßungen von den Objekten lösen, an die sie gebunden sind (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Bemaßungstext ändern (Start, Neuer Text, Drehen) oder die Maßhilfslinien schräg stellen (Schräg) |
| `DIMEXE` |  | Bemaßungseinstellung: Überstand über die Maßlinie |
| `DIMEXO` |  | Bemaßungseinstellung: Versatz vom Ursprung |
| `DIMGAP` |  | Bemaßungseinstellung: Abstand um den Text |
| `DIMINSPECT` |  | Prüfmaß: ein Rahmen um den Wert mit einer Bezeichnung und wie oft das Teil geprüft wird |
| `DIMJOGGED` | `DJO`, `JOG` | Abgeknickte Radiusbemaßung: ein Radius, der von einem näheren Punkt gezeichnet wird, wenn der Mittelpunkt weit entfernt liegt (DJO) |
| `DIMJOGLINE` | `DJL` | Ein Knicksymbol an eine lineare oder ausgerichtete Maßlinie setzen, um zu zeigen, dass der Abstand nicht maßstäblich gezeichnet ist (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Horizontaler oder vertikaler Abstand (R für jeden Winkel) |
| `DIMLUNIT` |  | Bemaßungseinstellung: Längenformat (1 wissenschaftlich, 2 Dezimal, 3 Ingenieur, 4 Architektur, 5 Bruch) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinatenbemaßung: der X- oder Y-Abstand eines Punktes vom Ursprung des BKS, auf einer Führungslinie (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Bemaßungsvariablen an gewählten Bemaßungen überschreiben, ohne ihren Stil zu ändern; Löschen setzt den Stil zurück (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius eines Bogens oder Kreises |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Die Punkte einer Bemaßung an Objekte binden, sodass sie folgt und neu misst, wenn diese sich bewegen (DRE) |
| `DIMSCALE` |  | Bemaßungseinstellung: Gesamtmaßstab (Größen × dieser Wert) |
| `DIMSPACE` |  | Gleichmäßiger Abstand zwischen parallelen Bemaßungen, von einer Grundbemaßung aus gemessen (0 richtet sie aus, Auto ist die doppelte Texthöhe) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Benannte Bemaßungsstile erstellen, ändern, als aktuell festlegen, löschen, anwenden und vergleichen (der Dialog; -DIMSTYLE in der Befehlszeile) |
| `DIMTEDIT` | `DIMTED` | Bemaßungstext nach links, rechts oder in die Mitte der Maßlinie verschieben oder drehen |
| `DIMTEXTUNIT` | `DTU` | Bemaßungstext in mm, cm, m oder km oder in den eigenen Einheiten der Zeichnung: die gewählten Bemaßungen, sonst neue (DTU) |
| `DIMTXT` |  | Bemaßungseinstellung: Texthöhe |
| `DIST` | `DI` | Abstand und Winkel zwischen zwei Punkten |
| `DISTRIBUTE` |  | Gewählte Objekte gleichmäßig verteilen, seitlich oder oben und unten: gleiche Schritte zwischen den Mittelpunkten oder gleiche Abstände; die äußeren zwei bleiben |
| `DIVIDE` | `DIV` | DIVIDE (DIV): Markierungen, die eine Linie, einen Bogen, einen Kreis, eine Polylinie, einen Spline oder eine Ellipse in gleiche Teile schneiden. Punkte, oder mit Block ein Block an jeder Markierung. |
| `DOCUMENTS` | `DOCS` | Das Panel Dokumente öffnen: Zeichnungen aus- und einchecken, Revisionen, Freigabestände und Genehmigung für einen Projektordner prüfen |
| `DOOR` | `DR` | Eine Tür in eine Wand setzen. Die Seite, auf die Sie klicken, ist die Seite, in die sie schwingt. |
| `DRAWORDER` |  | Die Zeichenreihenfolge ändern: Objekte nach vorne bringen, nach hinten schicken oder über oder unter andere Objekte setzen. |
| `DUPLICATE` | `DUP` | Eine Kopie, die dem Zeiger folgt: klicken, um sie abzusetzen (Ctrl+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Die Eigenschaften der Zeichnung: Titel, Autor und das Übrige sowie Ihre eigenen Namen-Wert-Paare |
| `DXFOUT` |  | Die Zeichnung als DXF R12 herunterladen (Speichern behält ihr eigenes Format) |
| `EATTEDIT` | `DDATTE` | Attribute einer Blockreferenz bearbeiten: Werte, Text und Eigenschaften, jeweils ein Attribut |
| `ELLIPSE` | `EL` | Endpunkte der Hauptachse und die andere Halbachse |
| `ERASE` | `E`, `DELETE` | Objekte löschen |
| `EXPLODE` | `X` | Polylinien, Blöcke und Bemaßungen in ihre Teile zerlegen |
| `EXPORT` | `EXP` | Eine Kopie der Zeichnung in einem Dateityp speichern, den ein Add-on schreibt |
| `EXPORT3D` | `3DEXPORT` | Das 3D-Modell exportieren: GLB, OBJ oder STL |
| `EXPORTPOINTS` | `EXPPTS` | Punkte und, bei Blöcken mit einem Attribut als Beschreibung, Einfügepunkte in eine CSV- oder TXT-Datei schreiben (PNEZD, PENZD oder XYZ) für BIM- und Vermessungsprogramme |
| `EXTEND` | `EX` | Objekte verlängern, bis sie andere treffen: nahe einem Ende klicken, über mehrere ziehen oder Shift+Klick zum Stutzen |
| `EXTRIM` |  | EXTRIM: eine Schneidkante wählen, dann eine Seite. Alles, was die Kante kreuzt, wird auf dieser Seite gestutzt. Die Teile, die entfallen würden, erscheinen, während Sie den Zeiger bewegen. |
| `EXTRUDE` | `EXT` | Geschlossene 2D-Objekte zu Volumenkörpern extrudieren (3D) |
| `FIELD` |  | Ein Feld in einen Text, eine Tabellenzelle oder ein Attribut setzen: ein Datum, den Dateinamen, die Blattnummer, eine Zeichnungseigenschaft, Fläche oder Länge eines Objekts oder eine Formel |
| `FILLET` | `F` | Die Ecke zwischen zwei Objekten abrunden oder eckig machen (R Radius, P jede Ecke einer Polylinie, M mehrere) |
| `FIND` |  | Wörter in Text, Attributwerten und Bemaßungstext suchen und ersetzen |
| `FLATTEN` |  | Höhe (Z) und Dicke der gewählten Objekte auf 0 setzen, auch in den Blöcken, die sie verwenden. |
| `FLOOR` |  | Das Geschoss wählen, auf dem gezeichnet wird, ein neues hinzufügen, oder die Auswahl auf eines verschieben oder kopieren. |
| `FLOORLAYERS` |  | Geschosse in Layer namens Floor-Layer umwandeln, für eine Datei, die an jemanden ohne Geschosse geht. |
| `FLOORS` | `FLR` | Das Panel Geschosse öffnen: Geschosse in einem Modellbereich übereinanderstapeln. |
| `GCCOINCIDENT` |  | Abhängigkeit: zwei Punkte liegen deckungsgleich, oder ein Punkt bleibt auf einem Objekt |
| `GCCOLLINEAR` |  | Abhängigkeit: zwei Linien bleiben auf einer Geraden |
| `GCCONCENTRIC` |  | Abhängigkeit: zwei Kreise oder Bögen bleiben konzentrisch |
| `GCEQUAL` |  | Abhängigkeit: zwei Linien bleiben gleich lang, oder zwei Kreise/Bögen bleiben im gleichen Radius |
| `GCFIX` |  | Abhängigkeit: ein Punkt oder ein ganzes Objekt bleibt, wo es ist |
| `GCHORIZONTAL` |  | Abhängigkeit: eine Linie (oder zwei Punkte) bleibt horizontal |
| `GCPARALLEL` |  | Abhängigkeit: zwei Linien bleiben parallel |
| `GCPERPENDICULAR` |  | Abhängigkeit: zwei Linien bleiben im rechten Winkel zueinander |
| `GCSYMMETRIC` |  | Abhängigkeit: zwei Punkte, Linien oder Kreise spiegeln sich über eine Linie |
| `GCTANGENT` |  | Abhängigkeit: eine Linie und ein Kreis oder Bogen (oder zwei davon) bleiben tangential |
| `GCVERTICAL` |  | Abhängigkeit: eine Linie (oder zwei Punkte) bleibt vertikal |
| `GDSIN` | `GDS` | Ein IC-Layout ansehen (eine GDSII-Stream-Datei): jeder Layer und Datentyp als Zeichnungslayer, flach, in Benutzereinheiten; nur zum Ansehen und Messen (Laborversuch) |
| `GEOMCONSTRAINT` | `GCON` | Geometrische Abhängigkeiten: horizontal, vertikal, parallel, tangential, deckungsgleich … |
| `GLBOUT` |  | Das 3D-Modell als GLB (glTF) exportieren |
| `GRADIENT` | `GD` | Füllt eine Fläche mit einem Farbverlauf aus einer oder zwei Farben |
| `GRIDMOVE` | `GM` | Eine Rasterlinie verschieben und alles mitnehmen, was daran hängt: Wände werden gestreckt, Stützen, Achskreise und Markierungen wandern mit, Bemaßungen folgen. |
| `GROUP` | `G` | GROUP (G): den gewählten Objekten einen gemeinsamen Namen geben. Ein Klick auf eines davon wählt dann alle. Enter beim Namen erstellt eine Gruppe ohne Namen. |
| `GROUPEDIT` |  | GROUPEDIT: eine Gruppe ändern. Wählen Sie eines ihrer Objekte oder geben Sie ihren Namen an, dann Objekte hinzufügen (A) oder entfernen (R), umbenennen (RE), ihre Beschreibung ändern oder festlegen, ob ein Klick sie ganz auswählt. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Eine Fläche mit einer Vollfläche oder einem Muster füllen: innerhalb klicken oder geschlossene Objekte wählen (H) |
| `HATCHEDIT` | `HE` | Eine Schraffur ändern: Muster, Maßstab, Winkel, Ursprung und ihre Verbindung zu einer Begrenzung. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Erstellt die Begrenzungspolylinien aus einer Schraffur neu, verbunden oder nicht |
| `HATCHTOBACK` |  | Jede Schraffur hinter alles andere schicken. |
| `HELP` | `?` | Diese Liste |
| `HIDEOBJECTS` |  | Die gewählten Objekte bis UNISOLATEOBJECTS ausblenden. Wird nicht mit der Zeichnung gespeichert. |
| `HISTORY` | `HIST` | HISTORY (HIST): die Versionen dieser Zeichnung — Kopien, die auf diesem Computer aufbewahrt werden, wenn Studio speichert, und die Versionen der Cloud — zum Öffnen, Wiederherstellen und Vergleichen mit den farbig markierten Änderungen. |
| `ID` |  | Koordinaten eines Punktes |
| `IMAGE` | `IM` | CadCraft die Bilddateien geben, die eine Zeichnung verwendet (eine DWG speichert nur, wo sie waren). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Ein Bild (PNG oder JPEG) aus einer Datei platzieren. |
| `IMAGECLIP` | `ICL` | Ein Bild auf ein Rechteck oder Polygon beschneiden oder den Beschnitt entfernen. |
| `IMPORT` | `IMP` | Eine Datei einer Art, die ein Add-on liest, in diese Zeichnung importieren |
| `INSERT` | `I`, `DDINSERT` | Einen Block platzieren (S Skalierung, R drehen); F aus einer DWG/DXF-Datei, L aus der Bibliothek |
| `INTERSECT` | `IN` | Nur behalten, was Volumenkörper gemeinsam haben (3D), oder die Fläche, die 2D-Regionen gemeinsam haben |
| `ISODRAFT` |  | ISODRAFT: isometrisches Zeichnen ein- oder ausschalten oder direkt auf der Links-, Oben- oder Rechts-Ebene. Solange es eingeschaltet ist, folgen Ortho und Polare Spur den zwei Achsen der Ebene, das Raster wird isometrisch gezeichnet und ELLIPSE hat Isokreis. |
| `ISOLATEOBJECTS` | `ISOLATE` | Nur die gewählten Objekte zeigen; alles andere in diesem Bereich ist bis UNISOLATEOBJECTS ausgeblendet. Wird nicht mit der Zeichnung gespeichert. |
| `ISOPLANE` |  | ISOPLANE: die isometrische Ebene wählen, auf der gezeichnet wird: Links, Oben oder Rechts. Enter geht zur nächsten, wie F5 bei eingeschaltetem isometrischem Zeichnen. |
| `JOIN` | `J` | Linien, Bögen und Polylinien, die Ende an Ende zusammentreffen, zu einer Polylinie verbinden; Linien auf einer Geraden zu einer Linie (J) |
| `LASER` | `LASERCUT` | Das Panel Laser öffnen: Layer an einen Laserschneider oder Gravierer senden (GRBL G-Code) |
| `LASSOMODE` |  | Drücken und Ziehen zeichnet ein Lasso (1) oder ein Rechteck (0) |
| `LAYDEL` |  | Einen Layer und jedes Objekt darauf löschen (im Modell, auf Blättern und in Blöcken) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Den Layer-Manager öffnen: jeder Layer in einer Tabelle |
| `LAYERPANEL` |  | Das Panel Layer anzeigen |
| `LAYFRZ` |  | Den Layer jedes Objekts, das Sie wählen, einfrieren |
| `LAYGROUP` | `LG` | Layer im Panel Layer in Ordnern gruppieren. |
| `LAYISO` |  | Die Layer der gewählten Objekte isolieren (alle anderen Layer aus) |
| `LAYLOCKFADE` |  | Festlegen, wie stark Objekte auf gesperrten Layern verblassen und ob ein Klick sie auswählen kann. |
| `LAYMCUR` |  | Den Layer des Objekts, das Sie wählen, aktuell machen |
| `LAYMRG` |  | Layer zusammenführen: ihre Objekte wandern auf einen Ziel-Layer, und die zusammengeführten Layer verschwinden |
| `LAYOFF` |  | Den Layer jedes Objekts, das Sie wählen, ausschalten |
| `LAYON` |  | Jeden Layer einschalten |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Ein neues Blatt mit einem Schriftfeld und einem Ansichtsfenster |
| `LAYTHW` |  | Jeden Layer auftauen |
| `LAYUNISO` |  | Die Layer wieder einschalten, die LAYISO ausgeschaltet hat |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Wandelt Text, der mit alten vietnamesischen Schriften geschrieben wurde (TCVN3- / ABC-Schriften wie .VnTime und VNI-Schriften wie VNI-Times), in Unicode um. Solcher Text wird bereits so angezeigt, wie er gelesen wird; dieser Befehl schreibt ihn endgültig um, mit Zählung und einem Rückgängig-Schritt. |
| `LENGTHEN` | `LEN` | Linien, Bögen und Polylinien verlängern oder kürzen: um einen Betrag, um einen Prozentsatz, auf eine Gesamtlänge oder durch Ziehen (LEN) |
| `LIBRARY` | `LIB` | Das Panel Bibliothek: Elemente platzieren, auf Aktualisierungen prüfen, Nachweise |
| `LIMITS` |  | Die Zeichnungsgrenzen festlegen: Ein (ON), Aus (OFF) oder die untere linke und obere rechte Ecke. Bei eingeschalteten Grenzen werden Punkte außerhalb abgelehnt. |
| `LINE` | `L` | Gerade Abschnitte, jeder ein eigenes Objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Der Linientyp, den neue Objekte erhalten (VonLayer, VonBlock oder ein benannter) |
| `LINKVIEWS` | `SYNCVIEWS` | Pan und Zoom für alle Ausschnitte gemeinsam (geteilter Bildschirm), um zwei Zeichnungen oder Revisionen zu vergleichen |
| `LISPEDIT` | `VLIDE` | LISPEDIT (oder VLIDE) öffnet den LISP-Editor: ein Fenster, um eine Routine zu schreiben, zu laden und auszuprobieren. In die Zeichnung laden liest jede Form, wie das Laden der Datei mit APPLOAD, und macht ihre Befehle verfügbar. Auswahl ausführen wertet die gewählten Formen aus oder die Form, in der der Cursor steht. Die Konsole zeigt, was die Routine ausgegeben hat, und jeden Fehler mit seiner Zeile. Die passende Klammer wird beim Tippen markiert, und Enter rückt die neue Zeile ein. Neu, Öffnen und Speichern arbeiten mit einer .lsp-Datei. Die Listen neben dem Text zeigen die Funktionen, die die Routine definiert, die, die sie aufruft und dieses LISP noch nicht hat, und alle Funktionen, die sie hat. Das Fenster blockiert die Zeichnung nicht, sodass eine Routine nach Punkten fragen kann; Stopp oder Esc beendet eine laufende Routine. |
| `LIST` | `LI`, `LS` | Objekte im Verlauf beschreiben |
| `LTSCALE` | `LTS` | Der Linientypfaktor der Zeichnung (jede Strich- und Lückenlänge wird damit multipliziert) |
| `LWDISPLAY` | `LWT` | Linienstärken auf dem Bildschirm ein- oder ausblenden (die Schaltfläche LST in der Statusleiste) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Die Linienstärke, die neue Objekte erhalten (VonLayer, VonBlock, Standard oder mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Karten-Layer unter dem Modellbereich: das Koordinatensystem der Zeichnung, Kacheln, WMS, WMTS, ArcGIS, Bilder |
| `MASSPROP` |  | MASSPROP: Querschnittswerte von Regionen und geschlossenen Objekten: Fläche, Umfang, Schwerpunkt, Momente und Deviationsmoment, Trägheitsradien und Hauptachsen. Exakt für Linien und Bögen. Kann den Bericht in eine Textdatei schreiben. |
| `MATCHPROP` | `MA`, `PAINTER` | Eigenschaften übertragen: den Layer, die Farbe und mehr eines Objekts auf andere kopieren (MA) |
| `MEASURE` | `ME` | MEASURE (ME): eine Markierung in jedem angegebenen Abstand entlang einer Linie, eines Bogens, Kreises, einer Polylinie, eines Splines oder einer Ellipse, vom Ende aus, das Ihrem Punkt am nächsten liegt. Punkte, oder mit Block ein Block an jeder Markierung. |
| `MEASUREGEOM` | `MEA` | Einen Abstand, Radius, Winkel oder eine Fläche messen (MEA) |
| `MINSERT` |  | MINSERT: einen Block in einem Zug in Zeilen und Spalten platzieren. Jeder ist eine eigene Referenz, sodass Sie jede verschieben oder löschen können. |
| `MIRROR` | `MI` | Objekte über eine Linie spiegeln |
| `MLEADER` | `MLD`, `MLEAD` | Multi-Führungslinie: ein Pfeil, eine Führungslinie und eine Notiz als ein Objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Multi-Führungslinien an einer von ihnen entlang einer Richtung ausrichten, mit gleichem Abstand oder zwischen zwei Punkten verteilt (MLA) |
| `MLEADERCOLLECT` | `MLC` | Mehrere Multi-Führungslinien zu einer zusammenfassen: ihre Blöcke in einer Zeile oder Spalte oder ihre Notizen untereinander (MLC) |
| `MLEADEREDIT` | `MLE` | Führungslinien zu einer Multi-Führungslinie hinzufügen oder entfernen; ihren Inhalt zwischen Text und Block umschalten (MLE) |
| `MLINE` |  | Parallele Linien zusammen zeichnen, an den Ecken verbunden. |
| `MOVE` | `M` | Objekte um einen Basispunkt und einen zweiten Punkt verschieben |
| `MSPACE` | `MS` | Am Modell durch ein Ansichtsfenster des offenen Blatts arbeiten (oder im Ansichtsfenster doppelklicken). |
| `MTEXT` | `MT`, `T` | Mehrzeiliger Text: Breite ziehen, dann direkt eingeben; Enter beginnt einen neuen Absatz (T) |
| `MVIEW` | `MV` | Ein Ansichtsfenster auf das Modell, auf einem Blatt (MV) |
| `NAMEDVIEW` | `NV`, `VIEWS` | Benannte Ansichten: die Ansicht auf dem Bildschirm (oder ein Fenster) unter einem Namen speichern und dorthin zurückkehren (NV) |
| `NCOPY` |  | Objekte aus einer Blockreferenz oder einer verknüpften Zeichnung in die Zeichnung kopieren, ohne sie zu zerlegen. |
| `NEARBY` |  | Sagt, was nahe am Cursor liegt, das Nächste zuerst, mit Abstand und Seite. |
| `NEW` |  | Eine neue Zeichnung beginnen |
| `OBJECTSCALE` | `OBJSCALE` | Beschriftungsmaßstäbe beschriftungsfähiger Texte und Bemaßungen: einen Maßstab hinzufügen, löschen, den aktuellen Maßstab hinzufügen oder sie auflisten (jedes Ansichtsfenster zeigt sie in der Größe für seinen eigenen Maßstab) |
| `OBJOUT` |  | Das 3D-Modell als OBJ exportieren |
| `OFFSET` | `O` | Versetzen: parallele Kopien in einem Abstand (O) |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: wie OFFSET die Lücken an den äußeren Ecken einer Polylinie schließt. 0 verlängert die Segmente, 1 fügt einen Bogen hinzu, 2 fügt einen geraden Schnitt hinzu. Gilt für diese Sitzung. |
| `OLELIST` | `OLES` | Die OLE-Objekte auflisten, die eine Zeichnung enthält, und eine Kopie des Bildes eines davon an der gewünschten Stelle platzieren |
| `OPEN` |  | Eine DWG oder DXF von diesem Computer öffnen |
| `OPENIN3D` |  | Diese Zeichnung in der 3D-Modellierungs-App in einem neuen Tab öffnen (nichts wird hochgeladen) |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Das Menü Objektfang öffnen: wählen, welche Fänge an sind. Auch ein Rechtsklick auf Fang in der Statusleiste. |
| `OVERKILL` |  | Doppelte Objekte löschen und sich überlappende oder Ende-an-Ende-Linien und -Bögen innerhalb einer Toleranz zusammenführen. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Das Panel Parameter: Benutzerparameter und Bemaßungsabhängigkeiten in einer Tabelle |
| `PARTSLIST` | `PLIST` | Eine Teileliste aller Normteile und Stahlprofile, die aus der Bibliothek platziert wurden |
| `PASTEAREA` | `PAREA` | Einen Bereich, der in MarkupCraft kopiert wurde (Bereich kopieren), in wahrer Größe als Bild einfügen. |
| `PASTEBLOCK` |  | PASTEBLOCK: fügt ein, was Sie kopiert haben, als einen Block. Der Block erhält einen eigenen Namen; RENAME gibt ihm Ihren. |
| `PASTECLIP` |  | Die Zwischenablage einfügen: sie folgt dem Cursor, klicken Sie, wo sie hinkommt (Ctrl+V) |
| `PASTEORIG` |  | Die Zwischenablage an den Koordinaten einfügen, von denen sie kopiert wurde (Ctrl+Shift+V) |
| `PDF` |  | CadCraft die PDF-Dateien geben, die die Unterlagen der Zeichnung verwenden |
| `PDFADJUST` |  | Eine PDF-Unterlage verblassen lassen, im Kontrast ändern, einfarbig machen oder ausschalten |
| `PDFATTACH` | `PDFATT` | Eine PDF-Seite als Unterlage anfügen (PDFATTACH) |
| `PDFCLIP` |  | Eine PDF-Unterlage auf ein Rechteck oder Polygon beschneiden |
| `PDFIMPORT` | `PDFIM` | Linien, Füllungen und Text einer PDF-Seite in Zeichnungsobjekte umwandeln (PDFIMPORT) |
| `PDFLAYERS` |  | Die Layer einer PDF-Unterlage ein- oder ausschalten |
| `PEDIT` | `PE` | Eine Polylinie bearbeiten: schließen, öffnen, verbinden, Breite, Kurve anpassen, Spline-Kurve, Kurve auflösen, Linientyp-Erzeugung, umkehren; Linien, Bögen und Splines können in Polylinien umgewandelt werden (PE) |
| `PHOTOSKETCH` | `PSK` | Wandelt ein Foto einer Handskizze auf Papier in maßstäbliche Linien und Bögen um, richtet die Perspektive gerade und gibt jeder Stiftfarbe einen eigenen Layer (PSK) |
| `PICKSTYLE` |  | PICKSTYLE: ob die Auswahl eines Objekts einer Gruppe die ganze Gruppe wählt (1, die Ausgangseinstellung) oder nur dieses Objekt (0). Gilt für diese Sitzung. |
| `PLAN` |  | Die Ansicht so drehen, dass die X-Achse des BKS (aktuelles BKS, ein gespeichertes BKS oder das Weltkoordinatensystem) auf dem Bildschirm waagerecht liegt. Nichts in der Zeichnung wird verschoben. |
| `PLINE` | `PL` | Eine Polylinie aus Linien- und Bogensegmenten |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Als PDF plotten: ein Layout oder das Modell in einem Maßstab |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plotstiltabellen: festlegen, wie jede Farbe druckt (Farbe, Schwarz, Grau, Tinte, Linienstärke); mit der Zeichnung gespeichert (STYLESMANAGER) |
| `POINT` | `PO` | Punktobjekte |
| `POINTCLOUD` | `PC` | Die angefügte Punktwolke: Schnitt, Höhe, Dicke, Farbe, Größe, sichtbar, Zoom, lösen |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Eine Punktwolke (LAS, LAZ, XYZ, PTS) unter der Zeichnung anfügen |
| `POLARANG` |  | Der Schritt der Polaren Spur in Grad (90, 45, 30, 22.5, 15 …) |
| `POLYGON` | `POL` | Ein regelmäßiges Polygon |
| `PRESSPULL` |  | Eine Fläche eines Volumenkörpers drücken oder ziehen (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Das Panel Eigenschaften öffnen (auch Ctrl+1 oder Doppelklick auf ein Objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Das Panel Eigenschaften an den Rand des Fensters einklappen |
| `PSPACE` | `PS` | Das Ansichtsfenster verlassen, in dem Sie arbeiten, und zurück zum Blatt gehen (oder außerhalb doppelklicken). |
| `PUBLISH` | `-PUBLISH` | Mehrere oder alle Blätter in eine PDF plotten (eine Seite und ein Lesezeichen pro Blatt) |
| `PURGE` | `PU` | Bereinigen: Blockdefinitionen entfernen, die nichts verwenden |
| `QDIM` |  | Schnellbemaßung: mehrere Objekte auf einmal bemaßen (fortlaufend, Grundlinie, versetzt, Koordinate, Radius oder Durchmesser) |
| `QPMODE` | `QP` | Schnelleigenschaften am Cursor ein- oder ausschalten |
| `QSELECT` | `QS` | Schnellauswahl: jedes Objekt eines Typs, dessen Layer, Farbe, Größe oder Name übereinstimmt (QS) |
| `RASTERSNAP` |  | Fang an den Linien gescannter Blätter ein- oder ausschalten. |
| `RAY` |  | Strahl: eine Konstruktionslinie von einem Punkt aus, in eine Richtung unbegrenzt. |
| `RECOVER` |  | Öffnet eine beschädigte DXF oder DWG: überspringt, was nicht gelesen werden kann, statt die Datei abzulehnen, sagt, was übersprungen wurde, und prüft und repariert dann die Zeichnung wie AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Eine geschlossene Polylinie aus zwei Ecken |
| `REDLINE` | `RDL` | Redline zu Revision: ein MarkupCraft-Redline-Paket lesen, jede Änderung annehmen oder ablehnen, die angenommenen mit Revisionswolken und einem Revisionsprotokoll versehen und die Antwortdatei speichern (RDL) |
| `REDO` |  | Wiederholen: das, was rückgängig gemacht wurde, erneut ausführen |
| `REFCLOSE` |  | Die Bearbeitung eines Blocks an Ort und Stelle beenden: speichern oder die Änderungen verwerfen |
| `REFEDIT` |  | Einen Block an Ort und Stelle bearbeiten, dort, wo eine seiner Referenzen liegt, der Rest der Zeichnung verblasst; REFCLOSE speichert ihn |
| `REGEN` | `RE` | Neu aufbauen, was in diesem Tab aus der Zeichnung gezeichnet ist (RE) |
| `REGENALL` | `REA` | Neu aufbauen, was in jedem Tab, Bereich und jeder offenen Zeichnung gezeichnet ist (REA) |
| `REGION` | `REG` | REGION (REG): flache Flächen (Regionen) aus geschlossenen Objekten machen, oder aus Linien, Bögen und Polylinien, die Ende an Ende eine Schleife schließen. UNION, SUBTRACT und INTERSECT verbinden Regionen dann, und MASSPROP gibt ihre Querschnittswerte an. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Mehrere Scans registrieren: sie in einem Rahmen über gewählte Punktpaare oder Zielmarken platzieren, mit ICP verfeinern, eine LAS- oder E57-Datei exportieren |
| `REINIT` |  | Ihre Aliasdatei neu laden |
| `RENAME` | `-RENAME`, `REN` | Einen Layer oder Block umbenennen (jedes Objekt oder jede Referenz folgt) |
| `REVCLOUD` | `RC` | Revisionswolke: um ein Rechteck, ein Polygon, einen Freihandpfad oder ein Objekt wolkig herum (RC) |
| `REVOLVE` | `REV` | Geschlossene 2D-Objekte um eine Achse zu Volumenkörpern drehen (3D) |
| `ROTATE` | `RO` | Objekte um einen Basispunkt drehen |
| `SAMPLES` | `SAMPLE` | Eine der Musterzeichnungen von CadCraft öffnen (ein Architektursatz, eine Ist-Zeichnung), um daraus zu lernen |
| `SAVE` | `QSAVE` | Die Zeichnung in ihrem Format (DWG oder DXF) herunterladen |
| `SAVEAS` |  | Die Zeichnung als DWG oder DXF herunterladen: auswählen, welches |
| `SAYSEL` |  | Sagt, was ausgewählt ist, je ein Satz pro Objekt. |
| `SCALE` | `SC` | Objekte um einen Basispunkt skalieren |
| `SCALELISTEDIT` | `SCALELIST` | Eigene Maßstäbe der Zeichnung hinzufügen, bearbeiten und löschen; sie erscheinen in den Listen der Ansichtsfenster- und Plotmaßstäbe und werden in der Datei gespeichert (SCALELIST) |
| `SCANALIGN` | `SCL` | Ein gescanntes Blatt an zwei Punkten ausrichten: verschieben, drehen und, wenn Sie es wählen, skalieren. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Eine gescannte Zeichnung einfügen: eine PNG-, JPEG- oder TIFF-Datei (eine Seite oder alle Seiten einer mehrseitigen Datei) oder eine PDF-Seite, die ein Bild ist. |
| `SCANCLEAN` | `SCC` | Ein gescanntes Blatt schwarzweiß machen und Flecken entfernen. |
| `SCANCROP` | `SCR` | Ein gescanntes Blatt auf ein Fenster zuschneiden. |
| `SCANDESKEW` | `SCD` | Den Winkel finden, in dem die langen Linien eines gescannten Blatts liegen, und das Blatt gerade drehen, sobald Sie den Winkel annehmen. |
| `SCANERASE` | `SCE` | Einen Bereich eines gescannten Blatts löschen: ein Rechteck, ein Polygon oder ein Lasso. |
| `SCANINFO` | `SCI` | Die ursprüngliche Datei eines gescannten Blatts und die seither ausgeführten Schritte anzeigen. |
| `SCANSCALE` | `SCS` | Ein gescanntes Blatt skalieren: zwei Punkte darauf wählen und den wahren Abstand dazwischen eingeben. |
| `SCANTRACE` | `SCT` | Ein gescanntes Blatt auf einem neuen Layer in Linien und Bögen nachzeichnen, mit einer Toleranz, die Sie festlegen. Text und Schraffuren bleiben als Raster. |
| `SELECT` |  | Objekte jetzt auswählen (für P, Vorherige, im nächsten Befehl) |
| `SELECTALL` | `AI_SELALL` | Jedes bearbeitbare Objekt auf diesem Tab auswählen (Ctrl+A) |
| `SELECTSIMILAR` | `SIM` | Jedes Objekt auswählen, das den gewählten ähnelt: gleicher Typ, Layer und Farbe (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Zeigt das Panel Blattsatz: Blätter aus vielen Zeichnungen, nummeriert, als eine PDF plotten. |
| `SHORTCUTS` | `KEYS` | Jedem Befehl eine eigene Taste geben (Ctrl oder Alt mit einem Buchstaben oder eine freie Funktionstaste), gespeichert in diesem Browser oder der Desktop-App. |
| `SHXFONTS` | `SHX` | CadCraft SHX-Schriften aus einem Ordner oder aus Dateien geben, damit Textstile, die sie nennen, damit zeichnen (auflisten, entfernen, umkehren) |
| `SKETCHFIX` | `SKF` | Freihand-Striche zeichnen; jeder wird zu einer sauberen Linie, einem Kreis, Bogen, Rechteck oder einer Polylinie, rechtwinklig gemacht und mit den anderen verbunden. |
| `SKETCHLIVE` | `SKL` | Mit einem Stift skizzieren: jeder Strich wird beim Abheben des Stifts zu einer präzisen Linie, einem Kreis, Bogen oder Rechteck, am Zeichnungsfang ausgerichtet, mit einer Größe, die Sie darüber eintippen. |
| `SPLINE` | `SPL` | Einen Spline durch Punkte zeichnen (oder mit einem Kontrollpolygon) oder eine Polylinie in einen Spline umwandeln |
| `SPLINEDIT` | `SPE` | Einen Spline bearbeiten: Passpunkte, Kontrollpunkte und Gewichte, öffnen oder schließen, umkehren oder in eine Polylinie umwandeln |
| `SPLIT` |  | Den Zeichnungsbereich in Teilfenster aufteilen (wie VPORTS im Modell; auch von einem Blatt aus) |
| `STEELMEMBER` | `SMEMBER` | Ein Stahlstab in 3D aus einem Normprofil: zwei Punkte (ein Träger) oder ein Basispunkt und eine Höhe (Stütze) |
| `STLOUT` |  | Das 3D-Modell als STL exportieren (Millimeter) |
| `STRETCH` | `S` | Strecken: ein Kreuzungsfenster über die Enden ziehen, um zu verschieben; was darin liegt, wandert, der Rest bleibt (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Textstile: die Schrift, Höhe, Breite und Neigung, die neuer Text erhält (der Dialog; -STYLE in der Befehlszeile) |
| `SUBTRACT` | `SU` | Volumenkörper von anderen abziehen (3D) oder 2D-Regionen von Regionen abziehen (SU) |
| `SWBOUT` | `SWMACRO` | Ein Makro für SolidWorks (.swb) herunterladen, das das Modell als eine einzige abhängige Skizze neu aufbaut |
| `SWEEP` |  | Geschlossene 2D-Objekte entlang eines Pfads (Linie, Polylinie, Bogen, Kreis) als Sweep zu Volumenkörpern machen (3D) |
| `TABLE` | `TB` | Eine Tabelle erstellen: Zeilen und Spalten, oder aus Tabellenzellen in der Zwischenablage oder einer CSV-Datei |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Eine Tabelle bearbeiten: in eine Zelle schreiben, Zeilen und Spalten einfügen und löschen, Größen, verbundene Zellen, Ausrichtung |
| `TABLEEXPORT` |  | Speichern, was eine Tabelle zeigt, als CSV-Datei |
| `TABLEPASTE` | `PASTETABLE` | Eine Tabelle aus Tabellenzellen in der Zwischenablage erstellen |
| `TABLESTYLE` | `TS` | Tabellenstile: Texthöhen, Ausrichtung, Rand und Linien für Titel-, Kopf- und Datenzeilen |
| `TAGS` |  | Tags an Blockreferenzen: einen Tag definieren (Art, zulässige Werte, Blöcke, für die er gilt), ihn den gewählten Referenzen zuweisen und sie als Liste auflisten, die Sie als CSV speichern können |
| `TEXT` | `DT`, `DTEXT` | Einzeiliger Text; Enter beginnt die nächste Zeile |
| `TEXTEDIT` | `ED`, `DDEDIT` | Text direkt bearbeiten: einen Text wählen (oder doppelklicken) (ED) |
| `TEXTMASK` | `TMASK` | Eine Hintergrundmaske hinter Texte legen (den Hintergrund der Zeichnung oder eine Farbe) oder sie entfernen. |
| `TEXTTOFRONT` |  | Allen Text, alle Bemaßungen und Führungslinien vor alles andere bringen. |
| `TOOLBAR` |  | Wählen, was die Symbolleistenschaltflächen zeigen: Symbole und Text, nur Symbole oder nur Text (Ctrl+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Die Symbolleiste oben, unten, links oder rechts am Fenster andocken |
| `TOOLBARROWS` |  | Wählen, wie viele Zeilen die Symbolleiste nutzt: umbrechen, 2 oder 1 (Shift+Ctrl+F1) |
| `TOPAREA` |  | Die Leisten über der Zeichnung auf Standard oder Kompakt stellen |
| `TOUCHCROSSHAIR` | `TCX` | Fadenkreuz mit Versatz zum Zeichnen mit dem Finger: ein Finger bewegt ein Fadenkreuz, das darüber und daneben sitzt, damit der Finger den Punkt nicht verdeckt. Das Loslassen des Fingers wählt nichts; die Schaltfläche Klick oder ein Tipp mit einem zweiten Finger wählt am Fadenkreuz, und Halten von Klick beim Bewegen zieht. Langes Drücken oder die Schaltfläche Enter ist Enter. Zwei Finger verschieben und zoomen. Optionen: Ein (ON), Aus (OFF), Auto (nur dort, wo ein Finger der einzige Zeiger ist), Abstand (D), Seite (S). |
| `TOUR` | `TUTORIAL` | Die sechsschrittige Anleitung zur ersten Zeichnung noch einmal machen |
| `TRIM` | `TR` | Objekte bis zu den Stellen kürzen, an denen andere sie kreuzen: ein Stück anklicken, über mehrere ziehen oder Shift+Klick zum Verlängern (TR) |
| `TRIMEXTENDMODE` |  | Wie TRIM und EXTEND starten: 1 Schnell (jedes Objekt ist eine Schneid- oder Begrenzungskante), 0 Standard (zuerst die Kanten wählen) |
| `TTR` |  | Ein Kreis, tangential an zwei Objekte, mit einem Radius, den Sie angeben (wie CIRCLE T) |
| `TURNLEFT` |  | Die Ansicht 90° nach links drehen (gegen den Uhrzeigersinn): BKS Z -90, und die Ansicht folgt. Nichts in der Zeichnung wird verschoben. |
| `TURNRIGHT` |  | Die Ansicht 90° nach rechts drehen (im Uhrzeigersinn): BKS Z 90, und die Ansicht folgt. Nichts in der Zeichnung wird verschoben. |
| `TURNWORLD` |  | Zurück zur Welt: BKS Welt, und die Ansicht ist wieder waagerecht. |
| `TXT2MTXT` | `T2M` | Einzeilige Texte zu einem mehrzeiligen Text verbinden, von oben nach unten. |
| `UCS` |  | Ihr eigenes Koordinatensystem: ein Ursprung und eine X-Achse (Ursprung, Z-Winkel, 3Punkt, OBjekt, Vorherige, Welt, Benannt). Eingegebene Punkte, Ortho, Polare Spur, das Raster und neuer Text folgen ihm; die Ansicht dreht sich, sodass ihre X-Achse waagerecht liegt. Nichts in der Zeichnung wird verschoben. |
| `UNDO` | `U` | Den letzten Befehl rückgängig machen (U) |
| `UNGROUP` |  | UNGROUP: Gruppen auflösen. Objekte der Gruppen wählen oder einen Namen angeben. Die Objekte bleiben in der Zeichnung. |
| `UNION` | `UNI` | Volumenkörper zu einem verbinden (3D) oder 2D-Regionen zu einer Region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Jedes Objekt wieder anzeigen, das ISOLATEOBJECTS oder HIDEOBJECTS ausgeblendet hat. |
| `UNITS` | `UN`, `DDUNITS` | Wie Längen angezeigt und eingegeben werden: Dezimal, Fuß und Zoll, Brüche (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Felder neu berechnen und wählen, wann sie sich von selbst aktualisieren |
| `USDOUT` |  | Das 3D-Modell als USD exportieren (.usda Text, .usdc binär oder ein .usdz-Paket) |
| `VIEW` | `-VIEW`, `V` | Standard-3D-Ansichten, perspektivisch oder parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Eine flache 2D-Ansicht der 3D-Volumenkörper platzieren (vorne, oben, seitlich oder isometrisch, verdeckte Linien gestrichelt) auf einem Blatt oder im Modell |
| `VIEWLABEL` | `VL` | Ein Ansichtstitel auf einem Blatt, der den Ansichtsnamen seines Ansichtsfensters zeigt und sich mit ihm ändert. |
| `VOICE` |  | Gesprochene Befehle ein- oder ausschalten. Sie werden auf diesem Computer erkannt. |
| `VPCLIP` |  | Ein Blatt-Ansichtsfenster auf ein geschlossenes Objekt oder ein gezeichnetes Polygon beschneiden; Delete macht es wieder zu einem Rechteck |
| `VPLAYER` |  | Layer nur in einigen Ansichtsfenstern einfrieren oder auftauen (Einfrieren, Auftauen, Zurücksetzen) und wählen, welche Layer neue Ansichtsfenster eingefroren beginnen (Vpvisdflt) |
| `VPORTS` | `VIEWPORTS` | Den Zeichnungsbereich in Teilfenster aufteilen, jedes mit eigener Ansicht (auf einem Blatt: ein Ansichtsfenster, wie MVIEW) |
| `VPVIEW` |  | Festlegen, was ein Ansichtsfenster zeigt: ein Fenster im Modell wählen |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visueller Stil der 3D-Ansicht: schattiert, Kanten, verdeckte Linien, Drahtmodell oder Röntgen |
| `WALL` | `WA` | 2D-Wände wie eine Polylinie zeichnen. Sie verbinden sich und tragen Türen und Fenster. |
| `WALLARC` | `WARC` | Einen Wandbogen zeichnen. Grundrisswände sind gerade, daher wird der Bogen als kurze gerade Wände (je 15 Grad) gezeichnet, die sich verbinden. |
| `WALLDELSEG` |  | Ein Stück einer Wand zwischen zwei Punkten löschen. Der Rest bleibt als eine oder zwei Wände. |
| `WALLDIM` |  | Einen neuen Wert für eine Bemaßung eingeben: die Wand an ihrem fernen Ende wird rechtwinklig zu sich selbst verschoben, die Wand am ersten Ende bleibt, und die daran angeschlossenen Wände folgen. |
| `WALLDISJOIN` |  | Eine Wand nahe einem Ende wählen, um Verbindungen an diesem Ende zu verbieten: das Ende wird rechtwinklig gezeichnet, und nichts folgt ihm. Erneut wählen, um sie wieder zu erlauben. |
| `WALLGRID` |  | Eine Wand an einer Rasterlinie festhalten: entlang ihr oder mit einem Ende auf ihr. Verschieben Sie die Linie mit GRIDMOVE, und die Wand folgt. |
| `WALLHOLD` |  | Ausrichten und sperren: eine Wand behält ihren Platz gegenüber einer anderen Wand (auf deren Linie oder im Abstand, den sie hat). Bewegt sich eine, folgt die andere. |
| `WALLHOLDDIM` |  | Den Abstand zwischen zwei parallelen Wänden sperren. Bewegt sich eine, folgt die andere, um ihn zu halten. |
| `WALLHOLDS` |  | Die Sperren der Wände auflisten. |
| `WALLJOINS` |  | Jeder Wand einer älteren Zeichnung ihre ID geben und die Verbindungen zwischen ihnen speichern. Das geschieht auch bei der ersten Änderung, die Sie vornehmen. |
| `WALLJOINSTYLE` |  | Auf eine Ecke klicken, an der zwei Wände Ende an Ende zusammentreffen, um zu ändern, wie sie gezeichnet wird: Gehrung, stumpf, eckig abschließen. T wechselt, welche Wand durchläuft. |
| `WALLOFFSET` | `WO` | Eine Wand um einen Abstand rechtwinklig zu sich selbst verschieben (die angeschlossenen Wände folgen), oder eine Kopie in diesem Abstand machen (WO). |
| `WALLPICK` |  | Wände auf einer Linie oder Polylinie der Zeichnung erstellen, mit den daran angeschlossenen Linien, wenn Sie Ja sagen. |
| `WALLPOLY` | `WP` | Wände um ein regelmäßiges Polygon mit 3 bis 64 Seiten zeichnen, wie POLYGON (WP) |
| `WALLRECT` | `WR` | Vier verbundene Wände von zwei gegenüberliegenden Ecken zeichnen, wie RECTANG (WR) |
| `WALLREJOIN` |  | Zwei Teile einer Wand wieder zu einer Wand machen. Der erste behält seinen Platz in der Zeichnung. |
| `WALLROT` |  | Vier verbundene Wände als Rechteck zeichnen, um einen beliebigen Winkel gedreht: die erste Seite, dann wie weit nach außen. |
| `WALLSPLIT` | `WS` | Eine Wand an einem Punkt oder dort, wo eine andere Wand sie kreuzt, in zwei teilen. Die Teile bleiben verbunden, außer Sie verlangen eine Lücke oder freie Enden. Türen und Fenster gehen mit ihrem Teil. |
| `WALLSPLITGAP` |  | Eine Wand mit einer Lücke teilen: die Lücke eingeben, die Wand wählen, dann den Punkt. Die Teile behalten freie Enden und können wieder verbunden werden. |
| `WALLSTRETCH` |  | Strecken mit einem Fenster: Wandenden darin wandern, ganz darin liegende Wände wandern ganz mit, und Wände, die stumpf an ihre Seiten stoßen, gleiten mit. |
| `WALLTAN` |  | Eine Wand mit einem Bogen fortsetzen, der sie entlang der Wand verlässt (als kurze gerade Wände gezeichnet). |
| `WALLTRACE` |  | Wände um die kleinste geschlossene Fläche aus Linien und Wänden um den angeklickten Punkt zeichnen. |
| `WALLUNHOLD` |  | Die Sperren von einer Wand entfernen (und die Sperren anderer Wände zu ihr). |
| `WBLOCK` | `W`, `-WBLOCK` | Einen Block, einige Objekte oder die ganze Zeichnung in eine neue DWG- oder DXF-Datei schreiben (W) |
| `WEDGE` | `WE` | Ein Keil: zwei Ecken und eine Höhe; er fällt von der ersten Ecke weg ab (3D) |
| `WHEREAMI` | `WHERE` | Sagt, wo der Cursor ist. |
| `WHOHAS` |  | Sagt, wer eine Zeichnung geöffnet hat. CadCraft Studio legt neben jeder geöffneten Zeichnung eine kleine Sperrdatei an (Plan.dwg.cclock: wer, seit wann, welche Version) und entfernt sie beim Schließen. Optionen: Aktuell (C) (die geöffnete Zeichnung), Datei (F) (eine wählen), Ordner (FO) (jede Zeichnung in einem Ordner, die irgendwo geöffnet ist; damit kann Studio auch Sperrdateien in diesem Ordner halten), Pfad (P) (eingeben), Name (N) (der Name, den andere sehen). Eine Sperre, die fünf Minuten lang nicht aktualisiert wurde, gilt als veraltet. Nicht im Browser verfügbar. |
| `WINDOW` | `WN` | Ein Fenster in eine Wand setzen. |
| `XATTACH` | `XA` | Eine andere DWG oder DXF in diese Zeichnung verknüpfen, nur lesbar angezeigt (XREF listet sie auf und lädt sie neu) |
| `XCLIP` | `XC` | Blockreferenzen und verknüpfte Zeichnungen auf ein Rechteck oder Polygon beschneiden oder den Beschnitt entfernen. |
| `XLINE` | `XL` | Konstruktionslinie, nach beiden Seiten unbegrenzt: durch zwei Punkte, horizontal, vertikal, unter einem Winkel, als Winkelhalbierende oder versetzt zu einer Linie. |
| `XREF` | `XR`, `-XREF` | Externe Referenzen (Xref): auflisten, anfügen, neu laden, binden, lösen |
| `ZOOM` | `Z` | Grenzen oder ein Fenster |
