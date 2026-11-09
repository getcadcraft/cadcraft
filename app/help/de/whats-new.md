---
title: Neuerungen in 0.8 und 0.8.1
summary: Ein Geist, der Ihre Zeichnung vervollständigt, Stiftskizzen und Skizzenfotos, die zu präziser Geometrie werden, Blätter, die sich selbst anordnen, Details, die beim Zeichnen angeboten werden, GRIDMOVE und AUTODIM, Tags, zusammenführbare Dateien, Markierungen, die zu Revisionen werden, Zeichnen ohne Sehen, Zeichnungsgrenzen, Richtungswinkel, SHX-Schriften, Diagramme aus Text und Korrekturen in 0.8.1.
keywords: Neuerungen, was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.8, 0.8.1, Version, neue Funktionen, Autovervollständigung, Geist, Tab, sketchfix, photosketch, autosheet, Details, gridmove, autodim, Tags, redline, merge, git, fossil, access, Zeichnen ohne Sehen, Bildschirmleser, Grenzen, Richtungswinkel, aunits, shx, Diagramm, ole, Verlauf, Vergleichen, in Worten, Eigenschaften, Fuß und Zoll, Strecken, Sprachen, Eingabegeräte, Probleme, Live, Assistenten
from: 9dd82db5
---

Dies hat sich in CadCraft 0.8 und 0.8.1 gegenüber 0.7 geändert. 0.8 (1. November 2026) bringt Zeichenhilfen, die aus Ihrer eigenen Zeichnung arbeiten, nach Regeln auf Ihrem Computer und ohne Modell. 0.8.1 (2. November 2026) behebt Fehler, die nach dieser Version gemeldet wurden.

## Neu

### Zeichnung, die Ihren Gedanken vollendet

- **Ein Geist zeigt, was als Nächstes kommt.** Ohne laufenden Befehl zeigt ein grau gestrichelter Geist, was die eigenen Muster Ihrer Zeichnung als Nächstes erwarten lassen: den nächsten Ständer im selben Abstand, die nächste Treppenstufe, die fehlende Wand eines Raums. Drücken Sie {{key:Tab}}, um ihn als einen einzigen Schritt zum Rückgängigmachen zu zeichnen, oder {{key:Esc}}, um ihn auszublenden. Er betrachtet nur die neuesten Objekte, daher bleibt er auch bei einer großen Zeichnung flüssig. Schalten Sie ihn unter {{ui:Einstellungen}} › {{ui:CadCraft}} oder mit {{cmd:AUTOCOMPLETE}} `Off` aus.
- **Der nächste Punkt beim Zeichnen einer Linie.** Mitten in {{cmd:LINE}} oder {{cmd:PLINE}} zeigt der Geist den nächsten Punkt: die nächste Treppenstufe, die vierte Ecke eines Rechtecks oder den Punkt, der es schließt. Bringen Sie den Cursor in seine Nähe und drücken Sie {{key:Tab}}, als hätten Sie dort geklickt.
- **Stiftskizzen werden zu präziser Geometrie.** {{cmd:SKETCHFIX}}: Zeichnen Sie grobe Striche mit Stift, Maus oder Finger, und jeder wird zu einer sauberen Linie, einem Kreis, Bogen, Rechteck oder einer Polylinie, die an das bereits Gezeichnete einrastet. Siehe [Mit dem Stift skizzieren und präzise Geometrie erhalten](topic:sketch-with-a-pen).
- **Ein Foto einer Skizze wird zur Zeichnung.** {{cmd:PHOTOSKETCH}} (`PSK`) findet das Papier auf einem Foto, entzerrt die Perspektive, wendet das von Ihnen angegebene Papierformat und den Maßstab an und überträgt die Stiftlinien auf einen Layer für jede Stiftfarbe. Schriftzüge werden nicht übertragen.
- **Bemaßung nach Regeln.** {{cmd:AUTODIM}} (`ADIM`) erstellt Bemaßungsketten entlang der Seiten, die Sie wählen, eine Gesamtabmessung, Öffnungsbreiten, Lochdurchmesser und mit `Grid` den Rasterabstand. Eine Bemaßung, die bereits vorhanden ist, wird nie wiederholt.
- **Eine Rasterlinie verschieben, und die Gruppe folgt.** {{cmd:GRIDMOVE}} (`GM`): Wände, die an der Rasterlinie enden, werden mit ihr gestreckt, Wände entlang ihr, Stützen, ihr Rasterkreis und ihr Tag werden verschoben, und Bemaßungen auf ihr messen den neuen Abstand. Ein einziger Schritt zum Rückgängigmachen.

### Blätter, Details und Tags

- **Blätter, die sich selbst anordnen.** {{cmd:AUTOSHEET}} übernimmt Ihre benannten Ansichten (oder die einzelnen Teile des Modells), wählt ein Papierformat und einen Standardmaßstab und setzt die Ansichten auf neue Blätter mit Schriftfeld und einer Beschriftung aus Name und Maßstab. Alles bleibt bearbeitbar. Siehe [Blätter für mich anordnen](topic:lay-out-sheets-for-me).
- **Die Details Ihrer Firma, die beim Zeichnen angeboten werden.** {{cmd:DETAILS}} (`DET`) bewahrt Ihre eigenen Detailblöcke auf. Wenn die Auswahl anhand der Wörter auf ihren Layern, Blocknamen und Notizen zu einem Detail passt, zeigt die Statusleiste es an. Wählen Sie es und platzieren Sie es. {{cmd:DETAILS}} › Freigeben legt Ihre Liste im Ordner „Dokumente“ ab und übernimmt, was Ihr Team ergänzt hat. In den {{ui:Einstellungen}} schalten Sie die Vorschläge aus.
- **Tags an Blöcken.** {{cmd:TAGS}} legt einen Tag fest (seine Art, die Werte, die er annehmen darf, die Blöcke, auf die er zutrifft), setzt ihn auf die ausgewählten Blockreferenzen und listet sie als Liste auf, die Sie als CSV-Datei speichern können. Die Definitionen werden in der DWG-Datei gespeichert. Siehe [Tags](topic:tags).
- **Zeichnungsgrenzen.** {{cmd:LIMITS}} legt ein Rechteck für die Zeichnung fest: Das Raster füllt es aus, und Zoom Alles zeigt es. Die Grenzen werden als Umriss angezeigt und zusammen mit den Papiergrenzen in DWG- und DXF-Dateien gespeichert. Siehe [Zeichnungsgrenzen festlegen](topic:drawing-limits).

### Zusammenarbeit mit anderen und mit anderen Programmen

- **Eine Markierung in eine Revision umwandeln.** {{cmd:REDLINE}} liest das Paket, das MarkupCraft schreibt, und listet jede Änderung auf. Nehmen Sie jede mit einer Notiz an oder lehnen Sie sie ab. Die angenommenen erhalten eine Revisionswolke und ein Revisionsprotokoll in einem einzigen Schritt zum Rückgängigmachen. Dann speichern Sie die Antwortdatei, die die Markierungen in MarkupCraft schließt. Siehe [Eine Markierung in eine Revision umwandeln](topic:redline-to-revision).
- **Zeichnungen, die git und Fossil zusammenführen können.** Wenn {{ui:Zusammenführbare Dateien}} in {{ui:Einstellungen}} › {{ui:CadCraft}} eingeschaltet ist, erhält jedes Objekt einen Schlüssel, der sich nie ändert (die Dateien sind etwa 10 Prozent größer). `cadcraft merge base ours theirs` führt dann die Änderungen zweier Personen an einem DWG- oder DXF-Objekt Objekt für Objekt zusammen und meldet nur, wo zwei Personen dasselbe geändert haben. Siehe [Änderungen zweier Personen an einer Zeichnung zusammenführen](topic:merge-drawings).
- **Was sich geändert hat, in Worten.** Im Verlauf gibt {{ui:Vergleichen}} eine einfache Liste aus: wo sich Dinge geändert haben, wie groß die Stellen sind, was hinzugefügt, entfernt oder geändert wurde und welcher Text bearbeitet wurde. Siehe [Änderungen in Worten beschreiben](topic:changes-in-words).
- **Richtungswinkel und Winkel.** Geben Sie eine Richtung als Richtungswinkel eines Vermessers ein, etwa N45°23'30"E, oder in Grad, Minuten und Sekunden, überall, wo ein Winkel abgefragt wird. AUNITS legt fest, wie Winkel angezeigt werden. Siehe [Richtungswinkel und Winkel eingeben und anzeigen](topic:bearings-and-angles).
- **Ihre eigenen SHX-Schriften.** Geben Sie CadCraft einen Ordner mit SHX-Schriften. Textstile, die sie benennen, werden dann darin gezeichnet, auf dem Bildschirm und in Plots. Siehe [Text in Ihren eigenen SHX-Schriften zeichnen](topic:shx-fonts).
- **Ein Diagramm aus Text.** {{cmd:DIAGRAM}} liest ein Mermaid-Flussdiagramm, ein PlantUML-Komponentendiagramm, D2 oder eine Von-nach-Liste und zeichnet Blöcke und Verbindungen, die Sie bearbeiten können. Siehe [Ein Diagramm aus Text zeichnen](topic:text-to-diagram).
- **OLE-Objekte in einer DWG.** {{cmd:OLELIST}} listet die OLE-Objekte auf, die eine DWG-Datei enthält und CadCraft nicht selbst platzieren kann, und platziert auf Wunsch eine Kopie eines Bildes an der von Ihnen gewählten Stelle. Siehe [Bilder](topic:pictures#objects-from-other-programs-ole).
- **Ihre Berechnungen bleiben bei der Zeichnung.** Berechnungsblätter und Konstruktionsbegründungen werden zusammen mit der Klassentabelle in der DWG-Datei gespeichert.

### Zeichnen ohne Sehen

- Schalten Sie {{ui:Zeichnen ohne Sehen}} in {{ui:Einstellungen}} ein (oder geben Sie {{cmd:ACCESS}} ein und antworten Sie mit `On`). CadCraft spricht jeden Befehl und jedes Ergebnis über Ihren Bildschirmleser aus, beschreibt die Zeichnung und das, was in der Nähe des Cursors liegt, lässt Sie den Cursor bewegen und Punkte mit der Tastatur wählen und spielt für jeden Fang und jeden Griff einen Ton ab. Wenn Ihr Browser auf Ihrem Computer Sprache erkennen kann, lassen sich Befehle sprechen. Siehe [Ohne Sehen zeichnen](topic:draft-without-sight).

### In allen Apps

- **Sprachen.** 54 Sprachen; zehn sind neu (Litauisch, Lettisch, Bosnisch, Marathi, Telugu, Albanisch, Afrikaans, Filipino, Swahili, Usbekisch). Sprachen außer Englisch sind maschinelle Entwürfe, bis eine Person mit Deutsch als Muttersprache sie geprüft hat.
- **Eingabegeräte.** Trackpad, Stift, 3D-Maus, Gamecontroller und MIDI-Steuerung.
- **Symbolleistenzeilen und das Eigenschaftsraster.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Symbolleistenzeilen}} bietet in den anderen Apps Umbrechen, 2 Zeilen oder 1 Zeile. CadCraft hat eine eigene Einstellung unter {{ui:Einstellungen}} › {{ui:CadCraft}} (siehe [Symbolleistenzeilen](topic:settings#toolbar-rows)). Das gemeinsame Eigenschaftsraster gibt es in drei anderen Apps, nicht in CadCraft.
- **Probleme, Live und Add-ons.** Ein gemeinsamer Bereich „Probleme“, der in jeder App warnt, eine Live-Ansicht, wer wo in CadCraft Studio ist (siehe [Gemeinsam an einer Zeichnung arbeiten](topic:work-live)), und eine Liste der Add-ons.
- **Ihre KI verbinden.** Eine Verbindung von CadCraft Studio zu allen acht Apps, mit der Stufe „nur lesen“, „vorschlagen“ oder „bearbeiten“ für jede App, und ein Protokoll in einfachen Worten, was der Assistent getan hat. CadCraft hat keine eigene KI. „In allen Apps fragen“ nutzt die KI, die Sie verbinden.

## Behoben in 0.8.1

- **Eigenschaften zeigten 150 statt 12'-6"** in Zeichnungen mit Fuß und Zoll. Felder, die die App selbst liest, behalten wieder ihren Text.
- **DWG-Dateien, deren Klassenabschnitt als falscher Typ gelesen wurde** (GitHub cadcraft#5), öffnen sich jetzt korrekt.
- **Das Fadenkreuz wird nicht mehr hinter Pop-ups angezeigt.**
- **Studio und die gepackten Ausgaben können die Sprache zur Laufzeit wechseln.** Vorher gab es nur Englisch. Noch nicht auf allen Plattformen getestet: Sagen Sie uns Bescheid, wenn sich die Sprache nicht ändert.
- **Tablets im Hochformat** geben die frei gewordene Rasterhöhe an die Zeichenfläche, und der Blattmodus startet bei 760 px oder weniger.
- **STRETCH mit Kreuzfenster und LIMITS** wurden für Studio 0.8.0 gemeldet und waren im 0.8-Webbuild bereits richtig. Der Installer der meldenden Person war älter. Studio 0.8.1 enthält beides.

## In dieser Version noch nicht umgesetzt

- **0.8 und 0.8.1 sind nicht codesigniert.** Windows kann warnen (wählen Sie {{ui:Weitere Informationen}} und dann {{ui:Trotzdem ausführen}}). Auf einem Mac klicken Sie mit der rechten Maustaste auf CadCraft Studio und wählen {{ui:Öffnen}}. Store-Builds sind ausgesetzt, und der Build für iPad und iPhone wurde für 0.8.1 nicht neu erstellt.
- **Stiftskizzen und Skizzenfotos** wurden nur mit erfundenen Fotos und einer Maus getestet, noch nicht mit einem echten Stift, Touchscreen oder einer Handskizze auf Papier.
- **Zeichnen ohne Sehen** wurde mit automatisierten Prüfungen getestet, noch nicht mit einem Bildschirmleser oder einer blinden Testperson.
- **Die Freigabe von Details** wurde nicht von zwei Personen geprüft. Ein Ordner im Team Cloud Plan als Ordner „Dokumente“ ist nicht umgesetzt.
- **Zusammenführen** funktioniert für DWG- und DXF-Dateien von CadCraft. Für die Dateien der anderen Apps ist es nicht umgesetzt.
- **Rückgängig über Fenster hinweg:** CadCraft meldet jeden abgeschlossenen Schritt, aber Studio hat noch kein gemeinsames Rückgängig für alle Apps. Jede App macht ihre eigenen Schritte rückgängig.
- **OLE-Objekte einer DWG** bleiben erhalten, werden aber nicht an ihrer Stelle gezeichnet.
- **Plotstiltabellen (CTB-Dateien)** anderer Programme sind umgesetzt, aber noch nicht an einer Datei eines anderen Programms geprüft.
- **Ihre KI verbinden:** Die Ein-Klick-Verbindung in Studio, der gehostete Connector für KI im Browser, Ihr eigener API-Schlüssel in Studio und das veröffentlichte MCP-Paket sind in dieser Version nicht zugesagt.

Zur Vorgängerversion siehe [Neuerungen in 0.7](topic:whats-new-0-7).
