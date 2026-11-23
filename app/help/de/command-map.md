---
title: Befehlsübersicht: was eingeben
summary: Jeder Befehl von CadCraft mit seinen Kurznamen, von A bis Z, aus dem Programm selbst erzeugt, und die Gewohnheiten aus anderen Zeichenprogrammen, die abweichen.
keywords: Befehlsübersicht, Befehle, Aliase, Kurznamen, Umstieg, Befehlsliste, was eingeben, löschen, stutzen, Entsprechung, Unterschiede
from: 9426856f
---

CadCraft übernimmt die Befehlsnamen und Kurznamen, die man aus anderen Zeichenprogrammen kennt: Geben Sie `L` für eine Linie, `TR` zum Stutzen und `E` zum Löschen ein. Für die meisten gibt es also keine Übersetzungstabelle, die Sie lernen müssten: Der Name, den Sie kennen, ist hier derselbe. Die Liste unten enthält jeden Befehl von CadCraft, aus dem Programm selbst erzeugt. {{key:Enter}} wiederholt den letzten Befehl; `HELP` in der Befehlszeile gibt dieselbe Liste aus.

Die wenigen, die nicht gleich sind oder noch nicht umgesetzt wurden:

- **Speichern** lädt eine Kopie im Browser herunter ({{cmd:SAVE}}, {{cmd:SAVEAS}}); in CadCraft Studio schreibt es die Datei. Siehe [Umstieg von anderer Zeichensoftware](topic:coming-from).
- **PLOT** erzeugt eine PDF-Datei (auch PNG und SVG) mit einer Plotstiltabelle; es gibt keinen Manager für die Seiteneinrichtung.
- **DIMSTYLE** und **PEDIT** sind umgesetzt; **PEDIT** hat keine Option Scheitelpunkt bearbeiten (das übernehmen Griffe).
- **TABLE** ist noch nicht umgesetzt; {{cmd:XREF}}, {{cmd:SPLINE}} und {{cmd:WBLOCK}} sind umgesetzt.
- Die eigenen Befehle einer Routine (AutoLISP `C:NAME`) erscheinen, nachdem Sie sie mit {{cmd:APPLOAD}} geladen haben; sie sind hier nicht aufgelistet.

## Alle Befehle (402)

| Befehl | Kurznamen | Was er tut |
|---|---|---|
| `3DORBIT` | `3DO`, `ORBIT` | Die 3D-Ansicht mit der linken Maustaste drehen |
| `ACCESS` | `AX` | Zeichnen ohne Sehen ein- oder ausschalten: Ergebnisse werden über Ihren Bildschirmleser gesprochen, ein Tastatur-Cursor liegt auf der Zeichnung, Fangtöne und gesprochene Befehle |
| `ALIASEDIT` |  | Befehlsaliase in einer Textdatei bearbeiten (das vertraute Format L, *LINE) |
| `ALIGN` | `AL` | Objekte so verschieben und drehen, dass Quellpunkte auf Zielpunkte fallen (ein, zwei oder drei Paare), und sie bei Bedarf skalieren |
| `ALIGNPANEL` | `ALP` | Den Bereich Ausrichten und verteilen öffnen |
| `ALIGNTO` |  | Die linken, mittleren, rechten, oberen, mittleren oder unteren Kanten der ausgewählten Objekte ausrichten, an der Auswahl, am ersten oder letzten gewählten Objekt oder an einem Punkt |
| `ANNOALLVISIBLE` | `ANNOALL` | Beschriftungsobjekte in jedem Maßstab zeigen oder nur dort, wo der Maßstab des Ansichtsfensters (oder der Zeichnung) in ihrer Liste steht |
| `ANNOSCALE` | `CANNOSCALE` | Den Beschriftungsmaßstab der Zeichnung festlegen: beschriftungsfähige Texte und Bemaßungen werden so skaliert, dass sie im selben Maß gedruckt werden |
| `APPLOAD` | `AP` | Anwendungen laden: LISP-Routinen (.lsp) und ihre Dialogdateien (.dcl); die Startgruppe (AP) |
| `ARC` | `A` | Bogen: 3 Punkte, Start/Zentrum/Ende, Start/Zentrum/Winkel, Start/Zentrum/Länge, Start/Ende/Winkel, Start/Ende/Richtung, Start/Ende/Radius, Zentrum/Start/Ende, Zentrum/Start/Winkel, Zentrum/Start/Länge, Fortsetzen |
| `AREA` | `AA` | Fläche und Umfang durch Punkte oder eines Objekts; Addieren und Subtrahieren führen eine laufende Summe (AA) |
| `ARRAY` | `AR` | Kopien in Zeilen und Spalten oder kreisförmig um einen Mittelpunkt (AR) |
| `ARRAYASSOCIATIVITY` |  | Legt fest, ob die Befehle ARRAY bearbeitbare Anordnungen (1) oder einfache Kopien (0) erzeugen |
| `ARRAYCLOSE` |  | Beendet die Bearbeitung der Quellobjekte einer Anordnung |
| `ARRAYEDIT` |  | Ändert eine Anordnung, die mit der Option Assoziativ erstellt wurde: Anzahl, Abstand, Quellobjekte, einzelnes Element |
| `ARRAYPATH` |  | Kopien von Objekten entlang einer Linie, eines Bogens, einer Polylinie oder einer anderen Kurve |
| `ARRAYPOLAR` |  | Kopien um einen Mittelpunkt |
| `ARRAYRECT` |  | Kopien in Zeilen und Spalten |
| `ASBUILT` | `ASB` | ASBUILT liest die Ist-Punkte, die ein Team gemessen hat (CSV / TXT, wie EXPORTPOINTS sie schreibt), und vergleicht sie mit den Punkten der Zeichnung: innerhalb oder außerhalb der Toleranz, nicht gemessen, zusätzlich. Markiert sie auf dem Layer AS-BUILT und lädt einen CSV-Bericht herunter. |
| `ATTDEF` | `ATT`, `DDATTDEF`, `-ATTDEF` | Ein Attribut definieren (eine Kennung, nach der ein Block einen Wert verlangt), das in einen Block gehört (ATT) |
| `ATTEDIT` | `ATE`, `-ATTEDIT` | Attributwerte einer Blockreferenz in der Befehlszeile nacheinander bearbeiten (Enter behält einen Wert) |
| `ATTSYNC` |  | Die Referenzen eines Blocks an seine Attributdefinitionen angleichen: neue mit ihren Standardwerten ergänzen, entfernte streichen, Positionen und Text zurücksetzen; Werte bleiben erhalten |
| `AUDIT` |  | Prüft die offene Zeichnung auf Schäden: nicht endliche Zahlen, Objekte ohne Größe, fehlende Layer, Blöcke, Stile und Linientypen, Blöcke, die sich selbst enthalten, gemeinsame IDs, defekte Bemaßungen und Schraffuren. Listet die Funde nach Art auf und fragt vor dem Beheben; die Korrektur ist ein Rückgängig-Schritt. |
| `AUNITS` | `ANGUNITS` | Wie Winkel angezeigt und eingegeben werden: Dezimalgrad, Grad-Minuten-Sekunden oder Peilungen wie N45°23'30"E (ANGUNITS) |
| `AUTOCOMPLETE` | `AUTOC` | Zeichen-Autovervollständigung ein- oder ausschalten oder auflisten, was die Muster der Zeichnung jetzt vorschlagen. |
| `AUTOCONSTRAIN` |  | Abhängigkeiten für Koinzidenz, Waagrecht und Senkrecht ergänzen, wo die Geometrie bereits nahe beieinander liegt |
| `AUTODIM` | `ADIM` | Nach Regeln bemaßen: Gesamtmaß, Ketten entlang der Seiten, Öffnungen, Lochdurchmesser und Rasterabstände, ohne bereits Bemaßtes zu wiederholen. |
| `AUTOSHEET` | `ASH` | Ordnet Blätter selbstständig an: wählt Papier und Standardmaßstäbe und platziert jede Ansicht mit Beschriftung und Schriftfeld. |
| `BATTMAN` |  | Attribut-Manager für Blöcke: Reihenfolge, Kennungen, Eingabeaufforderungen, Standardwerte und Modi der Attribute eines Blocks, danach werden seine Referenzen aktualisiert |
| `BCLOSE` |  | Den Blockeditor schließen: den Block speichern oder die Änderungen verwerfen |
| `BCONVERT` |  | BCONVERT findet Geometrie, die sich wiederholt, und macht daraus Blockreferenzen. Wählen Sie die Objekte, die sich wiederholen: Jede andere Gruppe von Objekten im offenen Bereich, die dieselbe Geometrie hat, verschoben und um einen beliebigen Winkel gedreht, wird gefunden; mit eingeschalteten Optionen Gespiegelt und Skaliert werden auch Spiegelbilder und Kopien in anderer Größe gefunden. Geben Sie dem neuen Block einen Namen und einen Basispunkt; die Auswahl und jede Kopie werden zu Referenzen darauf, jede mit eigener Drehung und Skalierung. Oder wählen Sie Block und benennen Sie einen vorhandenen Block, um lose Kopien seiner Objekte zu finden. Eine Kopie muss denselben Layer, dieselbe Farbe, denselben Linientyp und dieselbe Linienstärke haben, sofern Eigenschaften nicht auf Ignorieren steht. Objekte auf gesperrten Layern bleiben unberührt. Ein Rückgängig-Schritt. |
| `BEDIT` | `BE` | Blockeditor: Objekte und Attribute eines Blocks bearbeiten; BCLOSE speichert (BE) |
| `BLEND` |  | BLEND: ein Spline zwischen den Enden zweier offener Kurven, nahe den Enden gewählt, um sie zu verbinden. CONtinuity: Tangente folgt beiden Richtungen, Glatt folgt außerdem der Krümmung. |
| `BLOCK` | `B`, `BMAKE` | Einen Block aus Objekten erstellen (sie werden zu einer Referenz) |
| `BLOCKREPLACE` |  | BLOCKREPLACE: jede Referenz auf einen Block wird zu einer Referenz auf einen anderen, am selben Ort mit derselben Skalierung und Drehung. Werte von Attributen, die beide Blöcke haben, bleiben erhalten. |
| `BLOCKSPALETTE` | `BLOCKSPAL` | BLOCKSPALETTE zeigt den Bereich Blöcke mit dem Cursor im Filterfeld. Der Bereich zeigt ein Bild jedes Blocks (die zuletzt platzierten zuerst), als Liste oder Raster; klicken Sie auf ein Bild oder ziehen Sie es in die Zeichnung, um den Block mit INSERT zu platzieren. Unter Bibliotheken fügen Sie eine eigene DWG- oder DXF-Datei hinzu: Ihre Blöcke werden mit Bildern aufgelistet und beim Platzieren in diese Zeichnung kopiert. In CadCraft Studio kann auch ein Ordner mit Zeichnungen hinzugefügt werden; Dateien und Ordner werden gemerkt. |
| `BOMEDIT` | `BOMCOLUMNS` | Spalten, Gruppierung, Sortierung, Titel, Summen und Bemerkungen einer Stücklistentabelle |
| `BOMEXPORT` |  | Eine Stücklistentabelle als .csv-Datei speichern |
| `BOMTABLE` | `BOM` | Eine live aktualisierte Stücklistentabelle einer Zone oder der ganzen Zeichnung |
| `BOMUPDATE` |  | Alle Stücklistentabellen jetzt aktualisieren, auch die fixierten |
| `BOMZONE` | `BZONE` | Ein benannter Bereich der Zeichnung für eine Stückliste: zwei Ecken, ein Polygon oder die Kontur eines geschlossenen Objekts |
| `BOUNDARY` | `BO`, `BPOLY` | BOUNDARY (BO): einen Punkt innerhalb einer geschlossenen Fläche wählen und eine geschlossene Polylinie darum erhalten. Bögen bleiben Bögen. Inseln umreißt auch die Flächen darin. |
| `BOX` |  | Ein Quader: zwei Ecken und eine Höhe (3D) |
| `BPARAMETER` | `BPARAM` | Noch nicht umgesetzt: einen Parameter (etwa Sichtbarkeit) zu einem Block hinzufügen. |
| `BPARAMS` | `BPM`, `BLOCKPARAMS` | Blockparameter: benannte Parameter mit Formeln und mehrere Sichtbarkeitsparameter in einem Block. Funktioniert im Blockeditor (die gewählten Objekte einem Zustand zuweisen) und an einer gewählten Referenz (eigene Werte und Zustände). |
| `BREAK` | `BR` | Eine Linie, einen Bogen, einen Kreis oder eine Polylinie zwischen zwei Punkten trennen (BR) |
| `BREAKATPOINT` |  | Eine Linie, einen Bogen oder eine Polylinie an einem Punkt in zwei teilen |
| `BREAKLINE` |  | Eine Linie mit Bruchsymbol zeichnen; ihre Größe und die Verlängerung über die Enden werden gemerkt. |
| `BREPLACE` |  | BREPLACE tauscht einen Block gegen einen anderen. Gewählt: Blockreferenzen wählen und den Block benennen, der stattdessen verwendet wird. Alle: einen Block und seinen Ersatz benennen; jede Referenz in jedem Raum und innerhalb anderer Blöcke ändert sich. Eine Referenz behält Ort, Skalierung, Drehung und Layer sowie die Werte der Attribute, die beide Blöcke haben; Werte, für die der neue Block keinen Platz hat, werden verworfen und genannt. |
| `BSEARCH` |  | BSEARCH findet Blöcke. Name: ein Teil eines Blocknamens oder ein Muster mit * und ?. Attribut: ein Wert (oder TAG=Wert), den Attribute einer Referenz halten. Geometrie: Objekte oder eine Blockreferenz wählen; die Blöcke, deren Form mindestens zu 85 % gleich ist, werden nach Güte aufgelistet; Größe, Drehung und Spiegelung zählen nicht. Die gefundenen Referenzen im offenen Bereich werden ausgewählt und sind für den nächsten Befehl bereit. |
| `BURST` |  | Blockreferenzen auflösen und behalten, was ihre Attribute besagen: jeder Wert wird zu Text auf dem Layer des Attributs. |
| `BVHIDE` | `BVH` | Im Blockeditor: Objekte im aktuellen Sichtbarkeitszustand ausblenden. |
| `BVSHOW` | `BVSH` | Im Blockeditor: Objekte einblenden, die der aktuelle Sichtbarkeitszustand ausblendet (sie erscheinen verblasst, zum Wählen). |
| `BVSTATE` | `BVS` | Im Blockeditor, bei einem Block mit Sichtbarkeitszuständen: zu einem Zustand wechseln oder einen hinzufügen, umbenennen oder löschen. |
| `CAL` |  | Eine Länge oder Zahl berechnen: + − * / und Klammern, wie Sie sie überall eingeben |
| `CENTERLINE` | `CL` | Mittellinie zwischen zwei Linien: in der Mitte zwischen ihnen oder auf der Winkelhalbierenden, wenn sie sich treffen (CL) |
| `CENTERMARK` | `CM`, `DIMCENTER`, `DCE` | Mittelmarkierung: ein Kreuz im Mittelpunkt eines Kreises oder Bogens, mit Mittellinien bis kurz darüber hinaus (CM) |
| `CHAMFER` | `CHA` | Die Ecke zwischen zwei Linien abschrägen (D zwei Abstände, A Länge und Winkel, P jede Ecke einer Polylinie) |
| `CHSPACE` |  | CHSPACE: Objekte zwischen einem Blatt und dem Modell über ein Ansichtsfenster verschieben. Sie werden skaliert und gedreht, damit sie von der anderen Seite gleich aussehen. Auf einem Blatt gehen sie ins Modell; während Sie über ein Ansichtsfenster arbeiten (MSPACE), kommen sie auf das Blatt. |
| `CIRCLE` | `C` | Mittelpunkt und Radius, Durchmesser, 2 oder 3 Punkte |
| `CLASS` |  | Die gewählten Objekte in eine Klasse legen, oder ohne Auswahl die aktive Klasse festlegen (? listet sie auf) |
| `CLASSES` | `CLS` | Der Bereich Klassen: Klassen sortieren Objekte über Layer hinweg; anzeigen, ausblenden und gestalten, je Ansichtsfenster überschreiben (CLS) |
| `COMMANDLINE` | `CMDLINE` | Befehlszeile andocken oder schweben lassen, einzeilig machen, ihre Verlaufszeilen festlegen oder den Verlauf öffnen (F2) |
| `COMPARESETTINGS` | `CMPSET` | Bemaßungsstile, Textstile, Layer, Blätter oder Einheiten vergleichen: zwei in dieser Zeichnung oder diese Zeichnung gegen eine andere offene; einen Wert übertragen. |
| `CONSTRAINTBAR` | `CBAR` | Abhängigkeitsleisten ein- oder ausblenden (Alle anzeigen/Alle ausblenden, oder je Objekt) |
| `COPY` | `CO`, `CP` | Objekte kopieren, so oft Sie klicken |
| `COPYBASE` |  | Objekte mit einem gewählten Basispunkt in die Zwischenablage kopieren |
| `COPYCLIP` |  | Objekte in die Zwischenablage kopieren (Strg+C); PASTECLIP fügt sie ein |
| `COUNT` | `BCOUNT` | Blockreferenzen zählen: eine wählen, um jede Referenz ihres Blocks auszuwählen und zu zählen |
| `COUNTTABLE` |  | Eine Tabelle mit Blockanzahlen einfügen |
| `CREDITS` |  | Schreibt die Bibliothekshinweise als Tabelle in die Zeichnung. Erneut ausführen, um die Tabelle aus den Elementen der Zeichnung zu aktualisieren. |
| `CURSORSIZE` |  | Größe des Fadenkreuzes: 100 zeigt es von Rand zu Rand über die Zeichnung (Einstellungen › Cursor › Vollbild) |
| `CUTCLIP` |  | Objekte in die Zwischenablage ausschneiden (Strg+X): kopieren, dann löschen |
| `CYLINDER` | `CYL` | Ein Zylinder: Mittelpunkt, Radius und Höhe (3D) |
| `DATAEXTRACTION` | `EATTEXT`, `DX` | Blöcke, ihre Attribute und Objekteigenschaften als Tabelle in der Zeichnung oder als CSV-Datei auflisten |
| `DATALINK` | `DL` | Eine Tabelle aus einer CSV-Datei, die sich die Datei merkt, damit sie erneut gelesen werden kann |
| `DATALINKUPDATE` | `DLU` | Die Datei einer Datenverknüpfung erneut lesen und ihre Tabellen neu füllen |
| `DCALIGNED` | `DCALI` | Bemaßungsabhängigkeit: wahrer Abstand zwischen Punkten, einem Punkt und einer Linie oder zwei Linien |
| `DCANGULAR` | `DCANG` | Bemaßungsabhängigkeit: Winkel zwischen zwei Linien oder eines Bogens |
| `DCCONVERT` |  | Bemaßungen auf abhängigkeitsfähiger Geometrie in Bemaßungsabhängigkeiten umwandeln |
| `DCDIAMETER` | `DCDIA` | Bemaßungsabhängigkeit: Durchmesser eines Kreises oder Bogens |
| `DCDISPLAY` |  | Bemaßungsabhängigkeiten in der Zeichnung ein- oder ausblenden |
| `DCHORIZONTAL` | `DCHOR` | Bemaßungsabhängigkeit: waagrechter Abstand |
| `DCLINEAR` | `DCLIN` | Bemaßungsabhängigkeit: waagrechter oder senkrechter Abstand, ab der Stelle, an die Sie ihn setzen |
| `DCRADIUS` | `DCRAD` | Bemaßungsabhängigkeit: Radius eines Kreises oder Bogens |
| `DCVERTICAL` | `DCVER` | Bemaßungsabhängigkeit: senkrechter Abstand |
| `DELBLOCKS` |  | Blöcke löschen: jede Referenz (auch verschachtelte, auf jedem Blatt) und die Definitionen |
| `DELCONSTRAINT` | `DELCON` | Jede Abhängigkeit (geometrisch und bemaßend) von den gewählten Objekten entfernen |
| `DELOPENING` |  | Eine Tür oder ein Fenster aus einer Wand entfernen. |
| `DESCRIBE` | `DESC` | Sagt, was die Zeichnung enthält: wie viele Objekte, welche Art, welche Größe, was ausgewählt ist. |
| `DESELECT` | `AI_DESELECT`, `SELECTNONE` | Die Auswahl aufheben (Esc) |
| `DETAILS` | `DET` | Die eigenen Details Ihres Büros, passend zu dem, was Sie zeichnen: finden, einen Block hinzufügen, auflisten, entfernen, Vorschläge ein- oder ausschalten. |
| `DIAGRAM` | `TEXTDIAGRAM`, `T2D` | Ein Diagramm aus Text zeichnen: ein Mermaid-Flussdiagramm, ein PlantUML-Komponentendiagramm, D2, eine Von-bis-Liste oder draw.io-XML, als bearbeitbare Blöcke und Verbindungen |
| `DIMALIGNED` | `DAL`, `DIMALI` | Wahrer Abstand zwischen zwei Punkten |
| `DIMANGULAR` | `DAN`, `DIMANG` | Winkel zwischen zwei Linien, eines Bogens oder durch drei Punkte |
| `DIMARC` | `DAR` | Bogenlängenbemaßung: der Abstand entlang eines Bogens mit dem Bogensymbol (DAR) |
| `DIMASZ` |  | Bemaßungseinstellung: Pfeilgröße |
| `DIMBASELINE` | `DBA`, `DIMBASE` | Bemaßungen, die von einer Grundlinie aus gestapelt werden |
| `DIMBREAK` | `DBREAK` | Maßhilfslinien und Maßlinien dort unterbrechen, wo sie andere Objekte kreuzen (Automatisch), zwischen zwei Punkten (Manuell), oder die Unterbrechungen entfernen |
| `DIMCONSTRAINT` | `DCON` | Bemaßungsabhängigkeiten: linear, ausgerichtet, Winkel, Radius, Durchmesser, umwandeln |
| `DIMCONTINUE` | `DCO`, `DIMCONT` | Eine Kette von Bemaßungen, jede ab dem Ende der letzten |
| `DIMDEC` |  | Bemaßungseinstellung: Dezimalstellen |
| `DIMDIAMETER` | `DDI`, `DIMDIA` | Durchmesser eines Bogens oder Kreises |
| `DIMDISASSOCIATE` | `DDA`, `DIMDISASSOC` | Bemaßungen von den Objekten lösen, an denen sie hängen (DDA) |
| `DIMEDIT` | `DED`, `DIMED` | Bemaßungstext ändern (Start, Neuer Text, Drehen) oder die Maßhilfslinien schräg stellen (Schräg) |
| `DIMEXE` |  | Bemaßungseinstellung: Verlängerung über die Maßlinie hinaus |
| `DIMEXO` |  | Bemaßungseinstellung: Versatz vom Ursprung |
| `DIMGAP` |  | Bemaßungseinstellung: Abstand um den Text |
| `DIMINSPECT` |  | Prüfbemaßung: ein Rahmen um den Wert mit einer Bezeichnung und wie oft das Teil geprüft wird |
| `DIMJOGGED` | `DJO`, `JOG` | Geknickte Radiusbemaßung: ein Radius, der von einem näheren Punkt gezeichnet wird, wenn der Mittelpunkt weit entfernt liegt (DJO) |
| `DIMJOGLINE` | `DJL` | Ein Knicksymbol an die Maßlinie einer linearen oder ausgerichteten Bemaßung setzen, um zu zeigen, dass der Abstand nicht maßstäblich gezeichnet ist (DJL) |
| `DIMLINEAR` | `DLI`, `DIMLIN` | Waagrechter oder senkrechter Abstand (R für jeden Winkel) |
| `DIMLUNIT` |  | Bemaßungseinstellung: Längenformat (1 wissenschaftlich, 2 dezimal, 3 Ingenieur, 4 Architektur, 5 Bruch) |
| `DIMORDINATE` | `DOR`, `DIMORD` | Koordinatenbemaßung: der X- oder Y-Abstand eines Punkts vom Ursprung des BKS, an einer Führungslinie (DOR) |
| `DIMOVERRIDE` | `DOV`, `DIMOVER` | Bemaßungsvariablen an gewählten Bemaßungen überschreiben, ohne ihren Stil zu ändern; Löschen setzt den Stil wieder ein (DOV) |
| `DIMRADIUS` | `DRA`, `DIMRAD` | Radius eines Bogens oder Kreises |
| `DIMREASSOCIATE` | `DRE`, `DIMREASSOC` | Die Punkte einer Bemaßung an Objekte binden, damit sie folgt und sich neu misst, wenn diese sich bewegen (DRE) |
| `DIMSCALE` |  | Bemaßungseinstellung: Gesamtmaßstab (Größen × dieser Wert) |
| `DIMSPACE` |  | Gleichmäßiger Abstand zwischen parallelen Bemaßungen, von einer Basisbemaßung aus gemessen (0 richtet sie aus, Automatisch ist die doppelte Texthöhe) |
| `DIMSTYLE` | `DST`, `DDIM`, `D` | Benannte Bemaßungsstile erstellen, ändern, als aktuell festlegen, löschen, anwenden und vergleichen (das Dialogfeld; -DIMSTYLE in der Befehlszeile) |
| `DIMTEDIT` | `DIMTED` | Bemaßungstext links, rechts oder mittig auf der Maßlinie verschieben oder drehen |
| `DIMTEXTUNIT` | `DTU` | Bemaßungstext in mm, cm, m oder km oder in den eigenen Einheiten der Zeichnung: die gewählten Bemaßungen, sonst neue (DTU) |
| `DIMTXT` |  | Bemaßungseinstellung: Texthöhe |
| `DIST` | `DI` | Abstand und Winkel zwischen zwei Punkten |
| `DISTRIBUTE` |  | Die gewählten Objekte gleichmäßig verteilen, seitlich oder auf und ab: gleiche Schritte zwischen den Mittelpunkten oder gleiche Lücken; die beiden äußeren bleiben |
| `DIVIDE` | `DIV` | DIVIDE (DIV): Markierungen, die eine Linie, einen Bogen, einen Kreis, eine Polylinie, einen Spline oder eine Ellipse in gleiche Teile schneiden. Punkte oder mit Block ein Block an jeder Markierung. |
| `DOCUMENTS` | `DOCS` | Den Bereich Dokumente öffnen: Zeichnungen aus- und einchecken, Revisionen, Freigabezustände und Genehmigung für einen Projektordner |
| `DOOR` | `DR` | Eine Tür in eine Wand setzen. Die Seite, auf die Sie klicken, ist die Seite, zu der sie schwingt. |
| `DRAWORDER` |  | Die Zeichenreihenfolge ändern: Objekte nach vorn bringen, nach hinten schicken oder über oder unter andere Objekte setzen. |
| `DUPLICATE` | `DUP` | Eine Kopie, die mit dem Zeiger wandert: klicken, um sie abzusetzen (Strg+D) |
| `DWGPROPS` | `DRAWINGPROPS` | Die Eigenschaften der Zeichnung: Titel, Autor und der Rest sowie Ihre eigenen Namen-Wert-Paare |
| `DXFOUT` |  | Die Zeichnung als DXF R12 herunterladen (Speichern behält das eigene Format) |
| `EATTEDIT` | `DDATTE` | Attribute einer Blockreferenz bearbeiten: Werte, Text und Eigenschaften, jeweils ein Attribut |
| `ELLIPSE` | `EL` | Endpunkte der Achse und die andere Halbachse |
| `ERASE` | `E`, `DELETE` | Objekte entfernen |
| `EXPLODE` | `X` | Polylinien, Blöcke und Bemaßungen in ihre Teile zerlegen |
| `EXPORT` | `EXP` | Eine Kopie der Zeichnung in einem Dateityp speichern, den eine Erweiterung schreibt |
| `EXPORT3D` | `3DEXPORT` | Das 3D-Modell exportieren: GLB, OBJ oder STL |
| `EXPORTPOINTS` | `EXPPTS` | Punkte und die Einfügepunkte von Blöcken mit einem Attribut als Beschreibung in eine CSV- oder TXT-Datei schreiben (PNEZD, PENZD oder XYZ) für BIM- und Vermessungsprogramme |
| `EXTEND` | `EX` | Objekte verlängern, bis sie andere treffen: nahe einem Ende klicken, über mehrere ziehen oder Shift+Klick zum Stutzen |
| `EXTRIM` |  | EXTRIM: eine Schneidkante wählen, dann eine Seite. Alles, was die Kante kreuzt, wird auf dieser Seite gestutzt. Die Teile, die wegfielen, zeigen sich, während Sie den Zeiger bewegen. |
| `EXTRUDE` | `EXT` | Geschlossene 2D-Objekte zu Volumenkörpern extrudieren (3D) |
| `FIELD` |  | Ein Feld in einen Text, eine Tabellenzelle oder ein Attribut setzen: ein Datum, der Dateiname, die Blattnummer, eine Zeichnungseigenschaft, die Fläche oder Länge eines Objekts oder eine Formel |
| `FILLET` | `F` | Die Ecke zwischen zwei Objekten abrunden oder eckig lassen (R Radius, P jede Ecke einer Polylinie, M mehrere) |
| `FIND` |  | Wörter in Text, Attributwerten und Bemaßungstext suchen und ersetzen |
| `FLATTEN` |  | Höhe (Z) und Dicke der gewählten Objekte auf 0 setzen, auch in den Blöcken, die sie verwenden. |
| `FLOOR` |  | Das Geschoss wählen, auf dem gezeichnet wird, eines hinzufügen oder die Auswahl dorthin verschieben oder kopieren. |
| `FLOORLAYERS` |  | Geschosse in Layer namens Geschoss-Layer umwandeln, für eine Datei, die an jemanden ohne Geschosse geht. |
| `FLOORS` | `FLR` | Den Bereich Geschosse öffnen: Geschosse in einem Modellbereich stapeln. |
| `GCCOINCIDENT` |  | Abhängigkeit: zwei Punkte treffen sich, oder ein Punkt bleibt auf einem Objekt |
| `GCCOLLINEAR` |  | Abhängigkeit: zwei Linien bleiben auf einer Geraden |
| `GCCONCENTRIC` |  | Abhängigkeit: zwei Kreise oder Bögen haben einen gemeinsamen Mittelpunkt |
| `GCEQUAL` |  | Abhängigkeit: zwei Linien bleiben gleich lang, oder zwei Kreise/Bögen haben gleichen Radius |
| `GCFIX` |  | Abhängigkeit: ein Punkt oder ein ganzes Objekt bleibt, wo es ist |
| `GCHORIZONTAL` |  | Abhängigkeit: eine Linie (oder zwei Punkte) bleibt waagrecht |
| `GCPARALLEL` |  | Abhängigkeit: zwei Linien bleiben parallel |
| `GCPERPENDICULAR` |  | Abhängigkeit: zwei Linien bleiben im rechten Winkel |
| `GCSYMMETRIC` |  | Abhängigkeit: zwei Punkte, Linien oder Kreise spiegeln sich über eine Linie |
| `GCTANGENT` |  | Abhängigkeit: eine Linie und ein Kreis oder Bogen (oder zwei davon) bleiben tangential |
| `GCVERTICAL` |  | Abhängigkeit: eine Linie (oder zwei Punkte) bleibt senkrecht |
| `GDSIN` | `GDS` | Ein IC-Layout ansehen (eine GDSII-Stream-Datei): jeder Layer und Datentyp als Zeichnungslayer, flach, in Benutzereinheiten; nur zum Ansehen und Messen (Laborversuch) |
| `GEOMCONSTRAINT` | `GCON` | Geometrische Abhängigkeiten: waagrecht, senkrecht, parallel, tangential, koinzident… |
| `GLBOUT` |  | Das 3D-Modell als GLB (glTF) exportieren |
| `GRADIENT` | `GD` | Füllt eine Fläche mit einem Verlauf aus einer oder zwei Farben |
| `GRID` |  | Das Raster festlegen: der Abstand der Linien, jede n-te Linie als Hauptlinie, EIN oder AUS, oder Auto, um wieder dem Zoom zu folgen |
| `GRIDMOVE` | `GM` | Eine Rasterlinie verschieben und mitnehmen, was an ihr hängt: Wände dehnen sich, Stützen, Blasen und Markierungen wandern mit, Bemaßungen folgen. |
| `GROUP` | `G` | GROUP (G): den gewählten Objekten einen gemeinsamen Namen geben. Ein Klick auf eines davon wählt dann alle. Enter beim Namen erstellt eine unbenannte Gruppe. |
| `GROUPEDIT` |  | GROUPEDIT: eine Gruppe ändern. Ein Objekt wählen oder ihren Namen angeben, dann Objekte hinzufügen oder entfernen, UMBENENNEN, Beschreibung ändern oder festlegen, ob ein Klick die ganze Gruppe wählt. |
| `HATCH` | `H`, `BH`, `BHATCH`, `-HATCH` | Eine Fläche mit einer Vollfläche oder einem Muster füllen: innen klicken oder geschlossene Objekte wählen (H) |
| `HATCHEDIT` | `HE` | Eine Schraffur ändern: Muster, Skalierung, Winkel, Ursprung und ihre Verknüpfung mit einer Begrenzung. |
| `HATCHGENERATEBOUNDARY` | `HGB` | Erstellt die Begrenzungspolylinien aus einer Schraffur neu, mit ihr verknüpft oder nicht |
| `HATCHTOBACK` |  | Jede Schraffur hinter alles andere schicken. |
| `HELP` | `?` | Diese Liste |
| `HIDEOBJECTS` |  | Die gewählten Objekte ausblenden, bis UNISOLATEOBJECTS. Wird nicht mit der Zeichnung gespeichert. |
| `HISTORY` | `HIST` | HISTORY (HIST): die Versionen dieser Zeichnung — Kopien, die auf diesem Computer gespeichert werden, wenn Studio sie speichert, und die Versionen der Cloud — zum Öffnen, Wiederherstellen und Vergleichen mit farbig markierten Änderungen. |
| `ID` |  | Koordinaten eines Punkts |
| `IMAGE` | `IM` | CadCraft die Bilddateien geben, die eine Zeichnung verwendet (eine DWG speichert nur, wo sie waren). |
| `IMAGEATTACH` | `IAT`, `IMAGEATT` | Ein Bild (PNG oder JPEG) aus einer Datei einfügen. |
| `IMAGECLIP` | `ICL` | Ein Bild auf ein Rechteck oder Polygon zuschneiden oder den Zuschnitt entfernen. |
| `IMPORT` | `IMP` | Eine Datei einer Art, die eine Erweiterung liest, in diese Zeichnung importieren |
| `INSERT` | `I`, `DDINSERT` | Einen Block platzieren (S Skalierung, R drehen); F aus einer DWG-/DXF-Datei, L aus der Bibliothek |
| `INTERSECT` | `IN` | Nur das behalten, was Volumenkörper gemeinsam haben (3D), oder die Fläche, die 2D-Regionen gemeinsam haben |
| `ISODRAFT` |  | ISODRAFT: isometrisches Zeichnen ein oder aus, oder direkt auf die Ebene Links, Oben oder Rechts. Ist es eingeschaltet, folgen Ortho und Polare Spur den zwei Achsen der Ebene, das Raster wird isometrisch gezeichnet und ELLIPSE hat Isokreis. |
| `ISOLATEOBJECTS` | `ISOLATE` | Nur die gewählten Objekte zeigen; alles andere in diesem Bereich ist bis UNISOLATEOBJECTS ausgeblendet. Wird nicht mit der Zeichnung gespeichert. |
| `ISOPLANE` |  | ISOPLANE: die isometrische Ebene wählen, auf der gezeichnet wird: Links, Oben oder Rechts. Enter geht zur nächsten, so wie F5 es während des isometrischen Zeichnens tut. |
| `JOIN` | `J` | Linien, Bögen und Polylinien, die Ende an Ende zusammentreffen, zu einer Polylinie verbinden; Linien auf einer Geraden zu einer Linie (J) |
| `LASER` | `LASERCUT` | Den Bereich Laser öffnen: Layer an einen Laserschneider oder Gravierer senden (GRBL-G-Code) |
| `LASSOMODE` |  | Drücken und Ziehen zeichnet ein Lasso (1) oder ein Rechteck (0) |
| `LAYDEL` |  | Einen Layer und jedes Objekt darauf löschen (im Modell, auf Blättern und in Blöcken) |
| `LAYER` | `LA`, `DDLMODES`, `LAYERPALETTE`, `CLASSICLAYER` | Den Layer-Manager öffnen: jeder Layer in einer Tabelle |
| `LAYERPANEL` |  | Den Bereich Layer anzeigen |
| `LAYFRZ` |  | Den Layer jedes gewählten Objekts fixieren |
| `LAYGROUP` | `LG` | Layer in Ordnern im Bereich Layer gruppieren. |
| `LAYISO` |  | Die Layer der gewählten Objekte isolieren (alle anderen Layer aus) |
| `LAYLOCKFADE` |  | Festlegen, wie stark Objekte auf gesperrten Layern verblassen und ob ein Klick sie wählen kann. |
| `LAYMCUR` |  | Den Layer des gewählten Objekts zum aktuellen Layer machen |
| `LAYMRG` |  | Layer zusammenführen: ihre Objekte wandern auf einen Zielayer, die zusammengeführten Layer verschwinden |
| `LAYOFF` |  | Den Layer jedes gewählten Objekts ausschalten |
| `LAYON` |  | Alle Layer einschalten |
| `LAYOUT` | `LO`, `NEWLAYOUT` | Ein neues Blatt mit Schriftfeld und Ansichtsfenster |
| `LAYTHW` |  | Alle Layer auftauen |
| `LAYUNISO` |  | Die Layer wieder einschalten, die LAYISO ausgeschaltet hat |
| `LEGACYTEXT` | `TEXTTOUNICODE`, `VNTEXT` | Wandelt Text, der mit alten vietnamesischen Schriften geschrieben wurde, in Unicode um (TCVN3-/ABC-Schriften wie .VnTime und VNI-Schriften wie VNI-Times). Solcher Text wird bereits richtig angezeigt; dieser Befehl schreibt ihn endgültig um, mit Zählung und einem Rückgängig-Schritt. |
| `LENGTHEN` | `LEN` | Linien, Bögen und Polylinien verlängern oder kürzen: um einen Betrag, einen Prozentsatz, auf eine Gesamtlänge oder durch Ziehen (LEN) |
| `LIBRARY` | `LIB` | Der Bereich Bibliothek: Elemente platzieren, auf Updates prüfen, Hinweise |
| `LIMITS` |  | Die Zeichengrenzen festlegen: EIN, AUS oder die untere linke und obere rechte Ecke. Bei eingeschalteten Grenzen werden Punkte außerhalb abgelehnt |
| `LINE` | `L` | Gerade Abschnitte, jeder als eigenes Objekt |
| `LINETYPE` | `LT`, `CELTYPE` | Der Linientyp, den neue Objekte erhalten (nach Layer, nach Block oder ein benannter) |
| `LINKVIEWS` | `SYNCVIEWS` | Alle Teilfenster gemeinsam verschieben und zoomen (geteilter Bildschirm), um zwei Zeichnungen oder Revisionen zu vergleichen |
| `LISPEDIT` | `VLIDE` | LISPEDIT (oder VLIDE) öffnet den LISP-Editor: ein Fenster, um eine Routine zu schreiben, zu laden und zu testen. In die Zeichnung laden liest alle Formen, wie das Laden der Datei mit APPLOAD, und macht ihre Befehle verfügbar. Auswahl ausführen wertet die gewählten Formen oder die Form unter dem Cursor aus. Die Konsole zeigt, was die Routine ausgegeben hat, und jeden Fehler mit seiner Zeile. Die passende Klammer wird beim Tippen markiert, und Enter rückt die neue Zeile ein. Neu, Öffnen und Speichern arbeiten mit einer .lsp-Datei. Die Listen neben dem Text zeigen die Funktionen, die die Routine definiert, die, die sie aufruft und die dieses LISP noch nicht hat, und alle Funktionen, die es hat. Das Fenster blockiert die Zeichnung nicht, daher kann eine Routine Punkte verlangen; Stopp oder Esc beendet eine laufende Routine. |
| `LIST` | `LI`, `LS` | Objekte im Verlauf beschreiben |
| `LTSCALE` | `LTS` | Der Linientypfaktor der Zeichnung (jede Strich- und Lücke wird damit multipliziert) |
| `LWDISPLAY` | `LWT` | Linienstärken auf dem Bildschirm ein- oder ausblenden (die Schaltfläche {{ui:LST}} in der Statusleiste) |
| `LWEIGHT` | `LW`, `LINEWEIGHT` | Die Linienstärke, die neue Objekte erhalten (nach Layer, nach Block, Standard oder mm) |
| `MAPLAYERS` | `ML`, `GEOMAP` | Kartenlayer unter dem Modellbereich: das Koordinatensystem der Zeichnung, Kacheln, WMS, WMTS, ArcGIS, Bilder |
| `MASSPROP` |  | MASSPROP: Querschnittseigenschaften von Regionen und geschlossenen Objekten: Fläche, Umfang, Schwerpunkt, Flächenmomente und Deviationsmoment, Trägheitsradien und die Hauptachsen. Exakt für Linien und Bögen. Der Bericht kann in eine Textdatei geschrieben werden. |
| `MATCHPROP` | `MA`, `PAINTER` | Eigenschaften übertragen: Layer, Farbe und mehr von einem Objekt auf andere kopieren (MA) |
| `MEASURE` | `ME` | MEASURE (ME): eine Markierung in jedem angegebenen Abstand entlang einer Linie, eines Bogens, eines Kreises, einer Polylinie, eines Splines oder einer Ellipse, ab dem Ende, das Ihrem Punkt am nächsten liegt. Punkte oder mit Block ein Block an jeder Markierung. |
| `MEASUREGEOM` | `MEA` | Einen Abstand, einen Radius, einen Winkel oder eine Fläche messen (MEA) |
| `MINSERT` |  | MINSERT: einen Block in einem Zug in Zeilen und Spalten platzieren. Jeder ist eine eigene Referenz, daher kann jeder bewegt oder gelöscht werden. |
| `MIRROR` | `MI` | Objekte über eine Linie spiegeln |
| `MLEADER` | `MLD`, `MLEAD` | Multi-Führungslinie: ein Pfeil, eine Führungslinie und eine Notiz als ein Objekt (MLD) |
| `MLEADERALIGN` | `MLA` | Multi-Führungslinien an einer von ihnen in einer Richtung ausrichten, mit gleichem Abstand oder zwischen zwei Punkten verteilt (MLA) |
| `MLEADERCOLLECT` | `MLC` | Mehrere Multi-Führungslinien zu einer zusammenfassen: ihre Blöcke in einer Zeile oder Spalte, oder ihre Notizen untereinander (MLC) |
| `MLEADEREDIT` | `MLE` | Führungslinien zu einer Multi-Führungslinie hinzufügen oder entfernen; ihren Inhalt zwischen Text und Block wechseln (MLE) |
| `MLINE` |  | Parallele Linien zusammen zeichnen, an den Ecken verbunden. |
| `MOVE` | `M` | Objekte um einen Basispunkt und einen zweiten Punkt verschieben |
| `MSPACE` | `MS` | Am Modell durch ein Ansichtsfenster des offenen Blatts arbeiten (oder im Ansichtsfenster doppelklicken). |
| `MTEXT` | `MT`, `T` | Absatztext: Breite ziehen, dann an Ort und Stelle schreiben; Enter beginnt einen neuen Absatz (T) |
| `MVIEW` | `MV` | Ein Ansichtsfenster auf das Modell, auf einem Layout |
| `NAMEDVIEW` | `NV`, `VIEWS` | Benannte Ansichten: die Ansicht auf dem Bildschirm (oder ein Fenster) unter einem Namen speichern und zu ihr zurückkehren (NV) |
| `NCOPY` |  | Objekte aus einer Blockreferenz oder einer verknüpften Zeichnung in die Zeichnung kopieren, ohne sie aufzulösen. |
| `NEARBY` |  | Sagt, was nahe dem Cursor liegt, das nächste zuerst, mit Abstand und Seite. |
| `NEW` |  | Eine neue Zeichnung beginnen |
| `OBJECTSCALE` | `OBJSCALE` | Beschriftungsmaßstäbe beschriftungsfähiger Texte und Bemaßungen: einen Maßstab hinzufügen, einen löschen, den aktuellen Maßstab hinzufügen oder sie auflisten (jedes Ansichtsfenster zeigt sie in der Größe für seinen Maßstab) |
| `OBJOUT` |  | Das 3D-Modell als OBJ exportieren |
| `OFFICESTANDARD` | `OFFSTD` | Der Büro-Standard: Texthöhen auf Papier, Layer, Felder des Schriftfelds und Vorlagen in einem Datensatz. Zeigt den gültigen und seine Herkunft; eine .json-Datei in diese Zeichnung importieren, fehlende Büro-Layer ergänzen, die Felder des Schriftfelds auflisten. |
| `OFFSET` | `O` | Parallele Kopien in einem Abstand |
| `OFFSETGAPTYPE` |  | OFFSETGAPTYPE: wie OFFSET die Lücken an den äußeren Ecken einer Polylinie schließt. 0 verlängert die Segmente, 1 fügt einen Bogen ein, 2 einen geraden Schnitt. Für diese Sitzung gespeichert. |
| `OLELIST` | `OLES` | Die OLE-Objekte einer Zeichnung auflisten und eine Kopie eines Bildes an der gewünschten Stelle platzieren |
| `OPEN` |  | Eine DWG oder DXF von diesem Computer öffnen |
| `OPENIN3D` |  | Diese Zeichnung in der 3D-Modellierungs-App in einem neuen Tab öffnen (nichts wird hochgeladen) |
| `OPTIONKEYS` | `OPTKEYS` | Befehlsoptionen eigene Buchstaben geben (ARRAY.PO, P), in einer Textdatei |
| `OSNAP` | `DDOSNAP`, `OSNAPSETTINGS`, `SHORTCUTMENU` | Das Menü Objektfang öffnen: wählen, welche Fänge aktiv sind. Auch ein Rechtsklick auf Fang in der Statusleiste. |
| `OVERKILL` |  | Doppelte Objekte löschen und überlappende oder Ende-an-Ende-Linien und -Bögen innerhalb einer Toleranz zusammenführen. |
| `PARAMETERS` | `PAR`, `PARAMETERSMANAGER`, `PARAM` | Der Bereich Parameter: Benutzerparameter und Bemaßungsabhängigkeiten in einer Tabelle |
| `PARTSLIST` | `PLIST` | Eine Teileliste aller Normteile und Stahlprofile, die aus der Bibliothek platziert wurden |
| `PASTEAREA` | `PAREA` | Einen in MarkupCraft kopierten Bereich (Bereich kopieren) in seiner wahren Größe als Bild einfügen. |
| `PASTEBLOCK` |  | PASTEBLOCK: fügt das Kopierte als einen Block ein. Der Block erhält einen eigenen Namen; RENAME gibt ihm Ihren. |
| `PASTECLIP` |  | Die Zwischenablage einfügen: sie folgt dem Cursor, klicken Sie, wo sie hinkommt (Strg+V) |
| `PASTEORIG` |  | Die Zwischenablage an den Koordinaten einfügen, von denen sie kopiert wurde (Strg+Umschalt+V) |
| `PDF` |  | CadCraft die PDF-Dateien geben, die die Unterlagen der Zeichnung verwenden |
| `PDFADJUST` |  | Eine PDF-Unterlage verblassen, kontrastieren, einfarbig machen oder ausschalten |
| `PDFATTACH` | `PDFATT` | Eine PDF-Seite als Unterlage anfügen (PDFATTACH) |
| `PDFCLIP` |  | Eine PDF-Unterlage auf ein Rechteck oder Polygon zuschneiden |
| `PDFIMPORT` | `PDFIM` | Die Linien, Flächen und Texte einer PDF-Seite in Zeichnungsobjekte umwandeln (PDFIMPORT) |
| `PDFLAYERS` |  | Die eigenen Layer einer PDF-Unterlage ein- oder ausschalten |
| `PEDIT` | `PE` | Eine Polylinie bearbeiten: schließen, öffnen, verbinden, Breite, Kurve anpassen, Spline-Kurve, Krümmung entfernen, Linientyp erzeugen, umkehren; Linien, Bögen und Splines können in Polylinien umgewandelt werden |
| `PENPRESSURE` |  | Ob der Stiftdruck die Linienstärke dessen festlegt, was SKETCHFIX und SKETCHLIVE erzeugen (standardmäßig ein). In diesem Browser gespeichert. |
| `PHOTOSKETCH` | `PSK` | Macht aus einem Foto einer Handskizze auf Papier Linien und Bögen im Maßstab, begradigt die Perspektive und gibt jeder Stiftfarbe einen eigenen Layer. |
| `PICKSTYLE` |  | PICKSTYLE: ob die Wahl eines Objekts einer Gruppe die ganze Gruppe wählt (1, die Startvorgabe) oder nur dieses Objekt (0). Für diese Sitzung gespeichert. |
| `PLAN` |  | Die Ansicht so drehen, dass die X-Achse des BKS (aktuelles BKS, ein gespeichertes BKS oder das Weltkoordinatensystem) waagrecht auf dem Bildschirm liegt. Nichts in der Zeichnung wird verschoben. |
| `PLINE` | `PL` | Eine Polylinie aus Linien- und Bogenabschnitten |
| `PLOT` | `PRINT`, `PUBLISH`, `EXPORTPDF` | Als PDF plotten: ein Layout oder das Modell in einem Maßstab |
| `PLOTSTYLES` | `STYLESMANAGER`, `PSTABLES` | Plotstiltabellen: festlegen, wie jede Farbe gedruckt wird (Farbe, Schwarz, Grau, Tinte, Linienstärke); wird mit der Zeichnung gespeichert (STYLESMANAGER) |
| `POINT` | `PO` | Punktobjekte |
| `POINTCLOUD` | `PC` | Die angefügte Punktwolke: Schnitt, Höhe, Dicke, Farbe, Größe, sichtbar, Zoom, lösen |
| `POINTCLOUDATTACH` | `PCATTACH`, `POINTCLOUDATT` | Eine Punktwolke (LAS, LAZ, XYZ, PTS) unter der Zeichnung anfügen |
| `POLARANG` |  | Der Schritt der Polaren Spur in Grad (90, 45, 30, 22,5, 15 …) |
| `POLYGON` | `POL` | Ein regelmäßiges Polygon |
| `PRESSPULL` |  | Eine Fläche eines Volumenkörpers drücken oder ziehen (3D) |
| `PROPERTIES` | `PR`, `PROPS`, `CH`, `MO`, `DDMODIFY` | Den Bereich Eigenschaften öffnen (auch Strg+1 oder Doppelklick auf ein Objekt) |
| `PROPERTIESCLOSE` | `PRCLOSE` | Den Bereich Eigenschaften an den Fensterrand einklappen |
| `PSPACE` | `PS` | Das Ansichtsfenster verlassen, in dem Sie arbeiten, und zum Blatt zurückkehren (oder außerhalb doppelklicken). |
| `PUBLISH` | `-PUBLISH` | Mehrere oder alle Blätter in eine PDF-Datei plotten (eine Seite und ein Lesezeichen je Blatt) |
| `PURGE` | `PU` | Blockdefinitionen entfernen, die nichts verwendet |
| `QDIM` |  | Schnellbemaßung: mehrere Objekte auf einmal bemaßen (fortlaufend, Grundlinie, versetzt, Koordinate, Radius oder Durchmesser) |
| `QPMODE` | `QP` | Schnelle Eigenschaften am Cursor ein oder aus |
| `QSELECT` | `QS` | Schnellauswahl: jedes Objekt eines Typs, dessen Layer, Farbe, Größe oder Name passt (QS) |
| `RASTERSNAP` |  | Einrasten an den Linien gescannter Blätter ein- oder ausschalten. |
| `RAY` |  | Strahl: eine Konstruktionslinie von einem Punkt aus, in eine Richtung unbegrenzt. |
| `RECOVER` |  | Öffnet eine beschädigte DXF- oder DWG-Datei: überspringt, was sich nicht lesen lässt, statt die Datei abzulehnen, nennt das Übersprungene und prüft und repariert die Zeichnung wie AUDIT. |
| `RECTANG` | `REC`, `RECTANGLE` | Eine geschlossene Polylinie aus zwei Ecken |
| `REDLINE` | `RDL` | Rotstift in Revision: ein MarkupCraft-Rotstiftpaket lesen, jede Änderung annehmen oder ablehnen, die angenommenen mit einem Revisionsprotokoll mit Wolke versehen und die Antwortdatei speichern (RDL) |
| `REDO` |  | Wiederholen, was rückgängig gemacht wurde |
| `REFCLOSE` |  | Die Bearbeitung eines Blocks an Ort und Stelle beenden: speichern oder die Änderungen verwerfen |
| `REFEDIT` |  | Einen Block an Ort und Stelle bearbeiten, dort, wo eine seiner Referenzen liegt, der Rest der Zeichnung verblasst; REFCLOSE speichert ihn |
| `REGEN` | `RE` | Das Gezeichnete auf diesem Tab aus der Zeichnung neu aufbauen |
| `REGENALL` | `REA` | Das Gezeichnete auf jedem Tab, in jedem Teilfenster und jeder offenen Zeichnung neu aufbauen |
| `REGION` | `REG` | REGION (REG): ebene Flächen (Regionen) aus geschlossenen Objekten oder aus Linien, Bögen und Polylinien erstellen, die eine Schleife Ende an Ende schließen. UNION, SUBTRACT und INTERSECT verbinden dann Regionen, und MASSPROP gibt ihre Querschnittseigenschaften. |
| `REGISTERSCANS` | `REGSCAN`, `SCANREG` | Mehrere Scans registrieren: sie in einem Rahmen über gewählte Punktpaare oder Ziele platzieren, mit ICP verfeinern, eine LAS- oder E57-Datei exportieren |
| `REINIT` |  | Ihre Aliasdatei neu laden |
| `RENAME` | `-RENAME`, `REN` | Einen Layer oder Block umbenennen (jedes Objekt oder jede Referenz folgt) |
| `REVCLOUD` | `RC` | Revisionswolke: ein Rechteck, ein Polygon, einen Freihandpfad oder ein Objekt umranden (RC) |
| `REVOLVE` | `REV` | Geschlossene 2D-Objekte um eine Achse zu Volumenkörpern drehen (3D) |
| `ROTATE` | `RO` | Objekte um einen Basispunkt drehen |
| `SAMPLES` | `SAMPLE` | Eine der Beispielzeichnungen von CadCraft öffnen (ein Architektursatz, ein Bestandsplan), um daraus zu lernen |
| `SAVE` | `QSAVE` | Die Zeichnung in ihrem Format (DWG oder DXF) herunterladen |
| `SAVEAS` |  | Die Zeichnung als DWG oder DXF herunterladen: Sie wählen, welches |
| `SAYSEL` |  | Sagt, was ausgewählt ist, je ein Satz pro Objekt. |
| `SCALE` | `SC` | Objekte um einen Basispunkt skalieren |
| `SCALELISTEDIT` | `SCALELIST` | Eigene Maßstäbe der Zeichnung hinzufügen, bearbeiten und löschen; sie erscheinen in den Maßstabslisten des Ansichtsfensters und des Plots und werden in der Datei gespeichert (SCALELIST) |
| `SCANALIGN` | `SCL` | Ein gescanntes Blatt an zwei Punkte ausrichten: verschieben, drehen und bei Wahl skalieren. |
| `SCANATTACH` | `SCA`, `SCANIMAGE` | Eine gescannte Zeichnung einfügen: eine PNG, JPEG oder TIFF (eine Seite oder alle Seiten einer mehrseitigen Datei) oder eine PDF-Seite, die ein Bild ist. |
| `SCANCLEAN` | `SCC` | Ein gescanntes Blatt schwarzweiß machen und Flecken entfernen. |
| `SCANCROP` | `SCR` | Ein gescanntes Blatt auf ein Fenster zuschneiden. |
| `SCANDESKEW` | `SCD` | Den Winkel finden, in dem die langen Linien eines gescannten Blatts liegen, und das Blatt rechtwinklig drehen, sobald Sie den Winkel annehmen. |
| `SCANERASE` | `SCE` | Einen Bereich eines gescannten Blatts löschen: ein Rechteck, ein Polygon oder ein Lasso. |
| `SCANINFO` | `SCI` | Die ursprüngliche Datei eines gescannten Blatts und die seither ausgeführten Schritte anzeigen. |
| `SCANSCALE` | `SCS` | Ein gescanntes Blatt skalieren: zwei Punkte darauf wählen und den wahren Abstand dazwischen eingeben. |
| `SCANTRACE` | `SCT` | Ein gescanntes Blatt auf einen neuen Layer in Linien und Bögen nachzeichnen, mit einer Toleranz, die Sie festlegen. Text und Schraffur bleiben als Raster. |
| `SELECT` |  | Objekte jetzt auswählen (für P, Vorherige, im nächsten Befehl) |
| `SELECTALL` | `AI_SELALL` | Jedes bearbeitbare Objekt auf diesem Tab auswählen (Strg+A) |
| `SELECTSIMILAR` | `SIM` | Jedes Objekt auswählen, das wie die gewählten ist: gleicher Typ, Layer und Farbe (SIM) |
| `SHEETSET` | `SSM`, `SHEETSETMANAGER` | Zeigt den Bereich Blattsatz: Blätter aus vielen Zeichnungen, nummeriert, als eine PDF-Datei veröffentlicht. |
| `SHORTCUTS` | `KEYS` | Einem beliebigen Befehl eine eigene Taste geben (Strg oder Alt mit einem Buchstaben, oder eine freie Funktionstaste), in diesem Browser oder der Desktop-App gespeichert. |
| `SHXFONTS` | `SHX` | CadCraft eigene SHX-Schriften aus einem Ordner oder Dateien geben, damit Textstile, die sie nennen, damit zeichnen (auflisten, entfernen, umkehren) |
| `SKETCHFIX` | `SKF` | Freihandstriche zeichnen; jeder wird zu einer sauberen Linie, einem Kreis, Bogen, Rechteck oder einer Polylinie, rechtwinklig und an die anderen angeschlossen. |
| `SKETCHLIVE` | `SKL` | Mit dem Stift skizzieren: jeder Strich wird beim Abheben des Stifts zu einer genauen Linie, einem Kreis, Bogen oder Rechteck, am Zeichnungsfang ausgerichtet, mit einer Größe, die Sie überschreiben können. |
| `SPLINE` | `SPL` | Einen Spline durch Punkte (oder mit einem Kontrollpolygon) zeichnen oder eine Polylinie in einen umwandeln |
| `SPLINEDIT` | `SPE` | Einen Spline bearbeiten: Passpunkte, Kontrollpunkte und Gewichte, öffnen oder schließen, umkehren oder in eine Polylinie umwandeln |
| `SPLIT` |  | Den Zeichenbereich in Teilfenster teilen (wie VPORTS auf dem Modell; auch von einem Blatt aus) |
| `STEELMEMBER` | `SMEMBER` | Ein Stahlstab in 3D aus einem Normprofil: zwei Punkte (ein Träger) oder ein Basispunkt und eine Höhe (Stütze) |
| `STLOUT` |  | Das 3D-Modell als STL (Millimeter) exportieren |
| `STRETCH` | `S` | Strecken: ein Kreuzungsfenster über die Enden ziehen, um zu verschieben; was darin liegt, bewegt sich, der Rest bleibt (S) |
| `STYLE` | `ST`, `TEXTSTYLE`, `DDSTYLE` | Textstile: Schrift, Höhe, Breite und Neigung, die neuer Text erhält (das Dialogfeld; -STYLE in der Befehlszeile) |
| `SUBTRACT` | `SU` | Volumenkörper von anderen abziehen (3D) oder 2D-Regionen von Regionen |
| `SWBOUT` | `SWMACRO` | Ein Makro für SolidWorks (.swb) herunterladen, das das Modell als eine einzige bemaßte Skizze neu aufbaut |
| `SWEEP` |  | Geschlossene 2D-Objekte entlang eines Pfads (Linie, Polylinie, Bogen, Kreis) zu Volumenkörpern führen (3D) |
| `TABLE` | `TB` | Eine Tabelle erstellen: Zeilen und Spalten oder aus Tabellenzellen der Zwischenablage oder einer CSV-Datei |
| `TABLEDIT` | `TABLEEDIT`, `TABEDIT` | Eine Tabelle bearbeiten: in eine Zelle schreiben, Zeilen und Spalten einfügen und löschen, Größen, verbundene Zellen, Ausrichtung |
| `TABLEEXPORT` |  | Speichert, was eine Tabelle zeigt, als CSV-Datei |
| `TABLEPASTE` | `PASTETABLE` | Erstellt eine Tabelle aus Tabellenzellen der Zwischenablage |
| `TABLESTYLE` | `TS` | Tabellenstile: Texthöhen, Ausrichtung, Rand und Rahmen für Titel-, Kopf- und Datenzeilen |
| `TAGS` |  | Kennzeichnungen an Blockreferenzen: eine Kennzeichnung definieren (Art, zulässige Werte, Blöcke, für die sie gilt), auf die gewählten Referenzen setzen und als Liste auflisten, die Sie als CSV speichern können |
| `TEXT` | `DT`, `DTEXT` | Einzeiliger Text; Enter beginnt die nächste Zeile |
| `TEXTEDIT` | `ED`, `DDEDIT` | Text an Ort und Stelle bearbeiten: einen Text wählen (oder doppelklicken) (ED) |
| `TEXTMASK` | `TMASK` | Eine Hintergrundmaske hinter Texte legen (der Hintergrund der Zeichnung oder eine Farbe) oder sie entfernen. |
| `TEXTTOFRONT` |  | Alle Texte, Bemaßungen und Führungslinien vor alles andere bringen. |
| `TOOLBAR` |  | Wählen, was die Schaltflächen der Symbolleiste zeigen: Symbole und Text, nur Symbole oder nur Text (Strg+F1) |
| `TOOLBARDOCK` | `TBDOCK` | Die Symbolleiste oben, unten, links oder rechts im Fenster platzieren |
| `TOOLBARROWS` |  | Wählen, wie viele Zeilen die Symbolleiste verwendet: umbrechen, 2 oder 1 (Umschalt+Strg+F1) |
| `TOPAREA` |  | Die Leisten über der Zeichnung auf Standard oder kompakt stellen |
| `TOUCHCROSSHAIR` | `TCX` | Versetztes Fadenkreuz für das Zeichnen mit dem Finger: ein Finger bewegt ein Fadenkreuz, das darüber und seitlich liegt, sodass der Finger den Auswahlpunkt nicht verdeckt. Den Finger abheben wählt nichts; die Schaltfläche Klicken oder ein Tippen mit einem zweiten Finger wählt am Fadenkreuz, und Klicken gedrückt halten beim Bewegen zieht. Langes Drücken oder die Schaltfläche Enter ist Enter. Zwei Finger verschieben und zoomen. Optionen: EIN, AUS, Auto (nur dort ein, wo ein Finger der einzige Zeiger ist), Abstand, Seite. |
| `TOUR` | `TUTORIAL` | Die sechsschrittige Einführung in die erste Zeichnung erneut starten |
| `TRIM` | `TR` | Objekte bis dorthin kürzen, wo andere sie kreuzen: ein Stück klicken, über mehrere ziehen oder Shift+Klick zum Verlängern |
| `TRIMEXTENDMODE` |  | Wie TRIM und EXTEND beginnen: 1 Schnell (jedes Objekt ist eine Schneid- oder Begrenzungskante), 0 Standard (zuerst die Kanten wählen) |
| `TTR` |  | Ein Kreis, der zwei Objekte tangiert, mit einem von Ihnen angegebenen Radius (wie CIRCLE T). |
| `TURNLEFT` |  | Die Ansicht um 90° nach links drehen (gegen den Uhrzeigersinn): BKS Z -90, und die Ansicht folgt. Nichts in der Zeichnung wird verschoben. |
| `TURNRIGHT` |  | Die Ansicht um 90° nach rechts drehen (im Uhrzeigersinn): BKS Z 90, und die Ansicht folgt. Nichts in der Zeichnung wird verschoben. |
| `TURNWORLD` |  | Zurück zur Welt: BKS Welt, und die Ansicht ist wieder waagrecht. |
| `TXT2MTXT` | `T2M` | Einzeilige Texte zu einem Absatztext verbinden, von oben nach unten. |
| `UCS` |  | Ihr eigenes Koordinatensystem: ein Ursprung und eine X-Achse (Ursprung, Z-Winkel, 3Punkt, Objekt, Vorherige, Welt, Benannt). Eingegebene Punkte, Ortho, Polare Spur, Raster und neuer Text folgen ihm; die Ansicht dreht sich, sodass ihre X-Achse waagrecht liegt. Nichts in der Zeichnung wird verschoben. |
| `UNDO` | `U` | Den letzten Befehl rückgängig machen |
| `UNGROUP` |  | UNGROUP: Gruppen auflösen. Objekte der Gruppen wählen oder einen Namen angeben. Die Objekte bleiben in der Zeichnung. |
| `UNION` | `UNI` | Volumenkörper zu einem vereinen (3D) oder 2D-Regionen zu einer Region |
| `UNISOLATEOBJECTS` | `UNISOLATE`, `UNHIDE` | Jedes Objekt, das ISOLATEOBJECTS oder HIDEOBJECTS ausgeblendet hat, wieder einblenden. |
| `UNITS` | `UN`, `DDUNITS` | Wie Längen angezeigt und eingegeben werden: dezimal, Fuß und Zoll, Brüche (UN) |
| `UPDATEFIELD` | `UPDATEFIELDS` | Felder neu berechnen und festlegen, wann sie sich von selbst aktualisieren |
| `USDOUT` |  | Das 3D-Modell als USD exportieren (.usda-Text, .usdc-Binär oder ein .usdz-Paket) |
| `VIEW` | `-VIEW`, `V` | Standardansichten in 3D, perspektivisch oder parallel (3D) |
| `VIEWBASE` | `FLATSHOT` | Eine flache 2D-Ansicht der 3D-Volumenkörper (Vorne, Oben, Seite oder Isometrie, verdeckte Linien gestrichelt) auf ein Blatt oder ins Modell setzen |
| `VIEWLABEL` | `VL` | Ein Ansichtstitel auf einem Blatt, der den Namen der Ansicht seines Ansichtsfensters zeigt und sich mit ihr ändert. |
| `VOICE` |  | Gesprochene Befehle ein- oder ausschalten. Sie werden auf diesem Computer erkannt. |
| `VPCLIP` |  | Ein Blatt-Ansichtsfenster auf ein geschlossenes Objekt oder ein gezeichnetes Polygon zuschneiden; Entf macht es wieder zu einem Rechteck |
| `VPLAYER` |  | Layer in einigen Ansichtsfenstern nur einfrieren oder auftauen (Einfrieren, Auftauen, Zurücksetzen) und wählen, welche Layer neue Ansichtsfenster eingefroren beginnen (Vpvisdflt). |
| `VPORTS` | `VIEWPORTS` | Den Zeichenbereich in Teilfenster teilen, jedes mit eigener Ansicht (auf einem Blatt: ein Ansichtsfenster, wie MVIEW) |
| `VPVIEW` |  | Festlegen, was ein Ansichtsfenster zeigt: ein Fenster auf dem Modell wählen |
| `VSCURRENT` | `VS`, `SHADEMODE` | Visueller Stil der 3D-Ansicht: schattiert, Kanten, verdeckte Linien, Drahtmodell, Röntgen |
| `WALL` | `WA` | 2D-Wände wie eine Polylinie zeichnen. Sie verbinden sich und tragen Türen und Fenster. |
| `WALLARC` | `WARC` | Einen Wandbogen zeichnen. Grundrisswände sind gerade, daher wird der Bogen als kurze gerade Wände (je 15 Grad) gezeichnet, die sich verbinden. |
| `WALLDELSEG` |  | Ein Wandstück zwischen zwei Punkten löschen. Was übrig bleibt, bleibt als eine oder zwei Wände. |
| `WALLDIM` |  | Einen neuen Wert für eine Bemaßung eingeben: die Wand an ihrem fernen Ende bewegt sich rechtwinklig zu sich selbst, die Wand am ersten Ende bleibt, und die angeschlossenen Wände folgen. |
| `WALLDISJOIN` |  | Eine Wand nahe einem Ende wählen, um dort Verbindungen zu verhindern: das Ende wird rechtwinklig gezeichnet und nichts folgt ihm. Erneut wählen, um sie zu erlauben. |
| `WALLGRID` |  | Eine Wand an einer Rasterlinie festsetzen: entlang ihr oder mit einem Ende darauf. Die Linie mit GRIDMOVE verschieben, und die Wand folgt. |
| `WALLHOLD` |  | Ausrichten und festsetzen: eine Wand behält ihren Platz gegenüber einer anderen Wand (auf deren Linie oder im bestehenden Abstand). Bewegt sich eine, folgt die andere. |
| `WALLHOLDDIM` |  | Den Abstand zwischen zwei parallelen Wänden festsetzen. Bewegt sich eine, folgt die andere, um ihn zu halten. |
| `WALLHOLDS` |  | Die Festsetzungen der Wände auflisten. |
| `WALLJOINS` |  | Jeder Wand einer älteren Zeichnung ihre ID geben und die Verbindungen zwischen ihnen speichern. Das geschieht auch bei der ersten Änderung, die Sie vornehmen. |
| `WALLJOINSTYLE` |  | Eine Ecke klicken, an der zwei Wände Ende an Ende zusammentreffen, um ihre Zeichnung zu ändern: Gehrung, Stumpf, Rechtwinklig abschließen. T wechselt, welche Wand durchläuft. |
| `WALLOFFSET` | `WO` | Eine Wand um einen Abstand rechtwinklig zu sich selbst verschieben (die angeschlossenen Wände folgen), oder eine Kopie in diesem Abstand erstellen. |
| `WALLPICK` |  | Wände auf einer Linie oder Polylinie der Zeichnung erstellen, mit den daran angeschlossenen Linien, wenn Sie Ja sagen. |
| `WALLPOLY` | `WP` | Wände um ein regelmäßiges Polygon mit 3 bis 64 Seiten zeichnen, wie POLYGON. |
| `WALLRECT` | `WR` | Vier verbundene Wände aus zwei gegenüberliegenden Ecken zeichnen, wie RECTANG. |
| `WALLREJOIN` |  | Zwei Teile einer Wand wieder zu einer Wand machen. Der erste behält seinen Platz in der Zeichnung. |
| `WALLROT` |  | Vier verbundene Wände als ein beliebig gedrehtes Rechteck zeichnen: die erste Seite, dann wie weit die andere Seite liegt. |
| `WALLSPLIT` | `WS` | Eine Wand an einem Punkt oder dort, wo eine andere Wand sie kreuzt, in zwei teilen. Die Teile bleiben verbunden, sofern Sie keine Lücke oder freie Enden verlangen. Türen und Fenster gehen mit ihrem Teil. |
| `WALLSPLITGAP` |  | Eine Wand mit einer Lücke teilen: die Lücke eingeben, die Wand wählen, dann den Punkt. Die Teile behalten freie Enden und können wieder verbunden werden. |
| `WALLSTRETCH` |  | Mit einem Fenster strecken: Wandenden innerhalb bewegen sich, ganz innerhalb liegende Wände bewegen sich als Ganzes, und Wände, die an ihre Seiten stoßen, gleiten mit. |
| `WALLTAN` |  | Eine Wand mit einem Bogen fortsetzen, der sie entlang der Wand verlässt (als kurze gerade Wände gezeichnet). |
| `WALLTRACE` |  | Wände um die kleinste geschlossene Fläche aus Linien und Wänden um den angeklickten Punkt erstellen. |
| `WALLUNHOLD` |  | Die Festsetzungen einer Wand aufheben (und die der anderen Wände zu ihr). |
| `WBLOCK` | `W`, `-WBLOCK` | Einen Block, einige Objekte oder die ganze Zeichnung in eine neue DWG- oder DXF-Datei schreiben (W) |
| `WEDGE` | `WE` | Ein Keil: zwei Ecken und eine Höhe; er fällt von der ersten Ecke weg ab (3D) |
| `WHEREAMI` | `WHERE` | Sagt, wo der Cursor ist. |
| `WHOHAS` |  | Sagt, wer eine Zeichnung geöffnet hat. CadCraft Studio hält neben jeder geöffneten Zeichnung eine kleine Sperrdatei (Plan.dwg.cclock: wer, seit wann, welche Version) und entfernt sie beim Schließen. Optionen: Aktuell (die geöffnete Zeichnung), Datei (eine wählen), Ordner (jede Zeichnung in einem Ordner, die irgendwo geöffnet ist; damit kann Studio dort Sperrdateien halten), Pfad (eingeben), Name (der Name, den andere sehen). Eine Sperre, die fünf Minuten lang nicht erneuert wurde, gilt als veraltet. Im Browser nicht verfügbar. |
| `WINDOW` | `WN` | Ein Fenster in eine Wand setzen. |
| `XATTACH` | `XA` | Eine andere DWG oder DXF in diese Zeichnung verknüpfen, nur lesbar angezeigt (XREF listet und lädt sie neu) |
| `XCLIP` | `XC` | Blockreferenzen und verknüpfte Zeichnungen auf ein Rechteck oder Polygon zuschneiden oder den Zuschnitt entfernen. |
| `XLINE` | `XL` | Konstruktionslinie, nach beiden Seiten unbegrenzt: durch zwei Punkte, waagrecht, senkrecht, unter einem Winkel, den Winkel halbierend oder als Versatz einer Linie. |
| `XREF` | `XR`, `-XREF` | Verknüpfte Zeichnungen (externe Referenzen): auflisten, anfügen, neu laden, binden, lösen |
| `ZOOM` | `Z` | Grenzen oder ein Fenster |
