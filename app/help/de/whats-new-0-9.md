---
title: Neuigkeiten in 0.9 (früher)
summary: Schraffuren, die ihrer Begrenzung folgen, Layergruppen, gestapelte Geschosse, intelligente 2D-Wände mit Türen und Fenstern, Textstile und ein formatierter Texteditor, eine schwebende Befehlszeile, Rasterfang, zehn Arten, einen Bogen zu zeichnen, und der Bereich Dokumente.
keywords: Neuigkeiten 0.9, früheres Release, Neuigkeiten, 0.9, Versionshinweise, Änderungsprotokoll, Schraffur, assoziative Schraffur, hatchedit, pat-Datei, Musterdatei, Layergruppen, laygroup, Geschosse, gestapelte Geschosse, floorlayers, intelligente Wände, Wand, Tür, Fenster, Wandwerkzeuge, Textstil, Stil, MText-Editor, Absatztext, Formatierung, schwebende Befehlszeile, Befehlszeile, oberer Bereich, kompakt, am Raster einrasten, Rasterfang, F9, Bogen, Dokumente, Auschecken, UK-Stahlprofile, draw.io, Thai-Text, DXF R12, Neuigkeiten, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Autovervollständigung, Geist, Tab, sketchfix, photosketch, autosheet, details, gridmove, autodim, tags, redline, merge, git, fossil, access, Zeichnen ohne Sehen, Bildschirmleser, limits, Peilungen, aunits, shx, diagram, ole, Verlauf, vergleichen, in Worten, Eigenschaften, Fuß und Zoll, strecken, Sprachen, Eingabegeräte, Probleme, live, Assistenten
from: 3451e64c
---

Dies hat sich in CadCraft 0.9 gegenüber 0.8.1 geändert. CadCraft ist die 2D- und 3D-Zeichen-App von CadCraft Studio 0.9 und seinen acht Apps. 0.9 vollendet das Zeichnen von Grundrissen, bringt Textstile und einen echten Texteditor und schafft mehr Platz auf dem Bildschirm.

## Neu

### Zeichnen von Grundrissen

- **Schraffuren, die ihrer Begrenzung folgen.** {{cmd:HATCH}} verknüpft sich mit dem, was sie begrenzt. Verschieben, drehen oder skalieren Sie die Begrenzung, folgen Schraffur und Muster; formen Sie sie um, wird die Schraffur neu berechnet. {{cmd:HATCHEDIT}} (`HE`) ändert eine Schraffur danach und stellt die Verknüpfung her oder beendet sie. Siehe [Schraffur und Flächenfüllung](topic:hatch).
- **Schraffurmusterdateien.** Bei der Frage von {{cmd:HATCH}} `Innenpunkt wählen` geben Sie `F` (Musterdatei) ein und wählen eine `.pat`-Datei. Nur Dateien im üblichen Format wurden geprüft.
- **Layergruppen.** Im Bereich {{ui:Layer}} unter {{ui:Werkzeuge}}: {{ui:Neue Gruppe}}, {{ui:Fertige Gruppen hinzufügen}}, {{ui:Nach Name gruppieren}} und {{ui:Layer suchen}}; oder geben Sie {{cmd:LAYGROUP}} (`LG`) ein. Siehe [Eine Zeichnung mit Layern ordnen](topic:layers#group-layers).
- **Gestapelte Geschosse.** {{cmd:FLOORS}} (`FLR`) oder {{ui:Geschosse…}} im Menü {{ui:Mehr}} der Gruppe {{ui:Ansicht}}. Ein Ansichtsfenster auf einem Blatt kann unter {{ui:Angezeigtes Geschoss}} in den Eigenschaften ein Geschoss zeigen. {{cmd:FLOORLAYERS}} macht Geschosse zu Layern für eine Datei, die an jemand anderen geht. Siehe [Geschosse in einer Zeichnung stapeln](topic:floors).
- **Intelligente 2D-Wände, Türen und Fenster.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) und {{cmd:DELOPENING}}. Ecken, T-Verbindungen und Kreuzungen werden für Sie berechnet. Wände führen ein Protokoll, wie sie sich verbinden, und die Eigenschaften erhalten Verbindung am Anfang / am Ende untersagen, eine Ortungslinie und eine bearbeitbare Länge. Siehe [2D-Wände, Türen und Fenster zeichnen](topic:walls-2d).
- **Das Wandwerkzeug für Grundrisswände.** Geben Sie {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} und die übrigen ein. Sie haben noch keine Schaltflächen in der Symbolleiste. Siehe [Wandformen, Schnitte, Versätze und Festsetzungen für 2D-Wände](topic:wall-tools-2d).

### Text

- **Textstile.** {{cmd:STYLE}} (`ST`) oder {{ui:Textstil}} in der Symbolleiste {{ui:Zeichnen}}: benannte Stile mit Schrift, Höhe, Breitenfaktor und Neigung. Siehe [Schrift und Größe von Text mit Textstilen festlegen](topic:text-styles).
- **Ein formatierter Editor für Absatztext.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} oder ein Doppelklick auf Text öffnet ein Feld mit Schrift, Größe, Fett, Kursiv, Unterstreichen, Durchstreichen, Farbe, Ausrichtung und den Zeichen für Grad, Plus-minus und Durchmesser sowie {{ui:OK}} und {{ui:Abbrechen}}. Siehe [Absatztext formatieren](topic:format-paragraph-text).
- **Ein Diagramm aus draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) liest auch eingefügtes draw.io-XML. Siehe [Ein Diagramm aus Text zeichnen](topic:text-to-diagram).
- **Thai-Text in einem PDF-Plot.** Er wurde vorher als Fragezeichen gedruckt.

### Mehr Platz und Zeichenhilfen

- **Eine schwebende, dünnere Befehlszeile und ein kompakter oberer Bereich.** Ziehen Sie den Griff der Befehlszeile, um sie schweben zu lassen, ziehen Sie ihren oberen Rand für weniger Zeilen, und {{key:F2}} öffnet den Verlauf. {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Befehlszeile}} und die Auswahl des oberen Bereichs haben dieselben Einstellungen. Siehe [Einstellungen](topic:settings#command-line).
- **Menü Objektfang.** Rechtsklick auf {{ui:Fang}} in der Statusleiste oder Eingabe von {{cmd:OSNAP}}.
- **Am Raster einrasten.** Die Schaltfläche {{ui:Rasterfang}} in der Statusleiste oder {{key:F9}}: gewählte Punkte gehen zum nächsten Rasterpunkt, wenn kein Objektfang den Punkt übernommen hat.
- **Bogen auf zehn Arten, und Fortsetzen.** {{ui:Bogen}} in der Symbolleiste {{ui:Zeichnen}} oder {{cmd:ARC}}: 3 Punkte, die Familie Start/Zentrum/Ende und die Familie Zentrum/Start/Ende, und Fortsetzen (Enter beim Startpunkt drücken) ab der letzten Linie, dem letzten Bogen oder der letzten Polylinie.
- **Der Bereich Dokumente.** {{cmd:DOCUMENTS}} (`DOCS`) oder {{ui:Dokumente…}} im Menü {{ui:Mehr}} der Gruppe {{ui:Ansicht}}: Revision, Zustand und Auschecken für jede Zeichnung in einem Projektordner. Er öffnet sich als zentriertes Dialogfeld. Siehe [Dokumente](topic:documents).

### Dateien

- **UK-Stahlprofile.** 976 Profile im Bereich {{ui:Standard}}, eingegeben wie auf Zeichnungen (zum Beispiel `305x165x40 UB`).
- **Südafrikanische Pakete** (Zeichenpraxis und Bauvorschriften) als Pakete des Add-ons Bauvorschriften. Die Zahlen sind ungeprüft.
- **Add-ons für CadCraft,** bei Bedarf hinzugefügt und standardmäßig aus: Innenbeleuchtungsplanung, Chipdesign (HDL zu Layout), Routerfräsen, Schaltungssimulation, Rollenkettenräder und Länderpakete der Bauvorschriften.

## Behoben

- Das Verschieben, Drehen oder Skalieren einer Schraffur ließ ihr Muster zurück.
- {{cmd:GRIDMOVE}} nahm eine ganze Grundrisswand mit, die nur an der Rasterlinie beginnt. Eine Wand wird jetzt nach ihren Enden beurteilt.
- Das Raster zeigte sich nur innerhalb der Zeichengrenzen, auch wenn die Grenzen aus waren.
- Die Blockliste im Seitenbereich scrollt, und ein Name, der kein Block ist, listet die Blöcke auf, die damit beginnen („Meinten Sie“).
- DXF-R12-Dateien, die AutoCAD abgelehnt hat („Unbekannter Gruppencode 1001 für Tabelle“), öffnen sich dort jetzt.
- Sehr große Dateien (etwa 70.000 Objekte und mehr) ließen sich mit „Maximum call stack size exceeded“ nicht öffnen.
- DWG-Dateien aus AutoCAD 2018 und neuer mit hoher Wartungsversion ließen sich mit „bad BITLONG code 11“ nicht öffnen.
- Im Feld des Absatztextes behält eine neue Größe, die für einen gewählten Teil eingegeben wird, die Auswahl.

## In jeder App

Bootstrap-Tooltips bei jedem Steuerelement mit einem Hinweis, ein Starttipp, den Sie schließen können, Registerkartenleisten, die scrollen, wenn sie nicht passen, und ein Browser-Tab-Titel, der der offenen Zeichnung folgt (`<Zeichnung> - CadCraft | CadCraft`). {{ui:Einstellungen}} › {{ui:Layout}} ist jetzt eine Auswahlliste mit zweizeiligen Angaben. Die Sprachliste in {{ui:Einstellungen}} ist länger als in 0.8. Gemeinsame Live-Bearbeitung, Bibliothekssammlungen und Gewichts- und Temperatureinheiten sind in den Studio-Hinweisen beschrieben.

## Bekannte Grenzen

- Absatztext hat keine Aufzählungen oder nummerierten Listen, kein Tabulatorlineal und keinen Blocksatz. Plots als PDF setzen Text in Helvetica.
- Grundrisswände sind gerade, daher wird ein Bogen als kurze Wände gezeichnet. Die Prüfung des Wandwerkzeugs durch die Community steht noch aus.
- Layergruppen werden nicht im eigenen Format von AutoCAD geschrieben, daher zeigt AutoCAD eine flache Liste. Andere Programme zeigen alle Geschosse zusammen, sofern Sie nicht {{cmd:FLOORLAYERS}} ausführen.
- Der Bereich Dokumente wurde noch nicht von zwei Personen auf einer echten Freigabe erprobt. Das Routerfräsen lief auf keinem echten Rechner. Die Beleuchtungsberechnung wurde gegen eine Photonen-Verfolgung geprüft, nicht gegen ein anderes Programm. Die Ingenieur-Add-ons sind Prüfhilfen und kein Ersatz für die Prüfung durch einen Ingenieur.
- Andere Sprachen als Englisch sind maschinelle Entwürfe, und einige der neuen Begriffe gibt es nur auf Englisch.

## Früher: 0.8 und 0.8.1

Dies hat sich in CadCraft 0.8 und 0.8.1 gegenüber 0.7 geändert. 0.8 (1. November 2026) bringt Zeichenhilfen, die mit Ihrer eigenen Zeichnung arbeiten, nach Regeln auf Ihrem Computer und ohne Modell; 0.8.1 (2. November 2026) behebt Fehler, die danach gemeldet wurden.

### Neu

**Eine Zeichnung, die Ihren Gedanken zu Ende führt**

- **Ein Geist zeigt, was als Nächstes kommt.** Ohne laufenden Befehl zeigt ein grauer gestrichelter Geist, was die eigenen Muster Ihrer Zeichnung als Nächstes vorsehen: der nächste Ständer im gleichen Abstand, der nächste Schritt einer Treppe, die fehlende Wand eines Raums. Drücken Sie {{key:Tab}}, um ihn als einen Rückgängig-Schritt zu zeichnen, oder {{key:Esc}}, um ihn zu verwerfen. Er schaut nur auf die neuesten Objekte, daher bleibt er bei einer großen Zeichnung flüssig. Schalten Sie ihn in {{ui:Einstellungen}} › {{ui:CadCraft}} oder mit {{cmd:AUTOCOMPLETE}} `Off` aus.
- **Der nächste Punkt beim Zeichnen einer Linie.** Mitten in {{cmd:LINE}} oder {{cmd:PLINE}} ist der Geist der nächste Punkt: der nächste Schritt einer Treppe, die vierte Ecke eines Rechtecks oder der Punkt, der es schließt. Bringen Sie den Cursor nahe daran und drücken Sie {{key:Tab}}, als hätten Sie dort geklickt.
- **Stiftskizzen werden zu präziser Geometrie.** {{cmd:SKETCHFIX}}: zeichnen Sie grobe Striche mit Stift, Maus oder Finger, und jeder wird zu einer sauberen Linie, einem Kreis, Bogen, Rechteck oder einer Polylinie, die an das bereits Gezeichnete fängt. Siehe [Mit dem Stift skizzieren und präzise Geometrie erhalten](topic:sketch-with-a-pen).
- **Ein Foto einer Skizze wird zu einer Zeichnung.** {{cmd:PHOTOSKETCH}} (`PSK`) findet das Papier in einem Foto, begradigt die Perspektive, übernimmt das Papierformat und den Maßstab, die Sie angeben, und zeichnet die Stiftlinien auf einen Layer je Stiftfarbe nach. Beschriftungen werden nicht nachgezeichnet.
- **Nach Regeln bemaßen.** {{cmd:AUTODIM}} (`ADIM`) erstellt Ketten von Bemaßungen entlang der Seiten, die Sie wählen, ein Gesamtmaß, Öffnungsbreiten, Lochdurchmesser und mit `Grid` die Rasterabstände. Eine Bemaßung, die schon da ist, wird nie wiederholt.
- **Eine Rasterlinie verschieben, und die Gruppe folgt.** {{cmd:GRIDMOVE}} (`GM`): Wände, die an der Rasterlinie enden, dehnen sich mit ihr, Wände entlang ihr, Stützen, ihre Blase und Kennzeichnung wandern mit, und Bemaßungen auf ihr messen den neuen Abstand. Ein Rückgängig-Schritt.

**Blätter, Details und Kennzeichnungen**

- **Blätter, die sich selbst anordnen.** {{cmd:AUTOSHEET}} nimmt Ihre benannten Ansichten (oder die einzelnen Teile des Modells), wählt ein Papierformat und einen Standardmaßstab und setzt die Ansichten auf neue Blätter mit Schriftfeld und einer Beschriftung aus Name und Maßstab. Alles bleibt bearbeitbar. Siehe [Blätter automatisch anordnen lassen](topic:lay-out-sheets-for-me).
- **Die eigenen Details Ihrer Firma, angeboten während des Zeichnens.** {{cmd:DETAILS}} (`DET`) hält Ihre eigenen Detailblöcke. Passt Ihre Auswahl zu einem nach den Wörtern auf seinen Layern, Blocknamen und Notizen, sagt die Statusleiste es; wählen Sie es und platzieren Sie es. {{cmd:DETAILS}} › Share legt Ihre Liste in Ihrem Dokumente-Ordner ab und übernimmt, was Ihr Team ergänzt hat. Einstellungen schalten die Vorschläge aus.
- **Kennzeichnungen an Blöcken.** {{cmd:TAGS}} definiert eine Kennzeichnung (ihre Art, die Werte, die sie annehmen darf, die Blöcke, für die sie gilt), setzt sie auf die gewählten Blockreferenzen und listet sie als Liste, die Sie als CSV speichern können. Die Definitionen werden in der DWG gehalten. Siehe [Kennzeichnungen](topic:tags).
- **Zeichengrenzen.** {{cmd:LIMITS}} setzt ein Rechteck für die Zeichnung: Das Raster füllt es, und Zoom Alle zeigt es. Die Grenzen erscheinen als Umriss und werden in DWG und DXF gespeichert, zusammen mit den Papiergrenzen. Siehe [Zeichengrenzen festlegen](topic:drawing-limits).

**Mit anderen Personen und anderen Programmen arbeiten**

- **Eine Markierung in eine Revision umwandeln.** {{cmd:REDLINE}} liest das Paket, das MarkupCraft schreibt, und listet jede Änderung auf. Nehmen Sie jede mit einer Notiz an oder lehnen Sie sie ab; die angenommenen erhalten eine Revisionswolke und ein Revisionsprotokoll in einem Rückgängig-Schritt, und Sie speichern die Antwortdatei, die die Markierungen in MarkupCraft schließt. Siehe [Eine Markierung in eine Revision umwandeln](topic:redline-to-revision).
- **Zeichnungen, die git und Fossil zusammenführen können.** Mit eingeschaltetem {{ui:Zusammenführbare Dateien}} in {{ui:Einstellungen}} › {{ui:CadCraft}} erhält jedes Objekt einen Schlüssel, der sich nie ändert (Dateien sind etwa 10 Prozent größer). `cadcraft merge base ours theirs` führt dann die Änderungen zweier Personen an einer DWG oder DXF Objekt für Objekt zusammen und meldet nur die Stellen, an denen beide dasselbe geändert haben. Siehe [Die Änderungen zweier Personen an einer Zeichnung zusammenführen](topic:merge-drawings).
- **Was sich geändert hat, in Worten.** Im Verlauf gibt Vergleichen eine verständliche Liste: wo sich etwas geändert hat, wie groß die Stellen sind, was hinzugefügt, entfernt oder geändert wurde, und der bearbeitete Text. Siehe [Was sich geändert hat, in Worten sagen](topic:changes-in-words).
- **Peilungen und Winkel.** Geben Sie eine Richtung als Peilung eines Vermessers wie N45°23'30"E ein oder in Grad, Minuten und Sekunden, überall wo ein Winkel verlangt wird; AUNITS legt fest, wie Winkel angezeigt werden. Siehe [Peilungen und Winkel eingeben und anzeigen](topic:bearings-and-angles).
- **Ihre eigenen SHX-Schriften.** Geben Sie CadCraft einen Ordner mit SHX-Schriften, und Textstile, die sie nennen, werden in ihnen gezeichnet, auf dem Bildschirm und in Plots. Siehe [Text mit Ihren eigenen SHX-Schriften zeichnen](topic:shx-fonts).
- **Ein Diagramm aus Text.** {{cmd:DIAGRAM}} liest ein Mermaid-Flussdiagramm, ein PlantUML-Komponentendiagramm, D2 oder eine Von-bis-Liste und zeichnet Blöcke und Verbindungen, die Sie bearbeiten können. Siehe [Ein Diagramm aus Text zeichnen](topic:text-to-diagram).
- **OLE-Objekte in einer DWG.** {{cmd:OLELIST}} listet die OLE-Objekte einer DWG auf, die CadCraft nicht selbst platzieren kann, und platziert eine Kopie eines Bildes, wo Sie es sagen. Siehe [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Ihre Berechnungen bleiben bei der Zeichnung.** Berechnungsblätter und Konstruktionsbegründungen werden mit der Klassentabelle in der DWG gehalten.

**Zeichnen ohne Sehen**

- Schalten Sie {{ui:Zeichnen ohne Sehen}} in {{ui:Einstellungen}} ein (oder geben Sie {{cmd:ACCESS}} ein und antworten Sie mit `On`). CadCraft spricht jeden Befehl und jedes Ergebnis über Ihren Bildschirmleser, beschreibt die Zeichnung und was nahe am Cursor liegt, lässt Sie den Cursor bewegen und Punkte mit der Tastatur wählen, und spielt für jeden Fang und jeden Griff einen Ton. Wo Ihr Browser Sprache auf Ihrem Computer erkennen kann, können Befehle gesprochen werden. Siehe [Zeichnen ohne Sicht](topic:draft-without-sight).

**In jeder App**

- **Sprachen.** 54 Sprachen; zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili, Usbekisch). Andere Sprachen als Englisch sind maschinelle Entwürfe, bis ein Muttersprachler sie liest.
- **Eingabegeräte.** Trackpad, Stift, 3D-Maus, Spielcontroller und MIDI-Steuerung.
- **Zeilen der Symbolleiste und das Eigenschaftenraster.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet Umbrechen, 2 Zeilen oder 1 Zeile in den anderen Apps. CadCraft hat seine eigene Einstellung in {{ui:Einstellungen}} › {{ui:CadCraft}} (siehe [Zeilen der Symbolleiste](topic:settings#toolbar-rows)). Das gemeinsame Eigenschaftenraster ist in drei anderen Apps, nicht in CadCraft.
- **Probleme, Live und Add-ons.** Ein gemeinsamer Bereich Probleme, der in jeder App warnt, eine Live-Ansicht, wer wo ist, in CadCraft Studio (siehe [Gemeinsam an einer Zeichnung arbeiten](topic:work-live)), und eine Liste der Add-ons.
- **Verbinden Sie Ihre KI.** Eine Verbindung von CadCraft Studio zu allen acht Apps, mit einer Stufe je App (nur lesen, vorschlagen oder bearbeiten) und einem Protokoll in Klartext, was der Assistent getan hat. CadCraft hat keine eigene KI, und „In jeder App fragen“ verwendet die KI, die Sie verbinden.

### Behoben in 0.8.1

- **Eigenschaften zeigten 150 statt 12'-6"** in Zeichnungen mit Fuß und Zoll. Felder, die die App selbst liest, behalten wieder ihren Text.
- **DWG-Dateien, deren Klassenabschnitt als falscher Typ gelesen wurde** (GitHub cadcraft#5), öffnen sich jetzt richtig.
- **Das Fadenkreuz erscheint nicht mehr hinter Popups.**
- **Studio und die gepackten Ausgaben können zur Laufzeit die Sprache wechseln.** Vorher waren sie nur auf Englisch. Noch nicht auf jeder Plattform geprüft: Sagen Sie uns, wenn die Sprache nicht wechselt.
- **Tablets im Hochformat** geben der Zeichenfläche die verfügbare Rasterhöhe, und der Blattmodus startet bei 760 px oder weniger.
- **STRETCH mit einem Kreuzungsfenster und LIMITS** wurden bei Studio 0.8.0 gemeldet und waren in der Webversion 0.8 bereits richtig; das Installationsprogramm des Melders war älter. Studio 0.8.1 enthält sie.

### Noch nicht in dieser Version

- **0.8 und 0.8.1 sind nicht code-signiert.** Windows kann warnen (wählen Sie {{ui:Weitere Informationen}} und dann {{ui:Trotzdem ausführen}}); auf einem Mac klicken Sie CadCraft Studio mit der rechten Maustaste an und wählen {{ui:Öffnen}}. Store-Versionen sind angehalten, und das Build für iPad und iPhone wurde für 0.8.1 nicht neu erstellt.
- **Stiftskizzen und Skizzenfotos** wurden nur an erfundenen Fotos und mit einer Maus geprüft, noch nicht mit einem echten Stift, Touchscreen oder einer Handskizze auf Papier.
- **Zeichnen ohne Sehen** wurde mit automatischen Prüfungen getestet, noch nicht mit einem Bildschirmleser oder einem blinden Tester.
- **Details teilen** wurde nicht von zwei Personen geprüft, und ein Team-Cloud-Plan-Ordner als Dokumente-Ordner ist nicht umgesetzt.
- **Zusammenführen** funktioniert für die DWG- und DXF-Dateien von CadCraft; dasselbe für die Dateien der anderen Apps ist nicht umgesetzt.
- **Rückgängig über Fenster hinweg:** CadCraft meldet jeden abgeschlossenen Schritt, aber Studio hat noch kein gemeinsames Rückgängig für alle Apps; jede App macht ihre eigenen Schritte rückgängig.
- **OLE-Objekte einer DWG** bleiben erhalten, werden aber nicht an ihrer Stelle gezeichnet.
- **Plotstiltabellen (CTB-Dateien)** anderer Programme zu lesen ist umgesetzt, wurde aber nicht an einer Datei aus einem anderen Programm geprüft.
- **Verbinden Sie Ihre KI:** Die Ein-Klick-Verbindung in Studio, der gehostete Connector für browserbasierte KI, Ihr eigener API-Schlüssel in Studio und das veröffentlichte MCP-Paket sind in diesem Release nicht zugesagt.

Zur Version davor siehe [Neuigkeiten in 0.7](topic:whats-new-0-7).
