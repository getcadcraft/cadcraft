---
title: Umstieg von anderer Zeichensoftware
summary: Wie vertraute Befehle, Tasten und Gewohnheiten auf CadCraft abgebildet werden und welche Unterschiede erfahrene Zeichner stolpern lassen.
keywords: Umstieg, Unterschiede, migrieren, Gewohnheiten, Aliase, dynamische Eingabe, pickfirst, pickadd, qsave, saveas, speichern unter, mtext, ctb, Polarspur, xref, Tastenkürzel, vertraut, copyclip, pasteclip, pasteorig, copybase, Zwischenablage
from: b58688e7
---

Wenn Sie AutoCAD oder ein Programm auf derselben Grundlage verwendet haben, funktioniert hier das meiste, was Sie kennen: die Befehlszeile, Aliase wie `L`, `C`, `TR` und `O`, Enter oder Space zum Wiederholen, Fenster- und Kreuzauswahl, Objektfang auf F3, Ortho auf F8, Modellbereich mit Layouts und Ansichtsfenstern. Diese Seite zeigt, was direkt übereinstimmt, und danach die Unterschiede, über die Menschen stolpern. Lesen Sie die zweite Hälfte auch dann, wenn Sie die erste nur überfliegen.

## Was direkt übereinstimmt

| Gewohnheit | In CadCraft |
|---|---|
| `L`, `PL`, `C`, `A`, `REC`, `POL`, `EL`, `PO`, `T`, `DT` | Gleiche Befehle, gleiche Aliase |
| `M`, `CO`, `RO`, `SC`, `MI`, `O`, `TR`, `EX`, `F`, `X`, `E` | Gleich |
| `DLI`, `DAL`, `DAN`, `DRA`, `DDI`, `DCO`, `DBA` | Gleiche Bemaßungsbefehle |
| `DIMSCALE`, `DIMTXT`, `DIMASZ`, `DIMDEC`, `DIMGAP`, `DIMEXE`, `DIMEXO` in der Befehlszeile eingegeben | Gleich, für neue Bemaßungen |
| `B` zum Erstellen eines Blocks, `I` zum Einfügen, `PU` zum Bereinigen | Gleich (Bereinigen entfernt nur nicht verwendete Blöcke) |
| `LAYOUT`, `MV`, `PLOT`, `DI`, `ID`, `LI`, `Z` dann `E` oder `W` | Gleich |
| `_LINE` oder `-LAYER` aus einem Skript oder aus Gewohnheit eingeben | Ein führendes `_`, `-`, `.` oder `'` wird ignoriert |
| Enter oder Space bei einer leeren Eingabeaufforderung wiederholt den letzten Befehl | Gleich |
| Esc bricht ab; ein weiteres Esc hebt die Auswahl auf | Gleich |
| `@dx,dy`, `@d<a`, eingegebene Winkel gegen den Uhrzeigersinn von Osten | Gleich |
| Fenster von links nach rechts, Kreuzen von rechts nach links, Klick-Klick; drücken und ziehen für ein Lasso, Space wechselt zwischen Fenster / Kreuzen / Zaun (LASSOMODE) | Gleich |
| Zuerst wählen, dann den Befehl (Substantiv-Verb) | Gleich; ein abgeschlossener Befehl hebt die Auswahl auf |
| `ALL` und `L` bei Objekte wählen | Gleich |
| Shift+Klick entfernt aus der Auswahl | Gleich. Einstellungen können bewirken, dass ein Klick die Auswahl stattdessen ersetzt, wie PICKADD 0 es tut: siehe [CadCraft-Einstellungen](topic:settings) |
| Ctrl+C, Ctrl+X, Ctrl+V, Ctrl+Shift+V (COPYCLIP, CUTCLIP, PASTECLIP, PASTEORIG), COPYBASE | Gleiche Befehle und Tasten; beim Einfügen wird die Kopie an ihrer unteren linken Ecke platziert, wie PASTECLIP es tut |
| F3 Objektfang, F7 Raster, F8 Ortho | Gleiche Tasten |
| Doppelklick auf das Rad für Zoom Grenzen | Gleich |
| Gespiegelter Text bleibt lesbar | Gleich (wie bei MIRRTEXT 0) |
| Ctrl+Z, Ctrl+Y, Ctrl+S, Ctrl+O, Ctrl+P, Ctrl+A | Gleich; auf dem Mac funktioniert auch Command |

Die [Befehlsreferenz](topic:commands) listet jeden Befehl und Alias.

:::tip
Wenn Ihnen das Menüband von AutoCAD gefällt, wählen Sie den Menüstil {{ui:Klassisches Zeichnen}} unter {{ui:Einstellungen}} › {{ui:CadCraft}} › {{ui:Menüs, Tasten und Maus}}: Registerkarten Start, Einfügen, Beschriften, Parametrisch, Ansicht, Verwalten und Ausgabe über derselben Befehlszeile; die mittlere Taste macht Pan, und ein Rechtsklick ist Enter. Siehe [Menüs, Tasten und Maus](topic:menus-keys-and-mouse).
:::

Die [Befehlsübersicht](topic:command-map) listet jeden Befehl von CadCraft mit seinen Kurznamen, und das [Spickblatt](topic:cheat-sheet) die 40, die Sie am häufigsten brauchen (auch als einseitige PDF).

## Unterschiede, über die Menschen stolpern

### Eingegebene Punkte sind absolut

Bei eingeschalteter dynamischer Eingabe behandelt das andere Programm ein eingegebenes `100,0` für einen zweiten Punkt als relativ. **Die Befehlszeile von CadCraft tut das nicht:** dort wird `x,y` immer vom Ursprung aus gemessen. Ist {{ui:DYN}} ({{key:F12}}) eingeschaltet, verwenden Sie stattdessen seine Felder: Abstand, {{key:Tab}}, Winkel. Verwenden Sie `@100,0` für „100 rechts vom letzten Punkt“, oder bewegen Sie das Fadenkreuz in die richtige Richtung und geben nur `100` ein.

### Shift überspringt den Fang; Ortho schaltet es nicht ein

Wenn Sie beim Klicken Shift gedrückt halten, werden Objektfänge für diesen Klick ignoriert. Ortho wird dadurch nicht vorübergehend eingeschaltet. Verwenden Sie F8 oder die Schaltfläche {{ui:Ortho}}.

### Rechtsklick ist immer Enter

Es gibt kein Rechtsklick-Menü. Ein Rechtsklick in der Zeichnung ist Enter: Er beendet einen Befehl, schließt eine Auswahl ab oder wiederholt den letzten Befehl. Während eines Griffverschiebens oder eines Auswahlfensters bricht er stattdessen ab. Ziehen Sie mit der rechten Taste, um Pan auszuführen.

### Kein Pan mit der Space-Taste

Space ist Enter, daher bewirkt Space-Halten und Ziehen kein Pan. Machen Sie Pan mit der mittleren oder der rechten Taste, oder zoomen Sie mit dem Rad heraus und an einer anderen Stelle wieder hinein.

### Stutzen und Dehnen

Stutzen und Dehnen starten im Schnellmodus: Jedes sichtbare Objekt ist eine Schneidkante oder eine Begrenzung, das Teil unter dem Zeiger zeigt, was entfernt wird, ein gezogener Pfad stutzt jedes Teil, das er kreuzt, und ein Objekt, das nichts kreuzt, wird gelöscht. {{key:Shift}} wechselt zwischen Stutzen und Dehnen. `O` wechselt in den Standardmodus (zuerst die Kanten wählen), `F` und `C` sind Zaun und Kreuzen, `E` ist EDGEMODE, `R` löscht. Es gibt keine Option `P` (Projekt): CadCraft stutzt in der Ebene der Zeichnung.

### Abrunden und Fasen

{{cmd:FILLET}} und {{cmd:CHAMFER}} bieten die Optionen, die Sie kennen: Rückgängig (U), Polylinie (P), Radius (R) (oder Abstand (D), Winkel (A) und Methode (E)), Stutzen (T) und Mehrfach (M), und {{key:Shift}}+Klick für eine scharfe Ecke. Eine Verrundung zwischen einer Polylinie und einer Linie fügt den Bogen als eigenes Objekt hinzu, statt beide zur Polylinie zu verbinden, und Polylinienecken neben einem Bogensegment bleiben, wie sie sind.

### Absatztext und einzeiliger Text

`T`, `MT` und `MTEXT` sind Absatztext, der an Ort und Stelle eingegeben wird, mit Breite, Zeilenabstand und Ausrichtung; `DT` und `DTEXT` sind einzeiliger Text, wie Sie ihn kennen. Es gibt keine Textstile oder Spalten, und Sie können noch keine Formatierung im Text eingeben (fett, gestapelte Brüche); Formatierung, die aus einer Datei kommt, bleibt erhalten, wird gezeichnet und gespeichert (siehe [Text und Beschriftungen hinzufügen](topic:text#formatting-inside-paragraph-text-from-other-programs)). Alles wird in einer Schrift im Stil von Helvetica gezeichnet.

### Speichern heißt „Kopie herunterladen“

{{key:Mod+S}}, `SAVE` und `QSAVE` laden eine Kopie im Format der Zeichnung herunter: Eine geöffnete DWG wird als DWG gespeichert, eine DXF als DXF. Im Browser wird nichts an Ort und Stelle überschrieben, und geöffnete Dateien werden nie verändert. In CadCraft Studio schreibt {{key:Mod+S}} in die Datei zurück, die Sie geöffnet haben.

`SAVEAS` ({{key:Mod+Shift+S}}) ist ein kleiner Dialog, kein Dateibrowser: Wählen Sie {{ui:DWG}} (mit seiner {{ui:Version}}, AutoCAD 2000 bis 2018), {{ui:DXF R12}} oder {{ui:DXF 2000}} und klicken Sie auf {{ui:Speichern}}. Der Browser entscheidet, wohin der Download geht. `DXFOUT` lädt immer DXF R12 herunter.

Eine geöffnete DWG wird in der Version gespeichert, in der sie kam; eine neue Zeichnung wird im Format AutoCAD 2000 gespeichert, sofern Sie kein anderes wählen. Blätter, Bemaßungen und Schraffurmuster bleiben erhalten. Siehe [Dateien: was sich öffnet, was sich speichert](topic:files#saving).

### Layer: einfacher

- Jede Layer-Änderung (ein, frieren, sperren, Farbe, Plotten, Linientyp, Linienstärke, aktueller Layer) ist ein Schritt für Rückgängig.
- Aus und Frieren haben in CadCraft dieselbe Wirkung.
- Layer, die eine Zeichnung in einem Ansichtsfenster friert, bleiben dort gefroren: auf dem Bildschirm, in Plots und wenn Sie sie als DWG oder DXF speichern.
- Ein Ansichtsfenster, das einen Layer mit eigener Farbe, eigenem Linientyp, eigener Linienstärke oder Transparenz zeigt, behält dies auf dem Bildschirm, in Plots und in einer gespeicherten DWG bei (DXF behält die eigenen Einstellungen des Layers; das Speichern weist darauf hin). Das Ändern dieser Werte pro Ansichtsfenster ist noch nicht umgesetzt.
- Es gibt keinen Layer-Eigenschaften-Manager und keine Layer-Zustände; {{cmd:RENAME}}, {{cmd:LAYMRG}} und {{cmd:LAYDEL}} benennen Layer um, führen sie zusammen und löschen sie. Linientypen und Linienstärken werden im rechten Bereich eingestellt (siehe [Linienstärken und Linientypen](topic:units-papers-scales#line-weights-and-linetypes)); {{cmd:LAYISO}}, {{cmd:LAYOFF}}, {{cmd:LAYFRZ}} und {{cmd:LAYMCUR}} arbeiten durch Auswählen.
- Das Speichern als DXF R12 schreibt Layernamen in Großbuchstaben. Eine DWG behält sie so, wie Sie sie eingegeben haben.

### Bemaßungsstile

`DIMSTYLE` öffnet einen Manager für benannte Stile (neu, ändern, aktuell setzen, vergleichen, anwenden). `DIMSCALE` und die anderen Einstellungen ändern weiterhin, was neue Bemaßungen verwenden, und jede Bemaßung behält ihre eigenen Maße, die Sie auch in der Eigenschaften-Palette ändern können. Der aktuelle Stil wird nicht in der Datei gespeichert. Bemaßungen folgen dem Längenformat der Zeichnung (dezimal oder Fuß und Zoll mit {{cmd:UNITS}}) oder ihrem eigenen {{ui:Format}}. Siehe [Bemaßungsmaße festlegen](topic:dimension-settings).

### Plotten ist einfacher

Plotstiltabellen arbeiten nach Farbe, wie CTB-Dateien es tun: Monochrom, Farbe und Graustufen sind eingebaut, Sie können eigene erstellen, und jedes Blatt behält seine Tabelle. Das Lesen von CTB-Dateien beruht auf der veröffentlichten Beschreibung und wurde nur an selbst erstellten Dateien getestet; benannte Plotstiltabellen (STB) und Seiteneinrichtungen sind noch nicht umgesetzt. Linien werden mit ihrer Linienstärke gedruckt, die übrigen mit einer einheitlichen Stiftbreite. Blätter werden im Maßstab 1:1 auf ihrem eigenen Papier geplottet; das Modell wird in einem gewählten oder eingepassten Maßstab geplottet. Siehe [In PDF plotten](topic:plot-pdf).

### Im Ansichtsfenster arbeiten

Wie Sie es kennen: Doppelklicken Sie in einem Ansichtsfenster (oder geben Sie {{cmd:MSPACE}} ein), um über es am Modell zu arbeiten, und doppelklicken Sie außerhalb (oder {{cmd:PSPACE}}), um zum Blatt zurückzukehren. Innen ändern Pan und Zoom, was das Ansichtsfenster zeigt, sofern seine Anzeige nicht gesperrt ist; sonst verschieben sie das Blatt. Ein Klick auf eine Registerkarte unter der Zeichnung verlässt das Ansichtsfenster ebenfalls. Siehe [Am Modell über ein Ansichtsfenster arbeiten](topic:sheets-and-viewports#work-on-the-model-through-a-viewport).

### Spur und dynamische Eingabe ja, Rasterfang noch nicht

Das Raster dient nur der Ansicht; Punkte rasten nicht darauf ein (es gibt keinen Fangmodus F9). Polarspur ({{key:F10}}, Schritt eingestellt mit {{cmd:POLARANG}}) und Objektfangspur ({{key:F11}}: auf einem Fangpunkt verweilen, um ihn zu erfassen) funktionieren wie Sie es kennen; siehe [An Objekte fangen](topic:object-snaps#polar-tracking). Die dynamische Eingabe ({{key:F12}}) zeigt Abstand und Winkel (oder X und Y) am Fadenkreuz; siehe [Koordinaten- und Abstandseingabe](topic:coordinate-entry#dynamic-input).

### Fuß und Zoll

Wählen Sie {{ui:Längenformat}} {{ui:Architektur}} oder {{ui:Ingenieur}} (oder geben Sie {{cmd:UNITS}} ein) und geben Sie Längen wie gewohnt ein: `12'6"`, `12'6-1/2"`. Verwenden Sie vor einem Bruch einen Bindestrich statt eines Leerzeichens: {{key:Space}} ist {{key:Enter}}. Stellen Sie auch {{ui:Einheiten}} auf {{ui:Zoll}}, damit Blätter und Plots Architekturmaßstäbe anbieten. Das Format bleibt in gespeicherten DWG- und DXF-Dateien erhalten. Siehe [Fuß und Zoll](topic:units-papers-scales#feet-and-inches-and-fractions).

### Kopieren und Einfügen bleibt in CadCraft

{{key:Mod+C}}, {{key:Mod+X}} und {{key:Mod+V}} kopieren, ausschneiden und einfügen Objekte innerhalb einer Zeichnung, zwischen Zeichnungen und zwischen CadCraft-Registerkarten im selben Browser. Die Zwischenablage gehört CadCraft: Sie können CadCraft-Objekte nicht in ein anderes Programm einfügen oder Objekte aus einem anderen Programm in CadCraft. Beim Einfügen aus einer Zeichnung mit anderen Einheiten wird nicht neu skaliert: Verwenden Sie danach {{cmd:SCALE}}. {{key:Mod+D}} ist ein Duplizieren, das sich mit dem Zeiger bewegt, eine Ergänzung von CadCraft. Siehe [Kopieren, Einfügen und Duplizieren](topic:copy-paste).

### Browsertasten, die Sie nicht verwenden können

Eine Webseite kann {{key:Mod+N}}, {{key:Mod+W}} oder {{key:Mod+T}} nicht vom Browser übernehmen: Sie öffnen und schließen Fenster und Registerkarten. Verwenden Sie die Schaltfläche {{ui:Neu}} oder geben Sie `NEW` ein. Siehe [Tasten, Mäuse und Trackpads](common:keys).

## Befehle, die Sie vielleicht suchen und die hier noch fehlen

{{cmd:TABLE}} ist noch nicht umgesetzt. Eingeben zeigt „Unbekannter Befehl“. ({{cmd:PEDIT}}, {{cmd:SPLINE}}, {{cmd:SPLINEDIT}} und {{cmd:XREF}} sind umgesetzt.) [Noch nicht umgesetzt](topic:not-built-yet) listet auf, was Sie stattdessen heute tun können.
