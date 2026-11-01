---
title: Neu in 0.7
summary: PDF-Unterlagen und PDF-Import, gescannte Zeichnungen mit automatischer Nachzeichnung, echte Splines mit SPLINE, SPLINEDIT und PEDIT, ein Bemaßungsstil-Manager, Text mit erhaltener Formatierung, WBLOCK und eigene Maßstäbe, 3D-Volumenkörper aus anderen Programmen, Registrieren von Scans, ein Laser-Bereich, USD-Export, Verlauf und Drucken in CadCraft Studio, eine geführte erste Zeichnung, die Symbolleiste an jeder Seite oder in weniger Zeilen und mehr für KI-Assistenten.
keywords: Neuigkeiten, was ist neu, Versionshinweise, Änderungsprotokoll, Änderungen, 0.7, Version, neue Funktionen, PDF, PDFATTACH, PDFIMPORT, Unterlage, Scan, SCANATTACH, SCANTRACE, Nachzeichnung, Raster, RASTERSNAP, Spline, SPLINEDIT, PEDIT, DIMSTYLE, DIMEDIT, DIMTEDIT, MTEXT, Formatierung, WBLOCK, SCALELISTEDIT, Maßstabsliste, ACIS, 3D-Volumenkörper, REGISTERSCANS, Scans registrieren, ICP, E57, LAS, Laser, GRBL, G-Code, USD, USDOUT, Verlauf, Versionen, Vergleichen, Drucken, Drucker, PNG, SVG, Plotstil, Linientyp, Tour, Spickzettel, Befehlszuordnung, Position der Symbolleiste, Symbolleistenzeilen, TOOLBARDOCK, REGEN, REGENALL, Trackpad, Wischen, Codepage, Kyrillisch, Koreanisch, Chinesisch, Japanisch, Elektro, FI-Schalter, RCD, P&ID, PID, acad.lsp, acaddoc.lsp, Support-Ordner, Assistenten, MCP, Einheiten, Portugiesisch
from: b9258ca6
---

Das hat sich in CadCraft 0.7 gegenüber 0.6 geändert. Vieles davon wurde auf Discord gewünscht. Die Liste ist nach Bereichen gegliedert, das Wichtigste zuerst.

## Neu

### PDFs und gescannte Zeichnungen

- **Eine PDF-Seite unter die Zeichnung legen.** {{cmd:PDFATTACH}} (`PDFATT`) platziert eine Seite in wahrer Größe oder in einem Maßstab, den Sie eingeben. An ihren Linien fangen, sie ausblenden, einfarbig machen ({{cmd:PDFADJUST}}), beschneiden ({{cmd:PDFCLIP}}) und die eigenen Layer der PDF umschalten ({{cmd:PDFLAYERS}}). Sie wird als Linien, Flächen und Text geplottet, und eine DWG oder DXF 2000 behält sie als Verknüpfung zur Datei. Beim Öffnen einer PDF mit {{ui:Öffnen}} wird gefragt, ob sie angehängt oder importiert werden soll. Siehe [PDF-Unterlagen und PDF-Import](topic:pdf-underlay).
- **Eine PDF-Seite in Zeichnungsobjekte verwandeln.** {{cmd:PDFIMPORT}} (`PDFIM`) erzeugt Linien, Polylinien, Kreise, Bögen, Vollflächen-Schraffuren und Text auf Layern, die nach der PDF benannt sind, in wahrer Größe, in einem eingegebenen Maßstab oder skaliert aus zwei Punkten und einer realen Strecke, in einem Schritt für Rückgängig. Siehe [Eine Seite importieren](topic:pdf-underlay#import-a-page).
- **Gescannte Zeichnungen.** {{cmd:SCANATTACH}} holt ein PNG, JPEG oder TIFF (eine Seite oder alle) oder eine PDF-Seite herein, die ein Bild ist. Dann aus zwei Punkten skalieren ({{cmd:SCANSCALE}}), ausrichten ({{cmd:SCANALIGN}}), anhand der eigenen langen Linien entzerren ({{cmd:SCANDESKEW}}), schwarzweiß machen und Flecken entfernen ({{cmd:SCANCLEAN}}), zuschneiden und Teile davon löschen. Jeder Schritt ist ein Schritt für Rückgängig, und die Originaldatei bleibt erhalten. Siehe [Gescannte Zeichnungen und die Nachzeichnung](topic:scanned-drawings).
- **Einen Scan in Linien und Bögen nachzeichnen.** {{cmd:SCANTRACE}} zeichnet die Linien des Scans als Linien und Bögen auf einem neuen Layer, SCAN-TRACE, mit einer von Ihnen gesetzten Toleranz und lässt Text und Schraffur, wie sie sind. Der Bericht sagt, was erzeugt und was ausgelassen wurde; er behauptet nicht, dass das Ergebnis stimmt: Vergleichen Sie es mit dem Blatt. {{cmd:RASTERSNAP}} lässt Objektfänge die Enden, Ecken und Kreuzungen des Scans finden. Nichts wird irgendwohin gesendet, und es wird kein trainiertes Modell verwendet. Siehe [Die Nachzeichnung](topic:scanned-drawings#the-trace).

### Zeichnen und Bearbeiten

- **Echte Splines.** {{cmd:SPLINE}} (`SPL`) zeichnet eine Kurve durch Punkte oder aus Kontrollpunkten (Grad 1 bis 5), mit Endtangenten; {{cmd:SPLINEDIT}} (`SPE`) verschiebt, fügt hinzu und löscht Anpass- oder Kontrollpunkte, setzt Gewichte, öffnet, schließt, kehrt um oder macht aus einem Spline eine Polylinie. Splines aus DWG- und DXF-Dateien öffnen sich als Splines, und DWG und DXF 2000 speichern sie als Splines. Siehe [Splines und Polylinien](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) schließt und öffnet Polylinien, verbindet Linien und Bögen mit ihnen, setzt eine einheitliche Breite, legt eine Kurve durch die Eckpunkte oder einen Spline entlang davon und nimmt sie mit Kurve aufheben zurück, kehrt um und bearbeitet mehrere auf einmal. Siehe [Eine Polylinie bearbeiten](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) schreibt einen Block, einige Objekte oder die ganze Zeichnung in eine neue DWG oder DXF, die nur die Layer, Stile und Blöcke enthält, die sie verwenden. Siehe [Einen Block oder Objekte in eine eigene Datei schreiben](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN und REGENALL.** {{cmd:REGEN}} (`RE`) zeichnet den aktuellen Tab aus der Zeichnung neu, {{cmd:REGENALL}} (`REA`) jeden Tab, jedes Teilfenster und jede geöffnete Zeichnung. Siehe [REGEN und REGENALL](topic:commands#regen-and-regenall).

### Text und Bemaßungen

- **Text behält seine Formatierung.** Absatztext aus anderen Programmen behält Farben je Wort, Fett und Kursiv, Unterstreichung, gestapelte Brüche und Höhen: Sie werden auf dem Bildschirm und in PDFs gezeichnet, beim Bearbeiten der Wörter beibehalten und zurückgespeichert. Siehe [Formatierung in Absatztext aus anderen Programmen](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Ein Bemaßungsstil-Manager.** {{cmd:DIMSTYLE}} (`D`) erstellt, ändert, vergleicht und wendet benannte Bemaßungsstile an; die Änderung eines Stils ändert jede Bemaßung, die ihn verwendet. {{cmd:DIMEDIT}} (`DED`) setzt Text zurück, gibt neuen Text ein, dreht ihn oder neigt die Maßhilfslinien; {{cmd:DIMTEDIT}} verschiebt den Text nach links, rechts oder zur Mitte. Siehe [Benannte Bemaßungsstile](topic:dimension-settings#named-dimension-styles).
- **Eigene Maßstäbe.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) fügt den Maßstabslisten für Ansichtsfenster und Plot Maßstäbe wie 1:75 hinzu; sie werden in der Zeichnung gespeichert (DWG und DXF 2000), und eine Zeichnung aus einem anderen Programm bringt ihre eigene Liste mit. Siehe [Maßstäbe](topic:units-papers-scales#scales).
- **Text in anderen Alphabeten.** DXF-Dateien, die in kyrillischen, koreanischen, chinesischen, japanischen oder vietnamesischen Codepages gespeichert wurden, öffnen sich jetzt mit ihrem Text, und chinesischer, japanischer und koreanischer Text wird in PDFs gedruckt (der Plot holt beim ersten Bedarf eine größere Schrift). Siehe [Schrift](topic:text#font).

### Plotten und Drucken

- **Mehr in Plotstiltabellen.** Für jede Farbe kann eine Tabelle jetzt auch einen Linientyp, das Linienende und die Linienverbindung sowie einen Füllstil setzen, der Vollflächen als Schraffurlinien druckt; die Tabelle hat eine eigene Liste von Linienstärken und einen Linientypfaktor. Siehe [Plotstiltabellen](topic:plot-pdf#plot-style-tables).
- **Drucken sowie PNG- und SVG-Dateien.** Der Plot-Dialog hat {{ui:Drucken…}}, {{ui:PNG herunterladen}} (300 dpi) und {{ui:SVG herunterladen}}. In CadCraft Studio listet er die Drucker des Computers, ihr Papier und die Anzahl der Kopien auf. Siehe [Drucken](topic:plot-pdf#print) und [Bild- und SVG-Dateien](topic:plot-pdf#picture-and-svg-files).

### 3D und Punktwolken

- **3D-Volumenkörper aus anderen Programmen.** Volumenkörper, Regionen und Körper im Modellbereich einer Zeichnung erscheinen schreibgeschützt auf dem Tab 3D, und das Speichern als DWG schreibt sie unverändert zurück. Flächen auf Oberflächen, die CadCraft noch nicht zeichnet, werden aufgelistet, nicht geraten. Siehe [Volumenkörper aus anderen Programmen](topic:3d-solids#solids-from-other-programs).
- **Mehrere Scans registrieren.** {{cmd:REGISTERSCANS}} (`REGSCAN`) bringt Scans von verschiedenen Standpunkten in ein gemeinsames Koordinatensystem, über Punktpaare oder eingegebene Zielkoordinaten, verfeinert sie mit ICP, speichert die Registrierung als kleine Projektdatei und schreibt die registrierte Wolke als eine LAS- oder E57-Datei. Siehe [Mehrere Scans zu einem registrieren](topic:register-scans).
- **USD-Export.** {{cmd:USDOUT}} oder {{cmd:EXPORT3D}} › {{ui:USD}} schreibt die Volumenkörper des Tabs 3D als `.usda`, `.usdc` oder `.usdz`. Siehe [Das 3D-Modell als USD exportieren](topic:usd).
- **Rechnen auf dem Tab 3D.** Wo die Werkzeuge des Tabs 3D einen Abstand verlangen, können Sie eine Rechnung eingeben, wie in der Befehlszeile. Siehe [Rechnen in einem eingegebenen Wert](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Dinge herstellen

- **Eine Zeichnung an einen Laser schicken.** {{cmd:LASER}} oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Laser…}} öffnet einen Bereich über der Zeichnung: Jeder Layer schneidet, ritzt, graviert Linien, füllt Formen, graviert ein Bild oder wird nicht gesendet, mit Leistung, Geschwindigkeit und Durchgängen. Die Vorschau folgt Ihren Änderungen, {{ui:G-Code speichern…}} schreibt GRBL-G-Code im Lasermodus, und in Chrome oder Edge kann der Bereich den Auftrag umranden und über USB senden. Die Einstellungen werden in der Zeichnung gespeichert (DWG und DXF). Siehe [Eine Zeichnung an einen Laser schicken](topic:laser-cutting).
- **Gebäudeinstallationssymbole im Add-on Elektro.** Daten-, Telefon- und TV-Dosen, Schlüssel- und Zeitschalter, ein Thermostat, Notausgangsschild, Melder, Handfeuermelder und Signalgeber, ein Ventilator, Warmwasserbereiter, Herd, Ladepunkt für Elektrofahrzeuge, Energiezähler und Unterverteilung sowie Symbole für FI-Schalter (RCD) und RCBO. Ein Stromkreis kann einen RCD tragen, die Verteilerliste hat eine Spalte RCD, und die Prüfungen nennen Steckdosenstromkreise ohne RCD mit 30 mA oder weniger. Es ist eine Planungserinnerung, keine Normenprüfung.
- **Ein P&ID-Add-on.** P&ID zeichnet Verfahrensfließbilder: Symbole mit Anschlusspunkten, Prozess- und Signalleitungen, Kennzeichen, Leitungsnummern, Listen für Leitungen, Ausrüstung, Instrumente und Armaturen (CSV oder eine Arbeitsmappe) und Prüfungen. Es gehört zu CadCraft und ist ausgeschaltet, bis Sie es unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Add-ons}} einschalten. Es ist eine Zeichenhilfe, keine ingenieurtechnische Freigabe, und seine Wörter sind vorerst nur auf Englisch.

### Erste Schritte und der Bildschirm

- **Eine geführte erste Zeichnung.** {{cmd:TOUR}} (oder {{ui:Die Tour machen}} auf der Startkarte) führt Sie in sechs Schritten durch die echte Zeichnung: eine Linie, ein Kreis, ein Verschieben, ein Stutzen, ein Löschen und eine Bemaßung. Sie startet beim ersten Mal von selbst, wenn CadCraft leer geöffnet wird. Siehe [Lieber geführt?](topic:getting-started#prefer-to-be-guided)
- **Ein Spickzettel und eine Befehlszuordnung.** Der [Spickzettel](topic:cheat-sheet) enthält die 40 Alltagsbefehle auf einer Seite, auch als PDF zum Ausdrucken, und die [Befehlszuordnung](topic:command-map) listet Befehle mit ihren Kurznamen von A bis Z.
- **Die Symbolleiste an jeder Seite.** {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Position der Symbolleiste}}: oben (wie bisher), unten, links oder rechts, oder {{cmd:TOOLBARDOCK}} eingeben. Siehe [Position der Symbolleiste](topic:settings#toolbar-position).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Symbolleistenzeilen}}: umbrechen bis es passt, 2 Zeilen oder 1 Zeile, für die CadCraft-Symbolleiste und die Stile Klassisches Zeichnen und Menüband. {{key:Shift+Ctrl+F1}} schaltet sie durch, {{key:Ctrl+F1}} das, was die Schaltflächen zeigen, und {{cmd:TOOLBARROWS}} und {{cmd:TOOLBAR}} stellen sie ein. Der Starthinweis hat eine Schließen-Schaltfläche. Dank an GJoe2, der dies als Pull Request eingereicht hat. Siehe [Symbolleistenzeilen](topic:settings#toolbar-rows).

### In CadCraft Studio

- **Verlauf.** {{cmd:HISTORY}} (`HIST`) oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Verlauf…}}: die Kopien, die Studio beim Öffnen und Speichern einer Zeichnung behält, und die Cloud-Versionen der Zeichnung, wenn Sie sie aus der Cloud geöffnet haben. Eine öffnen oder wiederherstellen oder zwei vergleichen, wobei Hinzugefügtes, Entferntes und Geändertes farbig gezeigt wird. Siehe [Verlauf](topic:history).
- **acad.lsp und acaddoc.lsp.** Einen Support-Ordner in {{cmd:APPLOAD}} wählen: Diese beiden Dateien laden beim Start von CadCraft (acaddoc.lsp erneut für jeden neuen Zeichnungs-Tab), und `S::STARTUP` läuft danach. Siehe [Anwendungen laden](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Der Plot-Dialog in einem eigenen Fenster.** Eine Schaltfläche in seiner Titelleiste verschiebt ihn in ein Fenster, das Sie auf einen anderen Monitor legen können. Siehe [Ein Dialogfeld verschieben](common:arrange-panels#move-a-dialog).

### Für KI-Assistenten

- **Dateien nach Namen, in Ordnern Ihrer Wahl.** In CadCraft Studio kann ein Assistent Dateien nach Namen öffnen, speichern und plotten und einem Befehl die Datei übergeben, nach der er fragt (INSERT aus einer Datei, der Export von COUNT, SAVEAS, PLOT), aber nur in den Ordnern, die Sie unter {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Assistenten}} › {{ui:Ordner, die die Assistenten verwenden dürfen}} hinzufügen. Siehe [Dateien in Ordnern Ihrer Wahl verwenden lassen](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Weniger Aufrufe.** Ein Assistent kann eine ganze Befehlszeile auf einmal eingeben, einen Befehl zwischen seinen Aufrufen offen halten, Objekte nach Typ und Layer zählen, ohne sie aufzulisten, und einen Block mit seinen Attributwerten in einem Schritt platzieren.
- **Ohne Fenster.** Die Befehlszeile `cadcraft` schreibt SVG-Plots und konvertiert, plottet, prüft oder beschreibt viele Dateien auf einmal. Das MCP-Paket ist noch nicht veröffentlicht. Siehe [Mit Dateien arbeiten, ohne CadCraft zu öffnen](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Geändert

- **Ein Trackpad schwenkt.** Zwei Finger auf einem Trackpad bewegen, und die 2D-Ansicht folgt; Pinch und Mausrad zoomen. Siehe [Maus, Trackpad und Touch](topic:mouse-trackpad-touch).
- **OLE-Objekte bleiben erhalten.** Eingebettete Objekte einer DXF erscheinen als ihr Bild oder als beschrifteter Rahmen und werden von DXF 2000 zurückgespeichert. Die einer DWG bleiben erhalten und werden beim Speichern als DWG zurückgeschrieben, aber noch nicht angezeigt. Früher gingen sie beim Speichern verloren. Siehe [Objekte aus anderen Programmen (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Die Einheiten einer neuen Zeichnung** folgen der Einheit, die Sie unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} mit einem Stern markieren.

## Behoben

- Layouts, die leer öffneten oder ein Ansichtsfenster verloren und stattdessen das ganze Modell zeigten, öffnen jetzt mit ihren echten Ansichtsfenstern. Ein Layout ohne Verbindung zu seinem Inhalt bleibt erhalten, und der Öffnungsbericht sagt das.
- DXF-Dateien in älteren Codepages zeigten verstümmelten kyrillischen und koreanischen Text. Sie werden jetzt richtig gelesen.
- Absatztext aus anderen Programmen verlor beim Öffnen seine Formatierung und wurde unformatiert zurückgespeichert.

## In jeder App

- **Einheiten.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} hat je eine Liste für Länge, Fläche, Volumen, Winkel und Neigung, mit den genauen Größen, die die Definitionen der Einheiten ergeben (der US-Vermessungsfuß ist eine eigene Einheit). Einheiten, die Sie nie verwenden, schalten Sie aus, und sie verschwinden aus den Einheitenlisten; eine mit Stern markierte ist der Start neuer Arbeit. Eine Datei behält immer ihre eigene Einheit. In CadCraft legt der Stern die Einheiten einer neuen Zeichnung fest, wenn es eine Einheit ist, die eine Zeichnung tragen kann; CadCrafts eigenes Feld {{ui:Einheiten}} folgt den Schaltern noch nicht. Sobald eine Zeichnung Einheiten hat, kann eine eingegebene Länge das Kürzel jeder Einheit tragen. Siehe [Einheiten, eingegebene Werte und die Einheitenlisten](common:unit-lists).
- **Ein dichteres Layout und Bereiche, die sich wegräumen lassen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Layoutdichte}} › {{ui:Kompakt}} bringt mehr auf den Bildschirm (Touchscreens und Telefone behalten ihre großen Schaltflächen). Jeder seitliche Bereich hat eine schlanke Titelleiste: Ziehen zum Andocken oder Lösen des Bereichs, auf die Leiste eines anderen Bereichs ablegen, damit sie sich einen Rahmen als Registerkarten teilen, anheften, damit er an den Rand wegrutscht, oder ausblenden und vom Rand zurückholen. Siehe [Die Bereiche anordnen](common:arrange-panels#make-the-layout-denser).
- **Dialogfelder lassen sich verschieben.** Ein Dialogfeld an der Titelleiste aus dem Weg der Zeichnung ziehen; es kommt dort wieder, wo Sie es gelassen haben. Doppelklick auf die Titelleiste zentriert es wieder. Siehe [Ein Dialogfeld verschieben](common:arrange-panels#move-a-dialog).
- **Rezepte für KI-Assistenten.** Zehn ausgearbeitete Aufträge für Ihren eigenen Assistenten (eine Zeichnung aufräumen, einen Satz plotten, Zeichnungen prüfen, einem Modell Fragen stellen, eine Mengenermittlung summieren, eine Bauteilvariante ausprobieren …), jeweils mit den Werkzeugen, die er aufruft, und den Berechtigungen, die er braucht, und jeweils von unseren Tests nachgespielt. Die Apps enthalten keine KI. Siehe [Rezepte für KI-Assistenten](common:assistants-recipes).
- **Sprachen.** **Português (Portugal)** ist neu unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Sprache}}. Es, **Português (Brasil)**, **Español (México)** und **Bahasa Indonesia** haben jetzt jedes Wort der Apps, als Entwürfe, die noch kein Muttersprachler geprüft hat. Hilfethemen sind auf Englisch.
- **CadCraft Studio** sagt, warum eine Update-Prüfung fehlgeschlagen ist (noch keine Datei für Ihr System, kein Netz, eine ungültige Signatur), statt nur „Fertig“, und bringt eine geschlossene Karte „Neu in“ nicht mehr zurück, bis es eine neuere Version gibt.

## Noch nicht in dieser Version

- **0.7 ist nicht codesigniert.** Das Signieren und das Microsoft-Store-Paket sind auf 0.8 verschoben, weil die Zertifikatsprüfung noch nicht durch ist. Prüfen Sie den SHA-256 neben jeder Datei auf getcadcraft.com/download. Stoppt unter Windows SmartScreen das Installationsprogramm, wählen Sie {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}. Am Mac klicken Sie beim ersten Mal mit der rechten Maustaste auf CadCraft Studio und wählen {{ui:Öffnen}}. CadCraft Studio ist noch in keinem App-Store, und es gibt noch keinen Build für iPad oder iPhone.
- Die Listen für Winkel und Neigung unter {{ui:Einheiten}} werden gespeichert, aber noch liest sie kein Feld.
- OLE-Objekte einer DWG bleiben erhalten, werden aber nicht angezeigt, und Metafile-Bilder in OLE-Objekten werden nicht gezeichnet.
- Das Lesen von Plotstiltabellen (CTB-Dateien) aus anderen Programmen wartet auf eine Beispieldatei.
- Älterer asiatischer Text, der als `\M+`-Codes geschrieben ist, wird gelesen, wurde aber noch nicht an einer Datei aus einem anderen Programm geprüft.
- PDF-Unterlagen: Bilder innerhalb der Seite werden auf dem Bildschirm gezeigt, aber nicht geplottet, der Plot eines Assistenten lässt Unterlagen weg, und wie andere Programme den gespeicherten Clip und Maßstab lesen, wurde dort nicht geprüft.
- Verlauf: CadCraft sendet seine Speicherungen noch nicht in die Cloud, die Cloud-Versionen sind also die von anderen Geräten und aus dem Web gespeicherten. Der Verlauf gibt es nur in CadCraft Studio.
- Ob Studio den Support-Ordner für acad.lsp nach einem Neustart behält, wurde noch nicht geprüft; wenn es fragt, den Ordner in APPLOAD erneut wählen.
- Der Laser-Bereich wurde noch an keinem echten Laser ausprobiert: Jede Einstellung an Ausschuss testen. CadCraft Studio hat kein Web Serial, daher speichert der Bereich in Studio nur G-Code.
- Das Registrieren von Scans wurde an erfundenen Scans getestet, noch nicht an dem Satz eines echten Scanners.
- Das Schwenken mit zwei Fingern wurde mit simulierten Trackpad-Ereignissen ausprobiert, noch nicht an einem echten Trackpad.
- {{cmd:PEDIT}} hat keine Option Eckpunkt bearbeiten (Griffe oder Eigenschaften verwenden). Versetzen, Stutzen, Dehnen, Abrunden, Brechen und Verbinden nehmen Splines noch nicht an; die Höhe (Z) eines Splines bleibt nicht erhalten.
- Neuem Absatztext können noch keine Formatierungscodes gegeben werden, und SVG-Plots zeigen formatierten Text in einer Farbe.
- Die Option Ganze Zeichnung von WBLOCK schreibt nur das Modell, nicht die Blätter. Der aktuelle Bemaßungsstil wird nicht in der Datei gespeichert: Eine Zeichnung öffnet mit Standard als aktuellem.
- Die Menüband-Stile haben noch keine Listen für Layer, Farbe oder Linientyp: den Bereich {{ui:Layer}} und {{ui:Eigenschaften}} verwenden.
- Punktwolken werden weiterhin nicht in der Zeichnung gespeichert oder geplottet, und E57-Dateien öffnen bis zu 6 Millionen Punkte und 512 MB.
- Die von CadCraft gespeicherten DWG-Dateien wurden noch nicht in AutoCAD selbst geprüft.

Alles Weitere steht unter [Noch nicht vorhanden](topic:not-built-yet).
