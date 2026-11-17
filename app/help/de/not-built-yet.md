---
title: Noch nicht umgesetzt
summary: Was diese Version der Zeichenanwendung CadCraft noch nicht kann und was Sie stattdessen heute tun können.
keywords: fehlend, Einschränkungen, ctb, stb, Plotstil, Eigenschaften, ucs, beschriftungsfähig, dynamischer Block, Spline, Roadmap, nicht unterstützt, DWG speichern, Schraffur, Strecken, Anordnung, Verbinden, matchprop, Brechen, Längen, Linientyp, Linienstärke, Xref, Wolke, 3d, Volumenkörper, Boolesche Operationen, Multi-Führungslinie, Abdeckung
from: 87e56521
---

CadCraft befindet sich in Entwicklung. Diese Seite listet auf, was die aktuelle Version nicht kann, damit Sie nicht danach suchen müssen. Jeder Eintrag sagt, was Sie stattdessen heute tun können.

## Dateien und Speichern

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Eine CadCraft-DWG, in AutoCAD selbst geprüft | Jede gespeicherte Version wird von den DWG-Lesern dreier anderer Programme und von CadCraft wieder eingelesen. Siehe [Was eine DWG beibehält und ändert](topic:files#what-a-dwg-keeps-and-changes). |
| DXF speichern, neuer als 2000 | Als DXF 2000 speichern oder als DWG bis AutoCAD 2018. |
| Im Browser über die geöffnete Datei speichern | Jedes Speichern lädt eine neue Kopie herunter; ersetzen Sie die alte Datei selbst, wenn Sie möchten. In CadCraft Studio schreibt {{key:Mod+S}} zurück in die geöffnete Datei. |
| Cloud-Speicherung und Synchronisierung zwischen Computern | CadCraft sendet seine Speicherungen noch nicht in die Cloud: Bewahren Sie Ihre DWG- und DXF-Dateien in Ihren eigenen Ordnern auf. In CadCraft Studio listet der [Verlauf](topic:history) die Cloud-Versionen einer Zeichnung, die anderswo gespeichert wurde, sowie Kopien Ihrer eigenen Speicherungen auf diesem Computer. |
| Überlagerungen und das Bearbeiten einer verknüpften Zeichnung an Ort und Stelle | Fügen Sie die Zeichnung als Verknüpfung ein und laden Sie sie neu, nachdem Sie die andere Zeichnung geändert haben. Eine Verknüpfung bleibt beim Speichern als DWG eine Verknüpfung, und {{cmd:XCLIP}} schneidet sie zu. |
| Bilder in DXF; Abdeckungen, die darunterliegendes verbergen | DXF behält ein Bild als seinen Rahmen mit dem Dateinamen; DWG behält es als Bild – siehe [Bilder in einer Zeichnung](topic:pictures). Eine Abdeckung wird als ihr Rahmen angezeigt. |
| Multi-Führungslinien mit gekrümmten Führungslinien, mit Führungslinien auf beiden Seiten des Inhalts oder mit einem Block, der ungleichmäßig gedreht oder skaliert ist, bearbeiten | Sie werden so gezeichnet, wie das andere Programm sie gezeichnet hat, und bewegen sich als Einheit. Multi-Führungslinien mit geraden Führungslinien zu einer Ablage sowie Text oder ein Block als Inhalt sind bearbeitbar ({{cmd:MLEADEREDIT}}). |
| In Tabellen aus anderen Programmen: eine Zelle mit einem Block, Textformatierung in einer Zelle, Rahmen und Farben je Zelle in der Tabelle einer DXF, eine in Spalten aufgeteilte Tabelle | Die Tabelle wird als bearbeitbare Tabelle ({{cmd:TABLEDIT}}) geöffnet und so angezeigt, wie das andere Programm sie gezeichnet hat, bis Sie sie bearbeiten; dann zeichnet CadCraft sie aus ihren Zellen neu: reiner Text, Formeln wie `=G3*H3` und `=Sum(I3:I9)`, Ausrichtung und Texthöhen. Eine Blockzelle ist danach leer. Eine unbearbeitete DWG-Tabelle wird mit den Zellendaten gespeichert, die sie mitbrachte. |
| Ein echtes Tabellenobjekt in einer gespeicherten DXF | Eine DWG behält eine Tabelle als Tabelle, die andere Programme bearbeiten können. Eine DXF behält sie als Block, der sie zeichnet, mit einem eigenen Datensatz von CadCraft: CadCraft öffnet sie wieder als Tabelle; andere Programme sehen einen Block. Eine gespiegelte oder ungleichmäßig skalierte Tabelle wird auch in einer DWG so gespeichert. |
| Kopieren und Einfügen mit anderen Programmen | Die Zwischenablage von CadCraft funktioniert zwischen CadCraft-Zeichnungen und Registerkarten im selben Browser, nicht mit anderen Programmen. Speichern Sie als DWG oder DXF und öffnen Sie die Datei dort. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste). |

## Zeichnen und Bearbeiten

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Schraffurmuster, die CadCraft nicht hat, und Farbverläufe genau so, wie andere Programme sie malen | Geöffnete Schraffuren mit Mustern, die CadCraft nicht hat, werden als Ton angezeigt. Ein Farbverlauf ({{cmd:GRADIENT}}) wird für jeden Typ auf CadCraft-eigene Weise gemalt: ähnlich wie bei anderen Programmen, aber nicht Punkt für Punkt. DWG 2004 und neuer behalten ihn als echte Farbverlaufsschraffur; in einer DXF-2000- oder DWG-2000-Datei liest nur CadCraft ihn zurück, andere Programme sehen eine Vollfläche. Muster werden aus einer `.pat`-Datei geladen; eine Schraffur kann mit ihrer Begrenzung verknüpft werden und folgt ihr dann: siehe [Schraffur und Füllflächen](topic:hatch). |
| Linientypen mit Formen oder Text darin und Linienstärken in einer gespeicherten DXF R12 | Formen und Text im Linientyp einer Datei fallen aus den Strichen heraus; speichern Sie als DWG, um Linienstärken zu behalten. |
| Gemusterte Schraffuren in einer gespeicherten DXF | R12 kennt keine Schraffur: Sie werden als ihre Umrisse gespeichert. Speichern Sie als DWG, um das Muster zu behalten. |
| Anordnungen, die ein anderes Programm erstellt hat oder bearbeiten kann; Zeilen und Ebenen in Pfad- und Polaranordnungen; eine Anordnung, die ihrer Pfadkurve folgt | Eine mit ASsoziativ ({{cmd:ARRAY}}, {{cmd:ARRAYPATH}}; geändert mit {{cmd:ARRAYEDIT}}) erstellte Anordnung wird als Blockreferenz mit den eigenen Zahlen von CadCraft gespeichert: andere Programme zeigen, verschieben, plotten und zerlegen sie, können aber ihre Anzahl nicht ändern. Eine in einem anderen Programm erstellte Anordnung wird hier als einfache Blockreferenz geöffnet. Eine Pfadanordnung behält eine Kopie ihres Pfads: Wenn Sie die Kurve danach ändern, bewegen sich die Elemente nicht mit. |
| Zugeschnittene Blatt-Ansichtsfenster von und zu anderen Programmen | Ein mit {{cmd:VPCLIP}} zugeschnittenes oder mit {{cmd:MVIEW}} Polygonal oder Objekt erstelltes Ansichtsfenster wird mit dem eigenen Umriss von CadCraft gespeichert: andere Programme öffnen es als das Rechteck darum herum, und ein in einem anderen Programm zugeschnittenes Ansichtsfenster wird hier als sein Rechteck geöffnet. DXF R12 behält nur das Rechteck. |
| {{cmd:STRETCH}} mit einem kreuzenden Polygon | Verwenden Sie ein oder mehrere Kreuzen-Fenster. |
| {{cmd:PEDIT}} Scheitelpunkt bearbeiten (ein Scheitelpunkt nach dem anderen in der Befehlszeile) | Griffe und der Scheitelpunkt-Browser im Bereich Eigenschaften (jeder Scheitelpunkt mit seinen Breiten und seiner Ausbuchtung). Der Rest von PEDIT ist umgesetzt: siehe [Splines und Polylinien](topic:splines). |
| {{cmd:BREAK}}, {{cmd:LENGTHEN}}, {{cmd:OFFSET}}, {{cmd:TRIM}}, {{cmd:EXTEND}}, {{cmd:FILLET}} und {{cmd:JOIN}} auf Ellipsen und Splines | {{cmd:EXPLODE}} einen Spline (oder {{cmd:PEDIT}} ihn), um eine Polylinie zu erhalten, die diese Befehle verwenden. |
| Abrunden und Fasen zwischen einem Bogensegment einer Polylinie und dem daneben liegenden Segment; Abrunden, das eine Linie in eine Polylinie verbindet | {{cmd:EXPLODE}} die Polylinie, dann die Teile abrunden. Der Rundungsbogen wird als eigenes Objekt hinzugefügt. |
| Stutzen und Dehnen: die Option Projizieren (3D) und das Dehnen des Bogenendes einer Polylinie | Stutzen Sie in der Ebene der Zeichnung; für ein Bogenende zerlegen Sie die Polylinie oder zeichnen den Bogen neu. |
| OLE-Objekte: einfügen, ausführen oder bearbeiten; die Objekte in einer DWG an der Stelle anzeigen, an die die Datei sie setzt; Metafile-Bilder | Siehe [Bilder](topic:pictures#objects-from-other-programs-ole). Die Objekte einer DXF werden als ihr Bitmap oder als beschrifteter Rahmen angezeigt; die einer DWG bleiben erhalten und werden nicht an ihrer Stelle gezeichnet ({{cmd:OLELIST}} listet sie auf und setzt auf Ihre Angabe eine Kopie eines Bildes an die gewählte Stelle). |
| Formatierungscodes eingeben (fett, gestapelte Brüche, Farben je Wort) im Absatztext; andere Schriften als die eine Helvetica-ähnliche Schrift; Spalten | Formatierung, die aus einer Datei kam, bleibt erhalten, wird gezeichnet und gespeichert (siehe Text); neuer Absatztext hat eine Höhe und eine Farbe. |
| Absatztext, der an seiner Drehung bearbeitet wird | Der Editor öffnet sich waagerecht; der Text behält seine Drehung. |
| Multi-Führungslinien, die in einer DXF als Multi-Führungslinienobjekte gespeichert werden | Eine DWG behält sie als Multi-Führungslinien, mit jeder Führungslinie und einem Block als Inhalt; eine DXF behält, was sie zeichnen (Linien, Pfeilspitzen und den Text oder den Block). |
| In Tabellen ({{cmd:TABLE}}): Text, der in einer Zelle umbricht, Tabellen, die sich in Teile aufteilen, der eigene Textstil eines Tabellenstils und Farben je Zeilenart in einem Dialogfeld, eine Datenverknüpfung zu einer Tabellenkalkulationsdatei (`.xlsx`) oder zu einer, die die Datei selbst liest | Der Text einer Zelle bricht nur dort um, wo Sie ihn umbrechen ({{key:Alt+Enter}}); machen Sie die Spalte breiter. {{cmd:DATALINK}} liest eine `.csv`-Datei, und {{cmd:DATALINKUPDATE}} bittet Sie, die Datei erneut zu wählen. {{cmd:DATAEXTRACTION}} und {{cmd:COUNTTABLE}} erstellen eine Tabelle, die der Zeichnung nicht von selbst folgt: führen Sie sie erneut aus (eine Live-Zählung: {{cmd:BOMTABLE}}). |
| Attributdefinitionen, die in einer gespeicherten Datei für sich bestehen bleiben (außerhalb eines Blocks), mehrzeilige Attribute | Fügen Sie Attributdefinitionen vor dem Speichern in einen Block ein: allein gespeichert werden sie als Text mit dem Tag angezeigt. |
| Layerzustände (speichern und wiederherstellen, welche Layer eingeschaltet sind) | Verwenden Sie {{cmd:LAYISO}} / {{cmd:LAYUNISO}} oder schalten Sie Layer von Hand ein und aus. |
| Auswahl mit Fensterpolygon und Kreuzungspolygon sowie gespeicherte Auswahlfilter | Zaun (`F`), Fenster, Kreuzen, Entfernen (`R`), {{cmd:QSELECT}} für eine Regel. |

## Der Bereich Eigenschaften

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Die Auswahlmöglichkeiten für Einpassen zeichnen sowie die waagerechte Textposition und der Text unter der Linie bei anderen Bemaßungen als linearen und ausgerichteten | Sie werden am Objekt behalten, im Bereich Eigenschaften angezeigt und gespeichert; CadCraft platziert den Text nach seiner eigenen Regel. |
| Materialien, die andere Programme sehen | Eine gespeicherte Datei behält den Materialnamen für CadCraft; andere Programme zeigen das Material des Layers. |
| Transparenz in DWG-2000- und DXF-Dateien | Andere Programme zeigen diese Objekte voll deckend; CadCraft behält die Transparenz. Speichern Sie als DWG 2004 oder neuer, damit alle sie sehen. |
| Eine in einem anderen Programm erstellte Schraffurverknüpfung | CadCraft speichert seine eigene Verknüpfung in DWG- und DXF-2000-Dateien; Verknüpfungen aus anderen Programmen werden nicht gelesen. Verwenden Sie `HATCHEDIT` und Verknüpfung: siehe [Schraffur und Füllflächen](topic:hatch). |
| Koordinaten im Bereich Eigenschaften im BKS | Eigenschaften zeigt Weltkoordinaten; die Statusleiste und {{cmd:ID}} zeigen BKS-Koordinaten. Siehe [Ansicht drehen und eigene Koordinaten verwenden](topic:ucs-and-turned-view). |
| Eine eigene Position für ein beschriftungsfähiges Objekt in jedem seiner Maßstäbe; das Lesen der Datensätze je Maßstab, die andere Programme führen | Ein beschriftungsfähiger Text oder eine Bemaßung behält eine Liste von Maßstäben ({{cmd:OBJECTSCALE}}), und jedes Ansichtsfenster zeigt sie in der Größe für seinen Maßstab an, am selben Ort. Die Liste wird als eigene Daten von CadCraft gespeichert: ein anderes Programm sieht das Objekt im einen Maßstab, für den es bemessen ist, und eine in einem anderen Programm erstellte Liste wird nicht gelesen. Siehe [Einheiten, Papier und Maßstäbe](topic:units-papers-scales#annotate-by-scale). |
| Abstände, Winkel oder Spiegelungen eines dynamischen Blocks ändern; dynamische Blöcke dynamisch behalten, wenn Sie in einer anderen DWG-Version oder als DXF speichern | Schalten Sie seinen Sichtbarkeitszustand unter Eigenschaften › {{ui:Benutzerdefiniert}} um; seine übrigen Werte werden dort nur lesend angezeigt. Er bleibt dynamisch, wenn Sie ihn als DWG in der Version speichern, in der die Zeichnung kam. Siehe [Dynamische Blöcke](topic:dynamic-blocks). |
| Toleranz der Spline-Anpassung, Spline-Grad 6 und höher, 3D-Splines | Anpassungs- und Steuerpunkte, Grade 1 bis 5 und Gewichte sind umgesetzt: siehe [Splines und Polylinien](topic:splines). Die Höhe (Z) eines Splines wird nicht behalten. |

## Genauigkeitshilfen

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Spurverfolgung von Punkten über Befehle hinweg und das Dialogfeld für Spureinstellungen (relative Polarwinkel, zusätzliche Winkel) | {{cmd:POLARANG}} legt die Schrittweite fest; erfassen Sie die Punkte im nächsten Befehl erneut. |
| Am Raster fangen | Geben Sie Koordinaten ein; das Raster ist nur eine visuelle Hilfe. |
| Optionen Bogen und Länge beim Wählen der Ecken einer Fläche sowie MEASUREGEOM Volumen | Zeichnen Sie den Umriss mit {{cmd:PLINE}} (einschließlich Bögen) und dann {{cmd:AREA}} `O`. |
| Dynamische Eingabe für Griffe und ihre Optionsliste (der Pfeil nach unten) | Die Befehlszeile zeigt die Optionen. |
| Winkel in Grad-Minuten-Sekunden, Gon oder vermessungstechnischen Richtungswinkeln | Geben Sie Dezimalgrad ein: `30.5` für 30°30'. |
| Ein Dialogfeld zur Ansichtsverwaltung; benannte Ansichten eines Blatts, die auf diesem Blatt wiederkehren | {{cmd:NAMEDVIEW}} listet Ansichten auf und stellt sie wieder her. Eine gespeicherte Datei behält sie, aber die Ansichten eines Blatts kehren auf dem ersten Blatt zurück. |

## Blätter, Bemaßungen und Plotten

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Felder für den Maßstab eines Ansichtsfensters, ein benanntes Objekt wie ein Layer oder ein Block, ein Hyperlink und Blattsatzfelder über Blattnummer und -name hinaus; Felder, die als Feldobjekte geschrieben werden, die andere Programme aktualisieren | {{cmd:FIELD}} hat Datum, Dateiname, Blattnummer, Name und Anzahl, die Eigenschaften der Zeichnung ({{cmd:DWGPROPS}}), die Fläche, Länge und andere Eigenschaften eines Objekts sowie Formeln, in Text, Attributen und Tabellenzellen. Ein anderes Programm zeigt ein CadCraft-Feld als den Text, den es zuletzt gelesen hat; CadCraft liest Datums-, Dateinamen-, Eigenschafts-, Blatt- und Ausdrucksfelder anderer Programme und lässt die übrigen Arten als Text. Der Maßstab eines Ansichtsfensters wird von Hand eingegeben. |
| Speichern, welcher Bemaßungsstil aktuell ist; Bemaßungstext, der an eine freie Stelle gezogen wird | Eine Zeichnung öffnet sich mit dem Stil „Standard“ als aktuellem Stil. Der Text sitzt auf der Maßlinie (DIMTEDIT Links / Rechts / Mitte). Siehe [Bemaßungsgrößen festlegen](topic:dimension-settings). |
| Bearbeitbare zweizeilige Winkelbemaßungen aus geöffneten Dateien, die CadCraft nicht auflösen kann | Sie werden so angezeigt, wie sie in der Datei gezeichnet sind. Koordinaten-, Bogenlängen- und abgeknickte Radiusbemaßungen öffnen sich als bearbeitbare Bemaßungen. |
| Prüfung des CTB-Lesers anhand einer Datei aus einem anderen Programm (er ist nach der veröffentlichten Beschreibung umgesetzt), benannte Plotstile (STB), Dithering, Stiftnummern, Graustufen aus einer CTB und adaptive Linientypanpassung in einem Plotstil | Erstellen Sie die Tabelle in {{ui:Plotstiltabellen}} (Farbe, Grau, Tinte, Linienstärke, Linientyp, Linienende und -verbindung sowie Füllstil je Farbe): siehe [Plotstiltabellen](topic:plot-pdf#plot-style-tables). |
| Seiteneinrichtungen | Wählen Sie Papier, Maßstab und Plotstil im Dialogfeld {{ui:In PDF plotten}}; ein Blatt behält seinen Plotstil. |
| Hindi und andere Schriften mit komplexer Formgebung in PDFs sowie seltene Ideogramme (Druck europäischer Schriften, kyrillisch, griechisch, hebräisch, arabisch, persisch, Urdu, Thai, Chinesisch, Japanisch und Koreanisch) | Sie werden als „?“ gedruckt. |
| Arabische Schrift sowie chinesischer, japanischer oder koreanischer Text im selben geplotteten PDF | Ein Plot enthält eine Schrift: eine der beiden Schriftsysteme wird als „?“ gedruckt. |
| Explizite Richtungsmarken im Text (Einbettungen, Überschreibungen, Isolierungen) | Sie werden ignoriert: Jede Zeile wird nur nach ihren Buchstaben geordnet. |
| Bilder innerhalb einer angehängten PDF-Seite in einem Plot | Linien, Füllungen und Text der Seite werden gedruckt. Eine Seite, die nur ein Bild ist, wird mit {{cmd:SCANATTACH}} eingefügt, und Bilder werden gedruckt. Siehe [PDF-Unterlagen](topic:pdf-underlay#plot-and-save). |
| Einen Auftrag von CadCraft Studio an einen Laser senden (Studio hat kein Web Serial) | Speichern Sie den G-Code und senden Sie ihn mit dem eigenen Programm Ihres Lasers oder aus Chrome oder Edge. Siehe [Zeichnung an einen Laser senden](topic:laser-cutting#send-from-the-browser). |

## Abhängigkeiten und Parameter

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Abhängigkeiten auf Blättern, in Blöcken, an Ellipsen, Splines oder Text | Setzen Sie Abhängigkeiten auf der Registerkarte {{ui:Modell}}, an Linien, Polylinien, Kreisen, Bögen und Punkten. |
| Glatt (G2) und direktes Festlegen der Ausbuchtung eines Polylinienbogens | Tangential und gleich; ein Bogensegment folgt seinen beiden Enden. |
| Referenz-Bemaßungsabhängigkeiten (gesteuert) und `3Point` in {{cmd:DCANGULAR}} | Eine einfache Bemaßung (DIMLINEAR …) zeigt einen Wert, ohne ihn zu steuern. |
| Bemaßungsabhängigkeiten mit fester Größe auf dem Papier und ihr Plotten | Sie werden nur auf dem Bildschirm angezeigt; fügen Sie für den Plot einfache Bemaßungen hinzu. |
| Abhängigkeiten, die bei EXPLODE, BREAK, JOIN und anderen Befehlen, die neue Objekte erzeugen, sowie an gestutzten Polylinien erhalten bleiben | Setzen Sie sie erneut (AUTOCONSTRAIN hilft). {{cmd:MIRROR}} und {{cmd:TRIM}} von Linien, Bögen und Kreisen behalten sie. |
| Konfigurationstabellen in CadCraft | Ändern Sie die Parameter im Bereich. |
| Ein geprüfter Hin- und Rückweg mit SolidWorks | Prüfen Sie die Skizze, die das Makro erstellt, bevor Sie sich darauf verlassen. |

## 3D

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Verrundungen, Fasen, Schalen und Lofts; Sweeps entlang eines ansteigenden Pfads (3D-Pfade) | Umrisse mit Bögen extrudieren, Flächen drücken und ziehen, drehen und entlang flacher Pfade sweepen. |
| In eine andere Richtung als nach oben extrudieren | Zeichnen Sie die Form auf dem Boden und extrudieren Sie sie nach oben oder unten (mit einer Verjüngung oder entlang eines Pfads, wenn Sie möchten); drehen Sie den Körper danach. |
| Höhe und Stärke von 2D-Objekten | Die Zeichnung liegt auf dem Boden (Höhe 0) auf der Registerkarte 3D. |
| Bearbeiten von Volumenkörpern, Regionen und Körpern aus anderen Programmen; ihre Anzeige innerhalb von Blöcken; ihre Flächen auf gesweepten, gelofteten oder anderen Freiformflächen; Polyflächen- und Polygonnetze | Volumenkörper im Modellbereich werden auf der Registerkarte 3D so angezeigt, wie sie sind, und beim Speichern als DWG unverändert zurückgeschrieben; was nicht gezeichnet wird, wird beim Öffnen der Registerkarte 3D aufgelistet. Lassen Sie Netze als 3D-Flächen im Modellbereich erstellen. Siehe [Volumenkörper aus anderen Programmen](topic:3d-solids#solids-from-other-programs). |
| Kopieren und Einfügen von Volumenkörpern | Verwenden Sie auf der Registerkarte 3D {{cmd:COPY}}. Die Zwischenablage hält nur 2D-Objekte. |
| Schnitte, Ansichten, die spätere Änderungen an den Volumenkörpern verfolgen, und schattierte Volumenkörper auf geplotteten Blättern | {{cmd:VIEWBASE}} platziert flache Ansichten (eine Momentaufnahme); führen Sie es nach Änderungen an den Volumenkörpern erneut aus. |
| Materialien, Texturen und Beleuchtungseinstellungen | Die visuellen Stile: schattiert, Kanten, verdeckte Linie, Drahtmodell, Röntgen. |
| Kartenlayer, die geplottet werden, auf Ansichtsfenstern der Blätter und auf der Registerkarte 3D; Bilder aus Dateien, die mit der Zeichnung gespeichert wurden; der Standort einer Zeichnung, der für andere Programme in DWG 2000–2007 und DXF R12 geschrieben wird | Kartenlayer werden auf dem Bildschirm unter dem Modellbereich angezeigt; das System und die Layerliste werden mit der Zeichnung gespeichert: siehe [Kartenlayer unter der Zeichnung](topic:map-layers). |
| E57-Scans mit mehr als 6 Millionen Punkten oder 512 MB, eigene Dateien der Scanner-Hersteller (RCP, RCS, FLS, LGS, TZF, ZFS), eine Punktwolke, die mit der Zeichnung gespeichert oder geplottet wird, Fang an einer Wolke auf der Registerkarte 3D, aufrechte (Schnitt-)Scheiben auf der Registerkarte „Modell“ | Exportieren Sie große oder herstellereigene Scans als LAS oder LAZ ([Punktwolkenformate](topic:point-cloud-formats)); hängen Sie die Wolke bei jedem Öffnen der Zeichnung an; verfolgen Sie Linien aus einer Grundrissscheibe auf der Registerkarte „Modell“: siehe [Ist-Linien über einer Punktwolke nachzeichnen](topic:point-clouds). |
| Registrieren von Scans: Zielmarken (Kugeln, Schachbretter) in einem Scan selbst finden, alle Scans gemeinsam lösen (Bündelausgleichung), Maßstab, Registrieren gegen ein Modell | Wählen Sie passende Punkte oder geben Sie Zielkoordinaten ein, dann verfeinern Sie jeweils einen Scan mit ICP: siehe [Mehrere Scans zu einem zusammenführen](topic:register-scans). |

## Routinen und Anpassen

| Noch nicht umgesetzt | Stattdessen, heute |
|---|---|
| Kompiliertes oder geschütztes LISP (.fas, .vlx), native Programme (.arx, .crx, .dbx) und VBA (.dvb) | Laden Sie den `.lsp`-Quelltext einer Routine mit {{cmd:APPLOAD}}. |
| `grread` von LISP, Reaktoren (`vlr-…`), Kurvenfunktionen (`vlax-curve-…`), Wörterbücher und erweiterte Daten, `acet-…` der Express Tools | Der Rest der Sprache läuft: siehe [LISP-Routinen ausführen](topic:run-lisp). Die Befehlszeile nennt eine fehlende Funktion, wenn eine Routine sie aufruft. |
| Bilder und Dias im Dialogfeld einer Routine | Sie werden als leere Rahmen angezeigt; der Rest des Dialogfelds funktioniert. |
| CraftScript (.craft), Lua und Python in CadCraft | Führen Sie sie im Skript-Arbeitsbereich von PartCraft aus. |
| Listen für Layer, Farbe und Linientyp innerhalb der Menüband-Stile | Verwenden Sie den Bereich {{ui:Layer}} und {{ui:Eigenschaften}}. |
| Die Startgruppe und Aliasse, die auf Ihrem Computer gespeichert oder synchronisiert werden | Sie werden in diesem Browser gespeichert; die Desktop-App und der Cloud-Dienst bewahren sie künftig für Sie auf. In Studio werden `acad.lsp` und `acaddoc.lsp` aus einem Unterstützungsordner gelesen, den Sie wählen (Anwendungen laden). |

## Hilfe

Die Hilfe beschreibt diese Version. Wenn etwas hinzukommt, wandert es von dieser Seite in die Schritt-für-Schritt-Anleitungen.
