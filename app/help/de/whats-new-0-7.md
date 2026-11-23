---
title: Neuigkeiten in 0.7 (früher)
summary: PDF-Unterlagen und PDF-Import, gescannte Zeichnungen mit automatischer Nachzeichnung, echte Splines mit SPLINE, SPLINEDIT und PEDIT, ein Bemaßungsstil-Manager, Text, der seine Formatierung behält, WBLOCK und eigene Maßstäbe, 3D-Volumenkörper aus anderen Programmen, Scans registrieren, ein Laser-Bereich, USD-Export, Verlauf und Drucken in CadCraft Studio, eine geführte erste Zeichnung, die Symbolleiste an jeder Seite oder in weniger Zeilen und mehr für KI-Assistenten.
keywords: neuigkeiten 0.7, frühere version, versionshinweise, änderungsprotokoll, änderungen, 0.7, version, neue funktionen, pdf, pdfattach, pdfimport, unterlage, scan, scanattach, scantrace, nachzeichnung, raster, rastersnap, spline, splinedit, pedit, dimstyle, dimedit, dimtedit, mtext, formatierung, wblock, scalelistedit, maßstabsliste, acis, 3d-volumenkörper, registerscans, scans registrieren, icp, e57, las, laser, grbl, g-code, usd, usdout, verlauf, versionen, vergleichen, drucken, drucker, png, svg, plotstil, linientyp, tour, spickzettel, befehlsübersicht, position der symbolleiste, symbolleistenzeilen, toolbardock, regen, regenall, trackpad, wischen, codepage, kyrillisch, koreanisch, chinesisch, japanisch, elektro, rcd, p&id, pid, acad.lsp, acaddoc.lsp, unterstützungsordner, assistenten, mcp, einheiten, portugiesisch
from: d9a8ea79
---

Dies hat sich in CadCraft 0.7 gegenüber 0.6 geändert. Vieles davon wurde auf Discord gewünscht. Die Liste ist nach Bereichen gruppiert, mit dem Wichtigsten zuerst.

## Neu

### PDFs und gescannte Zeichnungen

- **Eine PDF-Seite unter die Zeichnung legen.** {{cmd:PDFATTACH}} (`PDFATT`) platziert eine Seite in ihrer wahren Größe oder in einem Maßstab, den Sie eingeben. An ihren Linien fangen, ausblenden, schwarzweiß machen ({{cmd:PDFADJUST}}), beschneiden ({{cmd:PDFCLIP}}) und die eigenen Layer des PDFs umschalten ({{cmd:PDFLAYERS}}). Sie wird als Linien, Füllungen und Text geplottet, und eine DWG oder DXF 2000 behält sie als Verknüpfung zur Datei. Wenn Sie ein PDF mit {{ui:Open}} öffnen, wird gefragt, ob Sie es anhängen oder importieren möchten. Siehe [PDF-Unterlagen und PDF-Import](topic:pdf-underlay).
- **Eine PDF-Seite in Zeichnungsobjekte verwandeln.** {{cmd:PDFIMPORT}} (`PDFIM`) erzeugt Linien, Polylinien, Kreise, Bögen, Vollflächen-Schraffuren und Text auf Layern, die nach dem PDF benannt sind, in wahrer Größe, einem eingegebenen Maßstab oder skaliert aus zwei Punkten und einer realen Strecke, in einem Rückgängig-Schritt. Siehe [Eine Seite importieren](topic:pdf-underlay#import-a-page).
- **Gescannte Zeichnungen.** {{cmd:SCANATTACH}} holt eine PNG-, JPEG- oder TIFF-Datei (eine Seite oder alle) oder eine PDF-Seite, die ein Bild ist. Danach skalieren Sie sie aus zwei Punkten ({{cmd:SCANSCALE}}), richten sie aus ({{cmd:SCANALIGN}}), begradigen sie anhand ihrer eigenen langen Linien ({{cmd:SCANDESKEW}}), machen sie schwarzweiß und entfernen Flecken ({{cmd:SCANCLEAN}}), schneiden sie zu und löschen Teile davon. Jeder Schritt ist ein Rückgängig-Schritt, und die Originaldatei bleibt erhalten. Siehe [Gescannte Zeichnungen und die Nachzeichnung](topic:scanned-drawings).
- **Einen Scan in Linien und Bögen nachzeichnen.** {{cmd:SCANTRACE}} zeichnet die Linien des Scans als Linien und Bögen auf einen neuen Layer SCAN-TRACE, mit einer Toleranz, die Sie festlegen, und lässt Text und Schraffuren, wie sie sind. Der Bericht sagt, was erzeugt und was belassen wurde. Er ist keine Behauptung, dass das Ergebnis stimmt: Prüfen Sie es am Blatt. {{cmd:RASTERSNAP}} lässt den Objektfang die Enden, Ecken und Kreuzungen des Scans finden. Nichts wird irgendwohin gesendet, und es wird kein trainiertes Modell verwendet. Siehe [Die Nachzeichnung](topic:scanned-drawings#the-trace).

### Zeichnen und Bearbeiten

- **Echte Splines.** {{cmd:SPLINE}} (`SPL`) zeichnet eine Kurve durch Punkte oder aus Kontrollpunkten (Grad 1 bis 5), mit Endtangenten. {{cmd:SPLINEDIT}} (`SPE`) verschiebt, ergänzt und löscht Anpassungs- oder Kontrollpunkte, legt Gewichte fest, öffnet, schließt, kehrt um oder macht aus einem Spline eine Polylinie. Splines aus DWG- und DXF-Dateien öffnen sich als Splines, und DWG- und DXF-2000-Dateien speichern sie als Splines. Siehe [Splines und Polylinien](topic:splines).
- **PEDIT.** {{cmd:PEDIT}} (`PE`) schließt und öffnet Polylinien, verbindet Linien und Bögen mit ihnen, legt eine einheitliche Breite fest, passt eine Kurve durch die Eckpunkte oder einen Spline entlang ihnen an und nimmt sie mit Decurve zurück, kehrt um und bearbeitet mehrere auf einmal. Siehe [Eine Polylinie bearbeiten](topic:splines#edit-a-polyline).
- **WBLOCK.** {{cmd:WBLOCK}} (`W`) schreibt einen Block, einige Objekte oder die ganze Zeichnung in eine neue DWG oder DXF, die nur die Layer, Stile und Blöcke enthält, die sie verwenden. Siehe [Einen Block oder Objekte in eine eigene Datei schreiben](topic:blocks#write-a-block-or-objects-to-a-file-of-their-own).
- **REGEN und REGENALL.** {{cmd:REGEN}} (`RE`) zeichnet die aktuelle Registerkarte aus der Zeichnung neu, {{cmd:REGENALL}} (`REA`) jede Registerkarte, jeden Bereich und jede offene Zeichnung. Siehe [REGEN und REGENALL](topic:commands#regen-and-regenall).

### Text und Bemaßungen

- **Text behält seine Formatierung.** Absatztext aus anderen Programmen behält Farben je Wort, Fett und Kursiv, Unterstreichung, gestapelte Brüche und Höhen. Er wird auf dem Bildschirm und in PDFs gezeichnet, bleibt erhalten, wenn Sie die Wörter bearbeiten, und wird zurückgespeichert. Siehe [Formatierung in Absatztext aus anderen Programmen](topic:text#formatting-inside-paragraph-text-from-other-programs).
- **Ein Bemaßungsstil-Manager.** {{cmd:DIMSTYLE}} (`D`) erstellt, ändert, vergleicht und wendet benannte Bemaßungsstile an. Das Ändern eines Stils ändert jede Bemaßung, die ihn verwendet. {{cmd:DIMEDIT}} (`DED`) setzt Text in seine Standardlage zurück, tippt neuen Text ein, dreht ihn oder neigt die Maßhilfslinien. {{cmd:DIMTEDIT}} verschiebt den Text nach links, rechts oder in die Mitte. Siehe [Benannte Bemaßungsstile](topic:dimension-settings#named-dimension-styles).
- **Eigene Maßstäbe.** {{cmd:SCALELISTEDIT}} (`SCALELIST`) ergänzt Maßstäbe wie 1:75 in den Listen für Ansichtsfenster- und Plotmaßstäbe. Sie werden in der Zeichnung gespeichert (DWG und DXF 2000), und eine Zeichnung aus einem anderen Programm bringt ihre eigene Liste mit. Siehe [Maßstäbe](topic:units-papers-scales#scales).
- **Text in anderen Schriftsystemen.** DXF-Dateien mit kyrillischen, koreanischen, chinesischen, japanischen oder vietnamesischen Codepages öffnen sich jetzt mit ihrem Text. Chinesischer, japanischer und koreanischer Text wird in PDFs gedruckt (der Plot holt beim ersten Bedarf eine größere Schrift). Siehe [Schrift](topic:text#font).

### Plotten und Drucken

- **Mehr in Plotstiltabellen.** Für jede Farbe kann eine Tabelle jetzt auch einen Linientyp, das Linienende und den Linienübergang festlegen sowie einen Füllstil, der Vollflächen als Schraffurlinien druckt. Die Tabelle hat eine eigene Liste der Linienstärken und einen Linientypfaktor. Siehe [Plotstiltabellen](topic:plot-pdf#plot-style-tables).
- **Drucken sowie PNG- und SVG-Dateien.** Der Dialog Plotten hat {{ui:Print…}}, {{ui:Download PNG}} (300 dpi) und {{ui:Download SVG}}. In CadCraft Studio listet er die Drucker des Computers, deren Papier und die Anzahl der Kopien. Siehe [Drucken](topic:plot-pdf#print) und [Bild- und SVG-Dateien](topic:plot-pdf#picture-and-svg-files).

### 3D und Punktwolken

- **3D-Volumenkörper aus anderen Programmen.** Volumenkörper, Regionen und Körper im Modellbereich einer Zeichnung erscheinen auf der 3D-Registerkarte, nur zum Lesen. Beim Speichern als DWG werden sie unverändert zurückgeschrieben. Flächen auf Oberflächen, die CadCraft noch nicht zeichnet, werden aufgelistet, nicht geraten. Siehe [Volumenkörper aus anderen Programmen](topic:3d-solids#solids-from-other-programs).
- **Mehrere Scans registrieren.** {{cmd:REGISTERSCANS}} (`REGSCAN`) setzt Scans, die von verschiedenen Standorten gemacht wurden, in einen gemeinsamen Rahmen, über Punktpaare oder eingetippte Zielkoordinaten. Es verfeinert sie mit ICP, speichert die Registrierung als kleine Projektdatei und schreibt die registrierte Wolke als eine LAS- oder E57-Datei. Siehe [Mehrere Scans zu einem registrieren](topic:register-scans).
- **USD-Export.** {{cmd:USDOUT}} oder {{cmd:EXPORT3D}} › {{ui:USD}} schreibt die Volumenkörper der 3D-Registerkarte als `.usda`, `.usdc` oder `.usdz`. Siehe [3D-Modell als USD exportieren](topic:usd).
- **Berechnungen auf der 3D-Registerkarte.** Wo die Werkzeuge der 3D-Registerkarte nach einer Strecke fragen, können Sie eine Berechnung eintippen, wie in der Befehlszeile. Siehe [Rechnen in einem eingetippten Wert](topic:coordinate-entry#arithmetic-in-a-typed-value).

### Herstellen

- **Eine Zeichnung an einen Laser senden.** {{cmd:LASER}} oder {{ui:View}} › {{ui:More}} › {{ui:Laser…}} öffnet einen Bereich über der Zeichnung. Jeder Layer wird geschnitten, geritzt, mit Linien graviert, füllt Formen, graviert ein Bild oder wird nicht gesendet, jeweils mit Leistung, Geschwindigkeit und Durchgängen. Die Vorschau folgt Ihren Änderungen, {{ui:Save G-code…}} schreibt GRBL-Lasermodus-G-Code, und in Chrome oder Edge kann der Bereich den Auftrag umrahmen und über USB senden. Die Einstellungen werden in der Zeichnung gespeichert (DWG und DXF). Siehe [Eine Zeichnung an einen Laser senden](topic:laser-cutting).
- **Elektrische Installationssymbole im Add-on Elektro.** Daten-, Telefon- und TV-Anschlüsse, Schlüssel- und Zeitschalter, ein Thermostat, Notausgangsschild, Melder, Handfeuermelder und Signalgeber, ein Lüfter, Warmwasserbereiter, Herd, Ladepunkt für Elektrofahrzeuge, Energiezähler und Unterverteilung sowie RCD- und RCBO-Symbole. Ein Stromkreis kann einen RCD tragen, der Verteilerplan hat eine RCD-Spalte, und die Prüfungen benennen Steckdosenstromkreise ohne RCD von 30 mA oder weniger. Es ist eine Planungserinnerung, keine Normprüfung.
- **Ein P&ID-Add-on.** P&ID zeichnet Verfahrensschemata: Symbole mit Anschlusspunkten, Prozess- und Signalleitungen, Kennzeichnungen, Leitungsnummern sowie Listen für Leitungen, Apparate, Messstellen und Ventile (CSV oder eine Arbeitsmappe) und Prüfungen. Es wird mit CadCraft mitgeliefert und ist ausgeschaltet, bis Sie es unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Add-ons}} einschalten. Es ist ein Zeichenhilfsmittel, keine technische Freigabe, und seine Begriffe gibt es vorerst nur auf Englisch.

### Einstieg und Bildschirm

- **Eine geführte erste Zeichnung.** {{cmd:TOUR}} (oder {{ui:Die Tour machen}} auf der Startkarte) führt Sie in sechs Schritten durch die echte Zeichnung: eine Linie, ein Kreis, ein Verschieben, ein Stutzen, ein Löschen und eine Bemaßung. Sie startet von selbst, wenn CadCraft zum ersten Mal ohne Inhalt geöffnet wird. Siehe [Lieber geführt werden?](topic:getting-started#prefer-to-be-guided)
- **Ein Spickzettel und eine Befehlsübersicht.** Der [Spickzettel](topic:cheat-sheet) enthält die 40 gebräuchlichsten Befehle auf einer Seite, auch als PDF zum Drucken. Die [Befehlsübersicht](topic:command-map) listet die Befehle mit ihren Kurznamen von A bis Z.
- **Die Symbolleiste an jeder Seite.** {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Position der Symbolleiste}}: oben (wie zuvor), unten, links oder rechts, oder tippen Sie {{cmd:TOOLBARDOCK}}. Siehe [Position der Symbolleiste](topic:settings#toolbar-position).
- **Symbolleistenzeilen.** {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Symbolleistenzeilen}}: Umbrechen, um zu passen, 2 Zeilen oder 1 Zeile, für die CadCraft-Symbolleiste und die Stile Drafting classic und Menüband. {{key:Shift+Ctrl+F1}} schaltet sie durch, {{key:Ctrl+F1}} durch das, was die Schaltflächen anzeigen. {{cmd:TOOLBARROWS}} und {{cmd:TOOLBAR}} legen sie fest. Der Starthinweis hat eine Schaltfläche zum Schließen. Dank an GJoe2, der dies als Pull-Request eingereicht hat. Siehe [Symbolleistenzeilen](topic:settings#toolbar-rows).

### In CadCraft Studio

- **Verlauf.** {{cmd:HISTORY}} (`HIST`) oder {{ui:Ansicht}} › {{ui:Mehr}} › {{ui:Verlauf…}}: die Kopien, die Studio beim Öffnen und Speichern einer Zeichnung behält, und die Cloud-Versionen der Zeichnung, wenn Sie sie aus der Cloud geöffnet haben. Öffnen oder stellen Sie eine wieder her oder vergleichen Sie zwei. Hinzugefügtes, Entferntes und Geändertes wird farbig angezeigt. Siehe [Verlauf](topic:history).
- **acad.lsp und acaddoc.lsp.** Wählen Sie in {{cmd:APPLOAD}} einen Unterstützungsordner: Diese beiden Dateien werden beim Start von CadCraft geladen (acaddoc.lsp außerdem für jeden neuen Zeichnungs-Tab), und `S::STARTUP` läuft danach. Siehe [Anwendungen laden](topic:load-applications#load-acadlsp-and-acaddoclsp-from-a-support-folder-studio).
- **Der Dialog Plotten in einem eigenen Fenster.** Eine Schaltfläche in seiner Titelleiste verschiebt ihn in ein Fenster, das Sie auf einen anderen Monitor legen können. Siehe [Dialog verschieben](common:arrange-panels#move-a-dialog).

### Für KI-Assistenten

- **Dateien nach Namen, in Ordnern Ihrer Wahl.** In CadCraft Studio kann ein Assistent Dateien über ihren Namen öffnen, speichern und plotten und einem Befehl die Datei übergeben, die er verlangt (INSERT aus einer Datei, der Export von COUNT, SAVEAS, PLOT). Das gilt aber nur innerhalb der Ordner, die Sie unter {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Assistenten}} › {{ui:Ordner, die die Assistenten verwenden dürfen}} hinzufügen. Siehe [Dem Assistenten Dateien in Ordnern Ihrer Wahl erlauben](topic:use-with-ai-assistants#let-it-use-files-in-folders-you-choose).
- **Weniger Aufrufe.** Ein Assistent kann eine ganze Befehlszeile auf einmal eintippen, einen Befehl zwischen seinen Aufrufen offen lassen, Objekte nach Typ und Layer zählen, ohne sie aufzulisten, und einen Block mit seinen Attributwerten in einem Schritt platzieren.
- **Ohne Fenster.** Die Befehlszeile `cadcraft` schreibt SVG-Plots und konvertiert, plottet, prüft oder beschreibt viele Dateien auf einmal. Das MCP-Paket ist noch nicht veröffentlicht. Siehe [Dateien bearbeiten, ohne CadCraft zu öffnen](topic:use-with-ai-assistants#work-on-files-without-opening-cadcraft).

## Geändert

- **Ein Trackpad schwenkt.** Bewegen Sie zwei Finger auf dem Trackpad, und die 2D-Ansicht folgt ihnen. Zusammen- und Auseinanderziehen (Pinch) sowie das Mausrad zoomen. Siehe [Maus, Trackpad und Touch](topic:mouse-trackpad-touch).
- **OLE-Objekte bleiben erhalten.** Eingebettete Objekte einer DXF erscheinen als ihr Bild oder als beschriftete Umrandung und werden von DXF 2000 zurückgespeichert. Die einer DWG bleiben erhalten und werden beim Speichern als DWG zurückgeschrieben, aber noch nicht angezeigt. Vorher gingen sie beim Speichern verloren. Siehe [Objekte aus anderen Programmen (OLE)](topic:pictures#objects-from-other-programs-ole).
- **Die Einheiten einer neuen Zeichnung** richten sich nach der Einheit, die Sie unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} mit dem Stern markiert haben.

## Behoben

- Layouts, die leer öffneten oder ein Ansichtsfenster verloren und an dessen Stelle das ganze Modell zeigten, öffnen sich jetzt mit ihren echten Ansichtsfenstern. Ein Layout ohne Verbindung zu seinem Inhalt bleibt erhalten, und der Öffnungsbericht sagt es.
- DXF-Dateien in älteren Codepages zeigten verzerrten kyrillischen und koreanischen Text. Sie werden jetzt richtig gelesen.
- Absatztext aus anderen Programmen verlor beim Öffnen seine Formatierung und wurde beim Speichern als einfacher Text zurückgeschrieben.

## In jeder App

- **Einheiten.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Einheiten}} hat je eine Liste für Länge, Fläche, Volumen, Winkel und Neigung, mit den genauen Größen aus den Definitionen der Einheiten (der US-Survey-Fuß ist eine eigene Einheit). Schalten Sie Einheiten aus, die Sie nie verwenden, und sie verschwinden aus den Listen. Markieren Sie eine, und neue Arbeit beginnt darin. Eine Datei behält immer ihre eigene Einheit. In CadCraft setzt die Markierung die Einheiten einer neuen Zeichnung, wenn es eine Einheit ist, die eine Zeichnung tragen kann. Das eigene Feld {{ui:Einheiten}} von CadCraft folgt den Schaltern noch nicht. Sobald eine Zeichnung Einheiten hat, kann eine Länge, die Sie eintippen, das Kürzel jeder Einheit tragen. Siehe [Einheiten, eingetippte Werte und die Einheitenlisten](common:unit-lists).
- **Ein dichteres Layout und Bereiche, die sich wegräumen.** {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Layoutdichte}} › {{ui:Kompakt}} passt mehr auf den Bildschirm (Touchscreens und Telefone behalten ihre großen Schaltflächen). Jeder Seitenbereich hat eine schmale Titelleiste: Ziehen Sie sie, um den Bereich anzudocken oder zu lösen. Legen Sie ihn auf die Leiste eines anderen Bereichs, um einen Rahmen mit Registerkarten zu teilen. Heften Sie ihn an, damit er zum Rand wegrutscht, oder blenden Sie ihn aus und holen Sie ihn vom Rand zurück. Siehe [Bereiche anordnen](common:arrange-panels#make-the-layout-denser).
- **Dialoge lassen sich verschieben.** Ziehen Sie einen Dialog an seiner Titelleiste aus dem Weg der Zeichnung; er kehrt an die Stelle zurück, an der Sie ihn verlassen haben. Doppelklicken Sie die Titelleiste, um ihn wieder zu zentrieren. Siehe [Dialog verschieben](common:arrange-panels#move-a-dialog).
- **Rezepte für KI-Assistenten.** Zehn ausgearbeitete Anfragen für Ihren eigenen Assistenten (eine Zeichnung aufräumen, einen Satz plotten, Zeichnungen prüfen, einem Modell Fragen stellen, eine Mengenermittlung summieren, eine Bauteilvariante ausprobieren …). Jede nennt die Werkzeuge, die sie aufruft, und die nötigen Berechtigungen, und unsere Tests spielen jede durch. Die Apps enthalten keine KI. Siehe [Rezepte für KI-Assistenten](common:assistants-recipes).
- **Sprachen.** **Português (Portugal)** ist neu unter {{ui:Einstellungen}} › {{ui:Allgemein}} › {{ui:Sprache}}. Sie, **Português (Brasil)**, **Español (México)** und **Bahasa Indonesia** haben jetzt jedes Wort der Apps, als Entwürfe, die noch nicht von einer Person mit dieser Muttersprache geprüft wurden. Hilfethemen sind auf Englisch.
- **CadCraft Studio** nennt den Grund, wenn eine Update-Prüfung fehlschlägt (noch keine Datei für Ihr System, kein Netzwerk, eine ungültige Signatur), statt nur „Fertig“ zu melden. Eine geschlossene Karte „Neuigkeiten“ kommt nicht wieder, bis es eine neuere Version gibt.

## Noch nicht in dieser Version

- **0.7 ist nicht code-signiert.** Die Signierung und das Microsoft-Store-Paket wurden auf 0.8 verschoben, weil die Prüfung des Zertifikats noch nicht abgeschlossen ist. Prüfen Sie den SHA-256-Wert neben jeder Datei auf getcadcraft.com/download. Wenn SmartScreen unter Windows das Installationsprogramm stoppt, wählen Sie {{ui:Weitere Informationen}}, dann {{ui:Trotzdem ausführen}}. Auf einem Mac klicken Sie CadCraft Studio beim ersten Mal mit der rechten Maustaste an und wählen {{ui:Open}}. CadCraft Studio ist noch nicht in einem App-Store, und es gibt noch keine iPad- oder iPhone-Version.
- Die Winkel- und Neigungslisten in {{ui:Einheiten}} werden gespeichert, aber noch kein Feld liest sie.
- Die OLE-Objekte einer DWG bleiben erhalten, werden aber nicht angezeigt, und Metafile-Bilder in OLE-Objekten werden nicht gezeichnet.
- Das Lesen von Plotstiltabellen (CTB-Dateien) aus anderen Programmen wartet auf eine Beispieldatei.
- Ältere asiatische Texte, die als `\M+`-Codes geschrieben sind, werden gelesen, wurden aber noch nicht an einer Datei aus einem anderen Programm geprüft.
- PDF-Unterlagen: Bilder innerhalb der Seite werden auf dem Bildschirm angezeigt, aber nicht geplottet. Der Plot eines Assistenten lässt Unterlagen aus, und wie andere Programme den gespeicherten Ausschnitt und Maßstab lesen, wurde in ihnen nicht geprüft.
- Verlauf: CadCraft sendet seine Speicherungen noch nicht in die Cloud. Die Cloud-Versionen sind daher die, die auf anderen Geräten und im Web gespeichert wurden. Der Verlauf gibt es nur in CadCraft Studio.
- Ob Studio den Unterstützungsordner acad.lsp nach einem Neustart behält, wurde noch nicht geprüft. Fragt es, wählen Sie den Ordner in APPLOAD erneut.
- Der Laser-Bereich wurde noch nicht an einem echten Laser getestet: Prüfen Sie jede Einstellung an Abfallmaterial. CadCraft Studio hat kein Web Serial, daher speichert der Bereich in Studio nur G-Code.
- Die Registrierung von Scans wurde mit erfundenen Scans getestet, noch nicht mit dem Satz eines echten Scanners.
- Zwei-Finger-Schwenken wurde mit simulierten Trackpad-Ereignissen getestet, noch nicht an einem echten Trackpad.
- {{cmd:PEDIT}} hat keine Option Scheitelpunkt bearbeiten (verwenden Sie die Griffe oder die Eigenschaften). Versatz, Stutzen, Dehnen, Abrunden, Brechen und Verbinden nehmen noch keine Splines an. Die Höhe (Z) eines Splines bleibt nicht erhalten.
- Neuer Absatztext kann noch keine Formatierungscodes erhalten, und SVG-Plots zeigen formatierten Text in einer Farbe.
- WBLOCKs „Gesamte Zeichnung“ schreibt nur das Modell, nicht die Blätter. Der aktuelle Bemaßungsstil wird nicht in der Datei gespeichert: Eine Zeichnung öffnet sich mit Standard als aktuellem Stil.
- Die Menüband-Stile haben noch keine Listen für Layer, Farbe oder Linientyp. Verwenden Sie dafür den Bereich {{ui:Layers}} und {{ui:Properties}}.
- Punktwolken werden noch nicht in der Zeichnung gespeichert oder geplottet, und E57-Dateien öffnen sich bis zu 6 Millionen Punkten und 512 MB.
- Die von CadCraft gespeicherten DWG-Dateien wurden noch nicht in AutoCAD selbst geprüft.

Alles Übrige steht unter [Noch nicht umgesetzt](topic:not-built-yet).
