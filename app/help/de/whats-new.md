---
title: Neuigkeiten in 0.9
summary: Schraffuren, die ihrer Begrenzung folgen, Layer-Gruppen, übereinander gestapelte Geschosse, intelligente 2D-Wände mit Türen und Fenstern, Textstile und ein Editor für formatierten Text, eine schwebende Befehlszeile, Rasterfang, zehn Arten, einen Bogen zu zeichnen, und der Bereich Dokumente.
keywords: neuigkeiten, 0.9, versionshinweise, änderungsprotokoll, schraffur, assoziative schraffur, HATCHEDIT, pat-datei, musterdatei, layer-gruppen, LAYGROUP, geschosse, FLOORLAYERS, intelligente wände, wand, tür, fenster, wandwerkzeuge, textstil, stil, MTEXT-Editor, absatztext, formatierung, schwebende befehlszeile, befehlszeile, oberer bereich, kompakt, am raster einrasten, rasterfang, F9, bogen, bereich dokumente, auschecken, stahlprofile uk, draw.io, thai-text, DXF R12, was ist neu, änderungen, 0.8, 0.8.1, version, neue funktionen, autovervollständigung, geist, tab, SKETCHFIX, PHOTOSKETCH, AUTOSHEET, details, GRIDMOVE, AUTODIM, tags, markierung, zusammenführen, git, Fossil, zugriff, zeichnen ohne sehen, bildschirmleser, grenzen, peilungen, AUNITS, SHX, diagramm, OLE, verlauf, vergleichen, in worten, eigenschaften, fuß und zoll, strecken, sprachen, eingabegeräte, probleme, live, assistenten
from: 8b6dea0b
---

Das hat sich in CadCraft 0.9 gegenüber 0.8.1 geändert. CadCraft ist die 2D- und 3D-Zeichen-App von CadCraft Studio 0.9 und seinen acht Apps. 0.9 vervollständigt das Plan-Zeichnen, bringt Textstile und einen echten Texteditor und schafft mehr Platz auf dem Bildschirm.

## Neu

### Plan-Zeichnen

- **Schraffuren, die ihrer Begrenzung folgen.** {{cmd:HATCH}} verknüpft sich mit dem, was sie begrenzt. Verschieben, drehen oder skalieren Sie die Begrenzung, folgen Schraffur und Muster. Formen Sie die Begrenzung um, wird die Schraffur neu berechnet. {{cmd:HATCHEDIT}} (`HE`) ändert eine Schraffur nachträglich und stellt die Verknüpfung her oder beendet sie. Siehe [Schraffur und Füllflächen](topic:hatch).
- **Schraffur-Musterdateien.** Bei der Frage von {{cmd:HATCH}} `Pick internal point` tippen Sie `F` (Musterdatei) und wählen eine `.pat`-Datei. Bisher wurden nur Dateien im üblichen Format erprobt.
- **Layer-Gruppen.** In {{ui:Werkzeuge}} im Bereich {{ui:Layer}}: {{ui:Neue Gruppe}}, {{ui:Fertige Gruppen hinzufügen}}, {{ui:Nach Name gruppieren}} und {{ui:Layer suchen}}. Oder tippen Sie {{cmd:LAYGROUP}} (`LG`). Siehe [Zeichnung mit Layern ordnen](topic:layers#group-layers).
- **Übereinander gestapelte Geschosse.** {{cmd:FLOORS}} (`FLR`) oder {{ui:Geschosse…}} im Menü {{ui:Mehr}} der Gruppe {{ui:Ansicht}}. Ein Ansichtsfenster auf einem Blatt kann unter {{ui:Angezeigtes Geschoss}} in den Eigenschaften ein Geschoss zeigen. {{cmd:FLOORLAYERS}} macht aus Geschossen Layer für eine Datei, die an jemand anderen geht. Siehe [Geschosse in einer Zeichnung übereinander stapeln](topic:floors).
- **Intelligente 2D-Wände, Türen und Fenster.** {{cmd:WALL}} (`WA`), {{cmd:DOOR}} (`DR`), {{cmd:WINDOW}} (`WN`) und {{cmd:DELOPENING}}. Ecken, T-Verbindungen und Kreuzungen werden für Sie berechnet. Wände speichern, wie sie verbunden sind, und die Eigenschaften erhalten {{ui:Anschluss am Anfang verhindern}} / {{ui:Anschluss am Ende verhindern}}, eine Bezugslinie und eine bearbeitbare Länge. Siehe [2D-Wände, Türen und Fenster zeichnen](topic:walls-2d).
- **Das Wandwerkzeug für Planwände.** Tippen Sie {{cmd:WALLRECT}}, {{cmd:WALLPOLY}}, {{cmd:WALLARC}}, {{cmd:WALLTRACE}}, {{cmd:WALLDIM}}, {{cmd:WALLOFFSET}}, {{cmd:WALLSPLIT}}, {{cmd:WALLGRID}} und die übrigen. Sie haben noch keine Schaltflächen in der Symbolleiste. Siehe [Wandformen, Schnitte, Versätze und Sperren für 2D-Wände](topic:wall-tools-2d).

### Text

- **Textstile.** {{cmd:STYLE}} (`ST`) oder {{ui:Textstil}} in der Symbolleiste {{ui:Zeichnen}}: benannte Stile mit Schrift, Höhe, Breitenfaktor und Neigung. Siehe [Schrift und Größe von Text mit Textstilen festlegen](topic:text-styles).
- **Ein Editor für formatierten Absatztext.** {{cmd:MTEXT}}, {{cmd:TEXTEDIT}} oder ein Doppelklick auf Text öffnet ein Feld mit Schrift, Größe, Fett, Kursiv, Unterstreichung, Durchstreichung, Farbe und Ausrichtung sowie den Zeichen für Grad, Plus-Minus und Durchmesser, dazu {{ui:OK}} und {{ui:Abbrechen}}. Siehe [Absatztext formatieren](topic:format-paragraph-text).
- **Ein Diagramm aus draw.io-XML.** {{cmd:DIAGRAM}} (`T2D`) liest auch eingefügtes draw.io-XML. Siehe [Ein Diagramm aus Text zeichnen](topic:text-to-diagram).
- **Thai-Text in einem PDF-Plot.** Er wurde vorher als Fragezeichen gedruckt.

### Mehr Platz und Zeichenhilfen

- **Eine schwebende, schlankere Befehlszeile und ein kompakter oberer Bereich.** Ziehen Sie den Griff der Befehlszeile, um sie schweben zu lassen, und ziehen Sie ihre obere Kante für weniger Zeilen. {{key:F2}} öffnet den Verlauf. {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Befehlszeile}} und die Auswahl für den oberen Bereich haben dieselben Einstellungen. Siehe [Einstellungen](topic:settings#command-line).
- **Menü Objektfang.** Klicken Sie {{ui:Fang}} in der Statusleiste mit der rechten Maustaste an, oder tippen Sie {{cmd:OSNAP}}.
- **Am Raster einrasten.** Die Schaltfläche {{ui:Rasterfang}} in der Statusleiste oder {{key:F9}}: Angeklickte Punkte gehen zum nächsten Rasterpunkt, wenn kein Objektfang den Punkt übernommen hat.
- **Bogen auf zehn Arten, und Fortsetzen.** {{ui:Bogen}} in der Symbolleiste {{ui:Zeichnen}} oder {{cmd:ARC}}: 3-Punkt, die Familie Anfang/Mittelpunkt/Ende und die Familie Mittelpunkt/Anfang/Ende sowie Fortsetzen (drücken Sie {{key:Enter}} am Anfangspunkt) von der letzten Linie, dem letzten Bogen oder der letzten Polylinie.
- **Der Bereich Dokumente.** {{cmd:DOCUMENTS}} (`DOCS`) oder {{ui:Dokumente…}} im Menü {{ui:Mehr}} der Gruppe {{ui:Ansicht}}: Revision, Status und Auschecken für jede Zeichnung in einem Projektordner. Er öffnet sich als zentriertes Dialogfeld. Siehe [Dokumente](topic:documents).

### Dateien

- **Stahlprofile nach UK-Norm.** 976 Profile im Standard-Bereich, eingetippt wie auf Zeichnungen (zum Beispiel `305x165x40 UB`).
- **Südafrikanische Pakete** (Zeichnungspraxis und Bauvorschriften) als Pakete des Add-ons Bauvorschriften. Die Zahlen sind nicht überprüft.
- **Add-ons für CadCraft,** bei Bedarf hinzugefügt und standardmäßig ausgeschaltet: Innenraum-Lichtplanung, Chipentwurf (HDL zu Layout), Routerfräsen, Schaltungssimulation, Rollenkettenräder und Länderpakete für Bauvorschriften.

## Behoben

- Verschieben, Drehen oder Skalieren einer Schraffur ließ ihr Muster zurück.
- {{cmd:GRIDMOVE}} nahm eine ganze Planwand mit, die nur an der Rasterlinie beginnt. Eine Wand wird jetzt nach ihren Enden beurteilt.
- Das Raster zeigte sich nur innerhalb der Zeichnungsgrenzen, auch wenn die Grenzen ausgeschaltet waren.
- Die Blockliste im Seitenbereich scrollt, und ein Name, der kein Block ist, listet die Blöcke auf, die damit beginnen („Meinten Sie“).
- DXF-R12-Dateien, die AutoCAD abgelehnt hat („Unbekannte Gruppe 1001 für Tabelle“), öffnen sich dort jetzt.
- Sehr große Dateien (etwa 70.000 Objekte und mehr) ließen sich nicht öffnen und meldeten „Maximale Aufrufstapelgröße überschritten“.
- DWG-Dateien aus AutoCAD 2018 und neuer mit einer hohen Wartungsversion ließen sich mit „ungültiger BITLONG-Code 11“ nicht öffnen.
- Im Absatztext-Feld behält eine neue Größe, die für einen markierten Teil eingetippt wird, die Auswahl.

## In jeder App

Bootstrap-Tooltips bei jedem Steuerelement mit Hinweis, ein Starttipp, den Sie schließen können, Registerkartenleisten, die scrollen, wenn sie nicht passen, und ein Browser-Tab-Titel, der der geöffneten Zeichnung folgt (`<drawing> - CadCraft | CadCraft`). {{ui:Einstellungen}} › {{ui:Layout}} ist jetzt eine Auswahlliste mit zweizeiligen Optionen. Die Sprachliste in {{ui:Einstellungen}} ist länger als in 0.8. Gemeinsames Bearbeiten in Live, Bibliothekssammlungen sowie Gewichts- und Temperatureinheiten werden in den Hinweisen zu Studio beschrieben.

## Ehrliche Grenzen

- Absatztext hat keine Aufzählungen mit Punkt oder Nummer, kein Tabulatorlineal und keinen Blocksatz. Geplottete PDFs setzen Text in Helvetica.
- Planwände sind gerade, daher wird ein Bogen als kurze Wände gezeichnet. Die Prüfung des Wandwerkzeugs durch die Community steht noch aus.
- Layer-Gruppen werden nicht im eigenen Format von AutoCAD geschrieben, daher zeigt AutoCAD eine flache Liste. Andere Programme zeigen alle Geschosse zusammen, es sei denn, Sie führen {{cmd:FLOORLAYERS}} aus.
- Der Bereich Dokumente wurde noch nicht von zwei Personen auf einer echten Freigabe erprobt. Das Routerfräsen lief auf keiner echten Maschine. Die Beleuchtungsschätzung wurde mit einer Photonenverfolgung geprüft, nicht mit einem anderen Programm. Technische Add-ons sind Prüfhilfen und kein Ersatz für die Prüfung durch Ingenieure.
- Andere Sprachen als Englisch sind maschinelle Entwürfe, und einige der neuen Begriffe gibt es nur auf Englisch.

## Früher: 0.8 und 0.8.1

Das hat sich in CadCraft 0.8 und 0.8.1 gegenüber 0.7 geändert. 0.8 (1. November 2026) bringt Zeichenhilfen, die aus Ihrer eigenen Zeichnung arbeiten, nach Regeln auf Ihrem Computer und ohne Modell. 0.8.1 (2. November 2026) behebt Fehler, die danach gemeldet wurden.

### Neu

**Zeichnung, die Ihren Gedanken zu Ende führt**

- **Ein Geist zeigt, was als Nächstes kommt.** Ohne laufenden Befehl zeigt ein graues, gestricheltes Geisterbild, was die eigenen Muster Ihrer Zeichnung als Nächstes vorsehen: den nächsten Ständer im gleichen Abstand, den nächsten Schritt einer Treppe, die fehlende Wand eines Raums. Drücken Sie {{key:Tab}}, um es als einen Rückgängig-Schritt zu zeichnen, oder {{key:Esc}}, um es zu verwerfen. Es sieht nur die neuesten Objekte an, damit es auf einer großen Zeichnung flüssig bleibt. Schalten Sie es unter {{ui:Einstellungen}} › {{ui:CadCraft}} aus oder mit {{cmd:AUTOCOMPLETE}} `Off`.
- **Der nächste Punkt beim Zeichnen einer Linie.** Mitten in {{cmd:LINE}} oder {{cmd:PLINE}} ist das Geisterbild der nächste Punkt: der nächste Schritt einer Treppe, die vierte Ecke eines Rechtecks oder der Punkt, der es schließt. Bringen Sie den Cursor nahe daran und drücken Sie {{key:Tab}}, als hätten Sie dort geklickt.
- **Stiftskizzen werden zu präziser Geometrie.** {{cmd:SKETCHFIX}}: Zeichnen Sie grobe Striche mit einem Stift, einer Maus oder dem Finger, und jeder wird zu einer sauberen Linie, einem Kreis, Bogen, Rechteck oder einer Polylinie, eingerastet an dem, was bereits gezeichnet ist. Siehe [Mit einem Stift skizzieren und präzise Geometrie erhalten](topic:sketch-with-a-pen).
- **Ein Foto einer Skizze wird zur Zeichnung.** {{cmd:PHOTOSKETCH}} (`PSK`) findet das Papier auf einem Foto, richtet die Perspektive gerade, übernimmt die Papiergröße und den Maßstab, die Sie angeben, und zeichnet die Stiftlinien auf einen Layer je Stiftfarbe nach. Beschriftung wird nicht nachgezeichnet.
- **Nach Regeln bemaßen.** {{cmd:AUTODIM}} (`ADIM`) erstellt Ketten von Bemaßungen entlang der Seiten, die Sie wählen, ein Gesamtmaß, Öffnungsbreiten, Lochdurchmesser und mit `Grid` den Rasterabstand. Es wiederholt nie eine Bemaßung, die bereits da ist.
- **Verschieben Sie eine Rasterlinie, und die Gruppe folgt.** {{cmd:GRIDMOVE}} (`GM`): Wände, die an der Rasterlinie enden, werden mit ihr gestreckt. Wände entlang ihr, Stützen, ihr Rasterkreis und ihre Bezeichnung verschieben sich, und Bemaßungen auf ihr messen den neuen Abstand. Ein Rückgängig-Schritt.

**Blätter, Details und Bezeichnungen**

- **Blätter, die sich selbst anordnen.** {{cmd:AUTOSHEET}} übernimmt Ihre benannten Ansichten (oder die einzelnen Teile des Modells), wählt eine Papiergröße und einen Standardmaßstab und legt die Ansichten auf neue Blätter mit Schriftfeld und einer Beschriftung aus Name und Maßstab. Alles bleibt bearbeitbar. Siehe [Blätter für mich anordnen](topic:lay-out-sheets-for-me).
- **Die Details Ihrer Firma, angeboten beim Zeichnen.** {{cmd:DETAILS}} (`DET`) bewahrt Ihre eigenen Detailblöcke. Passt das, was Sie auswählen, anhand der Wörter auf den Layern, Blocknamen und Notizen zu einem, sagt es die Statusleiste. Wählen Sie es und platzieren Sie es. {{cmd:DETAILS}} › Teilen legt Ihre Liste in Ihren Dokumente-Ordner und holt herein, was Ihr Team hinzugefügt hat. Die Einstellungen schalten die Vorschläge aus.
- **Bezeichnungen an Blöcken.** {{cmd:TAGS}} definiert eine Bezeichnung (ihre Art, die Werte, die sie annehmen darf, die Blöcke, auf die sie gilt), setzt sie an den ausgewählten Blockreferenzen und listet sie als Liste, die Sie als CSV speichern können. Die Definitionen werden in der DWG gespeichert. Siehe [Bezeichnungen](topic:tags).
- **Zeichnungsgrenzen.** {{cmd:LIMITS}} legt ein Rechteck für die Zeichnung fest: Das Raster füllt es aus, und Zoom Alles zeigt es. Die Grenzen erscheinen als Umriss und werden in DWG und DXF zusammen mit den Papiergrenzen gespeichert. Siehe [Zeichnungsgrenzen festlegen](topic:drawing-limits).

**Mit anderen Personen und anderen Programmen arbeiten**

- **Aus einer Markierung eine Revision machen.** {{cmd:REDLINE}} liest das Paket, das MarkupCraft schreibt, und listet jede Änderung auf. Nehmen Sie jede mit einer Notiz an oder lehnen Sie sie ab. Die angenommenen erhalten eine Revisionswolke und ein Revisionsprotokoll in einem Rückgängig-Schritt, und Sie speichern die Antwortdatei, die die Markierungen in MarkupCraft schließt. Siehe [Eine Markierung in eine Revision umwandeln](topic:redline-to-revision).
- **Zeichnungen, die git und Fossil zusammenführen können.** Mit eingeschalteter {{ui:Zusammenführbare Dateien}} unter {{ui:Einstellungen}} › {{ui:CadCraft}} erhält jedes Objekt einen Schlüssel, der sich nie ändert (Dateien sind etwa 10 Prozent größer). `cadcraft merge base ours theirs` führt dann die Änderungen zweier Personen an einer DWG- oder DXF-Datei Objekt für Objekt zusammen und meldet nur Stellen, an denen beide dasselbe geändert haben. Siehe [Änderungen zweier Personen an einer Zeichnung zusammenführen](topic:merge-drawings).
- **Was sich geändert hat, in Worten.** Im Verlauf gibt Vergleichen eine einfache Liste: wo sich Dinge geändert haben, wie groß die Stellen sind, was hinzugefügt, entfernt oder geändert wurde und welcher Text bearbeitet wurde. Siehe [Änderungen in Worten beschreiben](topic:changes-in-words).
- **Peilungen und Winkel.** Tippen Sie eine Richtung als Peilung eines Vermessers ein, etwa N45°23'30"E, oder in Grad, Minuten und Sekunden, überall, wo ein Winkel verlangt wird. AUNITS legt fest, wie Winkel angezeigt werden. Siehe [Peilungen und Winkel eingeben und anzeigen](topic:bearings-and-angles).
- **Eigene SHX-Schriften.** Geben Sie CadCraft einen Ordner mit SHX-Schriften. Textstile, die sie benennen, werden darin gezeichnet, auf dem Bildschirm und in Plots. Siehe [Text in eigenen SHX-Schriften zeichnen](topic:shx-fonts).
- **Ein Diagramm aus Text.** {{cmd:DIAGRAM}} liest ein Mermaid-Flussdiagramm, ein PlantUML-Komponentendiagramm, D2 oder eine Von-nach-Liste und zeichnet Blöcke und Verbindungen, die Sie bearbeiten können. Siehe [Ein Diagramm aus Text zeichnen](topic:text-to-diagram).
- **OLE-Objekte in einer DWG.** {{cmd:OLELIST}} listet die OLE-Objekte einer DWG auf, die CadCraft nicht selbst platzieren kann, und platziert eine Kopie eines Bildes dort, wo Sie es angeben. Siehe [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Ihre Berechnungen bleiben bei der Zeichnung.** Berechnungsblätter und Konstruktionsbegründungen werden in der DWG zusammen mit der Klassentabelle gespeichert.

**Zeichnen ohne Sehen**

- Schalten Sie {{ui:Zeichnen ohne Sehen}} in {{ui:Einstellungen}} ein (oder tippen Sie {{cmd:ACCESS}} und antworten Sie `On`). CadCraft sagt jeden Befehl und jedes Ergebnis über Ihren Bildschirmleser an, beschreibt die Zeichnung und das, was nahe am Cursor ist, lässt Sie den Cursor mit der Tastatur bewegen und Punkte wählen und spielt für jeden Fang und Griff einen Ton ab. Wo Ihr Browser auf Ihrem Computer Sprache erkennen kann, lassen sich Befehle sprechen. Siehe [Zeichnen ohne Sehen](topic:draft-without-sight).

**In jeder App**

- **Sprachen.** 54 Sprachen; zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Suaheli, Usbekisch). Andere Sprachen als Englisch sind maschinelle Entwürfe, bis eine Person mit dieser Muttersprache sie liest.
- **Eingabegeräte.** Trackpad, Stift, 3D-Maus, Spielcontroller und MIDI-Steuerungen.
- **Symbolleistenzeilen und das Eigenschaftsraster.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet Umbrechen, 2 Zeilen oder 1 Zeile in den anderen Apps. CadCraft behält seine eigene Einstellung unter {{ui:Einstellungen}} › {{ui:CadCraft}} (siehe [Symbolleistenzeilen](topic:settings#toolbar-rows)). Das gemeinsame Eigenschaftsraster gibt es in drei anderen Apps, nicht in CadCraft.
- **Probleme, Live und Add-ons.** Ein gemeinsamer Bereich Probleme, der in jeder App warnt, eine Live-Ansicht, wer wo ist, in CadCraft Studio (siehe [Gemeinsam an einer Zeichnung arbeiten mit Live TeamWork](topic:work-live)), und eine Liste der Add-ons.
- **Ihre KI anschließen.** Eine Verbindung von CadCraft Studio zu allen acht Apps, mit einer Stufe je App: nur lesen, vorschlagen oder bearbeiten, und ein Protokoll in einfacher Sprache darüber, was der Assistent getan hat. CadCraft hat keine eigene KI, und „In jeder App fragen“ nutzt die KI, die Sie anschließen.

### Behoben in 0.8.1

- **Eigenschaften zeigten 150 statt 12'-6"** in Zeichnungen in Fuß und Zoll. Felder, die die App selbst liest, behalten ihren Text wieder.
- **DWG-Dateien, deren Klassenbereich als falscher Typ gelesen wurde** (GitHub cadcraft#5), öffnen sich jetzt korrekt.
- **Das Fadenkreuz erscheint nicht mehr hinter Pop-ups.**
- **Studio und die gepackten Ausgaben können die Sprache zur Laufzeit wechseln.** Vorher gab es nur Englisch. Das ist noch nicht auf jeder Plattform getestet: Sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.
- **Tablets im Hochformat** geben den freien Platz für das Raster der Zeichenfläche. Der Blattmodus startet bei 760 px oder weniger.
- **STRETCH mit einem Kreuzfenster und LIMITS** wurden bei Studio 0.8.0 gemeldet und waren im Web-Build von 0.8 bereits richtig. Das Installationsprogramm des Melders war älter. Studio 0.8.1 enthält beides.

### Noch nicht in dieser Version

- **0.8 und 0.8.1 sind nicht code-signiert.** Windows kann warnen (wählen Sie {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}). Auf einem Mac klicken Sie CadCraft Studio mit der rechten Maustaste an und wählen {{ui:Öffnen}}. Store-Versionen sind angehalten, und die iPad- und iPhone-Version wurde für 0.8.1 nicht neu gebaut.
- **Stiftskizzen und Skizzenfotos** wurden nur mit erfundenen Fotos und einer Maus erprobt, noch nicht mit einem echten Stift, Touchscreen oder einer Handskizze auf Papier.
- **Zeichnen ohne Sehen** wurde mit automatischen Prüfungen getestet, noch nicht mit einem Bildschirmleser oder einer blinden Testperson.
- **Details teilen** wurde nicht von zwei Personen geprüft, und ein Team-Cloud-Plan-Ordner als Dokumente-Ordner ist nicht gebaut.
- **Zusammenführen** funktioniert für die DWG- und DXF-Dateien von CadCraft. Für die Dateien der anderen Apps ist es nicht gebaut.
- **Rückgängig über Fenster hinweg:** CadCraft meldet jeden abgeschlossenen Schritt, aber Studio hat noch kein gemeinsames Rückgängig für alle Apps. Jede App macht ihre eigenen Schritte rückgängig.
- **Die OLE-Objekte einer DWG** bleiben erhalten, werden aber nicht an Ort und Stelle gezeichnet.
- **Das Lesen von Plotstiltabellen (CTB-Dateien)** aus anderen Programmen ist gebaut, wurde aber nicht an einer Datei aus einem anderen Programm geprüft.
- **Ihre KI anschließen:** Ein-Klick-Verbindung in Studio, der gehostete Connector für KI im Browser, Ihr eigener API-Schlüssel in Studio und das veröffentlichte MCP-Paket sind in dieser Version nicht zugesagt.

Für die Version davor siehe [Neuigkeiten in 0.7](topic:whats-new-0-7).
